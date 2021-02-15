//Інтерфейси використовуються для опису об'єктів
// Ім'я інтерфейсу ишемо з велиуої літери
// startIndex?: number; - ? використовується в інтерфейсі перед : для опису необов'язкової властивості об'єкту

interface PluginConfig {
  readonly selector: string;
  perPage?: number;
  startIndex?: number;
  draggable?: false;
}

const config: PluginConfig = {
  selector: "#plugin-1",
  //   perPage: 2,
  //   startIndex: 0,
  //   draggable: false,
};

// config.selector = '#plugin-100';
// config.newProperty = false;

// Index signatures використовується для опису об'єкта із відомими наперед типами значень, але невідомої кількості цих значень
// (наприклад, ключ це рядок, а значення це число і таких значень може бути 10, 20, 30, 100 тощо)

interface Empoyees {
  [key: string]: number;
}

const employees: Empoyees = {
  asteix: 15,
  obelix: 10,
  tom: 25,
  shrek: 80,
  neo: 105,
};

const entries = Object.entries(employees);
let bestEmployeeName = "";
let bestProIndex = 0;

for (const [name, value] of entries) {
  if (bestProIndex <= value) {
    bestEmployeeName = name;
  }
}

console.log("bestEmployeeName: ", bestEmployeeName);

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

// let square = {} as Square;
// square.color = "blue";
// square.sideLength = 10;

// тотожно
let square: Square = {
  color: "blue",
  sideLength: 10,
};

console.log(config, employees, entries, square);
export {};
