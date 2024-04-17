using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace carRental_Backend.Models
{
    public class user
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Pswd { get; set; }

        public string Contact { get; set; }

        public string AdharNum { get; set; }    

        public string role { get; set; }

    }
}
