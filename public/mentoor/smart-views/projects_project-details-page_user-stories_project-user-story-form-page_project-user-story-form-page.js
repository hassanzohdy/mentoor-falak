_Component({
                selector: 'project-user-story-form-page',
                c: 'ProjectUserStoryFormPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','goBack','submit','record','priorities','onUserStoryTypeChange','types','hasParent','parentType','loadParents','loadSprints','playersList','projectMembers','colors','isValidForm','isSending'],
                children: {cnktmhUd2:'flk-dropdown-list',cK4gGzFWH:'flk-dropdown-list',c_fbc2wQE:'flk-dropdown-list',cyDmQ9lXa:'flk-dropdown-list',cy5HuBCdc:'flk-dropdown-list',cLLXdo5Vo:'flk-dropdown-list',caeieKj5Z:'project-layout'},
                render: function (component) {
                    let cmp3upA = this._lc('caeieKj5Z', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el2ZDO4 = eo('div',null,null,`class`,`row`);
let elDijh6 = eo('div',null,null,`class`,`col-12`);
let el7jmYt = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goBack()}]},`class`,`float-right btn btn-purple bold`);
text(`Back To The Board`);
ec('button');
ec('div');
let el9QkzW = eo('div',null,null,`class`,`col-sm-6`);
let el03agM = eo('h1',null,null,`class`,`font-weight-light m-b-2`);
text(`What is a User Story?`);
ec('h1');
text(`User stories are short, simple descriptions of a feature told from the perspective of the person who desires
            the new capability, usually a user or customer of the system. They typically follow a simple template:`);
let elbtcps = eo('div',null,null,`class`,`m-y-1`);
let eln1qJW = eo('div');
text(`As a`);
let el4221a = eo('strong',null,null,`class`,`ml-1`);
text(`[ type of user ]`);
ec('strong');
text(`,`);
ec('div');
let elQ9Xj1 = eo('div');
text(`I want`);
let elGumdB = eo('strong',null,null,`class`,`ml-1`);
text(`[ some goal ]`);
ec('strong');
text(`,`);
ec('div');
let el8at49 = eo('div');
text(`So that`);
let elwW4D7 = eo('strong',null,null,`class`,`ml-1`);
text(`[ do something ]`);
ec('strong');
text(`,`);
ec('div');
ec('div');
let elt9wk6 = eo('p');
text(`A user story is a tool used in Agile software development to capture a description of a software
                feature from an end-user perspective. The user story describes the type of user, what they want
                and why. A user story helps to create a simplified description of a requirement.`);
ec('p');
let elFJuUs = eo('h3',null,null,`class`,`font-weight-light`);
text(`Types Of User Stories`);
ec('h3');
let el7cN5b = eo('ul',null,null,`class`,`p-0`);
let elT57a5 = eo('li');
let elOPdMv = eo('strong');
text(`Stories`);
ec('strong');
text(`: ” are short requirements or requests written from the perspective of an
                    end user.`);
ec('li');
let elX0y07 = eo('li');
let el7E0ve = eo('strong');
text(`Epics`);
ec('strong');
text(`: are large bodies of work that can be broken down into a number of smaller
                    tasks (called stories).`);
ec('li');
let ely7mlg = eo('li');
let elfGLOL = eo('strong');
text(`Initiatives`);
ec('strong');
text(`: are collections of epics that drive toward a common goal`);
ec('li');
ec('ul');
ec('div');
let elah_7Q = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`col`);

                if (! elah_7Q.formHandler) {
                    window.cfrmdlr = elah_7Q.formHandler = new FormHandler(elah_7Q, component);
                } else {
                    window.cfrmdlr = elah_7Q.formHandler;
                }
            let el88lPl = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.project, 'id', this.value);}]},`value`,`${fval(Object.get(component.project, 'id', ''))}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el88lPl.value = fval(Object.get(component.project, 'id', ''));
let elrNqMs = eo('div',null,null,`class`,`form-group`);
elrNqMs.cls = {'group-error': !!elah_7Q.formHandler.getError(`title`) };

            for (let className in elrNqMs.cls) {
                elrNqMs.classList.toggle(className, elrNqMs.cls[className]);
            }  
            let elY5hm2 = eo('label',null,null,`for`,`title`);
text(trans('User story'));
let elLasip = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmf3EB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elah_7Q.formHandler.addError(`title`, 'required', trans('validation.required'));}return elah_7Q.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`User story`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elmf3EB.value = fval(component.record.title);
let cndHZM5 = elah_7Q.formHandler.getError(`title`);
this.setState('stNgnRh', cndHZM5);
if (cndHZM5) { 
let elV74Lb = eo('div','q_If',null,`class`,`alert alert-danger`);
text(elah_7Q.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmp3iXW = this._lc('cnktmhUd2', {parent:component,parentTop:projectLayout,props:{value:component.record.priority,items:component.priorities,required:true},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',class:'m-b-1'}});
let cmpVtVV = this._lc('cK4gGzFWH', {parent:component,parentTop:projectLayout,props:{value:component.record.type,items:component.types,required:true},events:{onselect:function(e) {let $el = this; component.onUserStoryTypeChange(e)}},attrs:{name:`${(`type`).toInputName()}`,label:'Type',class:'m-b-1'}});
let cndf4Qc = component.hasParent && component.parentType == 'epic';
this.setState('stFcQzK', cndf4Qc);
if (cndf4Qc) { 
let cmpnwGy = this._lc('c_fbc2wQE', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Epic)'},state:'stFcQzK'});
}let cndTM_H = component.hasParent && component.parentType == 'initiative';
this.setState('stKamRo', cndTM_H);
if (cndTM_H) { 
let cmp7phr = this._lc('cyDmQ9lXa', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Initiative)'},state:'stKamRo'});
}let cmph9f2 = this._lc('cy5HuBCdc', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
let cmpzaIf = this._lc('cLLXdo5Vo', {parent:component,parentTop:projectLayout,props:{value:component.record.who,items:component.playersList,required:true},attrs:{name:`${(`who`).toInputName()}`,label:'As a',class:'m-b-1'}});
let elJdYqk = eo('div',null,null,`class`,`form-group`);
elJdYqk.cls = {'group-error': !!elah_7Q.formHandler.getError(`what`) };

            for (let className in elJdYqk.cls) {
                elJdYqk.classList.toggle(className, elJdYqk.cls[className]);
            }  
            let elCna1m = eo('label',null,null,`for`,`what`);
text(trans('I Want to'));
let el1Wrsg = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el0e9Yf = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.what = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elah_7Q.formHandler.addError(`what`, 'required', trans('validation.required'));}return elah_7Q.formHandler.removeError(`what`);}]},`value`,`${fval(component.record.what)}`,`name`,`${(`what`).toInputName()}`,`placeholder`,`${trans(`I Want to`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`what`);
el0e9Yf.value = fval(component.record.what);
ec('textarea');
let cndtuGo = elah_7Q.formHandler.getError(`what`);
this.setState('st4TY4_', cndtuGo);
if (cndtuGo) { 
let eluk5oL = eo('div','ui2f',null,`class`,`alert alert-danger`);
text(elah_7Q.formHandler.getError(`what`));
ec('div');
}ec('div');
let elpQlZO = eo('div',null,null,`class`,`form-group`);
elpQlZO.cls = {'group-error': !!elah_7Q.formHandler.getError(`why`) };

            for (let className in elpQlZO.cls) {
                elpQlZO.classList.toggle(className, elpQlZO.cls[className]);
            }  
            let el3gNB3 = eo('label',null,null,`for`,`why`);
text(trans('So that'));
let elfsj37 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el_GPMN = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.why = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elah_7Q.formHandler.addError(`why`, 'required', trans('validation.required'));}return elah_7Q.formHandler.removeError(`why`);}]},`value`,`${fval(component.record.why)}`,`name`,`${(`why`).toInputName()}`,`placeholder`,`${trans(`So that`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`why`);
el_GPMN.value = fval(component.record.why);
ec('textarea');
let cnd3upn = elah_7Q.formHandler.getError(`why`);
this.setState('stLRBGl', cnd3upn);
if (cnd3upn) { 
let elyqdEe = eo('div','dFxf',null,`class`,`alert alert-danger`);
text(elah_7Q.formHandler.getError(`why`));
ec('div');
}ec('div');
let elzft7Q = eo('div',null,null,`class`,`form-group`);
elzft7Q.cls = {'group-error': !!elah_7Q.formHandler.getError(`scenario`) };

            for (let className in elzft7Q.cls) {
                elzft7Q.classList.toggle(className, elzft7Q.cls[className]);
            }  
            let el_men6 = eo('label',null,null,`for`,`scenario`);
text(trans('Scenario (Acceptance Criteria)'));
let elJxiLp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDaXv1 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.scenario = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elah_7Q.formHandler.addError(`scenario`, 'required', trans('validation.required'));}else if (value && value.length > 500) {return elah_7Q.formHandler.addError(`scenario`, 'maxlength', trans('validation.maxLength', 500));}return elah_7Q.formHandler.removeError(`scenario`);}]},`value`,`${fval(component.record.scenario)}`,`name`,`${(`scenario`).toInputName()}`,`placeholder`,`${trans(`Scenario (Acceptance Criteria)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`scenario`);
elDaXv1.value = fval(component.record.scenario);
ec('textarea');
let cndmZPC = elah_7Q.formHandler.getError(`scenario`);
this.setState('stIdLv5', cndmZPC);
if (cndmZPC) { 
let elwhv7Q = eo('div','2fHf',null,`class`,`alert alert-danger`);
text(elah_7Q.formHandler.getError(`scenario`));
ec('div');
}ec('div');
let elBQ62t = eo('div',null,null,`class`,`colors row`);
let elnshib = eo('div',null,null,`class`,`col-12 bold m-b-1`);
text(`Sticky Note Color`);
ec('div');
let elzp96M = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.color = this.value;}]},`value`,`${fval(component.record.color)}`,`name`,`${(`color`).toInputName()}`,`type`,`hidden`);
elzp96M.value = fval(component.record.color);
for (let i in component.colors) {
let color = component.colors[i]; 
 let iiGsKR = 'LouV4mj' + i;
let elIjUi4 = eo('div','zF3sATqgIwFE' + i+iiGsKR,null,`class`,`col m-b-1`);
let elQ_Pnp = eo('button','bpqff'+iiGsKR,null, eventListeners, {onclick:[function(e) {var $el = this;component.record.color = color;}]},`type`,`button`,`class`,`btn btn-color ${ color }-note`);
elQ_Pnp.cls = {selected: color == component.record.color};

            for (let className in elQ_Pnp.cls) {
                elQ_Pnp.classList.toggle(className, elQ_Pnp.cls[className]);
            }  
            ec('button');
ec('div');
}
ec('div');
let elSNj_c = eo('div',null,null,`class`,`m-t-1 text-right`);
let el634WX = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-info bold`);
text(`Confirm`);
ec('button');
ec('div');
ec('form');
ec('div');
}});

                    this.isReadyToGo();
                }
        });