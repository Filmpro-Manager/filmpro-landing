using System.ComponentModel.DataAnnotations;

namespace FilmPro_Server.Models
{
    public class Endereco
    {
        [Key]
        public int Id { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
        public string Rua { get; set; }
        public int Numero { get; set; }
    }
}
