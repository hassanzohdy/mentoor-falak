_Component({
                selector: 'cocktail-modal',
                c: 'CocktailModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','isLoading','cocktailsCategories','currentCategory','display','categoryHasCocktailsToUnlock','displayedCocktails','isLocked','hasCocktailToBeUnlocked','unlockCocktail'],
                children: {ceiIuMcNf:'flk-spinner',cTxdcnzHx:'gold-icon',colnrAOVF:'flk-modal',cImWysWLD:'flk-alert'},
                render: function (component) {
                    let elCNxFP = eo('div',null,null,`id`,`cocktail-modal`);
let cmp_8mK = this._lc('colnrAOVF', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let cndn0Ps = component.isLoading;
this.setState('stZFNs2', cndn0Ps);
let cnde1I2 = !(cndn0Ps);
this.setState('stpQ8Rc', cnde1I2);
if (cndn0Ps) { 
let cmpSi3z = this._lc('ceiIuMcNf', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stZFNs2'});
}else { 
let elwCa6W = eo('div',null,null,`class`,`row m-0`);
let ely2qK2 = eo('aside',null,null,`class`,`col-sm-3 p-0`);
for (let i in component.cocktailsCategories) {
let category = component.cocktailsCategories[i]; 
 let iiRlyN = 'GEIZHN4' + i;
let eluMF83 = eo('button','bz6M2LZF1AWy' + i+iiRlyN,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(category)}]},`class`,`category-btn ${cls({active: component.currentCategory.id == category.id})}`,`type`,`button`);
let eleR14V = ev('img','qJmff'+iiRlyN,null,`src`,`${category.icon}`,`title`,`${category.name}`,`alt`,`${category.name}`);
let elN4p9z = eo('strong','mr4ff'+iiRlyN);
text(category.name);
ec('strong');
let cndur_N = component.categoryHasCocktailsToUnlock(category);
this.setState('stiUEX6', cndur_N);
if (cndur_N) { 
let el1Ej4L = eo('span','JaUff'+iiRlyN,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('button');
}
ec('aside');
let elZRWDy = eo('div',null,null,`class`,`col-sm-9 body`);
for (let i in component.displayedCocktails) {
let cocktail = component.displayedCocktails[i]; 
 let iiMXMK = 'VI99Fhp' + i;
let elTqv3W = eo('div','8uFLjFUShcKj' + i+iiMXMK,null,`class`,`cocktail`);
let elsGxyR = eo('h3','z7lff'+iiMXMK,null,`class`,`name`);
let elpGYQQ = ev('img','gkFff'+iiMXMK,null,`src`,`${cocktail.icon}`,`class`,`small mr-2`);
let elBhGlF = eo('span','0djff'+iiMXMK);
text(cocktail.name);
ec('span');
let cndNyl5 = cocktail.canBeUnlocked && ! cocktail.unlocked;
this.setState('stwWB6R', cndNyl5);
if (cndNyl5) { 
let elUjoGh = eo('span','gsAff'+iiMXMK,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('h3');
let elfrfRl = eo('p','Qj7ff'+iiMXMK,null,`class`,`description m-b-1`);
text(cocktail.description);
ec('p');
let elawx9C = eo('div','mMrff'+iiMXMK,null,`class`,`tags`);
for (let i in cocktail.tags) {
let tag = cocktail.tags[i]; 
 let iisBta = 'SsH8J45' + i;
let elk8vyp = eo('span','2ItmTJ1BLs98' + i+iiMXMK+iisBta,null,`class`,`tag-icon`);
let el3XHIm = ev('img','vOrff'+iiMXMK+iisBta,null,`class`,` ${cls({gray: component.isLocked(cocktail) })}`,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let cndWmvo = (Number(i) + 1) != cocktail.tags.length;
this.setState('stiHjVb', cndWmvo);
if (cndWmvo) { 
let eloZzWi = eo('i','9TQff'+iiMXMK+iisBta,null,`class`,`${fas('plus')} plus icon`);
ec('i');
}ec('span');
}
let elZceTA = eo('div','6fsff'+iiMXMK,null,`class`,`cost ${cls({gray: component.isLocked(cocktail) })}`);
let cmpkWBx = this._lc('cTxdcnzHx', {parent:component,parentTop:flkModal,props:{coins:cocktail.cost},insideLoop:true,index:"" +iiMXMK});
let cnd88JP = cocktail.cost == 0;
this.setState('stjzuiE', cnd88JP);
let cndWDTh = !(cnd88JP);
this.setState('stREfwy', cndWDTh);
if (cnd88JP) { 
let elFKR5q = eo('span','63Sff'+iiMXMK,null,`class`,`pink-text bold`);
text(`FREE!`);
ec('span');
}let cndPuxL = ! cocktail.unlocked;
this.setState('st18OmG', cndPuxL);
let cndcRjY = !(cndPuxL);
this.setState('stD2I_a', cndcRjY);
if (cndPuxL) { 
let elLo_75 = eo('button','RX0ff'+iiMXMK,null, eventListeners, {onclick:[function(e) {var $el = this;component.hasCocktailToBeUnlocked = cocktail;}]}, boolAttrs, {disabled:! cocktail.canBeUnlocked},`class`,`unlock-btn`);
text(`Unlock`);
ec('button');
}else { 
let el8y3wG = eo('i','CPWff'+iiMXMK,null,`title`,`${trans(`Unlocked`)}`,`class`,`${fas('check')} green-text unlocked icon`);
ec('i');
}ec('div');
let cndQkQ6 = ! Is.empty(cocktail.requiredCocktails);
this.setState('st5a7ju', cndQkQ6);
if (cndQkQ6) { 
let elJsFWs = eo('div','MDSff'+iiMXMK,null,`class`,`m-t-1`);
let eldEQm5 = eo('small','PKRff'+iiMXMK,null,`class`,`d-block m-t-2 bold red-text`);
text(`You should be a:`);
ec('small');
for (let i in cocktail.requiredCocktails) {
let requiredCocktail = cocktail.requiredCocktails[i]; 
 let iiyqt4 = '_2cHvYP' + i;
let el5ooNP = eo('li','sEI5Ub0BVDKa' + i+iiMXMK+iiyqt4,null,`class`,`required-cocktail bold`);
let elh9L9J = eo('span','xTnff'+iiMXMK+iiyqt4,null,`class`,` ${cls({'brown-text': ! component.isLocked(requiredCocktail) })}`);
text(requiredCocktail.name);
ec('span');
let cndPdAR = ! component.isLocked(requiredCocktail);
this.setState('stTGpaO', cndPdAR);
if (cndPdAR) { 
let elju6cJ = eo('i','3b1ff'+iiMXMK+iiyqt4,null,`class`,`${fas('check')} green-text ml-2 icon`);
ec('i');
}let cndCbH6 = component.isLocked(requiredCocktail) && component.currentCategory.id != requiredCocktail.category.id;
this.setState('stgbl73', cndCbH6);
if (cndCbH6) { 
let elOnGIr = eo('button','LT7ff'+iiMXMK+iiyqt4,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(requiredCocktail.category)}]},`type`,`button`,`class`,`ml-2 teal-text`);
text(requiredCocktail.category.name);
ec('button');
}ec('li');
}
ec('div');
}ec('div');
ec('div');
}
ec('div');
ec('div');
}},attrs:{header:'Choose your position'}});
let cnd7_uk = component.hasCocktailToBeUnlocked;
this.setState('stwFJdy', cnd7_uk);
if (cnd7_uk) { 
let cmpagET = this._lc('cImWysWLD', {parent:component,events:{onclose:function(e) {let $el = this; component.hasCocktailToBeUnlocked = null;},onconfirm:function(e) {let $el = this; component.unlockCocktail();}},state:'stwFJdy'});
}ec('div');

                    this.isReadyToGo();
                }
        });