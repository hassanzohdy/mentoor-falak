_Component({
                selector: 'project-user-story-form-page',
                c: 'ProjectUserStoryFormPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','goBack','submit','record','priorities','onUserStoryTypeChange','types','hasParent','parentType','loadParents','loadSprints','playersList','projectMembers','colors','isValidForm','isSending'],
                children: {cPO5jjMwb:'flk-dropdown-list',cnqY3fJLn:'flk-dropdown-list',c5UYflh0w:'flk-dropdown-list',cSscBSxA1:'flk-dropdown-list',cplVXeblC:'flk-dropdown-list',c6vwtV1Yw:'flk-dropdown-list',cFFpAovWo:'project-layout'},
                render: function (component) {
                    let cmpjOxC = this._lc('cFFpAovWo', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let els0VN4 = eo('div',null,null,`class`,`row`);
let eluqviu = eo('div',null,null,`class`,`col-12`);
let el96PVH = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goBack()}]},`class`,`float-right btn btn-purple bold`);
text(`Back To The Board`);
ec('button');
ec('div');
let elQ5_pN = eo('div',null,null,`class`,`col-sm-6`);
let el_Vhzp = eo('h1',null,null,`class`,`font-weight-light m-b-2`);
text(`What is a User Story?`);
ec('h1');
text(`User stories are short, simple descriptions of a feature told from the perspective of the person who desires
            the new capability, usually a user or customer of the system. They typically follow a simple template:`);
let eltq2gl = eo('div',null,null,`class`,`m-y-1`);
let el7Di6P = eo('div');
text(`As a`);
let el4_nxv = eo('strong',null,null,`class`,`ml-1`);
text(`[ type of user ]`);
ec('strong');
text(`,`);
ec('div');
let elfDYnZ = eo('div');
text(`I want`);
let elc1NdU = eo('strong',null,null,`class`,`ml-1`);
text(`[ some goal ]`);
ec('strong');
text(`,`);
ec('div');
let elutOiY = eo('div');
text(`So that`);
let eloKAPE = eo('strong',null,null,`class`,`ml-1`);
text(`[ do something ]`);
ec('strong');
text(`,`);
ec('div');
ec('div');
let elJz16F = eo('p');
text(`A user story is a tool used in Agile software development to capture a description of a software
                feature from an end-user perspective. The user story describes the type of user, what they want
                and why. A user story helps to create a simplified description of a requirement.`);
ec('p');
let elXExAw = eo('h3',null,null,`class`,`font-weight-light`);
text(`Types Of User Stories`);
ec('h3');
let elPpyRl = eo('ul',null,null,`class`,`p-0`);
let elX8I7u = eo('li');
let eluPKpc = eo('strong');
text(`Stories`);
ec('strong');
text(`: ” are short requirements or requests written from the perspective of an
                    end user.`);
ec('li');
let elD7PPJ = eo('li');
let elNgJdh = eo('strong');
text(`Epics`);
ec('strong');
text(`: are large bodies of work that can be broken down into a number of smaller
                    tasks (called stories).`);
ec('li');
let elMGa5E = eo('li');
let elBW0_w = eo('strong');
text(`Initiatives`);
ec('strong');
text(`: are collections of epics that drive toward a common goal`);
ec('li');
ec('ul');
ec('div');
let elqsrr3 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`col`);

                if (! elqsrr3.formHandler) {
                    window.cfrmdlr = elqsrr3.formHandler = new FormHandler(elqsrr3, component);
                } else {
                    window.cfrmdlr = elqsrr3.formHandler;
                }
            let elpu3Mw = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.project, 'id', this.value);}]},`value`,`${fval(Object.get(component.project, 'id', ''))}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elpu3Mw.value = fval(Object.get(component.project, 'id', ''));
let el0x2L7 = eo('div',null,null,`class`,`form-group`);
el0x2L7.cls = {'group-error': !!elqsrr3.formHandler.getError(`title`) };

            for (let className in el0x2L7.cls) {
                el0x2L7.classList.toggle(className, el0x2L7.cls[className]);
            }  
            let elVIOce = eo('label',null,null,`for`,`title`);
text(trans('User story'));
let el9LzhY = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZ44cx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqsrr3.formHandler.addError(`title`, 'required', trans('validation.required'));}return elqsrr3.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`User story`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elZ44cx.value = fval(component.record.title);
let cndohM3 = elqsrr3.formHandler.getError(`title`);
this.setState('stB110a', cndohM3);
if (cndohM3) { 
let el3YgiQ = eo('div','HJAf',null,`class`,`alert alert-danger`);
text(elqsrr3.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpXtHI = this._lc('cPO5jjMwb', {parent:component,parentTop:projectLayout,props:{value:component.record.priority,items:component.priorities,required:true},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',class:'m-b-1'}});
let cmpcJ0I = this._lc('cnqY3fJLn', {parent:component,parentTop:projectLayout,props:{value:component.record.type,items:component.types,required:true},events:{onselect:function(e) {let $el = this; component.onUserStoryTypeChange(e)}},attrs:{name:`${(`type`).toInputName()}`,label:'Type',class:'m-b-1'}});
let cndIcFW = component.hasParent && component.parentType == 'epic';
this.setState('stIj8mV', cndIcFW);
if (cndIcFW) { 
let cmpZAn3 = this._lc('c5UYflh0w', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Epic)'},state:'stIj8mV'});
}let cndJ9wf = component.hasParent && component.parentType == 'initiative';
this.setState('st6im5h', cndJ9wf);
if (cndJ9wf) { 
let cmp6iTv = this._lc('cSscBSxA1', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Initiative)'},state:'st6im5h'});
}let cmpkTl5 = this._lc('cplVXeblC', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
let cmp4sBT = this._lc('c6vwtV1Yw', {parent:component,parentTop:projectLayout,props:{value:component.record.who,items:component.playersList,required:true},attrs:{name:`${(`who`).toInputName()}`,label:'As a',class:'m-b-1'}});
let elmxPqs = eo('div',null,null,`class`,`form-group`);
elmxPqs.cls = {'group-error': !!elqsrr3.formHandler.getError(`what`) };

            for (let className in elmxPqs.cls) {
                elmxPqs.classList.toggle(className, elmxPqs.cls[className]);
            }  
            let elymugN = eo('label',null,null,`for`,`what`);
text(trans('I Want to'));
let el2DBGl = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVsjQO = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.what = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqsrr3.formHandler.addError(`what`, 'required', trans('validation.required'));}return elqsrr3.formHandler.removeError(`what`);}]},`value`,`${fval(component.record.what)}`,`name`,`${(`what`).toInputName()}`,`placeholder`,`${trans(`I Want to`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`what`);
elVsjQO.value = fval(component.record.what);
ec('textarea');
let cndm6Xc = elqsrr3.formHandler.getError(`what`);
this.setState('stYhexr', cndm6Xc);
if (cndm6Xc) { 
let ellsuIC = eo('div','O78f',null,`class`,`alert alert-danger`);
text(elqsrr3.formHandler.getError(`what`));
ec('div');
}ec('div');
let eljbQDX = eo('div',null,null,`class`,`form-group`);
eljbQDX.cls = {'group-error': !!elqsrr3.formHandler.getError(`why`) };

            for (let className in eljbQDX.cls) {
                eljbQDX.classList.toggle(className, eljbQDX.cls[className]);
            }  
            let elU5pBj = eo('label',null,null,`for`,`why`);
text(trans('So that'));
let el2p5Xq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFQiY6 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.why = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqsrr3.formHandler.addError(`why`, 'required', trans('validation.required'));}return elqsrr3.formHandler.removeError(`why`);}]},`value`,`${fval(component.record.why)}`,`name`,`${(`why`).toInputName()}`,`placeholder`,`${trans(`So that`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`why`);
elFQiY6.value = fval(component.record.why);
ec('textarea');
let cndtqWG = elqsrr3.formHandler.getError(`why`);
this.setState('stFrLiO', cndtqWG);
if (cndtqWG) { 
let elM09wM = eo('div','oL8f',null,`class`,`alert alert-danger`);
text(elqsrr3.formHandler.getError(`why`));
ec('div');
}ec('div');
let elmflqV = eo('div',null,null,`class`,`form-group`);
elmflqV.cls = {'group-error': !!elqsrr3.formHandler.getError(`scenario`) };

            for (let className in elmflqV.cls) {
                elmflqV.classList.toggle(className, elmflqV.cls[className]);
            }  
            let elyoZZN = eo('label',null,null,`for`,`scenario`);
text(trans('Scenario (Acceptance Criteria)'));
let elMyjBj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elbMxJB = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.scenario = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqsrr3.formHandler.addError(`scenario`, 'required', trans('validation.required'));}else if (value && value.length > 500) {return elqsrr3.formHandler.addError(`scenario`, 'maxlength', trans('validation.maxLength', 500));}return elqsrr3.formHandler.removeError(`scenario`);}]},`value`,`${fval(component.record.scenario)}`,`name`,`${(`scenario`).toInputName()}`,`placeholder`,`${trans(`Scenario (Acceptance Criteria)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`scenario`);
elbMxJB.value = fval(component.record.scenario);
ec('textarea');
let cndhwZ5 = elqsrr3.formHandler.getError(`scenario`);
this.setState('st9gDad', cndhwZ5);
if (cndhwZ5) { 
let elyj3F8 = eo('div','Iswf',null,`class`,`alert alert-danger`);
text(elqsrr3.formHandler.getError(`scenario`));
ec('div');
}ec('div');
let elD19la = eo('div',null,null,`class`,`colors row`);
let elD_O_6 = eo('div',null,null,`class`,`col-12 bold m-b-1`);
text(`Sticky Note Color`);
ec('div');
let elQmSZT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.color = this.value;}]},`value`,`${fval(component.record.color)}`,`name`,`${(`color`).toInputName()}`,`type`,`hidden`);
elQmSZT.value = fval(component.record.color);
for (let i in component.colors) {
let color = component.colors[i]; 
 let ii7uRv = '27nmuXU' + i;
let eldisJ9 = eo('div','yIf4mAGRqUfp' + i+ii7uRv,null,`class`,`col m-b-1`);
let elt3l1q = eo('button','BSuff'+ii7uRv,null, eventListeners, {onclick:[function(e) {var $el = this;component.record.color = color;}]},`type`,`button`,`class`,`btn btn-color ${ color }-note`);
elt3l1q.cls = {selected: color == component.record.color};

            for (let className in elt3l1q.cls) {
                elt3l1q.classList.toggle(className, elt3l1q.cls[className]);
            }  
            ec('button');
ec('div');
}
ec('div');
let eltDsY9 = eo('div',null,null,`class`,`m-t-1 text-right`);
let elevac5 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-info bold`);
text(`Confirm`);
ec('button');
ec('div');
ec('form');
ec('div');
}});

                    this.isReadyToGo();
                }
        });