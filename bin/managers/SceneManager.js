var SceneManager = /** @class */ (function () {
    function SceneManager() {
        throw new Error("This is a static class.");
    }
    SceneManager.prototype.update = function () {
        this.processSceneTransitions();
    };
    SceneManager.prototype.processSceneTransitions = function () {
    };
    return SceneManager;
}());
