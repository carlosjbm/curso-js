//AJAX XMLHttpRequest
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
        $li.innerHTML = `${el.name}--- (${el.email})--- ${el.phone}`;
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
  xhr.open("GET", "http://jsonplaceholder.typicode.com/users");

  //paso4..Enviar la peticion
  xhr.send();
})();

//AJAX API Fetch
(() => {
  const $fetch = document.getElementById("fetch"),
    $err = document.getElementById("err"),
    $fragment = document.createDocumentFragment();
  fetch("http://jsonplaceholder.typicode.com/users")
    //Validacion del servidor
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);

      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--- (${el.email})--- ${el.phone}`;
        $fragment.appendChild($li);
      });

      $fetch.appendChild($fragment);
    })
    //Caso de error
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetch.innerHTML = `Error ${err.status} ${message}`;
    })
    .finally(() => {
      console.log("Este texto siempre va a mostrarse");
    });
})();

//Fetch con Async-Away
(() => {
  const $fetchAsync = document.getElementById("fetch-async"),
    $err = document.getElementById("err"),
    $fragment = document.createDocumentFragment();
  //creamos la funcion asincrona
  async function getData() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      json = await res.json();

      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      json.forEach((el) => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name}--- (${el.email})--- ${el.phone}`;
        $fragment.appendChild($li);
      });
      $fetchAsync.appendChild($fragment);
    } catch (err) {
      console.log(err);
      let message = err.statusText || "Ocurrio un error";
      $fetchAsync.innerHTML = `Error ${err.status} ${message}`;
    } finally {
      console.log("Este texto se mostrara de cualquier manera");
    }
  }

  getData();
})();
