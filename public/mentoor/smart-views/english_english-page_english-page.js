_Component({
                selector: 'english-page',
                c: 'EnglishPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','totalWords','isLoading','sortBy','defaultSort','categories','currentCategory','confirmPurchase','modalShouldBeOpened','adjustRecord','purchaseCategory'],
                children: {c04PsI87C:'flk-number-counter',cB1p5NgMS:'flk-spinner',c4DzLE1RR:'flk-dropdown-list',cp5Tl2Wj5:'gold-icon',cW3wO7tKR:'layout',c1RDC9a8t:'word-modal',cDgO9Ox1s:'flk-alert'},
                render: function (component) {
                    let cmpcpeY = this._lc('cW3wO7tKR', {parent:component,content:(layout) => {let elbZuRw = eo('h1',null,null,`class`,`m-y-1 text-center text-sm-left`);
text(`English As A Foreigner`);
let elxmJu3 = eo('a',null,null,`href`,`/english/top-participants`,`id`,`top-participants`);
let elzrYSJ = eo('i',null,null,`class`,`${fas('hand-point-right')} icon`);
ec('i');
text(`Top participants`);
ec('a');
let cndsZJZ = component.user.id == 1;
this.setState('st5T_lR', cndsZJZ);
if (cndsZJZ) { 
let elBthbN = eo('button','7MRf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elO7fbx = eo('i','UdTf',null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');
}ec('h1');
let elwxThW = eo('p');
text(`This module will help you as a`);
let elzN248 = eo('strong',null,null,`class`,`pink-text mx-2`);
text(`non-native English
            person`);
ec('strong');
text(`to improve yourself gradually in the language.`);
ec('p');
let elWWXN4 = eo('p');
text(`It won't go with the regular way of learning English, but it will depend on the most
        efficient way to help you become more better listener, reader, writer and speaker as well.`);
ec('p');
let elMeVWE = eo('p');
text(`For the time being, this section of the application will be for`);
let ell6f4x = eo('strong',null,null,`class`,`teal-text mx-2`);
text(`Arabic`);
ec('strong');
text(`people who wants to learn English.`);
ec('p');
let elG4be_ = eo('p',null,null,`class`,`bold`);
text(`Topics with`);
let eltkkBW = eo('i',null,null,`title`,``,`class`,`${fas('sort-amount-up')} purple-text mx-1 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = eltkkBW;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                text(`Incremental cost flag, will start with free gold and increase accordingly whenever the topic gets more new words.`);
ec('p');
let cndOigM = component.totalWords;
this.setState('stykI5T', cndOigM);
if (cndOigM) { 
let el12yAW = eo('div','uZnf',null,`class`,`text-center`);
let elv7SHZ = eo('h2','ERxf',null,`class`,`total-words`);
let cmpOgqp = this._lc('c04PsI87C', {parent:component,parentTop:layout,props:{number:component.totalWords},attrs:{class:'value'},state:'stykI5T'});
let elGI9Kf = eo('div','mHBf',null,`class`,`text`);
text(`Words`);
ec('div');
ec('h2');
ec('div');
}let el6l0xi = eo('section',null,null,`class`,`m-t-2`);
let el4RUIo = eo('h2',null,null,`class`,`text-center m-b-2 bold`);
text(`Topics List`);
ec('h2');
let cnd9qys = component.isLoading;
this.setState('st9BkIW', cnd9qys);
let cndEEvX = !(cnd9qys);
this.setState('stN3gj8', cndEEvX);
if (cnd9qys) { 
let cmpPaVb = this._lc('cB1p5NgMS', {parent:component,parentTop:layout,state:'st9BkIW'});
}else { 
let elVyxFc = eo('div',null,null,`class`,`row`);
let ellOKtr = eo('div',null,null,`class`,`words-sort-wrapper`);
let ellHIIU = eo('label',null,null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmp0znI = this._lc('c4DzLE1RR', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stN3gj8'});
ec('div');
let el5e0GI = eo('div',null,null,`class`,`w-100`);
ec('div');
for (let index in component.categories) {
let category = component.categories[index]; 
 let iiYHXD = 'ris2ZCn' + index;
let elmoIHD = eo('div','IfPUgOr9sQEx' + index+iiYHXD,null,`class`,`category col-sm-6 col-lg-4 px-1 m-b-1`);
let elgDZhM = eo('div','X7rff'+iiYHXD,null,`class`,`simple-card`);
let elx44rr = eo('div','ifQff'+iiYHXD,null,`class`,`row`);
let elFkTJd = eo('div','wWfff'+iiYHXD,null,`class`,`col-3 m-t-1`);
let elxIv3q = eo('a','tHIff'+iiYHXD,null,`href`,`${URLS.english(category)}`);
let elf2dnW = ev('img','nuSff'+iiYHXD,null,`src`,`${category.image}`,`class`,`image`,`title`,`${category.word}`,`alt`,`${category.word}`);
ec('a');
ec('div');
let elOHSug = eo('div','DhKff'+iiYHXD,null,`class`,`col`);
let elZOhXR = eo('h3','X1jff'+iiYHXD,null,`class`,`word`);
let el8tsGD = eo('span','m_2ff'+iiYHXD);
text(category.word);
ec('span');
let cndPvtt = category.incrementalCost;
this.setState('stggW9Q', cndPvtt);
if (cndPvtt) { 
let elMEH8d = eo('i','_Leff'+iiYHXD,null,`title`,``,`class`,`${fas('sort-amount-up')} purple-text float-right icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elMEH8d;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                }let cndyvd5 = Object.get(category, 'total.words', '');
this.setState('stOk2dQ', cndyvd5);
if (cndyvd5) { 
let elWzf4Q = eo('span','qxmff'+iiYHXD,null,`class`,`ml-2`);
text('(' + category.total.words.format() + ')');
ec('span');
}let cnd_4XU = component.user.accountType == 'admin' && category.words && category.words.filter(word => ! word.published).length > 0;
this.setState('stcGlJj', cnd_4XU);
if (cnd_4XU) { 
let elzILK8 = eo('span','B_5ff'+iiYHXD,null,`class`,`ml-2 bold btn btn-warning`);
text(category.words.filter(word => ! word.published).length.format());
ec('span');
}ec('h3');
let el7A1ED = eo('p','yPCff'+iiYHXD,null,`class`,`description`);
text(category.description);
ec('p');
let elhxbTx = eo('div','jVwff'+iiYHXD,null,`class`,`ar`);
let elJbgU7 = eo('span','F7Iff'+iiYHXD);
text(category.translation.word);
ec('span');
ec('div');
let el50b3d = eo('div','PAlff'+iiYHXD,null,`class`,`ar description`);
text(category.translation.description);
ec('div');
let elayoZv = eo('section','oELff'+iiYHXD,null,`class`,`footer`);
let elbE3Vs = eo('div','Ca3ff'+iiYHXD,null,`class`,`cost`);
let cndGnb_ = category.cost > 0;
this.setState('stN4Hrz', cndGnb_);
if (cndGnb_) { 
let cmpa0vo = this._lc('cp5Tl2Wj5', {parent:component,parentTop:layout,props:{coins:category.cost},attrs:{color:'green'},state:'stN4Hrz',insideLoop:true,index:"" +iiYHXD});
}let cndHcwV = category.cost == 0;
this.setState('stPkFUD', cndHcwV);
if (cndHcwV) { 
let elJsJaZ = eo('strong','yG_ff'+iiYHXD,null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let cndYv_c = category.isUnlocked;
this.setState('stBxeFO', cndYv_c);
let cndWgBp = !(cndYv_c);
this.setState('stzqhfF', cndWgBp);
if (cndYv_c) { 
let elc1Gf1 = eo('a','3K6ff'+iiYHXD,null,`href`,`${URLS.english(category)}`,`class`,`btn btn-success btn-sm bold float-right`);
text(`DETAILS`);
ec('a');
}else { 
let el4dkMI = eo('button','5BNff'+iiYHXD,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.confirmPurchase = true}]},`type`,`button`,`class`,`btn btn-sm bold float-right btn-danger`);
let eltoW9h = eo('i','A10ff'+iiYHXD,null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Purchase`);
ec('button');
}let cndqxx6 = component.user.accountType == 'admin';
this.setState('stJPlqE', cndqxx6);
if (cndqxx6) { 
let elg8AW6 = eo('button','CSBff'+iiYHXD,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.openModal('edit', index)}]},`class`,`btn btn-circle btn-purple`,`type`,`button`);
let elPiiSB = eo('i','0AWff'+iiYHXD,null,`class`,`${fas('edit')} icon`);
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
let cnduGtM = component.modalShouldBeOpened;
this.setState('stahG8f', cnduGtM);
if (cnduGtM) { 
let cmpEl7M = this._lc('c1RDC9a8t', {parent:component,props:{record:component.currentCategory},events:{onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},attrs:{type:'category'},state:'stahG8f'});
}let cndk6fe = component.confirmPurchase;
this.setState('stAtqLv', cndk6fe);
if (cndk6fe) { 
let cmpCLqW = this._lc('cDgO9Ox1s', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'stAtqLv'});
}
                    this.isReadyToGo();
                }
        });