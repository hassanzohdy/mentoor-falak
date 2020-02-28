_Component({
                selector: 'project-sprints-page',
                c: 'ProjectSprintsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','currentSprintIsRunning','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cwyQUsPGS:'project-layout',cQL99ZE0W:'flk-datepicker',c662Yr0d6:'flk-datepicker',czIVa6ZvK:'flk-dropdown-list',cnXLroiq4:'flk-modal',c7rBiXwgw:'flk-alert'},
                render: function (component) {
                    let cmpHDXS = this._lc('cwyQUsPGS', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndS0tY = component.currentSprintIsRunning;
this.setState('stSjQxK', cndS0tY);
let cndpOOa = !(cndS0tY);
this.setState('stRWSHh', cndpOOa);
if (cndS0tY) { 
let el0VxTX = eo('button','Crof',null, boolAttrs, {disabled:true},`class`,`float-right btn btn-danger bold`);
text(`Can't add new sprints until current running sprint is completed.`);
ec('button');
}else { 
let el0l7qb = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el2fSF9 = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Sprint`);
ec('button');
}let elk5NMT = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Sprints
        (${ component.project.sprints.length })`);
ec('h1');
let el2dUtz = eo('table',null,null,`class`,`table table-striped buttoned`);
let elx52Gu = eo('thead');
let el3qRoM = eo('tr');
let elrUYa6 = eo('th');
text(`Name`);
ec('th');
let elzuftv = eo('th');
text(`Status`);
ec('th');
let elgQ29I = eo('th');
text(`Current Sprint`);
ec('th');
let elGwpwP = eo('th');
text(`Starts At`);
ec('th');
let ela2fmf = eo('th');
text(`Ends At`);
ec('th');
let elmJSdv = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elooq3k = eo('tbody');
let cnd6Ln6 = Is.empty(component.project.sprints);
this.setState('stMoH9m', cnd6Ln6);
let cnddp2x = !(cnd6Ln6);
this.setState('stjN8U7', cnddp2x);
if (cnd6Ln6) { 
let elJmxrr = eo('tr','hggf');
let elH1mSF = eo('td','8qtf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Sprints Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.sprints) {
let record = component.project.sprints[index]; 
 let ii585M = record.id+ index;
let elrppCT = eo('tr','VWkgJ8ZTgIaG' + index+ii585M);
let elPH8kp = eo('td','DVtff'+ii585M);
let elBLi_j = eo('a','GJZff'+ii585M,null,`href`,`${URLS.project(component.project, 'sprints', record)}`);
text(record.name);
ec('a');
ec('td');
let elCWfAT = eo('td','Jzfff'+ii585M,null,`class`,`bold`);
text(record.status.capitalize());
ec('td');
let elCKCwL = eo('td','YcXff'+ii585M);
let cndnECN = component.project.currentSprint && component.project.currentSprint.id == record.id;
this.setState('stG4aXT', cndnECN);
if (cndnECN) { 
let elIHwAN = eo('i','zpSff'+ii585M,null,`class`,`${fas('check')} green-text icon`);
ec('i');
}ec('td');
let el0EGAV = eo('td','qFlff'+ii585M);
text(record.startsAt);
ec('td');
let elSWHln = eo('td','Noaff'+ii585M);
text(record.endsAt);
ec('td');
let elO2KVm = eo('td','v22ff'+ii585M);
let elVbpSa = eo('button','Cznff'+ii585M,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elnJsfx = eo('i','_Rmff'+ii585M,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVbpSa;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Sprint')}`});
        ;
                    }, 20);                
                let elNxfTf = eo('button','H7Nff'+ii585M,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elHHpzr = eo('i','MGPff'+ii585M,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elNxfTf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Sprint')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndMgut = component.modalIsOpened;
this.setState('st_jaar', cndMgut);
if (cndMgut) { 
component.modal = this._lc('cnXLroiq4', {parent:component,props:{esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elOrLLQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elOrLLQ.formHandler) {
                    window.cfrmdlr = elOrLLQ.formHandler = new FormHandler(elOrLLQ, component);
                } else {
                    window.cfrmdlr = elOrLLQ.formHandler;
                }
            let elDywvF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elDywvF.value = fval(component.project.id);
let elNxre0 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOrLLQ.formHandler.getError(`name`) })}`);
let elBL6Do = eo('label',null,null,`for`,`name`);
text(trans('Sprint Name'));
let elxyB5D = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elNNtag = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOrLLQ.formHandler.addError(`name`, 'required', trans('validation.required'));}return elOrLLQ.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Sprint Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elNNtag.value = fval(component.record.name);
let cndjtOi = elOrLLQ.formHandler.getError(`name`);
this.setState('stamS1G', cndjtOi);
if (cndjtOi) { 
let el79lHL = eo('div','PrBf',null,`class`,`alert alert-danger`);
text(elOrLLQ.formHandler.getError(`name`));
ec('div');
}ec('div');
let elmW2_r = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOrLLQ.formHandler.getError(`goal`) })}`);
let elvOiUp = eo('label',null,null,`for`,`goal`);
text(trans('Sprint Goal'));
let el5Ut0M = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elB7glZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.goal = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOrLLQ.formHandler.addError(`goal`, 'required', trans('validation.required'));}return elOrLLQ.formHandler.removeError(`goal`);}]},`value`,`${fval(component.record.goal)}`,`name`,`${(`goal`).toInputName()}`,`placeholder`,`${trans(`Sprint Goal`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`goal`);
elB7glZ.value = fval(component.record.goal);
ec('textarea');
let cndh90d = elOrLLQ.formHandler.getError(`goal`);
this.setState('stW7Gn0', cndh90d);
if (cndh90d) { 
let elz9WB5 = eo('div','eZ7f',null,`class`,`alert alert-danger`);
text(elOrLLQ.formHandler.getError(`goal`));
ec('div');
}ec('div');
let eloEUfr = eo('div',null,null,`class`,`row`);
let eloBdWt = eo('div',null,null,`class`,`col-sm-6`);
let cmpIp0u = this._lc('cQL99ZE0W', {parent:component,parentTop:flkModal,props:{value:component.record.startsAt,required:true},attrs:{name:`${(`startsAt`).toInputName()}`,label:'Starts At',class:'form-control'},state:'st_jaar'});
ec('div');
let el5HOWr = eo('div',null,null,`class`,`col-sm-6`);
let cmpGFkG = this._lc('c662Yr0d6', {parent:component,parentTop:flkModal,props:{value:component.record.endsAt,required:true},attrs:{name:`${(`endsAt`).toInputName()}`,label:'Ends At',class:'form-control'},state:'st_jaar'});
ec('div');
ec('div');
let cnd5hsf = component.record.status != 'completed';
this.setState('staju5G', cnd5hsf);
let cnd_a_7 = !(cnd5hsf);
this.setState('stTroqX', cnd_a_7);
if (cnd5hsf) { 
let cmpxuVQ = this._lc('czIVa6ZvK', {parent:component,parentTop:flkModal,props:{value:component.record.status,required:true,items:['running', 'completed', 'canceled', 'notStarted']},attrs:{name:`${(`status`).toInputName()}`,label:'Sprint Status'},state:'staju5G'});
}else { 
let el5hQq8 = eo('div',null,null,`class`,`bold green-text`);
text(`Completed Sprint`);
ec('div');
}let elCfYXf = eo('div',null,null,`class`,`m-t-1 text-center`);
let elIhxqQ = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st_jaar'});
}let cndHh98 = component.confirmDelete;
this.setState('stdASdx', cndHh98);
if (cndHh98) { 
let cmpBXDX = this._lc('c7rBiXwgw', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stdASdx'});
}
                    this.isReadyToGo();
                }
        });