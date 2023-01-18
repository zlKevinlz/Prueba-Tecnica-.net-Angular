using System.ComponentModel.DataAnnotations;

namespace PruebaBackend.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        public string? Username { get; set; }

        public string? Password { get; set; }

        public DateTime? Date_created { get; set; }

    }
}
