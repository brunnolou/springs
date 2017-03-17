# Springs

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

Update the value as you wish.
```js
// Mouse move example.
let x = 0;
let y = 0;

function onMove({ clientX, clientY }) {
  x = clientX / 200;
  y = clientY / 200;
}

root.addEventListener('mousemove', onMove);
```

## Development
`npm install`

`npm start`
