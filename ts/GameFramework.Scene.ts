///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.GameEntity.ts" />
///<reference path="./GameFramework.Interfaces.ts" />
///<reference path="./GameFramework.BaseComponent.ts" />
///<reference path="./GameFramework.CanvasManager.ts" />
///<reference path="./GameFramework.ImageRenderable.ts" />

module GameFramework {
    export class Scene implements IComponentFactory {
        private screenManager: IScreenManager;
        
        private entities: Array<GameEntity>;

        constructor(screenManager: IScreenManager) {
            this.entities = new Array<GameEntity>();
            this.screenManager = screenManager;
            this.screenManager.SetTransformToOrigin();
        }
        
        Update(elapsedMillis: number) {
            for(var idx = 0; idx < this.entities.length; idx++){
                this.entities[idx].Update(elapsedMillis);
            }
        }
        
        Render() {
            var orderedEntities = this.entities.sort(this.EntitiesOrderFunc);
            for(var idx = 0; idx < orderedEntities.length; idx++){
                var entity = orderedEntities[idx];
                this.RenderComponentsInEntity(<GameEntity>entity);
            }
        }
        
        BuildComponent<TComponent extends BaseComponent>(ctor: ParameterlessConstructor<TComponent>): TComponent {
            var component = new ctor();
            return component;
        }
        
        BuildRenderable(image: HTMLImageElement): IRenderable {
            return new ImageRenderable(image, this.screenManager);
        }
        
        AddGameEntity(name: string): GameEntity {
            var gameEntity = new GameEntity();
            gameEntity.componentFactory = this;
            gameEntity.name = name;
            this.entities.push(gameEntity);
            return gameEntity;
        }
        
        private EntitiesOrderFunc(entity: GameEntity) : number {
            return entity.orderInLayer;
        }
        
        private RenderablesOrderFunc(component: RenderableComponent) : number {
            return component.orderInLayer;
        }
        
        private RenderComponentsInEntity(entity: GameEntity) {
            var renderables = entity.GetComponentsOfType<RenderableComponent>(RenderableComponent);
            var orderedRenderables = renderables.sort(this.RenderablesOrderFunc);
            for(var idx = 0; idx < orderedRenderables.length; idx++){
                this.screenManager.SetTransformToOrigin();
                orderedRenderables[idx].renderable.Render();
            }
        }
    }
    
}
