_Component({
                selector: 'word-page',
                c: 'WordPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['isLoading','word','user','togglePublishedWords','requiresLogin','confirmPurchase','openModal','sortBy','defaultSort','currentWord','delete','wordsPerLine','modalShouldBeOpened','validateAsUnique','getWordRecord','adjustRecord','purchaseCategory'],
                children: {cBtzCyOb8:'flk-spinner',c_SkLQYGl:'flk-facebook-share',cyHCo2VCC:'gold-icon',c4MKTXkhK:'gold-icon',cgtY_MDob:'flk-dropdown-list',cchGhhBpu:'layout',cc0_bZ9Jk:'word-modal',cDYASIQSu:'flk-alert'},
                render: function (component) {
                    let cmpGW6y = this._lc('cchGhhBpu', {parent:component,content:(layout) => {let ela9Za2 = eo('h1',null,null,`class`,`m-y-1 p-r-2`);
text(`English As A Foreigner`);
let elNsUz9 = eo('a',null,null,`href`,`/english`,`class`,`float-right mr-3 d-inline-block btn btn-purple bold`);
let elQdg9X = eo('i',null,null,`class`,`${fas('angle-left') + ' mr-2 icon'}`);
ec('i');
text(`Back to Topics list`);
ec('a');
ec('h1');
let cndqQ7Y = component.isLoading;
this.setState('stsfrr4', cndqQ7Y);
let cndzGd0 = !(cndqQ7Y);
this.setState('stjyrYA', cndzGd0);
if (cndqQ7Y) { 
let cmp9VO8 = this._lc('cBtzCyOb8', {parent:component,parentTop:layout,state:'stsfrr4'});
}else { 
let elMghl5 = eo('div',null,null,`id`,`word-wrapper`);
let elckuEy = eo('div',null,null,`class`,`text-left row m-0`);
let elleihi = ev('img',null,null,`src`,`${component.word.image}`,`class`,`image col-sm-2`,`title`,`${component.word.word}`,`alt`,`${component.word.word}`);
let elePtIC = eo('div',null,null,`id`,`meta`,`class`,`col-sm-10`);
let el3Fj_y = eo('h1',null,null,`class`,`heading`);
let elkk8rT = eo('div',null,null,`id`,`word`);
let eld1kt1 = eo('span');
text(component.word.word);
ec('span');
let cndGz_o = Object.get(component.word, 'total.words', '');
this.setState('stdNslz', cndGz_o);
if (cndGz_o) { 
let elU7d9D = eo('span','_2Pf',null,`class`,`ml-2`);
text('(' + component.word.total.words.format() + ')');
ec('span');
}ec('div');
let elwok_8 = eo('div',null,null,`id`,`translation`);
text(component.word.translation.word);
ec('div');
let el24mg7 = eo('div');
let cmpr0py = this._lc('c_SkLQYGl', {parent:component,parentTop:layout});
ec('div');
let cndMlHa = component.user.accountType == 'admin';
this.setState('stuYGAX', cndMlHa);
if (cndMlHa) { 
let elwgKeU = eo('button','yQdf',null, eventListeners, {onclick:[function(e) {var $el = this;component.togglePublishedWords()}]},`type`,`button`,`class`,`btn bold btn-primary`);
text(`Needs preview only`);
ec('button');
}ec('h1');
let cnd_0tg = component.word.description;
this.setState('stVBG7U', cnd_0tg);
let cnd6rhM = ! component.word.isUnlocked;
this.setState('stbN7uI', cnd6rhM);
let cndC9n6 = Object.get(FLAGS, 'english.newWord');
this.setState('stNLra2', cndC9n6);
if (cnd_0tg) { 
let elqB49d = eo('div','X4kf',null,`id`,`description`);
let el2KWfw = eo('p','JW0f');
text(component.word.description);
ec('p');
let elGUrRw = eo('p','ilYf',null,`class`,`ar`);
text(component.word.translation.description);
ec('p');
ec('div');
}let cndVWe0 = component.requiresLogin;
this.setState('stOY2TE', cndVWe0);
let cndztZt = cnd6rhM;
this.setState('stMxD7G', cndztZt);
let cndoh6J = cndC9n6;
this.setState('st7F6HM', cndoh6J);
if (cndVWe0) { 
let elKqb4X = eo('div','xECf',null,`class`,`text-center`);
let elkHori = eo('a','sKpf',null,`class`,`btn btn-danger btn-sm login-btn`,`id`,`action-btn`,`href`,`/login`);
let elP6rhd = eo('i','O3ff',null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Login to proceed.`);
ec('a');
ec('div');
}else if (cndztZt) { 
let elK1Ds3 = eo('div',null,null,`id`,`action-btn`);
let elICLYx = eo('div',null,null,`class`,`cost`);
let cmpaI7S = this._lc('cyHCo2VCC', {parent:component,parentTop:layout,props:{coins:component.word.cost},style:{color:'green'},state:'stMxD7G'});
let cndlKEP = component.word.cost == 0;
this.setState('sts0_yG', cndlKEP);
if (cndlKEP) { 
let elkSltG = eo('strong','zYWf',null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let elXHpyC = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmPurchase = true}]},`type`,`button`,`class`,`btn purchase-btn btn-sm bold btn-danger`);
let elregxs = eo('i',null,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase to unlock`);
ec('button');
ec('div');
}else if (cndoh6J) { 
let elNMA8W = eo('div',null,null,`id`,`action-btn`);
let el8fc5R = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-success`,`id`,`suggest-btn`);
let elGuRuZ = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpV7Yk = this._lc('c4MKTXkhK', {parent:component,parentTop:layout,props:{coins:FLAGS.english.newWord},state:'st7F6HM'});
let eleRkI5 = eo('div',null,null,`class`,`bold`);
text(`New word`);
ec('div');
ec('button');
ec('div');
}ec('div');
ec('div');
let cndALDk = component.word.isUnlocked && component.word.type == 'category' && ! Is.empty(component.word.words);
this.setState('st6Qg3i', cndALDk);
if (cndALDk) { 
let elqUiIX = eo('div','ZZZf',null,`class`,`m-t-2`);
let elzmRUo = eo('h3','6Pof',null,`class`,`words-lst`);
text(`Words list
                -`);
let elNPjHa = eo('span','pyvf',null,`class`,`ml-1 translation`);
text(`الكلمات`);
ec('span');
ec('h3');
let elNphAd = eo('div','f1Kf',null,`class`,`words-sort-wrapper`);
let elVtAYW = eo('label','MUof',null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmpOp32 = this._lc('cgtY_MDob', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'st6Qg3i'});
ec('div');
let elvowFu = eo('table','50Gf',null,`class`,`table table-bordered table-striped`);
let elOiFjV = eo('tbody','4Icf');
for (let i in Array.chunk(component.word.words, component.wordsPerLine)) {
let words = Array.chunk(component.word.words, component.wordsPerLine)[i]; 
 let iiuswW = 'V2GEstt' + i;
let elwcuwQ = eo('tr','6gpdCVapJG9T' + i+iiuswW);
for (let index in words) {
let word = words[index]; 
 let iiH0aq = 'J34IZcl' + index;
let el83JtS = eo('td','Undare7WxiGA' + index+iiuswW+iiH0aq,null,`class`,`word-wrapper`);
let elKZfQM = eo('div','CWwff'+iiuswW+iiH0aq,null,`class`,`word`);
let cnd6oZs = word.image;
this.setState('stUZmSq', cnd6oZs);
if (cnd6oZs) { 
let elb_vGA = ev('img','yamff'+iiuswW+iiH0aq,null,`src`,`${word.image}`,`title`,`${word.word}`,`alt`,`${word.word}`);
}let el5vlmu = eo('span','7vGff'+iiuswW+iiH0aq);
text(word.word);
ec('span');
ec('div');
ec('td');
let elZK4Dm = eo('td','KiHare7WxiGA' + index+iiuswW+iiH0aq,null,`class`,`translation`);
text(word.translation.word);
ec('td');
let cndp5Va = component.user.accountType == 'admin';
this.setState('stTTUx3', cndp5Va);
if (cndp5Va) { 
let elxDsyQ = eo('td','MR4ff'+iiuswW+iiH0aq);
let cnd0EOO = word.published;
this.setState('st2cdTZ', cnd0EOO);
if (cnd0EOO) { 
let elZEZL8 = eo('i','_sOff'+iiuswW+iiH0aq,null,`title`,``,`class`,`${fas('check-circle') + ' blue-text icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elZEZL8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Published')}`});
        ;
                    }, 20);                
                }let elgRXxU = eo('button','fHqff'+iiuswW+iiH0aq,null, eventListeners, {onclick:[function(e) {var $el = this;component.delete(word, index)}]},`type`,`button`,`class`,`btn btn-circle btn-danger`);
let elFPe2u = eo('i','KzIff'+iiuswW+iiH0aq,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');
let el7eqqr = eo('button','kuKff'+iiuswW+iiH0aq,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentWord = word; component.openModal('edit');}]},`type`,`button`,`class`,`btn btn-circle btn-primary`);
let elUCrrM = eo('i','Wcpff'+iiuswW+iiH0aq,null,`class`,`${fas('edit') + ' icon'}`);
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
let cndMv_a = component.modalShouldBeOpened;
this.setState('stccCHm', cndMv_a);
if (cndMv_a) { 
let cmpf0bN = this._lc('cc0_bZ9Jk', {parent:component,props:{record:component.getWordRecord(),category:component.word},events:{onvalidate:function(e) {let $el = this; return component.validateAsUnique(e)},onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},state:'stccCHm'});
}let cndt3Hc = component.confirmPurchase;
this.setState('stFloAH', cndt3Hc);
if (cndt3Hc) { 
let cmpicgK = this._lc('cDYASIQSu', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stFloAH'});
}
                    this.isReadyToGo();
                }
        });