_Component({
                selector: 'admin-training-ground-page',
                c: 'AdminTrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminCocktailService','service','tagsService','isValidForm','submitting'],
                children: {cF1Oug3VN:'tag-badge',cMxTvwCHC:'table-actions',cdBuuuMN8:'admin-table',c1_faQ1US:'flk-dropdown-list',c6I50SJFv:'flk-checkbox',coeTPCw2p:'flk-dropdown-list',c3xJ85tkV:'flk-dropdown-list',c03zTmbNl:'flk-dropdown-list',ciO_OXGe4:'flk-image-input',cUJHhaJhv:'flk-modal'},
                render: function (component) {
                    let cmpYNVL = this._lc('cdBuuuMN8', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iirINd = 'zHOHjXr' + index;
let elopSvR = eo('tr','S6hIWfEhwA1S' + index+iirINd);
let elI4796 = eo('td','Jhdff'+iirINd);
text( record.id );
ec('td');
let el9zApQ = eo('td','I8kff'+iirINd);
text(record.title);
ec('td');
let elMQHts = eo('td','P1Lff'+iirINd);
let elksOEv = ev('img','nt8ff'+iirINd,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.title}`,`alt`,`${record.title}`);
ec('td');
let elmw5YX = eo('td','w2zff'+iirINd);
let cnd7xyl = record.livePreview;
this.setState('stZDxq4', cnd7xyl);
let cnd4SEi = !(cnd7xyl);
this.setState('stuaeWE', cnd4SEi);
if (cnd7xyl) { 
let elWufdy = eo('a','buHff'+iirINd,null,`href`,`${ record.livePreview }`);
text(`Live preview`);
ec('a');
}else { 
let elTNQua = eo('span','U5off'+iirINd);
text(`N/a`);
ec('span');
}ec('td');
let elZ2NFa = eo('td','3zNff'+iirINd);
text(record.prize.format());
ec('td');
let eljT9Vo = eo('td','ik2ff'+iirINd);
text(record.cocktail.name);
ec('td');
let el3sTMX = eo('td','qIAff'+iirINd);
text(Object.get(record.dependsOn, 'title', ''));
ec('td');
let elZaWGg = eo('td','w5tff'+iirINd);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiWygG = 'oXaSxo5' + i;
let el4gNh6 = eo('div','uwdibLmwjWwr' + i+iirINd+iiWygG);
let elggQUf = eo('div','lfsff'+iirINd+iiWygG,null,`class`,`m-b-1`);
let cmpIp0t = this._lc('cF1Oug3VN', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iirINd+iiWygG});
ec('div');
ec('div');
}
ec('td');
let el7Wp1D = eo('td','I1Kff'+iirINd);
text(record.level);
ec('td');
let el3v3yu = eo('td','uWMff'+iirINd);
text(record.sortOrder);
ec('td');
let elPpknM = eo('td','s9Tff'+iirINd);
text(record.display);
ec('td');
let elCw76z = eo('td','Vseff'+iirINd);
let cmpPO3T = this._lc('cMxTvwCHC', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iirINd});
ec('td');
ec('tr');
}
}});
let cndekQV = component.openModal;
this.setState('stPIROj', cndekQV);
if (cndekQV) { 
let cmpbeoi = this._lc('cUJHhaJhv', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elnXXOF = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elnXXOF.formHandler) {
                    window.cfrmdlr = elnXXOF.formHandler = new FormHandler(elnXXOF, component);
                } else {
                    window.cfrmdlr = elnXXOF.formHandler;
                }
            let elA_xii = eo('div',null,null,`class`,`form-group`);
let elskppe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnXXOF.formHandler.addError(`title`, 'required', trans('validation.required'));}return elnXXOF.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elskppe.value = fval(component.formObject.title);
let cndG8jc = elnXXOF.formHandler.getError(`title`);
this.setState('st0edQ7', cndG8jc);
if (cndG8jc) { 
let elvnBqH = eo('div','Qsdf',null,`class`,`alert alert-danger`);
text(elnXXOF.formHandler.getError(`title`));
ec('div');
}ec('div');
let elWm6Rq = eo('div',null,null,`class`,`form-group`);
let cmprE1B = this._lc('c1_faQ1US', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`},state:'stPIROj'});
ec('div');
let elvCq1C = eo('div',null,null,`class`,`form-group`);
let ellHwT1 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnXXOF.formHandler.addError(`description`, 'required', trans('validation.required'));}return elnXXOF.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
ellHwT1.value = fval(component.formObject.description);
ec('textarea');
let cnd2o3u = elnXXOF.formHandler.getError(`description`);
this.setState('st_L3nS', cnd2o3u);
if (cnd2o3u) { 
let el2VeTH = eo('div','ctRf',null,`class`,`alert alert-danger`);
text(elnXXOF.formHandler.getError(`description`));
ec('div');
}ec('div');
let elbLmBP = eo('div',null,null,`class`,`form-group`);
let elkGHkl = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnXXOF.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elnXXOF.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`shortDescription`);
elkGHkl.value = fval(component.formObject.shortDescription);
ec('textarea');
let cnd05n1 = elnXXOF.formHandler.getError(`shortDescription`);
this.setState('stL4C6Y', cnd05n1);
if (cnd05n1) { 
let ele6VGc = eo('div','lhFf',null,`class`,`alert alert-danger`);
text(elnXXOF.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let elA_qsU = eo('div',null,null,`class`,`form-group`);
let elzzn9m = eo('div',null,null,`class`,`row`);
let elEBHWD = eo('div',null,null,`class`,`col-md-3`);
let elRRoAJ = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elnXXOF.formHandler.getError(`sortOrder`) })}`);
let eleAzpg = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let el3NUUl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el3NUUl.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elO5W02 = eo('div',null,null,`class`,`col-md-3`);
let elDLc0I = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elnXXOF.formHandler.getError(`livePreview`) })}`);
let elXp2j2 = eo('label',null,null,`for`,`livePreview`);
text(trans('live preview url'));
ec('label');
let elCgjUN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.livePreview = this.value;}]},`value`,`${fval(component.formObject.livePreview)}`,`name`,`${(`livePreview`).toInputName()}`,`placeholder`,`${trans(`live preview url`)}`,`type`,`text`,`class`,`form-control`,`id`,`livePreview`);
elCgjUN.value = fval(component.formObject.livePreview);
ec('div');
ec('div');
let elVUJvq = eo('div',null,null,`class`,`col-md-3`);
let elE4Vsg = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elnXXOF.formHandler.getError(`prize`) })}`);
let elsv09_ = eo('label',null,null,`for`,`prize`);
text(trans('Prize'));
let elrFfui = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzmOa5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elnXXOF.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elnXXOF.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elzmOa5.value = fval(component.formObject.prize);
let cnd8k5p = elnXXOF.formHandler.getError(`prize`);
this.setState('stm42Aw', cnd8k5p);
if (cnd8k5p) { 
let el9DleI = eo('div','ER8f',null,`class`,`alert alert-danger`);
text(elnXXOF.formHandler.getError(`prize`));
ec('div');
}ec('div');
ec('div');
let el8Bloi = eo('div',null,null,`class`,`col-md-3`);
let cmpt7Lu = this._lc('c6I50SJFv', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stPIROj'});
ec('div');
ec('div');
ec('div');
let el8EhGo = eo('div',null,null,`class`,`row`);
let elFh_6y = eo('div',null,null,`class`,`col-4`);
let cmpxheB = this._lc('coeTPCw2p', {parent:component,parentTop:flkModal,props:{service:component.adminCocktailService,lazyLoading:true,imageable:true,value:component.formObject.cocktail.id},attrs:{name:`${(`cocktailId`).toInputName()}`,placeholder:`${trans(`Cocktail`)}`,label:'Cocktail'},state:'stPIROj'});
ec('div');
let elqfs04 = eo('div',null,null,`class`,`col-4`);
let cmp_8Fx = this._lc('c3xJ85tkV', {parent:component,parentTop:flkModal,props:{service:component.service,except:component.formObject.id,lazyLoading:true,imageable:true,value:component.formObject.dependsOn.id},attrs:{name:`${(`dependsOnId`).toInputName()}`,placeholder:`${trans(`Depends on`)}`,label:'depends On'},state:'stPIROj'});
ec('div');
let elOSEpJ = eo('div',null,null,`class`,`col-4`);
let cmppmCt = this._lc('c03zTmbNl', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Additional tags`)}`,label:'tags'},state:'stPIROj'});
ec('div');
ec('div');
let el6eQ2e = eo('div',null,null,`class`,`form-group`);
let elaJmN2 = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmprEob = this._lc('ciO_OXGe4', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stPIROj'});
ec('div');
let elF8oyW = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elRBjj1 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stPIROj'});
}
                    this.isReadyToGo();
                }
        });