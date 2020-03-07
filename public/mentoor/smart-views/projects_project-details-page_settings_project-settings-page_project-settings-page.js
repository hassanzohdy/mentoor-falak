_Component({
                selector: 'project-settings-page',
                c: 'ProjectSettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateSettings'],
                children: {cxEsaRYBI:'flk-dropdown-list',cu5cbkYEA:'flk-dropdown-list',cop8NnBy7:'flk-datepicker',ceIhXie0K:'flk-datepicker',cWX0z2MAx:'flk-dropdown-list',cRWnGXevK:'flk-dropdown-list',cfUPrjE8e:'flk-mdb-checkbox',cJ2IG34tw:'flk-mdb-checkbox',cHEUk9uNA:'flk-image-input',c2HiYRlSJ:'project-layout'},
                render: function (component) {
                    let cmpHMeJ = this._lc('c2HiYRlSJ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elWxIug = eo('h1');
let elmeZah = eo('i',null,null,`class`,`${fas('cog')} fa-spin mr-2 icon`);
ec('i');
text(`${ component.project.name } Settings`);
ec('h1');
let cnduZXS = ! component.project.isProjectManager;
this.setState('stkhkv9', cnduZXS);
let cndvIGF = !(cnduZXS);
this.setState('stBg1b_', cndvIGF);
if (cnduZXS) { 
let ellcMlD = eo('h1','oHef',null,`class`,`text-center m-y-3 red-text`);
text(`You don't have permissions to access this area of the project!`);
ec('h1');
}else { 
let elVOI7_ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateSettings($el)}]});

                if (! elVOI7_.formHandler) {
                    window.cfrmdlr = elVOI7_.formHandler = new FormHandler(elVOI7_, component);
                } else {
                    window.cfrmdlr = elVOI7_.formHandler;
                }
            let eltmlJr = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elVOI7_.formHandler.getError(`name`) })}`);
let eleF3G8 = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndMnC_ = true;
this.setState('stLH_TI', cndMnC_);
if (cndMnC_) { 
let elboRWe = eo('span','o3df',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el7nusn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elVOI7_.formHandler.addError(`name`, 'required', trans('validation.required'));}return elVOI7_.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el7nusn.value = fval(component.project.name);
let cndYF6L = elVOI7_.formHandler.getError(`name`);
this.setState('st5GvKw', cndYF6L);
if (cndYF6L) { 
let elHl6Px = eo('div','A9Gf',null,`class`,`alert alert-danger`);
text(elVOI7_.formHandler.getError(`name`));
ec('div');
}ec('div');
let el_WiTy = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elVOI7_.formHandler.getError(`about`) })}`);
let eluPoy_ = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elyE1Eh = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eldKzWU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.project.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elVOI7_.formHandler.addError(`about`, 'required', trans('validation.required'));}return elVOI7_.formHandler.removeError(`about`);}]},`value`,`${fval(component.project.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
eldKzWU.value = fval(component.project.about);
ec('textarea');
let cnd4P2v = elVOI7_.formHandler.getError(`about`);
this.setState('stP_5t2', cnd4P2v);
if (cnd4P2v) { 
let elG4OAi = eo('div','8Dnf',null,`class`,`alert alert-danger`);
text(elVOI7_.formHandler.getError(`about`));
ec('div');
}ec('div');
let el_qmrw = eo('div',null,null,`class`,`row`);
let el1L2xj = eo('div',null,null,`class`,`col-sm-6`);
let cmpI65Y = this._lc('cxEsaRYBI', {parent:component,parentTop:projectLayout,props:{multiple:true,value:component.project.type,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let elgMtDN = eo('div',null,null,`class`,`col-sm-6`);
let cmpVwvr = this._lc('cu5cbkYEA', {parent:component,parentTop:projectLayout,props:{value:component.project.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let eligBML = eo('div',null,null,`class`,`row m-t-1`);
let eldKoUs = eo('div',null,null,`class`,`col-sm-6`);
let cmpV7Gp = this._lc('cop8NnBy7', {parent:component,parentTop:projectLayout,props:{value:component.project.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let el1bG8t = eo('div',null,null,`class`,`col-sm-6`);
let cmpo54Y = this._lc('ceIhXie0K', {parent:component,parentTop:projectLayout,props:{value:component.project.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let eljBhPV = eo('div',null,null,`class`,`row`);
let elQjyD7 = eo('div',null,null,`class`,`col-sm-6`);
let cmpIOAN = this._lc('cWX0z2MAx', {parent:component,parentTop:projectLayout,props:{value:component.project.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elPoYWp = eo('div',null,null,`class`,`col-sm-6`);
let cmpVjVP = this._lc('cRWnGXevK', {parent:component,parentTop:projectLayout,props:{multiple:true,imageable:true,value:component.project.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',required:'',service:'tagsService'}});
ec('div');
ec('div');
let elFrQN0 = eo('div',null,null,`class`,`row`);
let el11PYa = eo('div',null,null,`class`,`col-sm-6`);
let cmpsiP4 = this._lc('cfUPrjE8e', {parent:component,parentTop:projectLayout,props:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},content:(flkMdbCheckbox) => {let cndGrTI = ! component.project.extra.includes('privacy');
this.setState('stk0Ecl', cndGrTI);
if (cndGrTI) { 
let el7aNZl = eo('small','rl2f',null,`class`,`pink-text bold ml-2`);
text(`You need to unlock project privacy from`);
let elb4j6P = eo('a','ym0f',null,`href`,`${URLS.project(component.project, 'shopping-mall')}`,`class`,`ml-2`);
text(`Shopping Mall`);
ec('a');
ec('small');
}},boolAttrs:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},attrs:{name:`${(`settings.private`).toInputName()}`,label:'Private Project'}});
ec('div');
let elm6_hP = eo('div',null,null,`class`,`col-sm-6`);
let cmpepYy = this._lc('cJ2IG34tw', {parent:component,parentTop:projectLayout,props:{checked:component.project.settings.openRecruitment},events:{onchange:function(e) {let $el = this; component.project.settings.openRecruitment = $el.checked}},content:(flkMdbCheckbox) => {let elCpdBJ = eo('small',null,null,`class`,`bold teal-text ml-2`);
text(`If enabled, this will automatically turn the project to be public.`);
ec('small');
},boolAttrs:{checked:component.project.settings.openRecruitment},attrs:{name:`${(`settings.openRecruitment`).toInputName()}`,label:'Open Public Recruitment'}});
ec('div');
ec('div');
let elbnY7V = eo('div',null,null,`class`,`row`);
let eloAPjm = eo('div',null,null,`class`,`col-sm-6`);
let el4favq = eo('div',null,null,`class`,`form-group`);
let ellPNPq = eo('label',null,null,`for`,`image`);
text(`Project Image`);
ec('label');
let cmpOaz_ = this._lc('cHEUk9uNA', {parent:component,parentTop:projectLayout,props:{src:component.project.image},attrs:{src:`${component.project.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elK1Qkv = eo('div',null,null,`class`,`col-sm-6`);
let eldecFm = eo('button',null,null,`class`,`btn bold btn-cyan`);
text(`UPDATE`);
ec('button');
ec('div');
ec('div');
ec('form');
}}});

                    this.isReadyToGo();
                }
        });