import './index.css'
import './home.css'
import './pinturas.css'
import './grabados.css'
import './acerca.css'

import { divHome, } from './home.js'
import { tituloPinturas,divPinturas, } from './pinturas.js'
import { tituloGrabadosTela, divGrabadosTela, } from './grabados.js'
import { bioExpoBtn_div, btn_1, btn_2, imgBiografia, div_Biografia, div_Expo} from './acerca.js'

const container = document.querySelector('#container')
const home_btn = document.querySelector('#home-btn')
const pinturas_btn = document.querySelector('#pinturas-btn')
const grabados_btn = document.querySelector('#grabados-btn')
const acerca_btn = document.querySelector('#acerca-btn')

container.append(divHome)
// HOME-BTN
home_btn.addEventListener('click', ()=>{
    container.textContent = ''
    container.append(divHome)
})
// PINTURAS-BTN
pinturas_btn.addEventListener('click', ()=>{
    container.textContent = ''
    container.append(tituloPinturas, divPinturas)
});
// GRABADOS-BTN
grabados_btn.addEventListener('click', ()=>{
    container.textContent = ''
    container.append(tituloGrabadosTela, divGrabadosTela,)
});
// ACERCA-BTN
acerca_btn.addEventListener('click', ()=>{
    container.textContent = ''
    container.append(bioExpoBtn_div,)
})
btn_1.addEventListener('click', ()=>{
    container.textContent = ''
    container.append(div_Biografia,)
})
btn_2.addEventListener('click', ()=>{
    container.textContent = ''
    container.append(div_Expo,)
})
// imgBiografia.addEventListener('click', ()=>{
//     // container.textContent = ''
//     // container.append(div_Expo,)
//     imgBiografia.requestFullscreen()
// })

// EVENT DELEGATION: Click en cualquier imagen de arte
document.addEventListener('click', (event) => {
    // Verificar si el click fue en una imagen con clase 'art-image'
    if (event.target.classList.contains('art-image')) {
        event.target.requestFullscreen()
    }
})




