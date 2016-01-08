///<reference path="./GameFramework.Interfaces.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFramework;
(function (GameFramework) {
    var BaseComponent = (function () {
        function BaseComponent() {
            this.orderInLayer = 0;
        }
        return BaseComponent;
    })();
    GameFramework.BaseComponent = BaseComponent;
    var RenderableComponent = (function (_super) {
        __extends(RenderableComponent, _super);
        function RenderableComponent() {
            _super.apply(this, arguments);
        }
        RenderableComponent.prototype.Update = function (elapsedMillis) { };
        return RenderableComponent;
    })(BaseComponent);
    GameFramework.RenderableComponent = RenderableComponent;
})(GameFramework || (GameFramework = {}));
