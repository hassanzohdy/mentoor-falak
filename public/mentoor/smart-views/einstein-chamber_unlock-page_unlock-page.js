_Component({
                selector: 'unlock-page',
                c: 'EinsteinChamberUnlocker', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['requiredAnswers','user','unlock','disabledButton'],
                children: {c1E98IGcx:'gold-icon',cm2z7i2GS:'layout'},
                render: function (component) {
                    let cmpfQMJ = this._lc('cm2z7i2GS', {parent:component,content:(layout) => {let ell5Bs9 = eo('div');
let el3gSCd = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let ela6Rx3 = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
ec('div');
let elNHqYD = eo('h1',null,null,`class`,`m-v-1`);
text(`What is Einstein Chamber?`);
ec('h1');
let elolk6V = eo('article');
let el_AsNO = eo('p');
let eljHoR4 = eo('strong');
text(`Einstein Chamber`);
ec('strong');
text(`is a challenging section that measures how you think in your code.`);
ec('p');
let el6TAnb = eo('p');
text(`In`);
let el8oZsI = eo('strong',null,null,`class`,`ml-1`);
text(`Einstein Chamber`);
ec('strong');
text(`you'll face some very familiar challenges that you crossed
            by, and other are totally brand new for you.`);
ec('p');
let elYjPwf = eo('p');
text(`Here you will start writing what you use but never wrote in your entire career life.`);
ec('p');
let elCOAsF = eo('h1',null,null,`class`,`m-v-1`);
text(`So how it works?`);
ec('h1');
let elAoeBP = eo('p');
text(`First thing to do is to`);
let elkYTw6 = eo('strong',null,null,`class`,`ml-1`);
text(`unlock`);
ec('strong');
text(`the chamber.`);
ec('p');
let elGHAJy = eo('p');
text(`Once it is unlocked, you can now select what categories from`);
let eldQWcO = eo('strong');
text(`The Shop`);
ec('strong');
text(`you want to be
            challenged in.`);
ec('p');
let elxvF4w = eo('p');
text(`Each puzzle has a reward, but`);
let elBuMKO = eo('strong',null,null,`class`,`ml-1`);
text(`be careful, the rewards may backfire on you`);
ec('strong');
text(`if you couldn't solve the puzzle therefore you will pay the same amount of gold for the reward.`);
ec('p');
let el9I8vI = eo('p');
text(`When your answer is previewed, you can now check the other's answers for the same puzzle and start new`);
let elBVema = eo('strong');
text(`puzzle.`);
ec('strong');
ec('p');
ec('article');
let elu2n9a = eo('h1',null,null,`class`,`m-v-1`);
text(`Shop`);
ec('h1');
let elR22gA = eo('article');
let elY0Z4K = eo('p');
text(`When you enter`);
let eld3erN = eo('strong');
text(`Einstein Chamber Shop`);
ec('strong');
text(`, you'll find all available categories that you did or
            didn't unlock.`);
ec('p');
let elkF0rF = eo('p');
text(`Any category has`);
let eljdHP6 = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon mx-3 icon'}`);
ec('i');
text(`means you didn't unlock it yet.`);
ec('p');
let elUGGso = eo('p');
text(`Any category has`);
let el2VLTv = eo('span',null,null,`class`,`can-unlock mx-3`);
text(`!`);
ec('span');
text(`means you have its requirements thus it could be unlocked.`);
ec('p');
ec('article');
let el0bfnG = eo('div',null,null,`class`,`text-center m-t-3`);
let cndawVm = ! component.user.isLoggedIn();
this.setState('stxNgXp', cndawVm);
let cnduhY_ = ! Is.empty(component.user.einsteinChamber);
this.setState('st7ok8P', cnduhY_);
let cndUsVZ = !(cndawVm||cnduhY_);
this.setState('sttIo6E', cndUsVZ);
if (cndawVm) { 
let elTATdL = eo('a','r0Tf',null,`href`,`/login`,`class`,`btn bold btn-sm btn-danger`);
text(`Login to unlock`);
let elSkCsp = eo('i','dJEf',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
ec('a');
}else if (cnduhY_) { 
let eliaHLQ = eo('div',null,null,`class`,`text-center bold green-text`);
text(`Einstein Chamber is UNLOCKED`);
ec('div');
}else { 
let elAdyRW = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.unlock()}]}, boolAttrs, {disabled:component.disabledButton},`class`,`btn btn-success bold`);
let cmpD8UY = this._lc('c1E98IGcx', {parent:component,parentTop:layout,state:'sttIo6E'});
let elJ_oR8 = eo('strong');
text(`FREE!`);
ec('strong');
let elVMjeD = eo('div');
text(`Unlock`);
ec('div');
ec('button');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });