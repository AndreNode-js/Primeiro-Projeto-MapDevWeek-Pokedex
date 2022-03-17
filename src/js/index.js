/*Quando clicar no pokémon  da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos 
1 - listagem
2 - cartão do pokémon
precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokemon

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar 
- remover a classe ativa que marca o pokémon selecionado
- adicionar a classe ativo no item da lista selecionado 

ex. de código:
const nome = "andré"        cria a variável.
console.log(nome)             mostra na tela.

*/
//const { constants } = require("buffer");

 
// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll(' .pokemon')
// teste: console.log(listaSelecaoPokemons)
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
// teste: console.log(pokemonsCard)
/*forEach abaixo serve para inteirar os elementos da lista selecionado um por um por ex e preparando para nós criarmos função*/

/* function soma (n1, n2) {
  console.log(n1 + n2)}*/

  
listaSelecaoPokemons.forEach(pokemon => {
  /*vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem na listagem de pokemon*/
  pokemon.addEventListener('click', () => {
    /*remover a classe aberto só do cartão que está aberto*/
    /* teste: console.log(pokemon)*/
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')
    /*ao clicar em um pokémon da listagem pegamos o id desse pokémon pra saber qual cartão mostrar  */
    const idPokemonSelecionado = pokemon.attributes.id.value
  /* teste: console.log(pokemon.attributes.id.value)*/
   const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
  const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
  cartaoPokemonParaAbrir.classList.add('aberto')  
  // remover a classe ativa que marca o pokémon selecionado
  const pokemonAtivoNaListagem = document.querySelector('.ativo')
  pokemonAtivoNaListagem.classList.remove('ativo')
  // adicionar a classe ativo no item da lista selecionado
  const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
  pokemonSelecionadoNaListagem.classList.add('ativo') 


  })
})



