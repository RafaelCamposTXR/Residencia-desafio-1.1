import prompt from 'prompt-sync';
import Vertice from './vertice.js';
import Poligono from './poligono.js';

const promptSync = prompt();

function criarVertice(nome) {
  const x = parseFloat(promptSync(`Digite o valor de x para o vértice ${nome}: `));
  const y = parseFloat(promptSync(`Digite o valor de y para o vértice ${nome}: `));
  return new Vertice(x, y);
}

function criarPoligono() {
  console.log('Criação de um polígono:');
  const vertices = [];
  for (let i = 1; i <= 3; i++) {
    vertices.push(criarVertice(`V${i}`));
  }
  return new Poligono(vertices);
}

try {
  const poligono = criarPoligono();
  console.log(`Quantidade de vértices no polígono: ${poligono.qtdVertices}`);
  console.log(`Perímetro do polígono: ${poligono.perimetro.toFixed(2)}`);

  let adicionarMais = promptSync('Deseja adicionar mais um vértice? (s/n): ').toLowerCase();
  while (adicionarMais === 's') {
    const novoVertice = criarVertice('Novo Vértice');
    const adicionado = poligono.addVertice(novoVertice);

    if (adicionado) {
      console.log('Vértice adicionado com sucesso.');
    } else {
      console.log('Vértice já existe no polígono.');
    }

    console.log(`Perímetro atualizado: ${poligono.perimetro.toFixed(2)}`);
    console.log(`Quantidade de vértices: ${poligono.qtdVertices}`);

    adicionarMais = promptSync('Deseja adicionar mais um vértice? (s/n): ').toLowerCase();
  }

} catch (error) {
  console.error('Erro ao criar o polígono:', error.message);
}
