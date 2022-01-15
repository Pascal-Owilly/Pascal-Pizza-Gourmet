$(document).ready(function(){   

    // Business logic
    function UserName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }

    function Location(city, estate, street) {
        this.city = city;
        this.estate = estate;
        this.street = street;
    }

    UserName.prototype.fullName = function(){
        return this.fullName;
    }

    console.log(UserName);




    $("#checkout-btn").click(
        function(){
            $("#section").fadeToggle(1000);
            $("form").submit("")

        }
    );


});
