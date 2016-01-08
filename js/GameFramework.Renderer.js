///<reference path="./GameFramework.Interfaces.ts" />
var GameFramework;
(function (GameFramework) {
    var CanvasRenderer = (function () {
        function CanvasRenderer(canvas) {
            this.context = canvas.getContext("2d");
        }
        CanvasRenderer.prototype.Render = function (renderable) {
            var scale = renderable.transform.scale;
            var rotate = renderable.transform.rotate;
            var translate = renderable.transform.position;
            this.context.scale(scale.x, scale.y);
            this.context.rotate(rotate);
            this.context.translate(translate.x, translate.y);
        };
        CanvasRenderer.prototype.Clear = function (color) {
            this.context.fillStyle = "rgb(+" + color.r + "," + color.g + "," + color.b + ")";
        };
        return CanvasRenderer;
    })();
    GameFramework.CanvasRenderer = CanvasRenderer;
})(GameFramework || (GameFramework = {}));
