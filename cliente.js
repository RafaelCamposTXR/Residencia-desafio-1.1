
import { DateTime } from 'luxon';

class Cliente {
  constructor(nome, cpf, dataNascimento, renda, estadoCivil, dependentes) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = DateTime.fromFormat(dataNascimento, 'dd/MM/yyyy');
    this.renda = parseFloat(renda);
    this.estadoCivil = estadoCivil.toUpperCase();
    this.dependentes = parseInt(dependentes);
  }

  getCpfFormatado() {
    return `${this.cpf.slice(0, 3)}.${this.cpf.slice(3, 6)}.${this.cpf.slice(6, 9)}-${this.cpf.slice(9, 11)}`;
  }

  getDataFormatada() {
    return this.dataNascimento.toFormat('dd/MM/yyyy');
  }

  getRendaFormatada() {
    return this.renda.toFixed(2).replace('.', ',');
  }
}

export default Cliente;
