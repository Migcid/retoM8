const registro = document.querySelector("#registro");
const alert=document.querySelector("#alert")

registro.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const foto = document.querySelector("#foto").files[0];
  const contrasena = document.querySelector("#contrasena").value;

  let resp = await fetch("form/login", {
    method: "POST",
    body: JSON.stringify({ email, nombre, apellido, foto, contrasena }),
  });
  let respuesta = await resp.json();
  if (respuesta) {
    alert.innerHTML=`
    <div class="alert alert-danger" role="alert">
    Este es un mensaje de alerta.
  </div>
    `
  }
});
