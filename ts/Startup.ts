///<reference path="../typings/tsd.d.ts" />
///<reference path="./GameFramework.Engine.ts" />
///<reference path="./GameFramework.Stopwatch.ts" />
///<reference path="./Scenes/FirstScene.ts" />

$(function (){        
    var canvas = <HTMLCanvasElement>document.getElementById('canvas');
    var engine = new GameFramework.Engine(canvas, document);
    var stopwatch = new GameFramework.Stopwatch(); 
    stopwatch.Start();
    
    var context = canvas.getContext('2d');
    engine.LoadScene(GameFramework.FirstScene.Build);
    /*var imageObj = new Image();

    imageObj.onload = function() {
        context.drawImage(imageObj, 69, 50);
    };
    imageObj.src = 'test.jpg';
    imageObj.complete*/
    
    var timer = setInterval(function(){
        stopwatch.MarkTime();
        engine.Update(stopwatch.GetMillis());
        engine.Render();
        $('p').text(stopwatch.GetMillis());
    }, 60); 
})
