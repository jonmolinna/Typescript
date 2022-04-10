// private => solo se modificara en la clase, y solo seran llamados de la misma clase.
// readonly => solo sera de lectura y solo se usara en su inicializacion.
// protected => pueden ser llamados solamente de la misma clase y de sus clases derivadas (herencia).
// public => pueden ser llamados desde cualquier lugar.
// metodos staticos => nos permite acceder a sus propiedad sin la necidad de instanciar la clase. (ejm Math),
//    es util para valores estaticos que no cambiar en el tiempo.
// abstract => es un metodo que no permite instanciar al clase pero si a sus hijas.

interface Billable {
  currentBill(): string;
}

interface Flyable {
  altitude(): string;
}

abstract class Vehicle {
  //   private marca: string;
  //   private model: string;
  //   private color: string;

  // Lo primero que se inicializa es el constructor
  //   constructor(marca: string, model: string, color: string) {
  //     this.marca = marca;
  //     this.model = model;
  //     this.color = color;
  //   }

  // Otra forma de definir el constructor
  constructor(
    protected readonly marca: string, // lo usaran sus herencia
    private readonly model: string,
    private readonly color: string,
    private price: number
  ) {}

  // Getters (obtiene datos)
  get getCurrentPrice() {
    return this.price;
  }

  // Setters (modifica datos)
  set setChangePrice(value: number) {
    this.price = value;
  }

  static PriceToCurrency(value: number, typeOfCurrency: string) {
    let result = "";
    switch (typeOfCurrency) {
      case "USD":
        result = "USD " + value;
        break;
      case "PESO":
        result = "$ " + value;
        break;
    }

    return result;
  }

  // Metodos
  // drive() {
  //   //   this.color = "" => no se modificara ya que es un readonly
  //   console.log(
  //     `Conduciendo un ${this.marca}, modelo: ${this.model}, color: ${this.color}`
  //   );
  // }

  // este metodo siempre se utiliza mediante sus clases hijas
  abstract drive(): void;
}

// Herencia
class Car extends Vehicle implements Billable {
  drive(): void {
    console.log(`Estoy conduciendo un auto ${this.marca}`);
  }

  currentBill(): string {
    return "La factura actual es de 200";
  }
}

// Inicializar
// const vehicle = new Vehicle("Hyundai", "tucson", "negro", 30000); // ---> no se puede instanciar porque es abstract
// vehicle.drive();

// Visibilidades Atributos
// const vehicle2 = new Vehicle("Tesla", "Model X", "Blanco", 90000); // ---> no se puede instanciar porque es abstract
// vehicle2.marca = "Laborghine"; no se puede modificar porque es private
// vehicle2.drive();

// Inicializar Car
const car = new Car("Toyota", "Raw4", "Negro", 20000);
// car.drive();
// console.log("price", car.getCurrentPrice);
car.setChangePrice = 50000;
// console.log("price actual", car.getCurrentPrice);

// Metodos Staticos
// console.log(Car.PriceToCurrency(100000, "USD"));

// Metodos Abstractas
class Airplane extends Vehicle implements Billable, Flyable {
  drive(): void {
    console.log("Estoy manejando un avion");
  }

  currentBill(): string {
    return "La factura actual es de 2000";
  }

  altitude(): string {
    return "50 000 pies";
  }
}

const avion: Flyable = new Airplane("mazda", "3", "rojo", 200);
