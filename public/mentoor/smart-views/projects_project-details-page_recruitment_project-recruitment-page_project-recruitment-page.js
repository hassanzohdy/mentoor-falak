_Component({
                selector: 'project-recruitment-page',
                c: 'ProjectRecruitmentPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddModal','getTitle','openApplications','editRecruitment','currentIndex','currentRecruitment','confirmDelete','confirmFirst','submit','deleteRecruitment','modalIsOpened','teamsList','titlesList','acceptanceFundPercentageNote','isSending','openApplicationsModal'],
                children: {crqVRhKBm:'project-layout',cye_7qeDt:'flk-dropdown-list',cic3eVDsR:'flk-dropdown-list',ctQAuuwXo:'flk-dropdown-list',cpuSKbxRc:'flk-dropdown-list',cDUH2kCw4:'flk-modal',cFzAItLFC:'flk-modal',c_UqzBr0P:'flk-alert',c9iem5yJ2:'flk-alert'},
                render: function (component) {
                    let cmppUp2 = this._lc('crqVRhKBm', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elB8UEC = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal()}]},`class`,`float-right btn btn-success bold`);
let elBakly = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');
let el5CsqN = eo('h1');
text(`${ component.project.name }
        Project
        Recruitment`);
ec('h1');
let elKSpNB = eo('p');
let elKc44G = eo('small');
text(`When enabling new Recruitment, it will switch the project to`);
let elcPOu1 = eo('strong',null,null,`class`,`teal-text mx-1`);
text(`Public`);
ec('strong');
text(`if it is`);
let elCgL6o = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`,
            You can switch it back to`);
let elCkJhs = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`from`);
let eleYEv4 = eo('a',null,null,`href`,`${URLS.project(component.project, 'settings')}`,`class`,`bold pink-text`);
text(`settings page`);
ec('a');
text(`.`);
ec('small');
ec('p');
let elxita3 = eo('table',null,null,`class`,`m-t-2 table table-bordered buttoned`);
let elA4_pi = eo('thead');
let eldVv2q = eo('tr');
let el2MUEG = eo('th');
text(`Team`);
ec('th');
let elOcJ6c = eo('th');
text(`Role`);
ec('th');
let el5iil2 = eo('th');
text(`Title`);
ec('th');
let elt70Rt = eo('th');
text(`Experience`);
ec('th');
let elRVQVK = eo('th');
text(`Applications`);
ec('th');
let elmcdxb = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elHX8W4 = eo('tbody');
let cnd6DJJ = Is.empty(component.project.recruitment);
this.setState('sthroAG', cnd6DJJ);
let cndqRo4 = !(cnd6DJJ);
this.setState('stAoBJJ', cndqRo4);
if (cnd6DJJ) { 
let elObfOg = eo('tr','LGhf');
let el9Mgri = eo('td','AESf',null, 'style', {textAlign:'center'},`colspan`,`6`);
text(`No recruitment yet.`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.recruitment) {
let recruitment = component.project.recruitment[index]; 
 let iikCAm = 'ZmTWPT6' + index;
let el3QgmX = eo('tr','cEghykPGhJtf' + index+iikCAm);
let elpoKME = eo('td','JM8ff'+iikCAm);
text(recruitment.team);
ec('td');
let elHUHaT = eo('td','FcVff'+iikCAm);
text(recruitment.role);
ec('td');
let eloZ1is = eo('td','pevff'+iikCAm);
text(component.getTitle(recruitment.title));
ec('td');
let eluZgWB = eo('td','v5_ff'+iikCAm);
text(recruitment.experience);
ec('td');
let el94dad = eo('td','33sff'+iikCAm);
let elPL4Rh = eo('button','QqDff'+iikCAm,null, eventListeners, {onclick:[function(e) {var $el = this;component.openApplications(recruitment)}]},`class`,`bold`);
elPL4Rh.cls = {'orange-text': recruitment.applications.length > 0};

            for (let className in elPL4Rh.cls) {
                elPL4Rh.classList.toggle(className, elPL4Rh.cls[className]);
            }  
            text(recruitment.applications.length);
ec('button');
ec('td');
let elVoikc = eo('td','aEcff'+iikCAm);
let elpeXac = eo('button','Pf_ff'+iikCAm,null, eventListeners, {onclick:[function(e) {var $el = this;component.editRecruitment(recruitment)}]},`title`,``,`class`,`btn btn-circle btn-info`);
let ell6hVh = eo('i','QdHff'+iikCAm,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elpeXac;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit recruitment settings')}`});
        ;
                    }, 20);                
                let elGSjQ3 = eo('button','Ataff'+iikCAm,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentIndex = index; component.currentRecruitment = recruitment; component.confirmDelete = true}]},`title`,``,`class`,`btn btn-circle btn-danger`);
let elmTGzd = eo('i','dvTff'+iikCAm,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elGSjQ3;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Recruitment')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd4QAs = component.modalIsOpened;
this.setState('st_QNKF', cnd4QAs);
if (cnd4QAs) { 
component.recruitmentModal = this._lc('cDUH2kCw4', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elNagrO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.confirmFirst = true}]});
component.form = elNagrO;

                if (! elNagrO.formHandler) {
                    window.cfrmdlr = elNagrO.formHandler = new FormHandler(elNagrO, component);
                } else {
                    window.cfrmdlr = elNagrO.formHandler;
                }
            let elT5_Ms = eo('div',null,null,`class`,`row`);
let elrJXVP = eo('div',null,null,`class`,`col-sm-6`);
let cmpgafn = this._lc('cye_7qeDt', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.team,items:component.teamsList()},attrs:{name:`${(`team`).toInputName()}`,required:'',label:'Team'},state:'st_QNKF'});
ec('div');
let elQEFUU = eo('div',null,null,`class`,`col-sm-6`);
let cmpWWuA = this._lc('cic3eVDsR', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.role,items:['teamLeader', 'member']},attrs:{name:`${(`role`).toInputName()}`,placeholder:`${trans(`Role`)}`,label:'Role',required:''},state:'st_QNKF'});
ec('div');
ec('div');
let elntZFf = eo('div',null,null,`class`,`row m-y-1`);
let elVNgTV = eo('div',null,null,`class`,`col-sm-6`);
let cmp6fO7 = this._lc('ctQAuuwXo', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.title,items:component.titlesList()},attrs:{name:`${(`title`).toInputName()}`,label:'Title',required:''},state:'st_QNKF'});
ec('div');
let el0l9kL = eo('div',null,null,`class`,`col-sm-6`);
let cmpjZTK = this._lc('cpuSKbxRc', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.experience,items:FLAGS.projects.experience},attrs:{name:`${(`experience`).toInputName()}`,label:'Experience',required:''},state:'st_QNKF'});
ec('div');
ec('div');
let elJ7kOu = eo('div',null,null,`class`,`row`);
let el8AHHB = eo('div',null,null,`class`,`col-sm-6`);
let elyLkoe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.fundPercentage = this.value;}]},`value`,`${fval(component.currentRecruitment.fundPercentage)}`,`name`,`${(`fundPercentage`).toInputName()}`,`type`,`hidden`);
elyLkoe.value = fval(component.currentRecruitment.fundPercentage);
let elrd7vL = eo('div',null,null,`class`,`form-group`);
elrd7vL.cls = {'group-error': !!elNagrO.formHandler.getError(`cost`) };

            for (let className in elrd7vL.cls) {
                elrd7vL.classList.toggle(className, elrd7vL.cls[className]);
            }  
            let elIeIH7 = eo('label',null,null,`for`,`cost`);
text(trans(component.acceptanceFundPercentageNote));
let eltmLjd = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elrH_cN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNagrO.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elNagrO.formHandler.removeError(`cost`);}]},`value`,`${fval(component.currentRecruitment.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Acceptance cost to join the project team`)}`,`type`,`number`,`class`,`form-control`,`id`,`cost`);
elrH_cN.value = fval(component.currentRecruitment.cost);
let cndXlLc = elNagrO.formHandler.getError(`cost`);
this.setState('stez2Dc', cndXlLc);
if (cndXlLc) { 
let el4Brxs = eo('div','LKff',null,`class`,`alert alert-danger`);
text(elNagrO.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elKhJ7i = eo('div',null,null,`class`,`col-sm-6`);
let elMklq8 = eo('div',null,null,`class`,`form-group`);
elMklq8.cls = {'group-error': !!elNagrO.formHandler.getError(`reward.onFinish`) };

            for (let className in elMklq8.cls) {
                elMklq8.classList.toggle(className, elMklq8.cls[className]);
            }  
            let elFmY_9 = eo('label',null,null,`for`,`reward-onFinish`);
text(trans('On Project Finish Reward'));
let elp9Teu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elBsH0t = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onFinish = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNagrO.formHandler.addError(`reward.onFinish`, 'required', trans('validation.required'));}return elNagrO.formHandler.removeError(`reward.onFinish`);}]},`value`,`${fval(component.currentRecruitment.reward.onFinish)}`,`name`,`${(`reward.onFinish`).toInputName()}`,`placeholder`,`${trans(`On Project Finish Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onFinish`);
elBsH0t.value = fval(component.currentRecruitment.reward.onFinish);
let cndt0T3 = elNagrO.formHandler.getError(`reward.onFinish`);
this.setState('stv7zz4', cndt0T3);
if (cndt0T3) { 
let eljjksJ = eo('div','vIQf',null,`class`,`alert alert-danger`);
text(elNagrO.formHandler.getError(`reward.onFinish`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elaZgDS = eo('div',null,null,`class`,`row`);
let elSvRmT = eo('div',null,null,`class`,`col-sm-6`);
let el0hSUD = eo('div',null,null,`class`,`form-group`);
el0hSUD.cls = {'group-error': !!elNagrO.formHandler.getError(`reward.onDismiss`) };

            for (let className in el0hSUD.cls) {
                el0hSUD.classList.toggle(className, el0hSUD.cls[className]);
            }  
            let elK5GqY = eo('label',null,null,`for`,`reward-onDismiss`);
text(trans('Reward On Dismiss (On Firing)'));
let el5qEEG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRZJFp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onDismiss = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNagrO.formHandler.addError(`reward.onDismiss`, 'required', trans('validation.required'));}return elNagrO.formHandler.removeError(`reward.onDismiss`);}]},`value`,`${fval(component.currentRecruitment.reward.onDismiss)}`,`name`,`${(`reward.onDismiss`).toInputName()}`,`placeholder`,`${trans(`Reward On Dismiss (On Firing)`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onDismiss`);
elRZJFp.value = fval(component.currentRecruitment.reward.onDismiss);
let cnduVoP = elNagrO.formHandler.getError(`reward.onDismiss`);
this.setState('stoG0KM', cnduVoP);
if (cnduVoP) { 
let elk41_d = eo('div','9brf',null,`class`,`alert alert-danger`);
text(elNagrO.formHandler.getError(`reward.onDismiss`));
ec('div');
}ec('div');
ec('div');
let elfF9Zj = eo('div',null,null,`class`,`col-sm-6`);
let elrodJN = eo('div',null,null,`class`,`form-group`);
elrodJN.cls = {'group-error': !!elNagrO.formHandler.getError(`reward.taskAverage`) };

            for (let className in elrodJN.cls) {
                elrodJN.classList.toggle(className, elrodJN.cls[className]);
            }  
            let elu03Tu = eo('label',null,null,`for`,`reward-taskAverage`);
text(trans('Task Average reward'));
let elPOAm1 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elpmFE9 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.taskAverage = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNagrO.formHandler.addError(`reward.taskAverage`, 'required', trans('validation.required'));}return elNagrO.formHandler.removeError(`reward.taskAverage`);}]},`value`,`${fval(component.currentRecruitment.reward.taskAverage)}`,`name`,`${(`reward.taskAverage`).toInputName()}`,`placeholder`,`${trans(`Task Average reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-taskAverage`);
elpmFE9.value = fval(component.currentRecruitment.reward.taskAverage);
let cndTPmi = elNagrO.formHandler.getError(`reward.taskAverage`);
this.setState('stQDlni', cndTPmi);
if (cndTPmi) { 
let elgGiEk = eo('div','_ZTf',null,`class`,`alert alert-danger`);
text(elNagrO.formHandler.getError(`reward.taskAverage`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elM4JT7 = eo('div',null,null,`class`,`form-group`);
elM4JT7.cls = {'group-error': !!elNagrO.formHandler.getError(`description`) };

            for (let className in elM4JT7.cls) {
                elM4JT7.classList.toggle(className, elM4JT7.cls[className]);
            }  
            let elTaW8b = eo('label',null,null,`for`,`description`);
text(trans('Recruitment details (Markdown)'));
ec('label');
let elSZVzF = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.description = this.value;}]},`value`,`${fval(component.currentRecruitment.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Recruitment details (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elSZVzF.value = fval(component.currentRecruitment.description);
ec('textarea');
ec('div');
let el__4EB = eo('div',null,null,`class`,`m-t-1 text-center`);
let elnAi0T = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Perform`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Open Recruitment'},state:'st_QNKF'});
}let cndjP6B = component.openApplicationsModal && component.currentRecruitment.applications.length > 0;
this.setState('stq1Uoz', cndjP6B);
if (cndjP6B) { 
component.recruitmentApplicationsModal = this._lc('cFzAItLFC', {parent:component,events:{onclose:function(e) {let $el = this; component.openApplicationsModal = null}},content:(flkModal) => {let elzt0UF = eo('table',null,null,`class`,`table table-bordered`);
let elabDmu = eo('thead');
let ela4_LA = eo('tr');
let elhfF3a = eo('th');
text(`User`);
ec('th');
let elZuHIJ = eo('th');
text(`Title`);
ec('th');
let el53InJ = eo('th');
text(`Role`);
ec('th');
let elkXbFO = eo('th');
text(`Experience`);
ec('th');
let el1jomp = eo('th');
text(`Actions`);
ec('th');
ec('tr');
ec('thead');
let elp81Ni = eo('tbody');
ec('tbody');
ec('table');
},attrs:{header:'Recruitment Applications',size:'small'},state:'stq1Uoz'});
}let cndzoWs = component.confirmFirst;
this.setState('stvhMPg', cndzoWs);
if (cndzoWs) { 
let cmpptjo = this._lc('c_UqzBr0P', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmFirst = false},onconfirm:function(e) {let $el = this; component.submit()}},state:'stvhMPg'});
}let cndzSWm = component.confirmDelete;
this.setState('stlSeTC', cndzSWm);
if (cndzSWm) { 
let cmphzVe = this._lc('c9iem5yJ2', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = false},onconfirm:function(e) {let $el = this; component.deleteRecruitment()}},attrs:{message:'Are you sure you want to terminate the recruitment process? All related applications will be removed as well.'},state:'stlSeTC'});
}
                    this.isReadyToGo();
                }
        });