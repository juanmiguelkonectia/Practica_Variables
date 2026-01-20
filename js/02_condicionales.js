/*// declaramos las variables
let nombre = "Pedro";
let apellido = "Jiménez";
let edad = 22;
let matricula = true;
let math = 7.5;
let chemical = 6;
let technology = 3.4;

let average = (math + chemical + technology) / 3;
console.log (average.toFixed(2)); // toFixed es para redondear los decimales a 2

// operadores de condicionales (comparcación) < , > , == , != , <= , >= , ===

if (average >= 8 && edad > 25 || apellido != "Jiménez"){
  matricula = true
}
else {matricula = false}

console.log (matricula)*/

//el boton (getElementById("btnJsIfElse")) del index (document.) esta esperando (addEventListener) a que hagamos un click en el
document.getElementById("btnJsIfElse").addEventListener("click", () => {
  clearOutput();
  // printTitle("Js Condicionales",)

  let edad = document.getElementById("inpEdad").value;
  let nota = document.getElementById("inpNota").value;
  let rol = document.getElementById("inpRol").value;
  // rol=rol.toUpperCase() //toLowerCase  a minusculas

  edad = Number(edad);
  nota = Number(nota);

  console.log(edad);
  console.log(typeof edad);
  console.log(nota);
  console.log(typeof nota);
  console.log(rol);
  console.log(typeof rol);

  /*Mostrar en nuestra consola si el usuario es mayor de 18  y su nota es mayor de 5 y es alumno  
    "Alumno aprobado"
  Si es alumno con nota menor de 5 y edad mayor de 18
    "Alumno suspenso"
  Si es Admin, nota 12 y la edad es 352178 "Bienvenido Super Usuario"
  Si es Profesor, nota media => 9, edad mayor de 30 "Bienvenido profesor"
  cualquier otra opcion "Login incorrecto"*/

  if (edad >= 18 && nota >= 5 && rol == "Alumno")
  {printTitle("Alumno aprobado");}
  else if (edad >= 18 && nota < 5 && rol == "Alumno")
  {printTitle("Alumno suspenso");}
  else if (edad == 352178 && nota == 12 && rol == "Admin")
  {printTitle("Bienvenido Super Usuario");}
  else if (edad >= 30 && nota >= 9 &&  rol == "Profesor")
  {printTitle("Bienvenido Profesor");}
  else
  {printTitle("Login incorrecto")}
})
