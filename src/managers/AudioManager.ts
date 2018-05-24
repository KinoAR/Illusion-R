//=============================================================================
// AudioManager
//=============================================================================
import {SoundAdapter, Sound} from '../core/SoundAdapter';
class AudioManager {
  static _currentBgm:Sound;
  static _currentBgs:Sound;
  static _currentSe:Sound;
  constructor() {
    throw new Error("This is a static class.")
  }

  static playBgm(name:string) {
    
  }

  static updateBgm(name:string) {
    this._currentBgm = SoundAdapter.createSound([name]);
  }

  static stopBgm() {

  }

  static playBgs() {

  }

  static stopBgs() {

  }

  static playSe() {

  }

  static stopSe() {

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