import { razas } from "./clase_raza.js";
import { Personaje } from "./personaje.js";


export class Enano extends Personaje {
    
    static rey = 'Thorin JavaScript Developer'
    static artistaFav = 'Bad Bunny'
    
    static alabarRey() {
        return 'Viva ' + Enano.rey
    }

    static alabarBadBunny() {
        return '¡Larga vida a ' + Enano.artistaFav + '!'
    }

    #colorBarba = null

    constructor(nombre, clase = null, colorBarba = 'Blanca') {
        super(nombre, razas.enano, clase)
        this.#colorBarba = colorBarba
    }
}