// GRABADOS EN TELA - IMPORTS
import img_Arlequina_Gt3C from './img/GRABADO-TELA/Arlequina-3-color.jpg'
import img_Arlequina_Gt2C from './img/GRABADO-TELA/Arlequina-2-color.jpg'
import img_Arlequina_Gt4C from './img/GRABADO-TELA/Arlequina-4-color.jpg'
import img_Vencer_Gt1s from './img/GRABADO-TELA/Vencer-1-sepia.jpg'
import img_Armonia_Gt1c from './img/GRABADO-TELA/Armonia-color.jpg'
import img_Ares_Gt1s from './img/GRABADO-TELA/Ares-1-sepia.jpg'
import img_Arlequina_Gt1s from './img/GRABADO-TELA/Arlequina-1-sepia.jpg'
import img_Retorno_Gt1s from './img/GRABADO-TELA/Retorno-sepia.jpg'
import img_Centauro_Gt1s from './img/GRABADO-TELA/Centauro-1-sepia.jpg'
import img_Exploracion_Gt1s from './img/GRABADO-TELA/Exploracion-sepia.jpg'
import img_Poseidon_Gt1s from './img/GRABADO-TELA/Poseidon-1-sepia.jpg'
import img_Dolor_Gt1s from './img/GRABADO-TELA/Dolor-1-sepia.jpg'
import img_Mago_Gt1s from './img/GRABADO-TELA/Mago-1-sepia.jpg'
import img_Leon_mistico_Gt1s from './img/GRABADO-TELA/Leon-Mistico-1-sepia.jpg'
import img_Rey_princesa_Gt1s from './img/GRABADO-TELA/Rey-Princesa-1-sepia.jpg'
import img_Batalla_Gt1s from './img/GRABADO-TELA/Batalla-1-sepia.jpg'
import img_Armonia_Gt1S from './img/GRABADO-TELA/Armonia-1-sepia.jpg'
import img_Leon_mistico_Gt2s from './img/GRABADO-TELA/Leon-Mistico-2-sepia.jpg'
import img_Batalla_Gt2s from './img/GRABADO-TELA/Batalla-2-sepia.jpg'
import img_Poseidon_Gt2s from './img/GRABADO-TELA/Poseidon-2-sepia.jpg'
import img_Vencer_Gt2s from './img/GRABADO-TELA/Vencer-2-sepia.jpg'

// DATOS DE GRABADOS
const grabados = [
  { id: 'Arlequina-Gt3C-img', number: 1, dimensions: 'x cm', img: img_Arlequina_Gt3C },
  { id: 'Arlequina-Gt2C-img', number: 2, dimensions: 'x cm', img: img_Arlequina_Gt2C },
  { id: 'Arlequina-Gt4C-img', number: 3, dimensions: 'x cm', img: img_Arlequina_Gt4C },
  { id: 'Vencer-Gt1s-img', number: 4, dimensions: 'x cm', img: img_Vencer_Gt1s },
  { id: 'Armonia-Gt1c-img', number: 5, dimensions: 'x cm', img: img_Armonia_Gt1c },
  { id: 'Ares-Gt1s-img', number: 6, dimensions: 'x cm', img: img_Ares_Gt1s },
  { id: 'Arlequina-Gt1s-img', number: 7, dimensions: 'x cm', img: img_Arlequina_Gt1s },
  { id: 'Retorno-Gt1s-img', number: 8, dimensions: 'x cm', img: img_Retorno_Gt1s },
  { id: 'Centauro-Gt1s-img', number: 9, dimensions: 'x cm', img: img_Centauro_Gt1s },
  { id: 'Exploracion-Gt1s-img', number: 10, dimensions: 'x cm', img: img_Exploracion_Gt1s },
  { id: 'Poseidon-Gt1s-img', number: 11, dimensions: 'x cm', img: img_Poseidon_Gt1s },
  { id: 'Dolor-Gt1s-img', number: 12, dimensions: 'x cm', img: img_Dolor_Gt1s },
  { id: 'Mago-Gt1s-img', number: 13, dimensions: 'x cm', img: img_Mago_Gt1s },
  { id: 'Leon-mistico-Gt1s-img', number: 14, dimensions: 'x cm', img: img_Leon_mistico_Gt1s },
  { id: 'Rey-princesa-Gt1s-img', number: 15, dimensions: 'x cm', img: img_Rey_princesa_Gt1s },
  { id: 'Batalla-Gt1s-img', number: 16, dimensions: 'x cm', img: img_Batalla_Gt1s },
  { id: 'Armonia-Gt1S-img', number: 17, dimensions: 'x cm', img: img_Armonia_Gt1S },
  { id: 'Leon-mistico-Gt2s-img', number: 18, dimensions: 'x cm', img: img_Leon_mistico_Gt2s },
  { id: 'Batalla-Gt2s-img', number: 19, dimensions: 'x cm', img: img_Batalla_Gt2s },
  { id: 'Poseidon-Gt2s-img', number: 20, dimensions: 'x cm', img: img_Poseidon_Gt2s },
  { id: 'Vencer-Gt2s-img', number: 21, dimensions: 'x cm', img: img_Vencer_Gt2s },
]

// FUNCIÓN FACTORY PARA CREAR CAJAS (seguro contra XSS)
function createGrabadoBox(grabado) {
  const box = document.createElement('div')
  box.classList.add('box-grabados-tela')
  
  const img = document.createElement('img')
  img.id = grabado.id
  img.classList.add('grabados-class-1', 'art-image')
  img.src = grabado.img
  img.loading = 'lazy'
  
  const info = document.createElement('div')
  const p = document.createElement('p')
  p.append(
    `N° ${grabado.number}`,
    document.createElement('br'),
    grabado.dimensions
  )
  info.append(p)
  
  box.append(img, info)
  return box
}

// CREAR TÍTULO Y CONTENEDOR
const tituloGrabadosTela = document.createElement('div')
      tituloGrabadosTela.id = 'titulo-grabados-tela'
      const h2Grabados = document.createElement('h2')
      h2Grabados.textContent = '"Grabados en Tela Negra"'
      const pGrabados = document.createElement('p')
      pGrabados.append(
        'Técnicas mixtas (manuales y digitales).',
        document.createElement('br'),
        'Colección limitada de 50 obras (a color y en sepia).',
        document.createElement('br'),
        'Para valores y medios de pago, contactanos a: '
      )
      tituloGrabadosTela.append(h2Grabados, pGrabados)    
            
const divGrabadosTela = document.createElement('div')
      divGrabadosTela.id = 'div-grabados-tela'
      divGrabadosTela.classList.add('div-grabados-class')

// GENERAR TODAS LAS OBRAS DINÁMICAMENTE
grabados.forEach(grabado => {
  divGrabadosTela.append(createGrabadoBox(grabado))
})

export {tituloGrabadosTela, divGrabadosTela,}