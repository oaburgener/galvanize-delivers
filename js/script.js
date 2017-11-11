$(document).ready(function(){


 $('.add_to_order_ice_cream').on('click', function(event){
   event.preventDefault();

   let price = parseFloat($('.card-ice-cream')[0].innerHTML);

   let priceIceCream = parseFloat($('.ice-cream-price')[0].innerHTML)+ price;

   $('.ice-cream-price')[0].innerHTML = priceIceCream;

   let subtotal = parseFloat($('.subtotal')[0].innerHTML) + priceIceCream;

   $('.subtotal')[0].innerHTML = subtotal;

   let tax = parseFloat($('.tax')[0].innerHTML) + parseFloat((subtotal * 0.09).toFixed(2));
   console.log(tax);

   $('.tax')[0].innerHTML = tax;

   let total = parseFloat($('.total')[0].innerHTML) + parseFloat((subtotal + tax).toFixed(2));

   $('.total')[0].innerHTML = total;

 });

 $('.add_to_order_ribs').on('click', function(event){
   event.preventDefault();

   let price = parseFloat($('.card-ribs')[0].innerHTML);

   let priceRibs = parseFloat($('.ribs-price')[0].innerHTML)+ price;

   $('.ribs-price')[0].innerHTML = priceRibs;

   let subtotal = parseFloat($('.subtotal')[0].innerHTML) + priceRibs;

   $('.subtotal')[0].innerHTML = subtotal;

   let tax = parseFloat($('.tax')[0].innerHTML) + parseFloat((subtotal * 0.09).toFixed(2));
   console.log(tax);

   $('.tax')[0].innerHTML = tax;

   let total = parseFloat($('.total')[0].innerHTML) + parseFloat((subtotal + tax).toFixed(2));

   $('.total')[0].innerHTML = total;
 });

 $('.add_to_order_pizza').on('click', function(event){
   event.preventDefault();
   let price = parseFloat($('.card-pizza')[0].innerHTML);

   let pricePizza = parseFloat($('.pizza-price')[0].innerHTML) + price;

   $('.pizza-price')[0].innerHTML = pricePizza;

   let subtotal = parseFloat($('.subtotal')[0].innerHTML) + pricePizza;

   $('.subtotal')[0].innerHTML = subtotal;

   let tax = parseFloat($('.tax')[0].innerHTML) + parseFloat((subtotal * 0.09).toFixed(2));
   console.log(tax);

   $('.tax')[0].innerHTML = tax;

   let total = parseFloat($('.total')[0].innerHTML) + parseFloat((subtotal + tax).toFixed(2));

   $('.total')[0].innerHTML = total;
 });

 $('.add_to_order_burger').on('click', function(event){
   event.preventDefault();
   let price = parseFloat($('.card-burger')[0].innerHTML);

   let priceBurger = parseFloat($('.burger-price')[0].innerHTML) + price;

   $('.burger-price')[0].innerHTML = priceBurger;

   let subtotal = parseFloat($('.subtotal')[0].innerHTML) + priceBurger;

   $('.subtotal')[0].innerHTML = subtotal;

   let tax = parseFloat($('.tax')[0].innerHTML) + parseFloat((subtotal * 0.09).toFixed(2));
   console.log(tax);

   $('.tax')[0].innerHTML = tax;

   let total = parseFloat($('.total')[0].innerHTML) + parseFloat((subtotal + tax).toFixed(2));

   $('.total')[0].innerHTML = total;
 });

 $('#submit-button').on('click', function(event){
  event.preventDefault();

  if($('.subtotal')[0].innerHTML === "0.00" || $('#icon_prefix').val() === "" || $('#icon_telephone').val() === "" || $('#icon_address').val() === ""){
     Materialize.toast('You have not completed order!', 4000)
  }else{
    $('.subtotal').empty();
    $('.tax').empty();
    $('.total').empty();
    $('#icon_prefix').empty();
    $('#icon_telephone').empty();
    $('#icon_address').empty();
    Materialize.toast('Your order has been submitted!', 4000);
  }


});









 });
