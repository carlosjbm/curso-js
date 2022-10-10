(() => {
  //paso1..Crear una variable para instanciar el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();
  ($xhr = document.getElementById("xhr")),
    ($fragment = document.createDocumentFragment);
  //paso2..Asignar el evento
  xhr.addEventListener("readystatechange", (e) => {
    //Validacion Necesaria
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      console.log(json);
      console.log("Exito de coneccion");
    } else {
      console.log("Error de coneccion");
    }

    //programacion
  });

  //paso3..Abrir el evento
  xhr.open("GET", "http://jsonplaceholder.typicode.com/users");

  //paso4..Enviar la peticion
  xhr.send();
})();
