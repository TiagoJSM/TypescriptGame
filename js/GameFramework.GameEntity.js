///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.Data.ts" />
var GameFramework;
(function (GameFramework) {
    var GameEntity = (function () {
        function GameEntity() {
            this.orderInLayer = 0;
            this.transform = new GameFramework.Data.Transform();
        }
        GameEntity.prototype.Update = function (elapsedMillis) {
            for (var component in this.components) {
                component.Update(elapsedMillis);
            }
        };
        GameEntity.prototype.AddComponent = function (ctor) {
            return this.componentFactory.GetComponent(ctor);
        };
        GameEntity.prototype.GetComponents = function () {
            return this.components.slice();
        };
        GameEntity.prototype.GetComponentsOfType = function (componentType) {
            return this.components.filter(function (component, index, array) {
                return typeof (component) === componentType;
            });
        };
        GameEntity.prototype.GetComponent = function (componentType) {
            var components = this.GetComponentsOfType(componentType);
            if (components.length == 0) {
                return null;
            }
            return components[0];
        };
        return GameEntity;
    })();
    GameFramework.GameEntity = GameEntity;
})(GameFramework || (GameFramework = {}));
