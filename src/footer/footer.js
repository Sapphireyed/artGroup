import './footer.scss'
import mediaIcon from '../img/media-icon.png'
import fbIcon from '../img/fb-icon.png'

let footer = document.createElement('footer')
footer.classList.add('row')

let editions = document.createElement('div')
editions.classList.add('col-12', 'col-sm', 'row')
let previous = document.createElement('div')
previous.classList.add('col-12', 'row')
previous.innerHTML = '<p class="col-12">Poprzednie edycje:</p>'

let ed1 = document.createElement('div')
ed1.classList.add('col')
ed1.innerHTML = '<p>Edycja pierwsza</p>'

let ed2 = document.createElement('div')
ed2.classList.add('col')
ed2.innerHTML = '<p>Edycja druga</p>'

let ed3 = document.createElement('div')
ed3.classList.add('col')
ed3.innerHTML = '<p>Edycja trzecia</p>'

previous.append(ed1, ed2, ed3)
editions.append(previous)

let media = document.createElement('div')
media.classList.add('media', 'col', 'row')
let emptyCell = document.createElement('div')
emptyCell.classList.add('col-10', 'd-lg-none')
let fb = document.createElement('div')
fb.classList.add('fb', 'col')
fb.innerHTML = `<img src=${fbIcon} alt='fb-icon'>`
let otherMedia = document.createElement('div')
otherMedia.classList.add('otherMedia', 'col')
otherMedia.innerHTML = `<img src=${mediaIcon}>`

media.append(emptyCell, fb, otherMedia)

let company = document.createElement('div')
company.classList.add('row', 'col-12', 'company')
let name = document.createElement('div')
name.classList.add('col-12','col-sm')
name.innerHTML = '<p>2019 nazwa firmy sp z.o.o Wszystkie prawa zastrzeżone</p>'
let privacy = document.createElement('div')
privacy.classList.add('col-12', 'col-sm', 'privacy')
privacy.innerHTML = '<p>Polityka Prywatności</p>'
company.append(name, privacy)


footer.append(editions, media, company)

export default footer;
