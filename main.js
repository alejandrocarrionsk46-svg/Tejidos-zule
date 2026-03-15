const galeria=document.getElementById("galeria")

for(let i=1;i<=18;i++){

galeria.innerHTML+=`

<div class="card" onclick="abrirImagen('imagen${i}.jpg')">

<img src="imagen${i}.jpg">

</div>

`

}



function mostrarContacto(){

alert("Teléfono: 54827657")

}

function mostrarUbicacion(){

alert("Ubicación: Carretera Peñalver klm1 los asahares")

}



function enviarPedido(){

let texto=document.getElementById("mensaje").value

let url="https://wa.me/5354827657?text="+encodeURIComponent("Hola, quiero este diseño: "+texto)

window.open(url)

}



function abrirImagen(src){

document.getElementById("modal").style.display="flex"

document.getElementById("imagenGrande").src=src

}

function cerrarModal(){

document.getElementById("modal").style.display="none"

}