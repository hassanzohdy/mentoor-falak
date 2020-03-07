_Component({
                selector: 'project-sprints-page',
                c: 'ProjectSprintsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','currentSprintIsRunning','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cgkDKiYZO:'project-layout',c_Vy1DFlB:'flk-datepicker',cfZYGjU4G:'flk-datepicker',cKxO5427K:'flk-dropdown-list',cbzXsKLDj:'flk-modal',cbE7CsZdU:'flk-alert'},
                render: function (component) {
                    let cmpkmL1 = this._lc('cgkDKiYZO', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndtk9r = component.currentSprintIsRunning;
this.setState('staWru9', cndtk9r);
let cndDFLY = !(cndtk9r);
this.setState('st59QQ4', cndDFLY);
if (cndtk9r) { 
let elNEeZP = eo('button','zuGf',null, boolAttrs, {disabled:true},`class`,`float-right btn btn-danger bold`);
text(`Can't add new sprints until current running sprint is completed.`);
ec('button');
}else { 
let el7dyHU = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elAbxLV = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Sprint`);
ec('button');
}let elwMicu = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Sprints
        (${ component.project.sprints.length })`);
ec('h1');
let elDAxKP = eo('table',null,null,`class`,`table table-striped buttoned`);
let elTmuqV = eo('thead');
let elDbeGd = eo('tr');
let elKvrTQ = eo('th');
text(`Name`);
ec('th');
let elk0uRH = eo('th');
text(`Status`);
ec('th');
let el54MbI = eo('th');
text(`Current Sprint`);
ec('th');
let el7LHw3 = eo('th');
text(`Starts At`);
ec('th');
let eluAhb7 = eo('th');
text(`Ends At`);
ec('th');
let elduq9E = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elH4PBL = eo('tbody');
let cndhQKy = Is.empty(component.project.sprints);
this.setState('stTGPTu', cndhQKy);
let cndzPCY = !(cndhQKy);
this.setState('stMwbzz', cndzPCY);
if (cndhQKy) { 
let elTxsVv = eo('tr','yhHf');
let elbBzdc = eo('td','TYHf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Sprints Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.sprints) {
let record = component.project.sprints[index]; 
 let iiCoSR = record.id+ index;
let eluFBr_ = eo('tr','3ZD1GO_4xwnG' + index+iiCoSR);
let elWdTB3 = eo('td','yH5ff'+iiCoSR);
let elirFvD = eo('a','Siwff'+iiCoSR,null,`href`,`${URLS.project(component.project, 'sprints', record)}`);
text(record.name);
ec('a');
ec('td');
let elvpozr = eo('td','ktzff'+iiCoSR,null,`class`,`bold`);
text(record.status.capitalize());
ec('td');
let elcGv8c = eo('td','YT3ff'+iiCoSR);
let cndXsAB = component.project.currentSprint && component.project.currentSprint.id == record.id;
this.setState('steVDRg', cndXsAB);
if (cndXsAB) { 
let elBKnnx = eo('i','siDff'+iiCoSR,null,`class`,`${fas('check')} green-text icon`);
ec('i');
}ec('td');
let elVwNqT = eo('td','zEPff'+iiCoSR);
text(record.startsAt);
ec('td');
let elsTAgO = eo('td','ehNff'+iiCoSR);
text(record.endsAt);
ec('td');
let elje2X4 = eo('td','XMOff'+iiCoSR);
let elzX7zx = eo('button','09sff'+iiCoSR,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elccbQy = eo('i','zKaff'+iiCoSR,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzX7zx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Sprint')}`});
        ;
                    }, 20);                
                let elkxNft = eo('button','dQHff'+iiCoSR,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el0vt03 = eo('i','yifff'+iiCoSR,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elkxNft;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Sprint')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndaM7j = component.modalIsOpened;
this.setState('stqXOHE', cndaM7j);
if (cndaM7j) { 
component.modal = this._lc('cbzXsKLDj', {parent:component,props:{esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let ell2k2q = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! ell2k2q.formHandler) {
                    window.cfrmdlr = ell2k2q.formHandler = new FormHandler(ell2k2q, component);
                } else {
                    window.cfrmdlr = ell2k2q.formHandler;
                }
            let elCmnrs = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elCmnrs.value = fval(component.project.id);
let eluIdh6 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!ell2k2q.formHandler.getError(`name`) })}`);
let elvibP9 = eo('label',null,null,`for`,`name`);
text(trans('Sprint Name'));
let elPIh1s = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8n2hQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ell2k2q.formHandler.addError(`name`, 'required', trans('validation.required'));}return ell2k2q.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Sprint Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el8n2hQ.value = fval(component.record.name);
let cndkilc = ell2k2q.formHandler.getError(`name`);
this.setState('stDfo7W', cndkilc);
if (cndkilc) { 
let elPiQT0 = eo('div','w1bf',null,`class`,`alert alert-danger`);
text(ell2k2q.formHandler.getError(`name`));
ec('div');
}ec('div');
let elfHdja = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!ell2k2q.formHandler.getError(`goal`) })}`);
let elJgC9n = eo('label',null,null,`for`,`goal`);
text(trans('Sprint Goal'));
let elpnfTv = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJaSPk = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.goal = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return ell2k2q.formHandler.addError(`goal`, 'required', trans('validation.required'));}return ell2k2q.formHandler.removeError(`goal`);}]},`value`,`${fval(component.record.goal)}`,`name`,`${(`goal`).toInputName()}`,`placeholder`,`${trans(`Sprint Goal`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`goal`);
elJaSPk.value = fval(component.record.goal);
ec('textarea');
let cndroQg = ell2k2q.formHandler.getError(`goal`);
this.setState('stfjrSk', cndroQg);
if (cndroQg) { 
let elW2TkQ = eo('div','ifDf',null,`class`,`alert alert-danger`);
text(ell2k2q.formHandler.getError(`goal`));
ec('div');
}ec('div');
let elgpf6Q = eo('div',null,null,`class`,`row`);
let elU15Ue = eo('div',null,null,`class`,`col-sm-6`);
let cmpSqf0 = this._lc('c_Vy1DFlB', {parent:component,parentTop:flkModal,props:{value:component.record.startsAt,required:true},attrs:{name:`${(`startsAt`).toInputName()}`,label:'Starts At',class:'form-control'},state:'stqXOHE'});
ec('div');
let elL8p_Z = eo('div',null,null,`class`,`col-sm-6`);
let cmpewhy = this._lc('cfZYGjU4G', {parent:component,parentTop:flkModal,props:{value:component.record.endsAt,required:true},attrs:{name:`${(`endsAt`).toInputName()}`,label:'Ends At',class:'form-control'},state:'stqXOHE'});
ec('div');
ec('div');
let cnddZEs = component.record.status != 'completed';
this.setState('st7GFHr', cnddZEs);
let cndIvjJ = !(cnddZEs);
this.setState('stT3MPT', cndIvjJ);
if (cnddZEs) { 
let cmpb1tr = this._lc('cKxO5427K', {parent:component,parentTop:flkModal,props:{value:component.record.status,required:true,items:['running', 'completed', 'canceled', 'notStarted']},attrs:{name:`${(`status`).toInputName()}`,label:'Sprint Status'},state:'st7GFHr'});
}else { 
let el9MQ_G = eo('div',null,null,`class`,`bold green-text`);
text(`Completed Sprint`);
ec('div');
}let el0pRIP = eo('div',null,null,`class`,`m-t-1 text-center`);
let elj00JM = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stqXOHE'});
}let cndiyqH = component.confirmDelete;
this.setState('stWJV0_', cndiyqH);
if (cndiyqH) { 
let cmpMGx2 = this._lc('cbE7CsZdU', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stWJV0_'});
}
                    this.isReadyToGo();
                }
        });