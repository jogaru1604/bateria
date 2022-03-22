function manejarClick() {
  alert("has hecho click");
}

document.querySelector("h1").addEventListener("click", manejarClick);

/*document.querySelector("h1").addEventListener("mouseout", function noTeVayas() {
  alert("porfa, no te vayas");
});*/



var botones = document.querySelectorAll(".caja");


var numeroBotones = botones.length;

for (var i = 0; i < numeroBotones; i++) {


  botones[i].addEventListener("click", function tocarTom1() {
    var letraBoton = this.innerHTML;


    switch (letraBoton) {
      case 'w':
        music = new Audio('sonidos/tom-1.mp3');
        music.play();
        break;
      case 'a':
        music = new Audio('sonidos/tom-2.mp3');
        music.play();
        break;
      case 's':
        music = new Audio('sonidos/tom-3.mp3');
        music.play();
        break;
      case 'd':
        music = new Audio('sonidos/tom-4.mp3');
        music.play();
        break;
      case 'j':
        music = new Audio('sonidos/snare.mp3');
        music.play();
        break;
      case 'k':
        music = new Audio('sonidos/crash.mp3');
        music.play();
        break;
      case 'l':
        music = new Audio('sonidos/kick-bass.mp3');
        music.play();
        break;



    }
  })
}
