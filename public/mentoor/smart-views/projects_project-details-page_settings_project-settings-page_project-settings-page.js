_Component({
                selector: 'project-settings-page',
                c: 'ProjectSettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateSettings'],
                children: {chHBZNJXa:'flk-dropdown-list',c9PFQqYQB:'flk-dropdown-list',c0Qm0Ig_P:'flk-datepicker',cPkX14OWV:'flk-datepicker',cuyMaBbYU:'flk-dropdown-list',ccJST6LU9:'flk-dropdown-list',cD3AfEmzB:'flk-mdb-checkbox',cy_U8WW_t:'flk-mdb-checkbox',c6UBT2FU0:'flk-image-input',ctM0yQugU:'project-layout'},
                render: function (component) {
                    let cmpxTPq = this._lc('ctM0yQugU', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elK9pjx = eo('h1');
let el9SRo3 = eo('i',null,null,`class`,`${fas('cog') + ' fa-spin mr-2 icon'}`);
ec('i');
text(`${ component.project.name } Settings`);
ec('h1');
let cndE_Mn = ! component.project.isProjectManager;
this.setState('stAsZOt', cndE_Mn);
let cndIJzo = !(cndE_Mn);
this.setState('stG1jMn', cndIJzo);
if (cndE_Mn) { 
let elworE_ = eo('h1','q5Pf',null,`class`,`text-center m-y-3 red-text`);
text(`You don't have permissions to access this area of the project!`);
ec('h1');
}else { 
let elb2NWt = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateSettings($el)}]});

                if (! elb2NWt.formHandler) {
                    window.cfrmdlr = elb2NWt.formHandler = new FormHandler(elb2NWt, component);
                } else {
                    window.cfrmdlr = elb2NWt.formHandler;
                }
            let elNQBvI = eo('div',null,null,`class`,`form-group`);
elNQBvI.cls = {'group-error': !!elb2NWt.formHandler.getError(`name`) };

            for (let className in elNQBvI.cls) {
                elNQBvI.classList.toggle(className, elNQBvI.cls[className]);
            }  
            let elEtucj = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cnd0mMu = true;
this.setState('stRRgIB', cnd0mMu);
if (cnd0mMu) { 
let elk91El = eo('span','iPqf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let eljeV4q = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elb2NWt.formHandler.addError(`name`, 'required', trans('validation.required'));}return elb2NWt.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
eljeV4q.value = fval(component.project.name);
let cnduB_f = elb2NWt.formHandler.getError(`name`);
this.setState('stgdDPg', cnduB_f);
if (cnduB_f) { 
let elQFMfm = eo('div','yJ3f',null,`class`,`alert alert-danger`);
text(elb2NWt.formHandler.getError(`name`));
ec('div');
}ec('div');
let eleTXh9 = eo('div',null,null,`class`,`form-group`);
eleTXh9.cls = {'group-error': !!elb2NWt.formHandler.getError(`about`) };

            for (let className in eleTXh9.cls) {
                eleTXh9.classList.toggle(className, eleTXh9.cls[className]);
            }  
            let elvQVgp = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elSqnN5 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elbpZKa = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.project.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elb2NWt.formHandler.addError(`about`, 'required', trans('validation.required'));}return elb2NWt.formHandler.removeError(`about`);}]},`value`,`${fval(component.project.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elbpZKa.value = fval(component.project.about);
ec('textarea');
let cndirOq = elb2NWt.formHandler.getError(`about`);
this.setState('stjZObu', cndirOq);
if (cndirOq) { 
let elzoh7H = eo('div','u5Kf',null,`class`,`alert alert-danger`);
text(elb2NWt.formHandler.getError(`about`));
ec('div');
}ec('div');
let elQDd4L = eo('div',null,null,`class`,`row`);
let el4OhoH = eo('div',null,null,`class`,`col-sm-6`);
let cmpzTqE = this._lc('chHBZNJXa', {parent:component,parentTop:projectLayout,props:{multiple:true,value:component.project.type,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let el7kyJE = eo('div',null,null,`class`,`col-sm-6`);
let cmpxA_z = this._lc('c9PFQqYQB', {parent:component,parentTop:projectLayout,props:{value:component.project.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let elqWymR = eo('div',null,null,`class`,`row m-t-1`);
let elOmVaH = eo('div',null,null,`class`,`col-sm-6`);
let cmparG4 = this._lc('c0Qm0Ig_P', {parent:component,parentTop:projectLayout,props:{value:component.project.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let ele3T9t = eo('div',null,null,`class`,`col-sm-6`);
let cmpZ63e = this._lc('cPkX14OWV', {parent:component,parentTop:projectLayout,props:{value:component.project.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elEyauA = eo('div',null,null,`class`,`row`);
let ellxLlm = eo('div',null,null,`class`,`col-sm-6`);
let cmpVYMQ = this._lc('cuyMaBbYU', {parent:component,parentTop:projectLayout,props:{value:component.project.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elIkFKE = eo('div',null,null,`class`,`col-sm-6`);
let cmpdTKy = this._lc('ccJST6LU9', {parent:component,parentTop:projectLayout,props:{multiple:true,imageable:true,value:component.project.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',required:'',service:'tagsService'}});
ec('div');
ec('div');
let el1bVYz = eo('div',null,null,`class`,`row`);
let elIDjBG = eo('div',null,null,`class`,`col-sm-6`);
let cmpQ94K = this._lc('cD3AfEmzB', {parent:component,parentTop:projectLayout,props:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},content:(flkMdbCheckbox) => {let cndxkAv = ! component.project.extra.includes('privacy');
this.setState('strDpl_', cndxkAv);
if (cndxkAv) { 
let elugr3B = eo('small','4I2f',null,`class`,`pink-text bold ml-2`);
text(`You need to unlock project privacy from`);
let elAtlpM = eo('a','Ptaf',null,`href`,`${URLS.project(component.project, 'shopping-mall')}`,`class`,`ml-2`);
text(`Shopping Mall`);
ec('a');
ec('small');
}},boolAttrs:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},attrs:{name:`${(`settings.private`).toInputName()}`,label:'Private Project'}});
ec('div');
let eldSVNj = eo('div',null,null,`class`,`col-sm-6`);
let cmpyBQJ = this._lc('cy_U8WW_t', {parent:component,parentTop:projectLayout,props:{checked:component.project.settings.openRecruitment},events:{onchange:function(e) {let $el = this; component.project.settings.openRecruitment = $el.checked}},content:(flkMdbCheckbox) => {let eljZOjm = eo('small',null,null,`class`,`bold teal-text ml-2`);
text(`If enabled, this will automatically turn the project to be public.`);
ec('small');
},boolAttrs:{checked:component.project.settings.openRecruitment},attrs:{name:`${(`settings.openRecruitment`).toInputName()}`,label:'Open Public Recruitment'}});
ec('div');
ec('div');
let elnFwuZ = eo('div',null,null,`class`,`row`);
let elwfXGT = eo('div',null,null,`class`,`col-sm-6`);
let elI6ZsX = eo('div',null,null,`class`,`form-group`);
let el3O8J7 = eo('label',null,null,`for`,`image`);
text(`Project Image`);
ec('label');
let cmpL7sR = this._lc('c6UBT2FU0', {parent:component,parentTop:projectLayout,props:{src:component.project.image},attrs:{src:`${component.project.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elUtk_e = eo('div',null,null,`class`,`col-sm-6`);
let elKcolS = eo('button',null,null,`class`,`btn bold btn-cyan`);
text(`UPDATE`);
ec('button');
ec('div');
ec('div');
ec('form');
}}});

                    this.isReadyToGo();
                }
        });