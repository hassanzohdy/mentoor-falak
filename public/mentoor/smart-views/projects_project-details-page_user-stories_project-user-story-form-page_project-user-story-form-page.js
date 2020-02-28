_Component({
                selector: 'project-user-story-form-page',
                c: 'ProjectUserStoryFormPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','goBack','submit','record','priorities','onUserStoryTypeChange','types','hasParent','parentType','loadParents','loadSprints','playersList','projectMembers','colors','isValidForm','isSending'],
                children: {ckOpZbZ3Y:'flk-dropdown-list',cVnmkVgea:'flk-dropdown-list',c7kblk0lO:'flk-dropdown-list',ckpcupcGp:'flk-dropdown-list',csCtRa15M:'flk-dropdown-list',cRGQHWh9_:'flk-dropdown-list',cgrxZYOhV:'project-layout'},
                render: function (component) {
                    let cmpYpZX = this._lc('cgrxZYOhV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let el8tlFP = eo('div',null,null,`class`,`row`);
let elnEElY = eo('div',null,null,`class`,`col-12`);
let elD6A8s = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goBack()}]},`class`,`float-right btn btn-purple bold`);
text(`Back To The Board`);
ec('button');
ec('div');
let elg9T2e = eo('div',null,null,`class`,`col-sm-6`);
let elMXR19 = eo('h1',null,null,`class`,`font-weight-light m-b-2`);
text(`What is a User Story?`);
ec('h1');
text(`User stories are short, simple descriptions of a feature told from the perspective of the person who desires
            the new capability, usually a user or customer of the system. They typically follow a simple template:`);
let elMtc09 = eo('div',null,null,`class`,`m-y-1`);
let elwFigT = eo('div');
text(`As a`);
let elbcRON = eo('strong',null,null,`class`,`ml-1`);
text(`[ type of user ]`);
ec('strong');
text(`,`);
ec('div');
let elEQpm1 = eo('div');
text(`I want`);
let elTIJbn = eo('strong',null,null,`class`,`ml-1`);
text(`[ some goal ]`);
ec('strong');
text(`,`);
ec('div');
let elYFJBx = eo('div');
text(`So that`);
let elbTDfS = eo('strong',null,null,`class`,`ml-1`);
text(`[ do something ]`);
ec('strong');
text(`,`);
ec('div');
ec('div');
let elN3i5G = eo('p');
text(`A user story is a tool used in Agile software development to capture a description of a software
                feature from an end-user perspective. The user story describes the type of user, what they want
                and why. A user story helps to create a simplified description of a requirement.`);
ec('p');
let elSM9My = eo('h3',null,null,`class`,`font-weight-light`);
text(`Types Of User Stories`);
ec('h3');
let elWlStC = eo('ul',null,null,`class`,`p-0`);
let elwTpZm = eo('li');
let elYBTbG = eo('strong');
text(`Stories`);
ec('strong');
text(`: ” are short requirements or requests written from the perspective of an
                    end user.`);
ec('li');
let elVJSxN = eo('li');
let el2sFdY = eo('strong');
text(`Epics`);
ec('strong');
text(`: are large bodies of work that can be broken down into a number of smaller
                    tasks (called stories).`);
ec('li');
let eltKdzT = eo('li');
let elpHwNx = eo('strong');
text(`Initiatives`);
ec('strong');
text(`: are collections of epics that drive toward a common goal`);
ec('li');
ec('ul');
ec('div');
let elv3vYj = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`col`);

                if (! elv3vYj.formHandler) {
                    window.cfrmdlr = elv3vYj.formHandler = new FormHandler(elv3vYj, component);
                } else {
                    window.cfrmdlr = elv3vYj.formHandler;
                }
            let el4lZWm = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.project, 'id', this.value);}]},`value`,`${fval(Object.get(component.project, 'id', ''))}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el4lZWm.value = fval(Object.get(component.project, 'id', ''));
let elhWrHA = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elv3vYj.formHandler.getError(`title`) })}`);
let elYGx_Z = eo('label',null,null,`for`,`title`);
text(trans('User story'));
let elRZfi8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQXdCU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elv3vYj.formHandler.addError(`title`, 'required', trans('validation.required'));}return elv3vYj.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`User story`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elQXdCU.value = fval(component.record.title);
let cndpiUP = elv3vYj.formHandler.getError(`title`);
this.setState('stkNdyr', cndpiUP);
if (cndpiUP) { 
let el7SPVe = eo('div','Sigf',null,`class`,`alert alert-danger`);
text(elv3vYj.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpiNQJ = this._lc('ckOpZbZ3Y', {parent:component,parentTop:projectLayout,props:{value:component.record.priority,items:component.priorities,required:true},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',class:'m-b-1'}});
let cmpsWXE = this._lc('cVnmkVgea', {parent:component,parentTop:projectLayout,props:{value:component.record.type,items:component.types,required:true},events:{onselect:function(e) {let $el = this; component.onUserStoryTypeChange(e)}},attrs:{name:`${(`type`).toInputName()}`,label:'Type',class:'m-b-1'}});
let cndWXVu = component.hasParent && component.parentType == 'epic';
this.setState('stXf5DO', cndWXVu);
if (cndWXVu) { 
let cmp8A8q = this._lc('c7kblk0lO', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Epic)'},state:'stXf5DO'});
}let cndg75F = component.hasParent && component.parentType == 'initiative';
this.setState('stS_MVz', cndg75F);
if (cndg75F) { 
let cmpkI39 = this._lc('ckpcupcGp', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Initiative)'},state:'stS_MVz'});
}let cmpdUDy = this._lc('csCtRa15M', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
let cmpWDqe = this._lc('cRGQHWh9_', {parent:component,parentTop:projectLayout,props:{value:component.record.who,items:component.playersList,required:true},attrs:{name:`${(`who`).toInputName()}`,label:'As a',class:'m-b-1'}});
let elpkStB = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elv3vYj.formHandler.getError(`what`) })}`);
let elhoFMn = eo('label',null,null,`for`,`what`);
text(trans('I Want to'));
let eldK5WA = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQOUW7 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.what = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elv3vYj.formHandler.addError(`what`, 'required', trans('validation.required'));}return elv3vYj.formHandler.removeError(`what`);}]},`value`,`${fval(component.record.what)}`,`name`,`${(`what`).toInputName()}`,`placeholder`,`${trans(`I Want to`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`what`);
elQOUW7.value = fval(component.record.what);
ec('textarea');
let cnd0mpG = elv3vYj.formHandler.getError(`what`);
this.setState('stqRIC5', cnd0mpG);
if (cnd0mpG) { 
let elO1CmP = eo('div','1jff',null,`class`,`alert alert-danger`);
text(elv3vYj.formHandler.getError(`what`));
ec('div');
}ec('div');
let elq9A7I = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elv3vYj.formHandler.getError(`why`) })}`);
let elCb_r_ = eo('label',null,null,`for`,`why`);
text(trans('So that'));
let el_5N6Q = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwIBKn = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.why = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elv3vYj.formHandler.addError(`why`, 'required', trans('validation.required'));}return elv3vYj.formHandler.removeError(`why`);}]},`value`,`${fval(component.record.why)}`,`name`,`${(`why`).toInputName()}`,`placeholder`,`${trans(`So that`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`why`);
elwIBKn.value = fval(component.record.why);
ec('textarea');
let cnd6eAK = elv3vYj.formHandler.getError(`why`);
this.setState('stztdf7', cnd6eAK);
if (cnd6eAK) { 
let eltdM5w = eo('div','NQcf',null,`class`,`alert alert-danger`);
text(elv3vYj.formHandler.getError(`why`));
ec('div');
}ec('div');
let elYs_3D = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elv3vYj.formHandler.getError(`scenario`) })}`);
let elamIBA = eo('label',null,null,`for`,`scenario`);
text(trans('Scenario (Acceptance Criteria)'));
let el_05DO = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFxCa3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.scenario = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elv3vYj.formHandler.addError(`scenario`, 'required', trans('validation.required'));}else if (value && value.length > 500) {return elv3vYj.formHandler.addError(`scenario`, 'maxlength', trans('validation.maxLength', 500));}return elv3vYj.formHandler.removeError(`scenario`);}]},`value`,`${fval(component.record.scenario)}`,`name`,`${(`scenario`).toInputName()}`,`placeholder`,`${trans(`Scenario (Acceptance Criteria)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`scenario`);
elFxCa3.value = fval(component.record.scenario);
ec('textarea');
let cndIzoo = elv3vYj.formHandler.getError(`scenario`);
this.setState('stSdW_e', cndIzoo);
if (cndIzoo) { 
let el5H5Kd = eo('div','xOOf',null,`class`,`alert alert-danger`);
text(elv3vYj.formHandler.getError(`scenario`));
ec('div');
}ec('div');
let elljqbv = eo('div',null,null,`class`,`colors row`);
let elRm7VI = eo('div',null,null,`class`,`col-12 bold m-b-1`);
text(`Sticky Note Color`);
ec('div');
let elOK_iu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.color = this.value;}]},`value`,`${fval(component.record.color)}`,`name`,`${(`color`).toInputName()}`,`type`,`hidden`);
elOK_iu.value = fval(component.record.color);
for (let i in component.colors) {
let color = component.colors[i]; 
 let iiJIVt = 'ds2ZIZK' + i;
let elWL7va = eo('div','7TGzMs7oU3ME' + i+iiJIVt,null,`class`,`col m-b-1`);
let el9jDy9 = eo('button','_Dmff'+iiJIVt,null, eventListeners, {onclick:[function(e) {var $el = this;component.record.color = color;}]},`class`,`btn btn-color ${ color }-note ${cls({selected: color == component.record.color})}`,`type`,`button`);
ec('button');
ec('div');
}
ec('div');
let elgTC4G = eo('div',null,null,`class`,`m-t-1 text-right`);
let elzGs12 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-info bold`);
text(`Confirm`);
ec('button');
ec('div');
ec('form');
ec('div');
}});

                    this.isReadyToGo();
                }
        });