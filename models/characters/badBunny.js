import { clases, razas } from "./clase_raza.js"
import { Personaje } from "./personaje.js"


export class Badbunny extends Personaje {

    constructor(nombre) {
        super(nombre, razas.humano, clases.cantanteTrap)
    }

    cantar(cancion) {
        let cantar = `<br><p><strong>${this.getNombre()} canta la canción ${cancion}</strong></p><br><br>`
        document.getElementById("texto").innerHTML += cantar
    }

}