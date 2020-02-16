_Component({
                selector: 'polls-page',
                c: 'PollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['openNewPoll','title','newPoll','submit','booleans','answersList','unsetArrayIndex','isCreating'],
                children: {cIQmHpqHM:'layout',cHiWq7teN:'flk-dropdown-list',cZHtpn34D:'flk-modal'},
                render: function (component) {
                    let cmpavDd = this._lc('cIQmHpqHM', {parent:component,content:(layout) => {let elyMYYE = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openNewPoll()}]},`class`,`btn btn-success bold float-right`);
let elm1Anr = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elOdfXZ = eo('h1');
text(component.title);
ec('h1');
}});
let cndzDI2 = component.newPoll;
this.setState('stlJkbk', cndzDI2);
if (cndzDI2) { 
let cmpAZeC = this._lc('cZHtpn34D', {parent:component,events:{onclose:function(e) {let $el = this; component.newPoll = null}},content:(flkModal) => {let elKzYyc = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elKzYyc.formHandler) {
                    window.cfrmdlr = elKzYyc.formHandler = new FormHandler(elKzYyc, component);
                } else {
                    window.cfrmdlr = elKzYyc.formHandler;
                }
            let elLDqPQ = eo('div',null,null,`class`,`form-group`);
elLDqPQ.cls = {'group-error': !!elKzYyc.formHandler.getError(`title`) };

            for (let className in elLDqPQ.cls) {
                elLDqPQ.classList.toggle(className, elLDqPQ.cls[className]);
            }  
            let eluzg9a = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elydTMj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elx9fyd = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKzYyc.formHandler.addError(`title`, 'required', trans('validation.required'));}return elKzYyc.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndcmfu = elKzYyc.formHandler.getError(`title`);
this.setState('stIraeu', cndcmfu);
if (cndcmfu) { 
let elFVfjD = eo('div','Fe4f',null,`class`,`alert alert-danger`);
text(elKzYyc.formHandler.getError(`title`));
ec('div');
}ec('div');
let elKFLRa = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKzYyc.formHandler.addError(`description`, 'required', trans('validation.required'));}return elKzYyc.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Write some description (Markdown Support)`)}`,`type`,`textarea`,`rows`,`12`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndWt0L = elKzYyc.formHandler.getError(`description`);
this.setState('stLkyWF', cndWt0L);
if (cndWt0L) { 
let elWgivG = eo('div','qHPf',null,`class`,`alert alert-danger`);
text(elKzYyc.formHandler.getError(`description`));
ec('div');
}let elujNVJ = eo('div',null,null,`class`,`row m-y-2`);
let el5Lxn2 = eo('div',null,null,`class`,`col-sm-6`);
let cmp10mP = this._lc('cHiWq7teN', {parent:component,parentTop:flkModal,props:{required:true,value:0,items:component.booleans},attrs:{name:`${(`allowMultipleVotes`).toInputName()}`,label:'Allow Multiple Votes'},state:'stlJkbk'});
ec('div');
ec('div');
for (let index in component.answersList) {
let answer = component.answersList[index]; 
 let iikqzh = 'qVg8NJ8' + index;
let elxB1dO = eo('div','PCtDW65_Gk8z' + index+iikqzh,null,`class`,`row m-b-1`);
let elTQSH0 = eo('div','ze8ff'+iikqzh,null,`class`,`col-sm-10`);
let elB3FVZ = ev('input','VvNff'+iikqzh,null, eventListeners, {oninput:[function(e) {component.answersList[index] = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elKzYyc.formHandler.addError(`answers.${ index }`, 'required', trans('validation.required'));}return elKzYyc.formHandler.removeError(`answers.${ index }`);}]},`value`,`${fval(component.answersList[index])}`,`name`,`${(`answers.${ index }`).toInputName()}`,`placeholder`,`${trans(`Poll Answer ${ Number(index) + 1 }`)}`,`type`,`text`,`class`,`form-control`,`id`,`answers-${ index }`);
elB3FVZ.value = fval(component.answersList[index]);
let cndqjQO = elKzYyc.formHandler.getError(`answers.${ index }`);
this.setState('stWOrYe', cndqjQO);
if (cndqjQO) { 
let el30yej = eo('div','0u8ff'+iikqzh,null,`class`,`alert alert-danger`);
text(`${elKzYyc.formHandler.getError(`answers.${ index }`)}`);
ec('div');
}ec('div');
let elYVsKs = eo('div','9SZff'+iikqzh,null,`class`,`col-sm-2`);
let cndjbLK = index > 1;
this.setState('stk_8OJ', cndjbLK);
if (cndjbLK) { 
let elw9kqX = eo('button','2Xkff'+iikqzh,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('answersList', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el5yYsJ = eo('i','9h0ff'+iikqzh,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elw9kqX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
}
let elm8kLO = eo('div',null,null,`class`,`text-right`);
let el01Cau = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.answersList.push('');}]},`title`,``,`type`,`button`,`class`,`btn -circle btn-primary`);
let elPLiUQ = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el01Cau;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new answer')}`});
        ;
                    }, 20);                
                ec('div');
let elyhq5E = eo('div',null,null,`class`,`m-t-2`);
let elypKfe = eo('button',null,null, boolAttrs, {disabled:component.isCreating},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{heading:'New Poll'},state:'stlJkbk'});
}
                    this.isReadyToGo();
                }
        });