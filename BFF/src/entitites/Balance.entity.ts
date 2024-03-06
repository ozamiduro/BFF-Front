export class Balance {
  id: number;
  idUser: number;
  balance: number;

  constructor(id: number, idUser: number, balance: number) {
    this.id = id;
    this.idUser = idUser;
    this.balance = balance;
  }
}
