
import prompt from 'prompt-sync';  
import Vertice from './vertice.js'; 

const promptSync = prompt();


function criarVertice(nome) {
  const x = parseFloat(promptSync(`Digite o valor de x para o vértice ${nome}: `));
  const y = parseFloat(promptSync(`Digite o valor de y para o vértice ${nome}: `));
  return new Vertice(x, y);
}


const verticeA = criarVertice('A');
const verticeB = criarVertice('B');
const verticeC = criarVertice('C');

console.log(`Distância entre A e B: ${verticeA.distancia(verticeB).toFixed(2)}`);
console.log(`Distância entre B e C: ${verticeB.distancia(verticeC).toFixed(2)}`);


verticeA.move(10, 15);
console.log(`Novo valor de A: (${verticeA.x}, ${verticeA.y})`);


if (verticeA.equals(verticeB)) {
  console.log('A e B são iguais.');
} else {
  console.log('A e B são diferentes.');
}
