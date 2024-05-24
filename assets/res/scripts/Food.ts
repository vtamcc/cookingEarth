// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Main from "./Main";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Food extends cc.Component {

    @property(cc.Sprite)
    spfFood: cc.Sprite = null;

    @property(cc.Node) 
    nCheck: cc.Node = null;

    id: number = 0;
    start () {

    }

    setId (id:number) {
        this.id = id;
        this.spfFood.spriteFrame = Main.instance.listspfFood[id];
    }

    onClickFood() {
        Main.instance.checkCorrect(this.id);
    }
    // update (dt) {}
}
