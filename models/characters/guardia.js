import { razas } from "./clase_raza.js";
import { Personaje } from "./personaje.js";


export class Guardia extends Personaje {

    #colorBarba = null

    constructor(nombre, clase = null, colorBarba = 'Negra') {
        super(nombre, razas.humano, clase)
        this.#colorBarba = colorBarba
    }
}