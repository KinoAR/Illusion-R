export class Graphics {
  constructor() {
    throw Error("This is a static class.");
  }

  static BLEND_NORMAL = PIXI.BLEND_MODES.NORMAL;
  static BLEND_ADD = PIXI.BLEND_MODES.ADD;
  static BLEND_COLOR = PIXI.BLEND_MODES.COLOR;
  static BLEND_COLORBURN = PIXI.BLEND_MODES.COLOR_BURN;
  static BLEND_COLORDODGE = PIXI.BLEND_MODES.COLOR_DODGE;
  static BLEND_SCREEN = PIXI.BLEND_MODES.SCREEN;
  static GC_MANUAL = PIXI.GC_MODES.MANUAL;
  static GC_AUTO = PIXI.GC_MODES.AUTO;
  static SCALE_NEAREST = PIXI.SCALE_MODES.NEAREST;
  static SCALE_LINEAR = PIXI.SCALE_MODES.LINEAR;
  static _width:number;
  static _height:number;
  static _canvas:HTMLCanvasElement;
  static _app:PIXI.Application;
  static _renderer:PIXI.CanvasRenderer | PIXI.WebGLRenderer;

  static createCanvas() {
    this._app = new PIXI.Application({ width: 816, height: 624 });
    this._canvas = this._app.view;
    this._renderer = this._app.renderer;
    this._width = this._canvas.width;
    this._height = this._canvas.height;
    document.getElementById("gameCanvas").appendChild(this._app.view);
  }

  static updateCanvas() {
    this._canvas.style.zIndex = '1';
  }

  static canvasMode() {
    return this._renderer.type === PIXI.RENDERER_TYPE.WEBGL ? 'webgl' :
    this._renderer.type === PIXI.RENDERER_TYPE.CANVAS ? 'canvas' : 'unknown';
  }

  static setGCMode(gcMode:number) {
    PIXI.settings.GC_MODE = gcMode;
  }

  static setResolution(resolution:number) {
    PIXI.settings.RESOLUTION = resolution;
  }

  static setFilterResolution(resolution:number) {
    PIXI.settings.FILTER_RESOLUTION = resolution;
  }

  static pageToCanvasX(x:number) {

  }

  static pageToCanvasY(x:number) {

  }
}