export class Sprite extends PIXI.Sprite {

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

  move(x?:number, y?:number) {
    this.position.set(x, y);
  }

  rotate(radians:number) {
    this.rotation = radians;
  }

  update() {
    this.children
      .forEach( (child:any) => {
        if(child.update) {
          child.update();
        }
      });
  }

  setAnchor(x?:number, y?:number) {
    this.anchor.set(x, y);
  }
  setPivot(x?:number,y?:number) {
    this.pivot.set(x, y);
  }

  setScale(x?:number, y?:number) {
    this.scale.set(x, y);
  }

  setTexture(texture:PIXI.Texture) {
    this.texture = texture;
  }

  setWidth(width:number) {
    this.width = width;
    return this;
  }

  setHeight(height:number) {
    this.height = height;
    return this;
  }
}