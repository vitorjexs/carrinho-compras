
let formulario = document.getElementById("produto");

console.log(formulario);

let fone;
let celular;
let oculus;

let foneValor = 100;
let celularValor = 1400;
let oculusValor = 5000;

// Função para verificar se contém

function encontrar(opcao) {
   
   for (let i = 0; i < formulario.options.length; i++){
      
      let option = formulario.options[i];
     
      if (option.text.includes(opcao)){
         console.log(`Achei ${opcao}`);
         break;
      } else {
         console.log("Este produto não existe")
      }
   }

}



// função para adicionar ao carrinho
function adicionar(){
   let listaProdutos = document.getElementById("lista-produtos");

   let item;
   let produtoValor;
   let total = document.getElementById("valor-total");
      
      
   // // função para multiplicar o valor pela quantidade
   // function multiplicar() {
      
      let quantidade = document.getElementById("quantidade");
      

      if (produto.value == "Fone de ouvido - R$100") {
         item = "Fone de ouvido";
         produtoValor = quantidade.value * foneValor;
         console.log(produtoValor);
      } else if (produto.value == "Celular - R$1400") {
         item = "Celular";
         produtoValor = quantidade.value * celularValor;
      } else if (produto.value == "Oculus VR - R$5000") {
         item = "Oculus VR";
         produtoValor = quantidade.value * oculusValor;
      }
      
      
      
   // }
   
   listaProdutos.innerHTML = `
      <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade.value}x</span> ${item} <span class="texto-azul">${produtoValor}</span>
      </section>`;   
   total.innerHTML = `R$ ${produtoValor}`;
}
   
// função para limpar
function limpar(){
   let listaProdutos = document.getElementById("lista-produtos");
   listaProdutos.innerHTML= "Carrinho vazio";
}