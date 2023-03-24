

let soumettre = document.getElementById("submit")

soumettre.addEventListener("click", user_save)

function user_save(){
    const addNom = document.getElementById('nom')
    const addPrenom = document.getElementById("prenom")
    const addProfession = document.getElementById('profession')
    const addContact = document.getElementById('contact')
alert("bbbbb")
    console.log(addNom.value)
    console.log(addPrenom.value);
    console.log(addProfession.value)
    console.log(addContact.value);

    const tab = [];
    const objEmpl = {
        id : "",
        addNom : addNom.value,
        addPrenom : addPrenom.value,
        addProfession : addProfession.value,
        addContact : addContact.value
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
    line.id="attribut"+objEmpl.id.replace('Tr', '');
    const idt = document.createElement('td');
    idt.id='ids'+(tabJ.length+1);
    idt.textContent=objEmpl.id;
    line.append(idt)
    const user = document.createElement('td')
    user.id='nom'+(tabJ.length+1);
    user.textContent=objEmpl.addNom
    line.append(user)
    const surname = document.createElement('td')
    surname.id='prenom'+(tabJ.length+1);
    surname.textContent=objEmpl.addPrenom
    line.append(surname)
    const job = document.createElement('td')
    job.id='profession'+(tabJ.length+1);
    job.textContent=objEmpl.addProfession
    line.append(job)
    const contacts = document.createElement('td')
    contacts.id='contact'+(tabJ.length+1);
    contacts.textContent=objEmpl.addContact
    line.append(contacts)
}

const selectUer =JSON.parse(localStorage.getItem('employes'))
function affiche(params){
    if((params.length != 0)){
        params.forEach(element => {
            const line = document.createElement("tr");
            line.className = 'attributs';
            line.id="attributs"+objEmpl.id.replace('Tr', '');
            const idt = document.createElement('td');
            idt.id='ids'+(tabJ.length+1);
            idt.textContent=objEmpl.id;
            line.append(idt)
            const user = document.createElement('td')
            user.id='nom'+(tabJ.length+1);
            user.textContent=objEmpl.addNom
            line.append(user)        
            const surname = document.createElement('td')
            surname.id='prenom'+(tabJ.length+1);
            surname.textContent=objEmpl.addPrenom
            line.append(surname)  
            const job = document.createElement('td')
            job.id='profession'+(tabJ.length+1);
            job.textContent=objEmpl.addProfession
            line.append(job)       
            const contacts = document.createElement('td')
            contacts.id='contact'+(tabJ.length+1);
            contacts.textContent=objEmpl.addContact
            line.append(contacts)
            document.getElementById("attribut").append(line)

        });
    }
}
affiche(selectUer)