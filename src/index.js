import './styles.scss';

import main from './main/main.js'
import greySection from './greySection/greySection.js'
import footer from './footer/footer.js'

let header = document.createElement('div')
header.id = 'header'
header.innerHTML = '<h1>lorem ipsum set dolore amet duis sir class!</h1>'

document.body.append(header, main, greySection, footer)