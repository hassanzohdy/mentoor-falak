_Component({
                selector: 'project-documentations-page',
                c: 'ProjectDocumentationsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {croldZS_k:'project-layout',cEOcPXWW7:'flk-modal',c5X7BgDE9:'flk-alert'},
                render: function (component) {
                    let cmpl3Oh = this._lc('croldZS_k', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elgKMDu = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el_oKIX = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Documentation`);
ec('button');
let el8OFUb = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Documentations
        (${ component.project.documentations.length })`);
ec('h1');
let elkFvT3 = eo('table',null,null,`class`,`table table-striped buttoned`);
let elwxeP0 = eo('thead');
let elJUcP2 = eo('tr');
let elhMozu = eo('th');
text(`Title`);
ec('th');
let elVybmR = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elpVBnM = eo('tbody');
let cndVCmp = Is.empty(component.project.documentations);
this.setState('st2FybC', cndVCmp);
let cndU32h = !(cndVCmp);
this.setState('stI3iU7', cndU32h);
if (cndVCmp) { 
let elckH5B = eo('tr','d0mf');
let elFj_3q = eo('td','06Af',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Documentations Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.documentations) {
let record = component.project.documentations[index]; 
 let iivuMi = record.id+ index;
let elke2ZH = eo('tr','8XBaC98qWp37' + index+iivuMi);
let elYnS4W = eo('td','Kitff'+iivuMi);
let eliix7E = eo('a','h9bff'+iivuMi,null,`href`,`${URLS.project(component.project, 'documentation', record)}`);
text(record.title);
ec('a');
ec('td');
let elaBVej = eo('td','cZJff'+iivuMi);
let el01XTp = eo('button','BfDff'+iivuMi,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elZKcEq = eo('i','zesff'+iivuMi,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el01XTp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Documentation')}`});
        ;
                    }, 20);                
                let elTemxx = eo('button','x2yff'+iivuMi,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let eljLoSt = eo('i','jwmff'+iivuMi,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elTemxx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Documentation')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndSKeK = component.modalIsOpened;
this.setState('st560S1', cndSKeK);
if (cndSKeK) { 
component.modal = this._lc('cEOcPXWW7', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el2Vx9c = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el2Vx9c.formHandler) {
                    window.cfrmdlr = el2Vx9c.formHandler = new FormHandler(el2Vx9c, component);
                } else {
                    window.cfrmdlr = el2Vx9c.formHandler;
                }
            let elXGFsZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elXGFsZ.value = fval(component.project.id);
let elcUrE6 = eo('div',null,null,`class`,`form-group`);
elcUrE6.cls = {'group-error': !!el2Vx9c.formHandler.getError(`title`) };

            for (let className in elcUrE6.cls) {
                elcUrE6.classList.toggle(className, elcUrE6.cls[className]);
            }  
            let elb1TTy = eo('label',null,null,`for`,`title`);
text(trans('Documentation title'));
let elsI6QE = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elajYjY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2Vx9c.formHandler.addError(`title`, 'required', trans('validation.required'));}return el2Vx9c.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Documentation title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elajYjY.value = fval(component.record.title);
let cndEq9g = el2Vx9c.formHandler.getError(`title`);
this.setState('stso5Hr', cndEq9g);
if (cndEq9g) { 
let elrp3sW = eo('div','g6Kf',null,`class`,`alert alert-danger`);
text(el2Vx9c.formHandler.getError(`title`));
ec('div');
}ec('div');
let elURnCg = eo('div',null,null,`class`,`form-group`);
elURnCg.cls = {'group-error': !!el2Vx9c.formHandler.getError(`content`) };

            for (let className in elURnCg.cls) {
                elURnCg.classList.toggle(className, elURnCg.cls[className]);
            }  
            let elsXcax = eo('label',null,null,`for`,`content`);
text(trans('Documentation content (Markdown)'));
let elyiyXC = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elimFLe = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el2Vx9c.formHandler.addError(`content`, 'required', trans('validation.required'));}return el2Vx9c.formHandler.removeError(`content`);}]},`value`,`${fval(component.record.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Documentation content (Markdown)`)}`,`type`,`textarea`,`rows`,`15`,`class`,`form-control`,`id`,`content`);
elimFLe.value = fval(component.record.content);
ec('textarea');
let cndafqG = el2Vx9c.formHandler.getError(`content`);
this.setState('st3sjqJ', cndafqG);
if (cndafqG) { 
let eluuBFX = eo('div','FDWf',null,`class`,`alert alert-danger`);
text(el2Vx9c.formHandler.getError(`content`));
ec('div');
}ec('div');
let elIt9AB = eo('div',null,null,`class`,`m-t-1 text-center`);
let el_qe7F = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st560S1'});
}let cndUR0N = component.confirmDelete;
this.setState('stDazhF', cndUR0N);
if (cndUR0N) { 
let cmpdKRv = this._lc('c5X7BgDE9', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stDazhF'});
}
                    this.isReadyToGo();
                }
        });