const tempsFirst: number[] = [30, 31, 27, 28, 32];
const tempsSecond: (number | string | false)[] = [30, 31, 27, 28, 32, '5', '15', '22', false];
const tempsThird: readonly number[] = [30, 31, 27, 28, 32];

// tempsThird.push(5)


// Tuple опис масивів конкретної довжини із конкретними типами значень
const coords: [number, number] = [50.4501, 30.5234];
const rgb: [number, number, number] = [255, 145, 68];
const name: [string, string] = ['Serhii', 'Malyshko'];
const person: [string, string, number, boolean] = ['Jack', 'Sparrow', 35, true];

console.log(tempsFirst, coords, tempsSecond, tempsThird, rgb, name, person);
export {}