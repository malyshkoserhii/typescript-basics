// const addExpression = function (x: number, y: number): number {
//   return x + y;
// };
type AddFn = (a: number, b: number) => number;
const addExpression: AddFn = function (x, y) {
  return x + y;
};

const addArrow = (x: number, y: number): number => {
  return x + y;
};

const res = addExpression(2, 3);
addArrow(5, 7);

// const fn = (a:number, b:number, c:number, ...restParams: number[]) => {}
type Fn = (a: number, b: number, c: number, ...restParams: number[]) => number;
const fn: Fn = (a, b, c, ...restParams) => {
  return 5;
};
fn(1, 5, 9, 10, 12, 16);

interface IAddFn {
  (a: string, b: string): string;
}

const name: IAddFn = (firstName, LastName) => {
  return `Hello, ${firstName} ${LastName}`;
};
console.log(name("Serhii", "Malyshko"));

const randomFn = (message: string): void => {
  console.log(message);
};

// Pizza

enum PizzaSize {
  Small = "s",
  Medium = "m",
  Large = "l",
}

interface IPizza {
  size: PizzaSize.Small | PizzaSize.Medium | PizzaSize.Large;
  toppings: string[];
  //   topSize?: () => void, // старий синтаксис для опису метода об'єкта
  logSize?(): void;          // новий синтаксис для опису метода об'єкта
  getSize(): string,
  addTopping(topping: string): void,
}

const pizza: IPizza = {
  size: PizzaSize.Medium,
  toppings: ["souce", "mushrooms"],
  logSize() {
    console.log(this.size);
  },
  getSize() {
    return this.size;
  },
  addTopping(topping) {
    this.toppings.push(topping);
  },
};

console.log(addExpression, res, addArrow, fn, randomFn, pizza);
export {};
