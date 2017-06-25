/// <reference path="../bower_components/excalibur/dist/excalibur.d.ts" />
var game = new ex.Engine({
    width: 800,
    height: 600,
    displayMode: ex.DisplayMode.FullScreen
});
// create an asset loader
var loader = new ex.Loader();
var resources = {};
// queue resources for loading
for (var r in resources) {
    loader.addResource(resources[r]);
}
// create actors
var helicopter = new ex.Actor(10, 10, 20, 60);
helicopter.color = ex.Color.Cyan;
game.add(helicopter);
var camera = new ex.LockedCamera();
camera.setActorToFollow(helicopter);
game.currentScene.camera = camera;
// uncomment loader after adding resources
game.start().then(function () {
    // start your game!
});
