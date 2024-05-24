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
  
    onLoad () {
        Main.instance = this;
        this.randomFood();
        this.randomIndex();
        this.renderFood();
        this.charFood();
       
    }

    start () {

    }
    randomIndex() {
        for(let i = 0; i < this.listspfFood.length; i++) {
            this.foodIndices.push(i);
        }

        while(this.foodIndices.length < 25) {
            let randomIndex = Math.floor(Math.random() * this.listspfFood.length);
            this.foodIndices.push(randomIndex);
        }
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
        let indexFood = this.arrData;
        let dt = this.listCharMove[0].getComponent(CharMove);
        dt.food.spriteFrame = this.listspfFood[indexFood[0]];
    }
    
    checkCorrect(idFood) {
        console.log("Id = ", idFood);
    }
    // update (dt) {}
}
