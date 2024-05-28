
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
var Main_1 = require("./Main");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CharMove = /** @class */ (function (_super) {
    __extends(CharMove, _super);
    function CharMove() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.food = null;
        _this.idChar = 0;
        _this.charAnimation = null;
        _this.nOrder = null;
        // LIFE-CYCLE CALLBACKS:
        _this.nWin = null;
        _this.nLose = null;
        return _this;
    }
    // onLoad () {}
    CharMove.prototype.start = function () {
    };
    CharMove.prototype.update = function (dt) {
        if (!Main_1.default.instance.isMove)
            return;
        if (this.node.x > 720) {
            this.resetPos();
        }
        if (this.idChar == Main_1.default.instance.indexData) {
            if (this.node.x >= 0) {
                if (Main_1.default.instance.isMove) {
                    Main_1.default.instance.isMove = false;
                    this.charAnimation.setAnimation(0, "idle", true);
                    this.nOrder.active = true;
                    this.nWin.active = false;
                    this.nLose.active = false;
                }
            }
        }
        this.node.x += 5;
    };
    CharMove.prototype.resetPos = function () {
        this.node.x = -2160;
    };
    __decorate([
        property(cc.Sprite)
    ], CharMove.prototype, "food", void 0);
    __decorate([
        property()
    ], CharMove.prototype, "idChar", void 0);
    __decorate([
        property(sp.Skeleton)
    ], CharMove.prototype, "charAnimation", void 0);
    __decorate([
        property(cc.Node)
    ], CharMove.prototype, "nOrder", void 0);
    __decorate([
        property(cc.Node)
    ], CharMove.prototype, "nWin", void 0);
    __decorate([
        property(cc.Node)
    ], CharMove.prototype, "nLose", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9DaGFyTW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnREM7UUE3Q0csVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLG1CQUFhLEdBQWdCLElBQUksQ0FBQTtRQUdqQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLHdCQUF3QjtRQUV4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7O0lBK0IxQixDQUFDO0lBOUJHLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBRyxDQUFDLGNBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUNwQixPQUFPO1FBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1NBQ2xCO1FBQ0QsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLGNBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDO1lBQ3RDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixJQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUNyQixjQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBRTdCO2FBQ0o7U0FDSjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBQ3ZCLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQUd2QjtRQURDLFFBQVEsRUFBRTs0Q0FDUTtJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO21EQUNXO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBakJMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FnRDVCO0lBQUQsZUFBQztDQWhERCxBQWdEQyxDQWhEcUMsRUFBRSxDQUFDLFNBQVMsR0FnRGpEO2tCQWhEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhck1vdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmb29kOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KClcbiAgICBpZENoYXI6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgY2hhckFuaW1hdGlvbjogc3AuU2tlbGV0b24gPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuT3JkZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5XaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Mb3NlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYoIU1haW4uaW5zdGFuY2UuaXNNb3ZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiA3MjApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3MoKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaWRDaGFyID09IE1haW4uaW5zdGFuY2UuaW5kZXhEYXRhKXtcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS54ID49IDApIHtcbiAgICAgICAgICAgICAgICBpZihNYWluLmluc3RhbmNlLmlzTW92ZSkge1xuICAgICAgICAgICAgICAgICAgICBNYWluLmluc3RhbmNlLmlzTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsXCJpZGxlXCIsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubk9yZGVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubldpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uTG9zZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS54ICs9IDU7XG4gICAgfVxuICAgIHJlc2V0UG9zKCkge1xuICAgICAgICB0aGlzLm5vZGUueCA9IC0yMTYwXG4gICAgfVxufVxuIl19
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
        _this.nodeHand = null;
        _this.prfLose = null;
        _this.prfWin = null;
        // LIFE-CYCLE CALLBACKS:
        _this.foodIndices = [];
        _this.arrPos = [];
        _this.isMove = false;
        _this.indexData = -1;
        _this.idFood = -1;
        _this.countCorrect = 0;
        _this.countFalse = 0;
        _this.numberPlayer = 0;
        _this.indexPos = -1;
        _this.scaleDuration = 0.4;
        _this.minScale = 0.5;
        _this.maxScale = 0.7;
        _this.resizeAction = null;
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
        this.randomFood();
        this.renderFood();
        this.charFood();
        // console.log(this.listPos);
        // this.setPos();
        //this.getPos();
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
    Main.prototype.effectLose = function () {
        var lose = cc.instantiate(this.prfLose);
        this.node.addChild(lose);
    };
    Main.prototype.effectWin = function () {
        var win = cc.instantiate(this.prfWin);
        this.node.addChild(win);
    };
    Main.prototype.renderFood = function () {
        var _this = this;
        console.log(this.foodIndices);
        var cols = 5;
        var rows = 5;
        var cellSizeX = 145;
        var cellSizeY = 133;
        var food_1 = this.arrIdFood[0];
        var _loop_1 = function (i) {
            var item = cc.instantiate(this_1.pfFood).getComponent(Food_1.default);
            item.setId(this_1.foodIndices[i]);
            this_1.nodeListFood.addChild(item.node);
            var col = i % cols;
            var row = Math.floor(i / cols);
            item.node.x = col * cellSizeX;
            item.node.y = -row * cellSizeY;
            if (food_1 == this_1.foodIndices[i]) {
                var pos_1 = item.node.position;
                this_1.scheduleOnce(function () {
                    _this.nodeHand.active = true;
                    _this.nodeHand.setPosition(pos_1);
                    _this.scaleHand();
                }, 2);
                this_1.arrPos.push(item.node);
                console.log(item.node.position);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.foodIndices.length; i++) {
            _loop_1(i);
        }
    };
    Main.prototype.randomFood = function () {
        var _a;
        for (var i = this.arrIdFood.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [this.arrIdFood[j], this.arrIdFood[i]], this.arrIdFood[i] = _a[0], this.arrIdFood[j] = _a[1];
        }
    };
    Main.prototype.setPosHand = function () {
        if (this.arrIdFood[0]) {
            this.indexPos++;
            var posHand = this.arrPos[this.indexPos].position;
            this.nodeHand.setPosition(posHand);
            console.log("xzczxc", this.arrIdFood[0]);
        }
    };
    Main.prototype.checkCorrect = function (idFood) {
        var _this = this;
        console.log(idFood);
        // let test =  this.arrData.indexOf(idFood)
        // console.log(test);
        // if(test > -1 ) {
        //     this.countCorrect++;
        if (this.indexData == 0) {
            this.setPosHand();
        }
        else {
            console.log("tiep tuc");
        }
        if (this.arrIdFood[this.idFood] == idFood) {
            this.countCorrect++;
            return true;
        }
        else {
            console.log("thua ccmr");
            this.actionCharLost();
            this.scheduleOnce(function () {
                _this.effectLose();
            }, 0.8);
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
    // setIdPos() {
    //     let test = this.arrIdFood[0];
    //     for(let i = 0; i < this.foodIndices.length; i++) {
    //         if(test == this.foodIndices[i]) {
    //             return true;
    //         }
    //     }
    // }
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
            this.numberPlayer++;
            console.log("numberPlayer ", this.numberPlayer);
            this.actionCharWin();
            this.scheduleOnce(function () {
                _this.charFood();
            }, 1);
            this.nodeHand.destroy();
            this.destroyFood();
        }
        if (this.numberPlayer == 3) {
            console.log("winn");
            this.effectWin();
        }
    };
    Main.prototype.actionCharWin = function () {
        var dt = this.listCharMove[this.indexData].getComponent(CharMove_1.default);
        dt.food.node.active = false;
        dt.charAnimation.setAnimation(0, "happy", true);
        this.scheduleOnce(function () {
            dt.charAnimation.setAnimation(0, "happy_out", true);
        }, 1);
        dt.nWin.active = true;
        this.scheduleOnce(function () {
            dt.nOrder.active = false;
        }, 2);
    };
    Main.prototype.actionCharLost = function () {
        var dt = this.listCharMove[this.indexData].getComponent(CharMove_1.default);
        dt.charAnimation.setAnimation(0, "discomfort", true);
        dt.food.node.active = false;
        dt.nLose.active = true;
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
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "prfLose", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "prfWin", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLHVDQUFrQztBQUNsQywrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUEwU0M7UUF0U0csaUJBQVcsR0FBc0IsRUFBRSxDQUFDO1FBRXBDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFDekIsd0JBQXdCO1FBQ3hCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsWUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVqQixjQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZCxtQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixjQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsY0FBUSxHQUFHLEdBQUcsQ0FBQztRQUNQLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRXZDLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztR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LFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbkMsSUFBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRTFELENBQUM7O0lBdFNhLGFBQVEsR0FBUyxJQUFJLENBQUE7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2Q0FDVztJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNLO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDVztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDSztJQXBCUixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBMFN4QjtJQUFELFdBQUM7Q0ExU0QsQUEwU0MsQ0ExU2lDLEVBQUUsQ0FBQyxTQUFTLEdBMFM3QztrQkExU29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENoYXJNb3ZlIGZyb20gXCIuL0NoYXJNb3ZlXCI7XG5pbXBvcnQgRm9vZCBmcm9tIFwiLi9Gb29kXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBNYWluID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBsaXN0c3BmRm9vZDogY2MuU3ByaXRlRnJhbWUgW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHBmRm9vZDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpc3RDaGFyTW92ZTogY2MuTm9kZSBbXT0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUxpc3RGb29kOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVIYW5kOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmTG9zZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJmV2luOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIGZvb2RJbmRpY2VzID0gW107XG4gICAgYXJyUG9zID0gW107XG4gICAgaXNNb3ZlID0gZmFsc2U7XG4gICAgaW5kZXhEYXRhID0gLTE7XG4gICAgaWRGb29kID0gLTE7XG4gICAgY291bnRDb3JyZWN0ID0gMDtcbiAgICBjb3VudEZhbHNlID0gMDtcbiAgICBudW1iZXJQbGF5ZXIgPSAwO1xuICAgIGluZGV4O1xuICAgIGluZGV4UG9zID0gLTE7XG4gICAgc2NhbGVEdXJhdGlvbiA9IDAuNDtcbiAgICBtaW5TY2FsZSA9IDAuNTtcbiAgICBtYXhTY2FsZSA9IDAuNztcbiAgICBwcml2YXRlIHJlc2l6ZUFjdGlvbjogY2MuQWN0aW9uID0gbnVsbDtcbiAgXG4gICAgbGlzdENob29zZTogQXJyYXk8Rm9vZD4gPSBbXTtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBNYWluLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5yYW5kb21JbmRleCgpO1xuICAgICAgICB0aGlzLnNodWZmbGUoKTtcbiAgICAgICAgdGhpcy5yYW5kb21Gb29kKCk7XG4gICAgICAgIHRoaXMucmVuZGVyRm9vZCgpO1xuICAgICAgICB0aGlzLmNoYXJGb29kKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdFBvcyk7XG4gICAgICAgIC8vIHRoaXMuc2V0UG9zKCk7XG4gICAgICAgIC8vdGhpcy5nZXRQb3MoKTtcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJJZEZvb2QpO1xuICAgIH1cblxuICAgIGFycklkRm9vZCA9IFswLDEsMiwzLDQsNSw2LDddXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBzY2FsZUhhbmQoKSB7XG4gICAgICAgIGxldCBzY2FsZVVwID0gY2Muc2NhbGVUbyh0aGlzLnNjYWxlRHVyYXRpb24sdGhpcy5taW5TY2FsZSk7XG4gICAgICAgIGxldCBzY2FsZURvd24gPSBjYy5zY2FsZVRvKHRoaXMuc2NhbGVEdXJhdGlvbix0aGlzLm1heFNjYWxlKTtcbiAgICAgICAgdGhpcy5yZXNpemVBY3Rpb24gPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKHNjYWxlVXAsIHNjYWxlRG93bikpO1xuICAgICAgICB0aGlzLm5vZGVIYW5kLnJ1bkFjdGlvbih0aGlzLnJlc2l6ZUFjdGlvbik7XG4gICAgICAgIHRoaXMubm9kZUhhbmQuekluZGV4ID0gOTk7XG4gICAgfVxuICBcbiAgICByYW5kb21JbmRleCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYXJySWRGb29kLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2hpbGUodGhpcy5mb29kSW5kaWNlcy5sZW5ndGggPCAyNCkge1xuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmxpc3RzcGZGb29kLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuZm9vZEluZGljZXMucHVzaChyYW5kb21JbmRleCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2Zvb2RJbmRleCAnLHRoaXMuZm9vZEluZGljZXMpO1xuXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyYW5kb21JbmRleCk7XG4gICAgICAgIC8vICAgICB0aGlzLmZvb2RJbmRpY2VzLnB1c2gocmFuZG9tSW5kZXgpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgc2h1ZmZsZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZm9vZEluZGljZXMubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgICAgICAgW3RoaXMuZm9vZEluZGljZXNbaV0sIHRoaXMuZm9vZEluZGljZXNbal1dID0gW3RoaXMuZm9vZEluZGljZXNbal0sIHRoaXMuZm9vZEluZGljZXNbaV1dO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGVmZmVjdExvc2UoKSB7XG4gICAgICAgIGxldCBsb3NlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZMb3NlKVxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobG9zZSk7XG4gICAgfVxuXG4gICAgZWZmZWN0V2luKCkge1xuICAgICAgICBsZXQgd2luID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmZXaW4pXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh3aW4pO1xuICAgIH1cbiAgICByZW5kZXJGb29kKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvb2RJbmRpY2VzKTtcbiAgICAgICAgY29uc3QgY29scyA9IDU7XG4gICAgICAgIGNvbnN0IHJvd3MgPSA1O1xuICAgICAgICBjb25zdCBjZWxsU2l6ZVg9IDE0NTtcbiAgICAgICAgY29uc3QgY2VsbFNpemVZPSAxMzM7XG4gICAgICAgIGxldCBmb29kXzEgPSB0aGlzLmFycklkRm9vZFswXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZm9vZEluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZkZvb2QpLmdldENvbXBvbmVudChGb29kKVxuICAgICAgICAgICAgaXRlbS5zZXRJZCh0aGlzLmZvb2RJbmRpY2VzW2ldKTtcbiAgICAgICAgICAgIHRoaXMubm9kZUxpc3RGb29kLmFkZENoaWxkKGl0ZW0ubm9kZSk7XG4gICAgICAgICAgICBsZXQgY29sID0gaSAlIGNvbHM7IFxuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xuICAgIFxuICAgICAgICAgICAgaXRlbS5ub2RlLnggPSBjb2wgKiBjZWxsU2l6ZVg7XG4gICAgICAgICAgICBpdGVtLm5vZGUueSA9IC1yb3cgKiBjZWxsU2l6ZVk7IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihmb29kXzEgPT0gdGhpcy5mb29kSW5kaWNlc1tpXSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBpdGVtLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUhhbmQuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2FsZUhhbmQoKTtcbiAgICAgICAgICAgICAgICB9LDIpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJQb3MucHVzaChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ubm9kZS5wb3NpdGlvbikgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG5cblxuXG4gICAgcmFuZG9tRm9vZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuYXJySWRGb29kLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIFt0aGlzLmFycklkRm9vZFtpXSwgdGhpcy5hcnJJZEZvb2Rbal1dID0gW3RoaXMuYXJySWRGb29kW2pdLCB0aGlzLmFycklkRm9vZFtpXV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICBcbiAgICBzZXRQb3NIYW5kKCkge1xuICAgICAgICBpZih0aGlzLmFycklkRm9vZFswXSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleFBvcysrO1xuICAgICAgICAgICAgbGV0IHBvc0hhbmQgID0gdGhpcy5hcnJQb3NbdGhpcy5pbmRleFBvc10ucG9zaXRpb247XG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnNldFBvc2l0aW9uKHBvc0hhbmQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4emN6eGNcIix0aGlzLmFycklkRm9vZFswXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tDb3JyZWN0KGlkRm9vZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhpZEZvb2QpO1xuICAgICAgICAvLyBsZXQgdGVzdCA9ICB0aGlzLmFyckRhdGEuaW5kZXhPZihpZEZvb2QpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3QpO1xuICAgICAgICAvLyBpZih0ZXN0ID4gLTEgKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmNvdW50Q29ycmVjdCsrO1xuICAgICAgICBpZih0aGlzLmluZGV4RGF0YSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBvc0hhbmQoKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aWVwIHR1Y1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuYXJySWRGb29kW3RoaXMuaWRGb29kXSA9PSBpZEZvb2QpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRDb3JyZWN0Kys7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRodWEgY2NtclwiKVxuICAgICAgICAgICAgdGhpcy5hY3Rpb25DaGFyTG9zdCgpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0TG9zZSgpO1xuICAgICAgICAgICAgfSwwLjgpXG4gICAgICAgIH1cbiAgICBcbiAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgICAgIC8vIGlmKHRoaXMuY291bnRDb3JyZWN0ID09IDMpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwieW91IHdpblwiKTtcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuY2hhckZvb2QoKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY291bnQgY29ycmVjdCBcIiwgdGhpcy5jb3VudENvcnJlY3QpO1xuICAgICAgICBcbiAgICB9XG4gICBcbiAgICBkZXN0cm95Rm9vZCgpIHtcbiAgICAgICAgbGV0IGR0ID0gdGhpcy5saXN0Q2hhck1vdmVbdGhpcy5pZEZvb2RdLmdldENvbXBvbmVudChDaGFyTW92ZSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0Q2hvb3NlKTtcbiAgICAgICAgdGhpcy5saXN0Q2hvb3NlLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBpZihlKXtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihlLm5vZGUpXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjUse3Bvc2l0aW9uOiBjYy52MyhkdC5uT3JkZXIucG9zaXRpb24ueCsyNjAsMzAwLDApfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0sMC41KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgdGhpcy5saXN0Q2hvb3NlID0gW107XG5cbiAgICB9XG4gICAgXG4gICAgLy8gc2V0SWRQb3MoKSB7XG4gICAgLy8gICAgIGxldCB0ZXN0ID0gdGhpcy5hcnJJZEZvb2RbMF07XG4gICAgLy8gICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmZvb2RJbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBpZih0ZXN0ID09IHRoaXMuZm9vZEluZGljZXNbaV0pIHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIHNldFBvcygpIHtcbiAgICAvLyAgICB0aGlzLmxpc3RQb3MuZm9yRWFjaChlID0+IHtcbiAgICAvLyAgICAgICAgIGlmKGUpIHtcbiAgICAvLyAgICAgICAgICAgICBsZXQgcG9zID0gZS5ub2RlLnBvc2l0aW9uO1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvcyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgfSlcbiAgICAvLyB9XG4gICAgdXBkYXRlR2FtZSgpXG4gICAgeyAgIFxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5jb3VudENvcnJlY3QgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJQbGF5ZXIrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibnVtYmVyUGxheWVyIFwiLCB0aGlzLm51bWJlclBsYXllcik7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNoYXJXaW4oKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhckZvb2QoKTtcbiAgICAgICAgICAgIH0sMSk7XG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUZvb2QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMubnVtYmVyUGxheWVyID09IDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2lublwiKTtcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0V2luKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgIFxuICAgIGFjdGlvbkNoYXJXaW4oKSB7XG4gICAgICAgIGxldCBkdCA9IHRoaXMubGlzdENoYXJNb3ZlW3RoaXMuaW5kZXhEYXRhXS5nZXRDb21wb25lbnQoQ2hhck1vdmUpXG4gICAgICAgIFxuICAgICAgICBkdC5mb29kLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGR0LmNoYXJBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsIFwiaGFwcHlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSggKCkgPT4ge1xuICAgICAgICAgICAgICAgIGR0LmNoYXJBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsXCJoYXBweV9vdXRcIix0cnVlKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwxKVxuICAgICAgICBkdC5uV2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGR0Lm5PcmRlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwyKSBcbiAgICAgICBcbiAgICB9XG5cbiAgICBhY3Rpb25DaGFyTG9zdCgpIHtcbiAgICAgICAgbGV0IGR0ID0gdGhpcy5saXN0Q2hhck1vdmVbdGhpcy5pbmRleERhdGFdLmdldENvbXBvbmVudChDaGFyTW92ZSlcbiAgICAgICAgZHQuY2hhckFuaW1hdGlvbi5zZXRBbmltYXRpb24oMCxcImRpc2NvbWZvcnRcIix0cnVlKTtcbiAgICAgICAgZHQuZm9vZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBkdC5uTG9zZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNoYXJGb29kKCkge1xuICAgICAgICBcbiAgICAgICAgLy8gaWYodGhpcy5pbmRleERhdGEgPiAyKVxuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMucmFuZG9tRm9vZCgpO1xuICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIHRoaXMuY291bnRDb3JyZWN0ID0gMDtcbiAgICAgICAgLy8gICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIGxldCBpbmRleEl0ZW1Gb29kID0gdGhpcy5hcnJJZEZvb2RbMF07XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImlkIGZvb2QgXCIsIGluZGV4SXRlbUZvb2QpO1xuICAgICAgICAvLyAgICAgaWYodGhpcy5pbmRleERhdGEgPiAyKVxuICAgICAgICAvLyAgICAgICAgIHRoaXMuaW5kZXhEYXRhID0gMDtcbiAgICAgICAgLy8gICAgIGxldCBkdCA9IHRoaXMubGlzdENoYXJNb3ZlW3RoaXMuaW5kZXhEYXRhXS5nZXRDb21wb25lbnQoQ2hhck1vdmUpO1xuICAgICAgICAvLyAgICAgZHQuZm9vZC5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdHNwZkZvb2RbaW5kZXhJdGVtRm9vZF07XG5cbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLmluZGV4RGF0YSsrO1xuICAgICAgICB0aGlzLmlkRm9vZCsrO1xuICAgICAgICAvLyB0aGlzLnJhbmRvbUZvb2QoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleCBkYXRhID0gXCIsdGhpcy5pbmRleERhdGEpO1xuICAgICAgICB0aGlzLmNvdW50Q29ycmVjdCA9IDA7XG4gICAgICAgIHRoaXMuaXNNb3ZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGluZGV4SXRlbUZvb2QgPSB0aGlzLmFycklkRm9vZFt0aGlzLmlkRm9vZF07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWQgZm9vZCBcIiwgaW5kZXhJdGVtRm9vZCk7XG4gICAgICAgICAgICBpZih0aGlzLmluZGV4RGF0YSA+IDIpXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleERhdGEgPSAwO1xuICAgICAgICBsZXQgZHQgPSB0aGlzLmxpc3RDaGFyTW92ZVt0aGlzLmluZGV4RGF0YV0uZ2V0Q29tcG9uZW50KENoYXJNb3ZlKTtcbiAgICAgICAgZHQuZm9vZC5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdHNwZkZvb2RbaW5kZXhJdGVtRm9vZF07XG5cbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
