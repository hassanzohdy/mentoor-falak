_Component({
                selector: 'project-settings-page',
                c: 'ProjectSettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateSettings'],
                children: {cmzscsx7M:'flk-dropdown-list',c6IFpc4bm:'flk-dropdown-list',cNihxPato:'flk-datepicker',cbp4eSEuS:'flk-datepicker',cLmBx1Vgv:'flk-dropdown-list',cnkhdaVxy:'flk-dropdown-list',ctH5sdZ4o:'flk-mdb-checkbox',cmFZzEaui:'flk-mdb-checkbox',c95LSYY7U:'flk-image-input',cu0uDclc6:'project-layout'},
                render: function (component) {
                    let cmpsCTc = this._lc('cu0uDclc6', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elxVX2l = eo('h1');
let elGdV7y = eo('i',null,null,`class`,`${fas('cog') + ' fa-spin mr-2 icon'}`);
ec('i');
text(`${ component.project.name } Settings`);
ec('h1');
let cnd43_S = ! component.project.isProjectManager;
this.setState('stAMY3j', cnd43_S);
let cndnqMR = !(cnd43_S);
this.setState('stkwiJu', cndnqMR);
if (cnd43_S) { 
let elgUmoe = eo('h1','Ov9f',null,`class`,`text-center m-y-3 red-text`);
text(`You don't have permissions to access this area of the project!`);
ec('h1');
}else { 
let elFBug6 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateSettings($el)}]});

                if (! elFBug6.formHandler) {
                    window.cfrmdlr = elFBug6.formHandler = new FormHandler(elFBug6, component);
                } else {
                    window.cfrmdlr = elFBug6.formHandler;
                }
            let eldKyTT = eo('div',null,null,`class`,`form-group`);
eldKyTT.cls = {'group-error': !!elFBug6.formHandler.getError(`name`) };

            for (let className in eldKyTT.cls) {
                eldKyTT.classList.toggle(className, eldKyTT.cls[className]);
            }  
            let eliUSRs = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndXJCR = true;
this.setState('stkFcP7', cndXJCR);
if (cndXJCR) { 
let elGp6Up = eo('span','eFJf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let el47zGU = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elFBug6.formHandler.addError(`name`, 'required', trans('validation.required'));}return elFBug6.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el47zGU.value = fval(component.project.name);
let cndxZQ2 = elFBug6.formHandler.getError(`name`);
this.setState('staoy8m', cndxZQ2);
if (cndxZQ2) { 
let elk9Ump = eo('div','DTpf',null,`class`,`alert alert-danger`);
text(elFBug6.formHandler.getError(`name`));
ec('div');
}ec('div');
let elQYwp5 = eo('div',null,null,`class`,`form-group`);
elQYwp5.cls = {'group-error': !!elFBug6.formHandler.getError(`about`) };

            for (let className in elQYwp5.cls) {
                elQYwp5.classList.toggle(className, elQYwp5.cls[className]);
            }  
            let elqpxi6 = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elzEinH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elSaCXo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.project.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elFBug6.formHandler.addError(`about`, 'required', trans('validation.required'));}return elFBug6.formHandler.removeError(`about`);}]},`value`,`${fval(component.project.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elSaCXo.value = fval(component.project.about);
ec('textarea');
let cndw8Ou = elFBug6.formHandler.getError(`about`);
this.setState('stmbZFC', cndw8Ou);
if (cndw8Ou) { 
let elVaZkS = eo('div','pjqf',null,`class`,`alert alert-danger`);
text(elFBug6.formHandler.getError(`about`));
ec('div');
}ec('div');
let elscGwE = eo('div',null,null,`class`,`row`);
let elfYDqv = eo('div',null,null,`class`,`col-sm-6`);
let cmpBmQw = this._lc('cmzscsx7M', {parent:component,parentTop:projectLayout,props:{multiple:true,value:component.project.type,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let el9L8I9 = eo('div',null,null,`class`,`col-sm-6`);
let cmpAFOI = this._lc('c6IFpc4bm', {parent:component,parentTop:projectLayout,props:{value:component.project.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let el2iD4e = eo('div',null,null,`class`,`row m-t-1`);
let elY1vjF = eo('div',null,null,`class`,`col-sm-6`);
let cmpaea2 = this._lc('cNihxPato', {parent:component,parentTop:projectLayout,props:{value:component.project.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let elnlSxO = eo('div',null,null,`class`,`col-sm-6`);
let cmpf7Iw = this._lc('cbp4eSEuS', {parent:component,parentTop:projectLayout,props:{value:component.project.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let elQ6etk = eo('div',null,null,`class`,`row`);
let elmwujI = eo('div',null,null,`class`,`col-sm-6`);
let cmpBkSQ = this._lc('cLmBx1Vgv', {parent:component,parentTop:projectLayout,props:{value:component.project.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elf7W05 = eo('div',null,null,`class`,`col-sm-6`);
let cmpnjb4 = this._lc('cnkhdaVxy', {parent:component,parentTop:projectLayout,props:{multiple:true,imageable:true,value:component.project.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',required:'',service:'tagsService'}});
ec('div');
ec('div');
let el5FLys = eo('div',null,null,`class`,`row`);
let elHktBU = eo('div',null,null,`class`,`col-sm-6`);
let cmptk74 = this._lc('ctH5sdZ4o', {parent:component,parentTop:projectLayout,props:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},content:(flkMdbCheckbox) => {let cnd9Abn = ! component.project.extra.includes('privacy');
this.setState('sthtvCF', cnd9Abn);
if (cnd9Abn) { 
let elEuYgi = eo('small','Zd5f',null,`class`,`pink-text bold ml-2`);
text(`You need to unlock project privacy from`);
let el21AWE = eo('a','zmlf',null,`href`,`${URLS.project(component.project, 'shopping-mall')}`,`class`,`ml-2`);
text(`Shopping Mall`);
ec('a');
ec('small');
}},boolAttrs:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},attrs:{name:`${(`settings.private`).toInputName()}`,label:'Private Project'}});
ec('div');
let el11LWe = eo('div',null,null,`class`,`col-sm-6`);
let cmp7KIJ = this._lc('cmFZzEaui', {parent:component,parentTop:projectLayout,props:{checked:component.project.settings.openRecruitment},events:{onchange:function(e) {let $el = this; component.project.settings.openRecruitment = $el.checked}},content:(flkMdbCheckbox) => {let elKK3hX = eo('small',null,null,`class`,`bold teal-text ml-2`);
text(`If enabled, this will automatically turn the project to be public.`);
ec('small');
},boolAttrs:{checked:component.project.settings.openRecruitment},attrs:{name:`${(`settings.openRecruitment`).toInputName()}`,label:'Open Public Recruitment'}});
ec('div');
ec('div');
let elPjLgc = eo('div',null,null,`class`,`row`);
let elrGA20 = eo('div',null,null,`class`,`col-sm-6`);
let elTCBvj = eo('div',null,null,`class`,`form-group`);
let el2ZD5o = eo('label',null,null,`for`,`image`);
text(`Project Image`);
ec('label');
let cmp1sH0 = this._lc('c95LSYY7U', {parent:component,parentTop:projectLayout,props:{src:component.project.image},attrs:{src:`${component.project.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elkD8yl = eo('div',null,null,`class`,`col-sm-6`);
let elyJGvX = eo('button',null,null,`class`,`btn bold btn-cyan`);
text(`UPDATE`);
ec('button');
ec('div');
ec('div');
ec('form');
}}});

                    this.isReadyToGo();
                }
        });