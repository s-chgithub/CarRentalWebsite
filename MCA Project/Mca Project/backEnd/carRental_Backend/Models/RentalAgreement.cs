using System.ComponentModel.DataAnnotations;

namespace carRental_Backend.Models
{
    public class RentalAgreement
    {
        [Key]
        public int AgreementID { get; set; }
        public string Email { get; set; }
        public int Days { get; set; }
        public int VehicleNo { get; set; }
        public string VehicleModel { get; set; }
        public string VehicleMaker { get; set; }
        public int RentalCost { get; set; }
        public Boolean Avaialblity { get; set; }
        public Boolean isPaid { get; set; }
    }
}
