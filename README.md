# Emit Events
A simple event library for Javascript

## Installation 
```sh
npm i emit-events --save
yarn add emit-events
```

## Usage

```javascript
import Events from 'emit-events'

// emit
Events.emit('my-event', { foo: 'bar' });

// subscribe
Events.subscribe('my-event', (payload) => {
    // do something
})