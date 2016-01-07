///<reference path="../typings/tsd.d.ts" />
var GameFramework;
(function (GameFramework) {
    var Data;
    (function (Data) {
        var Vector2 = (function () {
            function Vector2(x, y) {
                this.x = x;
                this.y = y;
            }
            Vector2.Zero = function () {
                return new Vector2(0, 0);
            };
            Vector2.One = function () {
                return new Vector2(1, 1);
            };
            return Vector2;
        })();
        Data.Vector2 = Vector2;
        var Transform = (function () {
            function Transform() {
                this.scale = Vector2.One();
            }
            return Transform;
        })();
        Data.Transform = Transform;
    })(Data = GameFramework.Data || (GameFramework.Data = {}));
})(GameFramework || (GameFramework = {}));
