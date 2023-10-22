import { razas } from "./clase_raza.js"
import { Mago } from "./mago.js"


export class Madremago extends Mago {

    constructor(nombre, clase, colorBarba, transformado) {
        super(nombre, clase, colorBarba, transformado)
    }

    demandar(persona) {
        let denuncia = `<p><strong>${this.getNombre()} ha denunciado a ${persona.getNombre()}</strong></p><br>`
        document.getElementById("texto").innerHTML += denuncia
    }
}