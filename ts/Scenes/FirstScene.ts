///<reference path="../../typings/tsd.d.ts" />
///<reference path="../GameFramework.Scene.ts" />

module GameFramework {
    export class FirstScene {
        static Build(scene: Scene) {
            var renderableComponent = scene.AddGameEntity("Vader").AddComponent(RenderableComponent);
            var vaderImg = new Image();
            vaderImg.src = 'images/test.jpg';
            renderableComponent.renderable = scene.BuildRenderable(vaderImg);
        }
    }
}