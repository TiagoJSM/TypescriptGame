///<reference path="../typings/tsd.d.ts" />

module GameFramework {
    export class Engine {
        private canvas: HTMLCanvasElement;
        private document: HTMLDocument;

        constructor(canvas: HTMLCanvasElement, document: HTMLDocument) {
            this.canvas = canvas;
            this.document = document;
        }
        
        update(millis: number) {
        }
        
    }
    
}
