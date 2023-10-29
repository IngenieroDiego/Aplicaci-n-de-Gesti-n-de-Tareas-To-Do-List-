// Función JavaScript para cambiar el color del texto
document.getElementById("cambiarColor").addEventListener("click", function() {
    // Genera un color aleatorio en formato hexadecimal
    const nuevoColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Cambia el color del mensaje
    document.getElementById("mensaje").style.color = nuevoColor;
  });
  