/// <reference path="../bower_components/excalibur/dist/excalibur.d.ts" />

let game = new ex.Engine({
    width: 800,
    height: 600,
    displayMode: ex.DisplayMode.FullScreen
});

// create an asset loader
let loader = new ex.Loader();
let resources = {

    /* include resources here */
    //txPlayer: new ex.Texture("assets/tex/player.png")

};

// queue resources for loading
for (let r in resources) {
    loader.addResource(resources[r]);
}

// create actors
let helicopter = new ex.Actor(10, 10, 20, 60);
helicopter.color = ex.Color.Cyan

game.add(helicopter)

let camera = new ex.LockedCamera()
camera.setActorToFollow(helicopter)
game.currentScene.camera = camera

// uncomment loader after adding resources
game.start(/* loader */).then(() => {

    // start your game!


});
