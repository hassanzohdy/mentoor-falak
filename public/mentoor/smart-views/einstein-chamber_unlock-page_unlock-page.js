_Component({
                selector: 'unlock-page',
                c: 'EinsteinChamberUnlocker', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['requiredAnswers','user','unlock','disabledButton'],
                children: {cSVaNrlIB:'gold-icon',c9RT5Kebg:'layout'},
                render: function (component) {
                    let cmpe9kq = this._lc('c9RT5Kebg', {parent:component,content:(layout) => {let el26oOc = eo('div');
let elyTWDA = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let ele7C1D = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
ec('div');
let elt28w9 = eo('h1',null,null,`class`,`m-v-1`);
text(`What is Einstein Chamber?`);
ec('h1');
let elY6dfx = eo('article');
let elqr1N2 = eo('p');
let elVv2pX = eo('strong');
text(`Einstein Chamber`);
ec('strong');
text(`is a challenging section that measures how you think in your code.`);
ec('p');
let elPrJzw = eo('p');
text(`In`);
let elSQ74t = eo('strong',null,null,`class`,`ml-1`);
text(`Einstein Chamber`);
ec('strong');
text(`you'll face some very familiar challenges that you crossed
            by, and other are totally brand new for you.`);
ec('p');
let elfbTQJ = eo('p');
text(`Here you will start writing what you use but never wrote in your entire career life.`);
ec('p');
let elHeI72 = eo('h1',null,null,`class`,`m-v-1`);
text(`So how it works?`);
ec('h1');
let el0ykga = eo('p');
text(`First thing to do is to`);
let elX6fkm = eo('strong',null,null,`class`,`ml-1`);
text(`unlock`);
ec('strong');
text(`the chamber.`);
ec('p');
let elysIWe = eo('p');
text(`Once it is unlocked, you can now select what categories from`);
let el6v4d1 = eo('strong');
text(`The Shop`);
ec('strong');
text(`you want to be
            challenged in.`);
ec('p');
let elZQW94 = eo('p');
text(`Each puzzle has a reward, but`);
let elTy3JA = eo('strong',null,null,`class`,`ml-1`);
text(`be careful, the rewards may backfire on you`);
ec('strong');
text(`if you couldn't solve the puzzle therefore you will pay the same amount of gold for the reward.`);
ec('p');
let elmBIHj = eo('p');
text(`When your answer is previewed, you can now check the other's answers for the same puzzle and start new`);
let el5n0Br = eo('strong');
text(`puzzle.`);
ec('strong');
ec('p');
ec('article');
let el2Z96a = eo('h1',null,null,`class`,`m-v-1`);
text(`Shop`);
ec('h1');
let elYj8On = eo('article');
let elAIST9 = eo('p');
text(`When you enter`);
let elgQGXQ = eo('strong');
text(`Einstein Chamber Shop`);
ec('strong');
text(`, you'll find all available categories that you did or
            didn't unlock.`);
ec('p');
let elf02Cn = eo('p');
text(`Any category has`);
let eld43XF = eo('i',null,null,`class`,`${fas('lock')} lock-icon mx-3 icon`);
ec('i');
text(`means you didn't unlock it yet.`);
ec('p');
let elaPDik = eo('p');
text(`Any category has`);
let elG_7Bx = eo('span',null,null,`class`,`can-unlock mx-3`);
text(`!`);
ec('span');
text(`means you have its requirements thus it could be unlocked.`);
ec('p');
ec('article');
let elaQJI4 = eo('div',null,null,`class`,`text-center m-t-3`);
let cndhw0E = ! component.user.isLoggedIn();
this.setState('st2s1nQ', cndhw0E);
let cndx759 = ! Is.empty(component.user.einsteinChamber);
this.setState('stKvPlZ', cndx759);
let cndPubV = !(cndhw0E||cndx759);
this.setState('stiHjPW', cndPubV);
if (cndhw0E) { 
let elLKCtE = eo('a','I4Mf',null,`href`,`/login`,`class`,`btn bold btn-sm btn-danger`);
text(`Login to unlock`);
let el51hco = eo('i','Txlf',null,`class`,`${fas('lock')} ml-2 icon`);
ec('i');
ec('a');
}else if (cndx759) { 
let elWXaQe = eo('div',null,null,`class`,`text-center bold green-text`);
text(`Einstein Chamber is UNLOCKED`);
ec('div');
}else { 
let elNfg5Z = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.unlock()}]}, boolAttrs, {disabled:component.disabledButton},`class`,`btn btn-success bold`);
let cmpVtcq = this._lc('cSVaNrlIB', {parent:component,parentTop:layout,state:'stiHjPW'});
let el59rsR = eo('strong');
text(`FREE!`);
ec('strong');
let elryGBz = eo('div');
text(`Unlock`);
ec('div');
ec('button');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });