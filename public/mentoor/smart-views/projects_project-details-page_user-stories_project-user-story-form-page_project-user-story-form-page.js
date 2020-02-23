_Component({
                selector: 'project-user-story-form-page',
                c: 'ProjectUserStoryFormPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','goBack','submit','record','priorities','onUserStoryTypeChange','types','hasParent','parentType','loadParents','loadSprints','playersList','projectMembers','colors','isValidForm','isSending'],
                children: {c7lHv7biF:'flk-dropdown-list',czGE7OgY3:'flk-dropdown-list',c8kVJA_lh:'flk-dropdown-list',c6w7xyODw:'flk-dropdown-list',cjYXbOI_Q:'flk-dropdown-list',cZ4swd0Fb:'flk-dropdown-list',c8C7EZz1z:'project-layout'},
                render: function (component) {
                    let cmpWap0 = this._lc('c8C7EZz1z', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elIw1J9 = eo('div',null,null,`class`,`row`);
let elOZCtu = eo('div',null,null,`class`,`col-12`);
let el4WGIS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goBack()}]},`class`,`float-right btn btn-purple bold`);
text(`Back To The Board`);
ec('button');
ec('div');
let el17IeH = eo('div',null,null,`class`,`col-sm-6`);
let elL3_w6 = eo('h1',null,null,`class`,`font-weight-light m-b-2`);
text(`What is a User Story?`);
ec('h1');
text(`User stories are short, simple descriptions of a feature told from the perspective of the person who desires
            the new capability, usually a user or customer of the system. They typically follow a simple template:`);
let elJq281 = eo('div',null,null,`class`,`m-y-1`);
let elZHDZt = eo('div');
text(`As a`);
let elkxwyh = eo('strong',null,null,`class`,`ml-1`);
text(`[ type of user ]`);
ec('strong');
text(`,`);
ec('div');
let elxz86f = eo('div');
text(`I want`);
let el94AKR = eo('strong',null,null,`class`,`ml-1`);
text(`[ some goal ]`);
ec('strong');
text(`,`);
ec('div');
let elvsnLo = eo('div');
text(`So that`);
let elpEYAS = eo('strong',null,null,`class`,`ml-1`);
text(`[ do something ]`);
ec('strong');
text(`,`);
ec('div');
ec('div');
let elt6vgJ = eo('p');
text(`A user story is a tool used in Agile software development to capture a description of a software
                feature from an end-user perspective. The user story describes the type of user, what they want
                and why. A user story helps to create a simplified description of a requirement.`);
ec('p');
let elhgyG2 = eo('h3',null,null,`class`,`font-weight-light`);
text(`Types Of User Stories`);
ec('h3');
let elx8t3W = eo('ul',null,null,`class`,`p-0`);
let elQmgJS = eo('li');
let elIbiYG = eo('strong');
text(`Stories`);
ec('strong');
text(`: ” are short requirements or requests written from the perspective of an
                    end user.`);
ec('li');
let elUOZBR = eo('li');
let elv7yuD = eo('strong');
text(`Epics`);
ec('strong');
text(`: are large bodies of work that can be broken down into a number of smaller
                    tasks (called stories).`);
ec('li');
let elP9B4m = eo('li');
let el9ools = eo('strong');
text(`Initiatives`);
ec('strong');
text(`: are collections of epics that drive toward a common goal`);
ec('li');
ec('ul');
ec('div');
let elXlwl4 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`col`);

                if (! elXlwl4.formHandler) {
                    window.cfrmdlr = elXlwl4.formHandler = new FormHandler(elXlwl4, component);
                } else {
                    window.cfrmdlr = elXlwl4.formHandler;
                }
            let elGXXDs = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.project, 'id', this.value);}]},`value`,`${fval(Object.get(component.project, 'id', ''))}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elGXXDs.value = fval(Object.get(component.project, 'id', ''));
let el65Hqm = eo('div',null,null,`class`,`form-group`);
el65Hqm.cls = {'group-error': !!elXlwl4.formHandler.getError(`title`) };

            for (let className in el65Hqm.cls) {
                el65Hqm.classList.toggle(className, el65Hqm.cls[className]);
            }  
            let eld0WbH = eo('label',null,null,`for`,`title`);
text(trans('User story'));
let el8Sv8R = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltkxnm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXlwl4.formHandler.addError(`title`, 'required', trans('validation.required'));}return elXlwl4.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`User story`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eltkxnm.value = fval(component.record.title);
let cndr6q2 = elXlwl4.formHandler.getError(`title`);
this.setState('stWawI6', cndr6q2);
if (cndr6q2) { 
let elz1eeN = eo('div','jC2f',null,`class`,`alert alert-danger`);
text(elXlwl4.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmp8mQc = this._lc('c7lHv7biF', {parent:component,parentTop:projectLayout,props:{value:component.record.priority,items:component.priorities,required:true},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',class:'m-b-1'}});
let cmpQPcc = this._lc('czGE7OgY3', {parent:component,parentTop:projectLayout,props:{value:component.record.type,items:component.types,required:true},events:{onselect:function(e) {let $el = this; component.onUserStoryTypeChange(e)}},attrs:{name:`${(`type`).toInputName()}`,label:'Type',class:'m-b-1'}});
let cndnkUZ = component.hasParent && component.parentType == 'epic';
this.setState('st10fVD', cndnkUZ);
if (cndnkUZ) { 
let cmpbWWV = this._lc('c8kVJA_lh', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Epic)'},state:'st10fVD'});
}let cndvKrP = component.hasParent && component.parentType == 'initiative';
this.setState('stLWwpQ', cndvKrP);
if (cndvKrP) { 
let cmpBTUZ = this._lc('c6w7xyODw', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Initiative)'},state:'stLWwpQ'});
}let cmpylvd = this._lc('cjYXbOI_Q', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
let cmpw8II = this._lc('cZ4swd0Fb', {parent:component,parentTop:projectLayout,props:{value:component.record.who,items:component.playersList,required:true},attrs:{name:`${(`who`).toInputName()}`,label:'As a',class:'m-b-1'}});
let elbXHEI = eo('div',null,null,`class`,`form-group`);
elbXHEI.cls = {'group-error': !!elXlwl4.formHandler.getError(`what`) };

            for (let className in elbXHEI.cls) {
                elbXHEI.classList.toggle(className, elbXHEI.cls[className]);
            }  
            let elDjAFb = eo('label',null,null,`for`,`what`);
text(trans('I Want to'));
let eltzUso = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el5rxcC = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.what = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXlwl4.formHandler.addError(`what`, 'required', trans('validation.required'));}return elXlwl4.formHandler.removeError(`what`);}]},`value`,`${fval(component.record.what)}`,`name`,`${(`what`).toInputName()}`,`placeholder`,`${trans(`I Want to`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`what`);
el5rxcC.value = fval(component.record.what);
ec('textarea');
let cndkD8S = elXlwl4.formHandler.getError(`what`);
this.setState('stvutK8', cndkD8S);
if (cndkD8S) { 
let eleyhcX = eo('div','BdRf',null,`class`,`alert alert-danger`);
text(elXlwl4.formHandler.getError(`what`));
ec('div');
}ec('div');
let elkBgDN = eo('div',null,null,`class`,`form-group`);
elkBgDN.cls = {'group-error': !!elXlwl4.formHandler.getError(`why`) };

            for (let className in elkBgDN.cls) {
                elkBgDN.classList.toggle(className, elkBgDN.cls[className]);
            }  
            let el__ibZ = eo('label',null,null,`for`,`why`);
text(trans('So that'));
let elLRYSe = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVpz9x = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.why = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXlwl4.formHandler.addError(`why`, 'required', trans('validation.required'));}return elXlwl4.formHandler.removeError(`why`);}]},`value`,`${fval(component.record.why)}`,`name`,`${(`why`).toInputName()}`,`placeholder`,`${trans(`So that`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`why`);
elVpz9x.value = fval(component.record.why);
ec('textarea');
let cndAbz8 = elXlwl4.formHandler.getError(`why`);
this.setState('st6HdX0', cndAbz8);
if (cndAbz8) { 
let eltJr71 = eo('div','GKaf',null,`class`,`alert alert-danger`);
text(elXlwl4.formHandler.getError(`why`));
ec('div');
}ec('div');
let elDK0PC = eo('div',null,null,`class`,`form-group`);
elDK0PC.cls = {'group-error': !!elXlwl4.formHandler.getError(`scenario`) };

            for (let className in elDK0PC.cls) {
                elDK0PC.classList.toggle(className, elDK0PC.cls[className]);
            }  
            let elRLvo1 = eo('label',null,null,`for`,`scenario`);
text(trans('Scenario (Acceptance Criteria)'));
let elMF38y = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUtmCK = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.scenario = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXlwl4.formHandler.addError(`scenario`, 'required', trans('validation.required'));}else if (value && value.length > 500) {return elXlwl4.formHandler.addError(`scenario`, 'maxlength', trans('validation.maxLength', 500));}return elXlwl4.formHandler.removeError(`scenario`);}]},`value`,`${fval(component.record.scenario)}`,`name`,`${(`scenario`).toInputName()}`,`placeholder`,`${trans(`Scenario (Acceptance Criteria)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`scenario`);
elUtmCK.value = fval(component.record.scenario);
ec('textarea');
let cndbfrL = elXlwl4.formHandler.getError(`scenario`);
this.setState('stgghaU', cndbfrL);
if (cndbfrL) { 
let elX_4Bo = eo('div','lq7f',null,`class`,`alert alert-danger`);
text(elXlwl4.formHandler.getError(`scenario`));
ec('div');
}ec('div');
let elmTmmf = eo('div',null,null,`class`,`colors row`);
let elvHOsE = eo('div',null,null,`class`,`col-12 bold m-b-1`);
text(`Sticky Note Color`);
ec('div');
let elZOzlK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.color = this.value;}]},`value`,`${fval(component.record.color)}`,`name`,`${(`color`).toInputName()}`,`type`,`hidden`);
elZOzlK.value = fval(component.record.color);
for (let i in component.colors) {
let color = component.colors[i]; 
 let iivKD_ = 'OG9pzqA' + i;
let elElb3u = eo('div','HzMkye1jB5Lr' + i+iivKD_,null,`class`,`col m-b-1`);
let elmOURK = eo('button','VRRff'+iivKD_,null, eventListeners, {onclick:[function(e) {var $el = this;component.record.color = color;}]},`type`,`button`,`class`,`btn btn-color ${ color }-note`);
elmOURK.cls = {selected: color == component.record.color};

            for (let className in elmOURK.cls) {
                elmOURK.classList.toggle(className, elmOURK.cls[className]);
            }  
            ec('button');
ec('div');
}
ec('div');
let elCPoAu = eo('div',null,null,`class`,`m-t-1 text-right`);
let elcx6i3 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-info bold`);
text(`Confirm`);
ec('button');
ec('div');
ec('form');
ec('div');
}});

                    this.isReadyToGo();
                }
        });