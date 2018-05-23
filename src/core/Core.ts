import * as R from 'ramda';

export function appendGlobally(globalContext:any, name:string, entity:any) {
  globalContext[name] = entity;
}

