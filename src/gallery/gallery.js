import './gallery.scss'
import importPics from '../basicFn/importPics.js'

const w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
const targetWidth = 768;

const galleryPics = importPics(require.context('../img/gallery-pics', false, /\.(png|jpg|JPG|svg)$/));
let galleryArray = Object.entries(galleryPics)
galleryArray = galleryArray.map(pic => pic[1].default)
console.log(galleryArray)

let gallerySection = document.createElement('section')
gallerySection.id = 'gallerySection'

let header = document.createElement('div')
header.innerHTML = '<h3>Galeria</h3>'

let galleryContainer = document.createElement('div')
galleryContainer.id = 'galleryContainer'
galleryContainer.classList.add('carousel', 'row')

let counter = 0
const numOfPics = w <= targetWidth ? 1 : 4

for (let i = 0; i < numOfPics; i++) {
    let galleryCol = document.createElement('div')
    galleryCol.classList.add('col', 'galleryCol')

    let img = document.createElement('div')
    img.classList.add('img')
    img.style.backgroundImage = `url('${galleryArray[i]}')`
    img.innerHTML = `
        <div>
            <h3>Lorem ipsum dolor</h3>
            <p>Morbi vel leo turpis. Quisque placerat odio velit, eu scelerisque felis sodales a. Aenean efficitur lectus nisi, eget auctor diam pellentesque vestibulum.</p>
        </div>`

    galleryCol.appendChild(img)
    galleryContainer.appendChild(galleryCol)
}

let next = document.createElement('div')
next.classList.add('controls', 'next')
next.innerHTML = '<button> > </button>'
let prev = document.createElement('div')
prev.classList.add('controls', 'prev')
prev.innerHTML = '<button> < </button>'
prev.children[0].disabled = true

console.log('counter', counter === 0)


galleryContainer.append(prev, next)
gallerySection.append(header, galleryContainer)

export default gallerySection

const shouldDisable = (el, counter, value) => {
    value = w <= targetWidth ? value + 3 : value
    if(counter === value) {
        el.children[0].disabled = true
    } else {
        el.children[0].disabled = false
    }
}

let nextPic = () => {
    shouldDisable(next, counter, galleryArray.length-5)
    let picDivs = Array.from(document.querySelectorAll('.galleryCol'))
    picDivs.map((pic, i) => {
        pic.children[0].style.backgroundImage = `url('${galleryArray[counter + 1 + i]}')`
    })
    counter++
    shouldDisable(prev, counter, 0)
}

let prevPic = () => {
    shouldDisable(next, counter, galleryArray.length - 5)
    if (counter === 0) {
        prev.children[0].disabled = true
    } else {
        prev.children[0].disabled = false
    }
    let picDivs = Array.from(document.querySelectorAll('.galleryCol'))
    picDivs.map((pic, i) => {
        pic.children[0].style.backgroundImage = `url('${galleryArray[counter - 1 + i]}')`
    })
    counter--
    shouldDisable(prev, counter, 0)
}

next.addEventListener('click', nextPic)
prev.addEventListener('click', prevPic)