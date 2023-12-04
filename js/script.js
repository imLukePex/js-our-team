//  Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Dichiarazione variabili
const gridElement = document.getElementById("grid");

// Creazione Array di oggetti dei membri del team
const arrayMembri = [
    {
        "nome": "Wayne",
        "cognome": "Barnett",
        "role": "Founder & CEO",
        "img": "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela",
        "cognome": "Caroll",
        "role": "Chief Editor",
        "img": "angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter",
        "cognome": "Gordon",
        "role": "Office Manager",
        "img": "walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela",
        "cognome": "Lopez",
        "role": "Social Media Manager",
        "img": "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott",
        "cognome": "Estrada",
        "role": "Developer",
        "img": "scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara",
        "cognome": "Ramos",
        "role": "Graphic Designer",
        "img": "barbara-ramos-graphic-designer.jpg"
    }
]

// Ciclare su tutti i membri e stampare per ognuno di essi: nome, cognome, ruolo e immagine.
for (let i = 0; i < arrayMembri.length; i++) {

    const myElement = createMyElement("div", "member");
    gridElement.append(myElement);
    
    let membroIesimo = arrayMembri[i];
    // console.log(membroIesimo);
    
    let nomeMembroIesimo = membroIesimo.nome;
    let cognomeMembroIesimo = membroIesimo.cognome;
    let roleMembroIesimo = membroIesimo.role;
    let imgMembroIesimo = membroIesimo.img;
    
    myElement.innerHTML = `<div>${nomeMembroIesimo} ${cognomeMembroIesimo}: ${roleMembroIesimo} ${imgMembroIesimo}</div>`;
    console.log(nomeMembroIesimo, cognomeMembroIesimo, ":", roleMembroIesimo, imgMembroIesimo);
}



// FUNZIONE

function createMyElement(tagtype, classname) {
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}