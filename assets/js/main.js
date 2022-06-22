var items = []

/*

Por que usar querySelector y data-*, esto se debe a que si cambiamos una clase/id vamos a tener que cambiar
aqui tambien los nombres.

Asignar <tag data-*></tag> es una buena practica, sin embargo, si quieren consegir las etiquetas desde un id o clase 
es asi:

ID: document.getElementById("<nombre de la id>")
ej: document.getElementById("miid")

CLASE: document.getElementsByClassName("<nombre de la clase>")
ej: document.getElementsByClassName("miclase")


*/

var n = document.querySelector("[data-nombre]").value // Pedimos el valor del input

var a = document.querySelector("[data-apellido]").value // Pedimos el valor del input

var f = document.querySelector("[data-form]") // Pedimos el formulario

var na = document.querySelector("[data-name]")  // Pedimos el nombre al usuario

var su = document.querySelector("[data-surname]")  // Pedimos el apellido al usuario

var err = document.querySelector("[data-error]")  // Pedimos el div error

var alertdiv = document.querySelector("[data-alert]")  // Pedimos el div error

var borrar = document.querySelector("[data-borrar]")  // Pedimos el div error

var car = document.querySelector("[data-number]")  // Pedimos el div error

var errText = "Uno o mas campos no tiene contenido." // Creamos un error

function Formulario(e) {
    
    if (n !== "" && a !== "") {
        na.innerHTML = n
        su.innerHTML = a


        // Guardamos el dato en persistente
        localStorage.setItem("nombre", n) 
        localStorage.setItem("surname", a)


        // recargamos la pagina
        
        window.location.reload()

        if (alertdiv) {
            
            alertdiv.remove()

        }
    } else {

        if (a && n) {
            su.value = ""
            na.value = ""
            
        }
    
        err.innerHTML = `
        
        <div class="alert alert-danger" role="alert" data-alert>
            ${errText}
        </div>

        
        `
    }
    e.preventDefault(); // No refrescar! y envie al action
}

if (f) {
    f.addEventListener('submit', Formulario); // Le agregamos un evento, y le pasamos una funcion 
}


if (localStorage.getItem("nombre") !== null && localStorage.getItem("surname") !== null) {

    na.innerHTML = localStorage.getItem("nombre") 
    su.innerHTML = localStorage.getItem("surname")
    
    borrar.style.display = "block" // Se muestra el boton
} else {
    borrar.style.display = "none" // No se muestra el boton
}

function borrarf() {
    localStorage.removeItem("nombre")
    localStorage.removeItem("surname")
}


if (localStorage.getItem("producto") !== null) {
    items.push(JSON.parse(localStorage.getItem("producto")))
    console.log(JSON.parse(localStorage.getItem("producto")))
}

if (items.length > 0) {
    car.style.display = "block"
    car.innerHTML = items.length
    console.log(items)
} else {
    car.style.display = "none"
}

function product(id, nombre_product) {
    data = { id: id, prodcto: nombre_product }

    localStorage.setItem("producto", JSON.stringify(data))

    items.push(data)

    window.location.reload()
    
}