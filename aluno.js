class Aluno {
  constructor(matricula, nome) {
    this.matricula = matricula;
    this.nome = nome;
    this.P1 = null; 
    this.P2 = null; 
  }

  lancarNota(prova, nota) {
    if (prova === 'P1') {
      this.P1 = nota;
    } else if (prova === 'P2') {
      this.P2 = nota;
    } else {
      throw new Error('Prova inválida. Use "P1" ou "P2".');
    }
  }

  calcularNotaFinal() {
    if (this.P1 !== null && this.P2 !== null) {
      return ((this.P1 + this.P2) / 2).toFixed(1); 
    } else if (this.P1 !== null) {
      return (this.P1 / 2).toFixed(1); 
    } else if (this.P2 !== null) {
      return (this.P2 / 2).toFixed(1); 
    } else {
      return '0.0'; 
    }
  }

  get notas() {
    const p1 = this.P1 !== null ? this.P1.toFixed(1) : '-';
    const p2 = this.P2 !== null ? this.P2.toFixed(1) : '-';
    const nf = this.calcularNotaFinal();
    return { p1, p2, nf };
  }
}

export default Aluno;
