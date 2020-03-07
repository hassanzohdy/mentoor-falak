_Component({
                selector: 'unlock-page',
                c: 'EinsteinChamberUnlocker', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['requiredAnswers','user','unlock','disabledButton'],
                children: {cslM0zH5S:'gold-icon',cx8AqLwQb:'layout'},
                render: function (component) {
                    let cmpI2uD = this._lc('cx8AqLwQb', {parent:component,content:(layout) => {let elU35gU = eo('div');
let elOHSxM = ev('img',null,null,`src`,`${assets('images/en.png')}`,`class`,`einstein-image`,`title`,`${'Einstein Chamber'}`,`alt`,`${'Einstein Chamber'}`);
let elF8KCj = eo('h3',null,null,`class`,`d-inline bold m-l-1`);
text(`Einstein Chamber`);
ec('h3');
ec('div');
let elcpCvQ = eo('h1',null,null,`class`,`m-v-1`);
text(`What is Einstein Chamber?`);
ec('h1');
let elW0tkt = eo('article');
let elK5utC = eo('p');
let elQJF8r = eo('strong');
text(`Einstein Chamber`);
ec('strong');
text(`is a challenging section that measures how you think in your code.`);
ec('p');
let elGJ420 = eo('p');
text(`In`);
let elukDlV = eo('strong',null,null,`class`,`ml-1`);
text(`Einstein Chamber`);
ec('strong');
text(`you'll face some very familiar challenges that you crossed
            by, and other are totally brand new for you.`);
ec('p');
let elj689v = eo('p');
text(`Here you will start writing what you use but never wrote in your entire career life.`);
ec('p');
let el3ikLA = eo('h1',null,null,`class`,`m-v-1`);
text(`So how it works?`);
ec('h1');
let elJILah = eo('p');
text(`First thing to do is to`);
let el7tDgh = eo('strong',null,null,`class`,`ml-1`);
text(`unlock`);
ec('strong');
text(`the chamber.`);
ec('p');
let elXr6p3 = eo('p');
text(`Once it is unlocked, you can now select what categories from`);
let elaTNQY = eo('strong');
text(`The Shop`);
ec('strong');
text(`you want to be
            challenged in.`);
ec('p');
let el2zVfj = eo('p');
text(`Each puzzle has a reward, but`);
let elZEy8u = eo('strong',null,null,`class`,`ml-1`);
text(`be careful, the rewards may backfire on you`);
ec('strong');
text(`if you couldn't solve the puzzle therefore you will pay the same amount of gold for the reward.`);
ec('p');
let el_isER = eo('p');
text(`When your answer is previewed, you can now check the other's answers for the same puzzle and start new`);
let el_08_m = eo('strong');
text(`puzzle.`);
ec('strong');
ec('p');
ec('article');
let elhT30f = eo('h1',null,null,`class`,`m-v-1`);
text(`Shop`);
ec('h1');
let elcmItd = eo('article');
let elMIJ_U = eo('p');
text(`When you enter`);
let elQYrPr = eo('strong');
text(`Einstein Chamber Shop`);
ec('strong');
text(`, you'll find all available categories that you did or
            didn't unlock.`);
ec('p');
let elY9dor = eo('p');
text(`Any category has`);
let elglKte = eo('i',null,null,`class`,`${fas('lock')} lock-icon mx-3 icon`);
ec('i');
text(`means you didn't unlock it yet.`);
ec('p');
let el3Gmr7 = eo('p');
text(`Any category has`);
let elKOTsq = eo('span',null,null,`class`,`can-unlock mx-3`);
text(`!`);
ec('span');
text(`means you have its requirements thus it could be unlocked.`);
ec('p');
ec('article');
let el1foaj = eo('div',null,null,`class`,`text-center m-t-3`);
let cndHx24 = ! component.user.isLoggedIn();
this.setState('stiGrWj', cndHx24);
let cnd1WFi = ! Is.empty(component.user.einsteinChamber);
this.setState('st0Rh0V', cnd1WFi);
let cndaAmw = !(cndHx24||cnd1WFi);
this.setState('st4wTrh', cndaAmw);
if (cndHx24) { 
let el88o7F = eo('a','hvxf',null,`href`,`/login`,`class`,`btn bold btn-sm btn-danger`);
text(`Login to unlock`);
let elb2oEI = eo('i','vaXf',null,`class`,`${fas('lock')} ml-2 icon`);
ec('i');
ec('a');
}else if (cnd1WFi) { 
let elJuPMN = eo('div',null,null,`class`,`text-center bold green-text`);
text(`Einstein Chamber is UNLOCKED`);
ec('div');
}else { 
let elGzQM2 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.unlock()}]}, boolAttrs, {disabled:component.disabledButton},`class`,`btn btn-success bold`);
let cmpjhw1 = this._lc('cslM0zH5S', {parent:component,parentTop:layout,state:'st4wTrh'});
let eloTRk3 = eo('strong');
text(`FREE!`);
ec('strong');
let elNt_AB = eo('div');
text(`Unlock`);
ec('div');
ec('button');
}ec('div');
}});

                    this.isReadyToGo();
                }
        });