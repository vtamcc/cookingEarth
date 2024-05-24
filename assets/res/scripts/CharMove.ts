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

    // onLoad () {}

    start () {

    }

    update (dt) {
        if(!Main.instance.isMove)
            return;
        if(this.idChar == Main.instance.indexData){
            if(this.node.x >= 0) {
                if(Main.instance.isMove) {
                    Main.instance.isMove = false;
                    this.charAnimation.setAnimation(0,"idle",true);
                    this.nOrder.active = true;
                }
            }
        }
        this.node.x += 5;
    }
}
