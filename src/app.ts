import {Physics} from './core/Physics';
import {Utils} from './core/Utils';
import {Graphics} from './core/Graphics';
import {appendGlobally} from './core/Core'
//@ts-ignore;
const globalAppend = R.curry(appendGlobally)(window);
globalAppend('Physics', Physics);
globalAppend('Utils', Utils);
globalAppend('Graphics', Graphics);
Graphics.createCanvas();
//@ts-ignore
const engine = Matter.Engine.create();
//@ts-ignore
const World = Matter.World;
//@ts-ignore
const Bodies = Matter.Bodies;