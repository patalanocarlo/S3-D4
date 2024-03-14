const maxCellsPerRow = 10;

function generaTabellone() {
  const tabellone = document.getElementById("tombola");

  let numero = 1;
  let row = tabellone.insertRow();
  for (let i = 0; i < 76; i++) {
    if (i % maxCellsPerRow === 0 && i !== 0) {
      row = tabellone.insertRow();
    }
    let cella = row.insertCell();
    cella.id = "cella" + numero;
    cella.textContent = numero;
    numero++;
  }
}

function estraiNumero() {
  const numeroEstratto = Math.floor(Math.random() * 76) + 1;
  const cellaEstratta = document.getElementById("cella" + numeroEstratto);
  cellaEstratta.style.backgroundColor = "blue";
}

window.onload = generaTabellone;
