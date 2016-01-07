///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.Engine.ts" />
///<reference path="./GameFramework.Stopwatch.ts" />
$(function () {
    var canvas = document.getElementById('canvas');
    var engine = new GameFramework.Engine(canvas, document);
    var stopwatch = new GameFramework.Stopwatch();
    stopwatch.Start();
    var timer = setInterval(function () {
        stopwatch.MarkTime();
        engine.update(stopwatch.GetMillis());
    }, 60);
});
