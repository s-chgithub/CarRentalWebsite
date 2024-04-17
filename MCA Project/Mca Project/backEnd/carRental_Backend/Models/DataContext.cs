using Microsoft.EntityFrameworkCore;

namespace carRental_Backend.Models
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        
        public DbSet<user> Users { get; set; }
        public DbSet<Login> Logins { get; set; }
        public DbSet<vehicle> Vehicles { get; set; }
        public DbSet<RentalAgreement> RentalAgreement { get; set;}
        
    }
}
