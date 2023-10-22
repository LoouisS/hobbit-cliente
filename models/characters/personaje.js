import { Objeto } from "../objeto.js"

export class Personaje {

    #nombre
    #raza
    #clase
    #inventario


    constructor(nombre, raza, clase = "") {
        this.#nombre = nombre
        this.#raza = raza
        this.#clase = clase
        this.#inventario = new Set()
    }

    hablar(texto) {
        let textoMejorado = `<strong>${this.#nombre}:</strong> "${texto}"<br><br>`
        document.getElementById("texto").innerHTML += textoMejorado
    }

    coger(objeto) {
        this.#inventario.add(objeto)
    }

    eliminarObjeto(objeto) {
        if (!(objeto instanceof Objeto)) {
            throw new Error('El objeto es inválido')
        }
        if (this.#inventario.has(objeto)) {
            this.#inventario.delete(objeto)
        } else {
            throw new Error('El objeto no está en el inventario del personaje')
        }
    }

    setNombre(nombreNuevo){
        this.#nombre = nombreNuevo
    }

    getInventario(){
        return this.#inventario
    }

    getNombre() {
        return this.#nombre
    }



    pasar(objeto, personaje) {
        if (!(objeto instanceof Objeto)) {
            throw new Error('El objeto es inválido')
        }
        if (!(personaje instanceof Personaje)) {
            throw new Error('El personaje es inválido')
        }

        this.#inventario.delete(objeto)
        personaje.coger(objeto)
    }

    beberObjeto(objeto) {
        if (objeto instanceof Objeto && objeto.nombre === "Cerveza") {
            this.#inventario.delete(objeto) 
            this.hablar(`Estoy mas borracho que una cuba!`)
        } else {
            this.hablar(`¡No puedo beberme esto!`)
        }
    }

    atacar(persona){
        persona.hablar("Ayyyyy")
    }

}
