// Primeros pasos
function sumar(valor1: number, valor2: number) {
  return valor1 + valor2;
}

// Tipos de datos en TypeScript
// Numbers      =>  number      =>  -1, 2.3, 100
// Strings      =>  string      =>  '', "", ``
// Booleans     =>  bolean      =>  true, false
// Object       => object       =>  {name: 'dallas', age: 34}
// Array        => array        =>  [1, 2, 3]
// Tuples       =>              =>  [1, 2, 3]
// Enums        =>              =>  { Izquierda, Derecha }
// Any
// Union        =>              => string | number | boolean (acepta dos datos)
// Literal

let persona: { name: string; age: number; address: string } = {
  name: "Kendra",
  age: 25,
  address: "Av. las almendras s/n",
};

let hobbies: string[]; // any[] => ingresa cualquier valor
hobbies = ["Escuhar musica", "ser competetivo"];

type vehiculoType = [string, number, string];

//------------------------------------------- 1 Tuplas
let automovil: vehiculoType = ["Hyundai", 2022, "Rojo"];
let motocicleta: vehiculoType = ["Yamaha", 2022, "Negro"];

//------------------------------------------- 2 Enums
enum role {
  student,
  teacher,
}

let person = {
  name: "Jane",
  firstName: "Sifuentes",
  age: 25,
  role: role.student, // print => 0 - 1
};

//------------------------------------------- 3 Any => no es recomendable usar
let datos: any[] = ["Lunes", "Agosto", 12, 2022];

//------------------------------------------- 4 Union
type StringOrNumber = string | number;

function padLeft(value: string, padding: StringOrNumber) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Espera un string pero recibí ${padding}`);
}

// console.log(padLeft("Hola Mundo", 20));

//------------------------------------------- 5 Funciones
// void => no retorna nada (undefined)
function restar(valor1: number, valor2: number): number {
  return valor1 - valor2;
}

function imprimir(): void {
  console.log("Hola Mundo");
}

const dividir = (valor1: number, valor2: number): number => valor1 / valor2;

// never => no retorna nada ni undefined
const throwError = (message: string): never => {
  // de esta forma en typescript se genera un error.
  throw new Error(message);
};

//------------------------------------------- 6 Interfaces
enum Role {
  Doctor,
  Anestesista,
  Asistente,
  Administrativo,
}

interface Staff {
  name: string;
  email: string;
  role: Role;
}

type Staff2 = {
  name: string;
  email: string;
  role: Role;
};

const medico = {
  name: "Martin",
  email: "martin@test.com",
  role: Role.Doctor,
};

const printStaff = (staff: { name: string; email: string; role: Role }) => {
  console.log(staff);
};

// printStaff(medico);

const printStaff2 = (staff: Staff) => {
  console.log(staff);
};

// printStaff2(medico);

const printStaff3 = (staff: Staff2) => {
  console.log(staff);
};

//------------------------------------------- 7 Diferencia entre Interfaces y Types
/* Interfaces
    - Las interfaces son para definir la estructura de un objeto.
    - Por cuestiones de etica se usa interface para estructura un objeto.

  Types
    - Las types tambien pueden difinir la estructura de un objeto y de otros datos como array.
*/

interface Billable {
  total: number;
  currentBill: string;
}
