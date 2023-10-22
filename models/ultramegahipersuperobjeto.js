import { Megaobjeto } from "./megaobjeto.js"

export class Ultramegahipersuperobjeto extends Megaobjeto{

    constructor(nombre) {
        super(nombre)
    }

    cegarDeLoMuchoQueBrilla(){
        let brillo = `<p><strong>${this.nombre} brilla tanto que ciega todo ser vivo a su paso e incluso los que no están a su paso.</strong></p><br>`
        document.getElementById("texto").innerHTML += brillo
    }

    hablar(texto) {
        let textoMejorado = `<strong>${this.nombre}:</strong> "${texto}"<br><br>`
        document.getElementById("texto").innerHTML += textoMejorado
    }
}