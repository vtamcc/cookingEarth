// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import CharMove from "./CharMove";
import Food from "./Food";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    public static instance: Main = null
    @property(cc.SpriteFrame)
    listspfFood: cc.SpriteFrame [] = [];
    @property(cc.Prefab)
    pfFood: cc.Prefab = null;

    @property(cc.Node)
    listCharMove: cc.Node []= [];
    @property(cc.Node)
    nodeListFood: cc.Node = null;

    
    // LIFE-CYCLE CALLBACKS:
    foodIndices = [];
    arrData = [];
    isMove = false;
    indexData = -1;
    countCorrect = 0;
    numberPlayer = 0;
    index;
    onLoad () {
        Main.instance = this;
        this.randomIndex();
        this.shuffle();
        this.renderFood();
        this.charFood();
    }

    start () {

    }
    randomIndex() {
        for(let i = 0; i < this.listspfFood.length; i++) {
            this.foodIndices.push(i);
            this.foodIndices.push(i);
            this.foodIndices.push(i);
        }
        // while(this.foodIndices.length < 24) {
        let randomIndex = Math.floor(Math.random() * this.listspfFood.length);
        this.foodIndices.push(randomIndex);

        console.log(this.foodIndices);

        //     console.log(randomIndex);
        //     this.foodIndices.push(randomIndex);
        // }
    }

    shuffle() {
        for (let i = this.foodIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.foodIndices[i], this.foodIndices[j]] = [this.foodIndices[j], this.foodIndices[i]];
        }

        console.log(this.foodIndices);
    }
 
    renderFood() {
        console.log(this.foodIndices);
        const cols = 5;
        const rows = 5;
        const cellSizeX= 150;
        const cellSizeY= 130;
        for(let i = 0; i < this.foodIndices.length; i++) {
            let item = cc.instantiate(this.pfFood).getComponent(Food)
            item.setId(this.foodIndices[i]);
            this.nodeListFood.addChild(item.node);
            let col = i % cols; 
            let row = Math.floor(i / cols);
    
            item.node.x = col * cellSizeX;
            item.node.y = -row * cellSizeY; 
           
        }
    }

    randomFood() {
        this.index = Math.floor(Math.random() * this.listspfFood.length)
        console.log("id random ",this.index);
    }
    
   
    
    checkCorrect(idFood) {
        console.log(idFood);
        // let test =  this.arrData.indexOf(idFood)
        // console.log(test);
        // if(test > -1 ) {
        //     this.countCorrect++;
        // }

    
        
        if(this.index == idFood) {
            this.countCorrect++;
            console.log("count correct", this.countCorrect);
            return true;
        }else {
            console.log("thua ccmr")
            this.actionCharLost();
        }

       

        return false

        // if(this.countCorrect == 3) {
        //     console.log("you win");
        //     // this.charFood();
        // }

        // console.log("count correct ", this.countCorrect);
        
    }
    

    updateGame()
    { 
        if(this.countCorrect == 3) {
            this.actionCharWin();
            this.scheduleOnce(()=> {
                this.charFood();
            },1);
           
            console.log("index data",this.indexData);
        }
    }

    actionCharWin() {
        let dt = this.listCharMove[this.indexData].getComponent(CharMove)
        dt.charAnimation.setAnimation(0, "happy", true);
            this.scheduleOnce( () => {
                dt.charAnimation.setAnimation(0,"happy_out",true);
            },1)
    }

    actionCharLost() {
        let dt = this.listCharMove[this.indexData].getComponent(CharMove)
        dt.charAnimation.setAnimation(0,"discomfort",true);
    }

    charFood() {
        if(this.indexData > 2)
            return;
        else {
            this.randomFood();
            this.indexData++;
            this.countCorrect = 0;
            this.isMove = true;
            let indexItemFood = this.index;
            let dt = this.listCharMove[this.indexData].getComponent(CharMove);
            dt.food.spriteFrame = this.listspfFood[indexItemFood];

        }
    }
    // update (dt) {}
}
