import Events from './events';

export function subscribe(event: string) {
  return function(constructor: any) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        Events.subscribe(event, payload => {
          this[event](payload);
        });
      }
    };
  };
}

export function emit() {
  return function(constructor: any) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        this.emit = Events.emit;
      }
    };
  };
}
