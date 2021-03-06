/*
**Mail**

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

**Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
**Consigli del giorno:**
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

var listaMail = ["vito95v@gmail.com", "dariobosco@mailstrana.com"];

var mail = prompt("Inserisci la tua mail:");

// Senza ciclo
if (listaMail.includes(mail)) {
  console.log("Accesso riuscito");
} else {
  console.log("Accesso negato");
}

// Con il ciclo (Scommentalo se vuoi vedere cosa fa)
// var mailcheck = false;

// for (i = 0; i < listaMail.length; i++) {
//   if (mail == listaMail[i]) {
//     console.log("Accesso riuscito");
//     mailcheck = true;
//   }
// }

// if (mailcheck == false) {
//   console.log("Accesso negato");
// }
