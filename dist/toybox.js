(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    var Physics;
    (function (Physics) {
        Physics.name = '2DPhysics';
    })(Physics || (Physics = {}));

    var Utils;
    (function (Utils) {
        Utils.VERSION = "0.0.1";
    })(Utils || (Utils = {}));

    function appendGlobally(globalContext, name, entity) {
        globalContext[name] = entity;
    }

    //@ts-ignore;
    var globalAppend = R.curry(appendGlobally)(window);
    globalAppend('Physics', Physics);
    globalAppend('Utils', Utils);
    var app = new PIXI.Application({ width: 816, height: 624 });
    document.getElementById("gameCanvas").appendChild(app.view);
    //@ts-ignore
    var engine = Matter.Engine.create();
    //@ts-ignore
    var World = Matter.World;
    //@ts-ignore
    var Bodies = Matter.Bodies;

})));
