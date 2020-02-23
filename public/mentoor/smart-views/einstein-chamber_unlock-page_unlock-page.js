_Component({
                selector: 'unlock-page',
                c: 'EinsteinChamberUnlocker', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['requiredAnswers','user','unlock','disabledButton'],
                children: {ccsE07Riv:'gold-icon',cU8Rm9fla:'layout'},
                render: function (component) {
                    let cmpDY63 = this._lc('cU8Rm9fla', {parent:component,content:(layout) => {let ellFS4Q = eo('div');
let elffyyU = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let el_LX8t = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
ec('div');
let el5DRWE = eo('h1',null,null,`class`,`m-v-1`);
text(`What is Einstein Chamber?`);
ec('h1');
let elXomlr = eo('article');
let elMRxLS = eo('p');
let elck0uv = eo('strong');
text(`Einstein Chamber`);
ec('strong');
text(`is a challenging section that measures how you think in your code.`);
ec('p');
let elBWaoz = eo('p');
text(`In`);
let elUWgYz = eo('strong',null,null,`class`,`ml-1`);
text(`Einstein Chamber`);
ec('strong');
text(`you'll face some very familiar challenges that you crossed
            by, and other are totally brand new for you.`);
ec('p');
let elQC2T9 = eo('p');
text(`Here you will start writing what you use but never wrote in your entire career life.`);
ec('p');
let elOmjzZ = eo('h1',null,null,`class`,`m-v-1`);
text(`So how it works?`);
ec('h1');
let elvKOQL = eo('p');
text(`First thing to do is to`);
let el4OrmH = eo('strong',null,null,`class`,`ml-1`);
text(`unlock`);
ec('strong');
text(`the chamber.`);
ec('p');
let eljsDZy = eo('p');
text(`Once it is unlocked, you can now select what categories from`);
let elA72vh = eo('strong');
text(`The Shop`);
ec('strong');
text(`you want to be
            challenged in.`);
ec('p');
let elr_lpz = eo('p');
text(`Each puzzle has a reward, but`);
let elDXdmE = eo('strong',null,null,`class`,`ml-1`);
text(`be careful, the rewards may backfire on you`);
ec('strong');
text(`if you couldn't solve the puzzle therefore you will pay the same amount of gold for the reward.`);
ec('p');
let el0e8c9 = eo('p');
text(`When your answer is previewed, you can now check the other's answers for the same puzzle and start new`);
let el3WUH8 = eo('strong');
text(`puzzle.`);
ec('strong');
ec('p');
ec('article');
let elr49Vh = eo('h1',null,null,`class`,`m-v-1`);
text(`Shop`);
ec('h1');
let el5BMqb = eo('article');
let elaFy0M = eo('p');
text(`When you enter`);
let eliUwB0 = eo('strong');
text(`Einstein Chamber Shop`);
ec('strong');
text(`, you'll find all available categories that you did or
            didn't unlock.`);
ec('p');
let elnQEyA = eo('p');
text(`Any category has`);
let el_V3JM = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon mx-3 icon'}`);
ec('i');
text(`means you didn't unlock it yet.`);
ec('p');
let elM13xG = eo('p');
text(`Any category has`);
let eldInlx = eo('span',null,null,`class`,`can-unlock mx-3`);
text(`!`);
ec('span');
text(`means you have its requirements thus it could be unlocked.`);
ec('p');
ec('article');
let elmOzep = eo('div',null,null,`class`,`text-center m-t-3`);
let cndL254 = ! component.user.isLoggedIn();
this.setState('stk3m0S', cndL254);
let cndmqDM = ! Is.empty(component.user.einsteinChamber);
this.setState('stHQNQl', cndmqDM);
let cnd06UU = !(cndL254||cndmqDM);
this.setState('stp7FOb', cnd06UU);
if (cndL254) { 
let elCQXOK = eo('a','g7Yf',null,`href`,`/login`,`class`,`btn bold btn-sm btn-danger`);
text(`Login to unlock`);
let elxdlqx = eo('i','2Fef',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
ec('a');
}else if (cndmqDM) { 
let elF6To9 = eo('div',null,null,`class`,`text-center bold green-text`);
text(`Einstein Chamber is UNLOCKED`);
ec('div');
}else { 
let elLiEvm = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.unlock()}]}, boolAttrs, {disabled:component.disabledButton},`class`,`btn btn-success bold`);
let cmpwml4 = this._lc('ccsE07Riv', {parent:component,parentTop:layout,state:'stp7FOb'});
let elCzhdC = eo('strong');
text(`FREE!`);
ec('strong');
let el2qtRx = eo('div');
text(`Unlock`);
ec('div');
ec('button');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });