//Business Logic
function Pizza(size, sauce, toppings)  {
  this.size = size;
  this.sauce = sauce;
  this.toppings = [toppings];
};

Pizza.prototype.priceCalculator = function() {

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

  if(this.sauce === "pesto" || this.sauce === "white"){
    saucePrice = 3.0;
  };
  return toppingsPrice + saucePrice + sizePrice
};

//User Interface
$(document).ready(function(){
  // $(function(event){
  //   event.preventDefault();
  //   // debugger;
  //   });
  $("#add-pizza").click(function(event){
    event.preventDefault();

    var inputtedPizzaSize = $("#pizza-size").val();
    var inputtedSauce = $("#sauce").val();
    var inputtedToppings = []
    $("input:checkbox[name=topping]:checked").each(function(){
      var selectedTopping = $(this).val();
      inputtedToppings.push(selectedTopping);
    });

    var newPizza = new Pizza(inputtedPizzaSize,inputtedSauce,inputtedToppings);



    $("#single-pizza-summary").append(newPizza.priceCalculator()                                      +newPizza.size + newPizza.sause
                          +'<p><span class="order-field">Toppings:</span><br>'
                          +newPizza.toppings + '</p>');



  });
});
