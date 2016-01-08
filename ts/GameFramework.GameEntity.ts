///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.Data.ts" />

module GameFramework {
    export class GameEntity implements IUpdatable {

        private components: Array<BaseComponent>;
        
        orderInLayer: number;
        name: string;
        transform: Data.Transform;
        componentFactory: IComponentFactory;
         
        constructor() {
            this.components = new Array<BaseComponent>();
            this.orderInLayer = 0;
            this.transform = new Data.Transform();
        }
        
        Update(elapsedMillis: number) {
            for(var idx = 0; idx < this.components.length; idx++){
                this.components[idx].Update(elapsedMillis);
            }
        }
        
        AddComponent<TComponent extends BaseComponent>(ctor: ParameterlessConstructor<TComponent>) {
            var component =  this.componentFactory.BuildComponent<TComponent>(ctor);
            this.components.push(component);
            return component;
        }
        
        GetComponents(): Array<BaseComponent> {
            return this.components.slice();
        }
        
        GetComponentsOfType<TComponent extends BaseComponent>(ctor:{new ():TComponent}): Array<TComponent> {
            return <TComponent[]> this.components.filter(
                function(component: TComponent, index: number, array: TComponent[]){
                    return component instanceof ctor;
                });
        }
        
        GetComponent<TComponent extends BaseComponent>(ctor:{new ():TComponent}): TComponent {
            var components = this.GetComponentsOfType<TComponent>(ctor);
            if(components.length == 0){
                return null;
            }
            return components[0];
        }  
    }
}
