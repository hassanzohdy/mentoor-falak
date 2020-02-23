_Component({
                selector: 'unlock-page',
                c: 'EinsteinChamberUnlocker', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['requiredAnswers','user','unlock','disabledButton'],
                children: {cAEITqH6j:'gold-icon',cKrXEQbMY:'layout'},
                render: function (component) {
                    let cmpWviD = this._lc('cKrXEQbMY', {parent:component,content:(layout) => {let el7J9dY = eo('div');
let elG_1mf = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let eljkyIR = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
ec('div');
let elagqkA = eo('h1',null,null,`class`,`m-v-1`);
text(`What is Einstein Chamber?`);
ec('h1');
let elJFaxG = eo('article');
let elKPrwA = eo('p');
let elZqCIs = eo('strong');
text(`Einstein Chamber`);
ec('strong');
text(`is a challenging section that measures how you think in your code.`);
ec('p');
let eljrsOv = eo('p');
text(`In`);
let elsxYRL = eo('strong',null,null,`class`,`ml-1`);
text(`Einstein Chamber`);
ec('strong');
text(`you'll face some very familiar challenges that you crossed
            by, and other are totally brand new for you.`);
ec('p');
let elAhJtA = eo('p');
text(`Here you will start writing what you use but never wrote in your entire career life.`);
ec('p');
let elspb95 = eo('h1',null,null,`class`,`m-v-1`);
text(`So how it works?`);
ec('h1');
let elVkxQ2 = eo('p');
text(`First thing to do is to`);
let elp4e0o = eo('strong',null,null,`class`,`ml-1`);
text(`unlock`);
ec('strong');
text(`the chamber.`);
ec('p');
let elhhzru = eo('p');
text(`Once it is unlocked, you can now select what categories from`);
let elwUPuJ = eo('strong');
text(`The Shop`);
ec('strong');
text(`you want to be
            challenged in.`);
ec('p');
let elp8hzv = eo('p');
text(`Each puzzle has a reward, but`);
let elQBHbc = eo('strong',null,null,`class`,`ml-1`);
text(`be careful, the rewards may backfire on you`);
ec('strong');
text(`if you couldn't solve the puzzle therefore you will pay the same amount of gold for the reward.`);
ec('p');
let el9sKa_ = eo('p');
text(`When your answer is previewed, you can now check the other's answers for the same puzzle and start new`);
let el72yCT = eo('strong');
text(`puzzle.`);
ec('strong');
ec('p');
ec('article');
let elvzmyU = eo('h1',null,null,`class`,`m-v-1`);
text(`Shop`);
ec('h1');
let elWRPVa = eo('article');
let elNV6B2 = eo('p');
text(`When you enter`);
let elgTJHu = eo('strong');
text(`Einstein Chamber Shop`);
ec('strong');
text(`, you'll find all available categories that you did or
            didn't unlock.`);
ec('p');
let el3sWGo = eo('p');
text(`Any category has`);
let elCcErj = eo('i',null,null,`class`,`${fas('lock') + ' lock-icon mx-3 icon'}`);
ec('i');
text(`means you didn't unlock it yet.`);
ec('p');
let elOCxng = eo('p');
text(`Any category has`);
let elCatkr = eo('span',null,null,`class`,`can-unlock mx-3`);
text(`!`);
ec('span');
text(`means you have its requirements thus it could be unlocked.`);
ec('p');
ec('article');
let elGHzCm = eo('div',null,null,`class`,`text-center m-t-3`);
let cndl1tk = ! component.user.isLoggedIn();
this.setState('stHFzdY', cndl1tk);
let cndQyVv = ! Is.empty(component.user.einsteinChamber);
this.setState('stPIpge', cndQyVv);
let cndhWTr = !(cndl1tk||cndQyVv);
this.setState('sty1L8c', cndhWTr);
if (cndl1tk) { 
let elXjAC8 = eo('a','Cghf',null,`href`,`/login`,`class`,`btn bold btn-sm btn-danger`);
text(`Login to unlock`);
let elM1kKs = eo('i','PFSf',null,`class`,`${fas('lock') + ' ml-2 icon'}`);
ec('i');
ec('a');
}else if (cndQyVv) { 
let eliJ3UE = eo('div',null,null,`class`,`text-center bold green-text`);
text(`Einstein Chamber is UNLOCKED`);
ec('div');
}else { 
let eli35XQ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.unlock()}]}, boolAttrs, {disabled:component.disabledButton},`class`,`btn btn-success bold`);
let cmpF6Pp = this._lc('cAEITqH6j', {parent:component,parentTop:layout,state:'sty1L8c'});
let el8dzaa = eo('strong');
text(`FREE!`);
ec('strong');
let elvVkzC = eo('div');
text(`Unlock`);
ec('div');
ec('button');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });