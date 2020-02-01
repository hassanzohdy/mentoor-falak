_Component({
                selector: 'project-recruitment-page',
                c: 'ProjectRecruitmentPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddModal','getTitle','openApplications','editRecruitment','currentIndex','currentRecruitment','confirmDelete','confirmFirst','submit','deleteRecruitment','modalIsOpened','teamsList','titlesList','acceptanceFundPercentageNote','isSending','openApplicationsModal'],
                children: {c54DQnYkd:'project-layout',c_cw8xDPA:'flk-dropdown-list',cCV4_Jcsn:'flk-dropdown-list',cSAsCTNZt:'flk-dropdown-list',cy8q6G8b6:'flk-dropdown-list',cs7VUYRT3:'flk-modal',cLuYprzVV:'flk-modal',cvTDd8RqZ:'flk-alert',cWt3Yn8zm:'flk-alert'},
                render: function (component) {
                    let cmpzayL = this._lc('c54DQnYkd', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elO3Ozc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddModal()}]},`class`,`float-right btn btn-success bold`);
let el9wgXZ = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
ec('button');
let eleceOj = eo('h1');
text(`${ component.project.name }
        Project
        Recruitment`);
ec('h1');
let elbaGjq = eo('p');
let elLX7Ad = eo('small');
text(`When enabling new Recruitment, it will switch the project to`);
let elC_3V5 = eo('strong',null,null,`class`,`teal-text mx-1`);
text(`Public`);
ec('strong');
text(`if it is`);
let elnkmvX = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`,
            You can switch it back to`);
let elmcXbG = eo('strong',null,null,`class`,`mx-1`);
text(`Private`);
ec('strong');
text(`from`);
let eloVlJX = eo('a',null,null,`href`,`${URLS.project(component.project, 'settings')}`,`class`,`bold pink-text`);
text(`settings page`);
ec('a');
text(`.`);
ec('small');
ec('p');
let elZ__vq = eo('table',null,null,`class`,`m-t-2 table table-bordered buttoned`);
let elSFGW5 = eo('thead');
let elmR594 = eo('tr');
let el7q4MQ = eo('th');
text(`Team`);
ec('th');
let elan8W3 = eo('th');
text(`Role`);
ec('th');
let eln0OCy = eo('th');
text(`Title`);
ec('th');
let eltuiAJ = eo('th');
text(`Experience`);
ec('th');
let elHT7_Q = eo('th');
text(`Applications`);
ec('th');
let elXTDv0 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elZDiv5 = eo('tbody');
let cnd38U4 = Is.empty(component.project.recruitment);
this.setState('stPtKIa', cnd38U4);
let cndDJrw = !(cnd38U4);
this.setState('st7BzMX', cndDJrw);
if (cnd38U4) { 
let elT9siC = eo('tr','g1yf');
let elHzLsD = eo('td','Ublf',null, 'style', {textAlign:'center'},`colspan`,`6`);
text(`No recruitment yet.`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.recruitment) {
let recruitment = component.project.recruitment[index]; 
 let iiz7VZ = '2jLC50V' + index;
let elxr06F = eo('tr','52BhCLiS8P1N' + index+iiz7VZ);
let elhYl0e = eo('td','7MCff'+iiz7VZ);
text(recruitment.team);
ec('td');
let el1zBrK = eo('td','VhVff'+iiz7VZ);
text(recruitment.role);
ec('td');
let elwDWAB = eo('td','hjuff'+iiz7VZ);
text(component.getTitle(recruitment.title));
ec('td');
let elWij07 = eo('td','ZCrff'+iiz7VZ);
text(recruitment.experience);
ec('td');
let elwo4bK = eo('td','CHzff'+iiz7VZ);
let elYlOlH = eo('button','FVJff'+iiz7VZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openApplications(recruitment)}]},`class`,`bold`);
elYlOlH.cls = {'orange-text': recruitment.applications.length > 0};

            for (let className in elYlOlH.cls) {
                elYlOlH.classList.toggle(className, elYlOlH.cls[className]);
            }  
            text(recruitment.applications.length);
ec('button');
ec('td');
let el6LNcr = eo('td','rOuff'+iiz7VZ);
let elGMvGn = eo('button','jklff'+iiz7VZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.editRecruitment(recruitment)}]},`title`,``,`class`,`btn btn-circle btn-info`);
let elDPv5q = eo('i','XaVff'+iiz7VZ,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elGMvGn;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit recruitment settings')}`});
        ;
                    }, 20);                
                let elUgK7x = eo('button','oL7ff'+iiz7VZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.currentIndex = index; component.currentRecruitment = recruitment; component.confirmDelete = true}]},`title`,``,`class`,`btn btn-circle btn-danger`);
let elLTO6u = eo('i','Zefff'+iiz7VZ,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elUgK7x;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Recruitment')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndQAQi = component.modalIsOpened;
this.setState('st4JZmp', cndQAQi);
if (cndQAQi) { 
component.recruitmentModal = this._lc('cs7VUYRT3', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elqCZ11 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.confirmFirst = true}]});
component.form = elqCZ11;

                if (! elqCZ11.formHandler) {
                    window.cfrmdlr = elqCZ11.formHandler = new FormHandler(elqCZ11, component);
                } else {
                    window.cfrmdlr = elqCZ11.formHandler;
                }
            let elrYhjr = eo('div',null,null,`class`,`row`);
let elVjGi9 = eo('div',null,null,`class`,`col-sm-6`);
let cmp5rk9 = this._lc('c_cw8xDPA', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.team,items:component.teamsList()},attrs:{name:`${(`team`).toInputName()}`,required:'',label:'Team'},state:'st4JZmp'});
ec('div');
let elpoYjT = eo('div',null,null,`class`,`col-sm-6`);
let cmprr57 = this._lc('cCV4_Jcsn', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.role,items:['teamLeader', 'member']},attrs:{name:`${(`role`).toInputName()}`,placeholder:`${trans(`Role`)}`,label:'Role',required:''},state:'st4JZmp'});
ec('div');
ec('div');
let elmhcc1 = eo('div',null,null,`class`,`row m-y-1`);
let el2jGC0 = eo('div',null,null,`class`,`col-sm-6`);
let cmpwE5t = this._lc('cSAsCTNZt', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.title,items:component.titlesList()},attrs:{name:`${(`title`).toInputName()}`,label:'Title',required:''},state:'st4JZmp'});
ec('div');
let elmkCeo = eo('div',null,null,`class`,`col-sm-6`);
let cmpnM62 = this._lc('cy8q6G8b6', {parent:component,parentTop:flkModal,props:{value:component.currentRecruitment.experience,items:FLAGS.projects.experience},attrs:{name:`${(`experience`).toInputName()}`,label:'Experience',required:''},state:'st4JZmp'});
ec('div');
ec('div');
let elWkDMM = eo('div',null,null,`class`,`row`);
let el9F_hb = eo('div',null,null,`class`,`col-sm-6`);
let eltsKIU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.fundPercentage = this.value;}]},`value`,`${fval(component.currentRecruitment.fundPercentage)}`,`name`,`${(`fundPercentage`).toInputName()}`,`type`,`hidden`);
eltsKIU.value = fval(component.currentRecruitment.fundPercentage);
let elsdiMy = eo('div',null,null,`class`,`form-group`);
elsdiMy.cls = {'group-error': !!elqCZ11.formHandler.getError(`cost`) };

            for (let className in elsdiMy.cls) {
                elsdiMy.classList.toggle(className, elsdiMy.cls[className]);
            }  
            let elR6MYR = eo('label',null,null,`for`,`cost`);
text(trans(component.acceptanceFundPercentageNote));
let elUXpPE = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJGrRT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqCZ11.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elqCZ11.formHandler.removeError(`cost`);}]},`value`,`${fval(component.currentRecruitment.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`Acceptance cost to join the project team`)}`,`type`,`number`,`class`,`form-control`,`id`,`cost`);
elJGrRT.value = fval(component.currentRecruitment.cost);
let cndFwc9 = elqCZ11.formHandler.getError(`cost`);
this.setState('st0DSYh', cndFwc9);
if (cndFwc9) { 
let elqkgLi = eo('div','M9Wf',null,`class`,`alert alert-danger`);
text(elqCZ11.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elGUkTm = eo('div',null,null,`class`,`col-sm-6`);
let eluoDtk = eo('div',null,null,`class`,`form-group`);
eluoDtk.cls = {'group-error': !!elqCZ11.formHandler.getError(`reward.onFinish`) };

            for (let className in eluoDtk.cls) {
                eluoDtk.classList.toggle(className, eluoDtk.cls[className]);
            }  
            let elSjgt_ = eo('label',null,null,`for`,`reward-onFinish`);
text(trans('On Project Finish Reward'));
let elZHlUT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWLRSa = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onFinish = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqCZ11.formHandler.addError(`reward.onFinish`, 'required', trans('validation.required'));}return elqCZ11.formHandler.removeError(`reward.onFinish`);}]},`value`,`${fval(component.currentRecruitment.reward.onFinish)}`,`name`,`${(`reward.onFinish`).toInputName()}`,`placeholder`,`${trans(`On Project Finish Reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onFinish`);
elWLRSa.value = fval(component.currentRecruitment.reward.onFinish);
let cndW9sR = elqCZ11.formHandler.getError(`reward.onFinish`);
this.setState('stUUYPY', cndW9sR);
if (cndW9sR) { 
let elPwOWt = eo('div','fDJf',null,`class`,`alert alert-danger`);
text(elqCZ11.formHandler.getError(`reward.onFinish`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elVqV3I = eo('div',null,null,`class`,`row`);
let elyWWf7 = eo('div',null,null,`class`,`col-sm-6`);
let elN842t = eo('div',null,null,`class`,`form-group`);
elN842t.cls = {'group-error': !!elqCZ11.formHandler.getError(`reward.onDismiss`) };

            for (let className in elN842t.cls) {
                elN842t.classList.toggle(className, elN842t.cls[className]);
            }  
            let elQpw_4 = eo('label',null,null,`for`,`reward-onDismiss`);
text(trans('Reward On Dismiss (On Firing)'));
let elhg49E = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAvQZO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.onDismiss = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqCZ11.formHandler.addError(`reward.onDismiss`, 'required', trans('validation.required'));}return elqCZ11.formHandler.removeError(`reward.onDismiss`);}]},`value`,`${fval(component.currentRecruitment.reward.onDismiss)}`,`name`,`${(`reward.onDismiss`).toInputName()}`,`placeholder`,`${trans(`Reward On Dismiss (On Firing)`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-onDismiss`);
elAvQZO.value = fval(component.currentRecruitment.reward.onDismiss);
let cndQKkh = elqCZ11.formHandler.getError(`reward.onDismiss`);
this.setState('styqi5O', cndQKkh);
if (cndQKkh) { 
let el8F8GJ = eo('div','w85f',null,`class`,`alert alert-danger`);
text(elqCZ11.formHandler.getError(`reward.onDismiss`));
ec('div');
}ec('div');
ec('div');
let eleyLyp = eo('div',null,null,`class`,`col-sm-6`);
let elXPWOQ = eo('div',null,null,`class`,`form-group`);
elXPWOQ.cls = {'group-error': !!elqCZ11.formHandler.getError(`reward.taskAverage`) };

            for (let className in elXPWOQ.cls) {
                elXPWOQ.classList.toggle(className, elXPWOQ.cls[className]);
            }  
            let elf4MdU = eo('label',null,null,`for`,`reward-taskAverage`);
text(trans('Task Average reward'));
let elUWiEM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elSuGo8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.reward.taskAverage = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqCZ11.formHandler.addError(`reward.taskAverage`, 'required', trans('validation.required'));}return elqCZ11.formHandler.removeError(`reward.taskAverage`);}]},`value`,`${fval(component.currentRecruitment.reward.taskAverage)}`,`name`,`${(`reward.taskAverage`).toInputName()}`,`placeholder`,`${trans(`Task Average reward`)}`,`type`,`number`,`class`,`form-control`,`id`,`reward-taskAverage`);
elSuGo8.value = fval(component.currentRecruitment.reward.taskAverage);
let cndG2wV = elqCZ11.formHandler.getError(`reward.taskAverage`);
this.setState('stXzSzw', cndG2wV);
if (cndG2wV) { 
let elOwXMr = eo('div','HDUf',null,`class`,`alert alert-danger`);
text(elqCZ11.formHandler.getError(`reward.taskAverage`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elGlx28 = eo('div',null,null,`class`,`form-group`);
elGlx28.cls = {'group-error': !!elqCZ11.formHandler.getError(`description`) };

            for (let className in elGlx28.cls) {
                elGlx28.classList.toggle(className, elGlx28.cls[className]);
            }  
            let el78nV6 = eo('label',null,null,`for`,`description`);
text(trans('Recruitment details (Markdown)'));
ec('label');
let el6QWSD = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.currentRecruitment.description = this.value;}]},`value`,`${fval(component.currentRecruitment.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Recruitment details (Markdown)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el6QWSD.value = fval(component.currentRecruitment.description);
ec('textarea');
ec('div');
let elj58z7 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elRlQQZ = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Perform`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Open Recruitment'},state:'st4JZmp'});
}let cndPamD = component.openApplicationsModal && component.currentRecruitment.applications.length > 0;
this.setState('stPCWsw', cndPamD);
if (cndPamD) { 
component.recruitmentApplicationsModal = this._lc('cLuYprzVV', {parent:component,events:{onclose:function(e) {let $el = this; component.openApplicationsModal = null}},content:(flkModal) => {let eld6MqM = eo('table',null,null,`class`,`table table-bordered`);
let elmwLWy = eo('thead');
let el9WHTq = eo('tr');
let eli3bun = eo('th');
text(`User`);
ec('th');
let el0xx0m = eo('th');
text(`Title`);
ec('th');
let ellUd6u = eo('th');
text(`Role`);
ec('th');
let el8SHVh = eo('th');
text(`Experience`);
ec('th');
let elp283M = eo('th');
text(`Actions`);
ec('th');
ec('tr');
ec('thead');
let eljoqq8 = eo('tbody');
ec('tbody');
ec('table');
},attrs:{header:'Recruitment Applications',size:'small'},state:'stPCWsw'});
}let cndX2Vg = component.confirmFirst;
this.setState('stV9VJQ', cndX2Vg);
if (cndX2Vg) { 
let cmpXvHL = this._lc('cvTDd8RqZ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmFirst = false},onconfirm:function(e) {let $el = this; component.submit()}},state:'stV9VJQ'});
}let cnd8uw7 = component.confirmDelete;
this.setState('st9XpPS', cnd8uw7);
if (cnd8uw7) { 
let cmp4rqP = this._lc('cWt3Yn8zm', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = false},onconfirm:function(e) {let $el = this; component.deleteRecruitment()}},attrs:{message:'Are you sure you want to terminate the recruitment process? All related applications will be removed as well.'},state:'st9XpPS'});
}
                    this.isReadyToGo();
                }
        });