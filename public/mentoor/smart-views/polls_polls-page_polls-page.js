_Component({
                selector: 'polls-page',
                c: 'PollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['openNewPoll','title','newPoll','submit','booleans','answersList','unsetArrayIndex','isCreating'],
                children: {c802XzZsI:'layout',cbrVdSJtG:'flk-dropdown-list',cHDNEPTgL:'flk-modal'},
                render: function (component) {
                    let cmps3l5 = this._lc('c802XzZsI', {parent:component,content:(layout) => {let elItiw7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openNewPoll()}]},`class`,`btn btn-success bold float-right`);
let eltAXFt = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let el11Hlh = eo('h1');
text(component.title);
ec('h1');
}});
let cndoMkg = component.newPoll;
this.setState('stoOfm9', cndoMkg);
if (cndoMkg) { 
let cmphuXW = this._lc('cHDNEPTgL', {parent:component,events:{onclose:function(e) {let $el = this; component.newPoll = null}},content:(flkModal) => {let elG7Sq6 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elG7Sq6.formHandler) {
                    window.cfrmdlr = elG7Sq6.formHandler = new FormHandler(elG7Sq6, component);
                } else {
                    window.cfrmdlr = elG7Sq6.formHandler;
                }
            let elxLcbf = eo('div',null,null,`class`,`form-group`);
elxLcbf.cls = {'group-error': !!elG7Sq6.formHandler.getError(`title`) };

            for (let className in elxLcbf.cls) {
                elxLcbf.classList.toggle(className, elxLcbf.cls[className]);
            }  
            let el52xxB = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elAf9CH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6yepX = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG7Sq6.formHandler.addError(`title`, 'required', trans('validation.required'));}return elG7Sq6.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndBQsf = elG7Sq6.formHandler.getError(`title`);
this.setState('st8NDzj', cndBQsf);
if (cndBQsf) { 
let elvPbkT = eo('div','c6Rf',null,`class`,`alert alert-danger`);
text(elG7Sq6.formHandler.getError(`title`));
ec('div');
}ec('div');
let elp9Jy4 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG7Sq6.formHandler.addError(`description`, 'required', trans('validation.required'));}return elG7Sq6.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Write some description (Markdown Support)`)}`,`type`,`textarea`,`rows`,`12`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndSqoh = elG7Sq6.formHandler.getError(`description`);
this.setState('stQ0KvT', cndSqoh);
if (cndSqoh) { 
let elsMl7o = eo('div','n83f',null,`class`,`alert alert-danger`);
text(elG7Sq6.formHandler.getError(`description`));
ec('div');
}let elbJZPv = eo('div',null,null,`class`,`row m-y-2`);
let el7xEXK = eo('div',null,null,`class`,`col-sm-6`);
let cmpyd_F = this._lc('cbrVdSJtG', {parent:component,parentTop:flkModal,props:{required:true,value:0,items:component.booleans},attrs:{name:`${(`allowMultipleVotes`).toInputName()}`,label:'Allow Multiple Votes'},state:'stoOfm9'});
ec('div');
ec('div');
for (let index in component.answersList) {
let answer = component.answersList[index]; 
 let ii0lXf = 'GNSwlSq' + index;
let el9RvRf = eo('div','ijgDt5jmWU9X' + index+ii0lXf,null,`class`,`row m-b-1`);
let elJw72T = eo('div','_vmff'+ii0lXf,null,`class`,`col-sm-10`);
let elYOqlp = ev('input','dltff'+ii0lXf,null, eventListeners, {oninput:[function(e) {component.answersList[index] = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elG7Sq6.formHandler.addError(`answers.${ index }`, 'required', trans('validation.required'));}return elG7Sq6.formHandler.removeError(`answers.${ index }`);}]},`value`,`${fval(component.answersList[index])}`,`name`,`${(`answers.${ index }`).toInputName()}`,`placeholder`,`${trans(`Poll Answer ${ Number(index) + 1 }`)}`,`type`,`text`,`class`,`form-control`,`id`,`answers-${ index }`);
elYOqlp.value = fval(component.answersList[index]);
let cnd8VU1 = elG7Sq6.formHandler.getError(`answers.${ index }`);
this.setState('st8nSj9', cnd8VU1);
if (cnd8VU1) { 
let elPeVW3 = eo('div','aodff'+ii0lXf,null,`class`,`alert alert-danger`);
text(`${elG7Sq6.formHandler.getError(`answers.${ index }`)}`);
ec('div');
}ec('div');
let elxyThy = eo('div','nVCff'+ii0lXf,null,`class`,`col-sm-2`);
let cndAoCL = index > 1;
this.setState('stWHZPM', cndAoCL);
if (cndAoCL) { 
let el442UJ = eo('button','s4Hff'+ii0lXf,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('answersList', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let el_iddP = eo('i','mPFff'+ii0lXf,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el442UJ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
}
let el0oVKN = eo('div',null,null,`class`,`text-right`);
let elYmYXi = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.answersList.push('');}]},`title`,``,`type`,`button`,`class`,`btn -circle btn-primary`);
let elxLF_G = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elYmYXi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new answer')}`});
        ;
                    }, 20);                
                ec('div');
let elVbhH1 = eo('div',null,null,`class`,`m-t-2`);
let el34XdI = eo('button',null,null, boolAttrs, {disabled:component.isCreating},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{heading:'New Poll'},state:'stoOfm9'});
}
                    this.isReadyToGo();
                }
        });