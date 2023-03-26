let travailleurs = [
    {
        id: 1,
        nom: "anne",
        prenom: "marie",
        profession:"programmeuse",
        contact: "234567890",
        taches: [
            {
                id:1,
                tache:'dormir',
                somme:'40000',
                jour: '22',
                mois: '11',
                annee: '1092',
                etat: "termine"
            }
        ]
    }
]



function addTravailleur(travailleurs){
        localStorage.setItem('travailleurs',JSON.stringify(travailleurs))
}

// addTravailleur(travailleurs)//



function getTravailleurs(){
    let travailleurs = localStorage.getItem('travailleurs')
    if(travailleurs === null){
        return []
    }else{
        return JSON.parse(travailleurs)
    }
}


function afficherTravailleurs(){
    const listOfTravailleurs = document.getElementById('all-ravailleurs')

    let ourtravailleurs = getTravailleurs()
    ourtravailleurs.map((travailleur)=>{
        listOfTravailleurs.innerHTML += `
        <tr>
            <td>${travailleur.id}</td>
            <td>${travailleur.nom}</td>
            <td>${travailleur.prenom}</td>
            <td>${travailleur.profession}</td>
            <td>${travailleur.contact}</td>
            <td>
                <a href="modifier.html?id=${travailleur.id}"><i class="fa fa-edit"></i>Modifier</a>
                <a href="" onclick='deleteTravailleurs(${travailleur.id})' ><i class="fa fa-trash"></i>Supprimer</a>
            </td>
        </tr>
        `
    })

    
}
afficherTravailleurs()

function submit(){
    let soumettre = document.getElementById('submit')
    soumettre.addEventListener('click',(e)=>{
        let ourtravailleurs = getTravailleurs()
        let id = document.getElementById('id').value;
        let nom = document.getElementById('nom').value;
        let prenom = document.getElementById('prenom').value;
        let profession = document.getElementById('profession').value;
        let contact = document.getElementById('contact').value;
        // console.log({id,nom,prenom,profession,contact});
        let tache = []
        let data = {
            id,
            nom,
            prenom,
            profession,
            contact,
            tache
        }
        // console.log(data);
        let searchTravailleurs = ourtravailleurs.find((t)=>{
            t.contact===contact
        })
        if(searchTravailleurs !== undefined){
            alert('le travailleurs existe déja')
        }else{
            ourtravailleurs.push(data)
            addTravailleur(ourtravailleurs)
        }
    })
}
submit()

function deleteTravailleurs(id){
    let ourtravailleurs = getTravailleurs()
    let travailleur = ourtravailleurs.filter((t)=> t.id != id)
    addTravailleur(travailleur)
    location.pathname='travailleur.html'
}

function rechercheTracvailleurs(){
    let affichage = document.getElementById('reponse-serveur')
    let recherche = document.getElementById("recherche")
    let ourtravailleurs = getTravailleurs()
    recherche.addEventListener("input", (e)=>{
        let motAChercher = e.currentTarget.value
        let reponse = ourtravailleurs.filter((t)=>t.nom.toLowerCase()===motAChercher.toLowerCase())
        if(motAChercher!== ""){
            if(reponse !== []){
                affichage.classList.add("reponse")
                for (const travailleur of reponse) {
                    affichage.innerHTML+=`
                    <div class="row">
                        <p>${travailleur.nom} ${travailleur.prenom} </p>
                    </div>
                    `
                }
            }else{
                affichage.classList.remove("reponse")
            }
        }else{
            affichage.classList.remove('reponse')
            affichage.innerHTML = ""
            motAChercher = ""
        }
    })
}
rechercheTracvailleurs()



function nombreTotalTravailleur(e){
    
}