_Component({
                selector: 'einstein-category-card',
                c: 'EinsteinCategoryCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canUnlock','categoryIsUnlocked','purchase','category','isPurchasing'],
                children: {c_Yhrmm6s:'gold-icon',c0gz3fIsS:'gold-icon'},
                render: function (component) {
                    let elbgUiZ = eo('div',null,null,`class`,`einstein-category`);
let ellehDS = eo('div',null,null,`class`,`card`);
let cndeAkB = component.canUnlock();
this.setState('stTPSWI', cndeAkB);
let cndEdkz = component.categoryIsUnlocked();
this.setState('stVKp5L', cndEdkz);
if (cndeAkB) { 
let el5PSbO = eo('span','Otzf',null,`class`,`can-unlock`);
text(`!`);
ec('span');
}else if (cndEdkz) { 
let elMQFLH = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`purchased-wrapper`);
let elyvFAf = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}let cndZwux = ! component.categoryIsUnlocked();
this.setState('stEVL0g', cndZwux);
if (cndZwux) { 
let elBUgc3 = eo('button','V03f',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]},`class`,`lock-wrapper`);
let elqkBxa = eo('i','UiDf',null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('button');
}let elJiGWd = ev('img',null,null,`src`,`${component.category.image}`,`class`,`image`,`title`,`${component.category.name}`,`alt`,`${component.category.name}`);
let elOGD97 = eo('div',null,null,`class`,`name`);
text(component.category.name);
ec('div');
let ellurQP = eo('div',null,null,`class`,`requirements bold`);
let elug9tQ = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elF54Wl = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elfnIcv = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndGwgN = component.category.cost == 0;
this.setState('stT40Ye', cndGwgN);
if (cndGwgN) { 
let elkqflY = eo('span','xe0f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpBhZS = this._lc('c_Yhrmm6s', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
ec('div');
let el52gwv = eo('div',null,null,`class`,`back-card`);
let elctbxv = eo('h3',null,null,`class`,`name`);
text(component.category.name);
ec('h3');
let elaHjq1 = eo('p',null,null,`class`,`description`);
text(component.category.description);
ec('p');
let elEpN67 = eo('div',null,null,`class`,`requirements bold`);
let elMSOT7 = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elRQEpW = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elyAisL = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndlh60 = component.category.cost == 0;
this.setState('stPhHcX', cndlh60);
if (cndlh60) { 
let eloCkUM = eo('span','Y93f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpHHSo = this._lc('c0gz3fIsS', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
let elCYsqs = eo('div',null,null,`class`,`text-center m-v-1`);
let elkciky = eo('span',null,null,`title`,`${trans(`Level ${ component.category.level }`)}`,`class`,`level`);
text(component.category.level);
ec('span');
ec('div');
let cnd363y = component.canUnlock();
this.setState('stmNfub', cnd363y);
let cndAP01 = component.categoryIsUnlocked();
this.setState('stt47vE', cndAP01);
if (cnd363y) { 
let elsHPbz = eo('div','lvMf',null,`class`,`text-center`);
let elkoBf3 = eo('button','Yynf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]}, boolAttrs, {disabled:component.isPurchasing},`class`,`btn btn-success purchase-btn`);
text(`Purchase`);
ec('button');
ec('div');
}else if (cndAP01) { 
let elXsWDx = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`text-center`);
let elzNaoX = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });