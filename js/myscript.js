/* lista delle mail in rubrica */
const usermails = ("tizio@mail.it", "caio@mail.it", "sempronio@mail.it")

/* chiediamo la mail all'utente */
const msMail = prompt("Inserisci la tua mail")

/* creiamo una variabile di verifica */
let verified = false;

for (i=0; i<=usermails.length; i++){ /* Controlliamo su tutte le mail in rubrica */
    if (msMail == usermails[i]){ /* verifichiamo se la mail inserita dall'utente è presente in rubrica */
        verified = true; /* in caso affermativo la nostra variabile di verifica risulta vera, altrimenti rimarrà falsa */
    }
}

/* A seconda del valore della variabile di verifica stampiamo su schermo il risultato */
if (verified){
    document.writeln("la tua mail non compare nell'elenco");
}
else {
    document.writeln("la tua mail compare nell'elenco");
}