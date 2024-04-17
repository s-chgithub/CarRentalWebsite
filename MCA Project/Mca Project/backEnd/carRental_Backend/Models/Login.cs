using System.ComponentModel.DataAnnotations;

namespace carRental_Backend.Models
{
    public class Login
    {
        //[Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Pswd { get; set; }
    }
}
