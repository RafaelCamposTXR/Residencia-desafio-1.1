import Vertice from './vertice.js';

class Poligono {
  #vertices = [];

  constructor(vertices) {
    if (vertices.length < 3) {
      throw new Error('Um polígono deve ter pelo menos 3 vértices.');
    }
    this.#vertices = vertices;
  }

  get qtdVertices() {
    return this.#vertices.length;
  }

  addVertice(novoVertice) {
    for (let vertice of this.#vertices) {
      if (vertice.equals(novoVertice)) {
        return false; 
      }
    }
    this.#vertices.push(novoVertice);
    return true;
  }

  get perimetro() {
    let perimetro = 0;
    for (let i = 0; i < this.#vertices.length; i++) {
      const verticeAtual = this.#vertices[i];
      const proximoVertice = this.#vertices[(i + 1) % this.#vertices.length]; 
      perimetro += verticeAtual.distancia(proximoVertice);
    }
    return perimetro;
  }
}

export default Poligono;
