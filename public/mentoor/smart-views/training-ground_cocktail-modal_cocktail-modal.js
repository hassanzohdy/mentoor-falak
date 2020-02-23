_Component({
                selector: 'cocktail-modal',
                c: 'CocktailModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','isLoading','cocktailsCategories','currentCategory','display','categoryHasCocktailsToUnlock','displayedCocktails','isLocked','hasCocktailToBeUnlocked','unlockCocktail'],
                children: {c7z6MtuPO:'flk-spinner',c4axovRY8:'gold-icon',cBA_lcZaN:'flk-modal',cbz7OPZBT:'flk-alert'},
                render: function (component) {
                    let elPwYDD = eo('div',null,null,`id`,`cocktail-modal`);
let cmp6HVg = this._lc('cBA_lcZaN', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let cndCcxh = component.isLoading;
this.setState('stIbnO8', cndCcxh);
let cndoaEd = !(cndCcxh);
this.setState('stf583B', cndoaEd);
if (cndCcxh) { 
let cmpQwL1 = this._lc('c7z6MtuPO', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stIbnO8'});
}else { 
let elIH_kV = eo('div',null,null,`class`,`row m-0`);
let elFMNxu = eo('aside',null,null,`class`,`col-sm-3 p-0`);
for (let i in component.cocktailsCategories) {
let category = component.cocktailsCategories[i]; 
 let iiaOej = 'OLIXoAM' + i;
let el8GE68 = eo('button','doQNb_NMa96D' + i+iiaOej,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(category)}]},`type`,`button`,`class`,`category-btn`);
el8GE68.cls = {active: component.currentCategory.id == category.id};

            for (let className in el8GE68.cls) {
                el8GE68.classList.toggle(className, el8GE68.cls[className]);
            }  
            let elu7ut_ = ev('img','J2Cff'+iiaOej,null,`src`,`${category.icon}`,`title`,`${category.name}`,`alt`,`${category.name}`);
let elCr6rY = eo('strong','dkwff'+iiaOej);
text(category.name);
ec('strong');
let cndXWXH = component.categoryHasCocktailsToUnlock(category);
this.setState('str1Auk', cndXWXH);
if (cndXWXH) { 
let elKNQ4b = eo('span','Nsiff'+iiaOej,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('button');
}
ec('aside');
let el44NXt = eo('div',null,null,`class`,`col-sm-9 body`);
for (let i in component.displayedCocktails) {
let cocktail = component.displayedCocktails[i]; 
 let iiLrfc = 'UiapqyX' + i;
let elPXSxh = eo('div','uWUKCw9mC65w' + i+iiLrfc,null,`class`,`cocktail`);
let el_tnVA = eo('h3','545ff'+iiLrfc,null,`class`,`name`);
let elVcqjt = ev('img','R29ff'+iiLrfc,null,`src`,`${cocktail.icon}`,`class`,`small mr-2`);
let eleyPy_ = eo('span','ZnCff'+iiLrfc);
text(cocktail.name);
ec('span');
let cndsStA = cocktail.canBeUnlocked && ! cocktail.unlocked;
this.setState('st52rtW', cndsStA);
if (cndsStA) { 
let elkr76e = eo('span','qWTff'+iiLrfc,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('h3');
let elfOyTw = eo('p','YHaff'+iiLrfc,null,`class`,`description m-b-1`);
text(cocktail.description);
ec('p');
let elysTtg = eo('div','gDnff'+iiLrfc,null,`class`,`tags`);
for (let i in cocktail.tags) {
let tag = cocktail.tags[i]; 
 let iiVDfq = '6tkBPev' + i;
let el_Ocgd = eo('span','q7SAVgMwsouc' + i+iiLrfc+iiVDfq,null,`class`,`tag-icon`);
let elAFBhp = ev('img','IZPff'+iiLrfc+iiVDfq,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
elAFBhp.cls = {gray: component.isLocked(cocktail) };

            for (let className in elAFBhp.cls) {
                elAFBhp.classList.toggle(className, elAFBhp.cls[className]);
            }  
            let cndBKjp = (Number(i) + 1) != cocktail.tags.length;
this.setState('stz_0Yw', cndBKjp);
if (cndBKjp) { 
let elpSIdb = eo('i','kWJff'+iiLrfc+iiVDfq,null,`class`,`${fas('plus') + ' plus icon'}`);
ec('i');
}ec('span');
}
let el67vuu = eo('div','KOuff'+iiLrfc,null,`class`,`cost`);
el67vuu.cls = {gray: component.isLocked(cocktail) };

            for (let className in el67vuu.cls) {
                el67vuu.classList.toggle(className, el67vuu.cls[className]);
            }  
            let cmpzwPI = this._lc('c4axovRY8', {parent:component,parentTop:flkModal,props:{coins:cocktail.cost},insideLoop:true,index:"" +iiLrfc});
let cndTn4D = cocktail.cost == 0;
this.setState('stRwKOa', cndTn4D);
let cndOtR3 = !(cndTn4D);
this.setState('st0TIjI', cndOtR3);
if (cndTn4D) { 
let elHbyJK = eo('span','MsKff'+iiLrfc,null,`class`,`pink-text bold`);
text(`FREE!`);
ec('span');
}let cndD73a = ! cocktail.unlocked;
this.setState('stkmDQI', cndD73a);
let cndRKmD = !(cndD73a);
this.setState('stD5sPB', cndRKmD);
if (cndD73a) { 
let eliC6oJ = eo('button','05Vff'+iiLrfc,null, eventListeners, {onclick:[function(e) {var $el = this;component.hasCocktailToBeUnlocked = cocktail;}]}, boolAttrs, {disabled:! cocktail.canBeUnlocked},`class`,`unlock-btn`);
text(`Unlock`);
ec('button');
}else { 
let elHcsqX = eo('i','NjWff'+iiLrfc,null,`title`,`${trans(`Unlocked`)}`,`class`,`${fas('check') + ' green-text unlocked icon'}`);
ec('i');
}ec('div');
let cndTYL7 = ! Is.empty(cocktail.requiredCocktails);
this.setState('stIuqft', cndTYL7);
if (cndTYL7) { 
let el7iMXb = eo('div','kNsff'+iiLrfc,null,`class`,`m-t-1`);
let elzYVDi = eo('small','g8jff'+iiLrfc,null,`class`,`d-block m-t-2 bold red-text`);
text(`You should be a:`);
ec('small');
for (let i in cocktail.requiredCocktails) {
let requiredCocktail = cocktail.requiredCocktails[i]; 
 let iiOsvg = 'CRhZQBn' + i;
let elUqQdo = eo('li','YJxrNe5s4N5b' + i+iiLrfc+iiOsvg,null,`class`,`required-cocktail bold`);
let elEeILL = eo('span','bw6ff'+iiLrfc+iiOsvg);
elEeILL.cls = {'brown-text': ! component.isLocked(requiredCocktail) };

            for (let className in elEeILL.cls) {
                elEeILL.classList.toggle(className, elEeILL.cls[className]);
            }  
            text(requiredCocktail.name);
ec('span');
let cndZ2ph = ! component.isLocked(requiredCocktail);
this.setState('stxkaqa', cndZ2ph);
if (cndZ2ph) { 
let el6YAWC = eo('i','dS2ff'+iiLrfc+iiOsvg,null,`class`,`${fas('check') + ' green-text ml-2 icon'}`);
ec('i');
}let cndlJoQ = component.isLocked(requiredCocktail) && component.currentCategory.id != requiredCocktail.category.id;
this.setState('stdX7_G', cndlJoQ);
if (cndlJoQ) { 
let elC4lOZ = eo('button','6Cqff'+iiLrfc+iiOsvg,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(requiredCocktail.category)}]},`type`,`button`,`class`,`ml-2 teal-text`);
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
let cnd2jXQ = component.hasCocktailToBeUnlocked;
this.setState('stlzMn4', cnd2jXQ);
if (cnd2jXQ) { 
let cmpBQZj = this._lc('cbz7OPZBT', {parent:component,events:{onclose:function(e) {let $el = this; component.hasCocktailToBeUnlocked = null;},onconfirm:function(e) {let $el = this; component.unlockCocktail();}},state:'stlzMn4'});
}ec('div');

                    this.isReadyToGo();
                }
        });