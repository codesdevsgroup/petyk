
function showMenu() {
  let menu = document.querySelector('.menu-options') 

  if (menu.classList.contains('active_menu')) {
    menu.classList.remove('active_menu')
  } else {
    menu.classList.add('active_menu')
  }
}