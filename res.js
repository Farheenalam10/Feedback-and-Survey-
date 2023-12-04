function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        document.getElementById("error-message").innerText = "All fields are required";
    } else {
        document.getElementById("error-message").innerText = "";
        // You can add additional validation or submit the form to the server here
        alert("Registration successful!");
    }
}
