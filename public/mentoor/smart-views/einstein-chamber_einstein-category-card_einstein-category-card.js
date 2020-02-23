_Component({
                selector: 'einstein-category-card',
                c: 'EinsteinCategoryCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canUnlock','categoryIsUnlocked','purchase','category','isPurchasing'],
                children: {cfmyyM5Ag:'gold-icon',cDJ_LapCV:'gold-icon'},
                render: function (component) {
                    let elsaIFT = eo('div',null,null,`class`,`einstein-category`);
let elMyo1z = eo('div',null,null,`class`,`card`);
let cndg8nF = component.canUnlock();
this.setState('stNtgSV', cndg8nF);
let cndvVDr = component.categoryIsUnlocked();
this.setState('stZCQen', cndvVDr);
if (cndg8nF) { 
let el4e8yf = eo('span','4tpf',null,`class`,`can-unlock`);
text(`!`);
ec('span');
}else if (cndvVDr) { 
let elZgqtC = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`purchased-wrapper`);
let elU6Z_U = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}let cndP38p = ! component.categoryIsUnlocked();
this.setState('stR0U7v', cndP38p);
if (cndP38p) { 
let el0rL1S = eo('button','KW7f',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]},`class`,`lock-wrapper`);
let eli0ohM = eo('i','psmf',null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('button');
}let elqCXJr = ev('img',null,null,`src`,`${component.category.image}`,`class`,`image`,`title`,`${component.category.name}`,`alt`,`${component.category.name}`);
let elzh76V = eo('div',null,null,`class`,`name`);
text(component.category.name);
ec('div');
let elRmga2 = eo('div',null,null,`class`,`requirements bold`);
let elRHxz5 = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let eld6MQO = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elrNJtk = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cnddH6k = component.category.cost == 0;
this.setState('stXbH1q', cnddH6k);
if (cnddH6k) { 
let elIE96v = eo('span','qa2f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpQIfQ = this._lc('cfmyyM5Ag', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
ec('div');
let elH36ib = eo('div',null,null,`class`,`back-card`);
let elwGvOV = eo('h3',null,null,`class`,`name`);
text(component.category.name);
ec('h3');
let el55vxk = eo('p',null,null,`class`,`description`);
text(component.category.description);
ec('p');
let elrW8Nq = eo('div',null,null,`class`,`requirements bold`);
let elqr9RJ = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elCech8 = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elsObmU = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndxOIZ = component.category.cost == 0;
this.setState('stNB4gr', cndxOIZ);
if (cndxOIZ) { 
let eld0D1K = eo('span','fSNf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpN4Zi = this._lc('cDJ_LapCV', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
let el3PY5k = eo('div',null,null,`class`,`text-center m-v-1`);
let el03rB7 = eo('span',null,null,`title`,`${trans(`Level ${ component.category.level }`)}`,`class`,`level`);
text(component.category.level);
ec('span');
ec('div');
let cndeohX = component.canUnlock();
this.setState('styWXus', cndeohX);
let cnddrGX = component.categoryIsUnlocked();
this.setState('stFmOGc', cnddrGX);
if (cndeohX) { 
let el1OD_h = eo('div','3hRf',null,`class`,`text-center`);
let el_sMmr = eo('button','cvvf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]}, boolAttrs, {disabled:component.isPurchasing},`class`,`btn btn-success purchase-btn`);
text(`Purchase`);
ec('button');
ec('div');
}else if (cnddrGX) { 
let el4hga_ = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`text-center`);
let elhYdov = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });