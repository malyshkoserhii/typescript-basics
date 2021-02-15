interface Params {
  size: string;
  toppings: string[];
  price: number;
}

interface IPazza {
  size: string;
  addTopping(topping: string): void;
}

class Pizza implements IPazza {
  static base: string = "tomato";

  // *  Варіант якщо треба написати конструктор, наприклад, коли кожне значення передається окремо, а не як об'єкт *//

  //   constructor(
  //     public size: string,
  //     private toppings: string[],
  //     private price: number
  //   ) {
  //     this.size = size;
  //     this.toppings = toppings;
  //     this.price = price;
  //   }

  public size: string;
  private toppings: string[];

  constructor({ size, toppings = [] }: Params) {
    this.size = size;
    this.toppings = toppings;
  }

  private validateTopping(topping: string): boolean {
    console.log(topping);
    // validation

    return true;
  }

  public addTopping(topping: string) {
    console.log(this.validateTopping(topping));
    this.toppings.push(topping);
  }
}

const pizza: IPazza = new Pizza({
  size: "large",
  toppings: ["cheese"],
  price: 130,
});
console.log(pizza);
// const pizza = new Pizza("large", ["pineapple"], 130);
// console.log(pizza);
// console.log(pizza.toppings);

// const x = pizza.addTopping('qweqwe');
// console.log(x);

export {};
