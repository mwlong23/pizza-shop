$(document).ready(function(){
  $("#add-topping").click(function(event){
    event.preventDefault();
    debugger;
    $("#new-toppings").append('<div class="new-topping extra" >'+
      '<div class="form group">'+
        '<label for="topping">Select A Topping:</label>'+
        '<select id="topping">'+
          '<option value=10>Pepperoni</option>'+
          '<option value=12>Sausage</option>'+
          '<option value=14>Vegan Sausage</option>'+
          '<option value=16>Red Onions</option>'+
          '<option value=18>Black Olives</option>'+
          '<option value=20>Green Peppers</option>'+
          '<option value=22>Pineapple</option>'+
          '<option value=22>Jalapenos</option>'+
        '</select>'+
      '</div>'+
    '</div>');



  });
});
