$(function() {
  $('.toggle-nav').click(function (e) {
    e.stopPropagation()
    toggleNav()
  })

  $("#home").click(function(e) {
    var target = $(e.target)
    if (!target.closest('#navigation').length && $('.menu-options').hasClass('active-menu')) toggleNav()
  })

  function toggleNav() {
    if($(".menu-options").hasClass("active_menu")) {
      $(".menu-options").removeClass("active_menu")
    } else {
      $(".menu-options").addClass("active_menu")
    }
  }
})

