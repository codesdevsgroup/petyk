$(function() {
  $('.toggle-nav').click(function (e) {
    e.stopPropagation()
    toggleNav()
  })

  $("#home").click(function(e) {
    var target = $(e.target)
    if (!target.is('.menu-options') && !target.is('.menu-options ul')) {
      toggleNav()
      console.log('teste')
    }
  })

  function toggleNav() {
    if($(".menu-options").hasClass("active_menu")) {
      $(".menu-options").removeClass("active_menu")
    } else {
      $(".menu-options").addClass("active_menu")
    }
  }
})

