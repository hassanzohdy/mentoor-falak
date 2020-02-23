_Component({
                selector: 'new-project-page',
                c: 'NewProjectPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['createProject','user','steps','currentStep','data','next','usersService','mapUser','setSupervisors','sizes','selectSize','totalCost','maxTeamsPerSize','prev','setExtra','projectInfo','calculateTotal','isCreating','finalCost','firstProjectDiscount'],
                children: {cPzTrN_fx:'flk-dropdown-list',crFlXvxlc:'flk-dropdown-list',cyUIfGWQ7:'flk-datepicker',ce1A9xP6w:'flk-datepicker',cIv7BLRGT:'flk-dropdown-list',c8mms9o2M:'flk-dropdown-list',cMBhHW8Qm:'flk-image-input',c0GOySOjd:'flk-dropdown-list',cBVgXdsme:'gold-icon',c08N0RFaF:'flk-dropdown-list',ccEsas5EU:'gold-icon',c_Wh0ytgd:'flk-mdb-checkbox',ctxSRsSjM:'gold-icon',cYqQcnX9F:'flk-mdb-checkbox',c1f_hkwc6:'gold-icon',czBkxux1E:'flk-mdb-checkbox',cXt7F1DrO:'gold-icon',c1djMW6o9:'flk-mdb-checkbox',csvpBn9KP:'gold-icon',cPLnv8RPM:'gold-icon',cLZ8uhLyx:'gold-icon',cqtd65CXo:'gold-icon',cw6wCsZm5:'gold-icon',cU47PCkmu:'gold-icon',c21sObnhk:'gold-icon',ct2PLGqMj:'layout'},
                render: function (component) {
                    let cmpQoDz = this._lc('ct2PLGqMj', {parent:component,content:(layout) => {let elZz7nN = eo('h3',null,null,`class`,`bold text-sm-left text-center`);
let elSMkgZ = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Projects Management System [PMS]`);
ec('span');
ec('h3');
let ellvlS8 = eo('h1',null,null,`class`,`text-center m-y-2`);
text(`Create new project`);
ec('h1');
let cndQCY1 = ! Is.empty(FLAGS.projects);
this.setState('stxPFJR', cndQCY1);
if (cndQCY1) { 
let elhD2Ge = eo('form','1s4f',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.createProject($el)}]});
component.form = elhD2Ge;

                if (! elhD2Ge.formHandler) {
                    window.cfrmdlr = elhD2Ge.formHandler = new FormHandler(elhD2Ge, component);
                } else {
                    window.cfrmdlr = elhD2Ge.formHandler;
                }
            let elAUWQ6 = eo('div','CcCf',null,`id`,`project-steps`);
let elRISPX = eo('div','Xq2f',null,`class`,`checkout-wrap`);
let eluZbOG = eo('ul','Djkf',null,`class`,`checkout-bar`);
eluZbOG.cls = {visited: component.user.isLoggedIn(), active: ! component.user.isLoggedIn()};

            for (let className in eluZbOG.cls) {
                eluZbOG.classList.toggle(className, eluZbOG.cls[className]);
            }  
            let elvS_ci = eo('li','Svff',null,`class`,`first`);
elvS_ci.cls = {visited: component.user.isLoggedIn()};

            for (let className in elvS_ci.cls) {
                elvS_ci.classList.toggle(className, elvS_ci.cls[className]);
            }  
            let el5JVhV = eo('a','ig5f',null,`href`,`/login`);
text(`Login`);
ec('a');
ec('li');
for (let index in component.steps) {
let step = component.steps[index]; 
 let iiQ0tf = 'OsNwfHF' + index;
let elDejZr = eo('li','rdYdr0TNyb7x' + index+iiQ0tf);
elDejZr.cls = {visited: component.currentStep > index, previous: component.currentStep > index, active: component.currentStep == index, next: component.currentStep < index };

            for (let className in elDejZr.cls) {
                elDejZr.classList.toggle(className, elDejZr.cls[className]);
            }  
            text(step);
ec('li');
}
let eloVMBv = eo('li','xzKf');
eloVMBv.cls = {visited: component.currentStep > component.steps.length, active: component.currentStep == component.steps.length};

            for (let className in eloVMBv.cls) {
                eloVMBv.classList.toggle(className, eloVMBv.cls[className]);
            }  
            text(`Finish`);
ec('li');
ec('ul');
ec('div');
ec('div');
let elUhSFW = eo('div','754f',null,`class`,`clear`);
ec('div');
let elXCNpH = eo('div','arpf',null,`class`,`m-t-10`);
ec('div');
let cndD9sL = ! component.user.isLoggedIn();
this.setState('stfzNsv', cndD9sL);
let cndjJoT = !(cndD9sL);
this.setState('stWGmzo', cndjJoT);
if (cndD9sL) { 
let elndVw1 = eo('h1','oCnf',null,`class`,`text-center`);
let elwrIoB = eo('a','dbgf',null,`href`,`/login`,`class`,`d-inline-block m-t-3 bold btn btn-danger`);
text(`You need to login first dude!`);
ec('a');
ec('h1');
}else { 
let el628MY = eo('div');
let cndS8u6 = ! component.user.username;
this.setState('st6bqEM', cndS8u6);
let cndqtJs = !(cndS8u6);
this.setState('stXXI0z', cndqtJs);
if (cndS8u6) { 
let elGxrEx = eo('div','1B4f');
text(`You need to set your @username and your project mates as well,`);
let eljDnk8 = eo('a','fLmf',null,`href`,`/me#account-info-tab`,`class`,`bold purple-text ml-2`);
text(`Edit your username from here.`);
ec('a');
ec('div');
}else { 
let elRtMdD = eo('div',null,null,`class`,`row`);
let elCbKI4 = eo('div',null,null,`class`,`col-9`);
let eldYqBq = eo('section',null,null,`class`,`simple-card p-3 project-section`);
eldYqBq.cls = {active: component.currentStep == 0};

            for (let className in eldYqBq.cls) {
                eldYqBq.classList.toggle(className, eldYqBq.cls[className]);
            }  
            let elZo2ub = eo('div',null,null,`class`,`form-group`);
elZo2ub.cls = {'group-error': !!elhD2Ge.formHandler.getError(`name`) };

            for (let className in elZo2ub.cls) {
                elZo2ub.classList.toggle(className, elZo2ub.cls[className]);
            }  
            let ell459x = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndyxdi = true;
this.setState('st5pB9f', cndyxdi);
if (cndyxdi) { 
let elMxfnx = eo('span','E4wf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elhx9m4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elhD2Ge.formHandler.addError(`name`, 'required', trans('validation.required'));}return elhD2Ge.formHandler.removeError(`name`);}]},`value`,`${fval(component.data.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elhx9m4.value = fval(component.data.name);
let cnddCir = elhD2Ge.formHandler.getError(`name`);
this.setState('stskPTz', cnddCir);
if (cnddCir) { 
let elsBN61 = eo('div','p9Qf',null,`class`,`alert alert-danger`);
text(elhD2Ge.formHandler.getError(`name`));
ec('div');
}ec('div');
let elyXJgN = eo('div',null,null,`class`,`form-group`);
elyXJgN.cls = {'group-error': !!elhD2Ge.formHandler.getError(`about`) };

            for (let className in elyXJgN.cls) {
                elyXJgN.classList.toggle(className, elyXJgN.cls[className]);
            }  
            let elsQjkE = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elft1XX = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el_1bEB = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elhD2Ge.formHandler.addError(`about`, 'required', trans('validation.required'));}return elhD2Ge.formHandler.removeError(`about`);}]},`value`,`${fval(component.data.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
el_1bEB.value = fval(component.data.about);
ec('textarea');
let cnd9S4D = elhD2Ge.formHandler.getError(`about`);
this.setState('stKnFQ_', cnd9S4D);
if (cnd9S4D) { 
let elka6xS = eo('div','Muof',null,`class`,`alert alert-danger`);
text(elhD2Ge.formHandler.getError(`about`));
ec('div');
}ec('div');
let elEBi8U = eo('div',null,null,`class`,`row`);
let elyS9VP = eo('div',null,null,`class`,`col-sm-6`);
let cmpbRci = this._lc('cPzTrN_fx', {parent:component,parentTop:layout,props:{multiple:true,value:component.data.types,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let ellyawR = eo('div',null,null,`class`,`col-sm-6`);
let cmpoKvM = this._lc('crFlXvxlc', {parent:component,parentTop:layout,props:{value:component.data.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let elfDBaN = eo('div',null,null,`class`,`row m-t-1`);
let el4qf3f = eo('div',null,null,`class`,`col-sm-6`);
let cmpWldW = this._lc('cyUIfGWQ7', {parent:component,parentTop:layout,props:{value:component.data.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let elHGEpW = eo('div',null,null,`class`,`col-sm-6`);
let cmp2vUh = this._lc('ce1A9xP6w', {parent:component,parentTop:layout,props:{value:component.data.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elkVRFX = eo('div',null,null,`class`,`row`);
let elD4f9h = eo('div',null,null,`class`,`col-sm-6`);
let cmpuXbm = this._lc('cIv7BLRGT', {parent:component,parentTop:layout,props:{value:component.data.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let el1t_ci = eo('div',null,null,`class`,`col-sm-6`);
let cmpJQVe = this._lc('c8mms9o2M', {parent:component,parentTop:layout,props:{multiple:true,imageable:true,value:component.data.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',service:'tagsService'}});
ec('div');
ec('div');
let elTBbec = eo('div',null,null,`class`,`form-group`);
let elfwLp0 = eo('label',null,null,`for`,`image`);
text(`Project Image`);
let el0VNyx = eo('span',null,null,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let cmpZ15N = this._lc('cMBhHW8Qm', {parent:component,parentTop:layout,props:{required:true},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let eleovbQ = eo('div',null,null,`class`,`text-right`);
let elu_UWT = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn btn-purple bold`);
text(`NEXT`);
let el2Nyup = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let el1KFQQ = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-members`);
el1KFQQ.cls = {active: component.currentStep == 1};

            for (let className in el1KFQQ.cls) {
                el1KFQQ.classList.toggle(className, el1KFQQ.cls[className]);
            }  
            let elWDNDu = eo('div',null,null,`class`,`row m-b-1`);
let el8OMWI = eo('div',null,null,`class`,`col-sm-2`);
text(`Project Manger`);
ec('div');
let el3gxbB = eo('div',null,null,`class`,`bold col`);
text(`You`);
let eleiOZu = ev('br');
let elWs2xO = eo('small');
text(`Can be changed later with additional cost.`);
ec('small');
ec('div');
ec('div');
let eltWhtD = eo('div',null,null,`class`,`row m-t-1 m-b-1`);
let elxEXZV = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Supervisors`);
ec('div');
let el_Yxnv = eo('div',null,null,`class`,`bold col`);
let cmpwdXJ = this._lc('c0GOySOjd', {parent:component,parentTop:layout,props:{multiple:true,lazyLoading:true,remoteSearch:true,service:component.usersService,value:component.data.supervisors},events:{onmap:function(e) {let $el = this; return component.mapUser(e)},onselect:function(e) {let $el = this; component.setSupervisors(e)}},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Supervisors',query:'username'}});
let el0LbRe = eo('small');
let elr6jtD = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpxObi = this._lc('cBVgXdsme', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.extra.supervisor}});
let elbbFoM = eo('span',null,null,`class`,`ml-2`);
text(`per supervisor`);
ec('span');
let eltQhP2 = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
ec('small');
ec('div');
ec('div');
let elWhbx1 = eo('div',null,null,`class`,`row m-b-1`);
let eltCZEw = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Project members size`);
ec('div');
let el34Yv4 = eo('div',null,null,`class`,`bold col`);
let cndmCKm = component.currentStep >= 1;
this.setState('stpah4A', cndmCKm);
if (cndmCKm) { 
component.sizesDropdown = this._lc('c08N0RFaF', {parent:component,parentTop:layout,props:{required:true,value:component.data.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.selectSize(e)}},attrs:{name:`${(`membersSize`).toInputName()}`,placeholder:`${trans(`Select project members size`)}`,heading:'Project Members Size'},state:'stpah4A'});
}let elaKyay = eo('small');
text(`Project Manager and Supervisor(s) are Not Inclusive.`);
ec('small');
let cndmZLh = component.totalCost.MembersSize > 0;
this.setState('stMo6OT', cndmZLh);
if (cndmZLh) { 
let el0kAAW = eo('div','xOcf');
let elZghbA = eo('small','u1Vf');
let elH_oh_ = eo('i','ocaf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpP3Hs = this._lc('ccEsas5EU', {parent:component,parentTop:layout,props:{coins:component.totalCost.MembersSize},state:'stMo6OT'});
ec('small');
ec('div');
}let el3Wb3g = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
let cndwCKn = component.maxTeamsPerSize;
this.setState('stp6oUE', cndwCKn);
if (cndwCKn) { 
let elbnlVr = eo('div','UiRf',null,`class`,`teal-text`);
let el7sAxx = eo('span','Diyf',null,`class`,`bold mr-1`);
text(component.maxTeamsPerSize);
ec('span');
text(`Free Teams`);
ec('div');
}ec('div');
ec('div');
let elu55hz = eo('div',null,null,`class`,`m-t-1`);
let el67zLo = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let eldxCys = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let elr3P2e = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let elZL6p8 = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let eljMIas = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-extras`);
eljMIas.cls = {active: component.currentStep == 2};

            for (let className in eljMIas.cls) {
                eljMIas.classList.toggle(className, eljMIas.cls[className]);
            }  
            let elPWY8h = eo('div',null,null,`class`,`m-2`);
let elpa892 = eo('h3',null,null,`class`,`bold m-b-2`);
text(`You can get additional features to your project, which will increase its productivity.`);
ec('h3');
let elNreeO = eo('table',null,null,`class`,`table table-bordered`);
let elfbgzg = eo('thead');
let elb4EKU = eo('tr');
let elczdVF = eo('th');
text(`Feature`);
ec('th');
let elehjzb = eo('th');
text(`Cost`);
ec('th');
let elaUTLx = eo('th');
text(`Description`);
ec('th');
ec('tr');
ec('thead');
let els7yt8 = eo('tbody');
let el4FqZH = eo('tr');
let elxc1BS = eo('td');
let cmpr5kR = this._lc('c_Wh0ytgd', {parent:component,parentTop:layout,props:{checked:component.data.extra.privacy,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('privacy', $el.checked)}},boolAttrs:{checked:component.data.extra.privacy},attrs:{name:`${(`extra.privacy`).toInputName()}`,label:'Private project'}});
ec('td');
let el2rD8v = eo('td');
let eliAZpp = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmp3n6Z = this._lc('ctxSRsSjM', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.privacy}});
ec('td');
let elnCUUX = eo('td');
text(`Public projects will be listed in the`);
let elhH888 = eo('strong',null,null,`class`,`mx-2`);
text(`PMS`);
ec('strong');
text(`page.`);
ec('td');
ec('tr');
let elryZcF = eo('tr');
let elh3wfD = eo('td');
let cmpxjSC = this._lc('cYqQcnX9F', {parent:component,parentTop:layout,props:{checked:component.data.extra.tasksBoard},events:{onchange:function(e) {let $el = this; component.setExtra('tasksBoard', $el.checked)}},boolAttrs:{checked:component.data.extra.tasksBoard},attrs:{name:`${(`extra.tasksBoard`).toInputName()}`,value:'true',label:'Project Tasks Board'}});
ec('td');
let el0IZEz = eo('td');
let cnd1xVV = component.projectInfo.pricing.tasksBoard > 0;
this.setState('stMy1V1', cnd1xVV);
if (cnd1xVV) { 
let el3qYbr = eo('i','NMMf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
}let cmpb5aT = this._lc('c1f_hkwc6', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.tasksBoard}});
let cndOsqp = component.projectInfo.pricing.tasksBoard == 0;
this.setState('stqlUa8', cndOsqp);
if (cndOsqp) { 
let el6WSFE = eo('span','2JYf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('td');
let elLrk2_ = eo('td');
text(`Tasks Board will be your game changer setting in the project as project manager/team leaders can
                        assign tasks to any member in the project/team with un/scheduled tasks.`);
ec('td');
ec('tr');
let elO_vB9 = eo('tr');
let elod_U9 = eo('td');
let cmpnUFy = this._lc('czBkxux1E', {parent:component,parentTop:layout,props:{checked:component.data.extra.softwareTesting,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('softwareTesting', $el.checked)}},boolAttrs:{checked:component.data.extra.softwareTesting},attrs:{name:`${(`extra.softwareTesting`).toInputName()}`,label:'Project Software testing'}});
ec('td');
let el7jJek = eo('td');
let el0fFtL = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpcfnB = this._lc('cXt7F1DrO', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.softwareTesting}});
ec('td');
let el8pSqA = eo('td');
text(`If enabled, a full debugging|issues|bugs system will be injected to your project.`);
ec('td');
ec('tr');
let elNc7po = eo('tr');
let elWESpx = eo('td');
let cmpX1bu = this._lc('c1djMW6o9', {parent:component,parentTop:layout,props:{checked:component.data.extra.milestones,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('milestones', $el.checked)}},boolAttrs:{checked:component.data.extra.milestones},attrs:{name:`${(`extra.milestones`).toInputName()}`,label:'Project Milestones'}});
ec('td');
let elA4zOd = eo('td');
let elgBv8S = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpIhPQ = this._lc('csvpBn9KP', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.milestones}});
ec('td');
let el8p3z1 = eo('td');
text(`This will increase project productivity and enhance it to the next level, read more about`);
let ela2w_d = eo('strong',null,null,`class`,`ml-1`);
text(`Agile Methodology Scrum`);
ec('strong');
ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('div');
let elMn_24 = eo('div',null,null,`class`,`m-t-1`);
let elwAcil = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let el73nwm = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let elHAREz = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let elWJRxB = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elQalGa = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-finish`);
elQalGa.cls = {active: component.currentStep == 3};

            for (let className in elQalGa.cls) {
                elQalGa.classList.toggle(className, elQalGa.cls[className]);
            }  
            let elp5zPF = eo('h1',null,null,`class`,`m-b-1`);
text(`Project Fund`);
ec('h1');
let el0zMzq = eo('p');
text(`Project fund is quite necessary to be filled with`);
let cmprwCi = this._lc('cPLnv8RPM', {parent:component,parentTop:layout});
text(`as it will be used later to:`);
ec('p');
let el9D2HC = eo('ul');
let elfVMhF = eo('li');
text(`Create tasks and give rewards`);
ec('li');
let el07CgB = eo('li');
text(`make contracts with freelancers`);
ec('li');
let eljHNS1 = eo('li');
text(`Purchase more teams`);
ec('li');
let elXNlrp = eo('li');
text(`Upgrade project members size`);
ec('li');
let el6QRN3 = eo('li');
text(`Purchase extras`);
ec('li');
let elT_9XF = eo('li');
text(`Add more supervisors`);
ec('li');
ec('ul');
let elcBZDt = eo('p');
ec('p');
let elISeC7 = eo('div',null,null,`class`,`row text-center`);
let elafTn2 = eo('div',null,null,`class`,`offset-sm-3 col-sm-6`);
let elt5pKi = eo('div',null,null,`class`,`form-group`);
elt5pKi.cls = {'group-error': !!elhD2Ge.formHandler.getError(`fund`) };

            for (let className in elt5pKi.cls) {
                elt5pKi.classList.toggle(className, elt5pKi.cls[className]);
            }  
            let elWmnmE = eo('label',null,null,`for`,`fund`);
text(trans('Project Fund'));
ec('label');
let elaHUSu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.fund = this.value;},function(e) {var $el = this;component.calculateTotal()}]},`value`,`${fval(component.data.fund)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Project Fund`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elaHUSu.value = fval(component.data.fund);
ec('div');
let eldC5aQ = eo('p',null,null,`class`,`bold`);
text(`Can be incremented later.`);
ec('p');
ec('div');
ec('div');
let eljXubQ = eo('div',null,null,`class`,`text-center m-t-2`);
let elUrxhR = eo('button',null,null, boolAttrs, {disabled:component.isCreating || component.finalCost > component.user.gold},`class`,`btn btn-success bold`);
let elXKrLu = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Create`);
let eluj6CW = ev('br');
let cmp5Si2 = this._lc('cLZ8uhLyx', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
ec('button');
let cndXG1e = component.finalCost > component.user.gold;
this.setState('stfJTGA', cndXG1e);
if (cndXG1e) { 
let elexW1J = eo('div','odcf',null,`class`,`red-text bold`);
text(`Insufficient gold`);
ec('div');
}ec('div');
let el4gLd5 = eo('div',null,null,`class`,`m-t-1`);
let elIJGEf = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elchtZn = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
ec('div');
ec('section');
ec('div');
let elwaTZB = eo('div',null,null,`class`,`col`);
let elKcRJV = eo('div',null,null,`class`,`simple-card`,`id`,`project-total-cost`);
let elm4c_C = eo('h3',null,null,`class`,`text-center bold m-b-1`);
text(`Project Cost`);
ec('h3');
for (let costKey in component.totalCost) {
let cost = component.totalCost[costKey]; 
 let iicPRd = 'aGKFibH' + costKey;
let elmUtF6 = eo('div','QAYdawKWxOlj' + costKey+iicPRd,null,`class`,`row`);
let elYruk_ = eo('div','j3Jff'+iicPRd,null,`class`,`col`);
text(costKey);
ec('div');
let elMfTwI = eo('div','fojff'+iicPRd,null,`class`,`col`);
let cmplrzp = this._lc('cqtd65CXo', {parent:component,parentTop:layout,props:{coins:cost},insideLoop:true,index:"" +iicPRd});
let cndCrw3 = cost == 0;
this.setState('stAknrf', cndCrw3);
if (cndCrw3) { 
let el7uHuV = eo('span','VXcff'+iicPRd,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('div');
ec('div');
}
let cndqmwz = component.firstProjectDiscount > 0;
this.setState('stThymB', cndqmwz);
if (cndqmwz) { 
let elYKKO9 = eo('div','Rihf',null,`class`,`row`);
let elXc050 = eo('div','3ZXf',null,`class`,`col`);
text(`First Project Discount`);
ec('div');
let elLNPK7 = eo('div','OM0f',null,`class`,`col`);
let elWSYci = eo('i','fUff',null,`class`,`${fas('minus') + ' icon'}`);
ec('i');
let cmpty9C = this._lc('cw6wCsZm5', {parent:component,parentTop:layout,props:{coins:component.firstProjectDiscount},state:'stThymB'});
ec('div');
ec('div');
}let cndTDpc = component.data.fund > 0;
this.setState('ste6Ndz', cndTDpc);
if (cndTDpc) { 
let elwAZkZ = eo('div','7cKf',null,`class`,`row`);
let elKHDMq = eo('div','oO3f',null,`class`,`col`);
text(`Project Fund`);
ec('div');
let elyXPmh = eo('div','UXLf',null,`class`,`col`);
let cmpfkRK = this._lc('cU47PCkmu', {parent:component,parentTop:layout,props:{coins:component.data.fund},state:'ste6Ndz'});
ec('div');
ec('div');
}let elHuOxM = eo('div',null,null,`id`,`total-cost`,`class`,`row`);
let elIcaTF = eo('strong',null,null,`class`,`col`);
text(`Total:`);
ec('strong');
let elx0yp_ = eo('div',null,null,`class`,`col`);
let cmp04yy = this._lc('c21sObnhk', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
let cndhOHg = component.finalCost == 0;
this.setState('st3YOnk', cndhOHg);
if (cndhOHg) { 
let elseC71 = eo('span','I1gf',null,`class`,`bold pink-text`);
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