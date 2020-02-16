_Component({
                selector: 'new-project-page',
                c: 'NewProjectPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['createProject','user','steps','currentStep','data','next','usersService','mapUser','setSupervisors','sizes','selectSize','totalCost','maxTeamsPerSize','prev','setExtra','projectInfo','calculateTotal','isCreating','finalCost','firstProjectDiscount'],
                children: {cMtprXR8p:'flk-dropdown-list',cESurYzP_:'flk-dropdown-list',cpR2TJUMp:'flk-datepicker',ceOHQRUc7:'flk-datepicker',coYGH1V2V:'flk-dropdown-list',cstSiZnlX:'flk-dropdown-list',cYZVpXiK2:'flk-image-input',cXeZpySNv:'flk-dropdown-list',cLFuC2_2V:'gold-icon',ccZSrsXgP:'flk-dropdown-list',cqrsXbQzJ:'gold-icon',carYyR5KV:'flk-mdb-checkbox',cG8Snq37f:'gold-icon',cshOo0Jo6:'flk-mdb-checkbox',clkv5XsaB:'gold-icon',cHbfZK8Bn:'flk-mdb-checkbox',cc1U8XTda:'gold-icon',cqJOf3RYJ:'flk-mdb-checkbox',czegxYglx:'gold-icon',cKTCoNv39:'gold-icon',cG_yBN0g_:'gold-icon',cN1DbY9NB:'gold-icon',cTmsjbbeS:'gold-icon',cQJKN3CUx:'gold-icon',c1e1l8wU4:'gold-icon',cEY64ESG9:'layout'},
                render: function (component) {
                    let cmpPobC = this._lc('cEY64ESG9', {parent:component,content:(layout) => {let elKBT20 = eo('h3',null,null,`class`,`bold text-sm-left text-center`);
let el64zNn = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Projects Management System [PMS]`);
ec('span');
ec('h3');
let elg2nEH = eo('h1',null,null,`class`,`text-center m-y-2`);
text(`Create new project`);
ec('h1');
let cndM8bo = ! Is.empty(FLAGS.projects);
this.setState('sthhewP', cndM8bo);
if (cndM8bo) { 
let elIYKBp = eo('form','df8f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.createProject($el)}]});
component.form = elIYKBp;

                if (! elIYKBp.formHandler) {
                    window.cfrmdlr = elIYKBp.formHandler = new FormHandler(elIYKBp, component);
                } else {
                    window.cfrmdlr = elIYKBp.formHandler;
                }
            let el69S9q = eo('div','Nfsf',null,`id`,`project-steps`);
let elfxPTB = eo('div','Zb1f',null,`class`,`checkout-wrap`);
let el6SI57 = eo('ul','pVpf',null,`class`,`checkout-bar`);
el6SI57.cls = {visited: component.user.isLoggedIn(), active: ! component.user.isLoggedIn()};

            for (let className in el6SI57.cls) {
                el6SI57.classList.toggle(className, el6SI57.cls[className]);
            }  
            let elEKjxc = eo('li','9kMf',null,`class`,`first`);
elEKjxc.cls = {visited: component.user.isLoggedIn()};

            for (let className in elEKjxc.cls) {
                elEKjxc.classList.toggle(className, elEKjxc.cls[className]);
            }  
            let elinCoa = eo('a','tHPf',null,`href`,`/login`);
text(`Login`);
ec('a');
ec('li');
for (let index in component.steps) {
let step = component.steps[index]; 
 let iiE8Sr = '9FgELSc' + index;
let elTTWgA = eo('li','wmhaVta9fDPX' + index+iiE8Sr);
elTTWgA.cls = {visited: component.currentStep > index, previous: component.currentStep > index, active: component.currentStep == index, next: component.currentStep < index };

            for (let className in elTTWgA.cls) {
                elTTWgA.classList.toggle(className, elTTWgA.cls[className]);
            }  
            text(step);
ec('li');
}
let elIcfBq = eo('li','mJsf');
elIcfBq.cls = {visited: component.currentStep > component.steps.length, active: component.currentStep == component.steps.length};

            for (let className in elIcfBq.cls) {
                elIcfBq.classList.toggle(className, elIcfBq.cls[className]);
            }  
            text(`Finish`);
ec('li');
ec('ul');
ec('div');
ec('div');
let elII8yV = eo('div','tAaf',null,`class`,`clear`);
ec('div');
let eldJbyL = eo('div','fRjf',null,`class`,`m-t-10`);
ec('div');
let cnddzZm = ! component.user.isLoggedIn();
this.setState('stbRyRP', cnddzZm);
let cndSuQZ = !(cnddzZm);
this.setState('stZtneT', cndSuQZ);
if (cnddzZm) { 
let elBuRcE = eo('h1','5g0f',null,`class`,`text-center`);
let el3058y = eo('a','h6gf',null,`href`,`/login`,`class`,`d-inline-block m-t-3 bold btn btn-danger`);
text(`You need to login first dude!`);
ec('a');
ec('h1');
}else { 
let elkaB4x = eo('div');
let cndpeo3 = ! component.user.username;
this.setState('st4NzTA', cndpeo3);
let cnd0kHe = !(cndpeo3);
this.setState('st2zah6', cnd0kHe);
if (cndpeo3) { 
let elxnyBA = eo('div','7z6f');
text(`You need to set your @username and your project mates as well,`);
let elWvWL8 = eo('a','NLsf',null,`href`,`/me#account-info-tab`,`class`,`bold purple-text ml-2`);
text(`Edit your username from here.`);
ec('a');
ec('div');
}else { 
let elE_yj3 = eo('div',null,null,`class`,`row`);
let eld4a_f = eo('div',null,null,`class`,`col-9`);
let elwaLbx = eo('section',null,null,`class`,`simple-card p-3 project-section`);
elwaLbx.cls = {active: component.currentStep == 0};

            for (let className in elwaLbx.cls) {
                elwaLbx.classList.toggle(className, elwaLbx.cls[className]);
            }  
            let elY7zVl = eo('div',null,null,`class`,`form-group`);
elY7zVl.cls = {'group-error': !!elIYKBp.formHandler.getError(`name`) };

            for (let className in elY7zVl.cls) {
                elY7zVl.classList.toggle(className, elY7zVl.cls[className]);
            }  
            let elJ1qXi = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndxYGC = true;
this.setState('stGTzAS', cndxYGC);
if (cndxYGC) { 
let el_ZmW4 = eo('span','12zf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elg4k4Z = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elIYKBp.formHandler.addError(`name`, 'required', trans('validation.required'));}return elIYKBp.formHandler.removeError(`name`);}]},`value`,`${fval(component.data.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elg4k4Z.value = fval(component.data.name);
let cndZg5G = elIYKBp.formHandler.getError(`name`);
this.setState('stjvO1w', cndZg5G);
if (cndZg5G) { 
let el_uugG = eo('div','SYVf',null,`class`,`alert alert-danger`);
text(elIYKBp.formHandler.getError(`name`));
ec('div');
}ec('div');
let elWn4Pp = eo('div',null,null,`class`,`form-group`);
elWn4Pp.cls = {'group-error': !!elIYKBp.formHandler.getError(`about`) };

            for (let className in elWn4Pp.cls) {
                elWn4Pp.classList.toggle(className, elWn4Pp.cls[className]);
            }  
            let eljTKDt = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elCRfjt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGGlb1 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIYKBp.formHandler.addError(`about`, 'required', trans('validation.required'));}return elIYKBp.formHandler.removeError(`about`);}]},`value`,`${fval(component.data.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elGGlb1.value = fval(component.data.about);
ec('textarea');
let cndbp7_ = elIYKBp.formHandler.getError(`about`);
this.setState('stjPvvg', cndbp7_);
if (cndbp7_) { 
let el7U2zQ = eo('div','UQ5f',null,`class`,`alert alert-danger`);
text(elIYKBp.formHandler.getError(`about`));
ec('div');
}ec('div');
let el2VyqY = eo('div',null,null,`class`,`row`);
let elCuBW4 = eo('div',null,null,`class`,`col-sm-6`);
let cmpmTdN = this._lc('cMtprXR8p', {parent:component,parentTop:layout,props:{multiple:true,value:component.data.types,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let elZmLQx = eo('div',null,null,`class`,`col-sm-6`);
let cmp7j3I = this._lc('cESurYzP_', {parent:component,parentTop:layout,props:{value:component.data.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let el78t0a = eo('div',null,null,`class`,`row m-t-1`);
let el60ITG = eo('div',null,null,`class`,`col-sm-6`);
let cmpfFW8 = this._lc('cpR2TJUMp', {parent:component,parentTop:layout,props:{value:component.data.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let elimj4e = eo('div',null,null,`class`,`col-sm-6`);
let cmpZKZa = this._lc('ceOHQRUc7', {parent:component,parentTop:layout,props:{value:component.data.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let ela8WBz = eo('div',null,null,`class`,`row`);
let elk16F1 = eo('div',null,null,`class`,`col-sm-6`);
let cmpyi2F = this._lc('coYGH1V2V', {parent:component,parentTop:layout,props:{value:component.data.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let eldSrw1 = eo('div',null,null,`class`,`col-sm-6`);
let cmpokB7 = this._lc('cstSiZnlX', {parent:component,parentTop:layout,props:{multiple:true,imageable:true,value:component.data.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',service:'tagsService'}});
ec('div');
ec('div');
let elHyPF4 = eo('div',null,null,`class`,`form-group`);
let elzblkV = eo('label',null,null,`for`,`image`);
text(`Project Image`);
let elmzu5g = eo('span',null,null,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let cmpQnp5 = this._lc('cYZVpXiK2', {parent:component,parentTop:layout,props:{required:true},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let eljrnbf = eo('div',null,null,`class`,`text-right`);
let elaoVvf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn btn-purple bold`);
text(`NEXT`);
let eljVdE8 = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let el1Ai8u = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-members`);
el1Ai8u.cls = {active: component.currentStep == 1};

            for (let className in el1Ai8u.cls) {
                el1Ai8u.classList.toggle(className, el1Ai8u.cls[className]);
            }  
            let el4i8I6 = eo('div',null,null,`class`,`row m-b-1`);
let elXppbm = eo('div',null,null,`class`,`col-sm-2`);
text(`Project Manger`);
ec('div');
let elB7oy5 = eo('div',null,null,`class`,`bold col`);
text(`You`);
let elLkQ3f = ev('br');
let elBjKiG = eo('small');
text(`Can be changed later with additional cost.`);
ec('small');
ec('div');
ec('div');
let elN9REm = eo('div',null,null,`class`,`row m-t-1 m-b-1`);
let elSb8PF = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Supervisors`);
ec('div');
let elPHvz5 = eo('div',null,null,`class`,`bold col`);
let cmpRM_Q = this._lc('cXeZpySNv', {parent:component,parentTop:layout,props:{multiple:true,lazyLoading:true,remoteSearch:true,service:component.usersService,value:component.data.supervisors},events:{onmap:function(e) {let $el = this; return component.mapUser(e)},onselect:function(e) {let $el = this; component.setSupervisors(e)}},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Supervisors',query:'username'}});
let elqUJtH = eo('small');
let el1uHSr = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpBux5 = this._lc('cLFuC2_2V', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.extra.supervisor}});
let ela7Dmh = eo('span',null,null,`class`,`ml-2`);
text(`per supervisor`);
ec('span');
let elFbZ64 = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
ec('small');
ec('div');
ec('div');
let elVpDgz = eo('div',null,null,`class`,`row m-b-1`);
let el2RXsd = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Project members size`);
ec('div');
let elmrrOF = eo('div',null,null,`class`,`bold col`);
let cndagnP = component.currentStep >= 1;
this.setState('styrR_j', cndagnP);
if (cndagnP) { 
component.sizesDropdown = this._lc('ccZSrsXgP', {parent:component,parentTop:layout,props:{required:true,value:component.data.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.selectSize(e)}},attrs:{name:`${(`membersSize`).toInputName()}`,placeholder:`${trans(`Select project members size`)}`,heading:'Project Members Size'},state:'styrR_j'});
}let elon5SH = eo('small');
text(`Project Manager and Supervisor(s) are Not Inclusive.`);
ec('small');
let cndzIoT = component.totalCost.MembersSize > 0;
this.setState('st75qJe', cndzIoT);
if (cndzIoT) { 
let elHiUFb = eo('div','e7pf');
let el17_MT = eo('small','q0xf');
let elkMbWC = eo('i','B6Xf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpHWbH = this._lc('cqrsXbQzJ', {parent:component,parentTop:layout,props:{coins:component.totalCost.MembersSize},state:'st75qJe'});
ec('small');
ec('div');
}let el_IIF1 = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
let cnd3JRm = component.maxTeamsPerSize;
this.setState('stJFyVi', cnd3JRm);
if (cnd3JRm) { 
let elNZ9HY = eo('div','JQxf',null,`class`,`teal-text`);
let el_JPAx = eo('span','Vtvf',null,`class`,`bold mr-1`);
text(component.maxTeamsPerSize);
ec('span');
text(`Free Teams`);
ec('div');
}ec('div');
ec('div');
let elG2DV8 = eo('div',null,null,`class`,`m-t-1`);
let elAOj14 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elpX6Ty = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let elbcJAl = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let elKnSHL = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elbLqoO = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-extras`);
elbLqoO.cls = {active: component.currentStep == 2};

            for (let className in elbLqoO.cls) {
                elbLqoO.classList.toggle(className, elbLqoO.cls[className]);
            }  
            let ely6DLy = eo('div',null,null,`class`,`m-2`);
let elomYjB = eo('h3',null,null,`class`,`bold m-b-2`);
text(`You can get additional features to your project, which will increase its productivity.`);
ec('h3');
let eldIwEM = eo('table',null,null,`class`,`table table-bordered`);
let elYp6tH = eo('thead');
let el7skJR = eo('tr');
let elh13hD = eo('th');
text(`Feature`);
ec('th');
let eldIyCf = eo('th');
text(`Cost`);
ec('th');
let elAdLAD = eo('th');
text(`Description`);
ec('th');
ec('tr');
ec('thead');
let elMbgmy = eo('tbody');
let elvkSEd = eo('tr');
let elLHDNt = eo('td');
let cmpktWo = this._lc('carYyR5KV', {parent:component,parentTop:layout,props:{checked:component.data.extra.privacy,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('privacy', $el.checked)}},boolAttrs:{checked:component.data.extra.privacy},attrs:{name:`${(`extra.privacy`).toInputName()}`,label:'Private project'}});
ec('td');
let elJZiFo = eo('td');
let elcUCOS = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmp8Kim = this._lc('cG8Snq37f', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.privacy}});
ec('td');
let el8I14g = eo('td');
text(`Public projects will be listed in the`);
let eltnFcl = eo('strong',null,null,`class`,`mx-2`);
text(`PMS`);
ec('strong');
text(`page.`);
ec('td');
ec('tr');
let elo7dSI = eo('tr');
let elMtJ8v = eo('td');
let cmpjC4M = this._lc('cshOo0Jo6', {parent:component,parentTop:layout,props:{checked:component.data.extra.tasksBoard},events:{onchange:function(e) {let $el = this; component.setExtra('tasksBoard', $el.checked)}},boolAttrs:{checked:component.data.extra.tasksBoard},attrs:{name:`${(`extra.tasksBoard`).toInputName()}`,value:'true',label:'Project Tasks Board'}});
ec('td');
let ele3_Ik = eo('td');
let cndg86e = component.projectInfo.pricing.tasksBoard > 0;
this.setState('stTo63g', cndg86e);
if (cndg86e) { 
let elldswF = eo('i','mDmf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
}let cmp8E36 = this._lc('clkv5XsaB', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.tasksBoard}});
let cndaLKl = component.projectInfo.pricing.tasksBoard == 0;
this.setState('stHK0Ft', cndaLKl);
if (cndaLKl) { 
let el3vNsy = eo('span','Sk_f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('td');
let elz8ZTr = eo('td');
text(`Tasks Board will be your game changer setting in the project as project manager/team leaders can
                        assign tasks to any member in the project/team with un/scheduled tasks.`);
ec('td');
ec('tr');
let elBzrBz = eo('tr');
let elugplk = eo('td');
let cmpCaRy = this._lc('cHbfZK8Bn', {parent:component,parentTop:layout,props:{checked:component.data.extra.softwareTesting,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('softwareTesting', $el.checked)}},boolAttrs:{checked:component.data.extra.softwareTesting},attrs:{name:`${(`extra.softwareTesting`).toInputName()}`,label:'Project Software testing'}});
ec('td');
let el5U9Op = eo('td');
let elJCZwW = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpBMnC = this._lc('cc1U8XTda', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.softwareTesting}});
ec('td');
let elThybr = eo('td');
text(`If enabled, a full debugging|issues|bugs system will be injected to your project.`);
ec('td');
ec('tr');
let elM2gyn = eo('tr');
let elK2o6r = eo('td');
let cmpI2tS = this._lc('cqJOf3RYJ', {parent:component,parentTop:layout,props:{checked:component.data.extra.milestones,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('milestones', $el.checked)}},boolAttrs:{checked:component.data.extra.milestones},attrs:{name:`${(`extra.milestones`).toInputName()}`,label:'Project Milestones'}});
ec('td');
let elacVMM = eo('td');
let eljRlij = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmp3xlu = this._lc('czegxYglx', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.milestones}});
ec('td');
let eluWRo9 = eo('td');
text(`This will increase project productivity and enhance it to the next level, read more about`);
let eltlxZ6 = eo('strong',null,null,`class`,`ml-1`);
text(`Agile Methodology Scrum`);
ec('strong');
ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('div');
let elZu_L4 = eo('div',null,null,`class`,`m-t-1`);
let el_NX47 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let el7V_MN = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let el6USz9 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let elD42Yf = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let el0ZgdR = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-finish`);
el0ZgdR.cls = {active: component.currentStep == 3};

            for (let className in el0ZgdR.cls) {
                el0ZgdR.classList.toggle(className, el0ZgdR.cls[className]);
            }  
            let elr2pwI = eo('h1',null,null,`class`,`m-b-1`);
text(`Project Fund`);
ec('h1');
let elPd53C = eo('p');
text(`Project fund is quite necessary to be filled with`);
let cmpvYtw = this._lc('cKTCoNv39', {parent:component,parentTop:layout});
text(`as it will be used later to:`);
ec('p');
let el_yP3i = eo('ul');
let eloWRPS = eo('li');
text(`Create tasks and give rewards`);
ec('li');
let el5yA6O = eo('li');
text(`make contracts with freelancers`);
ec('li');
let elxAjeQ = eo('li');
text(`Purchase more teams`);
ec('li');
let el5C9ve = eo('li');
text(`Upgrade project members size`);
ec('li');
let eljnfeQ = eo('li');
text(`Purchase extras`);
ec('li');
let elh2RtR = eo('li');
text(`Add more supervisors`);
ec('li');
ec('ul');
let el4Ip1p = eo('p');
ec('p');
let elnJQ7b = eo('div',null,null,`class`,`row text-center`);
let el4cMTC = eo('div',null,null,`class`,`offset-sm-3 col-sm-6`);
let elUOXOc = eo('div',null,null,`class`,`form-group`);
elUOXOc.cls = {'group-error': !!elIYKBp.formHandler.getError(`fund`) };

            for (let className in elUOXOc.cls) {
                elUOXOc.classList.toggle(className, elUOXOc.cls[className]);
            }  
            let elG55qC = eo('label',null,null,`for`,`fund`);
text(trans('Project Fund'));
ec('label');
let elk8jrl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.fund = this.value;},function(e) {var $el = this;component.calculateTotal()}]},`value`,`${fval(component.data.fund)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Project Fund`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elk8jrl.value = fval(component.data.fund);
ec('div');
let elmOiXn = eo('p',null,null,`class`,`bold`);
text(`Can be incremented later.`);
ec('p');
ec('div');
ec('div');
let elP1ZKF = eo('div',null,null,`class`,`text-center m-t-2`);
let el7L8mp = eo('button',null,null, boolAttrs, {disabled:component.isCreating || component.finalCost > component.user.gold},`class`,`btn btn-success bold`);
let ellruAw = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Create`);
let elKDU5e = ev('br');
let cmpj6r_ = this._lc('cG_yBN0g_', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
ec('button');
let cndG_qS = component.finalCost > component.user.gold;
this.setState('steMUge', cndG_qS);
if (cndG_qS) { 
let elu91_u = eo('div','HO2f',null,`class`,`red-text bold`);
text(`Insufficient gold`);
ec('div');
}ec('div');
let elp_tj6 = eo('div',null,null,`class`,`m-t-1`);
let elOwpny = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elgtP4_ = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
ec('div');
ec('section');
ec('div');
let elTLJ1S = eo('div',null,null,`class`,`col`);
let el0YOC6 = eo('div',null,null,`class`,`simple-card`,`id`,`project-total-cost`);
let el2p360 = eo('h3',null,null,`class`,`text-center bold m-b-1`);
text(`Project Cost`);
ec('h3');
for (let costKey in component.totalCost) {
let cost = component.totalCost[costKey]; 
 let iiL2Po = 'ibDJZKn' + costKey;
let elrdqzn = eo('div','sxF3NuLwJNjK' + costKey+iiL2Po,null,`class`,`row`);
let elatPk6 = eo('div','5Ozff'+iiL2Po,null,`class`,`col`);
text(costKey);
ec('div');
let elB19CV = eo('div','30Lff'+iiL2Po,null,`class`,`col`);
let cmpLaJ9 = this._lc('cN1DbY9NB', {parent:component,parentTop:layout,props:{coins:cost},insideLoop:true,index:"" +iiL2Po});
let cndDo6q = cost == 0;
this.setState('stBQ0FM', cndDo6q);
if (cndDo6q) { 
let ell7BQ_ = eo('span','Kgpff'+iiL2Po,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('div');
ec('div');
}
let cndFBir = component.firstProjectDiscount > 0;
this.setState('st5d1tq', cndFBir);
if (cndFBir) { 
let elvSK8O = eo('div','lcof',null,`class`,`row`);
let elCnLIi = eo('div','Wzdf',null,`class`,`col`);
text(`First Project Discount`);
ec('div');
let elYRq9I = eo('div','W6vf',null,`class`,`col`);
let elFKb9K = eo('i','jCNf',null,`class`,`${fas('minus') + ' icon'}`);
ec('i');
let cmpMCAT = this._lc('cTmsjbbeS', {parent:component,parentTop:layout,props:{coins:component.firstProjectDiscount},state:'st5d1tq'});
ec('div');
ec('div');
}let cnd4yat = component.data.fund > 0;
this.setState('stu2oD2', cnd4yat);
if (cnd4yat) { 
let elmEytR = eo('div','EXQf',null,`class`,`row`);
let el99Jzb = eo('div','O1hf',null,`class`,`col`);
text(`Project Fund`);
ec('div');
let el6lJ0h = eo('div','Mhrf',null,`class`,`col`);
let cmpwEIV = this._lc('cQJKN3CUx', {parent:component,parentTop:layout,props:{coins:component.data.fund},state:'stu2oD2'});
ec('div');
ec('div');
}let elKN86O = eo('div',null,null,`id`,`total-cost`,`class`,`row`);
let elnRZGx = eo('strong',null,null,`class`,`col`);
text(`Total:`);
ec('strong');
let elgQTSN = eo('div',null,null,`class`,`col`);
let cmpCmb3 = this._lc('c1e1l8wU4', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
let cndNu__ = component.finalCost == 0;
this.setState('stglv3j', cndNu__);
if (cndNu__) { 
let elAa6Zm = eo('span','YRyf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('div');
ec('div');
ec('div');
ec('div');
ec('div');
}ec('div');
}ec('form');
}}});

                    this.isReadyToGo();
                }
        });