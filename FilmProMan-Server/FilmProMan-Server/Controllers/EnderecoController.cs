using Microsoft.AspNetCore.Mvc;
using FilmPro_Server.Models;
using FilmPro_Server.Data;
using Microsoft.EntityFrameworkCore;

namespace FilmPro_Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EnderecoController : ControllerBase
    {
        FilmproDbContext? _context;

        public EnderecoController(FilmproDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Listar")]
        public async Task<ActionResult<IEnumerable<Endereco>>> Listar()
        {
            if (_context.Endereco is null)
                return NotFound();
            return await _context.Endereco.ToListAsync();

        }

        [HttpPost]
        [Route("Inserir")]
        public async Task<IActionResult> Inserir(Endereco endereco)
        {
            try
            {
                await _context.AddAsync(endereco);
                await _context.SaveChangesAsync();
                return Created("", endereco);
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
            var EnderecoTemp = await _context.Endereco.FindAsync(id);

            if (EnderecoTemp is null) return NotFound();
            _context.Endereco.Remove(EnderecoTemp);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
