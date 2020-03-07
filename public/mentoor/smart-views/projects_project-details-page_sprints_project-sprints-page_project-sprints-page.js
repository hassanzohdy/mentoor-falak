_Component({
                selector: 'project-sprints-page',
                c: 'ProjectSprintsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','currentSprintIsRunning','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cXLnmYL83:'project-layout',ce7T7Fh5g:'flk-datepicker',c6X4c_fab:'flk-datepicker',cM05Q9vYd:'flk-dropdown-list',c88fJWsNV:'flk-modal',cvmMj4gaQ:'flk-alert'},
                render: function (component) {
                    let cmpzkjb = this._lc('cXLnmYL83', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndj0T6 = component.currentSprintIsRunning;
this.setState('stupQXG', cndj0T6);
let cndNhTD = !(cndj0T6);
this.setState('stlGWc5', cndNhTD);
if (cndj0T6) { 
let eliFAwD = eo('button','fVAf',null, boolAttrs, {disabled:true},`class`,`float-right btn btn-danger bold`);
text(`Can't add new sprints until current running sprint is completed.`);
ec('button');
}else { 
let elomkux = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elYRTsP = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Sprint`);
ec('button');
}let elV_2AF = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Sprints
        (${ component.project.sprints.length })`);
ec('h1');
let elfsYlA = eo('table',null,null,`class`,`table table-striped buttoned`);
let elzVnEk = eo('thead');
let elgVFra = eo('tr');
let el2NJji = eo('th');
text(`Name`);
ec('th');
let el7K8lR = eo('th');
text(`Status`);
ec('th');
let el_PAlW = eo('th');
text(`Current Sprint`);
ec('th');
let eld6ZTr = eo('th');
text(`Starts At`);
ec('th');
let elIASul = eo('th');
text(`Ends At`);
ec('th');
let elgw4Bn = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elbNJot = eo('tbody');
let cnddQ9I = Is.empty(component.project.sprints);
this.setState('stxp4VO', cnddQ9I);
let cndLuyH = !(cnddQ9I);
this.setState('stm3aCq', cndLuyH);
if (cnddQ9I) { 
let el_u74E = eo('tr','9Hwf');
let elbBgSb = eo('td','jzaf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Sprints Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.sprints) {
let record = component.project.sprints[index]; 
 let iiNhj_ = record.id+ index;
let elwx37L = eo('tr','KvmAVO7sjZwl' + index+iiNhj_);
let elqIKOP = eo('td','V8vff'+iiNhj_);
let el9oXzr = eo('a','R6Zff'+iiNhj_,null,`href`,`${URLS.project(component.project, 'sprints', record)}`);
text(record.name);
ec('a');
ec('td');
let elphwj1 = eo('td','H0kff'+iiNhj_,null,`class`,`bold`);
text(record.status.capitalize());
ec('td');
let elXibKI = eo('td','5tvff'+iiNhj_);
let cndU2JI = component.project.currentSprint && component.project.currentSprint.id == record.id;
this.setState('stYVfgO', cndU2JI);
if (cndU2JI) { 
let elSg97b = eo('i','IYQff'+iiNhj_,null,`class`,`${fas('check')} green-text icon`);
ec('i');
}ec('td');
let el8AZNU = eo('td','D_5ff'+iiNhj_);
text(record.startsAt);
ec('td');
let el1UzCV = eo('td','pOqff'+iiNhj_);
text(record.endsAt);
ec('td');
let elysSwz = eo('td','tvwff'+iiNhj_);
let elPN5bF = eo('button','adkff'+iiNhj_,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el6D3cW = eo('i','THcff'+iiNhj_,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPN5bF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Sprint')}`});
        ;
                    }, 20);                
                let elxkJ44 = eo('button','NGzff'+iiNhj_,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elLJKyC = eo('i','2YBff'+iiNhj_,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxkJ44;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Sprint')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd6XWt = component.modalIsOpened;
this.setState('stZkJY0', cnd6XWt);
if (cnd6XWt) { 
component.modal = this._lc('c88fJWsNV', {parent:component,props:{esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elCRd9_ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elCRd9_.formHandler) {
                    window.cfrmdlr = elCRd9_.formHandler = new FormHandler(elCRd9_, component);
                } else {
                    window.cfrmdlr = elCRd9_.formHandler;
                }
            let eln6_3Y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eln6_3Y.value = fval(component.project.id);
let elJIkXM = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elCRd9_.formHandler.getError(`name`) })}`);
let el9KmL6 = eo('label',null,null,`for`,`name`);
text(trans('Sprint Name'));
let eldWBui = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVOGzP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCRd9_.formHandler.addError(`name`, 'required', trans('validation.required'));}return elCRd9_.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Sprint Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elVOGzP.value = fval(component.record.name);
let cndS2hM = elCRd9_.formHandler.getError(`name`);
this.setState('st_q4Kp', cndS2hM);
if (cndS2hM) { 
let elmg41l = eo('div','W5If',null,`class`,`alert alert-danger`);
text(elCRd9_.formHandler.getError(`name`));
ec('div');
}ec('div');
let eltnZM5 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elCRd9_.formHandler.getError(`goal`) })}`);
let elJJfcC = eo('label',null,null,`for`,`goal`);
text(trans('Sprint Goal'));
let elxSAad = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elOyXv4 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.goal = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCRd9_.formHandler.addError(`goal`, 'required', trans('validation.required'));}return elCRd9_.formHandler.removeError(`goal`);}]},`value`,`${fval(component.record.goal)}`,`name`,`${(`goal`).toInputName()}`,`placeholder`,`${trans(`Sprint Goal`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`goal`);
elOyXv4.value = fval(component.record.goal);
ec('textarea');
let cndJEja = elCRd9_.formHandler.getError(`goal`);
this.setState('stNh_C0', cndJEja);
if (cndJEja) { 
let elYgcRd = eo('div','H__f',null,`class`,`alert alert-danger`);
text(elCRd9_.formHandler.getError(`goal`));
ec('div');
}ec('div');
let elNHc65 = eo('div',null,null,`class`,`row`);
let elB59EN = eo('div',null,null,`class`,`col-sm-6`);
let cmpRCI2 = this._lc('ce7T7Fh5g', {parent:component,parentTop:flkModal,props:{value:component.record.startsAt,required:true},attrs:{name:`${(`startsAt`).toInputName()}`,label:'Starts At',class:'form-control'},state:'stZkJY0'});
ec('div');
let el1Hvmn = eo('div',null,null,`class`,`col-sm-6`);
let cmpGuJM = this._lc('c6X4c_fab', {parent:component,parentTop:flkModal,props:{value:component.record.endsAt,required:true},attrs:{name:`${(`endsAt`).toInputName()}`,label:'Ends At',class:'form-control'},state:'stZkJY0'});
ec('div');
ec('div');
let cndWQri = component.record.status != 'completed';
this.setState('stqI6iv', cndWQri);
let cndL0Cg = !(cndWQri);
this.setState('stdCFBf', cndL0Cg);
if (cndWQri) { 
let cmpGap7 = this._lc('cM05Q9vYd', {parent:component,parentTop:flkModal,props:{value:component.record.status,required:true,items:['running', 'completed', 'canceled', 'notStarted']},attrs:{name:`${(`status`).toInputName()}`,label:'Sprint Status'},state:'stqI6iv'});
}else { 
let el4uXlr = eo('div',null,null,`class`,`bold green-text`);
text(`Completed Sprint`);
ec('div');
}let elwu0e1 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elib3ux = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stZkJY0'});
}let cnd_15W = component.confirmDelete;
this.setState('stQOAow', cnd_15W);
if (cnd_15W) { 
let cmpCfXV = this._lc('cvmMj4gaQ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stQOAow'});
}
                    this.isReadyToGo();
                }
        });