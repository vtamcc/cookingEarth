
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/res/scripts/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dcfa73LqjxIRrS3jiIJmmWo', 'Main');
// res/scripts/Main.ts

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
var CharMove_1 = require("./CharMove");
var Food_1 = require("./Food");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listspfFood = [];
        _this.pfFood = null;
        _this.listCharMove = [];
        _this.nodeListFood = null;
        // LIFE-CYCLE CALLBACKS:
        _this.foodIndices = [];
        _this.arrData = [];
        _this.isMove = false;
        _this.indexData = -1;
        _this.countCorrect = 0;
        _this.numberPlayer = 0;
        _this.listChoose = [];
        _this.arrIdFood = [0, 1, 2, 3, 4, 5, 6, 7];
        return _this;
        // update (dt) {}
    }
    Main_1 = Main;
    Main.prototype.onLoad = function () {
        Main_1.instance = this;
        this.randomIndex();
        this.shuffle();
        this.renderFood();
        this.randomFood();
        this.charFood();
        console.log(this.arrIdFood);
    };
    Main.prototype.start = function () {
    };
    Main.prototype.randomIndex = function () {
        for (var i = 0; i < this.arrIdFood.length; i++) {
            this.foodIndices.push(i);
            this.foodIndices.push(i);
            this.foodIndices.push(i);
        }
        // while(this.foodIndices.length < 24) {
        var randomIndex = Math.floor(Math.random() * this.listspfFood.length);
        this.foodIndices.push(randomIndex);
        console.log('foodIndex ', this.foodIndices);
        //     console.log(randomIndex);
        //     this.foodIndices.push(randomIndex);
        // }
    };
    Main.prototype.shuffle = function () {
        var _a;
        for (var i = this.foodIndices.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.foodIndices[j], this.foodIndices[i]], this.foodIndices[i] = _a[0], this.foodIndices[j] = _a[1];
        }
    };
    Main.prototype.renderFood = function () {
        console.log(this.foodIndices);
        var cols = 5;
        var rows = 5;
        var cellSizeX = 150;
        var cellSizeY = 130;
        for (var i = 0; i < this.foodIndices.length; i++) {
            var item = cc.instantiate(this.pfFood).getComponent(Food_1.default);
            item.setId(this.foodIndices[i]);
            this.nodeListFood.addChild(item.node);
            var col = i % cols;
            var row = Math.floor(i / cols);
            item.node.x = col * cellSizeX;
            item.node.y = -row * cellSizeY;
        }
    };
    Main.prototype.randomFood = function () {
        var _a;
        for (var i = this.arrIdFood.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.arrIdFood[j], this.arrIdFood[i]], this.arrIdFood[i] = _a[0], this.arrIdFood[j] = _a[1];
        }
    };
    Main.prototype.checkCorrect = function (idFood) {
        console.log(idFood);
        // let test =  this.arrData.indexOf(idFood)
        // console.log(test);
        // if(test > -1 ) {
        //     this.countCorrect++;
        // }
        if (this.arrIdFood[this.indexData] == idFood) {
            this.countCorrect++;
            this.arrData.push(idFood);
            console.log("count correct", this.countCorrect);
            return true;
        }
        else {
            console.log("thua ccmr");
            this.actionCharLost();
        }
        return false;
        // if(this.countCorrect == 3) {
        //     console.log("you win");
        //     // this.charFood();
        // }
        // console.log("count correct ", this.countCorrect);
    };
    Main.prototype.destroyFood = function () {
        console.log("node list", this.arrData);
        this.arrData = [];
        this.listChoose.forEach(function (e) {
            if (e) {
                e.node.removeFromParent();
            }
        });
        this.listChoose = [];
    };
    Main.prototype.updateGame = function () {
        var _this = this;
        if (this.countCorrect == 3) {
            this.actionCharWin();
            this.scheduleOnce(function () {
                _this.charFood();
            }, 1);
            this.destroyFood();
        }
    };
    Main.prototype.actionCharWin = function () {
        var dt = this.listCharMove[this.indexData].getComponent(CharMove_1.default);
        dt.charAnimation.setAnimation(0, "happy", true);
        this.scheduleOnce(function () {
            dt.charAnimation.setAnimation(0, "happy_out", true);
        }, 1);
    };
    Main.prototype.actionCharLost = function () {
        var dt = this.listCharMove[this.indexData].getComponent(CharMove_1.default);
        dt.charAnimation.setAnimation(0, "discomfort", true);
    };
    Main.prototype.charFood = function () {
        // if(this.indexData > 2)
        //     return;
        // else {
        //     this.randomFood();
        //     this.countCorrect = 0;
        //     this.isMove = true;
        //     let indexItemFood = this.arrIdFood[0];
        //     console.log("id food ", indexItemFood);
        //     if(this.indexData > 2)
        //         this.indexData = 0;
        //     let dt = this.listCharMove[this.indexData].getComponent(CharMove);
        //     dt.food.spriteFrame = this.listspfFood[indexItemFood];
        // }
        this.indexData++;
        // this.randomFood();
        console.log("index data = ", this.indexData);
        this.countCorrect = 0;
        this.isMove = true;
        var indexItemFood = this.arrIdFood[this.indexData];
        console.log("id food ", indexItemFood);
        if (this.indexData > 2)
            this.indexData = 0;
        var dt = this.listCharMove[this.indexData].getComponent(CharMove_1.default);
        dt.food.spriteFrame = this.listspfFood[indexItemFood];
    };
    var Main_1;
    Main.instance = null;
    __decorate([
        property(cc.SpriteFrame)
    ], Main.prototype, "listspfFood", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "pfFood", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "listCharMove", void 0);
    __decorate([
        property(cc.Node)
    ], Main.prototype, "nodeListFood", void 0);
    Main = Main_1 = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHVDQUFrQztBQUNsQywrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFzTUM7UUFsTUcsaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isd0JBQXdCO1FBQ3hCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFHakIsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBYTdCLGVBQVMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTs7UUFrSzdCLGlCQUFpQjtJQUNyQixDQUFDO2FBdE1vQixJQUFJO0lBdUJyQixxQkFBTSxHQUFOO1FBQ0ksTUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFHckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUks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LENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTFELENBQUM7O0lBbE1hLGFBQVEsR0FBUyxJQUFJLENBQUE7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDVztJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVztJQVhaLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0FzTXhCO0lBQUQsV0FBQztDQXRNRCxBQXNNQyxDQXRNaUMsRUFBRSxDQUFDLFNBQVMsR0FzTTdDO2tCQXRNb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQ2hhck1vdmUgZnJvbSBcIi4vQ2hhck1vdmVcIjtcbmltcG9ydCBGb29kIGZyb20gXCIuL0Zvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IE1haW4gPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RzcGZGb29kOiBjYy5TcHJpdGVGcmFtZSBbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcGZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENoYXJNb3ZlOiBjYy5Ob2RlIFtdPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlTGlzdEZvb2Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgZm9vZEluZGljZXMgPSBbXTtcbiAgICBhcnJEYXRhID0gW107XG4gICAgaXNNb3ZlID0gZmFsc2U7XG4gICAgaW5kZXhEYXRhID0gLTE7XG4gICAgY291bnRDb3JyZWN0ID0gMDtcbiAgICBudW1iZXJQbGF5ZXIgPSAwO1xuICAgIGluZGV4O1xuXG4gICAgbGlzdENob29zZTogQXJyYXk8Rm9vZD4gPSBbXTtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBNYWluLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgXG4gICAgICBcbiAgICAgICAgdGhpcy5yYW5kb21JbmRleCgpO1xuICAgICAgICB0aGlzLnNodWZmbGUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGb29kKCk7XG4gICAgICAgIHRoaXMucmFuZG9tRm9vZCgpO1xuICAgICAgICB0aGlzLmNoYXJGb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJySWRGb29kKTtcbiAgICB9XG5cbiAgICBhcnJJZEZvb2QgPSBbMCwxLDIsMyw0LDUsNiw3XVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuICAgIHJhbmRvbUluZGV4KCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJZEZvb2QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3aGlsZSh0aGlzLmZvb2RJbmRpY2VzLmxlbmd0aCA8IDI0KSB7XG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdHNwZkZvb2QubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5mb29kSW5kaWNlcy5wdXNoKHJhbmRvbUluZGV4KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZm9vZEluZGV4ICcsdGhpcy5mb29kSW5kaWNlcyk7XG5cbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJhbmRvbUluZGV4KTtcbiAgICAgICAgLy8gICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChyYW5kb21JbmRleCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBzaHVmZmxlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5mb29kSW5kaWNlcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbdGhpcy5mb29kSW5kaWNlc1tpXSwgdGhpcy5mb29kSW5kaWNlc1tqXV0gPSBbdGhpcy5mb29kSW5kaWNlc1tqXSwgdGhpcy5mb29kSW5kaWNlc1tpXV07XG4gICAgICAgIH1cbiAgICB9XG4gXG4gICAgcmVuZGVyRm9vZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb29kSW5kaWNlcyk7XG4gICAgICAgIGNvbnN0IGNvbHMgPSA1O1xuICAgICAgICBjb25zdCByb3dzID0gNTtcbiAgICAgICAgY29uc3QgY2VsbFNpemVYPSAxNTA7XG4gICAgICAgIGNvbnN0IGNlbGxTaXplWT0gMTMwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5mb29kSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmRm9vZCkuZ2V0Q29tcG9uZW50KEZvb2QpXG4gICAgICAgICAgICBpdGVtLnNldElkKHRoaXMuZm9vZEluZGljZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlTGlzdEZvb2QuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBpICUgY29sczsgXG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XG4gICAgXG4gICAgICAgICAgICBpdGVtLm5vZGUueCA9IGNvbCAqIGNlbGxTaXplWDtcbiAgICAgICAgICAgIGl0ZW0ubm9kZS55ID0gLXJvdyAqIGNlbGxTaXplWTsgXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHJhbmRvbUZvb2QoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmFycklkRm9vZC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbdGhpcy5hcnJJZEZvb2RbaV0sIHRoaXMuYXJySWRGb29kW2pdXSA9IFt0aGlzLmFycklkRm9vZFtqXSwgdGhpcy5hcnJJZEZvb2RbaV1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgXG4gICAgXG4gICAgY2hlY2tDb3JyZWN0KGlkRm9vZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpZEZvb2QpO1xuICAgICAgICAvLyBsZXQgdGVzdCA9ICB0aGlzLmFyckRhdGEuaW5kZXhPZihpZEZvb2QpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3QpO1xuICAgICAgICAvLyBpZih0ZXN0ID4gLTEgKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmNvdW50Q29ycmVjdCsrO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmFycklkRm9vZFt0aGlzLmluZGV4RGF0YV0gPT0gaWRGb29kKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCsrO1xuICAgICAgICAgICAgdGhpcy5hcnJEYXRhLnB1c2goaWRGb29kKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb3VudCBjb3JyZWN0XCIsIHRoaXMuY291bnRDb3JyZWN0KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRodWEgY2NtclwiKVxuICAgICAgICAgICAgdGhpcy5hY3Rpb25DaGFyTG9zdCgpO1xuICAgICAgICB9XG4gICAgXG5cbiAgICAgICBcblxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICAvLyBpZih0aGlzLmNvdW50Q29ycmVjdCA9PSAzKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInlvdSB3aW5cIik7XG4gICAgICAgIC8vICAgICAvLyB0aGlzLmNoYXJGb29kKCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvdW50IGNvcnJlY3QgXCIsIHRoaXMuY291bnRDb3JyZWN0KTtcbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIGRlc3Ryb3lGb29kKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vZGUgbGlzdFwiLCB0aGlzLmFyckRhdGEpO1xuICAgICAgICB0aGlzLmFyckRhdGEgPSBbXVxuICAgICAgICB0aGlzLmxpc3RDaG9vc2UuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGlmKGUpe1xuICAgICAgICAgICAgICAgIGUubm9kZS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgdGhpcy5saXN0Q2hvb3NlID0gW107XG5cbiAgICB9XG5cbiAgICB1cGRhdGVHYW1lKClcbiAgICB7ICAgXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmNvdW50Q29ycmVjdCA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNoYXJXaW4oKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZvb2QoKTtcbiAgICAgICAgICAgIH0sMSk7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lGb29kKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGlvbkNoYXJXaW4oKSB7XG4gICAgICAgIGxldCBkdCA9IHRoaXMubGlzdENoYXJNb3ZlW3RoaXMuaW5kZXhEYXRhXS5nZXRDb21wb25lbnQoQ2hhck1vdmUpXG4gICAgICAgIGR0LmNoYXJBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsIFwiaGFwcHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGR0LmNoYXJBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIix0cnVlKTtcbiAgICAgICAgICAgIH0sMSlcbiAgICB9XG5cbiAgICBhY3Rpb25DaGFyTG9zdCgpIHtcbiAgICAgICAgbGV0IGR0ID0gdGhpcy5saXN0Q2hhck1vdmVbdGhpcy5pbmRleERhdGFdLmdldENvbXBvbmVudChDaGFyTW92ZSlcbiAgICAgICAgZHQuY2hhckFuaW1hdGlvbi5zZXRBbmltYXRpb24oMCxcImRpc2NvbWZvcnRcIix0cnVlKTtcbiAgICB9XG5cbiAgICBjaGFyRm9vZCgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIGlmKHRoaXMuaW5kZXhEYXRhID4gMilcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLnJhbmRvbUZvb2QoKTtcbiAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB0aGlzLmNvdW50Q29ycmVjdCA9IDA7XG4gICAgICAgIC8vICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhJdGVtRm9vZCA9IHRoaXMuYXJySWRGb29kWzBdO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJpZCBmb29kIFwiLCBpbmRleEl0ZW1Gb29kKTtcbiAgICAgICAgLy8gICAgIGlmKHRoaXMuaW5kZXhEYXRhID4gMilcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmluZGV4RGF0YSA9IDA7XG4gICAgICAgIC8vICAgICBsZXQgZHQgPSB0aGlzLmxpc3RDaGFyTW92ZVt0aGlzLmluZGV4RGF0YV0uZ2V0Q29tcG9uZW50KENoYXJNb3ZlKTtcbiAgICAgICAgLy8gICAgIGR0LmZvb2Quc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RzcGZGb29kW2luZGV4SXRlbUZvb2RdO1xuXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5pbmRleERhdGErKztcbiAgICAgICAgLy8gdGhpcy5yYW5kb21Gb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggZGF0YSA9IFwiLHRoaXMuaW5kZXhEYXRhKTtcblxuICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCA9IDA7XG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGluZGV4SXRlbUZvb2QgPSB0aGlzLmFycklkRm9vZFt0aGlzLmluZGV4RGF0YV07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWQgZm9vZCBcIiwgaW5kZXhJdGVtRm9vZCk7XG4gICAgICAgICAgICBpZih0aGlzLmluZGV4RGF0YSA+IDIpXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleERhdGEgPSAwO1xuICAgICAgICBsZXQgZHQgPSB0aGlzLmxpc3RDaGFyTW92ZVt0aGlzLmluZGV4RGF0YV0uZ2V0Q29tcG9uZW50KENoYXJNb3ZlKTtcbiAgICAgICAgZHQuZm9vZC5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdHNwZkZvb2RbaW5kZXhJdGVtRm9vZF07XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==