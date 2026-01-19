const outputEl = document.getElementById("output");

function printLine(text = "") { //crea la función a la par que la variable
  // Añade una línea al panel de salida
  outputEl.textContent += text + "\n"; 
  //outputEl.textContent = outputEl + text + "\n"
  //+= es añadir, \n es un salto de linea
}

function printTitle(title) { //esta variable title se declara pero no se inicializa de momento
  // Un “título” visual separador
  //printLine ("\n");
  printLine("================================================");
  printLine(title);
  printLine("================================================");
  //printLine ("\n");
}

function clearOutput() {
  outputEl.textContent = "";
}

function breakline() {
  let break_line = "\n";
  printLine (break_line);
  //outputEl.textContent = "\n"; <- asi no por lo visto
}

// Botón limpiar
document.getElementById("btnClear").addEventListener("click", clearOutput);

// Botón copiar salida
document.getElementById("btnCopy").addEventListener("click", async () => { 
  try {
    await navigator.clipboard.writeText(outputEl.textContent);
    alert("Salida copiada al portapapeles.");
  } catch {
    alert("No se pudo copiar (permiso del navegador).");
  } // async es una función asincrónica al ejecutar intenta espera al navegador si funciona pon el mensaje sali... y si no coje el segundo mensaje
});