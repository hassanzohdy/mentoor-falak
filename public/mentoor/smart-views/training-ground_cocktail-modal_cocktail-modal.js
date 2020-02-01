_Component({
                selector: 'cocktail-modal',
                c: 'CocktailModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','isLoading','cocktailsCategories','currentCategory','display','categoryHasCocktailsToUnlock','displayedCocktails','isLocked','hasCocktailToBeUnlocked','unlockCocktail'],
                children: {cCOckAFem:'flk-spinner',czY1alOR4:'gold-icon',ccaxYHhSD:'flk-modal',cUORNbYIM:'flk-alert'},
                render: function (component) {
                    let elTO4In = eo('div',null,null,`id`,`cocktail-modal`);
let cmpJMuk = this._lc('ccaxYHhSD', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let cndXz9n = component.isLoading;
this.setState('stDrZt6', cndXz9n);
let cndnw0c = !(cndXz9n);
this.setState('st6ImVc', cndnw0c);
if (cndXz9n) { 
let cmp_RaN = this._lc('cCOckAFem', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stDrZt6'});
}else { 
let elBhgXC = eo('div',null,null,`class`,`row m-0`);
let elA_NVI = eo('aside',null,null,`class`,`col-sm-3 p-0`);
for (let i in component.cocktailsCategories) {
let category = component.cocktailsCategories[i]; 
 let iisBDJ = '7deONzt' + i;
let elxeIE9 = eo('button','eYfXlJOWQylc' + i+iisBDJ,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(category)}]},`type`,`button`,`class`,`category-btn`);
elxeIE9.cls = {active: component.currentCategory.id == category.id};

            for (let className in elxeIE9.cls) {
                elxeIE9.classList.toggle(className, elxeIE9.cls[className]);
            }  
            let elP6f4l = ev('img','Rcbff'+iisBDJ,null,`src`,`${category.icon}`,`title`,`${category.name}`,`alt`,`${category.name}`);
let elVUwK1 = eo('strong','qaYff'+iisBDJ);
text(category.name);
ec('strong');
let cndQBUg = component.categoryHasCocktailsToUnlock(category);
this.setState('stzpFJk', cndQBUg);
if (cndQBUg) { 
let elcd6nK = eo('span','w6xff'+iisBDJ,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('button');
}
ec('aside');
let el2pwH0 = eo('div',null,null,`class`,`col-sm-9 body`);
for (let i in component.displayedCocktails) {
let cocktail = component.displayedCocktails[i]; 
 let iiJaDb = 'xfaJ1rV' + i;
let elmQsdi = eo('div','NPr82X9cIL2H' + i+iiJaDb,null,`class`,`cocktail`);
let eloFMmm = eo('h3','OLZff'+iiJaDb,null,`class`,`name`);
let el9dHw7 = ev('img','mqdff'+iiJaDb,null,`src`,`${cocktail.icon}`,`class`,`small mr-2`);
let elswZ1I = eo('span','8j2ff'+iiJaDb);
text(cocktail.name);
ec('span');
let cndNTmM = cocktail.canBeUnlocked && ! cocktail.unlocked;
this.setState('stwQ_TS', cndNTmM);
if (cndNTmM) { 
let eleXeZ5 = eo('span','5_3ff'+iiJaDb,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('h3');
let elfoXz9 = eo('p','Bt3ff'+iiJaDb,null,`class`,`description m-b-1`);
text(cocktail.description);
ec('p');
let elt1ynu = eo('div','RMxff'+iiJaDb,null,`class`,`tags`);
for (let i in cocktail.tags) {
let tag = cocktail.tags[i]; 
 let iin2sI = 'GHScUjX' + i;
let ely2Cri = eo('span','LtWytig20GXc' + i+iiJaDb+iin2sI,null,`class`,`tag-icon`);
let elmxOXj = ev('img','_ddff'+iiJaDb+iin2sI,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
elmxOXj.cls = {gray: component.isLocked(cocktail) };

            for (let className in elmxOXj.cls) {
                elmxOXj.classList.toggle(className, elmxOXj.cls[className]);
            }  
            let cndFRG3 = (Number(i) + 1) != cocktail.tags.length;
this.setState('stwx1OG', cndFRG3);
if (cndFRG3) { 
let elx3ZjL = eo('i','vmCff'+iiJaDb+iin2sI,null,`class`,`${fas('plus') + ' plus icon'}`);
ec('i');
}ec('span');
}
let eloX1NC = eo('div','KLSff'+iiJaDb,null,`class`,`cost`);
eloX1NC.cls = {gray: component.isLocked(cocktail) };

            for (let className in eloX1NC.cls) {
                eloX1NC.classList.toggle(className, eloX1NC.cls[className]);
            }  
            let cmpQ7bR = this._lc('czY1alOR4', {parent:component,parentTop:flkModal,props:{coins:cocktail.cost},insideLoop:true,index:"" +iiJaDb});
let cnd8yXT = cocktail.cost == 0;
this.setState('stsrHU1', cnd8yXT);
let cndwAJ3 = !(cnd8yXT);
this.setState('stDSX2z', cndwAJ3);
if (cnd8yXT) { 
let elrWz_E = eo('span','P0_ff'+iiJaDb,null,`class`,`pink-text bold`);
text(`FREE!`);
ec('span');
}let cndkzm2 = ! cocktail.unlocked;
this.setState('st7peip', cndkzm2);
let cndgHvW = !(cndkzm2);
this.setState('stK7pzG', cndgHvW);
if (cndkzm2) { 
let eli2oTW = eo('button','VGvff'+iiJaDb,null, eventListeners, {onclick:[function(e) {var $el = this;component.hasCocktailToBeUnlocked = cocktail;}]}, boolAttrs, {disabled:! cocktail.canBeUnlocked},`class`,`unlock-btn`);
text(`Unlock`);
ec('button');
}else { 
let elP4ogX = eo('i','Gdsff'+iiJaDb,null,`title`,`${trans(`Unlocked`)}`,`class`,`${fas('check') + ' green-text unlocked icon'}`);
ec('i');
}ec('div');
let cnd6RAQ = ! Is.empty(cocktail.requiredCocktails);
this.setState('stqkeIw', cnd6RAQ);
if (cnd6RAQ) { 
let elpnJdz = eo('div','bYdff'+iiJaDb,null,`class`,`m-t-1`);
let elQuK99 = eo('small','2qFff'+iiJaDb,null,`class`,`d-block m-t-2 bold red-text`);
text(`You should be a:`);
ec('small');
for (let i in cocktail.requiredCocktails) {
let requiredCocktail = cocktail.requiredCocktails[i]; 
 let iiDByj = '3xHBvY7' + i;
let elD8som = eo('li','vrBRNNv5kN_m' + i+iiJaDb+iiDByj,null,`class`,`required-cocktail bold`);
let elFlVXw = eo('span','Rsrff'+iiJaDb+iiDByj);
elFlVXw.cls = {'brown-text': ! component.isLocked(requiredCocktail) };

            for (let className in elFlVXw.cls) {
                elFlVXw.classList.toggle(className, elFlVXw.cls[className]);
            }  
            text(requiredCocktail.name);
ec('span');
let cndr3eO = ! component.isLocked(requiredCocktail);
this.setState('stTNbhK', cndr3eO);
if (cndr3eO) { 
let elLlrmo = eo('i','i__ff'+iiJaDb+iiDByj,null,`class`,`${fas('check') + ' green-text ml-2 icon'}`);
ec('i');
}let cndfS7w = component.isLocked(requiredCocktail) && component.currentCategory.id != requiredCocktail.category.id;
this.setState('stQza4X', cndfS7w);
if (cndfS7w) { 
let elFWZMZ = eo('button','t36ff'+iiJaDb+iiDByj,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(requiredCocktail.category)}]},`type`,`button`,`class`,`ml-2 teal-text`);
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
let cndGC4c = component.hasCocktailToBeUnlocked;
this.setState('stxEnWT', cndGC4c);
if (cndGC4c) { 
let cmp_heM = this._lc('cUORNbYIM', {parent:component,events:{onclose:function(e) {let $el = this; component.hasCocktailToBeUnlocked = null;},onconfirm:function(e) {let $el = this; component.unlockCocktail();}},state:'stxEnWT'});
}ec('div');

                    this.isReadyToGo();
                }
        });