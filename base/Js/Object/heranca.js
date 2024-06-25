class Conta { constructor() { 
  this.saldo = 0; } 
  deposita(valor) { this.saldo += valor; } } 

class ContaPoupanca extends Conta { 
  atualiza(indice) { this.saldo += this.saldo * indice; } }