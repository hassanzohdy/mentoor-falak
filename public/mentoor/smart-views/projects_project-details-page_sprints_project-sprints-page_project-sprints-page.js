_Component({
                selector: 'project-sprints-page',
                c: 'ProjectSprintsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','currentSprintIsRunning','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cH4rOtI13:'project-layout',cxnuHzQXj:'flk-datepicker',c4gr5LqU9:'flk-datepicker',cvEUqo6oH:'flk-dropdown-list',c2EI1OrA5:'flk-modal',c9hYNEhkk:'flk-alert'},
                render: function (component) {
                    let cmpH7LS = this._lc('cH4rOtI13', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd5dfc = component.currentSprintIsRunning;
this.setState('stA4pfI', cnd5dfc);
let cndFbPf = !(cnd5dfc);
this.setState('stWznYB', cndFbPf);
if (cnd5dfc) { 
let elre9HU = eo('button','1I_f',null, boolAttrs, {disabled:true},`class`,`float-right btn btn-danger bold`);
text(`Can't add new sprints until current running sprint is completed.`);
ec('button');
}else { 
let elYbe83 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eltBd0k = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Sprint`);
ec('button');
}let eletKgL = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Sprints
        (${ component.project.sprints.length })`);
ec('h1');
let el0Kd_8 = eo('table',null,null,`class`,`table table-striped buttoned`);
let elM8pOs = eo('thead');
let elgnteG = eo('tr');
let el75gtE = eo('th');
text(`Name`);
ec('th');
let elWTS78 = eo('th');
text(`Status`);
ec('th');
let el1WAJW = eo('th');
text(`Current Sprint`);
ec('th');
let elJYHwW = eo('th');
text(`Starts At`);
ec('th');
let eltBCA0 = eo('th');
text(`Ends At`);
ec('th');
let el9jkoC = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elpCmWK = eo('tbody');
let cnd3JvI = Is.empty(component.project.sprints);
this.setState('stL00qk', cnd3JvI);
let cndDIC3 = !(cnd3JvI);
this.setState('st6_1l_', cndDIC3);
if (cnd3JvI) { 
let elEfh0O = eo('tr','Y2nf');
let elWVv3Y = eo('td','Bmbf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Sprints Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.sprints) {
let record = component.project.sprints[index]; 
 let iiNUG1 = record.id+ index;
let elbwe8R = eo('tr','M861LjmlWXvg' + index+iiNUG1);
let el4Da9S = eo('td','6Sxff'+iiNUG1);
let elWqWMo = eo('a','6Xdff'+iiNUG1,null,`href`,`${URLS.project(component.project, 'sprints', record)}`);
text(record.name);
ec('a');
ec('td');
let el_pxK3 = eo('td','qG9ff'+iiNUG1,null,`class`,`bold`);
text(record.status.capitalize());
ec('td');
let el24w0k = eo('td','nlkff'+iiNUG1);
let cndVe_R = component.project.currentSprint && component.project.currentSprint.id == record.id;
this.setState('stfE6D8', cndVe_R);
if (cndVe_R) { 
let elM_1BG = eo('i','BiAff'+iiNUG1,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}ec('td');
let elwnpKc = eo('td','dg7ff'+iiNUG1);
text(record.startsAt);
ec('td');
let elqSJSH = eo('td','b64ff'+iiNUG1);
text(record.endsAt);
ec('td');
let elH6ait = eo('td','8srff'+iiNUG1);
let elIfFIi = eo('button','mHIff'+iiNUG1,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elsfyoJ = eo('i','tfmff'+iiNUG1,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elIfFIi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Sprint')}`});
        ;
                    }, 20);                
                let elN64nK = eo('button','TPPff'+iiNUG1,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let ellDcMX = eo('i','Bcaff'+iiNUG1,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elN64nK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Sprint')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndPUew = component.modalIsOpened;
this.setState('stL1qTb', cndPUew);
if (cndPUew) { 
component.modal = this._lc('c2EI1OrA5', {parent:component,props:{esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elG1igJ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elG1igJ.formHandler) {
                    window.cfrmdlr = elG1igJ.formHandler = new FormHandler(elG1igJ, component);
                } else {
                    window.cfrmdlr = elG1igJ.formHandler;
                }
            let elMFUEv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elMFUEv.value = fval(component.project.id);
let elGt0vZ = eo('div',null,null,`class`,`form-group`);
elGt0vZ.cls = {'group-error': !!elG1igJ.formHandler.getError(`name`) };

            for (let className in elGt0vZ.cls) {
                elGt0vZ.classList.toggle(className, elGt0vZ.cls[className]);
            }  
            let el7s0Gu = eo('label',null,null,`for`,`name`);
text(trans('Sprint Name'));
let ele_DyX = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elX_JDv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG1igJ.formHandler.addError(`name`, 'required', trans('validation.required'));}return elG1igJ.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Sprint Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elX_JDv.value = fval(component.record.name);
let cnd7PSO = elG1igJ.formHandler.getError(`name`);
this.setState('stUcC5k', cnd7PSO);
if (cnd7PSO) { 
let el8o1py = eo('div','C9bf',null,`class`,`alert alert-danger`);
text(elG1igJ.formHandler.getError(`name`));
ec('div');
}ec('div');
let elV100J = eo('div',null,null,`class`,`form-group`);
elV100J.cls = {'group-error': !!elG1igJ.formHandler.getError(`goal`) };

            for (let className in elV100J.cls) {
                elV100J.classList.toggle(className, elV100J.cls[className]);
            }  
            let elY2T3r = eo('label',null,null,`for`,`goal`);
text(trans('Sprint Goal'));
let elyuxD9 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVF_BJ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.goal = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG1igJ.formHandler.addError(`goal`, 'required', trans('validation.required'));}return elG1igJ.formHandler.removeError(`goal`);}]},`value`,`${fval(component.record.goal)}`,`name`,`${(`goal`).toInputName()}`,`placeholder`,`${trans(`Sprint Goal`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`goal`);
elVF_BJ.value = fval(component.record.goal);
ec('textarea');
let cndAKZ4 = elG1igJ.formHandler.getError(`goal`);
this.setState('st8ahfs', cndAKZ4);
if (cndAKZ4) { 
let el2RBaY = eo('div','Cdnf',null,`class`,`alert alert-danger`);
text(elG1igJ.formHandler.getError(`goal`));
ec('div');
}ec('div');
let elHfEOV = eo('div',null,null,`class`,`row`);
let elq6p6g = eo('div',null,null,`class`,`col-sm-6`);
let cmpC66p = this._lc('cxnuHzQXj', {parent:component,parentTop:flkModal,props:{value:component.record.startsAt,required:true},attrs:{name:`${(`startsAt`).toInputName()}`,label:'Starts At',class:'form-control'},state:'stL1qTb'});
ec('div');
let el_aeCl = eo('div',null,null,`class`,`col-sm-6`);
let cmpVF3N = this._lc('c4gr5LqU9', {parent:component,parentTop:flkModal,props:{value:component.record.endsAt,required:true},attrs:{name:`${(`endsAt`).toInputName()}`,label:'Ends At',class:'form-control'},state:'stL1qTb'});
ec('div');
ec('div');
let cnd1joV = component.record.status != 'completed';
this.setState('stJF8ll', cnd1joV);
let cndwgpX = !(cnd1joV);
this.setState('stxLcUu', cndwgpX);
if (cnd1joV) { 
let cmpYhnW = this._lc('cvEUqo6oH', {parent:component,parentTop:flkModal,props:{value:component.record.status,required:true,items:['running', 'completed', 'canceled', 'notStarted']},attrs:{name:`${(`status`).toInputName()}`,label:'Sprint Status'},state:'stJF8ll'});
}else { 
let eluSTva = eo('div',null,null,`class`,`bold green-text`);
text(`Completed Sprint`);
ec('div');
}let eljvo3_ = eo('div',null,null,`class`,`m-t-1 text-center`);
let el_hqSC = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stL1qTb'});
}let cndgYPV = component.confirmDelete;
this.setState('stn9ZNO', cndgYPV);
if (cndgYPV) { 
let cmpT8ya = this._lc('c9hYNEhkk', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stn9ZNO'});
}
                    this.isReadyToGo();
                }
        });