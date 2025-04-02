// CREAR OBJETO USUARIO
const user = {
  name: localStorage.getItem("name"),
  email: localStorage.getItem("email"),
  message: localStorage.getItem("message"),
  url: localStorage.getItem("imgUrl"),
};

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(`${localStorage.getItem(key)}`);
}

localStorage.setItem(
  "user",
  JSON.stringify({
    name: "dsad",
    email: "dskalda@sjks",
    message: "dkaldnklandakldna",
    url: "https://es.onlyfresh.com/cdn/shop/articles/shutterstock_2297469261.jpg?v=1699021263",
  })
);

const user = JSON.parse(localStorage.getItem("user"));
// sendButton.addEventListener("click", onSubmit);

// const sendButton = document.getElementById("sendButton");

// function onSubmit(event) {
//   event.preventDefault();
// }
