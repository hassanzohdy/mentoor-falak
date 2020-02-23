_Component({
                selector: 'project-project-discussions-page',
                c: 'ProjectProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {ctJ_mgRI2:'project-layout',cXf6167uT:'flk-modal',cVbslYkIa:'flk-alert'},
                render: function (component) {
                    let cmpj270 = this._lc('ctJ_mgRI2', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let ellmyIR = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let el2DFCf = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Project-discussion`);
ec('button');
let elgY9m2 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Project-discussions
        (${ component.project.discussions.length })`);
ec('h1');
let elKCWaX = eo('table',null,null,`class`,`table table-striped buttoned`);
let elvx0XE = eo('thead');
let el78qJ8 = eo('tr');
let elm4Xgp = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elMRPjM = eo('tbody');
let cndE414 = Is.empty(component.project.discussions);
this.setState('stDq1Gg', cndE414);
let cndcaTg = !(cndE414);
this.setState('stVXxRX', cndcaTg);
if (cndE414) { 
let elmcvge = eo('tr','KIqf');
let elwC7xX = eo('td','WDJf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Project-discussions Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.projectDiscussions) {
let record = component.project.projectDiscussions[index]; 
 let iisvBZ = '1EV_P9F' + index;
let elPfvtP = eo('tr','UVLe5PBqsUIQ' + index+iisvBZ);
let eltDIxy = eo('td','OmPff'+iisvBZ);
let elB04jF = eo('button','8XXff'+iisvBZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elrCOZc = eo('i','NS2ff'+iisvBZ,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elB04jF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Project-discussion')}`});
        ;
                    }, 20);                
                let elQoXkP = eo('button','ariff'+iisvBZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el1QnIi = eo('i','GrFff'+iisvBZ,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elQoXkP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Project-discussion')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndrx_1 = component.modalIsOpened;
this.setState('stlkGR8', cndrx_1);
if (cndrx_1) { 
component.modal = this._lc('cXf6167uT', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let eljQxbf = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eljQxbf.formHandler) {
                    window.cfrmdlr = eljQxbf.formHandler = new FormHandler(eljQxbf, component);
                } else {
                    window.cfrmdlr = eljQxbf.formHandler;
                }
            let elPEoca = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elPEoca.value = fval(component.project.id);
let elng2kW = eo('div',null,null,`class`,`form-group`);
elng2kW.cls = {'group-error': !!eljQxbf.formHandler.getError(`name`) };

            for (let className in elng2kW.cls) {
                elng2kW.classList.toggle(className, elng2kW.cls[className]);
            }  
            let el2PwIn = eo('label',null,null,`for`,`name`);
text(trans('Project-discussion Name'));
let elkn5St = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elPOm4r = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljQxbf.formHandler.addError(`name`, 'required', trans('validation.required'));}return eljQxbf.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project-discussion Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elPOm4r.value = fval(component.record.name);
let cndBrEL = eljQxbf.formHandler.getError(`name`);
this.setState('st_En5k', cndBrEL);
if (cndBrEL) { 
let elqMdxf = eo('div','YFcf',null,`class`,`alert alert-danger`);
text(eljQxbf.formHandler.getError(`name`));
ec('div');
}ec('div');
let elTha3v = eo('div',null,null,`class`,`m-t-1 text-center`);
let el_H4UQ = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stlkGR8'});
}let cnd3sgJ = component.confirmDelete;
this.setState('stfOfkG', cnd3sgJ);
if (cnd3sgJ) { 
let cmpWGQP = this._lc('cVbslYkIa', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stfOfkG'});
}
                    this.isReadyToGo();
                }
        });