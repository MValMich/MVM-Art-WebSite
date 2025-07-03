// GRABADOS EN TELA
const tituloGrabadosTela = document.createElement('div')
      tituloGrabadosTela.id = 'titulo-grabados-tela'
      tituloGrabadosTela.innerHTML = 
'<h2>"Grabados en Tela Negra"</h2> <p>Técnicas mixtas (manuales y digitales).<br> Colección limitada de 50 obras (a color y en sepia).<br> Para valores y medios de pago, contactanos a: <p>'    
            
const divGrabadosTela = document.createElement('div')
      divGrabadosTela.id = 'div-grabados-tela'
      divGrabadosTela.classList.add('div-grabados-class')               

// FILA 1
const box1_Gt = document.createElement('div')
      box1_Gt.classList.add('box-grabados-tela')

      import img_Arlequina_Gt3C from './img/GRABADO-TELA/Arlequina-3-color.jpg'
const Arlequina_Gt3C_IMG = document.createElement('img')
      Arlequina_Gt3C_IMG.id = 'Arlequina-Gt3C-img'
      Arlequina_Gt3C_IMG.classList.add('grabados-class-1')
      Arlequina_Gt3C_IMG.src = img_Arlequina_Gt3C

const info1_Gt = document.createElement('div')
      info1_Gt.innerHTML = '<p>N° 1<br> x cm<p>'
box1_Gt.append(Arlequina_Gt3C_IMG, info1_Gt)
// 
const box2_Gt = document.createElement('div')
      box2_Gt.classList.add('box-grabados-tela')

import img_Arlequina_Gt2C from './img/GRABADO-TELA/Arlequina-2-color.jpg'
const Arlequina_Gt2C_IMG = document.createElement('img')
      Arlequina_Gt2C_IMG.id = 'Arlequina-Gt2C-img'
      Arlequina_Gt2C_IMG.classList.add('grabados-class-1')
      Arlequina_Gt2C_IMG.src = img_Arlequina_Gt2C

const info2_Gt = document.createElement('div')
      info2_Gt.innerHTML = '<p>N° 2<br> x cm<p>'
box2_Gt.append(Arlequina_Gt2C_IMG, info2_Gt)
// 
const box3_Gt = document.createElement('div')
      box3_Gt.classList.add('box-grabados-tela')
      
      import img_Arlequina_Gt4C from './img/GRABADO-TELA/Arlequina-4-color.jpg'
const Arlequina_Gt4C_IMG = document.createElement('img')
      Arlequina_Gt4C_IMG.id = 'Arlequina-Gt4C-img'
      Arlequina_Gt4C_IMG.classList.add('grabados-class-1')
      Arlequina_Gt4C_IMG.src = img_Arlequina_Gt4C

const info3_Gt = document.createElement('div')
      info3_Gt.innerHTML = '<p>N° 3<br> x cm<p>'
      box3_Gt.append(Arlequina_Gt4C_IMG, info3_Gt)

// FILA2
const box4_Gt = document.createElement('div')
      box4_Gt.classList.add('box-grabados-tela')

      import img_Vencer_Gt1s from './img/GRABADO-TELA/Vencer-1-sepia.jpg'
const Vencer_Gt1s_IMG = document.createElement('img')
      Vencer_Gt1s_IMG.id = 'Vencer-Gt1s-img'
      Vencer_Gt1s_IMG.classList.add('grabados-class-1')
      Vencer_Gt1s_IMG.src = img_Vencer_Gt1s   

const info4_Gt = document.createElement('div')
      info4_Gt.innerHTML = '<p>N° 4<br> x cm<p>'
      box4_Gt.append(Vencer_Gt1s_IMG, info4_Gt)
// 
const box5_Gt = document.createElement('div')
      box5_Gt.classList.add('box-grabados-tela')

import img_Armonia_Gt1c from './img/GRABADO-TELA/Armonia-color.jpg'
const Armonia_Gt1c_IMG = document.createElement('img')
      Armonia_Gt1c_IMG.id = 'Armonia-Gt1c-img'
      Armonia_Gt1c_IMG.classList.add('grabados-class-1')
      Armonia_Gt1c_IMG.src = img_Armonia_Gt1c     

const info5_Gt = document.createElement('div')
      info5_Gt.innerHTML = '<p>N° 5<br> x cm<p>'
      box5_Gt.append(Armonia_Gt1c_IMG, info5_Gt)
// 
const box6_Gt = document.createElement('div')
      box6_Gt.classList.add('box-grabados-tela')
      
      import img_Ares_Gt1s from './img/GRABADO-TELA/Ares-1-sepia.jpg'
const Ares_Gt1s_IMG = document.createElement('img')
      Ares_Gt1s_IMG.id = 'Ares-Gt1s-img'
      Ares_Gt1s_IMG.classList.add('grabados-class-1')
      Ares_Gt1s_IMG.src = img_Ares_Gt1s

const info6_Gt = document.createElement('div')
      info6_Gt.innerHTML = '<p>N° 6<br> x cm<p>'
      box6_Gt.append(Ares_Gt1s_IMG, info6_Gt)

// // FILA 3
const box7_Gt = document.createElement('div')
      box7_Gt.classList.add('box-grabados-tela')

      import img_Arlequina_Gt1s from './img/GRABADO-TELA/Arlequina-1-sepia.jpg'
const Arlequina_Gt1s_IMG = document.createElement('img')
      Arlequina_Gt1s_IMG.id = 'Arlequina-Gt1s-img'
      Arlequina_Gt1s_IMG.classList.add('grabados-class-1')
      Arlequina_Gt1s_IMG.src = img_Arlequina_Gt1s

const info7_Gt = document.createElement('div')
      info7_Gt.innerHTML = '<p>N° 7<br> x cm<p>'
      box7_Gt.append(Arlequina_Gt1s_IMG, info7_Gt)
// 
const box8_Gt = document.createElement('div')
      box8_Gt.classList.add('box-grabados-tela')

      import img_Retorno_Gt1s from './img/GRABADO-TELA/Retorno-sepia.jpg'
const Retorno_IMG = document.createElement('img')
      Retorno_IMG.id = 'Retorno-Gt1s-img'
      Retorno_IMG.classList.add('grabados-class-1')
      Retorno_IMG.src = img_Retorno_Gt1s

const info8_Gt = document.createElement('div')
      info8_Gt.innerHTML = '<p>N° 8<br> x cm<p>'
      box8_Gt.append(Retorno_IMG, info8_Gt)
// 
const box9_Gt = document.createElement('div')
      box9_Gt.classList.add('box-grabados-tela')
      
      import img_Centauro_Gt1s from './img/GRABADO-TELA/Centauro-1-sepia.jpg'
const Centauro_Gt1s_IMG = document.createElement('img')
      Centauro_Gt1s_IMG.id = 'Centauro-Gt1s-img'
      Centauro_Gt1s_IMG.classList.add('grabados-class-1')
      Centauro_Gt1s_IMG.src = img_Centauro_Gt1s

const info9_Gt = document.createElement('div')
      info9_Gt.innerHTML = '<p>N° 9<br> x cm<p>'
      box9_Gt.append(Centauro_Gt1s_IMG, info9_Gt)

// FILA 4
const box10_Gt = document.createElement('div')
      box10_Gt.classList.add('box-grabados-tela')

      import img_Exploracion_Gt1s from './img/GRABADO-TELA/Exploracion-sepia.jpg'
const Exploracion_Gt1s_IMG = document.createElement('img')
      Exploracion_Gt1s_IMG.id = 'Exploracion-Gt1s-img'
      Exploracion_Gt1s_IMG.classList.add('grabados-class-1')
      Exploracion_Gt1s_IMG.src = img_Exploracion_Gt1s

const info10_Gt = document.createElement('div')
      info10_Gt.innerHTML = '<p>N° 10<br> x cm<p>'
      box10_Gt.append(Exploracion_Gt1s_IMG, info10_Gt)
// 
const box11_Gt = document.createElement('div')
      box11_Gt.classList.add('box-grabados-tela')

      import img_Poseidon_Gt1s from './img/GRABADO-TELA/Poseidon-1-sepia.jpg'
const Poseidon_Gt1s_IMG = document.createElement('img')
      Poseidon_Gt1s_IMG.id = 'Poseidon-Gt1s-img'
      Poseidon_Gt1s_IMG.classList.add('grabados-class-1')
      Poseidon_Gt1s_IMG.src = img_Poseidon_Gt1s   

const info11_Gt = document.createElement('div')
      info11_Gt.innerHTML = '<p>N° 11<br> x cm<p>'
      box11_Gt.append(Poseidon_Gt1s_IMG, info11_Gt)
// 
const box12_Gt = document.createElement('div')
      box12_Gt.classList.add('box-grabados-tela')
      
import img_Dolor_Gt1s from './img/GRABADO-TELA/Dolor-1-sepia.jpg'
const Dolor_Gt1s_IMG = document.createElement('img')
      Dolor_Gt1s_IMG.id = 'Dolor-Gt1s-img'
      Dolor_Gt1s_IMG.classList.add('grabados-class-1')
      Dolor_Gt1s_IMG.src = img_Dolor_Gt1s

      const info12_Gt = document.createElement('div')
      info12_Gt.innerHTML = '<p>N° 12<br> x cm<p>'
      box12_Gt.append(Dolor_Gt1s_IMG, info12_Gt)      

// FILA 5
const box13_Gt = document.createElement('div')
      box13_Gt.classList.add('box-grabados-tela')

      import img_Mago_Gt1s from './img/GRABADO-TELA/Mago-1-sepia.jpg'
const Mago_Gt1s_IMG = document.createElement('img')
      Mago_Gt1s_IMG.id = 'Mago-Gt1s-img'
      Mago_Gt1s_IMG.classList.add('grabados-class-1')
      Mago_Gt1s_IMG.src = img_Mago_Gt1s

const info13_Gt = document.createElement('div')
      info13_Gt.innerHTML = '<p>N° 13<br> x cm<p>'
      box13_Gt.append(Mago_Gt1s_IMG, info13_Gt)
// 
const box14_Gt = document.createElement('div')
      box14_Gt.classList.add('box-grabados-tela')

import img_Leon_mistico_Gt1s from './img/GRABADO-TELA/Leon-Mistico-1-sepia.jpg'
const Leon_Mistico_Gt1s_IMG = document.createElement('img')
      Leon_Mistico_Gt1s_IMG.id = 'Leon-mistico-Gt1s-img'
      Leon_Mistico_Gt1s_IMG.classList.add('grabados-class-1')
      Leon_Mistico_Gt1s_IMG.src = img_Leon_mistico_Gt1s

const info14_Gt = document.createElement('div')
      info14_Gt.innerHTML = '<p>N° 14<br> x cm<p>'
      box14_Gt.append(Leon_Mistico_Gt1s_IMG, info14_Gt)
// 
const box15_Gt = document.createElement('div')
      box15_Gt.classList.add('box-grabados-tela')
      
import img_Rey_princesa_Gt1s from './img/GRABADO-TELA/Rey-Princesa-1-sepia.jpg'
const Rey_princesa_Gt1s_IMG = document.createElement('img')
      Rey_princesa_Gt1s_IMG.id = 'Rey-princesa-Gt1s-img'
      Rey_princesa_Gt1s_IMG.classList.add('grabados-class-1')
      Rey_princesa_Gt1s_IMG.src = img_Rey_princesa_Gt1s

const info15_Gt = document.createElement('div')
      info15_Gt.innerHTML = '<p>N° 15<br> x cm<p>'
      box15_Gt.append(Rey_princesa_Gt1s_IMG, info15_Gt)

// FILA 6
const box16_Gt = document.createElement('div')
      box16_Gt.classList.add('box-grabados-tela')

      import img_Batalla_Gt1s from './img/GRABADO-TELA/Batalla-1-sepia.jpg'
const Batalla_Gt1s_IMG = document.createElement('img')
      Batalla_Gt1s_IMG.id = 'Batalla-Gt1s-img'
      Batalla_Gt1s_IMG.classList.add('grabados-class-1')
      Batalla_Gt1s_IMG.src = img_Batalla_Gt1s

const info16_Gt = document.createElement('div')
      info16_Gt.innerHTML = '<p>N° 16<br> x cm<p>'
      box16_Gt.append(Batalla_Gt1s_IMG, info16_Gt)
// 
const box17_Gt = document.createElement('div')
      box17_Gt.classList.add('box-grabados-tela')

import img_Armonia_Gt1S from './img/GRABADO-TELA/Armonia-1-sepia.jpg'
const Armonia_Gt1S_IMG = document.createElement('img')
      Armonia_Gt1S_IMG.id = 'Armonia-Gt1S-img'
      Armonia_Gt1S_IMG.classList.add('grabados-class-1')
      Armonia_Gt1S_IMG.src = img_Armonia_Gt1S   

const info17_Gt = document.createElement('div')
      info17_Gt.innerHTML = '<p>N° 17<br> x cm<p>'
      box17_Gt.append(Armonia_Gt1S_IMG, info17_Gt)
// 
const box18_Gt = document.createElement('div')
      box18_Gt.classList.add('box-grabados-tela')
      
import img_Leon_mistico_Gt2s from './img/GRABADO-TELA/Leon-Mistico-2-sepia.jpg'
const Leon_mistico_Gt2s_IMG = document.createElement('img')
      Leon_mistico_Gt2s_IMG.id = 'Leon-mistico-Gt2s-img'
      Leon_mistico_Gt2s_IMG.classList.add('grabados-class-1')
      Leon_mistico_Gt2s_IMG.src = img_Leon_mistico_Gt2s

const info18_Gt = document.createElement('div')
      info18_Gt.innerHTML = '<p>N° 18<br> x cm<p>'
      box18_Gt.append(Leon_mistico_Gt2s_IMG, info18_Gt)

// FILA 7
const box19_Gt = document.createElement('div')
      box19_Gt.classList.add('box-grabados-tela')

      import img_Batalla_Gt2s from './img/GRABADO-TELA/Batalla-2-sepia.jpg'
const Batalla_Gt2s_IMG = document.createElement('img')
      Batalla_Gt2s_IMG.id = 'Batalla-Gt2s-img'
      Batalla_Gt2s_IMG.classList.add('grabados-class-1')
      Batalla_Gt2s_IMG.src = img_Batalla_Gt2s

const info19_Gt = document.createElement('div')
      info19_Gt.innerHTML = '<p>N° 19<br> x cm<p>'
      box19_Gt.append(Batalla_Gt2s_IMG, info19_Gt)
// 
const box20_Gt = document.createElement('div')
      box20_Gt.classList.add('box-grabados-tela')

import img_Poseidon_Gt2s from './img/GRABADO-TELA/Poseidon-2-sepia.jpg'
const Poseidon_Gt2s_IMG = document.createElement('img')
      Poseidon_Gt2s_IMG.id = 'Poseidon-Gt2s-img'
      Poseidon_Gt2s_IMG.classList.add('grabados-class-1')
      Poseidon_Gt2s_IMG.src = img_Poseidon_Gt2s  

const info20_Gt = document.createElement('div')
      info20_Gt.innerHTML = '<p>N° 20<br> x cm<p>'
      box20_Gt.append(Poseidon_Gt2s_IMG, info20_Gt)
// 
const box21_Gt = document.createElement('div')
      box21_Gt.classList.add('box-grabados-tela')
      
import img_Vencer_Gt2s from './img/GRABADO-TELA/Vencer-2-sepia.jpg'
const Vencer_Gt2s_IMG = document.createElement('img')
      Vencer_Gt2s_IMG.id = 'Vencer-Gt2s-img'
      Vencer_Gt2s_IMG.classList.add('grabados-class-1')
      Vencer_Gt2s_IMG.src = img_Vencer_Gt2s

const info21_Gt = document.createElement('div')
      info21_Gt.innerHTML = '<p>N° 21<br> x cm<p>'
      box21_Gt.append(Vencer_Gt2s_IMG, info21_Gt)


divGrabadosTela.append(
      box1_Gt, box2_Gt, box3_Gt,
      box4_Gt, box5_Gt, box6_Gt,
      box7_Gt, box8_Gt, box9_Gt,
      box10_Gt, box11_Gt, box12_Gt,
      box13_Gt, box14_Gt, box15_Gt,
      box16_Gt, box17_Gt, box18_Gt,
      box19_Gt, box20_Gt, box21_Gt,
      )

export {
    tituloGrabadosTela, divGrabadosTela,
}