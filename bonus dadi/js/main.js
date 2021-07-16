/*
**Gioco dei dadi**
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

function lanciaDadi() {
  var dadoGiocatore = Math.floor(Math.random() * 6);
  var dadoComputer = Math.floor(Math.random() * 6);

  console.log("Il giocatore ha tirato il dado ed è uscito: " + dadoGiocatore);
  console.log("Il computer ha tirato il dado ed è uscito: " + dadoComputer);
  document.getElementById("dadoGiocatore").value = dadoGiocatore;
  document.getElementById("dadoComputer").value = dadoComputer;

  if (dadoGiocatore > dadoComputer) {
    console.log("Il giocatore ha vinto");
    document.getElementById("vincitore").value = "Il giocatore ha vinto";
  } else if (dadoComputer > dadoGiocatore) {
    console.log("Il computer ha vinto");
    document.getElementById("vincitore").value = "Il computer ha vinto";
  } else {
    console.log("Nessun vincitore");
    document.getElementById("vincitore").value = "Nessun vincitore";
  }
}
