import { Object, ObjectAsFunction } from "./object.js";
import readline from 'readline';
import { Observer } from "./observer.js";

const object1 = new Object('Objeto 1')
const object2 = new Object('Objeto 2')
const object3 = ObjectAsFunction('Objeto 3')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter some text: ', (answer) => {
    Observer.getInstance().notify(answer)
    rl.close();
});