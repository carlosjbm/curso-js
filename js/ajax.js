(() => {
  //paso1..Crear una variable para instanciar el objeto XMLHttpRequest
  const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $err = document.getElementById("err");
  $fragment = document.createDocumentFragment();
  //paso2..Asignar el evento
  xhr.addEventListener("readystatechange", (e) => {
    //Validacion Necesaria
    if (xhr.readyState !== 4) return;

    //programacion
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Exito de coneccion");
      let json = JSON.parse(xhr.responseText);
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}---${el.email}--${el.phone}`;
        $fragment.appendChild($li);
      });

      $xhr.appendChild($fragment);
    } else {
      console.log("Error de coneccion");
      let message = xhr.statusText || "Ocurrio un error";
      $err.innerHTML = `Error ${xhr.status} ${message}`;
    }
  });

  //paso3..Abrir el evento
  xhr.open("GET", "http://jsonplaceholder.typicode.com/user");

  //paso4..Enviar la peticion
  xhr.send();
})();
