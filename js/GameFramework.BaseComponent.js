///<reference path="./GameFramework.Interfaces.ts" />
var GameFramework;
(function (GameFramework) {
    var BaseComponent = (function () {
        function BaseComponent() {
            this.orderInLayer = 0;
        }
        return BaseComponent;
    })();
    GameFramework.BaseComponent = BaseComponent;
})(GameFramework || (GameFramework = {}));
