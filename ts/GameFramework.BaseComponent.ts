///<reference path="./GameFramework.Interfaces.ts" />

module GameFramework {
    export abstract class BaseComponent implements IUpdatable{
        orderInLayer: number;
        
        constructor(){
            this.orderInLayer = 0;
        }
        
        abstract Update(elapsedMillis: number);
    }
    
    export class RenderableComponent extends BaseComponent {
        renderable: IRenderable;
        Update(elapsedMillis: number){ }
    }
}