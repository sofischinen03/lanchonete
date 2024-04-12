let hamburguer = 18.9;
let batata = 10.5;
let sorvete = 8.9;
let precoHamburguer = 0;
let precoBatata = 0;
let precoSorvete = 0;
let btnCalcular = document.getElementById("btnCalcular");
let resultado = document.getElementById("resultado");

let numeroHamburguer = document.getElementById("h1");
let outputHamburguer = document.getElementById("vh1");
outputHamburguer.innerHTML = numeroHamburguer.value;

let numeroBatata = document.getElementById("b1");
let outputBatata = document.getElementById("vb1");
outputBatata.innerHTML = numeroBatata.value;

let numeroSorvete = document.getElementById("s1");
let outputSorvete = document.getElementById("vs1");
outputSorvete.innerHTML = numeroSorvete.value;

numeroHamburguer.oninput = function () {
  outputHamburguer.innerHTML = this.value;
};
numeroBatata.oninput = function () {
  outputBatata.innerHTML = this.value;
};
numeroSorvete.oninput = function () {
  outputSorvete.innerHTML = this.value;
};

function atualizarPreco() {
  precoHamburguer = numeroHamburguer.value * hamburguer;
  precoBatata = numeroBatata.value * batata;
  precoSorvete = numeroSorvete.value * sorvete;
}

function somaPreco() {
  let precoFinal = precoBatata + precoHamburguer + precoSorvete;
  console.log(precoFinal);
  resultado.innerHTML += `
  <tr>
    <td>${numeroHamburguer.value}</td>
    <td>${precoHamburguer.toFixed(2)}</td>
    <td>${numeroBatata.value}</td>
    <td>${precoBatata.toFixed(2)}</td>
    <td>${numeroSorvete.value}</td>
    <td>${precoSorvete.toFixed(2)}</td>
    <td>${precoFinal.toFixed(2)}</td>  
  </tr>`;
}

btnCalcular.addEventListener("click", atualizarPreco);
btnCalcular.addEventListener("click", somaPreco);