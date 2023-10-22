import { Objeto } from "./objeto.js"

export class Superobjeto extends Objeto{

    constructor(nombre) {
        super(nombre)
    }

    brillar(){
        let brillo = `<p><strong>${this.nombre} brilla con fuerza.</strong></p><br>`
        document.getElementById("texto").innerHTML += brillo
    }
}