$(document).ready(function(){
  $('#test').click(function(){
    $('.popupq').show();
  });
  $('#close, #closer').click(function(){
    $('.popupq').hide(1000);
  });
});