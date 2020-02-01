_Component({
                selector: 'project-project-discussions-page',
                c: 'ProjectProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {c5uYkxSbn:'project-layout',c4WTrJ9CM:'flk-modal',cF2Wug3IP:'flk-alert'},
                render: function (component) {
                    let cmp6Wg0 = this._lc('c5uYkxSbn', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el8LtAa = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let ely5Ztz = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Project-discussion`);
ec('button');
let el_ZXr1 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project-discussions
        (${ component.project.discussions.length })`);
ec('h1');
let elzzzyu = eo('table',null,null,`class`,`table table-striped buttoned`);
let elIzw4p = eo('thead');
let elHkJJO = eo('tr');
let elrKsUh = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elALUbB = eo('tbody');
let cndNVSc = Is.empty(component.project.discussions);
this.setState('stn0opz', cndNVSc);
let cndZrRn = !(cndNVSc);
this.setState('stB0fa4', cndZrRn);
if (cndNVSc) { 
let elZE8vI = eo('tr','sZXf');
let elKHDa6 = eo('td','B6If',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Project-discussions Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.projectDiscussions) {
let record = component.project.projectDiscussions[index]; 
 let iigEiL = 'QqgS0EA' + index;
let elpWp5j = eo('tr','oakp8onHsrej' + index+iigEiL);
let elMAFRN = eo('td','Dl7ff'+iigEiL);
let elxKDXZ = eo('button','5vYff'+iigEiL,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elTYHkV = eo('i','WWWff'+iigEiL,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elxKDXZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Project-discussion')}`});
        ;
                    }, 20);                
                let elKFBu0 = eo('button','ISGff'+iigEiL,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elMwkfA = eo('i','O_yff'+iigEiL,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elKFBu0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Project-discussion')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndh4FG = component.modalIsOpened;
this.setState('styn9Uf', cndh4FG);
if (cndh4FG) { 
component.modal = this._lc('c4WTrJ9CM', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eloOFEi = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eloOFEi.formHandler) {
                    window.cfrmdlr = eloOFEi.formHandler = new FormHandler(eloOFEi, component);
                } else {
                    window.cfrmdlr = eloOFEi.formHandler;
                }
            let elK1teR = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elK1teR.value = fval(component.project.id);
let el7a7kB = eo('div',null,null,`class`,`form-group`);
el7a7kB.cls = {'group-error': !!eloOFEi.formHandler.getError(`name`) };

            for (let className in el7a7kB.cls) {
                el7a7kB.classList.toggle(className, el7a7kB.cls[className]);
            }  
            let eln8__i = eo('label',null,null,`for`,`name`);
text(trans('Project-discussion Name'));
let elS9pyT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWHtdQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eloOFEi.formHandler.addError(`name`, 'required', trans('validation.required'));}return eloOFEi.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project-discussion Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elWHtdQ.value = fval(component.record.name);
let cndrO9E = eloOFEi.formHandler.getError(`name`);
this.setState('stwfbuj', cndrO9E);
if (cndrO9E) { 
let elaq116 = eo('div','o4Kf',null,`class`,`alert alert-danger`);
text(eloOFEi.formHandler.getError(`name`));
ec('div');
}ec('div');
let eleEWFl = eo('div',null,null,`class`,`m-t-1 text-center`);
let el8Qx0z = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'styn9Uf'});
}let cndPYdr = component.confirmDelete;
this.setState('st0801W', cndPYdr);
if (cndPYdr) { 
let cmplAfP = this._lc('cF2Wug3IP', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st0801W'});
}
                    this.isReadyToGo();
                }
        });