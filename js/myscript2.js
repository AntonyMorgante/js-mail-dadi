const firstDice = Math.floor(Math.random()*6+1) /* valore del primo dado */
const secondDice = Math.floor(Math.random()*6+1) /* valore del secondo dado */

/* Scriviamo il valore dei due dadi */
document.writeln("Il tuo lancio di dado vale " + firstDice + ", mentre il lancio di dado del computer vale " + secondDice + ".")

/* confronto tra valori ed esito */
if (firstDice > secondDice){
    document.writeln("Congratulazioni! Hai vinto!");
}
else if (firstDice == secondDice){
    document.writeln("Pareggio!")
}
else {
    document.writeln("Purtroppo hai perso! Ritenta!");
}