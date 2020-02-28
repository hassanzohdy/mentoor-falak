_Component({
                selector: 'english-page',
                c: 'EnglishPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','totalWords','isLoading','sortBy','defaultSort','categories','currentCategory','confirmPurchase','modalShouldBeOpened','adjustRecord','purchaseCategory'],
                children: {cPxCZ7pGy:'flk-number-counter',c6GNVSClh:'flk-spinner',cqpbGBbUA:'flk-dropdown-list',cwuM9T2Yi:'gold-icon',cTN9imByY:'layout',cfaoDQQbQ:'word-modal',chYhtYUC8:'flk-alert'},
                render: function (component) {
                    let cmp00D9 = this._lc('cTN9imByY', {parent:component,content:(layout) => {let elj4AuF = eo('h1',null,null,`class`,`m-y-1 text-center text-sm-left`);
text(`English As A Foreigner`);
let el5EyNm = eo('a',null,null,`href`,`/english/top-participants`,`id`,`top-participants`);
let elcBtv4 = eo('i',null,null,`class`,`${fas('hand-point-right')} icon`);
ec('i');
text(`Top participants`);
ec('a');
let cnd2Bcz = component.user.id == 1;
this.setState('stLGNzH', cnd2Bcz);
if (cnd2Bcz) { 
let el3i7J_ = eo('button','vN5f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elUx8Ct = eo('i','HkSf',null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');
}ec('h1');
let elIlkfO = eo('p');
text(`This module will help you as a`);
let elRmmtr = eo('strong',null,null,`class`,`pink-text mx-2`);
text(`non-native English
            person`);
ec('strong');
text(`to improve yourself gradually in the language.`);
ec('p');
let eloPPgB = eo('p');
text(`It won't go with the regular way of learning English, but it will depend on the most
        efficient way to help you become more better listener, reader, writer and speaker as well.`);
ec('p');
let elfBOZF = eo('p');
text(`For the time being, this section of the application will be for`);
let el78ax3 = eo('strong',null,null,`class`,`teal-text mx-2`);
text(`Arabic`);
ec('strong');
text(`people who wants to learn English.`);
ec('p');
let elknuGZ = eo('p',null,null,`class`,`bold`);
text(`Topics with`);
let elS2vVJ = eo('i',null,null,`title`,``,`class`,`${fas('sort-amount-up')} purple-text mx-1 icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elS2vVJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                text(`Incremental cost flag, will start with free gold and increase accordingly whenever the topic gets more new words.`);
ec('p');
let cndVspz = component.totalWords;
this.setState('stHMAP0', cndVspz);
if (cndVspz) { 
let elf0CSV = eo('div','USyf',null,`class`,`text-center`);
let elgADql = eo('h2','XHxf',null,`class`,`total-words`);
let cmpxbaV = this._lc('cPxCZ7pGy', {parent:component,parentTop:layout,props:{number:component.totalWords},attrs:{class:'value'},state:'stHMAP0'});
let ellQ5ec = eo('div','Qenf',null,`class`,`text`);
text(`Words`);
ec('div');
ec('h2');
ec('div');
}let el76Jn9 = eo('section',null,null,`class`,`m-t-2`);
let elKQbC4 = eo('h2',null,null,`class`,`text-center m-b-2 bold`);
text(`Topics List`);
ec('h2');
let cndATG7 = component.isLoading;
this.setState('st90R1P', cndATG7);
let cndervo = !(cndATG7);
this.setState('st7ecXx', cndervo);
if (cndATG7) { 
let cmpmoIZ = this._lc('c6GNVSClh', {parent:component,parentTop:layout,state:'st90R1P'});
}else { 
let elBahKe = eo('div',null,null,`class`,`row`);
let el48YZs = eo('div',null,null,`class`,`words-sort-wrapper`);
let elwVE1E = eo('label',null,null,`class`,`mr-2 bold teal-text`);
text(`Sort`);
ec('label');
let cmpWz0g = this._lc('cqpbGBbUA', {parent:component,parentTop:layout,props:{items:['Chronologically', 'Alphabetically'],searchable:false,value:component.defaultSort},events:{onselect:function(e) {let $el = this; component.sortBy(e.value)}},attrs:{class:'dropdown'},state:'st7ecXx'});
ec('div');
let elk4iQY = eo('div',null,null,`class`,`w-100`);
ec('div');
for (let index in component.categories) {
let category = component.categories[index]; 
 let iiLNa8 = 'RDIhTMN' + index;
let elqrJxI = eo('div','YiHeb7qFarwp' + index+iiLNa8,null,`class`,`category col-sm-6 col-lg-4 px-1 m-b-1`);
let elP0D0k = eo('div','c9Rff'+iiLNa8,null,`class`,`simple-card`);
let elIefVp = eo('div','GvJff'+iiLNa8,null,`class`,`row`);
let elkV1BL = eo('div','BXUff'+iiLNa8,null,`class`,`col-3 m-t-1`);
let elJiolq = eo('a','v8nff'+iiLNa8,null,`href`,`${URLS.english(category)}`);
let elwAtqq = ev('img','SKZff'+iiLNa8,null,`src`,`${category.image}`,`class`,`image`,`title`,`${category.word}`,`alt`,`${category.word}`);
ec('a');
ec('div');
let elJDIJ1 = eo('div','pbVff'+iiLNa8,null,`class`,`col`);
let eldAGaz = eo('h3','N1yff'+iiLNa8,null,`class`,`word`);
let elv7oUe = eo('span','C2Aff'+iiLNa8);
text(category.word);
ec('span');
let cndADsf = category.incrementalCost;
this.setState('stGKid_', cndADsf);
if (cndADsf) { 
let elO44Rz = eo('i','MKCff'+iiLNa8,null,`title`,``,`class`,`${fas('sort-amount-up')} purple-text float-right icon`);
ec('i');

                    setTimeout(function () {
                        let $el = elO44Rz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Incremental Cost')}`});
        ;
                    }, 20);                
                }let cnd0Q2c = Object.get(category, 'total.words', '');
this.setState('sttDCPp', cnd0Q2c);
if (cnd0Q2c) { 
let elXPIhv = eo('span','T2Xff'+iiLNa8,null,`class`,`ml-2`);
text('(' + category.total.words.format() + ')');
ec('span');
}let cndW5HH = component.user.accountType == 'admin' && category.words && category.words.filter(word => ! word.published).length > 0;
this.setState('stv39XQ', cndW5HH);
if (cndW5HH) { 
let elTBcdB = eo('span','9awff'+iiLNa8,null,`class`,`ml-2 bold btn btn-warning`);
text(category.words.filter(word => ! word.published).length.format());
ec('span');
}ec('h3');
let elcS8u_ = eo('p','JwLff'+iiLNa8,null,`class`,`description`);
text(category.description);
ec('p');
let el7NmI0 = eo('div','NuIff'+iiLNa8,null,`class`,`ar`);
let elY8cp0 = eo('span','02wff'+iiLNa8);
text(category.translation.word);
ec('span');
ec('div');
let elpmJQX = eo('div','G0Cff'+iiLNa8,null,`class`,`ar description`);
text(category.translation.description);
ec('div');
let el6jiq2 = eo('section','AYMff'+iiLNa8,null,`class`,`footer`);
let elCHxv3 = eo('div','Pl0ff'+iiLNa8,null,`class`,`cost`);
let cndW5nP = category.cost > 0;
this.setState('stk0mit', cndW5nP);
if (cndW5nP) { 
let cmpiHzX = this._lc('cwuM9T2Yi', {parent:component,parentTop:layout,props:{coins:category.cost},style:{color:'green'},state:'stk0mit',insideLoop:true,index:"" +iiLNa8});
}let cndjTl9 = category.cost == 0;
this.setState('storyj4', cndjTl9);
if (cndjTl9) { 
let elpoaNc = eo('strong','JM0ff'+iiLNa8,null,`class`,`pink-text`);
text(`FREE!`);
ec('strong');
}ec('div');
let cndgq_v = category.isUnlocked;
this.setState('stuN8Gm', cndgq_v);
let cndjdpf = !(cndgq_v);
this.setState('stZ8mhv', cndjdpf);
if (cndgq_v) { 
let elhPrsT = eo('a','enRff'+iiLNa8,null,`href`,`${URLS.english(category)}`,`class`,`btn btn-success btn-sm bold float-right`);
text(`DETAILS`);
ec('a');
}else { 
let elyRgI9 = eo('button','dP9ff'+iiLNa8,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.confirmPurchase = true}]},`type`,`button`,`class`,`btn btn-sm bold float-right btn-danger`);
let eloihQD = eo('i','Gicff'+iiLNa8,null,`class`,`${fas('lock')} mr-2 icon`);
ec('i');
text(`Purchase`);
ec('button');
}let cndrxE4 = component.user.accountType == 'admin';
this.setState('st_ZK2v', cndrxE4);
if (cndrxE4) { 
let el_ltML = eo('button','KfMff'+iiLNa8,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentCategory = category; component.openModal('edit', index)}]},`class`,`btn btn-circle btn-purple`,`type`,`button`);
let elPPO1m = eo('i','VDQff'+iiLNa8,null,`class`,`${fas('edit')} icon`);
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
let cndF8bl = component.modalShouldBeOpened;
this.setState('stI_OIY', cndF8bl);
if (cndF8bl) { 
let cmph9je = this._lc('cfaoDQQbQ', {parent:component,props:{record:component.currentCategory},events:{onsave:function(e) {let $el = this; component.adjustRecord(e)},onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},attrs:{type:'category'},state:'stI_OIY'});
}let cndVdaZ = component.confirmPurchase;
this.setState('st6pOL8', cndVdaZ);
if (cndVdaZ) { 
let cmpe_OH = this._lc('chYhtYUC8', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmPurchase = false},onconfirm:function(e) {let $el = this; component.purchaseCategory()}},state:'st6pOL8'});
}
                    this.isReadyToGo();
                }
        });