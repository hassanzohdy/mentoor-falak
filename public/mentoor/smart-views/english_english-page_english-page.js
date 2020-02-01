_Component({
                selector: 'english-page',
                c: 'EnglishPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','totalWords','isLoading','sortBy','defaultSort','categories','currentCategory','confirmPurchase','modalShouldBeOpened','adjustRecord','purchaseCategory'],
                children: {cll4qRxRM:'flk-number-counter',cIMrUvmES:'flk-spinner',cSxAkeqOy:'flk-dropdown-list',c6fgpZB6K:'gold-icon',cXubWVpkd:'layout',cSu1b3rW0:'word-modal',cl06zd6ao:'flk-alert'},
                render: function (component) {
                    let cmpJSkl = this._lc('cXubWVpkd', {parent:component,content:(layout) => {let el_QSls = eo('h1',null,null,`class`,`m-y-1 text-center text-sm-left`);
text(`English As A Foreigner`);
let elnUywi = eo('a',null,null,`href`,`/english/top-participants`,`id`,`top-participants`);
let elZslie = eo('i',null,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
text(`Top participants`);
ec('a');
let cndWLTN = component.user.id == 1;
this.setState('stYTAc3', cndWLTN);
if (cndWLTN) { 
let eldFJtj = eo('button','Xm3f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let el30Ho4 = eo('i','3COf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let el_QzHj = eo('p');
text(`This module will help you as a`);
let elfFl9y = eo('strong',null,null,`class`,`pink-text mx-2`);
text(`non-native English
            person`);
ec('strong');
text(`to improve yourself gradually in the language.`);
ec('p');
let elDiy0y = eo('p');
text(`It won't go with the regular way of learning English, but it will depend on the most
        efficient way to help you become more better listener, reader, writer and speaker as well.`);
ec('p');
let elo6TxA = eo('p');
text(`For the time being, this section of the application will be for`);
let elVVzlb = eo('strong',null,null,`class`,`teal-text mx-2`);
text(`Arabic`);
ec('strong');
text(`people who wants to learn English.`);
ec('p');
let elrXzvO = eo('p',null,null,`class`,`bold`);
text(`Topics with`);
let elBtZoq = eo('i',null,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text mx-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elBtZoq;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                text(`Incremental cost flag, will start with free gold and increase accordingly whenever the topic gets more new words.`);
ec('p');
let cndQbXp = component.totalWords;
this.setState('stVPt3d', cndQbXp);
if (cndQbXp) { 
let eloLUdd = eo('div','_P0f',null,`class`,`text-center`);
let elV2G7N = eo('h2','YaNf',null,`class`,`total-words`);
let cmpLHsa = this._lc('cll4qRxRM', {parent:component,parentTop:layout,props:{number:component.totalWords},attrs:{class:'value'},state:'stVPt3d'});
let el2c2cA = eo('div','g3kf',null,`class`,`text`);
text(`Words`);
ec('div');
ec('h2');
ec('div');
}let elL1hDu = eo('section',null,null,`class`,`m-t-2`);
let el36uVY = eo('h2',null,null,`class`,`text-center m-b-2 bold`);
text(`Topics List`);
ec('h2');
let cndtVjB = component.isLoading;
this.setState('stMxMYv', cndtVjB);
let cndnIca = !(cndtVjB);
this.setState('stWjUfK', cndnIca);
if (cndtVjB) { 
let cmpog7t = this._lc('cIMrUvmES', {parent:component,parentTop:layout,state:'stMxMYv'});
}else { 
let elTtYTS = eo('div',null,null,`class`,`row`);
let elZ8ep8 = eo('div',null,null,`class`,`words-sort-wrapper`);
let elCoN8o = eo('label',null,null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmpNLWa = this._lc('cSxAkeqOy', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stWjUfK'});
ec('div');
let el5gd5_ = eo('div',null,null,`class`,`w-100`);
ec('div');
for (let index in component.categories) {
let category = component.categories[index]; 
 let iiZTCm = 'iwyDsmU' + index;
let elmJkDL = eo('div','TOBnfAXOKdUf' + index+iiZTCm,null,`class`,`category col-sm-6 col-lg-4 px-1 m-b-1`);
let elEX6d0 = eo('div','0kcff'+iiZTCm,null,`class`,`simple-card`);
let elB2Myo = eo('div','g58ff'+iiZTCm,null,`class`,`row`);
let elK7st7 = eo('div','BPVff'+iiZTCm,null,`class`,`col-3 m-t-1`);
let el2JSPI = eo('a','TrKff'+iiZTCm,null,`href`,`${URLS.english(category)}`);
let elJcLQz = ev('img','2bRff'+iiZTCm,null,`src`,`${category.image}`,`class`,`image`,`title`,`${category.word}`,`alt`,`${category.word}`);
ec('a');
ec('div');
let elI_Nxs = eo('div','U3Gff'+iiZTCm,null,`class`,`col`);
let eluPrKU = eo('h3','VJ6ff'+iiZTCm,null,`class`,`word`);
let eliUDKd = eo('span','ARqff'+iiZTCm);
text(category.word);
ec('span');
let cndPse2 = category.incrementalCost;
this.setState('stP1pBw', cndPse2);
if (cndPse2) { 
let elx8UtR = eo('i','Fh8ff'+iiZTCm,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text float-right icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elx8UtR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                }let cndtsP9 = Object.get(category, 'total.words', '');
this.setState('stQLD_H', cndtsP9);
if (cndtsP9) { 
let elQIXQS = eo('span','5N9ff'+iiZTCm,null,`class`,`ml-2`);
text('(' + category.total.words.format() + ')');
ec('span');
}let cndkOaV = component.user.accountType == 'admin' && category.words && category.words.filter(word => ! word.published).length > 0;
this.setState('stgFOCH', cndkOaV);
if (cndkOaV) { 
let elJ8vWn = eo('span','qgWff'+iiZTCm,null,`class`,`ml-2 bold btn btn-warning`);
text(category.words.filter(word => ! word.published).length.format());
ec('span');
}ec('h3');
let elQOt0w = eo('p','E8Dff'+iiZTCm,null,`class`,`description`);
text(category.description);
ec('p');
let el06lLZ = eo('div','0Ttff'+iiZTCm,null,`class`,`ar`);
let el972W3 = eo('span','fnvff'+iiZTCm);
text(category.translation.word);
ec('span');
ec('div');
let el8gItg = eo('div','WZzff'+iiZTCm,null,`class`,`ar description`);
text(category.translation.description);
ec('div');
let elYi9om = eo('section','7bKff'+iiZTCm,null,`class`,`footer`);
let elOwNDZ = eo('div','1Whff'+iiZTCm,null,`class`,`cost`);
let cnd9mLE = category.cost > 0;
this.setState('stKpoEy', cnd9mLE);
if (cnd9mLE) { 
let cmpEE5E = this._lc('c6fgpZB6K', {parent:component,parentTop:layout,props:{coins:category.cost},style:{color:'green'},state:'stKpoEy',insideLoop:true,index:"" +iiZTCm});
}let cnd0GWQ = category.cost == 0;
this.setState('stKsnKF', cnd0GWQ);
if (cnd0GWQ) { 
let elYahJv = eo('strong','hwRff'+iiZTCm,null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let cndS_UD = category.isUnlocked;
this.setState('stl_tDz', cndS_UD);
let cndyhUk = !(cndS_UD);
this.setState('stP7cX6', cndyhUk);
if (cndS_UD) { 
let elqILGt = eo('a','4_nff'+iiZTCm,null,`href`,`${URLS.english(category)}`,`class`,`btn btn-success btn-sm bold float-right`);
text(`DETAILS`);
ec('a');
}else { 
let elEGikr = eo('button','suhff'+iiZTCm,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.confirmPurchase = true}]},`type`,`button`,`class`,`btn btn-sm bold float-right btn-danger`);
let elyDhPK = eo('i','73cff'+iiZTCm,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase`);
ec('button');
}let cnddDxn = component.user.accountType == 'admin';
this.setState('stCiS30', cnddDxn);
if (cnddDxn) { 
let el_Gkes = eo('button','Cfnff'+iiZTCm,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.openModal('edit', index)}]},`class`,`btn btn-circle btn-purple`,`type`,`button`);
let elxfJEW = eo('i','UP9ff'+iiZTCm,null,`class`,`${fas('edit') + ' icon'}`);
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
let cndM_Bh = component.modalShouldBeOpened;
this.setState('sttpptK', cndM_Bh);
if (cndM_Bh) { 
let cmpY9OV = this._lc('cSu1b3rW0', {parent:component,props:{record:component.currentCategory},events:{onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},attrs:{type:'category'},state:'sttpptK'});
}let cndPjP2 = component.confirmPurchase;
this.setState('sttzykY', cndPjP2);
if (cndPjP2) { 
let cmpjZk_ = this._lc('cl06zd6ao', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'sttzykY'});
}
                    this.isReadyToGo();
                }
        });