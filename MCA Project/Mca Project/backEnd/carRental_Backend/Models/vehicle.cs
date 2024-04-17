using System.ComponentModel.DataAnnotations;

namespace carRental_Backend.Models
{
    public class vehicle
    {
        [Key]
        public int VehicleNo { get; set; }
        public string VehicleModel { get; set; }
        public string VehicleMaker { get; set;}
        public int RentalCost { get; set; }
        public Boolean Avaialblity { get; set; }

    }
}
