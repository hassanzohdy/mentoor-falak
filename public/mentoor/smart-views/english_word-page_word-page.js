_Component({
                selector: 'word-page',
                c: 'WordPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','word','user','togglePublishedWords','requiresLogin','confirmPurchase','openModal','sortBy','defaultSort','currentWord','delete','wordsPerLine','modalShouldBeOpened','validateAsUnique','getWordRecord','adjustRecord','purchaseCategory'],
                children: {cucFnnawt:'flk-spinner',cDdtXSydQ:'flk-facebook-share',crn03WZGd:'gold-icon',cp_9DDoob:'gold-icon',cnjstWtVe:'flk-dropdown-list',chyNpGJPW:'layout',c5nBQXKw9:'word-modal',cBl989MrP:'flk-alert'},
                render: function (component) {
                    let cmp93F0 = this._lc('chyNpGJPW', {parent:component,content:(layout) => {let elmHY8H = eo('h1',null,null,`class`,`m-y-1 p-r-2`);
text(`English As A Foreigner`);
let elY7IkW = eo('a',null,null,`href`,`/english`,`class`,`float-right mr-3 d-inline-block btn btn-purple bold`);
let eldzU7u = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cnd_1Ra = component.isLoading;
this.setState('stjyeZU', cnd_1Ra);
let cndWqhT = !(cnd_1Ra);
this.setState('st3NnJw', cndWqhT);
if (cnd_1Ra) { 
let cmpBVTv = this._lc('cucFnnawt', {parent:component,parentTop:layout,state:'stjyeZU'});
}else { 
let elk5Ely = eo('div',null,null,`id`,`word-wrapper`);
let elVsFsc = eo('div',null,null,`class`,`text-left row m-0`);
let eloZHQf = ev('img',null,null,`src`,`${component.word.image}`,`class`,`image col-sm-2`,`title`,`${component.word.word}`,`alt`,`${component.word.word}`);
let elfnj19 = eo('div',null,null,`id`,`meta`,`class`,`col-sm-10`);
let elwgIDF = eo('h1',null,null,`class`,`heading`);
let el96sJ6 = eo('div',null,null,`id`,`word`);
let eluBiEl = eo('span');
text(component.word.word);
ec('span');
let cndzObM = Object.get(component.word, 'total.words', '');
this.setState('st_f17d', cndzObM);
if (cndzObM) { 
let elzZnkD = eo('span','uspf',null,`class`,`ml-2`);
text('(' + component.word.total.words.format() + ')');
ec('span');
}ec('div');
let el1dXNV = eo('div',null,null,`id`,`translation`);
text(component.word.translation.word);
ec('div');
let elB251z = eo('div');
let cmpsQJf = this._lc('cDdtXSydQ', {parent:component,parentTop:layout});
ec('div');
let cnd_92C = component.user.accountType == 'admin';
this.setState('stbWbHZ', cnd_92C);
if (cnd_92C) { 
let el72xcT = eo('button','rJQf',null, eventListeners, {onclick:[function(e) {var $el = this;component.togglePublishedWords()}]},`type`,`button`,`class`,`btn bold btn-primary`);
text(`Needs preview only`);
ec('button');
}ec('h1');
let cndxtId = component.word.description;
this.setState('stSfE3n', cndxtId);
let cndCv3k = ! component.word.isUnlocked;
this.setState('stWB0SG', cndCv3k);
let cndwlOf = Object.get(FLAGS, 'english.newWord');
this.setState('st5Jp4i', cndwlOf);
if (cndxtId) { 
let eliKX_O = eo('div','suTf',null,`id`,`description`);
let el_0w8P = eo('p','2XTf');
text(component.word.description);
ec('p');
let elievzm = eo('p','oNSf',null,`class`,`ar`);
text(component.word.translation.description);
ec('p');
ec('div');
}let cndSIwC = component.requiresLogin;
this.setState('stlhvfS', cndSIwC);
let cnd9UU5 = cndCv3k;
this.setState('stRROwG', cnd9UU5);
let cndTS75 = cndwlOf;
this.setState('st4a8Dd', cndTS75);
if (cndSIwC) { 
let eltZBMs = eo('div','k5gf',null,`class`,`text-center`);
let elE6L4E = eo('a','mZ8f',null,`class`,`btn btn-danger btn-sm login-btn`,`id`,`action-btn`,`href`,`/login`);
let elete_W = eo('i','4e4f',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to proceed.`);
ec('a');
ec('div');
}else if (cnd9UU5) { 
let elzAxOF = eo('div',null,null,`id`,`action-btn`);
let el51l9O = eo('div',null,null,`class`,`cost`);
let cmp_8kX = this._lc('crn03WZGd', {parent:component,parentTop:layout,props:{coins:component.word.cost},style:{color:'green'},state:'stRROwG'});
let cnd2txB = component.word.cost == 0;
this.setState('stBzmf_', cnd2txB);
if (cnd2txB) { 
let elnWMFk = eo('strong','Wclf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let el6A_ai = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmPurchase = true}]},`type`,`button`,`class`,`btn purchase-btn btn-sm bold btn-danger`);
let elE6Iue = eo('i',null,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase to unlock`);
ec('button');
ec('div');
}else if (cndTS75) { 
let elPDQlw = eo('div',null,null,`id`,`action-btn`);
let el_JCuD = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-success`,`id`,`suggest-btn`);
let el8m5JP = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpuobr = this._lc('cp_9DDoob', {parent:component,parentTop:layout,props:{coins:FLAGS.english.newWord},state:'st4a8Dd'});
let elaNBfk = eo('div',null,null,`class`,`bold`);
text(`New word`);
ec('div');
ec('button');
ec('div');
}ec('div');
ec('div');
let cndf8D2 = component.word.isUnlocked && component.word.type == 'category' && ! Is.empty(component.word.words);
this.setState('styH3M5', cndf8D2);
if (cndf8D2) { 
let elS40Bd = eo('div','fFWf',null,`class`,`m-t-2`);
let elDKQLb = eo('h3','up3f',null,`class`,`words-lst`);
text(`Words list
                -`);
let elqXY3K = eo('span','6BVf',null,`class`,`ml-1 translation`);
text(`الكلمات`);
ec('span');
ec('h3');
let elzsmR6 = eo('div','13xf',null,`class`,`words-sort-wrapper`);
let elJSMJQ = eo('label','5fnf',null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmpuPrX = this._lc('cnjstWtVe', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'styH3M5'});
ec('div');
let elYLx4J = eo('table','LdGf',null,`class`,`table table-bordered table-striped`);
let elVbLla = eo('tbody','JGIf');
for (let i in Array.chunk(component.word.words, component.wordsPerLine)) {
let words = Array.chunk(component.word.words, component.wordsPerLine)[i]; 
 let iiKoOR = 'Mzb9iIm' + i;
let elb2XtK = eo('tr','vJ2dyY78vYWa' + i+iiKoOR);
for (let index in words) {
let word = words[index]; 
 let iiqXQE = 'fEmx1DN' + index;
let elY6Ja6 = eo('td','HnDuG0HkTvUb' + index+iiKoOR+iiqXQE,null,`class`,`word-wrapper`);
let elUAoa1 = eo('div','amXff'+iiKoOR+iiqXQE,null,`class`,`word`);
let cndQUYJ = word.image;
this.setState('stZqvmk', cndQUYJ);
if (cndQUYJ) { 
let elFFSxc = ev('img','G7qff'+iiKoOR+iiqXQE,null,`src`,`${word.image}`,`title`,`${word.word}`,`alt`,`${word.word}`);
}let elkUL1P = eo('span','bvqff'+iiKoOR+iiqXQE);
text(word.word);
ec('span');
ec('div');
ec('td');
let el5I6EI = eo('td','24juG0HkTvUb' + index+iiKoOR+iiqXQE,null,`class`,`translation`);
text(word.translation.word);
ec('td');
let cndgtDk = component.user.accountType == 'admin';
this.setState('stdakxQ', cndgtDk);
if (cndgtDk) { 
let elnLJD5 = eo('td','kMeff'+iiKoOR+iiqXQE);
let cndbZi8 = word.published;
this.setState('st9SLHe', cndbZi8);
if (cndbZi8) { 
let eld157V = eo('i','Ym6ff'+iiKoOR+iiqXQE,null,`title`,``,`class`,`${fas('check-circle') + ' blue-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = eld157V;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Published')}`});
        ;
                    }, 20);                
                }let ellO6DZ = eo('button','J4Gff'+iiKoOR+iiqXQE,null, eventListeners, {onclick:[function(e) {var $el = this;component.delete(word, index)}]},`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elZf_gA = eo('i','e_5ff'+iiKoOR+iiqXQE,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
let elLbnIg = eo('button','GvQff'+iiKoOR+iiqXQE,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentWord = word; component.openModal('edit');}]},`type`,`button`,`class`,`btn btn-circle btn-primary`);
let eld40vt = eo('i','BYJff'+iiKoOR+iiqXQE,null,`class`,`${fas('edit') + ' icon'}`);
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
let cnd6ay4 = component.modalShouldBeOpened;
this.setState('stLlkkH', cnd6ay4);
if (cnd6ay4) { 
let cmpCZAf = this._lc('c5nBQXKw9', {parent:component,props:{record:component.getWordRecord(),category:component.word},events:{onvalidate:function(e) {let $el = this; return component.validateAsUnique(e)},onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},state:'stLlkkH'});
}let cndWlTW = component.confirmPurchase;
this.setState('stLJfyn', cndWlTW);
if (cndWlTW) { 
let cmpJaC9 = this._lc('cBl989MrP', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stLJfyn'});
}
                    this.isReadyToGo();
                }
        });