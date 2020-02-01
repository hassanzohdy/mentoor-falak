_Component({
                selector: 'admin-training-ground-page',
                c: 'AdminTrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminCocktailService','service','tagsService','isValidForm','submitting'],
                children: {cdMPjXUgC:'tag-badge',cyv2soNTm:'table-actions',cTLyLtfIy:'admin-table',cMUCX1rkE:'flk-dropdown-list',ck1XT2F_V:'flk-checkbox',cliXfHhZA:'flk-dropdown-list',cywgUJm2F:'flk-dropdown-list',cDLtZTF8f:'flk-dropdown-list',cDPUNLFpq:'flk-image-input',cOuNcdwHU:'flk-modal'},
                render: function (component) {
                    let cmpitUS = this._lc('cTLyLtfIy', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiYsXm = 'WDGfzal' + index;
let el_MreU = eo('tr','dNCUMlKMKiaj' + index+iiYsXm);
let el2fC4S = eo('td','8qwff'+iiYsXm);
text( record.id );
ec('td');
let elqGCk9 = eo('td','Aq2ff'+iiYsXm);
text(record.title);
ec('td');
let elpgdsw = eo('td','u2qff'+iiYsXm);
let el9z7km = ev('img','1AFff'+iiYsXm,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.title}`,`alt`,`${record.title}`);
ec('td');
let elbzqqJ = eo('td','GCEff'+iiYsXm);
let cndOPAG = record.livePreview;
this.setState('stc4U0u', cndOPAG);
let cndYz_m = !(cndOPAG);
this.setState('stNxvKO', cndYz_m);
if (cndOPAG) { 
let el9Agqp = eo('a','ut7ff'+iiYsXm,null,`href`,`${ record.livePreview }`);
text(`Live preview`);
ec('a');
}else { 
let elLV5_b = eo('span','oMwff'+iiYsXm);
text(`N/a`);
ec('span');
}ec('td');
let eluDuHh = eo('td','T3Rff'+iiYsXm);
text(record.prize.format());
ec('td');
let elIx6H8 = eo('td','Kwvff'+iiYsXm);
text(record.cocktail.name);
ec('td');
let elAkF2k = eo('td','r6lff'+iiYsXm);
text(Object.get(record.dependsOn, 'title', ''));
ec('td');
let el_AaUf = eo('td','Ak7ff'+iiYsXm);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiqCOS = 'hMUCeRS' + i;
let elR17jL = eo('div','VRlLInOOVgIr' + i+iiYsXm+iiqCOS);
let elmLO1a = eo('div','M7rff'+iiYsXm+iiqCOS,null,`class`,`m-b-1`);
let cmpvzwk = this._lc('cdMPjXUgC', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiYsXm+iiqCOS});
ec('div');
ec('div');
}
ec('td');
let elTov1P = eo('td','PaMff'+iiYsXm);
text(record.level);
ec('td');
let el42KlH = eo('td','hkKff'+iiYsXm);
text(record.sortOrder);
ec('td');
let elbt3yB = eo('td','PYOff'+iiYsXm);
text(record.display);
ec('td');
let elb2GAZ = eo('td','F2Yff'+iiYsXm);
let cmpd_da = this._lc('cyv2soNTm', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiYsXm});
ec('td');
ec('tr');
}
}});
let cndlUav = component.openModal;
this.setState('stHr448', cndlUav);
if (cndlUav) { 
let cmptXJN = this._lc('cOuNcdwHU', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elwiC5d = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elwiC5d.formHandler) {
                    window.cfrmdlr = elwiC5d.formHandler = new FormHandler(elwiC5d, component);
                } else {
                    window.cfrmdlr = elwiC5d.formHandler;
                }
            let elmHTTQ = eo('div',null,null,`class`,`form-group`);
let el1vZwP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwiC5d.formHandler.addError(`title`, 'required', trans('validation.required'));}return elwiC5d.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el1vZwP.value = fval(component.formObject.title);
let cndIe03 = elwiC5d.formHandler.getError(`title`);
this.setState('stnPclk', cndIe03);
if (cndIe03) { 
let elZ5E8P = eo('div','sqlf',null,`class`,`alert alert-danger`);
text(elwiC5d.formHandler.getError(`title`));
ec('div');
}ec('div');
let el91XN4 = eo('div',null,null,`class`,`form-group`);
let cmpDQSk = this._lc('cMUCX1rkE', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`},state:'stHr448'});
ec('div');
let eldH_CL = eo('div',null,null,`class`,`form-group`);
let elS77Cv = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwiC5d.formHandler.addError(`description`, 'required', trans('validation.required'));}return elwiC5d.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elS77Cv.value = fval(component.formObject.description);
ec('textarea');
let cndGo6r = elwiC5d.formHandler.getError(`description`);
this.setState('stilGi7', cndGo6r);
if (cndGo6r) { 
let elczIz2 = eo('div','IKef',null,`class`,`alert alert-danger`);
text(elwiC5d.formHandler.getError(`description`));
ec('div');
}ec('div');
let el0JXeb = eo('div',null,null,`class`,`form-group`);
let ell0UNw = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwiC5d.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elwiC5d.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`shortDescription`);
ell0UNw.value = fval(component.formObject.shortDescription);
ec('textarea');
let cndehE2 = elwiC5d.formHandler.getError(`shortDescription`);
this.setState('stfEHVA', cndehE2);
if (cndehE2) { 
let el7ZTVA = eo('div','eKwf',null,`class`,`alert alert-danger`);
text(elwiC5d.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let eliNY1B = eo('div',null,null,`class`,`form-group`);
let elBQ0hC = eo('div',null,null,`class`,`row`);
let elNCSqI = eo('div',null,null,`class`,`col-md-3`);
let elIxmE6 = eo('div',null,null,`class`,`form-group`);
elIxmE6.cls = {'group-error': !!elwiC5d.formHandler.getError(`sortOrder`) };

            for (let className in elIxmE6.cls) {
                elIxmE6.classList.toggle(className, elIxmE6.cls[className]);
            }  
            let elM2ovk = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let ela5zA1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
ela5zA1.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elU8qB4 = eo('div',null,null,`class`,`col-md-3`);
let elUubTR = eo('div',null,null,`class`,`form-group`);
elUubTR.cls = {'group-error': !!elwiC5d.formHandler.getError(`livePreview`) };

            for (let className in elUubTR.cls) {
                elUubTR.classList.toggle(className, elUubTR.cls[className]);
            }  
            let elH3UYi = eo('label',null,null,`for`,`livePreview`);
text(trans('live preview url'));
ec('label');
let elx3moL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.livePreview = this.value;}]},`value`,`${fval(component.formObject.livePreview)}`,`name`,`${(`livePreview`).toInputName()}`,`placeholder`,`${trans(`live preview url`)}`,`type`,`text`,`class`,`form-control`,`id`,`livePreview`);
elx3moL.value = fval(component.formObject.livePreview);
ec('div');
ec('div');
let elXIVhd = eo('div',null,null,`class`,`col-md-3`);
let eledIJQ = eo('div',null,null,`class`,`form-group`);
eledIJQ.cls = {'group-error': !!elwiC5d.formHandler.getError(`prize`) };

            for (let className in eledIJQ.cls) {
                eledIJQ.classList.toggle(className, eledIJQ.cls[className]);
            }  
            let elvL6jF = eo('label',null,null,`for`,`prize`);
text(trans('Prize'));
let elDb3h_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCZ_KZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwiC5d.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elwiC5d.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elCZ_KZ.value = fval(component.formObject.prize);
let cndv5tE = elwiC5d.formHandler.getError(`prize`);
this.setState('stXgYuQ', cndv5tE);
if (cndv5tE) { 
let elhAPQA = eo('div','m1bf',null,`class`,`alert alert-danger`);
text(elwiC5d.formHandler.getError(`prize`));
ec('div');
}ec('div');
ec('div');
let el5mLDl = eo('div',null,null,`class`,`col-md-3`);
let cmpfyWN = this._lc('ck1XT2F_V', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stHr448'});
ec('div');
ec('div');
ec('div');
let el1aqQW = eo('div',null,null,`class`,`row`);
let elP3GYn = eo('div',null,null,`class`,`col-4`);
let cmp5REW = this._lc('cliXfHhZA', {parent:component,parentTop:flkModal,props:{service:component.adminCocktailService,lazyLoading:true,imageable:true,value:component.formObject.cocktail.id},attrs:{name:`${(`cocktailId`).toInputName()}`,placeholder:`${trans(`Cocktail`)}`,label:'Cocktail'},state:'stHr448'});
ec('div');
let elE3XFq = eo('div',null,null,`class`,`col-4`);
let cmpemEW = this._lc('cywgUJm2F', {parent:component,parentTop:flkModal,props:{service:component.service,except:component.formObject.id,lazyLoading:true,imageable:true,value:component.formObject.dependsOn.id},attrs:{name:`${(`dependsOnId`).toInputName()}`,placeholder:`${trans(`Depends on`)}`,label:'depends On'},state:'stHr448'});
ec('div');
let elnnOQw = eo('div',null,null,`class`,`col-4`);
let cmpUnY8 = this._lc('cDLtZTF8f', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Additional tags`)}`,label:'tags'},state:'stHr448'});
ec('div');
ec('div');
let elySPxn = eo('div',null,null,`class`,`form-group`);
let elznS7B = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpsQhl = this._lc('cDPUNLFpq', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stHr448'});
ec('div');
let el4xCrG = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el6dN28 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stHr448'});
}
                    this.isReadyToGo();
                }
        });