_Component({
                selector: 'project-recruitment-page',
                c: 'ProjectRecruitmentPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddModal','getTitle','openApplications','editRecruitment','currentIndex','currentRecruitment','confirmDelete','confirmFirst','submit','deleteRecruitment','modalIsOpened','teamsList','titlesList','acceptanceFundPercentageNote','isSending','openApplicationsModal'],
                children: {cegc232ik:'project-layout',c4MPp0sjW:'flk-dropdown-list',c0BmPUbtV:'flk-dropdown-list',cqyYKQhaD:'flk-dropdown-list',cNtqSX03o:'flk-dropdown-list',cT3ibe6Rp:'flk-modal',cd8V3Wtn7:'flk-modal',cydNTQLWr:'flk-alert',cLSTR8ZWJ:'flk-alert'},
                render: function (component) {
                    let cmphJXN = this._lc('cegc232ik', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elYgUS6 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal()}]},`class`,`float-right btn btn-success bold`);
let elZJwH1 = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
ec('button');
let el5wYDD = eo('h1');
text(`${ component.project.name }
        Project
        Recruitment`);
ec('h1');
let elZ5mZr = eo('p');
let elgER5c = eo('small');
text(`When enabling new Recruitment, it will switch the project to`);
let elR0qqj = eo('strong',null,null,`class`,`teal-text mx-1`);
text(`Public`);
ec('strong');
text(`if it is`);
let elws7uk = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`,
            You can switch it back to`);
let elyEqEK = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`from`);
let elhWCNq = eo('a',null,null,`href`,`${URLS.project(component.project, 'settings')}`,`class`,`bold pink-text`);
text(`settings page`);
ec('a');
text(`.`);
ec('small');
ec('p');
let elmvkL5 = eo('table',null,null,`class`,`m-t-2 table table-bordered buttoned`);
let elpLEB3 = eo('thead');
let elHA5yF = eo('tr');
let el7V9sF = eo('th');
text(`Team`);
ec('th');
let eleRZFd = eo('th');
text(`Role`);
ec('th');
let elqnm_D = eo('th');
text(`Title`);
ec('th');
let elzSi24 = eo('th');
text(`Experience`);
ec('th');
let elsCnyH = eo('th');
text(`Applications`);
ec('th');
let elHdgLo = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elvC4Av = eo('tbody');
let cnd1hkX = Is.empty(component.project.recruitment);
this.setState('st9yTKR', cnd1hkX);
let cnd4CAy = !(cnd1hkX);
this.setState('stvgwf5', cnd4CAy);
if (cnd1hkX) { 
let el5Uw88 = eo('tr','Styf');
let el4JUvW = eo('td','vsvf',null, 'style', {textAlign:'center'},`colspan`,`6`);
text(`No recruitment yet.`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.recruitment) {
let recruitment = component.project.recruitment[index]; 
 let ii6hjP = 'UIGJYQd' + index;
let elqZDg6 = eo('tr','I7qsfTUFE_iM' + index+ii6hjP);
let elVNhYl = eo('td','qq9ff'+ii6hjP);
text(recruitment.team);
ec('td');
let el_UMYF = eo('td','C6wff'+ii6hjP);
text(recruitment.role);
ec('td');
let elDNHul = eo('td','dzNff'+ii6hjP);
text(component.getTitle(recruitment.title));
ec('td');
let elryxzk = eo('td','DjFff'+ii6hjP);
text(recruitment.experience);
ec('td');
let elp6gBw = eo('td','Rajff'+ii6hjP);
let elPokV8 = eo('button','xF7ff'+ii6hjP,null, eventListeners, {onclick:[function(e) {var $el = this;component.openApplications(recruitment)}]},`class`,`bold ${cls({'orange-text': recruitment.applications.length > 0})}`);
text(recruitment.applications.length);
ec('button');
ec('td');
let elQkqNy = eo('td','U_Kff'+ii6hjP);
let elXh1wF = eo('button','X96ff'+ii6hjP,null, eventListeners, {onclick:[function(e) {var $el = this;component.editRecruitment(recruitment)}]},`title`,``,`class`,`btn btn-circle btn-info`);
let el81vck = eo('i','J9Lff'+ii6hjP,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elXh1wF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit recruitment settings')}`});
        ;
                    }, 20);                
                let el1W2xO = eo('button','Av2ff'+ii6hjP,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentIndex = index; component.currentRecruitment = recruitment; component.confirmDelete = true}]},`title`,``,`class`,`btn btn-circle btn-danger`);
let elJ57eH = eo('i','CMzff'+ii6hjP,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el1W2xO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Recruitment')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndPCLG = component.modalIsOpened;
this.setState('stLirSJ', cndPCLG);
if (cndPCLG) { 
component.recruitmentModal = this._lc('cT3ibe6Rp', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elOPVaG = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.confirmFirst = true}]});
component.form = elOPVaG;

                if (! elOPVaG.formHandler) {
                    window.cfrmdlr = elOPVaG.formHandler = new FormHandler(elOPVaG, component);
                } else {
                    window.cfrmdlr = elOPVaG.formHandler;
                }
            let elExtaX = eo('div',null,null,`class`,`row`);
let elNbwE8 = eo('div',null,null,`class`,`col-sm-6`);
let cmpyJAS = this._lc('c4MPp0sjW', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.team,items:component.teamsList()},attrs:{name:`${(`team`).toInputName()}`,required:'',label:'Team'},state:'stLirSJ'});
ec('div');
let elSVZrS = eo('div',null,null,`class`,`col-sm-6`);
let cmpnw0P = this._lc('c0BmPUbtV', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.role,items:['teamLeader', 'member']},attrs:{name:`${(`role`).toInputName()}`,placeholder:`${trans(`Role`)}`,label:'Role',required:''},state:'stLirSJ'});
ec('div');
ec('div');
let elQ7nil = eo('div',null,null,`class`,`row m-y-1`);
let eljnSSy = eo('div',null,null,`class`,`col-sm-6`);
let cmpBr_8 = this._lc('cqyYKQhaD', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.title,items:component.titlesList()},attrs:{name:`${(`title`).toInputName()}`,label:'Title',required:''},state:'stLirSJ'});
ec('div');
let el5Klzp = eo('div',null,null,`class`,`col-sm-6`);
let cmpYHP0 = this._lc('cNtqSX03o', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.experience,items:FLAGS.projects.experience},attrs:{name:`${(`experience`).toInputName()}`,label:'Experience',required:''},state:'stLirSJ'});
ec('div');
ec('div');
let elQ85UC = eo('div',null,null,`class`,`row`);
let elanCIX = eo('div',null,null,`class`,`col-sm-6`);
let el58ifX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.fundPercentage = this.value;}]},`value`,`${fval(component.currentRecruitment.fundPercentage)}`,`name`,`${(`fundPercentage`).toInputName()}`,`type`,`hidden`);
el58ifX.value = fval(component.currentRecruitment.fundPercentage);
let elieGgu = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOPVaG.formHandler.getError(`cost`) })}`);
let elwTFca = eo('label',null,null,`for`,`cost`);
text(trans(component.acceptanceFundPercentageNote));
let elMTkUd = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elYcuT6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOPVaG.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elOPVaG.formHandler.removeError(`cost`);}]},`value`,`${fval(component.currentRecruitment.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Acceptance cost to join the project team`)}`,`type`,`number`,`class`,`form-control`,`id`,`cost`);
elYcuT6.value = fval(component.currentRecruitment.cost);
let cndU_nR = elOPVaG.formHandler.getError(`cost`);
this.setState('stqmMH2', cndU_nR);
if (cndU_nR) { 
let el_iUDq = eo('div','v17f',null,`class`,`alert alert-danger`);
text(elOPVaG.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elEuVT9 = eo('div',null,null,`class`,`col-sm-6`);
let elH2vDM = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOPVaG.formHandler.getError(`reward.onFinish`) })}`);
let elomv6_ = eo('label',null,null,`for`,`reward-onFinish`);
text(trans('On Project Finish Reward'));
let elSkgKK = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKBKV9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onFinish = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOPVaG.formHandler.addError(`reward.onFinish`, 'required', trans('validation.required'));}return elOPVaG.formHandler.removeError(`reward.onFinish`);}]},`value`,`${fval(component.currentRecruitment.reward.onFinish)}`,`name`,`${(`reward.onFinish`).toInputName()}`,`placeholder`,`${trans(`On Project Finish Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onFinish`);
elKBKV9.value = fval(component.currentRecruitment.reward.onFinish);
let cnduqDR = elOPVaG.formHandler.getError(`reward.onFinish`);
this.setState('stqQzSh', cnduqDR);
if (cnduqDR) { 
let el95l77 = eo('div','ksyf',null,`class`,`alert alert-danger`);
text(elOPVaG.formHandler.getError(`reward.onFinish`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elmy49V = eo('div',null,null,`class`,`row`);
let ellD4jl = eo('div',null,null,`class`,`col-sm-6`);
let el8QWcB = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOPVaG.formHandler.getError(`reward.onDismiss`) })}`);
let elnfQHb = eo('label',null,null,`for`,`reward-onDismiss`);
text(trans('Reward On Dismiss (On Firing)'));
let elhhjer = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxO1TU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onDismiss = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOPVaG.formHandler.addError(`reward.onDismiss`, 'required', trans('validation.required'));}return elOPVaG.formHandler.removeError(`reward.onDismiss`);}]},`value`,`${fval(component.currentRecruitment.reward.onDismiss)}`,`name`,`${(`reward.onDismiss`).toInputName()}`,`placeholder`,`${trans(`Reward On Dismiss (On Firing)`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onDismiss`);
elxO1TU.value = fval(component.currentRecruitment.reward.onDismiss);
let cndjHmP = elOPVaG.formHandler.getError(`reward.onDismiss`);
this.setState('stGrpGW', cndjHmP);
if (cndjHmP) { 
let elZHapP = eo('div','1rsf',null,`class`,`alert alert-danger`);
text(elOPVaG.formHandler.getError(`reward.onDismiss`));
ec('div');
}ec('div');
ec('div');
let elHr3HM = eo('div',null,null,`class`,`col-sm-6`);
let elm7GkH = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOPVaG.formHandler.getError(`reward.taskAverage`) })}`);
let elYgmy1 = eo('label',null,null,`for`,`reward-taskAverage`);
text(trans('Task Average reward'));
let elK5OKp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elpSHh8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.taskAverage = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elOPVaG.formHandler.addError(`reward.taskAverage`, 'required', trans('validation.required'));}return elOPVaG.formHandler.removeError(`reward.taskAverage`);}]},`value`,`${fval(component.currentRecruitment.reward.taskAverage)}`,`name`,`${(`reward.taskAverage`).toInputName()}`,`placeholder`,`${trans(`Task Average reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-taskAverage`);
elpSHh8.value = fval(component.currentRecruitment.reward.taskAverage);
let cnd5s5t = elOPVaG.formHandler.getError(`reward.taskAverage`);
this.setState('stKWipi', cnd5s5t);
if (cnd5s5t) { 
let el9JXpg = eo('div','j_cf',null,`class`,`alert alert-danger`);
text(elOPVaG.formHandler.getError(`reward.taskAverage`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elvZACy = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elOPVaG.formHandler.getError(`description`) })}`);
let elEJxKg = eo('label',null,null,`for`,`description`);
text(trans('Recruitment details (Markdown)'));
ec('label');
let elZcybw = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.description = this.value;}]},`value`,`${fval(component.currentRecruitment.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Recruitment details (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elZcybw.value = fval(component.currentRecruitment.description);
ec('textarea');
ec('div');
let elxaQ5M = eo('div',null,null,`class`,`m-t-1 text-center`);
let el4i9xa = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Perform`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Open Recruitment'},state:'stLirSJ'});
}let cnd3q4s = component.openApplicationsModal && component.currentRecruitment.applications.length > 0;
this.setState('stpAtcY', cnd3q4s);
if (cnd3q4s) { 
component.recruitmentApplicationsModal = this._lc('cd8V3Wtn7', {parent:component,events:{onclose:function(e) {let $el = this; component.openApplicationsModal = null}},content:(flkModal) => {let elNHWkQ = eo('table',null,null,`class`,`table table-bordered`);
let el7VmJF = eo('thead');
let elOdsQ3 = eo('tr');
let el3AFnh = eo('th');
text(`User`);
ec('th');
let elPvDOv = eo('th');
text(`Title`);
ec('th');
let eluYU5h = eo('th');
text(`Role`);
ec('th');
let elZbRJt = eo('th');
text(`Experience`);
ec('th');
let elTsR0X = eo('th');
text(`Actions`);
ec('th');
ec('tr');
ec('thead');
let elDh1io = eo('tbody');
ec('tbody');
ec('table');
},attrs:{header:'Recruitment Applications',size:'small'},state:'stpAtcY'});
}let cndpOPo = component.confirmFirst;
this.setState('stWjH41', cndpOPo);
if (cndpOPo) { 
let cmpRPZa = this._lc('cydNTQLWr', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmFirst = false},onconfirm:function(e) {let $el = this; component.submit()}},state:'stWjH41'});
}let cnd_HdX = component.confirmDelete;
this.setState('stp7nWq', cnd_HdX);
if (cnd_HdX) { 
let cmp8Pl8 = this._lc('cLSTR8ZWJ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = false},onconfirm:function(e) {let $el = this; component.deleteRecruitment()}},attrs:{message:'Are you sure you want to terminate the recruitment process? All related applications will be removed as well.'},state:'stp7nWq'});
}
                    this.isReadyToGo();
                }
        });