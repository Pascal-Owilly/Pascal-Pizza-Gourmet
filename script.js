$(document).ready(function(){   

    // Business logic
    function UserName(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    function Location(city, county, state) {
        this.city = city;
        this.county = county;
        this.state = state;
    }

    


    $("#checkout-btn").click(
        function(){
            $("#section").fadeToggle(1000);
            $("form").submit("")

        }
    );


});
