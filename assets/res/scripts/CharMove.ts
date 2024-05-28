// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Main from "./Main";

const {ccclass, property} = cc._decorator;

@ccclass
export default class CharMove extends cc.Component {

    @property(cc.Sprite)
    food: cc.Sprite = null;

    @property()
    idChar: number = 0;

    @property(sp.Skeleton)
    charAnimation: sp.Skeleton = null

    @property(cc.Node)
    nOrder: cc.Node = null;
    // LIFE-CYCLE CALLBACKS:
    @property(cc.Node)
    nWin: cc.Node = null;
    @property(cc.Node)
    nLose: cc.Node = null;
    // onLoad () {}

    start () {

    }

    update (dt) {
        if(!Main.instance.isMove)
            return;
        if (this.node.x > 720) {
            this.resetPos()
        }
        if(this.idChar == Main.instance.indexData){
            if(this.node.x >= 0) {
                if(Main.instance.isMove) {
                    Main.instance.isMove = false;
                    this.charAnimation.setAnimation(0,"idle",true);
                    this.nOrder.active = true;
                    this.nWin.active = false;
                    this.nLose.active = false;

                }

                
            }

            if(Main.instance.numberPlayer == 3) {
                this.scheduleOnce(() => {
                    Main.instance.isMove = false;
                    return;
                },3)
              
            }
        }

        this.node.x += 5;
    }
    resetPos() {
        this.node.x = -2160
    }
}
