//AREA Y PERÍMETRO DE UN CUADRADO


var per = "Perimetro"
var ar =  "Area"

var selec = prompt("¿Desea calcular el Perimetro o el Area?")


if (selec = per) {
    var fig1 = "Cuadrado"
    var fig2 = "Rectángulo"
    var fig3 = "Triangulo"
    
    var figsel = prompt("¿Que figura desea usar?(Cuadrado, Rectángulo, Triangulo)")

    if (figsel = fig1){
        var lado1 =  parseFloat(prompt("Ingrese el lado 1: "))
        var lado2 =  parseFloat(prompt("Ingrese el lado 2: "))
        var lado3 =  parseFloat(prompt("Ingrese el lado 3: "))
        var lado4 =  parseFloat(prompt("Ingrese el lado 4: "))  

        var resultper = (lado1 + lado2 + lado3 + lado4)
        console.log(resultper)
    }

    if (figsel = fig2){
        var lado1 =  parseFloat(prompt("Ingrese el lado 1: "))
        var lado2 =  parseFloat(prompt("Ingrese el lado 2: "))
        var lado3 =  parseFloat(prompt("Ingrese el lado 3: "))
        var lado4 =  parseFloat(prompt("Ingrese el lado 4: "))  

        var resultper = (lado1 + lado2 + lado3 + lado4)
        console.log(resultper)
    }

    if (figsel = fig3){
        var lado1 =  parseFloat(prompt("Ingrese el lado 1: "))
        var lado2 =  parseFloat(prompt("Ingrese el lado 2: "))
        var lado3 =  parseFloat(prompt("Ingrese el lado 3: ")) 

        var resultper = (lado1 + lado2 + lado3)
        console.log(resultper)
    }
}

if (selec = ar) {
    var fig1 = "Cuadrado"
    var fig2 = "Rectángulo"
    var fig3 = "Triangulo"
    
    var figsel = prompt("¿Que figura desea usar?(Cuadrado, Rectángulo, Triangulo)")

    if (figsel = fig1){
        var lado1 = parseFloat(prompt("Ingrese el lado 1: "))
        var lado2 = parseFloat(prompt("Ingrese el lado 2: "))

        var resultar = (lado1 * lado2)
        console.log(resultper)
    }

    if (figsel = fig2){
        var lado1 = parseFloat(prompt("Ingrese el lado 1: "))
        var lado2 = parseFloat(prompt("Ingrese el lado 2: "))

        var resultar = (lado1 * lado2)
        console.log(resultper)
    }

    if (figsel = fig3){
        var base = parseFloat(prompt("Ingrese la base: "))
        var altura = parseFloat(prompt("Ingrese la altura: "))

        var resultar = ((base * altura)/2)
        console.log(resultper)
    }
}