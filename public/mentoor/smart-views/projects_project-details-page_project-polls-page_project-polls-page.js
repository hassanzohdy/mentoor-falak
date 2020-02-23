_Component({
                selector: 'project-polls-page',
                c: 'ProjectPollsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cv3eiCEnx:'project-layout',cq0VlhtmO:'flk-modal',cMR0UMi1U:'flk-alert'},
                render: function (component) {
                    let cmpR8II = this._lc('cv3eiCEnx', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elyQtNE = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elvVvrG = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Poll`);
ec('button');
let elrxjGS = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Polls
        (${ component.project.polls.length })`);
ec('h1');
let el35lzd = eo('table',null,null,`class`,`table table-striped buttoned`);
let elB52tz = eo('thead');
let elWPKYa = eo('tr');
let elNT9__ = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elYphYi = eo('tbody');
let cndFqv0 = Is.empty(component.project.polls);
this.setState('stIxE5G', cndFqv0);
let cndsd6l = !(cndFqv0);
this.setState('st30Sho', cndsd6l);
if (cndFqv0) { 
let elaXym7 = eo('tr','wyZf');
let eld46cV = eo('td','kP7f',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Polls Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.polls) {
let record = component.project.polls[index]; 
 let iiTF3X = 'ZndTgfU' + index;
let el0aaHo = eo('tr','Cr5Z6L5eRXSN' + index+iiTF3X);
let eloF1B6 = eo('td','GlTff'+iiTF3X);
let elEDIof = eo('button','Rp_ff'+iiTF3X,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el5gIgI = eo('i','NOiff'+iiTF3X,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elEDIof;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Poll')}`});
        ;
                    }, 20);                
                let el1Mkuk = eo('button','zEoff'+iiTF3X,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elVj0f8 = eo('i','RjKff'+iiTF3X,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1Mkuk;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Poll')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndHWro = component.modalIsOpened;
this.setState('st00CqE', cndHWro);
if (cndHWro) { 
component.modal = this._lc('cq0VlhtmO', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elvfkQM = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elvfkQM.formHandler) {
                    window.cfrmdlr = elvfkQM.formHandler = new FormHandler(elvfkQM, component);
                } else {
                    window.cfrmdlr = elvfkQM.formHandler;
                }
            let elFaYwB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elFaYwB.value = fval(component.project.id);
let elqYPVt = eo('div',null,null,`class`,`form-group`);
elqYPVt.cls = {'group-error': !!elvfkQM.formHandler.getError(`name`) };

            for (let className in elqYPVt.cls) {
                elqYPVt.classList.toggle(className, elqYPVt.cls[className]);
            }  
            let el8ILTA = eo('label',null,null,`for`,`name`);
text(trans('Poll Name'));
let elfOVlq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaajtE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elvfkQM.formHandler.addError(`name`, 'required', trans('validation.required'));}return elvfkQM.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Poll Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elaajtE.value = fval(component.record.name);
let cnd1BwQ = elvfkQM.formHandler.getError(`name`);
this.setState('stIOoLl', cnd1BwQ);
if (cnd1BwQ) { 
let elVbuaW = eo('div','02cf',null,`class`,`alert alert-danger`);
text(elvfkQM.formHandler.getError(`name`));
ec('div');
}ec('div');
let elfMDxO = eo('div',null,null,`class`,`m-t-1 text-center`);
let el5ReSu = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st00CqE'});
}let cndBgD7 = component.confirmDelete;
this.setState('st_epZl', cndBgD7);
if (cndBgD7) { 
let cmpdcth = this._lc('cMR0UMi1U', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st_epZl'});
}
                    this.isReadyToGo();
                }
        });