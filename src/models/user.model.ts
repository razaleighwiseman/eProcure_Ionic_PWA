import { Deserializable } from './deserializable.model';

export class User implements Deserializable {

    email: string;
    password: string;
    firstName: string;
    lastName: string;
    contact: number;
    nric: number;
    nationality: string;
    address: string

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }


    getFullName() {
        return this.firstName + ' ' + this.lastName;
      }
}