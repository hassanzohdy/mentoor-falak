_Component({
                selector: 'english-page',
                c: 'EnglishPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','totalWords','isLoading','sortBy','defaultSort','categories','currentCategory','confirmPurchase','modalShouldBeOpened','adjustRecord','purchaseCategory'],
                children: {cvWkjP_5_:'flk-number-counter',cL0HpZKOu:'flk-spinner',cszDPGlHZ:'flk-dropdown-list',cykHPU6wF:'gold-icon',cv3b3h8jH:'layout',cIkoYKhDg:'word-modal',cwu4K9s3W:'flk-alert'},
                render: function (component) {
                    let cmpiqaa = this._lc('cv3b3h8jH', {parent:component,content:(layout) => {let eln04ka = eo('h1',null,null,`class`,`m-y-1 text-center text-sm-left`);
text(`English As A Foreigner`);
let elKDRh_ = eo('a',null,null,`href`,`/english/top-participants`,`id`,`top-participants`);
let elJ8KlD = eo('i',null,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
text(`Top participants`);
ec('a');
let cndYXvY = component.user.id == 1;
this.setState('stUSeIZ', cndYXvY);
if (cndYXvY) { 
let elzgTpp = eo('button','W8pf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elJlbJa = eo('i','Zjef',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elQhRCc = eo('p');
text(`This module will help you as a`);
let el_J24e = eo('strong',null,null,`class`,`pink-text mx-2`);
text(`non-native English
            person`);
ec('strong');
text(`to improve yourself gradually in the language.`);
ec('p');
let elu78vD = eo('p');
text(`It won't go with the regular way of learning English, but it will depend on the most
        efficient way to help you become more better listener, reader, writer and speaker as well.`);
ec('p');
let elIxZFK = eo('p');
text(`For the time being, this section of the application will be for`);
let elmXBpJ = eo('strong',null,null,`class`,`teal-text mx-2`);
text(`Arabic`);
ec('strong');
text(`people who wants to learn English.`);
ec('p');
let el1uj14 = eo('p',null,null,`class`,`bold`);
text(`Topics with`);
let elAXNQD = eo('i',null,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text mx-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elAXNQD;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                text(`Incremental cost flag, will start with free gold and increase accordingly whenever the topic gets more new words.`);
ec('p');
let cndSNgb = component.totalWords;
this.setState('stFJ2lF', cndSNgb);
if (cndSNgb) { 
let elP_6GU = eo('div','WkQf',null,`class`,`text-center`);
let elJ3gdt = eo('h2','mYif',null,`class`,`total-words`);
let cmp1dRX = this._lc('cvWkjP_5_', {parent:component,parentTop:layout,props:{number:component.totalWords},attrs:{class:'value'},state:'stFJ2lF'});
let elUZeFE = eo('div','V2wf',null,`class`,`text`);
text(`Words`);
ec('div');
ec('h2');
ec('div');
}let elthyAm = eo('section',null,null,`class`,`m-t-2`);
let el7rOT3 = eo('h2',null,null,`class`,`text-center m-b-2 bold`);
text(`Topics List`);
ec('h2');
let cnd071h = component.isLoading;
this.setState('stX58_6', cnd071h);
let cndIfyB = !(cnd071h);
this.setState('stT18ta', cndIfyB);
if (cnd071h) { 
let cmpwEfc = this._lc('cL0HpZKOu', {parent:component,parentTop:layout,state:'stX58_6'});
}else { 
let el2KH84 = eo('div',null,null,`class`,`row`);
let elrHzWt = eo('div',null,null,`class`,`words-sort-wrapper`);
let eleRAvl = eo('label',null,null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmp2Z7T = this._lc('cszDPGlHZ', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stT18ta'});
ec('div');
let elOZVBu = eo('div',null,null,`class`,`w-100`);
ec('div');
for (let index in component.categories) {
let category = component.categories[index]; 
 let iitIwX = 'W4JEKIp' + index;
let elPcxZd = eo('div','yBHWKIKdao7S' + index+iitIwX,null,`class`,`category col-sm-6 col-lg-4 px-1 m-b-1`);
let elrdl_d = eo('div','ulcff'+iitIwX,null,`class`,`simple-card`);
let elBeA6Z = eo('div','ypnff'+iitIwX,null,`class`,`row`);
let elU3Ons = eo('div','4dLff'+iitIwX,null,`class`,`col-3 m-t-1`);
let elAhlxR = eo('a','hYtff'+iitIwX,null,`href`,`${URLS.english(category)}`);
let elVtFRz = ev('img','llfff'+iitIwX,null,`src`,`${category.image}`,`class`,`image`,`title`,`${category.word}`,`alt`,`${category.word}`);
ec('a');
ec('div');
let elu8Ib2 = eo('div','XiIff'+iitIwX,null,`class`,`col`);
let elfRM22 = eo('h3','KAlff'+iitIwX,null,`class`,`word`);
let eljJKT1 = eo('span','i_Mff'+iitIwX);
text(category.word);
ec('span');
let cndPCgH = category.incrementalCost;
this.setState('styTeOl', cndPCgH);
if (cndPCgH) { 
let elzGbP6 = eo('i','uRgff'+iitIwX,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text float-right icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elzGbP6;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                }let cndOiY3 = Object.get(category, 'total.words', '');
this.setState('stodSBi', cndOiY3);
if (cndOiY3) { 
let elELQEd = eo('span','V1zff'+iitIwX,null,`class`,`ml-2`);
text('(' + category.total.words.format() + ')');
ec('span');
}let cnda5Zl = component.user.accountType == 'admin' && category.words && category.words.filter(word => ! word.published).length > 0;
this.setState('st2tQM6', cnda5Zl);
if (cnda5Zl) { 
let el9Ydt_ = eo('span','Bqgff'+iitIwX,null,`class`,`ml-2 bold btn btn-warning`);
text(category.words.filter(word => ! word.published).length.format());
ec('span');
}ec('h3');
let elm9BtE = eo('p','K3aff'+iitIwX,null,`class`,`description`);
text(category.description);
ec('p');
let elTkUAZ = eo('div','EF6ff'+iitIwX,null,`class`,`ar`);
let elM4aP7 = eo('span','ZExff'+iitIwX);
text(category.translation.word);
ec('span');
ec('div');
let elDnAxY = eo('div','Hfiff'+iitIwX,null,`class`,`ar description`);
text(category.translation.description);
ec('div');
let el_NbuO = eo('section','hFCff'+iitIwX,null,`class`,`footer`);
let elibC8c = eo('div','Sj9ff'+iitIwX,null,`class`,`cost`);
let cndMBrc = category.cost > 0;
this.setState('stsbtzL', cndMBrc);
if (cndMBrc) { 
let cmpmAkQ = this._lc('cykHPU6wF', {parent:component,parentTop:layout,props:{coins:category.cost},style:{color:'green'},state:'stsbtzL',insideLoop:true,index:"" +iitIwX});
}let cndSIRO = category.cost == 0;
this.setState('st47jp9', cndSIRO);
if (cndSIRO) { 
let elSIC0M = eo('strong','ZCeff'+iitIwX,null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let cnddZmZ = category.isUnlocked;
this.setState('stg_PvQ', cnddZmZ);
let cndvBRA = !(cnddZmZ);
this.setState('st093CZ', cndvBRA);
if (cnddZmZ) { 
let ell0ACW = eo('a','Ltyff'+iitIwX,null,`href`,`${URLS.english(category)}`,`class`,`btn btn-success btn-sm bold float-right`);
text(`DETAILS`);
ec('a');
}else { 
let elmzS2e = eo('button','R65ff'+iitIwX,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.confirmPurchase = true}]},`type`,`button`,`class`,`btn btn-sm bold float-right btn-danger`);
let elSmc2r = eo('i','Mthff'+iitIwX,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase`);
ec('button');
}let cndEWs7 = component.user.accountType == 'admin';
this.setState('stHVfJE', cndEWs7);
if (cndEWs7) { 
let elJHz1T = eo('button','HWeff'+iitIwX,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.openModal('edit', index)}]},`class`,`btn btn-circle btn-purple`,`type`,`button`);
let eljQccV = eo('i','UYoff'+iitIwX,null,`class`,`${fas('edit') + ' icon'}`);
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
let cndU6w9 = component.modalShouldBeOpened;
this.setState('stoNloa', cndU6w9);
if (cndU6w9) { 
let cmpfjWt = this._lc('cIkoYKhDg', {parent:component,props:{record:component.currentCategory},events:{onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},attrs:{type:'category'},state:'stoNloa'});
}let cndbjrc = component.confirmPurchase;
this.setState('stHkUXv', cndbjrc);
if (cndbjrc) { 
let cmpvl6i = this._lc('cwu4K9s3W', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stHkUXv'});
}
                    this.isReadyToGo();
                }
        });