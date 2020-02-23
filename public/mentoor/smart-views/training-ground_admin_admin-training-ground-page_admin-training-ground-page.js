_Component({
                selector: 'admin-training-ground-page',
                c: 'AdminTrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminCocktailService','service','tagsService','isValidForm','submitting'],
                children: {ce46MOj7G:'tag-badge',ccErMADOQ:'table-actions',cFeFbBwgd:'admin-table',cAzdy59vr:'flk-dropdown-list',cBjIRW_Ui:'flk-checkbox',c6wkrxgIG:'flk-dropdown-list',cvO7Ks3DJ:'flk-dropdown-list',chREGqBbl:'flk-dropdown-list',cEsrdeapZ:'flk-image-input',ceA4TYWDl:'flk-modal'},
                render: function (component) {
                    let cmpT8GD = this._lc('cFeFbBwgd', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iibbAL = '7BMe4pI' + index;
let elv1soC = eo('tr','N6uwI6vJwNjg' + index+iibbAL);
let elQm08k = eo('td','OGuff'+iibbAL);
text( record.id );
ec('td');
let ele6_gV = eo('td','9tyff'+iibbAL);
text(record.title);
ec('td');
let elmViMy = eo('td','aNpff'+iibbAL);
let elaLlpe = ev('img','dXLff'+iibbAL,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.title}`,`alt`,`${record.title}`);
ec('td');
let elf7Oru = eo('td','jcjff'+iibbAL);
let cndczo8 = record.livePreview;
this.setState('stgc7Pl', cndczo8);
let cndpRVZ = !(cndczo8);
this.setState('sty1zoL', cndpRVZ);
if (cndczo8) { 
let el0NGvI = eo('a','l9bff'+iibbAL,null,`href`,`${ record.livePreview }`);
text(`Live preview`);
ec('a');
}else { 
let elNiENQ = eo('span','UZnff'+iibbAL);
text(`N/a`);
ec('span');
}ec('td');
let eliJ5Og = eo('td','Wvjff'+iibbAL);
text(record.prize.format());
ec('td');
let elKdx_2 = eo('td','zzgff'+iibbAL);
text(record.cocktail.name);
ec('td');
let ele7Usl = eo('td','YPbff'+iibbAL);
text(Object.get(record.dependsOn, 'title', ''));
ec('td');
let elniAu6 = eo('td','tFzff'+iibbAL);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiloNC = '7qw2pii' + i;
let elhlrGp = eo('div','_cVl0TOJl0hU' + i+iibbAL+iiloNC);
let elT4Obi = eo('div','wqsff'+iibbAL+iiloNC,null,`class`,`m-b-1`);
let cmpe5rb = this._lc('ce46MOj7G', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iibbAL+iiloNC});
ec('div');
ec('div');
}
ec('td');
let elckzXv = eo('td','Clzff'+iibbAL);
text(record.level);
ec('td');
let elZtQ9h = eo('td','33Rff'+iibbAL);
text(record.sortOrder);
ec('td');
let eludhNl = eo('td','6Gxff'+iibbAL);
text(record.display);
ec('td');
let elGcbZM = eo('td','P35ff'+iibbAL);
let cmpHlcf = this._lc('ccErMADOQ', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iibbAL});
ec('td');
ec('tr');
}
}});
let cnd1mBx = component.openModal;
this.setState('stJn7Am', cnd1mBx);
if (cnd1mBx) { 
let cmpAO0x = this._lc('ceA4TYWDl', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let el4vd98 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el4vd98.formHandler) {
                    window.cfrmdlr = el4vd98.formHandler = new FormHandler(el4vd98, component);
                } else {
                    window.cfrmdlr = el4vd98.formHandler;
                }
            let el2_gzM = eo('div',null,null,`class`,`form-group`);
let elgI_sA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4vd98.formHandler.addError(`title`, 'required', trans('validation.required'));}return el4vd98.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elgI_sA.value = fval(component.formObject.title);
let cndf8__ = el4vd98.formHandler.getError(`title`);
this.setState('stkfafC', cndf8__);
if (cndf8__) { 
let elDOfA9 = eo('div','0Ugf',null,`class`,`alert alert-danger`);
text(el4vd98.formHandler.getError(`title`));
ec('div');
}ec('div');
let el5oV19 = eo('div',null,null,`class`,`form-group`);
let cmpVBZ2 = this._lc('cAzdy59vr', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`},state:'stJn7Am'});
ec('div');
let eljTo3f = eo('div',null,null,`class`,`form-group`);
let el1yoKZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4vd98.formHandler.addError(`description`, 'required', trans('validation.required'));}return el4vd98.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
el1yoKZ.value = fval(component.formObject.description);
ec('textarea');
let cnd5bV5 = el4vd98.formHandler.getError(`description`);
this.setState('stXAIiQ', cnd5bV5);
if (cnd5bV5) { 
let elOlC7h = eo('div','xkMf',null,`class`,`alert alert-danger`);
text(el4vd98.formHandler.getError(`description`));
ec('div');
}ec('div');
let elpS16z = eo('div',null,null,`class`,`form-group`);
let el2uohT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4vd98.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return el4vd98.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`shortDescription`);
el2uohT.value = fval(component.formObject.shortDescription);
ec('textarea');
let cnd5nwy = el4vd98.formHandler.getError(`shortDescription`);
this.setState('stooBPu', cnd5nwy);
if (cnd5nwy) { 
let elEe56K = eo('div','msmf',null,`class`,`alert alert-danger`);
text(el4vd98.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let elKeXfz = eo('div',null,null,`class`,`form-group`);
let elkI5W2 = eo('div',null,null,`class`,`row`);
let elzXVDI = eo('div',null,null,`class`,`col-md-3`);
let elFYv8n = eo('div',null,null,`class`,`form-group`);
elFYv8n.cls = {'group-error': !!el4vd98.formHandler.getError(`sortOrder`) };

            for (let className in elFYv8n.cls) {
                elFYv8n.classList.toggle(className, elFYv8n.cls[className]);
            }  
            let el89fJx = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elW1KAP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elW1KAP.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let el1pZxE = eo('div',null,null,`class`,`col-md-3`);
let el_MLU6 = eo('div',null,null,`class`,`form-group`);
el_MLU6.cls = {'group-error': !!el4vd98.formHandler.getError(`livePreview`) };

            for (let className in el_MLU6.cls) {
                el_MLU6.classList.toggle(className, el_MLU6.cls[className]);
            }  
            let elQHGrV = eo('label',null,null,`for`,`livePreview`);
text(trans('live preview url'));
ec('label');
let el3hlsm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.livePreview = this.value;}]},`value`,`${fval(component.formObject.livePreview)}`,`name`,`${(`livePreview`).toInputName()}`,`placeholder`,`${trans(`live preview url`)}`,`type`,`text`,`class`,`form-control`,`id`,`livePreview`);
el3hlsm.value = fval(component.formObject.livePreview);
ec('div');
ec('div');
let eluQH59 = eo('div',null,null,`class`,`col-md-3`);
let elJo0X_ = eo('div',null,null,`class`,`form-group`);
elJo0X_.cls = {'group-error': !!el4vd98.formHandler.getError(`prize`) };

            for (let className in elJo0X_.cls) {
                elJo0X_.classList.toggle(className, elJo0X_.cls[className]);
            }  
            let elZTS9e = eo('label',null,null,`for`,`prize`);
text(trans('Prize'));
let elqDhwF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elLtmXX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4vd98.formHandler.addError(`prize`, 'required', trans('validation.required'));}return el4vd98.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elLtmXX.value = fval(component.formObject.prize);
let cndFj1O = el4vd98.formHandler.getError(`prize`);
this.setState('stWxOrD', cndFj1O);
if (cndFj1O) { 
let elKfBwx = eo('div','OB1f',null,`class`,`alert alert-danger`);
text(el4vd98.formHandler.getError(`prize`));
ec('div');
}ec('div');
ec('div');
let elPeoLy = eo('div',null,null,`class`,`col-md-3`);
let cmpcPyG = this._lc('cBjIRW_Ui', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stJn7Am'});
ec('div');
ec('div');
ec('div');
let el9_i8K = eo('div',null,null,`class`,`row`);
let el04JtI = eo('div',null,null,`class`,`col-4`);
let cmpdBoW = this._lc('c6wkrxgIG', {parent:component,parentTop:flkModal,props:{service:component.adminCocktailService,lazyLoading:true,imageable:true,value:component.formObject.cocktail.id},attrs:{name:`${(`cocktailId`).toInputName()}`,placeholder:`${trans(`Cocktail`)}`,label:'Cocktail'},state:'stJn7Am'});
ec('div');
let elo8Ed6 = eo('div',null,null,`class`,`col-4`);
let cmpS4Ss = this._lc('cvO7Ks3DJ', {parent:component,parentTop:flkModal,props:{service:component.service,except:component.formObject.id,lazyLoading:true,imageable:true,value:component.formObject.dependsOn.id},attrs:{name:`${(`dependsOnId`).toInputName()}`,placeholder:`${trans(`Depends on`)}`,label:'depends On'},state:'stJn7Am'});
ec('div');
let elEhON1 = eo('div',null,null,`class`,`col-4`);
let cmpVWi8 = this._lc('chREGqBbl', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Additional tags`)}`,label:'tags'},state:'stJn7Am'});
ec('div');
ec('div');
let elWboyL = eo('div',null,null,`class`,`form-group`);
let el0f88J = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmpuEib = this._lc('cEsrdeapZ', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stJn7Am'});
ec('div');
let elA2x9a = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el5gr21 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stJn7Am'});
}
                    this.isReadyToGo();
                }
        });