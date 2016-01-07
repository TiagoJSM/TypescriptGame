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
}