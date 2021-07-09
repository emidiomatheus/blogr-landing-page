const iconMenu = document.querySelector('#icon-menu')
const menu = document.querySelector('#container-menu')
const submenu = document.querySelectorAll('.submenu')
const links = document.querySelectorAll('.link')
const arrowIcon = document.querySelectorAll('.arrow')

iconMenu.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
    } else {
        menu.classList.add('active')
    }
})

links.forEach(link => {
    link.addEventListener('click', (event) => {
        const submenu = link.nextElementSibling     
        if (submenu.classList.contains('active')) {
            event.stopPropagation
            submenu.classList.remove('active')
        } else {
            submenu.classList.add('active')
        }
    })
})