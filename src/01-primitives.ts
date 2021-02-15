let age: number = 5;
const name: string = 'Mango';

//any is bad practice
let value: any = 5;
value = 'Poly';

let id: string | number | boolean = 5;
id = '5';
id = true;

console.log (age, name, value, id);
export {};