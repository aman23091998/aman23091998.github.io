var $root = $('#main');

var viewport = {
  width  : $(window).width(),
  height : $(window).height()
};

var navBarHeight = (viewport.width <= 600) ? 40: 80;

var changeNavState = function(item_id){
  $('#nav_projects').removeClass("navigation-bar-active");
  $('#nav_home').removeClass("navigation-bar-active");
  $('#nav_about').removeClass("navigation-bar-active");
  $(item_id).addClass("navigation-bar-active");
};

function scrollTo(item){
  var scrollTopValue = $root.scrollTop()  + $(item).offset().top - navBarHeight;
  $root.animate({
    scrollTop: scrollTopValue
  }, 1000);
}

function scrollPage(item, item_id){
  scrollTo(item);
  changeNavState(item_id);
  return true;
}
$("#nav_projects").on('click', function(){
  scrollPage('#projects', '#nav_projects');
});
$('#nav_home').on('click', function(){
  scrollPage('.introduction', '#nav_home');
});
$('#nav_about').on('click', function(){
  scrollPage('#about', '#nav_about');
});
$('#down-arrow').on('click', function(){
  scrollTo('#about');
});

var homeOffset = $('#home').offset().top;
var projectsOffset = $('#projects').offset().top;
var aboutOffset = $('#about').offset().top;

$root.on('scroll', function(){
  if ($root.scrollTop() + 20 >= projectsOffset - navBarHeight)changeNavState('#nav_projects');
  else if($root.scrollTop() + 20 >= aboutOffset - navBarHeight)changeNavState('#nav_about');
  else changeNavState('#nav_home');
});
