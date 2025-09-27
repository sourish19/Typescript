// ------------ Arrays --------------

// arr itself cannot be undefined or null. But it does not guarantee that the array has elements
type Arr = number[];
const maxValue = (arr: Arr): number => {
  // For the above reason we use this or arr[0]! --> non-null assertion operator
  let maxVal: number = arr[0] ?? -Infinity;
  arr.forEach((val) => (maxVal = val > maxVal ? val : maxVal));
  return maxVal;
};
console.log(maxValue([1, 2, 3, 4, 5]));

interface User {
  firstName: string;
  lastName: string;
  age: number;
}
const isLegal = (arr: User[]) => {
  return arr.filter((val) => val.age > 18);
};
console.log(
  isLegal([
    {
      firstName: "Levi",
      lastName: "Ackerman",
      age: 19,
    },
    {
      firstName: "Mikasa",
      lastName: "Ackerman",
      age: 16,
    },
  ])
);
// ------------------------------

// ---------- ENUMS ------------
// It returns 0,1,2,3....
enum Direction{
    Up = 1,
    Down, // Becomes 2 by default and so on 
    Left,
    Right
}
function doSomething(keyPress: Direction){
    console.log(keyPress);
}
doSomething(Direction.Down)
// ------------------------------

// ------- Most Common UseCase -------
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })