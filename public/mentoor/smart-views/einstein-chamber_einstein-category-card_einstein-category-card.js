_Component({
                selector: 'einstein-category-card',
                c: 'EinsteinCategoryCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canUnlock','categoryIsUnlocked','purchase','category','isPurchasing'],
                children: {cNrjHpj4e:'gold-icon',cbqXRtTLX:'gold-icon'},
                render: function (component) {
                    let elOyLRF = eo('div',null,null,`class`,`einstein-category`);
let elFrAaL = eo('div',null,null,`class`,`card`);
let cndIx_U = component.canUnlock();
this.setState('stQwoea', cndIx_U);
let cnddV6f = component.categoryIsUnlocked();
this.setState('stvju4l', cnddV6f);
if (cndIx_U) { 
let el_jTfU = eo('span','OB8f',null,`class`,`can-unlock`);
text(`!`);
ec('span');
}else if (cnddV6f) { 
let elqkqcZ = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`purchased-wrapper`);
let elXjcLM = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}let cnd1bJP = ! component.categoryIsUnlocked();
this.setState('stIysi2', cnd1bJP);
if (cnd1bJP) { 
let elv8jLb = eo('button','rFvf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]},`class`,`lock-wrapper`);
let elLR9Tr = eo('i','UPSf',null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('button');
}let el7Pl7h = ev('img',null,null,`src`,`${component.category.image}`,`class`,`image`,`title`,`${component.category.name}`,`alt`,`${component.category.name}`);
let elIP7Sc = eo('div',null,null,`class`,`name`);
text(component.category.name);
ec('div');
let elPXDCe = eo('div',null,null,`class`,`requirements bold`);
let elJNZeD = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elDqLxP = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elftz9T = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndPr_I = component.category.cost == 0;
this.setState('stgqLbD', cndPr_I);
if (cndPr_I) { 
let elo5Anu = eo('span','fbrf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpyivg = this._lc('cNrjHpj4e', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
ec('div');
let elxjGD7 = eo('div',null,null,`class`,`back-card`);
let elV3DGq = eo('h3',null,null,`class`,`name`);
text(component.category.name);
ec('h3');
let elFQSjj = eo('p',null,null,`class`,`description`);
text(component.category.description);
ec('p');
let eldrnLW = eo('div',null,null,`class`,`requirements bold`);
let elVCKwO = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let eluYQcR = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elkKL1i = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndglxF = component.category.cost == 0;
this.setState('stbtU2A', cndglxF);
if (cndglxF) { 
let elq07qH = eo('span','OJ2f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpYBOl = this._lc('cbqXRtTLX', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
let elOZw9q = eo('div',null,null,`class`,`text-center m-v-1`);
let eliEFIS = eo('span',null,null,`title`,`${trans(`Level ${ component.category.level }`)}`,`class`,`level`);
text(component.category.level);
ec('span');
ec('div');
let cndCFBk = component.canUnlock();
this.setState('stJaQP8', cndCFBk);
let cndSnzt = component.categoryIsUnlocked();
this.setState('stg6Sda', cndSnzt);
if (cndCFBk) { 
let elgw4Qf = eo('div','lKff',null,`class`,`text-center`);
let el7ygcM = eo('button','9qbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]}, boolAttrs, {disabled:component.isPurchasing},`class`,`btn btn-success purchase-btn`);
text(`Purchase`);
ec('button');
ec('div');
}else if (cndSnzt) { 
let ellH8PD = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`text-center`);
let elA8YQd = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });