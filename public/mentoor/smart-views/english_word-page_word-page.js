_Component({
                selector: 'word-page',
                c: 'WordPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','word','user','togglePublishedWords','requiresLogin','confirmPurchase','openModal','sortBy','defaultSort','currentWord','delete','wordsPerLine','modalShouldBeOpened','validateAsUnique','getWordRecord','adjustRecord','purchaseCategory'],
                children: {cPk8BBkEk:'flk-spinner',c3dxQ9Mzn:'flk-facebook-share',cHn4R55Vc:'gold-icon',cOccA_xvu:'gold-icon',ciUaAANfC:'flk-dropdown-list',c8M6G5tNn:'layout',cyG9p9SyD:'word-modal',cVLDb7aoD:'flk-alert'},
                render: function (component) {
                    let cmp1boc = this._lc('c8M6G5tNn', {parent:component,content:(layout) => {let elvPnUX = eo('h1',null,null,`class`,`m-y-1 p-r-2`);
text(`English As A Foreigner`);
let el0B16X = eo('a',null,null,`href`,`/english`,`class`,`float-right mr-3 d-inline-block btn btn-purple bold`);
let eltS3gS = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndFwoq = component.isLoading;
this.setState('stsULuE', cndFwoq);
let cndrLXr = !(cndFwoq);
this.setState('st674uy', cndrLXr);
if (cndFwoq) { 
let cmp0Vqi = this._lc('cPk8BBkEk', {parent:component,parentTop:layout,state:'stsULuE'});
}else { 
let elL8wAx = eo('div',null,null,`id`,`word-wrapper`);
let elhByVK = eo('div',null,null,`class`,`text-left row m-0`);
let elVNEej = ev('img',null,null,`src`,`${component.word.image}`,`class`,`image col-sm-2`,`title`,`${component.word.word}`,`alt`,`${component.word.word}`);
let elIPxOo = eo('div',null,null,`id`,`meta`,`class`,`col-sm-10`);
let elVZ8aD = eo('h1',null,null,`class`,`heading`);
let eliCYR3 = eo('div',null,null,`id`,`word`);
let elPkQNk = eo('span');
text(component.word.word);
ec('span');
let cndgcxt = Object.get(component.word, 'total.words', '');
this.setState('stYb3Zw', cndgcxt);
if (cndgcxt) { 
let elOFqZl = eo('span','94tf',null,`class`,`ml-2`);
text('(' + component.word.total.words.format() + ')');
ec('span');
}ec('div');
let elqYxET = eo('div',null,null,`id`,`translation`);
text(component.word.translation.word);
ec('div');
let elR5yem = eo('div');
let cmppuhH = this._lc('c3dxQ9Mzn', {parent:component,parentTop:layout});
ec('div');
let cndyopZ = component.user.accountType == 'admin';
this.setState('stzTOBO', cndyopZ);
if (cndyopZ) { 
let elG18n9 = eo('button','jClf',null, eventListeners, {onclick:[function(e) {var $el = this;component.togglePublishedWords()}]},`type`,`button`,`class`,`btn bold btn-primary`);
text(`Needs preview only`);
ec('button');
}ec('h1');
let cnd09mg = component.word.description;
this.setState('stanazx', cnd09mg);
let cndTzii = ! component.word.isUnlocked;
this.setState('stWrM0M', cndTzii);
let cnd3GNA = Object.get(FLAGS, 'english.newWord');
this.setState('stJq12i', cnd3GNA);
if (cnd09mg) { 
let elw_c9N = eo('div','flhf',null,`id`,`description`);
let elQvzf8 = eo('p','ffnf');
text(component.word.description);
ec('p');
let elA5gJc = eo('p','8zuf',null,`class`,`ar`);
text(component.word.translation.description);
ec('p');
ec('div');
}let cndbmFr = component.requiresLogin;
this.setState('sts83Cx', cndbmFr);
let cndbVCN = cndTzii;
this.setState('stENkFK', cndbVCN);
let cndqZCc = cnd3GNA;
this.setState('stH4VD0', cndqZCc);
if (cndbmFr) { 
let el_8h66 = eo('div','sqBf',null,`class`,`text-center`);
let elNXgaz = eo('a','MLLf',null,`class`,`btn btn-danger btn-sm login-btn`,`id`,`action-btn`,`href`,`/login`);
let el0VCr0 = eo('i','7uwf',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to proceed.`);
ec('a');
ec('div');
}else if (cndbVCN) { 
let elcrauo = eo('div',null,null,`id`,`action-btn`);
let elwLN9m = eo('div',null,null,`class`,`cost`);
let cmpVgrl = this._lc('cHn4R55Vc', {parent:component,parentTop:layout,props:{coins:component.word.cost},style:{color:'green'},state:'stENkFK'});
let cnd1kJg = component.word.cost == 0;
this.setState('st4M3aW', cnd1kJg);
if (cnd1kJg) { 
let elb3v6O = eo('strong','Felf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let eljmHtV = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmPurchase = true}]},`type`,`button`,`class`,`btn purchase-btn btn-sm bold btn-danger`);
let el0zrbr = eo('i',null,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase to unlock`);
ec('button');
ec('div');
}else if (cndqZCc) { 
let elwLkT7 = eo('div',null,null,`id`,`action-btn`);
let elz_rby = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-success`,`id`,`suggest-btn`);
let elM0yTT = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpTUCy = this._lc('cOccA_xvu', {parent:component,parentTop:layout,props:{coins:FLAGS.english.newWord},state:'stH4VD0'});
let elt3awx = eo('div',null,null,`class`,`bold`);
text(`New word`);
ec('div');
ec('button');
ec('div');
}ec('div');
ec('div');
let cndcpt1 = component.word.isUnlocked && component.word.type == 'category' && ! Is.empty(component.word.words);
this.setState('stGo8Cp', cndcpt1);
if (cndcpt1) { 
let el1sTBq = eo('div','9ejf',null,`class`,`m-t-2`);
let elGWvDW = eo('h3','JIMf',null,`class`,`words-lst`);
text(`Words list
                -`);
let elXLuvl = eo('span','46Qf',null,`class`,`ml-1 translation`);
text(`الكلمات`);
ec('span');
ec('h3');
let elpNjLj = eo('div','gYaf',null,`class`,`words-sort-wrapper`);
let eleqtgS = eo('label','Pa9f',null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmpjWVa = this._lc('ciUaAANfC', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stGo8Cp'});
ec('div');
let elmFh84 = eo('table','DEZf',null,`class`,`table table-bordered table-striped`);
let elZYdSm = eo('tbody','qmqf');
for (let i in Array.chunk(component.word.words, component.wordsPerLine)) {
let words = Array.chunk(component.word.words, component.wordsPerLine)[i]; 
 let iiAdgQ = 'ZFg2Le0' + i;
let el5uYD1 = eo('tr','o_NMfAAFAh_4' + i+iiAdgQ);
for (let index in words) {
let word = words[index]; 
 let iibMiV = 'A4Q9KTh' + index;
let elRPvBu = eo('td','O2w8GixupMxK' + index+iiAdgQ+iibMiV,null,`class`,`word-wrapper`);
let elmFqYh = eo('div','wUuff'+iiAdgQ+iibMiV,null,`class`,`word`);
let cndmUKn = word.image;
this.setState('stqEZ1S', cndmUKn);
if (cndmUKn) { 
let ellDmpH = ev('img','rKcff'+iiAdgQ+iibMiV,null,`src`,`${word.image}`,`title`,`${word.word}`,`alt`,`${word.word}`);
}let eluZn1Q = eo('span','BxUff'+iiAdgQ+iibMiV);
text(word.word);
ec('span');
ec('div');
ec('td');
let elJIR3Y = eo('td','jAv8GixupMxK' + index+iiAdgQ+iibMiV,null,`class`,`translation`);
text(word.translation.word);
ec('td');
let cnd8xZm = component.user.accountType == 'admin';
this.setState('stQoxvh', cnd8xZm);
if (cnd8xZm) { 
let el0CnFU = eo('td','hwYff'+iiAdgQ+iibMiV);
let cndsNeh = word.published;
this.setState('stLQHk1', cndsNeh);
if (cndsNeh) { 
let elHs5yu = eo('i','beZff'+iiAdgQ+iibMiV,null,`title`,``,`class`,`${fas('check-circle') + ' blue-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elHs5yu;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Published')}`});
        ;
                    }, 20);                
                }let el83W3h = eo('button','hsnff'+iiAdgQ+iibMiV,null, eventListeners, {onclick:[function(e) {var $el = this;component.delete(word, index)}]},`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elhJ03A = eo('i','j2Kff'+iiAdgQ+iibMiV,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
let ela0Wex = eo('button','8EQff'+iiAdgQ+iibMiV,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentWord = word; component.openModal('edit');}]},`type`,`button`,`class`,`btn btn-circle btn-primary`);
let elJWCsK = eo('i','dI3ff'+iiAdgQ+iibMiV,null,`class`,`${fas('edit') + ' icon'}`);
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
let cndruLb = component.modalShouldBeOpened;
this.setState('stVW1kE', cndruLb);
if (cndruLb) { 
let cmpRMbL = this._lc('cyG9p9SyD', {parent:component,props:{record:component.getWordRecord(),category:component.word},events:{onvalidate:function(e) {let $el = this; return component.validateAsUnique(e)},onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},state:'stVW1kE'});
}let cndhjpB = component.confirmPurchase;
this.setState('stSZl1M', cndhjpB);
if (cndhjpB) { 
let cmpTSyc = this._lc('cVLDb7aoD', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stSZl1M'});
}
                    this.isReadyToGo();
                }
        });