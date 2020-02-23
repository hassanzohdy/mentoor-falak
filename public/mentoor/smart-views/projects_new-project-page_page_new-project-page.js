_Component({
                selector: 'new-project-page',
                c: 'NewProjectPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['createProject','user','steps','currentStep','data','next','usersService','mapUser','setSupervisors','sizes','selectSize','totalCost','maxTeamsPerSize','prev','setExtra','projectInfo','calculateTotal','isCreating','finalCost','firstProjectDiscount'],
                children: {ccqJjShqa:'flk-dropdown-list',coZgbAlhQ:'flk-dropdown-list',c0sqECiCw:'flk-datepicker',cX7m3dpEp:'flk-datepicker',c1FtAmoYd:'flk-dropdown-list',cHL_PNv39:'flk-dropdown-list',cvHYbQff7:'flk-image-input',c6qZRYj5Z:'flk-dropdown-list',cKI0Ld2JW:'gold-icon',cRYBmBG0g:'flk-dropdown-list',cAvybIT_G:'gold-icon',c5q8h6pgL:'flk-mdb-checkbox',c4VouCDzb:'gold-icon',caG78B9nE:'flk-mdb-checkbox',cZICamGdH:'gold-icon',c1NLzHSEz:'flk-mdb-checkbox',celIJ5Vel:'gold-icon',cwdjLYDcO:'flk-mdb-checkbox',c7N1GEM4z:'gold-icon',cH3Yyh_Pr:'gold-icon',cq4unch3A:'gold-icon',cLSCxs2gU:'gold-icon',cpYP1QgS7:'gold-icon',cQ7m_kiMR:'gold-icon',cjwv9HIsQ:'gold-icon',cnrIWgByu:'layout'},
                render: function (component) {
                    let cmpJEby = this._lc('cnrIWgByu', {parent:component,content:(layout) => {let elC5Tv8 = eo('h3',null,null,`class`,`bold text-sm-left text-center`);
let elK0npH = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Projects Management System [PMS]`);
ec('span');
ec('h3');
let elokDsd = eo('h1',null,null,`class`,`text-center m-y-2`);
text(`Create new project`);
ec('h1');
let cndKGin = ! Is.empty(FLAGS.projects);
this.setState('sttfark', cndKGin);
if (cndKGin) { 
let elwTQaO = eo('form','stAf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.createProject($el)}]});
component.form = elwTQaO;

                if (! elwTQaO.formHandler) {
                    window.cfrmdlr = elwTQaO.formHandler = new FormHandler(elwTQaO, component);
                } else {
                    window.cfrmdlr = elwTQaO.formHandler;
                }
            let el05u58 = eo('div','8Nff',null,`id`,`project-steps`);
let elX0HQT = eo('div','ceXf',null,`class`,`checkout-wrap`);
let elmzvKk = eo('ul','vbxf',null,`class`,`checkout-bar`);
elmzvKk.cls = {visited: component.user.isLoggedIn(), active: ! component.user.isLoggedIn()};

            for (let className in elmzvKk.cls) {
                elmzvKk.classList.toggle(className, elmzvKk.cls[className]);
            }  
            let elSvDGs = eo('li','_tpf',null,`class`,`first`);
elSvDGs.cls = {visited: component.user.isLoggedIn()};

            for (let className in elSvDGs.cls) {
                elSvDGs.classList.toggle(className, elSvDGs.cls[className]);
            }  
            let elSlBnj = eo('a','15of',null,`href`,`/login`);
text(`Login`);
ec('a');
ec('li');
for (let index in component.steps) {
let step = component.steps[index]; 
 let iiTwLN = 'sfbD_6r' + index;
let elIYKeS = eo('li','iiig3ywTn9Tp' + index+iiTwLN);
elIYKeS.cls = {visited: component.currentStep > index, previous: component.currentStep > index, active: component.currentStep == index, next: component.currentStep < index };

            for (let className in elIYKeS.cls) {
                elIYKeS.classList.toggle(className, elIYKeS.cls[className]);
            }  
            text(step);
ec('li');
}
let eli1SHZ = eo('li','10uf');
eli1SHZ.cls = {visited: component.currentStep > component.steps.length, active: component.currentStep == component.steps.length};

            for (let className in eli1SHZ.cls) {
                eli1SHZ.classList.toggle(className, eli1SHZ.cls[className]);
            }  
            text(`Finish`);
ec('li');
ec('ul');
ec('div');
ec('div');
let elos0wf = eo('div','ITef',null,`class`,`clear`);
ec('div');
let elnU7x_ = eo('div','Ohpf',null,`class`,`m-t-10`);
ec('div');
let cndhWST = ! component.user.isLoggedIn();
this.setState('stRnjB7', cndhWST);
let cndg7Df = !(cndhWST);
this.setState('stg1nDq', cndg7Df);
if (cndhWST) { 
let el553e2 = eo('h1','8Gmf',null,`class`,`text-center`);
let elJeiHF = eo('a','VYef',null,`href`,`/login`,`class`,`d-inline-block m-t-3 bold btn btn-danger`);
text(`You need to login first dude!`);
ec('a');
ec('h1');
}else { 
let elb6nfi = eo('div');
let cnd88tx = ! component.user.username;
this.setState('stHEAjg', cnd88tx);
let cndctAf = !(cnd88tx);
this.setState('stCEY6A', cndctAf);
if (cnd88tx) { 
let elBHQWv = eo('div','R0Yf');
text(`You need to set your @username and your project mates as well,`);
let elrB8Vh = eo('a','ZjZf',null,`href`,`/me#account-info-tab`,`class`,`bold purple-text ml-2`);
text(`Edit your username from here.`);
ec('a');
ec('div');
}else { 
let elQjrv4 = eo('div',null,null,`class`,`row`);
let eljUwdK = eo('div',null,null,`class`,`col-9`);
let el7Y6iE = eo('section',null,null,`class`,`simple-card p-3 project-section`);
el7Y6iE.cls = {active: component.currentStep == 0};

            for (let className in el7Y6iE.cls) {
                el7Y6iE.classList.toggle(className, el7Y6iE.cls[className]);
            }  
            let el7nwqV = eo('div',null,null,`class`,`form-group`);
el7nwqV.cls = {'group-error': !!elwTQaO.formHandler.getError(`name`) };

            for (let className in el7nwqV.cls) {
                el7nwqV.classList.toggle(className, el7nwqV.cls[className]);
            }  
            let elCyB5o = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndmxAa = true;
this.setState('stGT7LU', cndmxAa);
if (cndmxAa) { 
let elDMQvL = eo('span','mqcf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elPmJya = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elwTQaO.formHandler.addError(`name`, 'required', trans('validation.required'));}return elwTQaO.formHandler.removeError(`name`);}]},`value`,`${fval(component.data.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elPmJya.value = fval(component.data.name);
let cnd8xVy = elwTQaO.formHandler.getError(`name`);
this.setState('stlX4EE', cnd8xVy);
if (cnd8xVy) { 
let elq7nEH = eo('div','QkAf',null,`class`,`alert alert-danger`);
text(elwTQaO.formHandler.getError(`name`));
ec('div');
}ec('div');
let elhZbJJ = eo('div',null,null,`class`,`form-group`);
elhZbJJ.cls = {'group-error': !!elwTQaO.formHandler.getError(`about`) };

            for (let className in elhZbJJ.cls) {
                elhZbJJ.classList.toggle(className, elhZbJJ.cls[className]);
            }  
            let eliJdms = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let el1Et22 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKiKOa = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwTQaO.formHandler.addError(`about`, 'required', trans('validation.required'));}return elwTQaO.formHandler.removeError(`about`);}]},`value`,`${fval(component.data.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elKiKOa.value = fval(component.data.about);
ec('textarea');
let cndupEc = elwTQaO.formHandler.getError(`about`);
this.setState('strbLmh', cndupEc);
if (cndupEc) { 
let elczG8s = eo('div','IfQf',null,`class`,`alert alert-danger`);
text(elwTQaO.formHandler.getError(`about`));
ec('div');
}ec('div');
let eljpuUs = eo('div',null,null,`class`,`row`);
let elsmITi = eo('div',null,null,`class`,`col-sm-6`);
let cmpWXWL = this._lc('ccqJjShqa', {parent:component,parentTop:layout,props:{multiple:true,value:component.data.types,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let el74kYX = eo('div',null,null,`class`,`col-sm-6`);
let cmpcEjL = this._lc('coZgbAlhQ', {parent:component,parentTop:layout,props:{value:component.data.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let el57a_P = eo('div',null,null,`class`,`row m-t-1`);
let elC5ant = eo('div',null,null,`class`,`col-sm-6`);
let cmpde7P = this._lc('c0sqECiCw', {parent:component,parentTop:layout,props:{value:component.data.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let elOLZLo = eo('div',null,null,`class`,`col-sm-6`);
let cmpu2Nb = this._lc('cX7m3dpEp', {parent:component,parentTop:layout,props:{value:component.data.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elIO6RO = eo('div',null,null,`class`,`row`);
let elrTgO0 = eo('div',null,null,`class`,`col-sm-6`);
let cmpSTgg = this._lc('c1FtAmoYd', {parent:component,parentTop:layout,props:{value:component.data.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elUa0lm = eo('div',null,null,`class`,`col-sm-6`);
let cmpCBaU = this._lc('cHL_PNv39', {parent:component,parentTop:layout,props:{multiple:true,imageable:true,value:component.data.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',service:'tagsService'}});
ec('div');
ec('div');
let elpCqip = eo('div',null,null,`class`,`form-group`);
let el1AL6S = eo('label',null,null,`for`,`image`);
text(`Project Image`);
let elR22bW = eo('span',null,null,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let cmpyrcb = this._lc('cvHYbQff7', {parent:component,parentTop:layout,props:{required:true},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let elulLAn = eo('div',null,null,`class`,`text-right`);
let elXF6MQ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn btn-purple bold`);
text(`NEXT`);
let elr8iOA = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elJXmL1 = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-members`);
elJXmL1.cls = {active: component.currentStep == 1};

            for (let className in elJXmL1.cls) {
                elJXmL1.classList.toggle(className, elJXmL1.cls[className]);
            }  
            let el5xpn7 = eo('div',null,null,`class`,`row m-b-1`);
let elupNe3 = eo('div',null,null,`class`,`col-sm-2`);
text(`Project Manger`);
ec('div');
let el4ONu3 = eo('div',null,null,`class`,`bold col`);
text(`You`);
let elm9mbs = ev('br');
let elCDvit = eo('small');
text(`Can be changed later with additional cost.`);
ec('small');
ec('div');
ec('div');
let elHkANO = eo('div',null,null,`class`,`row m-t-1 m-b-1`);
let elZcVAl = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Supervisors`);
ec('div');
let el0uYpv = eo('div',null,null,`class`,`bold col`);
let cmpPWES = this._lc('c6qZRYj5Z', {parent:component,parentTop:layout,props:{multiple:true,lazyLoading:true,remoteSearch:true,service:component.usersService,value:component.data.supervisors},events:{onmap:function(e) {let $el = this; return component.mapUser(e)},onselect:function(e) {let $el = this; component.setSupervisors(e)}},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Supervisors',query:'username'}});
let elQ812V = eo('small');
let elkh0Ok = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpybhQ = this._lc('cKI0Ld2JW', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.extra.supervisor}});
let elF7w0f = eo('span',null,null,`class`,`ml-2`);
text(`per supervisor`);
ec('span');
let elwrzX1 = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
ec('small');
ec('div');
ec('div');
let elZ4FAS = eo('div',null,null,`class`,`row m-b-1`);
let elODLLo = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Project members size`);
ec('div');
let elu5VCe = eo('div',null,null,`class`,`bold col`);
let cnd0p2C = component.currentStep >= 1;
this.setState('stM1l0F', cnd0p2C);
if (cnd0p2C) { 
component.sizesDropdown = this._lc('cRYBmBG0g', {parent:component,parentTop:layout,props:{required:true,value:component.data.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.selectSize(e)}},attrs:{name:`${(`membersSize`).toInputName()}`,placeholder:`${trans(`Select project members size`)}`,heading:'Project Members Size'},state:'stM1l0F'});
}let elnE9BH = eo('small');
text(`Project Manager and Supervisor(s) are Not Inclusive.`);
ec('small');
let cndtaG1 = component.totalCost.MembersSize > 0;
this.setState('staYtIX', cndtaG1);
if (cndtaG1) { 
let el2TKBO = eo('div','i3Ef');
let elhOoxm = eo('small','MCgf');
let elMA45I = eo('i','Aekf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmptTRa = this._lc('cAvybIT_G', {parent:component,parentTop:layout,props:{coins:component.totalCost.MembersSize},state:'staYtIX'});
ec('small');
ec('div');
}let elaFmHw = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
let cnd1o8N = component.maxTeamsPerSize;
this.setState('stTDjns', cnd1o8N);
if (cnd1o8N) { 
let elIYC9p = eo('div','X0Sf',null,`class`,`teal-text`);
let elIFxrz = eo('span','ul5f',null,`class`,`bold mr-1`);
text(component.maxTeamsPerSize);
ec('span');
text(`Free Teams`);
ec('div');
}ec('div');
ec('div');
let elTxYCA = eo('div',null,null,`class`,`m-t-1`);
let elB1Zll = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let eljKJvB = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let elkTgOW = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let elwuXmD = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elYakIL = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-extras`);
elYakIL.cls = {active: component.currentStep == 2};

            for (let className in elYakIL.cls) {
                elYakIL.classList.toggle(className, elYakIL.cls[className]);
            }  
            let elLGLAK = eo('div',null,null,`class`,`m-2`);
let el9l9ZC = eo('h3',null,null,`class`,`bold m-b-2`);
text(`You can get additional features to your project, which will increase its productivity.`);
ec('h3');
let elAQf3Y = eo('table',null,null,`class`,`table table-bordered`);
let el1Rc2A = eo('thead');
let el9B2nm = eo('tr');
let elIGj40 = eo('th');
text(`Feature`);
ec('th');
let elVNQGz = eo('th');
text(`Cost`);
ec('th');
let el7fWvu = eo('th');
text(`Description`);
ec('th');
ec('tr');
ec('thead');
let elbrpOI = eo('tbody');
let el6KJjK = eo('tr');
let el00E8i = eo('td');
let cmpSGiq = this._lc('c5q8h6pgL', {parent:component,parentTop:layout,props:{checked:component.data.extra.privacy,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('privacy', $el.checked)}},boolAttrs:{checked:component.data.extra.privacy},attrs:{name:`${(`extra.privacy`).toInputName()}`,label:'Private project'}});
ec('td');
let elWwGj_ = eo('td');
let elt20bY = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpq_A8 = this._lc('c4VouCDzb', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.privacy}});
ec('td');
let elv_Qra = eo('td');
text(`Public projects will be listed in the`);
let el8j8bX = eo('strong',null,null,`class`,`mx-2`);
text(`PMS`);
ec('strong');
text(`page.`);
ec('td');
ec('tr');
let el6Koix = eo('tr');
let elSCwvn = eo('td');
let cmpFK4x = this._lc('caG78B9nE', {parent:component,parentTop:layout,props:{checked:component.data.extra.tasksBoard},events:{onchange:function(e) {let $el = this; component.setExtra('tasksBoard', $el.checked)}},boolAttrs:{checked:component.data.extra.tasksBoard},attrs:{name:`${(`extra.tasksBoard`).toInputName()}`,value:'true',label:'Project Tasks Board'}});
ec('td');
let el8Ema_ = eo('td');
let cndZq9w = component.projectInfo.pricing.tasksBoard > 0;
this.setState('stOdQt6', cndZq9w);
if (cndZq9w) { 
let elzu5hO = eo('i','ajef',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
}let cmp0XRf = this._lc('cZICamGdH', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.tasksBoard}});
let cndzTtI = component.projectInfo.pricing.tasksBoard == 0;
this.setState('staroTI', cndzTtI);
if (cndzTtI) { 
let elNOWps = eo('span','z31f',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('td');
let elyITGQ = eo('td');
text(`Tasks Board will be your game changer setting in the project as project manager/team leaders can
                        assign tasks to any member in the project/team with un/scheduled tasks.`);
ec('td');
ec('tr');
let el2e6py = eo('tr');
let elr2ygm = eo('td');
let cmpT09k = this._lc('c1NLzHSEz', {parent:component,parentTop:layout,props:{checked:component.data.extra.softwareTesting,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('softwareTesting', $el.checked)}},boolAttrs:{checked:component.data.extra.softwareTesting},attrs:{name:`${(`extra.softwareTesting`).toInputName()}`,label:'Project Software testing'}});
ec('td');
let el3gfph = eo('td');
let el8KQy9 = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpC8kF = this._lc('celIJ5Vel', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.softwareTesting}});
ec('td');
let elpVeoP = eo('td');
text(`If enabled, a full debugging|issues|bugs system will be injected to your project.`);
ec('td');
ec('tr');
let elnDWMU = eo('tr');
let elSW98y = eo('td');
let cmpHh2n = this._lc('cwdjLYDcO', {parent:component,parentTop:layout,props:{checked:component.data.extra.milestones,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('milestones', $el.checked)}},boolAttrs:{checked:component.data.extra.milestones},attrs:{name:`${(`extra.milestones`).toInputName()}`,label:'Project Milestones'}});
ec('td');
let elecHAJ = eo('td');
let elVIU6X = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpV6ol = this._lc('c7N1GEM4z', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.milestones}});
ec('td');
let el9gZ1i = eo('td');
text(`This will increase project productivity and enhance it to the next level, read more about`);
let ely9e2J = eo('strong',null,null,`class`,`ml-1`);
text(`Agile Methodology Scrum`);
ec('strong');
ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('div');
let elyhVql = eo('div',null,null,`class`,`m-t-1`);
let elnslNn = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elCBNei = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let el99hwk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let el7silf = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elH9URY = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-finish`);
elH9URY.cls = {active: component.currentStep == 3};

            for (let className in elH9URY.cls) {
                elH9URY.classList.toggle(className, elH9URY.cls[className]);
            }  
            let eli72kW = eo('h1',null,null,`class`,`m-b-1`);
text(`Project Fund`);
ec('h1');
let eloJtUF = eo('p');
text(`Project fund is quite necessary to be filled with`);
let cmpWP_P = this._lc('cH3Yyh_Pr', {parent:component,parentTop:layout});
text(`as it will be used later to:`);
ec('p');
let elN_h3P = eo('ul');
let eloqW20 = eo('li');
text(`Create tasks and give rewards`);
ec('li');
let elGnG4s = eo('li');
text(`make contracts with freelancers`);
ec('li');
let el5bDWo = eo('li');
text(`Purchase more teams`);
ec('li');
let elDeU76 = eo('li');
text(`Upgrade project members size`);
ec('li');
let el84C4A = eo('li');
text(`Purchase extras`);
ec('li');
let elD_qso = eo('li');
text(`Add more supervisors`);
ec('li');
ec('ul');
let el2Rz9C = eo('p');
ec('p');
let elrYUVA = eo('div',null,null,`class`,`row text-center`);
let elJQFuo = eo('div',null,null,`class`,`offset-sm-3 col-sm-6`);
let eloWkFj = eo('div',null,null,`class`,`form-group`);
eloWkFj.cls = {'group-error': !!elwTQaO.formHandler.getError(`fund`) };

            for (let className in eloWkFj.cls) {
                eloWkFj.classList.toggle(className, eloWkFj.cls[className]);
            }  
            let el0dgKf = eo('label',null,null,`for`,`fund`);
text(trans('Project Fund'));
ec('label');
let elcR9Fq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.fund = this.value;},function(e) {var $el = this;component.calculateTotal()}]},`value`,`${fval(component.data.fund)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Project Fund`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
elcR9Fq.value = fval(component.data.fund);
ec('div');
let elk777H = eo('p',null,null,`class`,`bold`);
text(`Can be incremented later.`);
ec('p');
ec('div');
ec('div');
let el6B2Ac = eo('div',null,null,`class`,`text-center m-t-2`);
let elE58vO = eo('button',null,null, boolAttrs, {disabled:component.isCreating || component.finalCost > component.user.gold},`class`,`btn btn-success bold`);
let elqt0Lt = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Create`);
let elAXYPF = ev('br');
let cmpBW0I = this._lc('cq4unch3A', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
ec('button');
let cndbnNM = component.finalCost > component.user.gold;
this.setState('st4CGnZ', cndbnNM);
if (cndbnNM) { 
let elPbWly = eo('div','Levf',null,`class`,`red-text bold`);
text(`Insufficient gold`);
ec('div');
}ec('div');
let elBA50W = eo('div',null,null,`class`,`m-t-1`);
let ellvEhm = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elI_FBH = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
ec('div');
ec('section');
ec('div');
let elfREeM = eo('div',null,null,`class`,`col`);
let elJU9oE = eo('div',null,null,`class`,`simple-card`,`id`,`project-total-cost`);
let el5rh3O = eo('h3',null,null,`class`,`text-center bold m-b-1`);
text(`Project Cost`);
ec('h3');
for (let costKey in component.totalCost) {
let cost = component.totalCost[costKey]; 
 let iiBZqo = 'hIJ8gOh' + costKey;
let eljzMOx = eo('div','VX2jmLdHnRa4' + costKey+iiBZqo,null,`class`,`row`);
let elUx4Hu = eo('div','UcSff'+iiBZqo,null,`class`,`col`);
text(costKey);
ec('div');
let elUzAAf = eo('div','x3zff'+iiBZqo,null,`class`,`col`);
let cmpDS43 = this._lc('cLSCxs2gU', {parent:component,parentTop:layout,props:{coins:cost},insideLoop:true,index:"" +iiBZqo});
let cndSjA2 = cost == 0;
this.setState('stiJCkf', cndSjA2);
if (cndSjA2) { 
let elobRcA = eo('span','2xmff'+iiBZqo,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('div');
ec('div');
}
let cndgBeD = component.firstProjectDiscount > 0;
this.setState('st7zicJ', cndgBeD);
if (cndgBeD) { 
let elIRCwa = eo('div','Fv4f',null,`class`,`row`);
let elG5kAg = eo('div','76tf',null,`class`,`col`);
text(`First Project Discount`);
ec('div');
let el2qWNm = eo('div','uLuf',null,`class`,`col`);
let elVzut2 = eo('i','IG3f',null,`class`,`${fas('minus') + ' icon'}`);
ec('i');
let cmpQswO = this._lc('cpYP1QgS7', {parent:component,parentTop:layout,props:{coins:component.firstProjectDiscount},state:'st7zicJ'});
ec('div');
ec('div');
}let cndJyya = component.data.fund > 0;
this.setState('sts8Rx5', cndJyya);
if (cndJyya) { 
let elf622g = eo('div','Wzdf',null,`class`,`row`);
let elhiJcL = eo('div','iXdf',null,`class`,`col`);
text(`Project Fund`);
ec('div');
let elBqye0 = eo('div','pY9f',null,`class`,`col`);
let cmpLLja = this._lc('cQ7m_kiMR', {parent:component,parentTop:layout,props:{coins:component.data.fund},state:'sts8Rx5'});
ec('div');
ec('div');
}let elbtLju = eo('div',null,null,`id`,`total-cost`,`class`,`row`);
let elsuEK0 = eo('strong',null,null,`class`,`col`);
text(`Total:`);
ec('strong');
let el0lQPC = eo('div',null,null,`class`,`col`);
let cmpkRtJ = this._lc('cjwv9HIsQ', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
let cndhCtA = component.finalCost == 0;
this.setState('st5Ds8_', cndhCtA);
if (cndhCtA) { 
let elsRilQ = eo('span','m0Kf',null,`class`,`bold pink-text`);
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