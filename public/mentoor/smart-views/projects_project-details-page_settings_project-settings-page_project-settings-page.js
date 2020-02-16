_Component({
                selector: 'project-settings-page',
                c: 'ProjectSettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateSettings'],
                children: {c_tQMVT1x:'flk-dropdown-list',clpfNwAK4:'flk-dropdown-list',c8jxlnNOT:'flk-datepicker',cSXh8NONG:'flk-datepicker',cJZ_NRoJr:'flk-dropdown-list',cje3mwPBB:'flk-dropdown-list',cVpyoUuFq:'flk-mdb-checkbox',cekfG4H0m:'flk-mdb-checkbox',cleg6otja:'flk-image-input',coI02vCRn:'project-layout'},
                render: function (component) {
                    let cmpe9WF = this._lc('coI02vCRn', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elXjwpb = eo('h1');
let elDyHUe = eo('i',null,null,`class`,`${fas('cog') + ' fa-spin mr-2 icon'}`);
ec('i');
text(`${ component.project.name } Settings`);
ec('h1');
let cndjz0c = ! component.project.isProjectManager;
this.setState('st1DjTb', cndjz0c);
let cndPr0R = !(cndjz0c);
this.setState('stSubcF', cndPr0R);
if (cndjz0c) { 
let elf1ikf = eo('h1','yTLf',null,`class`,`text-center m-y-3 red-text`);
text(`You don't have permissions to access this area of the project!`);
ec('h1');
}else { 
let elndbl5 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateSettings($el)}]});

                if (! elndbl5.formHandler) {
                    window.cfrmdlr = elndbl5.formHandler = new FormHandler(elndbl5, component);
                } else {
                    window.cfrmdlr = elndbl5.formHandler;
                }
            let elQrj_W = eo('div',null,null,`class`,`form-group`);
elQrj_W.cls = {'group-error': !!elndbl5.formHandler.getError(`name`) };

            for (let className in elQrj_W.cls) {
                elQrj_W.classList.toggle(className, elQrj_W.cls[className]);
            }  
            let elRWgua = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cnd93Se = true;
this.setState('stzH9qy', cnd93Se);
if (cnd93Se) { 
let el6JdA9 = eo('span','Ztpf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elEPBG5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elndbl5.formHandler.addError(`name`, 'required', trans('validation.required'));}return elndbl5.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elEPBG5.value = fval(component.project.name);
let cnd0uFf = elndbl5.formHandler.getError(`name`);
this.setState('st80OtS', cnd0uFf);
if (cnd0uFf) { 
let elDe36J = eo('div','L12f',null,`class`,`alert alert-danger`);
text(elndbl5.formHandler.getError(`name`));
ec('div');
}ec('div');
let el5rihb = eo('div',null,null,`class`,`form-group`);
el5rihb.cls = {'group-error': !!elndbl5.formHandler.getError(`about`) };

            for (let className in el5rihb.cls) {
                el5rihb.classList.toggle(className, el5rihb.cls[className]);
            }  
            let elnI6iM = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elUk5zp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzk6qv = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.project.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elndbl5.formHandler.addError(`about`, 'required', trans('validation.required'));}return elndbl5.formHandler.removeError(`about`);}]},`value`,`${fval(component.project.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elzk6qv.value = fval(component.project.about);
ec('textarea');
let cndrCu_ = elndbl5.formHandler.getError(`about`);
this.setState('stJnvpN', cndrCu_);
if (cndrCu_) { 
let elPWIo7 = eo('div','WVMf',null,`class`,`alert alert-danger`);
text(elndbl5.formHandler.getError(`about`));
ec('div');
}ec('div');
let el4PanC = eo('div',null,null,`class`,`row`);
let elq2UVr = eo('div',null,null,`class`,`col-sm-6`);
let cmpLDrK = this._lc('c_tQMVT1x', {parent:component,parentTop:projectLayout,props:{multiple:true,value:component.project.type,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let el2wjvb = eo('div',null,null,`class`,`col-sm-6`);
let cmpCaSw = this._lc('clpfNwAK4', {parent:component,parentTop:projectLayout,props:{value:component.project.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let elLNvrJ = eo('div',null,null,`class`,`row m-t-1`);
let elDI2wr = eo('div',null,null,`class`,`col-sm-6`);
let cmp2cOb = this._lc('c8jxlnNOT', {parent:component,parentTop:projectLayout,props:{value:component.project.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let elWUQQS = eo('div',null,null,`class`,`col-sm-6`);
let cmpTs4_ = this._lc('cSXh8NONG', {parent:component,parentTop:projectLayout,props:{value:component.project.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elz5B3c = eo('div',null,null,`class`,`row`);
let elAqCSt = eo('div',null,null,`class`,`col-sm-6`);
let cmppFBo = this._lc('cJZ_NRoJr', {parent:component,parentTop:projectLayout,props:{value:component.project.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elwtdqd = eo('div',null,null,`class`,`col-sm-6`);
let cmpPdFN = this._lc('cje3mwPBB', {parent:component,parentTop:projectLayout,props:{multiple:true,imageable:true,value:component.project.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',required:'',service:'tagsService'}});
ec('div');
ec('div');
let elZ2Gkg = eo('div',null,null,`class`,`row`);
let elQFAeI = eo('div',null,null,`class`,`col-sm-6`);
let cmp1mpP = this._lc('cVpyoUuFq', {parent:component,parentTop:projectLayout,props:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},content:(flkMdbCheckbox) => {let cndlhuM = ! component.project.extra.includes('privacy');
this.setState('st0jGFd', cndlhuM);
if (cndlhuM) { 
let elZ9yl5 = eo('small','ufyf',null,`class`,`pink-text bold ml-2`);
text(`You need to unlock project privacy from`);
let el1hM9Q = eo('a','7fhf',null,`href`,`${URLS.project(component.project, 'shopping-mall')}`,`class`,`ml-2`);
text(`Shopping Mall`);
ec('a');
ec('small');
}},boolAttrs:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},attrs:{name:`${(`settings.private`).toInputName()}`,label:'Private Project'}});
ec('div');
let elUkOZg = eo('div',null,null,`class`,`col-sm-6`);
let cmp7P2Z = this._lc('cekfG4H0m', {parent:component,parentTop:projectLayout,props:{checked:component.project.settings.openRecruitment},events:{onchange:function(e) {let $el = this; component.project.settings.openRecruitment = $el.checked}},content:(flkMdbCheckbox) => {let elwIqbW = eo('small',null,null,`class`,`bold teal-text ml-2`);
text(`If enabled, this will automatically turn the project to be public.`);
ec('small');
},boolAttrs:{checked:component.project.settings.openRecruitment},attrs:{name:`${(`settings.openRecruitment`).toInputName()}`,label:'Open Public Recruitment'}});
ec('div');
ec('div');
let eljQNDZ = eo('div',null,null,`class`,`row`);
let eliHKh4 = eo('div',null,null,`class`,`col-sm-6`);
let elJhXA1 = eo('div',null,null,`class`,`form-group`);
let elshBUm = eo('label',null,null,`for`,`image`);
text(`Project Image`);
ec('label');
let cmpzDUq = this._lc('cleg6otja', {parent:component,parentTop:projectLayout,props:{src:component.project.image},attrs:{src:`${component.project.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let el8doIw = eo('div',null,null,`class`,`col-sm-6`);
let elA3ziB = eo('button',null,null,`class`,`btn bold btn-cyan`);
text(`UPDATE`);
ec('button');
ec('div');
ec('div');
ec('form');
}}});

                    this.isReadyToGo();
                }
        });