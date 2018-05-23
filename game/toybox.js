(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    var Utils;
    (function (Utils) {
        Utils.VERSION = "0.0.1";
    })(Utils || (Utils = {}));
    var Physics;
    (function (Physics) {
        Physics.name = '2DPhysics';
    })(Physics || (Physics = {}));
    function appendGlobally(globalContext, name, entity) {
        globalContext[name] = entity;
    }

    var globalAppend = R.curry(appendGlobally)(window);
    globalAppend('Physics', Physics);
    globalAppend('Utils', Utils);
    var app = new PIXI.Application({ width: 640, height: 360 });
    document.body.appendChild(app.view);

})));
