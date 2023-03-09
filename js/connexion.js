
let admin = {
    email: 'admin.second@gmail.com',
    password: 'SND@admin',
};
const superAdmin = {
    email: 'super.Admin@gmail.com',
    password: 'superAdmin@',
};

let inpt  = document.querySelectorAll("input");
let btn = document.querySelector("button"); 

btn.addEventListener("click", function(e){
    inpt.forEach(el=>{
        if ((inpt[0].value == admin['email'] || inpt[0].value == superAdmin['email']) && 
            (inpt[1].value == admin['password'] || inpt[1].value == superAdmin['password'])){
                console.log("Oui")
        } else{}
        console.log(el.value)
    })
})









