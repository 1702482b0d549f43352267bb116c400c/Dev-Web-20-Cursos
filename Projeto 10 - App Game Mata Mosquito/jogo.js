/**
 * @author Matheus Ednei
 */

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var nivel = window.location.search.replace('?','');
var criaMosquitoTempo = 1500;

// Vericiando o nível passado no index.html
if(nivel === 'normal') {
    criaMosquitoTempo = 1500;
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000;
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750;
}

/**
 * @function ajustaTamanhoPalcoJogo
 * @description Função que obtém o tamanho da tela do navegador
 */
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    //console.log(altura, largura);
}
ajustaTamanhoPalcoJogo();

// Intervalo para o cronometro
var cronometro = setInterval(function() {
    tempo -= 1;

    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
},1000);

/**
 * @function posicaoRandomica
 * @description Função utilizada para gerar as posições randomicas do mosquito 
 * e criar o elemento html
 */
function posicaoRandomica() {

    // removendo o mosquito anterior (caso exista) e tratando os pontos de vida
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        if(vidas > 3) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
            vidas++;
        }
    }
    
    //Variaveis para definir as posições randomicas do mosquito
    var posicaoX = Math.floor(Math.random()*largura) - 90;
    var posicaoY = Math.floor(Math.random()*altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    // Criar elemento html de forma dinâmica
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    // Função onclick para remover o mosquito quando ele for clicado
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);

}

/**
 * @function tamanhoAleatorio
 * @description Função utilizada para gerar o tamanho do mosquito de maneira randomica
 */
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random()*3);

    switch(classe){
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

/**
 * @function ladoAleatorio
 * @description Função para definir a orientação da imagem do mosquito
 */
function ladoAleatorio() {
    var classe = Math.floor(Math.random()*2);

    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}

