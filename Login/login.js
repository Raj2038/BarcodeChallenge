//Following function gets values of the user code and pin number fields and checks to see if they match a hard coded username and password
function authenticate(event) {
    var authorised;
    event.preventDefault();
    //get input values
    var usercode = document.getElementById("usercode").value;
    var pinnumber = document.getElementById("pinnumber").value;
    var user=usercode.toUpperCase();

    //check to see if the password and username match
    if (
      (user == "TEST" && pinnumber == "1234" ) || (user == "DION" && pinnumber == "5678") 
    ) {
      // alert("Your info is right");
      window.location.href = "../QrCode/qrcode.html";

      return authorised;
    } else {
      // username or password do not match
      authorised = false;
      document.getElementById("error-message").innerHTML="User code or pin number is not matching.";
      // alert("Sorry, user code or pin number is incorrect.");
    }
    //return result
    return authorised;
  }

  