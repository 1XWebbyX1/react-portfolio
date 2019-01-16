import $ from 'jquery'


var jqueryTransitions = (function () {

  var start = function(){

  //hover on project function------------
  $('.inner').hover(function() {
     $(this).css('mask-image', 'none');
     $('.inner .graph').css('visibility', 'hidden');
   }, function() {
    $(this).css('mask-image', 'radial-gradient(black 30%, rgba(0, 0, 0, 0.8) , rgba(255, 255, 255, 0.1) )');
    $('.inner .graph').css('visibility', 'visible');
 });

  //hover on buttons in home section---------------
  $('#project-btn').hover(function() {
     $('#line-1').css('box-shadow', '0px 1px 4px inset #d3d3d3');

 }, function() {
    $('#line-1').css('box-shadow', '0px 1px 4px inset #111');
 });

   $('#about-btn').hover(function() {
     $('#line-2').css('box-shadow', '0px 1px 4px inset #d3d3d3');

 }, function() {
    $('#line-2').css('box-shadow', '0px 1px 4px inset #111');
 });
  }

  return {
    start: start
  }
})();


export default jqueryTransitions;
