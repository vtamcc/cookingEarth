
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9yZXMvc2NyaXB0cy9Gb29kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTBGQztRQXZGRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQyxRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBQ2YsY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxDQUFDLENBQUM7O1FBK0V4QixpQkFBaUI7SUFDckIsQ0FBQztJQS9FRyxvQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELG9CQUFLLEdBQUwsVUFBTSxFQUFVO1FBQ1osSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsY0FBYztJQUNkLDhDQUE4QztJQUM5QyxrRUFBa0U7SUFDbEUsdURBQXVEO0lBQ3ZELDZDQUE2QztJQUM3QyxZQUFZO0lBQ1osUUFBUTtJQUVSLElBQUk7SUFFSixjQUFjO0lBQ2QscURBQXFEO0lBQ3JELCtDQUErQztJQUMvQyxtREFBbUQ7SUFDbkQsT0FBTztJQUNQLElBQUk7SUFFSiw2QkFBYyxHQUFkLFVBQWUsRUFBVTtRQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDaEU7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFDRCwwQkFBVyxHQUFYO1FBRUksY0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLElBQUksY0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTthQUVuQztZQUNELDBEQUEwRDtZQUMxRCx5Q0FBeUM7WUFDekMsd0NBQXdDO1lBQ3hDLHdDQUF3QztZQUN4QyxJQUFJO1lBRUosMENBQTBDO1lBQzFDLHFDQUFxQztZQUNyQyw2Q0FBNkM7WUFDN0MsbUJBQW1CO1lBQ25CLHFEQUFxRDtZQUNyRCxJQUFJO1NBR1A7UUFFRCxjQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLG1EQUFtRDtRQUNuRCx1Q0FBdUM7UUFDdkMsMEVBQTBFO1FBQzFFLDJCQUEyQjtRQUMzQixJQUFJO1FBRUosMEVBQTBFO1FBQzFFLHNDQUFzQztRQUN0QyxJQUFJO0lBRVIsQ0FBQztJQUVELHFCQUFNLEdBQU47SUFDQSxDQUFDO0lBdEZhLGFBQVEsR0FBUyxJQUFJLENBQUM7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5Q0FDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzZDQUNVO0lBTmxCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EwRnhCO0lBQUQsV0FBQztDQTFGRCxBQTBGQyxDQTFGaUMsRUFBRSxDQUFDLFNBQVMsR0EwRjdDO2tCQTFGb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb29kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBGb29kID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwZkZvb2Q6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJvZ3Jlc3NCYXIpXG4gICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcbiAgICBpZDogbnVtYmVyID0gMDtcbiAgICBub2RlTGlzdCA9IFtdO1xuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAwLjE1O1xuICAgIHRpbWVFbGFwc2VkOiBudW1iZXIgPSAwO1xuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgc2V0SWQoaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc3BmRm9vZC5zcHJpdGVGcmFtZSA9IE1haW4uaW5zdGFuY2UubGlzdHNwZkZvb2RbaWRdO1xuICAgIH1cblxuICAgIC8vIHBvc0Zvb2QoKSB7XG4gICAgLy8gICAgIGxldCBmb29kXzEgPSBNYWluLmluc3RhbmNlLmFycklkRm9vZFswXVxuICAgIC8vICAgICBmb3IobGV0IGkgPSAwOyBpIDwgTWFpbi5pbnN0YW5jZS5mb29kSW5kaWNlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgaWYoTWFpbi5pbnN0YW5jZS5mb29kSW5kaWNlc1tpXSA9PSBmb29kXzEpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm5vZGVMaXN0LnB1c2godGhpcy5ub2RlKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgICAgICBcbiAgICAvLyB9XG5cbiAgICAvLyBoYW5kUG9zKCkge1xuICAgIC8vICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlTGlzdFtpXS5wb3NpdGlvbjtcbiAgICAvLyAgICAgICAgIE1haW4uaW5zdGFuY2Uubm9kZUhhbmQuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAvLyAgICB9XG4gICAgLy8gfVxuICAgIFxuICAgIHVwZGF0ZVByb2dyZXNzKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZUVsYXBzZWQgPCB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVFbGFwc2VkICs9IGR0O1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHRoaXMudGltZUVsYXBzZWQgLyB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVQcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DbGlja0Zvb2QoKSB7XG4gICAgICBcbiAgICAgICAgTWFpbi5pbnN0YW5jZS5saXN0Q2hvb3NlLnB1c2godGhpcyk7XG4gICAgICAgIGlmIChNYWluLmluc3RhbmNlLmNoZWNrQ29ycmVjdCh0aGlzLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVByb2dyZXNzLDApO1xuICAgICAgICAgICAgaWYoTWFpbi5pbnN0YW5jZS5jb3VudENvcnJlY3QgPT0gMykge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTm9kZSBsaXN0IFwiLHRoaXMubm9kZUxpc3QpXG4gICAgICAgICAgICAvLyBpZihNYWluLmluc3RhbmNlLmNvdW50Q29ycmVjdCA9PSAzKSB7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zcGZGb29kLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIGlmKE1haW4uaW5zdGFuY2UuYXJyRGF0YS5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgLy8gICAgIC8vIGNjLnR3ZWVuKHRoaXMuc3BmRm9vZC5ub2RlKVxuICAgICAgICAgICAgLy8gICAgIC8vIC50bygyLHtwb3NpdGlvbjogY2MudjMoMTAwLDEwMCwwKX0pXG4gICAgICAgICAgICAvLyAgICAgLy8gLnN0YXJ0KCk7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJhcnIgcG9zIFwiLCBNYWluLmluc3RhbmNlLmFyckRhdGEpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgTWFpbi5pbnN0YW5jZS51cGRhdGVHYW1lKCk7XG4gICAgICAgIC8vIHRoaXMucG9zRm9vZCgpXG4gICAgICAgIC8vIHRoaXMuaGFuZFBvcygpO1xuICAgICAgICAvLyB0aGlzLnBvc0Zvb2QoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxpc3QgcG9zIFwiLCBNYWluLmluc3RhbmNlLmxpc3RQb3MpO1xuICAgICAgICAvLyBNYWluLmluc3RhbmNlLmNoZWNrQ29ycmVjdCh0aGlzLmlkKTtcbiAgICAgICAgLy8gaWYgKE1haW4uaW5zdGFuY2UuY291bnRDb3JyZWN0ID4gMCAmJiBNYWluLmluc3RhbmNlLmluZGV4ID09IHRoaXMuaWQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBpZihNYWluLmluc3RhbmNlLmNvdW50Q29ycmVjdCA+IDMgICYmIE1haW4uaW5zdGFuY2UuaW5kZXggPT0gdGhpcy5pZCkge1xuICAgICAgICAvLyAgICAgTWFpbi5pbnN0YW5jZS5jb3VudENvcnJlY3QgPSAwO1xuICAgICAgICAvLyB9XG5cbiAgICB9XG4gICAgXG4gICAgb25Mb2FkKCkge1xuICAgIH1cbiAgICBcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19