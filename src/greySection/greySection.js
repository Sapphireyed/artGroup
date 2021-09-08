import './greySection.scss'

import gallerySection from '../gallery/gallery.js'

const greySection = document.createElement('section')
greySection.id = 'greySection'

let header = document.createElement('div')
header.id= 'header'
header.innerHTML = '<h1>Jak możesz się dołożyć?</h1>'

let stepsContainer = document.createElement('div')
stepsContainer.classList.add('row')
stepsContainer.id = 'stepsContainer'

for (let i = 1; i <= 4; i++) {
    let step = document.createElement('div')
    step.classList.add('col-12', 'col-sm', 'step')

    let circle = document.createElement('div')
    circle.classList = 'circle'
    circle.innerHTML = `<p>${i}</p>`
    step.append(circle)

    let text = document.createElement('div')
    text.innerHTML = `<p>Vestibulum finibus, lacus ac pellentesque gravida, risus purus maximus enim, vel sollicitudin nibh lectus et enim.</p>`
    step.append(text)

    stepsContainer.append(step)
}

let chooseHeader = document.createElement('div')
chooseHeader.innerHTML = '<h2>Wybierz kwotę</h2>'

let chooseContainer = document.createElement('div')

chooseContainer.classList.add('row', 'chooseContainer')

let choices = ['50 ZŁ', '70 ZŁ', '100 ZŁ']

for (let i = 0; i < 3; i++) {
    let choiceDiv = document.createElement('div')
    choiceDiv.classList.add('col-12', 'col-sm', 'choiceDiv')

    let btn = document.createElement('button')
    btn.classList = 'choiceBtn'
    btn.innerText = choices[i]

    choiceDiv.appendChild(btn)
    chooseContainer.appendChild(choiceDiv)
}

let note = document.createElement('div')
note.id = 'note'
note.innerHTML = '<p>*Docenimy każdą wpłątę za pośrednictwem naszej strony, jednak aby otrzymać upominek wsparcie to minimum 50zł.</p>'

let support = document.createElement('div')
support.id = 'support'
support.innerHTML = '<button class="choiceBtn">Wspieram</button'

greySection.append(header, stepsContainer, chooseHeader, chooseContainer, note, support, gallerySection)

export default greySection