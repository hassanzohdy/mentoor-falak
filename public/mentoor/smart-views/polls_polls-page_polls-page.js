_Component({
                selector: 'polls-page',
                c: 'PollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['openNewPoll','title','newPoll','submit','booleans','answersList','unsetArrayIndex','isCreating'],
                children: {crQRqX61q:'layout',cFNbuFNDF:'flk-dropdown-list',cToqNyNTv:'flk-modal'},
                render: function (component) {
                    let cmpw_wV = this._lc('crQRqX61q', {parent:component,content:(layout) => {let elzizoo = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openNewPoll()}]},`class`,`btn btn-success bold float-right`);
let elimGq8 = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elWxPmP = eo('h1');
text(component.title);
ec('h1');
}});
let cndk3vF = component.newPoll;
this.setState('stY0TPx', cndk3vF);
if (cndk3vF) { 
let cmpnGMN = this._lc('cToqNyNTv', {parent:component,events:{onclose:function(e) {let $el = this; component.newPoll = null}},content:(flkModal) => {let el5B4Ea = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el5B4Ea.formHandler) {
                    window.cfrmdlr = el5B4Ea.formHandler = new FormHandler(el5B4Ea, component);
                } else {
                    window.cfrmdlr = el5B4Ea.formHandler;
                }
            let elPn_dF = eo('div',null,null,`class`,`form-group`);
elPn_dF.cls = {'group-error': !!el5B4Ea.formHandler.getError(`title`) };

            for (let className in elPn_dF.cls) {
                elPn_dF.classList.toggle(className, elPn_dF.cls[className]);
            }  
            let elgnKaZ = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elhqm6o = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkraBE = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5B4Ea.formHandler.addError(`title`, 'required', trans('validation.required'));}return el5B4Ea.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndGOqr = el5B4Ea.formHandler.getError(`title`);
this.setState('st7ZcnI', cndGOqr);
if (cndGOqr) { 
let elhD3e3 = eo('div','KNBf',null,`class`,`alert alert-danger`);
text(el5B4Ea.formHandler.getError(`title`));
ec('div');
}ec('div');
let elXDw08 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el5B4Ea.formHandler.addError(`description`, 'required', trans('validation.required'));}return el5B4Ea.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Write some description (Markdown Support)`)}`,`type`,`textarea`,`rows`,`12`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cnd7fA0 = el5B4Ea.formHandler.getError(`description`);
this.setState('stkNJc3', cnd7fA0);
if (cnd7fA0) { 
let eln1_uH = eo('div','9eDf',null,`class`,`alert alert-danger`);
text(el5B4Ea.formHandler.getError(`description`));
ec('div');
}let el59Nj6 = eo('div',null,null,`class`,`row m-y-2`);
let elT3nzl = eo('div',null,null,`class`,`col-sm-6`);
let cmpIoE2 = this._lc('cFNbuFNDF', {parent:component,parentTop:flkModal,props:{required:true,value:0,items:component.booleans},attrs:{name:`${(`allowMultipleVotes`).toInputName()}`,label:'Allow Multiple Votes'},state:'stY0TPx'});
ec('div');
ec('div');
for (let index in component.answersList) {
let answer = component.answersList[index]; 
 let ii3rlH = 'TPTxHwP' + index;
let el5irhP = eo('div','vOzumH6jXdj9' + index+ii3rlH,null,`class`,`row m-b-1`);
let el3tQgL = eo('div','yS5ff'+ii3rlH,null,`class`,`col-sm-10`);
let elQ7toK = ev('input','WNkff'+ii3rlH,null, eventListeners, {oninput:[function(e) {component.answersList[index] = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el5B4Ea.formHandler.addError(`answers.${ index }`, 'required', trans('validation.required'));}return el5B4Ea.formHandler.removeError(`answers.${ index }`);}]},`value`,`${fval(component.answersList[index])}`,`name`,`${(`answers.${ index }`).toInputName()}`,`placeholder`,`${trans(`Poll Answer ${ Number(index) + 1 }`)}`,`type`,`text`,`class`,`form-control`,`id`,`answers-${ index }`);
elQ7toK.value = fval(component.answersList[index]);
let cnd8NL0 = el5B4Ea.formHandler.getError(`answers.${ index }`);
this.setState('stEJaMq', cnd8NL0);
if (cnd8NL0) { 
let elfrC6n = eo('div','n19ff'+ii3rlH,null,`class`,`alert alert-danger`);
text(`${el5B4Ea.formHandler.getError(`answers.${ index }`)}`);
ec('div');
}ec('div');
let el0uygw = eo('div','Cknff'+ii3rlH,null,`class`,`col-sm-2`);
let cndz3fV = index > 1;
this.setState('stJSYAa', cndz3fV);
if (cndz3fV) { 
let elxjZk2 = eo('button','KNjff'+ii3rlH,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('answersList', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el5N1CN = eo('i','P1rff'+ii3rlH,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxjZk2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
}
let elz_Mtd = eo('div',null,null,`class`,`text-right`);
let elTjrov = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.answersList.push('');}]},`title`,``,`type`,`button`,`class`,`btn -circle btn-primary`);
let elKU973 = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elTjrov;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new answer')}`});
        ;
                    }, 20);                
                ec('div');
let elo2Efo = eo('div',null,null,`class`,`m-t-2`);
let el4u33h = eo('button',null,null, boolAttrs, {disabled:component.isCreating},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{heading:'New Poll'},state:'stY0TPx'});
}
                    this.isReadyToGo();
                }
        });