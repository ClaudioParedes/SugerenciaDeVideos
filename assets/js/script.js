// 1. Implementar el Patrón Módulo mediante IIFE, en donde
// PATRON MODULO
let modulo = (()=>{

  // ● Se cree una función privada que reciba la url del video y el id de la etiqueta
// iframe, para así poder mostrar los videos en el documento HTML
    function funcionPrivada(url,id){
      id.setAttribute("src",url)
    }

    // ● Se retorne una función pública que reciba los parámetros (url, id), y realice el
    // llamado a la función interna (privada) para insertar los elementos recibidos.
    return {
        funcionPublica: (url,id)=>{funcionPrivada(url,id)}
    }
    
})()

// 2. Establecer una clase padre denominada Multimedia para: (2 Puntos)
// ● Recibir la propiedad url.
// CLASE MULTIMEDIA
class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
  }
  get url() {
    return this.getUrl();
  }
  setInicio() {
      return console.log('Este método es para realizar un cambio en la URL del video');
  }
}
// CLASE REPRODUCTOR HIJA DE MULTIMEDIA
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    let _id = id;
    this.getId = () => _id;
  }
  playMultimedia() {
      modulo.funcionPublica(this.url,this.getId())
  }
  setInicio(tiempo) {
      this.getId().setAttribute("src",`${this.url}?start=${tiempo}`)

  }
}

// INSTANCIA  "REPRODUCTOR" PARA LOS 3 VIDEOS 
let musicaReproductor = new Reproductor("https://www.youtube.com/embed/Vi2IQNs8hlE",musica);
let peliculaReproductor = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY',peliculas);
let serieReproductor = new Reproductor('https://www.youtube.com/embed/2Ins-o_RNnA',serie);

// LLAMADO A METODDOS
musicaReproductor.playMultimedia()
peliculaReproductor.playMultimedia()
serieReproductor.playMultimedia()
musicaReproductor.setInicio(200)