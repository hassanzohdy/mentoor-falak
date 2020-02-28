_Component({
                selector: 'project-recruitment-page',
                c: 'ProjectRecruitmentPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddModal','getTitle','openApplications','editRecruitment','currentIndex','currentRecruitment','confirmDelete','confirmFirst','submit','deleteRecruitment','modalIsOpened','teamsList','titlesList','acceptanceFundPercentageNote','isSending','openApplicationsModal'],
                children: {c80IQwa8K:'project-layout',cKwHhEs2F:'flk-dropdown-list',c6BqY75_4:'flk-dropdown-list',ccrtutozp:'flk-dropdown-list',cHXQf3vcI:'flk-dropdown-list',cR14P0fB4:'flk-modal',cWDZ0yBQF:'flk-modal',czCXjOxDe:'flk-alert',cv7jxHA1p:'flk-alert'},
                render: function (component) {
                    let cmpf3km = this._lc('c80IQwa8K', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eluTKhb = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal()}]},`class`,`float-right btn btn-success bold`);
let el8o068 = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
ec('button');
let elTbLwe = eo('h1');
text(`${ component.project.name }
        Project
        Recruitment`);
ec('h1');
let elbw7Ef = eo('p');
let el0xUEr = eo('small');
text(`When enabling new Recruitment, it will switch the project to`);
let elLE8E2 = eo('strong',null,null,`class`,`teal-text mx-1`);
text(`Public`);
ec('strong');
text(`if it is`);
let elGHum4 = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`,
            You can switch it back to`);
let el_zgh6 = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`from`);
let elufDTK = eo('a',null,null,`href`,`${URLS.project(component.project, 'settings')}`,`class`,`bold pink-text`);
text(`settings page`);
ec('a');
text(`.`);
ec('small');
ec('p');
let elvSvd0 = eo('table',null,null,`class`,`m-t-2 table table-bordered buttoned`);
let elrEG24 = eo('thead');
let el9OD6B = eo('tr');
let elUmPjQ = eo('th');
text(`Team`);
ec('th');
let elFl6lp = eo('th');
text(`Role`);
ec('th');
let el40N26 = eo('th');
text(`Title`);
ec('th');
let elsuK04 = eo('th');
text(`Experience`);
ec('th');
let elDvBGA = eo('th');
text(`Applications`);
ec('th');
let elGLzpA = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elEfpB_ = eo('tbody');
let cndSylC = Is.empty(component.project.recruitment);
this.setState('stjVzYT', cndSylC);
let cndTexX = !(cndSylC);
this.setState('stQsH93', cndTexX);
if (cndSylC) { 
let elYYS6Q = eo('tr','SPuf');
let elylpSt = eo('td','QVmf',null, 'style', {textAlign:'center'},`colspan`,`6`);
text(`No recruitment yet.`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.recruitment) {
let recruitment = component.project.recruitment[index]; 
 let iiBDrD = 'vU2EVQ7' + index;
let el64XUg = eo('tr','_RBfEHV3jtxN' + index+iiBDrD);
let elC2TgA = eo('td','aocff'+iiBDrD);
text(recruitment.team);
ec('td');
let el1h2OF = eo('td','KLRff'+iiBDrD);
text(recruitment.role);
ec('td');
let elm9jS9 = eo('td','ePkff'+iiBDrD);
text(component.getTitle(recruitment.title));
ec('td');
let elIkVl_ = eo('td','iL4ff'+iiBDrD);
text(recruitment.experience);
ec('td');
let elojRmq = eo('td','o4hff'+iiBDrD);
let eliaL3J = eo('button','FCZff'+iiBDrD,null, eventListeners, {onclick:[function(e) {var $el = this;component.openApplications(recruitment)}]},`class`,`bold ${cls({'orange-text': recruitment.applications.length > 0})}`);
text(recruitment.applications.length);
ec('button');
ec('td');
let elDvrrf = eo('td','j8_ff'+iiBDrD);
let elfHsUi = eo('button','5L2ff'+iiBDrD,null, eventListeners, {onclick:[function(e) {var $el = this;component.editRecruitment(recruitment)}]},`title`,``,`class`,`btn btn-circle btn-info`);
let el6BagM = eo('i','n0Eff'+iiBDrD,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elfHsUi;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit recruitment settings')}`});
        ;
                    }, 20);                
                let elSvxVL = eo('button','ZKqff'+iiBDrD,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentIndex = index; component.currentRecruitment = recruitment; component.confirmDelete = true}]},`title`,``,`class`,`btn btn-circle btn-danger`);
let elGFJCh = eo('i','ZeIff'+iiBDrD,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elSvxVL;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Recruitment')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndH7N_ = component.modalIsOpened;
this.setState('stsQ03o', cndH7N_);
if (cndH7N_) { 
component.recruitmentModal = this._lc('cR14P0fB4', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el_H2y8 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.confirmFirst = true}]});
component.form = el_H2y8;

                if (! el_H2y8.formHandler) {
                    window.cfrmdlr = el_H2y8.formHandler = new FormHandler(el_H2y8, component);
                } else {
                    window.cfrmdlr = el_H2y8.formHandler;
                }
            let el08oqz = eo('div',null,null,`class`,`row`);
let elkaKhg = eo('div',null,null,`class`,`col-sm-6`);
let cmp7XgC = this._lc('cKwHhEs2F', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.team,items:component.teamsList()},attrs:{name:`${(`team`).toInputName()}`,required:'',label:'Team'},state:'stsQ03o'});
ec('div');
let elGujyd = eo('div',null,null,`class`,`col-sm-6`);
let cmpYgvS = this._lc('c6BqY75_4', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.role,items:['teamLeader', 'member']},attrs:{name:`${(`role`).toInputName()}`,placeholder:`${trans(`Role`)}`,label:'Role',required:''},state:'stsQ03o'});
ec('div');
ec('div');
let elrDgpy = eo('div',null,null,`class`,`row m-y-1`);
let el8YBWs = eo('div',null,null,`class`,`col-sm-6`);
let cmpw7Fi = this._lc('ccrtutozp', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.title,items:component.titlesList()},attrs:{name:`${(`title`).toInputName()}`,label:'Title',required:''},state:'stsQ03o'});
ec('div');
let elQIffN = eo('div',null,null,`class`,`col-sm-6`);
let cmpNLNF = this._lc('cHXQf3vcI', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.experience,items:FLAGS.projects.experience},attrs:{name:`${(`experience`).toInputName()}`,label:'Experience',required:''},state:'stsQ03o'});
ec('div');
ec('div');
let elbpPBN = eo('div',null,null,`class`,`row`);
let elho2pg = eo('div',null,null,`class`,`col-sm-6`);
let el_OYcp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.fundPercentage = this.value;}]},`value`,`${fval(component.currentRecruitment.fundPercentage)}`,`name`,`${(`fundPercentage`).toInputName()}`,`type`,`hidden`);
el_OYcp.value = fval(component.currentRecruitment.fundPercentage);
let elb3myy = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_H2y8.formHandler.getError(`cost`) })}`);
let elUZGAt = eo('label',null,null,`for`,`cost`);
text(trans(component.acceptanceFundPercentageNote));
let ellH8gU = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elIk80b = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_H2y8.formHandler.addError(`cost`, 'required', trans('validation.required'));}return el_H2y8.formHandler.removeError(`cost`);}]},`value`,`${fval(component.currentRecruitment.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Acceptance cost to join the project team`)}`,`type`,`number`,`class`,`form-control`,`id`,`cost`);
elIk80b.value = fval(component.currentRecruitment.cost);
let cnddPbe = el_H2y8.formHandler.getError(`cost`);
this.setState('stXvSTL', cnddPbe);
if (cnddPbe) { 
let elIGmVm = eo('div','lxcf',null,`class`,`alert alert-danger`);
text(el_H2y8.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elivgqL = eo('div',null,null,`class`,`col-sm-6`);
let elTdGWV = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_H2y8.formHandler.getError(`reward.onFinish`) })}`);
let elCsNPo = eo('label',null,null,`for`,`reward-onFinish`);
text(trans('On Project Finish Reward'));
let elMA9a2 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1BYaW = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onFinish = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_H2y8.formHandler.addError(`reward.onFinish`, 'required', trans('validation.required'));}return el_H2y8.formHandler.removeError(`reward.onFinish`);}]},`value`,`${fval(component.currentRecruitment.reward.onFinish)}`,`name`,`${(`reward.onFinish`).toInputName()}`,`placeholder`,`${trans(`On Project Finish Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onFinish`);
el1BYaW.value = fval(component.currentRecruitment.reward.onFinish);
let cndvJX_ = el_H2y8.formHandler.getError(`reward.onFinish`);
this.setState('stmP0sN', cndvJX_);
if (cndvJX_) { 
let eluQuo0 = eo('div','uPwf',null,`class`,`alert alert-danger`);
text(el_H2y8.formHandler.getError(`reward.onFinish`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elbNkgf = eo('div',null,null,`class`,`row`);
let elvMhEb = eo('div',null,null,`class`,`col-sm-6`);
let elwQKzP = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_H2y8.formHandler.getError(`reward.onDismiss`) })}`);
let elh8dpR = eo('label',null,null,`for`,`reward-onDismiss`);
text(trans('Reward On Dismiss (On Firing)'));
let elzAeKT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2Ykb_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onDismiss = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_H2y8.formHandler.addError(`reward.onDismiss`, 'required', trans('validation.required'));}return el_H2y8.formHandler.removeError(`reward.onDismiss`);}]},`value`,`${fval(component.currentRecruitment.reward.onDismiss)}`,`name`,`${(`reward.onDismiss`).toInputName()}`,`placeholder`,`${trans(`Reward On Dismiss (On Firing)`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onDismiss`);
el2Ykb_.value = fval(component.currentRecruitment.reward.onDismiss);
let cnduXtV = el_H2y8.formHandler.getError(`reward.onDismiss`);
this.setState('stqX6XW', cnduXtV);
if (cnduXtV) { 
let elTEuVU = eo('div','Erif',null,`class`,`alert alert-danger`);
text(el_H2y8.formHandler.getError(`reward.onDismiss`));
ec('div');
}ec('div');
ec('div');
let el9tkT5 = eo('div',null,null,`class`,`col-sm-6`);
let elUL8_K = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_H2y8.formHandler.getError(`reward.taskAverage`) })}`);
let el7YoH6 = eo('label',null,null,`for`,`reward-taskAverage`);
text(trans('Task Average reward'));
let elS80v8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elSbjoS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.taskAverage = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_H2y8.formHandler.addError(`reward.taskAverage`, 'required', trans('validation.required'));}return el_H2y8.formHandler.removeError(`reward.taskAverage`);}]},`value`,`${fval(component.currentRecruitment.reward.taskAverage)}`,`name`,`${(`reward.taskAverage`).toInputName()}`,`placeholder`,`${trans(`Task Average reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-taskAverage`);
elSbjoS.value = fval(component.currentRecruitment.reward.taskAverage);
let cndmJKE = el_H2y8.formHandler.getError(`reward.taskAverage`);
this.setState('stGmo6o', cndmJKE);
if (cndmJKE) { 
let eldj6nJ = eo('div','OIif',null,`class`,`alert alert-danger`);
text(el_H2y8.formHandler.getError(`reward.taskAverage`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el7BjLf = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el_H2y8.formHandler.getError(`description`) })}`);
let elSba1_ = eo('label',null,null,`for`,`description`);
text(trans('Recruitment details (Markdown)'));
ec('label');
let elhVrN5 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.description = this.value;}]},`value`,`${fval(component.currentRecruitment.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Recruitment details (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elhVrN5.value = fval(component.currentRecruitment.description);
ec('textarea');
ec('div');
let elX4wIl = eo('div',null,null,`class`,`m-t-1 text-center`);
let elglPko = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Perform`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Open Recruitment'},state:'stsQ03o'});
}let cndIb6D = component.openApplicationsModal && component.currentRecruitment.applications.length > 0;
this.setState('stSemwU', cndIb6D);
if (cndIb6D) { 
component.recruitmentApplicationsModal = this._lc('cWDZ0yBQF', {parent:component,events:{onclose:function(e) {let $el = this; component.openApplicationsModal = null}},content:(flkModal) => {let eluA3Uy = eo('table',null,null,`class`,`table table-bordered`);
let elAJ6rg = eo('thead');
let elYf214 = eo('tr');
let elHBXbz = eo('th');
text(`User`);
ec('th');
let ellG6fF = eo('th');
text(`Title`);
ec('th');
let el7keg5 = eo('th');
text(`Role`);
ec('th');
let elXioGx = eo('th');
text(`Experience`);
ec('th');
let elRF9io = eo('th');
text(`Actions`);
ec('th');
ec('tr');
ec('thead');
let elcAI28 = eo('tbody');
ec('tbody');
ec('table');
},attrs:{header:'Recruitment Applications',size:'small'},state:'stSemwU'});
}let cndWAHI = component.confirmFirst;
this.setState('stXk39I', cndWAHI);
if (cndWAHI) { 
let cmp4DYr = this._lc('czCXjOxDe', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmFirst = false},onconfirm:function(e) {let $el = this; component.submit()}},state:'stXk39I'});
}let cndRLS5 = component.confirmDelete;
this.setState('stBwd9G', cndRLS5);
if (cndRLS5) { 
let cmpcbY9 = this._lc('cv7jxHA1p', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = false},onconfirm:function(e) {let $el = this; component.deleteRecruitment()}},attrs:{message:'Are you sure you want to terminate the recruitment process? All related applications will be removed as well.'},state:'stBwd9G'});
}
                    this.isReadyToGo();
                }
        });