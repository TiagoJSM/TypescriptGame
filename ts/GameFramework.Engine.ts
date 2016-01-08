///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.GameEntity.ts" />
///<reference path="./GameFramework.Interfaces.ts" />
///<reference path="./GameFramework.BaseComponent.ts" />
///<reference path="./GameFramework.CanvasManager.ts" />
///<reference path="./GameFramework.Scene.ts" />

module GameFramework {
    export class Engine {
        private canvas: HTMLCanvasElement;
        private document: HTMLDocument;
        private screenManager: IScreenManager;
        private scene: Scene;
        

        constructor(canvas: HTMLCanvasElement, document: HTMLDocument) {
            this.canvas = canvas;
            this.document = document;
            this.screenManager = new CanvasManager(this.canvas);
        }
        
        Update(elapsedMillis: number) {
            if(this.scene == null){
                return;
            }
            this.scene.Update(elapsedMillis);
        }
        
        Render() {
            if(this.scene == null){
                return;
            }
            this.scene.Render();
        }
        
        LoadScene(sceneBuilder : (scene: Scene) => any){
           this.scene = new Scene(this.screenManager);
            sceneBuilder(this.scene);
        }     
    }
    
}
