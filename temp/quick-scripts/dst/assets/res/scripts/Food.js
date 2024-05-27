
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
    Food.prototype.posFood = function () {
        if (Main_1.default.instance.setIdPos()) {
            Main_1.default.instance.listPos.push(this);
        }
    };
    Food.prototype.onClickFood = function () {
        if (Main_1.default.instance.checkCorrect(this.id)) {
            this.nCheck.active = true;
            Main_1.default.instance.listChoose.push(this);
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
        // Main.instance.checkCorrect(this.id);
        // if (Main.instance.countCorrect > 0 && Main.instance.index == this.id) {
        //     this.node.destroy();
        // }
        // if(Main.instance.countCorrect > 3  && Main.instance.index == this.id) {
        //     Main.instance.countCorrect = 0;
        // }
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9Gb29kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTZEQztRQTFERyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsUUFBRSxHQUFXLENBQUMsQ0FBQztRQUNmLGNBQVEsR0FBRyxFQUFFLENBQUM7O1FBb0RkLGlCQUFpQjtJQUNyQixDQUFDO0lBcERHLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsb0JBQUssR0FBTCxVQUFNLEVBQVU7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksSUFBRyxjQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3pCLGNBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUVMLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksSUFBSSxjQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzFCLGNBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTthQUVuQztZQUNELDBEQUEwRDtZQUMxRCx5Q0FBeUM7WUFDekMsd0NBQXdDO1lBQ3hDLHdDQUF3QztZQUN4QyxJQUFJO1lBRUosMENBQTBDO1lBQzFDLHFDQUFxQztZQUNyQyw2Q0FBNkM7WUFDN0MsbUJBQW1CO1lBQ25CLHFEQUFxRDtZQUNyRCxJQUFJO1NBR1A7UUFDRCxjQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLHVDQUF1QztRQUN2QywwRUFBMEU7UUFDMUUsMkJBQTJCO1FBQzNCLElBQUk7UUFFSiwwRUFBMEU7UUFDMUUsc0NBQXNDO1FBQ3RDLElBQUk7SUFFUixDQUFDO0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3Q0FDSztJQU5OLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E2RHhCO0lBQUQsV0FBQztDQTdERCxBQTZEQyxDQTdEaUMsRUFBRSxDQUFDLFNBQVMsR0E2RDdDO2tCQTdEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3BmRm9vZDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5DaGVjazogY2MuTm9kZSA9IG51bGw7XG4gICAgaWQ6IG51bWJlciA9IDA7XG4gICAgbm9kZUxpc3QgPSBbXTtcbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHNldElkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnNwZkZvb2Quc3ByaXRlRnJhbWUgPSBNYWluLmluc3RhbmNlLmxpc3RzcGZGb29kW2lkXTtcbiAgICB9XG5cbiAgICBwb3NGb29kKCkge1xuICAgICAgICBpZihNYWluLmluc3RhbmNlLnNldElkUG9zKCkpIHtcbiAgICAgICAgICAgIE1haW4uaW5zdGFuY2UubGlzdFBvcy5wdXNoKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBvbkNsaWNrRm9vZCgpIHtcbiAgICAgICAgaWYgKE1haW4uaW5zdGFuY2UuY2hlY2tDb3JyZWN0KHRoaXMuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLm5DaGVjay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgTWFpbi5pbnN0YW5jZS5saXN0Q2hvb3NlLnB1c2godGhpcyk7XG4gICAgICAgICAgICBpZihNYWluLmluc3RhbmNlLmNvdW50Q29ycmVjdCA9PSAzKSB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJOb2RlIGxpc3QgXCIsdGhpcy5ub2RlTGlzdClcbiAgICAgICAgICAgIC8vIGlmKE1haW4uaW5zdGFuY2UuY291bnRDb3JyZWN0ID09IDMpIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNwZkZvb2Qubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gaWYoTWFpbi5pbnN0YW5jZS5hcnJEYXRhLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICAvLyAgICAgLy8gY2MudHdlZW4odGhpcy5zcGZGb29kLm5vZGUpXG4gICAgICAgICAgICAvLyAgICAgLy8gLnRvKDIse3Bvc2l0aW9uOiBjYy52MygxMDAsMTAwLDApfSlcbiAgICAgICAgICAgIC8vICAgICAvLyAuc3RhcnQoKTtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImFyciBwb3MgXCIsIE1haW4uaW5zdGFuY2UuYXJyRGF0YSlcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBNYWluLmluc3RhbmNlLnVwZGF0ZUdhbWUoKTtcbiAgICAgICAgLy8gTWFpbi5pbnN0YW5jZS5jaGVja0NvcnJlY3QodGhpcy5pZCk7XG4gICAgICAgIC8vIGlmIChNYWluLmluc3RhbmNlLmNvdW50Q29ycmVjdCA+IDAgJiYgTWFpbi5pbnN0YW5jZS5pbmRleCA9PSB0aGlzLmlkKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYoTWFpbi5pbnN0YW5jZS5jb3VudENvcnJlY3QgPiAzICAmJiBNYWluLmluc3RhbmNlLmluZGV4ID09IHRoaXMuaWQpIHtcbiAgICAgICAgLy8gICAgIE1haW4uaW5zdGFuY2UuY291bnRDb3JyZWN0ID0gMDtcbiAgICAgICAgLy8gfVxuXG4gICAgfVxuXG4gICAgXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==