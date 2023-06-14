// CommonJS 
const { Input } = require('enquirer');

// ES Modules 
// import { Input, AutoComplete } from 'enquirer';
 
// Expect a normal string input from the user
const askName = new Input({
  name: 'name',
  message: 'What is your name?'
});
const askvalue = new Input({
    name: 'name',
    message: 'What is your value?'
  });

// Let the user choose one answer
// const askDrink = new AutoComplete({
//   name: 'drink',
//   message: 'What do you like?',
//   limit: 10,
//   initial: 2,
//   choices: [
//     'coffee',
//     'tea',
//     'pumpkin juice',
//   ]
// });
 
const run = async () => {
  const name1 = await askName.run();
  console.log(` would like a cup of ${name1}`);
  const value = await askvalue.run();
  console.log(`222 would like a cup of ${value.split(" ")}`);
}

run();