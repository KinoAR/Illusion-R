export var Utils;
(function (Utils) {
    Utils.VERSION = "0.0.1";
})(Utils || (Utils = {}));
export var Physics;
(function (Physics) {
    Physics.name = '2DPhysics';
})(Physics || (Physics = {}));
var Scene = /** @class */ (function () {
    function Scene() {
    }
    return Scene;
}());
export { Scene };
export function appendGlobally(globalContext, name, entity) {
    globalContext[name] = entity;
}
