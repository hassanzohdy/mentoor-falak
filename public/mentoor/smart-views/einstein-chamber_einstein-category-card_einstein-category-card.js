_Component({
                selector: 'einstein-category-card',
                c: 'EinsteinCategoryCard', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['canUnlock','categoryIsUnlocked','purchase','category','isPurchasing'],
                children: {cXQ6LCgzO:'gold-icon',caQJQwqBW:'gold-icon'},
                render: function (component) {
                    let elgwzBU = eo('div',null,null,`class`,`einstein-category`);
let elNQVbK = eo('div',null,null,`class`,`card`);
let cndLdGz = component.canUnlock();
this.setState('staIykT', cndLdGz);
let cndFpM6 = component.categoryIsUnlocked();
this.setState('stwQVNj', cndFpM6);
if (cndLdGz) { 
let elqxPTH = eo('span','mdsf',null,`class`,`can-unlock`);
text(`!`);
ec('span');
}else if (cndFpM6) { 
let elFDKUU = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`purchased-wrapper`);
let el2ESlH = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}let cndB7US = ! component.categoryIsUnlocked();
this.setState('stcXTOg', cndB7US);
if (cndB7US) { 
let elfP_Bd = eo('button','YoJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]},`class`,`lock-wrapper`);
let el9Vdo8 = eo('i','W4Nf',null,`class`,`${fas('lock') + ' lock-icon icon'}`);
ec('i');
ec('button');
}let elVXkLw = ev('img',null,null,`src`,`${component.category.image}`,`class`,`image`,`title`,`${component.category.name}`,`alt`,`${component.category.name}`);
let el8bI0z = eo('div',null,null,`class`,`name`);
text(component.category.name);
ec('div');
let elOXnCu = eo('div',null,null,`class`,`requirements bold`);
let elpxHTD = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let elsRxOD = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elabexm = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndukxE = component.category.cost == 0;
this.setState('stzXK4X', cndukxE);
if (cndukxE) { 
let elnlk7K = eo('span','6XXf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpSAPi = this._lc('cXQ6LCgzO', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
ec('div');
let elu2VFN = eo('div',null,null,`class`,`back-card`);
let eluOg8T = eo('h3',null,null,`class`,`name`);
text(component.category.name);
ec('h3');
let elPjatN = eo('p',null,null,`class`,`description`);
text(component.category.description);
ec('p');
let elXVNQr = eo('div',null,null,`class`,`requirements bold`);
let elgPaF8 = eo('span',null,null,`title`,`${trans(`Required answers`)}`,`class`,`answers`);
let el2maOn = eo('i',null,null,`class`,`${fas('edit') + ' icon icon'}`);
ec('i');
text( component.category.requiredAnswers.format() );
ec('span');
let elW5XGI = eo('span',null,null,`title`,`${trans(`Required gold`)}`,`class`,`cost`);
let cndGm7_ = component.category.cost == 0;
this.setState('stmXO1U', cndGm7_);
if (cndGm7_) { 
let elbO45x = eo('span','DZzf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}let cmpJbIZ = this._lc('caQJQwqBW', {parent:component,props:{coins:component.category.cost}});
ec('span');
ec('div');
let elRy3T8 = eo('div',null,null,`class`,`text-center m-v-1`);
let ely3jBO = eo('span',null,null,`title`,`${trans(`Level ${ component.category.level }`)}`,`class`,`level`);
text(component.category.level);
ec('span');
ec('div');
let cndBAcH = component.canUnlock();
this.setState('stSI1D7', cndBAcH);
let cnddlK_ = component.categoryIsUnlocked();
this.setState('stB8UqM', cnddlK_);
if (cndBAcH) { 
let elZnroF = eo('div','Rxff',null,`class`,`text-center`);
let elYekq1 = eo('button','5kyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.purchase()}]}, boolAttrs, {disabled:component.isPurchasing},`class`,`btn btn-success purchase-btn`);
text(`Purchase`);
ec('button');
ec('div');
}else if (cnddlK_) { 
let elo8hu1 = eo('div',null,null,`title`,`${trans(`Purchased`)}`,`class`,`text-center`);
let elZPNFS = eo('i',null,null,`class`,`${fas('check-circle') + ' purchased-icon icon'}`);
ec('i');
ec('div');
}ec('div');
ec('div');

                    this.isReadyToGo();
                }
        });