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
    onLoad () {
        Main.instance = this;
        this.randomFood();
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
        let index = Math.floor(Math.random() * this.listspfFood.length)
        this.arrData.push(index);
        console.log(this.arrData);
    }
    
    charFood() {
        this.indexData++;
        this.isMove = true;
        let indexFood = this.arrData;
        let dt = this.listCharMove[0].getComponent(CharMove);
        dt.food.spriteFrame = this.listspfFood[indexFood[0]];
    }
    
    checkCorrect(idFood) {
       
        let test =  this.arrData.indexOf(idFood)
        console.log(test);
        if(test > -1 ) {
            this.countCorrect++;
            
        }

        if(this.countCorrect == 3) {
            console.log("you win");
        }
        console.log(this.countCorrect);
        
    }
    // update (dt) {}
}
