_Component({
                selector: 'word-page',
                c: 'WordPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','word','user','togglePublishedWords','requiresLogin','confirmPurchase','openModal','sortBy','defaultSort','currentWord','delete','wordsPerLine','modalShouldBeOpened','validateAsUnique','getWordRecord','adjustRecord','purchaseCategory'],
                children: {chzCAtcVH:'flk-spinner',cVfb29mHw:'flk-facebook-share',cz_pIs1Nz:'gold-icon',cE_FG7Ig7:'gold-icon',cViVXezeC:'flk-dropdown-list',cdR6VLn6t:'layout',cpmcqShNr:'word-modal',cexuRcx3P:'flk-alert'},
                render: function (component) {
                    let cmpVfiy = this._lc('cdR6VLn6t', {parent:component,content:(layout) => {let elv6ZOh = eo('h1',null,null,`class`,`m-y-1 p-r-2`);
text(`English As A Foreigner`);
let eldhsQT = eo('a',null,null,`href`,`/english`,`class`,`float-right mr-3 d-inline-block btn btn-purple bold`);
let elVdBEN = eo('i',null,null,`class`,`${fas('angle-left')} mr-2 icon`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndztyU = component.isLoading;
this.setState('stEAHTq', cndztyU);
let cndKBIB = !(cndztyU);
this.setState('stZiCHJ', cndKBIB);
if (cndztyU) { 
let cmp4nYV = this._lc('chzCAtcVH', {parent:component,parentTop:layout,state:'stEAHTq'});
}else { 
let elsCw0N = eo('div',null,null,`id`,`word-wrapper`);
let el3iw1Q = eo('div',null,null,`class`,`text-left row m-0`);
let elPkaf_ = ev('img',null,null,`src`,`${component.word.image}`,`class`,`image col-sm-2`,`title`,`${component.word.word}`,`alt`,`${component.word.word}`);
let elEiocx = eo('div',null,null,`id`,`meta`,`class`,`col-sm-10`);
let elHI3NT = eo('h1',null,null,`class`,`heading`);
let elVhIX4 = eo('div',null,null,`id`,`word`);
let eluNL4T = eo('span');
text(component.word.word);
ec('span');
let cndbkC8 = Object.get(component.word, 'total.words', '');
this.setState('stNC_gh', cndbkC8);
if (cndbkC8) { 
let elfpK7Z = eo('span','aBXf',null,`class`,`ml-2`);
text('(' + component.word.total.words.format() + ')');
ec('span');
}ec('div');
let el49VTZ = eo('div',null,null,`id`,`translation`);
text(component.word.translation.word);
ec('div');
let elSzJZl = eo('div');
let cmpLzh7 = this._lc('cVfb29mHw', {parent:component,parentTop:layout});
ec('div');
let cndNj5E = component.user.accountType == 'admin';
this.setState('st2SzOx', cndNj5E);
if (cndNj5E) { 
let elyWMnM = eo('button','DMrf',null, eventListeners, {onclick:[function(e) {var $el = this;component.togglePublishedWords()}]},`type`,`button`,`class`,`btn bold btn-primary`);
text(`Needs preview only`);
ec('button');
}ec('h1');
let cndHtV1 = component.word.description;
this.setState('stWe4rO', cndHtV1);
let cndud9d = ! component.word.isUnlocked;
this.setState('stPH0Su', cndud9d);
let cndCddQ = Object.get(FLAGS, 'english.newWord');
this.setState('stCfVKK', cndCddQ);
if (cndHtV1) { 
let elIeztx = eo('div','5Xvf',null,`id`,`description`);
let elL1m68 = eo('p','_Lef');
text(component.word.description);
ec('p');
let el6S8kg = eo('p','z4zf',null,`class`,`ar`);
text(component.word.translation.description);
ec('p');
ec('div');
}let cndq_RE = component.requiresLogin;
this.setState('stHHp1U', cndq_RE);
let cndyOYg = cndud9d;
this.setState('sthQZpA', cndyOYg);
let cndOJ2H = cndCddQ;
this.setState('stVildi', cndOJ2H);
if (cndq_RE) { 
let elA4AHk = eo('div','Kmqf',null,`class`,`text-center`);
let elpXRqP = eo('a','cf6f',null,`class`,`btn btn-danger btn-sm login-btn`,`id`,`action-btn`,`href`,`/login`);
let eljoXiV = eo('i','KZAf',null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Login to proceed.`);
ec('a');
ec('div');
}else if (cndyOYg) { 
let elmELQU = eo('div',null,null,`id`,`action-btn`);
let elOBLHL = eo('div',null,null,`class`,`cost`);
let cmpEdzr = this._lc('cz_pIs1Nz', {parent:component,parentTop:layout,props:{coins:component.word.cost},attrs:{color:'green'},state:'sthQZpA'});
let cndGze0 = component.word.cost == 0;
this.setState('styOY6M', cndGze0);
if (cndGze0) { 
let elcQfnU = eo('strong','Ksmf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let elkSJcQ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmPurchase = true}]},`type`,`button`,`class`,`btn purchase-btn btn-sm bold btn-danger`);
let elGLeOr = eo('i',null,null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Purchase to unlock`);
ec('button');
ec('div');
}else if (cndOJ2H) { 
let elIwPhY = eo('div',null,null,`id`,`action-btn`);
let eldbWZs = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-success`,`id`,`suggest-btn`);
let eldFoH3 = eo('i',null,null,`class`,`${fas('plus')} icon`);
ec('i');
let cmpYa56 = this._lc('cE_FG7Ig7', {parent:component,parentTop:layout,props:{coins:FLAGS.english.newWord},state:'stVildi'});
let elgzrfI = eo('div',null,null,`class`,`bold`);
text(`New word`);
ec('div');
ec('button');
ec('div');
}ec('div');
ec('div');
let cndtSe_ = component.word.isUnlocked && component.word.type == 'category' && ! Is.empty(component.word.words);
this.setState('stq5wQd', cndtSe_);
if (cndtSe_) { 
let el69Xyn = eo('div','6cHf',null,`class`,`m-t-2`);
let elQhUxr = eo('h3','QOsf',null,`class`,`words-lst`);
text(`Words list
                -`);
let elkLVi8 = eo('span','fZtf',null,`class`,`ml-1 translation`);
text(`الكلمات`);
ec('span');
ec('h3');
let elKbmTi = eo('div','QZVf',null,`class`,`words-sort-wrapper`);
let elzVjM9 = eo('label','k9Tf',null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmp62qh = this._lc('cViVXezeC', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stq5wQd'});
ec('div');
let elsTaP2 = eo('table','La5f',null,`class`,`table table-bordered table-striped`);
let eluPbNN = eo('tbody','IIrf');
for (let i in Array.chunk(component.word.words, component.wordsPerLine)) {
let words = Array.chunk(component.word.words, component.wordsPerLine)[i]; 
 let iidcdf = 'UUUIf5F' + i;
let elTozWu = eo('tr','ObGqhbS4aDBi' + i+iidcdf);
for (let index in words) {
let word = words[index]; 
 let iigqbr = 'lHEHsxl' + index;
let eljQxSb = eo('td','Icq3Br4h4y6E' + index+iidcdf+iigqbr,null,`class`,`word-wrapper`);
let elexoz6 = eo('div','ECoff'+iidcdf+iigqbr,null,`class`,`word`);
let cndEmca = word.image;
this.setState('stGy2Cd', cndEmca);
if (cndEmca) { 
let el_CJHf = ev('img','IxSff'+iidcdf+iigqbr,null,`src`,`${word.image}`,`title`,`${word.word}`,`alt`,`${word.word}`);
}let elFbX_c = eo('span','3HKff'+iidcdf+iigqbr);
text(word.word);
ec('span');
ec('div');
ec('td');
let elE8Awp = eo('td','fRO3Br4h4y6E' + index+iidcdf+iigqbr,null,`class`,`translation`);
text(word.translation.word);
ec('td');
let cndLsy1 = component.user.accountType == 'admin';
this.setState('staTOMI', cndLsy1);
if (cndLsy1) { 
let elIkpUb = eo('td','ZXdff'+iidcdf+iigqbr);
let cndKG1t = word.published;
this.setState('stl_aNv', cndKG1t);
if (cndKG1t) { 
let elol8oX = eo('i','UmDff'+iidcdf+iigqbr,null,`title`,``,`class`,`${fas('check-circle')} blue-text icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elol8oX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Published')}`});
        ;
                    }, 20);                
                }let elteLSI = eo('button','iLFff'+iidcdf+iigqbr,null, eventListeners, {onclick:[function(e) {var $el = this;component.delete(word, index)}]},`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elN7phm = eo('i','OAOff'+iidcdf+iigqbr,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');
let elc4bcQ = eo('button','ftBff'+iidcdf+iigqbr,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentWord = word; component.openModal('edit');}]},`type`,`button`,`class`,`btn btn-circle btn-primary`);
let elfBJEX = eo('i','Dcoff'+iidcdf+iigqbr,null,`class`,`${fas('edit')} icon`);
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
let cndO9k7 = component.modalShouldBeOpened;
this.setState('st0J5fL', cndO9k7);
if (cndO9k7) { 
let cmpgcwQ = this._lc('cpmcqShNr', {parent:component,props:{record:component.getWordRecord(),category:component.word},events:{onvalidate:function(e) {let $el = this; return component.validateAsUnique(e)},onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},state:'st0J5fL'});
}let cndb__7 = component.confirmPurchase;
this.setState('stjIzyQ', cndb__7);
if (cndb__7) { 
let cmp5519 = this._lc('cexuRcx3P', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stjIzyQ'});
}
                    this.isReadyToGo();
                }
        });