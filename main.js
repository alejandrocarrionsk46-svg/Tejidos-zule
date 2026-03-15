const contenedor = document.getElementById("productos")

for(let i=1;i<=20;i++){

contenedor.innerHTML += `

<div class="card" onclick="abrirImagen('imagen${i}.jpg')">

<img src="imagen${i}.jpg">

</div>

`

}



const tarjetas = document.querySelectorAll(".card")

function animar(){

tarjetas.forEach(card=>{

let posicion = card.getBoundingClientRect().top
let pantalla = window.innerHeight

if(posicion < pantalla-100){

card.classList.add("mostrar")

}

})

}

window.addEventListener("scroll",animar)

animar()



function mostrarContacto(){

alert("Contacto del dueño: 54827657")

}

function mostrarUbicacion(){

alert("Ubicación: Carretera Peñalver km1 Los Asahares")

}



function enviarWhatsApp(){

let mensaje = document.getElementById("mensajeCliente").value

let texto = "Hola, quiero solicitar un tejido personalizado. "

if(mensaje !== ""){

texto += "Diseño solicitado: " + mensaje

}

let url = "https://wa.me/5354827657?text=" + encodeURIComponent(texto)

window.open(url)

}



/* MODAL */

function abrirImagen(src){

document.getElementById("modal").style.display="flex"
document.getElementById("imagenGrande").src = src

}

function cerrarModal(){

document.getElementById("modal").style.display="none"

}