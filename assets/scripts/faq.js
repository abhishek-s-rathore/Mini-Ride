var inputs = document.querySelectorAll(".cross-input");

inputs.forEach(input => {
    input.addEventListener("click",(event) => {
        event.target.nextElementSibling.classList.toggle("animate-t-b");
        event.target.parentElement.querySelector(".fas").classList.toggle("fa-minus")
        event.target.parentElement.querySelector(".fas").classList.toggle("fa-plus")
    })
})