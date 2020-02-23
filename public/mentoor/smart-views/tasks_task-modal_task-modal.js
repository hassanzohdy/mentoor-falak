_Component({
                selector: 'task-modal',
                c: 'TaskModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['close','getHeading','submit','project','participants','data','usersService','supervisors','statuses','loadModules','taskLevels','tasksService','isSending'],
                children: {cU6jSLD_4:'flk-dropdown-list',cguwGnWJ6:'flk-dropdown-list',cF2IIutD_:'flk-dropdown-list',csE6aKEZh:'flk-dropdown-list',cffJjoALP:'flk-dropdown-list',cJDDgT0dX:'flk-dropdown-list',csrsrtCfz:'flk-dropdown-list',cwk4h23bD:'flk-dropdown-list',cRN33eA33:'markdown-input',cLkBKMqcD:'flk-datepicker',c4lxhM0b7:'flk-dropdown-list',cwA0zzVr7:'flk-dropdown-list',cOxSrwcgp:'record-audio-input',cTsykXpPL:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cTsykXpPL', {parent:component,props:{header:component.getHeading()},events:{onclose:function(e) {let $el = this; component.close()}},content:(flkModal) => {let elXve6l = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elXve6l.formHandler) {
                    window.cfrmdlr = elXve6l.formHandler = new FormHandler(elXve6l, component);
                } else {
                    window.cfrmdlr = elXve6l.formHandler;
                }
            let el1eNMS = eo('div',null,null,`class`,`row`);
let ell5pbK = eo('div',null,null,`class`,`col`);
let cndrZhY = component.project;
this.setState('st9b9Yr', cndrZhY);
let cnd9HRk = !(cndrZhY);
this.setState('stKxJ0b', cnd9HRk);
if (cndrZhY) { 
let elH_YPs = ev('input','Mi_f',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elH_YPs.value = fval(component.project.id);
}let cnd6TDW = ! Is.empty(component.participants);
this.setState('stTPAey', cnd6TDW);
let cnd1May = !(cnd6TDW);
this.setState('stC8OVw', cnd1May);
if (cnd6TDW) { 
let cmp7wJq = this._lc('cU6jSLD_4', {parent:component,parentTop:flkModal,props:{items:component.participants,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,label:'Assignee',required:''},state:'stTPAey'});
}else { 
let cmpTpAk = this._lc('cguwGnWJ6', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:Object.get(component.data.participant, 'id', '')},attrs:{name:`${(`participant`).toInputName()}`,query:'name',label:'Assignee',required:''},state:'stC8OVw'});
}ec('div');
let elAhEBi = eo('div',null,null,`class`,`col`);
let cndm232 = ! Is.empty(component.supervisors);
this.setState('stU6adr', cndm232);
let cndgl9p = !(cndm232);
this.setState('stTunVX', cndgl9p);
if (cndm232) { 
let cmphyHp = this._lc('cF2IIutD_', {parent:component,parentTop:flkModal,props:{items:component.supervisors,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,label:'Supervisors',required:''},state:'stU6adr'});
}else { 
let cmp69yq = this._lc('csE6aKEZh', {parent:component,parentTop:flkModal,props:{remoteSearch:true,lazyLoading:true,service:component.usersService,value:component.data.supervisors,multiple:true},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,query:'name',label:'Supervisors',required:''},state:'stTunVX'});
}ec('div');
let cndhxq8 = component.statuses;
this.setState('st2lv4h', cndhxq8);
if (cndhxq8) { 
let elit1ob = eo('div','5b5f',null,`class`,`col`);
let cmpqNXY = this._lc('cffJjoALP', {parent:component,parentTop:flkModal,props:{except:'autoFailed',items:component.statuses,value:component.data.status},attrs:{name:`${(`status`).toInputName()}`,label:'Task Status'},state:'st2lv4h'});
ec('div');
}ec('div');
let cnd4Oxg = component.project;
this.setState('stOctaN', cnd4Oxg);
if (cnd4Oxg) { 
let elp_BrY = eo('div','DWff',null,`class`,`row m-y-1`);
let elfX5p_ = eo('div','wjDf',null,`class`,`col`);
let cmpU_Rv = this._lc('cJDDgT0dX', {parent:component,parentTop:flkModal,props:{none:true,required:false,value:Object.get(component.data.module, 'id', ''),lazyLoading:true,request:component.loadModules.bind(component)},attrs:{name:`${(`module`).toInputName()}`,label:'Module'},state:'stOctaN'});
ec('div');
let el_kCnc = eo('div','qAZf',null,`class`,`col`);
let cmpKS6N = this._lc('csrsrtCfz', {parent:component,parentTop:flkModal,props:{required:false,value:Object.get(component.data.userStory, 'id', ''),lazyLoading:true,request:loadUserStories.bind(component, 'withNoTaskAttached', Object.get(component.data, 'userStory.id'))},attrs:{name:`${(`userStory`).toInputName()}`,label:'User Story'},state:'stOctaN'});
ec('div');
let el8ZYCU = eo('div','NmXf',null,`class`,`col`);
let cmp9w2B = this._lc('cwk4h23bD', {parent:component,parentTop:flkModal,props:{required:true,items:component.taskLevels},attrs:{name:`${(`priority`).toInputName()}`,label:'Task priority',required:''},state:'stOctaN'});
ec('div');
ec('div');
}let ellCvYl = eo('div',null,null,`class`,`form-group`);
ellCvYl.cls = {'group-error': !!elXve6l.formHandler.getError(`title`) };

            for (let className in ellCvYl.cls) {
                ellCvYl.classList.toggle(className, ellCvYl.cls[className]);
            }  
            let elE7vca = eo('label',null,null,`for`,`title`);
text(trans('title'));
let eledUtZ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elo3Mqf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXve6l.formHandler.addError(`title`, 'required', trans('validation.required'));}return elXve6l.formHandler.removeError(`title`);}]},`value`,`${fval(component.data.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elo3Mqf.value = fval(component.data.title);
let cndrROq = elXve6l.formHandler.getError(`title`);
this.setState('stMhBiS', cndrROq);
if (cndrROq) { 
let ely6i2w = eo('div','K1nf',null,`class`,`alert alert-danger`);
text(elXve6l.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpHqsP = this._lc('cRN33eA33', {parent:component,parentTop:flkModal,props:{value:component.data.description},attrs:{name:`${(`description`).toInputName()}`,placeholder:`${trans(`Description`)}`,label:'Description'}});
let elrcDPS = eo('div',null,null,`class`,`row`);
let elyrHc4 = eo('div',null,null,`class`,`col-6`);
let elm7uZt = eo('div',null,null,`class`,`form-group`);
elm7uZt.cls = {'group-error': !!elXve6l.formHandler.getError(`reward`) };

            for (let className in elm7uZt.cls) {
                elm7uZt.classList.toggle(className, elm7uZt.cls[className]);
            }  
            let elRY3tN = eo('label',null,null,`for`,`reward`);
text(trans('reward'));
let elGT8CW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmRssH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXve6l.formHandler.addError(`reward`, 'required', trans('validation.required'));}return elXve6l.formHandler.removeError(`reward`);}]},`value`,`${fval(component.data.reward)}`,`name`,`${(`reward`).toInputName()}`,`placeholder`,`${trans(`reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward`);
elmRssH.value = fval(component.data.reward);
let cndkcNO = elXve6l.formHandler.getError(`reward`);
this.setState('stTqLbs', cndkcNO);
if (cndkcNO) { 
let elwkmDM = eo('div','VONf',null,`class`,`alert alert-danger`);
text(elXve6l.formHandler.getError(`reward`));
ec('div');
}ec('div');
ec('div');
let eliHtTC = eo('div',null,null,`class`,`col-6`);
let elVn5Bm = eo('div',null,null,`class`,`form-group`);
elVn5Bm.cls = {'group-error': !!elXve6l.formHandler.getError(`penaltyRatio`) };

            for (let className in elVn5Bm.cls) {
                elVn5Bm.classList.toggle(className, elVn5Bm.cls[className]);
            }  
            let elkgdy3 = eo('label',null,null,`for`,`penaltyRatio`);
text(trans('penaltyRatio'));
let elCIMMt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8zuGG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.penaltyRatio = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXve6l.formHandler.addError(`penaltyRatio`, 'required', trans('validation.required'));}return elXve6l.formHandler.removeError(`penaltyRatio`);}]},`value`,`${fval(component.data.penaltyRatio)}`,`name`,`${(`penaltyRatio`).toInputName()}`,`placeholder`,`${trans(`penaltyRatio`)}`,`type`,`number`,`class`,`form-control`,`id`,`penaltyRatio`);
el8zuGG.value = fval(component.data.penaltyRatio);
let cndge82 = elXve6l.formHandler.getError(`penaltyRatio`);
this.setState('st3jaKU', cndge82);
if (cndge82) { 
let elIzF3A = eo('div','22Nf',null,`class`,`alert alert-danger`);
text(elXve6l.formHandler.getError(`penaltyRatio`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elUfFf7 = eo('div',null,null,`class`,`row m-t-1`);
let eltUlhM = eo('div',null,null,`class`,`col-sm-6`);
let eloq7j2 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.startsAt = this.value;}]},`value`,`${fval(component.data.startsAt)}`,`name`,`${(`startsAt`).toInputName()}`,`type`,`hidden`);
eloq7j2.value = fval(component.data.startsAt);
let elwMWy_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.endsAt = this.value;}]},`value`,`${fval(component.data.endsAt)}`,`name`,`${(`endsAt`).toInputName()}`,`type`,`hidden`);
elwMWy_.value = fval(component.data.endsAt);
let cmpyZ_R = this._lc('cLkBKMqcD', {parent:component,parentTop:flkModal,props:{required:true,dateTime:true,minDate:component.data.startsAt,maxDate:component.data.endsAt},events:{onselect:function(e) {let $el = this; component.data.startsAt = e[0]; component.data.endsAt = e[1];}},attrs:{placeholder:`${trans(`Task Due Date`)}`,class:'form-control',mode:'range',required:'',label:'Start date'}});
ec('div');
let elK4C7Z = eo('div',null,null,`class`,`col-sm-6`);
let cndOKf5 = ! component.project;
this.setState('stbYRod', cndOKf5);
let cndpQyt = !(cndOKf5);
this.setState('st4v3oZ', cndpQyt);
if (cndOKf5) { 
let cmpos6O = this._lc('c4lxhM0b7', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),lazyLoading:true,remoteSearch:true,except:component.data.id,service:component.tasksService},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task (Search By Id only)',heading:'Parent Task',query:'id'},state:'stbYRod'});
}else { 
let cmpNHyv = this._lc('cwA0zzVr7', {parent:component,parentTop:flkModal,props:{value:Object.get(component.data.parent, 'id', ''),except:component.data.id,lazyLoading:true,request:loadProjectTasks.bind(component)},content:(flkDropdownList) => {text(`>`);
},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Task',heading:'Parent Task'},state:'st4v3oZ'});
}ec('div');
ec('div');
component.recordAudio = this._lc('cOxSrwcgp', {parent:component,parentTop:flkModal,props:{data:component.data}});
let el9lZUo = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('form');
}});

                    this.isReadyToGo();
                }
        });