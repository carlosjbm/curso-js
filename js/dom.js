//este codigo puede hacer hablar tu pc
let texto =
  "Java Script es un lenguaje genial, por primera vez logro hacer hablar mi pc";

const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto);
