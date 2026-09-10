// HOME.js - VERSIÓN SEGURA (sin innerHTML)
const divHome = document.createElement('div')
      divHome.classList.add('div-home')

const divPresentacion = document.createElement('div') 
      divPresentacion.classList.add('div-presentacion')

// Crear título de presentación
const h3 = document.createElement('h3')
h3.textContent = 'PRESENTACION'
divPresentacion.append(h3)

// Crear párrafos de presentación (seguro contra XSS)
const p = document.createElement('p')
p.textContent = 'Mi Realismo-Mágico surge de las inquietudes del corazón, son pequeñas ventanas a otras dimensiones del alma, donde el placer y el dolor, el amor y la guerra se entremezclan en sublimes y fugaces experiencias humanas.'
divPresentacion.append(p)

const p2 = document.createElement('p')
p2.textContent = 'A través de mi arte busco explorar, conquistar y traer aquí, esos recónditos mundos misteriosos que se esconden más allá de este mundo terrenal, en donde no existen barreras tangibles, en donde todo es posible y las sublimes energías de la naturaleza expresan sin límites su poder y en una infinita expansión espiritual.'
divPresentacion.append(p2)

import homeImg from './img/Martin-Pintor.jpg' 
const divimgHome = document.createElement('div')
      divimgHome.classList.add('div-img-home')
const imgHome = document.createElement('img')
      imgHome.src = homeImg
      imgHome.classList.add('img-home')
divimgHome.append(imgHome)

divHome.append(divimgHome, divPresentacion)

export {divHome}
