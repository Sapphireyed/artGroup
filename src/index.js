import './styles.scss';

import main from './main/main.js'
import greySection from './greySection/greySection.js'

let header = document.createElement('div')
header.id = 'header'
header.innerHTML = '<h2>lorem ipsum set dolore amet duis sir class!</h2>'

document.body.append(header, main, greySection)