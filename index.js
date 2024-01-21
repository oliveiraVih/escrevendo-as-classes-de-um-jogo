//criaçao da classe para um jogo com as tres propriedades requisitadas
class Heroi{
    constructor(nome, idade, classe){
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
      }

//metodo-atacar utilizando switch-case para atribuir uma classe de personagem seu ataque especifico
atacar() {
    let ataque = "";

    switch (this.classe) {
        case "mago":
            ataque = "magia";
            break;
        case "guerreiro":
            ataque = "uma espada";
            break;
        case "monge":
            ataque = "artes marciais";
            break;
        case "ninja":
            ataque = "shuriken";
            break;
     }

    //exibiçao
    console.log(`O ${this.classe} atacou usando ${ataque}!`)
    }
}
//instancia e objeto em uso
let luffy = new Heroi("Luffy",21,"guerreiro")
luffy.atacar()
