using Microsoft.AspNetCore.Mvc;
using FilmPro_Server.Models;
using FilmPro_Server.Data;
using Microsoft.EntityFrameworkCore;

namespace FilmPro_Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        FilmproDbContext? _context;

        public UsuarioController(FilmproDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("Listar")]
        public async Task<ActionResult<IEnumerable<Usuario>>> Listar()
        {
            if (_context.Usuario is null)
                return NotFound();
            return await _context.Usuario.ToListAsync();

        }

        [HttpPost]
        [Route("Inserir")]
        public async Task<IActionResult> Inserir(Usuario usuario)
        {
            try
            {
                var listaUsuarios = await Listar();

                foreach (var user in listaUsuarios.Value)
                {
                    Console.WriteLine(user.Email);
                    if (string.Equals(user.Email, usuario.Email, StringComparison.OrdinalIgnoreCase))
                    {
                        return Conflict("Já existe um usuário com este endereço de e-mail cadastrado na base de dados!");
                    }
                }

                await _context.AddAsync(usuario);
                await _context.SaveChangesAsync();

                return Created("", usuario);
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
            var UsuarioTemp = await _context.Usuario.FindAsync(id);

            if (UsuarioTemp is null) return NotFound();
            _context.Usuario.Remove(UsuarioTemp);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}