var menubtn = document.querySelector("#menu");
var closebtn = document.querySelector("#close")
var form = document.querySelector(".form");
var contact = document.querySelector(".contact");
var footer = document.querySelector(".mobile");

menubtn.addEventListener("click", () => {
    form.style.display = "block";
    contact.style.display = "none";
    footer.style.display = "none";
})

closebtn.addEventListener("click", () => {
    form.style.display = "none"
    contact.style.display = "block";
    footer.style.display = "block";
})