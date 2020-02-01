_Component({
                selector: 'unlock-page',
                c: 'EinsteinChamberUnlocker', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['requiredAnswers','user','unlock','disabledButton'],
                children: {caL8c0z2k:'gold-icon',c3y6IuvlY:'layout'},
                render: function (component) {
                    let cmpmuC3 = this._lc('c3y6IuvlY', {parent:component,content:(layout) => {let elob7To = eo('div');
let eln9Cbg = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elT1iRU = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
ec('div');
let elmDYzU = eo('h1',null,null,`class`,`m-v-1`);
text(`What is Einstein Chamber?`);
ec('h1');
let elAg_q3 = eo('article');
let ellEIwt = eo('p');
let elHtB8f = eo('strong');
text(`Einstein Chamber`);
ec('strong');
text(`is a challenging section that measures how you think in your code.`);
ec('p');
let elA7YPL = eo('p');
text(`In`);
let elExJFM = eo('strong',null,null,`class`,`ml-1`);
text(`Einstein Chamber`);
ec('strong');
text(`you'll face some very familiar challenges that you crossed
            by, and other are totally brand new for you.`);
ec('p');
let elf3AS3 = eo('p');
text(`Here you will start writing what you use but never wrote in your entire career life.`);
ec('p');
let el0EjMg = eo('h1',null,null,`class`,`m-v-1`);
text(`So how it works?`);
ec('h1');
let el88ufo = eo('p');
text(`First thing to do is to`);
let elXeDPm = eo('strong',null,null,`class`,`ml-1`);
text(`unlock`);
ec('strong');
text(`the chamber.`);
ec('p');
let elskOC7 = eo('p');
text(`Once it is unlocked, you can now select what categories from`);
let elpUmBo = eo('strong');
text(`The Shop`);
ec('strong');
text(`you want to be
            challenged in.`);
ec('p');
let elZG0cz = eo('p');
text(`Each puzzle has a reward, but`);
let elQSITm = eo('strong',null,null,`class`,`ml-1`);
text(`be careful, the rewards may backfire on you`);
ec('strong');
text(`if you couldn't solve the puzzle therefore you will pay the same amount of gold for the reward.`);
ec('p');
let elKUH8A = eo('p');
text(`When your answer is previewed, you can now check the other's answers for the same puzzle and start new`);
let elGyZOP = eo('strong');
text(`puzzle.`);
ec('strong');
ec('p');
ec('article');
let elRYMT8 = eo('h1',null,null,`class`,`m-v-1`);
text(`Shop`);
ec('h1');
let elNrngM = eo('article');
let elMw83G = eo('p');
text(`When you enter`);
let elGBbrh = eo('strong');
text(`Einstein Chamber Shop`);
ec('strong');
text(`, you'll find all available categories that you did or
            didn't unlock.`);
ec('p');
let el7sEUF = eo('p');
text(`Any category has`);
let elX9_vP = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon mx-3 icon'}`);
ec('i');
text(`means you didn't unlock it yet.`);
ec('p');
let elzub_B = eo('p');
text(`Any category has`);
let elfQww7 = eo('span',null,null,`class`,`can-unlock mx-3`);
text(`!`);
ec('span');
text(`means you have its requirements thus it could be unlocked.`);
ec('p');
ec('article');
let elfvZAN = eo('div',null,null,`class`,`text-center m-t-3`);
let cndIKmu = ! component.user.isLoggedIn();
this.setState('stqgsbk', cndIKmu);
let cndYXFf = ! Is.empty(component.user.einsteinChamber);
this.setState('st8cIH5', cndYXFf);
let cnddJHM = !(cndIKmu||cndYXFf);
this.setState('stPHzfQ', cnddJHM);
if (cndIKmu) { 
let elzxTDu = eo('a','ACzf',null,`href`,`/login`,`class`,`btn bold btn-sm btn-danger`);
text(`Login to unlock`);
let elhuoDx = eo('i','rrLf',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
ec('a');
}else if (cndYXFf) { 
let elxqn1R = eo('div',null,null,`class`,`text-center bold green-text`);
text(`Einstein Chamber is UNLOCKED`);
ec('div');
}else { 
let el6wfDg = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.unlock()}]}, boolAttrs, {disabled:component.disabledButton},`class`,`btn btn-success bold`);
let cmpAqrE = this._lc('caL8c0z2k', {parent:component,parentTop:layout,state:'stPHzfQ'});
let elGcb2l = eo('strong');
text(`FREE!`);
ec('strong');
let elJGABk = eo('div');
text(`Unlock`);
ec('div');
ec('button');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });