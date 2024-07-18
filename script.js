const form = document.getElementById('registration form'); 

 form.addEventListener ('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value.trim();
    const emailInput = document.getElementById('email').Value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    let isValid = true;
    message = [];

    // user validation
    if (username.length < 3) {
        isValid = false;
        message.push ('username must be ateast 3 character long');
    }


         // email validation
    if (!email.include ('@') || !email.include('.') ) {
        isValid = false;
        message.push ("email must include '@' and '.'  character");
    }

     //password validation
     if (password.length < 8){
        isValid = false;
        message.push('password must be atleast 8 character long');
     }

    // set feedbackDiv

    const feedbackDiv = document.getElementById('formfeedback');
    feedbackDiv.style.display = "block";

    if (isValid) {
        feedbackDiv.textContent = "Registration successful";
        feedbackDiv.style.color = "#28a745";
    } else {
       feedbackDiv.innerHTML = message.join ("<br>");
       feedbackDiv.style.color = "#dc3545";
    }

});
