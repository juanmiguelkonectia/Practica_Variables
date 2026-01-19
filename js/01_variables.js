// damos funcionalidad al boton

// btnJsVars

document.getElementById("btnJsVars").addEventListener("click", () =>{

  clearOutput(); 
  console.log("El botón es funcional"); // para probar el boton
  //esta funcion esta definida en el otro js que el html lee antes que este
  let nombre= "Juan Miguel"; //declaracion e inicialización de cada variable
  let edad= 59;
  let alumno= true;

  const nacionalidad = "España";

  /*printTitle("1) Aprendiendo variables, funciones y metodo DOM");
  // DOM Document Objet Model
  breakline(); //- mejor poner el break en printTitle


  printLine("Mi nombre es " + nombre);
  printLine("Mi edad es de " + edad + " años");
  printLine("Soy de " + nacionalidad);
  breakline();

  printTitle("1.1) Ver tipo de datos");
  breakline();

  printLine("La variable Nombre guarda un " + typeof nombre)
  printLine("La variable Edad guarda un " + typeof edad)
  printLine("La variable Alumno guarda un " + typeof alumno)
  printLine("La constante Nacionalidad guarda un " + typeof nacionalidad)
  breakline();


  printTitle("1.2) Llamar a variables dentro de un String");
  breakline();

  // esta forma de concadenacion es la más recomendada:
  printLine(`Mi nombre es ${nombre}.`);
  printLine(`Mi edad es de ${edad} años.`);
  printLine(`Soy de ${nacionalidad}.`);
  breakline();

// por general esto es la instrucion para cuando se pulsa con el raton en un boton
// () =>¨{}  paraentesis para parámetros y llaves para instrucciones, aqui creamos una funcion, () sin nombre, que tiene una funcion {} que es lo contenido aquí*/

  printTitle("2) Operaciones básicas");
  breakline();

  let a = 23;
  let b = 65;

  console.log (a, " ", b);

  printLine(`variable a = ${a}`);
  printLine(`variable b = ${b}`);
  printLine("operadores: +. -, *, /, %, ")  //no resta sino diferencia, % es resto

  printLine(`La suma (+) es igual a ${a + b}`)
  printLine(`La diferencia (-) es igual a ${a - b}`)
  printLine(`El producto (*) es igual a ${a * b}`)
  printLine(`La división (a / b) es igual a ${a / b}`)
  printLine(`La división (b / a) es igual a ${b / a}`)
  printLine(`El resto (%) de la división a/b es igual a ${a % b}`)
  printLine(`El resto (%) de la división a/b es igual a ${b % a}`)


  breakline();
  printTitle("3) Operaciones básicas y cambios de de valor de una variable");
  breakline();

  let c;

  c = a + b;
  printLine(`La suma (+) es igual a ${c}`), c = a - b;
  printLine(`La diferencia (-) es igual a ${c}`), c = a * b;
  printLine(`El producto (*) es igual a ${c}`), c = a / b;
  printLine(`La división (a / b) es igual a ${c}`), c = b / a;
  printLine(`La división (b / a) es igual a ${c}`), c = a % b;
  printLine(`El resto (%) de la división a/b es igual a ${c}`), c = b % a;
  printLine(`El resto (%) de la división b/a es igual a ${c}`);


  breakline();
  printTitle("3.2) Operador de asignación compuesta");
  breakline();


// se realiza una operacion y se le asigna valor nuevo a una variable en el mismo comando
  //a = a  + b;

a += b;
  printLine (`Suma de a + b = ${a}`);

b -= c;
printLine (`Nuevo valor de b después de restar con c = ${b}`);

});
