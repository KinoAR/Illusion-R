class Graphics {
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
  static canvasMode() {
    return 'Webgl' || 'canvas';
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
}