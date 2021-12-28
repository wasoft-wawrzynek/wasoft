using Microsoft.Extensions.Logging;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Threading.Tasks;

namespace WaSoft.Api.ContactForm
{
    internal class MailSender
    {
        private readonly MailSettings _settings;
        private readonly ILogger _logger;

        public MailSender(MailSettings settings, ILogger logger)
        {
            _settings = settings;
            _logger = logger;
        }

        public async Task<bool> SendAsync(ContactFormData contactForm)
        {
            try
            {
                var client = new SendGridClient(_settings.ApiKey);
                var message = CreateMessage(contactForm);

                _logger.LogInformation("Message successfully created, requesting SendGrid to process it...");
                var response = await client.SendEmailAsync(message);
                if (!response.IsSuccessStatusCode)
                {
                    var content = await response.Body.ReadAsStringAsync();
                    _logger.LogError($"SendGrid responded with a non-success status ({response.StatusCode}). Content:\n{content}");
                    return false;
                }

                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong, when preparing contact message: {ex.Message}\n\nContact form data:\n{contactForm}");
                return false;
            }
        }

        private SendGridMessage CreateMessage(ContactFormData contactForm)
        {
            contactForm.Date = DateTime.UtcNow.ToString("dd'/'MM'/'yyyy HH:mm");
            contactForm.Message = contactForm.Message.ReplaceLineEndings("<br>");

            var from = new EmailAddress(_settings.FromEmail, _settings.FromName);
            var to = new EmailAddress(_settings.ToEmail, _settings.ToName);

            var mail = MailHelper.CreateSingleTemplateEmail(from, to, _settings.TemplateId, contactForm);
            mail.ReplyTo = new EmailAddress(contactForm.Email);
            return mail;
        }
    }
}
