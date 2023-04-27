class EventEmitter {
    constructor() {
        this.events = {}
        this.eventsOnce = {}
    }

    on(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback)
        } else {
            this.events[eventName] = []
            this.events[eventName].push(callback)
        }
    }

    off(eventName, callback) {
        this.events[eventName] = this.events[eventName].filter((eventCallback) => eventCallback !== callback)
    }

    once(eventName, callback) {
        if (this.eventsOnce[eventName]) {
            this.eventsOnce[eventName].push(callback)
        } else {
            this.eventsOnce[eventName] = []
            this.eventsOnce[eventName].push(callback)
        }
    }

    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((eventCallback) => eventCallback( ...args))
        }
        if (this.eventsOnce[eventName]) {
            this.eventsOnce[eventName].forEach((eventCallback) => eventCallback(...args))
            delete this.eventsOnce[eventName]
        }
    }
}

class BroadcastEventEmitter extends EventEmitter {
    emit(eventName, ...args) {
        if (eventName === '*') {
            for (const eventKey in this.events) {
                this.events[eventKey].forEach((eventCallback) => eventCallback(...args))
            }
            for (const eventKey in this.eventsOnce) {
                this.eventsOnce[eventKey].forEach((eventCallback) => eventCallback(...args))
            }
            delete this.eventsOnce[eventName]
        }
    }
}

// let emitter = new EventEmitter();
//
// const multiplyTwo = (num) => num * 2;
// const multiplyThree = (num) => num * 3;
//
// const divideTwo = (num) => num / 2;
// const divideThree = (num) => num / 3;
//
// // Добавляем для события multiplication два обработчка
// emitter.on('multiplication', multiplyTwo);
// emitter.on('multiplication', multiplyThree);
//
// // Вызываем событие multiplication, должны вызвать все обработчики для этого события - multiplyTwo и multiplyThree
// emitter.emit('multiplication', 2);
// // -> 4
// // -> 6
//
// // Удалим обработчик multiplyThree для события multiplication
// emitter.off('multiplication', multiplyThree);
//
// // Еще раз вызываем событие multiplication, теперь срабатывает только один обработчик multiplyTwo
// emitter.emit('multiplication', 2);
// // -> 4
//
// // Создадим новое событие divideTwo и добавим два обработчика:
// // divideTwo - срабатывает всегда, когда вызывается событие division (до тех пор, пока не удалим этот обработчик)
// //  divideThree - сработает только ОДИН раз, во время первого ВЫЗОВА события division
// emitter.on('division', divideTwo);
// emitter.once('division', divideThree);
//
// // Вызываем событие division - срабатывают обработчики divideTwo и divideThree
// emitter.emit('division', 6);
// // -> 3
// // -> 2
//
// // Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
// emitter.emit('division', 6);
// // -> 3
//
// // Вызываем еще раз событие division - срабатывает ТОЛЬКО обработчики divideTwo
// emitter.emit('division', 6);
// // -> 3
//
// let broadcastEmitter = new BroadcastEventEmitter();
//
// broadcastEmitter.on('multiplication', multiplyTwo);
// broadcastEmitter.on('multiplication', multiplyThree);
// broadcastEmitter.on('division', divideTwo);
// broadcastEmitter.on('division', divideThree);
//
// // Вызываем все события (multiplication и division) => все обработчики для всех событий будут вызваны.
// // Для события multiplication - вызовутся обработчики multiplyTwo и multiplyThree.
// // Для события division - вызовутся обработчики divideTwo и divideThree.
// broadcastEmitter.emit('*', 6);
