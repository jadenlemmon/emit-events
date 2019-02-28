# Emit Events

A simple event library for Javascript

## Installation

```sh
npm i emit-events --save
yarn add emit-events
```

## Usage

```javascript
import Events from 'emit-events';

// emit
Events.emit('myEvent', { foo: 'bar' });

// subscribe
Events.subscribe('myEvent', payload => {
  // do something
});
```

## Decorator Usage

```javascript
import { emit, subscribe } from 'emit-events';

@subscribe('onEvent')
@emit()
class Foo {
  onEvent(payload) {
    console.log(payload);
  }

  sendIt() {
    this.emit('onEvent', { foo: 'bar' });
  }
}
```
