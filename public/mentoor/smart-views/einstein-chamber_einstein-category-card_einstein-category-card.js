_Component({
                selector: 'einstein-category-card',
                c: 'EinsteinCategoryCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canUnlock','categoryIsUnlocked','purchase','category','isPurchasing'],
                children: {cNlSIyk_H:'gold-icon',cqXDDyuaj:'gold-icon'},
                render: function (component) {
                    let ellfy8S = eo('div',null,null,`class`,`einstein-category`);
let ela8JDS = eo('div',null,null,`class`,`card`);
let cndKLXo = component.canUnlock();
this.setState('stHdaOx', cndKLXo);
let cndk8yV = component.categoryIsUnlocked();
this.setState('stDkZBo', cndk8yV);
if (cndKLXo) { 
let elxJCCw = eo('span','j1hf',null,`class`,`can-unlock`);
text(`!`);
ec('span');
}else if (cndk8yV) { 
let eloFKDh = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`purchased-wrapper`);
let el0snP7 = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}let cndqA2_ = ! component.categoryIsUnlocked();
this.setState('stPbsah', cndqA2_);
if (cndqA2_) { 
let elkpjCC = eo('button','dnsf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]},`class`,`lock-wrapper`);
let elZ4jmn = eo('i','PVif',null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('button');
}let elgZY8l = ev('img',null,null,`src`,`${component.category.image}`,`class`,`image`,`title`,`${component.category.name}`,`alt`,`${component.category.name}`);
let elbn1Xn = eo('div',null,null,`class`,`name`);
text(component.category.name);
ec('div');
let eluJf8Q = eo('div',null,null,`class`,`requirements bold`);
let elGsiyl = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elf8UIF = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elZ2Tsr = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndSrBE = component.category.cost == 0;
this.setState('stAVmmW', cndSrBE);
if (cndSrBE) { 
let eltnnOM = eo('span','od6f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmp90Fy = this._lc('cNlSIyk_H', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
ec('div');
let elUsrN_ = eo('div',null,null,`class`,`back-card`);
let elL5Oh_ = eo('h3',null,null,`class`,`name`);
text(component.category.name);
ec('h3');
let elotu0m = eo('p',null,null,`class`,`description`);
text(component.category.description);
ec('p');
let el3YbCm = eo('div',null,null,`class`,`requirements bold`);
let el_2JsJ = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elMaMQD = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elaSy6o = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndfmIO = component.category.cost == 0;
this.setState('stsL0Vp', cndfmIO);
if (cndfmIO) { 
let elKmJxo = eo('span','QGYf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpITzX = this._lc('cqXDDyuaj', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
let el6HvHQ = eo('div',null,null,`class`,`text-center m-v-1`);
let elrZH0r = eo('span',null,null,`title`,`${trans(`Level ${ component.category.level }`)}`,`class`,`level`);
text(component.category.level);
ec('span');
ec('div');
let cndaSTa = component.canUnlock();
this.setState('stzEnxZ', cndaSTa);
let cndbTCz = component.categoryIsUnlocked();
this.setState('stIrw8H', cndbTCz);
if (cndaSTa) { 
let elpiUeT = eo('div','LV6f',null,`class`,`text-center`);
let el7QMrt = eo('button','TY8f',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]}, boolAttrs, {disabled:component.isPurchasing},`class`,`btn btn-success purchase-btn`);
text(`Purchase`);
ec('button');
ec('div');
}else if (cndbTCz) { 
let el5neGh = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`text-center`);
let el6cuYW = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });