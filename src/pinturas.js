// OLEOS A LA VELADURA
const tituloPinturas = document.createElement('div')
      tituloPinturas.id = 'titulo-pinturas'
      tituloPinturas.innerHTML = '<h2>"Óleos a la Veladura"</h2> <p>Para valores y medios de pago, contactanos a: <p>'    

const divPinturas = document.createElement('div')
      divPinturas.id = 'div-pinturas'
      divPinturas.classList.add('div-pinturas-class')

// FILA 1
const box1 = document.createElement('div')
      box1.classList.add('box-class')
import imgArlequina from './img/PINTURAS/Arlequina-y-sus-Amigos.jpg'
const ArlequinaImg = document.createElement('img')
      ArlequinaImg.id = 'Arlequina-img'
      ArlequinaImg.classList.add('pinturas-class-1')
      ArlequinaImg.src = imgArlequina
      // ArlequinaImg.loading = 'lazy'
const info1 = document.createElement('div')
      info1.innerHTML = '<p>Arlequina y sus Amigos <br> 89x60cm<p>'
      box1.append(ArlequinaImg, info1)

const box2 = document.createElement('div')
      box2.classList.add('box-class')    
import imgCentauro from './img/PINTURAS/CENTAURO-ENAMORADO.jpg'
const CentauroImg = document.createElement('img')
      CentauroImg.id = 'Centauro-img'
      CentauroImg.classList.add('pinturas-class-1')
      CentauroImg.src = imgCentauro
      // CentauroImg.loading = 'lazy'
const info2 = document.createElement('div')
      info2.innerHTML = '<p>Centauro Enamorado <br> 87x62cm<p>'
      box2.append(CentauroImg, info2)

const box3 = document.createElement('div')
      box3.classList.add('box-class')    
import imgMago from './img/PINTURAS/MAGNÉTICO-MAGO.jpg'
const MagoImg = document.createElement('img')
      MagoImg.id = 'Mago-img'
      MagoImg.classList.add('pinturas-class-1')
      MagoImg.src = imgMago
      // MagoImg.loading = 'lazy'
const info3 = document.createElement('div')
info3.innerHTML = '<p>El Magnético Mago <br> 35x25cm<p>'
      box3.append(MagoImg, info3)  

// FILA 2
const box4 = document.createElement('div')
      box4.classList.add('box-class') 
import imgConquista from './img/PINTURAS/conquista-pasion-y-muerte.jpg'
const ConquistaImg = document.createElement('img')
      ConquistaImg.id = 'Conquista-img'
      ConquistaImg.classList.add('pinturas-class-1')
      ConquistaImg.src = imgConquista
      ConquistaImg.loading = 'lazy'
const info4 = document.createElement('div')
      info4.innerHTML = '<p>Conquista, Pasión <br> y Muerte <br> 55x80cm<p>'
      box4.append(ConquistaImg, info4) 

const box5 = document.createElement('div')
      box5.classList.add('box-class') 
import imgPoseidon from './img/PINTURAS/POSEIDÓN-Y-SUS-SIRENAS.jpg'
const PoseidonImg = document.createElement('img')
      PoseidonImg.id = 'Poseidon-img'
      PoseidonImg.classList.add('pinturas-class-1')
      PoseidonImg.src = imgPoseidon
      PoseidonImg.loading = 'lazy'
const info5 = document.createElement('div')
      info5.innerHTML = '<p>Poseidón y las Sirenas <br> 60x85cm<p>'
      box5.append(PoseidonImg, info5) 

const box6 = document.createElement('div')
      box6.classList.add('box-class') 
import imgVencer from './img/PINTURAS/vencer-o-morir.jpg'
const VencerImg = document.createElement('img')
      VencerImg.id = 'Vencer-img'
      VencerImg.classList.add('pinturas-class-1')
      VencerImg.src = imgVencer
      VencerImg.loading = 'lazy'
const info6 = document.createElement('div')
      info6.innerHTML = '<p>Vencer o morir <br> 60x84cm<p>'
      box6.append(VencerImg, info6) 

// FILA 3
const box7 = document.createElement('div')
      box7.classList.add('box-class')
import imgRetorno from './img/PINTURAS/RETORNO-DEL-REY.jpg'
const RetornoIMG = document.createElement('img')
      RetornoIMG.id = 'Retorno-img'
      RetornoIMG.classList.add('pinturas-class-1')
      RetornoIMG.src = imgRetorno
      RetornoIMG.loading = 'lazy'
const info7 = document.createElement('div')
      info7.innerHTML = '<p>El Retorno del Rey <br> 75x53cm<p>'
      box7.append(RetornoIMG, info7)

const box8 = document.createElement('div')
      box8.classList.add('box-class')    
import imgReyPrincesa from './img/PINTURAS/REY-Y-LA-PRINCESA.jpg'
const ReyPrincesaIMG = document.createElement('img')
      ReyPrincesaIMG.id = 'Rey-princesa-img'
      ReyPrincesaIMG.classList.add('pinturas-class-1')
      ReyPrincesaIMG.src = imgReyPrincesa
      ReyPrincesaIMG.loading = 'lazy'
const info8 = document.createElement('div')
      info8.innerHTML = '<p>El Rey y la Princesa <br> 84x59cm<p>'
      box8.append(ReyPrincesaIMG, info8)

const box9 = document.createElement('div')
      box9.classList.add('box-class')    
import imgLeonMistico from './img/PINTURAS/leon-mistico.jpg'
const LeonMisticoIMG = document.createElement('img')
      LeonMisticoIMG.id = 'Leon-mistico-img'
      LeonMisticoIMG.classList.add('pinturas-class-1')
      LeonMisticoIMG.src = imgLeonMistico
      LeonMisticoIMG.loading = 'lazy'
const info9 = document.createElement('div')
      info9.innerHTML = '<p>León Mistico <br> 80x57cm<p>'
      box9.append(LeonMisticoIMG, info9)  

// FILA 4
const box10 = document.createElement('div')
      box10.classList.add('box-class') 
import imgArmonia from './img/PINTURAS/armonia.jpg'
const ArmoniaIMG = document.createElement('img')
      ArmoniaIMG.id = 'Armonia-img'
      ArmoniaIMG.classList.add('pinturas-class-1')
      ArmoniaIMG.src = imgArmonia
      ArmoniaIMG.loading = 'lazy'
const info10 = document.createElement('div')
      info10.innerHTML = '<p>Armonía <br> 60x85cm<p>'
      box10.append(ArmoniaIMG, info10) 

const box11 = document.createElement('div')
      box11.classList.add('box-class') 
import imgDolor from './img/PINTURAS/DOLOR-EN-EL-CEMENTERIO.jpg'
const DolorIMG = document.createElement('img')
      DolorIMG.id = 'Dolor-img'
      DolorIMG.classList.add('pinturas-class-1')
      DolorIMG.src = imgDolor
      DolorIMG.loading = 'lazy'
const info11 = document.createElement('div')
      info11.innerHTML = '<p>Dolor en el Cementerio <br> 58x85cm<p>'
      box11.append(DolorIMG, info11) 

const box12 = document.createElement('div')
      box12.classList.add('box-class') 
import imgExploracion from './img/PINTURAS/EXPLORACIÓN.jpg'
const ExploracionIMG = document.createElement('img')
      ExploracionIMG.id = 'Exploracion-img'
      ExploracionIMG.classList.add('pinturas-class-1')
      ExploracionIMG.src = imgExploracion
      ExploracionIMG.loading = 'lazy'
const info12 = document.createElement('div')
      info12.innerHTML = '<p>La Exploración <br> 55x90cm<p>'
      box12.append(ExploracionIMG, info12) 

// FILA 5
const box13 = document.createElement('div')
      box13.classList.add('box-class') 
import imgAres from './img/PINTURAS/victoria-de-ares.jpg'
const AresIMG = document.createElement('img')
      AresIMG.id = 'Ares-img'
      AresIMG.classList.add('pinturas-class-1')
      AresIMG.src = imgAres
      AresIMG.loading = 'lazy'
const info13 = document.createElement('div')
      info13.innerHTML = '<p>La Victoria de Ares <br> 60x84cm<p>'
      box13.append(AresIMG, info13) 

const box14 = document.createElement('div')
      box14.classList.add('box-class') 
import imgBatalla from './img/PINTURAS/batalla-epica.jpg'
const BatallaIMG = document.createElement('img')
      BatallaIMG.id = 'Batalla-img'
      BatallaIMG.classList.add('pinturas-class-1')
      BatallaIMG.src = imgBatalla
      BatallaIMG.loading = 'lazy'
const info14 = document.createElement('div')
      info14.innerHTML = '<p>Batalla Epica <br> 58x83cm<p>'
      box14.append(BatallaIMG, info14) 

const box15 = document.createElement('div')
      box15.classList.add('box-class') 
import imgAngelo from './img/PINTURAS/angelo-di-leonardo.jpg'
const AngeloIMG = document.createElement('img')
      AngeloIMG.id = 'Angelo-img'
      AngeloIMG.classList.add('pinturas-class-1')
      AngeloIMG.src = imgAngelo
      AngeloIMG.loading = 'lazy'
const info15 = document.createElement('div')
      info15.innerHTML = '<p>Angel (de L. Da Vinci) <br> x cm<p>'
      box15.append(AngeloIMG, info15) 

// FILA 6
const box16 = document.createElement('div')
box16.classList.add('box-class') 
import imgArmiño from './img/PINTURAS/dama-del-armino.jpg'
const ArmiñoIMG = document.createElement('img')
ArmiñoIMG.id = 'Armiño-img'
ArmiñoIMG.classList.add('pinturas-class-1')
ArmiñoIMG.src = imgArmiño
ArmiñoIMG.loading = 'lazy'
const info16 = document.createElement('div')
info16.innerHTML = '<p>La Dama y el Armiño <br> (de L. da Vinci)<br> x cm<p>'
box16.append(ArmiñoIMG, info16)      


divPinturas.append(box1, box2, box3, 
                   box4, box5, box6,
                   box7, box8, box9,
                   box10, box11, box12,
                   box13, box14, box15,
                   box16,
                  )

export {tituloPinturas, divPinturas,}