using System.ComponentModel.DataAnnotations;

namespace CapstoneProject1API.Models
{
    public class Match
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int Capacity { get; set; }
    }
}
