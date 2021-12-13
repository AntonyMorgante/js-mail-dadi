const usermails = ("tizio@mail.it", "caio@mail.it", "sempronio@mail.it")

const msMail = prompt("Inserisci la tua mail")

let verified = false;

for (i=0; i<=usermails.length; i++){
    if (msMail == usermails[i]){
        verified = true;
    }
}

if (verified){
    document.writeln("la tua mail non compare nell'elenco");
}
else {
    document.writeln("la tua mail compare nell'elenco");
}