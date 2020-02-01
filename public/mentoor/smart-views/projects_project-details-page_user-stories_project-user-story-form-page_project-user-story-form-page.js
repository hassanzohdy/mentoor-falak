_Component({
                selector: 'project-user-story-form-page',
                c: 'ProjectUserStoryFormPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','goBack','submit','record','priorities','onUserStoryTypeChange','types','hasParent','parentType','loadParents','loadSprints','playersList','projectMembers','colors','isValidForm','isSending'],
                children: {c9WT4JyCW:'flk-dropdown-list',cDEiUsIaW:'flk-dropdown-list',c1PLBIATW:'flk-dropdown-list',cqJhlgJq3:'flk-dropdown-list',c3IiVGlwj:'flk-dropdown-list',cIoVY7ubv:'flk-dropdown-list',cNVXD0Kbv:'project-layout'},
                render: function (component) {
                    let cmp5ZX0 = this._lc('cNVXD0Kbv', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elU3NBj = eo('div',null,null,`class`,`row`);
let elS6uhn = eo('div',null,null,`class`,`col-12`);
let eluhspN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goBack()}]},`class`,`float-right btn btn-purple bold`);
text(`Back To The Board`);
ec('button');
ec('div');
let elG8aaI = eo('div',null,null,`class`,`col-sm-6`);
let elDVjt7 = eo('h1',null,null,`class`,`font-weight-light m-b-2`);
text(`What is a User Story?`);
ec('h1');
text(`User stories are short, simple descriptions of a feature told from the perspective of the person who desires
            the new capability, usually a user or customer of the system. They typically follow a simple template:`);
let el4xI5q = eo('div',null,null,`class`,`m-y-1`);
let elZF03Y = eo('div');
text(`As a`);
let elE9ZTz = eo('strong',null,null,`class`,`ml-1`);
text(`[ type of user ]`);
ec('strong');
text(`,`);
ec('div');
let elnwzQn = eo('div');
text(`I want`);
let el7X8Py = eo('strong',null,null,`class`,`ml-1`);
text(`[ some goal ]`);
ec('strong');
text(`,`);
ec('div');
let elmQhTU = eo('div');
text(`So that`);
let el0kCJT = eo('strong',null,null,`class`,`ml-1`);
text(`[ do something ]`);
ec('strong');
text(`,`);
ec('div');
ec('div');
let eljqs25 = eo('p');
text(`A user story is a tool used in Agile software development to capture a description of a software
                feature from an end-user perspective. The user story describes the type of user, what they want
                and why. A user story helps to create a simplified description of a requirement.`);
ec('p');
let elteSvO = eo('h3',null,null,`class`,`font-weight-light`);
text(`Types Of User Stories`);
ec('h3');
let ellbDD9 = eo('ul',null,null,`class`,`p-0`);
let elqQneG = eo('li');
let elihzaT = eo('strong');
text(`Stories`);
ec('strong');
text(`: ” are short requirements or requests written from the perspective of an
                    end user.`);
ec('li');
let el8G7Jq = eo('li');
let elfCOtk = eo('strong');
text(`Epics`);
ec('strong');
text(`: are large bodies of work that can be broken down into a number of smaller
                    tasks (called stories).`);
ec('li');
let elCgocc = eo('li');
let el9wktA = eo('strong');
text(`Initiatives`);
ec('strong');
text(`: are collections of epics that drive toward a common goal`);
ec('li');
ec('ul');
ec('div');
let elY33HA = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`col`);

                if (! elY33HA.formHandler) {
                    window.cfrmdlr = elY33HA.formHandler = new FormHandler(elY33HA, component);
                } else {
                    window.cfrmdlr = elY33HA.formHandler;
                }
            let elkCH70 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.project, 'id', this.value);}]},`value`,`${fval(Object.get(component.project, 'id', ''))}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elkCH70.value = fval(Object.get(component.project, 'id', ''));
let elrjrNs = eo('div',null,null,`class`,`form-group`);
elrjrNs.cls = {'group-error': !!elY33HA.formHandler.getError(`title`) };

            for (let className in elrjrNs.cls) {
                elrjrNs.classList.toggle(className, elrjrNs.cls[className]);
            }  
            let elY14S6 = eo('label',null,null,`for`,`title`);
text(trans('User story'));
let elObnmo = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloZTbE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elY33HA.formHandler.addError(`title`, 'required', trans('validation.required'));}return elY33HA.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`User story`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eloZTbE.value = fval(component.record.title);
let cndt3Sv = elY33HA.formHandler.getError(`title`);
this.setState('stadw2X', cndt3Sv);
if (cndt3Sv) { 
let ela4zO0 = eo('div','Bf4f',null,`class`,`alert alert-danger`);
text(elY33HA.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpL6w6 = this._lc('c9WT4JyCW', {parent:component,parentTop:projectLayout,props:{value:component.record.priority,items:component.priorities,required:true},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',class:'m-b-1'}});
let cmp2XAJ = this._lc('cDEiUsIaW', {parent:component,parentTop:projectLayout,props:{value:component.record.type,items:component.types,required:true},events:{onselect:function(e) {let $el = this; component.onUserStoryTypeChange(e)}},attrs:{name:`${(`type`).toInputName()}`,label:'Type',class:'m-b-1'}});
let cndqkTu = component.hasParent && component.parentType == 'epic';
this.setState('stVBCDq', cndqkTu);
if (cndqkTu) { 
let cmpCq75 = this._lc('c1PLBIATW', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Epic)'},state:'stVBCDq'});
}let cndwZ_z = component.hasParent && component.parentType == 'initiative';
this.setState('stO71x6', cndwZ_z);
if (cndwZ_z) { 
let cmpiAhK = this._lc('cqJhlgJq3', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Initiative)'},state:'stO71x6'});
}let cmpEINO = this._lc('c3IiVGlwj', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
let cmp6Gk4 = this._lc('cIoVY7ubv', {parent:component,parentTop:projectLayout,props:{value:component.record.who,items:component.playersList,required:true},attrs:{name:`${(`who`).toInputName()}`,label:'As a',class:'m-b-1'}});
let elT3FV2 = eo('div',null,null,`class`,`form-group`);
elT3FV2.cls = {'group-error': !!elY33HA.formHandler.getError(`what`) };

            for (let className in elT3FV2.cls) {
                elT3FV2.classList.toggle(className, elT3FV2.cls[className]);
            }  
            let elLGN6Y = eo('label',null,null,`for`,`what`);
text(trans('I Want to'));
let elXysmE = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHFeeb = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.what = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elY33HA.formHandler.addError(`what`, 'required', trans('validation.required'));}return elY33HA.formHandler.removeError(`what`);}]},`value`,`${fval(component.record.what)}`,`name`,`${(`what`).toInputName()}`,`placeholder`,`${trans(`I Want to`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`what`);
elHFeeb.value = fval(component.record.what);
ec('textarea');
let cndQ9g9 = elY33HA.formHandler.getError(`what`);
this.setState('stbXBYg', cndQ9g9);
if (cndQ9g9) { 
let elChBkT = eo('div','j9Xf',null,`class`,`alert alert-danger`);
text(elY33HA.formHandler.getError(`what`));
ec('div');
}ec('div');
let eljBE9A = eo('div',null,null,`class`,`form-group`);
eljBE9A.cls = {'group-error': !!elY33HA.formHandler.getError(`why`) };

            for (let className in eljBE9A.cls) {
                eljBE9A.classList.toggle(className, eljBE9A.cls[className]);
            }  
            let ellLXP4 = eo('label',null,null,`for`,`why`);
text(trans('So that'));
let elWCOBT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elheDnz = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.why = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elY33HA.formHandler.addError(`why`, 'required', trans('validation.required'));}return elY33HA.formHandler.removeError(`why`);}]},`value`,`${fval(component.record.why)}`,`name`,`${(`why`).toInputName()}`,`placeholder`,`${trans(`So that`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`why`);
elheDnz.value = fval(component.record.why);
ec('textarea');
let cndWT12 = elY33HA.formHandler.getError(`why`);
this.setState('stqP9KV', cndWT12);
if (cndWT12) { 
let elT7XPG = eo('div','n3df',null,`class`,`alert alert-danger`);
text(elY33HA.formHandler.getError(`why`));
ec('div');
}ec('div');
let elyWMOV = eo('div',null,null,`class`,`form-group`);
elyWMOV.cls = {'group-error': !!elY33HA.formHandler.getError(`scenario`) };

            for (let className in elyWMOV.cls) {
                elyWMOV.classList.toggle(className, elyWMOV.cls[className]);
            }  
            let elU2Kw0 = eo('label',null,null,`for`,`scenario`);
text(trans('Scenario (Acceptance Criteria)'));
let elZWV4s = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elK5RJs = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.scenario = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elY33HA.formHandler.addError(`scenario`, 'required', trans('validation.required'));}else if (value && value.length > 500) {return elY33HA.formHandler.addError(`scenario`, 'maxlength', trans('validation.maxLength', 500));}return elY33HA.formHandler.removeError(`scenario`);}]},`value`,`${fval(component.record.scenario)}`,`name`,`${(`scenario`).toInputName()}`,`placeholder`,`${trans(`Scenario (Acceptance Criteria)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`scenario`);
elK5RJs.value = fval(component.record.scenario);
ec('textarea');
let cndRrso = elY33HA.formHandler.getError(`scenario`);
this.setState('stssfBz', cndRrso);
if (cndRrso) { 
let elKVmS9 = eo('div','QSAf',null,`class`,`alert alert-danger`);
text(elY33HA.formHandler.getError(`scenario`));
ec('div');
}ec('div');
let eleDuYm = eo('div',null,null,`class`,`colors row`);
let eltSW7L = eo('div',null,null,`class`,`col-12 bold m-b-1`);
text(`Sticky Note Color`);
ec('div');
let elplArM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.color = this.value;}]},`value`,`${fval(component.record.color)}`,`name`,`${(`color`).toInputName()}`,`type`,`hidden`);
elplArM.value = fval(component.record.color);
for (let i in component.colors) {
let color = component.colors[i]; 
 let iipgUP = 'lXot8wt' + i;
let elejAv8 = eo('div','U6PhXwJs0yP1' + i+iipgUP,null,`class`,`col m-b-1`);
let elyfXzp = eo('button','Mrtff'+iipgUP,null, eventListeners, {onclick:[function(e) {var $el = this;component.record.color = color;}]},`type`,`button`,`class`,`btn btn-color ${ color }-note`);
elyfXzp.cls = {selected: color == component.record.color};

            for (let className in elyfXzp.cls) {
                elyfXzp.classList.toggle(className, elyfXzp.cls[className]);
            }  
            ec('button');
ec('div');
}
ec('div');
let elvfxAB = eo('div',null,null,`class`,`m-t-1 text-right`);
let eliw9Ng = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-info bold`);
text(`Confirm`);
ec('button');
ec('div');
ec('form');
ec('div');
}});

                    this.isReadyToGo();
                }
        });