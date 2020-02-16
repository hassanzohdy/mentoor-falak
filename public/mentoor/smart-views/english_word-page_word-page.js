_Component({
                selector: 'word-page',
                c: 'WordPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','word','user','togglePublishedWords','requiresLogin','confirmPurchase','openModal','sortBy','defaultSort','currentWord','delete','wordsPerLine','modalShouldBeOpened','validateAsUnique','getWordRecord','adjustRecord','purchaseCategory'],
                children: {cOxHl9Tv1:'flk-spinner',c0VFnDpJX:'flk-facebook-share',cDwdYcY9I:'gold-icon',clC0gUTKw:'gold-icon',cHVgGyTus:'flk-dropdown-list',ctDRSo6CB:'layout',crxorT5fq:'word-modal',ct04yGdPO:'flk-alert'},
                render: function (component) {
                    let cmp1DcE = this._lc('ctDRSo6CB', {parent:component,content:(layout) => {let elagkdX = eo('h1',null,null,`class`,`m-y-1 p-r-2`);
text(`English As A Foreigner`);
let elD3TXN = eo('a',null,null,`href`,`/english`,`class`,`float-right mr-3 d-inline-block btn btn-purple bold`);
let elnDGuK = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndt9h2 = component.isLoading;
this.setState('stJJRM8', cndt9h2);
let cndXrFK = !(cndt9h2);
this.setState('sto00lo', cndXrFK);
if (cndt9h2) { 
let cmpGS_X = this._lc('cOxHl9Tv1', {parent:component,parentTop:layout,state:'stJJRM8'});
}else { 
let elcs0i7 = eo('div',null,null,`id`,`word-wrapper`);
let el9o2nd = eo('div',null,null,`class`,`text-left row m-0`);
let elD6tJI = ev('img',null,null,`src`,`${component.word.image}`,`class`,`image col-sm-2`,`title`,`${component.word.word}`,`alt`,`${component.word.word}`);
let elYwJW9 = eo('div',null,null,`id`,`meta`,`class`,`col-sm-10`);
let elgKwxY = eo('h1',null,null,`class`,`heading`);
let el3JWUX = eo('div',null,null,`id`,`word`);
let elhCUZr = eo('span');
text(component.word.word);
ec('span');
let cndrleL = Object.get(component.word, 'total.words', '');
this.setState('st_j0ts', cndrleL);
if (cndrleL) { 
let eldIWTh = eo('span','_E7f',null,`class`,`ml-2`);
text('(' + component.word.total.words.format() + ')');
ec('span');
}ec('div');
let elj7Vwb = eo('div',null,null,`id`,`translation`);
text(component.word.translation.word);
ec('div');
let el6lhU3 = eo('div');
let cmpvfVW = this._lc('c0VFnDpJX', {parent:component,parentTop:layout});
ec('div');
let cnd_ab_ = component.user.accountType == 'admin';
this.setState('st2a2RS', cnd_ab_);
if (cnd_ab_) { 
let elGIUBN = eo('button','aJWf',null, eventListeners, {onclick:[function(e) {var $el = this;component.togglePublishedWords()}]},`type`,`button`,`class`,`btn bold btn-primary`);
text(`Needs preview only`);
ec('button');
}ec('h1');
let cndD1qE = component.word.description;
this.setState('stXkAzs', cndD1qE);
let cndWwTM = ! component.word.isUnlocked;
this.setState('stQon3M', cndWwTM);
let cndZEv0 = Object.get(FLAGS, 'english.newWord');
this.setState('stnGmHc', cndZEv0);
if (cndD1qE) { 
let elbOZ1A = eo('div','nWaf',null,`id`,`description`);
let elxotwf = eo('p','emQf');
text(component.word.description);
ec('p');
let elu_GjP = eo('p','eNNf',null,`class`,`ar`);
text(component.word.translation.description);
ec('p');
ec('div');
}let cndB4s5 = component.requiresLogin;
this.setState('stvnc16', cndB4s5);
let cndQ1CZ = cndWwTM;
this.setState('st5FN4_', cndQ1CZ);
let cndahVf = cndZEv0;
this.setState('stNVgiv', cndahVf);
if (cndB4s5) { 
let elJCtTS = eo('div','goof',null,`class`,`text-center`);
let elqgovp = eo('a','Z4Nf',null,`class`,`btn btn-danger btn-sm login-btn`,`id`,`action-btn`,`href`,`/login`);
let ele8ZRz = eo('i','CcBf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to proceed.`);
ec('a');
ec('div');
}else if (cndQ1CZ) { 
let elTPlQK = eo('div',null,null,`id`,`action-btn`);
let elRmRkr = eo('div',null,null,`class`,`cost`);
let cmp31NX = this._lc('cDwdYcY9I', {parent:component,parentTop:layout,props:{coins:component.word.cost},style:{color:'green'},state:'st5FN4_'});
let cndScnX = component.word.cost == 0;
this.setState('stvZdjs', cndScnX);
if (cndScnX) { 
let eleXveu = eo('strong','jUVf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let eltHy94 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmPurchase = true}]},`type`,`button`,`class`,`btn purchase-btn btn-sm bold btn-danger`);
let elNh36h = eo('i',null,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase to unlock`);
ec('button');
ec('div');
}else if (cndahVf) { 
let el4whwO = eo('div',null,null,`id`,`action-btn`);
let el1WEMW = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-success`,`id`,`suggest-btn`);
let elrFENf = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpqkI2 = this._lc('clC0gUTKw', {parent:component,parentTop:layout,props:{coins:FLAGS.english.newWord},state:'stNVgiv'});
let elbfiZL = eo('div',null,null,`class`,`bold`);
text(`New word`);
ec('div');
ec('button');
ec('div');
}ec('div');
ec('div');
let cnda3oA = component.word.isUnlocked && component.word.type == 'category' && ! Is.empty(component.word.words);
this.setState('stI9wN5', cnda3oA);
if (cnda3oA) { 
let elhrGAs = eo('div','zOsf',null,`class`,`m-t-2`);
let el5kAn0 = eo('h3','IiLf',null,`class`,`words-lst`);
text(`Words list
                -`);
let elY2QYu = eo('span','WUtf',null,`class`,`ml-1 translation`);
text(`الكلمات`);
ec('span');
ec('h3');
let el0yrre = eo('div','veKf',null,`class`,`words-sort-wrapper`);
let el3A8M9 = eo('label','wP1f',null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmp80mm = this._lc('cHVgGyTus', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stI9wN5'});
ec('div');
let elKlDjk = eo('table','Ju1f',null,`class`,`table table-bordered table-striped`);
let elOxzPP = eo('tbody','hycf');
for (let i in Array.chunk(component.word.words, component.wordsPerLine)) {
let words = Array.chunk(component.word.words, component.wordsPerLine)[i]; 
 let ii9D1p = '8Ak_O7P' + i;
let elOG3Nc = eo('tr','QIQmEPHD81R5' + i+ii9D1p);
for (let index in words) {
let word = words[index]; 
 let iivIxy = 'OVERLSG' + index;
let elRlzlK = eo('td','25ztP89NiRcZ' + index+ii9D1p+iivIxy,null,`class`,`word-wrapper`);
let elBY4fc = eo('div','S5Kff'+ii9D1p+iivIxy,null,`class`,`word`);
let cndr15o = word.image;
this.setState('stdsRES', cndr15o);
if (cndr15o) { 
let elvbhEY = ev('img','J0Yff'+ii9D1p+iivIxy,null,`src`,`${word.image}`,`title`,`${word.word}`,`alt`,`${word.word}`);
}let elLWkNw = eo('span','FIZff'+ii9D1p+iivIxy);
text(word.word);
ec('span');
ec('div');
ec('td');
let elI5K6P = eo('td','LpWtP89NiRcZ' + index+ii9D1p+iivIxy,null,`class`,`translation`);
text(word.translation.word);
ec('td');
let cndQb7C = component.user.accountType == 'admin';
this.setState('styAS7S', cndQb7C);
if (cndQb7C) { 
let elTAo_h = eo('td','I3jff'+ii9D1p+iivIxy);
let cnd9Pw_ = word.published;
this.setState('stG1ZxA', cnd9Pw_);
if (cnd9Pw_) { 
let elm3YjC = eo('i','dsyff'+ii9D1p+iivIxy,null,`title`,``,`class`,`${fas('check-circle') + ' blue-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elm3YjC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Published')}`});
        ;
                    }, 20);                
                }let elLD0vJ = eo('button','rimff'+ii9D1p+iivIxy,null, eventListeners, {onclick:[function(e) {var $el = this;component.delete(word, index)}]},`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elmA5iz = eo('i','Ns6ff'+ii9D1p+iivIxy,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
let eloXdmv = eo('button','R8dff'+ii9D1p+iivIxy,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentWord = word; component.openModal('edit');}]},`type`,`button`,`class`,`btn btn-circle btn-primary`);
let elMa2vb = eo('i','R4aff'+ii9D1p+iivIxy,null,`class`,`${fas('edit') + ' icon'}`);
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
let cndzJil = component.modalShouldBeOpened;
this.setState('stUsdN_', cndzJil);
if (cndzJil) { 
let cmpr_Dd = this._lc('crxorT5fq', {parent:component,props:{record:component.getWordRecord(),category:component.word},events:{onvalidate:function(e) {let $el = this; return component.validateAsUnique(e)},onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},state:'stUsdN_'});
}let cndj9QH = component.confirmPurchase;
this.setState('st6hpZp', cndj9QH);
if (cndj9QH) { 
let cmpLMKy = this._lc('ct04yGdPO', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'st6hpZp'});
}
                    this.isReadyToGo();
                }
        });