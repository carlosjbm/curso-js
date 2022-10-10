//este codigo puede hacer hablar tu pc
let texto =
  "Java Script es un lenguaje genial, por primera vez logro hacer hablar mi pc... yo Carlos borges soy el puto amo";

const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//Elementos del documento (Con document.*elemnto podemos acceder al elemento que buscamos)
console.log(document);
console.log(document.head);
//Como manejar los nodos del Dom
const $p = document.getElementById("que-es");
console.log(document.getElementById("que-es"));
console.log($p);

const $pha = document.querySelector("p");
console.log($pha);
$pha.hasAttribute("id");
console.log($pha.hasAttribute("id"));
$pha.setAttribute("id", "id-new");
