using FilmPro_Server.Data;
using FilmPro_Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FilmPro_Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrcamentoController : ControllerBase
    {

        FilmproDbContext? _context;

        public OrcamentoController(FilmproDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Listar")]
        public async Task<ActionResult<IEnumerable<Orcamento>>> Listar()
        {
            if (_context.Orcamento is null)
                return NotFound();
            return await _context.Orcamento.ToListAsync();

        }

        [HttpPost]
        [Route("Inserir")]
        public async Task<IActionResult> Inserir(Orcamento orcamento)
        {
            try
            {
                await _context.AddAsync(orcamento);
                await _context.SaveChangesAsync();
                return Created("", orcamento);
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
            var OrcamentoTemp = await _context.Orcamento.FindAsync(id);

            if (OrcamentoTemp is null) return NotFound();
            _context.Orcamento.Remove(OrcamentoTemp);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
        
}
