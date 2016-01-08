///<reference path="./GameFramework.Interfaces.ts" />
var GameFramework;
(function (GameFramework) {
    var CanvasManager = (function () {
        function CanvasManager(canvas) {
            this.context = canvas.getContext("2d");
        }
        CanvasManager.prototype.Render = function (renderable) {
            var scale = renderable.transform.scale;
            var rotate = renderable.transform.rotate;
            var translate = renderable.transform.position;
            this.context.scale(scale.x, scale.y);
            this.context.rotate(rotate);
            this.context.translate(translate.x, translate.y);
        };
        CanvasManager.prototype.Clear = function (color) {
            this.context.fillStyle = "rgb(+" + color.r + "," + color.g + "," + color.b + ")";
        };
        CanvasManager.prototype.SetTransformToOrigin = function () {
            this.context.setTransform(1, 0, 0, 1, 0, 0);
        };
        ;
        CanvasManager.prototype.SaveTransform = function () {
            this.context.save();
        };
        CanvasManager.prototype.RestoreTransform = function () {
            this.context.restore();
        };
        return CanvasManager;
    })();
    GameFramework.CanvasManager = CanvasManager;
})(GameFramework || (GameFramework = {}));
