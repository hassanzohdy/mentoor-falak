_Component({
                selector: 'project-settings-page',
                c: 'ProjectSettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateSettings'],
                children: {cxvPBHF5Q:'flk-dropdown-list',cmZ5Nu3uZ:'flk-dropdown-list',cPyvmF6Ja:'flk-datepicker',cFq6KJ5GO:'flk-datepicker',cuJBxMoum:'flk-dropdown-list',cCqN_O461:'flk-dropdown-list',cGnfvEJek:'flk-mdb-checkbox',cR2lTXp0Z:'flk-mdb-checkbox',c5KLvnkuu:'flk-image-input',cy7JS4rJJ:'project-layout'},
                render: function (component) {
                    let cmpOQem = this._lc('cy7JS4rJJ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elBZUk1 = eo('h1');
let elPsAcd = eo('i',null,null,`class`,`${fas('cog') + ' fa-spin mr-2 icon'}`);
ec('i');
text(`${ component.project.name } Settings`);
ec('h1');
let cnd04sY = ! component.project.isProjectManager;
this.setState('st7gSQB', cnd04sY);
let cnd9ihS = !(cnd04sY);
this.setState('st8kecE', cnd9ihS);
if (cnd04sY) { 
let el7OSGH = eo('h1','Z25f',null,`class`,`text-center m-y-3 red-text`);
text(`You don't have permissions to access this area of the project!`);
ec('h1');
}else { 
let elMsNhl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateSettings($el)}]});

                if (! elMsNhl.formHandler) {
                    window.cfrmdlr = elMsNhl.formHandler = new FormHandler(elMsNhl, component);
                } else {
                    window.cfrmdlr = elMsNhl.formHandler;
                }
            let el010QD = eo('div',null,null,`class`,`form-group`);
el010QD.cls = {'group-error': !!elMsNhl.formHandler.getError(`name`) };

            for (let className in el010QD.cls) {
                el010QD.classList.toggle(className, el010QD.cls[className]);
            }  
            let elAd29u = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndXS6Z = true;
this.setState('st1_fZ3', cndXS6Z);
if (cndXS6Z) { 
let elgsocp = eo('span','JAxf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elxFPOv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elMsNhl.formHandler.addError(`name`, 'required', trans('validation.required'));}return elMsNhl.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elxFPOv.value = fval(component.project.name);
let cndCTUA = elMsNhl.formHandler.getError(`name`);
this.setState('stpqeXH', cndCTUA);
if (cndCTUA) { 
let elGtPwC = eo('div','8jaf',null,`class`,`alert alert-danger`);
text(elMsNhl.formHandler.getError(`name`));
ec('div');
}ec('div');
let elGdnQj = eo('div',null,null,`class`,`form-group`);
elGdnQj.cls = {'group-error': !!elMsNhl.formHandler.getError(`about`) };

            for (let className in elGdnQj.cls) {
                elGdnQj.classList.toggle(className, elGdnQj.cls[className]);
            }  
            let elPsyYO = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elicoMq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eluYK8V = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.project.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMsNhl.formHandler.addError(`about`, 'required', trans('validation.required'));}return elMsNhl.formHandler.removeError(`about`);}]},`value`,`${fval(component.project.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
eluYK8V.value = fval(component.project.about);
ec('textarea');
let cndQbp9 = elMsNhl.formHandler.getError(`about`);
this.setState('stv_W1s', cndQbp9);
if (cndQbp9) { 
let elejSYz = eo('div','mCBf',null,`class`,`alert alert-danger`);
text(elMsNhl.formHandler.getError(`about`));
ec('div');
}ec('div');
let elkiZxF = eo('div',null,null,`class`,`row`);
let elilCTP = eo('div',null,null,`class`,`col-sm-6`);
let cmpoCeO = this._lc('cxvPBHF5Q', {parent:component,parentTop:projectLayout,props:{multiple:true,value:component.project.type,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let elEfNAs = eo('div',null,null,`class`,`col-sm-6`);
let cmpKGDK = this._lc('cmZ5Nu3uZ', {parent:component,parentTop:projectLayout,props:{value:component.project.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let elyiSFF = eo('div',null,null,`class`,`row m-t-1`);
let elxV5aN = eo('div',null,null,`class`,`col-sm-6`);
let cmpg0Qo = this._lc('cPyvmF6Ja', {parent:component,parentTop:projectLayout,props:{value:component.project.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let eliYibB = eo('div',null,null,`class`,`col-sm-6`);
let cmpo7KD = this._lc('cFq6KJ5GO', {parent:component,parentTop:projectLayout,props:{value:component.project.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elN6S7i = eo('div',null,null,`class`,`row`);
let elJpxsB = eo('div',null,null,`class`,`col-sm-6`);
let cmpXXRS = this._lc('cuJBxMoum', {parent:component,parentTop:projectLayout,props:{value:component.project.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elsHXbi = eo('div',null,null,`class`,`col-sm-6`);
let cmpgq2y = this._lc('cCqN_O461', {parent:component,parentTop:projectLayout,props:{multiple:true,imageable:true,value:component.project.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',required:'',service:'tagsService'}});
ec('div');
ec('div');
let elQamc6 = eo('div',null,null,`class`,`row`);
let el32zsv = eo('div',null,null,`class`,`col-sm-6`);
let cmpgfvH = this._lc('cGnfvEJek', {parent:component,parentTop:projectLayout,props:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},content:(flkMdbCheckbox) => {let cndCf4N = ! component.project.extra.includes('privacy');
this.setState('stImfbC', cndCf4N);
if (cndCf4N) { 
let el2vcVl = eo('small','2vNf',null,`class`,`pink-text bold ml-2`);
text(`You need to unlock project privacy from`);
let elD2wvd = eo('a','FMRf',null,`href`,`${URLS.project(component.project, 'shopping-mall')}`,`class`,`ml-2`);
text(`Shopping Mall`);
ec('a');
ec('small');
}},boolAttrs:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},attrs:{name:`${(`settings.private`).toInputName()}`,label:'Private Project'}});
ec('div');
let elVhwJ7 = eo('div',null,null,`class`,`col-sm-6`);
let cmptUu3 = this._lc('cR2lTXp0Z', {parent:component,parentTop:projectLayout,props:{checked:component.project.settings.openRecruitment},events:{onchange:function(e) {let $el = this; component.project.settings.openRecruitment = $el.checked}},content:(flkMdbCheckbox) => {let elY6fyX = eo('small',null,null,`class`,`bold teal-text ml-2`);
text(`If enabled, this will automatically turn the project to be public.`);
ec('small');
},boolAttrs:{checked:component.project.settings.openRecruitment},attrs:{name:`${(`settings.openRecruitment`).toInputName()}`,label:'Open Public Recruitment'}});
ec('div');
ec('div');
let el1eBUh = eo('div',null,null,`class`,`row`);
let elmK0jP = eo('div',null,null,`class`,`col-sm-6`);
let elGlgXK = eo('div',null,null,`class`,`form-group`);
let ell0ZBg = eo('label',null,null,`for`,`image`);
text(`Project Image`);
ec('label');
let cmpcbOI = this._lc('c5KLvnkuu', {parent:component,parentTop:projectLayout,props:{src:component.project.image},attrs:{src:`${component.project.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elYoNMJ = eo('div',null,null,`class`,`col-sm-6`);
let elDdPLH = eo('button',null,null,`class`,`btn bold btn-cyan`);
text(`UPDATE`);
ec('button');
ec('div');
ec('div');
ec('form');
}}});

                    this.isReadyToGo();
                }
        });