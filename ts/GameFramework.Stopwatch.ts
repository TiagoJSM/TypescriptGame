///<reference path="../typings/tsd.d.ts" />

module GameFramework {
    export class Stopwatch {
        private startTime: Date;
        private currentTime: Date;
        
        constructor() {

        }
        
        Start() {
            this.startTime = new Date();
        }
        
        MarkTime(){
            this.currentTime = new Date();
        }
        
        GetMillis(): number {
            return Math.round(this.currentTime.getTime() - this.startTime.getTime());
        }
    }
    
}