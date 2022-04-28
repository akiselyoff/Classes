class Vehicle {
  constructor(body, movingParts, interior) {
    this.body = body;
    this.movingParts = movingParts;
    this.interior = interior;
  }

  //   get body() {
  //     return this.body;
  //   }

  //   set body(newBody) {
  //     this.body = newBody;
  //   }
}

class Car extends Vehicle {
  constructor({ body, type, brend, model, color }) {
    super(body);
    this.type = type;
    this.brend = brend;
    this.model = model;
    this.color = color;
  }
}

const myCar = new Car({
  type: 'SUV',
  brend: 'Toyota',
  model: 'Rav4',
  body: 'cabin',
});

console.table(myCar);
