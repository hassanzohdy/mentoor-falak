_Component({
                selector: 'project-settings-page',
                c: 'ProjectSettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateSettings'],
                children: {cUjlpF2Z0:'flk-dropdown-list',cWueGVsZf:'flk-dropdown-list',c5gNeXxKG:'flk-datepicker',c701MMXD8:'flk-datepicker',cGHJIgNi8:'flk-dropdown-list',c05g2dABv:'flk-dropdown-list',cK_Pnak6L:'flk-mdb-checkbox',cbEDnNT0K:'flk-mdb-checkbox',c6dk9DBv2:'flk-image-input',cMves66rT:'project-layout'},
                render: function (component) {
                    let cmpcMkC = this._lc('cMves66rT', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elnttE_ = eo('h1');
let elckg4h = eo('i',null,null,`class`,`${fas('cog')} fa-spin mr-2 icon`);
ec('i');
text(`${ component.project.name } Settings`);
ec('h1');
let cndV_Kw = ! component.project.isProjectManager;
this.setState('stX_QHF', cndV_Kw);
let cndeeeR = !(cndV_Kw);
this.setState('stmyZrT', cndeeeR);
if (cndV_Kw) { 
let elIbrGq = eo('h1','K1kf',null,`class`,`text-center m-y-3 red-text`);
text(`You don't have permissions to access this area of the project!`);
ec('h1');
}else { 
let elWbEh7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateSettings($el)}]});

                if (! elWbEh7.formHandler) {
                    window.cfrmdlr = elWbEh7.formHandler = new FormHandler(elWbEh7, component);
                } else {
                    window.cfrmdlr = elWbEh7.formHandler;
                }
            let elzijCp = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elWbEh7.formHandler.getError(`name`) })}`);
let ellWY72 = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cnd4WRm = true;
this.setState('str59QE', cnd4WRm);
if (cnd4WRm) { 
let elRdXgS = eo('span','jLqf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elyvEHz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elWbEh7.formHandler.addError(`name`, 'required', trans('validation.required'));}return elWbEh7.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elyvEHz.value = fval(component.project.name);
let cndF1tg = elWbEh7.formHandler.getError(`name`);
this.setState('st9QGCn', cndF1tg);
if (cndF1tg) { 
let elNL5eh = eo('div','S8df',null,`class`,`alert alert-danger`);
text(elWbEh7.formHandler.getError(`name`));
ec('div');
}ec('div');
let el6wJgm = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elWbEh7.formHandler.getError(`about`) })}`);
let elntcsn = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elV40f1 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltpsXE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.project.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elWbEh7.formHandler.addError(`about`, 'required', trans('validation.required'));}return elWbEh7.formHandler.removeError(`about`);}]},`value`,`${fval(component.project.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
eltpsXE.value = fval(component.project.about);
ec('textarea');
let cndFFPa = elWbEh7.formHandler.getError(`about`);
this.setState('stNYE4m', cndFFPa);
if (cndFFPa) { 
let elpTtoR = eo('div','dIMf',null,`class`,`alert alert-danger`);
text(elWbEh7.formHandler.getError(`about`));
ec('div');
}ec('div');
let elN4xRP = eo('div',null,null,`class`,`row`);
let el7ZBjA = eo('div',null,null,`class`,`col-sm-6`);
let cmpkdh0 = this._lc('cUjlpF2Z0', {parent:component,parentTop:projectLayout,props:{multiple:true,value:component.project.type,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let elszouT = eo('div',null,null,`class`,`col-sm-6`);
let cmpOfQY = this._lc('cWueGVsZf', {parent:component,parentTop:projectLayout,props:{value:component.project.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let el5mYhm = eo('div',null,null,`class`,`row m-t-1`);
let elXNpIX = eo('div',null,null,`class`,`col-sm-6`);
let cmpoAQh = this._lc('c5gNeXxKG', {parent:component,parentTop:projectLayout,props:{value:component.project.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let el5ogd8 = eo('div',null,null,`class`,`col-sm-6`);
let cmp3cBW = this._lc('c701MMXD8', {parent:component,parentTop:projectLayout,props:{value:component.project.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let el989Ff = eo('div',null,null,`class`,`row`);
let elIX0FX = eo('div',null,null,`class`,`col-sm-6`);
let cmp3W9k = this._lc('cGHJIgNi8', {parent:component,parentTop:projectLayout,props:{value:component.project.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elVvImt = eo('div',null,null,`class`,`col-sm-6`);
let cmpnZj6 = this._lc('c05g2dABv', {parent:component,parentTop:projectLayout,props:{multiple:true,imageable:true,value:component.project.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',required:'',service:'tagsService'}});
ec('div');
ec('div');
let elpMgz2 = eo('div',null,null,`class`,`row`);
let elPleOI = eo('div',null,null,`class`,`col-sm-6`);
let cmpSeY0 = this._lc('cK_Pnak6L', {parent:component,parentTop:projectLayout,props:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},content:(flkMdbCheckbox) => {let cndOOof = ! component.project.extra.includes('privacy');
this.setState('stX9wbw', cndOOof);
if (cndOOof) { 
let elIMwvH = eo('small','Pwif',null,`class`,`pink-text bold ml-2`);
text(`You need to unlock project privacy from`);
let eloRQWn = eo('a','pjTf',null,`href`,`${URLS.project(component.project, 'shopping-mall')}`,`class`,`ml-2`);
text(`Shopping Mall`);
ec('a');
ec('small');
}},boolAttrs:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},attrs:{name:`${(`settings.private`).toInputName()}`,label:'Private Project'}});
ec('div');
let elwDdkm = eo('div',null,null,`class`,`col-sm-6`);
let cmpgqqT = this._lc('cbEDnNT0K', {parent:component,parentTop:projectLayout,props:{checked:component.project.settings.openRecruitment},events:{onchange:function(e) {let $el = this; component.project.settings.openRecruitment = $el.checked}},content:(flkMdbCheckbox) => {let elqg4sS = eo('small',null,null,`class`,`bold teal-text ml-2`);
text(`If enabled, this will automatically turn the project to be public.`);
ec('small');
},boolAttrs:{checked:component.project.settings.openRecruitment},attrs:{name:`${(`settings.openRecruitment`).toInputName()}`,label:'Open Public Recruitment'}});
ec('div');
ec('div');
let el2Jkb0 = eo('div',null,null,`class`,`row`);
let eliZTA6 = eo('div',null,null,`class`,`col-sm-6`);
let elXZnBp = eo('div',null,null,`class`,`form-group`);
let elmX5B_ = eo('label',null,null,`for`,`image`);
text(`Project Image`);
ec('label');
let cmpNNSq = this._lc('c6dk9DBv2', {parent:component,parentTop:projectLayout,props:{src:component.project.image},attrs:{src:`${component.project.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elg5CU5 = eo('div',null,null,`class`,`col-sm-6`);
let el63O4N = eo('button',null,null,`class`,`btn bold btn-cyan`);
text(`UPDATE`);
ec('button');
ec('div');
ec('div');
ec('form');
}}});

                    this.isReadyToGo();
                }
        });