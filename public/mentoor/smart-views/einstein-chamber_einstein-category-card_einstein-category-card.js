_Component({
                selector: 'einstein-category-card',
                c: 'EinsteinCategoryCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canUnlock','categoryIsUnlocked','purchase','category','isPurchasing'],
                children: {c3sbTBkgn:'gold-icon',cJKfPWQj5:'gold-icon'},
                render: function (component) {
                    let elumZ86 = eo('div',null,null,`class`,`einstein-category`);
let el_rj4X = eo('div',null,null,`class`,`card`);
let cndND7M = component.canUnlock();
this.setState('stPLc7P', cndND7M);
let cnd8FES = component.categoryIsUnlocked();
this.setState('sta39Hb', cnd8FES);
if (cndND7M) { 
let elpdXrZ = eo('span','MiNf',null,`class`,`can-unlock`);
text(`!`);
ec('span');
}else if (cnd8FES) { 
let elODkNP = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`purchased-wrapper`);
let elU60oc = eo('i',null,null,`class`,`${fas('check-circle')} purchased-icon icon`);
ec('i');
ec('div');
}let cndeXyJ = ! component.categoryIsUnlocked();
this.setState('stSCoxl', cndeXyJ);
if (cndeXyJ) { 
let ellG7sa = eo('button','NXAf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]},`class`,`lock-wrapper`);
let elDOkKD = eo('i','pPuf',null,`class`,`${fas('lock')} lock-icon icon`);
ec('i');
ec('button');
}let elppiEf = ev('img',null,null,`src`,`${component.category.image}`,`class`,`image`,`title`,`${component.category.name}`,`alt`,`${component.category.name}`);
let elq97Kn = eo('div',null,null,`class`,`name`);
text(component.category.name);
ec('div');
let el75703 = eo('div',null,null,`class`,`requirements bold`);
let elB7evw = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elEI3ar = eo('i',null,null,`class`,`${fas('edit')} icon icon`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elonQuX = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cnd2G4C = component.category.cost == 0;
this.setState('stymBKj', cnd2G4C);
if (cnd2G4C) { 
let eleDmid = eo('span','rS5f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpgbsY = this._lc('c3sbTBkgn', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
ec('div');
let el6GoXv = eo('div',null,null,`class`,`back-card`);
let elXvodP = eo('h3',null,null,`class`,`name`);
text(component.category.name);
ec('h3');
let elcKZtN = eo('p',null,null,`class`,`description`);
text(component.category.description);
ec('p');
let elC7TMs = eo('div',null,null,`class`,`requirements bold`);
let elgnkjA = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let eldFDSk = eo('i',null,null,`class`,`${fas('edit')} icon icon`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elp3f0h = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cnd0Z2K = component.category.cost == 0;
this.setState('stjJdEs', cnd0Z2K);
if (cnd0Z2K) { 
let elxtv4i = eo('span','_Gwf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpX8Qq = this._lc('cJKfPWQj5', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
let elV00S2 = eo('div',null,null,`class`,`text-center m-v-1`);
let elBOqfH = eo('span',null,null,`title`,`${trans(`Level ${ component.category.level }`)}`,`class`,`level`);
text(component.category.level);
ec('span');
ec('div');
let cndGvC8 = component.canUnlock();
this.setState('stus0mp', cndGvC8);
let cndelTi = component.categoryIsUnlocked();
this.setState('stm1fLa', cndelTi);
if (cndGvC8) { 
let elEoDWP = eo('div','Ms7f',null,`class`,`text-center`);
let elliyNa = eo('button','Vnbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]}, boolAttrs, {disabled:component.isPurchasing},`class`,`btn btn-success purchase-btn`);
text(`Purchase`);
ec('button');
ec('div');
}else if (cndelTi) { 
let elYyNSu = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`text-center`);
let elCrRFb = eo('i',null,null,`class`,`${fas('check-circle')} purchased-icon icon`);
ec('i');
ec('div');
}ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });