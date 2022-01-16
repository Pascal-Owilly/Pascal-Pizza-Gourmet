//business logic

function checkOut() {

  var size = (document.getElementById("size").value);
  var toppings = (document.getElementById("tops").value);
  var number = (document.getElementById("quantity").value);
  var name = document.getElementById("name").value;
  var crust = (document.getElementById("crusty").value);



  if (size === "Small") {
    var prize = 650;
  } else if (size === "Medium") {
    var prize = 850;
  } else if (size === "Large") {
    var prize = 1450;
  }



  if (toppings === "Hawaian") {
    var toppingPrice = 150;
  } else if (toppings === "Chicken Periperi") {
    var toppingPrice = 220;
  } else if (toppings === "BBQ steak") {
    var toppingPrice = 250;
  } else if (toppings === "Broccoli") {
    var toppingPrice = 200;
  } else if (toppings === "Chicken tikka") {
    var toppingPrice = 330;
  }



  var total = ((prize + toppingPrice) * number);


  document.getElementById("name").innerHTML = "Hi" + " " + name + " " + "your order is";
  document.getElementById("order").innerHTML = number + " " + size + " " + toppings;
  document.getElementById("total").innerHTML = "costing a total of" + " " + total + "/=";


}


$(document).ready(function () {

  $('#home-delivery-btn').click(function (e) {
    e.preventDefault()
    prompt("enter your location");
    alert(name + " your order is on the way, delivery fee is ksh 55, thank you")
  });

  $('#pick-up-btn').click(function () {
    alert("Hello, we will notify you when your order is ready, thank you");
  });


  $("#checkout-btn").click(function () {
    $('#orderPizza').hide();
    $('#check').show();
    $("#section").toggle();
    $("#checkout-btn").toggle();
    $("#home-delivery-btn").toggle();
    $("#pick-up-btn").toggle();

  });




});