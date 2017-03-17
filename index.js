var rebound = require('rebound');

function springs(t, f, onUpdate = () => {}) {
  // create a SpringSystem and a Spring with a bouncy config.
  var springSystem = new rebound.SpringSystem();
  var spring = springSystem.createSpring(t, f);

  var value = 0;

  spring.addListener({
    onSpringUpdate(spring) {
      value = spring.getCurrentValue();

      onUpdate(value);
    }
  });

  return (endValue) => {
    spring.setEndValue(endValue);

    return value;
  }
}

module.exports = springs;
