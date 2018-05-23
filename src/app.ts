import {Physics, Utils, appendGlobally} from './core/Core'
//@ts-ignore;
const globalAppend = R.curry(appendGlobally)(window);
globalAppend('Physics', Physics);
globalAppend('Utils', Utils);
const app = new PIXI.Application({width:816, height: 624});
document.getElementById("gameCanvas").appendChild(app.view);
//@ts-ignore
const engine = Matter.Engine.create();
//@ts-ignore
const World = Matter.World;
//@ts-ignore
const Bodies = Matter.Bodies;