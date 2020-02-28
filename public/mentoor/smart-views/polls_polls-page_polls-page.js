_Component({
                selector: 'polls-page',
                c: 'PollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['openNewPoll','title','newPoll','submit','booleans','answersList','unsetArrayIndex','isCreating'],
                children: {cdT6Wtn2w:'layout',ckEioWrOq:'flk-dropdown-list',co27D8lT2:'flk-modal'},
                render: function (component) {
                    let cmpmNTq = this._lc('cdT6Wtn2w', {parent:component,content:(layout) => {let elpYFat = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openNewPoll()}]},`class`,`btn btn-success bold float-right`);
let el1RkE6 = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Poll`);
ec('button');
let elHLaNG = eo('h1');
text(component.title);
ec('h1');
}});
let cnd3miF = component.newPoll;
this.setState('struwlv', cnd3miF);
if (cnd3miF) { 
let cmpt9lM = this._lc('co27D8lT2', {parent:component,events:{onclose:function(e) {let $el = this; component.newPoll = null}},content:(flkModal) => {let elsRi0y = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elsRi0y.formHandler) {
                    window.cfrmdlr = elsRi0y.formHandler = new FormHandler(elsRi0y, component);
                } else {
                    window.cfrmdlr = elsRi0y.formHandler;
                }
            let el4D6nz = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elsRi0y.formHandler.getError(`title`) })}`);
let elrUJDI = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elbDMKX = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkNbOb = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsRi0y.formHandler.addError(`title`, 'required', trans('validation.required'));}return elsRi0y.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndYg94 = elsRi0y.formHandler.getError(`title`);
this.setState('stFuV8n', cndYg94);
if (cndYg94) { 
let elVQeZe = eo('div','mwyf',null,`class`,`alert alert-danger`);
text(elsRi0y.formHandler.getError(`title`));
ec('div');
}ec('div');
let eln9AFU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsRi0y.formHandler.addError(`description`, 'required', trans('validation.required'));}return elsRi0y.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Write some description (Markdown Support)`)}`,`type`,`textarea`,`rows`,`12`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndK7ia = elsRi0y.formHandler.getError(`description`);
this.setState('stvMLpl', cndK7ia);
if (cndK7ia) { 
let elcIceB = eo('div','dNNf',null,`class`,`alert alert-danger`);
text(elsRi0y.formHandler.getError(`description`));
ec('div');
}let elC9Sd3 = eo('div',null,null,`class`,`row m-y-2`);
let elkWTBA = eo('div',null,null,`class`,`col-sm-6`);
let cmpVkKp = this._lc('ckEioWrOq', {parent:component,parentTop:flkModal,props:{required:true,value:0,items:component.booleans},attrs:{name:`${(`allowMultipleVotes`).toInputName()}`,label:'Allow Multiple Votes'},state:'struwlv'});
ec('div');
ec('div');
for (let index in component.answersList) {
let answer = component.answersList[index]; 
 let ii4FHR = 'Lb2pArD' + index;
let el_FUpJ = eo('div','eJoOhx5wcCNP' + index+ii4FHR,null,`class`,`row m-b-1`);
let el6tsvd = eo('div','cqSff'+ii4FHR,null,`class`,`col-sm-10`);
let el8p9X4 = ev('input','rmeff'+ii4FHR,null, eventListeners, {oninput:[function(e) {component.answersList[index] = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elsRi0y.formHandler.addError(`answers.${ index }`, 'required', trans('validation.required'));}return elsRi0y.formHandler.removeError(`answers.${ index }`);}]},`value`,`${fval(component.answersList[index])}`,`name`,`${(`answers.${ index }`).toInputName()}`,`placeholder`,`${trans(`Poll Answer ${ Number(index) + 1 }`)}`,`type`,`text`,`class`,`form-control`,`id`,`answers-${ index }`);
el8p9X4.value = fval(component.answersList[index]);
let cndf90a = elsRi0y.formHandler.getError(`answers.${ index }`);
this.setState('stNiJ9v', cndf90a);
if (cndf90a) { 
let elPbTbE = eo('div','ucCff'+ii4FHR,null,`class`,`alert alert-danger`);
text(`${elsRi0y.formHandler.getError(`answers.${ index }`)}`);
ec('div');
}ec('div');
let elH_VFg = eo('div','8wCff'+ii4FHR,null,`class`,`col-sm-2`);
let cndA4Fc = index > 1;
this.setState('st81xSq', cndA4Fc);
if (cndA4Fc) { 
let elLSaAt = eo('button','NDSff'+ii4FHR,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('answersList', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elt3t42 = eo('i','Cl0ff'+ii4FHR,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elLSaAt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
}
let el9UBKK = eo('div',null,null,`class`,`text-right`);
let elas1d1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.answersList.push('');}]},`title`,``,`type`,`button`,`class`,`btn -circle btn-primary`);
let el2HBRj = eo('i',null,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elas1d1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new answer')}`});
        ;
                    }, 20);                
                ec('div');
let elHg45k = eo('div',null,null,`class`,`m-t-2`);
let elbfL1U = eo('button',null,null, boolAttrs, {disabled:component.isCreating},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{heading:'New Poll'},state:'struwlv'});
}
                    this.isReadyToGo();
                }
        });