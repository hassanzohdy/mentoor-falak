_Component({
                selector: 'polls-page',
                c: 'PollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['openNewPoll','title','newPoll','submit','booleans','answersList','unsetArrayIndex','isCreating'],
                children: {cPMER6e9Y:'layout',cCEvnjQWe:'flk-dropdown-list',cXZWLm42W:'flk-modal'},
                render: function (component) {
                    let cmp4H8V = this._lc('cPMER6e9Y', {parent:component,content:(layout) => {let el86I3T = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openNewPoll()}]},`class`,`btn btn-success bold float-right`);
let elLxrRY = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elZW_pn = eo('h1');
text(component.title);
ec('h1');
}});
let cndAwq8 = component.newPoll;
this.setState('st5p6AU', cndAwq8);
if (cndAwq8) { 
let cmpGQuh = this._lc('cXZWLm42W', {parent:component,events:{onclose:function(e) {let $el = this; component.newPoll = null}},content:(flkModal) => {let elZABNU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elZABNU.formHandler) {
                    window.cfrmdlr = elZABNU.formHandler = new FormHandler(elZABNU, component);
                } else {
                    window.cfrmdlr = elZABNU.formHandler;
                }
            let el7V2j9 = eo('div',null,null,`class`,`form-group`);
el7V2j9.cls = {'group-error': !!elZABNU.formHandler.getError(`title`) };

            for (let className in el7V2j9.cls) {
                el7V2j9.classList.toggle(className, el7V2j9.cls[className]);
            }  
            let elXr12_ = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let el4jD_V = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elM9SiX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZABNU.formHandler.addError(`title`, 'required', trans('validation.required'));}return elZABNU.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cnd1Sor = elZABNU.formHandler.getError(`title`);
this.setState('stpA9n3', cnd1Sor);
if (cnd1Sor) { 
let elr6Ohw = eo('div','8_qf',null,`class`,`alert alert-danger`);
text(elZABNU.formHandler.getError(`title`));
ec('div');
}ec('div');
let elLlmD6 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZABNU.formHandler.addError(`description`, 'required', trans('validation.required'));}return elZABNU.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Write some description (Markdown Support)`)}`,`type`,`textarea`,`rows`,`12`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndGKN5 = elZABNU.formHandler.getError(`description`);
this.setState('stR9Xld', cndGKN5);
if (cndGKN5) { 
let elnw_mC = eo('div','YV0f',null,`class`,`alert alert-danger`);
text(elZABNU.formHandler.getError(`description`));
ec('div');
}let elsBKgU = eo('div',null,null,`class`,`row m-y-2`);
let el1T46K = eo('div',null,null,`class`,`col-sm-6`);
let cmpCXqI = this._lc('cCEvnjQWe', {parent:component,parentTop:flkModal,props:{required:true,value:0,items:component.booleans},attrs:{name:`${(`allowMultipleVotes`).toInputName()}`,label:'Allow Multiple Votes'},state:'st5p6AU'});
ec('div');
ec('div');
for (let index in component.answersList) {
let answer = component.answersList[index]; 
 let ii6hno = 'pQKCQVG' + index;
let elC_BZ6 = eo('div','Uo__HafBe9qv' + index+ii6hno,null,`class`,`row m-b-1`);
let elcIbX6 = eo('div','yKWff'+ii6hno,null,`class`,`col-sm-10`);
let eljzAhi = ev('input','ZS0ff'+ii6hno,null, eventListeners, {oninput:[function(e) {component.answersList[index] = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elZABNU.formHandler.addError(`answers.${ index }`, 'required', trans('validation.required'));}return elZABNU.formHandler.removeError(`answers.${ index }`);}]},`value`,`${fval(component.answersList[index])}`,`name`,`${(`answers.${ index }`).toInputName()}`,`placeholder`,`${trans(`Poll Answer ${ Number(index) + 1 }`)}`,`type`,`text`,`class`,`form-control`,`id`,`answers-${ index }`);
eljzAhi.value = fval(component.answersList[index]);
let cnd3h8n = elZABNU.formHandler.getError(`answers.${ index }`);
this.setState('stmZhCv', cnd3h8n);
if (cnd3h8n) { 
let elCTE_Q = eo('div','O0Gff'+ii6hno,null,`class`,`alert alert-danger`);
text(`${elZABNU.formHandler.getError(`answers.${ index }`)}`);
ec('div');
}ec('div');
let elIvoq9 = eo('div','jcjff'+ii6hno,null,`class`,`col-sm-2`);
let cndgKAv = index > 1;
this.setState('stun8p7', cndgKAv);
if (cndgKAv) { 
let elyJoBh = eo('button','C9Fff'+ii6hno,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('answersList', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elzeYmf = eo('i','YWbff'+ii6hno,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elyJoBh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
}
let el9LeYg = eo('div',null,null,`class`,`text-right`);
let elkrnvx = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.answersList.push('');}]},`title`,``,`type`,`button`,`class`,`btn -circle btn-primary`);
let elcOnzS = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elkrnvx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new answer')}`});
        ;
                    }, 20);                
                ec('div');
let elMqD6c = eo('div',null,null,`class`,`m-t-2`);
let elD12f4 = eo('button',null,null, boolAttrs, {disabled:component.isCreating},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{heading:'New Poll'},state:'st5p6AU'});
}
                    this.isReadyToGo();
                }
        });