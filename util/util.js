export const el = (type, options = {}) => {
    const  element = document.createElement(type)

    if (options.class) element.className = options.class
    if (options.id) element.id = options.id
    if (options.src) element.src = options.src
    if (options.text) element.textContent = options.text 

    return element
}

export const select = (name) => {
    return document.querySelector(name)
}