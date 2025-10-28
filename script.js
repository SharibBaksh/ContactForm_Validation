document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();   // Prevent form from submitting
    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    let valid = true;

    // Reset messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    
    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Email Validation 
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email";
        valid = false;
    }

    // Message validation 
    if (message.value.trim() === "") {
        messageError.textContent = "Message cannot be empty";
        valid = false;
    }


    // Success 
    if (valid) {
        successMessage.textContent = "Message sent successfully!";
        document.getElementById("contactForm").reset();
    }
});