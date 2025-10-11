using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;
using WaSoft.Api.Dto;
using MailSettings = WaSoft.Api.Options.MailSettings;

namespace WaSoft.Api.Services;

public interface IMailSender
{
    Task<bool> SendAsync(ContactFormData contactForm);
}

public class MailSender(ILogger<MailSender> logger, IOptions<MailSettings> mailConfig) : IMailSender
{
    public async Task<bool> SendAsync(ContactFormData contactForm)
    {
        try
        {
            var client = new SendGridClient(mailConfig.Value.ApiKey);
            var message = CreateMessage(contactForm);

            logger.LogInformation("Message successfully created, requesting SendGrid to process it...");
            var response = await client.SendEmailAsync(message);
            if (!response.IsSuccessStatusCode)
            {
                var content = await response.Body.ReadAsStringAsync();
                logger.LogError($"SendGrid responded with a non-success status ({response.StatusCode}). Content:\n{content}");
                return false;
            }

            return true;
        }
        catch (Exception ex)
        {
            logger.LogError($"Something went wrong, when preparing contact message: {ex.Message}\n\nContact form data:\n{contactForm}");
            return false;
        }
    }

    private SendGridMessage CreateMessage(ContactFormData contactForm)
    {
        contactForm.Date = DateTime.UtcNow.ToString("dd'/'MM'/'yyyy HH:mm");
        contactForm.Message = contactForm.Message.ReplaceLineEndings("<br>");

        var from = new EmailAddress(mailConfig.Value.FromEmail, mailConfig.Value.FromName);
        var to = new EmailAddress(mailConfig.Value.ToEmail, mailConfig.Value.ToName);

        var mail = MailHelper.CreateSingleTemplateEmail(from, to, mailConfig.Value.TemplateId, contactForm);
        mail.ReplyTo = new EmailAddress(contactForm.Email);
        return mail;
    }
}
