class Lead {
  constructor(nome, email, nomePet, especiePet, motivoContato) {
    this.nome = nome;
    this.email = email;
    this.nomePet = nomePet;
    this.especiePet = especiePet;
    this.motivoContato = motivoContato;
  }

  obterDetalhes() {
    return `Nome: ${this.nome}\nEmail: ${this.email}\nPet: ${this.nomePet}\nEspécie: ${this.especiePet}\nMotivo do Contato: ${this.motivoContato}`
  }
}

function cadastrarLead() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const nomePet = document.getElementById("nomePet").value;
  const especie = document.getElementById("especie").value;
  const motivoContato = document.getElementById("motivoContato").value;

  if (nome === "" || email === "" || nomePet === "" || especie === "" || motivoContato === "") {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  novaLead = new Lead(nome, email, nomePet, especie, motivoContato);
  alert("Olá " + nome + ", coletamos as suas informações e entraremos em contato!\n\n" + novaLead.obterDetalhes());
}
