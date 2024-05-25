
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
        this.foodIndices.push(randomIndex);
        console.log(this.foodIndices);
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
        console.log(this.foodIndices);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHVDQUFrQztBQUNsQywrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE4SkM7UUExSkcsaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isd0JBQXdCO1FBQ3hCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQVksR0FBRyxDQUFDLENBQUM7O1FBeUlqQixpQkFBaUI7SUFDckIsQ0FBQzthQTlKb0IsSUFBSTtJQXNCckIscUJBQU0sR0FBTjtRQUNJLE1BQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxvQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDBCQUFXLEdBQVg7UUFDSSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMs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QyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1c7SUFYWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBOEp4QjtJQUFELFdBQUM7Q0E5SkQsQUE4SkMsQ0E5SmlDLEVBQUUsQ0FBQyxTQUFTLEdBOEo3QztrQkE5Sm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENoYXJNb3ZlIGZyb20gXCIuL0NoYXJNb3ZlXCI7XG5pbXBvcnQgRm9vZCBmcm9tIFwiLi9Gb29kXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBNYWluID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0c3BmRm9vZDogY2MuU3ByaXRlRnJhbWUgW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBmRm9vZDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDaGFyTW92ZTogY2MuTm9kZSBbXT0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUxpc3RGb29kOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGZvb2RJbmRpY2VzID0gW107XG4gICAgYXJyRGF0YSA9IFtdO1xuICAgIGlzTW92ZSA9IGZhbHNlO1xuICAgIGluZGV4RGF0YSA9IC0xO1xuICAgIGNvdW50Q29ycmVjdCA9IDA7XG4gICAgbnVtYmVyUGxheWVyID0gMDtcbiAgICBpbmRleDtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBNYWluLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5yYW5kb21JbmRleCgpO1xuICAgICAgICB0aGlzLnNodWZmbGUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGb29kKCk7XG4gICAgICAgIHRoaXMuY2hhckZvb2QoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgcmFuZG9tSW5kZXgoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RzcGZGb29kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2hpbGUodGhpcy5mb29kSW5kaWNlcy5sZW5ndGggPCAyNCkge1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RzcGZGb29kLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChyYW5kb21JbmRleCk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb29kSW5kaWNlcyk7XG5cbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJhbmRvbUluZGV4KTtcbiAgICAgICAgLy8gICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChyYW5kb21JbmRleCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBzaHVmZmxlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5mb29kSW5kaWNlcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgICAgICBbdGhpcy5mb29kSW5kaWNlc1tpXSwgdGhpcy5mb29kSW5kaWNlc1tqXV0gPSBbdGhpcy5mb29kSW5kaWNlc1tqXSwgdGhpcy5mb29kSW5kaWNlc1tpXV07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvb2RJbmRpY2VzKTtcbiAgICB9XG4gXG4gICAgcmVuZGVyRm9vZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb29kSW5kaWNlcyk7XG4gICAgICAgIGNvbnN0IGNvbHMgPSA1O1xuICAgICAgICBjb25zdCByb3dzID0gNTtcbiAgICAgICAgY29uc3QgY2VsbFNpemVYPSAxNTA7XG4gICAgICAgIGNvbnN0IGNlbGxTaXplWT0gMTMwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5mb29kSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmRm9vZCkuZ2V0Q29tcG9uZW50KEZvb2QpXG4gICAgICAgICAgICBpdGVtLnNldElkKHRoaXMuZm9vZEluZGljZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlTGlzdEZvb2QuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBpICUgY29sczsgXG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XG4gICAgXG4gICAgICAgICAgICBpdGVtLm5vZGUueCA9IGNvbCAqIGNlbGxTaXplWDtcbiAgICAgICAgICAgIGl0ZW0ubm9kZS55ID0gLXJvdyAqIGNlbGxTaXplWTsgXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9tRm9vZCgpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdHNwZkZvb2QubGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyhcImlkIHJhbmRvbSBcIix0aGlzLmluZGV4KTtcbiAgICB9XG4gICAgXG4gICBcbiAgICBcbiAgICBjaGVja0NvcnJlY3QoaWRGb29kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlkRm9vZCk7XG4gICAgICAgIC8vIGxldCB0ZXN0ID0gIHRoaXMuYXJyRGF0YS5pbmRleE9mKGlkRm9vZClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGVzdCk7XG4gICAgICAgIC8vIGlmKHRlc3QgPiAtMSApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY291bnRDb3JyZWN0Kys7XG4gICAgICAgIC8vIH1cblxuICAgIFxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5pbmRleCA9PSBpZEZvb2QpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRDb3JyZWN0Kys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvdW50IGNvcnJlY3RcIiwgdGhpcy5jb3VudENvcnJlY3QpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGh1YSBjY21yXCIpXG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNoYXJMb3N0KCk7XG4gICAgICAgIH1cblxuICAgICAgIFxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgIC8vIGlmKHRoaXMuY291bnRDb3JyZWN0ID09IDMpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwieW91IHdpblwiKTtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuY2hhckZvb2QoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY291bnQgY29ycmVjdCBcIiwgdGhpcy5jb3VudENvcnJlY3QpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgICB1cGRhdGVHYW1lKClcbiAgICB7IFxuICAgICAgICBpZih0aGlzLmNvdW50Q29ycmVjdCA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNoYXJXaW4oKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZvb2QoKTtcbiAgICAgICAgICAgIH0sMSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleCBkYXRhXCIsdGhpcy5pbmRleERhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0aW9uQ2hhcldpbigpIHtcbiAgICAgICAgbGV0IGR0ID0gdGhpcy5saXN0Q2hhck1vdmVbdGhpcy5pbmRleERhdGFdLmdldENvbXBvbmVudChDaGFyTW92ZSlcbiAgICAgICAgZHQuY2hhckFuaW1hdGlvbi5zZXRBbmltYXRpb24oMCwgXCJoYXBweVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZHQuY2hhckFuaW1hdGlvbi5zZXRBbmltYXRpb24oMCxcImhhcHB5X291dFwiLHRydWUpO1xuICAgICAgICAgICAgfSwxKVxuICAgIH1cblxuICAgIGFjdGlvbkNoYXJMb3N0KCkge1xuICAgICAgICBsZXQgZHQgPSB0aGlzLmxpc3RDaGFyTW92ZVt0aGlzLmluZGV4RGF0YV0uZ2V0Q29tcG9uZW50KENoYXJNb3ZlKVxuICAgICAgICBkdC5jaGFyQW5pbWF0aW9uLnNldEFuaW1hdGlvbigwLFwiZGlzY29tZm9ydFwiLHRydWUpO1xuICAgIH1cblxuICAgIGNoYXJGb29kKCkge1xuICAgICAgICBpZih0aGlzLmluZGV4RGF0YSA+IDIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21Gb29kKCk7XG4gICAgICAgICAgICB0aGlzLmluZGV4RGF0YSsrO1xuICAgICAgICAgICAgdGhpcy5jb3VudENvcnJlY3QgPSAwO1xuICAgICAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGluZGV4SXRlbUZvb2QgPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgbGV0IGR0ID0gdGhpcy5saXN0Q2hhck1vdmVbdGhpcy5pbmRleERhdGFdLmdldENvbXBvbmVudChDaGFyTW92ZSk7XG4gICAgICAgICAgICBkdC5mb29kLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0c3BmRm9vZFtpbmRleEl0ZW1Gb29kXTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=