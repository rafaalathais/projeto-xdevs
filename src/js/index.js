const btnAvancar = document.getElementById("btn-avancar")
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function(){

    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
    if(ehUltimoCartao) return;
    //if(cartaoAtual === cartoes.length - 1) return;

    cartaoAtual++;
    mostrarCartao(); 
    
    esconderCartaoSelecionado();
    

});

btnVoltar.addEventListener("click", function(){

    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;
   // if(cartaoAtual === 0){   return;};

    esconderCartaoSelecionado();
    
    cartaoAtual--;
    mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}