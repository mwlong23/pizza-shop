//Business Logic
function Pizza(size, sauce, toppings)  {
  this.size = size;
  this.sauce = sauce;
  this.toppings = [toppings];
};

Pizza.prototype.priceCalculator = function() {
if(this.size === "empty" || this.sauce=== "empty"){
  alert("Please Make sure every field is complete!");
  } else{
    var sizePrice = 0;
    var toppingsPrice = 0;
    var saucePrice = 0;
    if(this.size === "personal"){
      sizePrice = 10.0;
    }else if(this.size === "small"){
      sizePrice = 12.0;
    }else if(this.size === "medium"){
      sizePrice = 14.0;
    }else if(this.size=== "large"){
      sizePrice = 18.0;
    }else if(this.size === "extra"){
      sizePrice = 20;
    }else if( this.size ==="party"){
      sizePrice =26;
    }
  // debugger;
    if(this.toppings[0].length > 2){
      toppingsPrice = (this.toppings[0].length - 2) * 2.75;
    }

    if(this.sauce === "pesto" || this.sauce === "alfredo"){
      saucePrice = 3.0;
    };
    var orderTotal = toppingsPrice + saucePrice + sizePrice;
    return orderTotal;
  }
};
function taxCalculator (subTotal){
  taxRate = .0125;
  total = subTotal+(subTotal*taxRate);
  return total;
}

function clearForm() // THE CLEAR FORM FUNCTION
{
  $('input[type="checkbox"]').prop('checked', false); // Uncheck
  $('input[type="checkbox"]').prop('checked', false); // Uncheck
  $('input[type="checkbox"]').prop('checked', false); // Uncheck
  $('input[type="checkbox"]').prop('checked', false); // Uncheck
  $('input[type="checkbox"]').prop('checked', false); // Uncheck
  $('input[type="checkbox"]').prop('checked', false); // Uncheck


}


//User Interface
$(document).ready(function(){
  subTotal = 0;

  $("#add-pizza").click(function(event){
    event.preventDefault();

    var inputtedPizzaSize = $("#pizza-size").val();
    var inputtedSauce = $("#sauce").val();
    var inputtedToppings = []
    $("input:checkbox[name=topping]:checked").each(function(){
      var selectedTopping = $(this).val();
      inputtedToppings.push(selectedTopping);
      $('input[type="checkbox"]').prop('checked', false); // Uncheck
    });

    var newPizza = new Pizza(inputtedPizzaSize,inputtedSauce,inputtedToppings);
    subTotal += newPizza.priceCalculator();

    $("#single-pizza-summary").append(subTotal + taxCalculator(newPizza.priceCalculator())                                      +newPizza.size + newPizza.sauce
                          +'<p><span class="order-field">Toppings:</span><br>'
                          +newPizza.toppings + '</p>');



  });
});
