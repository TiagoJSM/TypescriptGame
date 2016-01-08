///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.GameEntity.ts" />
///<reference path="./GameFramework.Interfaces.ts" />
///<reference path="./GameFramework.BaseComponent.ts" />
///<reference path="./GameFramework.CanvasManager.ts" />

module GameFramework {
    export class Engine implements IComponentFactory {
        private canvas: HTMLCanvasElement;
        private document: HTMLDocument;
        private screenManager: IScreenManager;
        
        private entities: Array<GameEntity>;

        constructor(canvas: HTMLCanvasElement, document: HTMLDocument) {
            this.entities = new Array<GameEntity>();
            this.canvas = canvas;
            this.document = document;
            this.screenManager = new CanvasManager(this.canvas);
            this.screenManager.SetTransformToOrigin();
            this.screenManager.SaveTransform();
        }
        
        Update(elapsedMillis: number) {
            for(var entity in this.entities){
                entity.Update(elapsedMillis);
            }
        }
        
        Render() {
            var orderedEntities = this.entities.sort(this.EntitiesOrderFunc);
            for(var entity in orderedEntities){
                this.screenManager.RestoreTransform();
                
            }
        }
        
        GetComponent<TComponent extends BaseComponent>(ctor: ParameterlessConstructor<TComponent>): TComponent {
            var component = new ctor();
            
            return component;
        }
        
        GetEntity(name: string): GameEntity {
            var entity = new GameEntity();
            entity.componentFactory = this;
            entity.name = name;
            return entity;
        }
        
        private EntitiesOrderFunc(entity: GameEntity) : number {
            return entity.orderInLayer;
        }
        
        private RenderComponentsInEntity(entity: GameEntity) {
            var renderables = entity.GetComponentsOfType<RenderableComponent>(RenderableComponent);
        }
        
    }
    
}
