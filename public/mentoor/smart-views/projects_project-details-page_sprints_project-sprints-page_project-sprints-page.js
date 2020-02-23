_Component({
                selector: 'project-sprints-page',
                c: 'ProjectSprintsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','currentSprintIsRunning','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cYZFe7qwJ:'project-layout',cxFfaLANX:'flk-datepicker',c77uoQ1nC:'flk-datepicker',cFmoPpGGj:'flk-dropdown-list',cACjpmoHW:'flk-modal',cGbjcZcZj:'flk-alert'},
                render: function (component) {
                    let cmplnh2 = this._lc('cYZFe7qwJ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndTsjt = component.currentSprintIsRunning;
this.setState('strYRyI', cndTsjt);
let cnddjeh = !(cndTsjt);
this.setState('stCSbAi', cnddjeh);
if (cndTsjt) { 
let elZd1Zi = eo('button','uocf',null, boolAttrs, {disabled:true},`class`,`float-right btn btn-danger bold`);
text(`Can't add new sprints until current running sprint is completed.`);
ec('button');
}else { 
let el1AqzJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elaW0JJ = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Sprint`);
ec('button');
}let el9IU9T = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Sprints
        (${ component.project.sprints.length })`);
ec('h1');
let elg72Zc = eo('table',null,null,`class`,`table table-striped buttoned`);
let el23dKQ = eo('thead');
let ely_3Mb = eo('tr');
let elsg6bi = eo('th');
text(`Name`);
ec('th');
let elh8FsY = eo('th');
text(`Status`);
ec('th');
let elrkitc = eo('th');
text(`Current Sprint`);
ec('th');
let elob4Vx = eo('th');
text(`Starts At`);
ec('th');
let elgr_4U = eo('th');
text(`Ends At`);
ec('th');
let el6JPYi = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el2Np_J = eo('tbody');
let cndeMhc = Is.empty(component.project.sprints);
this.setState('stgMRqT', cndeMhc);
let cnd6MmC = !(cndeMhc);
this.setState('stElE4y', cnd6MmC);
if (cndeMhc) { 
let elyvsra = eo('tr','fuaf');
let elJ65Zq = eo('td','xwdf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Sprints Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.sprints) {
let record = component.project.sprints[index]; 
 let iiAFf8 = record.id+ index;
let el8tQOm = eo('tr','OjJ4pDcjOhzi' + index+iiAFf8);
let eldHsdP = eo('td','oT_ff'+iiAFf8);
let elYYVCn = eo('a','m5Jff'+iiAFf8,null,`href`,`${URLS.project(component.project, 'sprints', record)}`);
text(record.name);
ec('a');
ec('td');
let elv0N4X = eo('td','d23ff'+iiAFf8,null,`class`,`bold`);
text(record.status.capitalize());
ec('td');
let el2xP1u = eo('td','RYhff'+iiAFf8);
let cndfIia = component.project.currentSprint && component.project.currentSprint.id == record.id;
this.setState('sti3O0j', cndfIia);
if (cndfIia) { 
let elkkHUu = eo('i','r0Yff'+iiAFf8,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}ec('td');
let elal4g8 = eo('td','VXKff'+iiAFf8);
text(record.startsAt);
ec('td');
let elywwNm = eo('td','U0iff'+iiAFf8);
text(record.endsAt);
ec('td');
let elidY6Y = eo('td','naJff'+iiAFf8);
let el2WHBP = eo('button','deNff'+iiAFf8,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el2ulnX = eo('i','CY7ff'+iiAFf8,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el2WHBP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Sprint')}`});
        ;
                    }, 20);                
                let eldXUHi = eo('button','VMFff'+iiAFf8,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elicUna = eo('i','CGGff'+iiAFf8,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eldXUHi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Sprint')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndYlUT = component.modalIsOpened;
this.setState('st9NYeX', cndYlUT);
if (cndYlUT) { 
component.modal = this._lc('cACjpmoHW', {parent:component,props:{esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elByw2b = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elByw2b.formHandler) {
                    window.cfrmdlr = elByw2b.formHandler = new FormHandler(elByw2b, component);
                } else {
                    window.cfrmdlr = elByw2b.formHandler;
                }
            let elr9TlC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elr9TlC.value = fval(component.project.id);
let eluDTap = eo('div',null,null,`class`,`form-group`);
eluDTap.cls = {'group-error': !!elByw2b.formHandler.getError(`name`) };

            for (let className in eluDTap.cls) {
                eluDTap.classList.toggle(className, eluDTap.cls[className]);
            }  
            let elCESZM = eo('label',null,null,`for`,`name`);
text(trans('Sprint Name'));
let elc49cQ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcMFkZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elByw2b.formHandler.addError(`name`, 'required', trans('validation.required'));}return elByw2b.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Sprint Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elcMFkZ.value = fval(component.record.name);
let cndZjp3 = elByw2b.formHandler.getError(`name`);
this.setState('stFNVPG', cndZjp3);
if (cndZjp3) { 
let elUuxsg = eo('div','gymf',null,`class`,`alert alert-danger`);
text(elByw2b.formHandler.getError(`name`));
ec('div');
}ec('div');
let el1ZcF6 = eo('div',null,null,`class`,`form-group`);
el1ZcF6.cls = {'group-error': !!elByw2b.formHandler.getError(`goal`) };

            for (let className in el1ZcF6.cls) {
                el1ZcF6.classList.toggle(className, el1ZcF6.cls[className]);
            }  
            let ele7sE0 = eo('label',null,null,`for`,`goal`);
text(trans('Sprint Goal'));
let elZ34zM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el4yAHo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.goal = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elByw2b.formHandler.addError(`goal`, 'required', trans('validation.required'));}return elByw2b.formHandler.removeError(`goal`);}]},`value`,`${fval(component.record.goal)}`,`name`,`${(`goal`).toInputName()}`,`placeholder`,`${trans(`Sprint Goal`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`goal`);
el4yAHo.value = fval(component.record.goal);
ec('textarea');
let cndl3vw = elByw2b.formHandler.getError(`goal`);
this.setState('stPhU24', cndl3vw);
if (cndl3vw) { 
let el1tM4L = eo('div','xudf',null,`class`,`alert alert-danger`);
text(elByw2b.formHandler.getError(`goal`));
ec('div');
}ec('div');
let elZvwZ9 = eo('div',null,null,`class`,`row`);
let elkvsia = eo('div',null,null,`class`,`col-sm-6`);
let cmpZz4S = this._lc('cxFfaLANX', {parent:component,parentTop:flkModal,props:{value:component.record.startsAt,required:true},attrs:{name:`${(`startsAt`).toInputName()}`,label:'Starts At',class:'form-control'},state:'st9NYeX'});
ec('div');
let elp8Xdd = eo('div',null,null,`class`,`col-sm-6`);
let cmpO6lM = this._lc('c77uoQ1nC', {parent:component,parentTop:flkModal,props:{value:component.record.endsAt,required:true},attrs:{name:`${(`endsAt`).toInputName()}`,label:'Ends At',class:'form-control'},state:'st9NYeX'});
ec('div');
ec('div');
let cndRZty = component.record.status != 'completed';
this.setState('stmpIqo', cndRZty);
let cndFxps = !(cndRZty);
this.setState('stZB8hR', cndFxps);
if (cndRZty) { 
let cmpNSt1 = this._lc('cFmoPpGGj', {parent:component,parentTop:flkModal,props:{value:component.record.status,required:true,items:['running', 'completed', 'canceled', 'notStarted']},attrs:{name:`${(`status`).toInputName()}`,label:'Sprint Status'},state:'stmpIqo'});
}else { 
let elfJQJf = eo('div',null,null,`class`,`bold green-text`);
text(`Completed Sprint`);
ec('div');
}let elOkc2I = eo('div',null,null,`class`,`m-t-1 text-center`);
let elYi9Kr = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st9NYeX'});
}let cndV3oR = component.confirmDelete;
this.setState('stB6Smq', cndV3oR);
if (cndV3oR) { 
let cmpTQxk = this._lc('cGbjcZcZj', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stB6Smq'});
}
                    this.isReadyToGo();
                }
        });