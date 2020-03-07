_Component({
                selector: 'einstein-category-card',
                c: 'EinsteinCategoryCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canUnlock','categoryIsUnlocked','purchase','category','isPurchasing'],
                children: {c5J1y1A4L:'gold-icon',cEQoeyG4q:'gold-icon'},
                render: function (component) {
                    let elAsEIy = eo('div',null,null,`class`,`einstein-category`);
let elqrqdu = eo('div',null,null,`class`,`card`);
let cndUu0i = component.canUnlock();
this.setState('stzByUQ', cndUu0i);
let cndTEdW = component.categoryIsUnlocked();
this.setState('stH4alV', cndTEdW);
if (cndUu0i) { 
let elQRuWf = eo('span','cLof',null,`class`,`can-unlock`);
text(`!`);
ec('span');
}else if (cndTEdW) { 
let el_mPIm = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`purchased-wrapper`);
let el83uwZ = eo('i',null,null,`class`,`${fas('check-circle')} purchased-icon icon`);
ec('i');
ec('div');
}let cndF61H = ! component.categoryIsUnlocked();
this.setState('stSeTQn', cndF61H);
if (cndF61H) { 
let elBL_uz = eo('button','0fOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]},`class`,`lock-wrapper`);
let elD98HV = eo('i','HMNf',null,`class`,`${fas('lock')} lock-icon icon`);
ec('i');
ec('button');
}let elvBAZ7 = ev('img',null,null,`src`,`${component.category.image}`,`class`,`image`,`title`,`${component.category.name}`,`alt`,`${component.category.name}`);
let elpo5rI = eo('div',null,null,`class`,`name`);
text(component.category.name);
ec('div');
let elMZnn4 = eo('div',null,null,`class`,`requirements bold`);
let elUokNG = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elviQxU = eo('i',null,null,`class`,`${fas('edit')} icon icon`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elH6PNZ = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndlEJC = component.category.cost == 0;
this.setState('st3AIME', cndlEJC);
if (cndlEJC) { 
let elMKaVq = eo('span','6bSf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpbvqZ = this._lc('c5J1y1A4L', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
ec('div');
let elDxhjA = eo('div',null,null,`class`,`back-card`);
let el1wxwF = eo('h3',null,null,`class`,`name`);
text(component.category.name);
ec('h3');
let eloeAtp = eo('p',null,null,`class`,`description`);
text(component.category.description);
ec('p');
let elDOdzL = eo('div',null,null,`class`,`requirements bold`);
let elYlLRy = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let el555Fg = eo('i',null,null,`class`,`${fas('edit')} icon icon`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elqPlHL = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndHk48 = component.category.cost == 0;
this.setState('stjnhuu', cndHk48);
if (cndHk48) { 
let el5KIeY = eo('span','fgjf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmperwa = this._lc('cEQoeyG4q', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
let elOepkW = eo('div',null,null,`class`,`text-center m-v-1`);
let elpF11N = eo('span',null,null,`title`,`${trans(`Level ${ component.category.level }`)}`,`class`,`level`);
text(component.category.level);
ec('span');
ec('div');
let cnd5J9i = component.canUnlock();
this.setState('stvPCGM', cnd5J9i);
let cndVCT3 = component.categoryIsUnlocked();
this.setState('st3Y13c', cndVCT3);
if (cnd5J9i) { 
let elu_yAg = eo('div','u3Rf',null,`class`,`text-center`);
let elcTGZl = eo('button','v_Hf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]}, boolAttrs, {disabled:component.isPurchasing},`class`,`btn btn-success purchase-btn`);
text(`Purchase`);
ec('button');
ec('div');
}else if (cndVCT3) { 
let elD3wT_ = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`text-center`);
let elYC1Q0 = eo('i',null,null,`class`,`${fas('check-circle')} purchased-icon icon`);
ec('i');
ec('div');
}ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });