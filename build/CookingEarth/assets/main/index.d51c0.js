window.__require=function o(t,e,n){function i(c,s){if(!e[c]){if(!t[c]){var a=c.split("/");if(a=a[a.length-1],!t[a]){var d="function"==typeof __require&&__require;if(!s&&d)return d(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var h=e[c]={exports:{}};t[c][0].call(h.exports,function(o){return i(t[c][1][o]||o)},h,h.exports,o,t,e,n)}return e[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({CharMove:[function(o,t,e){"use strict";cc._RF.push(t,"319abqjiiJBW4YaHW55CgOZ","CharMove");var n,i=this&&this.__extends||(n=function(o,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])})(o,t)},function(o,t){function e(){this.constructor=o}n(o,t),o.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),r=this&&this.__decorate||function(o,t,e,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,t,e,n);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(c=(r<3?i(c):r>3?i(t,e,c):i(t,e))||c);return r>3&&c&&Object.defineProperty(t,e,c),c};Object.defineProperty(e,"__esModule",{value:!0});var c=o("./Main"),s=cc._decorator,a=s.ccclass,d=s.property,h=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.food=null,t.idChar=0,t.charAnimation=null,t.nOrder=null,t.nWin=null,t.nLose=null,t}return i(t,o),t.prototype.start=function(){},t.prototype.update=function(){c.default.instance.isMove&&(this.node.x>720&&this.resetPos(),this.idChar==c.default.instance.indexData&&(this.node.x>=0&&c.default.instance.isMove&&(c.default.instance.isMove=!1,this.charAnimation.setAnimation(0,"idle",!0),this.nOrder.active=!0,this.nWin.active=!1,this.nLose.active=!1),3==c.default.instance.numberPlayer&&this.scheduleOnce(function(){c.default.instance.isMove=!1},3)),this.node.x+=5)},t.prototype.resetPos=function(){this.node.x=-2160},r([d(cc.Sprite)],t.prototype,"food",void 0),r([d()],t.prototype,"idChar",void 0),r([d(sp.Skeleton)],t.prototype,"charAnimation",void 0),r([d(cc.Node)],t.prototype,"nOrder",void 0),r([d(cc.Node)],t.prototype,"nWin",void 0),r([d(cc.Node)],t.prototype,"nLose",void 0),r([a],t)}(cc.Component);e.default=h,cc._RF.pop()},{"./Main":"Main"}],Food:[function(o,t,e){"use strict";cc._RF.push(t,"8b82831jcJIPqCtgFZwcVSm","Food");var n,i=this&&this.__extends||(n=function(o,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])})(o,t)},function(o,t){function e(){this.constructor=o}n(o,t),o.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),r=this&&this.__decorate||function(o,t,e,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,t,e,n);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(c=(r<3?i(c):r>3?i(t,e,c):i(t,e))||c);return r>3&&c&&Object.defineProperty(t,e,c),c};Object.defineProperty(e,"__esModule",{value:!0});var c=o("./Main"),s=cc._decorator,a=s.ccclass,d=s.property,h=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.spfFood=null,t.nCheck=null,t.id=0,t.nodeList=[],t}return i(t,o),t.prototype.start=function(){},t.prototype.setId=function(o){this.id=o,this.spfFood.spriteFrame=c.default.instance.listspfFood[o]},t.prototype.onClickFood=function(){c.default.instance.listChoose.push(this),c.default.instance.checkCorrect(this.id)&&(this.nCheck.active=!0,c.default.instance.countCorrect),c.default.instance.updateGame()},t.prototype.onLoad=function(){},t.instance=null,r([d(cc.Sprite)],t.prototype,"spfFood",void 0),r([d(cc.Node)],t.prototype,"nCheck",void 0),r([a],t)}(cc.Component);e.default=h,cc._RF.pop()},{"./Main":"Main"}],Main:[function(o,t,e){"use strict";cc._RF.push(t,"dcfa73LqjxIRrS3jiIJmmWo","Main");var n,i=this&&this.__extends||(n=function(o,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,t){o.__proto__=t}||function(o,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])})(o,t)},function(o,t){function e(){this.constructor=o}n(o,t),o.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),r=this&&this.__decorate||function(o,t,e,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,t,e,n);else for(var s=o.length-1;s>=0;s--)(i=o[s])&&(c=(r<3?i(c):r>3?i(t,e,c):i(t,e))||c);return r>3&&c&&Object.defineProperty(t,e,c),c};Object.defineProperty(e,"__esModule",{value:!0});var c=o("./CharMove"),s=o("./Food"),a=cc._decorator,d=a.ccclass,h=a.property,p=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.listspfFood=[],t.pfFood=null,t.listCharMove=[],t.nodeListFood=null,t.nodeHand=null,t.prfLose=null,t.prfWin=null,t.foodIndices=[],t.arrPos=[],t.isMove=!1,t.indexData=-1,t.idFood=-1,t.countCorrect=0,t.countFalse=0,t.numberPlayer=0,t.indexPos=-1,t.scaleDuration=.4,t.minScale=.5,t.maxScale=.7,t.resizeAction=null,t.listChoose=[],t.arrIdFood=[0,1,2,3,4,5,6,7],t}var e;return i(t,o),e=t,t.prototype.onLoad=function(){e.instance=this,this.randomIndex(),this.shuffle(),this.randomFood(),this.renderFood(),this.charFood(),console.log(this.arrIdFood)},t.prototype.start=function(){},t.prototype.scaleHand=function(){var o=cc.scaleTo(this.scaleDuration,this.minScale),t=cc.scaleTo(this.scaleDuration,this.maxScale);this.resizeAction=cc.repeatForever(cc.sequence(o,t)),this.nodeHand.runAction(this.resizeAction),this.nodeHand.zIndex=99},t.prototype.randomIndex=function(){for(var o=0;o<this.arrIdFood.length;o++)this.foodIndices.push(o),this.foodIndices.push(o),this.foodIndices.push(o);var t=Math.floor(Math.random()*this.listspfFood.length);this.foodIndices.push(t),console.log("foodIndex ",this.foodIndices)},t.prototype.shuffle=function(){for(var o,t=this.foodIndices.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1));o=[this.foodIndices[e],this.foodIndices[t]],this.foodIndices[t]=o[0],this.foodIndices[e]=o[1]}},t.prototype.effectLose=function(){var o=cc.instantiate(this.prfLose);this.node.addChild(o)},t.prototype.effectWin=function(){var o=cc.instantiate(this.prfWin);this.node.addChild(o)},t.prototype.renderFood=function(){var o=this;console.log(this.foodIndices);for(var t=this.arrIdFood[0],e=function(e){var i=cc.instantiate(n.pfFood).getComponent(s.default);i.setId(n.foodIndices[e]),n.nodeListFood.addChild(i.node);var r=e%5,c=Math.floor(e/5);if(i.node.x=145*r,i.node.y=135*-c,t==n.foodIndices[e]){var a=i.node.position;n.scheduleOnce(function(){o.nodeHand.active=!0,o.nodeHand.setPosition(a),o.scaleHand()},2),n.arrPos.push(i.node),console.log(i.node.position)}},n=this,i=0;i<this.foodIndices.length;i++)e(i)},t.prototype.randomFood=function(){for(var o,t=this.arrIdFood.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1));o=[this.arrIdFood[e],this.arrIdFood[t]],this.arrIdFood[t]=o[0],this.arrIdFood[e]=o[1]}},t.prototype.setPosHand=function(){if(this.arrIdFood[0]){this.indexPos++;var o=this.arrPos[this.indexPos].position;this.nodeHand.setPosition(o),console.log("xzczxc",this.arrIdFood[0])}},t.prototype.checkCorrect=function(o){var t=this;return console.log(o),0==this.indexData?this.setPosHand():console.log("tiep tuc"),this.arrIdFood[this.idFood]==o?(this.countCorrect++,!0):(console.log("thua ccmr"),this.actionCharLost(),this.scheduleOnce(function(){t.effectLose()},.8),!1)},t.prototype.destroyFood=function(){var o=this,t=this.listCharMove[this.idFood].getComponent(c.default);console.log(this.listChoose),this.listChoose.forEach(function(e){e&&(cc.tween(e.node).to(.5,{position:cc.v3(t.nOrder.position.x+260,300,0)}).start(),o.scheduleOnce(function(){e.node.destroy()},.5))}),this.listChoose=[]},t.prototype.updateGame=function(){var o=this;3==this.countCorrect&&(this.numberPlayer++,console.log("numberPlayer ",this.numberPlayer),this.actionCharWin(),this.scheduleOnce(function(){o.charFood()},1),this.nodeHand.destroy(),this.destroyFood()),3==this.numberPlayer&&(console.log("winn"),this.scheduleOnce(function(){o.effectWin()},.8))},t.prototype.actionCharWin=function(){var o=this.listCharMove[this.indexData].getComponent(c.default);o.food.node.active=!1,o.charAnimation.setAnimation(0,"happy",!0),this.scheduleOnce(function(){o.charAnimation.setAnimation(0,"happy_out",!0)},1),o.nWin.active=!0,this.scheduleOnce(function(){o.nOrder.active=!1},1)},t.prototype.actionCharLost=function(){var o=this.listCharMove[this.indexData].getComponent(c.default);o.charAnimation.setAnimation(0,"discomfort",!0),o.food.node.active=!1,o.nLose.active=!0},t.prototype.charFood=function(){this.indexData++,this.idFood++,console.log("index data = ",this.indexData),this.countCorrect=0,this.isMove=!0;var o=this.arrIdFood[this.idFood];console.log("id food ",o),this.indexData>2&&(this.indexData=0),this.listCharMove[this.indexData].getComponent(c.default).food.spriteFrame=this.listspfFood[o]},t.instance=null,r([h(cc.SpriteFrame)],t.prototype,"listspfFood",void 0),r([h(cc.Prefab)],t.prototype,"pfFood",void 0),r([h(cc.Node)],t.prototype,"listCharMove",void 0),r([h(cc.Node)],t.prototype,"nodeListFood",void 0),r([h(cc.Node)],t.prototype,"nodeHand",void 0),r([h(cc.Prefab)],t.prototype,"prfLose",void 0),r([h(cc.Prefab)],t.prototype,"prfWin",void 0),e=r([d],t)}(cc.Component);e.default=p,cc._RF.pop()},{"./CharMove":"CharMove","./Food":"Food"}]},{},["CharMove","Food","Main"]);