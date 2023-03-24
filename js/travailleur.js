let btn = document.querySelector(".btn")


btn.addEventListener("click", user-save)

function user_save(){
    const nom = document.getElementById('nom')
    const prenom = document.getElementById("prenom")
    const profession = document.getElementById('profession')
    const contact = document.getElementById('contact')

    const tab = [];
    const objEmpl = {
        id : "",
        nom : nom.value,
        prenom : prenom.value,
        profession : profession.value,
        contact : contact.value
    }

    const dataEmpl = localStorage.getItem('employes');
    let tabJ = JSON.parse(dataEmpl);
    if(!dataEmpl){
        objEmpl.id='Tr1';
        tab.push(objEmpl);
        localStorage.setItem('employes',JSON.stringify(tab))
    }else{
        
        objEmpl.id="Tr"+(tabJ.length+1);
        tabJ.push(objEmpl);
        localStorage.setItem("employes",JSON.stringify(tabJ));   
    }

    const line = document.createElement("tr");
    line.className = 'attributs';
    line.id="attributs"+objEmpl.id.replace('Tr', '');

    const idt = document.createElement('td');
    idt.id='ids'+(tabJ.length+1);
    idt.textContent=objEmpl.id;
    line.append(idt)

    const user = document.createElement('td')
    user.id='users'+(tabJ.length+1);
    user.textContent=objEmpl.nom
    line.append(user)

    const surname = document.createElement('td')
    surname.id='surname'+(tabJ.length+1);
    surname.textContent=objEmpl.prenom
    line.append(surname)

    const job = document.createElement('td')
    job.id='surname'+(tabJ.length+1);
    job.textContent=objEmpl.profession
    line.append(job)

    const contacts = document.createElement('td')
    contacts.id='contacts'+(tabJ.length+1);
    contacts.textContent=objEmpl.contact
    line.append(contacts)
    
    const modifier = document.createElement("<i class="fa-solid fa-pen-to-square"></i>")
}
