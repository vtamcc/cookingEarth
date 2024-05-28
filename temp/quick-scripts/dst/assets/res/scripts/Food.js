
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/res/scripts/Food.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b82831jcJIPqCtgFZwcVSm', 'Food');
// res/scripts/Food.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Main_1 = require("./Main");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spfFood = null;
        _this.nCheck = null;
        _this.id = 0;
        _this.nodeList = [];
        return _this;
        // update (dt) {}
    }
    Food.prototype.start = function () {
    };
    Food.prototype.setId = function (id) {
        this.id = id;
        this.spfFood.spriteFrame = Main_1.default.instance.listspfFood[id];
    };
    // posFood() {
    //     let food_1 = Main.instance.arrIdFood[0]
    //     for(let i = 0; i < Main.instance.foodIndices.length; i++) {
    //         if(Main.instance.foodIndices[i] == food_1) {
    //             this.nodeList.push(this.node);
    //         }
    //     }
    // }
    // handPos() {
    //    for(let i = 0; i < this.nodeList.length; i++) {
    //         let pos = this.nodeList[i].position;
    //         Main.instance.nodeHand.setPosition(pos);
    //    }
    // }
    Food.prototype.onClickFood = function () {
        Main_1.default.instance.listChoose.push(this);
        if (Main_1.default.instance.checkCorrect(this.id)) {
            this.nCheck.active = true;
            if (Main_1.default.instance.countCorrect == 3) {
            }
            //console.log(this.node.position.x, this.node.position.y);
            //console.log("Node list ",this.nodeList)
            // if(Main.instance.countCorrect == 3) {
            //     this.spfFood.node.active = false;
            // }
            // if(Main.instance.arrData.length == 3) {
            //     // cc.tween(this.spfFood.node)
            //     // .to(2,{position: cc.v3(100,100,0)})
            //     // .start();
            //     console.log("arr pos ", Main.instance.arrData)
            // }
        }
        Main_1.default.instance.updateGame();
        // this.posFood()
        // this.handPos();
        // this.posFood()
        // console.log("list pos ", Main.instance.listPos);
        // Main.instance.checkCorrect(this.id);
        // if (Main.instance.countCorrect > 0 && Main.instance.index == this.id) {
        //     this.node.destroy();
        // }
        // if(Main.instance.countCorrect > 3  && Main.instance.index == this.id) {
        //     Main.instance.countCorrect = 0;
        // }
    };
    Food.prototype.onLoad = function () {
    };
    Food.instance = null;
    __decorate([
        property(cc.Sprite)
    ], Food.prototype, "spfFood", void 0);
    __decorate([
        property(cc.Node)
    ], Food.prototype, "nCheck", void 0);
    Food = __decorate([
        ccclass
    ], Food);
    return Food;
}(cc.Component));
exports.default = Food;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9Gb29kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQWdGQztRQTdFRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsUUFBRSxHQUFXLENBQUMsQ0FBQztRQUNmLGNBQVEsR0FBRyxFQUFFLENBQUM7O1FBdUVkLGlCQUFpQjtJQUNyQixDQUFDO0lBdkVHLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsb0JBQUssR0FBTCxVQUFNLEVBQVU7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxjQUFjO0lBQ2QsOENBQThDO0lBQzlDLGtFQUFrRTtJQUNsRSx1REFBdUQ7SUFDdkQsNkNBQTZDO0lBQzdDLFlBQVk7SUFDWixRQUFRO0lBRVIsSUFBSTtJQUVKLGNBQWM7SUFDZCxxREFBcUQ7SUFDckQsK0NBQStDO0lBQy9DLG1EQUFtRDtJQUNuRCxPQUFPO0lBQ1AsSUFBSTtJQUVKLDBCQUFXLEdBQVg7UUFFSSxjQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxjQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRTFCLElBQUcsY0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO2FBRW5DO1lBQ0QsMERBQTBEO1lBQzFELHlDQUF5QztZQUN6Qyx3Q0FBd0M7WUFDeEMsd0NBQXdDO1lBQ3hDLElBQUk7WUFFSiwwQ0FBMEM7WUFDMUMscUNBQXFDO1lBQ3JDLDZDQUE2QztZQUM3QyxtQkFBbUI7WUFDbkIscURBQXFEO1lBQ3JELElBQUk7U0FHUDtRQUVELGNBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDM0IsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsbURBQW1EO1FBQ25ELHVDQUF1QztRQUN2QywwRUFBMEU7UUFDMUUsMkJBQTJCO1FBQzNCLElBQUk7UUFFSiwwRUFBMEU7UUFDMUUsc0NBQXNDO1FBQ3RDLElBQUk7SUFFUixDQUFDO0lBRUQscUJBQU0sR0FBTjtJQUNBLENBQUM7SUE1RWEsYUFBUSxHQUFTLElBQUksQ0FBQztJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0s7SUFOTixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBZ0Z4QjtJQUFELFdBQUM7Q0FoRkQsQUFnRkMsQ0FoRmlDLEVBQUUsQ0FBQyxTQUFTLEdBZ0Y3QztrQkFoRm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IE1haW4gZnJvbSBcIi4vTWFpblwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogRm9vZCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcGZGb29kOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbkNoZWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBpZDogbnVtYmVyID0gMDtcbiAgICBub2RlTGlzdCA9IFtdO1xuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgc2V0SWQoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc3BmRm9vZC5zcHJpdGVGcmFtZSA9IE1haW4uaW5zdGFuY2UubGlzdHNwZkZvb2RbaWRdO1xuICAgIH1cblxuICAgIC8vIHBvc0Zvb2QoKSB7XG4gICAgLy8gICAgIGxldCBmb29kXzEgPSBNYWluLmluc3RhbmNlLmFycklkRm9vZFswXVxuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgTWFpbi5pbnN0YW5jZS5mb29kSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgaWYoTWFpbi5pbnN0YW5jZS5mb29kSW5kaWNlc1tpXSA9PSBmb29kXzEpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGVMaXN0LnB1c2godGhpcy5ub2RlKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgICAgICBcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kUG9zKCkge1xuICAgIC8vICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlTGlzdFtpXS5wb3NpdGlvbjtcbiAgICAvLyAgICAgICAgIE1haW4uaW5zdGFuY2Uubm9kZUhhbmQuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAvLyAgICB9XG4gICAgLy8gfVxuICAgIFxuICAgIG9uQ2xpY2tGb29kKCkge1xuICAgICAgXG4gICAgICAgIE1haW4uaW5zdGFuY2UubGlzdENob29zZS5wdXNoKHRoaXMpO1xuICAgICAgICBpZiAoTWFpbi5pbnN0YW5jZS5jaGVja0NvcnJlY3QodGhpcy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMubkNoZWNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKE1haW4uaW5zdGFuY2UuY291bnRDb3JyZWN0ID09IDMpIHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5vZGUgbGlzdCBcIix0aGlzLm5vZGVMaXN0KVxuICAgICAgICAgICAgLy8gaWYoTWFpbi5pbnN0YW5jZS5jb3VudENvcnJlY3QgPT0gMykge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3BmRm9vZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBpZihNYWluLmluc3RhbmNlLmFyckRhdGEubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIC8vICAgICAvLyBjYy50d2Vlbih0aGlzLnNwZkZvb2Qubm9kZSlcbiAgICAgICAgICAgIC8vICAgICAvLyAudG8oMix7cG9zaXRpb246IGNjLnYzKDEwMCwxMDAsMCl9KVxuICAgICAgICAgICAgLy8gICAgIC8vIC5zdGFydCgpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYXJyIHBvcyBcIiwgTWFpbi5pbnN0YW5jZS5hcnJEYXRhKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIE1haW4uaW5zdGFuY2UudXBkYXRlR2FtZSgpO1xuICAgICAgICAvLyB0aGlzLnBvc0Zvb2QoKVxuICAgICAgICAvLyB0aGlzLmhhbmRQb3MoKTtcbiAgICAgICAgLy8gdGhpcy5wb3NGb29kKClcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsaXN0IHBvcyBcIiwgTWFpbi5pbnN0YW5jZS5saXN0UG9zKTtcbiAgICAgICAgLy8gTWFpbi5pbnN0YW5jZS5jaGVja0NvcnJlY3QodGhpcy5pZCk7XG4gICAgICAgIC8vIGlmIChNYWluLmluc3RhbmNlLmNvdW50Q29ycmVjdCA+IDAgJiYgTWFpbi5pbnN0YW5jZS5pbmRleCA9PSB0aGlzLmlkKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYoTWFpbi5pbnN0YW5jZS5jb3VudENvcnJlY3QgPiAzICAmJiBNYWluLmluc3RhbmNlLmluZGV4ID09IHRoaXMuaWQpIHtcbiAgICAgICAgLy8gICAgIE1haW4uaW5zdGFuY2UuY291bnRDb3JyZWN0ID0gMDtcbiAgICAgICAgLy8gfVxuXG4gICAgfVxuICAgIFxuICAgIG9uTG9hZCgpIHtcbiAgICB9XG4gICAgXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==