using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Threading.Tasks;

namespace WaSoft.Api.ContactForm
{
    public static class ContactFormFunction
    {
        private static ILogger _logger;

        [FunctionName("contactForm")]
        public static async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest request, ILogger logger, ExecutionContext context)
        {
            _logger = logger;

            _logger.LogInformation("New HTTP trigger received.");

            var settings = LoadSettings(context);
            _logger.LogInformation("Settings loaded.");

            var data = await GetFormData(request);
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
                return JsonConvert.DeserializeObject<ContactFormData>(requestBody);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error occured, when parsing contact form data: {ex.Message}");
                return null;
            }
        }
    }
}
