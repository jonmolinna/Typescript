// private => solo se modificara en la clase
// readonly => solo sera de lectura y solo se usara en su inicializacion

class Vehicle {
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
    private readonly marca: string,
    private readonly model: string,
    private readonly color: string
  ) {}

  // Metodos
  drive() {
    //   this.color = "" => no se modificara ya que es un readonly
    console.log(
      `Conduciendo un ${this.marca}, modelo: ${this.model}, color: ${this.color}`
    );
  }
}

// Herencia
class Car extends Vehicle {
  drive(): void {
    console.log("Estoy conduciendo un auto");
  }
}

// Inicializar
const vehicle = new Vehicle("Hyundai", "tucson", "negro");
vehicle.drive();

// Visibilidades Atributos
const vehicle2 = new Vehicle("Tesla", "Model X", "Blanco");
// vehicle2.marca = "Laborghine"; no se puede modificar porque es private
vehicle2.drive();

// Inicializar Car
const car = new Car("Toyota", "Raw4", "Negro");
car.drive();

// 2:40:03
