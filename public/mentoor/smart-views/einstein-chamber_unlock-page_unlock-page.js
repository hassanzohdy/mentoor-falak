_Component({
                selector: 'unlock-page',
                c: 'EinsteinChamberUnlocker', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['requiredAnswers','user','unlock','disabledButton'],
                children: {cfImGJbeT:'gold-icon',cH7QUkTE6:'layout'},
                render: function (component) {
                    let cmpe2Ss = this._lc('cH7QUkTE6', {parent:component,content:(layout) => {let elopRF9 = eo('div');
let elsWdzI = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elSyr76 = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
ec('div');
let elwvqKy = eo('h1',null,null,`class`,`m-v-1`);
text(`What is Einstein Chamber?`);
ec('h1');
let ela6GNs = eo('article');
let elgc9CG = eo('p');
let elyCAoj = eo('strong');
text(`Einstein Chamber`);
ec('strong');
text(`is a challenging section that measures how you think in your code.`);
ec('p');
let el98ijI = eo('p');
text(`In`);
let el7fcYH = eo('strong',null,null,`class`,`ml-1`);
text(`Einstein Chamber`);
ec('strong');
text(`you'll face some very familiar challenges that you crossed
            by, and other are totally brand new for you.`);
ec('p');
let el4QWSm = eo('p');
text(`Here you will start writing what you use but never wrote in your entire career life.`);
ec('p');
let elVnD7B = eo('h1',null,null,`class`,`m-v-1`);
text(`So how it works?`);
ec('h1');
let el_3IH9 = eo('p');
text(`First thing to do is to`);
let elenEnC = eo('strong',null,null,`class`,`ml-1`);
text(`unlock`);
ec('strong');
text(`the chamber.`);
ec('p');
let el4QJEZ = eo('p');
text(`Once it is unlocked, you can now select what categories from`);
let elmxKjG = eo('strong');
text(`The Shop`);
ec('strong');
text(`you want to be
            challenged in.`);
ec('p');
let elIPcyM = eo('p');
text(`Each puzzle has a reward, but`);
let el0gde3 = eo('strong',null,null,`class`,`ml-1`);
text(`be careful, the rewards may backfire on you`);
ec('strong');
text(`if you couldn't solve the puzzle therefore you will pay the same amount of gold for the reward.`);
ec('p');
let elZdK4n = eo('p');
text(`When your answer is previewed, you can now check the other's answers for the same puzzle and start new`);
let elhqBNB = eo('strong');
text(`puzzle.`);
ec('strong');
ec('p');
ec('article');
let el2dKBY = eo('h1',null,null,`class`,`m-v-1`);
text(`Shop`);
ec('h1');
let elxio92 = eo('article');
let elZ1sTk = eo('p');
text(`When you enter`);
let elikw6Y = eo('strong');
text(`Einstein Chamber Shop`);
ec('strong');
text(`, you'll find all available categories that you did or
            didn't unlock.`);
ec('p');
let elqU3Df = eo('p');
text(`Any category has`);
let el6ulrV = eo('i',null,null,`class`,`${fas('lock')} lock-icon mx-3 icon`);
ec('i');
text(`means you didn't unlock it yet.`);
ec('p');
let elmT_Vd = eo('p');
text(`Any category has`);
let el8uvZ_ = eo('span',null,null,`class`,`can-unlock mx-3`);
text(`!`);
ec('span');
text(`means you have its requirements thus it could be unlocked.`);
ec('p');
ec('article');
let elCyERZ = eo('div',null,null,`class`,`text-center m-t-3`);
let cndT3VE = ! component.user.isLoggedIn();
this.setState('stsPNme', cndT3VE);
let cndQavy = ! Is.empty(component.user.einsteinChamber);
this.setState('st50wCc', cndQavy);
let cnd_OSi = !(cndT3VE||cndQavy);
this.setState('stilNbm', cnd_OSi);
if (cndT3VE) { 
let eldx4rk = eo('a','utgf',null,`href`,`/login`,`class`,`btn bold btn-sm btn-danger`);
text(`Login to unlock`);
let el9LZYA = eo('i','MVdf',null,`class`,`${fas('lock')} ml-2 icon`);
ec('i');
ec('a');
}else if (cndQavy) { 
let elqctm3 = eo('div',null,null,`class`,`text-center bold green-text`);
text(`Einstein Chamber is UNLOCKED`);
ec('div');
}else { 
let elGVnyr = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.unlock()}]}, boolAttrs, {disabled:component.disabledButton},`class`,`btn btn-success bold`);
let cmp1lwV = this._lc('cfImGJbeT', {parent:component,parentTop:layout,state:'stilNbm'});
let el1101l = eo('strong');
text(`FREE!`);
ec('strong');
let elPSZJn = eo('div');
text(`Unlock`);
ec('div');
ec('button');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });