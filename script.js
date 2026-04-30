const signPage = document.querySelector(".newsletter-container");
const successPage = document.querySelector(".success-page-container");

const email = document.getElementById("email-input");
const displayEmail = document.getElementById("display-email");
const errorMsg = document.getElementById("error-msg");

const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValid(email) {
    return pattern.test(email);
}

function handleSuccess(e) {
    e.preventDefault();

    if (isValid(email.value)) {
        // Styling
        errorMsg.style.display = "none";
        email.style.backgroundColor = "var(--white)";
        email.style.borderColor = "";

        displayEmail.innerHTML = email.value

        successPage.classList.remove("hidden");
        signPage.classList.add("hidden");
    }
    
    else {
        // Styling
        errorMsg.style.display = "block";
        email.style.backgroundColor = "rgba(255, 98, 87, 0.2)";
        email.style.borderColor = "var(--red)";
    }
}

function handleDismiss() {
    successPage.classList.add("hidden");
    signPage.classList.remove("hidden");
}

submitBtn.addEventListener("click", handleSuccess);
dismissBtn.addEventListener("click", handleDismiss);