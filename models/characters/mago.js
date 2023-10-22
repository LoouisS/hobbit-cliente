import { razas } from "./clase_raza.js"
import { Personaje } from "./personaje.js"


export class Mago extends Personaje {
    
    static rey = 'Miguel Jaque'
    static alabarRey() {
        return `¡Alabemos al mago de la Tierra Media ${this.nombre}!` 
    }

    #colorBarba = null
    #transformado = null

    constructor(nombre, clase = null, colorBarba = 'Blanca', transformado = '') {
        super(nombre, razas.humano, clase)
        this.#colorBarba = colorBarba
        this.#transformado = transformado
    }

    transformar() {
        
        if (this.#transformado === 'ninio') {
            this.setNombre('Mago (Niño)')
        } else {
            if (this.#transformado === 'cucaracha') { 
                this.setNombre('Dumbledore')
            } else {
                console.log("No puede transformarse")
            } 
        }
    }

}