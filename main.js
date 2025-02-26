let roll = +prompt('Quante volte vuoi tirare i dadi?')
let risultato = punteggio(roll)
console.log(risultato);

function punteggio(roll) {
    // partono da 0
    let giocatore1 = 0;
    let giocatore2 = 0;

    for (let i = 0; i < roll; i++) {
        let random1 = Math.floor(Math.random() * (6 - 1) + 1);
        let random2 = Math.floor(Math.random() * (6 - 1) + 1);
        giocatore1 += random1;
        giocatore2 += random2;
        // andava bene giocatore1 = giocatore1 + random? (se sì va bene un solo random?)
        // perchè non funziona con un solo random per tutti e due? il tiro è con lo stesso dado..?  
    }
    
    if (giocatore1 > giocatore2) {
        return `Michele hai vinto con ${giocatore1} punti`
    }else if(giocatore2 > giocatore1){
        return `Michelino hai vinto con ${giocatore2} punti`
    }else{
        return `Pareggio`
    }
}



