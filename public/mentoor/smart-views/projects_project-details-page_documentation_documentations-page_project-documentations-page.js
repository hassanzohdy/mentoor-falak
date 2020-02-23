_Component({
                selector: 'project-documentations-page',
                c: 'ProjectDocumentationsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cNbruqQNR:'project-layout',caBOAatvT:'markdown-input',cOpM_Z1Qu:'flk-modal',cjCDUE79C:'flk-alert'},
                render: function (component) {
                    let cmpv5jV = this._lc('cNbruqQNR', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elC3kya = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el4q5TV = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Documentation`);
ec('button');
let elQPObA = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Documentations
        (${ component.project.documentations.length })`);
ec('h1');
let elVnNLG = eo('table',null,null,`class`,`table table-striped buttoned`);
let el4bCMH = eo('thead');
let elewrL_ = eo('tr');
let elrF5BX = eo('th');
text(`Title`);
ec('th');
let elcRiGg = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elVUDUO = eo('tbody');
let cndrO0a = Is.empty(component.project.documentations);
this.setState('stSdZ_O', cndrO0a);
let cndwi4j = !(cndrO0a);
this.setState('stKEeHa', cndwi4j);
if (cndrO0a) { 
let elua9sk = eo('tr','JXsf');
let el62WUK = eo('td','_Ttf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Documentations Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.documentations) {
let record = component.project.documentations[index]; 
 let iimAkB = record.id+ index;
let elBO67m = eo('tr','fiFAHgYBfrxn' + index+iimAkB);
let eldkecJ = eo('td','UXpff'+iimAkB);
let elDqnV3 = eo('a','GUOff'+iimAkB,null,`href`,`${URLS.project(component.project, 'documentation', record)}`);
text(record.title);
ec('a');
ec('td');
let elhEwe9 = eo('td','9tZff'+iimAkB);
let el2Ws8c = eo('button','ey2ff'+iimAkB,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el_m64_ = eo('i','Fqkff'+iimAkB,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el2Ws8c;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Documentation')}`});
        ;
                    }, 20);                
                let elofzCS = eo('button','nENff'+iimAkB,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elmOvLE = eo('i','zlBff'+iimAkB,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elofzCS;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Documentation')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndN46J = component.modalIsOpened;
this.setState('ste3QND', cndN46J);
if (cndN46J) { 
component.modal = this._lc('cOpM_Z1Qu', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elU5sk4 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elU5sk4.formHandler) {
                    window.cfrmdlr = elU5sk4.formHandler = new FormHandler(elU5sk4, component);
                } else {
                    window.cfrmdlr = elU5sk4.formHandler;
                }
            let elONHxC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elONHxC.value = fval(component.project.id);
let elO6xkX = eo('div',null,null,`class`,`form-group`);
elO6xkX.cls = {'group-error': !!elU5sk4.formHandler.getError(`title`) };

            for (let className in elO6xkX.cls) {
                elO6xkX.classList.toggle(className, elO6xkX.cls[className]);
            }  
            let elapvLf = eo('label',null,null,`for`,`title`);
text(trans('Documentation title'));
let elmMtKB = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6ADA4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elU5sk4.formHandler.addError(`title`, 'required', trans('validation.required'));}return elU5sk4.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Documentation title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el6ADA4.value = fval(component.record.title);
let cndfTc9 = elU5sk4.formHandler.getError(`title`);
this.setState('stMm1Zo', cndfTc9);
if (cndfTc9) { 
let elnIWtR = eo('div','XmVf',null,`class`,`alert alert-danger`);
text(elU5sk4.formHandler.getError(`title`));
ec('div');
}ec('div');
let elBOmVW = eo('div',null,null,`class`,`m-t-1`);
let cmpkLM4 = this._lc('caBOAatvT', {parent:component,parentTop:flkModal,props:{value:component.record.content,required:true},attrs:{name:`${(`content`).toInputName()}`,label:'Documentation content'},state:'ste3QND'});
ec('div');
let elVAfE3 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elop3IR = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'full'},state:'ste3QND'});
}let cndWqlF = component.confirmDelete;
this.setState('stBwK9X', cndWqlF);
if (cndWqlF) { 
let cmpjxfV = this._lc('cjCDUE79C', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stBwK9X'});
}
                    this.isReadyToGo();
                }
        });