export interface Transference {
  id: number;
  personName: string;
  amount: number;
  date: Date;
}

export interface SendTransference {
  id: number;
  idToSend: number;
  amount: number;
}
