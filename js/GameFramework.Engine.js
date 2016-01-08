///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.GameEntity.ts" />
///<reference path="./GameFramework.Interfaces.ts" />
///<reference path="./GameFramework.BaseComponent.ts" />
///<reference path="./GameFramework.CanvasManager.ts" />
var GameFramework;
(function (GameFramework) {
    var Engine = (function () {
        function Engine(canvas, document) {
            this.entities = new Array();
            this.canvas = canvas;
            this.document = document;
            this.screenManager = new GameFramework.CanvasManager(this.canvas);
            this.screenManager.SetTransformToOrigin();
            this.screenManager.SaveTransform();
        }
        Engine.prototype.Update = function (elapsedMillis) {
            for (var entity in this.entities) {
                entity.Update(elapsedMillis);
            }
        };
        Engine.prototype.Render = function () {
            var orderedEntities = this.entities.sort(this.EntitiesOrderFunc);
            for (var entity in orderedEntities) {
                this.screenManager.RestoreTransform();
            }
        };
        Engine.prototype.GetComponent = function (ctor) {
            var component = new ctor();
            return component;
        };
        Engine.prototype.GetEntity = function (name) {
            var entity = new GameFramework.GameEntity();
            entity.componentFactory = this;
            entity.name = name;
            return entity;
        };
        Engine.prototype.EntitiesOrderFunc = function (entity) {
            return entity.orderInLayer;
        };
        Engine.prototype.RenderComponentsInEntity = function (entity) {
            var renderables = entity.GetComponentsOfType(GameFramework.RenderableComponent);
        };
        return Engine;
    })();
    GameFramework.Engine = Engine;
})(GameFramework || (GameFramework = {}));
