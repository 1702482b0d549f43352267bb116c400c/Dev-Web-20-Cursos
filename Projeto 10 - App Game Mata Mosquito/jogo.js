/**
 * @author Matheus Ednei
 */

/**
 * Criando variaveis para conter as dimensões na tela
 */
var altura = 0;
var largura = 0;

/**
 * Função associada ao onresize do body
 */
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    //console.log(altura, largura);
}
ajustaTamanhoPalcoJogo();

/**
 * @function posicaoRandomica
 * @description Função utilizada para gerar as posições randomicas do mosquito
 */
function posicaoRandomica() {
    
    //Variaveis para definir as posições randomicas do mosquito
    var posicaoX = Math.floor(Math.random()*largura) - 90;
    var posicaoY = Math.floor(Math.random()*altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    // Criar elemento html de forma dinâmica
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = 'mosquito1';
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';

    document.body.appendChild(mosquito);

}



