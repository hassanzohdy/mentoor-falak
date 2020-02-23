_Component({
                selector: 'project-settings-page',
                c: 'ProjectSettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateSettings'],
                children: {cGDBANTul:'flk-dropdown-list',cmtoQjp3r:'flk-dropdown-list',c3qPDqn0v:'flk-datepicker',co9wVZX0l:'flk-datepicker',cut41KAUM:'flk-dropdown-list',cqkqNpTke:'flk-dropdown-list',ccA57NOJ9:'flk-mdb-checkbox',ciq06MORW:'flk-mdb-checkbox',c2l6urS2n:'flk-image-input',cyCsoMi7p:'project-layout'},
                render: function (component) {
                    let cmpI1_P = this._lc('cyCsoMi7p', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elETyI1 = eo('h1');
let elbwob8 = eo('i',null,null,`class`,`${fas('cog') + ' fa-spin mr-2 icon'}`);
ec('i');
text(`${ component.project.name } Settings`);
ec('h1');
let cnd373o = ! component.project.isProjectManager;
this.setState('stEeXBR', cnd373o);
let cnd35ox = !(cnd373o);
this.setState('stmjCWB', cnd35ox);
if (cnd373o) { 
let elyCNEB = eo('h1','jXvf',null,`class`,`text-center m-y-3 red-text`);
text(`You don't have permissions to access this area of the project!`);
ec('h1');
}else { 
let eljp91Y = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateSettings($el)}]});

                if (! eljp91Y.formHandler) {
                    window.cfrmdlr = eljp91Y.formHandler = new FormHandler(eljp91Y, component);
                } else {
                    window.cfrmdlr = eljp91Y.formHandler;
                }
            let elOReiQ = eo('div',null,null,`class`,`form-group`);
elOReiQ.cls = {'group-error': !!eljp91Y.formHandler.getError(`name`) };

            for (let className in elOReiQ.cls) {
                elOReiQ.classList.toggle(className, elOReiQ.cls[className]);
            }  
            let elhkj53 = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndDWlH = true;
this.setState('stYtatQ', cndDWlH);
if (cndDWlH) { 
let elTdL8o = eo('span','MAjf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elQYxNB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return eljp91Y.formHandler.addError(`name`, 'required', trans('validation.required'));}return eljp91Y.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elQYxNB.value = fval(component.project.name);
let cndEgE_ = eljp91Y.formHandler.getError(`name`);
this.setState('stDNv66', cndEgE_);
if (cndEgE_) { 
let elail_0 = eo('div','Jw1f',null,`class`,`alert alert-danger`);
text(eljp91Y.formHandler.getError(`name`));
ec('div');
}ec('div');
let elgNxuu = eo('div',null,null,`class`,`form-group`);
elgNxuu.cls = {'group-error': !!eljp91Y.formHandler.getError(`about`) };

            for (let className in elgNxuu.cls) {
                elgNxuu.classList.toggle(className, elgNxuu.cls[className]);
            }  
            let el9lPk7 = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elFJnv2 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elLkSBM = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.project.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eljp91Y.formHandler.addError(`about`, 'required', trans('validation.required'));}return eljp91Y.formHandler.removeError(`about`);}]},`value`,`${fval(component.project.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elLkSBM.value = fval(component.project.about);
ec('textarea');
let cndB_6U = eljp91Y.formHandler.getError(`about`);
this.setState('stoSScA', cndB_6U);
if (cndB_6U) { 
let el81kbm = eo('div','S7Tf',null,`class`,`alert alert-danger`);
text(eljp91Y.formHandler.getError(`about`));
ec('div');
}ec('div');
let elFxDlL = eo('div',null,null,`class`,`row`);
let elHEl7I = eo('div',null,null,`class`,`col-sm-6`);
let cmpe0mM = this._lc('cGDBANTul', {parent:component,parentTop:projectLayout,props:{multiple:true,value:component.project.type,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let el2NHsO = eo('div',null,null,`class`,`col-sm-6`);
let cmp96cc = this._lc('cmtoQjp3r', {parent:component,parentTop:projectLayout,props:{value:component.project.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let elcDKkM = eo('div',null,null,`class`,`row m-t-1`);
let elXJIe8 = eo('div',null,null,`class`,`col-sm-6`);
let cmpmSOv = this._lc('c3qPDqn0v', {parent:component,parentTop:projectLayout,props:{value:component.project.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let el2Kv00 = eo('div',null,null,`class`,`col-sm-6`);
let cmp0rzt = this._lc('co9wVZX0l', {parent:component,parentTop:projectLayout,props:{value:component.project.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elQLtPF = eo('div',null,null,`class`,`row`);
let elL_OML = eo('div',null,null,`class`,`col-sm-6`);
let cmpOCvq = this._lc('cut41KAUM', {parent:component,parentTop:projectLayout,props:{value:component.project.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elA9Wxb = eo('div',null,null,`class`,`col-sm-6`);
let cmpRlCW = this._lc('cqkqNpTke', {parent:component,parentTop:projectLayout,props:{multiple:true,imageable:true,value:component.project.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',required:'',service:'tagsService'}});
ec('div');
ec('div');
let elLumJ4 = eo('div',null,null,`class`,`row`);
let elIr4lI = eo('div',null,null,`class`,`col-sm-6`);
let cmpQigl = this._lc('ccA57NOJ9', {parent:component,parentTop:projectLayout,props:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},content:(flkMdbCheckbox) => {let cnd0h2w = ! component.project.extra.includes('privacy');
this.setState('stp48bu', cnd0h2w);
if (cnd0h2w) { 
let elhgDpi = eo('small','qfFf',null,`class`,`pink-text bold ml-2`);
text(`You need to unlock project privacy from`);
let elcSJVu = eo('a','NiWf',null,`href`,`${URLS.project(component.project, 'shopping-mall')}`,`class`,`ml-2`);
text(`Shopping Mall`);
ec('a');
ec('small');
}},boolAttrs:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},attrs:{name:`${(`settings.private`).toInputName()}`,label:'Private Project'}});
ec('div');
let el3g0m6 = eo('div',null,null,`class`,`col-sm-6`);
let cmpQRSS = this._lc('ciq06MORW', {parent:component,parentTop:projectLayout,props:{checked:component.project.settings.openRecruitment},events:{onchange:function(e) {let $el = this; component.project.settings.openRecruitment = $el.checked}},content:(flkMdbCheckbox) => {let elkMOlh = eo('small',null,null,`class`,`bold teal-text ml-2`);
text(`If enabled, this will automatically turn the project to be public.`);
ec('small');
},boolAttrs:{checked:component.project.settings.openRecruitment},attrs:{name:`${(`settings.openRecruitment`).toInputName()}`,label:'Open Public Recruitment'}});
ec('div');
ec('div');
let elnpZwL = eo('div',null,null,`class`,`row`);
let elHmEKX = eo('div',null,null,`class`,`col-sm-6`);
let elavCZL = eo('div',null,null,`class`,`form-group`);
let elkaDoU = eo('label',null,null,`for`,`image`);
text(`Project Image`);
ec('label');
let cmpHV3A = this._lc('c2l6urS2n', {parent:component,parentTop:projectLayout,props:{src:component.project.image},attrs:{src:`${component.project.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elW_XP8 = eo('div',null,null,`class`,`col-sm-6`);
let elAgeLo = eo('button',null,null,`class`,`btn bold btn-cyan`);
text(`UPDATE`);
ec('button');
ec('div');
ec('div');
ec('form');
}}});

                    this.isReadyToGo();
                }
        });