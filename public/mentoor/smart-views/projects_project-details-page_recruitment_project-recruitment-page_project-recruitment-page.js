_Component({
                selector: 'project-recruitment-page',
                c: 'ProjectRecruitmentPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddModal','getTitle','openApplications','editRecruitment','currentIndex','currentRecruitment','confirmDelete','confirmFirst','submit','deleteRecruitment','modalIsOpened','teamsList','titlesList','acceptanceFundPercentageNote','isSending','openApplicationsModal'],
                children: {cc7OTId7M:'project-layout',cG_ChdXUx:'flk-dropdown-list',cS4aJd43_:'flk-dropdown-list',cn_CaqKqP:'flk-dropdown-list',cLsHTGsvt:'flk-dropdown-list',c7mDb_QIs:'flk-modal',cgClkvZt7:'flk-modal',c7t6GRnbA:'flk-alert',cZSKVEvFT:'flk-alert'},
                render: function (component) {
                    let cmpB8Z3 = this._lc('cc7OTId7M', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elWE4NM = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal()}]},`class`,`float-right btn btn-success bold`);
let elEpZoe = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
ec('button');
let eldK7S7 = eo('h1');
text(`${ component.project.name }
        Project
        Recruitment`);
ec('h1');
let elQHJ1g = eo('p');
let elD1Nqg = eo('small');
text(`When enabling new Recruitment, it will switch the project to`);
let elc9tXO = eo('strong',null,null,`class`,`teal-text mx-1`);
text(`Public`);
ec('strong');
text(`if it is`);
let elzzv3G = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`,
            You can switch it back to`);
let elc7jN_ = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`from`);
let el4kxE8 = eo('a',null,null,`href`,`${URLS.project(component.project, 'settings')}`,`class`,`bold pink-text`);
text(`settings page`);
ec('a');
text(`.`);
ec('small');
ec('p');
let el4TbKh = eo('table',null,null,`class`,`m-t-2 table table-bordered buttoned`);
let el5aXdt = eo('thead');
let elpSMYz = eo('tr');
let elJ5nra = eo('th');
text(`Team`);
ec('th');
let el2S6tL = eo('th');
text(`Role`);
ec('th');
let elutRZA = eo('th');
text(`Title`);
ec('th');
let elxfJcW = eo('th');
text(`Experience`);
ec('th');
let elpx7yp = eo('th');
text(`Applications`);
ec('th');
let elSDDtp = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elIbOJJ = eo('tbody');
let cndXaKV = Is.empty(component.project.recruitment);
this.setState('stiYIY6', cndXaKV);
let cndqV3_ = !(cndXaKV);
this.setState('stD9Fhy', cndqV3_);
if (cndXaKV) { 
let elVr0Os = eo('tr','VI3f');
let elxGMu9 = eo('td','Liuf',null, 'style', {textAlign:'center'},`colspan`,`6`);
text(`No recruitment yet.`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.recruitment) {
let recruitment = component.project.recruitment[index]; 
 let ii4fZ4 = '5cxU3is' + index;
let elbsN0E = eo('tr','y52UA4UzXoPC' + index+ii4fZ4);
let elTXrVx = eo('td','U3gff'+ii4fZ4);
text(recruitment.team);
ec('td');
let elHoxp6 = eo('td','DhJff'+ii4fZ4);
text(recruitment.role);
ec('td');
let elqWAKr = eo('td','j9jff'+ii4fZ4);
text(component.getTitle(recruitment.title));
ec('td');
let elLcA93 = eo('td','pERff'+ii4fZ4);
text(recruitment.experience);
ec('td');
let el1AHG1 = eo('td','6ogff'+ii4fZ4);
let el1u1ud = eo('button','_Jmff'+ii4fZ4,null, eventListeners, {onclick:[function(e) {var $el = this;component.openApplications(recruitment)}]},`class`,`bold ${cls({'orange-text': recruitment.applications.length > 0})}`);
text(recruitment.applications.length);
ec('button');
ec('td');
let elrZEeC = eo('td','nP2ff'+ii4fZ4);
let elXCbjy = eo('button','RlDff'+ii4fZ4,null, eventListeners, {onclick:[function(e) {var $el = this;component.editRecruitment(recruitment)}]},`title`,``,`class`,`btn btn-circle btn-info`);
let elR7KNE = eo('i','W1Iff'+ii4fZ4,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elXCbjy;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit recruitment settings')}`});
        ;
                    }, 20);                
                let elRCBFm = eo('button','wIaff'+ii4fZ4,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentIndex = index; component.currentRecruitment = recruitment; component.confirmDelete = true}]},`title`,``,`class`,`btn btn-circle btn-danger`);
let elissji = eo('i','tvPff'+ii4fZ4,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elRCBFm;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Recruitment')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndkJd4 = component.modalIsOpened;
this.setState('stH5DsR', cndkJd4);
if (cndkJd4) { 
component.recruitmentModal = this._lc('c7mDb_QIs', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elZHnp9 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.confirmFirst = true}]});
component.form = elZHnp9;

                if (! elZHnp9.formHandler) {
                    window.cfrmdlr = elZHnp9.formHandler = new FormHandler(elZHnp9, component);
                } else {
                    window.cfrmdlr = elZHnp9.formHandler;
                }
            let ellFhXq = eo('div',null,null,`class`,`row`);
let elrysr_ = eo('div',null,null,`class`,`col-sm-6`);
let cmp_rnn = this._lc('cG_ChdXUx', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.team,items:component.teamsList()},attrs:{name:`${(`team`).toInputName()}`,required:'',label:'Team'},state:'stH5DsR'});
ec('div');
let el_9WTM = eo('div',null,null,`class`,`col-sm-6`);
let cmpSA8R = this._lc('cS4aJd43_', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.role,items:['teamLeader', 'member']},attrs:{name:`${(`role`).toInputName()}`,placeholder:`${trans(`Role`)}`,label:'Role',required:''},state:'stH5DsR'});
ec('div');
ec('div');
let elIVkqv = eo('div',null,null,`class`,`row m-y-1`);
let elprTIP = eo('div',null,null,`class`,`col-sm-6`);
let cmpaf3U = this._lc('cn_CaqKqP', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.title,items:component.titlesList()},attrs:{name:`${(`title`).toInputName()}`,label:'Title',required:''},state:'stH5DsR'});
ec('div');
let elXY19f = eo('div',null,null,`class`,`col-sm-6`);
let cmprQHH = this._lc('cLsHTGsvt', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.experience,items:FLAGS.projects.experience},attrs:{name:`${(`experience`).toInputName()}`,label:'Experience',required:''},state:'stH5DsR'});
ec('div');
ec('div');
let elGrXqa = eo('div',null,null,`class`,`row`);
let elBjNXZ = eo('div',null,null,`class`,`col-sm-6`);
let elbxFwD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.fundPercentage = this.value;}]},`value`,`${fval(component.currentRecruitment.fundPercentage)}`,`name`,`${(`fundPercentage`).toInputName()}`,`type`,`hidden`);
elbxFwD.value = fval(component.currentRecruitment.fundPercentage);
let eltM0wi = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elZHnp9.formHandler.getError(`cost`) })}`);
let elYLXBn = eo('label',null,null,`for`,`cost`);
text(trans(component.acceptanceFundPercentageNote));
let elR2Rox = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elugRwp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZHnp9.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elZHnp9.formHandler.removeError(`cost`);}]},`value`,`${fval(component.currentRecruitment.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Acceptance cost to join the project team`)}`,`type`,`number`,`class`,`form-control`,`id`,`cost`);
elugRwp.value = fval(component.currentRecruitment.cost);
let cndsZWa = elZHnp9.formHandler.getError(`cost`);
this.setState('stbPMBM', cndsZWa);
if (cndsZWa) { 
let elnvhGy = eo('div','d7mf',null,`class`,`alert alert-danger`);
text(elZHnp9.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elIgfiI = eo('div',null,null,`class`,`col-sm-6`);
let eltpc6d = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elZHnp9.formHandler.getError(`reward.onFinish`) })}`);
let elDr8Le = eo('label',null,null,`for`,`reward-onFinish`);
text(trans('On Project Finish Reward'));
let elNCJ3C = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elfSteq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onFinish = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZHnp9.formHandler.addError(`reward.onFinish`, 'required', trans('validation.required'));}return elZHnp9.formHandler.removeError(`reward.onFinish`);}]},`value`,`${fval(component.currentRecruitment.reward.onFinish)}`,`name`,`${(`reward.onFinish`).toInputName()}`,`placeholder`,`${trans(`On Project Finish Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onFinish`);
elfSteq.value = fval(component.currentRecruitment.reward.onFinish);
let cndLBm4 = elZHnp9.formHandler.getError(`reward.onFinish`);
this.setState('stb5RFf', cndLBm4);
if (cndLBm4) { 
let elUMFxE = eo('div','QOJf',null,`class`,`alert alert-danger`);
text(elZHnp9.formHandler.getError(`reward.onFinish`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elCrSw1 = eo('div',null,null,`class`,`row`);
let elfZNBL = eo('div',null,null,`class`,`col-sm-6`);
let elgnk9Q = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elZHnp9.formHandler.getError(`reward.onDismiss`) })}`);
let elExyCI = eo('label',null,null,`for`,`reward-onDismiss`);
text(trans('Reward On Dismiss (On Firing)'));
let elRC0Gh = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2kYyH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onDismiss = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZHnp9.formHandler.addError(`reward.onDismiss`, 'required', trans('validation.required'));}return elZHnp9.formHandler.removeError(`reward.onDismiss`);}]},`value`,`${fval(component.currentRecruitment.reward.onDismiss)}`,`name`,`${(`reward.onDismiss`).toInputName()}`,`placeholder`,`${trans(`Reward On Dismiss (On Firing)`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onDismiss`);
el2kYyH.value = fval(component.currentRecruitment.reward.onDismiss);
let cndv7EH = elZHnp9.formHandler.getError(`reward.onDismiss`);
this.setState('stqJvff', cndv7EH);
if (cndv7EH) { 
let eli0Z1B = eo('div','qFEf',null,`class`,`alert alert-danger`);
text(elZHnp9.formHandler.getError(`reward.onDismiss`));
ec('div');
}ec('div');
ec('div');
let ellS1X8 = eo('div',null,null,`class`,`col-sm-6`);
let elM2tgK = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elZHnp9.formHandler.getError(`reward.taskAverage`) })}`);
let elt8THo = eo('label',null,null,`for`,`reward-taskAverage`);
text(trans('Task Average reward'));
let elNna_H = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMKUCi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.taskAverage = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elZHnp9.formHandler.addError(`reward.taskAverage`, 'required', trans('validation.required'));}return elZHnp9.formHandler.removeError(`reward.taskAverage`);}]},`value`,`${fval(component.currentRecruitment.reward.taskAverage)}`,`name`,`${(`reward.taskAverage`).toInputName()}`,`placeholder`,`${trans(`Task Average reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-taskAverage`);
elMKUCi.value = fval(component.currentRecruitment.reward.taskAverage);
let cndj96f = elZHnp9.formHandler.getError(`reward.taskAverage`);
this.setState('stOzV7c', cndj96f);
if (cndj96f) { 
let el4yALw = eo('div','aH0f',null,`class`,`alert alert-danger`);
text(elZHnp9.formHandler.getError(`reward.taskAverage`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elSeyot = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elZHnp9.formHandler.getError(`description`) })}`);
let elqTmj4 = eo('label',null,null,`for`,`description`);
text(trans('Recruitment details (Markdown)'));
ec('label');
let elKqMju = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.description = this.value;}]},`value`,`${fval(component.currentRecruitment.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Recruitment details (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elKqMju.value = fval(component.currentRecruitment.description);
ec('textarea');
ec('div');
let el5z7tU = eo('div',null,null,`class`,`m-t-1 text-center`);
let elRGNSC = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Perform`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Open Recruitment'},state:'stH5DsR'});
}let cndMaiw = component.openApplicationsModal && component.currentRecruitment.applications.length > 0;
this.setState('stRXVlR', cndMaiw);
if (cndMaiw) { 
component.recruitmentApplicationsModal = this._lc('cgClkvZt7', {parent:component,events:{onclose:function(e) {let $el = this; component.openApplicationsModal = null}},content:(flkModal) => {let elhl5Ex = eo('table',null,null,`class`,`table table-bordered`);
let elTlD0x = eo('thead');
let eltPTWM = eo('tr');
let elTsnaF = eo('th');
text(`User`);
ec('th');
let elOQWLk = eo('th');
text(`Title`);
ec('th');
let elomJdk = eo('th');
text(`Role`);
ec('th');
let elOoRiZ = eo('th');
text(`Experience`);
ec('th');
let elTOq3R = eo('th');
text(`Actions`);
ec('th');
ec('tr');
ec('thead');
let elcw3VC = eo('tbody');
ec('tbody');
ec('table');
},attrs:{header:'Recruitment Applications',size:'small'},state:'stRXVlR'});
}let cnd63CG = component.confirmFirst;
this.setState('stqWZaQ', cnd63CG);
if (cnd63CG) { 
let cmpWdKM = this._lc('c7t6GRnbA', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmFirst = false},onconfirm:function(e) {let $el = this; component.submit()}},state:'stqWZaQ'});
}let cnd4szV = component.confirmDelete;
this.setState('st0Wviq', cnd4szV);
if (cnd4szV) { 
let cmplboe = this._lc('cZSKVEvFT', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = false},onconfirm:function(e) {let $el = this; component.deleteRecruitment()}},attrs:{message:'Are you sure you want to terminate the recruitment process? All related applications will be removed as well.'},state:'st0Wviq'});
}
                    this.isReadyToGo();
                }
        });