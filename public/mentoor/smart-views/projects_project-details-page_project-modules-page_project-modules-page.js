_Component({
                selector: 'project-modules-page',
                c: 'ProjectModulesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cavTONC9H:'project-layout',cppxfbzM3:'flk-dropdown-list',cHkR3MnNb:'flk-modal',c7PfgiiEg:'flk-alert'},
                render: function (component) {
                    let cmpfp89 = this._lc('cavTONC9H', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndu5FE = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('stFw5oR', cndu5FE);
if (cndu5FE) { 
let elVSUeh = eo('button','L28f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elmWcSe = eo('i','uSMf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Module`);
ec('button');
}let elwlclo = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Modules
        (${ component.project.modules.length })`);
ec('h1');
let elMqaRl = eo('table',null,null,`class`,`table table-striped buttoned`);
let elP1U4s = eo('thead');
let elffDjQ = eo('tr');
let elORzUa = eo('th');
text(`Name`);
ec('th');
let elxpSuK = eo('th');
text(`Parent`);
ec('th');
let cnd5ic5 = component.project.isHigherAuthority;
this.setState('ste6oem', cnd5ic5);
if (cnd5ic5) { 
let elp3w0Z = eo('th','Nljf');
text(`Control`);
ec('th');
}ec('tr');
ec('thead');
let elT2ZAq = eo('tbody');
let cndikHK = Is.empty(component.project.modules);
this.setState('st2xrCV', cndikHK);
let cndy8l8 = !(cndikHK);
this.setState('stjHzw2', cndy8l8);
if (cndikHK) { 
let elyesOV = eo('tr','gJOf');
let elTySpu = eo('td','HIjf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Modules Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.modules) {
let record = component.project.modules[index]; 
 let iiAGNt = '20R3SEJ' + index;
let elXAjwh = eo('tr','zxl3nuuVfWah' + index+iiAGNt);
let el98_uq = eo('td','xhrff'+iiAGNt);
text(record.name);
ec('td');
let elnunSU = eo('td','b1Zff'+iiAGNt);
text(record.parent.name || 'N/a');
ec('td');
let cnd11Pc = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('staizqu', cnd11Pc);
if (cnd11Pc) { 
let elw_Ush = eo('td','y7jff'+iiAGNt);
let elUUQ38 = eo('button','hyGff'+iiAGNt,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let el6pGKl = eo('i','ZE5ff'+iiAGNt,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elUUQ38;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Module')}`});
        ;
                    }, 20);                
                let elVi92_ = eo('button','6v9ff'+iiAGNt,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let el0NSu2 = eo('i','c3Rff'+iiAGNt,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elVi92_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Module')}`});
        ;
                    }, 20);                
                ec('td');
}ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndiqfy = component.modalIsOpened;
this.setState('sty1MBt', cndiqfy);
if (cndiqfy) { 
component.modal = this._lc('cHkR3MnNb', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elwX34Q = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elwX34Q.formHandler) {
                    window.cfrmdlr = elwX34Q.formHandler = new FormHandler(elwX34Q, component);
                } else {
                    window.cfrmdlr = elwX34Q.formHandler;
                }
            let elfdbJ5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elfdbJ5.value = fval(component.project.id);
let elGBRvP = eo('div',null,null,`class`,`form-group`);
elGBRvP.cls = {'group-error': !!elwX34Q.formHandler.getError(`name`) };

            for (let className in elGBRvP.cls) {
                elGBRvP.classList.toggle(className, elGBRvP.cls[className]);
            }  
            let el0S6QW = eo('label',null,null,`for`,`name`);
text(trans('Module Name'));
let el3yjKc = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHWLR4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwX34Q.formHandler.addError(`name`, 'required', trans('validation.required'));}return elwX34Q.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Module Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elHWLR4.value = fval(component.record.name);
let cndtvui = elwX34Q.formHandler.getError(`name`);
this.setState('st7mWrR', cndtvui);
if (cndtvui) { 
let elENpEF = eo('div','8Jcf',null,`class`,`alert alert-danger`);
text(elwX34Q.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpevQK = this._lc('cppxfbzM3', {parent:component,parentTop:flkModal,props:{none:true,value:Object.get(component.record.parent, 'id', ''),except:component.record.id,items:component.project.modules},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Module'},state:'sty1MBt'});
let elrEls3 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elDnkvn = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'sty1MBt'});
}let cndVRzS = component.confirmDelete;
this.setState('stRcKMJ', cndVRzS);
if (cndVRzS) { 
let cmphLcE = this._lc('c7PfgiiEg', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stRcKMJ'});
}
                    this.isReadyToGo();
                }
        });