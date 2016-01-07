///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.GameEntity.ts" />
///<reference path="./GameFramework.Interfaces.ts" />
///<reference path="./GameFramework.BaseComponent.ts" />
var GameFramework;
(function (GameFramework) {
    var Engine = (function () {
        function Engine(canvas, document) {
            this.canvas = canvas;
            this.document = document;
        }
        Engine.prototype.Update = function (elapsedMillis) {
        };
        Engine.prototype.Render = function () {
            var orderedEntitiesy = this.entities.sort(this.EntitiesOrderFunc);
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
        return Engine;
    })();
    GameFramework.Engine = Engine;
})(GameFramework || (GameFramework = {}));
