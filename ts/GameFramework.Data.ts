///<reference path="../typings/tsd.d.ts" />

module GameFramework.Data {
    export class Vector2 {
        x: number;
        y: number;
        
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        
        static Zero() {
            return new Vector2(0, 0);
        }
        
        static One() {
            return new Vector2(1, 1);
        }
    }
    
    export class Transform {
        position: Vector2;
        scale: Vector2;
        rotate: Vector2;
        
        constructor() {
            this.scale = Vector2.One();
        }
    }
}
