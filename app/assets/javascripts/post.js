$(function() {
  $('.formGroup__submit .submitBtn').on('click', function(e) {
    e.preventDefault();
    var foodList = $('.foodName .form').val();
    console.log(foodList);
  });
});