export class Transference {
  id: number;
  personName: string;
  amount: number;
  date: Date;

  constructor(id: number, personName: string, amount: number, date: Date) {
    this.id = id;
    this.personName = personName;
    this.amount = amount;
    this.date = date;
  }
}

export class SendTransference {
  id: number;
  idToSend: number;
  amount: number;
  date: Date;

  constructor(id: number, idToSend: number, amount: number, date: Date) {
    this.id = id;
    this.idToSend = idToSend;
    this.amount = amount;
    this.date = date;
  }
}
