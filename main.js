function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento === null) {
        alert('elemento não existente')
    } else {
        elemento.play();
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length;contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    tecla.onclick = function () {
        tocaSom('#som_' + instrumento)
    };
    
    tecla.onkeydown = function(evento){
       if (evento.code === 'Enter' || evento.code === 'Space') {
        tecla.classList.add('ativa');
       };
    };

    tecla.onkeyup = function(evento){
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.remove('ativa')
        }
      
 
    };

};
