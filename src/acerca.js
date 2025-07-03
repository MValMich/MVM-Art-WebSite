
// ACERCA.js
const bioExpoBtn_div = document.createElement('div')
      bioExpoBtn_div.classList.add('bioExpoBtn-div')
const btn_1 = document.createElement('button')
      btn_1.classList.add('btn-1')
      btn_1.textContent = 'Biografía'
const btn_2 = document.createElement('button')
      btn_2.classList.add('btn-2')
      btn_2.textContent = 'Exposiciones'
// bioExpoBtn_div.append(btn_1, btn_2)

const div_Biografia = document.createElement('div')
      div_Biografia.classList.add('div-bio-expo')
import biografiaImg from './img/Martin-Taller-Editada.jpg' 
const divImgBiografia = document.createElement('div')
const imgBiografia = document.createElement('img')
            imgBiografia.src = biografiaImg
            imgBiografia.classList.add('img-biografia')     
divImgBiografia.append(imgBiografia)

bioExpoBtn_div.append(btn_1, btn_2, divImgBiografia)

const pBiografia = document.createElement('div')
      pBiografia.classList.add('p-biografia')
pBiografia.innerHTML = 
'<h2>Biografía</h2>Martin Valdivia Micheli es un artista Chileno nacido en Santiago de Chile en 1986. Su técnica pictórica es el óleo a la veladura (técnica desarrollada en Europa en la época del Renacimiento). Su estilo artístico es el Realismo-Mágico, que consiste en mezclar elementos de la fantasía e imaginación creativa del artista con elementos de esta realidad física, de lo cual surgen nuevos y fascinantes mundos que emergen desde lo más profundo del alma. Su pasión por las bellas artes se expresó desde sus primeros años de edad. Sus padres, al verlo pasar horas, día tras día, derramando sus fantasías con lápices en hojas de papeles, casi en estado de trance y en una sagrada concentración, decidieron inscribirlo en su primera academia de pintura al óleo de la pintora chilena Alicia Argandoña a sus 5 años.<br><br>Desde los 9 a los 12 años, participa de la academia de dibujo al pastel de la artista chilena Adela Bustos.<br><br>A los 15 años se inscribe en el taller de pintura al óleo del Estadio Italiano.<br><br>En el 2005 estudio Dibujo en la academia de Bellas Artes del pintor realista español Martin Soria.<br><br>En 2006 deja por algunos años las Bellas Artes para desarrollar otra área de gran interés para el que es la Naturaleza y los Deportes al Aire Libre. Así que ingresa y se titula de la carrera de “Técnico en Turismo de Aventura” (Instituto Profesional Duoc UC) donde por 10 años recorre la naturaleza y las montañas, trabajando como Guía de Montañismo y Rescatista del Cuerpo de Socorro Andino de Chile.<br><br>Y en marzo de 2015, con gran nostalgia por las Bellas Artes y sintiendo que la naturaleza y las montañas ya le habían ofrecido todo lo que él esperaba de ellas, ingresa a estudiar en la academia de Bellas Artes del pintor realista-mágico chileno Hernán Valdovinos hasta diciembre de 2017, con el fin de desarrollas su amor por la pintura hasta su máximo esplendor.';
div_Biografia.append( pBiografia, 
    // divImgBiografia
 )

const div_Expo = document.createElement('div')
      div_Expo.classList.add('div-bio-expo')
const pExpoRecono = document.createElement('div')
      pExpoRecono.classList.add('p-expo-reco')
      pExpoRecono.innerHTML =
'<h2>Exposiciónes y Reconocimiéntos</h2>' +
'- EXPOSICION: ARTISTAS DEL VALLE 2018. Exposición colectiva realizada junto a los artistas de la comunidad del “Valle de Los Artistas”, expuesta desde el 8 al 30 de septiembre de 2018 en la Sala de Exposición del Centro Cultural y Cívico de Lolo (VI región).<br><br>' +
'- PINTURA DEL VALLE-EXPOSICION 2020. Exposición colectiva realizada junto a los artistas de la comunidad del “Valle de Los Artistas”, expuesta desde el 15 de Febrero al 15 de marzo de 2020 en la Sala de Exposición del Centro Cultural y Cívico de Lolo (VI región).<br><br>' +
'- LIBRO FLAMANTES (19 edición). En 2020 postula y es elegido entre miles de jóvenes artistas del mundo hispano-hablante para ser parte de la 19 versión del Libro FLAMANTES (Organización Española dedicada a la promoción y difusión de jóvenes artistas, a través de la publicación de 2 de sus obras en su libro físico FLAMANTES, el cual es entregado en 300 galerías españolas, además de ser promocionados por internet y en sus redes sociales).<br><br>' +
'- TIEMPOS DE PANDEMIA, TIEMPOS DE CULTURA 2020. En noviembre de 2020 es invitado por el Centro Cultural y Cívico de Lolol para ser parte de su programación online con el objetivo de dar a conocer la riqueza cultural de la VI región a través de 21 cápsulas/entrevistas a artistas, artesanos y cultores a nivel local y regional. (Ver cápsula en “youtube”, “Taller adentro: pintor Martin Valdivia”)';
div_Expo.append(pExpoRecono)

export {bioExpoBtn_div, btn_1, btn_2, imgBiografia, div_Biografia, div_Expo,}
