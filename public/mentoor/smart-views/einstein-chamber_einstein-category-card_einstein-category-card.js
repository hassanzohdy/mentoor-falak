_Component({
                selector: 'einstein-category-card',
                c: 'EinsteinCategoryCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canUnlock','categoryIsUnlocked','purchase','category','isPurchasing'],
                children: {clH6kwqyP:'gold-icon',ciRTE57uv:'gold-icon'},
                render: function (component) {
                    let elk037B = eo('div',null,null,`class`,`einstein-category`);
let el6CNkY = eo('div',null,null,`class`,`card`);
let cndxQUT = component.canUnlock();
this.setState('styBen1', cndxQUT);
let cndSMjJ = component.categoryIsUnlocked();
this.setState('stb8TaU', cndSMjJ);
if (cndxQUT) { 
let el0S2P0 = eo('span','IE3f',null,`class`,`can-unlock`);
text(`!`);
ec('span');
}else if (cndSMjJ) { 
let elAMnCu = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`purchased-wrapper`);
let elIS7gI = eo('i',null,null,`class`,`${fas('check-circle')} purchased-icon icon`);
ec('i');
ec('div');
}let cndJ9XF = ! component.categoryIsUnlocked();
this.setState('staX9hO', cndJ9XF);
if (cndJ9XF) { 
let ela8HW5 = eo('button','KLaf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]},`class`,`lock-wrapper`);
let elsAlfs = eo('i','AHxf',null,`class`,`${fas('lock')} lock-icon icon`);
ec('i');
ec('button');
}let elX8kfr = ev('img',null,null,`src`,`${component.category.image}`,`class`,`image`,`title`,`${component.category.name}`,`alt`,`${component.category.name}`);
let el3ra3w = eo('div',null,null,`class`,`name`);
text(component.category.name);
ec('div');
let elgUWuE = eo('div',null,null,`class`,`requirements bold`);
let el1Ak_g = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let eleMBot = eo('i',null,null,`class`,`${fas('edit')} icon icon`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elXJ9lE = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndKge2 = component.category.cost == 0;
this.setState('stimVg_', cndKge2);
if (cndKge2) { 
let elbV0Wh = eo('span','h8Df',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpH0JD = this._lc('clH6kwqyP', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
ec('div');
let elm25BI = eo('div',null,null,`class`,`back-card`);
let elCLVSw = eo('h3',null,null,`class`,`name`);
text(component.category.name);
ec('h3');
let elAjdyh = eo('p',null,null,`class`,`description`);
text(component.category.description);
ec('p');
let elkWHq4 = eo('div',null,null,`class`,`requirements bold`);
let elwTGWG = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elzG_ZY = eo('i',null,null,`class`,`${fas('edit')} icon icon`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elpvGDO = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cnd6HmJ = component.category.cost == 0;
this.setState('stDNKHs', cnd6HmJ);
if (cnd6HmJ) { 
let elS8K0a = eo('span','bA7f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpZ0ro = this._lc('ciRTE57uv', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
let elL1s0u = eo('div',null,null,`class`,`text-center m-v-1`);
let el2e5ev = eo('span',null,null,`title`,`${trans(`Level ${ component.category.level }`)}`,`class`,`level`);
text(component.category.level);
ec('span');
ec('div');
let cndVWNm = component.canUnlock();
this.setState('stTQRJv', cndVWNm);
let cndvKTf = component.categoryIsUnlocked();
this.setState('stRVWOT', cndvKTf);
if (cndVWNm) { 
let elqZwye = eo('div','Zd9f',null,`class`,`text-center`);
let elRfpK3 = eo('button','YfLf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]}, boolAttrs, {disabled:component.isPurchasing},`class`,`btn btn-success purchase-btn`);
text(`Purchase`);
ec('button');
ec('div');
}else if (cndvKTf) { 
let elfToG2 = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`text-center`);
let elhWkuU = eo('i',null,null,`class`,`${fas('check-circle')} purchased-icon icon`);
ec('i');
ec('div');
}ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });