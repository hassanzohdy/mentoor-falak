_Component({
                selector: 'project-user-story-form-page',
                c: 'ProjectUserStoryFormPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','goBack','submit','record','priorities','onUserStoryTypeChange','types','hasParent','parentType','loadParents','loadSprints','playersList','projectMembers','colors','isValidForm','isSending'],
                children: {cNfyOonKT:'flk-dropdown-list',c5xdFki9y:'flk-dropdown-list',ch_rFosxz:'flk-dropdown-list',cXg9qwGnd:'flk-dropdown-list',cTMCJj6LH:'flk-dropdown-list',ctQZhxiVh:'flk-dropdown-list',cYHYN49h1:'project-layout'},
                render: function (component) {
                    let cmpVfuV = this._lc('cYHYN49h1', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elWROeZ = eo('div',null,null,`class`,`row`);
let elZ2_DS = eo('div',null,null,`class`,`col-12`);
let elb4dw1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goBack()}]},`class`,`float-right btn btn-purple bold`);
text(`Back To The Board`);
ec('button');
ec('div');
let elMJBJt = eo('div',null,null,`class`,`col-sm-6`);
let elXPqXV = eo('h1',null,null,`class`,`font-weight-light m-b-2`);
text(`What is a User Story?`);
ec('h1');
text(`User stories are short, simple descriptions of a feature told from the perspective of the person who desires
            the new capability, usually a user or customer of the system. They typically follow a simple template:`);
let ellRZ87 = eo('div',null,null,`class`,`m-y-1`);
let el8I4Cp = eo('div');
text(`As a`);
let elvlOt7 = eo('strong',null,null,`class`,`ml-1`);
text(`[ type of user ]`);
ec('strong');
text(`,`);
ec('div');
let eliW23L = eo('div');
text(`I want`);
let eluPA9q = eo('strong',null,null,`class`,`ml-1`);
text(`[ some goal ]`);
ec('strong');
text(`,`);
ec('div');
let eloOgXI = eo('div');
text(`So that`);
let elUnnjM = eo('strong',null,null,`class`,`ml-1`);
text(`[ do something ]`);
ec('strong');
text(`,`);
ec('div');
ec('div');
let elUboIy = eo('p');
text(`A user story is a tool used in Agile software development to capture a description of a software
                feature from an end-user perspective. The user story describes the type of user, what they want
                and why. A user story helps to create a simplified description of a requirement.`);
ec('p');
let elYYUHb = eo('h3',null,null,`class`,`font-weight-light`);
text(`Types Of User Stories`);
ec('h3');
let elPQKQb = eo('ul',null,null,`class`,`p-0`);
let elGlfkL = eo('li');
let eleY3HW = eo('strong');
text(`Stories`);
ec('strong');
text(`: ” are short requirements or requests written from the perspective of an
                    end user.`);
ec('li');
let elnVmZa = eo('li');
let elnXX8F = eo('strong');
text(`Epics`);
ec('strong');
text(`: are large bodies of work that can be broken down into a number of smaller
                    tasks (called stories).`);
ec('li');
let elNXEWS = eo('li');
let elAU8ge = eo('strong');
text(`Initiatives`);
ec('strong');
text(`: are collections of epics that drive toward a common goal`);
ec('li');
ec('ul');
ec('div');
let elviAwb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`col`);

                if (! elviAwb.formHandler) {
                    window.cfrmdlr = elviAwb.formHandler = new FormHandler(elviAwb, component);
                } else {
                    window.cfrmdlr = elviAwb.formHandler;
                }
            let elUMvI5 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.project, 'id', this.value);}]},`value`,`${fval(Object.get(component.project, 'id', ''))}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elUMvI5.value = fval(Object.get(component.project, 'id', ''));
let elmgFeX = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elviAwb.formHandler.getError(`title`) })}`);
let elWFb0f = eo('label',null,null,`for`,`title`);
text(trans('User story'));
let elReZLQ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ellZEjC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviAwb.formHandler.addError(`title`, 'required', trans('validation.required'));}return elviAwb.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`User story`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
ellZEjC.value = fval(component.record.title);
let cndFXpt = elviAwb.formHandler.getError(`title`);
this.setState('stcfOKW', cndFXpt);
if (cndFXpt) { 
let elzq_ZJ = eo('div','7Brf',null,`class`,`alert alert-danger`);
text(elviAwb.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpUxVY = this._lc('cNfyOonKT', {parent:component,parentTop:projectLayout,props:{value:component.record.priority,items:component.priorities,required:true},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',class:'m-b-1'}});
let cmp8DwP = this._lc('c5xdFki9y', {parent:component,parentTop:projectLayout,props:{value:component.record.type,items:component.types,required:true},events:{onselect:function(e) {let $el = this; component.onUserStoryTypeChange(e)}},attrs:{name:`${(`type`).toInputName()}`,label:'Type',class:'m-b-1'}});
let cndWHeG = component.hasParent && component.parentType == 'epic';
this.setState('st5HOdK', cndWHeG);
if (cndWHeG) { 
let cmplkKQ = this._lc('ch_rFosxz', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Epic)'},state:'st5HOdK'});
}let cnda0_n = component.hasParent && component.parentType == 'initiative';
this.setState('stMtF5a', cnda0_n);
if (cnda0_n) { 
let cmpuoSC = this._lc('cXg9qwGnd', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Initiative)'},state:'stMtF5a'});
}let cmpyngF = this._lc('cTMCJj6LH', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
let cmpuaPt = this._lc('ctQZhxiVh', {parent:component,parentTop:projectLayout,props:{value:component.record.who,items:component.playersList,required:true},attrs:{name:`${(`who`).toInputName()}`,label:'As a',class:'m-b-1'}});
let elhXu_j = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elviAwb.formHandler.getError(`what`) })}`);
let elFxhGm = eo('label',null,null,`for`,`what`);
text(trans('I Want to'));
let elkUrTi = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxjhWh = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.what = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviAwb.formHandler.addError(`what`, 'required', trans('validation.required'));}return elviAwb.formHandler.removeError(`what`);}]},`value`,`${fval(component.record.what)}`,`name`,`${(`what`).toInputName()}`,`placeholder`,`${trans(`I Want to`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`what`);
elxjhWh.value = fval(component.record.what);
ec('textarea');
let cndiHMU = elviAwb.formHandler.getError(`what`);
this.setState('stvBI7j', cndiHMU);
if (cndiHMU) { 
let el891sI = eo('div','fQdf',null,`class`,`alert alert-danger`);
text(elviAwb.formHandler.getError(`what`));
ec('div');
}ec('div');
let elnrpBd = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elviAwb.formHandler.getError(`why`) })}`);
let elO4e3q = eo('label',null,null,`for`,`why`);
text(trans('So that'));
let elCOTpp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDJdbg = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.why = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviAwb.formHandler.addError(`why`, 'required', trans('validation.required'));}return elviAwb.formHandler.removeError(`why`);}]},`value`,`${fval(component.record.why)}`,`name`,`${(`why`).toInputName()}`,`placeholder`,`${trans(`So that`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`why`);
elDJdbg.value = fval(component.record.why);
ec('textarea');
let cndbV7v = elviAwb.formHandler.getError(`why`);
this.setState('stKqqv9', cndbV7v);
if (cndbV7v) { 
let eldHpwb = eo('div','2MHf',null,`class`,`alert alert-danger`);
text(elviAwb.formHandler.getError(`why`));
ec('div');
}ec('div');
let elaUkgH = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elviAwb.formHandler.getError(`scenario`) })}`);
let elIH4Rm = eo('label',null,null,`for`,`scenario`);
text(trans('Scenario (Acceptance Criteria)'));
let eloGGrh = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eleMsxy = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.scenario = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviAwb.formHandler.addError(`scenario`, 'required', trans('validation.required'));}else if (value && value.length > 500) {return elviAwb.formHandler.addError(`scenario`, 'maxlength', trans('validation.maxLength', 500));}return elviAwb.formHandler.removeError(`scenario`);}]},`value`,`${fval(component.record.scenario)}`,`name`,`${(`scenario`).toInputName()}`,`placeholder`,`${trans(`Scenario (Acceptance Criteria)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`scenario`);
eleMsxy.value = fval(component.record.scenario);
ec('textarea');
let cnd_O5R = elviAwb.formHandler.getError(`scenario`);
this.setState('stKdVP3', cnd_O5R);
if (cnd_O5R) { 
let eluGzt3 = eo('div','IBHf',null,`class`,`alert alert-danger`);
text(elviAwb.formHandler.getError(`scenario`));
ec('div');
}ec('div');
let elXR81S = eo('div',null,null,`class`,`colors row`);
let el1YOG6 = eo('div',null,null,`class`,`col-12 bold m-b-1`);
text(`Sticky Note Color`);
ec('div');
let el6tvIG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.color = this.value;}]},`value`,`${fval(component.record.color)}`,`name`,`${(`color`).toInputName()}`,`type`,`hidden`);
el6tvIG.value = fval(component.record.color);
for (let i in component.colors) {
let color = component.colors[i]; 
 let iiRxoQ = 'Z5GBUch' + i;
let eldQ1Mi = eo('div','hwMRFhtDQb6f' + i+iiRxoQ,null,`class`,`col m-b-1`);
let elIC0Ny = eo('button','Wp2ff'+iiRxoQ,null, eventListeners, {onclick:[function(e) {var $el = this;component.record.color = color;}]},`class`,`btn btn-color ${ color }-note ${cls({selected: color == component.record.color})}`,`type`,`button`);
ec('button');
ec('div');
}
ec('div');
let el5ENw8 = eo('div',null,null,`class`,`m-t-1 text-right`);
let el5o5f6 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-info bold`);
text(`Confirm`);
ec('button');
ec('div');
ec('form');
ec('div');
}});

                    this.isReadyToGo();
                }
        });