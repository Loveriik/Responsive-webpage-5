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

// ! Carousel animation


const container = document.querySelector('.moving-container')
const slides = Array.from(container.children)
const prevButton = document.querySelector('.left')
const nextButton = document.querySelector('.right')

const dotsNav = document.querySelector('.dots')
const dots = Array.from(dotsNav.children)

// const slideWidth = slides[0].getBoundingClientRect().width

const setSlidePosition = (slide, index) => {
    slide.style.left = 100 * index + '%'
}
slides.forEach(setSlidePosition)

// *Reusable funnctions

const updateDots = (currentDot, nextDot) => {
    currentDot.classList.remove('current-dot')
    nextDot.classList.add('current-dot')
}


const updateSlide = (container, currentSlide, nextSlide) => {
    container.style.transform = 'translateX(-' + nextSlide.style.left + ')'
    currentSlide.classList.remove('current')
    nextSlide.classList.add('current')
}

// *The end


nextButton.addEventListener('click', () => {
    const currentSlide = document.querySelector('.current')
    const nextSlide = currentSlide.nextElementSibling

    const currentDot = dotsNav.querySelector('.current-dot')
    const nextDot = currentDot.nextElementSibling

    updateSlide(container, currentSlide, nextSlide)
    updateDots(currentDot, nextDot)

})

prevButton.addEventListener('click', () => {
    const currentSlide = document.querySelector('.current')
    const prevSlide = currentSlide.previousElementSibling

    const currentDot = dotsNav.querySelector('.current-dot')
    const prevtDot = currentDot.previousElementSibling

    updateSlide(container, currentSlide, prevSlide)
    updateDots(currentDot, prevtDot)
})

dotsNav.addEventListener('click', e=> {
    
    const targetDot = e.target.closest('div')
    if (!targetDot) return

    const currentSlide = container.querySelector('.current')
    const currentDot = dotsNav.querySelector('.current-dot')
    const targetIndex = dots.findIndex( dot => dot === targetDot )
    const targetSlide = slides[targetIndex]

    updateSlide(container, currentSlide, targetSlide)
    updateDots(currentDot, targetDot)
})