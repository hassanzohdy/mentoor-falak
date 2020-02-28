_Component({
                selector: 'word-page',
                c: 'WordPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','word','user','togglePublishedWords','requiresLogin','confirmPurchase','openModal','sortBy','defaultSort','currentWord','delete','wordsPerLine','modalShouldBeOpened','validateAsUnique','getWordRecord','adjustRecord','purchaseCategory'],
                children: {cpe1gK5hQ:'flk-spinner',cIa_4b8gS:'flk-facebook-share',ccftQkBoX:'gold-icon',cTWgzhATF:'gold-icon',cQe36cGeP:'flk-dropdown-list',coOgv8qAU:'layout',cmBK_6lr8:'word-modal',cFCLn87KW:'flk-alert'},
                render: function (component) {
                    let cmpv9g2 = this._lc('coOgv8qAU', {parent:component,content:(layout) => {let elLMRQ0 = eo('h1',null,null,`class`,`m-y-1 p-r-2`);
text(`English As A Foreigner`);
let elTZhS1 = eo('a',null,null,`href`,`/english`,`class`,`float-right mr-3 d-inline-block btn btn-purple bold`);
let el25vdM = eo('i',null,null,`class`,`${fas('angle-left')} mr-2 icon`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cnd4cGF = component.isLoading;
this.setState('st6CyWB', cnd4cGF);
let cndvVA5 = !(cnd4cGF);
this.setState('stB_My_', cndvVA5);
if (cnd4cGF) { 
let cmp5sTa = this._lc('cpe1gK5hQ', {parent:component,parentTop:layout,state:'st6CyWB'});
}else { 
let elHz9Sq = eo('div',null,null,`id`,`word-wrapper`);
let eliiFR0 = eo('div',null,null,`class`,`text-left row m-0`);
let elrDXO6 = ev('img',null,null,`src`,`${component.word.image}`,`class`,`image col-sm-2`,`title`,`${component.word.word}`,`alt`,`${component.word.word}`);
let el_9_RS = eo('div',null,null,`id`,`meta`,`class`,`col-sm-10`);
let elgxAQh = eo('h1',null,null,`class`,`heading`);
let elRe0ys = eo('div',null,null,`id`,`word`);
let elbyn58 = eo('span');
text(component.word.word);
ec('span');
let cndoCk8 = Object.get(component.word, 'total.words', '');
this.setState('st4pS8u', cndoCk8);
if (cndoCk8) { 
let elHN52f = eo('span','TJef',null,`class`,`ml-2`);
text('(' + component.word.total.words.format() + ')');
ec('span');
}ec('div');
let elhRaBH = eo('div',null,null,`id`,`translation`);
text(component.word.translation.word);
ec('div');
let elffRm7 = eo('div');
let cmpYl2Z = this._lc('cIa_4b8gS', {parent:component,parentTop:layout});
ec('div');
let cndohNF = component.user.accountType == 'admin';
this.setState('st1b6Bt', cndohNF);
if (cndohNF) { 
let el8bp9P = eo('button','y0Ff',null, eventListeners, {onclick:[function(e) {var $el = this;component.togglePublishedWords()}]},`type`,`button`,`class`,`btn bold btn-primary`);
text(`Needs preview only`);
ec('button');
}ec('h1');
let cndmtyv = component.word.description;
this.setState('stgt1pn', cndmtyv);
let cndFN2Q = ! component.word.isUnlocked;
this.setState('stBq9Xj', cndFN2Q);
let cndvuKY = Object.get(FLAGS, 'english.newWord');
this.setState('stOM1MM', cndvuKY);
if (cndmtyv) { 
let el5pGWw = eo('div','gX_f',null,`id`,`description`);
let elNafiS = eo('p','8xbf');
text(component.word.description);
ec('p');
let elQnE9v = eo('p','3cPf',null,`class`,`ar`);
text(component.word.translation.description);
ec('p');
ec('div');
}let cndNTVa = component.requiresLogin;
this.setState('stw1IQB', cndNTVa);
let cndk89Q = cndFN2Q;
this.setState('stvzrZO', cndk89Q);
let cnd_Iv4 = cndvuKY;
this.setState('ste2SWt', cnd_Iv4);
if (cndNTVa) { 
let elnDHdl = eo('div','4Gsf',null,`class`,`text-center`);
let elN6NhI = eo('a','udwf',null,`class`,`btn btn-danger btn-sm login-btn`,`id`,`action-btn`,`href`,`/login`);
let elzHI1E = eo('i','hccf',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Login to proceed.`);
ec('a');
ec('div');
}else if (cndk89Q) { 
let elWK_SL = eo('div',null,null,`id`,`action-btn`);
let elowYAV = eo('div',null,null,`class`,`cost`);
let cmpx1L4 = this._lc('ccftQkBoX', {parent:component,parentTop:layout,props:{coins:component.word.cost},style:{color:'green'},state:'stvzrZO'});
let cndPZBJ = component.word.cost == 0;
this.setState('st60jct', cndPZBJ);
if (cndPZBJ) { 
let ellqWy_ = eo('strong','m9Sf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let el2Rg9o = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmPurchase = true}]},`type`,`button`,`class`,`btn purchase-btn btn-sm bold btn-danger`);
let elYtGgd = eo('i',null,null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Purchase to unlock`);
ec('button');
ec('div');
}else if (cnd_Iv4) { 
let eltfbta = eo('div',null,null,`id`,`action-btn`);
let elQPN1T = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-success`,`id`,`suggest-btn`);
let elTjnj4 = eo('i',null,null,`class`,`${fas('plus')} icon`);
ec('i');
let cmpaTCj = this._lc('cTWgzhATF', {parent:component,parentTop:layout,props:{coins:FLAGS.english.newWord},state:'ste2SWt'});
let el9ys97 = eo('div',null,null,`class`,`bold`);
text(`New word`);
ec('div');
ec('button');
ec('div');
}ec('div');
ec('div');
let cndzCmx = component.word.isUnlocked && component.word.type == 'category' && ! Is.empty(component.word.words);
this.setState('stvhUC1', cndzCmx);
if (cndzCmx) { 
let elmvts9 = eo('div','QPxf',null,`class`,`m-t-2`);
let el23jYL = eo('h3','Z3wf',null,`class`,`words-lst`);
text(`Words list
                -`);
let elLy_2E = eo('span','bo2f',null,`class`,`ml-1 translation`);
text(`الكلمات`);
ec('span');
ec('h3');
let elxzhbS = eo('div','9q8f',null,`class`,`words-sort-wrapper`);
let elEi3MU = eo('label','juWf',null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmp_E_P = this._lc('cQe36cGeP', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stvhUC1'});
ec('div');
let eljUK9_ = eo('table','RCuf',null,`class`,`table table-bordered table-striped`);
let elgploZ = eo('tbody','jSrf');
for (let i in Array.chunk(component.word.words, component.wordsPerLine)) {
let words = Array.chunk(component.word.words, component.wordsPerLine)[i]; 
 let iiuEZA = 'YvxiAuL' + i;
let elbNOaD = eo('tr','8Cti7T6OwPiS' + i+iiuEZA);
for (let index in words) {
let word = words[index]; 
 let ii7bKX = '9DVRnQK' + index;
let elEkXGz = eo('td','eAfdyPqu_PKc' + index+iiuEZA+ii7bKX,null,`class`,`word-wrapper`);
let elHjNH2 = eo('div','qVxff'+iiuEZA+ii7bKX,null,`class`,`word`);
let cndFXfJ = word.image;
this.setState('stNC9JL', cndFXfJ);
if (cndFXfJ) { 
let elTAfka = ev('img','JLTff'+iiuEZA+ii7bKX,null,`src`,`${word.image}`,`title`,`${word.word}`,`alt`,`${word.word}`);
}let elmBjwF = eo('span','lkOff'+iiuEZA+ii7bKX);
text(word.word);
ec('span');
ec('div');
ec('td');
let elsC2IA = eo('td','fAudyPqu_PKc' + index+iiuEZA+ii7bKX,null,`class`,`translation`);
text(word.translation.word);
ec('td');
let cndkQMb = component.user.accountType == 'admin';
this.setState('stElAr5', cndkQMb);
if (cndkQMb) { 
let elmx1oj = eo('td','NYsff'+iiuEZA+ii7bKX);
let cnd4IPX = word.published;
this.setState('stvNmCs', cnd4IPX);
if (cnd4IPX) { 
let elqfMrs = eo('i','dOvff'+iiuEZA+ii7bKX,null,`title`,``,`class`,`${fas('check-circle')} blue-text icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elqfMrs;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Published')}`});
        ;
                    }, 20);                
                }let el5HVM0 = eo('button','pq9ff'+iiuEZA+ii7bKX,null, eventListeners, {onclick:[function(e) {var $el = this;component.delete(word, index)}]},`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elMSlDM = eo('i','2qRff'+iiuEZA+ii7bKX,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
let elOyIsL = eo('button','Itlff'+iiuEZA+ii7bKX,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentWord = word; component.openModal('edit');}]},`type`,`button`,`class`,`btn btn-circle btn-primary`);
let elE2hGr = eo('i','DZoff'+iiuEZA+ii7bKX,null,`class`,`${fas('edit')} icon`);
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
let cndPTex = component.modalShouldBeOpened;
this.setState('stiA7lX', cndPTex);
if (cndPTex) { 
let cmpyG8S = this._lc('cmBK_6lr8', {parent:component,props:{record:component.getWordRecord(),category:component.word},events:{onvalidate:function(e) {let $el = this; return component.validateAsUnique(e)},onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},state:'stiA7lX'});
}let cnd07jo = component.confirmPurchase;
this.setState('stfDVXi', cnd07jo);
if (cnd07jo) { 
let cmp4ANf = this._lc('cFCLn87KW', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stfDVXi'});
}
                    this.isReadyToGo();
                }
        });