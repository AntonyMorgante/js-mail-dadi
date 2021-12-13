const firstDice = Math.floor(Math.random()*6+1)
const secondDice = Math.floor(Math.random()*6+1)

document.writeln("Il tuo lancio di dado vale " + firstDice + ", mentre il lancio di dado del computer vale " + secondDice + ".")
if (firstDice > secondDice){
    document.writeln("Congratulazioni! Hai vinto!");
}
else {
    document.writeln("Purtroppo hai perso! Ritenta!");
}