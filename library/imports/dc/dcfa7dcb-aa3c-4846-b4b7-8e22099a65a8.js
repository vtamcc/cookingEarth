"use strict";
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