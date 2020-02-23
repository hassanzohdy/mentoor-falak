_Component({
                selector: 'cocktail-modal',
                c: 'CocktailModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','isLoading','cocktailsCategories','currentCategory','display','categoryHasCocktailsToUnlock','displayedCocktails','isLocked','hasCocktailToBeUnlocked','unlockCocktail'],
                children: {cmHubufaC:'flk-spinner',csPm3TVZr:'gold-icon',cJt8pSE6o:'flk-modal',cKsuVyAUZ:'flk-alert'},
                render: function (component) {
                    let el9gMkA = eo('div',null,null,`id`,`cocktail-modal`);
let cmppKOa = this._lc('cJt8pSE6o', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let cndZDOs = component.isLoading;
this.setState('st6TKAn', cndZDOs);
let cnduXf8 = !(cndZDOs);
this.setState('stgGZWH', cnduXf8);
if (cndZDOs) { 
let cmpnTas = this._lc('cmHubufaC', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'st6TKAn'});
}else { 
let elQtbjc = eo('div',null,null,`class`,`row m-0`);
let elATNRK = eo('aside',null,null,`class`,`col-sm-3 p-0`);
for (let i in component.cocktailsCategories) {
let category = component.cocktailsCategories[i]; 
 let iisNLh = 'fto2TQE' + i;
let elXqevE = eo('button','KUIsGrd2GtVc' + i+iisNLh,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(category)}]},`type`,`button`,`class`,`category-btn`);
elXqevE.cls = {active: component.currentCategory.id == category.id};

            for (let className in elXqevE.cls) {
                elXqevE.classList.toggle(className, elXqevE.cls[className]);
            }  
            let elIyuy0 = ev('img','1lkff'+iisNLh,null,`src`,`${category.icon}`,`title`,`${category.name}`,`alt`,`${category.name}`);
let eldut8I = eo('strong','9Znff'+iisNLh);
text(category.name);
ec('strong');
let cndsZ71 = component.categoryHasCocktailsToUnlock(category);
this.setState('stLTb8F', cndsZ71);
if (cndsZ71) { 
let elvaznj = eo('span','nhfff'+iisNLh,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('button');
}
ec('aside');
let elpPVar = eo('div',null,null,`class`,`col-sm-9 body`);
for (let i in component.displayedCocktails) {
let cocktail = component.displayedCocktails[i]; 
 let iiDkOF = 'kgoObsN' + i;
let elyXAqY = eo('div','A1PYvvwEzovh' + i+iiDkOF,null,`class`,`cocktail`);
let el3hqr5 = eo('h3','M22ff'+iiDkOF,null,`class`,`name`);
let el_2FqS = ev('img','DYFff'+iiDkOF,null,`src`,`${cocktail.icon}`,`class`,`small mr-2`);
let elukCeN = eo('span','QYxff'+iiDkOF);
text(cocktail.name);
ec('span');
let cndyPsF = cocktail.canBeUnlocked && ! cocktail.unlocked;
this.setState('st36JN7', cndyPsF);
if (cndyPsF) { 
let elktJvt = eo('span','JKHff'+iiDkOF,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('h3');
let elB6EQZ = eo('p','ogdff'+iiDkOF,null,`class`,`description m-b-1`);
text(cocktail.description);
ec('p');
let elg3TBG = eo('div','q5bff'+iiDkOF,null,`class`,`tags`);
for (let i in cocktail.tags) {
let tag = cocktail.tags[i]; 
 let iiiKTg = 'N2P6XQe' + i;
let elTjkyW = eo('span','7k7oghEYWQDG' + i+iiDkOF+iiiKTg,null,`class`,`tag-icon`);
let elF9tZr = ev('img','se6ff'+iiDkOF+iiiKTg,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
elF9tZr.cls = {gray: component.isLocked(cocktail) };

            for (let className in elF9tZr.cls) {
                elF9tZr.classList.toggle(className, elF9tZr.cls[className]);
            }  
            let cndnqhg = (Number(i) + 1) != cocktail.tags.length;
this.setState('st1MiYN', cndnqhg);
if (cndnqhg) { 
let elfm8v0 = eo('i','qwrff'+iiDkOF+iiiKTg,null,`class`,`${fas('plus') + ' plus icon'}`);
ec('i');
}ec('span');
}
let elvP0Dy = eo('div','zZlff'+iiDkOF,null,`class`,`cost`);
elvP0Dy.cls = {gray: component.isLocked(cocktail) };

            for (let className in elvP0Dy.cls) {
                elvP0Dy.classList.toggle(className, elvP0Dy.cls[className]);
            }  
            let cmpbZD0 = this._lc('csPm3TVZr', {parent:component,parentTop:flkModal,props:{coins:cocktail.cost},insideLoop:true,index:"" +iiDkOF});
let cndwLeh = cocktail.cost == 0;
this.setState('sta6I7x', cndwLeh);
let cnd7Ont = !(cndwLeh);
this.setState('sth129P', cnd7Ont);
if (cndwLeh) { 
let eljY2nN = eo('span','blnff'+iiDkOF,null,`class`,`pink-text bold`);
text(`FREE!`);
ec('span');
}let cndnUNY = ! cocktail.unlocked;
this.setState('stprHT0', cndnUNY);
let cndClwX = !(cndnUNY);
this.setState('stMWirA', cndClwX);
if (cndnUNY) { 
let eltDHJE = eo('button','N70ff'+iiDkOF,null, eventListeners, {onclick:[function(e) {var $el = this;component.hasCocktailToBeUnlocked = cocktail;}]}, boolAttrs, {disabled:! cocktail.canBeUnlocked},`class`,`unlock-btn`);
text(`Unlock`);
ec('button');
}else { 
let elShXnH = eo('i','OzVff'+iiDkOF,null,`title`,`${trans(`Unlocked`)}`,`class`,`${fas('check') + ' green-text unlocked icon'}`);
ec('i');
}ec('div');
let cndHtsp = ! Is.empty(cocktail.requiredCocktails);
this.setState('stCoE7V', cndHtsp);
if (cndHtsp) { 
let elNWIUs = eo('div','d7jff'+iiDkOF,null,`class`,`m-t-1`);
let elsEfTc = eo('small','BS_ff'+iiDkOF,null,`class`,`d-block m-t-2 bold red-text`);
text(`You should be a:`);
ec('small');
for (let i in cocktail.requiredCocktails) {
let requiredCocktail = cocktail.requiredCocktails[i]; 
 let iitoFi = 'G3eFezm' + i;
let el9xy85 = eo('li','tCENyyGTuEoA' + i+iiDkOF+iitoFi,null,`class`,`required-cocktail bold`);
let elXi8z6 = eo('span','VSXff'+iiDkOF+iitoFi);
elXi8z6.cls = {'brown-text': ! component.isLocked(requiredCocktail) };

            for (let className in elXi8z6.cls) {
                elXi8z6.classList.toggle(className, elXi8z6.cls[className]);
            }  
            text(requiredCocktail.name);
ec('span');
let cndbUCq = ! component.isLocked(requiredCocktail);
this.setState('stFMOtY', cndbUCq);
if (cndbUCq) { 
let elbHICB = eo('i','CbBff'+iiDkOF+iitoFi,null,`class`,`${fas('check') + ' green-text ml-2 icon'}`);
ec('i');
}let cndZACv = component.isLocked(requiredCocktail) && component.currentCategory.id != requiredCocktail.category.id;
this.setState('stQBRaL', cndZACv);
if (cndZACv) { 
let el8UJCp = eo('button','ADcff'+iiDkOF+iitoFi,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(requiredCocktail.category)}]},`type`,`button`,`class`,`ml-2 teal-text`);
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
let cndJs1R = component.hasCocktailToBeUnlocked;
this.setState('stQAYX_', cndJs1R);
if (cndJs1R) { 
let cmpyZJE = this._lc('cKsuVyAUZ', {parent:component,events:{onclose:function(e) {let $el = this; component.hasCocktailToBeUnlocked = null;},onconfirm:function(e) {let $el = this; component.unlockCocktail();}},state:'stQAYX_'});
}ec('div');

                    this.isReadyToGo();
                }
        });