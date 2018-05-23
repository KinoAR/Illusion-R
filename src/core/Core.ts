import * as R from 'ramda';
export namespace Utils {
  export const VERSION = "0.0.1";
}

export namespace Physics {
  export const name = '2DPhysics';
}

export class Scene {

}

export function appendGlobally(globalContext:any, name:string, entity:any) {
  globalContext[name] = entity;
}