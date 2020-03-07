_Component({
                selector: 'english-page',
                c: 'EnglishPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','totalWords','isLoading','sortBy','defaultSort','categories','currentCategory','confirmPurchase','modalShouldBeOpened','adjustRecord','purchaseCategory'],
                children: {cgJ_LuZL2:'flk-number-counter',cG5_qoOG5:'flk-spinner',ck6PPn0kF:'flk-dropdown-list',clYN6wgDc:'gold-icon',cLhdvFErJ:'layout',c2sEDAo9o:'word-modal',cRpMM3JrE:'flk-alert'},
                render: function (component) {
                    let cmpkSz9 = this._lc('cLhdvFErJ', {parent:component,content:(layout) => {let elTbOLS = eo('h1',null,null,`class`,`m-y-1 text-center text-sm-left`);
text(`English As A Foreigner`);
let elyAoUl = eo('a',null,null,`href`,`/english/top-participants`,`id`,`top-participants`);
let elxM0v7 = eo('i',null,null,`class`,`${fas('hand-point-right')} icon`);
ec('i');
text(`Top participants`);
ec('a');
let cndHzxb = component.user.id == 1;
this.setState('stY6gWZ', cndHzxb);
if (cndHzxb) { 
let elyq1sT = eo('button','Miif',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elUZym3 = eo('i','pikf',null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');
}ec('h1');
let elEIG5o = eo('p');
text(`This module will help you as a`);
let elhz9B7 = eo('strong',null,null,`class`,`pink-text mx-2`);
text(`non-native English
            person`);
ec('strong');
text(`to improve yourself gradually in the language.`);
ec('p');
let elHtBzh = eo('p');
text(`It won't go with the regular way of learning English, but it will depend on the most
        efficient way to help you become more better listener, reader, writer and speaker as well.`);
ec('p');
let elH1mjk = eo('p');
text(`For the time being, this section of the application will be for`);
let elcsyi1 = eo('strong',null,null,`class`,`teal-text mx-2`);
text(`Arabic`);
ec('strong');
text(`people who wants to learn English.`);
ec('p');
let elheIbo = eo('p',null,null,`class`,`bold`);
text(`Topics with`);
let elsyGFF = eo('i',null,null,`title`,``,`class`,`${fas('sort-amount-up')} purple-text mx-1 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elsyGFF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                text(`Incremental cost flag, will start with free gold and increase accordingly whenever the topic gets more new words.`);
ec('p');
let cnd37IT = component.totalWords;
this.setState('strViUq', cnd37IT);
if (cnd37IT) { 
let elpG67W = eo('div','fnBf',null,`class`,`text-center`);
let elfSSC6 = eo('h2','yhef',null,`class`,`total-words`);
let cmpVhuZ = this._lc('cgJ_LuZL2', {parent:component,parentTop:layout,props:{number:component.totalWords},attrs:{class:'value'},state:'strViUq'});
let elj1sHv = eo('div','ZF_f',null,`class`,`text`);
text(`Words`);
ec('div');
ec('h2');
ec('div');
}let elup0Br = eo('section',null,null,`class`,`m-t-2`);
let el5COUJ = eo('h2',null,null,`class`,`text-center m-b-2 bold`);
text(`Topics List`);
ec('h2');
let cnd9NGj = component.isLoading;
this.setState('stBQ7EO', cnd9NGj);
let cnduIyJ = !(cnd9NGj);
this.setState('stjeaoe', cnduIyJ);
if (cnd9NGj) { 
let cmpeuSv = this._lc('cG5_qoOG5', {parent:component,parentTop:layout,state:'stBQ7EO'});
}else { 
let elonA6e = eo('div',null,null,`class`,`row`);
let elpSE45 = eo('div',null,null,`class`,`words-sort-wrapper`);
let eliYe05 = eo('label',null,null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmp1RwE = this._lc('ck6PPn0kF', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stjeaoe'});
ec('div');
let elFRjk5 = eo('div',null,null,`class`,`w-100`);
ec('div');
for (let index in component.categories) {
let category = component.categories[index]; 
 let iiqrQ7 = 'i6bj1U0' + index;
let elP4bTq = eo('div','JVfm9aA2rDp9' + index+iiqrQ7,null,`class`,`category col-sm-6 col-lg-4 px-1 m-b-1`);
let elDF7e0 = eo('div','hdJff'+iiqrQ7,null,`class`,`simple-card`);
let elOplnT = eo('div','Mufff'+iiqrQ7,null,`class`,`row`);
let elOkVne = eo('div','fm5ff'+iiqrQ7,null,`class`,`col-3 m-t-1`);
let el0feZJ = eo('a','ae3ff'+iiqrQ7,null,`href`,`${URLS.english(category)}`);
let elAc79C = ev('img','098ff'+iiqrQ7,null,`src`,`${category.image}`,`class`,`image`,`title`,`${category.word}`,`alt`,`${category.word}`);
ec('a');
ec('div');
let elbxn87 = eo('div','acOff'+iiqrQ7,null,`class`,`col`);
let elkstO6 = eo('h3','uSSff'+iiqrQ7,null,`class`,`word`);
let elGWY_A = eo('span','GU4ff'+iiqrQ7);
text(category.word);
ec('span');
let cnd4VuX = category.incrementalCost;
this.setState('st_byFK', cnd4VuX);
if (cnd4VuX) { 
let el7lLnR = eo('i','nVuff'+iiqrQ7,null,`title`,``,`class`,`${fas('sort-amount-up')} purple-text float-right icon`);
ec('i');

                    setTimeout(function () {
                        let $el = el7lLnR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                }let cnd8nS9 = Object.get(category, 'total.words', '');
this.setState('stCtyAH', cnd8nS9);
if (cnd8nS9) { 
let elMfdCV = eo('span','gUqff'+iiqrQ7,null,`class`,`ml-2`);
text('(' + category.total.words.format() + ')');
ec('span');
}let cnd1gD2 = component.user.accountType == 'admin' && category.words && category.words.filter(word => ! word.published).length > 0;
this.setState('st5A__h', cnd1gD2);
if (cnd1gD2) { 
let elYnLAH = eo('span','vdSff'+iiqrQ7,null,`class`,`ml-2 bold btn btn-warning`);
text(category.words.filter(word => ! word.published).length.format());
ec('span');
}ec('h3');
let elE5gEv = eo('p','LCfff'+iiqrQ7,null,`class`,`description`);
text(category.description);
ec('p');
let elrGOk2 = eo('div','P8Iff'+iiqrQ7,null,`class`,`ar`);
let elVCD2N = eo('span','Jjgff'+iiqrQ7);
text(category.translation.word);
ec('span');
ec('div');
let elk0l_E = eo('div','utXff'+iiqrQ7,null,`class`,`ar description`);
text(category.translation.description);
ec('div');
let elxfYdX = eo('section','cf2ff'+iiqrQ7,null,`class`,`footer`);
let elFwh5J = eo('div','1hzff'+iiqrQ7,null,`class`,`cost`);
let cnd4cXW = category.cost > 0;
this.setState('stNsTJK', cnd4cXW);
if (cnd4cXW) { 
let cmp5Cvu = this._lc('clYN6wgDc', {parent:component,parentTop:layout,props:{coins:category.cost},attrs:{color:'green'},state:'stNsTJK',insideLoop:true,index:"" +iiqrQ7});
}let cndF8Ww = category.cost == 0;
this.setState('st3iXpB', cndF8Ww);
if (cndF8Ww) { 
let el7bIH2 = eo('strong','mKsff'+iiqrQ7,null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let cndjwLS = category.isUnlocked;
this.setState('stXqLW1', cndjwLS);
let cnddYp3 = !(cndjwLS);
this.setState('st9Ghdn', cnddYp3);
if (cndjwLS) { 
let elAx22v = eo('a','shnff'+iiqrQ7,null,`href`,`${URLS.english(category)}`,`class`,`btn btn-success btn-sm bold float-right`);
text(`DETAILS`);
ec('a');
}else { 
let eloDJrF = eo('button','_nQff'+iiqrQ7,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.confirmPurchase = true}]},`type`,`button`,`class`,`btn btn-sm bold float-right btn-danger`);
let elpVjyF = eo('i','j5Gff'+iiqrQ7,null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Purchase`);
ec('button');
}let cnd_2WK = component.user.accountType == 'admin';
this.setState('stNbIBB', cnd_2WK);
if (cnd_2WK) { 
let elFuyar = eo('button','K9mff'+iiqrQ7,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.openModal('edit', index)}]},`class`,`btn btn-circle btn-purple`,`type`,`button`);
let el8h7ic = eo('i','zF3ff'+iiqrQ7,null,`class`,`${fas('edit')} icon`);
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
let cndgC9o = component.modalShouldBeOpened;
this.setState('st52WRe', cndgC9o);
if (cndgC9o) { 
let cmpTDRu = this._lc('c2sEDAo9o', {parent:component,props:{record:component.currentCategory},events:{onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},attrs:{type:'category'},state:'st52WRe'});
}let cndKk1S = component.confirmPurchase;
this.setState('st5c_W7', cndKk1S);
if (cndKk1S) { 
let cmpyFoX = this._lc('cRpMM3JrE', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'st5c_W7'});
}
                    this.isReadyToGo();
                }
        });