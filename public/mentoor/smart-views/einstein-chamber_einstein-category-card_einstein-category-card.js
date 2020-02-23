_Component({
                selector: 'einstein-category-card',
                c: 'EinsteinCategoryCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canUnlock','categoryIsUnlocked','purchase','category','isPurchasing'],
                children: {csm2qo1F8:'gold-icon',cqKCadtqb:'gold-icon'},
                render: function (component) {
                    let elLkjIV = eo('div',null,null,`class`,`einstein-category`);
let elzVFuq = eo('div',null,null,`class`,`card`);
let cndZIWx = component.canUnlock();
this.setState('stpMak7', cndZIWx);
let cndruxh = component.categoryIsUnlocked();
this.setState('st4_jtt', cndruxh);
if (cndZIWx) { 
let el8D2et = eo('span','VBpf',null,`class`,`can-unlock`);
text(`!`);
ec('span');
}else if (cndruxh) { 
let eldR9Sf = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`purchased-wrapper`);
let elWGxbw = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}let cndRZdg = ! component.categoryIsUnlocked();
this.setState('stnPvSf', cndRZdg);
if (cndRZdg) { 
let el756wf = eo('button','ve6f',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]},`class`,`lock-wrapper`);
let eldKRBl = eo('i','6zNf',null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('button');
}let elNAAnK = ev('img',null,null,`src`,`${component.category.image}`,`class`,`image`,`title`,`${component.category.name}`,`alt`,`${component.category.name}`);
let el7KMsk = eo('div',null,null,`class`,`name`);
text(component.category.name);
ec('div');
let ely6a5N = eo('div',null,null,`class`,`requirements bold`);
let elVIyU4 = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elGrIcF = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elh0R4W = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndLXgt = component.category.cost == 0;
this.setState('stP5SzZ', cndLXgt);
if (cndLXgt) { 
let eltrSsF = eo('span','5Yef',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpUsb6 = this._lc('csm2qo1F8', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
ec('div');
let el1NV0a = eo('div',null,null,`class`,`back-card`);
let eltOU5K = eo('h3',null,null,`class`,`name`);
text(component.category.name);
ec('h3');
let elXhUUz = eo('p',null,null,`class`,`description`);
text(component.category.description);
ec('p');
let el0F8A7 = eo('div',null,null,`class`,`requirements bold`);
let elBVck_ = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elranAN = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elmmZrV = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndJwAi = component.category.cost == 0;
this.setState('stQyXAv', cndJwAi);
if (cndJwAi) { 
let elXokny = eo('span','1R5f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmp2MjY = this._lc('cqKCadtqb', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
let elMRH4r = eo('div',null,null,`class`,`text-center m-v-1`);
let eldiLQl = eo('span',null,null,`title`,`${trans(`Level ${ component.category.level }`)}`,`class`,`level`);
text(component.category.level);
ec('span');
ec('div');
let cnd99Wo = component.canUnlock();
this.setState('stCQcDF', cnd99Wo);
let cnd9Rhd = component.categoryIsUnlocked();
this.setState('stNKvRE', cnd9Rhd);
if (cnd99Wo) { 
let elbJDIp = eo('div','0NNf',null,`class`,`text-center`);
let elgaVu_ = eo('button','ms4f',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]}, boolAttrs, {disabled:component.isPurchasing},`class`,`btn btn-success purchase-btn`);
text(`Purchase`);
ec('button');
ec('div');
}else if (cnd9Rhd) { 
let elO1Y57 = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`text-center`);
let elPqeH6 = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });