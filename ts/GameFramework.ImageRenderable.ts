///<reference path="./GameFramework.Interfaces.ts" />

module GameFramework {
    export class ImageRenderable implements IRenderable {
        renderer: IRenderer;
        image: HTMLImageElement;
        transform: Data.Transform;
        
        constructor(image: HTMLImageElement, renderer: IRenderer){
            this.renderer = renderer;
            this.image = image;
            this.transform = new Data.Transform();
        }
        
        Update(elapsedMillis: number){ }
        
        Render() {
            this.renderer.RenderImage(this.image, this.transform);
        }
    }
}