export class Observer {
    #subscribers = []

    static instance = new Observer();

    static getInstance() {
        return this.instance;
    }

    subscribe(callback) {
        this.#subscribers.push(callback);
    }

    unsubscribe(callback) {
        this.#subscribers = this.#subscribers.filter(subscriber => subscriber !== callback);
    }

    notify(data) {
        this.#subscribers.forEach(subscriber => {
            subscriber(data);
        })
    }
}