_Component({
                selector: 'admin-training-ground-page',
                c: 'AdminTrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminCocktailService','service','tagsService','isValidForm','submitting'],
                children: {cmoxDf4KJ:'tag-badge',cMdHpTQMY:'table-actions',ciudyeAfn:'admin-table',cI3u5pYkk:'flk-dropdown-list',cMtkbmFEr:'flk-checkbox',cd5vk82cj:'flk-dropdown-list',cqnZMV716:'flk-dropdown-list',cMfu6Eaq6:'flk-dropdown-list',cyPSlAKgs:'flk-image-input',cNLaLfxAx:'flk-modal'},
                render: function (component) {
                    let cmpIVAw = this._lc('ciudyeAfn', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiDOI5 = 'JBrg8gB' + index;
let elhH1p6 = eo('tr','j2_LMzs9B0k_' + index+iiDOI5);
let el3NWVd = eo('td','Ikqff'+iiDOI5);
text( record.id );
ec('td');
let elmy32Q = eo('td','zKxff'+iiDOI5);
text(record.title);
ec('td');
let elPtQnF = eo('td','S_jff'+iiDOI5);
let el9QHEV = ev('img','sYMff'+iiDOI5,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.title}`,`alt`,`${record.title}`);
ec('td');
let el7qPae = eo('td','eB5ff'+iiDOI5);
let cndRsdT = record.livePreview;
this.setState('st0TxTq', cndRsdT);
let cndyuv5 = !(cndRsdT);
this.setState('stafz_V', cndyuv5);
if (cndRsdT) { 
let eldt2tO = eo('a','8Uwff'+iiDOI5,null,`href`,`${ record.livePreview }`);
text(`Live preview`);
ec('a');
}else { 
let elztjnE = eo('span','9W8ff'+iiDOI5);
text(`N/a`);
ec('span');
}ec('td');
let el4nIpp = eo('td','2qOff'+iiDOI5);
text(record.prize.format());
ec('td');
let el0JChe = eo('td','x_Xff'+iiDOI5);
text(record.cocktail.name);
ec('td');
let el4vbkA = eo('td','PcJff'+iiDOI5);
text(Object.get(record.dependsOn, 'title', ''));
ec('td');
let el4duNq = eo('td','sNvff'+iiDOI5);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iirFql = 'xUxPRgE' + i;
let elJ_nSK = eo('div','MR2CJpJJ6qRi' + i+iiDOI5+iirFql);
let elV2wm_ = eo('div','J9kff'+iiDOI5+iirFql,null,`class`,`m-b-1`);
let cmp6JAp = this._lc('cmoxDf4KJ', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiDOI5+iirFql});
ec('div');
ec('div');
}
ec('td');
let eliAX4P = eo('td','dE1ff'+iiDOI5);
text(record.level);
ec('td');
let elPJaCk = eo('td','P8dff'+iiDOI5);
text(record.sortOrder);
ec('td');
let elljt21 = eo('td','eH6ff'+iiDOI5);
text(record.display);
ec('td');
let el0M1PF = eo('td','UYDff'+iiDOI5);
let cmpxkiN = this._lc('cMdHpTQMY', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiDOI5});
ec('td');
ec('tr');
}
}});
let cndtHyO = component.openModal;
this.setState('stUutvT', cndtHyO);
if (cndtHyO) { 
let cmpqf6T = this._lc('cNLaLfxAx', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elNZf30 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elNZf30.formHandler) {
                    window.cfrmdlr = elNZf30.formHandler = new FormHandler(elNZf30, component);
                } else {
                    window.cfrmdlr = elNZf30.formHandler;
                }
            let ellRqXY = eo('div',null,null,`class`,`form-group`);
let elxG3eg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNZf30.formHandler.addError(`title`, 'required', trans('validation.required'));}return elNZf30.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elxG3eg.value = fval(component.formObject.title);
let cndBLiQ = elNZf30.formHandler.getError(`title`);
this.setState('stk1uhI', cndBLiQ);
if (cndBLiQ) { 
let elq7h5x = eo('div','Bjgf',null,`class`,`alert alert-danger`);
text(elNZf30.formHandler.getError(`title`));
ec('div');
}ec('div');
let elqrHXG = eo('div',null,null,`class`,`form-group`);
let cmpknD8 = this._lc('cI3u5pYkk', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`},state:'stUutvT'});
ec('div');
let el0Aob4 = eo('div',null,null,`class`,`form-group`);
let elzxgXJ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNZf30.formHandler.addError(`description`, 'required', trans('validation.required'));}return elNZf30.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elzxgXJ.value = fval(component.formObject.description);
ec('textarea');
let cndr8R0 = elNZf30.formHandler.getError(`description`);
this.setState('stYY_vY', cndr8R0);
if (cndr8R0) { 
let elasyE3 = eo('div','Hk5f',null,`class`,`alert alert-danger`);
text(elNZf30.formHandler.getError(`description`));
ec('div');
}ec('div');
let elaU6k1 = eo('div',null,null,`class`,`form-group`);
let elVljCe = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNZf30.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elNZf30.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`shortDescription`);
elVljCe.value = fval(component.formObject.shortDescription);
ec('textarea');
let cndyyBA = elNZf30.formHandler.getError(`shortDescription`);
this.setState('st35mpL', cndyyBA);
if (cndyyBA) { 
let elQ2kdl = eo('div','NMcf',null,`class`,`alert alert-danger`);
text(elNZf30.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let elo3dCb = eo('div',null,null,`class`,`form-group`);
let elGpiMz = eo('div',null,null,`class`,`row`);
let elLBvuk = eo('div',null,null,`class`,`col-md-3`);
let elMgcP8 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elNZf30.formHandler.getError(`sortOrder`) })}`);
let elCcvSh = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elD4QYu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elD4QYu.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elt6ixz = eo('div',null,null,`class`,`col-md-3`);
let elMJZNz = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elNZf30.formHandler.getError(`livePreview`) })}`);
let el7SCdu = eo('label',null,null,`for`,`livePreview`);
text(trans('live preview url'));
ec('label');
let el0ZICc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.livePreview = this.value;}]},`value`,`${fval(component.formObject.livePreview)}`,`name`,`${(`livePreview`).toInputName()}`,`placeholder`,`${trans(`live preview url`)}`,`type`,`text`,`class`,`form-control`,`id`,`livePreview`);
el0ZICc.value = fval(component.formObject.livePreview);
ec('div');
ec('div');
let el5Eqt3 = eo('div',null,null,`class`,`col-md-3`);
let elSXwZ4 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elNZf30.formHandler.getError(`prize`) })}`);
let elSDl10 = eo('label',null,null,`for`,`prize`);
text(trans('Prize'));
let eltvJ0B = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elyXsRK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elNZf30.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elNZf30.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elyXsRK.value = fval(component.formObject.prize);
let cndqCQN = elNZf30.formHandler.getError(`prize`);
this.setState('st8wKL1', cndqCQN);
if (cndqCQN) { 
let elptHQG = eo('div','44Sf',null,`class`,`alert alert-danger`);
text(elNZf30.formHandler.getError(`prize`));
ec('div');
}ec('div');
ec('div');
let elAT4Q7 = eo('div',null,null,`class`,`col-md-3`);
let cmpfmgG = this._lc('cMtkbmFEr', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stUutvT'});
ec('div');
ec('div');
ec('div');
let elSV5_q = eo('div',null,null,`class`,`row`);
let elVdNRt = eo('div',null,null,`class`,`col-4`);
let cmpak25 = this._lc('cd5vk82cj', {parent:component,parentTop:flkModal,props:{service:component.adminCocktailService,lazyLoading:true,imageable:true,value:component.formObject.cocktail.id},attrs:{name:`${(`cocktailId`).toInputName()}`,placeholder:`${trans(`Cocktail`)}`,label:'Cocktail'},state:'stUutvT'});
ec('div');
let elYegwk = eo('div',null,null,`class`,`col-4`);
let cmpVsci = this._lc('cqnZMV716', {parent:component,parentTop:flkModal,props:{service:component.service,except:component.formObject.id,lazyLoading:true,imageable:true,value:component.formObject.dependsOn.id},attrs:{name:`${(`dependsOnId`).toInputName()}`,placeholder:`${trans(`Depends on`)}`,label:'depends On'},state:'stUutvT'});
ec('div');
let elvg6ey = eo('div',null,null,`class`,`col-4`);
let cmphgmr = this._lc('cMfu6Eaq6', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Additional tags`)}`,label:'tags'},state:'stUutvT'});
ec('div');
ec('div');
let elOlov3 = eo('div',null,null,`class`,`form-group`);
let eluLWB7 = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpfOdg = this._lc('cyPSlAKgs', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stUutvT'});
ec('div');
let elazC2i = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elJH2A3 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stUutvT'});
}
                    this.isReadyToGo();
                }
        });