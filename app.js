const form = document.querySelector("form");
const input = document.querySelector("form input");
const sucessMessage = document.querySelector(".confirmed__message");
const span = document.querySelector("span");
const dismissBtn = document.querySelector(".dismiss-btn");
const validEmailMessage = document.querySelector(".validEmail");
const emailPattern = /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/;


form.addEventListener("submit", event => {
    event.preventDefault();
    const userEmail = form.email.value.trim();
    if(emailPattern.test(userEmail)){
       sucessMessage.style.display = "flex";
       span.textContent = userEmail;
    } else{
        validEmailMessage.style.display = "block"
    }
});

dismissBtn.addEventListener("click", () => {
    sucessMessage.style.display = "none"; 
});




