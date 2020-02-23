_Component({
                selector: 'task-modal',
                c: 'TaskModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','getHeading','submit','project','participants','data','usersService','supervisors','statuses','loadModules','taskLevels','tasksService','isSending'],
                children: {cIKii5cvf:'flk-dropdown-list',c3EffTbhl:'flk-dropdown-list',crtGIJY_A:'flk-dropdown-list',c0bCpvLSY:'flk-dropdown-list',crBhOxpFS:'flk-dropdown-list',cI5CuiO4P:'flk-dropdown-list',cSzvvqG1Q:'flk-dropdown-list',ctiSObWEq:'flk-dropdown-list',c_V5VXlxT:'flk-datepicker',c765IUVDv:'flk-dropdown-list',cW2nnXWcH:'flk-dropdown-list',cDQmTnLLf:'record-audio-input',c2iScjpmL:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('c2iScjpmL', {parent:component,props:{header:component.getHeading()},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elDa90y = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elDa90y.formHandler) {
                    window.cfrmdlr = elDa90y.formHandler = new FormHandler(elDa90y, component);
                } else {
                    window.cfrmdlr = elDa90y.formHandler;
                }
            let el3B0Fv = eo('div',null,null,`class`,`row`);
let elbydYw = eo('div',null,null,`class`,`col`);
let cndr2O6 = component.project;
this.setState('st1057J', cndr2O6);
let cndz5HK = !(cndr2O6);
this.setState('stN1jt8', cndz5HK);
if (cndr2O6) { 
let elPJxfY = ev('input','RZCf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elPJxfY.value = fval(component.project.id);
}let cndevFl = ! Is.empty(component.participants);
this.setState('staWJTr', cndevFl);
let cndLfGS = !(cndevFl);
this.setState('stgT5B1', cndLfGS);
if (cndevFl) { 
let cmpIO0f = this._lc('cIKii5cvf', {parent:component,parentTop:flkModal,props:{items:component.participants,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,label:'Assignee',required:''},state:'staWJTr'});
}else { 
let cmpkp9R = this._lc('c3EffTbhl', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,query:'name',label:'Assignee',required:''},state:'stgT5B1'});
}ec('div');
let elAMxoJ = eo('div',null,null,`class`,`col`);
let cndXjVW = ! Is.empty(component.supervisors);
this.setState('st_3d0s', cndXjVW);
let cndER_H = !(cndXjVW);
this.setState('stu9mkj', cndER_H);
if (cndXjVW) { 
let cmpPRFY = this._lc('crtGIJY_A', {parent:component,parentTop:flkModal,props:{items:component.supervisors,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,label:'Supervisors',required:''},state:'st_3d0s'});
}else { 
let cmpwkJY = this._lc('c0bCpvLSY', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,query:'name',label:'Supervisors',required:''},state:'stu9mkj'});
}ec('div');
let cndQ8mh = component.statuses;
this.setState('stZdebn', cndQ8mh);
if (cndQ8mh) { 
let elvlI69 = eo('div','8Vjf',null,`class`,`col`);
let cmpGMna = this._lc('crBhOxpFS', {parent:component,parentTop:flkModal,props:{except:'autoFailed',items:component.statuses,value:component.data.status},attrs:{name:`${(`status`).toInputName()}`,label:'Task Status'},state:'stZdebn'});
ec('div');
}ec('div');
let cndk7WB = component.project;
this.setState('stwlnAi', cndk7WB);
if (cndk7WB) { 
let el6Sjyo = eo('div','YA6f',null,`class`,`row m-y-1`);
let elMIK6S = eo('div','7cMf',null,`class`,`col`);
let cmpgqrg = this._lc('cI5CuiO4P', {parent:component,parentTop:flkModal,props:{none:true,required:false,value:Object.get(component.data.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'},state:'stwlnAi'});
ec('div');
let elCCMBe = eo('div','ulKf',null,`class`,`col`);
let cmpMxs7 = this._lc('cSzvvqG1Q', {parent:component,parentTop:flkModal,props:{required:false,value:Object.get(component.data.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component, 'withNoTaskAttached', Object.get(component.data, 'userStory.id'))},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stwlnAi'});
ec('div');
let elKZtts = eo('div','zXqf',null,`class`,`col`);
let cmp85mC = this._lc('ctiSObWEq', {parent:component,parentTop:flkModal,props:{items:component.taskLevels},attrs:{name:`${(`priority`).toInputName()}`,label:'Task priority',required:''},state:'stwlnAi'});
ec('div');
ec('div');
}let elUfrMi = eo('div',null,null,`class`,`form-group`);
elUfrMi.cls = {'group-error': !!elDa90y.formHandler.getError(`title`) };

            for (let className in elUfrMi.cls) {
                elUfrMi.classList.toggle(className, elUfrMi.cls[className]);
            }  
            let elqaYVn = eo('label',null,null,`for`,`title`);
text(trans('title'));
let elJLmtP = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWfXFQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDa90y.formHandler.addError(`title`, 'required', trans('validation.required'));}return elDa90y.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elWfXFQ.value = fval(component.data.title);
let cndb2h8 = elDa90y.formHandler.getError(`title`);
this.setState('stgK4wy', cndb2h8);
if (cndb2h8) { 
let elzwtU1 = eo('div','gzDf',null,`class`,`alert alert-danger`);
text(elDa90y.formHandler.getError(`title`));
ec('div');
}ec('div');
let elmBS9V = eo('div',null,null,`class`,`form-group`);
elmBS9V.cls = {'group-error': !!elDa90y.formHandler.getError(`description`) };

            for (let className in elmBS9V.cls) {
                elmBS9V.classList.toggle(className, elmBS9V.cls[className]);
            }  
            let elXnvJT = eo('label',null,null,`for`,`description`);
text(trans('description'));
ec('label');
let elJdlCG = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.description = this.value;}]},`value`,`${fval(component.data.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elJdlCG.value = fval(component.data.description);
ec('textarea');
ec('div');
let el7gKAm = eo('div',null,null,`class`,`row`);
let elQWAuE = eo('div',null,null,`class`,`col-6`);
let elWYQ7q = eo('div',null,null,`class`,`form-group`);
elWYQ7q.cls = {'group-error': !!elDa90y.formHandler.getError(`reward`) };

            for (let className in elWYQ7q.cls) {
                elWYQ7q.classList.toggle(className, elWYQ7q.cls[className]);
            }  
            let el7Rh5C = eo('label',null,null,`for`,`reward`);
text(trans('reward'));
let elEbRKW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elt8mPP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDa90y.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elDa90y.formHandler.removeError(`reward`);}]},`value`,`${fval(component.data.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elt8mPP.value = fval(component.data.reward);
let cndproE = elDa90y.formHandler.getError(`reward`);
this.setState('st_0SAs', cndproE);
if (cndproE) { 
let elb3BZI = eo('div','w5Hf',null,`class`,`alert alert-danger`);
text(elDa90y.formHandler.getError(`reward`));
ec('div');
}ec('div');
ec('div');
let elsXM77 = eo('div',null,null,`class`,`col-6`);
let elzn900 = eo('div',null,null,`class`,`form-group`);
elzn900.cls = {'group-error': !!elDa90y.formHandler.getError(`penaltyRatio`) };

            for (let className in elzn900.cls) {
                elzn900.classList.toggle(className, elzn900.cls[className]);
            }  
            let elK11NE = eo('label',null,null,`for`,`penaltyRatio`);
text(trans('penaltyRatio'));
let el8zdiY = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMB0HM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.penaltyRatio = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDa90y.formHandler.addError(`penaltyRatio`, 'required', trans('validation.required'));}return elDa90y.formHandler.removeError(`penaltyRatio`);}]},`value`,`${fval(component.data.penaltyRatio)}`,`name`,`${(`penaltyRatio`).toInputName()}`,`placeholder`,`${trans(`penaltyRatio`)}`,`type`,`number`,`class`,`form-control`,`id`,`penaltyRatio`);
elMB0HM.value = fval(component.data.penaltyRatio);
let cndM7uQ = elDa90y.formHandler.getError(`penaltyRatio`);
this.setState('sti99zA', cndM7uQ);
if (cndM7uQ) { 
let elrwXv_ = eo('div','qmWf',null,`class`,`alert alert-danger`);
text(elDa90y.formHandler.getError(`penaltyRatio`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el92hwJ = eo('div',null,null,`class`,`row m-t-1`);
let elRSX09 = eo('div',null,null,`class`,`col-sm-6`);
let elNjn11 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.startsAt = this.value;}]},`value`,`${fval(component.data.startsAt)}`,`name`,`${(`startsAt`).toInputName()}`,`type`,`hidden`);
elNjn11.value = fval(component.data.startsAt);
let elHE7GB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.endsAt = this.value;}]},`value`,`${fval(component.data.endsAt)}`,`name`,`${(`endsAt`).toInputName()}`,`type`,`hidden`);
elHE7GB.value = fval(component.data.endsAt);
let cmp9P_8 = this._lc('c_V5VXlxT', {parent:component,parentTop:flkModal,props:{required:true,dateTime:true,minDate:component.data.startsAt,maxDate:component.data.endsAt},events:{onselect:function(e) {let $el = this; component.data.startsAt = e[0]; component.data.endsAt = e[1];}},attrs:{placeholder:`${trans(`Task Due Date`)}`,class:'form-control',mode:'range',required:'',label:'Start date'}});
ec('div');
let elZfgod = eo('div',null,null,`class`,`col-sm-6`);
let cndE9Mq = ! component.project;
this.setState('stCs_Yd', cndE9Mq);
let cndrmIS = !(cndE9Mq);
this.setState('stKSBmp', cndrmIS);
if (cndE9Mq) { 
let cmpW7ov = this._lc('c765IUVDv', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),lazyLoading:true,remoteSearch:true,except:component.data.id,service:component.tasksService},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task (Search By Id only)',heading:'Parent Task',query:'id'},state:'stCs_Yd'});
}else { 
let cmpa0TP = this._lc('cW2nnXWcH', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),except:component.data.id,lazyLoading:true,request:loadProjectTasks.bind(component)},content:(flkDropdownList) => {text(`>`);
},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task',heading:'Parent Task'},state:'stKSBmp'});
}ec('div');
ec('div');
component.recordAudio = this._lc('cDQmTnLLf', {parent:component,parentTop:flkModal,props:{data:component.data}});
let elY8_tn = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('form');
}});

                    this.isReadyToGo();
                }
        });