_Component({
                selector: 'project-modules-page',
                c: 'ProjectModulesPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {cFHtvjbgR:'project-layout',cT3hEZK95:'flk-dropdown-list',cSWsETN41:'flk-modal',cMWeVIIsq:'flk-alert'},
                render: function (component) {
                    let cmpjIEJ = this._lc('cFHtvjbgR', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndLZKX = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('stR9NpM', cndLZKX);
if (cndLZKX) { 
let el4AoPD = eo('button','v25f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let eltH_Ri = eo('i','Esof',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Module`);
ec('button');
}let elLWtpA = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Modules
        (${ component.project.modules.length })`);
ec('h1');
let elOvFeI = eo('table',null,null,`class`,`table table-striped buttoned`);
let elQNJb7 = eo('thead');
let eln6tlE = eo('tr');
let eltZ2fP = eo('th');
text(`Name`);
ec('th');
let elY4vqR = eo('th');
text(`Parent`);
ec('th');
let cnd0cMY = component.project.isHigherAuthority;
this.setState('stmFFvl', cnd0cMY);
if (cnd0cMY) { 
let elhCw69 = eo('th','IF5f');
text(`Control`);
ec('th');
}ec('tr');
ec('thead');
let elwAKC2 = eo('tbody');
let cndMHZ4 = Is.empty(component.project.modules);
this.setState('st5A7Sj', cndMHZ4);
let cndGxeb = !(cndMHZ4);
this.setState('stpAtCA', cndGxeb);
if (cndMHZ4) { 
let elcVQEn = eo('tr','4hqf');
let eltUq2h = eo('td','beUf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No Modules Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.modules) {
let record = component.project.modules[index]; 
 let ii2FhQ = '8KK_0SZ' + index;
let el4h2Is = eo('tr','JWmp18f5uzkz' + index+ii2FhQ);
let elTHYc0 = eo('td','zkZff'+ii2FhQ);
text(record.name);
ec('td');
let elorlkS = eo('td','klWff'+ii2FhQ);
text(record.parent.name || 'N/a');
ec('td');
let cnd1N8B = component.project.isHigherAuthority || component.project.isTeamLeader;
this.setState('st8UWi0', cnd1N8B);
if (cnd1N8B) { 
let elu_xUE = eo('td','O_off'+ii2FhQ);
let elEdSsr = eo('button','45Hff'+ii2FhQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elkR8a4 = eo('i','X2dff'+ii2FhQ,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elEdSsr;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Module')}`});
        ;
                    }, 20);                
                let eln2Qlw = eo('button','j1off'+ii2FhQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elD6XJe = eo('i','q7Cff'+ii2FhQ,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eln2Qlw;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Module')}`});
        ;
                    }, 20);                
                ec('td');
}ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndsp3L = component.modalIsOpened;
this.setState('stY4G0G', cndsp3L);
if (cndsp3L) { 
component.modal = this._lc('cSWsETN41', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elX34GU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elX34GU.formHandler) {
                    window.cfrmdlr = elX34GU.formHandler = new FormHandler(elX34GU, component);
                } else {
                    window.cfrmdlr = elX34GU.formHandler;
                }
            let elaAbiw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elaAbiw.value = fval(component.project.id);
let elMVrfD = eo('div',null,null,`class`,`form-group`);
elMVrfD.cls = {'group-error': !!elX34GU.formHandler.getError(`name`) };

            for (let className in elMVrfD.cls) {
                elMVrfD.classList.toggle(className, elMVrfD.cls[className]);
            }  
            let elx7s76 = eo('label',null,null,`for`,`name`);
text(trans('Module Name'));
let ela5gTo = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3RT7P = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elX34GU.formHandler.addError(`name`, 'required', trans('validation.required'));}return elX34GU.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Module Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el3RT7P.value = fval(component.record.name);
let cndVD7u = elX34GU.formHandler.getError(`name`);
this.setState('stzAWcz', cndVD7u);
if (cndVD7u) { 
let elbXwiC = eo('div','vFef',null,`class`,`alert alert-danger`);
text(elX34GU.formHandler.getError(`name`));
ec('div');
}ec('div');
let cmpm0RC = this._lc('cT3hEZK95', {parent:component,parentTop:flkModal,props:{none:true,value:Object.get(component.record.parent, 'id', ''),except:component.record.id,items:component.project.modules},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent Module'},state:'stY4G0G'});
let elnlKOb = eo('div',null,null,`class`,`m-t-1 text-center`);
let eljvGMv = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stY4G0G'});
}let cndE9U7 = component.confirmDelete;
this.setState('stBzjXE', cndE9U7);
if (cndE9U7) { 
let cmpIkoC = this._lc('cMWeVIIsq', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stBzjXE'});
}
                    this.isReadyToGo();
                }
        });