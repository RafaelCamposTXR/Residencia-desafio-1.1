import prompt from 'prompt-sync';
import Vertice from './vertice.js';
import Triangulo from './triangulo.js';

const promptSync = prompt();

function criarVertice(nome) {
  const x = parseFloat(promptSync(`Digite o valor de x para o vértice ${nome}: `));
  const y = parseFloat(promptSync(`Digite o valor de y para o vértice ${nome}: `));
  return new Vertice(x, y);
}

function criarTriangulo(nome) {
  console.log(`Criando o triângulo ${nome}:`);
  const verticeA = criarVertice('A');
  const verticeB = criarVertice('B');
  const verticeC = criarVertice('C');
  return new Triangulo(verticeA, verticeB, verticeC);
}

try {
  const triangulo1 = criarTriangulo('1');
  const triangulo2 = criarTriangulo('2');
  const triangulo3 = criarTriangulo('3');

  console.log(`O perímetro do triângulo 1 é: ${triangulo1.perimetro.toFixed(2)}`);
  console.log(`O tipo do triângulo 1 é: ${triangulo1.tipo()}`);
  console.log(`A área do triângulo 1 é: ${triangulo1.area.toFixed(2)}`);

  console.log(`O perímetro do triângulo 2 é: ${triangulo2.perimetro.toFixed(2)}`);
  console.log(`O tipo do triângulo 2 é: ${triangulo2.tipo()}`);
  console.log(`A área do triângulo 2 é: ${triangulo2.area.toFixed(2)}`);

  console.log(`O perímetro do triângulo 3 é: ${triangulo3.perimetro.toFixed(2)}`);
  console.log(`O tipo do triângulo 3 é: ${triangulo3.tipo()}`);
  console.log(`A área do triângulo 3 é: ${triangulo3.area.toFixed(2)}`);

  console.log(triangulo1.equals(triangulo2)
    ? 'Triângulo 1 é igual ao Triângulo 2.'
    : 'Triângulo 1 é diferente do Triângulo 2.');

  const trianguloClone = triangulo1.clone();
  console.log('Clone do Triângulo 1 criado.');
  console.log(triangulo1.equals(trianguloClone)
    ? 'Clone é igual ao Triângulo 1.'
    : 'Clone é diferente do Triângulo 1.');

} catch (error) {
  console.error('Erro ao criar triângulo:', error.message);
}
