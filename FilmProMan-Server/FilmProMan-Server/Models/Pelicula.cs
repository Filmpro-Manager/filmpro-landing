using System.ComponentModel.DataAnnotations;

namespace FilmPro_Server.Models
{
    public class Pelicula
    {

        [Key]
        public int Id { get; set; }
        public string TipoPelicula { get; set; }
        public string NomeModelo { get; set; }
        public string Marca { get; set; }
        public string NivelOpacidade { get; set; }
        public bool ProtecaoUv { get; set; }
        public bool ProtecaoTermica { get; set; }
        public string CorTonalidade { get; set; }
        public string Material { get; set; }
        public bool Legislacao { get; set; }
        public float PrecoMetro { get; set; }
    }
}
