//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = prompt("inserisci il primo numero intero");
let num2 = prompt("inserisci il secondo numero intero");
if (num1 > num2) {
  console.log(`${num1} è maggiore di ${num2}`);
} else if (num1 < num2) {
  console.log(`${num1} è minore di ${num2}`);
} else {
  console.log(`${num1} è uguale a ${num2}`);
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
let num1 = prompt("inserisci un numero intero");

if (num1 <= 5) {
  console.log(`Tiny`);
} else if (num1 <= 10 || num1 > 5) {
  console.log(`Small`);
} else if (num1 <= 15 || num1 > 10) {
  console.log(`Medium`);
} else if (num1 <= 20 || num1 > 15) {
  console.log(`Large`);
} else if (num1 >= 20) {
  console.log(`Huge`);
} else {
  console.log(`numero errato`);
}

//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  }
  console.log(`il numero vale${i}`);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++)
  if (i % 2 === 0) {
    console.log(`${i} è pari`);
  } else {
    console.log(`${i} è dispari`);
  }

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num1 = parseInt(prompt("inserisci il primo numero intero"));
let num2 = parseInt(prompt("inserisci il secondo numero intero"));
if (num1 === 8) {
  console.log("num1 è 8");
} else if (num2 === 8) {
  console.log("num2 è 8");
} else if (num1 + num2 === 8) {
  console.log("la somma di num1 e num2 è uguale ad 8");
} else if (num1 - num2 === 8) {
  console.log("la sottrazione di num1 e num2 è uguale ad 8");
} else {
  console.log(
    "ne il valor ne la somma/sottrazione dei due numeri sono uguali ad 8",
  );
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let shopItem1 = parseInt(prompt("costo item"));
let shopItem2 = parseInt(prompt("costo item"));
let shopItem3 = parseInt(prompt("costo item"));
let shopItem4 = parseInt(prompt("costo item"));
let totalShoppingCart = shopItem1 + shopItem2 + shopItem3 + shopItem4;

if (totalShoppingCart === 0) {
  console.log(`il carrello è vuoto`);
} else if (totalShoppingCart > 50) {
  console.log(`totale carrello ${totalShoppingCart} euro ,spedizione gratuita`);
} else if (totalShoppingCart <= 50) {
  console.log(
    `totale carrello ${totalShoppingCart + 10} euro spedizione inclusa`,
  );
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/
let shopItem1 = parseInt(prompt("costo item"));
let shopItem2 = parseInt(prompt("costo item"));
let shopItem3 = parseInt(prompt("costo item"));
let shopItem4 = parseInt(prompt("costo item"));
let totalShoppingCart =
  shopItem1 +
  shopItem2 +
  shopItem3 +
  shopItem4 -
  [(shopItem1 + shopItem2 + shopItem3 + shopItem4) * 20] / 100;

if (totalShoppingCart === 0) {
  console.log(`il carrello è vuoto`);
} else if (totalShoppingCart > 50) {
  console.log(`totale carrello ${totalShoppingCart} euro ,spedizione gratuita`);
} else if (totalShoppingCart <= 50) {
  console.log(
    `totale carrello ${totalShoppingCart + 10} euro spedizione inclusa`,
  );
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
let gender = isMale ? "male" : "female";
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (i = 1; i <= 100; i++)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else if (i % 5 === 0) {
    console.log(`Buzz`);
  } else {
    console.log(i);
  }
