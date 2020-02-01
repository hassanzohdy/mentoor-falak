_Component({
                selector: 'english-page',
                c: 'EnglishPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','totalWords','isLoading','sortBy','defaultSort','categories','currentCategory','confirmPurchase','modalShouldBeOpened','adjustRecord','purchaseCategory'],
                children: {cWxUyX6HT:'flk-number-counter',c1qDhmGxF:'flk-spinner',cg__BlvWM:'flk-dropdown-list',cmGBbTkK8:'gold-icon',c8UxFTJB9:'layout',caXp2dQDa:'word-modal',caQvXIbwT:'flk-alert'},
                render: function (component) {
                    let cmpRS0O = this._lc('c8UxFTJB9', {parent:component,content:(layout) => {let elfd0qF = eo('h1',null,null,`class`,`m-y-1 text-center text-sm-left`);
text(`English As A Foreigner`);
let elEJWHm = eo('a',null,null,`href`,`/english/top-participants`,`id`,`top-participants`);
let el0poE_ = eo('i',null,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
text(`Top participants`);
ec('a');
let cndPNOL = component.user.id == 1;
this.setState('sttoAtr', cndPNOL);
if (cndPNOL) { 
let eleUCZz = eo('button','EPdf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elyFf8R = eo('i','2Usf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let el_g4oj = eo('p');
text(`This module will help you as a`);
let elqO2tv = eo('strong',null,null,`class`,`pink-text mx-2`);
text(`non-native English
            person`);
ec('strong');
text(`to improve yourself gradually in the language.`);
ec('p');
let el084pw = eo('p');
text(`It won't go with the regular way of learning English, but it will depend on the most
        efficient way to help you become more better listener, reader, writer and speaker as well.`);
ec('p');
let elvCf66 = eo('p');
text(`For the time being, this section of the application will be for`);
let elYb2OI = eo('strong',null,null,`class`,`teal-text mx-2`);
text(`Arabic`);
ec('strong');
text(`people who wants to learn English.`);
ec('p');
let elYIZKk = eo('p',null,null,`class`,`bold`);
text(`Topics with`);
let elbMaMP = eo('i',null,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text mx-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elbMaMP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                text(`Incremental cost flag, will start with free gold and increase accordingly whenever the topic gets more new words.`);
ec('p');
let cnd9D6S = component.totalWords;
this.setState('stNww0w', cnd9D6S);
if (cnd9D6S) { 
let elmJiIu = eo('div','AGLf',null,`class`,`text-center`);
let elpBjBM = eo('h2','yJlf',null,`class`,`total-words`);
let cmpBzEv = this._lc('cWxUyX6HT', {parent:component,parentTop:layout,props:{number:component.totalWords},attrs:{class:'value'},state:'stNww0w'});
let elaYu_1 = eo('div','aC5f',null,`class`,`text`);
text(`Words`);
ec('div');
ec('h2');
ec('div');
}let eloR55n = eo('section',null,null,`class`,`m-t-2`);
let elvmXq2 = eo('h2',null,null,`class`,`text-center m-b-2 bold`);
text(`Topics List`);
ec('h2');
let cndxiXz = component.isLoading;
this.setState('staGeeJ', cndxiXz);
let cndK1mH = !(cndxiXz);
this.setState('st0SWUr', cndK1mH);
if (cndxiXz) { 
let cmpz1Do = this._lc('c1qDhmGxF', {parent:component,parentTop:layout,state:'staGeeJ'});
}else { 
let elYEV7A = eo('div',null,null,`class`,`row`);
let eluVEYf = eo('div',null,null,`class`,`words-sort-wrapper`);
let elfXVha = eo('label',null,null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmpmLND = this._lc('cg__BlvWM', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'st0SWUr'});
ec('div');
let elzv24q = eo('div',null,null,`class`,`w-100`);
ec('div');
for (let index in component.categories) {
let category = component.categories[index]; 
 let ii9yX0 = '9dUBc4K' + index;
let elJIhKu = eo('div','PnE_lASedIHr' + index+ii9yX0,null,`class`,`category col-sm-6 col-lg-4 px-1 m-b-1`);
let elVxsp7 = eo('div','95tff'+ii9yX0,null,`class`,`simple-card`);
let el8lJQ2 = eo('div','Tfmff'+ii9yX0,null,`class`,`row`);
let elY52XI = eo('div','6vcff'+ii9yX0,null,`class`,`col-3 m-t-1`);
let elF8eiH = eo('a','SpJff'+ii9yX0,null,`href`,`${URLS.english(category)}`);
let elpTb0V = ev('img','Syqff'+ii9yX0,null,`src`,`${category.image}`,`class`,`image`,`title`,`${category.word}`,`alt`,`${category.word}`);
ec('a');
ec('div');
let eltXEGa = eo('div','xweff'+ii9yX0,null,`class`,`col`);
let elvM2r9 = eo('h3','9fqff'+ii9yX0,null,`class`,`word`);
let el1Yn3x = eo('span','24Off'+ii9yX0);
text(category.word);
ec('span');
let cndURDG = category.incrementalCost;
this.setState('st6RaXl', cndURDG);
if (cndURDG) { 
let elsoV5H = eo('i','Xqgff'+ii9yX0,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text float-right icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elsoV5H;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                }let cndKdZx = Object.get(category, 'total.words', '');
this.setState('st2x1tC', cndKdZx);
if (cndKdZx) { 
let elHd946 = eo('span','Zupff'+ii9yX0,null,`class`,`ml-2`);
text('(' + category.total.words.format() + ')');
ec('span');
}let cndbCIx = component.user.accountType == 'admin' && category.words && category.words.filter(word => ! word.published).length > 0;
this.setState('stGUncO', cndbCIx);
if (cndbCIx) { 
let el3Cu38 = eo('span','8QCff'+ii9yX0,null,`class`,`ml-2 bold btn btn-warning`);
text(category.words.filter(word => ! word.published).length.format());
ec('span');
}ec('h3');
let elg3WwW = eo('p','0xeff'+ii9yX0,null,`class`,`description`);
text(category.description);
ec('p');
let el2OtBj = eo('div','ddJff'+ii9yX0,null,`class`,`ar`);
let elxHljA = eo('span','JuHff'+ii9yX0);
text(category.translation.word);
ec('span');
ec('div');
let elYkJ0F = eo('div','gQaff'+ii9yX0,null,`class`,`ar description`);
text(category.translation.description);
ec('div');
let elUydAW = eo('section','Feoff'+ii9yX0,null,`class`,`footer`);
let elRQ8Av = eo('div','GyQff'+ii9yX0,null,`class`,`cost`);
let cndp8oG = category.cost > 0;
this.setState('stywSgR', cndp8oG);
if (cndp8oG) { 
let cmpH5NM = this._lc('cmGBbTkK8', {parent:component,parentTop:layout,props:{coins:category.cost},style:{color:'green'},state:'stywSgR',insideLoop:true,index:"" +ii9yX0});
}let cndWcuM = category.cost == 0;
this.setState('st2q_Bi', cndWcuM);
if (cndWcuM) { 
let el7fVa6 = eo('strong','apJff'+ii9yX0,null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let cndEGrS = category.isUnlocked;
this.setState('stq7L9T', cndEGrS);
let cndsKGI = !(cndEGrS);
this.setState('st_ei8s', cndsKGI);
if (cndEGrS) { 
let elevhUJ = eo('a','_qEff'+ii9yX0,null,`href`,`${URLS.english(category)}`,`class`,`btn btn-success btn-sm bold float-right`);
text(`DETAILS`);
ec('a');
}else { 
let elDdbbU = eo('button','qSTff'+ii9yX0,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.confirmPurchase = true}]},`type`,`button`,`class`,`btn btn-sm bold float-right btn-danger`);
let elvR5AD = eo('i','vlaff'+ii9yX0,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase`);
ec('button');
}let cndZgLO = component.user.accountType == 'admin';
this.setState('stLz2xl', cndZgLO);
if (cndZgLO) { 
let eltLuve = eo('button','MDLff'+ii9yX0,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.openModal('edit', index)}]},`class`,`btn btn-circle btn-purple`,`type`,`button`);
let el0KWau = eo('i','NLZff'+ii9yX0,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
}ec('section');
ec('div');
ec('div');
ec('div');
ec('div');
}
ec('div');
}ec('section');
}});
let cndxb3W = component.modalShouldBeOpened;
this.setState('stvN6Dn', cndxb3W);
if (cndxb3W) { 
let cmpQvQQ = this._lc('caXp2dQDa', {parent:component,props:{record:component.currentCategory},events:{onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},attrs:{type:'category'},state:'stvN6Dn'});
}let cnd0bNq = component.confirmPurchase;
this.setState('stlvLD3', cnd0bNq);
if (cnd0bNq) { 
let cmp4PqY = this._lc('caQvXIbwT', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stlvLD3'});
}
                    this.isReadyToGo();
                }
        });