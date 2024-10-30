import Vertice from './vertice.js';

class Triangulo {
  #verticeA;
  #verticeB;
  #verticeC;

  constructor(verticeA, verticeB, verticeC) {
    if (!this.#formamTriangulo(verticeA, verticeB, verticeC)) {
      throw new Error('Os vértices fornecidos não formam um triângulo válido.');
    }
    this.#verticeA = verticeA;
    this.#verticeB = verticeB;
    this.#verticeC = verticeC;
  }

  get verticeA() {
    return this.#verticeA;
  }

  get verticeB() {
    return this.#verticeB;
  }

  get verticeC() {
    return this.#verticeC;
  }

  #formamTriangulo(vA, vB, vC) {
    const a = vA.distancia(vB);
    const b = vB.distancia(vC);
    const c = vC.distancia(vA);


    return a + b > c && a + c > b && b + c > a;
  }

  equals(outroTriangulo) {
    return (
      this.#verticeA.equals(outroTriangulo.verticeA) &&
      this.#verticeB.equals(outroTriangulo.verticeB) &&
      this.#verticeC.equals(outroTriangulo.verticeC)
    );
  }

  get perimetro() {
    const a = this.#verticeA.distancia(this.#verticeB);
    const b = this.#verticeB.distancia(this.#verticeC);
    const c = this.#verticeC.distancia(this.#verticeA);
    return a + b + c;
  }

  tipo() {
    const a = this.#verticeA.distancia(this.#verticeB);
    const b = this.#verticeB.distancia(this.#verticeC);
    const c = this.#verticeC.distancia(this.#verticeA);

    if (a === b && b === c) {
      return 'Equilátero';
    } else if (a === b || b === c || a === c) {
      return 'Isósceles';
    } else {
      return 'Escaleno';
    }
  }

  clone() {
    return new Triangulo(this.#verticeA, this.#verticeB, this.#verticeC);
  }

  get area() {
    const a = this.#verticeA.distancia(this.#verticeB);
    const b = this.#verticeB.distancia(this.#verticeC);
    const c = this.#verticeC.distancia(this.#verticeA);
    const s = this.perimetro / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

export default Triangulo;
