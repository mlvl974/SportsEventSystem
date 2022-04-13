using Microsoft.EntityFrameworkCore;

namespace CapstoneProject1API.Models
{
    public class MatchContext : DbContext
    {
        public MatchContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Match> Matchs { get; set; }
    }
}
