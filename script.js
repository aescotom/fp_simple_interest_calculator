        function checkdata(){
          //create references to the input elements we wish to validate
          var amount = document.getElementById("amount");
          var interest_rate   = document.getElementById("interest_rate");
          var number_of_years   = document.getElementById("number_of_years");

          //Check if amount field is empty
          if(amount.value == ""){
                alert("Please enter a positive amount");
                amount.focus();
                return false;
          }
          if(amount.value <= 0){
                alert("Please enter a positive amount");
                amount.focus();
                return false;
          }
         //Check if email field is empty
          if(interest_rate.value == ""){
                alert("Please enter the interest rate");
                interest_rate.focus();
                return false;
          }
          if(interest_rate.value <= 0){
                alert("Please enter a positive interest rate");
                interest_rate.focus();
                return false;
          }
         //If all is well return true.
         //alert("Form validation is successful.")
          return true;
        }
        function compute(){
          var amount = document.getElementById("amount");
          var interest_rate   = document.getElementById("interest_rate");
          var number_of_years   = document.getElementById("number_of_years");
          var calculation_interest = amount.value * interest_rate.value/100 * number_of_years.value;
          //var calculation_interest = amount.value * (Math.pow(1 + interest_rate.value/100, number_of_years.value) - 1);
          alert(calculation_interest)
         //document.write(calculation_interest.value);
       }
        function get_amount(){
          var amount = document.getElementById("amount");
          document.write(amount.value);
        }
        function get_interest_rate(){
          var interest_rate = document.getElementById("interest_rate");
          document.write(interest_rate.value);
        }
        function get_current_year(){
          var number_of_years = document.getElementById("number_of_years");
          //var current_year = number_of_years.value + 2021;
          document.write(number_of_years.value * 1 + 2021);
        }
        function update_string(){
            //alert(grab_calculation)
            var grab_interest = documment.getElementById("interest_rate");
            document.getElementById("interest_rate_container").innerHTML = "halsa";
        }
        function getInputValue(){
            // Selecting the input element and get its value 
            var inputVal = document.getElementById("amount").value;
            alert(input_Val);
        }
        
