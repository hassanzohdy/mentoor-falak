_Component({
                selector: 'polls-page',
                c: 'PollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['openNewPoll','title','newPoll','submit','booleans','answersList','unsetArrayIndex','isCreating'],
                children: {cBKtc_stK:'layout',cj5C4LIIA:'flk-dropdown-list',ccaYW4cds:'flk-modal'},
                render: function (component) {
                    let cmpZ7ZA = this._lc('cBKtc_stK', {parent:component,content:(layout) => {let elpD9H7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openNewPoll()}]},`class`,`btn btn-success bold float-right`);
let elzuzz2 = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elDo9KJ = eo('h1');
text(component.title);
ec('h1');
}});
let cndzvHo = component.newPoll;
this.setState('stjspZc', cndzvHo);
if (cndzvHo) { 
let cmphKrs = this._lc('ccaYW4cds', {parent:component,events:{onclose:function(e) {let $el = this; component.newPoll = null}},content:(flkModal) => {let elODiMe = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elODiMe.formHandler) {
                    window.cfrmdlr = elODiMe.formHandler = new FormHandler(elODiMe, component);
                } else {
                    window.cfrmdlr = elODiMe.formHandler;
                }
            let eluACk_ = eo('div',null,null,`class`,`form-group`);
eluACk_.cls = {'group-error': !!elODiMe.formHandler.getError(`title`) };

            for (let className in eluACk_.cls) {
                eluACk_.classList.toggle(className, eluACk_.cls[className]);
            }  
            let el7yXiz = eo('label',null,null,`for`,`title`);
text(trans('Title'));
let elnPZM8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elOUMj8 = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elODiMe.formHandler.addError(`title`, 'required', trans('validation.required'));}return elODiMe.formHandler.removeError(`title`);}]},`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
let cndJf20 = elODiMe.formHandler.getError(`title`);
this.setState('sttxQTr', cndJf20);
if (cndJf20) { 
let elBQD50 = eo('div','qYaf',null,`class`,`alert alert-danger`);
text(elODiMe.formHandler.getError(`title`));
ec('div');
}ec('div');
let elKj77S = eo('textarea',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elODiMe.formHandler.addError(`description`, 'required', trans('validation.required'));}return elODiMe.formHandler.removeError(`description`);}]},`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Write some description (Markdown Support)`)}`,`type`,`textarea`,`rows`,`12`,`class`,`form-control`,`id`,`description`);
ec('textarea');
let cndVBap = elODiMe.formHandler.getError(`description`);
this.setState('stWfmZG', cndVBap);
if (cndVBap) { 
let elPhhm5 = eo('div','r9pf',null,`class`,`alert alert-danger`);
text(elODiMe.formHandler.getError(`description`));
ec('div');
}let elj4PFI = eo('div',null,null,`class`,`row m-y-2`);
let eldb4HB = eo('div',null,null,`class`,`col-sm-6`);
let cmpOlZ1 = this._lc('cj5C4LIIA', {parent:component,parentTop:flkModal,props:{required:true,value:0,items:component.booleans},attrs:{name:`${(`allowMultipleVotes`).toInputName()}`,label:'Allow Multiple Votes'},state:'stjspZc'});
ec('div');
ec('div');
for (let index in component.answersList) {
let answer = component.answersList[index]; 
 let iiUgky = 'j5sfu8F' + index;
let elgEBeh = eo('div','K7qX200hnAYV' + index+iiUgky,null,`class`,`row m-b-1`);
let elCU9Jm = eo('div','EyZff'+iiUgky,null,`class`,`col-sm-10`);
let elvf6l6 = ev('input','rdoff'+iiUgky,null, eventListeners, {oninput:[function(e) {component.answersList[index] = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elODiMe.formHandler.addError(`answers.${ index }`, 'required', trans('validation.required'));}return elODiMe.formHandler.removeError(`answers.${ index }`);}]},`value`,`${fval(component.answersList[index])}`,`name`,`${(`answers.${ index }`).toInputName()}`,`placeholder`,`${trans(`Poll Answer ${ Number(index) + 1 }`)}`,`type`,`text`,`class`,`form-control`,`id`,`answers-${ index }`);
elvf6l6.value = fval(component.answersList[index]);
let cnd69Ca = elODiMe.formHandler.getError(`answers.${ index }`);
this.setState('stXujVK', cnd69Ca);
if (cnd69Ca) { 
let elWMzFw = eo('div','nMDff'+iiUgky,null,`class`,`alert alert-danger`);
text(`${elODiMe.formHandler.getError(`answers.${ index }`)}`);
ec('div');
}ec('div');
let el8Vw2H = eo('div','Hxsff'+iiUgky,null,`class`,`col-sm-2`);
let cndnFe4 = index > 1;
this.setState('stwj0ry', cndnFe4);
if (cndnFe4) { 
let el2b2ZE = eo('button','1SYff'+iiUgky,null, eventListeners, {onclick:[function(e) {var $el = this;component.unsetArrayIndex('answersList', index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-circle btn-danger`);
let eli5GHU = eo('i','pyzff'+iiUgky,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el2b2ZE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Remove')}`});
        ;
                    }, 20);                
                }ec('div');
ec('div');
}
let elOoWvZ = eo('div',null,null,`class`,`text-right`);
let elwWaEc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.answersList.push('');}]},`title`,``,`type`,`button`,`class`,`btn -circle btn-primary`);
let elPgQ5m = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elwWaEc;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Add new answer')}`});
        ;
                    }, 20);                
                ec('div');
let elCNMME = eo('div',null,null,`class`,`m-t-2`);
let elwJ05g = eo('button',null,null, boolAttrs, {disabled:component.isCreating},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{heading:'New Poll'},state:'stjspZc'});
}
                    this.isReadyToGo();
                }
        });