using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using WaSoft.Api.Dto;
using WaSoft.Api.Services;

namespace WaSoft.Api.Functions;

public class ContactFormFunction(ILogger<ContactFormFunction> logger, IMailSender sender)
{
    [Function("contact")]
    public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post")] HttpRequestData request)
    {
        logger.LogInformation("Contact form function triggered...");

        var data = await request.ReadFromJsonAsync<ContactFormData>();
        if (data == null)
        {
            return new BadRequestResult();
        }

        logger.LogInformation("Contact form data loaded");

        return await sender.SendAsync(data) ? new OkResult() : new StatusCodeResult(500);
    }
}
