import { Superobjeto } from "./superobjeto.js"

export class Megaobjeto extends Superobjeto{

    constructor(nombre) {
        super(nombre)
    }

    brillarMuchisimo(){
        let brillo = `<p><strong>${this.nombre} brilla con muchisima fuerza.</strong></p><br>`
        document.getElementById("texto").innerHTML += brillo
    }
}