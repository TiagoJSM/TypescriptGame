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
    
    export interface IRenderable extends IUpdatable{
        orderInLayer: number;
        transform: Data.Transform;
    }
    
    export interface IRenderer {
        Render(renderable: IRenderable);
    }
    
    export interface IScreenManager extends IRenderer{
        Clear(color: Data.Color);
        SetTransformToOrigin();
        SaveTransform();
        RestoreTransform();
    }
}