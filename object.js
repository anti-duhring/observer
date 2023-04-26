import { Observer } from "./observer.js";

export class Object {
    #name;
    constructor(name) {
        this.#name = name;

        Observer.getInstance().subscribe(this.action.bind(this))
    }

    action(data) {
        console.log(`${this.#name} made an action: ${data}`)
    }
}

export function ObjectAsFunction(name){

    const action = (data) => {
        console.log(`${name} made an action: ${data}`)
    }

    Observer.getInstance().subscribe(action.bind(this))
}