_Component({
                selector: 'cocktail-modal',
                c: 'CocktailModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','isLoading','cocktailsCategories','currentCategory','display','categoryHasCocktailsToUnlock','displayedCocktails','isLocked','hasCocktailToBeUnlocked','unlockCocktail'],
                children: {cPucuKTdG:'flk-spinner',cQFO0Vxbh:'gold-icon',cd3EW2cvt:'flk-modal',ctOr5k36I:'flk-alert'},
                render: function (component) {
                    let el5eHZ4 = eo('div',null,null,`id`,`cocktail-modal`);
let cmpthJ5 = this._lc('cd3EW2cvt', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let cndZqJ5 = component.isLoading;
this.setState('stgGR8Q', cndZqJ5);
let cndXF90 = !(cndZqJ5);
this.setState('stjUbVI', cndXF90);
if (cndZqJ5) { 
let cmpqPwU = this._lc('cPucuKTdG', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stgGR8Q'});
}else { 
let elSU_XN = eo('div',null,null,`class`,`row m-0`);
let elcaEYi = eo('aside',null,null,`class`,`col-sm-3 p-0`);
for (let i in component.cocktailsCategories) {
let category = component.cocktailsCategories[i]; 
 let ii9XF4 = '0wAxAt_' + i;
let elcdGR9 = eo('button','KLK62sm4x7ch' + i+ii9XF4,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(category)}]},`class`,`category-btn ${cls({active: component.currentCategory.id == category.id})}`,`type`,`button`);
let el6hmna = ev('img','71vff'+ii9XF4,null,`src`,`${category.icon}`,`title`,`${category.name}`,`alt`,`${category.name}`);
let eljtebP = eo('strong','0jvff'+ii9XF4);
text(category.name);
ec('strong');
let cndjHlq = component.categoryHasCocktailsToUnlock(category);
this.setState('stcjgJY', cndjHlq);
if (cndjHlq) { 
let el9IL0R = eo('span','SfIff'+ii9XF4,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('button');
}
ec('aside');
let elFyVSI = eo('div',null,null,`class`,`col-sm-9 body`);
for (let i in component.displayedCocktails) {
let cocktail = component.displayedCocktails[i]; 
 let iipl2K = 'nQKmAqn' + i;
let el2HDux = eo('div','FAtiHPyF3Vfx' + i+iipl2K,null,`class`,`cocktail`);
let elafbGd = eo('h3','_iHff'+iipl2K,null,`class`,`name`);
let elQRbvO = ev('img','L9qff'+iipl2K,null,`src`,`${cocktail.icon}`,`class`,`small mr-2`);
let elmNUGP = eo('span','EO8ff'+iipl2K);
text(cocktail.name);
ec('span');
let cndSJPk = cocktail.canBeUnlocked && ! cocktail.unlocked;
this.setState('stS37co', cndSJPk);
if (cndSJPk) { 
let elHXOEk = eo('span','okwff'+iipl2K,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('h3');
let el6FcIQ = eo('p','1KPff'+iipl2K,null,`class`,`description m-b-1`);
text(cocktail.description);
ec('p');
let elaxw0I = eo('div','R4Uff'+iipl2K,null,`class`,`tags`);
for (let i in cocktail.tags) {
let tag = cocktail.tags[i]; 
 let iicLLU = 'Xt4msXI' + i;
let elGDlDs = eo('span','JuJgztGgkzX7' + i+iipl2K+iicLLU,null,`class`,`tag-icon`);
let el1fm7l = ev('img','c2Aff'+iipl2K+iicLLU,null,`class`,` ${cls({gray: component.isLocked(cocktail) })}`,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let cnd1sGn = (Number(i) + 1) != cocktail.tags.length;
this.setState('stRn7CS', cnd1sGn);
if (cnd1sGn) { 
let elSl_6R = eo('i','cIXff'+iipl2K+iicLLU,null,`class`,`${fas('plus')} plus icon`);
ec('i');
}ec('span');
}
let elFOXUw = eo('div','diJff'+iipl2K,null,`class`,`cost ${cls({gray: component.isLocked(cocktail) })}`);
let cmpEuU_ = this._lc('cQFO0Vxbh', {parent:component,parentTop:flkModal,props:{coins:cocktail.cost},insideLoop:true,index:"" +iipl2K});
let cndq9XR = cocktail.cost == 0;
this.setState('stOlm65', cndq9XR);
let cnddzIp = !(cndq9XR);
this.setState('st9fitG', cnddzIp);
if (cndq9XR) { 
let elFKu6O = eo('span','wX4ff'+iipl2K,null,`class`,`pink-text bold`);
text(`FREE!`);
ec('span');
}let cndNrKI = ! cocktail.unlocked;
this.setState('stfW_S4', cndNrKI);
let cndZzX9 = !(cndNrKI);
this.setState('stzpzdF', cndZzX9);
if (cndNrKI) { 
let elP9riT = eo('button','oheff'+iipl2K,null, eventListeners, {onclick:[function(e) {var $el = this;component.hasCocktailToBeUnlocked = cocktail;}]}, boolAttrs, {disabled:! cocktail.canBeUnlocked},`class`,`unlock-btn`);
text(`Unlock`);
ec('button');
}else { 
let elXUCkq = eo('i','jG5ff'+iipl2K,null,`title`,`${trans(`Unlocked`)}`,`class`,`${fas('check')} green-text unlocked icon`);
ec('i');
}ec('div');
let cndjm10 = ! Is.empty(cocktail.requiredCocktails);
this.setState('stqbWbF', cndjm10);
if (cndjm10) { 
let elbW8eO = eo('div','EY0ff'+iipl2K,null,`class`,`m-t-1`);
let elkgn1Y = eo('small','PQXff'+iipl2K,null,`class`,`d-block m-t-2 bold red-text`);
text(`You should be a:`);
ec('small');
for (let i in cocktail.requiredCocktails) {
let requiredCocktail = cocktail.requiredCocktails[i]; 
 let ii2pxo = '5VKdYnr' + i;
let elGO_O2 = eo('li','Ra9iuuzJvXBg' + i+iipl2K+ii2pxo,null,`class`,`required-cocktail bold`);
let elmRZLg = eo('span','o8Off'+iipl2K+ii2pxo,null,`class`,` ${cls({'brown-text': ! component.isLocked(requiredCocktail) })}`);
text(requiredCocktail.name);
ec('span');
let cndQ6vY = ! component.isLocked(requiredCocktail);
this.setState('stBunJE', cndQ6vY);
if (cndQ6vY) { 
let elASads = eo('i','dvFff'+iipl2K+ii2pxo,null,`class`,`${fas('check')} green-text ml-2 icon`);
ec('i');
}let cndQOWe = component.isLocked(requiredCocktail) && component.currentCategory.id != requiredCocktail.category.id;
this.setState('stCYDVb', cndQOWe);
if (cndQOWe) { 
let elQMWMJ = eo('button','idPff'+iipl2K+ii2pxo,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(requiredCocktail.category)}]},`type`,`button`,`class`,`ml-2 teal-text`);
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
let cndGKPO = component.hasCocktailToBeUnlocked;
this.setState('stMMWs4', cndGKPO);
if (cndGKPO) { 
let cmpc5ND = this._lc('ctOr5k36I', {parent:component,events:{onclose:function(e) {let $el = this; component.hasCocktailToBeUnlocked = null;},onconfirm:function(e) {let $el = this; component.unlockCocktail();}},state:'stMMWs4'});
}ec('div');

                    this.isReadyToGo();
                }
        });