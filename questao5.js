
import prompt from 'prompt-sync';
import Cliente from './cliente.js';
import {
  validarNome,
  validarCPF,
  validarDataNascimento,
  validarRenda,
  validarEstadoCivil,
  validarDependentes
} from './validacoes.js';

const promptSync = prompt();

function coletarDadosCliente() {
  let nome, cpf, dataNascimento, renda, estadoCivil, dependentes;


  do {
    nome = promptSync('Digite o nome do cliente: ');
  } while (!validarNome(nome));


  do {
    cpf = promptSync('Digite o CPF do cliente (11 dígitos): ');
  } while (!validarCPF(cpf));

  do {
    dataNascimento = promptSync('Digite a data de nascimento (DD/MM/AAAA): ');
  } while (!validarDataNascimento(dataNascimento));


  do {
    renda = promptSync('Digite a renda mensal (0 ou mais, com vírgula): ').replace(',', '.');
  } while (!validarRenda(parseFloat(renda)));


  do {
    estadoCivil = promptSync('Digite o estado civil (C, S, V ou D): ');
  } while (!validarEstadoCivil(estadoCivil));


  do {
    dependentes = promptSync('Digite o número de dependentes (0 a 10): ');
  } while (!validarDependentes(parseInt(dependentes)));


  const cliente = new Cliente(nome, cpf, dataNascimento, renda, estadoCivil, dependentes);


  console.log('\nDados do Cliente:');
  console.log(`Nome: ${cliente.nome}`);
  console.log(`CPF: ${cliente.getCpfFormatado()}`);
  console.log(`Data de Nascimento: ${cliente.getDataFormatada()}`);
  console.log(`Renda Mensal: R$ ${cliente.getRendaFormatada()}`);
  console.log(`Estado Civil: ${cliente.estadoCivil}`);
  console.log(`Dependentes: ${cliente.dependentes}`);
}


coletarDadosCliente();
