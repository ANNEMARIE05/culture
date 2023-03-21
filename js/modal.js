let modalContainer = document.querySelector(".modal-container")
let btn = document.querySelector(".btn")
let modalTriggers = document.querySelectorAll(".modal-trigger")
let inpt = document.querySelector(".inpt")


modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    modalContainer.classList.toggle("active");
}
btn.addEventListener("click", function (e){
    inpt.value = ""
    // location.reload()
})

let textContainer = document.querySelector(".text-container")
let btnClic = document.querySelector(".btn-clic")