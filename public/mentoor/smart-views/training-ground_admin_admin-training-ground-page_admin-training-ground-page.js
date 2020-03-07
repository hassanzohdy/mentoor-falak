_Component({
                selector: 'admin-training-ground-page',
                c: 'AdminTrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminCocktailService','service','tagsService','isValidForm','submitting'],
                children: {cViPI3mPT:'tag-badge',cNzigSm3H:'table-actions',cHhUx1TgD:'admin-table',cL_PDSJLW:'flk-dropdown-list',c5xP8zUe0:'flk-checkbox',c7mb03kni:'flk-dropdown-list',cj7ilV2l3:'flk-dropdown-list',c5Oc47WqA:'flk-dropdown-list',ct9Ksq7kG:'flk-image-input',cAlwHcvth:'flk-modal'},
                render: function (component) {
                    let cmp9ig2 = this._lc('cHhUx1TgD', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iign7q = 'aoNx8Xu' + index;
let eljrjjl = eo('tr','pv9NccokquNr' + index+iign7q);
let elgQQvl = eo('td','1AZff'+iign7q);
text( record.id );
ec('td');
let eln3xlc = eo('td','hROff'+iign7q);
text(record.title);
ec('td');
let elE90PK = eo('td','ODZff'+iign7q);
let elsNczC = ev('img','fEyff'+iign7q,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.title}`,`alt`,`${record.title}`);
ec('td');
let elWaulB = eo('td','WlIff'+iign7q);
let cnd5DBD = record.livePreview;
this.setState('stnLLih', cnd5DBD);
let cndz7BP = !(cnd5DBD);
this.setState('stJXhSY', cndz7BP);
if (cnd5DBD) { 
let elquJ7d = eo('a','euwff'+iign7q,null,`href`,`${ record.livePreview }`);
text(`Live preview`);
ec('a');
}else { 
let elW760E = eo('span','5Jxff'+iign7q);
text(`N/a`);
ec('span');
}ec('td');
let elHor2F = eo('td','8oRff'+iign7q);
text(record.prize.format());
ec('td');
let elwcG4X = eo('td','8HKff'+iign7q);
text(record.cocktail.name);
ec('td');
let elTHo56 = eo('td','oZuff'+iign7q);
text(Object.get(record.dependsOn, 'title', ''));
ec('td');
let elT8YQh = eo('td','rXBff'+iign7q);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iibvAJ = 'yMhQjnQ' + i;
let el1HFHj = eo('div','J1bcyO0GgdKm' + i+iign7q+iibvAJ);
let el_fAwk = eo('div','ZoLff'+iign7q+iibvAJ,null,`class`,`m-b-1`);
let cmpKSI8 = this._lc('cViPI3mPT', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iign7q+iibvAJ});
ec('div');
ec('div');
}
ec('td');
let el9q35b = eo('td','O0Gff'+iign7q);
text(record.level);
ec('td');
let el9PKEI = eo('td','tlQff'+iign7q);
text(record.sortOrder);
ec('td');
let elT1a1f = eo('td','Uedff'+iign7q);
text(record.display);
ec('td');
let elwOXAt = eo('td','nzWff'+iign7q);
let cmpvqCN = this._lc('cNzigSm3H', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iign7q});
ec('td');
ec('tr');
}
}});
let cnd15eL = component.openModal;
this.setState('stQBSq6', cnd15eL);
if (cnd15eL) { 
let cmpwLaR = this._lc('cAlwHcvth', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el7mKcS = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7mKcS.formHandler) {
                    window.cfrmdlr = el7mKcS.formHandler = new FormHandler(el7mKcS, component);
                } else {
                    window.cfrmdlr = el7mKcS.formHandler;
                }
            let eltL8IU = eo('div',null,null,`class`,`form-group`);
let el6aal8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7mKcS.formHandler.addError(`title`, 'required', trans('validation.required'));}return el7mKcS.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el6aal8.value = fval(component.formObject.title);
let cndgRtb = el7mKcS.formHandler.getError(`title`);
this.setState('stFW6BB', cndgRtb);
if (cndgRtb) { 
let elS3mV7 = eo('div','azPf',null,`class`,`alert alert-danger`);
text(el7mKcS.formHandler.getError(`title`));
ec('div');
}ec('div');
let elSsA3m = eo('div',null,null,`class`,`form-group`);
let cmpMRwX = this._lc('cL_PDSJLW', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`},state:'stQBSq6'});
ec('div');
let ely2KJn = eo('div',null,null,`class`,`form-group`);
let el4RoTo = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7mKcS.formHandler.addError(`description`, 'required', trans('validation.required'));}return el7mKcS.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
el4RoTo.value = fval(component.formObject.description);
ec('textarea');
let cndA7av = el7mKcS.formHandler.getError(`description`);
this.setState('st9ABkh', cndA7av);
if (cndA7av) { 
let elOyER3 = eo('div','TC3f',null,`class`,`alert alert-danger`);
text(el7mKcS.formHandler.getError(`description`));
ec('div');
}ec('div');
let elhPhqZ = eo('div',null,null,`class`,`form-group`);
let eluMv1d = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7mKcS.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return el7mKcS.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`shortDescription`);
eluMv1d.value = fval(component.formObject.shortDescription);
ec('textarea');
let cndrjFB = el7mKcS.formHandler.getError(`shortDescription`);
this.setState('stbjmcI', cndrjFB);
if (cndrjFB) { 
let el7ZQMR = eo('div','omif',null,`class`,`alert alert-danger`);
text(el7mKcS.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let elDbXKZ = eo('div',null,null,`class`,`form-group`);
let elEG8gG = eo('div',null,null,`class`,`row`);
let elpz1A1 = eo('div',null,null,`class`,`col-md-3`);
let eluR1jb = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7mKcS.formHandler.getError(`sortOrder`) })}`);
let elMh6Yq = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elJ5e28 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elJ5e28.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let el9A49Y = eo('div',null,null,`class`,`col-md-3`);
let elt5LII = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7mKcS.formHandler.getError(`livePreview`) })}`);
let elgP5sO = eo('label',null,null,`for`,`livePreview`);
text(trans('live preview url'));
ec('label');
let elLeNAQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.livePreview = this.value;}]},`value`,`${fval(component.formObject.livePreview)}`,`name`,`${(`livePreview`).toInputName()}`,`placeholder`,`${trans(`live preview url`)}`,`type`,`text`,`class`,`form-control`,`id`,`livePreview`);
elLeNAQ.value = fval(component.formObject.livePreview);
ec('div');
ec('div');
let elkbIeT = eo('div',null,null,`class`,`col-md-3`);
let elM5lEj = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7mKcS.formHandler.getError(`prize`) })}`);
let elVko9l = eo('label',null,null,`for`,`prize`);
text(trans('Prize'));
let elt0Yqk = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3a6yd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7mKcS.formHandler.addError(`prize`, 'required', trans('validation.required'));}return el7mKcS.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
el3a6yd.value = fval(component.formObject.prize);
let cndntfQ = el7mKcS.formHandler.getError(`prize`);
this.setState('stt6yMv', cndntfQ);
if (cndntfQ) { 
let elxJ9mk = eo('div','CZtf',null,`class`,`alert alert-danger`);
text(el7mKcS.formHandler.getError(`prize`));
ec('div');
}ec('div');
ec('div');
let elV1zqy = eo('div',null,null,`class`,`col-md-3`);
let cmpjPrD = this._lc('c5xP8zUe0', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stQBSq6'});
ec('div');
ec('div');
ec('div');
let elI9shw = eo('div',null,null,`class`,`row`);
let elxO2oW = eo('div',null,null,`class`,`col-4`);
let cmpXADt = this._lc('c7mb03kni', {parent:component,parentTop:flkModal,props:{service:component.adminCocktailService,lazyLoading:true,imageable:true,value:component.formObject.cocktail.id},attrs:{name:`${(`cocktailId`).toInputName()}`,placeholder:`${trans(`Cocktail`)}`,label:'Cocktail'},state:'stQBSq6'});
ec('div');
let elZK_nh = eo('div',null,null,`class`,`col-4`);
let cmpN4kt = this._lc('cj7ilV2l3', {parent:component,parentTop:flkModal,props:{service:component.service,except:component.formObject.id,lazyLoading:true,imageable:true,value:component.formObject.dependsOn.id},attrs:{name:`${(`dependsOnId`).toInputName()}`,placeholder:`${trans(`Depends on`)}`,label:'depends On'},state:'stQBSq6'});
ec('div');
let el_0coM = eo('div',null,null,`class`,`col-4`);
let cmpqxWF = this._lc('c5Oc47WqA', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Additional tags`)}`,label:'tags'},state:'stQBSq6'});
ec('div');
ec('div');
let elbQoLV = eo('div',null,null,`class`,`form-group`);
let elOjkQC = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmp7Fih = this._lc('ct9Ksq7kG', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stQBSq6'});
ec('div');
let elrJUQD = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let eljpLNZ = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stQBSq6'});
}
                    this.isReadyToGo();
                }
        });