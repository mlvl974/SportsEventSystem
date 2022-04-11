using CapstoneProject1API.Models;
using CapstoneProject1API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CapstoneProject1API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatchController : ControllerBase
    {
        private readonly IRepo<int, Match> _repo;

        public MatchController(IRepo<int, Match> repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<ActionResult<List<Match>>> GetAll()
        {
            var matchs = await _repo.GetAll();
            return matchs.ToList();
        }
        [HttpPost]
        public async Task<ActionResult<Match>> Post(Match match)
        {
            return await _repo.Add(match);
        }
        [HttpGet]
        [Route("GetMatchByID/{id}")]
        public async Task<ActionResult<Match>> Get(int id)
        {
            return await _repo.Get(id);
        }

        [HttpPut]
        public async Task<ActionResult<Match>> Update(Match match)
        {            
            return await _repo.Update(match);

        }
        [HttpDelete]
        public async Task<ActionResult<Match>> Delete(int id)
        {            
            return await _repo.Delete(id);
        }
    }
}
