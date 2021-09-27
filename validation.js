function validate() {

    const email = document.getElementById("email").value;
    const valid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(email.match(valid)) {
        document.getElementById("email").value = "";
        document.getElementById("error").innerHTML = "Email has been sent";
        document.getElementById("error").style.color = "hsl(0, 6%, 24%)";
        document.getElementById("email").style.border = "1px solid hsl(0, 36%, 70%)";
        document.getElementById("error-icon").style.display = "none";
    } else {
        document.getElementById("error").innerHTML = "Please provide a valid email adress";
        document.getElementById("email").style.border = "2px solid hsl(0, 93%, 68%)";
        document.getElementById("error-icon").style.display = "inline";
    }
}