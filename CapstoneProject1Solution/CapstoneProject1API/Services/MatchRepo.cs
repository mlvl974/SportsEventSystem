using CapstoneProject1API.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CapstoneProject1API.Services
{

    public class MatchRepo : IRepo<int, Match>
    {
        private readonly MatchContext _context;
        private readonly ILogger<MatchRepo> _logger;

        public MatchRepo(MatchContext context, ILogger<MatchRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Match> Add(Match item)
        {
            try
            {
                _context.Matchs.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception exception)
            {
                _logger.LogError(exception.Message);
                _logger.LogError("----" + DateTime.Now.ToString());
            }
            return null;
        }

        public async Task<Match> Delete(int key)
        {
            try
            {
                var item = await Get(key);
                _context.Matchs.Remove(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception e)
            {
                _logger.LogError("Eror in deleting product");
            }
            return null;
        }

        public async Task<Match> Get(int key)
        {
            try
            {
                var item = _context.Matchs.FirstOrDefault(p => p.Id == key);

                return item;
            }
            catch (Exception e)
            {
                _logger.LogError("Eror in Getting product");
            }
            return null;
        }

        public async Task<ICollection<Match>> GetAll()
        {
            return _context.Matchs.ToList();
        }

        public async Task<Match> Update(Match item)
        {
            try
            {
                //var match = await Get(item.Id);
                //match.Capacity = item.Capacity;
                //match.Name = item.Name;
                //await _context.SaveChangesAsync();
                //return item;
                var match = await Get(item.Id);
                match.TeamA = item.TeamA;
                match.TeamAURL = item.TeamAURL;
                match.Time = item.Time;
                match.TeamB = item.TeamB;
                match.TeamBURL = item.TeamBURL;
                match.Date = item.Date;
                match.Location = item.Location;
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception e)
            {
                _logger.LogError("Eror in updating product");
            }
            return null;
        }
    }

}
