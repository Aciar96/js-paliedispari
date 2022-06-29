/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//Domande da farsi quando scriviamo una funzione
// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)


// chiediamo all utente una parola 
//creo una funzione
//creo un ciclo for per invertire la parola
// converto la parola 
// se la parola e palidroma(True) stampo 'la parola è palidroma'
// se la parola non e palidroma( false) scrivo la 'parola non è palidroma'



// chiediamo all utente una parola 
const word = prompt('inserisci una parola')

let palidrome= false;
//creo variabile per montare il testo
let result =''
// creo una funzione



function getPalidrome(){
    //creo un ciclo for per convertire la parola
    for(let i = word.length -1 ;i >= 0; i--){
        // converto la parola 
        result += word[i];
        console.log(result)
        console.log (' la parola non e palidroma')
    }
   // se la parola e palidroma(True) stampo 'la parola è palidroma'
    if(result === word){
        palidrome = true;
        console.log(palidrome)
        console.log('la parola e palidroma')
    }
 return palidrome;
}
console.log(palidrome)

getPalidrome();