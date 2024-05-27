// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import Main from "./Main";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Food extends cc.Component {

    @property(cc.Sprite)
    spfFood: cc.Sprite = null;

    @property(cc.Node)
    nCheck: cc.Node = null;
    id: number = 0;
    nodeList = [];
    start() {

    }

    setId(id: number) {
        this.id = id;
        this.spfFood.spriteFrame = Main.instance.listspfFood[id];
    }

    posFood() {
        if(Main.instance.setIdPos()) {
            Main.instance.listPos.push(this);
        }
        
    }
    
    onClickFood() {
        if (Main.instance.checkCorrect(this.id)) {
            this.nCheck.active = true;
            Main.instance.listChoose.push(this);
            if(Main.instance.countCorrect == 3) {
               
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
        Main.instance.updateGame();
        // Main.instance.checkCorrect(this.id);
        // if (Main.instance.countCorrect > 0 && Main.instance.index == this.id) {
        //     this.node.destroy();
        // }

        // if(Main.instance.countCorrect > 3  && Main.instance.index == this.id) {
        //     Main.instance.countCorrect = 0;
        // }

    }

    
    // update (dt) {}
}
