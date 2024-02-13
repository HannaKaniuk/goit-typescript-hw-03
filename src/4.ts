// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// export {};

class Key {}

class MyHouse {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  openDoor(personKey: Key): void {
    if (this.key === personKey) {
      console.log('Відкриваю двері...');
    } else {
      console.log('Відмовлено в доступі! Невірний ключ.');
    }
  }

  comeIn(person: Person): void {
    // Логіка входу в будинок
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Створення ключа
const key = new Key();

// Створення будинку з використанням ключа
const house = new MyHouse(key);

// Створення персони з використанням того ж ключа
const person = new Person(key);

// Відкриття дверей будинку з ключем, який у персони
house.openDoor(person.getKey());

// Вхід персони до будинку
house.comeIn(person);

export {};
