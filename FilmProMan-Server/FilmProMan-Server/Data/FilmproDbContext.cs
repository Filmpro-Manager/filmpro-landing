using FilmPro_Server.Models;
using Microsoft.EntityFrameworkCore;

namespace FilmPro_Server.Data
{
    public class FilmproDbContext : DbContext
    {
        public DbSet<Cliente>? Cliente { get; set; }
        public DbSet<Endereco>? Endereco { get; set; }
        public DbSet<Orcamento>? Orcamento { get; set; }
        public DbSet<Pelicula>? Pelicula { get; set; }
        public DbSet<Usuario>? Usuario { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("DataSource=FilmPro.db;Cache=Shared;");
        }
    }
}
