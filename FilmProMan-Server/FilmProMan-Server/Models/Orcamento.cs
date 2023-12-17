using System.ComponentModel.DataAnnotations;

namespace FilmPro_Server.Models
{
    public class Orcamento
    {
        [Key]
        public int Id { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataInicioServico { get; set; }
        public DateTime DataFinalServico { get; set; }
        public Cliente? Cliente { get; set; }
        public int? ClienteId { get; set; }
        public Endereco? Endereco { get; set; }
        public int? EnderecoId { get; set; }
        public Pelicula? Pelicula { get; set; }
        public int? PeliculaId { get; set; }
        public float Largura { get; set; }
        public float Altura { get; set; }
        public float Valor { get; set; }
        public string FormaPagamento { get; set; }
    }
}
