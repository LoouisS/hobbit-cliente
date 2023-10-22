import { razas, clases } from "./clase_raza.js";
import { Guardia } from "./guardia.js";


export class Caballero extends Guardia {

    constructor(nombre, clase = null, colorBarba = 'Pelirroja') {
        super(nombre, clase, colorBarba)

    }

    cortarCabezas(){
        this.hablar("Adoro la sangre... ¡JAJAJAJAJA!")
    }
}