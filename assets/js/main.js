window.addEventListener('scroll', onScroll)

const home = document.getElementById('home')
const nav = document.getElementById('navigation')

onScroll()
function onScroll() {
  showNavOnScroll()
  activateMenuAtCurrentSection(home)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 3

  //verificar se a seção passou da linha
  //quais dados vou precisar?

  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  //  'O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline
  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //console.log(
  //  'O fundo da seção passou da linha?', sectionEndPassedTargetLine
  //)

  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine
  
  const sectionId = document.getElementById('menuButton')

  sectionId.classList.remove('active')
  if (!sectionBoundaries) {
    sectionId.classList.add('active')
  }

}

function showNavOnScroll() {
  if (window.scrollY > 199) {
    nav.classList.add("scroll")
  } else {
    nav.classList.remove("scroll")
  }
}

/* function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
} */

window.sr = ScrollReveal({ reset: true })

sr.reveal(`
  #home .wrapper,
  #secutity .wrapper,
  #home-works .wrapper,
  #delimitation-areas .wrapper,
  #accordion .wrapper,
  #final-calc .wrapper,
  #system .wrapper,
  #terms .wrapper,
  .privacy,
  #ish .wrapper,
  #footer .wrapper

`, {
  origin: 'top',
  distance: '50px',
  duration: 700,
  easing: 'ease-in'
})