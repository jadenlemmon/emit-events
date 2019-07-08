import Events from './events';

export function subscribe(event: string | string[]) {
  return function(constructor: any) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        const events = Array.isArray(event) ? event : [event];
        events.forEach(e => {
          Events.subscribe(e, payload => {
            if (this[e] && typeof this[e] === 'function') {
              this[e](payload);
              return;
            }
            console.warn(
              `No class method available for subscribed event ${e}!`
            );
          });
        });
      }
    };
  };
}

export function emit() {
  return function(constructor: any) {
    return class extends constructor {
      emit: (a: string, b: Object) => void;
      constructor(...args: any[]) {
        super(...args);
        this.emit = Events.emit;
      }
    };
  };
}
