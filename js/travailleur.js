let btn = document.querySelector(".btn");
let tab = document.querySelector(".tab");
let var1 = document.querySelector(".nom")
let var2 = document.querySelector(".prenom")
let var3 = document.querySelector(".statut")
let var4 = document.querySelector(".contact")


btn.addEventListener("click", function(e){

    // creation de nouvelle div


    var div = document.createElement('div')
    div.style.height=" 50px"
    div.style.width="95.5%"
    div.style.border="1px solid #0D5447"
    div.style.margin="0 0 0 2.5%"
    div.style.display="flex"
    div.style.padding= "1% 8% 0"
    div.style.justifyContent= "space-between"
 

    // creation de nouveau elements 


    let nom = document.createElement("label")
    let surname = document.createElement("label")
    let stauts = document.createElement("label")
    let call = document.createElement("label")



    // ajout des valeurs au differents e

    nom.textContent = var1.value
    surname.textContent = var2.value
    stauts.textContent = var3.value
    call.textContent = var4.value


    tab.appendChild(div)
    div.appendChild(nom)
    div.appendChild(surname)
    div.appendChild(stauts)
    div.appendChild(call)

    return false
})
