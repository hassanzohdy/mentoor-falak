_Component({
                selector: 'admin-training-ground-page',
                c: 'AdminTrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminCocktailService','service','tagsService','isValidForm','submitting'],
                children: {cn8G6vBSm:'tag-badge',cuNYN0ew7:'table-actions',c73p7Rm2C:'admin-table',c8mgb7GC7:'flk-dropdown-list',csJ3Q1xtg:'flk-checkbox',cEDSqsO8Y:'flk-dropdown-list',cwie6_XwS:'flk-dropdown-list',c7hNLtod1:'flk-dropdown-list',ce943kyW0:'flk-image-input',cnDh8mNUR:'flk-modal'},
                render: function (component) {
                    let cmp7Wxp = this._lc('c73p7Rm2C', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iibyYi = '5q3DIRs' + index;
let eljDKZ_ = eo('tr','lEVj5H5LhNWL' + index+iibyYi);
let elEglY9 = eo('td','2m8ff'+iibyYi);
text( record.id );
ec('td');
let eleItpx = eo('td','Bliff'+iibyYi);
text(record.title);
ec('td');
let elwjMrG = eo('td','Hs_ff'+iibyYi);
let elfpcMp = ev('img','0jrff'+iibyYi,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.title}`,`alt`,`${record.title}`);
ec('td');
let elWkbyC = eo('td','xw5ff'+iibyYi);
let cndw4Oq = record.livePreview;
this.setState('stKusLh', cndw4Oq);
let cndFWVM = !(cndw4Oq);
this.setState('st9d7q_', cndFWVM);
if (cndw4Oq) { 
let ell8mNg = eo('a','GK5ff'+iibyYi,null,`href`,`${ record.livePreview }`);
text(`Live preview`);
ec('a');
}else { 
let eliID7l = eo('span','5rvff'+iibyYi);
text(`N/a`);
ec('span');
}ec('td');
let el9NkTk = eo('td','J6Wff'+iibyYi);
text(record.prize.format());
ec('td');
let elpV_PL = eo('td','NAUff'+iibyYi);
text(record.cocktail.name);
ec('td');
let elSnuae = eo('td','lMCff'+iibyYi);
text(Object.get(record.dependsOn, 'title', ''));
ec('td');
let el7BcNY = eo('td','THWff'+iibyYi);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iicbrJ = 'eHMOeSN' + i;
let elqjAeP = eo('div','xWJRseTZgieL' + i+iibyYi+iicbrJ);
let elgJJgx = eo('div','po3ff'+iibyYi+iicbrJ,null,`class`,`m-b-1`);
let cmp2RXr = this._lc('cn8G6vBSm', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iibyYi+iicbrJ});
ec('div');
ec('div');
}
ec('td');
let elYoboR = eo('td','vRtff'+iibyYi);
text(record.level);
ec('td');
let elvX5tz = eo('td','EVCff'+iibyYi);
text(record.sortOrder);
ec('td');
let elooXjK = eo('td','J2Pff'+iibyYi);
text(record.display);
ec('td');
let eljbRv4 = eo('td','igUff'+iibyYi);
let cmp5DBE = this._lc('cuNYN0ew7', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iibyYi});
ec('td');
ec('tr');
}
}});
let cndZ871 = component.openModal;
this.setState('st0mByw', cndZ871);
if (cndZ871) { 
let cmpXnLk = this._lc('cnDh8mNUR', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elqwEUN = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elqwEUN.formHandler) {
                    window.cfrmdlr = elqwEUN.formHandler = new FormHandler(elqwEUN, component);
                } else {
                    window.cfrmdlr = elqwEUN.formHandler;
                }
            let elOTuwz = eo('div',null,null,`class`,`form-group`);
let elUsuAX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqwEUN.formHandler.addError(`title`, 'required', trans('validation.required'));}return elqwEUN.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elUsuAX.value = fval(component.formObject.title);
let cnd2vc9 = elqwEUN.formHandler.getError(`title`);
this.setState('stIf0ED', cnd2vc9);
if (cnd2vc9) { 
let elVWvuy = eo('div','ZFpf',null,`class`,`alert alert-danger`);
text(elqwEUN.formHandler.getError(`title`));
ec('div');
}ec('div');
let elq6xoJ = eo('div',null,null,`class`,`form-group`);
let cmp_e9L = this._lc('c8mgb7GC7', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`},state:'st0mByw'});
ec('div');
let elgBEEI = eo('div',null,null,`class`,`form-group`);
let elgB5nj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqwEUN.formHandler.addError(`description`, 'required', trans('validation.required'));}return elqwEUN.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elgB5nj.value = fval(component.formObject.description);
ec('textarea');
let cndll3k = elqwEUN.formHandler.getError(`description`);
this.setState('stGiEdB', cndll3k);
if (cndll3k) { 
let elzoR76 = eo('div','c5ef',null,`class`,`alert alert-danger`);
text(elqwEUN.formHandler.getError(`description`));
ec('div');
}ec('div');
let elqP_2o = eo('div',null,null,`class`,`form-group`);
let elBInwV = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqwEUN.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elqwEUN.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`shortDescription`);
elBInwV.value = fval(component.formObject.shortDescription);
ec('textarea');
let cndEnhn = elqwEUN.formHandler.getError(`shortDescription`);
this.setState('stLmV31', cndEnhn);
if (cndEnhn) { 
let elPWbBe = eo('div','ERxf',null,`class`,`alert alert-danger`);
text(elqwEUN.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let el98FmB = eo('div',null,null,`class`,`form-group`);
let eliEWMY = eo('div',null,null,`class`,`row`);
let els4gHJ = eo('div',null,null,`class`,`col-md-3`);
let el9qYWT = eo('div',null,null,`class`,`form-group`);
el9qYWT.cls = {'group-error': !!elqwEUN.formHandler.getError(`sortOrder`) };

            for (let className in el9qYWT.cls) {
                el9qYWT.classList.toggle(className, el9qYWT.cls[className]);
            }  
            let elPrkdW = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elETbpf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elETbpf.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elkz5U8 = eo('div',null,null,`class`,`col-md-3`);
let eluL4_i = eo('div',null,null,`class`,`form-group`);
eluL4_i.cls = {'group-error': !!elqwEUN.formHandler.getError(`livePreview`) };

            for (let className in eluL4_i.cls) {
                eluL4_i.classList.toggle(className, eluL4_i.cls[className]);
            }  
            let elQEg9o = eo('label',null,null,`for`,`livePreview`);
text(trans('live preview url'));
ec('label');
let el6RdB8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.livePreview = this.value;}]},`value`,`${fval(component.formObject.livePreview)}`,`name`,`${(`livePreview`).toInputName()}`,`placeholder`,`${trans(`live preview url`)}`,`type`,`text`,`class`,`form-control`,`id`,`livePreview`);
el6RdB8.value = fval(component.formObject.livePreview);
ec('div');
ec('div');
let elhwHDj = eo('div',null,null,`class`,`col-md-3`);
let elxLkNS = eo('div',null,null,`class`,`form-group`);
elxLkNS.cls = {'group-error': !!elqwEUN.formHandler.getError(`prize`) };

            for (let className in elxLkNS.cls) {
                elxLkNS.classList.toggle(className, elxLkNS.cls[className]);
            }  
            let elWRdaG = eo('label',null,null,`for`,`prize`);
text(trans('Prize'));
let ellr8RF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elPIqWT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqwEUN.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elqwEUN.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elPIqWT.value = fval(component.formObject.prize);
let cnd57z9 = elqwEUN.formHandler.getError(`prize`);
this.setState('stdTEdN', cnd57z9);
if (cnd57z9) { 
let el9XJrw = eo('div','VQ2f',null,`class`,`alert alert-danger`);
text(elqwEUN.formHandler.getError(`prize`));
ec('div');
}ec('div');
ec('div');
let elxK7yq = eo('div',null,null,`class`,`col-md-3`);
let cmp_kW7 = this._lc('csJ3Q1xtg', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'st0mByw'});
ec('div');
ec('div');
ec('div');
let elZxQiA = eo('div',null,null,`class`,`row`);
let el7kyfe = eo('div',null,null,`class`,`col-4`);
let cmpytKg = this._lc('cEDSqsO8Y', {parent:component,parentTop:flkModal,props:{service:component.adminCocktailService,lazyLoading:true,imageable:true,value:component.formObject.cocktail.id},attrs:{name:`${(`cocktailId`).toInputName()}`,placeholder:`${trans(`Cocktail`)}`,label:'Cocktail'},state:'st0mByw'});
ec('div');
let elrUNgT = eo('div',null,null,`class`,`col-4`);
let cmpe_we = this._lc('cwie6_XwS', {parent:component,parentTop:flkModal,props:{service:component.service,except:component.formObject.id,lazyLoading:true,imageable:true,value:component.formObject.dependsOn.id},attrs:{name:`${(`dependsOnId`).toInputName()}`,placeholder:`${trans(`Depends on`)}`,label:'depends On'},state:'st0mByw'});
ec('div');
let elBSIp9 = eo('div',null,null,`class`,`col-4`);
let cmpe5nP = this._lc('c7hNLtod1', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Additional tags`)}`,label:'tags'},state:'st0mByw'});
ec('div');
ec('div');
let elvyf0S = eo('div',null,null,`class`,`form-group`);
let el8s3bE = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpmuYZ = this._lc('ce943kyW0', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'st0mByw'});
ec('div');
let elDZJ37 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elsb4cg = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st0mByw'});
}
                    this.isReadyToGo();
                }
        });