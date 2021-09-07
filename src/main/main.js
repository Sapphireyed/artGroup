import './main.scss'
import mainImgSrc from '../img/mainImg.jpg'
import 'bootstrap';

let mainSection = document.createElement('section')
mainSection.className = 'mainSect'

let subSection = document.createElement('div')
subSection.classList.add('row', 'mainSubSect')

let mainImgDiv = document.createElement('div')
mainImgDiv.id = 'imgDiv'
mainImgDiv.classList.add('col-sm', 'main-container')
let imgContainer = document.createElement('div')
imgContainer.id = 'imgContainer'
let circle = document.createElement('div')
circle.id = 'circle'
let mainImg = document.createElement('img')
mainImg.className = 'shadow-lg'
mainImg.src = mainImgSrc
circle.appendChild(mainImg)
imgContainer.appendChild(circle)
mainImgDiv.appendChild(imgContainer)

let mainText = document.createElement('div')
mainText.classList.add('col-sm', 'main-container')
let mainParItalic = document.createElement('p')
mainParItalic.innerText = `Morbi porttitor eros sit amet ante auctor suscipit.
    Donec aliquet orci tempus neque tincidunt cursus. Integer ultrices, elit vitae tempor sagittis, orci neque porttitor dolor, tristique convallis est nisl et ex.
    Praesent leo quam, placerat hendrerit nulla vitae, maximus cursus velit. Morbi in feugiat erat. Nulla et lorem porttitor, tristique enim sed, dictum nibh.`
let mainPar = document.createElement('p')
mainPar.innerText = `Nullam nec feugiat sapien, ac cursus augue. Duis vehicula mi nec faucibus condimentum. 
    Nulla nec placerat mi. Aliquam molestie ipsum quis felis maximus porta.
    Nunc sollicitudin facilisis est lobortis imperdiet. Cras semper elit nec mi lobortis, in laoreet turpis blandit. In sed nisi eget nisi porta vulputate.`

mainText.append(mainParItalic, mainPar)

subSection.append(mainText, mainImgDiv)

mainSection.appendChild(subSection)
export default mainSection