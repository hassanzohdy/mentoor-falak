_Component({
                selector: 'new-project-page',
                c: 'NewProjectPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['createProject','user','steps','currentStep','data','next','usersService','mapUser','setSupervisors','sizes','selectSize','totalCost','maxTeamsPerSize','prev','setExtra','projectInfo','calculateTotal','isCreating','finalCost','firstProjectDiscount'],
                children: {cvkfmEEpC:'flk-dropdown-list',cmridLppp:'flk-dropdown-list',cpwgzSdFq:'flk-datepicker',cbt9TPwab:'flk-datepicker',cBI4Xxjeh:'flk-dropdown-list',cpWh12HaC:'flk-dropdown-list',cCwgyBYtT:'flk-image-input',cE5B1S_rO:'flk-dropdown-list',cQ9cmLGtW:'gold-icon',cfLqdEbST:'flk-dropdown-list',cb_NIg95F:'gold-icon',cg0rVe8L1:'flk-mdb-checkbox',crEUXC4pm:'gold-icon',cKISqzW7Q:'flk-mdb-checkbox',cxw0lc0xN:'gold-icon',cmGNvc_XF:'flk-mdb-checkbox',ccoJUKz21:'gold-icon',cbiGdbN9s:'flk-mdb-checkbox',cM_FdG3mq:'gold-icon',clgzliDeH:'gold-icon',cOuHhDwx3:'gold-icon',cQzPii1k1:'gold-icon',c1Z92kLnK:'gold-icon',cgZSrcoE9:'gold-icon',c98UOefn0:'gold-icon',cQ39ByuUW:'layout'},
                render: function (component) {
                    let cmpbBRU = this._lc('cQ39ByuUW', {parent:component,content:(layout) => {let elbCpvz = eo('h3',null,null,`class`,`bold text-sm-left text-center`);
let elUANUS = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Projects Management System [PMS]`);
ec('span');
ec('h3');
let el8jygf = eo('h1',null,null,`class`,`text-center m-y-2`);
text(`Create new project`);
ec('h1');
let cndo8Bd = ! Is.empty(FLAGS.projects);
this.setState('stl7fgg', cndo8Bd);
if (cndo8Bd) { 
let elQPTOc = eo('form','5RBf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.createProject($el)}]});
component.form = elQPTOc;

                if (! elQPTOc.formHandler) {
                    window.cfrmdlr = elQPTOc.formHandler = new FormHandler(elQPTOc, component);
                } else {
                    window.cfrmdlr = elQPTOc.formHandler;
                }
            let ellBb2W = eo('div','fWaf',null,`id`,`project-steps`);
let el4bW9E = eo('div','_2Jf',null,`class`,`checkout-wrap`);
let elaLnUu = eo('ul','omrf',null,`class`,`checkout-bar`);
elaLnUu.cls = {visited: component.user.isLoggedIn(), active: ! component.user.isLoggedIn()};

            for (let className in elaLnUu.cls) {
                elaLnUu.classList.toggle(className, elaLnUu.cls[className]);
            }  
            let elPb0Cb = eo('li','HJOf',null,`class`,`first`);
elPb0Cb.cls = {visited: component.user.isLoggedIn()};

            for (let className in elPb0Cb.cls) {
                elPb0Cb.classList.toggle(className, elPb0Cb.cls[className]);
            }  
            let elCCQoi = eo('a','Uw5f',null,`href`,`/login`);
text(`Login`);
ec('a');
ec('li');
for (let index in component.steps) {
let step = component.steps[index]; 
 let iitjZ2 = 'JBPs3vw' + index;
let elvEWRd = eo('li','hAPoM0iedwhp' + index+iitjZ2);
elvEWRd.cls = {visited: component.currentStep > index, previous: component.currentStep > index, active: component.currentStep == index, next: component.currentStep < index };

            for (let className in elvEWRd.cls) {
                elvEWRd.classList.toggle(className, elvEWRd.cls[className]);
            }  
            text(step);
ec('li');
}
let elW2iDy = eo('li','1Aaf');
elW2iDy.cls = {visited: component.currentStep > component.steps.length, active: component.currentStep == component.steps.length};

            for (let className in elW2iDy.cls) {
                elW2iDy.classList.toggle(className, elW2iDy.cls[className]);
            }  
            text(`Finish`);
ec('li');
ec('ul');
ec('div');
ec('div');
let el4Sr9a = eo('div','GCvf',null,`class`,`clear`);
ec('div');
let elDSEu2 = eo('div','OHLf',null,`class`,`m-t-10`);
ec('div');
let cndFsoX = ! component.user.isLoggedIn();
this.setState('stn8fMP', cndFsoX);
let cnd2h0U = !(cndFsoX);
this.setState('stDioNL', cnd2h0U);
if (cndFsoX) { 
let elpGS6v = eo('h1','frDf',null,`class`,`text-center`);
let eljA4OF = eo('a','qvJf',null,`href`,`/login`,`class`,`d-inline-block m-t-3 bold btn btn-danger`);
text(`You need to login first dude!`);
ec('a');
ec('h1');
}else { 
let elofOcF = eo('div');
let cndRmNs = ! component.user.username;
this.setState('stMORwc', cndRmNs);
let cndMi4b = !(cndRmNs);
this.setState('stJ0eHl', cndMi4b);
if (cndRmNs) { 
let elx0tzW = eo('div','Mdmf');
text(`You need to set your @username and your project mates as well,`);
let elYzmEX = eo('a','_Syf',null,`href`,`/me#account-info-tab`,`class`,`bold purple-text ml-2`);
text(`Edit your username from here.`);
ec('a');
ec('div');
}else { 
let eldq5wU = eo('div',null,null,`class`,`row`);
let elc5EMY = eo('div',null,null,`class`,`col-9`);
let elK58ke = eo('section',null,null,`class`,`simple-card p-3 project-section`);
elK58ke.cls = {active: component.currentStep == 0};

            for (let className in elK58ke.cls) {
                elK58ke.classList.toggle(className, elK58ke.cls[className]);
            }  
            let elCcGlA = eo('div',null,null,`class`,`form-group`);
elCcGlA.cls = {'group-error': !!elQPTOc.formHandler.getError(`name`) };

            for (let className in elCcGlA.cls) {
                elCcGlA.classList.toggle(className, elCcGlA.cls[className]);
            }  
            let elqMzg9 = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cnduaVw = true;
this.setState('stjJmGV', cnduaVw);
if (cnduaVw) { 
let el0E1kq = eo('span','6qLf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elSiuSN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elQPTOc.formHandler.addError(`name`, 'required', trans('validation.required'));}return elQPTOc.formHandler.removeError(`name`);}]},`value`,`${fval(component.data.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elSiuSN.value = fval(component.data.name);
let cndjRy0 = elQPTOc.formHandler.getError(`name`);
this.setState('st0Fq3A', cndjRy0);
if (cndjRy0) { 
let elQ8aJF = eo('div','7ogf',null,`class`,`alert alert-danger`);
text(elQPTOc.formHandler.getError(`name`));
ec('div');
}ec('div');
let elDgaTx = eo('div',null,null,`class`,`form-group`);
elDgaTx.cls = {'group-error': !!elQPTOc.formHandler.getError(`about`) };

            for (let className in elDgaTx.cls) {
                elDgaTx.classList.toggle(className, elDgaTx.cls[className]);
            }  
            let elfJPoQ = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elx2nZs = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwR2_l = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQPTOc.formHandler.addError(`about`, 'required', trans('validation.required'));}return elQPTOc.formHandler.removeError(`about`);}]},`value`,`${fval(component.data.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elwR2_l.value = fval(component.data.about);
ec('textarea');
let cndjjw9 = elQPTOc.formHandler.getError(`about`);
this.setState('stQvmBY', cndjjw9);
if (cndjjw9) { 
let elDNwUl = eo('div','xVMf',null,`class`,`alert alert-danger`);
text(elQPTOc.formHandler.getError(`about`));
ec('div');
}ec('div');
let elx7uWe = eo('div',null,null,`class`,`row`);
let elQUIjl = eo('div',null,null,`class`,`col-sm-6`);
let cmp_wOQ = this._lc('cvkfmEEpC', {parent:component,parentTop:layout,props:{multiple:true,value:component.data.types,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let elp01L4 = eo('div',null,null,`class`,`col-sm-6`);
let cmpvVpR = this._lc('cmridLppp', {parent:component,parentTop:layout,props:{value:component.data.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let el7ksN_ = eo('div',null,null,`class`,`row m-t-1`);
let elVQ3lc = eo('div',null,null,`class`,`col-sm-6`);
let cmpZ6DM = this._lc('cpwgzSdFq', {parent:component,parentTop:layout,props:{value:component.data.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let ele1dh4 = eo('div',null,null,`class`,`col-sm-6`);
let cmpKc9M = this._lc('cbt9TPwab', {parent:component,parentTop:layout,props:{value:component.data.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elVGJrE = eo('div',null,null,`class`,`row`);
let elps1dt = eo('div',null,null,`class`,`col-sm-6`);
let cmpRUS2 = this._lc('cBI4Xxjeh', {parent:component,parentTop:layout,props:{value:component.data.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let el2dKWY = eo('div',null,null,`class`,`col-sm-6`);
let cmpQztH = this._lc('cpWh12HaC', {parent:component,parentTop:layout,props:{multiple:true,imageable:true,value:component.data.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',service:'tagsService'}});
ec('div');
ec('div');
let elfkIEZ = eo('div',null,null,`class`,`form-group`);
let elQIUZ3 = eo('label',null,null,`for`,`image`);
text(`Project Image`);
let eluQKgK = eo('span',null,null,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let cmpFPIr = this._lc('cCwgyBYtT', {parent:component,parentTop:layout,props:{required:true},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let elPFDMD = eo('div',null,null,`class`,`text-right`);
let elhf6Td = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn btn-purple bold`);
text(`NEXT`);
let elKH8_a = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let eljhv5s = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-members`);
eljhv5s.cls = {active: component.currentStep == 1};

            for (let className in eljhv5s.cls) {
                eljhv5s.classList.toggle(className, eljhv5s.cls[className]);
            }  
            let el5EUoA = eo('div',null,null,`class`,`row m-b-1`);
let elDXIBo = eo('div',null,null,`class`,`col-sm-2`);
text(`Project Manger`);
ec('div');
let elF_nXM = eo('div',null,null,`class`,`bold col`);
text(`You`);
let elIzmaV = ev('br');
let el5MhUO = eo('small');
text(`Can be changed later with additional cost.`);
ec('small');
ec('div');
ec('div');
let elZmk9q = eo('div',null,null,`class`,`row m-t-1 m-b-1`);
let eluus7t = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Supervisors`);
ec('div');
let eldVtNL = eo('div',null,null,`class`,`bold col`);
let cmpPpTN = this._lc('cE5B1S_rO', {parent:component,parentTop:layout,props:{multiple:true,lazyLoading:true,remoteSearch:true,service:component.usersService,value:component.data.supervisors},events:{onmap:function(e) {let $el = this; return component.mapUser(e)},onselect:function(e) {let $el = this; component.setSupervisors(e)}},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Supervisors',query:'username'}});
let elhcLer = eo('small');
let elpIydi = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpcGkN = this._lc('cQ9cmLGtW', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.extra.supervisor}});
let elWr101 = eo('span',null,null,`class`,`ml-2`);
text(`per supervisor`);
ec('span');
let elQgcQE = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
ec('small');
ec('div');
ec('div');
let eljBAQu = eo('div',null,null,`class`,`row m-b-1`);
let elkVVNb = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Project members size`);
ec('div');
let elvGHYu = eo('div',null,null,`class`,`bold col`);
let cndYg91 = component.currentStep >= 1;
this.setState('stDaErp', cndYg91);
if (cndYg91) { 
component.sizesDropdown = this._lc('cfLqdEbST', {parent:component,parentTop:layout,props:{required:true,value:component.data.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.selectSize(e)}},attrs:{name:`${(`membersSize`).toInputName()}`,placeholder:`${trans(`Select project members size`)}`,heading:'Project Members Size'},state:'stDaErp'});
}let eldA4j7 = eo('small');
text(`Project Manager and Supervisor(s) are Not Inclusive.`);
ec('small');
let cnd2997 = component.totalCost.MembersSize > 0;
this.setState('stRXgbY', cnd2997);
if (cnd2997) { 
let elthzHs = eo('div','owrf');
let el2B0pt = eo('small','VnIf');
let el0igoK = eo('i','f75f',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmp39Ep = this._lc('cb_NIg95F', {parent:component,parentTop:layout,props:{coins:component.totalCost.MembersSize},state:'stRXgbY'});
ec('small');
ec('div');
}let el8sPOB = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
let cndCGQZ = component.maxTeamsPerSize;
this.setState('stRGK3S', cndCGQZ);
if (cndCGQZ) { 
let elkOz3g = eo('div','xMpf',null,`class`,`teal-text`);
let el8aeVf = eo('span','dkcf',null,`class`,`bold mr-1`);
text(component.maxTeamsPerSize);
ec('span');
text(`Free Teams`);
ec('div');
}ec('div');
ec('div');
let eleVmkB = eo('div',null,null,`class`,`m-t-1`);
let elnBwuN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elLR07w = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let elbUyuR = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let elSaSha = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let el32ddw = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-extras`);
el32ddw.cls = {active: component.currentStep == 2};

            for (let className in el32ddw.cls) {
                el32ddw.classList.toggle(className, el32ddw.cls[className]);
            }  
            let elKYDiw = eo('div',null,null,`class`,`m-2`);
let elwsp8H = eo('h3',null,null,`class`,`bold m-b-2`);
text(`You can get additional features to your project, which will increase its productivity.`);
ec('h3');
let el6yKjT = eo('table',null,null,`class`,`table table-bordered`);
let elyrlRQ = eo('thead');
let elzaapc = eo('tr');
let elNL9ST = eo('th');
text(`Feature`);
ec('th');
let elTJCQF = eo('th');
text(`Cost`);
ec('th');
let elLoZnj = eo('th');
text(`Description`);
ec('th');
ec('tr');
ec('thead');
let elHvDx7 = eo('tbody');
let elSluaP = eo('tr');
let elHDuc_ = eo('td');
let cmpFRef = this._lc('cg0rVe8L1', {parent:component,parentTop:layout,props:{checked:component.data.extra.privacy,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('privacy', $el.checked)}},boolAttrs:{checked:component.data.extra.privacy},attrs:{name:`${(`extra.privacy`).toInputName()}`,label:'Private project'}});
ec('td');
let elo0MMz = eo('td');
let elgAo8K = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmp_lQw = this._lc('crEUXC4pm', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.privacy}});
ec('td');
let elJWUyg = eo('td');
text(`Public projects will be listed in the`);
let elj5FfX = eo('strong',null,null,`class`,`mx-2`);
text(`PMS`);
ec('strong');
text(`page.`);
ec('td');
ec('tr');
let el7XX78 = eo('tr');
let eluW6FM = eo('td');
let cmpErfK = this._lc('cKISqzW7Q', {parent:component,parentTop:layout,props:{checked:component.data.extra.tasksBoard},events:{onchange:function(e) {let $el = this; component.setExtra('tasksBoard', $el.checked)}},boolAttrs:{checked:component.data.extra.tasksBoard},attrs:{name:`${(`extra.tasksBoard`).toInputName()}`,value:'true',label:'Project Tasks Board'}});
ec('td');
let eljd_qF = eo('td');
let cndCVIf = component.projectInfo.pricing.tasksBoard > 0;
this.setState('stDvlan', cndCVIf);
if (cndCVIf) { 
let el9azxM = eo('i','yiWf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
}let cmppld7 = this._lc('cxw0lc0xN', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.tasksBoard}});
let cndsDNV = component.projectInfo.pricing.tasksBoard == 0;
this.setState('st2iLGr', cndsDNV);
if (cndsDNV) { 
let elPB3Od = eo('span','jn3f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('td');
let elX6WAe = eo('td');
text(`Tasks Board will be your game changer setting in the project as project manager/team leaders can
                        assign tasks to any member in the project/team with un/scheduled tasks.`);
ec('td');
ec('tr');
let elnIEWl = eo('tr');
let elBwoXB = eo('td');
let cmpPptm = this._lc('cmGNvc_XF', {parent:component,parentTop:layout,props:{checked:component.data.extra.softwareTesting,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('softwareTesting', $el.checked)}},boolAttrs:{checked:component.data.extra.softwareTesting},attrs:{name:`${(`extra.softwareTesting`).toInputName()}`,label:'Project Software testing'}});
ec('td');
let elTLMnl = eo('td');
let elSst7w = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmp2GwI = this._lc('ccoJUKz21', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.softwareTesting}});
ec('td');
let elB8qeh = eo('td');
text(`If enabled, a full debugging|issues|bugs system will be injected to your project.`);
ec('td');
ec('tr');
let elKLjW9 = eo('tr');
let el8Suix = eo('td');
let cmp0B7Y = this._lc('cbiGdbN9s', {parent:component,parentTop:layout,props:{checked:component.data.extra.milestones,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('milestones', $el.checked)}},boolAttrs:{checked:component.data.extra.milestones},attrs:{name:`${(`extra.milestones`).toInputName()}`,label:'Project Milestones'}});
ec('td');
let elNWRib = eo('td');
let elNCoei = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpjUmi = this._lc('cM_FdG3mq', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.milestones}});
ec('td');
let eloSCKY = eo('td');
text(`This will increase project productivity and enhance it to the next level, read more about`);
let elhlbnl = eo('strong',null,null,`class`,`ml-1`);
text(`Agile Methodology Scrum`);
ec('strong');
ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('div');
let elzjNQz = eo('div',null,null,`class`,`m-t-1`);
let elib0bO = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elyRF9R = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let elSn2su = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let elHaB71 = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elxwgoZ = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-finish`);
elxwgoZ.cls = {active: component.currentStep == 3};

            for (let className in elxwgoZ.cls) {
                elxwgoZ.classList.toggle(className, elxwgoZ.cls[className]);
            }  
            let el5BVwp = eo('h1',null,null,`class`,`m-b-1`);
text(`Project Fund`);
ec('h1');
let eloSJ9Z = eo('p');
text(`Project fund is quite necessary to be filled with`);
let cmpYvTN = this._lc('clgzliDeH', {parent:component,parentTop:layout});
text(`as it will be used later to:`);
ec('p');
let el_e7Hk = eo('ul');
let elSaYOh = eo('li');
text(`Create tasks and give rewards`);
ec('li');
let el_Xt88 = eo('li');
text(`make contracts with freelancers`);
ec('li');
let el_1zp9 = eo('li');
text(`Purchase more teams`);
ec('li');
let elfqIR0 = eo('li');
text(`Upgrade project members size`);
ec('li');
let el6NpRH = eo('li');
text(`Purchase extras`);
ec('li');
let elpFXed = eo('li');
text(`Add more supervisors`);
ec('li');
ec('ul');
let elhpj7B = eo('p');
ec('p');
let elRneOm = eo('div',null,null,`class`,`row text-center`);
let elx62oc = eo('div',null,null,`class`,`offset-sm-3 col-sm-6`);
let elBMyBF = eo('div',null,null,`class`,`form-group`);
elBMyBF.cls = {'group-error': !!elQPTOc.formHandler.getError(`fund`) };

            for (let className in elBMyBF.cls) {
                elBMyBF.classList.toggle(className, elBMyBF.cls[className]);
            }  
            let elhf2iX = eo('label',null,null,`for`,`fund`);
text(trans('Project Fund'));
ec('label');
let ely6HQA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.fund = this.value;},function(e) {var $el = this;component.calculateTotal()}]},`value`,`${fval(component.data.fund)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Project Fund`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
ely6HQA.value = fval(component.data.fund);
ec('div');
let elf5MHS = eo('p',null,null,`class`,`bold`);
text(`Can be incremented later.`);
ec('p');
ec('div');
ec('div');
let el7rQcu = eo('div',null,null,`class`,`text-center m-t-2`);
let elHTXJH = eo('button',null,null, boolAttrs, {disabled:component.isCreating || component.finalCost > component.user.gold},`class`,`btn btn-success bold`);
let elpkLm4 = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Create`);
let elMQUAK = ev('br');
let cmpPDLm = this._lc('cOuHhDwx3', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
ec('button');
let cnd5CZb = component.finalCost > component.user.gold;
this.setState('stKZIbf', cnd5CZb);
if (cnd5CZb) { 
let elroFlu = eo('div','oPLf',null,`class`,`red-text bold`);
text(`Insufficient gold`);
ec('div');
}ec('div');
let elbpwV5 = eo('div',null,null,`class`,`m-t-1`);
let el9DuJ6 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let eltFa4R = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
ec('div');
ec('section');
ec('div');
let elbMQeF = eo('div',null,null,`class`,`col`);
let elZ_sVq = eo('div',null,null,`class`,`simple-card`,`id`,`project-total-cost`);
let elRN9ty = eo('h3',null,null,`class`,`text-center bold m-b-1`);
text(`Project Cost`);
ec('h3');
for (let costKey in component.totalCost) {
let cost = component.totalCost[costKey]; 
 let iiHkBL = 'BQkm62b' + costKey;
let el5Bco3 = eo('div','VgqkM1q9JGwz' + costKey+iiHkBL,null,`class`,`row`);
let elcHmCr = eo('div','1qpff'+iiHkBL,null,`class`,`col`);
text(costKey);
ec('div');
let elwRkpv = eo('div','rO6ff'+iiHkBL,null,`class`,`col`);
let cmpGHnN = this._lc('cQzPii1k1', {parent:component,parentTop:layout,props:{coins:cost},insideLoop:true,index:"" +iiHkBL});
let cndbUDm = cost == 0;
this.setState('stxsry6', cndbUDm);
if (cndbUDm) { 
let elbgAOE = eo('span','PD0ff'+iiHkBL,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('div');
ec('div');
}
let cnd83kG = component.firstProjectDiscount > 0;
this.setState('stNeQF7', cnd83kG);
if (cnd83kG) { 
let elr9no1 = eo('div','Cjnf',null,`class`,`row`);
let el9A592 = eo('div','KQ9f',null,`class`,`col`);
text(`First Project Discount`);
ec('div');
let elh5yQe = eo('div','F4Pf',null,`class`,`col`);
let elpub6d = eo('i','hrNf',null,`class`,`${fas('minus') + ' icon'}`);
ec('i');
let cmpiYnI = this._lc('c1Z92kLnK', {parent:component,parentTop:layout,props:{coins:component.firstProjectDiscount},state:'stNeQF7'});
ec('div');
ec('div');
}let cndZ_4u = component.data.fund > 0;
this.setState('stRASNt', cndZ_4u);
if (cndZ_4u) { 
let elk6Sci = eo('div','_Ixf',null,`class`,`row`);
let el0uuFf = eo('div','J5hf',null,`class`,`col`);
text(`Project Fund`);
ec('div');
let elZubj_ = eo('div','LEpf',null,`class`,`col`);
let cmpfDb8 = this._lc('cgZSrcoE9', {parent:component,parentTop:layout,props:{coins:component.data.fund},state:'stRASNt'});
ec('div');
ec('div');
}let elP4kxm = eo('div',null,null,`id`,`total-cost`,`class`,`row`);
let elWvlfg = eo('strong',null,null,`class`,`col`);
text(`Total:`);
ec('strong');
let elxRNeH = eo('div',null,null,`class`,`col`);
let cmpyLDU = this._lc('c98UOefn0', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
let cndRfex = component.finalCost == 0;
this.setState('stQ5BkL', cndRfex);
if (cndRfex) { 
let elCFTlr = eo('span','Eryf',null,`class`,`bold pink-text`);
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