_Component({
                selector: 'project-project-discussions-page',
                c: 'ProjectProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cOQtiUpDQ:'project-layout',cRa1hyQ9U:'flk-modal',cahtR2Onc:'flk-alert'},
                render: function (component) {
                    let cmpyxqz = this._lc('cOQtiUpDQ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eltDEVP = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eloQqTA = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Project-discussion`);
ec('button');
let elk9DNL = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project-discussions
        (${ component.project.discussions.length })`);
ec('h1');
let elSXEr1 = eo('table',null,null,`class`,`table table-striped buttoned`);
let elcpKFK = eo('thead');
let elAq2WD = eo('tr');
let elxRCvL = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elpasul = eo('tbody');
let cndtVkJ = Is.empty(component.project.discussions);
this.setState('stlIuER', cndtVkJ);
let cndL1m9 = !(cndtVkJ);
this.setState('stHjkKL', cndL1m9);
if (cndtVkJ) { 
let eliqjdp = eo('tr','GqDf');
let elsVMal = eo('td','PzUf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Project-discussions Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.projectDiscussions) {
let record = component.project.projectDiscussions[index]; 
 let iiWBoQ = 'wE7v96K' + index;
let elHSsFK = eo('tr','xLxEinOm3ftE' + index+iiWBoQ);
let el4N96x = eo('td','qJ0ff'+iiWBoQ);
let elvnkxE = eo('button','svrff'+iiWBoQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elGC19x = eo('i','G1_ff'+iiWBoQ,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elvnkxE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Project-discussion')}`});
        ;
                    }, 20);                
                let elAV5lV = eo('button','Wyiff'+iiWBoQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elaM_q_ = eo('i','oaVff'+iiWBoQ,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elAV5lV;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Project-discussion')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndL3Pp = component.modalIsOpened;
this.setState('stsHxRR', cndL3Pp);
if (cndL3Pp) { 
component.modal = this._lc('cRa1hyQ9U', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el0YtRM = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el0YtRM.formHandler) {
                    window.cfrmdlr = el0YtRM.formHandler = new FormHandler(el0YtRM, component);
                } else {
                    window.cfrmdlr = el0YtRM.formHandler;
                }
            let el45QtT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el45QtT.value = fval(component.project.id);
let eldlaXo = eo('div',null,null,`class`,`form-group`);
eldlaXo.cls = {'group-error': !!el0YtRM.formHandler.getError(`name`) };

            for (let className in eldlaXo.cls) {
                eldlaXo.classList.toggle(className, eldlaXo.cls[className]);
            }  
            let el6yTbE = eo('label',null,null,`for`,`name`);
text(trans('Project-discussion Name'));
let eltCL6_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkSIBG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el0YtRM.formHandler.addError(`name`, 'required', trans('validation.required'));}return el0YtRM.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project-discussion Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elkSIBG.value = fval(component.record.name);
let cndhlTf = el0YtRM.formHandler.getError(`name`);
this.setState('stcesak', cndhlTf);
if (cndhlTf) { 
let ely74Me = eo('div','ybyf',null,`class`,`alert alert-danger`);
text(el0YtRM.formHandler.getError(`name`));
ec('div');
}ec('div');
let elYHrlx = eo('div',null,null,`class`,`m-t-1 text-center`);
let elTNmCb = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stsHxRR'});
}let cndp5ha = component.confirmDelete;
this.setState('stDroSA', cndp5ha);
if (cndp5ha) { 
let cmpv9OU = this._lc('cahtR2Onc', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stDroSA'});
}
                    this.isReadyToGo();
                }
        });