let admin = {
    email: 'admin.second@gmail.com',
    password: 'SND@admin',
};
let superAdmin = {
    email: 'super.Admin@gmail.com',
    password: 'superAdmin@',
};


console.log(superAdmin.email);
let email = document.querySelector(".email")
let passe = document.querySelector(".passe").value;
let btn = document.querySelector("button")



btn.addEventListener("click" , function(e){
   let et=email.value
   console.log(et);
})

// localStorage.getItem("seConnecter")
// let mesValeurs = JSON(localStorage.getItem("seConnecter"));
// let recupererValeurs = localStorage.setItem('mesValeurs', JSON.stringify(admin));

