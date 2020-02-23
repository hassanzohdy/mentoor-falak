_Component({
                selector: 'word-page',
                c: 'WordPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','word','user','togglePublishedWords','requiresLogin','confirmPurchase','openModal','sortBy','defaultSort','currentWord','delete','wordsPerLine','modalShouldBeOpened','validateAsUnique','getWordRecord','adjustRecord','purchaseCategory'],
                children: {cosBZwT9r:'flk-spinner',cyj6tU5k9:'flk-facebook-share',cq4Awa_Yc:'gold-icon',cc8iugz1M:'gold-icon',cmXhpByit:'flk-dropdown-list',cP94G8ieA:'layout',c1JwIv_P0:'word-modal',ceZ7Dxekc:'flk-alert'},
                render: function (component) {
                    let cmpvNGr = this._lc('cP94G8ieA', {parent:component,content:(layout) => {let elWQZLT = eo('h1',null,null,`class`,`m-y-1 p-r-2`);
text(`English As A Foreigner`);
let elg8t1x = eo('a',null,null,`href`,`/english`,`class`,`float-right mr-3 d-inline-block btn btn-purple bold`);
let elA8YzL = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cnd880r = component.isLoading;
this.setState('st6M6ut', cnd880r);
let cndhu4C = !(cnd880r);
this.setState('stYTkqj', cndhu4C);
if (cnd880r) { 
let cmpLMgT = this._lc('cosBZwT9r', {parent:component,parentTop:layout,state:'st6M6ut'});
}else { 
let el6fSap = eo('div',null,null,`id`,`word-wrapper`);
let elWqIsB = eo('div',null,null,`class`,`text-left row m-0`);
let el_94kT = ev('img',null,null,`src`,`${component.word.image}`,`class`,`image col-sm-2`,`title`,`${component.word.word}`,`alt`,`${component.word.word}`);
let elBcVt9 = eo('div',null,null,`id`,`meta`,`class`,`col-sm-10`);
let elR1x0O = eo('h1',null,null,`class`,`heading`);
let eledS3M = eo('div',null,null,`id`,`word`);
let el_cfFv = eo('span');
text(component.word.word);
ec('span');
let cndl4Ip = Object.get(component.word, 'total.words', '');
this.setState('stKWLt7', cndl4Ip);
if (cndl4Ip) { 
let elJL3So = eo('span','o6Qf',null,`class`,`ml-2`);
text('(' + component.word.total.words.format() + ')');
ec('span');
}ec('div');
let elgxeO_ = eo('div',null,null,`id`,`translation`);
text(component.word.translation.word);
ec('div');
let elY93UW = eo('div');
let cmpWRWi = this._lc('cyj6tU5k9', {parent:component,parentTop:layout});
ec('div');
let cndfRTj = component.user.accountType == 'admin';
this.setState('stPXvf1', cndfRTj);
if (cndfRTj) { 
let elHoi7L = eo('button','bqef',null, eventListeners, {onclick:[function(e) {var $el = this;component.togglePublishedWords()}]},`type`,`button`,`class`,`btn bold btn-primary`);
text(`Needs preview only`);
ec('button');
}ec('h1');
let cndVKtD = component.word.description;
this.setState('stLzhdP', cndVKtD);
let cnd2n4K = ! component.word.isUnlocked;
this.setState('stvLRGk', cnd2n4K);
let cndjBga = Object.get(FLAGS, 'english.newWord');
this.setState('stN_QZJ', cndjBga);
if (cndVKtD) { 
let elzH5ib = eo('div','u6Af',null,`id`,`description`);
let elNUq4w = eo('p','ljSf');
text(component.word.description);
ec('p');
let eljC559 = eo('p','E2Af',null,`class`,`ar`);
text(component.word.translation.description);
ec('p');
ec('div');
}let cndsC5P = component.requiresLogin;
this.setState('stULcjX', cndsC5P);
let cnd2J9y = cnd2n4K;
this.setState('st_PryU', cnd2J9y);
let cndpE7d = cndjBga;
this.setState('stgeJ7m', cndpE7d);
if (cndsC5P) { 
let elGHycr = eo('div','JQsf',null,`class`,`text-center`);
let eljB6s8 = eo('a','C3jf',null,`class`,`btn btn-danger btn-sm login-btn`,`id`,`action-btn`,`href`,`/login`);
let el2_qRK = eo('i','gAMf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to proceed.`);
ec('a');
ec('div');
}else if (cnd2J9y) { 
let elbHHAL = eo('div',null,null,`id`,`action-btn`);
let el23kyC = eo('div',null,null,`class`,`cost`);
let cmpHWPJ = this._lc('cq4Awa_Yc', {parent:component,parentTop:layout,props:{coins:component.word.cost},style:{color:'green'},state:'st_PryU'});
let cndVKq2 = component.word.cost == 0;
this.setState('strYVNx', cndVKq2);
if (cndVKq2) { 
let elZRdrG = eo('strong','oaif',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let elGECM7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmPurchase = true}]},`type`,`button`,`class`,`btn purchase-btn btn-sm bold btn-danger`);
let elm4wwO = eo('i',null,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase to unlock`);
ec('button');
ec('div');
}else if (cndpE7d) { 
let elfBNWu = eo('div',null,null,`id`,`action-btn`);
let elSubhi = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-success`,`id`,`suggest-btn`);
let elDjpIB = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmp_fGC = this._lc('cc8iugz1M', {parent:component,parentTop:layout,props:{coins:FLAGS.english.newWord},state:'stgeJ7m'});
let elzNoRg = eo('div',null,null,`class`,`bold`);
text(`New word`);
ec('div');
ec('button');
ec('div');
}ec('div');
ec('div');
let cnd2LE3 = component.word.isUnlocked && component.word.type == 'category' && ! Is.empty(component.word.words);
this.setState('stKwgdq', cnd2LE3);
if (cnd2LE3) { 
let el0v2jR = eo('div','uwYf',null,`class`,`m-t-2`);
let elDzkYz = eo('h3','Tc2f',null,`class`,`words-lst`);
text(`Words list
                -`);
let elEM5Uo = eo('span','AWxf',null,`class`,`ml-1 translation`);
text(`الكلمات`);
ec('span');
ec('h3');
let elDOSkU = eo('div','4oAf',null,`class`,`words-sort-wrapper`);
let elpmitG = eo('label','RQYf',null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmpZ8sv = this._lc('cmXhpByit', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stKwgdq'});
ec('div');
let el5z9bV = eo('table','PkEf',null,`class`,`table table-bordered table-striped`);
let el571ea = eo('tbody','3RJf');
for (let i in Array.chunk(component.word.words, component.wordsPerLine)) {
let words = Array.chunk(component.word.words, component.wordsPerLine)[i]; 
 let iigaAQ = 'cK1dBo1' + i;
let elrwGEi = eo('tr','i2n300uZOXgO' + i+iigaAQ);
for (let index in words) {
let word = words[index]; 
 let ii5wYn = 'u0Ei0Nx' + index;
let elUY3XS = eo('td','MUVPuugwI2T_' + index+iigaAQ+ii5wYn,null,`class`,`word-wrapper`);
let elqw2my = eo('div','Tqlff'+iigaAQ+ii5wYn,null,`class`,`word`);
let cndaoZc = word.image;
this.setState('stwsVio', cndaoZc);
if (cndaoZc) { 
let elTqDRL = ev('img','XWwff'+iigaAQ+ii5wYn,null,`src`,`${word.image}`,`title`,`${word.word}`,`alt`,`${word.word}`);
}let elDnr1o = eo('span','gKJff'+iigaAQ+ii5wYn);
text(word.word);
ec('span');
ec('div');
ec('td');
let elPXO2A = eo('td','KgcPuugwI2T_' + index+iigaAQ+ii5wYn,null,`class`,`translation`);
text(word.translation.word);
ec('td');
let cndnbZN = component.user.accountType == 'admin';
this.setState('st3yKid', cndnbZN);
if (cndnbZN) { 
let elWg0ga = eo('td','BTTff'+iigaAQ+ii5wYn);
let cndf3A3 = word.published;
this.setState('stWWwH4', cndf3A3);
if (cndf3A3) { 
let elgW30y = eo('i','bcYff'+iigaAQ+ii5wYn,null,`title`,``,`class`,`${fas('check-circle') + ' blue-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elgW30y;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Published')}`});
        ;
                    }, 20);                
                }let el8NyV8 = eo('button','hx7ff'+iigaAQ+ii5wYn,null, eventListeners, {onclick:[function(e) {var $el = this;component.delete(word, index)}]},`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elYbcBH = eo('i','oofff'+iigaAQ+ii5wYn,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
let elDp22e = eo('button','IKVff'+iigaAQ+ii5wYn,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentWord = word; component.openModal('edit');}]},`type`,`button`,`class`,`btn btn-circle btn-primary`);
let eloQiBA = eo('i','j67ff'+iigaAQ+ii5wYn,null,`class`,`${fas('edit') + ' icon'}`);
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
let cndQzMx = component.modalShouldBeOpened;
this.setState('stqpFfV', cndQzMx);
if (cndQzMx) { 
let cmpLzgT = this._lc('c1JwIv_P0', {parent:component,props:{record:component.getWordRecord(),category:component.word},events:{onvalidate:function(e) {let $el = this; return component.validateAsUnique(e)},onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},state:'stqpFfV'});
}let cndRORx = component.confirmPurchase;
this.setState('st0OU5s', cndRORx);
if (cndRORx) { 
let cmpHFBf = this._lc('ceZ7Dxekc', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'st0OU5s'});
}
                    this.isReadyToGo();
                }
        });