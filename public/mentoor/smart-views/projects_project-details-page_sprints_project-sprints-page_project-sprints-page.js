_Component({
                selector: 'project-sprints-page',
                c: 'ProjectSprintsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','currentSprintIsRunning','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cg_5x5QFB:'project-layout',clrED8GDi:'flk-datepicker',cK8bXRBLB:'flk-datepicker',cGYm7z7Ah:'flk-dropdown-list',cLOtgJW80:'flk-modal',c8yqwIgJN:'flk-alert'},
                render: function (component) {
                    let cmpzSvU = this._lc('cg_5x5QFB', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndLwgF = component.currentSprintIsRunning;
this.setState('stQn4DV', cndLwgF);
let cndwaAr = !(cndLwgF);
this.setState('stdJ8ob', cndwaAr);
if (cndLwgF) { 
let elVY2Jd = eo('button','uorf',null, boolAttrs, {disabled:true},`class`,`float-right btn btn-danger bold`);
text(`Can't add new sprints until current running sprint is completed.`);
ec('button');
}else { 
let elERE5E = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eleT68w = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Sprint`);
ec('button');
}let elBlgYd = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Sprints
        (${ component.project.sprints.length })`);
ec('h1');
let elwHISZ = eo('table',null,null,`class`,`table table-striped buttoned`);
let elUt_Jy = eo('thead');
let elTx44N = eo('tr');
let elFChLN = eo('th');
text(`Name`);
ec('th');
let elZEjvP = eo('th');
text(`Status`);
ec('th');
let elsKfjU = eo('th');
text(`Current Sprint`);
ec('th');
let el9LvD7 = eo('th');
text(`Starts At`);
ec('th');
let elE2mAY = eo('th');
text(`Ends At`);
ec('th');
let elvvWrM = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elJnnap = eo('tbody');
let cndvYnW = Is.empty(component.project.sprints);
this.setState('stJ81xo', cndvYnW);
let cndDDdv = !(cndvYnW);
this.setState('stP1Iq3', cndDDdv);
if (cndvYnW) { 
let elFVTwn = eo('tr','GyAf');
let elf7xim = eo('td','crdf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Sprints Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.sprints) {
let record = component.project.sprints[index]; 
 let iiJ6IK = record.id+ index;
let elNDF_L = eo('tr','el8_pHIvOLTn' + index+iiJ6IK);
let elFpBOe = eo('td','MhAff'+iiJ6IK);
let elAXhwc = eo('a','2ZXff'+iiJ6IK,null,`href`,`${URLS.project(component.project, 'sprints', record)}`);
text(record.name);
ec('a');
ec('td');
let elQzk2T = eo('td','7gZff'+iiJ6IK,null,`class`,`bold`);
text(record.status.capitalize());
ec('td');
let elftN0V = eo('td','dvwff'+iiJ6IK);
let cnd5Ud1 = component.project.currentSprint && component.project.currentSprint.id == record.id;
this.setState('sti0ngV', cnd5Ud1);
if (cnd5Ud1) { 
let elgKfjU = eo('i','Azjff'+iiJ6IK,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}ec('td');
let eloxmXE = eo('td','mizff'+iiJ6IK);
text(record.startsAt);
ec('td');
let elOqZzZ = eo('td','Nloff'+iiJ6IK);
text(record.endsAt);
ec('td');
let elJEaJh = eo('td','fypff'+iiJ6IK);
let elOE8BG = eo('button','7Vlff'+iiJ6IK,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el4AmcM = eo('i','AKdff'+iiJ6IK,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elOE8BG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Sprint')}`});
        ;
                    }, 20);                
                let elqRkc2 = eo('button','G3zff'+iiJ6IK,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elh1bw4 = eo('i','SQhff'+iiJ6IK,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elqRkc2;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Sprint')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd4Jt6 = component.modalIsOpened;
this.setState('stNcyYN', cnd4Jt6);
if (cnd4Jt6) { 
component.modal = this._lc('cLOtgJW80', {parent:component,props:{esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elG3TI1 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elG3TI1.formHandler) {
                    window.cfrmdlr = elG3TI1.formHandler = new FormHandler(elG3TI1, component);
                } else {
                    window.cfrmdlr = elG3TI1.formHandler;
                }
            let elUt6fj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elUt6fj.value = fval(component.project.id);
let el5hW7e = eo('div',null,null,`class`,`form-group`);
el5hW7e.cls = {'group-error': !!elG3TI1.formHandler.getError(`name`) };

            for (let className in el5hW7e.cls) {
                el5hW7e.classList.toggle(className, el5hW7e.cls[className]);
            }  
            let eljrFZH = eo('label',null,null,`for`,`name`);
text(trans('Sprint Name'));
let elWTFll = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el5RhIg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG3TI1.formHandler.addError(`name`, 'required', trans('validation.required'));}return elG3TI1.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Sprint Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el5RhIg.value = fval(component.record.name);
let cndkbRd = elG3TI1.formHandler.getError(`name`);
this.setState('stVF9KH', cndkbRd);
if (cndkbRd) { 
let elO2KvC = eo('div','bXMf',null,`class`,`alert alert-danger`);
text(elG3TI1.formHandler.getError(`name`));
ec('div');
}ec('div');
let elWaMJW = eo('div',null,null,`class`,`form-group`);
elWaMJW.cls = {'group-error': !!elG3TI1.formHandler.getError(`goal`) };

            for (let className in elWaMJW.cls) {
                elWaMJW.classList.toggle(className, elWaMJW.cls[className]);
            }  
            let elmxSxZ = eo('label',null,null,`for`,`goal`);
text(trans('Sprint Goal'));
let eln8pfh = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloZz7P = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.goal = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elG3TI1.formHandler.addError(`goal`, 'required', trans('validation.required'));}return elG3TI1.formHandler.removeError(`goal`);}]},`value`,`${fval(component.record.goal)}`,`name`,`${(`goal`).toInputName()}`,`placeholder`,`${trans(`Sprint Goal`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`goal`);
eloZz7P.value = fval(component.record.goal);
ec('textarea');
let cndJuj2 = elG3TI1.formHandler.getError(`goal`);
this.setState('stHLKzP', cndJuj2);
if (cndJuj2) { 
let elTmmXJ = eo('div','UxJf',null,`class`,`alert alert-danger`);
text(elG3TI1.formHandler.getError(`goal`));
ec('div');
}ec('div');
let elUV8rM = eo('div',null,null,`class`,`row`);
let el8tSU6 = eo('div',null,null,`class`,`col-sm-6`);
let cmpJhcJ = this._lc('clrED8GDi', {parent:component,parentTop:flkModal,props:{value:component.record.startsAt,required:true},attrs:{name:`${(`startsAt`).toInputName()}`,label:'Starts At',class:'form-control'},state:'stNcyYN'});
ec('div');
let eltBYBG = eo('div',null,null,`class`,`col-sm-6`);
let cmpJWUo = this._lc('cK8bXRBLB', {parent:component,parentTop:flkModal,props:{value:component.record.endsAt,required:true},attrs:{name:`${(`endsAt`).toInputName()}`,label:'Ends At',class:'form-control'},state:'stNcyYN'});
ec('div');
ec('div');
let cnd7GxM = component.record.status != 'completed';
this.setState('st9fsTj', cnd7GxM);
let cndEqPJ = !(cnd7GxM);
this.setState('stIYZbf', cndEqPJ);
if (cnd7GxM) { 
let cmpoOtz = this._lc('cGYm7z7Ah', {parent:component,parentTop:flkModal,props:{value:component.record.status,required:true,items:['running', 'completed', 'canceled', 'notStarted']},attrs:{name:`${(`status`).toInputName()}`,label:'Sprint Status'},state:'st9fsTj'});
}else { 
let el8orrk = eo('div',null,null,`class`,`bold green-text`);
text(`Completed Sprint`);
ec('div');
}let eltiLeJ = eo('div',null,null,`class`,`m-t-1 text-center`);
let eluftTu = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stNcyYN'});
}let cndjnQ_ = component.confirmDelete;
this.setState('st1ls5g', cndjnQ_);
if (cndjnQ_) { 
let cmpmpE1 = this._lc('c8yqwIgJN', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st1ls5g'});
}
                    this.isReadyToGo();
                }
        });