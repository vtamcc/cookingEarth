"use strict";
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
        _this.progressBar = null;
        _this.id = 0;
        _this.nodeList = [];
        _this.duration = 0.15;
        _this.timeElapsed = 0;
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
    Food.prototype.updateProgress = function (dt) {
        if (this.timeElapsed < this.duration) {
            this.timeElapsed += dt;
            this.progressBar.progress = this.timeElapsed / this.duration;
        }
        else {
            this.progressBar.progress = 1;
            this.unschedule(this.updateProgress);
        }
    };
    Food.prototype.onClickFood = function () {
        Main_1.default.instance.listChoose.push(this);
        if (Main_1.default.instance.checkCorrect(this.id)) {
            this.schedule(this.updateProgress, 0);
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
        property(cc.ProgressBar)
    ], Food.prototype, "progressBar", void 0);
    Food = __decorate([
        ccclass
    ], Food);
    return Food;
}(cc.Component));
exports.default = Food;

cc._RF.pop();