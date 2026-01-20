//Damos funcionalidad al boton.

// btnJsVars

document.getElementById("btnJsVars").addEventListener("click", () =>{
    clearOutput();
    //console.log("Botón es funcional!") //Con esto comprobamos que el boton es funcional.
    // para probar el boton
  //esta funcion esta definida en el otro js que el html lee antes que este
    let nombre = "Rubén" //declaracion e inicialización de cada variable
    let edad = 42;
    let alumno = true;

    const nacionalidad = "España";

    /*printTitle(" 1) Aprendiendo variables, funciones y metodo DOM");
    breakLine();

    printLine("Mi nombre es " + nombre );
    printLine("Mi edad es de " + edad + " años");
    printLine ("Soy de "+ nacionalidad);

    breakLine();
    printTitle(" 1.1) Ver tipos de datos");
    breakLine();

    printLine("La variable nombre guarda " + typeof nombre );
    printLine("La variable edad guarda " + typeof edad );
    printLine("La variable alumno guarda " + typeof alumno );
    printLine("La constante nacionalidad guarda " + typeof nacionalidad );

    breakLine();
    printTitle(" 1.2) Llamar a variables dentro de un STRING");
    breakLine();

    printLine(`Mi nombre es ${nombre}.` );
    printLine(`Mi edad es de ${edad} años.`);
    printLine (`Soy de ${nacionalidad}.`);

    printLine(`${edad}`)

    breakLine();
    */
    printTitle(" 2) Operaciones basicas");
    breakLine();

    let a = 23;
    let b = 65;

    console.log(a, " ", b);
    printLine(`variable a = ${a}`);
    printLine(`variable b = ${b}`);
    printLine("operadores : + , - , * , / , %")

    //Cread una linea para cada operación de a vs b. Suerte!!! 
    printLine(`Suma de a + b = ${a + b}`);
    printLine(`Diferencia de a - b = ${a - b}`);
    printLine(`Producto de a * b = ${a * b}`);
    printLine(`División de a / b = ${a / b}`);
    printLine(`División de b / a = ${b / a}`);
    printLine(`Resto de a % b = ${a % b}`);
    printLine(`Suma de b % a = ${b % a}`);

    breakLine();
    printTitle(" 3.1) Operaciones basicas y cambios de valor para una variable");
    breakLine();

    let c;

    c = a + b;
    printLine(`Suma de a + b = ${c}`);
    c = a - b;
    printLine(`Diferencia de a - b = ${c}`);
    c = a * b;
    printLine(`Producto de a * b = ${c}`);
    c = a / b;
    printLine(`División de a / b = ${c}`);
    c = b / a;
    printLine(`División de b / a = ${c}`);
    c = a % b;
    printLine(`Resto de a % b = ${c}`);
    c = b % a;
    printLine(`Suma de b % a = ${c}`);
    breakLine();
    printTitle(" 3.2) Operador de asignación compuesta ");
    breakLine();
    

    //Se realiza una operación y se le asigna valor nuevo a una variable en el mismo comando.

    //a = a + b;
    a += b;
    printLine(`Suma de a + b = ${a}`);

    b -= c;
    printLine(`Nuevo valor de b despues de restar con c = ${b}`);
    printLine(`Nuevo valor de nacionalidad ${nacionalidad}`);
    console.log(a , b , c);


    //Genera el codigo necesario para las siguientes operaciones:
    //Crea una constante y dale el nombre de un producto,
    //Crea una variable para el precio de ese producto
    //Crea una linea donde se muestre el nombre, el precio y el precio con IVA (21%)

    //Crea una linea donde ponga el nombre de una varible de tipo numérica y justo despues ++
    //ejemplo: a++
    //Muestra en una linea si el valor de la variable ha cambiado.
    //Cuando la operación funciona que es lo que realiza? Muestralo en una linea o comentario.

    //Mega Extra: Crea un Boton que cambie el titulo de la pestaña por MI PRACTICA POO.


    breakLine();
    printTitle(" 4) Ejercicios.");
    breakLine();
    let product = "Pomelos";
    let price = 3.45;
    let tax = 0.21;
    printLine("Ejercicio 1")
    printLine(`Los ${product} tienen un precio de ${price}€/kg. Con impuestos finalmente un precio final de ${price + price*tax}€/kg`)
    breakLine();
    printLine("Ejercicio 2")

    let d = 5;
    printLine(`El valor de "d" es ${d}`);
    d++ // suma una unidad a la variable  d+= 2 sumaria de 2 en 2 
    printLine(`El valor de "d" depues de operar con "d++" es de ${d}`)
    printLine(`La instrucción ++ añade o suma 1`)







});



