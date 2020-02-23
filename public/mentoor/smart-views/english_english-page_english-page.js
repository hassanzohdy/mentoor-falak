_Component({
                selector: 'english-page',
                c: 'EnglishPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','totalWords','isLoading','sortBy','defaultSort','categories','currentCategory','confirmPurchase','modalShouldBeOpened','adjustRecord','purchaseCategory'],
                children: {cuI3q1qG8:'flk-number-counter',cXhuFjHxH:'flk-spinner',cTbZzR9Lq:'flk-dropdown-list',cAg9QOTn0:'gold-icon',cYId_UYUU:'layout',clqeoRc4h:'word-modal',cer9k30nq:'flk-alert'},
                render: function (component) {
                    let cmprJze = this._lc('cYId_UYUU', {parent:component,content:(layout) => {let elthgju = eo('h1',null,null,`class`,`m-y-1 text-center text-sm-left`);
text(`English As A Foreigner`);
let eljMXg5 = eo('a',null,null,`href`,`/english/top-participants`,`id`,`top-participants`);
let el_mFbF = eo('i',null,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
text(`Top participants`);
ec('a');
let cndqViP = component.user.id == 1;
this.setState('stKC0Yi', cndqViP);
if (cndqViP) { 
let elgvmcz = eo('button','tmEf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elRsIHX = eo('i','gQaf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let elHD1i_ = eo('p');
text(`This module will help you as a`);
let elqkPv7 = eo('strong',null,null,`class`,`pink-text mx-2`);
text(`non-native English
            person`);
ec('strong');
text(`to improve yourself gradually in the language.`);
ec('p');
let elLk4qI = eo('p');
text(`It won't go with the regular way of learning English, but it will depend on the most
        efficient way to help you become more better listener, reader, writer and speaker as well.`);
ec('p');
let eljRJ3i = eo('p');
text(`For the time being, this section of the application will be for`);
let elcVChT = eo('strong',null,null,`class`,`teal-text mx-2`);
text(`Arabic`);
ec('strong');
text(`people who wants to learn English.`);
ec('p');
let el8HxZH = eo('p',null,null,`class`,`bold`);
text(`Topics with`);
let elekJBJ = eo('i',null,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text mx-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elekJBJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                text(`Incremental cost flag, will start with free gold and increase accordingly whenever the topic gets more new words.`);
ec('p');
let cndkRgk = component.totalWords;
this.setState('stbScJC', cndkRgk);
if (cndkRgk) { 
let elr5u8L = eo('div','3uEf',null,`class`,`text-center`);
let el4Rfyg = eo('h2','56Gf',null,`class`,`total-words`);
let cmpn4U5 = this._lc('cuI3q1qG8', {parent:component,parentTop:layout,props:{number:component.totalWords},attrs:{class:'value'},state:'stbScJC'});
let elJjIXz = eo('div','VZnf',null,`class`,`text`);
text(`Words`);
ec('div');
ec('h2');
ec('div');
}let elrOhnn = eo('section',null,null,`class`,`m-t-2`);
let elGfsJ9 = eo('h2',null,null,`class`,`text-center m-b-2 bold`);
text(`Topics List`);
ec('h2');
let cndRAFo = component.isLoading;
this.setState('st2Zv4F', cndRAFo);
let cndVrYa = !(cndRAFo);
this.setState('stkn6N4', cndVrYa);
if (cndRAFo) { 
let cmpbIm7 = this._lc('cXhuFjHxH', {parent:component,parentTop:layout,state:'st2Zv4F'});
}else { 
let el87Xzo = eo('div',null,null,`class`,`row`);
let el_Y2zP = eo('div',null,null,`class`,`words-sort-wrapper`);
let elfWRYG = eo('label',null,null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmpi_iL = this._lc('cTbZzR9Lq', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stkn6N4'});
ec('div');
let elICChJ = eo('div',null,null,`class`,`w-100`);
ec('div');
for (let index in component.categories) {
let category = component.categories[index]; 
 let iiKQe_ = 'TbXd5Vd' + index;
let elZL0P5 = eo('div','wowfjpP0hI_v' + index+iiKQe_,null,`class`,`category col-sm-6 col-lg-4 px-1 m-b-1`);
let elHyrcL = eo('div','Z78ff'+iiKQe_,null,`class`,`simple-card`);
let elFxhQ4 = eo('div','eiNff'+iiKQe_,null,`class`,`row`);
let elOMJrJ = eo('div','T_Mff'+iiKQe_,null,`class`,`col-3 m-t-1`);
let elF95ey = eo('a','Ow_ff'+iiKQe_,null,`href`,`${URLS.english(category)}`);
let eltYzzD = ev('img','FPDff'+iiKQe_,null,`src`,`${category.image}`,`class`,`image`,`title`,`${category.word}`,`alt`,`${category.word}`);
ec('a');
ec('div');
let elPGqLB = eo('div','4kVff'+iiKQe_,null,`class`,`col`);
let elZUhF9 = eo('h3','gfGff'+iiKQe_,null,`class`,`word`);
let elcqzGG = eo('span','1Rdff'+iiKQe_);
text(category.word);
ec('span');
let cndDOtM = category.incrementalCost;
this.setState('stq5erk', cndDOtM);
if (cndDOtM) { 
let elcjFQt = eo('i','kAMff'+iiKQe_,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text float-right icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elcjFQt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                }let cndv3wG = Object.get(category, 'total.words', '');
this.setState('st_ifsF', cndv3wG);
if (cndv3wG) { 
let elIo2yW = eo('span','YkJff'+iiKQe_,null,`class`,`ml-2`);
text('(' + category.total.words.format() + ')');
ec('span');
}let cnd_I8c = component.user.accountType == 'admin' && category.words && category.words.filter(word => ! word.published).length > 0;
this.setState('stdjXr_', cnd_I8c);
if (cnd_I8c) { 
let elDwEtT = eo('span','gVfff'+iiKQe_,null,`class`,`ml-2 bold btn btn-warning`);
text(category.words.filter(word => ! word.published).length.format());
ec('span');
}ec('h3');
let el5DG6q = eo('p','o19ff'+iiKQe_,null,`class`,`description`);
text(category.description);
ec('p');
let el0dNSX = eo('div','L54ff'+iiKQe_,null,`class`,`ar`);
let elFIV60 = eo('span','K14ff'+iiKQe_);
text(category.translation.word);
ec('span');
ec('div');
let elQK7MC = eo('div','cumff'+iiKQe_,null,`class`,`ar description`);
text(category.translation.description);
ec('div');
let elv2Uxs = eo('section','1I1ff'+iiKQe_,null,`class`,`footer`);
let eljjA8X = eo('div','4_Qff'+iiKQe_,null,`class`,`cost`);
let cndGhyB = category.cost > 0;
this.setState('stmpxsm', cndGhyB);
if (cndGhyB) { 
let cmp9RE6 = this._lc('cAg9QOTn0', {parent:component,parentTop:layout,props:{coins:category.cost},style:{color:'green'},state:'stmpxsm',insideLoop:true,index:"" +iiKQe_});
}let cndMtFQ = category.cost == 0;
this.setState('st7tZQs', cndMtFQ);
if (cndMtFQ) { 
let elFlFPw = eo('strong','gz2ff'+iiKQe_,null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let cndtJdV = category.isUnlocked;
this.setState('st6wP5P', cndtJdV);
let cnds6aF = !(cndtJdV);
this.setState('stxehEC', cnds6aF);
if (cndtJdV) { 
let el4AQPS = eo('a','aMEff'+iiKQe_,null,`href`,`${URLS.english(category)}`,`class`,`btn btn-success btn-sm bold float-right`);
text(`DETAILS`);
ec('a');
}else { 
let eljV5Rr = eo('button','hCRff'+iiKQe_,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.confirmPurchase = true}]},`type`,`button`,`class`,`btn btn-sm bold float-right btn-danger`);
let elAddd9 = eo('i','jreff'+iiKQe_,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase`);
ec('button');
}let cndPEq6 = component.user.accountType == 'admin';
this.setState('stWiu3x', cndPEq6);
if (cndPEq6) { 
let elVDWZF = eo('button','BQ3ff'+iiKQe_,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.openModal('edit', index)}]},`class`,`btn btn-circle btn-purple`,`type`,`button`);
let el1rE47 = eo('i','sl8ff'+iiKQe_,null,`class`,`${fas('edit') + ' icon'}`);
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
let cndCv9b = component.modalShouldBeOpened;
this.setState('stiSdGf', cndCv9b);
if (cndCv9b) { 
let cmphqON = this._lc('clqeoRc4h', {parent:component,props:{record:component.currentCategory},events:{onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},attrs:{type:'category'},state:'stiSdGf'});
}let cndEASr = component.confirmPurchase;
this.setState('stFx9OL', cndEASr);
if (cndEASr) { 
let cmp93pE = this._lc('cer9k30nq', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stFx9OL'});
}
                    this.isReadyToGo();
                }
        });