const outputEl = document.getElementById("output");

function printLine(text = "") {
  // Añade una línea al panel de salida
  outputEl.textContent += text + "\n";
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