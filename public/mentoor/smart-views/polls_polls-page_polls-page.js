_Component({
                selector: 'polls-page',
                c: 'PollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['openNewPoll','title','newPoll','submit','booleans','answersList','unsetArrayIndex','isCreating'],
                children: {cPd_SPL8W:'layout',cSyfacW1B:'flk-dropdown-list',c_qgZEzPJ:'flk-modal'},
                render: function (component) {
                    let cmpJm9Q = this._lc('cPd_SPL8W', {parent:component,content:(layout) => {let elcIOsS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openNewPoll()}]},`class`,`btn btn-success bold float-right`);
let eliB5Cy = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elxGN1E = eo('h1');
text(component.title);
ec('h1');
}});
let cndZRhm = component.newPoll;
this.setState('stnE2jl', cndZRhm);
if (cndZRhm) { 
let cmp9mvX = this._lc('c_qgZEzPJ', {parent:component,events:{onclose:function(e) {let $el = this; component.newPoll = null}},content:(flkModal) => {let el7XRVf = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7XRVf.formHandler) {
                    window.cfrmdlr = el7XRVf.formHandler = new FormHandler(el7XRVf, component);
                } else {
                    window.cfrmdlr = el7XRVf.formHandler;
                }
            let elIkzbS = eo('div',null,null,`class`,`form-group`);
elIkzbS.cls = {'group-error': !!el7XRVf.formHandler.getError(`title`) };

            for (let className in elIkzbS.cls) {
                elIkzbS.classList.toggle(className, elIkzbS.cls[className]);
            }  
            let elFkj8K = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elWfywS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloGRX3 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XRVf.formHandler.addError(`title`, 'required', trans('validation.required'));}return el7XRVf.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cnds7rS = el7XRVf.formHandler.getError(`title`);
this.setState('stHUxRV', cnds7rS);
if (cnds7rS) { 
let elr6LO6 = eo('div','Kquf',null,`class`,`alert alert-danger`);
text(el7XRVf.formHandler.getError(`title`));
ec('div');
}ec('div');
let elHhn8B = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XRVf.formHandler.addError(`description`, 'required', trans('validation.required'));}return el7XRVf.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Write some description (Markdown Support)`)}`,`type`,`textarea`,`rows`,`12`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cnd0Awq = el7XRVf.formHandler.getError(`description`);
this.setState('stV2AlP', cnd0Awq);
if (cnd0Awq) { 
let ellMUVA = eo('div','xCGf',null,`class`,`alert alert-danger`);
text(el7XRVf.formHandler.getError(`description`));
ec('div');
}let elTppgu = eo('div',null,null,`class`,`row m-y-2`);
let elggZMp = eo('div',null,null,`class`,`col-sm-6`);
let cmp01jj = this._lc('cSyfacW1B', {parent:component,parentTop:flkModal,props:{required:true,value:0,items:component.booleans},attrs:{name:`${(`allowMultipleVotes`).toInputName()}`,label:'Allow Multiple Votes'},state:'stnE2jl'});
ec('div');
ec('div');
for (let index in component.answersList) {
let answer = component.answersList[index]; 
 let iiFDf3 = 'olG18we' + index;
let elswnca = eo('div','qniNUcmithMs' + index+iiFDf3,null,`class`,`row m-b-1`);
let el_hhJr = eo('div','JXMff'+iiFDf3,null,`class`,`col-sm-10`);
let eliMQ2F = ev('input','XwQff'+iiFDf3,null, eventListeners, {oninput:[function(e) {component.answersList[index] = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el7XRVf.formHandler.addError(`answers.${ index }`, 'required', trans('validation.required'));}return el7XRVf.formHandler.removeError(`answers.${ index }`);}]},`value`,`${fval(component.answersList[index])}`,`name`,`${(`answers.${ index }`).toInputName()}`,`placeholder`,`${trans(`Poll Answer ${ Number(index) + 1 }`)}`,`type`,`text`,`class`,`form-control`,`id`,`answers-${ index }`);
eliMQ2F.value = fval(component.answersList[index]);
let cndxXGm = el7XRVf.formHandler.getError(`answers.${ index }`);
this.setState('stLUyl7', cndxXGm);
if (cndxXGm) { 
let eltet23 = eo('div','CmFff'+iiFDf3,null,`class`,`alert alert-danger`);
text(`${el7XRVf.formHandler.getError(`answers.${ index }`)}`);
ec('div');
}ec('div');
let elhfOCu = eo('div','9FFff'+iiFDf3,null,`class`,`col-sm-2`);
let cndgGis = index > 1;
this.setState('st0B5Qa', cndgGis);
if (cndgGis) { 
let el6vvCE = eo('button','S7gff'+iiFDf3,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('answersList', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el2fchd = eo('i','HsLff'+iiFDf3,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6vvCE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
}
let elpVwTd = eo('div',null,null,`class`,`text-right`);
let eliGIet = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.answersList.push('');}]},`title`,``,`type`,`button`,`class`,`btn -circle btn-primary`);
let el66d3b = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eliGIet;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new answer')}`});
        ;
                    }, 20);                
                ec('div');
let elsCPwP = eo('div',null,null,`class`,`m-t-2`);
let elhs0yU = eo('button',null,null, boolAttrs, {disabled:component.isCreating},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{heading:'New Poll'},state:'stnE2jl'});
}
                    this.isReadyToGo();
                }
        });