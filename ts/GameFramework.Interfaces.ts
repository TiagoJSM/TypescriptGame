///<reference path="./GameFramework.Data.ts" />

module GameFramework {
    export interface IComponentFactory {
        GetComponent<TComponent extends BaseComponent>(ctor: ParameterlessConstructor<TComponent>): TComponent;
    }

    export interface ParameterlessConstructor<T> {
        new (): T;
    }
    
    export interface IUpdatable {
       Update(elapsedMillis: number);
    }
    
    export interface IRenderable {
        orderInLayer: number;
        transform: Data.Transform;
        Update(elapsedMillis: number);
    }
}