using System.ComponentModel.DataAnnotations;

namespace FilmPro_Server.Models
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public string Email { get; set; }
        public bool Ativo { get; set; }
        public Endereco? Endereco { get; set; }
        public int? EnderecoId { get; set; }
    }
}
