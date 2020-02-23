_Component({
                selector: 'project-recruitment-page',
                c: 'ProjectRecruitmentPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddModal','getTitle','openApplications','editRecruitment','currentIndex','currentRecruitment','confirmDelete','confirmFirst','submit','deleteRecruitment','modalIsOpened','teamsList','titlesList','acceptanceFundPercentageNote','isSending','openApplicationsModal'],
                children: {c8nYkehz0:'project-layout',ciC0v02uk:'flk-dropdown-list',cEpYHTOjW:'flk-dropdown-list',cOUAtyEG6:'flk-dropdown-list',c9xIysctH:'flk-dropdown-list',coFtA1uOi:'flk-modal',cusB0xYTV:'flk-modal',csUgopMdJ:'flk-alert',c789ml3kc:'flk-alert'},
                render: function (component) {
                    let cmp4HV9 = this._lc('c8nYkehz0', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elT3U5a = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal()}]},`class`,`float-right btn btn-success bold`);
let elUKxmG = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');
let elBtZpN = eo('h1');
text(`${ component.project.name }
        Project
        Recruitment`);
ec('h1');
let elHFHou = eo('p');
let elbs0kg = eo('small');
text(`When enabling new Recruitment, it will switch the project to`);
let elg84rE = eo('strong',null,null,`class`,`teal-text mx-1`);
text(`Public`);
ec('strong');
text(`if it is`);
let elyNZAx = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`,
            You can switch it back to`);
let elHIjQJ = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`from`);
let elNwFUh = eo('a',null,null,`href`,`${URLS.project(component.project, 'settings')}`,`class`,`bold pink-text`);
text(`settings page`);
ec('a');
text(`.`);
ec('small');
ec('p');
let el9HefU = eo('table',null,null,`class`,`m-t-2 table table-bordered buttoned`);
let elK710y = eo('thead');
let elfJccn = eo('tr');
let elgKkdR = eo('th');
text(`Team`);
ec('th');
let elxvSJG = eo('th');
text(`Role`);
ec('th');
let elcA1LA = eo('th');
text(`Title`);
ec('th');
let eluUzo9 = eo('th');
text(`Experience`);
ec('th');
let elgXDqS = eo('th');
text(`Applications`);
ec('th');
let elrO31C = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el2GhD2 = eo('tbody');
let cnd4K8G = Is.empty(component.project.recruitment);
this.setState('stf01R2', cnd4K8G);
let cndF5CL = !(cnd4K8G);
this.setState('stUeLMq', cndF5CL);
if (cnd4K8G) { 
let elZdo6k = eo('tr','OYFf');
let eleDDlA = eo('td','WLMf',null, 'style', {textAlign:'center'},`colspan`,`6`);
text(`No recruitment yet.`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.recruitment) {
let recruitment = component.project.recruitment[index]; 
 let iiMMGj = 'ElTa4fZ' + index;
let elR_ZWH = eo('tr','Kt7RgO6OnLDM' + index+iiMMGj);
let elsN5NW = eo('td','8MIff'+iiMMGj);
text(recruitment.team);
ec('td');
let el0XYfS = eo('td','4TIff'+iiMMGj);
text(recruitment.role);
ec('td');
let elUwFqP = eo('td','X0_ff'+iiMMGj);
text(component.getTitle(recruitment.title));
ec('td');
let elAg426 = eo('td','LGrff'+iiMMGj);
text(recruitment.experience);
ec('td');
let elXFG1a = eo('td','wiJff'+iiMMGj);
let elMEHD8 = eo('button','8LVff'+iiMMGj,null, eventListeners, {onclick:[function(e) {var $el = this;component.openApplications(recruitment)}]},`class`,`bold`);
elMEHD8.cls = {'orange-text': recruitment.applications.length > 0};

            for (let className in elMEHD8.cls) {
                elMEHD8.classList.toggle(className, elMEHD8.cls[className]);
            }  
            text(recruitment.applications.length);
ec('button');
ec('td');
let elkMvNW = eo('td','3Tzff'+iiMMGj);
let elJg9HA = eo('button','Euzff'+iiMMGj,null, eventListeners, {onclick:[function(e) {var $el = this;component.editRecruitment(recruitment)}]},`title`,``,`class`,`btn btn-circle btn-info`);
let elBsO6Z = eo('i','P2Vff'+iiMMGj,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elJg9HA;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit recruitment settings')}`});
        ;
                    }, 20);                
                let elBvaUj = eo('button','d3Pff'+iiMMGj,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentIndex = index; component.currentRecruitment = recruitment; component.confirmDelete = true}]},`title`,``,`class`,`btn btn-circle btn-danger`);
let elPA1jZ = eo('i','b8Pff'+iiMMGj,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elBvaUj;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Recruitment')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndBZIJ = component.modalIsOpened;
this.setState('stGQGb3', cndBZIJ);
if (cndBZIJ) { 
component.recruitmentModal = this._lc('coFtA1uOi', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elP9knA = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.confirmFirst = true}]});
component.form = elP9knA;

                if (! elP9knA.formHandler) {
                    window.cfrmdlr = elP9knA.formHandler = new FormHandler(elP9knA, component);
                } else {
                    window.cfrmdlr = elP9knA.formHandler;
                }
            let eljRE6L = eo('div',null,null,`class`,`row`);
let elm3uYY = eo('div',null,null,`class`,`col-sm-6`);
let cmpGSnr = this._lc('ciC0v02uk', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.team,items:component.teamsList()},attrs:{name:`${(`team`).toInputName()}`,required:'',label:'Team'},state:'stGQGb3'});
ec('div');
let elT_P9W = eo('div',null,null,`class`,`col-sm-6`);
let cmpM6GE = this._lc('cEpYHTOjW', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.role,items:['teamLeader', 'member']},attrs:{name:`${(`role`).toInputName()}`,placeholder:`${trans(`Role`)}`,label:'Role',required:''},state:'stGQGb3'});
ec('div');
ec('div');
let elLy5Yy = eo('div',null,null,`class`,`row m-y-1`);
let el7CPmT = eo('div',null,null,`class`,`col-sm-6`);
let cmpbzSR = this._lc('cOUAtyEG6', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.title,items:component.titlesList()},attrs:{name:`${(`title`).toInputName()}`,label:'Title',required:''},state:'stGQGb3'});
ec('div');
let el2twxN = eo('div',null,null,`class`,`col-sm-6`);
let cmpKZZB = this._lc('c9xIysctH', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.experience,items:FLAGS.projects.experience},attrs:{name:`${(`experience`).toInputName()}`,label:'Experience',required:''},state:'stGQGb3'});
ec('div');
ec('div');
let elOOZev = eo('div',null,null,`class`,`row`);
let elOjZCs = eo('div',null,null,`class`,`col-sm-6`);
let elMwFAu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.fundPercentage = this.value;}]},`value`,`${fval(component.currentRecruitment.fundPercentage)}`,`name`,`${(`fundPercentage`).toInputName()}`,`type`,`hidden`);
elMwFAu.value = fval(component.currentRecruitment.fundPercentage);
let elnGPt6 = eo('div',null,null,`class`,`form-group`);
elnGPt6.cls = {'group-error': !!elP9knA.formHandler.getError(`cost`) };

            for (let className in elnGPt6.cls) {
                elnGPt6.classList.toggle(className, elnGPt6.cls[className]);
            }  
            let elemxhj = eo('label',null,null,`for`,`cost`);
text(trans(component.acceptanceFundPercentageNote));
let elDLg8T = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elOK3q_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elP9knA.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elP9knA.formHandler.removeError(`cost`);}]},`value`,`${fval(component.currentRecruitment.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Acceptance cost to join the project team`)}`,`type`,`number`,`class`,`form-control`,`id`,`cost`);
elOK3q_.value = fval(component.currentRecruitment.cost);
let cndMHdz = elP9knA.formHandler.getError(`cost`);
this.setState('stCPAwl', cndMHdz);
if (cndMHdz) { 
let eljYt4I = eo('div','QOtf',null,`class`,`alert alert-danger`);
text(elP9knA.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let eliplrW = eo('div',null,null,`class`,`col-sm-6`);
let elzrLP7 = eo('div',null,null,`class`,`form-group`);
elzrLP7.cls = {'group-error': !!elP9knA.formHandler.getError(`reward.onFinish`) };

            for (let className in elzrLP7.cls) {
                elzrLP7.classList.toggle(className, elzrLP7.cls[className]);
            }  
            let elg8Aqz = eo('label',null,null,`for`,`reward-onFinish`);
text(trans('On Project Finish Reward'));
let elrfzMz = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ela7yff = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onFinish = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elP9knA.formHandler.addError(`reward.onFinish`, 'required', trans('validation.required'));}return elP9knA.formHandler.removeError(`reward.onFinish`);}]},`value`,`${fval(component.currentRecruitment.reward.onFinish)}`,`name`,`${(`reward.onFinish`).toInputName()}`,`placeholder`,`${trans(`On Project Finish Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onFinish`);
ela7yff.value = fval(component.currentRecruitment.reward.onFinish);
let cndCCaj = elP9knA.formHandler.getError(`reward.onFinish`);
this.setState('st699Zf', cndCCaj);
if (cndCCaj) { 
let elW7SLi = eo('div','VISf',null,`class`,`alert alert-danger`);
text(elP9knA.formHandler.getError(`reward.onFinish`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elrjMhX = eo('div',null,null,`class`,`row`);
let elly3Lg = eo('div',null,null,`class`,`col-sm-6`);
let el1xj1z = eo('div',null,null,`class`,`form-group`);
el1xj1z.cls = {'group-error': !!elP9knA.formHandler.getError(`reward.onDismiss`) };

            for (let className in el1xj1z.cls) {
                el1xj1z.classList.toggle(className, el1xj1z.cls[className]);
            }  
            let elJ0LVQ = eo('label',null,null,`for`,`reward-onDismiss`);
text(trans('Reward On Dismiss (On Firing)'));
let elPanyp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcgNk6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onDismiss = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elP9knA.formHandler.addError(`reward.onDismiss`, 'required', trans('validation.required'));}return elP9knA.formHandler.removeError(`reward.onDismiss`);}]},`value`,`${fval(component.currentRecruitment.reward.onDismiss)}`,`name`,`${(`reward.onDismiss`).toInputName()}`,`placeholder`,`${trans(`Reward On Dismiss (On Firing)`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onDismiss`);
elcgNk6.value = fval(component.currentRecruitment.reward.onDismiss);
let cndNaJo = elP9knA.formHandler.getError(`reward.onDismiss`);
this.setState('stqNZI0', cndNaJo);
if (cndNaJo) { 
let elwbsNN = eo('div','aKHf',null,`class`,`alert alert-danger`);
text(elP9knA.formHandler.getError(`reward.onDismiss`));
ec('div');
}ec('div');
ec('div');
let elA5WP5 = eo('div',null,null,`class`,`col-sm-6`);
let elLhvzB = eo('div',null,null,`class`,`form-group`);
elLhvzB.cls = {'group-error': !!elP9knA.formHandler.getError(`reward.taskAverage`) };

            for (let className in elLhvzB.cls) {
                elLhvzB.classList.toggle(className, elLhvzB.cls[className]);
            }  
            let elAIUXa = eo('label',null,null,`for`,`reward-taskAverage`);
text(trans('Task Average reward'));
let el44Re4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elO05I4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.taskAverage = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elP9knA.formHandler.addError(`reward.taskAverage`, 'required', trans('validation.required'));}return elP9knA.formHandler.removeError(`reward.taskAverage`);}]},`value`,`${fval(component.currentRecruitment.reward.taskAverage)}`,`name`,`${(`reward.taskAverage`).toInputName()}`,`placeholder`,`${trans(`Task Average reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-taskAverage`);
elO05I4.value = fval(component.currentRecruitment.reward.taskAverage);
let cnd0COH = elP9knA.formHandler.getError(`reward.taskAverage`);
this.setState('st1k6Es', cnd0COH);
if (cnd0COH) { 
let el80TxQ = eo('div','U20f',null,`class`,`alert alert-danger`);
text(elP9knA.formHandler.getError(`reward.taskAverage`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elFb2qw = eo('div',null,null,`class`,`form-group`);
elFb2qw.cls = {'group-error': !!elP9knA.formHandler.getError(`description`) };

            for (let className in elFb2qw.cls) {
                elFb2qw.classList.toggle(className, elFb2qw.cls[className]);
            }  
            let elYGJG5 = eo('label',null,null,`for`,`description`);
text(trans('Recruitment details (Markdown)'));
ec('label');
let elfbmNK = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.description = this.value;}]},`value`,`${fval(component.currentRecruitment.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Recruitment details (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elfbmNK.value = fval(component.currentRecruitment.description);
ec('textarea');
ec('div');
let el_Rg8U = eo('div',null,null,`class`,`m-t-1 text-center`);
let elHPpRU = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Perform`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Open Recruitment'},state:'stGQGb3'});
}let cndJKfC = component.openApplicationsModal && component.currentRecruitment.applications.length > 0;
this.setState('staZu9T', cndJKfC);
if (cndJKfC) { 
component.recruitmentApplicationsModal = this._lc('cusB0xYTV', {parent:component,events:{onclose:function(e) {let $el = this; component.openApplicationsModal = null}},content:(flkModal) => {let el7RpKb = eo('table',null,null,`class`,`table table-bordered`);
let el30G4U = eo('thead');
let elsEbDj = eo('tr');
let elHQJVJ = eo('th');
text(`User`);
ec('th');
let elBWg2p = eo('th');
text(`Title`);
ec('th');
let eloXLWL = eo('th');
text(`Role`);
ec('th');
let elNdZgp = eo('th');
text(`Experience`);
ec('th');
let elN0hpj = eo('th');
text(`Actions`);
ec('th');
ec('tr');
ec('thead');
let elWrNp4 = eo('tbody');
ec('tbody');
ec('table');
},attrs:{header:'Recruitment Applications',size:'small'},state:'staZu9T'});
}let cndDems = component.confirmFirst;
this.setState('st2ILae', cndDems);
if (cndDems) { 
let cmp6bLI = this._lc('csUgopMdJ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmFirst = false},onconfirm:function(e) {let $el = this; component.submit()}},state:'st2ILae'});
}let cndvqxE = component.confirmDelete;
this.setState('stXYJUI', cndvqxE);
if (cndvqxE) { 
let cmpRAi3 = this._lc('c789ml3kc', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = false},onconfirm:function(e) {let $el = this; component.deleteRecruitment()}},attrs:{message:'Are you sure you want to terminate the recruitment process? All related applications will be removed as well.'},state:'stXYJUI'});
}
                    this.isReadyToGo();
                }
        });