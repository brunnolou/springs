# Springs
[![npm version](https://badge.fury.io/js/springs.svg)](https://badge.fury.io/js/springs)
![](https://david-dm.org/brunnolou/springs.svg)
![](https://img.shields.io/github/size/brunnolou/springs/lib/index.min.js.svg)

### Super simple springs animations.
Add real fluid physics to you custom javascript animations.

## Install
`npm install springs`

## Usage

Create the springs.
```js
import springs from 'springs';

// Tension, friction.
const s1 = springs(140, 10);
const s2 = springs(10, 1);
```


Then watch for example with `requestAnimationFrame`

```js
function update() {
  el.style.transform = `scale3d(${s1(x)}, ${s2(y)}, 0)`;

  requestAnimationFrame(update);
}

requestAnimationFrame(update);
```

Update the end value of the spring, in this case update `x` and `y` with mouse move.
```js
let x = 0;
let y = 0;

// Mouse move example.
function onMove({ clientX, clientY }) {
  x = clientX / 200;
  y = clientY / 200;
}

document.addEventListener('mousemove', onMove);
```

### Events

```js
springs(tension, friction, { events })
````
- `onInit`
- `onUpdate`
- `onActivate`
- `onRest`

### Defaults
```js
tension = 30,
friction = 1,
```

## Development
`npm install`

## Demo

`npm start`

`./example/` folder will be running on: `http://localhost:5000`
