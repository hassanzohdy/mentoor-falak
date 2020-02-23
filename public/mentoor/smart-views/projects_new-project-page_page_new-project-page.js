_Component({
                selector: 'new-project-page',
                c: 'NewProjectPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['createProject','user','steps','currentStep','data','next','usersService','mapUser','setSupervisors','sizes','selectSize','totalCost','maxTeamsPerSize','prev','setExtra','projectInfo','calculateTotal','isCreating','finalCost','firstProjectDiscount'],
                children: {cVI8D4gnZ:'flk-dropdown-list',c52EEN8uf:'flk-dropdown-list',cWmhrmqv1:'flk-datepicker',c8mZqCheq:'flk-datepicker',cw1yJz1_m:'flk-dropdown-list',cqd9z_EPu:'flk-dropdown-list',cLARExBsw:'flk-image-input',cOVChsgFg:'flk-dropdown-list',cWXz2jm7u:'gold-icon',c6Xn7Kxn5:'flk-dropdown-list',c2O0Sw2qd:'gold-icon',cEPm3rWBn:'flk-mdb-checkbox',c_cmSQHgs:'gold-icon',cCY76jJMb:'flk-mdb-checkbox',cXYFS631j:'gold-icon',cncX9DIkG:'flk-mdb-checkbox',cVoLIAJdF:'gold-icon',cDi8ynECA:'flk-mdb-checkbox',cGrhb9D65:'gold-icon',cWqJ8GRkQ:'gold-icon',c0mDP0Zpa:'gold-icon',cMDaBDusz:'gold-icon',c8FLsJ3Uu:'gold-icon',cbMP6oNrk:'gold-icon',ckiCFtDjG:'gold-icon',cdjHyYhhi:'layout'},
                render: function (component) {
                    let cmpBTho = this._lc('cdjHyYhhi', {parent:component,content:(layout) => {let elAI7bk = eo('h3',null,null,`class`,`bold text-sm-left text-center`);
let elWbWXU = eo('span',null,null,`class`,`d-block d-sm-inline`);
text(`Projects Management System [PMS]`);
ec('span');
ec('h3');
let ellBXhg = eo('h1',null,null,`class`,`text-center m-y-2`);
text(`Create new project`);
ec('h1');
let cndyKVO = ! Is.empty(FLAGS.projects);
this.setState('st70VOn', cndyKVO);
if (cndyKVO) { 
let elzUATi = eo('form','THFf',null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.createProject($el)}]});
component.form = elzUATi;

                if (! elzUATi.formHandler) {
                    window.cfrmdlr = elzUATi.formHandler = new FormHandler(elzUATi, component);
                } else {
                    window.cfrmdlr = elzUATi.formHandler;
                }
            let el4c9K8 = eo('div','009f',null,`id`,`project-steps`);
let elCW0zL = eo('div','30nf',null,`class`,`checkout-wrap`);
let elN4y8f = eo('ul','cAdf',null,`class`,`checkout-bar`);
elN4y8f.cls = {visited: component.user.isLoggedIn(), active: ! component.user.isLoggedIn()};

            for (let className in elN4y8f.cls) {
                elN4y8f.classList.toggle(className, elN4y8f.cls[className]);
            }  
            let elN8w0k = eo('li','DMlf',null,`class`,`first`);
elN8w0k.cls = {visited: component.user.isLoggedIn()};

            for (let className in elN8w0k.cls) {
                elN8w0k.classList.toggle(className, elN8w0k.cls[className]);
            }  
            let eluvvmq = eo('a','qcKf',null,`href`,`/login`);
text(`Login`);
ec('a');
ec('li');
for (let index in component.steps) {
let step = component.steps[index]; 
 let iivBTX = 'nl0zcit' + index;
let el9LAKr = eo('li','9QPWhtEHHNAh' + index+iivBTX);
el9LAKr.cls = {visited: component.currentStep > index, previous: component.currentStep > index, active: component.currentStep == index, next: component.currentStep < index };

            for (let className in el9LAKr.cls) {
                el9LAKr.classList.toggle(className, el9LAKr.cls[className]);
            }  
            text(step);
ec('li');
}
let elwJuLN = eo('li','P7nf');
elwJuLN.cls = {visited: component.currentStep > component.steps.length, active: component.currentStep == component.steps.length};

            for (let className in elwJuLN.cls) {
                elwJuLN.classList.toggle(className, elwJuLN.cls[className]);
            }  
            text(`Finish`);
ec('li');
ec('ul');
ec('div');
ec('div');
let elJtyDm = eo('div','AbRf',null,`class`,`clear`);
ec('div');
let elQ2g0r = eo('div','IGzf',null,`class`,`m-t-10`);
ec('div');
let cndt50o = ! component.user.isLoggedIn();
this.setState('st3rCWx', cndt50o);
let cndfrQC = !(cndt50o);
this.setState('stcyAlZ', cndfrQC);
if (cndt50o) { 
let elmpx4G = eo('h1','pKaf',null,`class`,`text-center`);
let elnPTDY = eo('a','zR8f',null,`href`,`/login`,`class`,`d-inline-block m-t-3 bold btn btn-danger`);
text(`You need to login first dude!`);
ec('a');
ec('h1');
}else { 
let elZ3P3H = eo('div');
let cndTUFk = ! component.user.username;
this.setState('stu3wpR', cndTUFk);
let cndWLuI = !(cndTUFk);
this.setState('stzlkAh', cndWLuI);
if (cndTUFk) { 
let elYgr1n = eo('div','BG3f');
text(`You need to set your @username and your project mates as well,`);
let elDqG1w = eo('a','k5Mf',null,`href`,`/me#account-info-tab`,`class`,`bold purple-text ml-2`);
text(`Edit your username from here.`);
ec('a');
ec('div');
}else { 
let elaiWRG = eo('div',null,null,`class`,`row`);
let elQhDBi = eo('div',null,null,`class`,`col-9`);
let elNfUvB = eo('section',null,null,`class`,`simple-card p-3 project-section`);
elNfUvB.cls = {active: component.currentStep == 0};

            for (let className in elNfUvB.cls) {
                elNfUvB.classList.toggle(className, elNfUvB.cls[className]);
            }  
            let el5XPyl = eo('div',null,null,`class`,`form-group`);
el5XPyl.cls = {'group-error': !!elzUATi.formHandler.getError(`name`) };

            for (let className in el5XPyl.cls) {
                el5XPyl.classList.toggle(className, el5XPyl.cls[className]);
            }  
            let el4IaqE = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndgs7W = true;
this.setState('stBfIm4', cndgs7W);
if (cndgs7W) { 
let eldLOpt = eo('span','8csf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elmhJSO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elzUATi.formHandler.addError(`name`, 'required', trans('validation.required'));}return elzUATi.formHandler.removeError(`name`);}]},`value`,`${fval(component.data.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elmhJSO.value = fval(component.data.name);
let cndnqxb = elzUATi.formHandler.getError(`name`);
this.setState('stNOf2i', cndnqxb);
if (cndnqxb) { 
let elt_9Sd = eo('div','qdGf',null,`class`,`alert alert-danger`);
text(elzUATi.formHandler.getError(`name`));
ec('div');
}ec('div');
let elS7fIf = eo('div',null,null,`class`,`form-group`);
elS7fIf.cls = {'group-error': !!elzUATi.formHandler.getError(`about`) };

            for (let className in elS7fIf.cls) {
                elS7fIf.classList.toggle(className, elS7fIf.cls[className]);
            }  
            let el6ogcn = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let eljTUPa = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elu7DJr = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elzUATi.formHandler.addError(`about`, 'required', trans('validation.required'));}return elzUATi.formHandler.removeError(`about`);}]},`value`,`${fval(component.data.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elu7DJr.value = fval(component.data.about);
ec('textarea');
let cnd0j6c = elzUATi.formHandler.getError(`about`);
this.setState('st3NdDC', cnd0j6c);
if (cnd0j6c) { 
let el5hp7e = eo('div','L4Pf',null,`class`,`alert alert-danger`);
text(elzUATi.formHandler.getError(`about`));
ec('div');
}ec('div');
let el17PX0 = eo('div',null,null,`class`,`row`);
let elj8rpD = eo('div',null,null,`class`,`col-sm-6`);
let cmpM5uG = this._lc('cVI8D4gnZ', {parent:component,parentTop:layout,props:{multiple:true,value:component.data.types,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let elANNwt = eo('div',null,null,`class`,`col-sm-6`);
let cmppppA = this._lc('c52EEN8uf', {parent:component,parentTop:layout,props:{value:component.data.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let elsXV4W = eo('div',null,null,`class`,`row m-t-1`);
let elBa5pB = eo('div',null,null,`class`,`col-sm-6`);
let cmp0W85 = this._lc('cWmhrmqv1', {parent:component,parentTop:layout,props:{value:component.data.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let elqgReZ = eo('div',null,null,`class`,`col-sm-6`);
let cmpPXHv = this._lc('c8mZqCheq', {parent:component,parentTop:layout,props:{value:component.data.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elFObr9 = eo('div',null,null,`class`,`row`);
let elec4I6 = eo('div',null,null,`class`,`col-sm-6`);
let cmpeI0_ = this._lc('cw1yJz1_m', {parent:component,parentTop:layout,props:{value:component.data.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elNII4x = eo('div',null,null,`class`,`col-sm-6`);
let cmppEbr = this._lc('cqd9z_EPu', {parent:component,parentTop:layout,props:{multiple:true,imageable:true,value:component.data.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',service:'tagsService'}});
ec('div');
ec('div');
let elWoUuI = eo('div',null,null,`class`,`form-group`);
let elWYgnN = eo('label',null,null,`for`,`image`);
text(`Project Image`);
let elmRlGa = eo('span',null,null,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let cmpJPRE = this._lc('cLARExBsw', {parent:component,parentTop:layout,props:{required:true},attrs:{name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
let el2fmV0 = eo('div',null,null,`class`,`text-right`);
let el1hL7C = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn btn-purple bold`);
text(`NEXT`);
let elbLI3n = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let el6edLQ = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-members`);
el6edLQ.cls = {active: component.currentStep == 1};

            for (let className in el6edLQ.cls) {
                el6edLQ.classList.toggle(className, el6edLQ.cls[className]);
            }  
            let elrFDT6 = eo('div',null,null,`class`,`row m-b-1`);
let elSHEtw = eo('div',null,null,`class`,`col-sm-2`);
text(`Project Manger`);
ec('div');
let elbwjZn = eo('div',null,null,`class`,`bold col`);
text(`You`);
let elcYvvl = ev('br');
let elcydRf = eo('small');
text(`Can be changed later with additional cost.`);
ec('small');
ec('div');
ec('div');
let elILCYg = eo('div',null,null,`class`,`row m-t-1 m-b-1`);
let elsKYef = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Supervisors`);
ec('div');
let elSs1ap = eo('div',null,null,`class`,`bold col`);
let cmpEw4W = this._lc('cOVChsgFg', {parent:component,parentTop:layout,props:{multiple:true,lazyLoading:true,remoteSearch:true,service:component.usersService,value:component.data.supervisors},events:{onmap:function(e) {let $el = this; return component.mapUser(e)},onselect:function(e) {let $el = this; component.setSupervisors(e)}},boolAttrs:{multiple:true},attrs:{name:`${(`supervisors[]`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Supervisors',query:'username'}});
let elGXFaM = eo('small');
let elUElKJ = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmp8qSK = this._lc('cWXz2jm7u', {parent:component,parentTop:layout,props:{coins:FLAGS.projects.pricing.extra.supervisor}});
let elNtoCW = eo('span',null,null,`class`,`ml-2`);
text(`per supervisor`);
ec('span');
let elbHqce = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
ec('small');
ec('div');
ec('div');
let elgYaVH = eo('div',null,null,`class`,`row m-b-1`);
let ellLXcu = eo('div',null,null,`class`,`col-sm-2 m-t-1`);
text(`Project members size`);
ec('div');
let elfvw7S = eo('div',null,null,`class`,`bold col`);
let cndVJUk = component.currentStep >= 1;
this.setState('stOHfQk', cndVJUk);
if (cndVJUk) { 
component.sizesDropdown = this._lc('c6Xn7Kxn5', {parent:component,parentTop:layout,props:{required:true,value:component.data.size,items:component.sizes},events:{onselect:function(e) {let $el = this; component.selectSize(e)}},attrs:{name:`${(`membersSize`).toInputName()}`,placeholder:`${trans(`Select project members size`)}`,heading:'Project Members Size'},state:'stOHfQk'});
}let elHO7KZ = eo('small');
text(`Project Manager and Supervisor(s) are Not Inclusive.`);
ec('small');
let cndld3g = component.totalCost.MembersSize > 0;
this.setState('stzH47J', cndld3g);
if (cndld3g) { 
let elsde_i = eo('div','7mSf');
let el98d9p = eo('small','FOMf');
let elK4ugx = eo('i','PlVf',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpcSq5 = this._lc('c2O0Sw2qd', {parent:component,parentTop:layout,props:{coins:component.totalCost.MembersSize},state:'stzH47J'});
ec('small');
ec('div');
}let elFR0YR = eo('small',null,null,`class`,`bold ml-2`);
text(`Can be changed later.`);
ec('small');
let cndk_TH = component.maxTeamsPerSize;
this.setState('st0yvCo', cndk_TH);
if (cndk_TH) { 
let elZqmc_ = eo('div','S1Yf',null,`class`,`teal-text`);
let elEzV1h = eo('span','yIlf',null,`class`,`bold mr-1`);
text(component.maxTeamsPerSize);
ec('span');
text(`Free Teams`);
ec('div');
}ec('div');
ec('div');
let elxr6fw = eo('div',null,null,`class`,`m-t-1`);
let el2Zyok = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elp8aOH = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let elNmFxZ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let elqeg8X = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let eljEoSS = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-extras`);
eljEoSS.cls = {active: component.currentStep == 2};

            for (let className in eljEoSS.cls) {
                eljEoSS.classList.toggle(className, eljEoSS.cls[className]);
            }  
            let elLfSl1 = eo('div',null,null,`class`,`m-2`);
let elIVYfY = eo('h3',null,null,`class`,`bold m-b-2`);
text(`You can get additional features to your project, which will increase its productivity.`);
ec('h3');
let el0G0cW = eo('table',null,null,`class`,`table table-bordered`);
let el7waCU = eo('thead');
let el82NL2 = eo('tr');
let elemHsA = eo('th');
text(`Feature`);
ec('th');
let elbPADD = eo('th');
text(`Cost`);
ec('th');
let eluzjlh = eo('th');
text(`Description`);
ec('th');
ec('tr');
ec('thead');
let el2ZT81 = eo('tbody');
let elsGke3 = eo('tr');
let el5TAn7 = eo('td');
let cmp1Tts = this._lc('cEPm3rWBn', {parent:component,parentTop:layout,props:{checked:component.data.extra.privacy,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('privacy', $el.checked)}},boolAttrs:{checked:component.data.extra.privacy},attrs:{name:`${(`extra.privacy`).toInputName()}`,label:'Private project'}});
ec('td');
let el9gX7w = eo('td');
let elho6v_ = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpi2Tk = this._lc('c_cmSQHgs', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.privacy}});
ec('td');
let elBtTUs = eo('td');
text(`Public projects will be listed in the`);
let elnLJbP = eo('strong',null,null,`class`,`mx-2`);
text(`PMS`);
ec('strong');
text(`page.`);
ec('td');
ec('tr');
let el3lP4B = eo('tr');
let elln3MQ = eo('td');
let cmpGemq = this._lc('cCY76jJMb', {parent:component,parentTop:layout,props:{checked:component.data.extra.tasksBoard},events:{onchange:function(e) {let $el = this; component.setExtra('tasksBoard', $el.checked)}},boolAttrs:{checked:component.data.extra.tasksBoard},attrs:{name:`${(`extra.tasksBoard`).toInputName()}`,value:'true',label:'Project Tasks Board'}});
ec('td');
let el0OdVO = eo('td');
let cndBTZm = component.projectInfo.pricing.tasksBoard > 0;
this.setState('stL5CVl', cndBTZm);
if (cndBTZm) { 
let elkCwQB = eo('i','mxif',null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
}let cmpHTAi = this._lc('cXYFS631j', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.tasksBoard}});
let cndxH9J = component.projectInfo.pricing.tasksBoard == 0;
this.setState('stAOEv3', cndxH9J);
if (cndxH9J) { 
let el_1z5K = eo('span','mTJf',null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('td');
let el6J3y5 = eo('td');
text(`Tasks Board will be your game changer setting in the project as project manager/team leaders can
                        assign tasks to any member in the project/team with un/scheduled tasks.`);
ec('td');
ec('tr');
let elttxHj = eo('tr');
let elotTD9 = eo('td');
let cmpZaTs = this._lc('cncX9DIkG', {parent:component,parentTop:layout,props:{checked:component.data.extra.softwareTesting,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('softwareTesting', $el.checked)}},boolAttrs:{checked:component.data.extra.softwareTesting},attrs:{name:`${(`extra.softwareTesting`).toInputName()}`,label:'Project Software testing'}});
ec('td');
let elatCGF = eo('td');
let elozbh6 = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmpi1D_ = this._lc('cVoLIAJdF', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.softwareTesting}});
ec('td');
let elohzRQ = eo('td');
text(`If enabled, a full debugging|issues|bugs system will be injected to your project.`);
ec('td');
ec('tr');
let eltN4wr = eo('tr');
let elhKh0I = eo('td');
let cmpCHgY = this._lc('cDi8ynECA', {parent:component,parentTop:layout,props:{checked:component.data.extra.milestones,value:true},events:{onchange:function(e) {let $el = this; component.setExtra('milestones', $el.checked)}},boolAttrs:{checked:component.data.extra.milestones},attrs:{name:`${(`extra.milestones`).toInputName()}`,label:'Project Milestones'}});
ec('td');
let elOyIC0 = eo('td');
let elioF6S = eo('i',null,null,`class`,`${fas('plus') + ' icon'}`);
ec('i');
let cmp6SSs = this._lc('cGrhb9D65', {parent:component,parentTop:layout,props:{coins:component.projectInfo.pricing.milestones}});
ec('td');
let el7kVT8 = eo('td');
text(`This will increase project productivity and enhance it to the next level, read more about`);
let elZBDrR = eo('strong',null,null,`class`,`ml-1`);
text(`Agile Methodology Scrum`);
ec('strong');
ec('td');
ec('tr');
ec('tbody');
ec('table');
ec('div');
let elNNDTs = eo('div',null,null,`class`,`m-t-1`);
let elVGEeV = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elr_jfp = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
let el9J1TS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.next()}]},`type`,`button`,`class`,`btn float-right btn-purple bold`);
text(`NEXT`);
let eld20Oz = eo('i',null,null,`class`,`${fas('arrow-right') + ' icon'}`);
ec('i');
ec('button');
ec('div');
ec('section');
let elfpVc1 = eo('section',null,null,`class`,`simple-card project-section`,`id`,`new-project-finish`);
elfpVc1.cls = {active: component.currentStep == 3};

            for (let className in elfpVc1.cls) {
                elfpVc1.classList.toggle(className, elfpVc1.cls[className]);
            }  
            let eldeUuk = eo('h1',null,null,`class`,`m-b-1`);
text(`Project Fund`);
ec('h1');
let elmfuKF = eo('p');
text(`Project fund is quite necessary to be filled with`);
let cmpyetZ = this._lc('cWqJ8GRkQ', {parent:component,parentTop:layout});
text(`as it will be used later to:`);
ec('p');
let elyGOs0 = eo('ul');
let elwjFZ3 = eo('li');
text(`Create tasks and give rewards`);
ec('li');
let elR0Jj1 = eo('li');
text(`make contracts with freelancers`);
ec('li');
let eloB58G = eo('li');
text(`Purchase more teams`);
ec('li');
let elBMckV = eo('li');
text(`Upgrade project members size`);
ec('li');
let elDNJPf = eo('li');
text(`Purchase extras`);
ec('li');
let elrpZZW = eo('li');
text(`Add more supervisors`);
ec('li');
ec('ul');
let elpdN2x = eo('p');
ec('p');
let elueExZ = eo('div',null,null,`class`,`row text-center`);
let ellEsJp = eo('div',null,null,`class`,`offset-sm-3 col-sm-6`);
let elWr_WI = eo('div',null,null,`class`,`form-group`);
elWr_WI.cls = {'group-error': !!elzUATi.formHandler.getError(`fund`) };

            for (let className in elWr_WI.cls) {
                elWr_WI.classList.toggle(className, elWr_WI.cls[className]);
            }  
            let el0r1s0 = eo('label',null,null,`for`,`fund`);
text(trans('Project Fund'));
ec('label');
let el7bCAo = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.fund = this.value;},function(e) {var $el = this;component.calculateTotal()}]},`value`,`${fval(component.data.fund)}`,`name`,`${(`fund`).toInputName()}`,`placeholder`,`${trans(`Project Fund`)}`,`type`,`number`,`class`,`form-control`,`id`,`fund`);
el7bCAo.value = fval(component.data.fund);
ec('div');
let eliIYIG = eo('p',null,null,`class`,`bold`);
text(`Can be incremented later.`);
ec('p');
ec('div');
ec('div');
let el7ESUD = eo('div',null,null,`class`,`text-center m-t-2`);
let el7b9qV = eo('button',null,null, boolAttrs, {disabled:component.isCreating || component.finalCost > component.user.gold},`class`,`btn btn-success bold`);
let elnXgFi = eo('i',null,null,`class`,`${fas('plus') + ' mr-2 icon'}`);
ec('i');
text(`Create`);
let eljgB1f = ev('br');
let cmpUlzx = this._lc('c0mDP0Zpa', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
ec('button');
let cndPoUK = component.finalCost > component.user.gold;
this.setState('st47iNc', cndPoUK);
if (cndPoUK) { 
let elgEfXh = eo('div','JDtf',null,`class`,`red-text bold`);
text(`Insufficient gold`);
ec('div');
}ec('div');
let el2Jrlq = eo('div',null,null,`class`,`m-t-1`);
let elJOqkR = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.prev()}]},`type`,`button`,`class`,`btn btn-gray bold`);
let elXPDdn = eo('i',null,null,`class`,`${fas('arrow-left') + ' icon'}`);
ec('i');
text(`Back`);
ec('button');
ec('div');
ec('section');
ec('div');
let el5OgdB = eo('div',null,null,`class`,`col`);
let elFbOpK = eo('div',null,null,`class`,`simple-card`,`id`,`project-total-cost`);
let elqrDeZ = eo('h3',null,null,`class`,`text-center bold m-b-1`);
text(`Project Cost`);
ec('h3');
for (let costKey in component.totalCost) {
let cost = component.totalCost[costKey]; 
 let iimhPS = 'ZhVosxt' + costKey;
let elj_Aev = eo('div','7vn7Rl5GxoY0' + costKey+iimhPS,null,`class`,`row`);
let elaXO1u = eo('div','377ff'+iimhPS,null,`class`,`col`);
text(costKey);
ec('div');
let elsrSYe = eo('div','XwFff'+iimhPS,null,`class`,`col`);
let cmp8R57 = this._lc('cMDaBDusz', {parent:component,parentTop:layout,props:{coins:cost},insideLoop:true,index:"" +iimhPS});
let cnd10AL = cost == 0;
this.setState('stP8Yhe', cnd10AL);
if (cnd10AL) { 
let elm9zg8 = eo('span','x6gff'+iimhPS,null,`class`,`bold pink-text`);
text(`FREE!`);
ec('span');
}ec('div');
ec('div');
}
let cndFkhK = component.firstProjectDiscount > 0;
this.setState('strueE0', cndFkhK);
if (cndFkhK) { 
let elokmqu = eo('div','DUXf',null,`class`,`row`);
let ellrn7A = eo('div','vVtf',null,`class`,`col`);
text(`First Project Discount`);
ec('div');
let elxwkjK = eo('div','WrDf',null,`class`,`col`);
let elJhGgn = eo('i','l3Jf',null,`class`,`${fas('minus') + ' icon'}`);
ec('i');
let cmpgSX3 = this._lc('c8FLsJ3Uu', {parent:component,parentTop:layout,props:{coins:component.firstProjectDiscount},state:'strueE0'});
ec('div');
ec('div');
}let cndyMFZ = component.data.fund > 0;
this.setState('st7Sqbr', cndyMFZ);
if (cndyMFZ) { 
let elu0nXr = eo('div','c0af',null,`class`,`row`);
let elxbiU7 = eo('div','vVlf',null,`class`,`col`);
text(`Project Fund`);
ec('div');
let elUs3kw = eo('div','EUBf',null,`class`,`col`);
let cmpZsrm = this._lc('cbMP6oNrk', {parent:component,parentTop:layout,props:{coins:component.data.fund},state:'st7Sqbr'});
ec('div');
ec('div');
}let ellQ07d = eo('div',null,null,`id`,`total-cost`,`class`,`row`);
let elzWz3P = eo('strong',null,null,`class`,`col`);
text(`Total:`);
ec('strong');
let el8NXS9 = eo('div',null,null,`class`,`col`);
let cmpMDdI = this._lc('ckiCFtDjG', {parent:component,parentTop:layout,props:{coins:component.finalCost}});
let cndPdf8 = component.finalCost == 0;
this.setState('st0PRg6', cndPdf8);
if (cndPdf8) { 
let elVZOtS = eo('span','Lhtf',null,`class`,`bold pink-text`);
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