"use strict";
var Graphics = /** @class */ (function () {
    function Graphics() {
        throw Error("This is a static class.");
    }
    Graphics.canvasMode = function () {
        return 'Webgl' || 'canvas';
    };
    Graphics.setGCMode = function (gcMode) {
        PIXI.settings.GC_MODE = gcMode;
    };
    Graphics.setResolution = function (resolution) {
        PIXI.settings.RESOLUTION = resolution;
    };
    Graphics.setFilterResolution = function (resolution) {
        PIXI.settings.FILTER_RESOLUTION = resolution;
    };
    Graphics.BLEND_NORMAL = PIXI.BLEND_MODES.NORMAL;
    Graphics.BLEND_ADD = PIXI.BLEND_MODES.ADD;
    Graphics.BLEND_COLOR = PIXI.BLEND_MODES.COLOR;
    Graphics.BLEND_COLORBURN = PIXI.BLEND_MODES.COLOR_BURN;
    Graphics.BLEND_COLORDODGE = PIXI.BLEND_MODES.COLOR_DODGE;
    Graphics.BLEND_SCREEN = PIXI.BLEND_MODES.SCREEN;
    Graphics.GC_MANUAL = PIXI.GC_MODES.MANUAL;
    Graphics.GC_AUTO = PIXI.GC_MODES.AUTO;
    Graphics.SCALE_NEAREST = PIXI.SCALE_MODES.NEAREST;
    Graphics.SCALE_LINEAR = PIXI.SCALE_MODES.LINEAR;
    return Graphics;
}());
