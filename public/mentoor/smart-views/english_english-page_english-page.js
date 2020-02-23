_Component({
                selector: 'english-page',
                c: 'EnglishPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','totalWords','isLoading','sortBy','defaultSort','categories','currentCategory','confirmPurchase','modalShouldBeOpened','adjustRecord','purchaseCategory'],
                children: {czOVTUTJq:'flk-number-counter',cnPnH1uhP:'flk-spinner',cpYRgLt_c:'flk-dropdown-list',cgucF9U9S:'gold-icon',cn8NNBxeb:'layout',ceJXPM_6i:'word-modal',ctOrkw0qU:'flk-alert'},
                render: function (component) {
                    let cmpe2Dm = this._lc('cn8NNBxeb', {parent:component,content:(layout) => {let elbWp1P = eo('h1',null,null,`class`,`m-y-1 text-center text-sm-left`);
text(`English As A Foreigner`);
let elvXO_C = eo('a',null,null,`href`,`/english/top-participants`,`id`,`top-participants`);
let ellr6py = eo('i',null,null,`class`,`${fas('hand-point-right') + ' icon'}`);
ec('i');
text(`Top participants`);
ec('a');
let cndFGv8 = component.user.id == 1;
this.setState('staw4RS', cndFGv8);
if (cndFGv8) { 
let elfgHDY = eo('button','LLxf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elmbO_M = eo('i','zpuf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');
}ec('h1');
let eldiAh0 = eo('p');
text(`This module will help you as a`);
let elO_XfG = eo('strong',null,null,`class`,`pink-text mx-2`);
text(`non-native English
            person`);
ec('strong');
text(`to improve yourself gradually in the language.`);
ec('p');
let elfGNnp = eo('p');
text(`It won't go with the regular way of learning English, but it will depend on the most
        efficient way to help you become more better listener, reader, writer and speaker as well.`);
ec('p');
let elBY1VU = eo('p');
text(`For the time being, this section of the application will be for`);
let elg4CtP = eo('strong',null,null,`class`,`teal-text mx-2`);
text(`Arabic`);
ec('strong');
text(`people who wants to learn English.`);
ec('p');
let el7WqG9 = eo('p',null,null,`class`,`bold`);
text(`Topics with`);
let ellBsiE = eo('i',null,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text mx-1 icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = ellBsiE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                text(`Incremental cost flag, will start with free gold and increase accordingly whenever the topic gets more new words.`);
ec('p');
let cndKRUx = component.totalWords;
this.setState('stUdmCB', cndKRUx);
if (cndKRUx) { 
let elw1ppA = eo('div','elif',null,`class`,`text-center`);
let elhoV01 = eo('h2','iEJf',null,`class`,`total-words`);
let cmpeSiu = this._lc('czOVTUTJq', {parent:component,parentTop:layout,props:{number:component.totalWords},attrs:{class:'value'},state:'stUdmCB'});
let eluVP_D = eo('div','y0Jf',null,`class`,`text`);
text(`Words`);
ec('div');
ec('h2');
ec('div');
}let elkg6z8 = eo('section',null,null,`class`,`m-t-2`);
let elRKhRu = eo('h2',null,null,`class`,`text-center m-b-2 bold`);
text(`Topics List`);
ec('h2');
let cndkjeE = component.isLoading;
this.setState('stfMNih', cndkjeE);
let cnd4x6O = !(cndkjeE);
this.setState('stBoa2r', cnd4x6O);
if (cndkjeE) { 
let cmp5Z2c = this._lc('cnPnH1uhP', {parent:component,parentTop:layout,state:'stfMNih'});
}else { 
let elkitjf = eo('div',null,null,`class`,`row`);
let elfpyIx = eo('div',null,null,`class`,`words-sort-wrapper`);
let elusLYk = eo('label',null,null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmpGPCY = this._lc('cpYRgLt_c', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'stBoa2r'});
ec('div');
let elGb7AI = eo('div',null,null,`class`,`w-100`);
ec('div');
for (let index in component.categories) {
let category = component.categories[index]; 
 let iiVeiu = 'Wd_U2i6' + index;
let elCn1dB = eo('div','1YerliXEHfDR' + index+iiVeiu,null,`class`,`category col-sm-6 col-lg-4 px-1 m-b-1`);
let elP3VA4 = eo('div','daEff'+iiVeiu,null,`class`,`simple-card`);
let elEkepn = eo('div','XPdff'+iiVeiu,null,`class`,`row`);
let elSikDw = eo('div','2fUff'+iiVeiu,null,`class`,`col-3 m-t-1`);
let el_IknH = eo('a','5naff'+iiVeiu,null,`href`,`${URLS.english(category)}`);
let elMyEXO = ev('img','X7Hff'+iiVeiu,null,`src`,`${category.image}`,`class`,`image`,`title`,`${category.word}`,`alt`,`${category.word}`);
ec('a');
ec('div');
let el9lPxp = eo('div','LqTff'+iiVeiu,null,`class`,`col`);
let elQkba4 = eo('h3','KvAff'+iiVeiu,null,`class`,`word`);
let elSw7pv = eo('span','OJtff'+iiVeiu);
text(category.word);
ec('span');
let cndPv5c = category.incrementalCost;
this.setState('st1cagd', cndPv5c);
if (cndPv5c) { 
let elE8GQz = eo('i','X1mff'+iiVeiu,null,`title`,``,`class`,`${fas('sort-amount-up') + ' purple-text float-right icon'}`);
ec('i');

                    setTimeout(function () {
                        let $el = elE8GQz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                }let cndFMq2 = Object.get(category, 'total.words', '');
this.setState('stvny_j', cndFMq2);
if (cndFMq2) { 
let elFn8In = eo('span','KpXff'+iiVeiu,null,`class`,`ml-2`);
text('(' + category.total.words.format() + ')');
ec('span');
}let cndlIMO = component.user.accountType == 'admin' && category.words && category.words.filter(word => ! word.published).length > 0;
this.setState('stURB5v', cndlIMO);
if (cndlIMO) { 
let elWCK8p = eo('span','cDOff'+iiVeiu,null,`class`,`ml-2 bold btn btn-warning`);
text(category.words.filter(word => ! word.published).length.format());
ec('span');
}ec('h3');
let elTbZMt = eo('p','urtff'+iiVeiu,null,`class`,`description`);
text(category.description);
ec('p');
let elHi9cc = eo('div','hacff'+iiVeiu,null,`class`,`ar`);
let elpvCJe = eo('span','MY5ff'+iiVeiu);
text(category.translation.word);
ec('span');
ec('div');
let elHvKUP = eo('div','Cpsff'+iiVeiu,null,`class`,`ar description`);
text(category.translation.description);
ec('div');
let elAtsXS = eo('section','wzpff'+iiVeiu,null,`class`,`footer`);
let elhlqTe = eo('div','wJ0ff'+iiVeiu,null,`class`,`cost`);
let cndr4Ll = category.cost > 0;
this.setState('stbh8ke', cndr4Ll);
if (cndr4Ll) { 
let cmpIUga = this._lc('cgucF9U9S', {parent:component,parentTop:layout,props:{coins:category.cost},style:{color:'green'},state:'stbh8ke',insideLoop:true,index:"" +iiVeiu});
}let cndq6TA = category.cost == 0;
this.setState('stv5HZ4', cndq6TA);
if (cndq6TA) { 
let elcRUfS = eo('strong','nwtff'+iiVeiu,null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let cndHhcf = category.isUnlocked;
this.setState('stNWuqC', cndHhcf);
let cnd_P4l = !(cndHhcf);
this.setState('st1czL8', cnd_P4l);
if (cndHhcf) { 
let el6E7RR = eo('a','QDBff'+iiVeiu,null,`href`,`${URLS.english(category)}`,`class`,`btn btn-success btn-sm bold float-right`);
text(`DETAILS`);
ec('a');
}else { 
let elUGUSO = eo('button','L13ff'+iiVeiu,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.confirmPurchase = true}]},`type`,`button`,`class`,`btn btn-sm bold float-right btn-danger`);
let elpkxYl = eo('i','3n3ff'+iiVeiu,null,`class`,`${fas('lock') + ' mr-2 icon'}`);
ec('i');
text(`Purchase`);
ec('button');
}let cndCwql = component.user.accountType == 'admin';
this.setState('stSMWH_', cndCwql);
if (cndCwql) { 
let elGwJmZ = eo('button','t1cff'+iiVeiu,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.openModal('edit', index)}]},`class`,`btn btn-circle btn-purple`,`type`,`button`);
let el2IUwR = eo('i','dz2ff'+iiVeiu,null,`class`,`${fas('edit') + ' icon'}`);
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
let cnde12b = component.modalShouldBeOpened;
this.setState('stoC7Qs', cnde12b);
if (cnde12b) { 
let cmp65Sg = this._lc('ceJXPM_6i', {parent:component,props:{record:component.currentCategory},events:{onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},attrs:{type:'category'},state:'stoC7Qs'});
}let cndlX8J = component.confirmPurchase;
this.setState('staxdhp', cndlX8J);
if (cndlX8J) { 
let cmpRHVL = this._lc('ctOrkw0qU', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'staxdhp'});
}
                    this.isReadyToGo();
                }
        });