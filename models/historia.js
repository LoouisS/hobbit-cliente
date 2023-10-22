import { Enano } from "./characters/enano.js"
import { MiguelJaque } from "./characters/miguelJaque.js"
import { Mago } from "./characters/mago.js" 
import { Guardia } from "./characters/guardia.js" 
import { Caballero } from "./characters/caballero.js" 
import { razas, clases } from "./characters/clase_raza.js"
import { Objeto } from "./objeto.js"
import { Badbunny } from "./characters/badBunny.js"
import { Cantante } from "./characters/cantante.js"
import { Padremago } from "./characters/padremago.js"
import { Madremago } from "./characters/madremago.js"
import { Ultramegahipersuperobjeto } from "./ultramegahipersuperobjeto.js"


export class Historia {

    static mundo = "La Tierra Media"
    static capitulo = "La busqueda de las entradas de Bad Bunny 🐇"
    static autor = "Isaac Moya & Guillermo Sánchez"

    episodios = {
        1: () => this.escenaPrimera(),
        2: () => this.escenaSegunda(),
        3: () => this.escenaTercera(),
        4: () => this.escenaCuarta(),
        5: () => this.escenaQuinta(),
        6: () => this.escenaSexta(),
        7: () => this.escenaSeptima(),
        8: () => this.escenaOctava(),
        9: () => this.escenaNovena(),
        10: () => this.escenaDecima(),
        11: () => this.escenaDecimoPrimera(),
        12: () => this.escenaDoce(),
        13: () => this.escenaTrece(),
        14: () => this.escenaCatorce(),
        15: () => this.escenaQuince(),
        16: () => this.escenaDieciseis(),
        17: () => this.escenaDiecisiete()
    }

    static mostrarDetalles() {
        console.log(`Autor: ${Historia.autor}`)
        console.log(`Capitulo: ${Historia.capitulo}`)
        console.log(`Ambientación: ${Historia.mundo}`)
    }

    constructor() {
        this.escenaActual = 0
        this.muerteDwalin = 0
        this.gandalf = new Mago("Gandalf", clases.mago, undefined, undefined)

        this.bilbo = new Enano("Bilbo", clases.clerigo, 'Roja')
        this.bilbo = new Enano("Bilbo", clases.clerigo, 'Amarilla') 
        this.kili = new Enano("Kili", clases.saqueador, 'Amarilla')
        this.fili = new Enano("Fili", clases.javascriptDeveloper, 'Roja')
        this.dwalin = new Enano("Dwalin", clases.guerrero, 'Verde')

        this.mago = new Mago("Niño", clases.mago, null, 'ninio')
        this.dumbledore = new Mago("Cucaracha", clases.mago, null, 'cucaracha')
        this.guardia = new Guardia('Guardia', clases.guerrero, 'Negra')

        this.caballero = new Caballero('Caballero de armadura', clases.guerrero, undefined)
        this.badbunny = new Badbunny("Bad Bunny")
        this.cantante = new Cantante("Cantante Fracasado")
        this.miguel = new MiguelJaque("Miguel Jaque", clases.javascriptDeveloper, undefined)
        this.padremago = new Padremago("Padre del Mago", clases.mago, undefined, '')
        this.madremago = new Madremago("Madre del Mago", clases.mago, undefined, '')
    }
 
    avanzar() {
        if (this.escenaActual !== 15) {
            this.escenaActual += 1
            this.episodios[this.escenaActual]()  
        }
    }

    retroceder() {
        if (this.escenaActual !== 1) {
            this.escenaActual -= 1
            this.episodios[this.escenaActual]()
        }
    }

    escenaPrimera() {
        Historia.mostrarDetalles() // Se muestra por consola a proposito Miguel 😡 
        document.body.style.backgroundImage = "url('../images/bilbo.jpg')"
        document.getElementById('texto').style.display = 'block'
        document.getElementById('introduccion').style.display= 'none'
        document.getElementById('retroceder-button').style.display= 'inline'
        document.getElementById("texto").innerHTML += "<p><strong>Gandalf, Bilbo, Kili, Fili y Dwalin se encuentran en la casa de Bilbo tomando cerveza. De pronto, Gandalf recuerda algo que vió en un tablón de anuncios de un pueblo lejano y decide comentarlo con sus compañeros</strong></p>"

        this.gandalf.hablar("¿Os habéis enterado de que Bad Bunny viene a dar un concierto a la Tierra Media?")
        this.bilbo.hablar("A ese inepto no quiero verlo ni en pintura.")
        this.kili.hablar("Fili, Dwalin, ¿habéis oido eso?")
        this.fili.hablar("Por supuesto, hermano mío.")
        this.kili.hablar("Ayyyy...")
        this.dwalin.hablar('¡Bilbo Bolsón! ¿¡Cómo osas hablarle así a nuestro rey!? Ahora debes morir a nuestras manos…')
        this.fili.hablar('¡A por él, Dwalin!')

        document.getElementById("texto").innerHTML += "<p><strong>Dwalin coge un cuchillo que estaba clavado en la mesa</strong></p><br>"

        const cuchillo = new Objeto('Cuchillo')

        this.dwalin.coger(cuchillo)
        this.bilbo.hablar('¿Estás loco? No vas a matarme por no gustarme su música.')
        this.gandalf.hablar('No hay necesidad de matarnos entre nosotros por un concierto, amigos. Además, yo decidiré si iremos o no. Al fin y al cabo soy la persona más alta de esta habitación.')
        this.kili.hablar('Eso no tiene ningún sentido.')

        document.getElementById("texto").innerHTML += "<p><strong>Gandalf esta pensativo, debe de tomar una decision ahora:</strong></p>"
        document.getElementById('avanzar-button').onclick = this.episodios[3]
        document.getElementById('avanzar-button').textContent = '"Iremos al concierto."'
        document.getElementById('retroceder-button').onclick = this.episodios[2]
        document.getElementById('retroceder-button').textContent = '"Nos quedaremos en casa."'

        const botonMagico = document.createElement('button')
        document.body.appendChild(botonMagico)
        botonMagico.id = 'botonmagico'
        botonMagico.textContent = '"Usaremos mi UltraMegaHiperSuperObjeto™."'
        botonMagico.onclick = this.episodios[17]
        botonMagico.style.display= 'inline'
    }

    escenaSegunda() {
        document.body.style.backgroundImage = "url('../images/destruccion.jpg')"
        document.getElementById("texto").innerHTML += "<h3><strong>Finalmente, Gandalf decide no ir al concierto y quedarse bebiendo con sus amigos.</strong></h3>"
        
        this.gandalf.hablar("Decidido. No iremos a ver a ese maleante.")
        this.bilbo.hablar("¡Ja! Me parece que os vais a quedar sin ver a vuestro rey y mis oídos van a seguir intactos.")

        this.dwalin.hablar("Maldita sea. Hemos fracasado, compañeros. Gandalf ha decidido.")
        this.kili.hablar("Dios nos castigará debido a ello…")
        this.bilbo.hablar("¡Qué exagerados sois!")
        this.gandalf.hablar("Un momento, ¿Alguien más puede oir ese sonido que viene de afuera?")

        document.getElementById("texto").innerHTML += "<p><strong>Fili se asoma a la ventana y al mirar al cielo ve un meteorito que se aproxima a ellos.</strong></p><br>"
        
        this.fili.hablar("¡Tenías razón hermano!, ¡Dios viene a por nosotros!")

        document.getElementById("texto").innerHTML += "<hr><br><h4><strong>TODOS MUEREN DEBIDO A LA COLISIÓN DEL METEORITO CON LA CASA</strong></h4>"
        document.getElementById('avanzar-button').style.display = "none"
        document.getElementById('retroceder-button').style.display = "none"
        document.getElementById('botonmagico').style.display = 'none'
    }

    escenaTercera() {
        document.body.style.backgroundImage = "url('../images/taquilla.jpg')"
        document.getElementById('botonmagico').style.display = 'none'
        document.getElementById("texto").innerHTML += "<h3><strong>Gandalf decide que el equipo va a comprar las entradas.</strong></h3>"

        this.gandalf.hablar("Chicos, vamos a comprar las entradas para ir a ver a Bad Bunny.")
        this.fili.hablar("¡Bien!, ¡Gandalf ha decidido!")
        this.kili.hablar("Salgamos de aquí cuanto antes.")
        this.bilbo.hablar("Yo me quedo en casa.")
        this.dwalin.hablar("Pues ahí te quedas.")
        this.gandalf.hablar("Adios viejo amigo, bebe por nosotros.")
        this.bilbo.hablar("Dalo por hecho.")

        document.getElementById("texto").innerHTML += "<p><strong>Bilbo coge una jarra de cerveza y le se la bebe del tirón.</strong></p><br>"

        const cerveza = new Objeto('Cerveza')

        this.bilbo.coger(cerveza)
        this.bilbo.beberObjeto(cerveza)

        document.getElementById("texto").innerHTML += "<p><strong>Al salir Gandalf y los enanos de la casa, cae un meteorito sobre ella con Bilbo dentro. Bilbo muere.</strong></p><br>"

        this.gandalf.hablar("¡Dios santo!, ¡Bilbo!")
        this.kili.hablar("Se lo merece.")
        this.dwalin.hablar("Daos prisa, ¡se agotan las entradas!")

        document.getElementById("texto").innerHTML += "<p><strong>Llegan al sitio donde venden las entradas y ya no quedan, están agotadas.</strong></p><br>"
  
        this.fili.hablar("Estoy harto, por culpa de los lamentos de Gandalf y de ese bocazas de Bilbo no hemos llegado a tiempo. Me toca decidir, a partir de ahora seré el lider.")
  
        document.getElementById("texto").innerHTML += "<p><strong>De pronto Fili divisa a un niño en la distancia, con exactamente 4 entradas.</strong></p>"
        document.getElementById("texto").innerHTML += "<p><strong>Fili lo tiene claro:</strong></p>"
        document.getElementById('avanzar-button').onclick = this.episodios[4]
        document.getElementById('avanzar-button').textContent = '"¡Miraremos por internet!, seguro que hay entradas de reventa."'
        document.getElementById('retroceder-button').onclick = this.episodios[5]
        document.getElementById('retroceder-button').textContent = '"Tengo una idea genial, robemosle las entradas a ese niño de allí."'
    }
    
    escenaCuarta() {
        document.body.style.backgroundImage = "url('../images/movil.jpg')"
        document.getElementById("texto").innerHTML += "<h3><strong>Fili decide revisar como están las entradas de reventa por internet.</strong></h3>"

        this.fili.hablar("Usemos el móvil de Kili para buscar entradas, a ver si están a buen precio.")
        this.kili.hablar("¡Es una buena idea! Un momento, ¿donde está mi móvil?")
        this.gandalf.hablar("¿Acaso lo habéis perdido, inútiles?")
        this.dwalin.hablar("Te lo quité yo, Kili. Pero no sé utilizar esta tecnología tan avanzada.")
        this.kili.hablar("¡Pues devuelvemelo, idiota! No nos queda mucho tiempo.")

        document.getElementById("texto").innerHTML += "<p><strong>Dwalin pasa el movil a Kili y este empieza a buscar por internet.</strong></p><br>"
        
        const movil = new Objeto('Móvil')

        this.dwalin.pasar(movil,this.kili)

        this.kili.hablar("Maldita sea, ¡la página web está saturada de tantas peticiones http!")
        this.gandalf.hablar("Hay que buscar otra manera, o rendirnos.")

        document.getElementById("texto").innerHTML += "<p><strong>Gandalf piensa que pueden hacer:</strong></p>"

        const button8 = document.createElement("button")
        button8.id = "boton8"

        const button9 = document.createElement("button")
        button9.id = "boton9"

        document.body.appendChild(button8)
        document.body.appendChild(button9)
        boton8.style.display= 'inline'
        boton9.style.display= 'inline'

        document.getElementById('avanzar-button').onclick = this.episodios[6]
        document.getElementById('avanzar-button').textContent = '"Le pediremos a Dios un favor divino."'
        document.getElementById('retroceder-button').onclick = this.episodios[7]
        document.getElementById('retroceder-button').textContent = '"Desarrolladremos un bot para comprar las entradas automáticamente."'
        document.getElementById('boton8').onclick = this.episodios[8]
        document.getElementById('boton8').textContent = '"Tenemos que ver videos de Miguel Jaque Barbero y dejar el concierto de lado."'
        document.getElementById('boton9').onclick = this.episodios[9]
        document.getElementById('boton9').textContent = '"Nos rendimos."'
    }
    
    escenaQuinta() {
        document.body.style.backgroundImage = "url('../images/prision.jpg')"
        document.getElementById("texto").innerHTML += "<h3><strong>Fili decide robarle las entradas al niño que pasaba por allí.</strong></h3>"

        this.fili.hablar("Vamos a robarle las entradas a ese niño de allí.")
        this.gandalf.hablar("¿Estás loco Fili? Es un niño pequeño, ¡sus padres podrían ser poderosos magos!")
        this.fili.hablar("¿Acaso tienes otra idea mejor?")
        this.gandalf.hablar("Está bien, pero que vaya Dwalin. A él se le da mejor robar.")
        this.dwalin.hablar("Dejadmelo a mí.")

        document.getElementById("texto").innerHTML += "<p><strong>Dwalin se pone delante del niño y le dice que le hará mucho daño a su familia si no le da lo que él quiere.</strong></p><br>"
        
        this.dwalin.hablar("Vamos chico, dame todas las entradas.")
        this.mago.hablar("No voy a hacer eso, enano de pacotilla.")
        this.dwalin.hablar("¡Te destruiré renacuajo!")

        document.getElementById("texto").innerHTML += "<p><strong>El niño se transforma, era un mago adulto de incógnito.</strong></p><br>"

        this.mago.transformar()

        this.mago.hablar("Parece que te has equivocado de persona.")

        document.getElementById("texto").innerHTML += "<p><strong>El mago ataca a Dwalin.</strong></p><br>"

        this.mago.atacar(this.dwalin)

        this.fili.hablar("¡Dwalin!")

        document.getElementById("texto").innerHTML += "<p><strong>Un hombre y una mujer mayores se acercan a la escena.</strong></p><br>"

        this.padremago.hablar("Os lo tenéis bien merecido por meteros con nuestro hijo.")

        this.padremago.demandar(this.gandalf)
        this.padremago.demandar(this.dwalin)
        this.madremago.demandar(this.fili)
        this.madremago.demandar(this.kili)

        this.madremago.hablar("Hemos llamado a las autoridades y denunciado el delito.")
        this.gandalf.hablar("Tenemos que irnos de aquí, ahora.")

        document.getElementById("texto").innerHTML += "<p><strong>Llegan las autoridades y los acorralan.</strong></p><br>"

        this.padremago.hablar("Demasiado tarde.")

        document.getElementById("texto").innerHTML += "<p><strong>Nuestros compañeros de aventura se encuentran en prisión, donde lo único que hay en su celda compartida es: una cama de piedra, un agujero en el suelo, una cucaracha pululando, y al otro lado de la reja, un guardia dormido.</strong></p><br>"

        this.gandalf.hablar("¿Y ahora qué hacemos?")

        this.dwalin.hablar("Seguro que hay algo que podamos hacer por aquí para escapar.")

        document.getElementById("texto").innerHTML += "<p><strong>Dwalin piensa por un momento...</strong></p>"

        document.getElementById('avanzar-button').onclick = this.episodios[10]
        document.getElementById('avanzar-button').textContent = '"Le pondré un nombre a esa cucaracha y seremos amigos."'
        document.getElementById('retroceder-button').onclick = this.episodios[11]
        document.getElementById('retroceder-button').textContent = '"Despertaré al guardia para que nos saque de aquí."'

        const button12 = document.createElement("button")
        button12.id = "boton12"

        const button13 = document.createElement("button")
        button13.id = "boton13"

        document.body.appendChild(button12)
        document.body.appendChild(button13)

        boton12.onclick = this.episodios[12]
        boton12.textContent = '"Un momento..., ¿Qué hay en ese agujero?."'
        boton12.style.display= 'inline'

        boton13.onclick = this.episodios[13]
        boton13.textContent = '"Estoy muy cansado, me acostaré en esa cama."'
        boton13.style.display= 'inline'
    }
    
    escenaSexta() {
        document.getElementById("texto").innerHTML += "<h3><strong>Gandalf le pide un favor divino a Dios.</strong></h3>"

        this.gandalf.hablar("Oh, Dios. Te lo suplico, llévanos a ver el concierto de Bad Bunny.")
        
        this.kili.hablar("¿Pero qué diablos estás haciendo?")
        
        this.fili.hablar("¿No huele un poco a lluvia?")
        
        document.getElementById("texto").innerHTML += "<br><hr><h4><strong>¡EMPIEZA A TRONAR! HAN ENFADADO A DIOS Y ESTE LES HA CASTIGADO, TODOS MUEREN.</strong></h4><br><br>"
        document.getElementById('avanzar-button').style.display = "none"
        document.getElementById('retroceder-button').style.display = "none"
        document.getElementById('boton8').style.display = "none"
        document.getElementById('boton9').style.display = "none"
    }
    
    escenaSeptima() {
        document.getElementById("texto").innerHTML += "<h3><strong>Gandalf apuesta por desarrollar el bot.</strong></h3>"

        this.gandalf.hablar("Creemos un bot para comprar las entradas automáticamente cuando estén disponibles.")
        this.dwalin.hablar("Eso suena bien, pero con los conocimientos que tenemos actualmente calculo que tardaremos unas cuantas semanas.")
        this.gandalf.hablar("No podemos tardar tanto, el concierto es esta noche.")
        this.fili.hablar("Yo creo que es la mejor opción, y la única que nos queda…")
        this.kili.hablar("Estoy con Fili, ¡pongámonos a ello!")

        document.getElementById("texto").innerHTML += "<hr><h4><strong>TARDAN UN MES EN DESARROLLARLO PORQUE NO TUVIERON EN CUENTA EL ESFUERZO Y EL DEADLINE. SE QUEDAN SIN IR AL CONCIERTO.</strong></h4>"
        document.getElementById('avanzar-button').style.display = "none"
        document.getElementById('retroceder-button').style.display = "none"
        document.getElementById('boton8').style.display = "none"
        document.getElementById('boton9').style.display = "none"
    }
    
    escenaOctava() {
        document.getElementById("texto").innerHTML += "<h3><strong>Gandalf propone ver videos de Miguel Jaque Barbero.</strong></h3>"

        this.gandalf.hablar("Amigos, hay cosas más importantes en la vida que ir a un concierto de Bad Bunny. Os propongo que nos sentemos a deleitarnos con videos del famoso Miguel Jaque Barbero, el humano más inteligente que he conocido.")
        this.fili.hablar("Pero nuestro rey Bad Bunny solo vendrá una vez. Miguel Jaque será eterno.")
        this.kili.hablar("Exacto, a Miguel Jaque ya le vemos todos los días.")
        this.dwalin.hablar("Pero chicos, Gandalf tiene razón. Nuestro éxito profesional es lo más importante, debemos formarnos.")

        document.getElementById("texto").innerHTML += "<p><strong>En la distancia aparece la figura de un hombre musculoso y fornido, alto, rubio y de ojos azules. Como si de un personaje de la serie 'Baki' se tratara.</strong></p><br>"
        
        this.miguel.hablar("Hola chicos, no hace falta que veais videos mios. Estoy aquí, en persona, y vengo a ayudaros en todas las dudas que tengáis sobre JavaScript, Html, CSS, PHP, SQL, Python, C, Java, Fortran, Blender, Minecraft, y todo eso.")
        this.gandalf.hablar("¡Ay mai! ¡Pero si es Miguel Jaque Barbero en persona!")
        this.kili.hablar("¿Cómo es posible que esté aquí? Parece que nos ha escuchado.")
        this.miguel.hablar("Pues claro que os he oído, sois futuros desarrolladores. Es más, traigo conmigo un obsequio para vosotros. Tomad.")

        document.getElementById("texto").innerHTML += "<p><strong>Miguel les da a cada uno un Thinkpad P14s Gen 3</strong></p>"

        const thinkPadP14sGen3 = new Objeto('Thinkpad P14s Gen 3')

        this.miguel.pasar(thinkPadP14sGen3,this.gandalf)
        this.miguel.pasar(thinkPadP14sGen3,this.dwalin)
        this.miguel.pasar(thinkPadP14sGen3,this.fili)
        this.miguel.pasar(thinkPadP14sGen3,this.kili)

        document.getElementById("texto").innerHTML += "<hr><h4><strong>MIGUEL JAQUE BARBERO SOLUCIONA LAS VIDAS DE GANDALF, DWALIN, FILI Y KILI. LOGRAN TENER UNA CARRERA BRILLANTE EN EL ÁMBITO DEL DESARROLLO WEB. (FINAL BUENO)</strong></h4>"
        document.getElementById('avanzar-button').style.display = "none"
        document.getElementById('retroceder-button').style.display = "none"
        document.getElementById('boton8').style.display = "none"
        document.getElementById('boton9').style.display = "none"
    }
    
    escenaNovena() {
        document.getElementById("texto").innerHTML += "<h3><strong>Gandalf se rinde.</strong></h3>"

        this.gandalf.hablar("Mira yo paso.")
        this.fili.hablar("¿Cómo que pasas?")
        this.gandalf.hablar("Que me rindo. Me voy a casa.")
        this.fili.hablar("Pero si el meteorito la destruyó, no tenemos a donde ir.")
        this.gandalf.hablar("Maldita sea, es cierto. Entonces vayamos a derrotar a Sauron")
        
        document.getElementById("texto").innerHTML += "<hr><h4><strong>DERROTAN A SAURON Y RECUPERAN EL ANILLO (FINAL BUENO).</strong></h4>"
        document.getElementById('avanzar-button').style.display = "none"
        document.getElementById('retroceder-button').style.display = "none"
        document.getElementById('boton8').style.display = "none"
        document.getElementById('boton9').style.display = "none"
    }
    
    escenaDecima() {
        document.body.style.backgroundImage = "url('../images/bb.jpg')"
        let nombreCuca = ''

        do {
            nombreCuca = prompt('¿Qué nombre le pone Dwalin a la cucaracha?')
            if (nombreCuca === '' || nombreCuca === null){
                alert('Dwalin no le puso nombre a la cucaracha...')
            }else{
                document.getElementById("texto").innerHTML += "<h3><strong>Dwalin le puso un nombre a la cucaracha.</strong></h3>"
            }
        } while(nombreCuca === '' || nombreCuca === null)

        document.getElementById('boton12').style.display = 'none'
        document.getElementById('boton13').style.display = 'none'
        document.getElementById('avanzar-button').style.display = 'none'
        document.getElementById('retroceder-button').style.display = 'none'

        this.dwalin.hablar("Eres muy mona, te llamaré "+nombrecuca)

        this.dumbledore.setNombre(nombrecuca)

        this.dumbledore.hablar("Me has caído bien, enano. Os ayudaré a escapar de aquí como pueda.")

        this.dwalin.hablar("Vaya…, perdona no sabía que podías hablar.")

        this.dumbledore.hablar("JAJAJA, no te preocupes, a mí no me importa.")

        this.gandalf.hablar("Un momento, esa voz me suena de algo…")

        document.getElementById("texto").innerHTML += "<p><strong>La cucaracha muta y se comienza a ver la silueta de un mago.</strong></p><br>"

        this.dumbledore.transformar()

        this.dumbledore.hablar("Así es, compañero. Soy yo, Dumbledore. Pero ya habrá tiempo de presentaciones, primero vayámonos de aquí.")

        this.gandalf.hablar("Vaya, pero que sorpresa tan agradable...")

        document.getElementById("texto").innerHTML += "<p><strong>Dumbledore los saca de prisión teletransportandose fuera de la misma y llevándolos con él, también les borra la denuncia y sus antecedentes, y les crea con magia 4 entradas VIP para el concierto.</strong></p><br>"
        
        const entradavip = new Objeto('Entrada VIP')

        this.dumbledore.pasar(entradavip,this.dwalin)
        this.dumbledore.pasar(entradavip,this.fili)
        this.dumbledore.pasar(entradavip,this.kili)
        this.dumbledore.pasar(entradavip,this.gandalf)

        document.getElementById("texto").innerHTML += "<p><strong>Ya por la noche…</strong></p><br>"

        this.dumbledore.hablar("Bueno, me alegro de conoceros, enanos. Y a tí me alegro de verte Gandalf.")

        this.gandalf.hablar("Es un placer. Te debemos una, Dumbledore.")

        this.dwalin.hablar("Usted es el mejor mago, señor Dumbledore. Gracias por todo.")

        this.dumbledore.hablar("Ya me marcho, nos veremos pronto.")

        document.getElementById("texto").innerHTML += "<p><strong>Dumbledore se va.</strong></p><br>"
        
        this.fili.hablar("No me puedo creer que el concierto vaya a empezar y estemos en el palco VIP.")
        this.kili.hablar("¡Fili, apártate! Bad Bunny se acerca por detrás de ti y no logro verlo bien. ")

        document.getElementById("texto").innerHTML += "<p><strong>Bad Bunny saluda a los héroes.</strong></p><br>"

        this.badbunny.hablar("Hola mi gente, disfruten del concierto. He oído que son grandes fans míos.")

        this.kili.hablar("¡Te amamos!")

        this.fili.hablar(Enano.alabarBadBunny())

        this.badbunny.hablar("Bueno chicos ha sido agradable estar con ustedes, adiós.")
        
        document.getElementById("texto").innerHTML += "<p><strong>Empieza el concierto y Bad Bunny canta una canción.</strong></p>"

        const cancion = 'Yonaguni'
        this.badbunny.cantar(cancion)

        this.cantante.lamentarsePorNoSerBadBunny()

        document.getElementById("texto").innerHTML += "<hr><h4><strong>NUESTROS HEROES LOGRARON IR AL CONCIERTO. (FINAL BUENO)</strong></h4>"
    }
    
    escenaDecimoPrimera() {
        document.getElementById("texto").innerHTML += "<h3><strong>Dwalin llama al guardia para despertarlo.</strong></h3>"

        document.getElementById('boton12').style.display = 'none'
        document.getElementById('boton13').style.display = 'none'
        document.getElementById('avanzar-button').style.display = 'none'
        document.getElementById('retroceder-button').style.display = 'none'

        this.dwalin.hablar("Despierta, ¡guardia!")
        this.guardia.hablar("Hmmm… ¿Qué quieres?")
        this.dwalin.hablar("Hazme un favor y ábrenos la puerta, ¡feo!")
        this.guardia.hablar("Oh, claro, lo haré.")
        this.fili.hablar("¡Qué bien, Dwalin! ¡Lo has convencido!")

        document.getElementById("texto").innerHTML += "<p><strong>El guardia abre la puerta y ataca a Dwalin.</strong></p>"

        this.guardia.atacar(this.dwalin)

        this.gandalf.hablar("¡Dwalin!")

        this.fili.hablar("¡Eh, idiota!, ¡deja a Dwalin en paz!")

        document.getElementById("texto").innerHTML += "<p><strong>Fili empuja al guardia hacia la celda.</strong></p>"

        this.kili.atacar(this.guardia)

        this.kili.hablar("Vamos, salid todos de la celda, coged a Dwalin.")

        document.getElementById("texto").innerHTML += "<p><strong>El guardia es encerrado en la celda y los héroes escapan, una vez en la calle otro guardia les detiene.</strong></p>"

        this.caballero.hablar("¿A donde creeis que vais?")
        this.gandalf.hablar("Estamos perdidos…")
        this.caballero.cortarCabezas()

        document.getElementById("texto").innerHTML += "<hr><h4><strong>LOS DECAPITAN EN LA PLAZA Y MUEREN TODOS.</strong></h4>"
    }
    
    escenaDoce() {
        document.getElementById("texto").innerHTML += "<h3><strong>Dwalin mira el agujero.</strong></h3>"

        this.dwalin.hablar("¡Buff! ¡Este agujero huele fatal!")
        this.gandalf.hablar("Claro, Dwalin. Es el inodoro de la celda.")
        this.dwalin.hablar("Me he manchado las manos, ¡puaj!")
        this.fili.hablar("Espera, Dwalin sigue buscando, ¡ahí hay algo que brilla!")

        document.getElementById('avanzar-button').textContent = '"De acuerdo. Pero huele fatal, que lo sepas."'
        document.getElementById('retroceder-button').textContent = '"¡Pero qué asco! Ni loco."'
        document.getElementById('avanzar-button').onclick = this.episodios[14]
        document.getElementById('retroceder-button').onclick = this.episodios[16]

        document.getElementById('boton12').style.display = 'none'
        document.getElementById('boton13').style.display = 'none'
    }
    
    escenaTrece() {
        document.getElementById("texto").innerHTML += "<h3><strong>Dwalin se deja dormir en la cama de piedra.</strong></h3>"

        this.dwalin.hablar("¡Esta cama es super incómoda! Aquí no hay quien duerma.")

        this.fili.hablar("Pues no te acuestes en ella…")

        document.getElementById("texto").innerHTML += "<p><strong>Dwalin se levanta de la cama.</strong></p>"

        this.muerteDwalin++

        document.getElementById('avanzar-button').onclick = this.episodios[10]
        document.getElementById('avanzar-button').textContent = '"Le pondré un nombre a esa cucaracha y seremos amigos."'
        document.getElementById('retroceder-button').onclick = this.episodios[11]
        document.getElementById('retroceder-button').textContent = '"Despertaré al guardia para que nos saque de aquí."'

        const boton12 = document.getElementById('boton12')

        const boton13 = document.getElementById('boton13')

        boton12.onclick = this.episodios[12]
        boton12.textContent = '"Un momento..., ¿Qué hay en ese agujero?."'
        boton12.style.display= 'inline'

        if (this.muerteDwalin >= 4){
            boton13.onclick = this.episodios[15]
        } else {
            boton13.onclick = this.episodios[13]
        }

        boton13.textContent = '"Estoy muy cansado, me acostaré en esa cama."'
        boton13.style.display= 'inline'

    }
    
    escenaCatorce() {
        document.getElementById("texto").innerHTML += "<h3><strong>Dwalin continúa buscando en el agujero.</strong></h3>"

        this.dwalin.hablar("¡Eh, chicos! ¡he encontrado una llave!")

        document.getElementById("texto").innerHTML += "<p><strong>Dwalin coge la llave.</strong></p>"
        
        const llave = new Objeto('Llave')

        this.dwalin.coger(llave)

        this.gandalf.hablar("Es probable que sea la de la celda.")
        this.fili.hablar("¡Tiene toda la pinta! ¡pruebala Dwalin!")
        this.dwalin.hablar("¡Enseguida!")

        document.getElementById("texto").innerHTML += "<p><strong>Consiguen escapar de la celda y se marchan a casa.</strong></p>"
    
        this.kili.hablar("Maldita sea, ahora tenemos antecedentes penales y además nos hemos perdido el concierto de Bad Bunny, ¡estamos condenados!")
        this.gandalf.hablar("Por no hablar de que a Bilbo le ha caído un meteorito y nos hemos quedado sin casa, menudo día.")

        document.getElementById("texto").innerHTML += "<h4><strong>NUESTROS AMIGOS SE QUEDAN SIN VER EL CONCIERTO DE BAD BUNNY.</strong></h4>"

        document.getElementById('avanzar-button').style.display = 'none'
        document.getElementById('retroceder-button').style.display = 'none'
    }
    
    escenaQuince() {
        document.getElementById("texto").innerHTML += "<h3><strong>¡Dwalin ha desarrollado una rara enfermedad en los huesos!</strong></h3>"

        this.dwalin.hablar("No puedo caminar, amigos. Estamos condenados")

        document.getElementById("texto").innerHTML += "<hr><h4><strong>DWALIN HA DESARROLLADO UNA ENFERMEDAD DE TANTO ACOSTARSE EN UNA CAMA DE PIEDRA. (FINAL SECRETO)</strong></h4>"
    
        document.getElementById('avanzar-button').style.display = 'none'
        document.getElementById('retroceder-button').style.display = 'none'
        document.getElementById('boton12').style.display = 'none'
        document.getElementById('boton13').style.display = 'none'
    }

    escenaDieciseis() {
        document.getElementById("texto").innerHTML += "<h3><strong>Dwalin lo deja estar.</strong></h3>"

        this.gandalf.hablar("Eres un rajado, Dwalin.")
        this.dwalin.hablar("Pues si tan listo eres hazlo tú.")
        this.gandalf.hablar("Para mí es más difícil porque tengo que agacharme, pero tú no. ¡JAJAJAJAJA!")
        this.dwalin.hablar("Muy gracioso... A ver, ¿Qué hago yo ahora?")

        document.getElementById('avanzar-button').onclick = this.episodios[10]
        document.getElementById('avanzar-button').textContent = '"Le pondré un nombre a esa cucaracha y seremos amigos."'
        document.getElementById('retroceder-button').onclick = this.episodios[11]
        document.getElementById('retroceder-button').textContent = '"Despertaré al guardia para que nos saque de aquí."'

        const boton12 = document.getElementById('boton12')
        boton12.style.display= 'none'

        const boton13 = document.getElementById('boton13')

        boton13.onclick = this.episodios[13]

        boton13.textContent = '"Estoy muy cansado, me acostaré en esa cama."'
        boton13.style.display= 'inline'
    }

    escenaDiecisiete() {
        document.getElementById("texto").innerHTML += "<h3><strong>Gandalf opta por usar su UltraMegaHiperSuperObjeto™.</strong></h3>"

        this.gandalf.hablar("¿Qué os parece si utilizo mi UltraMegaHiperSuperObjeto™ ?")
        this.bilbo.hablar("Gandalf, no.")
        this.dwalin.hablar("Suena interesante. Muestranoslo, Gandalf.")
        this.gandalf.hablar("Es un objeto muy poderoso y con varias utilidades, en concreto tiene 3. ¿Queréis saber qué hacen?")
        this.fili.hablar("Por Dios, sí.")
        this.kili.hablar("Necesitamos verlo.")
        this.gandalf.hablar("¿Verlo? ¡JAJAJAJA! ¡Pero qué graciosos sois!")
        this.bilbo.hablar("Gandalf, no se te ocurra hacerlo.")
        this.gandalf.hablar("Tranquilo, Bilbo. Ya lo tengo dominado. No como aquella vez en la que los Flerkens nos atacaron por sorpresa.")
        this.bilbo.hablar("Malditos gatos alienígenas... Está bien Gandalf, enseñanos tu poder.")
        this.gandalf.hablar("¡Contemplad al poderoso UltraMegaHiperSuperObjeto™!")

        const ultraMegaHiperSuperObjeto = new Ultramegahipersuperobjeto('UltraMegaHiperSuperObjeto™')
        ultraMegaHiperSuperObjeto.brillar()

        this.dwalin.hablar("¡Cómo brilla! ¡Es impresionante!")
        this.kili.hablar("¿Y qué más hace?")
        this.gandalf.hablar("Nada, creo que solo brilla.")

        ultraMegaHiperSuperObjeto.brillarMuchisimo()

        this.bilbo.hablar("¡Dios! Casi me deja ciego.")
        this.fili.hablar("Parece que ahora ha brillado muchisimo más. Ha sido horrible.")

        ultraMegaHiperSuperObjeto.cegarDeLoMuchoQueBrilla()

        this.gandalf.hablar("¡AHHHHHHHHHHHH!")
        this.dwalin.hablar("¡NO VEO NADA!")
        this.fili.hablar("¡AYYYYY MI CUKI!")
        this.kili.hablar("¡APAGALO, APAGALO!")
        this.bilbo.hablar("¡¡PERO QUÉ DEMONIOS NOS HA HECHO ESO!?")
        ultraMegaHiperSuperObjeto.hablar("Siento haberos cegado, desconocidos.")
        this.gandalf.hablar("¡DESDE CUANDO PUEDES HABLAR!")
        ultraMegaHiperSuperObjeto.hablar("Oh, siempre pude. Solo que siempre me teníais encerrado.")
        this.dwalin.hablar("¡MALDITO SEAS! ¡DEJA DE BRILLAR!")
        this.fili.hablar("¡APAGATE, APAGATE!")
        this.kili.hablar("¡LOS OBJETOS NO HABLAN!")
        this.bilbo.hablar("¡GANDALF, DESHAZTE DE ESE OBJETO CREADO CONVENIENTEMENTE PARA CUMPLIR CON LA RÚBRICA!")
        this.gandalf.hablar("¡LO TIRÉ POR LA VENTANA NADA MÁS QUEDARME CIEGO, NO SÉ POR QUÉ LO ESCUCHAMOS AÚN!")
        this.dwalin.hablar("¡PREFIERO MORIR A SEGUIR SINTIENDO ESTO, AYUDA POR FAVOR!")
        ultraMegaHiperSuperObjeto.hablar("¡Hasta lueguito!")
        this.fili.hablar("¡VUELVE AQUÍ, NO NOS DEJES ASÍ!")
        this.gandalf.hablar("¡TRAIDOR!")

        document.getElementById("texto").innerHTML += "<hr><h4><strong>NUESTROS ACLAMADOS HÉROES NO PUDIERON VER EL CONCIERTO QUE QUERÍAN POR MOTIVOS EVIDENTES. (FINAL TERRIBLE)</strong></h4>"

        document.getElementById('avanzar-button').style.display = 'none'
        document.getElementById('retroceder-button').style.display = 'none'
        document.getElementById('botonmagico').style.display = 'none'
    }
    
}