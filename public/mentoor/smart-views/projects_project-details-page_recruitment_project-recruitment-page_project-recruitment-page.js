_Component({
                selector: 'project-recruitment-page',
                c: 'ProjectRecruitmentPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddModal','getTitle','openApplications','editRecruitment','currentIndex','currentRecruitment','confirmDelete','confirmFirst','submit','deleteRecruitment','modalIsOpened','teamsList','titlesList','acceptanceFundPercentageNote','isSending','openApplicationsModal'],
                children: {cpinXDXpC:'project-layout',cXgqGYLJK:'flk-dropdown-list',cYdklV_DC:'flk-dropdown-list',cbgF8cGbF:'flk-dropdown-list',c0N863FW2:'flk-dropdown-list',cpqaifPhp:'flk-modal',c8SslFoDY:'flk-modal',cKKA85FIo:'flk-alert',cHUalroXv:'flk-alert'},
                render: function (component) {
                    let cmpFIlH = this._lc('cpinXDXpC', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let els8IK1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal()}]},`class`,`float-right btn btn-success bold`);
let el06E_T = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');
let el7CsfV = eo('h1');
text(`${ component.project.name }
        Project
        Recruitment`);
ec('h1');
let elF4bzr = eo('p');
let elFFO7A = eo('small');
text(`When enabling new Recruitment, it will switch the project to`);
let eluMkc4 = eo('strong',null,null,`class`,`teal-text mx-1`);
text(`Public`);
ec('strong');
text(`if it is`);
let eldkJAv = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`,
            You can switch it back to`);
let elE9AL7 = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`from`);
let el6Ppro = eo('a',null,null,`href`,`${URLS.project(component.project, 'settings')}`,`class`,`bold pink-text`);
text(`settings page`);
ec('a');
text(`.`);
ec('small');
ec('p');
let elG_pKS = eo('table',null,null,`class`,`m-t-2 table table-bordered buttoned`);
let elr_1Re = eo('thead');
let elUKUqM = eo('tr');
let elyqdHm = eo('th');
text(`Team`);
ec('th');
let elpRsfc = eo('th');
text(`Role`);
ec('th');
let elt94bd = eo('th');
text(`Title`);
ec('th');
let elocVvq = eo('th');
text(`Experience`);
ec('th');
let eljpXjH = eo('th');
text(`Applications`);
ec('th');
let elr8RhE = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elOUaKu = eo('tbody');
let cndUJpI = Is.empty(component.project.recruitment);
this.setState('stmzeTI', cndUJpI);
let cndsmMj = !(cndUJpI);
this.setState('st_pAgW', cndsmMj);
if (cndUJpI) { 
let elL7QXz = eo('tr','yaqf');
let elfwpKF = eo('td','PH5f',null, 'style', {textAlign:'center'},`colspan`,`6`);
text(`No recruitment yet.`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.recruitment) {
let recruitment = component.project.recruitment[index]; 
 let iiEdfz = 'ZWn98yN' + index;
let elnb3t1 = eo('tr','km6dGl8LBJNN' + index+iiEdfz);
let elzB3U1 = eo('td','pRUff'+iiEdfz);
text(recruitment.team);
ec('td');
let el9YXIL = eo('td','xxfff'+iiEdfz);
text(recruitment.role);
ec('td');
let el7p6Qr = eo('td','3zCff'+iiEdfz);
text(component.getTitle(recruitment.title));
ec('td');
let elIz4nI = eo('td','dTMff'+iiEdfz);
text(recruitment.experience);
ec('td');
let elDhdV6 = eo('td','YaWff'+iiEdfz);
let elPXlMj = eo('button','aPfff'+iiEdfz,null, eventListeners, {onclick:[function(e) {var $el = this;component.openApplications(recruitment)}]},`class`,`bold`);
elPXlMj.cls = {'orange-text': recruitment.applications.length > 0};

            for (let className in elPXlMj.cls) {
                elPXlMj.classList.toggle(className, elPXlMj.cls[className]);
            }  
            text(recruitment.applications.length);
ec('button');
ec('td');
let elPGidU = eo('td','BEiff'+iiEdfz);
let elIkY4M = eo('button','sX6ff'+iiEdfz,null, eventListeners, {onclick:[function(e) {var $el = this;component.editRecruitment(recruitment)}]},`title`,``,`class`,`btn btn-circle btn-info`);
let eloSoRn = eo('i','F37ff'+iiEdfz,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elIkY4M;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit recruitment settings')}`});
        ;
                    }, 20);                
                let el9fJUp = eo('button','60Sff'+iiEdfz,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentIndex = index; component.currentRecruitment = recruitment; component.confirmDelete = true}]},`title`,``,`class`,`btn btn-circle btn-danger`);
let elUXts_ = eo('i','Mbmff'+iiEdfz,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el9fJUp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Recruitment')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndqk8b = component.modalIsOpened;
this.setState('stS4WXt', cndqk8b);
if (cndqk8b) { 
component.recruitmentModal = this._lc('cpqaifPhp', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elw9shL = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.confirmFirst = true}]});
component.form = elw9shL;

                if (! elw9shL.formHandler) {
                    window.cfrmdlr = elw9shL.formHandler = new FormHandler(elw9shL, component);
                } else {
                    window.cfrmdlr = elw9shL.formHandler;
                }
            let elRLeMS = eo('div',null,null,`class`,`row`);
let elMriK9 = eo('div',null,null,`class`,`col-sm-6`);
let cmpFyAZ = this._lc('cXgqGYLJK', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.team,items:component.teamsList()},attrs:{name:`${(`team`).toInputName()}`,required:'',label:'Team'},state:'stS4WXt'});
ec('div');
let elhrs2s = eo('div',null,null,`class`,`col-sm-6`);
let cmp2wEq = this._lc('cYdklV_DC', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.role,items:['teamLeader', 'member']},attrs:{name:`${(`role`).toInputName()}`,placeholder:`${trans(`Role`)}`,label:'Role',required:''},state:'stS4WXt'});
ec('div');
ec('div');
let elRQ98l = eo('div',null,null,`class`,`row m-y-1`);
let elYQKAR = eo('div',null,null,`class`,`col-sm-6`);
let cmpWiPn = this._lc('cbgF8cGbF', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.title,items:component.titlesList()},attrs:{name:`${(`title`).toInputName()}`,label:'Title',required:''},state:'stS4WXt'});
ec('div');
let elbSfF9 = eo('div',null,null,`class`,`col-sm-6`);
let cmpkNo7 = this._lc('c0N863FW2', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.experience,items:FLAGS.projects.experience},attrs:{name:`${(`experience`).toInputName()}`,label:'Experience',required:''},state:'stS4WXt'});
ec('div');
ec('div');
let el7ZVNA = eo('div',null,null,`class`,`row`);
let elBMBkS = eo('div',null,null,`class`,`col-sm-6`);
let el3KmWH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.fundPercentage = this.value;}]},`value`,`${fval(component.currentRecruitment.fundPercentage)}`,`name`,`${(`fundPercentage`).toInputName()}`,`type`,`hidden`);
el3KmWH.value = fval(component.currentRecruitment.fundPercentage);
let elu4jBr = eo('div',null,null,`class`,`form-group`);
elu4jBr.cls = {'group-error': !!elw9shL.formHandler.getError(`cost`) };

            for (let className in elu4jBr.cls) {
                elu4jBr.classList.toggle(className, elu4jBr.cls[className]);
            }  
            let elf9EW5 = eo('label',null,null,`for`,`cost`);
text(trans(component.acceptanceFundPercentageNote));
let eld3U71 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eluqEfc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elw9shL.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elw9shL.formHandler.removeError(`cost`);}]},`value`,`${fval(component.currentRecruitment.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Acceptance cost to join the project team`)}`,`type`,`number`,`class`,`form-control`,`id`,`cost`);
eluqEfc.value = fval(component.currentRecruitment.cost);
let cndLv2V = elw9shL.formHandler.getError(`cost`);
this.setState('ste60vF', cndLv2V);
if (cndLv2V) { 
let el1hgps = eo('div','fFkf',null,`class`,`alert alert-danger`);
text(elw9shL.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elMKtcP = eo('div',null,null,`class`,`col-sm-6`);
let elrfGso = eo('div',null,null,`class`,`form-group`);
elrfGso.cls = {'group-error': !!elw9shL.formHandler.getError(`reward.onFinish`) };

            for (let className in elrfGso.cls) {
                elrfGso.classList.toggle(className, elrfGso.cls[className]);
            }  
            let elMgQby = eo('label',null,null,`for`,`reward-onFinish`);
text(trans('On Project Finish Reward'));
let elfbxR6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elbBrq_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onFinish = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elw9shL.formHandler.addError(`reward.onFinish`, 'required', trans('validation.required'));}return elw9shL.formHandler.removeError(`reward.onFinish`);}]},`value`,`${fval(component.currentRecruitment.reward.onFinish)}`,`name`,`${(`reward.onFinish`).toInputName()}`,`placeholder`,`${trans(`On Project Finish Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onFinish`);
elbBrq_.value = fval(component.currentRecruitment.reward.onFinish);
let cndJ6k6 = elw9shL.formHandler.getError(`reward.onFinish`);
this.setState('stZUzat', cndJ6k6);
if (cndJ6k6) { 
let elMIncK = eo('div','HTQf',null,`class`,`alert alert-danger`);
text(elw9shL.formHandler.getError(`reward.onFinish`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elA_R1X = eo('div',null,null,`class`,`row`);
let el21Yrv = eo('div',null,null,`class`,`col-sm-6`);
let elZkU__ = eo('div',null,null,`class`,`form-group`);
elZkU__.cls = {'group-error': !!elw9shL.formHandler.getError(`reward.onDismiss`) };

            for (let className in elZkU__.cls) {
                elZkU__.classList.toggle(className, elZkU__.cls[className]);
            }  
            let elEhuZf = eo('label',null,null,`for`,`reward-onDismiss`);
text(trans('Reward On Dismiss (On Firing)'));
let elWt7lq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elxlY8m = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onDismiss = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elw9shL.formHandler.addError(`reward.onDismiss`, 'required', trans('validation.required'));}return elw9shL.formHandler.removeError(`reward.onDismiss`);}]},`value`,`${fval(component.currentRecruitment.reward.onDismiss)}`,`name`,`${(`reward.onDismiss`).toInputName()}`,`placeholder`,`${trans(`Reward On Dismiss (On Firing)`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onDismiss`);
elxlY8m.value = fval(component.currentRecruitment.reward.onDismiss);
let cnd23T4 = elw9shL.formHandler.getError(`reward.onDismiss`);
this.setState('stDBela', cnd23T4);
if (cnd23T4) { 
let elyiyKT = eo('div','sY0f',null,`class`,`alert alert-danger`);
text(elw9shL.formHandler.getError(`reward.onDismiss`));
ec('div');
}ec('div');
ec('div');
let elujq5Z = eo('div',null,null,`class`,`col-sm-6`);
let elkgfd3 = eo('div',null,null,`class`,`form-group`);
elkgfd3.cls = {'group-error': !!elw9shL.formHandler.getError(`reward.taskAverage`) };

            for (let className in elkgfd3.cls) {
                elkgfd3.classList.toggle(className, elkgfd3.cls[className]);
            }  
            let elZ1ZvR = eo('label',null,null,`for`,`reward-taskAverage`);
text(trans('Task Average reward'));
let elZz_aa = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVCnCT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.taskAverage = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elw9shL.formHandler.addError(`reward.taskAverage`, 'required', trans('validation.required'));}return elw9shL.formHandler.removeError(`reward.taskAverage`);}]},`value`,`${fval(component.currentRecruitment.reward.taskAverage)}`,`name`,`${(`reward.taskAverage`).toInputName()}`,`placeholder`,`${trans(`Task Average reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-taskAverage`);
elVCnCT.value = fval(component.currentRecruitment.reward.taskAverage);
let cndH0Uf = elw9shL.formHandler.getError(`reward.taskAverage`);
this.setState('stxkhlz', cndH0Uf);
if (cndH0Uf) { 
let elhkF_M = eo('div','7Tdf',null,`class`,`alert alert-danger`);
text(elw9shL.formHandler.getError(`reward.taskAverage`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elAWGFZ = eo('div',null,null,`class`,`form-group`);
elAWGFZ.cls = {'group-error': !!elw9shL.formHandler.getError(`description`) };

            for (let className in elAWGFZ.cls) {
                elAWGFZ.classList.toggle(className, elAWGFZ.cls[className]);
            }  
            let elO3ffM = eo('label',null,null,`for`,`description`);
text(trans('Recruitment details (Markdown)'));
ec('label');
let elL4wXo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.description = this.value;}]},`value`,`${fval(component.currentRecruitment.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Recruitment details (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elL4wXo.value = fval(component.currentRecruitment.description);
ec('textarea');
ec('div');
let elwQUT_ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elx_Wcp = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Perform`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Open Recruitment'},state:'stS4WXt'});
}let cndbWDz = component.openApplicationsModal && component.currentRecruitment.applications.length > 0;
this.setState('sthOX6l', cndbWDz);
if (cndbWDz) { 
component.recruitmentApplicationsModal = this._lc('c8SslFoDY', {parent:component,events:{onclose:function(e) {let $el = this; component.openApplicationsModal = null}},content:(flkModal) => {let elmqkXB = eo('table',null,null,`class`,`table table-bordered`);
let elh98JU = eo('thead');
let elqM4tT = eo('tr');
let el75_MD = eo('th');
text(`User`);
ec('th');
let elLmmP6 = eo('th');
text(`Title`);
ec('th');
let elF5iOB = eo('th');
text(`Role`);
ec('th');
let elMsmOh = eo('th');
text(`Experience`);
ec('th');
let elQwi50 = eo('th');
text(`Actions`);
ec('th');
ec('tr');
ec('thead');
let elKRN0l = eo('tbody');
ec('tbody');
ec('table');
},attrs:{header:'Recruitment Applications',size:'small'},state:'sthOX6l'});
}let cndQbDc = component.confirmFirst;
this.setState('stHYjXB', cndQbDc);
if (cndQbDc) { 
let cmpAt_5 = this._lc('cKKA85FIo', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmFirst = false},onconfirm:function(e) {let $el = this; component.submit()}},state:'stHYjXB'});
}let cndkC3d = component.confirmDelete;
this.setState('st2F2bP', cndkC3d);
if (cndkC3d) { 
let cmp5iJf = this._lc('cHUalroXv', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = false},onconfirm:function(e) {let $el = this; component.deleteRecruitment()}},attrs:{message:'Are you sure you want to terminate the recruitment process? All related applications will be removed as well.'},state:'st2F2bP'});
}
                    this.isReadyToGo();
                }
        });