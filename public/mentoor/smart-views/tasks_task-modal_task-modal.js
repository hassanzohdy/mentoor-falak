_Component({
                selector: 'task-modal',
                c: 'TaskModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','getHeading','submit','project','participants','data','usersService','supervisors','statuses','loadModules','tasksService','isSending'],
                children: {cejFVjNbq:'flk-dropdown-list',caCLCMvGe:'flk-dropdown-list',cfQ9gmdog:'flk-dropdown-list',cGwJLAfT0:'flk-dropdown-list',cJeg9FSyi:'flk-dropdown-list',cufhpuQr1:'flk-dropdown-list',cDDsAVuqI:'flk-dropdown-list',cW2FP4NmD:'flk-datepicker',cbgk9nrxJ:'flk-dropdown-list',cnZZ8XmlA:'flk-dropdown-list',cw1vvP6la:'record-audio-input',cLpQOoDfz:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cLpQOoDfz', {parent:component,props:{header:component.getHeading()},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let eldPYB9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eldPYB9.formHandler) {
                    window.cfrmdlr = eldPYB9.formHandler = new FormHandler(eldPYB9, component);
                } else {
                    window.cfrmdlr = eldPYB9.formHandler;
                }
            let elE2DRo = eo('div',null,null,`class`,`row`);
let elvFn0L = eo('div',null,null,`class`,`col`);
let cndHdu3 = component.project;
this.setState('stcRvnN', cndHdu3);
let cndxTRR = !(cndHdu3);
this.setState('stllYw6', cndxTRR);
if (cndHdu3) { 
let el_w8yq = ev('input','koHf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el_w8yq.value = fval(component.project.id);
}let cndcwsO = ! Is.empty(component.participants);
this.setState('stbmS7B', cndcwsO);
let cndN1pP = !(cndcwsO);
this.setState('stYWrZf', cndN1pP);
if (cndcwsO) { 
let cmpop93 = this._lc('cejFVjNbq', {parent:component,parentTop:flkModal,props:{items:component.participants,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,label:'Assignee',required:''},state:'stbmS7B'});
}else { 
let cmpieih = this._lc('caCLCMvGe', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,query:'name',label:'Assignee',required:''},state:'stYWrZf'});
}ec('div');
let elk2KAK = eo('div',null,null,`class`,`col`);
let cndVkgu = ! Is.empty(component.supervisors);
this.setState('stVOxDq', cndVkgu);
let cndQsLn = !(cndVkgu);
this.setState('stdzmUd', cndQsLn);
if (cndVkgu) { 
let cmpJZ4A = this._lc('cfQ9gmdog', {parent:component,parentTop:flkModal,props:{items:component.supervisors,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,label:'Supervisors',required:''},state:'stVOxDq'});
}else { 
let cmpksj0 = this._lc('cGwJLAfT0', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,query:'name',label:'Supervisors',required:''},state:'stdzmUd'});
}ec('div');
let cndqI2G = component.statuses;
this.setState('st7hZpV', cndqI2G);
if (cndqI2G) { 
let elBrPY6 = eo('div','rmaf',null,`class`,`col`);
let cmpzP1z = this._lc('cJeg9FSyi', {parent:component,parentTop:flkModal,props:{except:'autoFailed',items:component.statuses,value:component.data.status},attrs:{name:`${(`status`).toInputName()}`,label:'Task Status'},state:'st7hZpV'});
ec('div');
}ec('div');
let cndcAOb = component.project;
this.setState('stYTdjJ', cndcAOb);
if (cndcAOb) { 
let elflh3z = eo('div','yc0f',null,`class`,`row m-y-1`);
let el_DVgB = eo('div','KFaf',null,`class`,`col`);
let cmp3BiT = this._lc('cufhpuQr1', {parent:component,parentTop:flkModal,props:{none:true,required:false,value:Object.get(component.data.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'},state:'stYTdjJ'});
ec('div');
let elEbat1 = eo('div','eVff',null,`class`,`col`);
let cmp9bVT = this._lc('cDDsAVuqI', {parent:component,parentTop:flkModal,props:{required:false,value:Object.get(component.data.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component, 'withNoTaskAttached', Object.get(component.data, 'userStory.id'))},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stYTdjJ'});
ec('div');
ec('div');
}let elrNb1O = eo('div',null,null,`class`,`form-group`);
elrNb1O.cls = {'group-error': !!eldPYB9.formHandler.getError(`title`) };

            for (let className in elrNb1O.cls) {
                elrNb1O.classList.toggle(className, elrNb1O.cls[className]);
            }  
            let elIMwi4 = eo('label',null,null,`for`,`title`);
text(trans('title'));
let el9YaT_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elakQ3g = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldPYB9.formHandler.addError(`title`, 'required', trans('validation.required'));}return eldPYB9.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elakQ3g.value = fval(component.data.title);
let cndf_1u = eldPYB9.formHandler.getError(`title`);
this.setState('sta87X6', cndf_1u);
if (cndf_1u) { 
let ellnYgR = eo('div','3DTf',null,`class`,`alert alert-danger`);
text(eldPYB9.formHandler.getError(`title`));
ec('div');
}ec('div');
let el0GRHu = eo('div',null,null,`class`,`form-group`);
el0GRHu.cls = {'group-error': !!eldPYB9.formHandler.getError(`description`) };

            for (let className in el0GRHu.cls) {
                el0GRHu.classList.toggle(className, el0GRHu.cls[className]);
            }  
            let elSiB7G = eo('label',null,null,`for`,`description`);
text(trans('description'));
ec('label');
let elAARUb = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.description = this.value;}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elAARUb.value = fval(component.data.description);
ec('textarea');
ec('div');
let elQrAyK = eo('div',null,null,`class`,`row`);
let elnnfhR = eo('div',null,null,`class`,`col-6`);
let elrC0ao = eo('div',null,null,`class`,`form-group`);
elrC0ao.cls = {'group-error': !!eldPYB9.formHandler.getError(`reward`) };

            for (let className in elrC0ao.cls) {
                elrC0ao.classList.toggle(className, elrC0ao.cls[className]);
            }  
            let elYLBMM = eo('label',null,null,`for`,`reward`);
text(trans('reward'));
let elS9Dsz = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elTwVAY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldPYB9.formHandler.addError(`reward`, 'required', trans('validation.required'));}return eldPYB9.formHandler.removeError(`reward`);}]},`value`,`${fval(component.data.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elTwVAY.value = fval(component.data.reward);
let cndVzZ0 = eldPYB9.formHandler.getError(`reward`);
this.setState('stJ08M_', cndVzZ0);
if (cndVzZ0) { 
let elbj0Zm = eo('div','5EEf',null,`class`,`alert alert-danger`);
text(eldPYB9.formHandler.getError(`reward`));
ec('div');
}ec('div');
ec('div');
let elHPwsw = eo('div',null,null,`class`,`col-6`);
let elwmV0D = eo('div',null,null,`class`,`form-group`);
elwmV0D.cls = {'group-error': !!eldPYB9.formHandler.getError(`penaltyRatio`) };

            for (let className in elwmV0D.cls) {
                elwmV0D.classList.toggle(className, elwmV0D.cls[className]);
            }  
            let el2XSKe = eo('label',null,null,`for`,`penaltyRatio`);
text(trans('penaltyRatio'));
let ell_1xF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQ8wS2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.penaltyRatio = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eldPYB9.formHandler.addError(`penaltyRatio`, 'required', trans('validation.required'));}return eldPYB9.formHandler.removeError(`penaltyRatio`);}]},`value`,`${fval(component.data.penaltyRatio)}`,`name`,`${(`penaltyRatio`).toInputName()}`,`placeholder`,`${trans(`penaltyRatio`)}`,`type`,`number`,`class`,`form-control`,`id`,`penaltyRatio`);
elQ8wS2.value = fval(component.data.penaltyRatio);
let cnd8IgA = eldPYB9.formHandler.getError(`penaltyRatio`);
this.setState('stS0jW3', cnd8IgA);
if (cnd8IgA) { 
let elPgSPJ = eo('div','SyLf',null,`class`,`alert alert-danger`);
text(eldPYB9.formHandler.getError(`penaltyRatio`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elmnHJY = eo('div',null,null,`class`,`row m-t-1`);
let eli9JXH = eo('div',null,null,`class`,`col-sm-6`);
let elwyfYD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.startsAt = this.value;}]},`value`,`${fval(component.data.startsAt)}`,`name`,`${(`startsAt`).toInputName()}`,`type`,`hidden`);
elwyfYD.value = fval(component.data.startsAt);
let el7OcjG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.endsAt = this.value;}]},`value`,`${fval(component.data.endsAt)}`,`name`,`${(`endsAt`).toInputName()}`,`type`,`hidden`);
el7OcjG.value = fval(component.data.endsAt);
let cmpJQYx = this._lc('cW2FP4NmD', {parent:component,parentTop:flkModal,props:{required:true,dateTime:true,minDate:component.data.startsAt,maxDate:component.data.endsAt},events:{onselect:function(e) {let $el = this; component.data.startsAt = e[0]; component.data.endsAt = e[1];}},attrs:{placeholder:`${trans(`Task Due Date`)}`,class:'form-control',mode:'range',required:'',label:'Start date'}});
ec('div');
let el9DRWa = eo('div',null,null,`class`,`col-sm-6`);
let cndByVn = ! component.project;
this.setState('stT3l_y', cndByVn);
let cndOxtA = !(cndByVn);
this.setState('stY6_Uu', cndOxtA);
if (cndByVn) { 
let cmp5j0V = this._lc('cbgk9nrxJ', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),lazyLoading:true,remoteSearch:true,except:component.data.id,service:component.tasksService},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task (Search By Id only)',heading:'Parent Task',query:'id'},state:'stT3l_y'});
}else { 
let cmpi2WC = this._lc('cnZZ8XmlA', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),except:component.data.id,lazyLoading:true,request:loadProjectTasks.bind(component)},content:(flkDropdownList) => {text(`>`);
},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task',heading:'Parent Task'},state:'stY6_Uu'});
}ec('div');
ec('div');
component.recordAudio = this._lc('cw1vvP6la', {parent:component,parentTop:flkModal,props:{data:component.data}});
let elZh2ib = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('form');
}});

                    this.isReadyToGo();
                }
        });