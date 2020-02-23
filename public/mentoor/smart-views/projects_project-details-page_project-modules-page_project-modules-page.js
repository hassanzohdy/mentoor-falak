_Component({
                selector: 'project-modules-page',
                c: 'ProjectModulesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cFvoYMfAb:'project-layout',cpoQ_t1wj:'flk-dropdown-list',clPpVEA19:'flk-modal',cEiu0XifJ:'flk-alert'},
                render: function (component) {
                    let cmpEh1S = this._lc('cFvoYMfAb', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd2zvU = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('stwu1b3', cnd2zvU);
if (cnd2zvU) { 
let el1feZE = eo('button','YBuf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eljGGWY = eo('i','WBsf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Module`);
ec('button');
}let elI8mFn = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Modules
        (${ component.project.modules.length })`);
ec('h1');
let elugUGS = eo('table',null,null,`class`,`table table-striped buttoned`);
let el1GcfF = eo('thead');
let elfFCbv = eo('tr');
let elp20Dd = eo('th');
text(`Name`);
ec('th');
let ele5G7l = eo('th');
text(`Parent`);
ec('th');
let cndmuLp = component.project.isHigherAuthority;
this.setState('stdrMlI', cndmuLp);
if (cndmuLp) { 
let el68QkC = eo('th','hYff');
text(`Control`);
ec('th');
}ec('tr');
ec('thead');
let elD7Jt7 = eo('tbody');
let cndY6xZ = Is.empty(component.project.modules);
this.setState('stjvKaR', cndY6xZ);
let cndcnh_ = !(cndY6xZ);
this.setState('stNezyZ', cndcnh_);
if (cndY6xZ) { 
let el1lQMy = eo('tr','qNrf');
let el6Ld5_ = eo('td','tH0f',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Modules Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.modules) {
let record = component.project.modules[index]; 
 let iihxl_ = 'EooWLLa' + index;
let elCEkSQ = eo('tr','hQdsi4lhqVcz' + index+iihxl_);
let eleHzVh = eo('td','z57ff'+iihxl_);
text(record.name);
ec('td');
let elBckd8 = eo('td','39Jff'+iihxl_);
text(record.parent.name || 'N/a');
ec('td');
let cndwvEB = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('stcTbYt', cndwvEB);
if (cndwvEB) { 
let elbIpPI = eo('td','5Ymff'+iihxl_);
let elv3eQH = eo('button','G91ff'+iihxl_,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elXJPLn = eo('i','D6kff'+iihxl_,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elv3eQH;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Module')}`});
        ;
                    }, 20);                
                let el0Gh9A = eo('button','9fNff'+iihxl_,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elNhOSf = eo('i','XlNff'+iihxl_,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el0Gh9A;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Module')}`});
        ;
                    }, 20);                
                ec('td');
}ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndAC1X = component.modalIsOpened;
this.setState('stXdy6Q', cndAC1X);
if (cndAC1X) { 
component.modal = this._lc('clPpVEA19', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el7lEzB = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7lEzB.formHandler) {
                    window.cfrmdlr = el7lEzB.formHandler = new FormHandler(el7lEzB, component);
                } else {
                    window.cfrmdlr = el7lEzB.formHandler;
                }
            let elFhslN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elFhslN.value = fval(component.project.id);
let eloq1er = eo('div',null,null,`class`,`form-group`);
eloq1er.cls = {'group-error': !!el7lEzB.formHandler.getError(`name`) };

            for (let className in eloq1er.cls) {
                eloq1er.classList.toggle(className, eloq1er.cls[className]);
            }  
            let elkOZ9Q = eo('label',null,null,`for`,`name`);
text(trans('Module Name'));
let elUCf8P = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elvGnq6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7lEzB.formHandler.addError(`name`, 'required', trans('validation.required'));}return el7lEzB.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Module Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elvGnq6.value = fval(component.record.name);
let cndpJzS = el7lEzB.formHandler.getError(`name`);
this.setState('stGZORy', cndpJzS);
if (cndpJzS) { 
let elrEAUl = eo('div','18Tf',null,`class`,`alert alert-danger`);
text(el7lEzB.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpXU0O = this._lc('cpoQ_t1wj', {parent:component,parentTop:flkModal,props:{none:true,value:Object.get(component.record.parent, 'id', ''),except:component.record.id,items:component.project.modules},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Module'},state:'stXdy6Q'});
let el6rsVp = eo('div',null,null,`class`,`m-t-1 text-center`);
let ellwKE8 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stXdy6Q'});
}let cndfU37 = component.confirmDelete;
this.setState('stVkKZg', cndfU37);
if (cndfU37) { 
let cmp14EV = this._lc('cEiu0XifJ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stVkKZg'});
}
                    this.isReadyToGo();
                }
        });