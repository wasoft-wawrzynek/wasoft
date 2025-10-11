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
            logger.LogInformation($"Sending message from {contactForm.Email} via SendGrid...");
            var client = new SendGridClient(mailConfig.Value.ApiKey);
            var message = CreateMessage(contactForm);

            var response = await client.SendEmailAsync(message);
            if (!response.IsSuccessStatusCode)
            {
                var content = await response.Body.ReadAsStringAsync();
                logger.LogError("SendGrid responded with a non-success status ({Code}). Content:\n{Content}", response.StatusCode, content);
                return false;
            }

            return true;
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Something went wrong, when sending SendGrid of this content: {ContactData}", contactForm);
            return false;
        }
    }

    private SendGridMessage CreateMessage(ContactFormData contactForm)
    {
        var mail = MailHelper.CreateSingleTemplateEmail(
            from: new EmailAddress(mailConfig.Value.FromEmail, mailConfig.Value.FromName),
            to: new EmailAddress(mailConfig.Value.ToEmail, mailConfig.Value.ToName),
            templateId: mailConfig.Value.TemplateId,
            dynamicTemplateData: new
            {
                date = DateTime.UtcNow.ToString("dd'/'MM'/'yyyy HH:mm"),
                company = contactForm.Company,
                name = contactForm.Name,
                email = contactForm.Email,
                message = contactForm.Message.ReplaceLineEndings("<br>")
            });
        mail.ReplyTo = new EmailAddress(contactForm.Email);
        return mail;
    }
}
