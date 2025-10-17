// Generic <T> --> change data based on type
const getFirstElement = (arr: number[]) => {
  return arr[0];
};

const array = [1, 2, 3];
getFirstElement(array);
getFirstElementGeneric(array);

const secArray = ["1", "2", "3"];
getFirstElementGeneric(secArray);
// getFirstElement(secArray) // --> so here comes the main issue since the getFirstElement function is expecting a number array but we are passing a string array

// Make getFirstElemet function Generic
function getFirstElementGeneric<ElementType>(arr: ElementType[]) {
  return arr[0];
}

// Can pass many Generic Type
function getFirstElementGeneric2<ElementType, ElementType2>(
  arr: ElementType[],
  arr2: ElementType2[]
) {
  return {
    first: arr[0],
    second: arr2[0],
  };
}
const val = getFirstElementGeneric2([1, 2, 3], ["a", "b", "c"]);

// Can be use in ApiResponse type -- here it cannot get inferred
type ApiResponse<Data = {}> = { // By default it will be an empty object
  data: Data;
};
type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string; body: string }>;
type StatusResponse = ApiResponse<{ code: number; message: string }>;
// Need to pass the type
const response: UserResponse= {
  data: {
    name: "John",
    age: 23,
  },
};

// Here it will obly be an Object 
type ApiResponse2<Data extends object> = {
  data: Data;
};


// Record<K, T> --> Built in Utility Type that constructs an Object
// K - Type of keys(usually string)
// T - Type of Values

type User = Record<string, string | number>;

const user: User = {
  name: "John",
  age: 23,
};
// Equivalent To
type User2 = {
  [key: string]: string;
};
