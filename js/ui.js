const outputE1 = document.getElementById("output");
console.log("Este es el valor de outputE1: ", outputE1);
console.log("Este es el valor de outputE1: ", outputE1.textContent);

function printTitle(text=""){
  outputE1.textContent += text + "\n"; 
};

printTitle();

console.log("Este es el nuevo valor de output1: ", outputE1);

/*Método DOM*/