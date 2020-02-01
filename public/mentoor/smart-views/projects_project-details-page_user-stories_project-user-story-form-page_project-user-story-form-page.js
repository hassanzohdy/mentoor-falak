_Component({
                selector: 'project-user-story-form-page',
                c: 'ProjectUserStoryFormPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','goBack','submit','record','priorities','onUserStoryTypeChange','types','hasParent','parentType','loadParents','loadSprints','playersList','projectMembers','colors','isValidForm','isSending'],
                children: {cqI9iWM7b:'flk-dropdown-list',crXfYJOOc:'flk-dropdown-list',ce8mVdg2a:'flk-dropdown-list',cFyfwSQKr:'flk-dropdown-list',c8BEDYSQl:'flk-dropdown-list',czb0Gk44t:'flk-dropdown-list',cRiofTjvt:'project-layout'},
                render: function (component) {
                    let cmpDaoR = this._lc('cRiofTjvt', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elTHpJS = eo('div',null,null,`class`,`row`);
let eldbEQQ = eo('div',null,null,`class`,`col-12`);
let elQ14sA = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goBack()}]},`class`,`float-right btn btn-purple bold`);
text(`Back To The Board`);
ec('button');
ec('div');
let elh5Rsj = eo('div',null,null,`class`,`col-sm-6`);
let elattpM = eo('h1',null,null,`class`,`font-weight-light m-b-2`);
text(`What is a User Story?`);
ec('h1');
text(`User stories are short, simple descriptions of a feature told from the perspective of the person who desires
            the new capability, usually a user or customer of the system. They typically follow a simple template:`);
let elhuBAX = eo('div',null,null,`class`,`m-y-1`);
let elMlAqW = eo('div');
text(`As a`);
let elCeqJI = eo('strong',null,null,`class`,`ml-1`);
text(`[ type of user ]`);
ec('strong');
text(`,`);
ec('div');
let el8hLyL = eo('div');
text(`I want`);
let elmhPMY = eo('strong',null,null,`class`,`ml-1`);
text(`[ some goal ]`);
ec('strong');
text(`,`);
ec('div');
let elISVV2 = eo('div');
text(`So that`);
let el2J5HX = eo('strong',null,null,`class`,`ml-1`);
text(`[ do something ]`);
ec('strong');
text(`,`);
ec('div');
ec('div');
let elwMwfX = eo('p');
text(`A user story is a tool used in Agile software development to capture a description of a software
                feature from an end-user perspective. The user story describes the type of user, what they want
                and why. A user story helps to create a simplified description of a requirement.`);
ec('p');
let elrnzTq = eo('h3',null,null,`class`,`font-weight-light`);
text(`Types Of User Stories`);
ec('h3');
let el1D2Kq = eo('ul',null,null,`class`,`p-0`);
let el3n2Tj = eo('li');
let elkg5fd = eo('strong');
text(`Stories`);
ec('strong');
text(`: ” are short requirements or requests written from the perspective of an
                    end user.`);
ec('li');
let elR_7T7 = eo('li');
let elMdScj = eo('strong');
text(`Epics`);
ec('strong');
text(`: are large bodies of work that can be broken down into a number of smaller
                    tasks (called stories).`);
ec('li');
let el6jDny = eo('li');
let elcPwkg = eo('strong');
text(`Initiatives`);
ec('strong');
text(`: are collections of epics that drive toward a common goal`);
ec('li');
ec('ul');
ec('div');
let elqWjFr = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`col`);

                if (! elqWjFr.formHandler) {
                    window.cfrmdlr = elqWjFr.formHandler = new FormHandler(elqWjFr, component);
                } else {
                    window.cfrmdlr = elqWjFr.formHandler;
                }
            let elBZQzY = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.project, 'id', this.value);}]},`value`,`${fval(Object.get(component.project, 'id', ''))}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elBZQzY.value = fval(Object.get(component.project, 'id', ''));
let elxetc9 = eo('div',null,null,`class`,`form-group`);
elxetc9.cls = {'group-error': !!elqWjFr.formHandler.getError(`title`) };

            for (let className in elxetc9.cls) {
                elxetc9.classList.toggle(className, elxetc9.cls[className]);
            }  
            let elFDQQj = eo('label',null,null,`for`,`title`);
text(trans('User story'));
let el634QW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDt1TC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqWjFr.formHandler.addError(`title`, 'required', trans('validation.required'));}return elqWjFr.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`User story`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elDt1TC.value = fval(component.record.title);
let cndVm7n = elqWjFr.formHandler.getError(`title`);
this.setState('stXJ588', cndVm7n);
if (cndVm7n) { 
let elh7nd7 = eo('div','j6Uf',null,`class`,`alert alert-danger`);
text(elqWjFr.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmp0tf5 = this._lc('cqI9iWM7b', {parent:component,parentTop:projectLayout,props:{value:component.record.priority,items:component.priorities,required:true},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',class:'m-b-1'}});
let cmpNRCL = this._lc('crXfYJOOc', {parent:component,parentTop:projectLayout,props:{value:component.record.type,items:component.types,required:true},events:{onselect:function(e) {let $el = this; component.onUserStoryTypeChange(e)}},attrs:{name:`${(`type`).toInputName()}`,label:'Type',class:'m-b-1'}});
let cndnQAq = component.hasParent && component.parentType == 'epic';
this.setState('stwRX36', cndnQAq);
if (cndnQAq) { 
let cmpQPm4 = this._lc('ce8mVdg2a', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Epic)'},state:'stwRX36'});
}let cndhRRC = component.hasParent && component.parentType == 'initiative';
this.setState('st3zpdc', cndhRRC);
if (cndhRRC) { 
let cmpk3ps = this._lc('cFyfwSQKr', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Initiative)'},state:'st3zpdc'});
}let cmpKRTX = this._lc('c8BEDYSQl', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
let cmpES9D = this._lc('czb0Gk44t', {parent:component,parentTop:projectLayout,props:{value:component.record.who,items:component.playersList,required:true},attrs:{name:`${(`who`).toInputName()}`,label:'As a',class:'m-b-1'}});
let elde5oa = eo('div',null,null,`class`,`form-group`);
elde5oa.cls = {'group-error': !!elqWjFr.formHandler.getError(`what`) };

            for (let className in elde5oa.cls) {
                elde5oa.classList.toggle(className, elde5oa.cls[className]);
            }  
            let elqKeMf = eo('label',null,null,`for`,`what`);
text(trans('I Want to'));
let elssY1s = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eldWXKt = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.what = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqWjFr.formHandler.addError(`what`, 'required', trans('validation.required'));}return elqWjFr.formHandler.removeError(`what`);}]},`value`,`${fval(component.record.what)}`,`name`,`${(`what`).toInputName()}`,`placeholder`,`${trans(`I Want to`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`what`);
eldWXKt.value = fval(component.record.what);
ec('textarea');
let cnd69A6 = elqWjFr.formHandler.getError(`what`);
this.setState('stL9Z3T', cnd69A6);
if (cnd69A6) { 
let elEZHUa = eo('div','qp5f',null,`class`,`alert alert-danger`);
text(elqWjFr.formHandler.getError(`what`));
ec('div');
}ec('div');
let el3PVvN = eo('div',null,null,`class`,`form-group`);
el3PVvN.cls = {'group-error': !!elqWjFr.formHandler.getError(`why`) };

            for (let className in el3PVvN.cls) {
                el3PVvN.classList.toggle(className, el3PVvN.cls[className]);
            }  
            let elYEo6u = eo('label',null,null,`for`,`why`);
text(trans('So that'));
let elWw7RD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elfYavh = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.why = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqWjFr.formHandler.addError(`why`, 'required', trans('validation.required'));}return elqWjFr.formHandler.removeError(`why`);}]},`value`,`${fval(component.record.why)}`,`name`,`${(`why`).toInputName()}`,`placeholder`,`${trans(`So that`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`why`);
elfYavh.value = fval(component.record.why);
ec('textarea');
let cndh_Yj = elqWjFr.formHandler.getError(`why`);
this.setState('stWHMeG', cndh_Yj);
if (cndh_Yj) { 
let elVy5I_ = eo('div','4P5f',null,`class`,`alert alert-danger`);
text(elqWjFr.formHandler.getError(`why`));
ec('div');
}ec('div');
let elBhyap = eo('div',null,null,`class`,`form-group`);
elBhyap.cls = {'group-error': !!elqWjFr.formHandler.getError(`scenario`) };

            for (let className in elBhyap.cls) {
                elBhyap.classList.toggle(className, elBhyap.cls[className]);
            }  
            let elilQUC = eo('label',null,null,`for`,`scenario`);
text(trans('Scenario (Acceptance Criteria)'));
let elt_PQS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2teaP = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.scenario = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqWjFr.formHandler.addError(`scenario`, 'required', trans('validation.required'));}else if (value && value.length > 500) {return elqWjFr.formHandler.addError(`scenario`, 'maxlength', trans('validation.maxLength', 500));}return elqWjFr.formHandler.removeError(`scenario`);}]},`value`,`${fval(component.record.scenario)}`,`name`,`${(`scenario`).toInputName()}`,`placeholder`,`${trans(`Scenario (Acceptance Criteria)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`scenario`);
el2teaP.value = fval(component.record.scenario);
ec('textarea');
let cndPDyE = elqWjFr.formHandler.getError(`scenario`);
this.setState('stxJYx7', cndPDyE);
if (cndPDyE) { 
let elpTTW6 = eo('div','yB1f',null,`class`,`alert alert-danger`);
text(elqWjFr.formHandler.getError(`scenario`));
ec('div');
}ec('div');
let elMUmr9 = eo('div',null,null,`class`,`colors row`);
let els2IRz = eo('div',null,null,`class`,`col-12 bold m-b-1`);
text(`Sticky Note Color`);
ec('div');
let elruWep = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.color = this.value;}]},`value`,`${fval(component.record.color)}`,`name`,`${(`color`).toInputName()}`,`type`,`hidden`);
elruWep.value = fval(component.record.color);
for (let i in component.colors) {
let color = component.colors[i]; 
 let iiqhqj = 'LADfoWv' + i;
let elM9YlT = eo('div','W3KrWUlToKP0' + i+iiqhqj,null,`class`,`col m-b-1`);
let elp9B2H = eo('button','CYmff'+iiqhqj,null, eventListeners, {onclick:[function(e) {var $el = this;component.record.color = color;}]},`type`,`button`,`class`,`btn btn-color ${ color }-note`);
elp9B2H.cls = {selected: color == component.record.color};

            for (let className in elp9B2H.cls) {
                elp9B2H.classList.toggle(className, elp9B2H.cls[className]);
            }  
            ec('button');
ec('div');
}
ec('div');
let elnYedh = eo('div',null,null,`class`,`m-t-1 text-right`);
let el30Ipd = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-info bold`);
text(`Confirm`);
ec('button');
ec('div');
ec('form');
ec('div');
}});

                    this.isReadyToGo();
                }
        });