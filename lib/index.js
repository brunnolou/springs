"use strict";

var rebound = require("rebound");

function springs() {
    var tension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
    var friction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, _ref$onInit = _ref.onInit, onInit = _ref$onInit === undefined ? function() {} : _ref$onInit, _ref$onUpdate = _ref.onUpdate, onUpdate = _ref$onUpdate === undefined ? function() {} : _ref$onUpdate, _ref$onActivate = _ref.onActivate, onActivate = _ref$onActivate === undefined ? function() {} : _ref$onActivate, _ref$onRest = _ref.onRest, onRest = _ref$onRest === undefined ? function() {} : _ref$onRest;
    var springSystem = new rebound.SpringSystem();
    var spring = springSystem.createSpring(tension, friction);
    var value = 0;
    spring.addListener({
        onSpringUpdate: function onSpringUpdate(theSpring) {
            value = theSpring.getCurrentValue();
            onUpdate(value, theSpring);
        },
        onSpringAtRest: function onSpringAtRest(theSpring) {
            value = theSpring.getCurrentValue();
            onRest(value, theSpring);
        },
        onSpringActivate: function onSpringActivate(theSpring) {
            value = theSpring.getCurrentValue();
            onActivate(value, theSpring);
        }
    });
    onInit(spring);
    return function(endValue) {
        spring.setEndValue(endValue);
        return value;
    };
}

module.exports = springs;