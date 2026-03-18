// Animar galería al cargar
window.addEventListener("load", () => {
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("fade-in-up");
    }, index * 80);
  });
});

// Visor de imagen ampliada
const imageViewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    viewerImg.src = img.src;
    imageViewer.classList.add("show");
  });
});

imageViewer.addEventListener("click", () => {
  imageViewer.classList.remove("show");
});

// Enviar pedido a WhatsApp
const enviarBtn = document.getElementById("enviarPedido");
const pedidoText = document.getElementById("pedidoText");

enviarBtn.addEventListener("click", () => {
  const texto = pedidoText.value.trim();
  if (!texto) {
    alert("Por favor, escribe tu pedido antes de enviar.");
    return;
  }

  const url = `https://wa.me/5354827657?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
});