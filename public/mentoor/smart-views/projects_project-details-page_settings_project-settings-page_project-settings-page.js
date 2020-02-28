_Component({
                selector: 'project-settings-page',
                c: 'ProjectSettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateSettings'],
                children: {cakR5EGx8:'flk-dropdown-list',cYTJE8Ua4:'flk-dropdown-list',cHJfKCKdS:'flk-datepicker',cVPj60FRh:'flk-datepicker',cPqhdBPXI:'flk-dropdown-list',cscxNms3Y:'flk-dropdown-list',cLmCpDJIB:'flk-mdb-checkbox',ch7lPfYLp:'flk-mdb-checkbox',c0vONSJnP:'flk-image-input',cyWrVQILz:'project-layout'},
                render: function (component) {
                    let cmpH29U = this._lc('cyWrVQILz', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elLKIBk = eo('h1');
let elKl_ZD = eo('i',null,null,`class`,`${fas('cog')} fa-spin mr-2 icon`);
ec('i');
text(`${ component.project.name } Settings`);
ec('h1');
let cndjMVJ = ! component.project.isProjectManager;
this.setState('stDLWA7', cndjMVJ);
let cndPHvU = !(cndjMVJ);
this.setState('styHdce', cndPHvU);
if (cndjMVJ) { 
let eloX3jV = eo('h1','h4jf',null,`class`,`text-center m-y-3 red-text`);
text(`You don't have permissions to access this area of the project!`);
ec('h1');
}else { 
let el1ZeUP = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateSettings($el)}]});

                if (! el1ZeUP.formHandler) {
                    window.cfrmdlr = el1ZeUP.formHandler = new FormHandler(el1ZeUP, component);
                } else {
                    window.cfrmdlr = el1ZeUP.formHandler;
                }
            let elxM2X7 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el1ZeUP.formHandler.getError(`name`) })}`);
let ellHYt4 = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndsYw1 = true;
this.setState('stDL2E3', cndsYw1);
if (cndsYw1) { 
let elaJ4c8 = eo('span','8xzf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elpqO49 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return el1ZeUP.formHandler.addError(`name`, 'required', trans('validation.required'));}return el1ZeUP.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elpqO49.value = fval(component.project.name);
let cndkAFq = el1ZeUP.formHandler.getError(`name`);
this.setState('stQVfGS', cndkAFq);
if (cndkAFq) { 
let elRevBU = eo('div','cSEf',null,`class`,`alert alert-danger`);
text(el1ZeUP.formHandler.getError(`name`));
ec('div');
}ec('div');
let elPPwvP = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el1ZeUP.formHandler.getError(`about`) })}`);
let elerV1M = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let el_Gfpi = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMVBNI = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.project.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el1ZeUP.formHandler.addError(`about`, 'required', trans('validation.required'));}return el1ZeUP.formHandler.removeError(`about`);}]},`value`,`${fval(component.project.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elMVBNI.value = fval(component.project.about);
ec('textarea');
let cndaFTN = el1ZeUP.formHandler.getError(`about`);
this.setState('stL3gu0', cndaFTN);
if (cndaFTN) { 
let elbWevg = eo('div','cj1f',null,`class`,`alert alert-danger`);
text(el1ZeUP.formHandler.getError(`about`));
ec('div');
}ec('div');
let elFhmW8 = eo('div',null,null,`class`,`row`);
let elcEyAo = eo('div',null,null,`class`,`col-sm-6`);
let cmp1fjl = this._lc('cakR5EGx8', {parent:component,parentTop:projectLayout,props:{multiple:true,value:component.project.type,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let elCJibc = eo('div',null,null,`class`,`col-sm-6`);
let cmp6K6v = this._lc('cYTJE8Ua4', {parent:component,parentTop:projectLayout,props:{value:component.project.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let elLjX8C = eo('div',null,null,`class`,`row m-t-1`);
let eljD9BQ = eo('div',null,null,`class`,`col-sm-6`);
let cmpeXLv = this._lc('cHJfKCKdS', {parent:component,parentTop:projectLayout,props:{value:component.project.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let el3bgAN = eo('div',null,null,`class`,`col-sm-6`);
let cmpEK5p = this._lc('cVPj60FRh', {parent:component,parentTop:projectLayout,props:{value:component.project.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elgXPTX = eo('div',null,null,`class`,`row`);
let elxIHma = eo('div',null,null,`class`,`col-sm-6`);
let cmpzkwi = this._lc('cPqhdBPXI', {parent:component,parentTop:projectLayout,props:{value:component.project.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elpVv2y = eo('div',null,null,`class`,`col-sm-6`);
let cmpk2wE = this._lc('cscxNms3Y', {parent:component,parentTop:projectLayout,props:{multiple:true,imageable:true,value:component.project.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',required:'',service:'tagsService'}});
ec('div');
ec('div');
let elLDumA = eo('div',null,null,`class`,`row`);
let elOjdB5 = eo('div',null,null,`class`,`col-sm-6`);
let cmpjB2U = this._lc('cLmCpDJIB', {parent:component,parentTop:projectLayout,props:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},content:(flkMdbCheckbox) => {let cndsBxl = ! component.project.extra.includes('privacy');
this.setState('stOqPZ7', cndsBxl);
if (cndsBxl) { 
let elPPJa2 = eo('small','74Af',null,`class`,`pink-text bold ml-2`);
text(`You need to unlock project privacy from`);
let elg_JNo = eo('a','D6Tf',null,`href`,`${URLS.project(component.project, 'shopping-mall')}`,`class`,`ml-2`);
text(`Shopping Mall`);
ec('a');
ec('small');
}},boolAttrs:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},attrs:{name:`${(`settings.private`).toInputName()}`,label:'Private Project'}});
ec('div');
let elqXHXw = eo('div',null,null,`class`,`col-sm-6`);
let cmpQyxs = this._lc('ch7lPfYLp', {parent:component,parentTop:projectLayout,props:{checked:component.project.settings.openRecruitment},events:{onchange:function(e) {let $el = this; component.project.settings.openRecruitment = $el.checked}},content:(flkMdbCheckbox) => {let elcsM_1 = eo('small',null,null,`class`,`bold teal-text ml-2`);
text(`If enabled, this will automatically turn the project to be public.`);
ec('small');
},boolAttrs:{checked:component.project.settings.openRecruitment},attrs:{name:`${(`settings.openRecruitment`).toInputName()}`,label:'Open Public Recruitment'}});
ec('div');
ec('div');
let elifOTF = eo('div',null,null,`class`,`row`);
let elE9ckW = eo('div',null,null,`class`,`col-sm-6`);
let elWQEqw = eo('div',null,null,`class`,`form-group`);
let elj1j1E = eo('label',null,null,`for`,`image`);
text(`Project Image`);
ec('label');
let cmpDwOW = this._lc('c0vONSJnP', {parent:component,parentTop:projectLayout,props:{src:component.project.image},attrs:{src:`${component.project.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elBxZk4 = eo('div',null,null,`class`,`col-sm-6`);
let elBxvO0 = eo('button',null,null,`class`,`btn bold btn-cyan`);
text(`UPDATE`);
ec('button');
ec('div');
ec('div');
ec('form');
}}});

                    this.isReadyToGo();
                }
        });