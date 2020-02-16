_Component({
                selector: 'project-modules-page',
                c: 'ProjectModulesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {ckTvYvK20:'project-layout',cQkyLF7Yg:'flk-dropdown-list',cp0vRfN_k:'flk-modal',cPCOxjje3:'flk-alert'},
                render: function (component) {
                    let cmp_39k = this._lc('ckTvYvK20', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndsGIF = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('stwoAYo', cndsGIF);
if (cndsGIF) { 
let elp6ViH = eo('button','akjf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eloBE5m = eo('i','0Akf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Module`);
ec('button');
}let elT_R48 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Modules
        (${ component.project.modules.length })`);
ec('h1');
let eldvPMk = eo('table',null,null,`class`,`table table-striped buttoned`);
let elpYglN = eo('thead');
let el77arc = eo('tr');
let elofJJz = eo('th');
text(`Name`);
ec('th');
let elQ_Rsv = eo('th');
text(`Parent`);
ec('th');
let cndSldV = component.project.isHigherAuthority;
this.setState('stufZby', cndSldV);
if (cndSldV) { 
let elKsJPb = eo('th','FApf');
text(`Control`);
ec('th');
}ec('tr');
ec('thead');
let elj3yZ9 = eo('tbody');
let cndbNO7 = Is.empty(component.project.modules);
this.setState('stQLiN3', cndbNO7);
let cndOEKr = !(cndbNO7);
this.setState('stUW3Ns', cndOEKr);
if (cndbNO7) { 
let el0SqZg = eo('tr','kA_f');
let el7Ml8F = eo('td','SR9f',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Modules Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.modules) {
let record = component.project.modules[index]; 
 let ii9w1w = 'uAHM4NI' + index;
let elkKfj0 = eo('tr','kwqJLscnRmPb' + index+ii9w1w);
let elZRhcA = eo('td','Qldff'+ii9w1w);
text(record.name);
ec('td');
let elvHbE2 = eo('td','ZsXff'+ii9w1w);
text(record.parent.name || 'N/a');
ec('td');
let cndZjMq = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('stpOBR0', cndZjMq);
if (cndZjMq) { 
let el07uZt = eo('td','JTTff'+ii9w1w);
let elNf4ps = eo('button','MDXff'+ii9w1w,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elQIonN = eo('i','otnff'+ii9w1w,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elNf4ps;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Module')}`});
        ;
                    }, 20);                
                let elcI8qG = eo('button','Upeff'+ii9w1w,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elBuLYk = eo('i','fYbff'+ii9w1w,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elcI8qG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Module')}`});
        ;
                    }, 20);                
                ec('td');
}ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndkBUU = component.modalIsOpened;
this.setState('stjq8UI', cndkBUU);
if (cndkBUU) { 
component.modal = this._lc('cp0vRfN_k', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elxfExc = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elxfExc.formHandler) {
                    window.cfrmdlr = elxfExc.formHandler = new FormHandler(elxfExc, component);
                } else {
                    window.cfrmdlr = elxfExc.formHandler;
                }
            let elV3sbr = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elV3sbr.value = fval(component.project.id);
let elKPKqB = eo('div',null,null,`class`,`form-group`);
elKPKqB.cls = {'group-error': !!elxfExc.formHandler.getError(`name`) };

            for (let className in elKPKqB.cls) {
                elKPKqB.classList.toggle(className, elKPKqB.cls[className]);
            }  
            let elk4Pvf = eo('label',null,null,`for`,`name`);
text(trans('Module Name'));
let elEe72w = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQ7LRc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elxfExc.formHandler.addError(`name`, 'required', trans('validation.required'));}return elxfExc.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Module Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elQ7LRc.value = fval(component.record.name);
let cndWnd7 = elxfExc.formHandler.getError(`name`);
this.setState('stFEzyN', cndWnd7);
if (cndWnd7) { 
let elY3r0A = eo('div','y1Cf',null,`class`,`alert alert-danger`);
text(elxfExc.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpwMlt = this._lc('cQkyLF7Yg', {parent:component,parentTop:flkModal,props:{none:true,value:Object.get(component.record.parent, 'id', ''),except:component.record.id,items:component.project.modules},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Module'},state:'stjq8UI'});
let elxKy6m = eo('div',null,null,`class`,`m-t-1 text-center`);
let elqbYFy = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stjq8UI'});
}let cndb0D_ = component.confirmDelete;
this.setState('stb9CXh', cndb0D_);
if (cndb0D_) { 
let cmpGtQg = this._lc('cPCOxjje3', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stb9CXh'});
}
                    this.isReadyToGo();
                }
        });