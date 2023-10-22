import { razas } from "./clase_raza.js";
import { Personaje } from "./personaje.js";


export class MiguelJaque extends Personaje {
    
    static sistemaOperativoFavorito = 'Linux'
    static lenguajeProgramacionFavorito = 'Javascript'

    static presentacion() {
        return "¡Muy Buenos dias!"
    }
    #colorBarba = 'Gris'

    constructor(nombre, clase = null, colorBarba = 'Gris') {
        super(nombre, razas.superHumano, clase)
    }

    picarCodigo() {
        console.log('Resolviendo problemas de algoritmia')
    }

    borrarBaseDatos() {
        
    }

    tirarProduccion() {
        console.log("Tirando produccion")
    }

    grabarTutorialYoutube() {

    }


}