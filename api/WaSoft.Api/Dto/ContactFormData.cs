namespace WaSoft.Api.Dto;

public class ContactFormData
{
    /// <summary>
    /// The company the sender represents
    /// </summary>
    /// 
    public string? Company { get; set; }

    /// <summary>
    /// Name of the sender
    /// </summary>
    /// 
    public required string Name { get; set; }

    /// <summary>
    /// E-mail address to send a response to
    /// </summary>
    /// 
    public required string Email { get; set; }

    /// <summary>
    /// Content of the message
    /// </summary>
    public required string Message { get; set; }

    public override string ToString() => $"From: {Name} ({Company}) <{Email}>\nMessage: {Message}";
}
