//=============================================================================
// PluginManager
//=============================================================================

export class PluginManager {
  static _path:string;
  static _scripts:[IScript];
  static _parameters: object;
  static _errorUrls = [Error];

  static checkErrors() {
    const url = this._errorUrls.shift();
    if(url) {
      throw new Error(`Failed to load: ${url}`);
    }
  }
  static parameters(name:string) {
    return this._parameters[name.toLocaleLowerCase()] || {};
  }

  static setParameters(name:string, parameters:any) {
    this._parameters[name.toLocaleLowerCase()] = parameters;
  }

  static loadScript(name:string) {
    const url = this._path + name;
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = url;
    script.async = false;
    script['_url'] = url;
    document.body.appendChild(script);
  }

}

export interface IScript {
  name:string;
  parameters:object;

}