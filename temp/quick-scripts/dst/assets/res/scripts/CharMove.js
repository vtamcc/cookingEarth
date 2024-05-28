
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
            if (Main_1.default.instance.numberPlayer == 3) {
                this.scheduleOnce(function () {
                    Main_1.default.instance.isMove = false;
                    return;
                }, 3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9DaGFyTW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEwREM7UUF2REcsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLG1CQUFhLEdBQWdCLElBQUksQ0FBQTtRQUdqQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLHdCQUF3QjtRQUV4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFdBQUssR0FBWSxJQUFJLENBQUM7O0lBeUMxQixDQUFDO0lBeENHLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBRyxDQUFDLGNBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUNwQixPQUFPO1FBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1NBQ2xCO1FBQ0QsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLGNBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDO1lBQ3RDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixJQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUNyQixjQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBRTdCO2FBR0o7WUFFRCxJQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDZCxjQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7b0JBQzdCLE9BQU87Z0JBQ1gsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO2FBRVA7U0FDSjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBQ3ZCLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDRztJQUd2QjtRQURDLFFBQVEsRUFBRTs0Q0FDUTtJQUduQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO21EQUNXO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNJO0lBakJMLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EwRDVCO0lBQUQsZUFBQztDQTFERCxBQTBEQyxDQTFEcUMsRUFBRSxDQUFDLFNBQVMsR0EwRGpEO2tCQTFEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhck1vdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmb29kOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KClcbiAgICBpZENoYXI6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgY2hhckFuaW1hdGlvbjogc3AuU2tlbGV0b24gPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuT3JkZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5XaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5Mb3NlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYoIU1haW4uaW5zdGFuY2UuaXNNb3ZlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiA3MjApIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRQb3MoKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaWRDaGFyID09IE1haW4uaW5zdGFuY2UuaW5kZXhEYXRhKXtcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS54ID49IDApIHtcbiAgICAgICAgICAgICAgICBpZihNYWluLmluc3RhbmNlLmlzTW92ZSkge1xuICAgICAgICAgICAgICAgICAgICBNYWluLmluc3RhbmNlLmlzTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJBbmltYXRpb24uc2V0QW5pbWF0aW9uKDAsXCJpZGxlXCIsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubk9yZGVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubldpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uTG9zZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihNYWluLmluc3RhbmNlLm51bWJlclBsYXllciA9PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBNYWluLmluc3RhbmNlLmlzTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSwzKVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS54ICs9IDU7XG4gICAgfVxuICAgIHJlc2V0UG9zKCkge1xuICAgICAgICB0aGlzLm5vZGUueCA9IC0yMTYwXG4gICAgfVxufVxuIl19