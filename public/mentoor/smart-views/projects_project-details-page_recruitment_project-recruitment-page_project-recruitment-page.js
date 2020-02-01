_Component({
                selector: 'project-recruitment-page',
                c: 'ProjectRecruitmentPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddModal','getTitle','openApplications','editRecruitment','currentIndex','currentRecruitment','confirmDelete','confirmFirst','submit','deleteRecruitment','modalIsOpened','teamsList','titlesList','acceptanceFundPercentageNote','isSending','openApplicationsModal'],
                children: {cjMNb0T64:'project-layout',cpVjy2658:'flk-dropdown-list',cNP2Nql0j:'flk-dropdown-list',cV8uLPbAs:'flk-dropdown-list',c87R3e_BH:'flk-dropdown-list',cYUyhy1P_:'flk-modal',cSExCkLxJ:'flk-modal',cDGs8owez:'flk-alert',c1aHfeSBk:'flk-alert'},
                render: function (component) {
                    let cmpOXwA = this._lc('cjMNb0T64', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elfwPkS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal()}]},`class`,`float-right btn btn-success bold`);
let elghrIQ = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');
let elUh23L = eo('h1');
text(`${ component.project.name }
        Project
        Recruitment`);
ec('h1');
let elydBa2 = eo('p');
let elBN2Sa = eo('small');
text(`When enabling new Recruitment, it will switch the project to`);
let eltS0Ht = eo('strong',null,null,`class`,`teal-text mx-1`);
text(`Public`);
ec('strong');
text(`if it is`);
let elOBKrO = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`,
            You can switch it back to`);
let eljQ4tl = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`from`);
let elXKxUB = eo('a',null,null,`href`,`${URLS.project(component.project, 'settings')}`,`class`,`bold pink-text`);
text(`settings page`);
ec('a');
text(`.`);
ec('small');
ec('p');
let elC1Aam = eo('table',null,null,`class`,`m-t-2 table table-bordered buttoned`);
let elorrdQ = eo('thead');
let el2LYfQ = eo('tr');
let elR1eh1 = eo('th');
text(`Team`);
ec('th');
let elZvia2 = eo('th');
text(`Role`);
ec('th');
let elPVTpP = eo('th');
text(`Title`);
ec('th');
let elc8wGk = eo('th');
text(`Experience`);
ec('th');
let eltVYtA = eo('th');
text(`Applications`);
ec('th');
let elXQM0o = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elRw1x9 = eo('tbody');
let cndnh2B = Is.empty(component.project.recruitment);
this.setState('stjSaL6', cndnh2B);
let cnd5Sz0 = !(cndnh2B);
this.setState('sttI0wR', cnd5Sz0);
if (cndnh2B) { 
let elENXWt = eo('tr','WZef');
let elzAQJm = eo('td','kBff',null, 'style', {textAlign:'center'},`colspan`,`6`);
text(`No recruitment yet.`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.recruitment) {
let recruitment = component.project.recruitment[index]; 
 let ii1n6f = 'yhHcI3m' + index;
let elABn8K = eo('tr','PY4urmFP8axZ' + index+ii1n6f);
let elm86wQ = eo('td','NK1ff'+ii1n6f);
text(recruitment.team);
ec('td');
let elBIxHe = eo('td','4XOff'+ii1n6f);
text(recruitment.role);
ec('td');
let elNuKAY = eo('td','gaTff'+ii1n6f);
text(component.getTitle(recruitment.title));
ec('td');
let elXNvTm = eo('td','qOmff'+ii1n6f);
text(recruitment.experience);
ec('td');
let elRRo1R = eo('td','dAlff'+ii1n6f);
let elH8a6y = eo('button','7sAff'+ii1n6f,null, eventListeners, {onclick:[function(e) {var $el = this;component.openApplications(recruitment)}]},`class`,`bold`);
elH8a6y.cls = {'orange-text': recruitment.applications.length > 0};

            for (let className in elH8a6y.cls) {
                elH8a6y.classList.toggle(className, elH8a6y.cls[className]);
            }  
            text(recruitment.applications.length);
ec('button');
ec('td');
let el66Bm1 = eo('td','uYnff'+ii1n6f);
let el0nGMC = eo('button','ZLvff'+ii1n6f,null, eventListeners, {onclick:[function(e) {var $el = this;component.editRecruitment(recruitment)}]},`title`,``,`class`,`btn btn-circle btn-info`);
let elIGja0 = eo('i','Hf_ff'+ii1n6f,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el0nGMC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit recruitment settings')}`});
        ;
                    }, 20);                
                let eluUxof = eo('button','FN_ff'+ii1n6f,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentIndex = index; component.currentRecruitment = recruitment; component.confirmDelete = true}]},`title`,``,`class`,`btn btn-circle btn-danger`);
let elN_sE6 = eo('i','Z6mff'+ii1n6f,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eluUxof;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Recruitment')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd3oXd = component.modalIsOpened;
this.setState('st84ekU', cnd3oXd);
if (cnd3oXd) { 
component.recruitmentModal = this._lc('cYUyhy1P_', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elDus0U = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.confirmFirst = true}]});
component.form = elDus0U;

                if (! elDus0U.formHandler) {
                    window.cfrmdlr = elDus0U.formHandler = new FormHandler(elDus0U, component);
                } else {
                    window.cfrmdlr = elDus0U.formHandler;
                }
            let elYwhkn = eo('div',null,null,`class`,`row`);
let elLG2ts = eo('div',null,null,`class`,`col-sm-6`);
let cmpTJ8Y = this._lc('cpVjy2658', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.team,items:component.teamsList()},attrs:{name:`${(`team`).toInputName()}`,required:'',label:'Team'},state:'st84ekU'});
ec('div');
let eltmQj3 = eo('div',null,null,`class`,`col-sm-6`);
let cmpqjsj = this._lc('cNP2Nql0j', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.role,items:['teamLeader', 'member']},attrs:{name:`${(`role`).toInputName()}`,placeholder:`${trans(`Role`)}`,label:'Role',required:''},state:'st84ekU'});
ec('div');
ec('div');
let elAmOUL = eo('div',null,null,`class`,`row m-y-1`);
let eldhP0p = eo('div',null,null,`class`,`col-sm-6`);
let cmpQg6t = this._lc('cV8uLPbAs', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.title,items:component.titlesList()},attrs:{name:`${(`title`).toInputName()}`,label:'Title',required:''},state:'st84ekU'});
ec('div');
let elBt07V = eo('div',null,null,`class`,`col-sm-6`);
let cmpWBID = this._lc('c87R3e_BH', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.experience,items:FLAGS.projects.experience},attrs:{name:`${(`experience`).toInputName()}`,label:'Experience',required:''},state:'st84ekU'});
ec('div');
ec('div');
let el3xjFx = eo('div',null,null,`class`,`row`);
let elsBKhL = eo('div',null,null,`class`,`col-sm-6`);
let elqGHnl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.fundPercentage = this.value;}]},`value`,`${fval(component.currentRecruitment.fundPercentage)}`,`name`,`${(`fundPercentage`).toInputName()}`,`type`,`hidden`);
elqGHnl.value = fval(component.currentRecruitment.fundPercentage);
let elLqhXL = eo('div',null,null,`class`,`form-group`);
elLqhXL.cls = {'group-error': !!elDus0U.formHandler.getError(`cost`) };

            for (let className in elLqhXL.cls) {
                elLqhXL.classList.toggle(className, elLqhXL.cls[className]);
            }  
            let ellHroz = eo('label',null,null,`for`,`cost`);
text(trans(component.acceptanceFundPercentageNote));
let elV7UGR = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljsWzJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDus0U.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elDus0U.formHandler.removeError(`cost`);}]},`value`,`${fval(component.currentRecruitment.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Acceptance cost to join the project team`)}`,`type`,`number`,`class`,`form-control`,`id`,`cost`);
eljsWzJ.value = fval(component.currentRecruitment.cost);
let cndS5MO = elDus0U.formHandler.getError(`cost`);
this.setState('st9mcqi', cndS5MO);
if (cndS5MO) { 
let elcK6pJ = eo('div','7Ayf',null,`class`,`alert alert-danger`);
text(elDus0U.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let el1MmLz = eo('div',null,null,`class`,`col-sm-6`);
let elnC4wK = eo('div',null,null,`class`,`form-group`);
elnC4wK.cls = {'group-error': !!elDus0U.formHandler.getError(`reward.onFinish`) };

            for (let className in elnC4wK.cls) {
                elnC4wK.classList.toggle(className, elnC4wK.cls[className]);
            }  
            let eljH39K = eo('label',null,null,`for`,`reward-onFinish`);
text(trans('On Project Finish Reward'));
let elJ6iBe = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1JHSu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onFinish = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDus0U.formHandler.addError(`reward.onFinish`, 'required', trans('validation.required'));}return elDus0U.formHandler.removeError(`reward.onFinish`);}]},`value`,`${fval(component.currentRecruitment.reward.onFinish)}`,`name`,`${(`reward.onFinish`).toInputName()}`,`placeholder`,`${trans(`On Project Finish Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onFinish`);
el1JHSu.value = fval(component.currentRecruitment.reward.onFinish);
let cndkaLM = elDus0U.formHandler.getError(`reward.onFinish`);
this.setState('stAucgG', cndkaLM);
if (cndkaLM) { 
let elLKbQ1 = eo('div','WuSf',null,`class`,`alert alert-danger`);
text(elDus0U.formHandler.getError(`reward.onFinish`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el12owV = eo('div',null,null,`class`,`row`);
let elyCGeU = eo('div',null,null,`class`,`col-sm-6`);
let elXlee4 = eo('div',null,null,`class`,`form-group`);
elXlee4.cls = {'group-error': !!elDus0U.formHandler.getError(`reward.onDismiss`) };

            for (let className in elXlee4.cls) {
                elXlee4.classList.toggle(className, elXlee4.cls[className]);
            }  
            let el8yenn = eo('label',null,null,`for`,`reward-onDismiss`);
text(trans('Reward On Dismiss (On Firing)'));
let el4i_vF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elALYZb = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onDismiss = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDus0U.formHandler.addError(`reward.onDismiss`, 'required', trans('validation.required'));}return elDus0U.formHandler.removeError(`reward.onDismiss`);}]},`value`,`${fval(component.currentRecruitment.reward.onDismiss)}`,`name`,`${(`reward.onDismiss`).toInputName()}`,`placeholder`,`${trans(`Reward On Dismiss (On Firing)`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onDismiss`);
elALYZb.value = fval(component.currentRecruitment.reward.onDismiss);
let cndsZ_x = elDus0U.formHandler.getError(`reward.onDismiss`);
this.setState('styMdyq', cndsZ_x);
if (cndsZ_x) { 
let elw2BIq = eo('div','Altf',null,`class`,`alert alert-danger`);
text(elDus0U.formHandler.getError(`reward.onDismiss`));
ec('div');
}ec('div');
ec('div');
let el6_9wS = eo('div',null,null,`class`,`col-sm-6`);
let elISdrW = eo('div',null,null,`class`,`form-group`);
elISdrW.cls = {'group-error': !!elDus0U.formHandler.getError(`reward.taskAverage`) };

            for (let className in elISdrW.cls) {
                elISdrW.classList.toggle(className, elISdrW.cls[className]);
            }  
            let elA7hsl = eo('label',null,null,`for`,`reward-taskAverage`);
text(trans('Task Average reward'));
let elWlG2L = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el_jqo9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.taskAverage = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDus0U.formHandler.addError(`reward.taskAverage`, 'required', trans('validation.required'));}return elDus0U.formHandler.removeError(`reward.taskAverage`);}]},`value`,`${fval(component.currentRecruitment.reward.taskAverage)}`,`name`,`${(`reward.taskAverage`).toInputName()}`,`placeholder`,`${trans(`Task Average reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-taskAverage`);
el_jqo9.value = fval(component.currentRecruitment.reward.taskAverage);
let cndTB1E = elDus0U.formHandler.getError(`reward.taskAverage`);
this.setState('stvs5Oi', cndTB1E);
if (cndTB1E) { 
let elVvYOA = eo('div','RLBf',null,`class`,`alert alert-danger`);
text(elDus0U.formHandler.getError(`reward.taskAverage`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elY1Gjt = eo('div',null,null,`class`,`form-group`);
elY1Gjt.cls = {'group-error': !!elDus0U.formHandler.getError(`description`) };

            for (let className in elY1Gjt.cls) {
                elY1Gjt.classList.toggle(className, elY1Gjt.cls[className]);
            }  
            let el8vVhk = eo('label',null,null,`for`,`description`);
text(trans('Recruitment details (Markdown)'));
ec('label');
let ely0Eag = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.description = this.value;}]},`value`,`${fval(component.currentRecruitment.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Recruitment details (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
ely0Eag.value = fval(component.currentRecruitment.description);
ec('textarea');
ec('div');
let elDyUE9 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el60axf = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Perform`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Open Recruitment'},state:'st84ekU'});
}let cndDZRm = component.openApplicationsModal && component.currentRecruitment.applications.length > 0;
this.setState('stAsLe1', cndDZRm);
if (cndDZRm) { 
component.recruitmentApplicationsModal = this._lc('cSExCkLxJ', {parent:component,events:{onclose:function(e) {let $el = this; component.openApplicationsModal = null}},content:(flkModal) => {let elDsAN8 = eo('table',null,null,`class`,`table table-bordered`);
let el9gb1T = eo('thead');
let el3SDlX = eo('tr');
let elS4Hmg = eo('th');
text(`User`);
ec('th');
let elX2P2S = eo('th');
text(`Title`);
ec('th');
let elY2NCE = eo('th');
text(`Role`);
ec('th');
let elR4cKd = eo('th');
text(`Experience`);
ec('th');
let elNWB7G = eo('th');
text(`Actions`);
ec('th');
ec('tr');
ec('thead');
let elzWzxE = eo('tbody');
ec('tbody');
ec('table');
},attrs:{header:'Recruitment Applications',size:'small'},state:'stAsLe1'});
}let cndLBtG = component.confirmFirst;
this.setState('stq75HE', cndLBtG);
if (cndLBtG) { 
let cmpTEAR = this._lc('cDGs8owez', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmFirst = false},onconfirm:function(e) {let $el = this; component.submit()}},state:'stq75HE'});
}let cndKtfG = component.confirmDelete;
this.setState('stLNqfP', cndKtfG);
if (cndKtfG) { 
let cmpm7ij = this._lc('c1aHfeSBk', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = false},onconfirm:function(e) {let $el = this; component.deleteRecruitment()}},attrs:{message:'Are you sure you want to terminate the recruitment process? All related applications will be removed as well.'},state:'stLNqfP'});
}
                    this.isReadyToGo();
                }
        });