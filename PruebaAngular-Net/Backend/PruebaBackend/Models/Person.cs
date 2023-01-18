using System.ComponentModel.DataAnnotations;

namespace PruebaBackend.Models
{
    public class Person
    {
        [Key]
        public int Id_person { get; set; }

        public DateTime? Date_created { get; set; }

        public string? fullname { get; set; }

        public string? dni_conc_type { get; set; }

        public string? Names { get; set; }

        public string? Surnames { get; set; }

        public string? DNI { get; set; }

        public string? Email { get; set; }

        public string? DNI_type { get; set; }

    }

}
