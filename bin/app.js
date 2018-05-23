import { Physics, Utils, appendGlobally } from './core/Core';
//@ts-ignore;
var globalAppend = R.curry(appendGlobally)(window);
globalAppend('Physics', Physics);
globalAppend('Utils', Utils);
var app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);
