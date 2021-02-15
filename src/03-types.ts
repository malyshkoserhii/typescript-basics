//Type composition
// Пишуться лише з великої літери

type ID = number | string;

const userID: ID = 1252;
const postID = '43000';

type Coord = [number, number];
const coords: Coord = [50.2545, 60.4578];

// Union 
// Використовується коли змінна може мати лише одне із конкретно заданих значень (напр. request, success, error)

type ReqStatus = 'request' | 'success' | 'error';
const requestStatus: ReqStatus = 'success';

type CellSize = 2 | 4 | 8;
const cell: CellSize = 8;


console.log(userID, postID, coords, requestStatus, cell);
export {};