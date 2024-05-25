
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
        return _this;
        // update (dt) {}
    }
    Main_1 = Main;
    Main.prototype.onLoad = function () {
        Main_1.instance = this;
        this.randomIndex();
        this.shuffle();
        this.renderFood();
        this.charFood();
    };
    Main.prototype.start = function () {
    };
    Main.prototype.randomIndex = function () {
        for (var i = 0; i < this.listspfFood.length; i++) {
            this.foodIndices.push(i);
            this.foodIndices.push(i);
            this.foodIndices.push(i);
        }
        // while(this.foodIndices.length < 24) {
        var randomIndex = Math.floor(Math.random() * this.listspfFood.length);
        var element = this.listspfFood.splice(randomIndex, 1)[0];
        this.foodIndices.push(element);
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
        this.index = Math.floor(Math.random() * this.listspfFood.length);
        console.log("id random ", this.index);
    };
    Main.prototype.checkCorrect = function (idFood) {
        console.log(idFood);
        // let test =  this.arrData.indexOf(idFood)
        // console.log(test);
        // if(test > -1 ) {
        //     this.countCorrect++;
        // }
        if (this.index == idFood) {
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
    Main.prototype.updateGame = function () {
        var _this = this;
        if (this.countCorrect == 3) {
            this.actionCharWin();
            this.scheduleOnce(function () {
                _this.charFood();
            }, 1);
            console.log("index data", this.indexData);
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
        if (this.indexData > 2)
            return;
        else {
            this.randomFood();
            this.indexData++;
            this.countCorrect = 0;
            this.isMove = true;
            var indexItemFood = this.index;
            if (this.indexData > 2)
                this.indexData = 0;
            var dt = this.listCharMove[this.indexData].getComponent(CharMove_1.default);
            dt.food.spriteFrame = this.listspfFood[indexItemFood];
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHVDQUFrQztBQUNsQywrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFnS0M7UUE1SkcsaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isd0JBQXdCO1FBQ3hCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQVksR0FBRyxDQUFDLENBQUM7O1FBMklqQixpQkFBaUI7SUFDckIsQ0FBQzthQWhLb0IsSUFBSTtJQXNCckIscUJBQU0sR0FBTjtRQUNJLE1BQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxvQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDBCQUFXLEdBQVg7UUFDSSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMs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QUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FFekQ7SUFDTCxDQUFDOztJQTVKYSxhQUFRLEdBQVMsSUFBSSxDQUFBO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkNBQ1c7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1c7SUFYWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBZ0t4QjtJQUFELFdBQUM7Q0FoS0QsQUFnS0MsQ0FoS2lDLEVBQUUsQ0FBQyxTQUFTLEdBZ0s3QztrQkFoS29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENoYXJNb3ZlIGZyb20gXCIuL0NoYXJNb3ZlXCI7XG5pbXBvcnQgRm9vZCBmcm9tIFwiLi9Gb29kXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBNYWluID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0c3BmRm9vZDogY2MuU3ByaXRlRnJhbWUgW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBmRm9vZDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDaGFyTW92ZTogY2MuTm9kZSBbXT0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUxpc3RGb29kOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGZvb2RJbmRpY2VzID0gW107XG4gICAgYXJyRGF0YSA9IFtdO1xuICAgIGlzTW92ZSA9IGZhbHNlO1xuICAgIGluZGV4RGF0YSA9IC0xO1xuICAgIGNvdW50Q29ycmVjdCA9IDA7XG4gICAgbnVtYmVyUGxheWVyID0gMDtcbiAgICBpbmRleDtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBNYWluLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5yYW5kb21JbmRleCgpO1xuICAgICAgICB0aGlzLnNodWZmbGUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGb29kKCk7XG4gICAgICAgIHRoaXMuY2hhckZvb2QoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgcmFuZG9tSW5kZXgoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RzcGZGb29kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2hpbGUodGhpcy5mb29kSW5kaWNlcy5sZW5ndGggPCAyNCkge1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RzcGZGb29kLmxlbmd0aCk7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5saXN0c3BmRm9vZC5zcGxpY2UocmFuZG9tSW5kZXgsIDEpWzBdO1xuICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goZWxlbWVudCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Zvb2RJbmRleCAnLHRoaXMuZm9vZEluZGljZXMpO1xuXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyYW5kb21JbmRleCk7XG4gICAgICAgIC8vICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc2h1ZmZsZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZm9vZEluZGljZXMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW3RoaXMuZm9vZEluZGljZXNbaV0sIHRoaXMuZm9vZEluZGljZXNbal1dID0gW3RoaXMuZm9vZEluZGljZXNbal0sIHRoaXMuZm9vZEluZGljZXNbaV1dO1xuICAgICAgICB9XG4gICAgfVxuIFxuICAgIHJlbmRlckZvb2QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9vZEluZGljZXMpO1xuICAgICAgICBjb25zdCBjb2xzID0gNTtcbiAgICAgICAgY29uc3Qgcm93cyA9IDU7XG4gICAgICAgIGNvbnN0IGNlbGxTaXplWD0gMTUwO1xuICAgICAgICBjb25zdCBjZWxsU2l6ZVk9IDEzMDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZm9vZEluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZkZvb2QpLmdldENvbXBvbmVudChGb29kKVxuICAgICAgICAgICAgaXRlbS5zZXRJZCh0aGlzLmZvb2RJbmRpY2VzW2ldKTtcbiAgICAgICAgICAgIHRoaXMubm9kZUxpc3RGb29kLmFkZENoaWxkKGl0ZW0ubm9kZSk7XG4gICAgICAgICAgICBsZXQgY29sID0gaSAlIGNvbHM7IFxuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xuICAgIFxuICAgICAgICAgICAgaXRlbS5ub2RlLnggPSBjb2wgKiBjZWxsU2l6ZVg7XG4gICAgICAgICAgICBpdGVtLm5vZGUueSA9IC1yb3cgKiBjZWxsU2l6ZVk7IFxuICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJhbmRvbUZvb2QoKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RzcGZGb29kLmxlbmd0aClcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWQgcmFuZG9tIFwiLHRoaXMuaW5kZXgpO1xuICAgIH1cbiAgICBcbiAgIFxuICAgIFxuICAgIGNoZWNrQ29ycmVjdChpZEZvb2QpIHtcbiAgICAgICAgY29uc29sZS5sb2coaWRGb29kKTtcbiAgICAgICAgLy8gbGV0IHRlc3QgPSAgdGhpcy5hcnJEYXRhLmluZGV4T2YoaWRGb29kKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZXN0KTtcbiAgICAgICAgLy8gaWYodGVzdCA+IC0xICkge1xuICAgICAgICAvLyAgICAgdGhpcy5jb3VudENvcnJlY3QrKztcbiAgICAgICAgLy8gfVxuXG4gICAgXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmluZGV4ID09IGlkRm9vZCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudENvcnJlY3QrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bnQgY29ycmVjdFwiLCB0aGlzLmNvdW50Q29ycmVjdCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aHVhIGNjbXJcIilcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQ2hhckxvc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgLy8gaWYodGhpcy5jb3VudENvcnJlY3QgPT0gMykge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ5b3Ugd2luXCIpO1xuICAgICAgICAvLyAgICAgLy8gdGhpcy5jaGFyRm9vZCgpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb3VudCBjb3JyZWN0IFwiLCB0aGlzLmNvdW50Q29ycmVjdCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuICAgIHVwZGF0ZUdhbWUoKVxuICAgIHsgXG4gICAgICAgIGlmKHRoaXMuY291bnRDb3JyZWN0ID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uQ2hhcldpbigpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyRm9vZCgpO1xuICAgICAgICAgICAgfSwxKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IGRhdGFcIix0aGlzLmluZGV4RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3Rpb25DaGFyV2luKCkge1xuICAgICAgICBsZXQgZHQgPSB0aGlzLmxpc3RDaGFyTW92ZVt0aGlzLmluZGV4RGF0YV0uZ2V0Q29tcG9uZW50KENoYXJNb3ZlKVxuICAgICAgICBkdC5jaGFyQW5pbWF0aW9uLnNldEFuaW1hdGlvbigwLCBcImhhcHB5XCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoICgpID0+IHtcbiAgICAgICAgICAgICAgICBkdC5jaGFyQW5pbWF0aW9uLnNldEFuaW1hdGlvbigwLFwiaGFwcHlfb3V0XCIsdHJ1ZSk7XG4gICAgICAgICAgICB9LDEpXG4gICAgfVxuXG4gICAgYWN0aW9uQ2hhckxvc3QoKSB7XG4gICAgICAgIGxldCBkdCA9IHRoaXMubGlzdENoYXJNb3ZlW3RoaXMuaW5kZXhEYXRhXS5nZXRDb21wb25lbnQoQ2hhck1vdmUpXG4gICAgICAgIGR0LmNoYXJBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsXCJkaXNjb21mb3J0XCIsdHJ1ZSk7XG4gICAgfVxuXG4gICAgY2hhckZvb2QoKSB7XG4gICAgICAgIGlmKHRoaXMuaW5kZXhEYXRhID4gMilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbUZvb2QoKTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXhEYXRhKys7XG4gICAgICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCA9IDA7XG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgaW5kZXhJdGVtRm9vZCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICBpZih0aGlzLmluZGV4RGF0YSA+IDIpXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleERhdGEgPSAwO1xuICAgICAgICAgICAgbGV0IGR0ID0gdGhpcy5saXN0Q2hhck1vdmVbdGhpcy5pbmRleERhdGFdLmdldENvbXBvbmVudChDaGFyTW92ZSk7XG4gICAgICAgICAgICBkdC5mb29kLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0c3BmRm9vZFtpbmRleEl0ZW1Gb29kXTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=