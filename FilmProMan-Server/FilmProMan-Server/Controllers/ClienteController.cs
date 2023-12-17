using Microsoft.AspNetCore.Mvc;
using FilmPro_Server.Models;
using FilmPro_Server.Data;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;


namespace FilmPro_Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : ControllerBase
    {
        FilmproDbContext? _context;

        public ClienteController(FilmproDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Listar")]
        public async Task<ActionResult<IEnumerable<Cliente>>> Listar()
        {
            if (_context.Cliente is null)
                return NotFound();
            return await _context.Cliente.ToListAsync();

        }

        [HttpPost]
        [Route("Inserir")]
        public async Task<IActionResult> Inserir(Cliente cliente)
        {
            try
            {
                await _context.AddAsync(cliente);
                await _context.SaveChangesAsync();
                return Created("", cliente);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        [Route("Excluir/{id}")]
        public async Task<IActionResult> Excluir(int id)
        {
            var ClienteTemp = await _context.Cliente.FindAsync(id);

            if (ClienteTemp is null) return NotFound();
            _context.Cliente.Remove(ClienteTemp);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
