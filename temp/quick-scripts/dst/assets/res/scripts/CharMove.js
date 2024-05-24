
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
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    CharMove.prototype.start = function () {
    };
    CharMove.prototype.update = function (dt) {
        if (!Main_1.default.instance.isMove)
            return;
        if (this.idChar == Main_1.default.instance.indexData) {
            if (this.node.x >= 0) {
                if (Main_1.default.instance.isMove) {
                    Main_1.default.instance.isMove = false;
                    this.charAnimation.setAnimation(0, "idle", true);
                    this.nOrder.active = true;
                }
            }
        }
        this.node.x += 5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9DaGFyTW92ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLDRFQUE0RTtBQUM1RSxtQkFBbUI7QUFDbkIsc0ZBQXNGO0FBQ3RGLDhCQUE4QjtBQUM5QixzRkFBc0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RiwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFtQ0M7UUFoQ0csVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLG1CQUFhLEdBQWdCLElBQUksQ0FBQTtRQUdqQyxZQUFNLEdBQVksSUFBSSxDQUFDOztJQXVCM0IsQ0FBQztJQXRCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLENBQUMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ3BCLE9BQU87UUFDWCxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksY0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUM7WUFDdEMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLElBQUcsY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQ3JCLGNBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUM3QjthQUNKO1NBQ0o7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQS9CRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBR3ZCO1FBREMsUUFBUSxFQUFFOzRDQUNRO0lBR25CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7bURBQ1c7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQVpOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtQzVCO0lBQUQsZUFBQztDQW5DRCxBQW1DQyxDQW5DcUMsRUFBRSxDQUFDLFNBQVMsR0FtQ2pEO2tCQW5Db0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhck1vdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBmb29kOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KClcbiAgICBpZENoYXI6IG51bWJlciA9IDA7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgY2hhckFuaW1hdGlvbjogc3AuU2tlbGV0b24gPSBudWxsXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBuT3JkZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmKCFNYWluLmluc3RhbmNlLmlzTW92ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYodGhpcy5pZENoYXIgPT0gTWFpbi5pbnN0YW5jZS5pbmRleERhdGEpe1xuICAgICAgICAgICAgaWYodGhpcy5ub2RlLnggPj0gMCkge1xuICAgICAgICAgICAgICAgIGlmKE1haW4uaW5zdGFuY2UuaXNNb3ZlKSB7XG4gICAgICAgICAgICAgICAgICAgIE1haW4uaW5zdGFuY2UuaXNNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhckFuaW1hdGlvbi5zZXRBbmltYXRpb24oMCxcImlkbGVcIix0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uT3JkZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnggKz0gNTtcbiAgICB9XG59XG4iXX0=