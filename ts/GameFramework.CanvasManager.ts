///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.Interfaces.ts" />

module GameFramework {
    export class CanvasManager implements IScreenManager {
        
        private context: CanvasRenderingContext2D;
        private canvas: HTMLCanvasElement
        
        constructor(canvas: HTMLCanvasElement){
            this.canvas = canvas;
            this.context = canvas.getContext("2d");
        }
        
        RenderImage(image: HTMLImageElement, transform: Data.Transform) {
            if(!image.complete){
                return;
            }
            var scale = transform.scale;
            var rotate = transform.rotate;
            var translate = transform.position;
            
            this.context.setTransform(1, 0, 0, -1, 0, this.canvas.height); //inverts the y axis and places the objects in the right place
            this.context.scale(scale.x, scale.y);
            this.context.rotate(rotate);
            this.context.translate(translate.x, translate.y - 50); 
            this.context.drawImage(image, 0, 0);
        }
        
        Clear(color: Data.Color) {
            this.context.fillStyle = "rgb(+" + color.r + "," + color.g + "," + color.b + ")";
        }
        
        SetTransformToOrigin(){
            this.context.setTransform(1, 0, 0, 1, 0, 0)
        };
    }
}