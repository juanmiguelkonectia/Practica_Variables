const outputEl = document.getElementById("output");

function printLine(text = "") {
  // Añade una línea al panel de salida
  outputEl.textContent += text + "\n"; // outputEl.textContent = outputEl.textContent + text + "\n";
}

function printTitle(title) {
  // Un “título” visual separador
  printLine("========================================");
  printLine(title);
  printLine("========================================");
}

function clearOutput() {
  outputEl.textContent = "";
}

function breakLine(){
  let break_line = "\n";
  printLine(break_line);
};

// Botón limpiar
document.getElementById("btnClear").addEventListener("click", clearOutput);

// Botón copiar salida
document.getElementById("btnCopy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(outputEl.textContent);
    alert("Salida copiada al portapapeles.");
  } catch {
    alert("No se pudo copiar (permiso del navegador).");
  }
});

const pestaña_title = document.getElementById("titleid");
function renamePestaña(){
  pestaña_title.textContent = "MI PRACTICA POO";
}
document.getElementById("btnRename").addEventListener("click", renamePestaña);