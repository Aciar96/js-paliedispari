/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
//1 - chiedo all'utente di scegliere tra pari o dispari
//2- creo una funzione che chiede all'utente un numero da 1 a 5 
//3- creo un numero random per il pc da 1 a 5 
//4- calcolo la somma dei due numeri
//5- calcolo se il risultato è pari o dispari 

// 1 - chiedo all'utente di scegliere tra pari o dispari
const quest = prompt("scegli pari o dispari")
console.log('scelta dell" utanete:' + quest)

// 2- creo una funzione che chiede all'utente un numero da 1 a 5 

function getNumberFromUser(min = 1, max = 5) {
    let numUser = parseInt(prompt(`Inserisci un numero da ${min} a ${max}`))

    //verifico che il numero sia effettivamente un numero e che il minimo e il massimo siano quelli indicati dalla domanda (quindi min=1 max=5)
    while (isNaN(numUser) || numUser < min || numUser > max) {
        alert('Inserisci  un numero valido da 1 a 5')
    }
    return numUser;
}
const numUser = getNumberFromUser()
console.log('numero dell utante:'+ numUser)



//3- creo un numero random per il pc da 1 a 5 
function getRandomNumber(min = 1, max = 5) {
    const RandomNumber = Math.floor(Math.random() * (max + min))
    return RandomNumber
}
const RandomNumber = getRandomNumber()
console.log('numero generato per pc:' +  RandomNumber)


//4- calcolo la somma dei due numeri
const sum = numUser + RandomNumber
console.log('somma dei due numeri:' +sum)

//5- calcolo se il risultato è pari o dispari 
 
if(sum % 2 === 0){
    console.log('risultato finale: pari')
}else{
    console.log('risultato finale:dispari')
}