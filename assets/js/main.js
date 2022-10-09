window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  // showNavOnScroll()
  showBackTopButtonOnScroll()
}

function showBackTopButtonOnScroll() {
  if (window.scrollY > 600) {
    $('#backToTopButton').show(200)
  } else {
    $('#backToTopButton').hide(200)
  }
}

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