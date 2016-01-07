///<reference path="./GameFramework.Interfaces.ts" />

module GameFramework {
    export abstract class BaseComponent implements IUpdatable{
        orderInLayer: number;
        
        constructor(){
            this.orderInLayer = 0;
        }
        
        abstract Update(elapsedMillis: number);
    }
}