
let roll = +prompt('Quante volte vuoi tirare i dadi?')
let risultato = punteggio(roll)
console.log(risultato);

function punteggio(roll) {
    let giocatore1 = 0;
    let giocatore2 = 0;

    for (let i = 0; i < roll; i++) {
        let random1 = Math.floor(Math.random() * (6 - 1) + 1);
        let random2 = Math.floor(Math.random() * (6 - 1) + 1);
        giocatore1 += random1;
        giocatore2 += random2;
    }
    
    if (giocatore1 > giocatore2) {
        return `Michele hai vinto con ${giocatore1} punti`
    }else if(giocatore2 > giocatore1){
        return `Michelino hai vinto con ${giocatore2} punti`
    }else{
        return `Pareggio`
    }
}