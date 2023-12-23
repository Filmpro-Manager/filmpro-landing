using Microsoft.AspNetCore.Mvc;
using FilmPro_Server.Models;
using FilmPro_Server.Data;
using Microsoft.EntityFrameworkCore;

namespace FilmPro_Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PeliculaController : ControllerBase
    {
        FilmproDbContext? _context;

        public PeliculaController(FilmproDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Listar")]
        public async Task<ActionResult<IEnumerable<Pelicula>>> Listar()
        {
            if (_context.Pelicula is null)
                return NotFound();
            return await _context.Pelicula.ToListAsync();

        }

        [HttpPost]
        [Route("Inserir")]
        public async Task<IActionResult> Inserir(Pelicula pelicula)
        {
            try
            {
                await _context.AddAsync(pelicula);
                await _context.SaveChangesAsync();
                return Created("", pelicula);
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
            var PeliculaTemp = await _context.Pelicula.FindAsync(id);

            if (PeliculaTemp is null) return NotFound();
            _context.Pelicula.Remove(PeliculaTemp);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
