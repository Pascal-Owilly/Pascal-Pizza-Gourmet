$(document).ready(function(){   

    // Business logic
    function UserName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.locations = [];
    }

    function Location(town, estate, street) {
        this.town = town;
        this.estate = estate;
        this.street = street;
    }

    UserName.prototype.fullName = function(){
        return this.firstName + " " + this.lastName;
    }

    Location.prototype.fullLocation = function() {
        return this.town + " " + this.estate + " " + this.street;
    }

    // User logic
   $("form#user-input").submit(function(e){
       e.preventDefault();

       var userFirstName = $("#first-name").val();
       var userLastName =  $("#last-name").val();

       var newName = new UserName(userFirstName, userLastName);
   })

     $(".jumbotron").each(function(){
         var inputedTown = $(this).find("input#town").val();
         var inputedEstate = $(this).find("input#estate").val();
         var inputedStreet = $(this).find("input#street").val();

         var newLocation = new Location(inputedTown, inputedEstate, inputedStreet)
         newName.locations.push(newLocation);
     });

     



    $("#checkout-btn").click(
        function(){
            $("#section").fadeToggle(1000);
            $("form").submit("")

        }
    );


});
