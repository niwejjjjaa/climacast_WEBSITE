document.addEventListener("DOMContentLoaded", function () {
    const comments = document.getElementById("comments");
    const charCount = document.getElementById("charCount");
    const ratingStars = document.querySelectorAll(".star");
    const ratingInput = document.getElementById("rating");

    // **Character Counter for Comments**
    comments.addEventListener("input", function () {
        let maxLength = this.maxLength;
        let remaining = maxLength - this.value.length;
        charCount.textContent = `${remaining} characters remaining`;
    });

    // **Star Rating System**
    ratingStars.forEach(star => {
        star.addEventListener("click", function () {
            let selectedRating = this.getAttribute("data-value");
            ratingInput.value = selectedRating; // Store value in hidden input

            // Highlight stars up to the selected one
            ratingStars.forEach(s => {
                s.style.color = s.getAttribute("data-value") <= selectedRating ? "gold" : "gray";
            });
        });
    });  

})

document.addEventListener("DOMContentLoaded", function () {

    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("tel");

    // Create email error message
    const emailErrorMessage = document.createElement("div");
    emailErrorMessage.classList.add("error-message");
    emailErrorMessage.textContent = "Please enter a valid email address.";
    emailInput.parentNode.insertBefore(emailErrorMessage, emailInput.nextSibling);

    // Create phone error message
    const phoneErrorMessage = document.createElement("div");
    phoneErrorMessage.classList.add("error-message");
    phoneErrorMessage.textContent = "Please enter a valid phone number.";
    phoneInput.parentNode.insertBefore(phoneErrorMessage, phoneInput.nextSibling);

    // Validate email in real-time
    emailInput.addEventListener("input", function () {
        if (emailInput.validity.typeMismatch || emailInput.value.trim() === "") {
            emailErrorMessage.style.display = "block";
        } else {
            emailErrorMessage.style.display = "none";
        }
    });

    // Validate phone number in real-time
    phoneInput.addEventListener("input", function () {
        const phoneRegex = /^[0-9]{10}$/; // Adjusted regex for phone number validation
        if (!phoneRegex.test(phoneInput.value) || phoneInput.value.trim() === "") {
            phoneErrorMessage.style.display = "block";
            phoneInput.setCustomValidity("Invalid");
        } else {
            phoneErrorMessage.style.display = "none";
            phoneInput.setCustomValidity("");
        }
    });
});
