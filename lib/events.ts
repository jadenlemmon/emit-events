type Callback = (payload: Object) => void;

class Events {
  storedEvents: any = {};

  emit = (event: string, payload: Object) => {
    const storedEvent = this.storedEvents[event];
    if (storedEvent && typeof storedEvent === 'function') {
      storedEvent(payload);
    }
  };

  subscribe(event: string, callback: Callback) {
    this.storedEvents[event] = callback;
  }
}

export default new Events();
