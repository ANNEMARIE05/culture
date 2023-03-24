document.getElementById('submit').addEventListener('click', user_save)

function user_save(){
    const nom = document.getElementById('nomUser')
    const contact = document.getElementById('contactUser')
    const compte = document.getElementById('compteUser')

    const tab = [];
    const objEmpl = {
        id : "",
        nom : nom.value,
        contact : contact.value,
        compte : compte.value,
        statut : 1,
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
    const line = document.createElement('div');
        line.className='attributs';
        line.id='attribut'+objEmpl.id.replace('Tr','');
        const idt = document.createElement('p')
        idt.id="ids"+(tabJ.length+1);
        idt.textContent=objEmpl.id
        line.append(idt)
        const user = document.createElement('p')
        user.id='users'+(tabJ.length+1);
        user.textContent=objEmpl.nom
        line.append(user)
        const contacts = document.createElement('p')
        contacts.id='contacts'+(tabJ.length+1);
        contacts.textContent=objEmpl.contact
        line.append(contacts)
        const count = document.createElement('p')
        count.id='counts'+(tabJ.length+1);
        count.textContent=objEmpl.compte
        line.append(count)
        const action = document.createElement('p')
        action.id='action'+(tabJ.length+1);
        line.append(action)
        const option = document.createElement('div')
        option.className='option';
        option.id='option'+(tabJ.length+1);
        action.append(option)
        const left = document.createElement('div')
        left.className='left';
        left.textContent='modifier'
        left.id='left'+(tabJ.length+1);
        option.append(left)
        const right = document.createElement('div')
        right.className='right';
        right.textContent='supprimer';
        right.id='right'+(tabJ.length+1);
        action.append(right);
        document.getElementById("array").append(line)

}

const  selectUer =JSON.parse(localStorage.getItem('employes'))
function affiche(params){
    if((params.length != 0)){
        params.forEach(element => {
            const line = document.createElement('div');
            line.className='attributs';
            line.id='attribut'+element.id.replace('Tr','');
            const idt = document.createElement('p')
            idt.id="ids"+element.id
            idt.textContent=element.id
            line.append(idt)
            const user = document.createElement('p')
            user.id='users'+element.id;
            user.textContent=element.nom
            line.append(user)
            const contacts = document.createElement('p')
            contacts.id='contacts'+element.id;
            contacts.textContent=element.contact
            line.append(contacts)
            const count = document.createElement('p')
            count.id='counts'+element.id;
            count.textContent=element.compte
            line.append(count)
            const action = document.createElement('p')
            action.id='action'+element.id;
            line.append(action)
            const option = document.createElement('div')
            option.className='option';
            option.id='option'+element.id;
            action.append(option)
            const left = document.createElement('div')
            left.className='left';
            left.textContent='modifier'
            left.id='left'+element.id;
            option.append(left)
            const right = document.createElement('div')
            right.className='right';
            right.textContent='supprimer';
            right.id='right'+element.id;
            action.append(right);
            document.getElementById("array").append(line) 
        });
    }
}
affiche(selectUer);