using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Configuration;
using System.IO;
using System.Threading.Tasks;

namespace WaSoft.Api.ContactForm
{
    public static class ContactFormFunction
    {
        private static ILogger _logger;

        [FunctionName(nameof(ContactFormFunction))]
        public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req, ILogger log, ExecutionContext context)
        {
            _logger = log;

            _logger.LogInformation("New HTTP trigger received.");

            var settings = LoadSettings(context);
            _logger.LogInformation("Settings loaded.");

            var data = await GetFormData(req);
            if (data == null)
            {
                return new BadRequestResult();
            }
            _logger.LogInformation("Contact form data loaded");

            var sender = new MailSender(settings, _logger);
            return await sender.SendAsync(data) ? new OkResult() : new StatusCodeResult(500);
        }

        private static MailSettings LoadSettings(ExecutionContext context)
        {
            var configurationBuilder = new ConfigurationBuilder()
                .SetBasePath(context.FunctionAppDirectory)
                .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
                .AddEnvironmentVariables()
                .Build();

            return configurationBuilder.GetSection("MailSettings").Get<MailSettings>();
        }

        private static async Task<ContactFormData> GetFormData(HttpRequest request)
        {
            try
            {
                string requestBody = await new StreamReader(request.Body).ReadToEndAsync();
                var data = JsonConvert.DeserializeObject<ContactFormData>(requestBody);
                data.Date = DateTime.UtcNow.ToString("dd/MM/yyyy HH:mm");
                return data;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occured, when parsing contact form data: {ex.Message}");
                return null;
            }
        }
    }
}
