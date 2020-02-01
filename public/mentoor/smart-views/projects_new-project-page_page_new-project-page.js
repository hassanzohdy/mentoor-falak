_Component({
                selector: 'new-project-page',
                c: 'NewProjectPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['createProject','user','steps','currentStep','data','next','usersService','mapUser','setSupervisors','sizes','selectSize','totalCost','maxTeamsPerSize','prev','setExtra','projectInfo','calculateTotal','isCreating','finalCost','firstProjectDiscount'],
                children: {ca8epEwYC:'flk-dropdown-list',cyuqQLeny:'flk-dropdown-list',cwM5ExXfs:'flk-datepicker',cBxMOn2AZ:'flk-datepicker',cyYJ_0oZZ:'flk-dropdown-list',cEPXOJiHT:'flk-dropdown-list',cn8UT_g8v:'flk-image-input',c7dMaQGSR:'flk-dropdown-list',cWFCUviJQ:'gold-icon',cFKL6NPDZ:'flk-dropdown-list',ceVyyt0vR:'gold-icon',ckyRkzWC8:'flk-mdb-checkbox',cb7pbtAQW:'gold-icon',cxX1QxCxb:'flk-mdb-checkbox',cqVhqYdlQ:'gold-icon',cDkFmDPai:'flk-mdb-checkbox',cpa5rDXMn:'gold-icon',cuqobWFoz:'flk-mdb-checkbox',ceGFSdk6U:'gold-icon',c_sECEyZy:'gold-icon',c07_C7qy0:'gold-icon',cGMcrawEN:'gold-icon',c0loo2FUP:'gold-icon',czF0gK7sq:'gold-icon',c9znd2N4a:'gold-icon',cnL35Vj_E:'layout'},
                render: function (component) {
                    let cmpjEXT = this._lc('cnL35Vj_E', {parent:component,content:(layout) => {let eluv7kh = eo('h3',null,null,`class`,`bold text-sm-left text-center`);
let el5OvvB = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Projects Management System [PMS]`);
ec('span');
ec('h3');
let elQwdbT = eo('h1',null,null,`class`,`text-center m-y-2`);
text(`Create new project`);
ec('h1');
let cndPh0b = ! Is.empty(FLAGS.projects);
this.setState('stZnfuc', cndPh0b);
if (cndPh0b) { 
let elPwBIU = eo('form','zLjf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.createProject($el)}]});
component.form = elPwBIU;

                if (! elPwBIU.formHandler) {
                    window.cfrmdlr = elPwBIU.formHandler = new FormHandler(elPwBIU, component);
                } else {
                    window.cfrmdlr = elPwBIU.formHandler;
                }
            let elny4t0 = eo('div','Wxxf',null,`id`,`project-steps`);
let elEPbtn = eo('div','QFIf',null,`class`,`checkout-wrap`);
let elzXvsa = eo('ul','ZNPf',null,`class`,`checkout-bar`);
elzXvsa.cls = {visited: component.user.isLoggedIn(), active: ! component.user.isLoggedIn()};

            for (let className in elzXvsa.cls) {
                elzXvsa.classList.toggle(className, elzXvsa.cls[className]);
            }  
            let el_KJX_ = eo('li','f5gf',null,`class`,`first`);
el_KJX_.cls = {visited: component.user.isLoggedIn()};

            for (let className in el_KJX_.cls) {
                el_KJX_.classList.toggle(className, el_KJX_.cls[className]);
            }  
            let elNwFrW = eo('a','bmdf',null,`href`,`/login`);
text(`Login`);
ec('a');
ec('li');
for (let index in component.steps) {
let step = component.steps[index]; 
 let iiYPs8 = 'Gue_puQ' + index;
let elN5IV4 = eo('li','1kSB97UrCYcM' + index+iiYPs8);
elN5IV4.cls = {visited: component.currentStep > index, previous: component.currentStep > index, active: component.currentStep == index, next: component.currentStep < index };

            for (let className in elN5IV4.cls) {
                elN5IV4.classList.toggle(className, elN5IV4.cls[className]);
            }  
            text(step);
ec('li');
}
let elug603 = eo('li','3epf');
elug603.cls = {visited: component.currentStep > component.steps.length, active: component.currentStep == component.steps.length};

            for (let className in elug603.cls) {
                elug603.classList.toggle(className, elug603.cls[className]);
            }  
            text(`Finish`);
ec('li');
ec('ul');
ec('div');
ec('div');
let el3TXwq = eo('div','hWhf',null,`class`,`clear`);
ec('div');
let eleCMje = eo('div','dq2f',null,`class`,`m-t-10`);
ec('div');
let cndoeCz = ! component.user.isLoggedIn();
this.setState('stIXbNF', cndoeCz);
let cndo_6L = !(cndoeCz);
this.setState('stPOdSV', cndo_6L);
if (cndoeCz) { 
let elwBRri = eo('h1','SV9f',null,`class`,`text-center`);
let elRHUJp = eo('a','eH3f',null,`href`,`/login`,`class`,`d-inline-block m-t-3 bold btn btn-danger`);
text(`You need to login first dude!`);
ec('a');
ec('h1');
}else { 
let el0eO2X = eo('div');
let cndQ3Uf = ! component.user.username;
this.setState('stFNgWm', cndQ3Uf);
let cnd7Ff6 = !(cndQ3Uf);
this.setState('stZgDOF', cnd7Ff6);
if (cndQ3Uf) { 
let elqu_gR = eo('div','WMif');
text(`You need to set your @username and your project mates as well,`);
let eldOQmS = eo('a','IGTf',null,`href`,`/me#account-info-tab`,`class`,`bold purple-text ml-2`);
text(`Edit your username from here.`);
ec('a');
ec('div');
}else { 
let elEySps = eo('div',null,null,`class`,`row`);
let el9AgEL = eo('div',null,null,`class`,`col-9`);
let elIQ_Rd = eo('section',null,null,`class`,`simple-card p-3 project-section`);
elIQ_Rd.cls = {active: component.currentStep == 0};

            for (let className in elIQ_Rd.cls) {
                elIQ_Rd.classList.toggle(className, elIQ_Rd.cls[className]);
            }  
            let elpebX6 = eo('div',null,null,`class`,`form-group`);
elpebX6.cls = {'group-error': !!elPwBIU.formHandler.getError(`name`) };

            for (let className in elpebX6.cls) {
                elpebX6.classList.toggle(className, elpebX6.cls[className]);
            }  
            let elswlTe = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndb4Fb = true;
this.setState('st1T4LV', cndb4Fb);
if (cndb4Fb) { 
let el_KFbl = eo('span','2GGf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elVRTFE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elPwBIU.formHandler.addError(`name`, 'required', trans('validation.required'));}return elPwBIU.formHandler.removeError(`name`);}]},`value`,`${fval(component.data.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elVRTFE.value = fval(component.data.name);
let cndTXef = elPwBIU.formHandler.getError(`name`);
this.setState('stmDFjy', cndTXef);
if (cndTXef) { 
let elVg8u1 = eo('div','5lxf',null,`class`,`alert alert-danger`);
text(elPwBIU.formHandler.getError(`name`));
ec('div');
}ec('div');
let elsCjnq = eo('div',null,null,`class`,`form-group`);
elsCjnq.cls = {'group-error': !!elPwBIU.formHandler.getError(`about`) };

            for (let className in elsCjnq.cls) {
                elsCjnq.classList.toggle(className, elsCjnq.cls[className]);
            }  
            let eljm1WZ = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elAfzJN = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJfygR = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elPwBIU.formHandler.addError(`about`, 'required', trans('validation.required'));}return elPwBIU.formHandler.removeError(`about`);}]},`value`,`${fval(component.data.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elJfygR.value = fval(component.data.about);
ec('textarea');
let cndz57p = elPwBIU.formHandler.getError(`about`);
this.setState('st_CivX', cndz57p);
if (cndz57p) { 
let el2Jmyc = eo('div','YLWf',null,`class`,`alert alert-danger`);
text(elPwBIU.formHandler.getError(`about`));
ec('div');
}ec('div');
let elyUSgH = eo('div',null,null,`class`,`row`);
let elgMedz = eo('div',null,null,`class`,`col-sm-6`);
let cmpsRQC = this._lc('ca8epEwYC', {parent:component,parentTop:layout,props:{multiple:true,value:component.data.types,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let elFhfMI = eo('div',null,null,`class`,`col-sm-6`);
let cmpYpPg = this._lc('cyuqQLeny', {parent:component,parentTop:layout,props:{value:component.data.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let el4CEZ5 = eo('div',null,null,`class`,`row m-t-1`);
let elicWft = eo('div',null,null,`class`,`col-sm-6`);
let cmpGRSi = this._lc('cwM5ExXfs', {parent:component,parentTop:layout,props:{value:component.data.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let elEvTl8 = eo('div',null,null,`class`,`col-sm-6`);
let cmpIqYf = this._lc('cBxMOn2AZ', {parent:component,parentTop:layout,props:{value:component.data.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elKbx7O = eo('div',null,null,`class`,`row`);
let elIOzYC = eo('div',null,null,`class`,`col-sm-6`);
let cmpTRpc = this._lc('cyYJ_0oZZ', {parent:component,parentTop:layout,props:{value:component.data.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let el9rKNW = eo('div',null,null,`class`,`col-sm-6`);
let cmpEHSZ = this._lc('cEPXOJiHT', {parent:component,parentTop:layout,props:{multiple:true,imageable:true,value:component.data.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',service:'tagsService'}});
ec('div');
ec('div');
let elteQob = eo('div',null,null,`class`,`form-group`);
let el2Q8oo = eo('label',null,null,`for`,`image`);
text(`Project Image`);
let eloXaPg = eo('span',null,null,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let cmpeTxn = this._lc('cn8UT_g8v', {parent:component,parentTop:layout,props:{required:true},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let elVbKMe = eo('div',null,null,`class`,`text-right`);
let elODT8O = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn btn-purple bold`);
text(`NEXT`);
let elIyvoz = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elqe6M_ = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-members`);
elqe6M_.cls = {active: component.currentStep == 1};

            for (let className in elqe6M_.cls) {
                elqe6M_.classList.toggle(className, elqe6M_.cls[className]);
            }  
            let elmhNCJ = eo('div',null,null,`class`,`row m-b-1`);
let elMQzpx = eo('div',null,null,`class`,`col-sm-2`);
text(`Project Manger`);
ec('div');
let elIbdcm = eo('div',null,null,`class`,`bold col`);
text(`You`);
let elCcVy6 = ev('br');
let elhoD_9 = eo('small');
text(`Can be changed later with additional cost.`);
ec('small');
ec('div');
ec('div');
let elxnBou = eo('div',null,null,`class`,`row m-t-1 m-b-1`);
let elDmq_h = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Supervisors`);
ec('div');
let elhE2rK = eo('div',null,null,`class`,`bold col`);
let cmpPLD2 = this._lc('c7dMaQGSR', {parent:component,parentTop:layout,props:{multiple:true,lazyLoading:true,remoteSearch:true,service:component.usersService,value:component.data.supervisors},events:{onmap:function(e) {let $el = this; return component.mapUser(e)},onselect:function(e) {let $el = this; component.setSupervisors(e)}},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Supervisors',query:'username'}});
let elCSe0Z = eo('small');
let elf8fzQ = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpsbZ7 = this._lc('cWFCUviJQ', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.extra.supervisor}});
let elpxycZ = eo('span',null,null,`class`,`ml-2`);
text(`per supervisor`);
ec('span');
let el2RCyN = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
ec('small');
ec('div');
ec('div');
let elzOjCF = eo('div',null,null,`class`,`row m-b-1`);
let eluSZvw = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Project members size`);
ec('div');
let elc2RL7 = eo('div',null,null,`class`,`bold col`);
let cnd1Md1 = component.currentStep >= 1;
this.setState('stUEkxg', cnd1Md1);
if (cnd1Md1) { 
component.sizesDropdown = this._lc('cFKL6NPDZ', {parent:component,parentTop:layout,props:{required:true,value:component.data.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.selectSize(e)}},attrs:{name:`${(`membersSize`).toInputName()}`,placeholder:`${trans(`Select project members size`)}`,heading:'Project Members Size'},state:'stUEkxg'});
}let elHAoLP = eo('small');
text(`Project Manager and Supervisor(s) are Not Inclusive.`);
ec('small');
let cndrYiD = component.totalCost.MembersSize > 0;
this.setState('stoyDBz', cndrYiD);
if (cndrYiD) { 
let elgQesV = eo('div','fNKf');
let el3d342 = eo('small','09Qf');
let elgPuEX = eo('i','ksNf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpMSqV = this._lc('ceVyyt0vR', {parent:component,parentTop:layout,props:{coins:component.totalCost.MembersSize},state:'stoyDBz'});
ec('small');
ec('div');
}let elTE57v = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
let cndXqCO = component.maxTeamsPerSize;
this.setState('stFyGG1', cndXqCO);
if (cndXqCO) { 
let el0cN_N = eo('div','4H0f',null,`class`,`teal-text`);
let elIgNMq = eo('span','bBmf',null,`class`,`bold mr-1`);
text(component.maxTeamsPerSize);
ec('span');
text(`Free Teams`);
ec('div');
}ec('div');
ec('div');
let elJAOMI = eo('div',null,null,`class`,`m-t-1`);
let elAy_XV = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elFq6WT = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let elxBkin = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let elQ3FiY = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elYkbW4 = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-extras`);
elYkbW4.cls = {active: component.currentStep == 2};

            for (let className in elYkbW4.cls) {
                elYkbW4.classList.toggle(className, elYkbW4.cls[className]);
            }  
            let elG1WvP = eo('div',null,null,`class`,`m-2`);
let elwcfVF = eo('h3',null,null,`class`,`bold m-b-2`);
text(`You can get additional features to your project, which will increase its productivity.`);
ec('h3');
let elwXIub = eo('table',null,null,`class`,`table table-bordered`);
let elkcL9l = eo('thead');
let elxAhsj = eo('tr');
let elTDNxV = eo('th');
text(`Feature`);
ec('th');
let elAENcZ = eo('th');
text(`Cost`);
ec('th');
let elLP_pv = eo('th');
text(`Description`);
ec('th');
ec('tr');
ec('thead');
let elaUh4n = eo('tbody');
let ellC_WD = eo('tr');
let elkWTle = eo('td');
let cmpbsz1 = this._lc('ckyRkzWC8', {parent:component,parentTop:layout,props:{checked:component.data.extra.privacy,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('privacy', $el.checked)}},boolAttrs:{checked:component.data.extra.privacy},attrs:{name:`${(`extra.privacy`).toInputName()}`,label:'Private project'}});
ec('td');
let eli07tK = eo('td');
let elY39f8 = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmprfpe = this._lc('cb7pbtAQW', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.privacy}});
ec('td');
let elMJvIp = eo('td');
text(`Public projects will be listed in the`);
let elGxREj = eo('strong',null,null,`class`,`mx-2`);
text(`PMS`);
ec('strong');
text(`page.`);
ec('td');
ec('tr');
let elqhQOE = eo('tr');
let elWeDRA = eo('td');
let cmpYGRE = this._lc('cxX1QxCxb', {parent:component,parentTop:layout,props:{checked:component.data.extra.tasksBoard},events:{onchange:function(e) {let $el = this; component.setExtra('tasksBoard', $el.checked)}},boolAttrs:{checked:component.data.extra.tasksBoard},attrs:{name:`${(`extra.tasksBoard`).toInputName()}`,value:'true',label:'Project Tasks Board'}});
ec('td');
let eldh7gp = eo('td');
let cndUMd8 = component.projectInfo.pricing.tasksBoard > 0;
this.setState('stGiQeg', cndUMd8);
if (cndUMd8) { 
let eloe_01 = eo('i','czMf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
}let cmpp11O = this._lc('cqVhqYdlQ', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.tasksBoard}});
let cndoTKq = component.projectInfo.pricing.tasksBoard == 0;
this.setState('stivo4j', cndoTKq);
if (cndoTKq) { 
let elh_tCO = eo('span','1vVf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('td');
let elcKJ0n = eo('td');
text(`Tasks Board will be your game changer setting in the project as project manager/team leaders can
                        assign tasks to any member in the project/team with un/scheduled tasks.`);
ec('td');
ec('tr');
let elIFvg_ = eo('tr');
let elF8GbJ = eo('td');
let cmpuzh0 = this._lc('cDkFmDPai', {parent:component,parentTop:layout,props:{checked:component.data.extra.softwareTesting,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('softwareTesting', $el.checked)}},boolAttrs:{checked:component.data.extra.softwareTesting},attrs:{name:`${(`extra.softwareTesting`).toInputName()}`,label:'Project Software testing'}});
ec('td');
let elllzm_ = eo('td');
let elk3P3n = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpUC1h = this._lc('cpa5rDXMn', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.softwareTesting}});
ec('td');
let elxvbF6 = eo('td');
text(`If enabled, a full debugging|issues|bugs system will be injected to your project.`);
ec('td');
ec('tr');
let elIyJ7o = eo('tr');
let elP6ukb = eo('td');
let cmpv_Ug = this._lc('cuqobWFoz', {parent:component,parentTop:layout,props:{checked:component.data.extra.milestones,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('milestones', $el.checked)}},boolAttrs:{checked:component.data.extra.milestones},attrs:{name:`${(`extra.milestones`).toInputName()}`,label:'Project Milestones'}});
ec('td');
let elsggJI = eo('td');
let elK7ZA8 = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpdJDb = this._lc('ceGFSdk6U', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.milestones}});
ec('td');
let elcLBjM = eo('td');
text(`This will increase project productivity and enhance it to the next level, read more about`);
let elZHGII = eo('strong',null,null,`class`,`ml-1`);
text(`Agile Methodology Scrum`);
ec('strong');
ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('div');
let eleJu5S = eo('div',null,null,`class`,`m-t-1`);
let elLB9Ao = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elKihQW = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let eloku77 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let el7D9nJ = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elvyRXV = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-finish`);
elvyRXV.cls = {active: component.currentStep == 3};

            for (let className in elvyRXV.cls) {
                elvyRXV.classList.toggle(className, elvyRXV.cls[className]);
            }  
            let el7Qf3V = eo('h1',null,null,`class`,`m-b-1`);
text(`Project Fund`);
ec('h1');
let el4wt2J = eo('p');
text(`Project fund is quite necessary to be filled with`);
let cmphKDc = this._lc('c_sECEyZy', {parent:component,parentTop:layout});
text(`as it will be used later to:`);
ec('p');
let elXp5Sj = eo('ul');
let elGrIqG = eo('li');
text(`Create tasks and give rewards`);
ec('li');
let el0IC1H = eo('li');
text(`make contracts with freelancers`);
ec('li');
let elNJwnT = eo('li');
text(`Purchase more teams`);
ec('li');
let eledHtT = eo('li');
text(`Upgrade project members size`);
ec('li');
let elnvLpJ = eo('li');
text(`Purchase extras`);
ec('li');
let el9Jb3D = eo('li');
text(`Add more supervisors`);
ec('li');
ec('ul');
let ellmoJR = eo('p');
ec('p');
let elMalhq = eo('div',null,null,`class`,`row text-center`);
let elUinAy = eo('div',null,null,`class`,`offset-sm-3 col-sm-6`);
let el1pJ9a = eo('div',null,null,`class`,`form-group`);
el1pJ9a.cls = {'group-error': !!elPwBIU.formHandler.getError(`fund`) };

            for (let className in el1pJ9a.cls) {
                el1pJ9a.classList.toggle(className, el1pJ9a.cls[className]);
            }  
            let eliCsod = eo('label',null,null,`for`,`fund`);
text(trans('Project Fund'));
ec('label');
let eljCUxH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.fund = this.value;},function(e) {var $el = this;component.calculateTotal()}]},`value`,`${fval(component.data.fund)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Project Fund`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
eljCUxH.value = fval(component.data.fund);
ec('div');
let elwsNh0 = eo('p',null,null,`class`,`bold`);
text(`Can be incremented later.`);
ec('p');
ec('div');
ec('div');
let el3vc7l = eo('div',null,null,`class`,`text-center m-t-2`);
let elN4Gb2 = eo('button',null,null, boolAttrs, {disabled:component.isCreating || component.finalCost > component.user.gold},`class`,`btn btn-success bold`);
let elOprTX = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Create`);
let elrNc7A = ev('br');
let cmp7ht2 = this._lc('c07_C7qy0', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
ec('button');
let cndCPmy = component.finalCost > component.user.gold;
this.setState('stwqb4c', cndCPmy);
if (cndCPmy) { 
let ellLxPM = eo('div','RpOf',null,`class`,`red-text bold`);
text(`Insufficient gold`);
ec('div');
}ec('div');
let elc8e4o = eo('div',null,null,`class`,`m-t-1`);
let el_PqvD = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elChPe7 = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
ec('div');
ec('section');
ec('div');
let elnSTIN = eo('div',null,null,`class`,`col`);
let el8sbVE = eo('div',null,null,`class`,`simple-card`,`id`,`project-total-cost`);
let elh8bWk = eo('h3',null,null,`class`,`text-center bold m-b-1`);
text(`Project Cost`);
ec('h3');
for (let costKey in component.totalCost) {
let cost = component.totalCost[costKey]; 
 let iiyqLQ = 'xwgyxpV' + costKey;
let elb3lHy = eo('div','uDtwbVL_MZ4U' + costKey+iiyqLQ,null,`class`,`row`);
let elOUVUK = eo('div','vl5ff'+iiyqLQ,null,`class`,`col`);
text(costKey);
ec('div');
let elTUC0I = eo('div','DVgff'+iiyqLQ,null,`class`,`col`);
let cmpvfNb = this._lc('cGMcrawEN', {parent:component,parentTop:layout,props:{coins:cost},insideLoop:true,index:"" +iiyqLQ});
let cndeCbr = cost == 0;
this.setState('stkd1Qq', cndeCbr);
if (cndeCbr) { 
let elv9Tq7 = eo('span','_1Yff'+iiyqLQ,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('div');
ec('div');
}
let cnd4EG1 = component.firstProjectDiscount > 0;
this.setState('stGdfFn', cnd4EG1);
if (cnd4EG1) { 
let elk_hTC = eo('div','GwSf',null,`class`,`row`);
let el9BwxW = eo('div','cw3f',null,`class`,`col`);
text(`First Project Discount`);
ec('div');
let elgjzvx = eo('div','LSPf',null,`class`,`col`);
let elPeYzu = eo('i','yhwf',null,`class`,`${fas('minus') + ' icon'}`);
ec('i');
let cmpbBCv = this._lc('c0loo2FUP', {parent:component,parentTop:layout,props:{coins:component.firstProjectDiscount},state:'stGdfFn'});
ec('div');
ec('div');
}let cndorDb = component.data.fund > 0;
this.setState('sty7Amq', cndorDb);
if (cndorDb) { 
let elyt0wP = eo('div','qdAf',null,`class`,`row`);
let elBDiQX = eo('div','A6Vf',null,`class`,`col`);
text(`Project Fund`);
ec('div');
let elr_f1z = eo('div','Vdof',null,`class`,`col`);
let cmp3nEY = this._lc('czF0gK7sq', {parent:component,parentTop:layout,props:{coins:component.data.fund},state:'sty7Amq'});
ec('div');
ec('div');
}let elE8Diu = eo('div',null,null,`id`,`total-cost`,`class`,`row`);
let elw5HCk = eo('strong',null,null,`class`,`col`);
text(`Total:`);
ec('strong');
let eljcF22 = eo('div',null,null,`class`,`col`);
let cmpqDWd = this._lc('c9znd2N4a', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
let cndN9OD = component.finalCost == 0;
this.setState('stxmA5O', cndN9OD);
if (cndN9OD) { 
let elANFVE = eo('span','91Yf',null,`class`,`bold pink-text`);
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