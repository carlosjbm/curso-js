//este codigo puede hacer hablar tu pc
let texto = "Este texto se sintetizara por el navegador, pinga, clase talla";

const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);
