_Component({
                selector: 'project-recruitment-page',
                c: 'ProjectRecruitmentPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddModal','getTitle','openApplications','editRecruitment','currentIndex','currentRecruitment','confirmDelete','confirmFirst','submit','deleteRecruitment','modalIsOpened','teamsList','titlesList','acceptanceFundPercentageNote','isSending','openApplicationsModal'],
                children: {cMjSw8O6g:'project-layout',cwctRIwRA:'flk-dropdown-list',c5WeUv8aS:'flk-dropdown-list',ceAIMMJlr:'flk-dropdown-list',cVZinheE7:'flk-dropdown-list',cgckJcX2w:'flk-modal',cc3eSMT_x:'flk-modal',cK87BC1fq:'flk-alert',c_gQnzBNz:'flk-alert'},
                render: function (component) {
                    let cmpz1Hi = this._lc('cMjSw8O6g', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elXoWS7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal()}]},`class`,`float-right btn btn-success bold`);
let elsJCNK = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');
let elavN3c = eo('h1');
text(`${ component.project.name }
        Project
        Recruitment`);
ec('h1');
let elvEF_9 = eo('p');
let elD0n_b = eo('small');
text(`When enabling new Recruitment, it will switch the project to`);
let el7YiQ0 = eo('strong',null,null,`class`,`teal-text mx-1`);
text(`Public`);
ec('strong');
text(`if it is`);
let elPm78Y = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`,
            You can switch it back to`);
let elFiLB7 = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`from`);
let elBkKkm = eo('a',null,null,`href`,`${URLS.project(component.project, 'settings')}`,`class`,`bold pink-text`);
text(`settings page`);
ec('a');
text(`.`);
ec('small');
ec('p');
let elijSe5 = eo('table',null,null,`class`,`m-t-2 table table-bordered buttoned`);
let elABJxe = eo('thead');
let elRcsjH = eo('tr');
let elvwAvD = eo('th');
text(`Team`);
ec('th');
let elOIvyb = eo('th');
text(`Role`);
ec('th');
let eldmxm5 = eo('th');
text(`Title`);
ec('th');
let elmiwRM = eo('th');
text(`Experience`);
ec('th');
let eljtXvC = eo('th');
text(`Applications`);
ec('th');
let el3O65Z = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elyEvfE = eo('tbody');
let cndg5UA = Is.empty(component.project.recruitment);
this.setState('st_EUB2', cndg5UA);
let cnd6EyD = !(cndg5UA);
this.setState('stfl9GH', cnd6EyD);
if (cndg5UA) { 
let elI7DNP = eo('tr','Stsf');
let elU8VB1 = eo('td','FEZf',null, 'style', {textAlign:'center'},`colspan`,`6`);
text(`No recruitment yet.`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.recruitment) {
let recruitment = component.project.recruitment[index]; 
 let iidcBH = 'iYOlLoA' + index;
let elhRAY0 = eo('tr','sBftFwhbsyGU' + index+iidcBH);
let elhBaJ5 = eo('td','Iv2ff'+iidcBH);
text(recruitment.team);
ec('td');
let elLvGVl = eo('td','nmGff'+iidcBH);
text(recruitment.role);
ec('td');
let elhp7ec = eo('td','MaWff'+iidcBH);
text(component.getTitle(recruitment.title));
ec('td');
let el0aVMf = eo('td','GzLff'+iidcBH);
text(recruitment.experience);
ec('td');
let elhl7Pi = eo('td','EZ7ff'+iidcBH);
let elC39zp = eo('button','6LCff'+iidcBH,null, eventListeners, {onclick:[function(e) {var $el = this;component.openApplications(recruitment)}]},`class`,`bold`);
elC39zp.cls = {'orange-text': recruitment.applications.length > 0};

            for (let className in elC39zp.cls) {
                elC39zp.classList.toggle(className, elC39zp.cls[className]);
            }  
            text(recruitment.applications.length);
ec('button');
ec('td');
let elt7rCS = eo('td','3iDff'+iidcBH);
let elqbnWp = eo('button','qGDff'+iidcBH,null, eventListeners, {onclick:[function(e) {var $el = this;component.editRecruitment(recruitment)}]},`title`,``,`class`,`btn btn-circle btn-info`);
let elGmcyj = eo('i','iObff'+iidcBH,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elqbnWp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit recruitment settings')}`});
        ;
                    }, 20);                
                let el0UNHM = eo('button','VRpff'+iidcBH,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentIndex = index; component.currentRecruitment = recruitment; component.confirmDelete = true}]},`title`,``,`class`,`btn btn-circle btn-danger`);
let elwdVFh = eo('i','cApff'+iidcBH,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el0UNHM;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Recruitment')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndgRts = component.modalIsOpened;
this.setState('stnGVGs', cndgRts);
if (cndgRts) { 
component.recruitmentModal = this._lc('cgckJcX2w', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elrkfm2 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.confirmFirst = true}]});
component.form = elrkfm2;

                if (! elrkfm2.formHandler) {
                    window.cfrmdlr = elrkfm2.formHandler = new FormHandler(elrkfm2, component);
                } else {
                    window.cfrmdlr = elrkfm2.formHandler;
                }
            let elG2BqN = eo('div',null,null,`class`,`row`);
let elQFpeu = eo('div',null,null,`class`,`col-sm-6`);
let cmpQY3z = this._lc('cwctRIwRA', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.team,items:component.teamsList()},attrs:{name:`${(`team`).toInputName()}`,required:'',label:'Team'},state:'stnGVGs'});
ec('div');
let el0WcLH = eo('div',null,null,`class`,`col-sm-6`);
let cmpj984 = this._lc('c5WeUv8aS', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.role,items:['teamLeader', 'member']},attrs:{name:`${(`role`).toInputName()}`,placeholder:`${trans(`Role`)}`,label:'Role',required:''},state:'stnGVGs'});
ec('div');
ec('div');
let eljQiOs = eo('div',null,null,`class`,`row m-y-1`);
let elLIygD = eo('div',null,null,`class`,`col-sm-6`);
let cmpEt_L = this._lc('ceAIMMJlr', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.title,items:component.titlesList()},attrs:{name:`${(`title`).toInputName()}`,label:'Title',required:''},state:'stnGVGs'});
ec('div');
let elpKZOq = eo('div',null,null,`class`,`col-sm-6`);
let cmpg15m = this._lc('cVZinheE7', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.experience,items:FLAGS.projects.experience},attrs:{name:`${(`experience`).toInputName()}`,label:'Experience',required:''},state:'stnGVGs'});
ec('div');
ec('div');
let elWdGXm = eo('div',null,null,`class`,`row`);
let eluBA4w = eo('div',null,null,`class`,`col-sm-6`);
let ellcUG7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.fundPercentage = this.value;}]},`value`,`${fval(component.currentRecruitment.fundPercentage)}`,`name`,`${(`fundPercentage`).toInputName()}`,`type`,`hidden`);
ellcUG7.value = fval(component.currentRecruitment.fundPercentage);
let eljYTvf = eo('div',null,null,`class`,`form-group`);
eljYTvf.cls = {'group-error': !!elrkfm2.formHandler.getError(`cost`) };

            for (let className in eljYTvf.cls) {
                eljYTvf.classList.toggle(className, eljYTvf.cls[className]);
            }  
            let elRGKdk = eo('label',null,null,`for`,`cost`);
text(trans(component.acceptanceFundPercentageNote));
let elbCSJH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elbE3be = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrkfm2.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elrkfm2.formHandler.removeError(`cost`);}]},`value`,`${fval(component.currentRecruitment.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Acceptance cost to join the project team`)}`,`type`,`number`,`class`,`form-control`,`id`,`cost`);
elbE3be.value = fval(component.currentRecruitment.cost);
let cndAx0h = elrkfm2.formHandler.getError(`cost`);
this.setState('stqSbeu', cndAx0h);
if (cndAx0h) { 
let elu3H6T = eo('div','_dQf',null,`class`,`alert alert-danger`);
text(elrkfm2.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elp7NvP = eo('div',null,null,`class`,`col-sm-6`);
let el5UWc0 = eo('div',null,null,`class`,`form-group`);
el5UWc0.cls = {'group-error': !!elrkfm2.formHandler.getError(`reward.onFinish`) };

            for (let className in el5UWc0.cls) {
                el5UWc0.classList.toggle(className, el5UWc0.cls[className]);
            }  
            let elsIL_y = eo('label',null,null,`for`,`reward-onFinish`);
text(trans('On Project Finish Reward'));
let eliGvk5 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elyx_gw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onFinish = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrkfm2.formHandler.addError(`reward.onFinish`, 'required', trans('validation.required'));}return elrkfm2.formHandler.removeError(`reward.onFinish`);}]},`value`,`${fval(component.currentRecruitment.reward.onFinish)}`,`name`,`${(`reward.onFinish`).toInputName()}`,`placeholder`,`${trans(`On Project Finish Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onFinish`);
elyx_gw.value = fval(component.currentRecruitment.reward.onFinish);
let cndNJFd = elrkfm2.formHandler.getError(`reward.onFinish`);
this.setState('st3KEHn', cndNJFd);
if (cndNJFd) { 
let eln0N_7 = eo('div','ktjf',null,`class`,`alert alert-danger`);
text(elrkfm2.formHandler.getError(`reward.onFinish`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el8RQJ0 = eo('div',null,null,`class`,`row`);
let el2CJ_N = eo('div',null,null,`class`,`col-sm-6`);
let elaVNt4 = eo('div',null,null,`class`,`form-group`);
elaVNt4.cls = {'group-error': !!elrkfm2.formHandler.getError(`reward.onDismiss`) };

            for (let className in elaVNt4.cls) {
                elaVNt4.classList.toggle(className, elaVNt4.cls[className]);
            }  
            let elbv0Op = eo('label',null,null,`for`,`reward-onDismiss`);
text(trans('Reward On Dismiss (On Firing)'));
let elZc7PJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJTa11 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onDismiss = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrkfm2.formHandler.addError(`reward.onDismiss`, 'required', trans('validation.required'));}return elrkfm2.formHandler.removeError(`reward.onDismiss`);}]},`value`,`${fval(component.currentRecruitment.reward.onDismiss)}`,`name`,`${(`reward.onDismiss`).toInputName()}`,`placeholder`,`${trans(`Reward On Dismiss (On Firing)`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onDismiss`);
elJTa11.value = fval(component.currentRecruitment.reward.onDismiss);
let cnd3sjF = elrkfm2.formHandler.getError(`reward.onDismiss`);
this.setState('st6suBS', cnd3sjF);
if (cnd3sjF) { 
let elYnAkt = eo('div','4Gzf',null,`class`,`alert alert-danger`);
text(elrkfm2.formHandler.getError(`reward.onDismiss`));
ec('div');
}ec('div');
ec('div');
let elAh7z9 = eo('div',null,null,`class`,`col-sm-6`);
let elZYOal = eo('div',null,null,`class`,`form-group`);
elZYOal.cls = {'group-error': !!elrkfm2.formHandler.getError(`reward.taskAverage`) };

            for (let className in elZYOal.cls) {
                elZYOal.classList.toggle(className, elZYOal.cls[className]);
            }  
            let elVQeTy = eo('label',null,null,`for`,`reward-taskAverage`);
text(trans('Task Average reward'));
let elHeUTo = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZKChX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.taskAverage = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elrkfm2.formHandler.addError(`reward.taskAverage`, 'required', trans('validation.required'));}return elrkfm2.formHandler.removeError(`reward.taskAverage`);}]},`value`,`${fval(component.currentRecruitment.reward.taskAverage)}`,`name`,`${(`reward.taskAverage`).toInputName()}`,`placeholder`,`${trans(`Task Average reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-taskAverage`);
elZKChX.value = fval(component.currentRecruitment.reward.taskAverage);
let cndM1o8 = elrkfm2.formHandler.getError(`reward.taskAverage`);
this.setState('st9nQav', cndM1o8);
if (cndM1o8) { 
let elX4vWQ = eo('div','FBQf',null,`class`,`alert alert-danger`);
text(elrkfm2.formHandler.getError(`reward.taskAverage`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el0I5HF = eo('div',null,null,`class`,`form-group`);
el0I5HF.cls = {'group-error': !!elrkfm2.formHandler.getError(`description`) };

            for (let className in el0I5HF.cls) {
                el0I5HF.classList.toggle(className, el0I5HF.cls[className]);
            }  
            let elWl3eo = eo('label',null,null,`for`,`description`);
text(trans('Recruitment details (Markdown)'));
ec('label');
let elmHzLi = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.description = this.value;}]},`value`,`${fval(component.currentRecruitment.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Recruitment details (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elmHzLi.value = fval(component.currentRecruitment.description);
ec('textarea');
ec('div');
let eluK6en = eo('div',null,null,`class`,`m-t-1 text-center`);
let elo8dOt = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Perform`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Open Recruitment'},state:'stnGVGs'});
}let cnd9goK = component.openApplicationsModal && component.currentRecruitment.applications.length > 0;
this.setState('stIMARV', cnd9goK);
if (cnd9goK) { 
component.recruitmentApplicationsModal = this._lc('cc3eSMT_x', {parent:component,events:{onclose:function(e) {let $el = this; component.openApplicationsModal = null}},content:(flkModal) => {let elubtab = eo('table',null,null,`class`,`table table-bordered`);
let el0VrSI = eo('thead');
let elnqq3v = eo('tr');
let el1aSjZ = eo('th');
text(`User`);
ec('th');
let elSnwVV = eo('th');
text(`Title`);
ec('th');
let elObNy0 = eo('th');
text(`Role`);
ec('th');
let elYn4mf = eo('th');
text(`Experience`);
ec('th');
let elzkdnU = eo('th');
text(`Actions`);
ec('th');
ec('tr');
ec('thead');
let elXzIF7 = eo('tbody');
ec('tbody');
ec('table');
},attrs:{header:'Recruitment Applications',size:'small'},state:'stIMARV'});
}let cndC2G4 = component.confirmFirst;
this.setState('stw9nAY', cndC2G4);
if (cndC2G4) { 
let cmpqSpT = this._lc('cK87BC1fq', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmFirst = false},onconfirm:function(e) {let $el = this; component.submit()}},state:'stw9nAY'});
}let cndm2mN = component.confirmDelete;
this.setState('stpDNrr', cndm2mN);
if (cndm2mN) { 
let cmpmrSE = this._lc('c_gQnzBNz', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = false},onconfirm:function(e) {let $el = this; component.deleteRecruitment()}},attrs:{message:'Are you sure you want to terminate the recruitment process? All related applications will be removed as well.'},state:'stpDNrr'});
}
                    this.isReadyToGo();
                }
        });