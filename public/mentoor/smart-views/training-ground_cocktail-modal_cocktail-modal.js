_Component({
                selector: 'cocktail-modal',
                c: 'CocktailModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','isLoading','cocktailsCategories','currentCategory','display','categoryHasCocktailsToUnlock','displayedCocktails','isLocked','hasCocktailToBeUnlocked','unlockCocktail'],
                children: {caWbjtZi6:'flk-spinner',cqB1ysU4z:'gold-icon',cfCBvJNvg:'flk-modal',cbhTFZaUc:'flk-alert'},
                render: function (component) {
                    let elCiubp = eo('div',null,null,`id`,`cocktail-modal`);
let cmprQCW = this._lc('cfCBvJNvg', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let cndVMky = component.isLoading;
this.setState('stRkt8O', cndVMky);
let cnd2KqW = !(cndVMky);
this.setState('stQ1NS2', cnd2KqW);
if (cndVMky) { 
let cmpsIlJ = this._lc('caWbjtZi6', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stRkt8O'});
}else { 
let eluDC3Y = eo('div',null,null,`class`,`row m-0`);
let elddzkQ = eo('aside',null,null,`class`,`col-sm-3 p-0`);
for (let i in component.cocktailsCategories) {
let category = component.cocktailsCategories[i]; 
 let iiCdiP = 'W3W_l5d' + i;
let elPthcF = eo('button','_BeIdeaTZor2' + i+iiCdiP,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(category)}]},`class`,`category-btn ${cls({active: component.currentCategory.id == category.id})}`,`type`,`button`);
let elmkZtU = ev('img','2gVff'+iiCdiP,null,`src`,`${category.icon}`,`title`,`${category.name}`,`alt`,`${category.name}`);
let elD7R7X = eo('strong','gz6ff'+iiCdiP);
text(category.name);
ec('strong');
let cndnEWX = component.categoryHasCocktailsToUnlock(category);
this.setState('stV0F0G', cndnEWX);
if (cndnEWX) { 
let el7aJOi = eo('span','mGTff'+iiCdiP,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('button');
}
ec('aside');
let elh_269 = eo('div',null,null,`class`,`col-sm-9 body`);
for (let i in component.displayedCocktails) {
let cocktail = component.displayedCocktails[i]; 
 let ii6gap = 'xXGHLp8' + i;
let elsQulk = eo('div','LPoRrJyzG4ww' + i+ii6gap,null,`class`,`cocktail`);
let el2o50p = eo('h3','I7Aff'+ii6gap,null,`class`,`name`);
let elP1TNL = ev('img','Jfpff'+ii6gap,null,`src`,`${cocktail.icon}`,`class`,`small mr-2`);
let el6eRd4 = eo('span','DcQff'+ii6gap);
text(cocktail.name);
ec('span');
let cndyezn = cocktail.canBeUnlocked && ! cocktail.unlocked;
this.setState('stTyjSB', cndyezn);
if (cndyezn) { 
let elf_a1T = eo('span','Oksff'+ii6gap,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('h3');
let elIjmmw = eo('p','svjff'+ii6gap,null,`class`,`description m-b-1`);
text(cocktail.description);
ec('p');
let eloUcYs = eo('div','zmdff'+ii6gap,null,`class`,`tags`);
for (let i in cocktail.tags) {
let tag = cocktail.tags[i]; 
 let iiaWEa = 'TtABPHF' + i;
let elo8gHC = eo('span','K3Oxm7Zf4CaB' + i+ii6gap+iiaWEa,null,`class`,`tag-icon`);
let el4J64V = ev('img','oGtff'+ii6gap+iiaWEa,null,`class`,` ${cls({gray: component.isLocked(cocktail) })}`,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
let cndJpQd = (Number(i) + 1) != cocktail.tags.length;
this.setState('stDSY2p', cndJpQd);
if (cndJpQd) { 
let elndmal = eo('i','y0uff'+ii6gap+iiaWEa,null,`class`,`${fas('plus')} plus icon`);
ec('i');
}ec('span');
}
let el9TmBL = eo('div','2JFff'+ii6gap,null,`class`,`cost ${cls({gray: component.isLocked(cocktail) })}`);
let cmpt2TJ = this._lc('cqB1ysU4z', {parent:component,parentTop:flkModal,props:{coins:cocktail.cost},insideLoop:true,index:"" +ii6gap});
let cndFqf_ = cocktail.cost == 0;
this.setState('st4V6Jk', cndFqf_);
let cnd6UTi = !(cndFqf_);
this.setState('stHSoFS', cnd6UTi);
if (cndFqf_) { 
let elnak4f = eo('span','g7cff'+ii6gap,null,`class`,`pink-text bold`);
text(`FREE!`);
ec('span');
}let cnd__v0 = ! cocktail.unlocked;
this.setState('steTpcv', cnd__v0);
let cndlMvo = !(cnd__v0);
this.setState('st6ewtm', cndlMvo);
if (cnd__v0) { 
let eloE8QR = eo('button','EhRff'+ii6gap,null, eventListeners, {onclick:[function(e) {var $el = this;component.hasCocktailToBeUnlocked = cocktail;}]}, boolAttrs, {disabled:! cocktail.canBeUnlocked},`class`,`unlock-btn`);
text(`Unlock`);
ec('button');
}else { 
let elug7Qw = eo('i','iR7ff'+ii6gap,null,`title`,`${trans(`Unlocked`)}`,`class`,`${fas('check')} green-text unlocked icon`);
ec('i');
}ec('div');
let cndvlt9 = ! Is.empty(cocktail.requiredCocktails);
this.setState('st8mkBr', cndvlt9);
if (cndvlt9) { 
let elIPDe2 = eo('div','TW5ff'+ii6gap,null,`class`,`m-t-1`);
let el3PQeg = eo('small','O6Mff'+ii6gap,null,`class`,`d-block m-t-2 bold red-text`);
text(`You should be a:`);
ec('small');
for (let i in cocktail.requiredCocktails) {
let requiredCocktail = cocktail.requiredCocktails[i]; 
 let iiZqML = 'f2RX1IT' + i;
let el6ICsM = eo('li','9tNDoX4rR8uU' + i+ii6gap+iiZqML,null,`class`,`required-cocktail bold`);
let elwURkI = eo('span','2mFff'+ii6gap+iiZqML,null,`class`,` ${cls({'brown-text': ! component.isLocked(requiredCocktail) })}`);
text(requiredCocktail.name);
ec('span');
let cndQLzo = ! component.isLocked(requiredCocktail);
this.setState('st3a9wO', cndQLzo);
if (cndQLzo) { 
let el74Uhb = eo('i','VmGff'+ii6gap+iiZqML,null,`class`,`${fas('check')} green-text ml-2 icon`);
ec('i');
}let cndcKLc = component.isLocked(requiredCocktail) && component.currentCategory.id != requiredCocktail.category.id;
this.setState('stIfd6w', cndcKLc);
if (cndcKLc) { 
let elTaP2L = eo('button','PJmff'+ii6gap+iiZqML,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(requiredCocktail.category)}]},`type`,`button`,`class`,`ml-2 teal-text`);
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
let cndAMpS = component.hasCocktailToBeUnlocked;
this.setState('stAheL7', cndAMpS);
if (cndAMpS) { 
let cmpMtQ2 = this._lc('cbhTFZaUc', {parent:component,events:{onclose:function(e) {let $el = this; component.hasCocktailToBeUnlocked = null;},onconfirm:function(e) {let $el = this; component.unlockCocktail();}},state:'stAheL7'});
}ec('div');

                    this.isReadyToGo();
                }
        });