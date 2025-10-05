// More on Arrays

const superHeros: string[] = [];
superHeros.push("spiderman");
superHeros.push("batman");
superHeros.push("superman");

console.log(superHeros);

const heroPower: number[] = [];
heroPower.push(1);
heroPower.push(2);
heroPower.push(3);
console.log(heroPower);

type HeroswithPower = {
  name: string;
  power: number;
};

const herosWithPower: HeroswithPower[] = [];

superHeros.forEach((hero,index) => (
    heroPower[index]? herosWithPower.push({ name: hero, power: heroPower[index] }) : null
))
console.log(herosWithPower);
// herosWithPower.push({ name: superHeros[0]!, power: heroPower[0]! }); --> This me it cannot be undefined otherwise will throw runtime error

const MLModels: number[][] = [
  [255, 255, 255],
  [123, 124, 125, 126],
];

const newUser: (string|number)[] = [0,'hhhh']

type NonEmptyArray<T> =[T,...T[]] 
const anotherUser : NonEmptyArray<number|string> = ['',2] // cant have [] 