function pelarPatatas() {
  console.log("Pelar y cortar las patatas");
}

function freirPatatas() {
  console.log(
    "Introducimos las patatas cortadas en la sartén y que se cocinen"
  );
  setTimeout(() => {
    console.log("Patatas friendose");
  }, 10000);
}

function batirHuevos() {
  console.log("batimos los huevos");
}
function escurrirPatatas() {
  console.log("Quitamos con una espumadera las patatas de la sartén");
}
function mezclarIngredientes() {
  console.log(
    "Introducimos las patatas escurridas al bol con la cebolla y el huevo."
  );
}
function hacerUnaTortilla() {
  pelarPatatas();
  freirPatatas();
  batirHuevos();
  escurrirPatatas();
  mezclarIngredientes();
}

// hacerUnaTortilla();

// let miPromesa = new Promise((resolve, reject) => {
//   console.log("Te prometo que te saludaré cuando pasen 3 segundos!!");
//   setTimeout(() => {
//     resolve("Hola");
//   }, 3000);
// });

// miPromesa.then((value)=>{
//     console.log(value)
//     console.log("ha terminado la promesa");
// })

// let miPromesa2 = new Promise((resolve, reject) => {
//     let number = 51;
//     console.log("te prometo que " + number + " es menor igual que 50");
//     if (number <= 50) {
//       resolve(number + " es menor igual a 50");
//     } else {
//       reject("mentira");
//     }
//   });

//   miPromesa2.then((value)=>{
//     console.log(value)
//   }).catch((error)=>{
//     console.log(error);
//   })

//   let friendoPatatas = new Promise((resolve) => {
//     console.log("Aquí friendo las patatas");
//     setTimeout(() => {
//       resolve("Patatas freídas");
//     }, 10000);
//   });

//   friendoPatatas.then((value) => {
//     console.log(value, "Ya podemos mezclar las patatas con los huevos batidos!");
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())// JSON.PARSE()
// .then(res => console.log(res))
// .catch((err) => console.error(err));

// AXIOS
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "New Post",
    body: "Body title",
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    const { data, status } = res;
    console.log(data, status);
  })
  .catch((err) => console.error(err));

axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    title: "Post updated",
    body: "Body updated",
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

axios
  .delete("https://jsonplaceholder.typicode.com/post/7")
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    if (err.response.status == 404) {
      alert("hubo un error");
    }
  });
