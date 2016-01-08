///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.Data.ts" />

module GameFramework {
    export interface IComponentFactory {
        BuildComponent<TComponent extends BaseComponent>(ctor: ParameterlessConstructor<TComponent>): TComponent;
        BuildRenderable(image: HTMLImageElement): IRenderable;
        AddGameEntity(name: string): GameEntity;
    }

    export interface ParameterlessConstructor<T> {
        new (): T;
    }
    
    export interface IUpdatable {
       Update(elapsedMillis: number);
    }
    
    export interface IRenderable extends IUpdatable{
        transform: Data.Transform;
        Render();
    }
    
    export interface IRenderer {
        RenderImage(image: HTMLImageElement, transform: Data.Transform);
    }
    
    export interface IScreenManager extends IRenderer {
        Clear(color: Data.Color);
        SetTransformToOrigin();
    }

}