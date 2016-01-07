///<reference path="../typings/tsd.d.ts" />
var GameFramework;
(function (GameFramework) {
    var Engine = (function () {
        function Engine(canvas, document) {
            this.canvas = canvas;
            this.document = document;
        }
        Engine.prototype.update = function (millis) {
        };
        return Engine;
    })();
    GameFramework.Engine = Engine;
})(GameFramework || (GameFramework = {}));
