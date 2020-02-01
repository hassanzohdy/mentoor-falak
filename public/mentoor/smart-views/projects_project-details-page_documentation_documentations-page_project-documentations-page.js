_Component({
                selector: 'project-documentations-page',
                c: 'ProjectDocumentationsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cqr3sqqCD:'project-layout',cSVungEJL:'flk-modal',cwLuWV58I:'flk-alert'},
                render: function (component) {
                    let cmpsGDm = this._lc('cqr3sqqCD', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elj_vFu = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elEyKTY = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Documentation`);
ec('button');
let elV_yl8 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Documentations
        (${ component.project.documentations.length })`);
ec('h1');
let elfhadY = eo('table',null,null,`class`,`table table-striped buttoned`);
let elq5uF5 = eo('thead');
let el2Hm7r = eo('tr');
let elhqpnn = eo('th');
text(`Title`);
ec('th');
let elVIVOa = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elrM5Qi = eo('tbody');
let cndzyhc = Is.empty(component.project.documentations);
this.setState('st37RLe', cndzyhc);
let cnd1QLA = !(cndzyhc);
this.setState('st52jxm', cnd1QLA);
if (cndzyhc) { 
let elfmEr8 = eo('tr','usNf');
let elqP_qB = eo('td','LXXf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Documentations Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.documentations) {
let record = component.project.documentations[index]; 
 let iijHMr = record.id+ index;
let el2Sk6D = eo('tr','mk2l46kdtnGj' + index+iijHMr);
let elaEjZK = eo('td','Fovff'+iijHMr);
let el5rJuv = eo('a','gjCff'+iijHMr,null,`href`,`${URLS.project(component.project, 'documentation', record)}`);
text(record.title);
ec('a');
ec('td');
let elKeBSA = eo('td','NRuff'+iijHMr);
let elPdjUl = eo('button','TK9ff'+iijHMr,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elzwkBg = eo('i','Oqaff'+iijHMr,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elPdjUl;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Documentation')}`});
        ;
                    }, 20);                
                let elHmVmO = eo('button','bFGff'+iijHMr,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elVtM5f = eo('i','Hgjff'+iijHMr,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elHmVmO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Documentation')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndbCMM = component.modalIsOpened;
this.setState('st5dxNr', cndbCMM);
if (cndbCMM) { 
component.modal = this._lc('cSVungEJL', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elxVDsi = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elxVDsi.formHandler) {
                    window.cfrmdlr = elxVDsi.formHandler = new FormHandler(elxVDsi, component);
                } else {
                    window.cfrmdlr = elxVDsi.formHandler;
                }
            let el9l92h = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el9l92h.value = fval(component.project.id);
let el2CjbB = eo('div',null,null,`class`,`form-group`);
el2CjbB.cls = {'group-error': !!elxVDsi.formHandler.getError(`title`) };

            for (let className in el2CjbB.cls) {
                el2CjbB.classList.toggle(className, el2CjbB.cls[className]);
            }  
            let elkz4l7 = eo('label',null,null,`for`,`title`);
text(trans('Documentation title'));
let elW1BEH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloQD7g = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxVDsi.formHandler.addError(`title`, 'required', trans('validation.required'));}return elxVDsi.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Documentation title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eloQD7g.value = fval(component.record.title);
let cndb0b2 = elxVDsi.formHandler.getError(`title`);
this.setState('stKEy_1', cndb0b2);
if (cndb0b2) { 
let elatueB = eo('div','TWNf',null,`class`,`alert alert-danger`);
text(elxVDsi.formHandler.getError(`title`));
ec('div');
}ec('div');
let elIpL6Z = eo('div',null,null,`class`,`form-group`);
elIpL6Z.cls = {'group-error': !!elxVDsi.formHandler.getError(`content`) };

            for (let className in elIpL6Z.cls) {
                elIpL6Z.classList.toggle(className, elIpL6Z.cls[className]);
            }  
            let elX9T9M = eo('label',null,null,`for`,`content`);
text(trans('Documentation content (Markdown)'));
let elsTCKv = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWHgm8 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.content = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxVDsi.formHandler.addError(`content`, 'required', trans('validation.required'));}return elxVDsi.formHandler.removeError(`content`);}]},`value`,`${fval(component.record.content)}`,`name`,`${(`content`).toInputName()}`,`placeholder`,`${trans(`Documentation content (Markdown)`)}`,`type`,`textarea`,`rows`,`15`,`class`,`form-control`,`id`,`content`);
elWHgm8.value = fval(component.record.content);
ec('textarea');
let cnd50Eu = elxVDsi.formHandler.getError(`content`);
this.setState('stskqG1', cnd50Eu);
if (cnd50Eu) { 
let elwhmvP = eo('div','uTEf',null,`class`,`alert alert-danger`);
text(elxVDsi.formHandler.getError(`content`));
ec('div');
}ec('div');
let elYOm4k = eo('div',null,null,`class`,`m-t-1 text-center`);
let el8p01D = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'st5dxNr'});
}let cndtalA = component.confirmDelete;
this.setState('stcE3Em', cndtalA);
if (cndtalA) { 
let cmp_lhG = this._lc('cwLuWV58I', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stcE3Em'});
}
                    this.isReadyToGo();
                }
        });