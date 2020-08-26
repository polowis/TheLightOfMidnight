import Event from 'events';

class Events extends Event.EventEmitter{
    constructor(ctx) {
        this.events = {}
        this.rv = init()
        this.rv.addEventType = add()
    }

    listen() {
        
    }

    init(eventName, subscriber) {
        if(subscriber) {
            let i = arguments.length, args = new Array(i - 1)
            while (--i) args[i - 1] = arguments[i];
            this.events[eventName].subscribe.apply(null, args);
            return ctx;
        }
    }
}

export default Events;