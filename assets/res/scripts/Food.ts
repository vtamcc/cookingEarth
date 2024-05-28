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
    public static instance: Food = null;
    @property(cc.Sprite)
    spfFood: cc.Sprite = null;

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;
    id: number = 0;
    nodeList = [];
    duration: number = 0.15;
    timeElapsed: number = 0;
    start() {

    }

    setId(id: number) {
        this.id = id;
        this.spfFood.spriteFrame = Main.instance.listspfFood[id];
    }

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
    
    updateProgress(dt: number) {
        if (this.timeElapsed < this.duration) {
            this.timeElapsed += dt;
            this.progressBar.progress = this.timeElapsed / this.duration;
        } else {
            this.progressBar.progress = 1;
            this.unschedule(this.updateProgress);
        }
    }
    onClickFood() {
      
        Main.instance.listChoose.push(this);
        if (Main.instance.checkCorrect(this.id)) {
            this.schedule(this.updateProgress,0);
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

    }
    
    onLoad() {
    }
    
    // update (dt) {}
}
