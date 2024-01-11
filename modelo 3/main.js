const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const navegacao = document.querySelector('#menu');

openMenu.addEventListener('click', () => {
    navegacao.style.display = "flex";

    // O código abaixo cria a sensação de deslize (entrando um slide) na tela
    navegacao.style.right = (navegacao.offsetWidth * -1) + 'px';
    // O código "offsetWidth" captura em tempo real o tamanho da tela do dispositivo

    openMenu.style.display = 'none';

    setTimeout(() => {
        navegacao.style.opacity = '1';
    // O "style" muda ou acrescenta códigos no CSS

        navegacao.style.right = '0';
    }, 10);
    // O código "setTimeout" atraza a execução de alguma função, ela recebe dois parametros, a função e o tempo em milisegundos
});

closeMenu.addEventListener('click', () => {
    navegacao.style.opacity = '0';

    // O código abaixo cria a sensação de deslize (saindo um slide) da tela
    navegacao.style.right = (navegacao.offsetWidth * -1) + 'px';

    setTimeout(() => {
        navegacao.removeAttribute('style');
        openMenu.removeAttribute('style');
    }, 200);
});

