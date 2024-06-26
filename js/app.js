// PRIMEIRA LINHA

let formulario = document.getElementById("produto");
let listaProdutos = document.getElementById("lista-produtos");
let total = document.getElementById("valor-total");
let quantidade = document.getElementById('quantidade');

let foneValor = 100;
let celularValor = 1400;
let oculusValor = 5000;
let totalCarrinho = 0;

//Inicialização da página
listaProdutos.innerHTML = `
      <section class="carrinho__produtos__produto">
      <span class="texto-azul">Adicione seus produtos através da lista ao lado</span>
      </section>`;
total.textContent = `R$ 0`

// Função para verificar se contém, apenas para visualizar no console

function encontrar(opcao) {

   for (let i = 0; i < formulario.options.length; i++) {

      let option = formulario.options[i];

      if (option.text.includes(opcao)) {
         console.log(`Achei ${opcao}`);
         break;
      } else {
         console.log("Este produto não existe")
      }
   }
}

// função para adicionar ao carrinho
function adicionar() {

   let item;
   let produtoValor;
   let produtosTotal = 0;

   if (produto.value == "Fone de ouvido - R$100") {
      item = "Fone de ouvido";
      produtoValor = quantidade.value * foneValor;

      produtosTotal = produtosTotal + produtoValor;

      console.log("Total do Celular -> " + produtosTotal);

   }
   if (produto.value == "Celular - R$1400") {
      item = "Celular";
      produtoValor = quantidade.value * celularValor;
      produtosTotal = produtosTotal + produtoValor;

   }
   if (produto.value == "Oculus VR - R$5000") {
      item = "Oculus VR";
      produtoValor = quantidade.value * oculusValor;
      produtosTotal = produtosTotal + produtoValor;

   }


   listaProdutos.innerHTML = listaProdutos.innerHTML + `
      <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade.value}x</span> ${item} <span class="texto-azul">R$ ${produtoValor}</span>
      </section>`;

   totalCarrinho = totalCarrinho + produtosTotal;
   total.textContent = `R$ ${totalCarrinho}`;
   console.log(totalCarrinho);
}

// função para limpar
function limpar() {
   let listaProdutos = document.getElementById("lista-produtos");
   listaProdutos.innerHTML = `<section class="carrinho__produtos__produto">
      <span class="texto-azul"> Carrinho Vazio </span> 
      </section>`;
   total.textContent = `R$ 0`
}