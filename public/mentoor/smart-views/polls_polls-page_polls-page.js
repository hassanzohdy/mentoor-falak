_Component({
                selector: 'polls-page',
                c: 'PollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['openNewPoll','title','newPoll','submit','booleans','answersList','unsetArrayIndex','isCreating'],
                children: {cljDe3CM9:'layout',cY9S4MjAo:'flk-dropdown-list',cyG_oOwpd:'flk-modal'},
                render: function (component) {
                    let cmpyT9s = this._lc('cljDe3CM9', {parent:component,content:(layout) => {let elik2zF = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openNewPoll()}]},`class`,`btn btn-success bold float-right`);
let elMaczd = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Poll`);
ec('button');
let elc0h6W = eo('h1');
text(component.title);
ec('h1');
}});
let cndJOFG = component.newPoll;
this.setState('st8fNRa', cndJOFG);
if (cndJOFG) { 
let cmpioSd = this._lc('cyG_oOwpd', {parent:component,events:{onclose:function(e) {let $el = this; component.newPoll = null}},content:(flkModal) => {let eljR6fT = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eljR6fT.formHandler) {
                    window.cfrmdlr = eljR6fT.formHandler = new FormHandler(eljR6fT, component);
                } else {
                    window.cfrmdlr = eljR6fT.formHandler;
                }
            let elLwACh = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!eljR6fT.formHandler.getError(`title`) })}`);
let el2K84p = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elXrL2F = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elm3ogE = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljR6fT.formHandler.addError(`title`, 'required', trans('validation.required'));}return eljR6fT.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndZbiR = eljR6fT.formHandler.getError(`title`);
this.setState('stGH3UN', cndZbiR);
if (cndZbiR) { 
let elrlqec = eo('div','wzxf',null,`class`,`alert alert-danger`);
text(eljR6fT.formHandler.getError(`title`));
ec('div');
}ec('div');
let elY0Qfh = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljR6fT.formHandler.addError(`description`, 'required', trans('validation.required'));}return eljR6fT.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Write some description (Markdown Support)`)}`,`type`,`textarea`,`rows`,`12`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndW73a = eljR6fT.formHandler.getError(`description`);
this.setState('staPS9A', cndW73a);
if (cndW73a) { 
let el2mh_p = eo('div','K2Tf',null,`class`,`alert alert-danger`);
text(eljR6fT.formHandler.getError(`description`));
ec('div');
}let elFrFLD = eo('div',null,null,`class`,`row m-y-2`);
let elc4mHK = eo('div',null,null,`class`,`col-sm-6`);
let cmpwSey = this._lc('cY9S4MjAo', {parent:component,parentTop:flkModal,props:{required:true,value:0,items:component.booleans},attrs:{name:`${(`allowMultipleVotes`).toInputName()}`,label:'Allow Multiple Votes'},state:'st8fNRa'});
ec('div');
ec('div');
for (let index in component.answersList) {
let answer = component.answersList[index]; 
 let iixxfC = 'b0CVNKb' + index;
let elsjPtQ = eo('div','miIacF00cDDW' + index+iixxfC,null,`class`,`row m-b-1`);
let elykYaT = eo('div','4xnff'+iixxfC,null,`class`,`col-sm-10`);
let elkWHhl = ev('input','OM9ff'+iixxfC,null, eventListeners, {oninput:[function(e) {component.answersList[index] = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return eljR6fT.formHandler.addError(`answers.${ index }`, 'required', trans('validation.required'));}return eljR6fT.formHandler.removeError(`answers.${ index }`);}]},`value`,`${fval(component.answersList[index])}`,`name`,`${(`answers.${ index }`).toInputName()}`,`placeholder`,`${trans(`Poll Answer ${ Number(index) + 1 }`)}`,`type`,`text`,`class`,`form-control`,`id`,`answers-${ index }`);
elkWHhl.value = fval(component.answersList[index]);
let cnd5ex9 = eljR6fT.formHandler.getError(`answers.${ index }`);
this.setState('styyt2H', cnd5ex9);
if (cnd5ex9) { 
let el4_PSN = eo('div','0BDff'+iixxfC,null,`class`,`alert alert-danger`);
text(`${eljR6fT.formHandler.getError(`answers.${ index }`)}`);
ec('div');
}ec('div');
let el6LHtb = eo('div','1k2ff'+iixxfC,null,`class`,`col-sm-2`);
let cndvukB = index > 1;
this.setState('st6euH4', cndvukB);
if (cndvukB) { 
let el4jFm2 = eo('button','6c5ff'+iixxfC,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('answersList', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let elLWFbH = eo('i','muAff'+iixxfC,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el4jFm2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
}
let elGLpMd = eo('div',null,null,`class`,`text-right`);
let eln_btk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.answersList.push('');}]},`title`,``,`type`,`button`,`class`,`btn -circle btn-primary`);
let elGtdrq = eo('i',null,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eln_btk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new answer')}`});
        ;
                    }, 20);                
                ec('div');
let elwezed = eo('div',null,null,`class`,`m-t-2`);
let elbWchT = eo('button',null,null, boolAttrs, {disabled:component.isCreating},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{heading:'New Poll'},state:'st8fNRa'});
}
                    this.isReadyToGo();
                }
        });