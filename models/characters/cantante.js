import { Badbunny } from "./badBunny.js"

export class Cantante extends Badbunny {

    constructor(nombre) {
        super(nombre)
    }

    lamentarsePorNoSerBadBunny(){
        this.hablar("Soy un inútil jamás seré como él.")
    }
}