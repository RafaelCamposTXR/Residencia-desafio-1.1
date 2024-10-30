import prompt from 'prompt-sync';
import Turma from './turma.js';

const promptSync = prompt();
const turma = new Turma();

function inserirAlunoNaTurma() {
  const matricula = promptSync('Digite a matrícula do aluno: ');
  const nome = promptSync('Digite o nome do aluno: ');
  try {
    turma.inserirAluno(matricula, nome);
    console.log('Aluno inserido com sucesso!');
  } catch (error) {
    console.log('Erro:', error.message);
  }
}

function removerAlunoDaTurma() {
  const matricula = promptSync('Digite a matrícula do aluno a ser removido: ');
  turma.removerAluno(matricula);
  console.log('Aluno removido com sucesso!');
}

function lancarNotaAluno() {
  const matricula = promptSync('Digite a matrícula do aluno: ');
  const prova = promptSync('Digite a prova (P1 ou P2): ');
  const nota = parseFloat(promptSync('Digite a nota: '));
  try {
    turma.lancarNota(matricula, prova, nota);
    console.log('Nota lançada com sucesso!');
  } catch (error) {
    console.log('Erro:', error.message);
  }
}

function exibirAlunos() {
  turma.imprimirAlunos();
}

function menu() {
  console.log('\n1. Inserir aluno');
  console.log('2. Remover aluno');
  console.log('3. Lançar nota');
  console.log('4. Imprimir lista de alunos');
  console.log('5. Sair');

  const opcao = promptSync('Escolha uma opção: ');
  return opcao;
}

let opcao = '';
while (opcao !== '5') {
  opcao = menu();
  switch (opcao) {
    case '1':
      inserirAlunoNaTurma();
      break;
    case '2':
      removerAlunoDaTurma();
      break;
    case '3':
      lancarNotaAluno();
      break;
    case '4':
      exibirAlunos();
      break;
    case '5':
      console.log('Saindo');
      break;
    default:
      console.log('Opção inválida. Selecione uma opção válida');
  }
}
