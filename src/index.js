const rebound = require('rebound');

function springs(
  tension = 30,
  friction = 1,
  { onInit = () => {}, onUpdate = () => {}, onActivate = () => {}, onRest = () => {} } = {},
) {
  // create a SpringSystem and a Spring with a bouncy config.
  const springSystem = new rebound.SpringSystem();
  const spring = springSystem.createSpring(tension, friction);

  let value = 0;

  spring.addListener({
    onSpringUpdate(theSpring) {
      value = theSpring.getCurrentValue();

      onUpdate(value, theSpring);
    },
    onSpringAtRest(theSpring) {
      value = theSpring.getCurrentValue();

      onRest(value, theSpring);
    },
    onSpringActivate(theSpring) {
      value = theSpring.getCurrentValue();

      onActivate(value, theSpring);
    },
  });

  onInit(spring);

  return (endValue) => {
    spring.setEndValue(endValue);

    return value;
  };
}

module.exports = springs;
