using Newtonsoft.Json;

namespace WaSoft.Api.ContactForm
{
    internal class ContactFormData
    {
        [JsonProperty(PropertyName = "date")]
        public string Date { get; set; }

        /// <summary>
        /// The company the sender represents
        /// </summary>
        /// 
        [JsonProperty(PropertyName = "company")]
        public string Company { get; set; }

        /// <summary>
        /// Name of the sender
        /// </summary>
        /// 
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }

        /// <summary>
        /// E-mail address to send a response to
        /// </summary>
        /// 
        [JsonProperty(PropertyName = "email")]
        public string Email { get; set; }

        /// <summary>
        /// Content of the message
        /// </summary>
        [JsonProperty(PropertyName = "message")]
        public string Message { get; set; }

        public override string ToString() => $"From: {Name} ({Company}) <{Email}>\nMessage: {Message}";
    }
}
