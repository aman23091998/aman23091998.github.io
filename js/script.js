var $root = $('#main');

var changeNavState = function(item_id){
  $('#nav_projects').removeClass("navigation-bar-active");
  $('#nav_home').removeClass("navigation-bar-active");
  $('#nav_about').removeClass("navigation-bar-active");
  $(item_id).addClass("navigation-bar-active");
}

$('#down-arrow').click(function(){
  $root.animate({
    scrollTop: $('#projects').offset().top
  }, 1000);
  // $('#nav_projects').addClass("navigation-bar-active");
  // $('#nav_home').removeClass("navigation-bar-active");
  // $('#nav_about').removeClass("navigation-bar-active");
  changeNavState('#nav_projects');
  return true;
});

$('#nav_projects').click(function(){
  $root.animate({
    scrollTop: $('#projects').offset().top
  }, 1000);
  changeNavState('#nav_projects');
  // $('#nav_projects').addClass("navigation-bar-active");
  // $('#nav_home').removeClass("navigation-bar-active");
  // $('#nav_about').removeClass("navigation-bar-active");
  return true;
});

$('#nav_home').click(function(){
  $root.animate({
    scrollTop: $('#home').offset().top
  }, 1000);
  changeNavState('#nav_home');
  // $('#nav_home').addClass("navigation-bar-active");
  // $('#nav_projects').removeClass("navigation-bar-active");
  // $('#nav_about').removeClass("navigation-bar-active");
  return true;
});
