
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/res/scripts/CharMove');
require('./assets/res/scripts/Food');
require('./assets/res/scripts/Main');

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
//------QC-SOURCE-SPLIT------

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
        return _this;
        // update (dt) {}
    }
    Main_1 = Main;
    Main.prototype.onLoad = function () {
        Main_1.instance = this;
        this.randomFood();
        this.randomIndex();
        this.renderFood();
        this.charFood();
    };
    Main.prototype.start = function () {
    };
    Main.prototype.randomIndex = function () {
        for (var i = 0; i < this.listspfFood.length; i++) {
            this.foodIndices.push(i);
        }
        while (this.foodIndices.length < 25) {
            var randomIndex = Math.floor(Math.random() * this.listspfFood.length);
            this.foodIndices.push(randomIndex);
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
        var index = Math.floor(Math.random() * this.listspfFood.length);
        this.arrData.push(index);
        console.log(this.arrData);
    };
    Main.prototype.charFood = function () {
        var indexFood = this.arrData;
        var dt = this.listCharMove[0].getComponent(CharMove_1.default);
        dt.food.spriteFrame = this.listspfFood[indexFood[0]];
    };
    Main.prototype.checkCorrect = function (idFood) {
        console.log("Id = ", idFood);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHVDQUFrQztBQUNsQywrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUEwRUM7UUF0RUcsaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isd0JBQXdCO1FBQ3hCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxFQUFFLENBQUM7O1FBMkRiLGlCQUFpQjtJQUNyQixDQUFDO2FBMUVvQixJQUFJO0lBZ0JyQixxQkFBTSxHQUFOO1FBQ0ksTUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFRCxvQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDBCQUFXLEdBQVg7UUFDSSxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENB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RSxDQUFDLFNBQVMsR0EwRTdDO2tCQTFFb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQ2hhck1vdmUgZnJvbSBcIi4vQ2hhck1vdmVcIjtcbmltcG9ydCBGb29kIGZyb20gXCIuL0Zvb2RcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IE1haW4gPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGxpc3RzcGZGb29kOiBjYy5TcHJpdGVGcmFtZSBbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcGZGb29kOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGlzdENoYXJNb3ZlOiBjYy5Ob2RlIFtdPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlTGlzdEZvb2Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGZvb2RJbmRpY2VzID0gW107XG4gICAgYXJyRGF0YSA9IFtdO1xuICBcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBNYWluLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5yYW5kb21Gb29kKCk7XG4gICAgICAgIHRoaXMucmFuZG9tSW5kZXgoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJGb29kKCk7XG4gICAgICAgIHRoaXMuY2hhckZvb2QoKTtcbiAgICAgICBcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG4gICAgcmFuZG9tSW5kZXgoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RzcGZGb29kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSh0aGlzLmZvb2RJbmRpY2VzLmxlbmd0aCA8IDI1KSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RzcGZGb29kLmxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyRm9vZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb29kSW5kaWNlcyk7XG4gICAgICAgIGNvbnN0IGNvbHMgPSA1O1xuICAgICAgICBjb25zdCByb3dzID0gNTtcbiAgICAgICAgY29uc3QgY2VsbFNpemVYPSAxNTA7XG4gICAgICAgIGNvbnN0IGNlbGxTaXplWT0gMTMwO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5mb29kSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBmRm9vZCkuZ2V0Q29tcG9uZW50KEZvb2QpXG4gICAgICAgICAgICBpdGVtLnNldElkKHRoaXMuZm9vZEluZGljZXNbaV0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlTGlzdEZvb2QuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBpICUgY29sczsgXG4gICAgICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XG4gICAgXG4gICAgICAgICAgICBpdGVtLm5vZGUueCA9IGNvbCAqIGNlbGxTaXplWDtcbiAgICAgICAgICAgIGl0ZW0ubm9kZS55ID0gLXJvdyAqIGNlbGxTaXplWTsgXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmFuZG9tRm9vZCgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5saXN0c3BmRm9vZC5sZW5ndGgpXG4gICAgICAgIHRoaXMuYXJyRGF0YS5wdXNoKGluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJEYXRhKTtcbiAgICB9XG4gICAgXG4gICAgY2hhckZvb2QoKSB7XG4gICAgICAgIGxldCBpbmRleEZvb2QgPSB0aGlzLmFyckRhdGE7XG4gICAgICAgIGxldCBkdCA9IHRoaXMubGlzdENoYXJNb3ZlWzBdLmdldENvbXBvbmVudChDaGFyTW92ZSk7XG4gICAgICAgIGR0LmZvb2Quc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RzcGZGb29kW2luZGV4Rm9vZFswXV07XG4gICAgfVxuICAgIFxuICAgIGNoZWNrQ29ycmVjdChpZEZvb2QpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJZCA9IFwiLCBpZEZvb2QpO1xuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
        return _this;
        // update (dt) {}
    }
    Food.prototype.start = function () {
    };
    Food.prototype.setId = function (id) {
        this.id = id;
        this.spfFood.spriteFrame = Main_1.default.instance.listspfFood[id];
    };
    Food.prototype.onClickFood = function () {
        Main_1.default.instance.checkCorrect(this.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9Gb29kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXNCQztRQW5CRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsUUFBRSxHQUFXLENBQUMsQ0FBQzs7UUFhZixpQkFBaUI7SUFDckIsQ0FBQztJQWJHLG9CQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsb0JBQUssR0FBTCxVQUFPLEVBQVM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksY0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFqQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNLO0lBTk4sSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXNCeEI7SUFBRCxXQUFDO0NBdEJELEFBc0JDLENBdEJpQyxFQUFFLENBQUMsU0FBUyxHQXNCN0M7a0JBdEJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3BmRm9vZDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBcbiAgICBuQ2hlY2s6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaWQ6IG51bWJlciA9IDA7XG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgc2V0SWQgKGlkOm51bWJlcikge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc3BmRm9vZC5zcHJpdGVGcmFtZSA9IE1haW4uaW5zdGFuY2UubGlzdHNwZkZvb2RbaWRdO1xuICAgIH1cblxuICAgIG9uQ2xpY2tGb29kKCkge1xuICAgICAgICBNYWluLmluc3RhbmNlLmNoZWNrQ29ycmVjdCh0aGlzLmlkKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/res/scripts/CharMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '319abqjiiJBW4YaHW55CgOZ', 'CharMove');
// res/scripts/CharMove.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CharMove = /** @class */ (function (_super) {
    __extends(CharMove, _super);
    function CharMove() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.food = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    CharMove.prototype.start = function () {
    };
    __decorate([
        property(cc.Sprite)
    ], CharMove.prototype, "food", void 0);
    CharMove = __decorate([
        ccclass
    ], CharMove);
    return CharMove;
}(cc.Component));
exports.default = CharMove;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9DaGFyTW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWNDO1FBWEcsVUFBSSxHQUFjLElBQUksQ0FBQzs7UUFVdkIsaUJBQWlCO0lBQ3JCLENBQUM7SUFURyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBUkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQUhOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FjNUI7SUFBRCxlQUFDO0NBZEQsQUFjQyxDQWRxQyxFQUFFLENBQUMsU0FBUyxHQWNqRDtrQkFkb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJNb3ZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgZm9vZDogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG4gICAgXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
