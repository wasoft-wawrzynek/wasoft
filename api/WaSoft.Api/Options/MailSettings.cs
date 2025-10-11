namespace WaSoft.Api.Options;

public class MailSettings
{
    public string ApiKey { get; set; }
    public string TemplateId { get; set; }
    public string FromEmail { get; set; }
    public string FromName { get; set; }
    public string ToEmail { get; set; }
    public string ToName { get; set; }
}
