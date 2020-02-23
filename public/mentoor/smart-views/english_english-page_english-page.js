_Component({
                selector: 'english-page',
                c: 'EnglishPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','totalWords','isLoading','sortBy','defaultSort','categories','currentCategory','confirmPurchase','modalShouldBeOpened','adjustRecord','purchaseCategory'],
                children: {cV1HBvUjo:'flk-number-counter',cYO5K3gHN:'flk-spinner',cYEdDTl0R:'flk-dropdown-list',cgK10maSt:'gold-icon',cjN3KX60G:'layout',cClE89YY3:'word-modal',c8DXhH6Ln:'flk-alert'},
                render: function (component) {
                    let cmp86XH = this._lc('cjN3KX60G', {parent:component,content:(layout) => {let elZ9fah = eo('h1',null,null,`class`,`m-y-1 text-center text-sm-left`);
text(`English As A Foreigner`);
let elGTRAq = eo('a',null,null,`href`,`/english/top-participants`,`id`,`top-participants`);
let elz3KwW = eo('i',null,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
text(`Top participants`);
ec('a');
let cndiQ7g = component.user.id == 1;
this.setState('stcohIs', cndiQ7g);
if (cndiQ7g) { 
let elyo6kD = eo('button','_3Vf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elj60ad = eo('i','HJbf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elC51pl = eo('p');
text(`This module will help you as a`);
let elP9IzZ = eo('strong',null,null,`class`,`pink-text mx-2`);
text(`non-native English
            person`);
ec('strong');
text(`to improve yourself gradually in the language.`);
ec('p');
let elHqrkf = eo('p');
text(`It won't go with the regular way of learning English, but it will depend on the most
        efficient way to help you become more better listener, reader, writer and speaker as well.`);
ec('p');
let elw0aAw = eo('p');
text(`For the time being, this section of the application will be for`);
let el7W3Jx = eo('strong',null,null,`class`,`teal-text mx-2`);
text(`Arabic`);
ec('strong');
text(`people who wants to learn English.`);
ec('p');
let elZII3f = eo('p',null,null,`class`,`bold`);
text(`Topics with`);
let el8K3FW = eo('i',null,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text mx-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el8K3FW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                text(`Incremental cost flag, will start with free gold and increase accordingly whenever the topic gets more new words.`);
ec('p');
let cndnz2q = component.totalWords;
this.setState('stC5Sbb', cndnz2q);
if (cndnz2q) { 
let eljHWSV = eo('div','yBYf',null,`class`,`text-center`);
let elHTJur = eo('h2','36Uf',null,`class`,`total-words`);
let cmpItOz = this._lc('cV1HBvUjo', {parent:component,parentTop:layout,props:{number:component.totalWords},attrs:{class:'value'},state:'stC5Sbb'});
let ellHZjm = eo('div','N3Yf',null,`class`,`text`);
text(`Words`);
ec('div');
ec('h2');
ec('div');
}let eleoD0S = eo('section',null,null,`class`,`m-t-2`);
let ellSWdf = eo('h2',null,null,`class`,`text-center m-b-2 bold`);
text(`Topics List`);
ec('h2');
let cndgEyb = component.isLoading;
this.setState('styYbqR', cndgEyb);
let cndD3JQ = !(cndgEyb);
this.setState('stZoiW0', cndD3JQ);
if (cndgEyb) { 
let cmpgcOV = this._lc('cYO5K3gHN', {parent:component,parentTop:layout,state:'styYbqR'});
}else { 
let elehYSo = eo('div',null,null,`class`,`row`);
let elJeqPq = eo('div',null,null,`class`,`words-sort-wrapper`);
let elsFdAa = eo('label',null,null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmp2Fx6 = this._lc('cYEdDTl0R', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stZoiW0'});
ec('div');
let elOaytV = eo('div',null,null,`class`,`w-100`);
ec('div');
for (let index in component.categories) {
let category = component.categories[index]; 
 let iiF0lz = '9jyg7y6' + index;
let elTwsxo = eo('div','3CWRMIrtwybY' + index+iiF0lz,null,`class`,`category col-sm-6 col-lg-4 px-1 m-b-1`);
let el8zKRq = eo('div','lxZff'+iiF0lz,null,`class`,`simple-card`);
let elrvwdO = eo('div','9nbff'+iiF0lz,null,`class`,`row`);
let eliChyW = eo('div','gXBff'+iiF0lz,null,`class`,`col-3 m-t-1`);
let el2TsI7 = eo('a','xlPff'+iiF0lz,null,`href`,`${URLS.english(category)}`);
let elgURhS = ev('img','gVyff'+iiF0lz,null,`src`,`${category.image}`,`class`,`image`,`title`,`${category.word}`,`alt`,`${category.word}`);
ec('a');
ec('div');
let elWudrw = eo('div','Czwff'+iiF0lz,null,`class`,`col`);
let elKvGCs = eo('h3','ieOff'+iiF0lz,null,`class`,`word`);
let elNX5CN = eo('span','IlIff'+iiF0lz);
text(category.word);
ec('span');
let cndivA2 = category.incrementalCost;
this.setState('stvECG1', cndivA2);
if (cndivA2) { 
let el8E2DC = eo('i','Vv7ff'+iiF0lz,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text float-right icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = el8E2DC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                }let cndvjDp = Object.get(category, 'total.words', '');
this.setState('stI72wK', cndvjDp);
if (cndvjDp) { 
let elOdcfE = eo('span','Ta3ff'+iiF0lz,null,`class`,`ml-2`);
text('(' + category.total.words.format() + ')');
ec('span');
}let cndRWvt = component.user.accountType == 'admin' && category.words && category.words.filter(word => ! word.published).length > 0;
this.setState('stfp4xo', cndRWvt);
if (cndRWvt) { 
let elyIRQk = eo('span','K6iff'+iiF0lz,null,`class`,`ml-2 bold btn btn-warning`);
text(category.words.filter(word => ! word.published).length.format());
ec('span');
}ec('h3');
let elzo64y = eo('p','hkOff'+iiF0lz,null,`class`,`description`);
text(category.description);
ec('p');
let el0lSWw = eo('div','CG9ff'+iiF0lz,null,`class`,`ar`);
let elFXC4Q = eo('span','gp1ff'+iiF0lz);
text(category.translation.word);
ec('span');
ec('div');
let elUzIb9 = eo('div','AUCff'+iiF0lz,null,`class`,`ar description`);
text(category.translation.description);
ec('div');
let elszCMc = eo('section','2pmff'+iiF0lz,null,`class`,`footer`);
let elP4aom = eo('div','488ff'+iiF0lz,null,`class`,`cost`);
let cndUieh = category.cost > 0;
this.setState('stNc_HT', cndUieh);
if (cndUieh) { 
let cmpY8y3 = this._lc('cgK10maSt', {parent:component,parentTop:layout,props:{coins:category.cost},style:{color:'green'},state:'stNc_HT',insideLoop:true,index:"" +iiF0lz});
}let cndS6Bp = category.cost == 0;
this.setState('stJRLmW', cndS6Bp);
if (cndS6Bp) { 
let elL44ub = eo('strong','2F1ff'+iiF0lz,null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let cndYAWG = category.isUnlocked;
this.setState('st8DTBi', cndYAWG);
let cndJuIG = !(cndYAWG);
this.setState('st3DRVE', cndJuIG);
if (cndYAWG) { 
let el4wUc8 = eo('a','Dx_ff'+iiF0lz,null,`href`,`${URLS.english(category)}`,`class`,`btn btn-success btn-sm bold float-right`);
text(`DETAILS`);
ec('a');
}else { 
let elOkH2B = eo('button','6VBff'+iiF0lz,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.confirmPurchase = true}]},`type`,`button`,`class`,`btn btn-sm bold float-right btn-danger`);
let eltxV8E = eo('i','B1hff'+iiF0lz,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase`);
ec('button');
}let cndrwnb = component.user.accountType == 'admin';
this.setState('st6RZ7L', cndrwnb);
if (cndrwnb) { 
let elBsxyb = eo('button','rWrff'+iiF0lz,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.openModal('edit', index)}]},`class`,`btn btn-circle btn-purple`,`type`,`button`);
let elMNvHO = eo('i','lJ1ff'+iiF0lz,null,`class`,`${fas('edit') + ' icon'}`);
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
let cnd67cN = component.modalShouldBeOpened;
this.setState('st085CU', cnd67cN);
if (cnd67cN) { 
let cmphhsm = this._lc('cClE89YY3', {parent:component,props:{record:component.currentCategory},events:{onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},attrs:{type:'category'},state:'st085CU'});
}let cndro0F = component.confirmPurchase;
this.setState('st6wx7r', cndro0F);
if (cndro0F) { 
let cmp7O4P = this._lc('c8DXhH6Ln', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'st6wx7r'});
}
                    this.isReadyToGo();
                }
        });