class Vehicle {
  constructor({ body, movingParts, interior } = {}) {
    //  {} заглушка, что пы не переадть пустой объект настроек
    this._body = body; // имя свойства не может совпадать с именем сеттера и геттера поэтому добавляем _
    this.movingParts = movingParts;
    this.interior = interior;
  }

  get body() {
    return this.body;
  }

  set body(newBody) {
    this._body = newBody;
  }
}

class Car extends Vehicle {
  //наследует другой класс

  #use = 'Civil'; //приватное свойство (передается в екземпляр, но у экземпляра нет доступа напрямую, только через геттер)
  constructor({ body, type, brend, model, color }) {
    super(body); //доступ к свойству прототипа
    this.type = type;
    this.brend = brend;
    this.model = model;
    this.color = color;
  }

  get use() {
    return this.#use;
  }
  set use(newUse) {
    this.#use = newUse;
  }
}

const myCar = new Car({
  type: 'SUV',
  brend: 'Toyota',
  model: 'Rav4',
  body: 'cabin',
});

console.log(myCar);

console.log(myCar.use);

class Tank extends Vehicle {
  #use = 'War';
  constructor({ body, model, color }) {
    super(body);
    this.model = model;
    this.color = color;
  }
}

const myTank = new Tank({ body: 'armor', model: 'T-34', color: 'green' });
console.log(myTank);
