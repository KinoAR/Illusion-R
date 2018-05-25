//=============================================================================
// AudioManager
//=============================================================================
import {SoundAdapter, Sound, SoundSprite} from '../core/SoundAdapter';
class AudioManager {
  static _currentBgm:Sound;
  static _currentBgs:Sound;
  static _currentSe:Sound;
  constructor() {
    throw new Error("This is a static class.")
  }

  static playBgm(name:string) {
    this.updateBgm(name);
    this._currentBgm.play();
  }

  static updateBgm(name:string) {
    this._currentBgm = SoundAdapter.createSound([name]);
  }

  static stopBgm() {
    this._currentBgm.stop();
  }

  static playBgs(name:string) {
    this.updateBgs(name);
    this._currentBgm.play();
  }

  static updateBgs(name:string) {
    this._currentBgs = SoundAdapter.createSound([name]);
  }

  static stopBgs() {
    this._currentBgs.stop();
  }

  static playSe(name:string) {
    this.updateSe(name);
    this._currentSe.play();
  }

  static updateSe(name:string) {
    this._currentSe = SoundAdapter.createSound([name]);
  }

  static stopSe() {
    this._currentSe.stop();
  }

  static muteAll(mute:boolean) {
    SoundAdapter.muteAll(mute);
  }

  static setGlobalVolume(volume:number) {
    SoundAdapter.setGlobalVolume(volume);
  }

  static globalVolume() {
    return SoundAdapter.globalVolume();
  }
}