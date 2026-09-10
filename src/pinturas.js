// OLEOS A LA VELADURA - IMPORTS
import imgArlequina from './img/PINTURAS/Arlequina-y-sus-Amigos.jpg'
import imgCentauro from './img/PINTURAS/CENTAURO-ENAMORADO.jpg'
import imgMago from './img/PINTURAS/MAGNÉTICO-MAGO.jpg'
import imgConquista from './img/PINTURAS/conquista-pasion-y-muerte.jpg'
import imgPoseidon from './img/PINTURAS/POSEIDÓN-Y-SUS-SIRENAS.jpg'
import imgVencer from './img/PINTURAS/vencer-o-morir.jpg'
import imgRetorno from './img/PINTURAS/RETORNO-DEL-REY.jpg'
import imgReyPrincesa from './img/PINTURAS/REY-Y-LA-PRINCESA.jpg'
import imgLeonMistico from './img/PINTURAS/leon-mistico.jpg'
import imgArmonia from './img/PINTURAS/armonia.jpg'
import imgDolor from './img/PINTURAS/DOLOR-EN-EL-CEMENTERIO.jpg'
import imgExploracion from './img/PINTURAS/EXPLORACIÓN.jpg'
import imgAres from './img/PINTURAS/victoria-de-ares.jpg'
import imgBatalla from './img/PINTURAS/batalla-epica.jpg'
import imgAngelo from './img/PINTURAS/angelo-di-leonardo.jpg'
import imgArmiño from './img/PINTURAS/dama-del-armino.jpg'

// DATOS DE OBRAS
const pinturas = [
  { id: 'Arlequina-img', title: 'Arlequina y sus Amigos', dimensions: '89x60cm', img: imgArlequina },
  { id: 'Centauro-img', title: 'Centauro Enamorado', dimensions: '87x62cm', img: imgCentauro },
  { id: 'Mago-img', title: 'El Magnético Mago', dimensions: '35x25cm', img: imgMago },
  { id: 'Conquista-img', title: 'Conquista, Pasión y Muerte', dimensions: '55x80cm', img: imgConquista },
  { id: 'Poseidon-img', title: 'Poseidón y las Sirenas', dimensions: '60x85cm', img: imgPoseidon },
  { id: 'Vencer-img', title: 'Vencer o morir', dimensions: '60x84cm', img: imgVencer },
  { id: 'Retorno-img', title: 'El Retorno del Rey', dimensions: '75x53cm', img: imgRetorno },
  { id: 'Rey-princesa-img', title: 'El Rey y la Princesa', dimensions: '84x59cm', img: imgReyPrincesa },
  { id: 'Leon-mistico-img', title: 'León Mistico', dimensions: '80x57cm', img: imgLeonMistico },
  { id: 'Armonia-img', title: 'Armonía', dimensions: '60x85cm', img: imgArmonia },
  { id: 'Dolor-img', title: 'Dolor en el Cementerio', dimensions: '58x85cm', img: imgDolor },
  { id: 'Exploracion-img', title: 'La Exploración', dimensions: '55x90cm', img: imgExploracion },
  { id: 'Ares-img', title: 'La Victoria de Ares', dimensions: '60x84cm', img: imgAres },
  { id: 'Batalla-img', title: 'Batalla Epica', dimensions: '58x83cm', img: imgBatalla },
  { id: 'Angelo-img', title: 'Angel (L. Da Vinci)', dimensions: 'x cm', img: imgAngelo },
  { id: 'Armiño-img', title: 'La Dama y el Armiño (L. da Vinci)', dimensions: 'x cm', img: imgArmiño },
]

// FUNCIÓN FACTORY PARA CREAR CAJAS (seguro contra XSS)
function createPinturaBox(pintura) {
  const box = document.createElement('div')
  box.classList.add('box-class')
  
  const img = document.createElement('img')
  img.id = pintura.id
  img.classList.add('pinturas-class-1', 'art-image')
  img.src = pintura.img
  img.loading = 'lazy'
  
  const info = document.createElement('div')
  const p = document.createElement('p')
  p.append(
    pintura.title,
    document.createElement('br'),
    pintura.dimensions
  )
  info.append(p)
  
  box.append(img, info)
  return box
}

// CREAR TÍTULO Y CONTENEDOR
const tituloPinturas = document.createElement('div')
      tituloPinturas.id = 'titulo-pinturas'
      const h2 = document.createElement('h2')
      h2.textContent = '"Óleos a la Veladura"'
      const p = document.createElement('p')
      p.textContent = 'La técnica del óleo a la veladura fue desarrollada en Europa en tiempos del Renacimiento, utilizadas por los grandes maestros de la pintura como Leonardo Da Vinci y Jan van Eyck entre otros.'
      tituloPinturas.append(h2, p)    
const divPinturas = document.createElement('div')
      divPinturas.id = 'div-pinturas'
      divPinturas.classList.add('div-pinturas-class')

// GENERAR TODAS LAS OBRAS DINÁMICAMENTE
pinturas.forEach(pintura => {
  divPinturas.append(createPinturaBox(pintura))
})

export {tituloPinturas, divPinturas,}