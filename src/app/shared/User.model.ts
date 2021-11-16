import { Transaction } from './transaction.model';

export class User {
  userId: string = '';
  password: string = '';
  name: string = '';
  last_login: Date = new Date();
  balance: number = 0;
  transaction!: Transaction[];
  profile:String='';
}
