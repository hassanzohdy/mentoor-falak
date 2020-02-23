_Component({
                selector: 'project-sprints-page',
                c: 'ProjectSprintsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','currentSprintIsRunning','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cRJ4LSZv8:'project-layout',cQtFuB0ye:'flk-datepicker',cVH27aDFS:'flk-datepicker',c2UsbT0SR:'flk-dropdown-list',cN_Qpg4Xr:'flk-modal',c1w04D9JE:'flk-alert'},
                render: function (component) {
                    let cmpG6lt = this._lc('cRJ4LSZv8', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndDfRK = component.currentSprintIsRunning;
this.setState('sth_kH0', cndDfRK);
let cndA4jn = !(cndDfRK);
this.setState('stK4ZIW', cndA4jn);
if (cndDfRK) { 
let elzEGtd = eo('button','t5kf',null, boolAttrs, {disabled:true},`class`,`float-right btn btn-danger bold`);
text(`Can't add new sprints until current running sprint is completed.`);
ec('button');
}else { 
let elTzYx6 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el6BNMi = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Sprint`);
ec('button');
}let elfijQ7 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Sprints
        (${ component.project.sprints.length })`);
ec('h1');
let elDS7vs = eo('table',null,null,`class`,`table table-striped buttoned`);
let el5rT20 = eo('thead');
let eluKECJ = eo('tr');
let elJ8onF = eo('th');
text(`Name`);
ec('th');
let elf_VqZ = eo('th');
text(`Status`);
ec('th');
let elSPuTW = eo('th');
text(`Current Sprint`);
ec('th');
let elENWre = eo('th');
text(`Starts At`);
ec('th');
let elFxh1T = eo('th');
text(`Ends At`);
ec('th');
let elClUL_ = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elvpRE6 = eo('tbody');
let cndyCX4 = Is.empty(component.project.sprints);
this.setState('stYZ3x6', cndyCX4);
let cnd8inw = !(cndyCX4);
this.setState('stYcQE_', cnd8inw);
if (cndyCX4) { 
let elHS0kA = eo('tr','Zhgf');
let elxkZxo = eo('td','pwqf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Sprints Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.sprints) {
let record = component.project.sprints[index]; 
 let iifwI0 = record.id+ index;
let elZwMcI = eo('tr','Xwwv26bEsJvn' + index+iifwI0);
let elg568E = eo('td','ekuff'+iifwI0);
let elFUp6G = eo('a','4RSff'+iifwI0,null,`href`,`${URLS.project(component.project, 'sprints', record)}`);
text(record.name);
ec('a');
ec('td');
let elK3iaT = eo('td','YOYff'+iifwI0,null,`class`,`bold`);
text(record.status.capitalize());
ec('td');
let elR4u_G = eo('td','AKOff'+iifwI0);
let cndid_A = component.project.currentSprint && component.project.currentSprint.id == record.id;
this.setState('stf9FE1', cndid_A);
if (cndid_A) { 
let elzA2wS = eo('i','oFzff'+iifwI0,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}ec('td');
let elmqMOi = eo('td','zlYff'+iifwI0);
text(record.startsAt);
ec('td');
let elJUzWV = eo('td','zuFff'+iifwI0);
text(record.endsAt);
ec('td');
let elcfnSB = eo('td','z8Iff'+iifwI0);
let ele3X2L = eo('button','uifff'+iifwI0,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let eleQlqD = eo('i','bqVff'+iifwI0,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ele3X2L;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Sprint')}`});
        ;
                    }, 20);                
                let elg4hTS = eo('button','rQbff'+iifwI0,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elYM1fY = eo('i','QT7ff'+iifwI0,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elg4hTS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Sprint')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndFv8D = component.modalIsOpened;
this.setState('stKNGy2', cndFv8D);
if (cndFv8D) { 
component.modal = this._lc('cN_Qpg4Xr', {parent:component,props:{esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elOEPfv = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elOEPfv.formHandler) {
                    window.cfrmdlr = elOEPfv.formHandler = new FormHandler(elOEPfv, component);
                } else {
                    window.cfrmdlr = elOEPfv.formHandler;
                }
            let el8KaMB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el8KaMB.value = fval(component.project.id);
let elTnjY8 = eo('div',null,null,`class`,`form-group`);
elTnjY8.cls = {'group-error': !!elOEPfv.formHandler.getError(`name`) };

            for (let className in elTnjY8.cls) {
                elTnjY8.classList.toggle(className, elTnjY8.cls[className]);
            }  
            let elQwXJV = eo('label',null,null,`for`,`name`);
text(trans('Sprint Name'));
let el8KSpT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJXERY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOEPfv.formHandler.addError(`name`, 'required', trans('validation.required'));}return elOEPfv.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Sprint Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elJXERY.value = fval(component.record.name);
let cndpuhj = elOEPfv.formHandler.getError(`name`);
this.setState('stD076q', cndpuhj);
if (cndpuhj) { 
let elAOPJx = eo('div','EgKf',null,`class`,`alert alert-danger`);
text(elOEPfv.formHandler.getError(`name`));
ec('div');
}ec('div');
let el1JLYG = eo('div',null,null,`class`,`form-group`);
el1JLYG.cls = {'group-error': !!elOEPfv.formHandler.getError(`goal`) };

            for (let className in el1JLYG.cls) {
                el1JLYG.classList.toggle(className, el1JLYG.cls[className]);
            }  
            let elR6mSJ = eo('label',null,null,`for`,`goal`);
text(trans('Sprint Goal'));
let el4yxj1 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWOIgY = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.goal = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOEPfv.formHandler.addError(`goal`, 'required', trans('validation.required'));}return elOEPfv.formHandler.removeError(`goal`);}]},`value`,`${fval(component.record.goal)}`,`name`,`${(`goal`).toInputName()}`,`placeholder`,`${trans(`Sprint Goal`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`goal`);
elWOIgY.value = fval(component.record.goal);
ec('textarea');
let cndrDiv = elOEPfv.formHandler.getError(`goal`);
this.setState('stZSaG1', cndrDiv);
if (cndrDiv) { 
let elpOp0F = eo('div','_fyf',null,`class`,`alert alert-danger`);
text(elOEPfv.formHandler.getError(`goal`));
ec('div');
}ec('div');
let elU47kg = eo('div',null,null,`class`,`row`);
let elfy1wB = eo('div',null,null,`class`,`col-sm-6`);
let cmpYOG0 = this._lc('cQtFuB0ye', {parent:component,parentTop:flkModal,props:{value:component.record.startsAt,required:true},attrs:{name:`${(`startsAt`).toInputName()}`,label:'Starts At',class:'form-control'},state:'stKNGy2'});
ec('div');
let elychml = eo('div',null,null,`class`,`col-sm-6`);
let cmpwsqC = this._lc('cVH27aDFS', {parent:component,parentTop:flkModal,props:{value:component.record.endsAt,required:true},attrs:{name:`${(`endsAt`).toInputName()}`,label:'Ends At',class:'form-control'},state:'stKNGy2'});
ec('div');
ec('div');
let cndadtL = component.record.status != 'completed';
this.setState('st1QoXQ', cndadtL);
let cnd76rH = !(cndadtL);
this.setState('stId0FA', cnd76rH);
if (cndadtL) { 
let cmpBtvs = this._lc('c2UsbT0SR', {parent:component,parentTop:flkModal,props:{value:component.record.status,required:true,items:['running', 'completed', 'canceled', 'notStarted']},attrs:{name:`${(`status`).toInputName()}`,label:'Sprint Status'},state:'st1QoXQ'});
}else { 
let el6chpy = eo('div',null,null,`class`,`bold green-text`);
text(`Completed Sprint`);
ec('div');
}let eldTwlq = eo('div',null,null,`class`,`m-t-1 text-center`);
let elDl5JV = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stKNGy2'});
}let cnd3VIs = component.confirmDelete;
this.setState('st2x041', cnd3VIs);
if (cnd3VIs) { 
let cmpBsJ9 = this._lc('c1w04D9JE', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st2x041'});
}
                    this.isReadyToGo();
                }
        });