_Component({
                selector: 'project-sprints-page',
                c: 'ProjectSprintsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','currentSprintIsRunning','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cg1MPU7v6:'project-layout',cto6dCiyp:'flk-datepicker',cia2in2H9:'flk-datepicker',cHKjBtxya:'flk-dropdown-list',cH_QbZQSX:'flk-modal',caiX3VYuq:'flk-alert'},
                render: function (component) {
                    let cmpJnKr = this._lc('cg1MPU7v6', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndan9p = component.currentSprintIsRunning;
this.setState('stkKYzX', cndan9p);
let cnd9ijK = !(cndan9p);
this.setState('stMQHiV', cnd9ijK);
if (cndan9p) { 
let elGnYvg = eo('button','3Vif',null, boolAttrs, {disabled:true},`class`,`float-right btn btn-danger bold`);
text(`Can't add new sprints until current running sprint is completed.`);
ec('button');
}else { 
let elWudnd = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eldAh7D = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Sprint`);
ec('button');
}let elUQ9q5 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Sprints
        (${ component.project.sprints.length })`);
ec('h1');
let elS1tlv = eo('table',null,null,`class`,`table table-striped buttoned`);
let elO7CF2 = eo('thead');
let elrcR8T = eo('tr');
let elYlOwQ = eo('th');
text(`Name`);
ec('th');
let elLpxWl = eo('th');
text(`Status`);
ec('th');
let elJcBSK = eo('th');
text(`Current Sprint`);
ec('th');
let elOCwoc = eo('th');
text(`Starts At`);
ec('th');
let elyAIYb = eo('th');
text(`Ends At`);
ec('th');
let elUoC2R = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el1vpKp = eo('tbody');
let cndsqxc = Is.empty(component.project.sprints);
this.setState('stEGjg_', cndsqxc);
let cndG83g = !(cndsqxc);
this.setState('st75oN3', cndG83g);
if (cndsqxc) { 
let elu8mBB = eo('tr','ZG4f');
let el6cAie = eo('td','lCSf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Sprints Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.sprints) {
let record = component.project.sprints[index]; 
 let iiF7Ff = record.id+ index;
let elBleAI = eo('tr','iGsNhV90XE77' + index+iiF7Ff);
let eloPHlR = eo('td','ckvff'+iiF7Ff);
let ell_Oev = eo('a','2lvff'+iiF7Ff,null,`href`,`${URLS.project(component.project, 'sprints', record)}`);
text(record.name);
ec('a');
ec('td');
let elrhlx2 = eo('td','VHSff'+iiF7Ff,null,`class`,`bold`);
text(record.status.capitalize());
ec('td');
let elAmqEE = eo('td','cukff'+iiF7Ff);
let cndczn0 = component.project.currentSprint && component.project.currentSprint.id == record.id;
this.setState('stHwGup', cndczn0);
if (cndczn0) { 
let elcuJL5 = eo('i','rKfff'+iiF7Ff,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}ec('td');
let elrPKht = eo('td','TGwff'+iiF7Ff);
text(record.startsAt);
ec('td');
let elzROPL = eo('td','GwWff'+iiF7Ff);
text(record.endsAt);
ec('td');
let eldVS25 = eo('td','8D5ff'+iiF7Ff);
let el6ZD6C = eo('button','ULGff'+iiF7Ff,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elugRMU = eo('i','FOhff'+iiF7Ff,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6ZD6C;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Sprint')}`});
        ;
                    }, 20);                
                let el6zur1 = eo('button','Tjdff'+iiF7Ff,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elDbJ7B = eo('i','rvnff'+iiF7Ff,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el6zur1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Sprint')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnde3Ww = component.modalIsOpened;
this.setState('steSifF', cnde3Ww);
if (cnde3Ww) { 
component.modal = this._lc('cH_QbZQSX', {parent:component,props:{esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elmzVeu = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elmzVeu.formHandler) {
                    window.cfrmdlr = elmzVeu.formHandler = new FormHandler(elmzVeu, component);
                } else {
                    window.cfrmdlr = elmzVeu.formHandler;
                }
            let elmoH11 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elmoH11.value = fval(component.project.id);
let el2f8xe = eo('div',null,null,`class`,`form-group`);
el2f8xe.cls = {'group-error': !!elmzVeu.formHandler.getError(`name`) };

            for (let className in el2f8xe.cls) {
                el2f8xe.classList.toggle(className, el2f8xe.cls[className]);
            }  
            let elX4ACe = eo('label',null,null,`for`,`name`);
text(trans('Sprint Name'));
let elv6ky3 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elB27h9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmzVeu.formHandler.addError(`name`, 'required', trans('validation.required'));}return elmzVeu.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Sprint Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elB27h9.value = fval(component.record.name);
let cndoBoA = elmzVeu.formHandler.getError(`name`);
this.setState('stCgsdQ', cndoBoA);
if (cndoBoA) { 
let elZ3DFC = eo('div','m5Xf',null,`class`,`alert alert-danger`);
text(elmzVeu.formHandler.getError(`name`));
ec('div');
}ec('div');
let elfSPTJ = eo('div',null,null,`class`,`form-group`);
elfSPTJ.cls = {'group-error': !!elmzVeu.formHandler.getError(`goal`) };

            for (let className in elfSPTJ.cls) {
                elfSPTJ.classList.toggle(className, elfSPTJ.cls[className]);
            }  
            let elM1THn = eo('label',null,null,`for`,`goal`);
text(trans('Sprint Goal'));
let elNwwxk = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltEcDT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.goal = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmzVeu.formHandler.addError(`goal`, 'required', trans('validation.required'));}return elmzVeu.formHandler.removeError(`goal`);}]},`value`,`${fval(component.record.goal)}`,`name`,`${(`goal`).toInputName()}`,`placeholder`,`${trans(`Sprint Goal`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`goal`);
eltEcDT.value = fval(component.record.goal);
ec('textarea');
let cndeYyT = elmzVeu.formHandler.getError(`goal`);
this.setState('stj4aSd', cndeYyT);
if (cndeYyT) { 
let elRg02Q = eo('div','eAzf',null,`class`,`alert alert-danger`);
text(elmzVeu.formHandler.getError(`goal`));
ec('div');
}ec('div');
let elUmawF = eo('div',null,null,`class`,`row`);
let eljs3Ms = eo('div',null,null,`class`,`col-sm-6`);
let cmp5VBu = this._lc('cto6dCiyp', {parent:component,parentTop:flkModal,props:{value:component.record.startsAt,required:true},attrs:{name:`${(`startsAt`).toInputName()}`,label:'Starts At',class:'form-control'},state:'steSifF'});
ec('div');
let el2kkGg = eo('div',null,null,`class`,`col-sm-6`);
let cmpxxRf = this._lc('cia2in2H9', {parent:component,parentTop:flkModal,props:{value:component.record.endsAt,required:true},attrs:{name:`${(`endsAt`).toInputName()}`,label:'Ends At',class:'form-control'},state:'steSifF'});
ec('div');
ec('div');
let cndv9mR = component.record.status != 'completed';
this.setState('stpPBdQ', cndv9mR);
let cndUWR7 = !(cndv9mR);
this.setState('stvKXU4', cndUWR7);
if (cndv9mR) { 
let cmpzUjB = this._lc('cHKjBtxya', {parent:component,parentTop:flkModal,props:{value:component.record.status,required:true,items:['running', 'completed', 'canceled', 'notStarted']},attrs:{name:`${(`status`).toInputName()}`,label:'Sprint Status'},state:'stpPBdQ'});
}else { 
let elwqdYO = eo('div',null,null,`class`,`bold green-text`);
text(`Completed Sprint`);
ec('div');
}let elP9Qyx = eo('div',null,null,`class`,`m-t-1 text-center`);
let elzVo8n = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'steSifF'});
}let cndmuJb = component.confirmDelete;
this.setState('stvihZ7', cndmuJb);
if (cndmuJb) { 
let cmp5xn5 = this._lc('caiX3VYuq', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stvihZ7'});
}
                    this.isReadyToGo();
                }
        });