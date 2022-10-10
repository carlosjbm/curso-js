//El this en js fuera de un bloque hace referencia al Objeto window
console.log(this);
this.nombre = "Contexto Global";
console.log(this.nombre);

function print() {
  console.log(this.nombre);
}
print();

//en estecaso el contexto del this es el contexto del obj1
const obj1 = {
  nombre: "Contexto Obj1",
  print1: () => console.log(this.nombre), //las arow functions toman el contexto del padre
  print, //las funciones normales si crean un contexto
};
obj1.print1();
obj1.print();

class ObjM {
  constructor(nombre) {
    this.nombre = nombre;
  }
  print() {
    console.log(nombre);
  }
  /*   print = () => console.log(nombre); */
}
const objm = new ObjM("carlito");
objm.print();

// const obj3 = {
//   //nombre: "Contexto 3",
//   /*  print: function () {
//     console.log(this.nombre);
//   }, */
//   print: () => console.log(this.nombre),
// };
// obj3.print();

const obj4 = {
  nombre: "contexto 4",
  objeto: {
    nombre: "Contexto 3",
    /* print: function () {
      console.log(this.nombre);
    }, */
    print: () => console.log(this.nombre),
  },
};
obj4.objeto.print();
