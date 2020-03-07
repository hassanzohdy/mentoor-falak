_Component({
                selector: 'project-user-story-form-page',
                c: 'ProjectUserStoryFormPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','goBack','submit','record','priorities','onUserStoryTypeChange','types','hasParent','parentType','loadParents','loadSprints','playersList','projectMembers','colors','isValidForm','isSending'],
                children: {cKKlFndBC:'flk-dropdown-list',cONPvSP05:'flk-dropdown-list',c0gdDatYf:'flk-dropdown-list',c8FeJBgWn:'flk-dropdown-list',c_g8D2pK6:'flk-dropdown-list',clXviZETG:'flk-dropdown-list',cFE1uglgA:'project-layout'},
                render: function (component) {
                    let cmprNci = this._lc('cFE1uglgA', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elQFp71 = eo('div',null,null,`class`,`row`);
let elVmM_5 = eo('div',null,null,`class`,`col-12`);
let elKmCMC = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goBack()}]},`class`,`float-right btn btn-purple bold`);
text(`Back To The Board`);
ec('button');
ec('div');
let el3lY4X = eo('div',null,null,`class`,`col-sm-6`);
let el_qoxW = eo('h1',null,null,`class`,`font-weight-light m-b-2`);
text(`What is a User Story?`);
ec('h1');
text(`User stories are short, simple descriptions of a feature told from the perspective of the person who desires
            the new capability, usually a user or customer of the system. They typically follow a simple template:`);
let el51GgI = eo('div',null,null,`class`,`m-y-1`);
let el22G9C = eo('div');
text(`As a`);
let elfdTtx = eo('strong',null,null,`class`,`ml-1`);
text(`[ type of user ]`);
ec('strong');
text(`,`);
ec('div');
let elnnquC = eo('div');
text(`I want`);
let eldRH4Y = eo('strong',null,null,`class`,`ml-1`);
text(`[ some goal ]`);
ec('strong');
text(`,`);
ec('div');
let elGeTR0 = eo('div');
text(`So that`);
let el_GbNw = eo('strong',null,null,`class`,`ml-1`);
text(`[ do something ]`);
ec('strong');
text(`,`);
ec('div');
ec('div');
let el6vsoh = eo('p');
text(`A user story is a tool used in Agile software development to capture a description of a software
                feature from an end-user perspective. The user story describes the type of user, what they want
                and why. A user story helps to create a simplified description of a requirement.`);
ec('p');
let elU0zEf = eo('h3',null,null,`class`,`font-weight-light`);
text(`Types Of User Stories`);
ec('h3');
let elzbSq9 = eo('ul',null,null,`class`,`p-0`);
let el6RwNa = eo('li');
let elhAAfP = eo('strong');
text(`Stories`);
ec('strong');
text(`: ” are short requirements or requests written from the perspective of an
                    end user.`);
ec('li');
let elmPMsa = eo('li');
let elyuehe = eo('strong');
text(`Epics`);
ec('strong');
text(`: are large bodies of work that can be broken down into a number of smaller
                    tasks (called stories).`);
ec('li');
let elLQzuW = eo('li');
let el56_HC = eo('strong');
text(`Initiatives`);
ec('strong');
text(`: are collections of epics that drive toward a common goal`);
ec('li');
ec('ul');
ec('div');
let elfZfPh = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`col`);

                if (! elfZfPh.formHandler) {
                    window.cfrmdlr = elfZfPh.formHandler = new FormHandler(elfZfPh, component);
                } else {
                    window.cfrmdlr = elfZfPh.formHandler;
                }
            let elQvbb6 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.project, 'id', this.value);}]},`value`,`${fval(Object.get(component.project, 'id', ''))}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elQvbb6.value = fval(Object.get(component.project, 'id', ''));
let el4BbTb = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elfZfPh.formHandler.getError(`title`) })}`);
let elAopMR = eo('label',null,null,`for`,`title`);
text(trans('User story'));
let elS8FFR = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el7aC9N = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfZfPh.formHandler.addError(`title`, 'required', trans('validation.required'));}return elfZfPh.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`User story`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el7aC9N.value = fval(component.record.title);
let cndwaIw = elfZfPh.formHandler.getError(`title`);
this.setState('stQq0HM', cndwaIw);
if (cndwaIw) { 
let el6R4BY = eo('div','HcQf',null,`class`,`alert alert-danger`);
text(elfZfPh.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpDuey = this._lc('cKKlFndBC', {parent:component,parentTop:projectLayout,props:{value:component.record.priority,items:component.priorities,required:true},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',class:'m-b-1'}});
let cmp2IY5 = this._lc('cONPvSP05', {parent:component,parentTop:projectLayout,props:{value:component.record.type,items:component.types,required:true},events:{onselect:function(e) {let $el = this; component.onUserStoryTypeChange(e)}},attrs:{name:`${(`type`).toInputName()}`,label:'Type',class:'m-b-1'}});
let cndwP58 = component.hasParent && component.parentType == 'epic';
this.setState('stSPGPS', cndwP58);
if (cndwP58) { 
let cmpQ5gz = this._lc('c0gdDatYf', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Epic)'},state:'stSPGPS'});
}let cndJ8TX = component.hasParent && component.parentType == 'initiative';
this.setState('stAiJxq', cndJ8TX);
if (cndJ8TX) { 
let cmph0AB = this._lc('c8FeJBgWn', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Initiative)'},state:'stAiJxq'});
}let cmp51Rh = this._lc('c_g8D2pK6', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
let cmpjvoK = this._lc('clXviZETG', {parent:component,parentTop:projectLayout,props:{value:component.record.who,items:component.playersList,required:true},attrs:{name:`${(`who`).toInputName()}`,label:'As a',class:'m-b-1'}});
let elOp_t7 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elfZfPh.formHandler.getError(`what`) })}`);
let elLabtF = eo('label',null,null,`for`,`what`);
text(trans('I Want to'));
let el8sYn3 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloTPmK = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.what = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfZfPh.formHandler.addError(`what`, 'required', trans('validation.required'));}return elfZfPh.formHandler.removeError(`what`);}]},`value`,`${fval(component.record.what)}`,`name`,`${(`what`).toInputName()}`,`placeholder`,`${trans(`I Want to`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`what`);
eloTPmK.value = fval(component.record.what);
ec('textarea');
let cndGmVT = elfZfPh.formHandler.getError(`what`);
this.setState('stfMBnB', cndGmVT);
if (cndGmVT) { 
let elI2PR6 = eo('div','zwaf',null,`class`,`alert alert-danger`);
text(elfZfPh.formHandler.getError(`what`));
ec('div');
}ec('div');
let elrLQgI = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elfZfPh.formHandler.getError(`why`) })}`);
let elkXNqr = eo('label',null,null,`for`,`why`);
text(trans('So that'));
let elPEMQw = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGFCkj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.why = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfZfPh.formHandler.addError(`why`, 'required', trans('validation.required'));}return elfZfPh.formHandler.removeError(`why`);}]},`value`,`${fval(component.record.why)}`,`name`,`${(`why`).toInputName()}`,`placeholder`,`${trans(`So that`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`why`);
elGFCkj.value = fval(component.record.why);
ec('textarea');
let cndtOLq = elfZfPh.formHandler.getError(`why`);
this.setState('stnouya', cndtOLq);
if (cndtOLq) { 
let elMefaL = eo('div','iumf',null,`class`,`alert alert-danger`);
text(elfZfPh.formHandler.getError(`why`));
ec('div');
}ec('div');
let eluOI75 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elfZfPh.formHandler.getError(`scenario`) })}`);
let elbZVG7 = eo('label',null,null,`for`,`scenario`);
text(trans('Scenario (Acceptance Criteria)'));
let elSK_Ni = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8VMkQ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.scenario = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfZfPh.formHandler.addError(`scenario`, 'required', trans('validation.required'));}else if (value && value.length > 500) {return elfZfPh.formHandler.addError(`scenario`, 'maxlength', trans('validation.maxLength', 500));}return elfZfPh.formHandler.removeError(`scenario`);}]},`value`,`${fval(component.record.scenario)}`,`name`,`${(`scenario`).toInputName()}`,`placeholder`,`${trans(`Scenario (Acceptance Criteria)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`scenario`);
el8VMkQ.value = fval(component.record.scenario);
ec('textarea');
let cndnLy1 = elfZfPh.formHandler.getError(`scenario`);
this.setState('steuQPx', cndnLy1);
if (cndnLy1) { 
let elTUjv4 = eo('div','sMnf',null,`class`,`alert alert-danger`);
text(elfZfPh.formHandler.getError(`scenario`));
ec('div');
}ec('div');
let elwVXUh = eo('div',null,null,`class`,`colors row`);
let elffgGX = eo('div',null,null,`class`,`col-12 bold m-b-1`);
text(`Sticky Note Color`);
ec('div');
let el8YrUD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.color = this.value;}]},`value`,`${fval(component.record.color)}`,`name`,`${(`color`).toInputName()}`,`type`,`hidden`);
el8YrUD.value = fval(component.record.color);
for (let i in component.colors) {
let color = component.colors[i]; 
 let iinczZ = 'G7L8Ih_' + i;
let elXB9oL = eo('div','4pi2k4YkLs5f' + i+iinczZ,null,`class`,`col m-b-1`);
let elTEpCp = eo('button','ApXff'+iinczZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.record.color = color;}]},`class`,`btn btn-color ${ color }-note ${cls({selected: color == component.record.color})}`,`type`,`button`);
ec('button');
ec('div');
}
ec('div');
let elczkcQ = eo('div',null,null,`class`,`m-t-1 text-right`);
let ellvsoW = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-info bold`);
text(`Confirm`);
ec('button');
ec('div');
ec('form');
ec('div');
}});

                    this.isReadyToGo();
                }
        });