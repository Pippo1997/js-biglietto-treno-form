// PROBLEMA: calcolare il prezzo totale del viaggio in treno; facendo attenzione all'età del passeggero, km percorsi e alle relative scontistiche applicate in base all'età e emettere il biglietto.


//1-Permettere all'utente di inserire il numero di km che vuole percorrere nell'input
    //1.1-Realizzare input per km


//2-Permettere all'utente di selezionare se minorenne,maggiorenne o over nell'input
    //2.1Realizzare input per età

// 3-Permettere all'utente di inserire Nome e cognome utente
    //3.1Realizzare input per età

//4-calcolare il prezzo (0.21 * KM percorsi) alla pressione di un bottone

    //4.1-SE < di 18 calcolare lo sconto

    //4.2-SE > di 65 calcolare lo sconto

    //4.3-ALTRIMENTI calcolare il prezzo pieno


//5-Mostrare a video il biglietto con nome e prezzo biglietto scontato o meno

//6-Realizzare html per visualizzare risultati


const price_button = document.getElementById(`calc`)
price_button.addEventListener(`click`, function(){

    let name_and_surname = document.getElementById(`name_and_surname`).value;

    let eta = document.getElementById(`eta`).value;

    let km = document.getElementById(`km`).value;

    let prezzo = 0.21 * km;

    if(eta == `minorenne`){
        prezzo = (prezzo * 0.8).toFixed(2);
    }

    else if(eta == `over`){
        prezzo = (prezzo * 0.6).toFixed(2);
    }

    else{
        prezzo = (prezzo).toFixed(2);
    }

    document.getElementById(`put_nome`).innerText = name_and_surname;

    document.getElementById(`put_prezzo`).innerText = prezzo;
});
    
