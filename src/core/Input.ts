//=============================================================================
// Input
//=============================================================================

export namespace Input {

  export class KeyInput {
    static keyRepeatWait = 24;
    static keyRepeatInterval = 6;
    static isDown() {

    }

    static isPressed() {

    }

    static isRepeated() {

    }
  }

  export class TouchInput {
    static keyRepeatWait = 24;
    static keyRepeatInterval = 6;
    static touchCoordinates = {x:0, y:0};
    static mouseCoordinates = {x:0, y: 0};
    static isLeftDown() {

    }

    static isRightDown() {

    }

    static isMoved() {

    }

    static isLeftReleased() {

    }

    static isRightReleased() {

    }

    static isPressed() {

    }

    static isRepeat() {

    }

    static clear() {

    }

    private static _setupEventHandlers() {
      const doc = document;
      doc.addEventListener('mousedown', this._onMouseDown.bind(this));
      doc.addEventListener('mousemove', this._onMouseMove.bind(this));
    }

    private static _onMouseDown(event) {

    }

    private static _onMouseMove(event:MouseEvent) {
      const x = event.pageX;
      const y = event.pageY;
    }

    private static _onLeftDown(event) {

    }

    private static _onRightDown(event) {

    }
   
  }
}