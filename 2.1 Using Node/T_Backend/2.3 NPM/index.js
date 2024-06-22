import generateName from "sillyname";
const loadSuperheroes = async () => {
  const superheroes = await import('superheroes');
  const name = superheroes.random();
  console.log(`I am ${name}!`);
};

var sillyName = generateName();
console.log(`My name is ${sillyName}.`);
loadSuperheroes();
