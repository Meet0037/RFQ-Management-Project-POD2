using Microsoft.EntityFrameworkCore;

namespace RFQMicroservice.Models
{
    public class Dbcontext : DbContext
    {
        public Dbcontext(DbContextOptions<Dbcontext> options) : base(options)
        {
        }
        public DbSet<Rfq> RFQ { get; set; }
        public DbSet<Supplier> SUPPLIER { get; set; }



    }
}
