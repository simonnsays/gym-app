import { select } from "../util/util.js"
import { el } from "../util/util.js"

const displayRoutines = (data) => {
    const body = select('.main-container')

    const container = el('div')

    const header = el('h3', {text: 'Routines'})
    const ulist = el('ul')
    data.routines.forEach(routine => ulist.appendChild(createListItems(routine)))


    container.append(header, ulist)
    body.appendChild(container)
}

const createListItems = (routine) => {
    const listItem = el('li')

    const button = createBtn(routine)

    listItem.appendChild(button)
    return listItem
}

const createBtn = (routine) => {
    const btn = el('button', {
        text: routine.name
    })

    return btn
}

export default {
    displayRoutines,
    createListItems,
    createBtn
}