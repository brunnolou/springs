import springs from '../';

///////////////////////////////////////////////////////////////
// Create DOM.
var root = document.getElementById('root');

root.style.width = '200px';
root.style.height = '200px';
root.style.border = '1px solid #333';
root.style.display = 'table-cell';
root.style.verticalAlign = 'middle';
root.style.textAlign = 'center';

var el = root.appendChild(document.createElement('img'));
el.src = 'http://facebook.github.io/rebound/images/rebound.png';
///////////////////////////////////////////////////////////////

// Create 2 springs.
const s1 = springs(140, 10);
const s2 = springs(10, 1);

let x = 1;
let y = 0;

function onMove({ clientX, clientY }) {
  x = clientX / 200;
  y = clientY / 200;
}

root.addEventListener('mousemove', onMove);

// Request Animation Frame logic.
function update() {
  el.style.transform = 'scale3d(' + s1(x) + ', ' + s2(y) + ', 1)';

  requestAnimationFrame(update);
}

requestAnimationFrame(update);

