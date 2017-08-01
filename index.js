var rebound = require("rebound");

function springs(
  tension = 30,
  friction = 1,
  { onInit = () => {}, onUpdate = () => {}, onActivate = () => {}, onRest = () => {} } = {}
) {
  // create a SpringSystem and a Spring with a bouncy config.
  var springSystem = new rebound.SpringSystem();
  var spring = springSystem.createSpring(tension, friction);

  var value = 0;

  spring.addListener({
    onSpringUpdate(spring) {
      value = spring.getCurrentValue();

      onUpdate(value, spring);
    },
    onSpringAtRest(spring) {
      value = spring.getCurrentValue();

      onRest(value, spring);
    },
    onSpringActivate(spring) {
      value = spring.getCurrentValue();

      onActivate(value, spring);
    }
  });

	onInit(spring);

  return endValue => {
    spring.setEndValue(endValue);

    return value;
  };
}

module.exports = springs;
