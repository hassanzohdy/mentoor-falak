_Component({
                selector: 'word-page',
                c: 'WordPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','word','user','togglePublishedWords','requiresLogin','confirmPurchase','openModal','sortBy','defaultSort','currentWord','delete','wordsPerLine','modalShouldBeOpened','validateAsUnique','getWordRecord','adjustRecord','purchaseCategory'],
                children: {chA_5VX_k:'flk-spinner',cWJXl2fjL:'flk-facebook-share',cQm4dyguq:'gold-icon',co72nOGxb:'gold-icon',clrudT_W9:'flk-dropdown-list',cqb7EYN9s:'layout',cOex1K0uC:'word-modal',cLlLt6LZa:'flk-alert'},
                render: function (component) {
                    let cmpj4u_ = this._lc('cqb7EYN9s', {parent:component,content:(layout) => {let elzzw_T = eo('h1',null,null,`class`,`m-y-1 p-r-2`);
text(`English As A Foreigner`);
let elt7UkZ = eo('a',null,null,`href`,`/english`,`class`,`float-right mr-3 d-inline-block btn btn-purple bold`);
let el6rWS3 = eo('i',null,null,`class`,`${fas('angle-left')} mr-2 icon`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndb5k9 = component.isLoading;
this.setState('st4Duyf', cndb5k9);
let cnd4Iql = !(cndb5k9);
this.setState('stpODH9', cnd4Iql);
if (cndb5k9) { 
let cmpft07 = this._lc('chA_5VX_k', {parent:component,parentTop:layout,state:'st4Duyf'});
}else { 
let elY6bmn = eo('div',null,null,`id`,`word-wrapper`);
let elIhocP = eo('div',null,null,`class`,`text-left row m-0`);
let elBDmws = ev('img',null,null,`src`,`${component.word.image}`,`class`,`image col-sm-2`,`title`,`${component.word.word}`,`alt`,`${component.word.word}`);
let elTpzgx = eo('div',null,null,`id`,`meta`,`class`,`col-sm-10`);
let ellaykU = eo('h1',null,null,`class`,`heading`);
let el2TQrJ = eo('div',null,null,`id`,`word`);
let elz_7VP = eo('span');
text(component.word.word);
ec('span');
let cndnYvt = Object.get(component.word, 'total.words', '');
this.setState('stKcftB', cndnYvt);
if (cndnYvt) { 
let elNpkUL = eo('span','zH6f',null,`class`,`ml-2`);
text('(' + component.word.total.words.format() + ')');
ec('span');
}ec('div');
let elGZerO = eo('div',null,null,`id`,`translation`);
text(component.word.translation.word);
ec('div');
let eltJe3H = eo('div');
let cmptFnF = this._lc('cWJXl2fjL', {parent:component,parentTop:layout});
ec('div');
let cndDivx = component.user.accountType == 'admin';
this.setState('stqsGbd', cndDivx);
if (cndDivx) { 
let elCa0HH = eo('button','1FVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.togglePublishedWords()}]},`type`,`button`,`class`,`btn bold btn-primary`);
text(`Needs preview only`);
ec('button');
}ec('h1');
let cndofn8 = component.word.description;
this.setState('stCuYSi', cndofn8);
let cndApaF = ! component.word.isUnlocked;
this.setState('stQoLJk', cndApaF);
let cndTjDj = Object.get(FLAGS, 'english.newWord');
this.setState('stn6KGJ', cndTjDj);
if (cndofn8) { 
let elxep6g = eo('div','l6nf',null,`id`,`description`);
let elRjtfV = eo('p','1rxf');
text(component.word.description);
ec('p');
let elrq9EN = eo('p','R2Nf',null,`class`,`ar`);
text(component.word.translation.description);
ec('p');
ec('div');
}let cnda6JP = component.requiresLogin;
this.setState('stYO7w0', cnda6JP);
let cndx94u = cndApaF;
this.setState('st1FMnz', cndx94u);
let cndZfcD = cndTjDj;
this.setState('sttII4I', cndZfcD);
if (cnda6JP) { 
let elN4PWC = eo('div','YC8f',null,`class`,`text-center`);
let elb1hHz = eo('a','XPef',null,`class`,`btn btn-danger btn-sm login-btn`,`id`,`action-btn`,`href`,`/login`);
let el_kxkP = eo('i','TF1f',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Login to proceed.`);
ec('a');
ec('div');
}else if (cndx94u) { 
let elqOy7j = eo('div',null,null,`id`,`action-btn`);
let elvpK7b = eo('div',null,null,`class`,`cost`);
let cmp5dGf = this._lc('cQm4dyguq', {parent:component,parentTop:layout,props:{coins:component.word.cost},attrs:{color:'green'},state:'st1FMnz'});
let cndlZVO = component.word.cost == 0;
this.setState('st62wR7', cndlZVO);
if (cndlZVO) { 
let elH46Tc = eo('strong','Yzwf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let elNSaHF = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmPurchase = true}]},`type`,`button`,`class`,`btn purchase-btn btn-sm bold btn-danger`);
let eltazq0 = eo('i',null,null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Purchase to unlock`);
ec('button');
ec('div');
}else if (cndZfcD) { 
let elPYx8D = eo('div',null,null,`id`,`action-btn`);
let el6WQxp = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-success`,`id`,`suggest-btn`);
let eljnJ7t = eo('i',null,null,`class`,`${fas('plus')} icon`);
ec('i');
let cmpLwPz = this._lc('co72nOGxb', {parent:component,parentTop:layout,props:{coins:FLAGS.english.newWord},state:'sttII4I'});
let elaTdR4 = eo('div',null,null,`class`,`bold`);
text(`New word`);
ec('div');
ec('button');
ec('div');
}ec('div');
ec('div');
let cndHc8t = component.word.isUnlocked && component.word.type == 'category' && ! Is.empty(component.word.words);
this.setState('stgPz2r', cndHc8t);
if (cndHc8t) { 
let el9LFEX = eo('div','kh7f',null,`class`,`m-t-2`);
let elVZtOk = eo('h3','MDRf',null,`class`,`words-lst`);
text(`Words list
                -`);
let elUcItX = eo('span','l9Pf',null,`class`,`ml-1 translation`);
text(`الكلمات`);
ec('span');
ec('h3');
let eliVogE = eo('div','BRYf',null,`class`,`words-sort-wrapper`);
let elLO_C7 = eo('label','fflf',null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmp6hAO = this._lc('clrudT_W9', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stgPz2r'});
ec('div');
let elcMwza = eo('table','hKQf',null,`class`,`table table-bordered table-striped`);
let eleexk1 = eo('tbody','WEzf');
for (let i in Array.chunk(component.word.words, component.wordsPerLine)) {
let words = Array.chunk(component.word.words, component.wordsPerLine)[i]; 
 let iioZdD = 'rmW3gIk' + i;
let elb_Cin = eo('tr','h7hQumrLQ60r' + i+iioZdD);
for (let index in words) {
let word = words[index]; 
 let iitL2F = 'TXXUIZo' + index;
let el2kQmu = eo('td','y30TKiqwtupP' + index+iioZdD+iitL2F,null,`class`,`word-wrapper`);
let eli376r = eo('div','edoff'+iioZdD+iitL2F,null,`class`,`word`);
let cndPTEA = word.image;
this.setState('st09u5q', cndPTEA);
if (cndPTEA) { 
let elKaIMt = ev('img','51Qff'+iioZdD+iitL2F,null,`src`,`${word.image}`,`title`,`${word.word}`,`alt`,`${word.word}`);
}let eln8Wev = eo('span','0n7ff'+iioZdD+iitL2F);
text(word.word);
ec('span');
ec('div');
ec('td');
let elr2cmM = eo('td','WXsTKiqwtupP' + index+iioZdD+iitL2F,null,`class`,`translation`);
text(word.translation.word);
ec('td');
let cnda1jB = component.user.accountType == 'admin';
this.setState('stLK3hF', cnda1jB);
if (cnda1jB) { 
let ely9Clw = eo('td','kOzff'+iioZdD+iitL2F);
let cndc8nH = word.published;
this.setState('sttzZa3', cndc8nH);
if (cndc8nH) { 
let elFUcpd = eo('i','S78ff'+iioZdD+iitL2F,null,`title`,``,`class`,`${fas('check-circle')} blue-text icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elFUcpd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Published')}`});
        ;
                    }, 20);                
                }let els_CS7 = eo('button','5zXff'+iioZdD+iitL2F,null, eventListeners, {onclick:[function(e) {var $el = this;component.delete(word, index)}]},`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elSLY7r = eo('i','18Eff'+iioZdD+iitL2F,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
let el3dccb = eo('button','FIfff'+iioZdD+iitL2F,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentWord = word; component.openModal('edit');}]},`type`,`button`,`class`,`btn btn-circle btn-primary`);
let elQD_ny = eo('i','iqXff'+iioZdD+iitL2F,null,`class`,`${fas('edit')} icon`);
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
let cndy2uM = component.modalShouldBeOpened;
this.setState('stLoXPM', cndy2uM);
if (cndy2uM) { 
let cmpKeoV = this._lc('cOex1K0uC', {parent:component,props:{record:component.getWordRecord(),category:component.word},events:{onvalidate:function(e) {let $el = this; return component.validateAsUnique(e)},onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},state:'stLoXPM'});
}let cndI1iY = component.confirmPurchase;
this.setState('stIoUgV', cndI1iY);
if (cndI1iY) { 
let cmpry4F = this._lc('cLlLt6LZa', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stIoUgV'});
}
                    this.isReadyToGo();
                }
        });