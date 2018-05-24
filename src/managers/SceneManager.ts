//=============================================================================
// SceneManager
//=============================================================================
import {SceneBase} from '../scenes/SceneBase';
import {Stack, Queue} from '../core/DataStructures';
class SceneManager {
  _scene: SceneBase;
  _nextScene: SceneBase;
  _sceneStack:Stack<SceneBase>;
  constructor() {
    throw new Error("This is a static class.");
  }

  update() {
    this.processSceneTransitions();
  }

  processSceneTransitions() {
    
  }
}