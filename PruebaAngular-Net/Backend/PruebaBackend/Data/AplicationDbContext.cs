using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using PruebaBackend.Models;

namespace PruebaBackend.Data
{
    public class AplicationDbContext : DbContext
    {
        
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Person> Person { get; set; }

        public DbSet<User> User { get; set; }
    }
}
