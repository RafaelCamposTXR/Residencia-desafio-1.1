import Aluno from './aluno.js';

class Turma {
  constructor() {
    this.alunos = [];
  }

  inserirAluno(matricula, nome) {
    const alunoExistente = this.alunos.find(aluno => aluno.matricula === matricula);
    if (alunoExistente) {
      throw new Error('Já existe um aluno com essa matrícula.');
    }
    const novoAluno = new Aluno(matricula, nome);
    this.alunos.push(novoAluno);
  }

  removerAluno(matricula) {
    this.alunos = this.alunos.filter(aluno => aluno.matricula !== matricula);
  }

  lancarNota(matricula, prova, nota) {
    const aluno = this.alunos.find(aluno => aluno.matricula === matricula);
    if (!aluno) {
      throw new Error('Aluno não encontrado.');
    }
    aluno.lancarNota(prova, nota);
  }

  imprimirAlunos() {
    console.log('---------------------------------------');
    console.log('Matricula Nome                P1   P2   NF');
    console.log('---------------------------------------');
    const alunosOrdenados = this.alunos.sort((a, b) => a.nome.localeCompare(b.nome));
    alunosOrdenados.forEach(aluno => {
      const { p1, p2, nf } = aluno.notas;
      console.log(
        `${aluno.matricula} ${aluno.nome.padEnd(20)} ${p1.padEnd(4)} ${p2.padEnd(4)} ${nf.padEnd(4)}`
      );
    });
    console.log('---------------------------------------');
  }
}

export default Turma;
