_Component({
                selector: 'project-settings-page',
                c: 'ProjectSettingsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','updateSettings'],
                children: {cDthcTFLA:'flk-dropdown-list',ca3UAx0Y8:'flk-dropdown-list',cp3oi40R4:'flk-datepicker',cD3zxYTyf:'flk-datepicker',cu6n2axNL:'flk-dropdown-list',cHr4jz_8M:'flk-dropdown-list',cSYHF_d5h:'flk-mdb-checkbox',c_CGuQm_t:'flk-mdb-checkbox',cWaQmv0P3:'flk-image-input',c301qkUw3:'project-layout'},
                render: function (component) {
                    let cmp9hOv = this._lc('c301qkUw3', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elyB5_4 = eo('h1');
let elrxYos = eo('i',null,null,`class`,`${fas('cog') + ' fa-spin mr-2 icon'}`);
ec('i');
text(`${ component.project.name } Settings`);
ec('h1');
let cnddQ1v = ! component.project.isProjectManager;
this.setState('st9_Y72', cnddQ1v);
let cndANZo = !(cnddQ1v);
this.setState('st3NC9d', cndANZo);
if (cnddQ1v) { 
let elN4Q6S = eo('h1','XYQf',null,`class`,`text-center m-y-3 red-text`);
text(`You don't have permissions to access this area of the project!`);
ec('h1');
}else { 
let elMG3Wz = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.updateSettings($el)}]});

                if (! elMG3Wz.formHandler) {
                    window.cfrmdlr = elMG3Wz.formHandler = new FormHandler(elMG3Wz, component);
                } else {
                    window.cfrmdlr = elMG3Wz.formHandler;
                }
            let elp4NC9 = eo('div',null,null,`class`,`form-group`);
elp4NC9.cls = {'group-error': !!elMG3Wz.formHandler.getError(`name`) };

            for (let className in elp4NC9.cls) {
                elp4NC9.classList.toggle(className, elp4NC9.cls[className]);
            }  
            let elkhsWU = eo('label',null,null,`for`,`name`);
text(trans('Project name'));
let cndkhKW = true;
this.setState('st8mp4q', cndkhKW);
if (cndkhKW) { 
let elsOWit = eo('span','i_Mf',null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
}ec('label');
let elgmGRA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.name = this.value;},function(e) {let value = this.value.trim();if (true && Is.empty(value)) {return elMG3Wz.formHandler.addError(`name`, 'required', trans('validation.required'));}return elMG3Wz.formHandler.removeError(`name`);}]},`value`,`${fval(component.project.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Project name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elgmGRA.value = fval(component.project.name);
let cndKmoC = elMG3Wz.formHandler.getError(`name`);
this.setState('stQBfxG', cndKmoC);
if (cndKmoC) { 
let ellsutK = eo('div','x2of',null,`class`,`alert alert-danger`);
text(elMG3Wz.formHandler.getError(`name`));
ec('div');
}ec('div');
let elHy5hk = eo('div',null,null,`class`,`form-group`);
elHy5hk.cls = {'group-error': !!elMG3Wz.formHandler.getError(`about`) };

            for (let className in elHy5hk.cls) {
                elHy5hk.classList.toggle(className, elHy5hk.cls[className]);
            }  
            let elF_Rvr = eo('label',null,null,`for`,`about`);
text(trans('About the project'));
let elpC9to = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elyly5G = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.project.about = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMG3Wz.formHandler.addError(`about`, 'required', trans('validation.required'));}return elMG3Wz.formHandler.removeError(`about`);}]},`value`,`${fval(component.project.about)}`,`name`,`${(`about`).toInputName()}`,`placeholder`,`${trans(`About the project (Markdown support), if the project is not private, this content will be visible to everyone.`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`about`);
elyly5G.value = fval(component.project.about);
ec('textarea');
let cnduzaC = elMG3Wz.formHandler.getError(`about`);
this.setState('stExmnV', cnduzaC);
if (cnduzaC) { 
let elWv9YP = eo('div','1Dtf',null,`class`,`alert alert-danger`);
text(elMG3Wz.formHandler.getError(`about`));
ec('div');
}ec('div');
let elHFfM1 = eo('div',null,null,`class`,`row`);
let elQ8Ter = eo('div',null,null,`class`,`col-sm-6`);
let cmpiOpj = this._lc('cDthcTFLA', {parent:component,parentTop:projectLayout,props:{multiple:true,value:component.project.type,items:FLAGS.projects.types},boolAttrs:{multiple:true},attrs:{name:`${(`type[]`).toInputName()}`,label:'This project contains',heading:'types',required:''}});
ec('div');
let eledtEX = eo('div',null,null,`class`,`col-sm-6`);
let cmpj3fN = this._lc('ca3UAx0Y8', {parent:component,parentTop:projectLayout,props:{value:component.project.for,items:FLAGS.projects.for},attrs:{name:`${(`for`).toInputName()}`,label:'This project is for',heading:'For',required:''}});
ec('div');
ec('div');
let elFUrdN = eo('div',null,null,`class`,`row m-t-1`);
let eluWoz7 = eo('div',null,null,`class`,`col-sm-6`);
let cmpRTMp = this._lc('cp3oi40R4', {parent:component,parentTop:projectLayout,props:{value:component.project.startDate},attrs:{name:`${(`startDate`).toInputName()}`,placeholder:`${trans(`Starting Date`)}`,label:'Starting Date',class:'form-control',required:''}});
ec('div');
let elbA8Xx = eo('div',null,null,`class`,`col-sm-6`);
let cmpvCPo = this._lc('cD3zxYTyf', {parent:component,parentTop:projectLayout,props:{value:component.project.endDate},attrs:{name:`${(`endDate`).toInputName()}`,placeholder:`${trans(`End Date`)}`,label:'End Date',class:'form-control',required:''}});
ec('div');
ec('div');
let eloreLU = eo('div',null,null,`class`,`row`);
let elskSac = eo('div',null,null,`class`,`col-sm-6`);
let cmprpj2 = this._lc('cu6n2axNL', {parent:component,parentTop:projectLayout,props:{value:component.project.status,items:FLAGS.projects.status},attrs:{name:`${(`status`).toInputName()}`,label:'Current Project Status',heading:'Status',required:''}});
ec('div');
let elLUUqG = eo('div',null,null,`class`,`col-sm-6`);
let cmp1JWf = this._lc('cHr4jz_8M', {parent:component,parentTop:projectLayout,props:{multiple:true,imageable:true,value:component.project.tags,lazyLoading:true},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,label:'Tags',heading:'Tags List',required:'',service:'tagsService'}});
ec('div');
ec('div');
let elJdegM = eo('div',null,null,`class`,`row`);
let elVnoyU = eo('div',null,null,`class`,`col-sm-6`);
let cmpCoQ0 = this._lc('cSYHF_d5h', {parent:component,parentTop:projectLayout,props:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},content:(flkMdbCheckbox) => {let cndGGiv = ! component.project.extra.includes('privacy');
this.setState('stWJvrR', cndGGiv);
if (cndGGiv) { 
let elCgEzE = eo('small','ny5f',null,`class`,`pink-text bold ml-2`);
text(`You need to unlock project privacy from`);
let elarAYd = eo('a','NBZf',null,`href`,`${URLS.project(component.project, 'shopping-mall')}`,`class`,`ml-2`);
text(`Shopping Mall`);
ec('a');
ec('small');
}},boolAttrs:{disabled:! component.project.extra.includes('privacy'),checked:component.project.settings.private},attrs:{name:`${(`settings.private`).toInputName()}`,label:'Private Project'}});
ec('div');
let elTBh94 = eo('div',null,null,`class`,`col-sm-6`);
let cmpg3T6 = this._lc('c_CGuQm_t', {parent:component,parentTop:projectLayout,props:{checked:component.project.settings.openRecruitment},events:{onchange:function(e) {let $el = this; component.project.settings.openRecruitment = $el.checked}},content:(flkMdbCheckbox) => {let elblFT9 = eo('small',null,null,`class`,`bold teal-text ml-2`);
text(`If enabled, this will automatically turn the project to be public.`);
ec('small');
},boolAttrs:{checked:component.project.settings.openRecruitment},attrs:{name:`${(`settings.openRecruitment`).toInputName()}`,label:'Open Public Recruitment'}});
ec('div');
ec('div');
let el8CZBE = eo('div',null,null,`class`,`row`);
let elVJ3hp = eo('div',null,null,`class`,`col-sm-6`);
let el9BjYl = eo('div',null,null,`class`,`form-group`);
let eltxVVA = eo('label',null,null,`for`,`image`);
text(`Project Image`);
ec('label');
let cmpV_kT = this._lc('cWaQmv0P3', {parent:component,parentTop:projectLayout,props:{src:component.project.image},attrs:{src:`${component.project.image}`,name:`${(`image`).toInputName()}`,id:'image'}});
ec('div');
ec('div');
let elTBE59 = eo('div',null,null,`class`,`col-sm-6`);
let elG6IH6 = eo('button',null,null,`class`,`btn bold btn-cyan`);
text(`UPDATE`);
ec('button');
ec('div');
ec('div');
ec('form');
}}});

                    this.isReadyToGo();
                }
        });