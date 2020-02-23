_Component({
                selector: 'unlock-page',
                c: 'EinsteinChamberUnlocker', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['requiredAnswers','user','unlock','disabledButton'],
                children: {clFCC9eU2:'gold-icon',ckHqVSTMS:'layout'},
                render: function (component) {
                    let cmpp2oc = this._lc('ckHqVSTMS', {parent:component,content:(layout) => {let elrtu0G = eo('div');
let elGmn_o = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elC8YRz = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
ec('div');
let elYt33n = eo('h1',null,null,`class`,`m-v-1`);
text(`What is Einstein Chamber?`);
ec('h1');
let elo40VI = eo('article');
let elE5HW4 = eo('p');
let elNdxw7 = eo('strong');
text(`Einstein Chamber`);
ec('strong');
text(`is a challenging section that measures how you think in your code.`);
ec('p');
let elHsmgB = eo('p');
text(`In`);
let elB1F2Q = eo('strong',null,null,`class`,`ml-1`);
text(`Einstein Chamber`);
ec('strong');
text(`you'll face some very familiar challenges that you crossed
            by, and other are totally brand new for you.`);
ec('p');
let elz3gLV = eo('p');
text(`Here you will start writing what you use but never wrote in your entire career life.`);
ec('p');
let elPPzKR = eo('h1',null,null,`class`,`m-v-1`);
text(`So how it works?`);
ec('h1');
let el_flyy = eo('p');
text(`First thing to do is to`);
let elWlyKA = eo('strong',null,null,`class`,`ml-1`);
text(`unlock`);
ec('strong');
text(`the chamber.`);
ec('p');
let elF3DT1 = eo('p');
text(`Once it is unlocked, you can now select what categories from`);
let el0N8Bc = eo('strong');
text(`The Shop`);
ec('strong');
text(`you want to be
            challenged in.`);
ec('p');
let elEHqB_ = eo('p');
text(`Each puzzle has a reward, but`);
let el2ZvEI = eo('strong',null,null,`class`,`ml-1`);
text(`be careful, the rewards may backfire on you`);
ec('strong');
text(`if you couldn't solve the puzzle therefore you will pay the same amount of gold for the reward.`);
ec('p');
let el3wuNw = eo('p');
text(`When your answer is previewed, you can now check the other's answers for the same puzzle and start new`);
let el03Me8 = eo('strong');
text(`puzzle.`);
ec('strong');
ec('p');
ec('article');
let elAlNm7 = eo('h1',null,null,`class`,`m-v-1`);
text(`Shop`);
ec('h1');
let elvpM4M = eo('article');
let elTAff6 = eo('p');
text(`When you enter`);
let elwe0WC = eo('strong');
text(`Einstein Chamber Shop`);
ec('strong');
text(`, you'll find all available categories that you did or
            didn't unlock.`);
ec('p');
let elm5y8W = eo('p');
text(`Any category has`);
let elryx3J = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon mx-3 icon'}`);
ec('i');
text(`means you didn't unlock it yet.`);
ec('p');
let eldXttV = eo('p');
text(`Any category has`);
let eljI5zk = eo('span',null,null,`class`,`can-unlock mx-3`);
text(`!`);
ec('span');
text(`means you have its requirements thus it could be unlocked.`);
ec('p');
ec('article');
let el2F49M = eo('div',null,null,`class`,`text-center m-t-3`);
let cndl6Fr = ! component.user.isLoggedIn();
this.setState('st3bIHl', cndl6Fr);
let cnd7Glw = ! Is.empty(component.user.einsteinChamber);
this.setState('stsrtFu', cnd7Glw);
let cndsS6a = !(cndl6Fr||cnd7Glw);
this.setState('stDfLsL', cndsS6a);
if (cndl6Fr) { 
let elVefxH = eo('a','AWof',null,`href`,`/login`,`class`,`btn bold btn-sm btn-danger`);
text(`Login to unlock`);
let el4EW1j = eo('i','rujf',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
ec('a');
}else if (cnd7Glw) { 
let elyncsZ = eo('div',null,null,`class`,`text-center bold green-text`);
text(`Einstein Chamber is UNLOCKED`);
ec('div');
}else { 
let elPXjWm = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.unlock()}]}, boolAttrs, {disabled:component.disabledButton},`class`,`btn btn-success bold`);
let cmpU2G7 = this._lc('clFCC9eU2', {parent:component,parentTop:layout,state:'stDfLsL'});
let eleRwPV = eo('strong');
text(`FREE!`);
ec('strong');
let elcxpfK = eo('div');
text(`Unlock`);
ec('div');
ec('button');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });