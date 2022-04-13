using System.ComponentModel.DataAnnotations;

namespace CapstoneProject1API.Models
{
    public class Match
    {
        [Key]
        public int Id { get; set; }
        public string TeamA { get; set; }
        public string TeamAURL { get; set; }
        public string Time { get; set; }
        public string TeamB { get; set; }
        public string TeamBURL { get; set; }
        public string Date { get; set; }
        public string Location { get; set; }


    }
}
