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
  taxRate = .11;
  tax = subTotal*taxRate;
  return tax;
}


//User Interface
$(document).ready(function(){
  var subtotal = 0.0;
  var tax = 0.0


  $("#add-pizza").click(function(event){
    event.preventDefault();
    $("#hide-ingredients").show();



  });

  $("#add-to-cart").click(function(){
    $("#order-total").show();
    $("#hide-ingredients").hide();

    var inputtedPizzaSize = $("#pizza-size").val();
    var inputtedSauce = $("#sauce").val();
    var inputtedToppings = [];
    var newPizza = new Pizza(inputtedPizzaSize,inputtedSauce,inputtedToppings);
    pizzaNoTaxAdded = parseFloat(newPizza.priceCalculator());

    $("input:checkbox[name=topping]:checked").each(function(){
      var selectedTopping = $(this).val();
      inputtedToppings.push(selectedTopping);
      $('input[type="checkbox"]').prop('checked', false); // Uncheck checkboxes
    });



//displays totals in order summary
    subtotal +=pizzaNoTaxAdded;
    $("#subtotal").text(subtotal);
    tax = taxCalculator(subtotal);
    $("#calculated-tax").text(tax);
    orderTotal = subtotal+ tax;
    $("#final-price").text(orderTotal);


    if(inputtedPizzaSize === "empty" || inputtedSauce === "empty" || inputtedToppings === []){
    }else{
      $("#order-total").show();
      $("#single-pizza-summary").append(
                        '<p><spanclass="order-field">Pizza:</span><br>'                                 +newPizza.size
                        +'-'+ newPizza.sauce+'-'+ newPizza.toppings
                         + '</p> $ ' +pizzaNoTaxAdded+'<p>-----------------------------------------------------------------</p>'
                        );
    }
  })
});
