_Component({
                selector: 'unlock-page',
                c: 'EinsteinChamberUnlocker', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['requiredAnswers','user','unlock','disabledButton'],
                children: {cycy1CYa2:'gold-icon',cZpO_LDVl:'layout'},
                render: function (component) {
                    let cmpSJBI = this._lc('cZpO_LDVl', {parent:component,content:(layout) => {let el_0M6d = eo('div');
let elpLX__ = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elGTMmJ = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
ec('div');
let elIem4L = eo('h1',null,null,`class`,`m-v-1`);
text(`What is Einstein Chamber?`);
ec('h1');
let elW4Ns8 = eo('article');
let el4vcrf = eo('p');
let elgqqT7 = eo('strong');
text(`Einstein Chamber`);
ec('strong');
text(`is a challenging section that measures how you think in your code.`);
ec('p');
let el3r84d = eo('p');
text(`In`);
let elDGvDW = eo('strong',null,null,`class`,`ml-1`);
text(`Einstein Chamber`);
ec('strong');
text(`you'll face some very familiar challenges that you crossed
            by, and other are totally brand new for you.`);
ec('p');
let eleYRDk = eo('p');
text(`Here you will start writing what you use but never wrote in your entire career life.`);
ec('p');
let elBkIsc = eo('h1',null,null,`class`,`m-v-1`);
text(`So how it works?`);
ec('h1');
let elNFxm_ = eo('p');
text(`First thing to do is to`);
let ele29VL = eo('strong',null,null,`class`,`ml-1`);
text(`unlock`);
ec('strong');
text(`the chamber.`);
ec('p');
let elWbt50 = eo('p');
text(`Once it is unlocked, you can now select what categories from`);
let eluM3AN = eo('strong');
text(`The Shop`);
ec('strong');
text(`you want to be
            challenged in.`);
ec('p');
let ellBLyB = eo('p');
text(`Each puzzle has a reward, but`);
let elR25pq = eo('strong',null,null,`class`,`ml-1`);
text(`be careful, the rewards may backfire on you`);
ec('strong');
text(`if you couldn't solve the puzzle therefore you will pay the same amount of gold for the reward.`);
ec('p');
let el6no4m = eo('p');
text(`When your answer is previewed, you can now check the other's answers for the same puzzle and start new`);
let elH3OQW = eo('strong');
text(`puzzle.`);
ec('strong');
ec('p');
ec('article');
let elzsvko = eo('h1',null,null,`class`,`m-v-1`);
text(`Shop`);
ec('h1');
let elqpW0f = eo('article');
let elb6NR1 = eo('p');
text(`When you enter`);
let elYDkSH = eo('strong');
text(`Einstein Chamber Shop`);
ec('strong');
text(`, you'll find all available categories that you did or
            didn't unlock.`);
ec('p');
let elrDnve = eo('p');
text(`Any category has`);
let elw3VCP = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon mx-3 icon'}`);
ec('i');
text(`means you didn't unlock it yet.`);
ec('p');
let elPmxaK = eo('p');
text(`Any category has`);
let elGoqFE = eo('span',null,null,`class`,`can-unlock mx-3`);
text(`!`);
ec('span');
text(`means you have its requirements thus it could be unlocked.`);
ec('p');
ec('article');
let elJ1dVi = eo('div',null,null,`class`,`text-center m-t-3`);
let cndXUGD = ! component.user.isLoggedIn();
this.setState('stYZkTX', cndXUGD);
let cnd9Dqb = ! Is.empty(component.user.einsteinChamber);
this.setState('stQS09g', cnd9Dqb);
let cndZuQU = !(cndXUGD||cnd9Dqb);
this.setState('stBHWKl', cndZuQU);
if (cndXUGD) { 
let ela82Ku = eo('a','rvbf',null,`href`,`/login`,`class`,`btn bold btn-sm btn-danger`);
text(`Login to unlock`);
let elaE4xG = eo('i','74af',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
ec('a');
}else if (cnd9Dqb) { 
let elYaSEm = eo('div',null,null,`class`,`text-center bold green-text`);
text(`Einstein Chamber is UNLOCKED`);
ec('div');
}else { 
let elkFsYX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.unlock()}]}, boolAttrs, {disabled:component.disabledButton},`class`,`btn btn-success bold`);
let cmprRnL = this._lc('cycy1CYa2', {parent:component,parentTop:layout,state:'stBHWKl'});
let elUNa0I = eo('strong');
text(`FREE!`);
ec('strong');
let elwI0am = eo('div');
text(`Unlock`);
ec('div');
ec('button');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });