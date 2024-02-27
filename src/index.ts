// let age: number = 20;

// if(age < 50)
//   age += 10;
// console.log(age);

// let sales= 123_456_789
// let course ='TypeScript'
// let is_published =true
// let level; /* if we don't declare the variable ts compiler asumes the data type to ANY  */
// level = 1
// level = 'a'

// function render(document) {
//  console.log(document);
// }

// let numbers :number[] =[]

// numbers.forEach( n=> n.)

// numbers[0] = 1
// numbers[1] = '1'

// Tuples (used to declare  a pair of values )

// 1 , 'Mosh'

// let user :[number , string ,boolean , number] = [1, 'Mosh' ,true ,0]

// user.push(1)

// const small = 1;
// const medium = 2;
// const large = 3;

//Pascall case

// enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium
// console.log(mySize);

// Functions

function calculateTax(incom: number, taxYear = 2022): number {
  if (taxYear < 50_000) return incom * 1.2;
  return incom * 1.3;

  // undefined (for else)
}

calculateTax(10_000, 2023);

// Objects then Type aliases
// 

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};

// employee.id = 0  Error due to readonly Prop

//
// DRY principle , don't repeat yourself (is a principle of software development aimed at reducing repetition of information)
