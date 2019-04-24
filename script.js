 function myFunction() {
            var at = document.getElementById("email").value.indexOf("@");
            var age = document.getElementById("age").value;
            var fname = document.getElementById("fname").value;
            var password = document.getElementById("password").value;
            var confirm_password = document.getElementById("comfirm-password").value;
            var checkBox = document.getElementById("myCheck");
            var ok = document.getElementById("ak").value;
             ok=1;

            submitOK = "true";


            if (fname.length < 5) {
                alert("Name can't be <5 character!");
                submitOK = "false";
            }

            if (at == -1) {
                alert("Email can not be blank!");
                submitOK = "false";
            }

            if (password != confirm_password) {
                // confirm_password.setCustomValidity("Passwords Don't Match");
                alert("Passwords Don't Match");
                submitOK = "false";

            }
            if (age < 18) {
                alert("Sorry you are under age!");
                submitOK = "false";
            }

            if (checkBox.checked == false) {
                alert("You must accept terms and conditions!");
                submitOK = "false";
            }
            else
            {
                alert("Successfully Logged in");
            }
            
            // if (ok==1) {
            //     alert("Successfully Logged in");
            // }

            if (submitOK == "false") {
                return false;
            }
        }