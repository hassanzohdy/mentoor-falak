_Component({
                selector: 'cocktail-modal',
                c: 'CocktailModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','isLoading','cocktailsCategories','currentCategory','display','categoryHasCocktailsToUnlock','displayedCocktails','isLocked','hasCocktailToBeUnlocked','unlockCocktail'],
                children: {cYC8qJxrI:'flk-spinner',cdBw2A4At:'gold-icon',csQwOlDOJ:'flk-modal',cYr00o_4Y:'flk-alert'},
                render: function (component) {
                    let elRXNLd = eo('div',null,null,`id`,`cocktail-modal`);
let cmpnItA = this._lc('csQwOlDOJ', {parent:component,events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let cndQqtR = component.isLoading;
this.setState('stNQGyG', cndQqtR);
let cndhHoV = !(cndQqtR);
this.setState('stJuofG', cndhHoV);
if (cndQqtR) { 
let cmptc8N = this._lc('cYC8qJxrI', {parent:component,parentTop:flkModal,attrs:{theme:'black'},state:'stNQGyG'});
}else { 
let elY1ALh = eo('div',null,null,`class`,`row m-0`);
let eludZln = eo('aside',null,null,`class`,`col-sm-3 p-0`);
for (let i in component.cocktailsCategories) {
let category = component.cocktailsCategories[i]; 
 let iiwYs9 = 'eYdNGJh' + i;
let el5MHIV = eo('button','3ykwJVJ4Awm1' + i+iiwYs9,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(category)}]},`type`,`button`,`class`,`category-btn`);
el5MHIV.cls = {active: component.currentCategory.id == category.id};

            for (let className in el5MHIV.cls) {
                el5MHIV.classList.toggle(className, el5MHIV.cls[className]);
            }  
            let el51Fci = ev('img','cl8ff'+iiwYs9,null,`src`,`${category.icon}`,`title`,`${category.name}`,`alt`,`${category.name}`);
let elDasWZ = eo('strong','0vDff'+iiwYs9);
text(category.name);
ec('strong');
let cndLTA8 = component.categoryHasCocktailsToUnlock(category);
this.setState('stMDV8c', cndLTA8);
if (cndLTA8) { 
let elHRJKi = eo('span','dm6ff'+iiwYs9,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('button');
}
ec('aside');
let el7d582 = eo('div',null,null,`class`,`col-sm-9 body`);
for (let i in component.displayedCocktails) {
let cocktail = component.displayedCocktails[i]; 
 let iivadn = 'Rg_7jYz' + i;
let elhpS3w = eo('div','QfElawhEzH8I' + i+iivadn,null,`class`,`cocktail`);
let elvVQud = eo('h3','ufKff'+iivadn,null,`class`,`name`);
let elOoglV = ev('img','pYrff'+iivadn,null,`src`,`${cocktail.icon}`,`class`,`small mr-2`);
let el8kISq = eo('span','qYCff'+iivadn);
text(cocktail.name);
ec('span');
let cnd4s8n = cocktail.canBeUnlocked && ! cocktail.unlocked;
this.setState('stKkik3', cnd4s8n);
if (cnd4s8n) { 
let el0EXNh = eo('span','pLqff'+iivadn,null,`title`,`${trans(`Unlockable`)}`,`class`,`can-unlock top-right ml-2`);
text(`!`);
ec('span');
}ec('h3');
let elo1w0_ = eo('p','6Gmff'+iivadn,null,`class`,`description m-b-1`);
text(cocktail.description);
ec('p');
let elVlMkg = eo('div','aoIff'+iivadn,null,`class`,`tags`);
for (let i in cocktail.tags) {
let tag = cocktail.tags[i]; 
 let ii_Kuh = '1HqHjed' + i;
let elpcfV0 = eo('span','8pmzjYlUJJjM' + i+iivadn+ii_Kuh,null,`class`,`tag-icon`);
let el2tq5_ = ev('img','coYff'+iivadn+ii_Kuh,null,`src`,`${tag.image}`,`title`,`${tag.name}`,`alt`,`${tag.name}`);
el2tq5_.cls = {gray: component.isLocked(cocktail) };

            for (let className in el2tq5_.cls) {
                el2tq5_.classList.toggle(className, el2tq5_.cls[className]);
            }  
            let cndRG0G = (Number(i) + 1) != cocktail.tags.length;
this.setState('stml3Lb', cndRG0G);
if (cndRG0G) { 
let elAzsBi = eo('i','xEzff'+iivadn+ii_Kuh,null,`class`,`${fas('plus') + ' plus icon'}`);
ec('i');
}ec('span');
}
let el0j0Ke = eo('div','wVfff'+iivadn,null,`class`,`cost`);
el0j0Ke.cls = {gray: component.isLocked(cocktail) };

            for (let className in el0j0Ke.cls) {
                el0j0Ke.classList.toggle(className, el0j0Ke.cls[className]);
            }  
            let cmpHdq_ = this._lc('cdBw2A4At', {parent:component,parentTop:flkModal,props:{coins:cocktail.cost},insideLoop:true,index:"" +iivadn});
let cnd9P3c = cocktail.cost == 0;
this.setState('st0tdTb', cnd9P3c);
let cndN6zA = !(cnd9P3c);
this.setState('stIxeYr', cndN6zA);
if (cnd9P3c) { 
let elTzHER = eo('span','yVpff'+iivadn,null,`class`,`pink-text bold`);
text(`FREE!`);
ec('span');
}let cndJzOf = ! cocktail.unlocked;
this.setState('stvBQ82', cndJzOf);
let cnd5cd5 = !(cndJzOf);
this.setState('stgSdYE', cnd5cd5);
if (cndJzOf) { 
let elsr3cB = eo('button','eXMff'+iivadn,null, eventListeners, {onclick:[function(e) {var $el = this;component.hasCocktailToBeUnlocked = cocktail;}]}, boolAttrs, {disabled:! cocktail.canBeUnlocked},`class`,`unlock-btn`);
text(`Unlock`);
ec('button');
}else { 
let eluFtKa = eo('i','DoAff'+iivadn,null,`title`,`${trans(`Unlocked`)}`,`class`,`${fas('check') + ' green-text unlocked icon'}`);
ec('i');
}ec('div');
let cndkFNG = ! Is.empty(cocktail.requiredCocktails);
this.setState('stoKawb', cndkFNG);
if (cndkFNG) { 
let elVgqap = eo('div','9P7ff'+iivadn,null,`class`,`m-t-1`);
let el5BjA8 = eo('small','u58ff'+iivadn,null,`class`,`d-block m-t-2 bold red-text`);
text(`You should be a:`);
ec('small');
for (let i in cocktail.requiredCocktails) {
let requiredCocktail = cocktail.requiredCocktails[i]; 
 let iiyLj9 = 'U13zON5' + i;
let elm2yFc = eo('li','07iyJS5h6acm' + i+iivadn+iiyLj9,null,`class`,`required-cocktail bold`);
let elUPx6K = eo('span','Xehff'+iivadn+iiyLj9);
elUPx6K.cls = {'brown-text': ! component.isLocked(requiredCocktail) };

            for (let className in elUPx6K.cls) {
                elUPx6K.classList.toggle(className, elUPx6K.cls[className]);
            }  
            text(requiredCocktail.name);
ec('span');
let cndiBWH = ! component.isLocked(requiredCocktail);
this.setState('st4W7Tc', cndiBWH);
if (cndiBWH) { 
let el8NqS4 = eo('i','5ohff'+iivadn+iiyLj9,null,`class`,`${fas('check') + ' green-text ml-2 icon'}`);
ec('i');
}let cndEm1U = component.isLocked(requiredCocktail) && component.currentCategory.id != requiredCocktail.category.id;
this.setState('stb4Tc0', cndEm1U);
if (cndEm1U) { 
let elg5frl = eo('button','KFZff'+iivadn+iiyLj9,null, eventListeners, {onclick:[function(e) {var $el = this;component.display(requiredCocktail.category)}]},`type`,`button`,`class`,`ml-2 teal-text`);
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
let cndJu65 = component.hasCocktailToBeUnlocked;
this.setState('stjn94D', cndJu65);
if (cndJu65) { 
let cmp3A_Y = this._lc('cYr00o_4Y', {parent:component,events:{onclose:function(e) {let $el = this; component.hasCocktailToBeUnlocked = null;},onconfirm:function(e) {let $el = this; component.unlockCocktail();}},state:'stjn94D'});
}ec('div');

                    this.isReadyToGo();
                }
        });