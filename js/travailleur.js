let btn = document.querySelector(".btn");
let tab = document.querySelector(".tab");
let nom = document.querySelector(".nom")
let surname = document.querySelector(".prenom")
let status = document.querySelector(".statut")
let call = document.querySelector(".contact")


btn.addEventListener("click", function(e){
    var div = document.createElement('div')
    div.style.height=" 60px"
    div.style.width="95.5%"
    div.style.border="1px solid #0D5447"
    div.style.margin="0 0 0 2.5%"
    div.style.display="flex"
    div.style.padding= "1% 8% 0"


     tab.appendChild(div)
    // div.appendChild(nom.value)
    // div.appendChild(surname.value)
    // div.appendChild(stauts.value)
    // div.appendChild(call.value)

    return false
})
