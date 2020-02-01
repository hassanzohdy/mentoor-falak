_Component({
                selector: 'project-sprints-page',
                c: 'ProjectSprintsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','currentSprintIsRunning','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cYl32keft:'project-layout',cl82pSXQp:'flk-datepicker',cxcp5_LHa:'flk-datepicker',cniAloXhm:'flk-dropdown-list',cblcBB4o6:'flk-modal',cK1khq1GV:'flk-alert'},
                render: function (component) {
                    let cmpsHt_ = this._lc('cYl32keft', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndNLM3 = component.currentSprintIsRunning;
this.setState('stKChSY', cndNLM3);
let cnduyxg = !(cndNLM3);
this.setState('stgU3Vm', cnduyxg);
if (cndNLM3) { 
let el8nxCL = eo('button','qtrf',null, boolAttrs, {disabled:true},`class`,`float-right btn btn-danger bold`);
text(`Can't add new sprints until current running sprint is completed.`);
ec('button');
}else { 
let elaRvlt = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eloBp68 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Sprint`);
ec('button');
}let elJXVy_ = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Sprints
        (${ component.project.sprints.length })`);
ec('h1');
let elfh7mZ = eo('table',null,null,`class`,`table table-striped buttoned`);
let elkIk2U = eo('thead');
let elNQ8xc = eo('tr');
let el6H81L = eo('th');
text(`Name`);
ec('th');
let elHvflI = eo('th');
text(`Status`);
ec('th');
let elp9lk5 = eo('th');
text(`Current Sprint`);
ec('th');
let elYtxpv = eo('th');
text(`Starts At`);
ec('th');
let elDONXe = eo('th');
text(`Ends At`);
ec('th');
let el9e39G = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el5gw7k = eo('tbody');
let cndIAZu = Is.empty(component.project.sprints);
this.setState('stEBY2U', cndIAZu);
let cndkxos = !(cndIAZu);
this.setState('stxp1sv', cndkxos);
if (cndIAZu) { 
let elCQKR6 = eo('tr','qk5f');
let elkXnFY = eo('td','T2Jf',null, 'style', {textAlign:'center'},`colspan`,`5`);
text(`No Sprints Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.sprints) {
let record = component.project.sprints[index]; 
 let iiale3 = record.id+ index;
let elNyMkI = eo('tr','sLquBQHIvtvg' + index+iiale3);
let elYsZXQ = eo('td','Mteff'+iiale3);
let elPN6tv = eo('a','ll9ff'+iiale3,null,`href`,`${URLS.project(component.project, 'sprints', record)}`);
text(record.name);
ec('a');
ec('td');
let elNF4gA = eo('td','_ogff'+iiale3,null,`class`,`bold`);
text(record.status.capitalize());
ec('td');
let elOCHQw = eo('td','pBuff'+iiale3);
let cnd0zaB = component.project.currentSprint && component.project.currentSprint.id == record.id;
this.setState('stjKn4r', cnd0zaB);
if (cnd0zaB) { 
let elyYxB7 = eo('i','FaZff'+iiale3,null,`class`,`${fas('check') + ' green-text icon'}`);
ec('i');
}ec('td');
let elzNjDy = eo('td','380ff'+iiale3);
text(record.startsAt);
ec('td');
let elpMY0W = eo('td','ciFff'+iiale3);
text(record.endsAt);
ec('td');
let eladOqG = eo('td','iBmff'+iiale3);
let elMYiuH = eo('button','GLTff'+iiale3,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elo9OF0 = eo('i','Ycwff'+iiale3,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elMYiuH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Sprint')}`});
        ;
                    }, 20);                
                let el3rxSX = eo('button','YqVff'+iiale3,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elPmk9p = eo('i','Rxyff'+iiale3,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el3rxSX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Sprint')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndqzKE = component.modalIsOpened;
this.setState('stN3bab', cndqzKE);
if (cndqzKE) { 
component.modal = this._lc('cblcBB4o6', {parent:component,props:{esc:false,heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elCIAU9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elCIAU9.formHandler) {
                    window.cfrmdlr = elCIAU9.formHandler = new FormHandler(elCIAU9, component);
                } else {
                    window.cfrmdlr = elCIAU9.formHandler;
                }
            let elndt3p = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elndt3p.value = fval(component.project.id);
let elBfpoT = eo('div',null,null,`class`,`form-group`);
elBfpoT.cls = {'group-error': !!elCIAU9.formHandler.getError(`name`) };

            for (let className in elBfpoT.cls) {
                elBfpoT.classList.toggle(className, elBfpoT.cls[className]);
            }  
            let elWkPmk = eo('label',null,null,`for`,`name`);
text(trans('Sprint Name'));
let ellZK0I = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elsfY4c = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCIAU9.formHandler.addError(`name`, 'required', trans('validation.required'));}return elCIAU9.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Sprint Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elsfY4c.value = fval(component.record.name);
let cndEQ97 = elCIAU9.formHandler.getError(`name`);
this.setState('stn7nfH', cndEQ97);
if (cndEQ97) { 
let elTpkTB = eo('div','PNFf',null,`class`,`alert alert-danger`);
text(elCIAU9.formHandler.getError(`name`));
ec('div');
}ec('div');
let elA4UeW = eo('div',null,null,`class`,`form-group`);
elA4UeW.cls = {'group-error': !!elCIAU9.formHandler.getError(`goal`) };

            for (let className in elA4UeW.cls) {
                elA4UeW.classList.toggle(className, elA4UeW.cls[className]);
            }  
            let elwL5Q2 = eo('label',null,null,`for`,`goal`);
text(trans('Sprint Goal'));
let elAWlHa = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el25_yH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.goal = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCIAU9.formHandler.addError(`goal`, 'required', trans('validation.required'));}return elCIAU9.formHandler.removeError(`goal`);}]},`value`,`${fval(component.record.goal)}`,`name`,`${(`goal`).toInputName()}`,`placeholder`,`${trans(`Sprint Goal`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`goal`);
el25_yH.value = fval(component.record.goal);
ec('textarea');
let cndtUBa = elCIAU9.formHandler.getError(`goal`);
this.setState('stlUamH', cndtUBa);
if (cndtUBa) { 
let eltr6zZ = eo('div','8vvf',null,`class`,`alert alert-danger`);
text(elCIAU9.formHandler.getError(`goal`));
ec('div');
}ec('div');
let elV4liU = eo('div',null,null,`class`,`row`);
let elWGmrG = eo('div',null,null,`class`,`col-sm-6`);
let cmpAjsn = this._lc('cl82pSXQp', {parent:component,parentTop:flkModal,props:{value:component.record.startsAt,required:true},attrs:{name:`${(`startsAt`).toInputName()}`,label:'Starts At',class:'form-control'},state:'stN3bab'});
ec('div');
let elms3qw = eo('div',null,null,`class`,`col-sm-6`);
let cmpNL2B = this._lc('cxcp5_LHa', {parent:component,parentTop:flkModal,props:{value:component.record.endsAt,required:true},attrs:{name:`${(`endsAt`).toInputName()}`,label:'Ends At',class:'form-control'},state:'stN3bab'});
ec('div');
ec('div');
let cnd0oqB = component.record.status != 'completed';
this.setState('stoH4OZ', cnd0oqB);
let cndLK5l = !(cnd0oqB);
this.setState('stLUgJt', cndLK5l);
if (cnd0oqB) { 
let cmpB06f = this._lc('cniAloXhm', {parent:component,parentTop:flkModal,props:{value:component.record.status,required:true,items:['running', 'completed', 'canceled', 'notStarted']},attrs:{name:`${(`status`).toInputName()}`,label:'Sprint Status'},state:'stoH4OZ'});
}else { 
let elgfyY1 = eo('div',null,null,`class`,`bold green-text`);
text(`Completed Sprint`);
ec('div');
}let elaaGB5 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elfRLHd = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stN3bab'});
}let cndTPFV = component.confirmDelete;
this.setState('stKnebI', cndTPFV);
if (cndTPFV) { 
let cmpqyXG = this._lc('cK1khq1GV', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stKnebI'});
}
                    this.isReadyToGo();
                }
        });