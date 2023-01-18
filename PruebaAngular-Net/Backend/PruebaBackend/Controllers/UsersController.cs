using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PruebaBackend.Data;
using PruebaBackend.Models;

namespace PruebaBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public UsersController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet("List")]
        public async Task<ActionResult<IEnumerable<User>>> GetUser()
        {
            return await _context.User.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("Get/{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.User.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("Edit/{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Create")]
        public async Task<ActionResult<User>> PostUser(User user)
        {

            if (_context.User.Any(x => x.Username == user.Username))
            {
                return Ok(new
                {
                    message = "Username already exists",
                    status = "400"
                }); ;
            }

            user.Date_created = DateTime.Now;

            _context.User.Add(user);
            await _context.SaveChangesAsync();

            var reponse = new {
                    data= user, 
                    status= 200
                    };

            return CreatedAtAction("GetUser", new { id = user.Id }, reponse);
        }

        // DELETE: api/Users/5
        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.User.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.User.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/Users
        [HttpPost("Login")]
        public OkObjectResult Login( User user )
        {
            if (_context.User.Any(x => x.Username == user.Username && _context.User.Any(x => x.Password == user.Password)))
            {

                return Ok(new
                {
                    message = "User logged",
                    status = "200"
                }); ;

            }

            if (_context.User.Any(x => x.Username == user.Username && _context.User.Any(x => x.Password != user.Password)))
            {

                return Ok(new
                {
                    message = "Incorrect password",
                    status = "400"
                }); ;

            }

            return Ok(new
            {
                message = "This user does not exists",
                status = "400"
            }); ;


        }

        private bool UserExists(int id)
        {
            return _context.User.Any(e => e.Id == id);
        }
    }
}
