_Component({
                selector: 'project-documentations-page',
                c: 'ProjectDocumentationsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {ctCJasYK8:'project-layout',cD4iLhdLw:'markdown-input',cmHNlix94:'flk-modal',c51CAeJnf:'flk-alert'},
                render: function (component) {
                    let cmp93Bb = this._lc('ctCJasYK8', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el9DMVl = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elVh5HO = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Documentation`);
ec('button');
let elIJCd1 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Documentations
        (${ component.project.documentations.length })`);
ec('h1');
let elWJP7r = eo('table',null,null,`class`,`table table-striped buttoned`);
let elcVxBF = eo('thead');
let elXE2zM = eo('tr');
let elemt4A = eo('th');
text(`Title`);
ec('th');
let elkEPPe = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elW4X6U = eo('tbody');
let cndBa8o = Is.empty(component.project.documentations);
this.setState('stTjAln', cndBa8o);
let cndHCnk = !(cndBa8o);
this.setState('st5LSNL', cndHCnk);
if (cndBa8o) { 
let elg6Udi = eo('tr','wUzf');
let elIBE3Z = eo('td','MWZf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Documentations Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.documentations) {
let record = component.project.documentations[index]; 
 let iim2Aw = record.id+ index;
let elvVuQx = eo('tr','bxtEZOyIko8P' + index+iim2Aw);
let elSNN1e = eo('td','rQ9ff'+iim2Aw);
let elBNwZz = eo('a','YA7ff'+iim2Aw,null,`href`,`${URLS.project(component.project, 'documentation', record)}`);
text(record.title);
ec('a');
ec('td');
let elZWznH = eo('td','BSEff'+iim2Aw);
let elLn0GT = eo('button','Nmjff'+iim2Aw,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elrfUte = eo('i','OsYff'+iim2Aw,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elLn0GT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Documentation')}`});
        ;
                    }, 20);                
                let elDhXBt = eo('button','dx1ff'+iim2Aw,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el2mDJi = eo('i','euLff'+iim2Aw,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elDhXBt;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Documentation')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndMMt2 = component.modalIsOpened;
this.setState('stu1r6B', cndMMt2);
if (cndMMt2) { 
component.modal = this._lc('cmHNlix94', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el4oi5i = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el4oi5i.formHandler) {
                    window.cfrmdlr = el4oi5i.formHandler = new FormHandler(el4oi5i, component);
                } else {
                    window.cfrmdlr = el4oi5i.formHandler;
                }
            let elx12td = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elx12td.value = fval(component.project.id);
let elJ8T2K = eo('div',null,null,`class`,`form-group`);
elJ8T2K.cls = {'group-error': !!el4oi5i.formHandler.getError(`title`) };

            for (let className in elJ8T2K.cls) {
                elJ8T2K.classList.toggle(className, elJ8T2K.cls[className]);
            }  
            let elfT1hp = eo('label',null,null,`for`,`title`);
text(trans('Documentation title'));
let elC5e5G = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUpD4C = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4oi5i.formHandler.addError(`title`, 'required', trans('validation.required'));}return el4oi5i.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Documentation title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elUpD4C.value = fval(component.record.title);
let cndEoUR = el4oi5i.formHandler.getError(`title`);
this.setState('stjGXJr', cndEoUR);
if (cndEoUR) { 
let elQm0n9 = eo('div','Ylxf',null,`class`,`alert alert-danger`);
text(el4oi5i.formHandler.getError(`title`));
ec('div');
}ec('div');
let elduhAh = eo('div',null,null,`class`,`m-t-1`);
let cmp3uXJ = this._lc('cD4iLhdLw', {parent:component,parentTop:flkModal,props:{value:component.record.content,required:true},attrs:{name:`${(`content`).toInputName()}`,label:'Documentation content'},state:'stu1r6B'});
ec('div');
let elO1W_o = eo('div',null,null,`class`,`m-t-1 text-center`);
let el0kYnj = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'full'},state:'stu1r6B'});
}let cndS3pK = component.confirmDelete;
this.setState('st4ib1M', cndS3pK);
if (cndS3pK) { 
let cmpflgU = this._lc('c51CAeJnf', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st4ib1M'});
}
                    this.isReadyToGo();
                }
        });