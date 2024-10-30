// src/validacoes.js
import { DateTime } from 'luxon';

export function validarNome(nome) {
  if (nome.length < 5) {
    console.log('Erro: O nome deve ter pelo menos 5 caracteres.');
    return false;
  }
  return true;
}

export function validarCPF(cpf) {
  if (!/^\d{11}$/.test(cpf)) {
    console.log('Erro: O CPF deve conter exatamente 11 dígitos.');
    return false;
  }
  return true;
}

export function validarDataNascimento(data) {
  const dataFormatada = DateTime.fromFormat(data, 'dd/MM/yyyy');
  const idade = DateTime.now().diff(dataFormatada, 'years').years;
  if (!dataFormatada.isValid || idade < 18) {
    console.log('Erro: A data de nascimento deve ser válida e o cliente deve ter pelo menos 18 anos.');
    return false;
  }
  return true;
}

export function validarRenda(renda) {
  if (isNaN(renda) || renda < 0) {
    console.log('Erro: A renda mensal deve ser um número maior ou igual a 0.');
    return false;
  }
  return true;
}

export function validarEstadoCivil(estadoCivil) {
  const opcoesValidas = ['C', 'S', 'V', 'D', 'c', 's', 'v', 'd'];
  if (!opcoesValidas.includes(estadoCivil)) {
    console.log('Erro: O estado civil deve ser C, S, V ou D.');
    return false;
  }
  return true;
}

export function validarDependentes(dependentes) {
  if (isNaN(dependentes) || dependentes < 0 || dependentes > 10) {
    console.log('Erro: O número de dependentes deve estar entre 0 e 10.');
    return false;
  }
  return true;
}
