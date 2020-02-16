_Component({
                selector: 'project-user-story-form-page',
                c: 'ProjectUserStoryFormPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','goBack','submit','record','priorities','onUserStoryTypeChange','types','hasParent','parentType','loadParents','loadSprints','playersList','projectMembers','colors','isValidForm','isSending'],
                children: {cWQv2kHET:'flk-dropdown-list',cquXGrcex:'flk-dropdown-list',cWofk3CEc:'flk-dropdown-list',cu9EbpKkU:'flk-dropdown-list',cdee3hLMr:'flk-dropdown-list',coj6cHPOV:'flk-dropdown-list',c9eQdXZxz:'project-layout'},
                render: function (component) {
                    let cmp8dh7 = this._lc('c9eQdXZxz', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elRW82Q = eo('div',null,null,`class`,`row`);
let eleBkSg = eo('div',null,null,`class`,`col-12`);
let elaiWQ7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.goBack()}]},`class`,`float-right btn btn-purple bold`);
text(`Back To The Board`);
ec('button');
ec('div');
let elUqEHy = eo('div',null,null,`class`,`col-sm-6`);
let elXPovj = eo('h1',null,null,`class`,`font-weight-light m-b-2`);
text(`What is a User Story?`);
ec('h1');
text(`User stories are short, simple descriptions of a feature told from the perspective of the person who desires
            the new capability, usually a user or customer of the system. They typically follow a simple template:`);
let ela8GBx = eo('div',null,null,`class`,`m-y-1`);
let eluTea5 = eo('div');
text(`As a`);
let elCyRSK = eo('strong',null,null,`class`,`ml-1`);
text(`[ type of user ]`);
ec('strong');
text(`,`);
ec('div');
let elIEgtz = eo('div');
text(`I want`);
let eluGLpl = eo('strong',null,null,`class`,`ml-1`);
text(`[ some goal ]`);
ec('strong');
text(`,`);
ec('div');
let elgwYND = eo('div');
text(`So that`);
let el5dpck = eo('strong',null,null,`class`,`ml-1`);
text(`[ do something ]`);
ec('strong');
text(`,`);
ec('div');
ec('div');
let el7zcTC = eo('p');
text(`A user story is a tool used in Agile software development to capture a description of a software
                feature from an end-user perspective. The user story describes the type of user, what they want
                and why. A user story helps to create a simplified description of a requirement.`);
ec('p');
let elTyEu8 = eo('h3',null,null,`class`,`font-weight-light`);
text(`Types Of User Stories`);
ec('h3');
let elKJqvr = eo('ul',null,null,`class`,`p-0`);
let el4OtQN = eo('li');
let el7MHOm = eo('strong');
text(`Stories`);
ec('strong');
text(`: ” are short requirements or requests written from the perspective of an
                    end user.`);
ec('li');
let el08MCE = eo('li');
let elhi1Vj = eo('strong');
text(`Epics`);
ec('strong');
text(`: are large bodies of work that can be broken down into a number of smaller
                    tasks (called stories).`);
ec('li');
let elohCt9 = eo('li');
let el3eiQ4 = eo('strong');
text(`Initiatives`);
ec('strong');
text(`: are collections of epics that drive toward a common goal`);
ec('li');
ec('ul');
ec('div');
let elmFGsd = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]},`class`,`col`);

                if (! elmFGsd.formHandler) {
                    window.cfrmdlr = elmFGsd.formHandler = new FormHandler(elmFGsd, component);
                } else {
                    window.cfrmdlr = elmFGsd.formHandler;
                }
            let elajbqW = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.project, 'id', this.value);}]},`value`,`${fval(Object.get(component.project, 'id', ''))}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elajbqW.value = fval(Object.get(component.project, 'id', ''));
let el6jXZW = eo('div',null,null,`class`,`form-group`);
el6jXZW.cls = {'group-error': !!elmFGsd.formHandler.getError(`title`) };

            for (let className in el6jXZW.cls) {
                el6jXZW.classList.toggle(className, el6jXZW.cls[className]);
            }  
            let elYLnJm = eo('label',null,null,`for`,`title`);
text(trans('User story'));
let eluXcU4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el95C2p = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmFGsd.formHandler.addError(`title`, 'required', trans('validation.required'));}return elmFGsd.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`User story`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el95C2p.value = fval(component.record.title);
let cndd8wd = elmFGsd.formHandler.getError(`title`);
this.setState('st3rH1o', cndd8wd);
if (cndd8wd) { 
let elVeRf6 = eo('div','AHUf',null,`class`,`alert alert-danger`);
text(elmFGsd.formHandler.getError(`title`));
ec('div');
}ec('div');
let cmpHcFG = this._lc('cWQv2kHET', {parent:component,parentTop:projectLayout,props:{value:component.record.priority,items:component.priorities,required:true},attrs:{name:`${(`priority`).toInputName()}`,label:'Priority',class:'m-b-1'}});
let cmpKOyy = this._lc('cquXGrcex', {parent:component,parentTop:projectLayout,props:{value:component.record.type,items:component.types,required:true},events:{onselect:function(e) {let $el = this; component.onUserStoryTypeChange(e)}},attrs:{name:`${(`type`).toInputName()}`,label:'Type',class:'m-b-1'}});
let cndL9Qi = component.hasParent && component.parentType == 'epic';
this.setState('st6t4De', cndL9Qi);
if (cndL9Qi) { 
let cmpXkd1 = this._lc('cWofk3CEc', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Epic)'},state:'st6t4De'});
}let cndf6GH = component.hasParent && component.parentType == 'initiative';
this.setState('st1vSyY', cndf6GH);
if (cndf6GH) { 
let cmpwP6z = this._lc('cu9EbpKkU', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record, 'parent.id', ''),lazyLoading:true,request:component.loadParents.bind(component)},attrs:{name:`${(`parent`).toInputName()}`,label:'Parent (Initiative)'},state:'st1vSyY'});
}let cmpbka9 = this._lc('cdee3hLMr', {parent:component,parentTop:projectLayout,props:{value:Object.get(component.record.sprint, 'id', ''),lazyLoading:true,request:component.loadSprints.bind(component)},attrs:{name:`${(`sprint`).toInputName()}`,label:'Sprint'}});
let cmpbVH7 = this._lc('coj6cHPOV', {parent:component,parentTop:projectLayout,props:{value:component.record.who,items:component.playersList,required:true},attrs:{name:`${(`who`).toInputName()}`,label:'As a',class:'m-b-1'}});
let elogrL8 = eo('div',null,null,`class`,`form-group`);
elogrL8.cls = {'group-error': !!elmFGsd.formHandler.getError(`what`) };

            for (let className in elogrL8.cls) {
                elogrL8.classList.toggle(className, elogrL8.cls[className]);
            }  
            let elTQPaX = eo('label',null,null,`for`,`what`);
text(trans('I Want to'));
let elhnNF4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el67BTf = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.what = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmFGsd.formHandler.addError(`what`, 'required', trans('validation.required'));}return elmFGsd.formHandler.removeError(`what`);}]},`value`,`${fval(component.record.what)}`,`name`,`${(`what`).toInputName()}`,`placeholder`,`${trans(`I Want to`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`what`);
el67BTf.value = fval(component.record.what);
ec('textarea');
let cndXaK9 = elmFGsd.formHandler.getError(`what`);
this.setState('stg138E', cndXaK9);
if (cndXaK9) { 
let elPbRbx = eo('div','ABaf',null,`class`,`alert alert-danger`);
text(elmFGsd.formHandler.getError(`what`));
ec('div');
}ec('div');
let elMoBeD = eo('div',null,null,`class`,`form-group`);
elMoBeD.cls = {'group-error': !!elmFGsd.formHandler.getError(`why`) };

            for (let className in elMoBeD.cls) {
                elMoBeD.classList.toggle(className, elMoBeD.cls[className]);
            }  
            let eljevPY = eo('label',null,null,`for`,`why`);
text(trans('So that'));
let elRaQqC = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eleUmPJ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.why = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmFGsd.formHandler.addError(`why`, 'required', trans('validation.required'));}return elmFGsd.formHandler.removeError(`why`);}]},`value`,`${fval(component.record.why)}`,`name`,`${(`why`).toInputName()}`,`placeholder`,`${trans(`So that`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`why`);
eleUmPJ.value = fval(component.record.why);
ec('textarea');
let cndvX5x = elmFGsd.formHandler.getError(`why`);
this.setState('stvgy3o', cndvX5x);
if (cndvX5x) { 
let el9fNo_ = eo('div','1OQf',null,`class`,`alert alert-danger`);
text(elmFGsd.formHandler.getError(`why`));
ec('div');
}ec('div');
let elrF67_ = eo('div',null,null,`class`,`form-group`);
elrF67_.cls = {'group-error': !!elmFGsd.formHandler.getError(`scenario`) };

            for (let className in elrF67_.cls) {
                elrF67_.classList.toggle(className, elrF67_.cls[className]);
            }  
            let elrPgw_ = eo('label',null,null,`for`,`scenario`);
text(trans('Scenario (Acceptance Criteria)'));
let eliWilG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzbk_n = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.scenario = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elmFGsd.formHandler.addError(`scenario`, 'required', trans('validation.required'));}else if (value && value.length > 500) {return elmFGsd.formHandler.addError(`scenario`, 'maxlength', trans('validation.maxLength', 500));}return elmFGsd.formHandler.removeError(`scenario`);}]},`value`,`${fval(component.record.scenario)}`,`name`,`${(`scenario`).toInputName()}`,`placeholder`,`${trans(`Scenario (Acceptance Criteria)`)}`,`type`,`textarea`,`rows`,`10`,`class`,`form-control`,`id`,`scenario`);
elzbk_n.value = fval(component.record.scenario);
ec('textarea');
let cnd6PXb = elmFGsd.formHandler.getError(`scenario`);
this.setState('stNXO72', cnd6PXb);
if (cnd6PXb) { 
let elpFtuB = eo('div','F5Of',null,`class`,`alert alert-danger`);
text(elmFGsd.formHandler.getError(`scenario`));
ec('div');
}ec('div');
let elHVRTI = eo('div',null,null,`class`,`colors row`);
let elr8quL = eo('div',null,null,`class`,`col-12 bold m-b-1`);
text(`Sticky Note Color`);
ec('div');
let eluLzqe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.color = this.value;}]},`value`,`${fval(component.record.color)}`,`name`,`${(`color`).toInputName()}`,`type`,`hidden`);
eluLzqe.value = fval(component.record.color);
for (let i in component.colors) {
let color = component.colors[i]; 
 let iiStNP = 'WfRMIth' + i;
let elNmZj6 = eo('div','TLJxOgDPSvld' + i+iiStNP,null,`class`,`col m-b-1`);
let elntqwc = eo('button','yWfff'+iiStNP,null, eventListeners, {onclick:[function(e) {var $el = this;component.record.color = color;}]},`type`,`button`,`class`,`btn btn-color ${ color }-note`);
elntqwc.cls = {selected: color == component.record.color};

            for (let className in elntqwc.cls) {
                elntqwc.classList.toggle(className, elntqwc.cls[className]);
            }  
            ec('button');
ec('div');
}
ec('div');
let elklEW4 = eo('div',null,null,`class`,`m-t-1 text-right`);
let elb38Ta = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-info bold`);
text(`Confirm`);
ec('button');
ec('div');
ec('form');
ec('div');
}});

                    this.isReadyToGo();
                }
        });