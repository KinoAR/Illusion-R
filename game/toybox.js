(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	var app = new PIXI.Application({ width: 640, height: 360 });
	document.body.appendChild(app.view);
	console.log("Hello");

})));
