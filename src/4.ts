class Key {
  constructor(private signature: number = Math.random()) {}
  getSignature(): number {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  constructor(
    protected key: Key,
    protected door: boolean = false,
    private tenants: Person[] = []
  ) {}
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Come in');
    } else {
      console.log('Sorry, is closed');
    }
  }
  abstract openDoor(key: Key): void;
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is open');
    } else {
      console.log('The key is wrong');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
