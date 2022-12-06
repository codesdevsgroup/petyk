window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackTopButtonOnScroll()
}

function showNavOnScroll() {
  if (window.scrollY > 100) {
    $("#navigation").addClass("scroll")
  } else {
    $("#navigation").removeClass("scroll")
  }
}

function showBackTopButtonOnScroll() {
  if (window.scrollY > 600) {
    $('#backToTopButton').show(200)
  } else {
    $('#backToTopButton').hide(200)
  }
}


$(document).ready(function () {
  $('#video').html(`
  <iframe class="embed-responsive-item"
  width="848" 
  height="480" 
  src="https://www.youtube.com/embed/GQyBj67gKvs" 
  title="YouTube video player"     
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
  </iframe>
  `)
})