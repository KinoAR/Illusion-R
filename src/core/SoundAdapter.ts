//=============================================================================
// SoundAdaptor
//=============================================================================
import {Howler, Howl} from 'howler';

export class SoundAdapter {
  constructor() {
    throw new Error("This is a static class.");
  }

  static createSound(sources:[string]) {
    const sound = new Sound(sources);
    return sound;
  }

  static setGlobalVolume(volume:number) {
    Howler.volume(volume);
  }

  static globalVolume() {
    return Howler.volume();
  }

  static muteAll(mute:boolean) {
    Howler.mute(mute);
  }

  static noAudio() {
    return Howler.noAudio;
  }

  static isUsingWebAudio() {
    return Howler.usingWebAudio;
  }

  static codecSupported(ext:string) {
    return Howler.codecs(ext);
  }
}

export class Sound {
  _internalSound:Howl;
  constructor(sources:[string]) {
    this._internalSound = new Howl({
      src: [...sources],
      autoplay: false,
      loop: false,
      volume: 1.0
    });
  }

  setVolume(volume:number) {
    this._internalSound.volume(volume);
    return this;
  }

  setLoop(loop:boolean) {
    this._internalSound.loop(loop);
    return this;
  }

  setMute(mute:boolean) {
    this._internalSound.mute(mute);
    return this;
  }

  isMuted() {
    return this._internalSound.mute();
  }

  isPlaying() {
    return this._internalSound.playing();
  }

  duration() {
    return this._internalSound.duration();
  }

  state() {
    return this._internalSound.state();
  }

  volume() {
    return this._internalSound.volume();
  }
}
