_Component({
                selector: 'cocktail-modal',
                c: 'CocktailModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','isLoading','cocktailsCategories','currentCategory','display','categoryHasCocktailsToUnlock','displayedCocktails','isLocked','hasCocktailToBeUnlocked','unlockCocktail'],
                children: {ctPbFmth8:'flk-spinner',cqwmvSkYt:'gold-icon',cm2SkTr9m:'flk-modal',cpEGwFVPP:'flk-alert'},
                render: function (component) {
                    let el_CnMY = eo('div',null,null,`id`,`cocktail-modal`);
let cmpimco = this._lc('cm2SkTr9m', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let cnd5gZG = component.isLoading;
this.setState('stfVxij', cnd5gZG);
let cndkMSt = !(cnd5gZG);
this.setState('stLd6aw', cndkMSt);
if (cnd5gZG) { 
let cmpkypk = this._lc('ctPbFmth8', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stfVxij'});
}else { 
let elzowzF = eo('div',null,null,`class`,`row m-0`);
let elaLUjy = eo('aside',null,null,`class`,`col-sm-3 p-0`);
for (let i in component.cocktailsCategories) {
let category = component.cocktailsCategories[i]; 
 let iitKOn = 'WpcDH31' + i;
let elowdP0 = eo('button','2w_os6TJS3z1' + i+iitKOn,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(category)}]},`type`,`button`,`class`,`category-btn`);
elowdP0.cls = {active: component.currentCategory.id == category.id};

            for (let className in elowdP0.cls) {
                elowdP0.classList.toggle(className, elowdP0.cls[className]);
            }  
            let elQeXe9 = ev('img','1vkff'+iitKOn,null,`src`,`${category.icon}`,`title`,`${category.name}`,`alt`,`${category.name}`);
let elGhcnd = eo('strong','L1Fff'+iitKOn);
text(category.name);
ec('strong');
let cndiDy_ = component.categoryHasCocktailsToUnlock(category);
this.setState('stQbMcj', cndiDy_);
if (cndiDy_) { 
let elGrWO2 = eo('span','YO2ff'+iitKOn,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('button');
}
ec('aside');
let elrKVSf = eo('div',null,null,`class`,`col-sm-9 body`);
for (let i in component.displayedCocktails) {
let cocktail = component.displayedCocktails[i]; 
 let iihvTE = 'AHByEOI' + i;
let el8MjER = eo('div','LccDaWsoIu4O' + i+iihvTE,null,`class`,`cocktail`);
let el5_Ry2 = eo('h3','z_hff'+iihvTE,null,`class`,`name`);
let elxRvvx = ev('img','d2cff'+iihvTE,null,`src`,`${cocktail.icon}`,`class`,`small mr-2`);
let elHlKwy = eo('span','JR9ff'+iihvTE);
text(cocktail.name);
ec('span');
let cnd47MN = cocktail.canBeUnlocked && ! cocktail.unlocked;
this.setState('stCmG8Z', cnd47MN);
if (cnd47MN) { 
let elHAcRw = eo('span','ALxff'+iihvTE,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('h3');
let elIyAK6 = eo('p','kbXff'+iihvTE,null,`class`,`description m-b-1`);
text(cocktail.description);
ec('p');
let elBzwPB = eo('div','NyNff'+iihvTE,null,`class`,`tags`);
for (let i in cocktail.tags) {
let tag = cocktail.tags[i]; 
 let iiwSHb = 'y47qP5d' + i;
let elXVak5 = eo('span','Mkj7oVsAlSVr' + i+iihvTE+iiwSHb,null,`class`,`tag-icon`);
let elivvcL = ev('img','mC8ff'+iihvTE+iiwSHb,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
elivvcL.cls = {gray: component.isLocked(cocktail) };

            for (let className in elivvcL.cls) {
                elivvcL.classList.toggle(className, elivvcL.cls[className]);
            }  
            let cndJrPk = (Number(i) + 1) != cocktail.tags.length;
this.setState('stDEaff', cndJrPk);
if (cndJrPk) { 
let el3fEDt = eo('i','T_8ff'+iihvTE+iiwSHb,null,`class`,`${fas('plus') + ' plus icon'}`);
ec('i');
}ec('span');
}
let elvNN_a = eo('div','Nimff'+iihvTE,null,`class`,`cost`);
elvNN_a.cls = {gray: component.isLocked(cocktail) };

            for (let className in elvNN_a.cls) {
                elvNN_a.classList.toggle(className, elvNN_a.cls[className]);
            }  
            let cmp6owl = this._lc('cqwmvSkYt', {parent:component,parentTop:flkModal,props:{coins:cocktail.cost},insideLoop:true,index:"" +iihvTE});
let cndZPMB = cocktail.cost == 0;
this.setState('stttVAI', cndZPMB);
let cndFu3F = !(cndZPMB);
this.setState('st0aLvs', cndFu3F);
if (cndZPMB) { 
let elxqLD1 = eo('span','5eFff'+iihvTE,null,`class`,`pink-text bold`);
text(`FREE!`);
ec('span');
}let cndECNs = ! cocktail.unlocked;
this.setState('sttuEfx', cndECNs);
let cndcMVF = !(cndECNs);
this.setState('styjggd', cndcMVF);
if (cndECNs) { 
let el_EqEj = eo('button','wsrff'+iihvTE,null, eventListeners, {onclick:[function(e) {var $el = this;component.hasCocktailToBeUnlocked = cocktail;}]}, boolAttrs, {disabled:! cocktail.canBeUnlocked},`class`,`unlock-btn`);
text(`Unlock`);
ec('button');
}else { 
let eliAfxG = eo('i','JGHff'+iihvTE,null,`title`,`${trans(`Unlocked`)}`,`class`,`${fas('check') + ' green-text unlocked icon'}`);
ec('i');
}ec('div');
let cndPiAH = ! Is.empty(cocktail.requiredCocktails);
this.setState('steuUs5', cndPiAH);
if (cndPiAH) { 
let elAjqCa = eo('div','MO1ff'+iihvTE,null,`class`,`m-t-1`);
let elEvGBE = eo('small','P5wff'+iihvTE,null,`class`,`d-block m-t-2 bold red-text`);
text(`You should be a:`);
ec('small');
for (let i in cocktail.requiredCocktails) {
let requiredCocktail = cocktail.requiredCocktails[i]; 
 let iiQo55 = 'v2jkl35' + i;
let elkhfLt = eo('li','AgQnVOzmBM68' + i+iihvTE+iiQo55,null,`class`,`required-cocktail bold`);
let elCLeJR = eo('span','W3vff'+iihvTE+iiQo55);
elCLeJR.cls = {'brown-text': ! component.isLocked(requiredCocktail) };

            for (let className in elCLeJR.cls) {
                elCLeJR.classList.toggle(className, elCLeJR.cls[className]);
            }  
            text(requiredCocktail.name);
ec('span');
let cndkzUx = ! component.isLocked(requiredCocktail);
this.setState('stbZsGm', cndkzUx);
if (cndkzUx) { 
let elWTSaf = eo('i','bvKff'+iihvTE+iiQo55,null,`class`,`${fas('check') + ' green-text ml-2 icon'}`);
ec('i');
}let cndEmDN = component.isLocked(requiredCocktail) && component.currentCategory.id != requiredCocktail.category.id;
this.setState('stStisI', cndEmDN);
if (cndEmDN) { 
let elTZt_c = eo('button','54lff'+iihvTE+iiQo55,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(requiredCocktail.category)}]},`type`,`button`,`class`,`ml-2 teal-text`);
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
let cndTgQq = component.hasCocktailToBeUnlocked;
this.setState('stHaXD4', cndTgQq);
if (cndTgQq) { 
let cmps02e = this._lc('cpEGwFVPP', {parent:component,events:{onclose:function(e) {let $el = this; component.hasCocktailToBeUnlocked = null;},onconfirm:function(e) {let $el = this; component.unlockCocktail();}},state:'stHaXD4'});
}ec('div');

                    this.isReadyToGo();
                }
        });