/*
    TESTO DELLA VERIFICA DI TPSIT
    Viene richiesto di modificare i file html e js in modo tale da:

    - visualizzare DINAMICAMENTE gli utenti nell'aside (barra laterale sinistra) 
        # ogni utente è un nuovo LI
        # ogni utente in base al genere dovrà essere raffigurato tramite l'icona corretta
        # sotto l'icona dovrà essere rafficurato il nome con l'iniziale maiuscola del nome e l'iniziale maiuscola del cognome
        # il cognome dovrà essere troncato e seguito da . (come si vede nel file originale)

    - aggiornare automaticamente l'header della sezione nel momento in cui clicco su un utente dell'aside
        # modificare l'icona
        # modificare il nome e cognome
        # aggiornare l'ora a proprio piacimento (PER IL MASSIMO DEL PUNTEGGIO: creare un array parallelo con le ore)
    
    - aggiungere DINAMICAMENTE I MESSAGGI
        #Non importa se si utilizza ut1 per l'utente 0 o ut2, l'importante è la coerenza

    - PER IL 10. Gestite il bottone di invio in basso 
        #se il campo di testo non è vuoto aggiungere il messaggio in coda agli altri del personaggio selezionato

*/

function lista(){
    let li = ``;
    let lista = document.getElementById("listUtenti");

    for(let i=1; i<nomeUtenti.length; i++){
        li += `<li onclick="selUtente(`+ i +`)">`
        if(genereUt[i] == "m")
        {
            li += `
            <div class="material-symbols-outlined icone">
                face
            </div>
            `;
        }
        else
        {
            li += `
            <div class="material-symbols-outlined icone">
                face_3
            </div>
            `;
        }
        let x = cognomeUtenti[i];
        li += nomeUtenti[i] + ` ` + x[0] + `.`; 
        
    }

    lista.innerHTML = li;
    msg(1);
}

function selUtente(i){
    let nome = document.getElementById("divNome");
    let profilo = document.querySelector("header > div:first-child");
    let ora = document.getElementById("divUltimoMes");

    if(genereUt[i] == "m"){
        profilo.innerText = "face";
    }
    else
    {
        profilo.innerText = "face_3";
    }

    nome.innerText = nomeUtenti[i] +" "+cognomeUtenti[i];
    ora.innerText = orari[i];

    msg(i);
}

function msg(ut){
    let section = document.querySelector("section > section");
    section.innerHTML = "";

    for(let i in mittenti){
        
        if(mittenti[i] == ut){
            let msg = document.createElement("article");
            msg.innerHTML = messaggi[i];
            msg.classList.add("ut1");
            msg.classList.add("mes");
            section.appendChild(msg);
        }
        else if(destinatari[i] == ut)
        {
            let msg = document.createElement("article");
            msg.innerHTML = messaggi[i];
            msg.classList.add("ut2");
            msg.classList.add("mes");
            section.appendChild(msg);
        }
        
    }
}
