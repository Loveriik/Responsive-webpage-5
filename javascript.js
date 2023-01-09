const navigation = document.querySelector('.navigation-list')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {

    const visibility = navigation.getAttribute('data-visible')
    const buttonChange = navToggle.getAttribute('aria-expanded')

    if (buttonChange === 'false') {
        navToggle.setAttribute('aria-expanded', true)
    } else {
        navToggle.setAttribute('aria-expanded', false)
    }

    if (visibility === 'false') {
        navigation.setAttribute('data-visible', true)
    } else {
        navigation.setAttribute('data-visible', false)
    }
    
})