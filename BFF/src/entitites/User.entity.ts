export class User {
  id: number;
  name: string;
  email: string;
  date: Date;

  constructor(id: number, name: string, email: string, date: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.date = date;
  }
}
