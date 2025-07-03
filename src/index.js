import './index.css'
import './home.css'
import './pinturas.css'
import './grabados.css'
// import './biografia.css'
import './acerca.css'

import { divHome, } from './home.js'
import { tituloPinturas,divPinturas, } from './pinturas.js'
import { tituloGrabadosTela, divGrabadosTela, } from './grabados.js'
// import { divBiografia, } from './biografia.js'
import { bioExpoBtn_div, btn_1, btn_2, imgBiografia, div_Biografia, div_Expo} from './acerca.js'

const container = document.querySelector('#container')
const home_btn = document.querySelector('#home-btn')
const pinturas_btn = document.querySelector('#pinturas-btn')
const grabados_btn = document.querySelector('#grabados-btn')
const biografia_btn = document.querySelector('#biografia-btn')
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
// // BIOGRAFIA-BTN
// biografia_btn.addEventListener('click', ()=>{
//     container.textContent = ''
//     container.append(divBiografia,)
// });
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
imgBiografia.addEventListener('click', ()=>{
    // container.textContent = ''
    // container.append(div_Expo,)
    imgBiografia.requestFullscreen()
})


// DIV-PINTURAS
divPinturas.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id) {
        // FILA 1
        case 'Arlequina-img':
            target.requestFullscreen(); // Activa el modo de pantalla completa
            // ArlequinaImg.classList.toggle('expanded');
            // target.scrollIntoView({ block: 'center',inline: 'center' });
            break;
        case 'Centauro-img':
            target.requestFullscreen(); 
            break;
        case 'Mago-img':
            target.requestFullscreen(); 
            break;
        // FILA 2
        case 'Conquista-img':
            target.requestFullscreen(); 
            break;
        case 'Poseidon-img':
            target.requestFullscreen();
            break;
        case 'Vencer-img':
            target.requestFullscreen(); 
            break;
 // FILA 3
 case 'Retorno-img':
    target.requestFullscreen(); // Activa el modo de pantalla completa
    break;
case 'Rey-princesa-img':
    target.requestFullscreen(); 
    break;
case 'Leon-mistico-img':
    target.requestFullscreen(); 
    break;
 // FILA 4
 case 'Armonia-img':
    target.requestFullscreen();
    break;
case 'Dolor-img':
    target.requestFullscreen(); 
    break;
case 'Exploracion-img':
    target.requestFullscreen(); 
    break;
 // FILA 5
 case 'Ares-img':
    target.requestFullscreen();
    break;
case 'Batalla-img':
    target.requestFullscreen(); 
    break;
case 'Angelo-img':
    target.requestFullscreen(); 
    break;
 // FILA 6
 case 'Armiño-img':
    target.requestFullscreen();
    break;

        default:
            break;
    }
});

// DIV-GRABADOS
divGrabadosTela.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id) {
// FILA 1
case 'Arlequina-Gt3C-img':
        target.requestFullscreen(); // Activa el modo de pantalla completa
    break;
case 'Arlequina-Gt2C-img':
        target.requestFullscreen(); 
    break;
 case 'Arlequina-Gt4C-img':
        target.requestFullscreen(); 
    break;
        
// FILA 2
case 'Vencer-Gt1s-img':
        target.requestFullscreen(); // Activa el modo de pantalla completa
    break;
case 'Armonia-Gt1c-img':
        target.requestFullscreen(); 
    break;
 case 'Ares-Gt1s-img':
        target.requestFullscreen(); 
    break;
// FILA 3
case 'Arlequina-Gt1s-img':
        target.requestFullscreen(); 
    break;
case 'Retorno-Gt1s-img':
        target.requestFullscreen(); 
    break;
 case 'Centauro-Gt1s-img':
        target.requestFullscreen(); 
    break;
// FILA 4
case 'Exploracion-Gt1s-img':
        target.requestFullscreen();
    break;
case 'Poseidon-Gt1s-img':
        target.requestFullscreen(); 
    break;
 case 'Dolor-Gt1s-img':
        target.requestFullscreen(); 
    break;
// FILA 5
case 'Mago-Gt1s-img':
        target.requestFullscreen();
    break;
case 'Leon-mistico-Gt1s-img':
        target.requestFullscreen(); 
    break;
 case 'Rey-princesa-Gt1s-img':
        target.requestFullscreen(); 
    break;
// FILA 6
case 'Batalla-Gt1s-img':
        target.requestFullscreen();
    break;
case 'Armonia-Gt1S-img':
        target.requestFullscreen(); 
    break;
 case 'Leon-mistico-Gt2s-img':
        target.requestFullscreen(); 
    break;

        default:
            break;
    }
});


// acercaBtn.addEventListener('click', ()=>{
//     container.textContent = ''
//     const biografiaBtn = document.createElement('#biografia-btn')
//     biografiaBtn.id = 'biografia-btn'
//     biografiaBtn.textContent = 'BIOGRAFIA'
//     // <button id="biografia-btn">BIOGRAFIA</button>
//         container.append(biografiaBtn)
    
//   })
// acercaBtn.addEventListener('mouseout', ()=>{
//     // acerca_div.textContent = ''
//     acerca_div.classList.remove('visible-ul');
//   })




