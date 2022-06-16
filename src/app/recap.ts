// Asignación básica
const username_1 = "Anderson";
// Asignación especifica
const username_2: string = "Anderson";
// Asignación especifica doble
const username_3: string | number = "Anderson";

// Asignación especifica en funcion
const suma = (a: number, b: number) => {
  return a+b;
}
suma(1,3);

// Asignación especifica en clase POO
class Person {

  // Clase sin TS
  // age: number;
  // lastName: string;
  // constructor(age: number, lastName: string) {
  //   this.age = age;
  //   this.lastName = lastName;
  // }

  // Clase con TS
  constructor(public age: number, public lastName: string) {}
}
const anderson = new Person(21, "Patino");
anderson.age
