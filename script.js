import { Historia } from "./models/historia.js";

const historia = new Historia()

const divtext = document.getElementById("texto")
divtext.style.display = 'none' 

const botonAvanzar = document.getElementById("avanzar-button")
const botonRetroceder = document.getElementById("retroceder-button")

botonRetroceder.style.display= 'none'
botonAvanzar.onclick = () => historia.avanzar() 




