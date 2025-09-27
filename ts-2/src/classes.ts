// Interface declaration in clases 
interface User2{
  id: number,
  name: string,
}

// Field needs to be initialized in the constructor itself 
class UserAccount {
  name: string;
  id: number;
  constructor(name:string,id:number){
    this.name = name
    this.id = id
  }
}

const newUser: User2 = new UserAccount('Bankai',1)

console.log(newUser)

// ------ ------
class helloName{
  // Not initialized but no err since I am not using constructor 
    name !: string
    setName(newName:string){
        this.name = newName
    }
    getName(){
        console.log(this.name)
    }
}
const a = new helloName()
a.setName('Sourish')
a.getName()
// ------ ------

class Ds{
  // readonly - I can only assign this variable in constructor not on other functionas
  readonly name: string = 'Zenitsu'
  constructor(secondName: string){
    this.name = `${this.name} ${secondName}`
  }
}
const d = new Ds('Agatsuma')
console.log(d.name);

// ----Overloads---
// -- Method Overload --
class Calculate {
  add(x:number,y:number): number
  add(x:string,y:string): string
  add(x:number|string,y:number|string):number|string{    
    return (x as any) + (y as any)
  }
}
const value = new Calculate()
console.log(value.add(3,21));

// -- Constructor Overload -- when a class can be constructed in multiple ways, with different parameter types or numbers of parameters.
class Point{
  x:number 
  y:number 
  constructor(x:number,y:number)
  constructor(xy:string)
  constructor(x:number|string,y:number = 0){
    if(typeof x === "string"){
      const [px,py] = x.split(",").map(Number)
      this.x = px ?? 0
      this.y = py ?? 0
    }
    else{
      this.x = x
      this.y = y
    }
  }
}
const p1 = new Point(10, 20);   
const p2 = new Point("5,6");    
console.log('This is p1',p1,'This is p2',p2);
// -----------------------------------------