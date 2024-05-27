
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
        _this.nodeHand = null;
        // LIFE-CYCLE CALLBACKS:
        _this.foodIndices = [];
        _this.arrData = [];
        _this.isMove = false;
        _this.indexData = -1;
        _this.idFood = -1;
        _this.countCorrect = 0;
        _this.numberPlayer = 0;
        _this.scaleDuration = 0.4;
        _this.minScale = 0.5;
        _this.maxScale = 0.7;
        _this.resizeAction = null;
        _this.listPos = [];
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
        this.scaleHand();
        this.setIdPos();
        console.log(this.listPos);
        // this.setPos();
        console.log(this.arrIdFood);
    };
    Main.prototype.start = function () {
    };
    Main.prototype.scaleHand = function () {
        var scaleUp = cc.scaleTo(this.scaleDuration, this.minScale);
        var scaleDown = cc.scaleTo(this.scaleDuration, this.maxScale);
        this.resizeAction = cc.repeatForever(cc.sequence(scaleUp, scaleDown));
        this.nodeHand.runAction(this.resizeAction);
        this.nodeHand.zIndex = 99;
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
        if (this.arrIdFood[this.idFood] == idFood) {
            this.countCorrect++;
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
        var _this = this;
        var dt = this.listCharMove[this.idFood].getComponent(CharMove_1.default);
        console.log(this.listChoose);
        this.arrData = [];
        this.listChoose.forEach(function (e) {
            if (e) {
                cc.tween(e.node)
                    .to(0.5, { position: cc.v3(dt.nOrder.position.x + 260, 300, 0) })
                    .start();
                _this.scheduleOnce(function () {
                    e.node.destroy();
                }, 0.5);
            }
        });
        this.listChoose = [];
    };
    Main.prototype.setIdPos = function () {
        var test = this.arrIdFood[0];
        for (var i = 0; i < this.foodIndices.length; i++) {
            if (test == this.foodIndices[i]) {
                return true;
            }
        }
    };
    // setPos() {
    //    this.listPos.forEach(e => {
    //         if(e) {
    //             let pos = e.node.position;
    //             console.log(pos);
    //         }
    //    })
    // }
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
        this.idFood++;
        // this.randomFood();
        console.log("index data = ", this.indexData);
        this.countCorrect = 0;
        this.isMove = true;
        var indexItemFood = this.arrIdFood[this.idFood];
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
    __decorate([
        property(cc.Node)
    ], Main.prototype, "nodeHand", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHVDQUFrQztBQUNsQywrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFxUEM7UUFqUEcsaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6Qix3QkFBd0I7UUFDeEIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixZQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDWixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUdqQixtQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixjQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsY0FBUSxHQUFHLEdBQUcsQ0FBQztRQUNQLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBQ3ZDLGFBQU8sR0FBZ0IsRUFBRSxDQUFDO1FBQzFCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQWtCN0IsZUFBUyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMs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QXJQb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQ2hhck1vdmUgZnJvbSBcIi4vQ2hhck1vdmVcIjtcbmltcG9ydCBGb29kIGZyb20gXCIuL0Zvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IE1haW4gPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RzcGZGb29kOiBjYy5TcHJpdGVGcmFtZSBbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcGZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENoYXJNb3ZlOiBjYy5Ob2RlIFtdPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlTGlzdEZvb2Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUhhbmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGZvb2RJbmRpY2VzID0gW107XG4gICAgYXJyRGF0YSA9IFtdO1xuICAgIGlzTW92ZSA9IGZhbHNlO1xuICAgIGluZGV4RGF0YSA9IC0xO1xuICAgIGlkRm9vZCA9IC0xO1xuICAgIGNvdW50Q29ycmVjdCA9IDA7XG4gICAgbnVtYmVyUGxheWVyID0gMDtcbiAgICBpbmRleDtcblxuICAgIHNjYWxlRHVyYXRpb24gPSAwLjQ7XG4gICAgbWluU2NhbGUgPSAwLjU7XG4gICAgbWF4U2NhbGUgPSAwLjc7XG4gICAgcHJpdmF0ZSByZXNpemVBY3Rpb246IGNjLkFjdGlvbiA9IG51bGw7XG4gICAgbGlzdFBvczogQXJyYXk8Rm9vZD4gPSBbXTtcbiAgICBsaXN0Q2hvb3NlOiBBcnJheTxGb29kPiA9IFtdO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIE1haW4uaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmFuZG9tSW5kZXgoKTtcbiAgICAgICAgdGhpcy5zaHVmZmxlKCk7XG4gICAgICAgIHRoaXMucmVuZGVyRm9vZCgpO1xuICAgICAgICB0aGlzLnJhbmRvbUZvb2QoKTtcbiAgICAgICAgdGhpcy5jaGFyRm9vZCgpO1xuICAgICAgICB0aGlzLnNjYWxlSGFuZCgpO1xuICAgICAgICB0aGlzLnNldElkUG9zKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdFBvcyk7XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnNldFBvcygpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFycklkRm9vZCk7XG4gICAgfVxuXG4gICAgYXJySWRGb29kID0gWzAsMSwyLDMsNCw1LDYsN11cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHNjYWxlSGFuZCgpIHtcbiAgICAgICAgbGV0IHNjYWxlVXAgPSBjYy5zY2FsZVRvKHRoaXMuc2NhbGVEdXJhdGlvbix0aGlzLm1pblNjYWxlKTtcbiAgICAgICAgbGV0IHNjYWxlRG93biA9IGNjLnNjYWxlVG8odGhpcy5zY2FsZUR1cmF0aW9uLHRoaXMubWF4U2NhbGUpO1xuICAgICAgICB0aGlzLnJlc2l6ZUFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2Uoc2NhbGVVcCwgc2NhbGVEb3duKSk7XG4gICAgICAgIHRoaXMubm9kZUhhbmQucnVuQWN0aW9uKHRoaXMucmVzaXplQWN0aW9uKTtcbiAgICAgICAgdGhpcy5ub2RlSGFuZC56SW5kZXggPSA5OTtcbiAgICB9XG4gIFxuICAgIHJhbmRvbUluZGV4KCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnJJZEZvb2QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3aGlsZSh0aGlzLmZvb2RJbmRpY2VzLmxlbmd0aCA8IDI0KSB7XG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdHNwZkZvb2QubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5mb29kSW5kaWNlcy5wdXNoKHJhbmRvbUluZGV4KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZm9vZEluZGV4ICcsdGhpcy5mb29kSW5kaWNlcyk7XG5cbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJhbmRvbUluZGV4KTtcbiAgICAgICAgLy8gICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChyYW5kb21JbmRleCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBzaHVmZmxlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5mb29kSW5kaWNlcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbdGhpcy5mb29kSW5kaWNlc1tpXSwgdGhpcy5mb29kSW5kaWNlc1tqXV0gPSBbdGhpcy5mb29kSW5kaWNlc1tqXSwgdGhpcy5mb29kSW5kaWNlc1tpXV07XG4gICAgICAgIH1cbiAgICB9XG4gXG4gICAgcmVuZGVyRm9vZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb29kSW5kaWNlcyk7XG4gICAgICAgIGNvbnN0IGNvbHMgPSA1O1xuICAgICAgICBjb25zdCByb3dzID0gNTtcbiAgICAgICAgY29uc3QgY2VsbFNpemVYPSAxNTA7XG4gICAgICAgIGNvbnN0IGNlbGxTaXplWT0gMTMwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5mb29kSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmRm9vZCkuZ2V0Q29tcG9uZW50KEZvb2QpXG4gICAgICAgICAgICBpdGVtLnNldElkKHRoaXMuZm9vZEluZGljZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlTGlzdEZvb2QuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBpICUgY29sczsgXG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XG4gICAgXG4gICAgICAgICAgICBpdGVtLm5vZGUueCA9IGNvbCAqIGNlbGxTaXplWDtcbiAgICAgICAgICAgIGl0ZW0ubm9kZS55ID0gLXJvdyAqIGNlbGxTaXplWTsgXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcmFuZG9tRm9vZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYXJySWRGb29kLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFt0aGlzLmFycklkRm9vZFtpXSwgdGhpcy5hcnJJZEZvb2Rbal1dID0gW3RoaXMuYXJySWRGb29kW2pdLCB0aGlzLmFycklkRm9vZFtpXV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICBcbiAgICBcbiAgICBjaGVja0NvcnJlY3QoaWRGb29kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkRm9vZCk7XG4gICAgICAgIC8vIGxldCB0ZXN0ID0gIHRoaXMuYXJyRGF0YS5pbmRleE9mKGlkRm9vZClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGVzdCk7XG4gICAgICAgIC8vIGlmKHRlc3QgPiAtMSApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY291bnRDb3JyZWN0Kys7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuYXJySWRGb29kW3RoaXMuaWRGb29kXSA9PSBpZEZvb2QpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRDb3JyZWN0Kys7XG4gICAgICAgIFxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdW50IGNvcnJlY3RcIiwgdGhpcy5jb3VudENvcnJlY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGh1YSBjY21yXCIpXG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNoYXJMb3N0KCk7XG4gICAgICAgIH1cbiAgICBcblxuICAgICAgIFxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgIC8vIGlmKHRoaXMuY291bnRDb3JyZWN0ID09IDMpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwieW91IHdpblwiKTtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuY2hhckZvb2QoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY291bnQgY29ycmVjdCBcIiwgdGhpcy5jb3VudENvcnJlY3QpO1xuICAgICAgICBcbiAgICB9XG4gICBcbiAgICBkZXN0cm95Rm9vZCgpIHtcbiAgICAgICAgbGV0IGR0ID0gdGhpcy5saXN0Q2hhck1vdmVbdGhpcy5pZEZvb2RdLmdldENvbXBvbmVudChDaGFyTW92ZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0Q2hvb3NlKTtcbiAgICAgICAgdGhpcy5hcnJEYXRhID0gW11cbiAgICAgICAgdGhpcy5saXN0Q2hvb3NlLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBpZihlKXtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihlLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUse3Bvc2l0aW9uOiBjYy52MyhkdC5uT3JkZXIucG9zaXRpb24ueCsyNjAsMzAwLDApfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0sMC41KVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIHRoaXMubGlzdENob29zZSA9IFtdO1xuXG4gICAgfVxuICAgIFxuICAgIHNldElkUG9zKCkge1xuICAgICAgICBsZXQgdGVzdCA9IHRoaXMuYXJySWRGb29kWzBdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5mb29kSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGVzdCA9PSB0aGlzLmZvb2RJbmRpY2VzW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzZXRQb3MoKSB7XG4gICAgLy8gICAgdGhpcy5saXN0UG9zLmZvckVhY2goZSA9PiB7XG4gICAgLy8gICAgICAgICBpZihlKSB7XG4gICAgLy8gICAgICAgICAgICAgbGV0IHBvcyA9IGUubm9kZS5wb3NpdGlvbjtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3MpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgIH0pXG4gICAgLy8gfVxuICAgIHVwZGF0ZUdhbWUoKVxuICAgIHsgICBcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuY291bnRDb3JyZWN0ID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQ2hhcldpbigpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRm9vZCgpO1xuICAgICAgICAgICAgfSwxKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUZvb2QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGlvbkNoYXJXaW4oKSB7XG4gICAgICAgIGxldCBkdCA9IHRoaXMubGlzdENoYXJNb3ZlW3RoaXMuaW5kZXhEYXRhXS5nZXRDb21wb25lbnQoQ2hhck1vdmUpXG4gICAgICAgIGR0LmNoYXJBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsIFwiaGFwcHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGR0LmNoYXJBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIix0cnVlKTtcbiAgICAgICAgICAgIH0sMSlcbiAgICB9XG5cbiAgICBhY3Rpb25DaGFyTG9zdCgpIHtcbiAgICAgICAgbGV0IGR0ID0gdGhpcy5saXN0Q2hhck1vdmVbdGhpcy5pbmRleERhdGFdLmdldENvbXBvbmVudChDaGFyTW92ZSlcbiAgICAgICAgZHQuY2hhckFuaW1hdGlvbi5zZXRBbmltYXRpb24oMCxcImRpc2NvbWZvcnRcIix0cnVlKTtcbiAgICB9XG5cbiAgICBjaGFyRm9vZCgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIGlmKHRoaXMuaW5kZXhEYXRhID4gMilcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLnJhbmRvbUZvb2QoKTtcbiAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB0aGlzLmNvdW50Q29ycmVjdCA9IDA7XG4gICAgICAgIC8vICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICBsZXQgaW5kZXhJdGVtRm9vZCA9IHRoaXMuYXJySWRGb29kWzBdO1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJpZCBmb29kIFwiLCBpbmRleEl0ZW1Gb29kKTtcbiAgICAgICAgLy8gICAgIGlmKHRoaXMuaW5kZXhEYXRhID4gMilcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmluZGV4RGF0YSA9IDA7XG4gICAgICAgIC8vICAgICBsZXQgZHQgPSB0aGlzLmxpc3RDaGFyTW92ZVt0aGlzLmluZGV4RGF0YV0uZ2V0Q29tcG9uZW50KENoYXJNb3ZlKTtcbiAgICAgICAgLy8gICAgIGR0LmZvb2Quc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RzcGZGb29kW2luZGV4SXRlbUZvb2RdO1xuXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5pbmRleERhdGErKztcbiAgICAgICAgdGhpcy5pZEZvb2QrKztcbiAgICAgICAgLy8gdGhpcy5yYW5kb21Gb29kKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXggZGF0YSA9IFwiLHRoaXMuaW5kZXhEYXRhKTtcblxuICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCA9IDA7XG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGluZGV4SXRlbUZvb2QgPSB0aGlzLmFycklkRm9vZFt0aGlzLmlkRm9vZF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWQgZm9vZCBcIiwgaW5kZXhJdGVtRm9vZCk7XG4gICAgICAgICAgICBpZih0aGlzLmluZGV4RGF0YSA+IDIpXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleERhdGEgPSAwO1xuICAgICAgICBsZXQgZHQgPSB0aGlzLmxpc3RDaGFyTW92ZVt0aGlzLmluZGV4RGF0YV0uZ2V0Q29tcG9uZW50KENoYXJNb3ZlKTtcbiAgICAgICAgZHQuZm9vZC5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdHNwZkZvb2RbaW5kZXhJdGVtRm9vZF07XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==