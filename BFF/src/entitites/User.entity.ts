export class User {
  id: number;
  name: string;
  email: string;
  birth: Date;

  constructor(id: number, name: string, email: string, birth: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birth = birth;
  }
}
