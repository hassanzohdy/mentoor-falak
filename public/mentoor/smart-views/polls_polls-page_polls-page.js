_Component({
                selector: 'polls-page',
                c: 'PollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['openNewPoll','title','newPoll','submit','booleans','answersList','unsetArrayIndex','isCreating'],
                children: {c2eMDfmO1:'layout',cz0YKjHpg:'flk-dropdown-list',cHyno9YuU:'flk-modal'},
                render: function (component) {
                    let cmp87zg = this._lc('c2eMDfmO1', {parent:component,content:(layout) => {let elnOegR = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openNewPoll()}]},`class`,`btn btn-success bold float-right`);
let elBpNVE = eo('i',null,null,`class`,`${fas('plus')} mr-2 icon`);
ec('i');
text(`Poll`);
ec('button');
let elGNbOX = eo('h1');
text(component.title);
ec('h1');
}});
let cndbAQb = component.newPoll;
this.setState('stdOe4m', cndbAQb);
if (cndbAQb) { 
let cmpvpEN = this._lc('cHyno9YuU', {parent:component,events:{onclose:function(e) {let $el = this; component.newPoll = null}},content:(flkModal) => {let elzzfyC = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elzzfyC.formHandler) {
                    window.cfrmdlr = elzzfyC.formHandler = new FormHandler(elzzfyC, component);
                } else {
                    window.cfrmdlr = elzzfyC.formHandler;
                }
            let elnAC1I = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elzzfyC.formHandler.getError(`title`) })}`);
let elPcJ_a = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let el8QYkX = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkgm_4 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzzfyC.formHandler.addError(`title`, 'required', trans('validation.required'));}return elzzfyC.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndBy_1 = elzzfyC.formHandler.getError(`title`);
this.setState('steUtZx', cndBy_1);
if (cndBy_1) { 
let el1oszO = eo('div','ECpf',null,`class`,`alert alert-danger`);
text(elzzfyC.formHandler.getError(`title`));
ec('div');
}ec('div');
let elNDdHn = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzzfyC.formHandler.addError(`description`, 'required', trans('validation.required'));}return elzzfyC.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Write some description (Markdown Support)`)}`,`type`,`textarea`,`rows`,`12`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndycpp = elzzfyC.formHandler.getError(`description`);
this.setState('stffUsT', cndycpp);
if (cndycpp) { 
let elGvP0B = eo('div','9Yof',null,`class`,`alert alert-danger`);
text(elzzfyC.formHandler.getError(`description`));
ec('div');
}let elI2yBZ = eo('div',null,null,`class`,`row m-y-2`);
let elX3IVL = eo('div',null,null,`class`,`col-sm-6`);
let cmpGHwA = this._lc('cz0YKjHpg', {parent:component,parentTop:flkModal,props:{required:true,value:0,items:component.booleans},attrs:{name:`${(`allowMultipleVotes`).toInputName()}`,label:'Allow Multiple Votes'},state:'stdOe4m'});
ec('div');
ec('div');
for (let index in component.answersList) {
let answer = component.answersList[index]; 
 let iiwuig = 'cmM_H_9' + index;
let elrQ4uT = eo('div','cvYeW958qv8H' + index+iiwuig,null,`class`,`row m-b-1`);
let el35oP0 = eo('div','mesff'+iiwuig,null,`class`,`col-sm-10`);
let el3uNiu = ev('input','_24ff'+iiwuig,null, eventListeners, {oninput:[function(e) {component.answersList[index] = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elzzfyC.formHandler.addError(`answers.${ index }`, 'required', trans('validation.required'));}return elzzfyC.formHandler.removeError(`answers.${ index }`);}]},`value`,`${fval(component.answersList[index])}`,`name`,`${(`answers.${ index }`).toInputName()}`,`placeholder`,`${trans(`Poll Answer ${ Number(index) + 1 }`)}`,`type`,`text`,`class`,`form-control`,`id`,`answers-${ index }`);
el3uNiu.value = fval(component.answersList[index]);
let cndOMy7 = elzzfyC.formHandler.getError(`answers.${ index }`);
this.setState('stNWz_f', cndOMy7);
if (cndOMy7) { 
let elU80Ws = eo('div','laZff'+iiwuig,null,`class`,`alert alert-danger`);
text(`${elzzfyC.formHandler.getError(`answers.${ index }`)}`);
ec('div');
}ec('div');
let el6c2lR = eo('div','POOff'+iiwuig,null,`class`,`col-sm-2`);
let cndp7Kb = index > 1;
this.setState('stA1r10', cndp7Kb);
if (cndp7Kb) { 
let eln3vDe = eo('button','3vgff'+iiwuig,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('answersList', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let eljuTSU = eo('i','Weeff'+iiwuig,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eln3vDe;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
}
let elBEhWT = eo('div',null,null,`class`,`text-right`);
let el1rVTC = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.answersList.push('');}]},`title`,``,`type`,`button`,`class`,`btn -circle btn-primary`);
let elBDMDR = eo('i',null,null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1rVTC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new answer')}`});
        ;
                    }, 20);                
                ec('div');
let elO8ywB = eo('div',null,null,`class`,`m-t-2`);
let elMdE4D = eo('button',null,null, boolAttrs, {disabled:component.isCreating},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{heading:'New Poll'},state:'stdOe4m'});
}
                    this.isReadyToGo();
                }
        });