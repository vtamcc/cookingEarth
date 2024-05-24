
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
        return _this;
        // update (dt) {}
    }
    Main_1 = Main;
    Main.prototype.onLoad = function () {
        Main_1.instance = this;
        this.randomFood();
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
        var index = Math.floor(Math.random() * this.listspfFood.length);
        this.arrData.push(index);
        console.log(this.arrData);
    };
    Main.prototype.charFood = function () {
        this.indexData++;
        this.isMove = true;
        var indexFood = this.arrData;
        var dt = this.listCharMove[0].getComponent(CharMove_1.default);
        dt.food.spriteFrame = this.listspfFood[indexFood[0]];
    };
    Main.prototype.checkCorrect = function (idFood) {
        var test = this.arrData.indexOf(idFood);
        console.log(test);
        if (test > -1) {
            this.countCorrect++;
            this.node.destroy();
        }
        if (this.countCorrect == 3) {
            console.log("you win");
        }
        console.log(this.countCorrect);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHVDQUFrQztBQUNsQywrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUE0R0M7UUF4R0csaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0Isd0JBQXdCO1FBQ3hCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2Ysa0JBQVksR0FBRyxDQUFDLENBQUM7O1FBd0ZqQixpQkFBaUI7SUFDckIsQ0FBQzthQTVHb0IsSUFBSTtJQW9CckIscUJBQU0sR0FBTjtRQUNJLE1BQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRUQsb0JBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwwQkFBVyxHQUFYO1FBQ0ksS0FBSSxJQUFJLENBQUMsR0FBRyxD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RUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDSztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1c7SUFYWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBNEd4QjtJQUFELFdBQUM7Q0E1R0QsQUE0R0MsQ0E1R2lDLEVBQUUsQ0FBQyxTQUFTLEdBNEc3QztrQkE1R29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENoYXJNb3ZlIGZyb20gXCIuL0NoYXJNb3ZlXCI7XG5pbXBvcnQgRm9vZCBmcm9tIFwiLi9Gb29kXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBNYWluID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0c3BmRm9vZDogY2MuU3ByaXRlRnJhbWUgW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBmRm9vZDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDaGFyTW92ZTogY2MuTm9kZSBbXT0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUxpc3RGb29kOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIFxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGZvb2RJbmRpY2VzID0gW107XG4gICAgYXJyRGF0YSA9IFtdO1xuICAgIGlzTW92ZSA9IGZhbHNlO1xuICAgIGluZGV4RGF0YSA9IC0xO1xuICAgIGNvdW50Q29ycmVjdCA9IDA7XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgTWFpbi5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMucmFuZG9tRm9vZCgpO1xuICAgICAgICB0aGlzLnJhbmRvbUluZGV4KCk7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSgpO1xuICAgICAgICB0aGlzLnJlbmRlckZvb2QoKTtcbiAgICAgICAgdGhpcy5jaGFyRm9vZCgpO1xuICAgICAgIFxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cbiAgICByYW5kb21JbmRleCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdHNwZkZvb2QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3aGlsZSh0aGlzLmZvb2RJbmRpY2VzLmxlbmd0aCA8IDI0KSB7XG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubGlzdHNwZkZvb2QubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5mb29kSW5kaWNlcy5wdXNoKHJhbmRvbUluZGV4KTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvb2RJbmRpY2VzKTtcblxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmFuZG9tSW5kZXgpO1xuICAgICAgICAvLyAgICAgdGhpcy5mb29kSW5kaWNlcy5wdXNoKHJhbmRvbUluZGV4KTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHNodWZmbGUoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmZvb2RJbmRpY2VzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFt0aGlzLmZvb2RJbmRpY2VzW2ldLCB0aGlzLmZvb2RJbmRpY2VzW2pdXSA9IFt0aGlzLmZvb2RJbmRpY2VzW2pdLCB0aGlzLmZvb2RJbmRpY2VzW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9vZEluZGljZXMpO1xuICAgIH1cbiBcbiAgICByZW5kZXJGb29kKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvb2RJbmRpY2VzKTtcbiAgICAgICAgY29uc3QgY29scyA9IDU7XG4gICAgICAgIGNvbnN0IHJvd3MgPSA1O1xuICAgICAgICBjb25zdCBjZWxsU2l6ZVg9IDE1MDtcbiAgICAgICAgY29uc3QgY2VsbFNpemVZPSAxMzA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmZvb2RJbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGZGb29kKS5nZXRDb21wb25lbnQoRm9vZClcbiAgICAgICAgICAgIGl0ZW0uc2V0SWQodGhpcy5mb29kSW5kaWNlc1tpXSk7XG4gICAgICAgICAgICB0aGlzLm5vZGVMaXN0Rm9vZC5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGkgJSBjb2xzOyBcbiAgICAgICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2xzKTtcbiAgICBcbiAgICAgICAgICAgIGl0ZW0ubm9kZS54ID0gY29sICogY2VsbFNpemVYO1xuICAgICAgICAgICAgaXRlbS5ub2RlLnkgPSAtcm93ICogY2VsbFNpemVZOyBcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByYW5kb21Gb29kKCkge1xuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RzcGZGb29kLmxlbmd0aClcbiAgICAgICAgdGhpcy5hcnJEYXRhLnB1c2goaW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFyckRhdGEpO1xuICAgIH1cbiAgICBcbiAgICBjaGFyRm9vZCgpIHtcbiAgICAgICAgdGhpcy5pbmRleERhdGErKztcbiAgICAgICAgdGhpcy5pc01vdmUgPSB0cnVlO1xuICAgICAgICBsZXQgaW5kZXhGb29kID0gdGhpcy5hcnJEYXRhO1xuICAgICAgICBsZXQgZHQgPSB0aGlzLmxpc3RDaGFyTW92ZVswXS5nZXRDb21wb25lbnQoQ2hhck1vdmUpO1xuICAgICAgICBkdC5mb29kLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0c3BmRm9vZFtpbmRleEZvb2RbMF1dO1xuICAgIH1cbiAgICBcbiAgICBjaGVja0NvcnJlY3QoaWRGb29kKSB7XG4gICAgICAgXG4gICAgICAgIGxldCB0ZXN0ID0gIHRoaXMuYXJyRGF0YS5pbmRleE9mKGlkRm9vZClcbiAgICAgICAgY29uc29sZS5sb2codGVzdCk7XG4gICAgICAgIGlmKHRlc3QgPiAtMSApIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRDb3JyZWN0Kys7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5jb3VudENvcnJlY3QgPT0gMykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ5b3Ugd2luXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY291bnRDb3JyZWN0KTtcbiAgICAgICAgXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=