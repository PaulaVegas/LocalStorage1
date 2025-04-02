// CREAR OBJETO USUARIO
const user = {
  name: localStorage.getItem("name"),
  email: localStorage.getItem("email"),
  message: localStorage.getItem("message"),
  url: localStorage.getItem("imgUrl"),
};

// CREAR OBJETO USUARIO EN LOCAL STORAGE
localStorage.setItem("user", JSON.stringify(user));

const userObj = JSON.parse(localStorage.getItem("user"));
//CREAR OBJETO BOTON
const sendButton = document.getElementById("sendButton");
//CREAR EVENTO AL CLICKAR EL BOTON
sendButton.addEventListener("click", onSubmit);

//FUNCION PARA QUE NO SE RECARGUE LA PAGINA AL HACER CLICK
// EN EL BOTON ENVIAR
function onSubmit(event) {
  event.preventDefault();
}

//FUNCION PARA QUE SE MUESTREN LOS DATOS EN LA CONSOLA
for (let i=0; i<localStorage.length; i++){
  const key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

//EXTRA EXTRA EXTRA
const clearButton = document.getElementById("clearButton");
const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
savedUsers.push(userObj);
localStorage.setItem("users", JSON.stringify(savedUsers));

console.log("Usuarios guardados:");
savedUsers.forEach((user, index) => {
  console.log(`Usuario ${index + 1}:`, user);
});

// clearButton?.addEventListener("click", () => {
//   localStorage.removeItem("users");
//   console.log("Usuarios eliminados del localStorage.");
// });

// const data = JSON.parse(localStorage.getItem("user"));
// console.log(data);
document.addEventListener("DOMContentLoaded", savedUsers);