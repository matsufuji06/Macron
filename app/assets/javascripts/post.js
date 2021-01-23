$(function() {
  $('.formGroup__submit .submitBtn').on('click', function(e) {
    e.preventDefault();
    const foodList = $('.foodName .form').val();
    console.log(foodList);
    $.ajax({
      type: 'POST',
      url: '/posts',
      data: {
        foodList: {
          food: foodList
        }
      },
      dataType: 'json'
    })
    .done(function(data){
      const foodHTML = $('td .foodResult').append(data.food);
      $('tr').append(foodHTML);
      $('.foodName .form').val('');
    })
    .fail(function() {
      alert('error');
    });
  });
  
});