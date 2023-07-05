export interface Cat {
  name: string;
  age: number;
  meow(): void;
}

export interface Dog {
  name: string;
  age: number;
  bark(): void;
}

export const createAnimal = (name: string, age: number): Cat | Dog => {
  let random = Math.random() > 0.5;

  const cat = { name, age, meow() {} };
  const dog = { name, age, bark() {} };

  return random ? cat : dog;
};
