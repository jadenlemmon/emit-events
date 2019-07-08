import Log from './log';

type Callback = (payload: Object) => void;

class Events {
  storedEvents: any = {};
  debug: boolean = false;

  log(msg: string, payload: any) {
    if (this.debug) {
      Log(msg, '#18A76D', payload);
    }
  }

  emit = (event: string, payload: Object) => {
    const storedEvent = this.storedEvents[event];
    if (storedEvent && storedEvent.length) {
      storedEvent.forEach((cb: any) => {
        cb(payload);
      });

      this.log(`Emitted: ${event}`, payload);
    }
  };

  subscribe(event: string, callback: Callback) {
    if (this.storedEvents[event]) {
      this.storedEvents[event].push(callback);
    } else {
      this.storedEvents[event] = [callback];
    }
    this.log(`Subscription Added: ${event}`, this.storedEvents);
  }
}

export default new Events();
