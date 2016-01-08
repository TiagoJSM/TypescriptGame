///<reference path="./GameFramework.Interfaces.ts" />

module GameFramework {
    export class CanvasManager implements IScreenManager {
        
        private context: CanvasRenderingContext2D;
        
        constructor(canvas: HTMLCanvasElement){
            this.context = canvas.getContext("2d");
        }
        
        Render(renderable: IRenderable) {
            var scale = renderable.transform.scale;
            var rotate = renderable.transform.rotate;
            var translate = renderable.transform.position;
            
            this.context.scale(scale.x, scale.y);
            this.context.rotate(rotate);
            this.context.translate(translate.x, translate.y);
        }
        
        Clear(color: Data.Color) {
            this.context.fillStyle = "rgb(+" + color.r + "," + color.g + "," + color.b + ")";
        }
        
        SetTransformToOrigin(){
            this.context.setTransform(1, 0, 0, 1, 0, 0)
        };
        
        SaveTransform(){
           this.context.save(); 
        }
        RestoreTransform(){
            this.context.restore();
        }
    }
}