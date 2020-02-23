_Component({
                selector: 'cocktail-modal',
                c: 'CocktailModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','isLoading','cocktailsCategories','currentCategory','display','categoryHasCocktailsToUnlock','displayedCocktails','isLocked','hasCocktailToBeUnlocked','unlockCocktail'],
                children: {cocL8gBz2:'flk-spinner',ckId3JD4S:'gold-icon',cOUXnjl6B:'flk-modal',ca1AHa9Ug:'flk-alert'},
                render: function (component) {
                    let elS8O5t = eo('div',null,null,`id`,`cocktail-modal`);
let cmpz6Va = this._lc('cOUXnjl6B', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let cndqasU = component.isLoading;
this.setState('stVhxz1', cndqasU);
let cndmRc6 = !(cndqasU);
this.setState('stUrFb4', cndmRc6);
if (cndqasU) { 
let cmp6jfq = this._lc('cocL8gBz2', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stVhxz1'});
}else { 
let elFZAO5 = eo('div',null,null,`class`,`row m-0`);
let el9HQjb = eo('aside',null,null,`class`,`col-sm-3 p-0`);
for (let i in component.cocktailsCategories) {
let category = component.cocktailsCategories[i]; 
 let iiT7vp = 'sdqy_tG' + i;
let elprYrt = eo('button','6lF9WjyU8fsn' + i+iiT7vp,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(category)}]},`type`,`button`,`class`,`category-btn`);
elprYrt.cls = {active: component.currentCategory.id == category.id};

            for (let className in elprYrt.cls) {
                elprYrt.classList.toggle(className, elprYrt.cls[className]);
            }  
            let el8sEdC = ev('img','F8Aff'+iiT7vp,null,`src`,`${category.icon}`,`title`,`${category.name}`,`alt`,`${category.name}`);
let eltuCQ_ = eo('strong','a_Rff'+iiT7vp);
text(category.name);
ec('strong');
let cnd6USa = component.categoryHasCocktailsToUnlock(category);
this.setState('stuYHMT', cnd6USa);
if (cnd6USa) { 
let elv3mTI = eo('span','v4Rff'+iiT7vp,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('button');
}
ec('aside');
let elgJUn5 = eo('div',null,null,`class`,`col-sm-9 body`);
for (let i in component.displayedCocktails) {
let cocktail = component.displayedCocktails[i]; 
 let ii5YfH = 'LQVYHAC' + i;
let el0MoXB = eo('div','pzfCrWF5DKeR' + i+ii5YfH,null,`class`,`cocktail`);
let el8pnri = eo('h3','Yimff'+ii5YfH,null,`class`,`name`);
let elJTSdU = ev('img','m6Cff'+ii5YfH,null,`src`,`${cocktail.icon}`,`class`,`small mr-2`);
let elcw4vM = eo('span','PHlff'+ii5YfH);
text(cocktail.name);
ec('span');
let cndh9CR = cocktail.canBeUnlocked && ! cocktail.unlocked;
this.setState('stkMWn0', cndh9CR);
if (cndh9CR) { 
let elhFH0J = eo('span','AlRff'+ii5YfH,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('h3');
let elvtJDd = eo('p','ga4ff'+ii5YfH,null,`class`,`description m-b-1`);
text(cocktail.description);
ec('p');
let elCylNe = eo('div','AISff'+ii5YfH,null,`class`,`tags`);
for (let i in cocktail.tags) {
let tag = cocktail.tags[i]; 
 let iiIX0L = '4flGnDc' + i;
let elknFpV = eo('span','oZzbRUZkAwTW' + i+ii5YfH+iiIX0L,null,`class`,`tag-icon`);
let eleLwds = ev('img','fCQff'+ii5YfH+iiIX0L,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
eleLwds.cls = {gray: component.isLocked(cocktail) };

            for (let className in eleLwds.cls) {
                eleLwds.classList.toggle(className, eleLwds.cls[className]);
            }  
            let cndJrB8 = (Number(i) + 1) != cocktail.tags.length;
this.setState('st1g_A2', cndJrB8);
if (cndJrB8) { 
let elU0Op_ = eo('i','IKsff'+ii5YfH+iiIX0L,null,`class`,`${fas('plus') + ' plus icon'}`);
ec('i');
}ec('span');
}
let elCU9Af = eo('div','fHjff'+ii5YfH,null,`class`,`cost`);
elCU9Af.cls = {gray: component.isLocked(cocktail) };

            for (let className in elCU9Af.cls) {
                elCU9Af.classList.toggle(className, elCU9Af.cls[className]);
            }  
            let cmpXtp0 = this._lc('ckId3JD4S', {parent:component,parentTop:flkModal,props:{coins:cocktail.cost},insideLoop:true,index:"" +ii5YfH});
let cnd1j8j = cocktail.cost == 0;
this.setState('stt6b1K', cnd1j8j);
let cndgsH6 = !(cnd1j8j);
this.setState('stH_sS4', cndgsH6);
if (cnd1j8j) { 
let elqcAli = eo('span','5Wmff'+ii5YfH,null,`class`,`pink-text bold`);
text(`FREE!`);
ec('span');
}let cnd3vrS = ! cocktail.unlocked;
this.setState('stNWTBH', cnd3vrS);
let cndPegn = !(cnd3vrS);
this.setState('stwphGg', cndPegn);
if (cnd3vrS) { 
let elxNThF = eo('button','uT9ff'+ii5YfH,null, eventListeners, {onclick:[function(e) {var $el = this;component.hasCocktailToBeUnlocked = cocktail;}]}, boolAttrs, {disabled:! cocktail.canBeUnlocked},`class`,`unlock-btn`);
text(`Unlock`);
ec('button');
}else { 
let elIb0Wx = eo('i','QMzff'+ii5YfH,null,`title`,`${trans(`Unlocked`)}`,`class`,`${fas('check') + ' green-text unlocked icon'}`);
ec('i');
}ec('div');
let cnd4Gko = ! Is.empty(cocktail.requiredCocktails);
this.setState('stAj0B0', cnd4Gko);
if (cnd4Gko) { 
let elPojZg = eo('div','7wFff'+ii5YfH,null,`class`,`m-t-1`);
let elAxW6D = eo('small','_FRff'+ii5YfH,null,`class`,`d-block m-t-2 bold red-text`);
text(`You should be a:`);
ec('small');
for (let i in cocktail.requiredCocktails) {
let requiredCocktail = cocktail.requiredCocktails[i]; 
 let iikxD9 = 'oh36Eew' + i;
let elubZl_ = eo('li','EklUYM7QDghg' + i+ii5YfH+iikxD9,null,`class`,`required-cocktail bold`);
let el5Fr3y = eo('span','8Tbff'+ii5YfH+iikxD9);
el5Fr3y.cls = {'brown-text': ! component.isLocked(requiredCocktail) };

            for (let className in el5Fr3y.cls) {
                el5Fr3y.classList.toggle(className, el5Fr3y.cls[className]);
            }  
            text(requiredCocktail.name);
ec('span');
let cnd5JZ1 = ! component.isLocked(requiredCocktail);
this.setState('stW6niP', cnd5JZ1);
if (cnd5JZ1) { 
let elGVreT = eo('i','085ff'+ii5YfH+iikxD9,null,`class`,`${fas('check') + ' green-text ml-2 icon'}`);
ec('i');
}let cndoYvp = component.isLocked(requiredCocktail) && component.currentCategory.id != requiredCocktail.category.id;
this.setState('st0Fzla', cndoYvp);
if (cndoYvp) { 
let el9DHtx = eo('button','mYdff'+ii5YfH+iikxD9,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(requiredCocktail.category)}]},`type`,`button`,`class`,`ml-2 teal-text`);
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
let cnd2afd = component.hasCocktailToBeUnlocked;
this.setState('strco2j', cnd2afd);
if (cnd2afd) { 
let cmpCafJ = this._lc('ca1AHa9Ug', {parent:component,events:{onclose:function(e) {let $el = this; component.hasCocktailToBeUnlocked = null;},onconfirm:function(e) {let $el = this; component.unlockCocktail();}},state:'strco2j'});
}ec('div');

                    this.isReadyToGo();
                }
        });