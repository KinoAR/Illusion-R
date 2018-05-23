var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Sprite = /** @class */ (function (_super) {
    __extends(Sprite, _super);
    function Sprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sprite.prototype.show = function () {
        this.visible = true;
    };
    Sprite.prototype.hide = function () {
        this.visible = false;
    };
    Sprite.prototype.move = function (x, y) {
        this.position.set(x, y);
    };
    Sprite.prototype.rotate = function (radians) {
        this.rotation = radians;
    };
    Sprite.prototype.update = function () {
        this.children
            .forEach(function (child) {
            if (child.update) {
                child.update();
            }
        });
    };
    Sprite.prototype.setAnchor = function (x, y) {
        this.anchor.set(x, y);
    };
    Sprite.prototype.setPivot = function (x, y) {
        this.pivot.set(x, y);
    };
    Sprite.prototype.setScale = function (x, y) {
        this.scale.set(x, y);
    };
    Sprite.prototype.setTexture = function (texture) {
        this.texture = texture;
    };
    Sprite.prototype.setWidth = function (width) {
        this.width = width;
        return this;
    };
    Sprite.prototype.setHeight = function (height) {
        this.height = height;
        return this;
    };
    return Sprite;
}(PIXI.Sprite));
export { Sprite };
