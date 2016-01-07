///<reference path="../typings/tsd.d.ts" />
var GameFramework;
(function (GameFramework) {
    var Stopwatch = (function () {
        function Stopwatch() {
        }
        Stopwatch.prototype.Start = function () {
            this.startTime = new Date();
        };
        Stopwatch.prototype.MarkTime = function () {
            this.currentTime = new Date();
        };
        Stopwatch.prototype.GetMillis = function () {
            return Math.round(this.currentTime.getTime() - this.startTime.getTime());
        };
        return Stopwatch;
    })();
    GameFramework.Stopwatch = Stopwatch;
})(GameFramework || (GameFramework = {}));
