# node-simple-timer

A bare-bones timer for JavaScript - implemented in TypeScript.

## Installation:
```
$ npm install node-simple-timer
or
$ yarn add node-simple-timer
```

## Usage:

```js

import {Timer} from 'node-simple-timer';

const timer = new Timer();
timer.start();

// Do something

let ms = timer.milliseconds();

// Do something else:

ms = timer.milliseconds();

// One last thing

timer.end();
ms = timer.milliseconds();

console.log('Total seconds: ', timer.seconds();
```

####  Start a Timer at construction time.

```js
const timer = new Timer(true);  // Starts at construction time
```

#### Chaining methods:

```js
const timer = new Timer();

timer.start();
const ns = timer.end().nanoseconds();
```
