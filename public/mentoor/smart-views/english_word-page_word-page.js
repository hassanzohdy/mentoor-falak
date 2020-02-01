_Component({
                selector: 'word-page',
                c: 'WordPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','word','user','togglePublishedWords','requiresLogin','confirmPurchase','openModal','sortBy','defaultSort','currentWord','delete','wordsPerLine','modalShouldBeOpened','validateAsUnique','getWordRecord','adjustRecord','purchaseCategory'],
                children: {ciaJVSYrk:'flk-spinner',cBsV3wN4k:'flk-facebook-share',cIbhCQBAr:'gold-icon',ct7ETemZH:'gold-icon',cB9BREAhp:'flk-dropdown-list',cMB8CkAHh:'layout',cQz0tbX8e:'word-modal',cuVvgKi2g:'flk-alert'},
                render: function (component) {
                    let cmphCpC = this._lc('cMB8CkAHh', {parent:component,content:(layout) => {let elauICM = eo('h1',null,null,`class`,`m-y-1 p-r-2`);
text(`English As A Foreigner`);
let elIrL2F = eo('a',null,null,`href`,`/english`,`class`,`float-right mr-3 d-inline-block btn btn-purple bold`);
let elMQJiJ = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cnd0Omn = component.isLoading;
this.setState('stRkqO2', cnd0Omn);
let cndC9uA = !(cnd0Omn);
this.setState('st8BuCQ', cndC9uA);
if (cnd0Omn) { 
let cmpKCs8 = this._lc('ciaJVSYrk', {parent:component,parentTop:layout,state:'stRkqO2'});
}else { 
let el8rKLR = eo('div',null,null,`id`,`word-wrapper`);
let elPxJqn = eo('div',null,null,`class`,`text-left row m-0`);
let elerBQb = ev('img',null,null,`src`,`${component.word.image}`,`class`,`image col-sm-2`,`title`,`${component.word.word}`,`alt`,`${component.word.word}`);
let el52Iff = eo('div',null,null,`id`,`meta`,`class`,`col-sm-10`);
let elXCwnW = eo('h1',null,null,`class`,`heading`);
let el_dKAb = eo('div',null,null,`id`,`word`);
let el2e_qv = eo('span');
text(component.word.word);
ec('span');
let cndpM0l = Object.get(component.word, 'total.words', '');
this.setState('stJoxm7', cndpM0l);
if (cndpM0l) { 
let el89R2E = eo('span','LXCf',null,`class`,`ml-2`);
text('(' + component.word.total.words.format() + ')');
ec('span');
}ec('div');
let elrxWcv = eo('div',null,null,`id`,`translation`);
text(component.word.translation.word);
ec('div');
let elQoMoJ = eo('div');
let cmpTulS = this._lc('cBsV3wN4k', {parent:component,parentTop:layout});
ec('div');
let cnd0pzq = component.user.accountType == 'admin';
this.setState('st9r_zc', cnd0pzq);
if (cnd0pzq) { 
let elTxArz = eo('button','Q7_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.togglePublishedWords()}]},`type`,`button`,`class`,`btn bold btn-primary`);
text(`Needs preview only`);
ec('button');
}ec('h1');
let cndZRE3 = component.word.description;
this.setState('stC8QG7', cndZRE3);
let cndJxS1 = ! component.word.isUnlocked;
this.setState('stVrANN', cndJxS1);
let cndAUBW = Object.get(FLAGS, 'english.newWord');
this.setState('sttCjI2', cndAUBW);
if (cndZRE3) { 
let ellnqAe = eo('div','57pf',null,`id`,`description`);
let elWuyST = eo('p','jtTf');
text(component.word.description);
ec('p');
let eljLaGW = eo('p','IlIf',null,`class`,`ar`);
text(component.word.translation.description);
ec('p');
ec('div');
}let cnd0TuN = component.requiresLogin;
this.setState('stqKovU', cnd0TuN);
let cndPG2P = cndJxS1;
this.setState('stiRGig', cndPG2P);
let cndPCvA = cndAUBW;
this.setState('stfmRZz', cndPCvA);
if (cnd0TuN) { 
let el0xHO_ = eo('div','Mnmf',null,`class`,`text-center`);
let elCHARH = eo('a','9lgf',null,`class`,`btn btn-danger btn-sm login-btn`,`id`,`action-btn`,`href`,`/login`);
let elfpwe_ = eo('i','rlHf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to proceed.`);
ec('a');
ec('div');
}else if (cndPG2P) { 
let elR3cID = eo('div',null,null,`id`,`action-btn`);
let elbXdjv = eo('div',null,null,`class`,`cost`);
let cmpF_Rb = this._lc('cIbhCQBAr', {parent:component,parentTop:layout,props:{coins:component.word.cost},style:{color:'green'},state:'stiRGig'});
let cndi8E9 = component.word.cost == 0;
this.setState('strvkyR', cndi8E9);
if (cndi8E9) { 
let el7H7Ir = eo('strong','hB8f',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let elhm02r = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmPurchase = true}]},`type`,`button`,`class`,`btn purchase-btn btn-sm bold btn-danger`);
let el586qp = eo('i',null,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase to unlock`);
ec('button');
ec('div');
}else if (cndPCvA) { 
let elzC70g = eo('div',null,null,`id`,`action-btn`);
let elnumkS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-success`,`id`,`suggest-btn`);
let elleMg6 = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpx1ee = this._lc('ct7ETemZH', {parent:component,parentTop:layout,props:{coins:FLAGS.english.newWord},state:'stfmRZz'});
let elGRSsA = eo('div',null,null,`class`,`bold`);
text(`New word`);
ec('div');
ec('button');
ec('div');
}ec('div');
ec('div');
let cndCtdI = component.word.isUnlocked && component.word.type == 'category' && ! Is.empty(component.word.words);
this.setState('stRyml6', cndCtdI);
if (cndCtdI) { 
let el5DM7y = eo('div','Auwf',null,`class`,`m-t-2`);
let elpbR9A = eo('h3','Hnpf',null,`class`,`words-lst`);
text(`Words list
                -`);
let el4KwVk = eo('span','iT1f',null,`class`,`ml-1 translation`);
text(`الكلمات`);
ec('span');
ec('h3');
let el5fSqI = eo('div','Zmpf',null,`class`,`words-sort-wrapper`);
let elszBOR = eo('label','U_ef',null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmp9nJB = this._lc('cB9BREAhp', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stRyml6'});
ec('div');
let el7Amko = eo('table','Ekkf',null,`class`,`table table-bordered table-striped`);
let elLi6Od = eo('tbody','yF8f');
for (let i in Array.chunk(component.word.words, component.wordsPerLine)) {
let words = Array.chunk(component.word.words, component.wordsPerLine)[i]; 
 let ii6TQL = 'hw8cfdZ' + i;
let elz6ixZ = eo('tr','0ZwnwbkwLjZV' + i+ii6TQL);
for (let index in words) {
let word = words[index]; 
 let iikeUi = 'LzqHvAp' + index;
let elcR3P5 = eo('td','OtFzusuKsAGg' + index+ii6TQL+iikeUi,null,`class`,`word-wrapper`);
let elKcYj3 = eo('div','RwXff'+ii6TQL+iikeUi,null,`class`,`word`);
let cndtLlv = word.image;
this.setState('stOVx1M', cndtLlv);
if (cndtLlv) { 
let eln7yDx = ev('img','DTmff'+ii6TQL+iikeUi,null,`src`,`${word.image}`,`title`,`${word.word}`,`alt`,`${word.word}`);
}let elYlhFS = eo('span','pJYff'+ii6TQL+iikeUi);
text(word.word);
ec('span');
ec('div');
ec('td');
let ela0oVH = eo('td','RUkzusuKsAGg' + index+ii6TQL+iikeUi,null,`class`,`translation`);
text(word.translation.word);
ec('td');
let cndn1Uf = component.user.accountType == 'admin';
this.setState('stEop5w', cndn1Uf);
if (cndn1Uf) { 
let elvaL52 = eo('td','wXwff'+ii6TQL+iikeUi);
let cndLuNW = word.published;
this.setState('stIX3BY', cndLuNW);
if (cndLuNW) { 
let elBOmrm = eo('i','gC_ff'+ii6TQL+iikeUi,null,`title`,``,`class`,`${fas('check-circle') + ' blue-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elBOmrm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Published')}`});
        ;
                    }, 20);                
                }let elmoyrH = eo('button','cLQff'+ii6TQL+iikeUi,null, eventListeners, {onclick:[function(e) {var $el = this;component.delete(word, index)}]},`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elY6Wh9 = eo('i','9dBff'+ii6TQL+iikeUi,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
let elzAkR7 = eo('button','SbHff'+ii6TQL+iikeUi,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentWord = word; component.openModal('edit');}]},`type`,`button`,`class`,`btn btn-circle btn-primary`);
let elxMDwU = eo('i','P_iff'+ii6TQL+iikeUi,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');
ec('td');
}}
ec('tr');
}
ec('tbody');
ec('table');
ec('div');
}ec('div');
}}});
let cndhm_a = component.modalShouldBeOpened;
this.setState('stXDL18', cndhm_a);
if (cndhm_a) { 
let cmpuMZ3 = this._lc('cQz0tbX8e', {parent:component,props:{record:component.getWordRecord(),category:component.word},events:{onvalidate:function(e) {let $el = this; return component.validateAsUnique(e)},onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},state:'stXDL18'});
}let cndpGKW = component.confirmPurchase;
this.setState('sttuZcM', cndpGKW);
if (cndpGKW) { 
let cmpVJ3C = this._lc('cuVvgKi2g', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'sttuZcM'});
}
                    this.isReadyToGo();
                }
        });