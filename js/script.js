var $root = $('#main');

var changeNavState = function(item_id){
  $('#nav_projects').removeClass("navigation-bar-active");
  $('#nav_home').removeClass("navigation-bar-active");
  $('#nav_about').removeClass("navigation-bar-active");
  $(item_id).addClass("navigation-bar-active");
};

function scrollPage(item, item_id){
  var scrollTopValue = $root.scrollTop()  + $(item).offset().top - 80;
  $root.animate({
    scrollTop: scrollTopValue
  }, 1000);
  changeNavState(item_id);
  return true;
}
$("#down-arrow, #nav_projects").on('click', function(){
  scrollPage('#projects', '#nav_projects');
});
$('#nav_home').on('click', function(){
  scrollPage('.introduction', '#nav_home');
});
$('#nav_about').on('click', function(){
  scrollPage('#about', '#nav_about');
});

var homeOffset = $('#home').offset().top;
var projectsOffset = $('#projects').offset().top;
var aboutOffset = $('#about').offset().top;

$root.on('scroll', function(){
  console.log($root.scrollTop());
  if($root.scrollTop() + 20 >= aboutOffset - 80)changeNavState('#nav_about');
  else if ($root.scrollTop() + 20 >= projectsOffset - 80)changeNavState('#nav_projects');
  else changeNavState('#nav_home');
});
