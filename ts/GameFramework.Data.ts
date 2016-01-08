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
        rotate: number;
        
        constructor() {
            this.position = Vector2.Zero();
            this.scale = Vector2.One();
            this.rotate = 0;
        }
    }
    
    export class Color {
        r: number;
        g: number;
        b: number;
        a: number;
        
        constructor() {
            this.r = 0;
            this.g = 0;
            this.b = 0;
            this.a = 0;
        }
    }
}
