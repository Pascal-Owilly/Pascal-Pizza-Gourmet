//business logic

function checkoutBtn() {

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


  document.getElementById("userName").innerHTML = "Hi" + " " + name + " " + "your order is";
  document.getElementById("userOrder").innerHTML = number + " " + size + " " + toppings;
  document.getElementById("userTotal").innerHTML = "costing a total of" + " " + total + "/=";


}


$(document).ready(function () {

  $('#home-delivery-btn').click(function (e) {
    e.preventDefault()
    alert("The delivery charge is ksh 100");
    prompt("enter your location");
    alert("Your order will be delivered to your location once you checkout.")
  });

  $('#pick-up-btn').click(function () {
    alert("Hello, we will notify you when your order is ready, thank you");
  });


  $("#checkout-btn").click(function () {
    $('#orderPizza').toggle();
    $('#check').show();
    $("#section").toggle();
    $("#checkout-btn").toggle();
    $("#home-delivery-btn").toggle();
    $("#pick-up-btn").toggle();
  });




});