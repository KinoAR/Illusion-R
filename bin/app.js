import { Physics, Utils, appendGlobally } from './core/Core';
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
