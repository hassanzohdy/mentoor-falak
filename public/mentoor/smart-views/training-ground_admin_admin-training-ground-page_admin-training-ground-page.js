_Component({
                selector: 'admin-training-ground-page',
                c: 'AdminTrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminCocktailService','service','tagsService','isValidForm','submitting'],
                children: {cacSssziq:'tag-badge',cXcGl2Ixv:'table-actions',cgEZUDhPt:'admin-table',c99og_n1Z:'flk-dropdown-list',co16Pfvqz:'flk-checkbox',cnT31xh35:'flk-dropdown-list',cdWBbzOc9:'flk-dropdown-list',citFwn8Uq:'flk-dropdown-list',cz45OjvUS:'flk-image-input',cu0SC4DYp:'flk-modal'},
                render: function (component) {
                    let cmpeBVi = this._lc('cgEZUDhPt', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let ii8vsO = 'SOWs4Fh' + index;
let elFYWno = eo('tr','0DtLJd6WUhlX' + index+ii8vsO);
let eloBPUS = eo('td','fuyff'+ii8vsO);
text( record.id );
ec('td');
let elwQTKf = eo('td','tYeff'+ii8vsO);
text(record.title);
ec('td');
let elLqUEs = eo('td','7tQff'+ii8vsO);
let elu1EWG = ev('img','uu8ff'+ii8vsO,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.title}`,`alt`,`${record.title}`);
ec('td');
let elv10F6 = eo('td','Lnhff'+ii8vsO);
let cnd3o3o = record.livePreview;
this.setState('stGfT48', cnd3o3o);
let cndARDj = !(cnd3o3o);
this.setState('stccAhh', cndARDj);
if (cnd3o3o) { 
let ely7Rz5 = eo('a','zoHff'+ii8vsO,null,`href`,`${ record.livePreview }`);
text(`Live preview`);
ec('a');
}else { 
let elNgtNQ = eo('span','Xq_ff'+ii8vsO);
text(`N/a`);
ec('span');
}ec('td');
let el_dYms = eo('td','uIVff'+ii8vsO);
text(record.prize.format());
ec('td');
let elHZN0_ = eo('td','6C6ff'+ii8vsO);
text(record.cocktail.name);
ec('td');
let elTbiGd = eo('td','JYRff'+ii8vsO);
text(Object.get(record.dependsOn, 'title', ''));
ec('td');
let elPc4mG = eo('td','Qb_ff'+ii8vsO);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iir5oB = 'PDqMvwR' + i;
let elXkNwN = eo('div','px36L9_zKPX4' + i+ii8vsO+iir5oB);
let el_q8Cl = eo('div','a_5ff'+ii8vsO+iir5oB,null,`class`,`m-b-1`);
let cmp2VsB = this._lc('cacSssziq', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +ii8vsO+iir5oB});
ec('div');
ec('div');
}
ec('td');
let elPGL7A = eo('td','Gl3ff'+ii8vsO);
text(record.level);
ec('td');
let elV2GmM = eo('td','iSnff'+ii8vsO);
text(record.sortOrder);
ec('td');
let el9jaYa = eo('td','fHLff'+ii8vsO);
text(record.display);
ec('td');
let elVkAS2 = eo('td','ZN8ff'+ii8vsO);
let cmpKkrk = this._lc('cXcGl2Ixv', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +ii8vsO});
ec('td');
ec('tr');
}
}});
let cnd9JYI = component.openModal;
this.setState('stj92do', cnd9JYI);
if (cnd9JYI) { 
let cmprWzA = this._lc('cu0SC4DYp', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elKPH6k = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elKPH6k.formHandler) {
                    window.cfrmdlr = elKPH6k.formHandler = new FormHandler(elKPH6k, component);
                } else {
                    window.cfrmdlr = elKPH6k.formHandler;
                }
            let elLzek6 = eo('div',null,null,`class`,`form-group`);
let elp13mA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKPH6k.formHandler.addError(`title`, 'required', trans('validation.required'));}return elKPH6k.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elp13mA.value = fval(component.formObject.title);
let cndRfNz = elKPH6k.formHandler.getError(`title`);
this.setState('st10Z0q', cndRfNz);
if (cndRfNz) { 
let elZuyp2 = eo('div','W5Bf',null,`class`,`alert alert-danger`);
text(elKPH6k.formHandler.getError(`title`));
ec('div');
}ec('div');
let elcW1xR = eo('div',null,null,`class`,`form-group`);
let cmpblGE = this._lc('c99og_n1Z', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`},state:'stj92do'});
ec('div');
let elL70QD = eo('div',null,null,`class`,`form-group`);
let elM79gT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKPH6k.formHandler.addError(`description`, 'required', trans('validation.required'));}return elKPH6k.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elM79gT.value = fval(component.formObject.description);
ec('textarea');
let cndmYLo = elKPH6k.formHandler.getError(`description`);
this.setState('stYDITR', cndmYLo);
if (cndmYLo) { 
let elG61yA = eo('div','DZyf',null,`class`,`alert alert-danger`);
text(elKPH6k.formHandler.getError(`description`));
ec('div');
}ec('div');
let elXy08E = eo('div',null,null,`class`,`form-group`);
let elmdCV3 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKPH6k.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elKPH6k.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`shortDescription`);
elmdCV3.value = fval(component.formObject.shortDescription);
ec('textarea');
let cndwuhB = elKPH6k.formHandler.getError(`shortDescription`);
this.setState('stW4bh_', cndwuhB);
if (cndwuhB) { 
let elRk0ST = eo('div','V7Vf',null,`class`,`alert alert-danger`);
text(elKPH6k.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let elj5N_N = eo('div',null,null,`class`,`form-group`);
let elUX8VK = eo('div',null,null,`class`,`row`);
let elr22lK = eo('div',null,null,`class`,`col-md-3`);
let elRqu4_ = eo('div',null,null,`class`,`form-group`);
elRqu4_.cls = {'group-error': !!elKPH6k.formHandler.getError(`sortOrder`) };

            for (let className in elRqu4_.cls) {
                elRqu4_.classList.toggle(className, elRqu4_.cls[className]);
            }  
            let el3YDui = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let el2J1jQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
el2J1jQ.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let el7Up6h = eo('div',null,null,`class`,`col-md-3`);
let elf0oWR = eo('div',null,null,`class`,`form-group`);
elf0oWR.cls = {'group-error': !!elKPH6k.formHandler.getError(`livePreview`) };

            for (let className in elf0oWR.cls) {
                elf0oWR.classList.toggle(className, elf0oWR.cls[className]);
            }  
            let elGNfvk = eo('label',null,null,`for`,`livePreview`);
text(trans('live preview url'));
ec('label');
let el9tEOx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.livePreview = this.value;}]},`value`,`${fval(component.formObject.livePreview)}`,`name`,`${(`livePreview`).toInputName()}`,`placeholder`,`${trans(`live preview url`)}`,`type`,`text`,`class`,`form-control`,`id`,`livePreview`);
el9tEOx.value = fval(component.formObject.livePreview);
ec('div');
ec('div');
let elYvSvZ = eo('div',null,null,`class`,`col-md-3`);
let elqGIeu = eo('div',null,null,`class`,`form-group`);
elqGIeu.cls = {'group-error': !!elKPH6k.formHandler.getError(`prize`) };

            for (let className in elqGIeu.cls) {
                elqGIeu.classList.toggle(className, elqGIeu.cls[className]);
            }  
            let el4PSOa = eo('label',null,null,`for`,`prize`);
text(trans('Prize'));
let elZJTcu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elte4kd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elKPH6k.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elKPH6k.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
elte4kd.value = fval(component.formObject.prize);
let cndneF_ = elKPH6k.formHandler.getError(`prize`);
this.setState('stuvDuC', cndneF_);
if (cndneF_) { 
let elOuVOc = eo('div','Rz6f',null,`class`,`alert alert-danger`);
text(elKPH6k.formHandler.getError(`prize`));
ec('div');
}ec('div');
ec('div');
let elSr7pt = eo('div',null,null,`class`,`col-md-3`);
let cmpfFA7 = this._lc('co16Pfvqz', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stj92do'});
ec('div');
ec('div');
ec('div');
let elDLs3A = eo('div',null,null,`class`,`row`);
let elQrc10 = eo('div',null,null,`class`,`col-4`);
let cmpP3Jk = this._lc('cnT31xh35', {parent:component,parentTop:flkModal,props:{service:component.adminCocktailService,lazyLoading:true,imageable:true,value:component.formObject.cocktail.id},attrs:{name:`${(`cocktailId`).toInputName()}`,placeholder:`${trans(`Cocktail`)}`,label:'Cocktail'},state:'stj92do'});
ec('div');
let elvDmI_ = eo('div',null,null,`class`,`col-4`);
let cmpZMsW = this._lc('cdWBbzOc9', {parent:component,parentTop:flkModal,props:{service:component.service,except:component.formObject.id,lazyLoading:true,imageable:true,value:component.formObject.dependsOn.id},attrs:{name:`${(`dependsOnId`).toInputName()}`,placeholder:`${trans(`Depends on`)}`,label:'depends On'},state:'stj92do'});
ec('div');
let elWExu6 = eo('div',null,null,`class`,`col-4`);
let cmpvUC2 = this._lc('citFwn8Uq', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Additional tags`)}`,label:'tags'},state:'stj92do'});
ec('div');
ec('div');
let elNrfIh = eo('div',null,null,`class`,`form-group`);
let elcaTSl = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmp8W6V = this._lc('cz45OjvUS', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stj92do'});
ec('div');
let elOk5T0 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elwhtI7 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stj92do'});
}
                    this.isReadyToGo();
                }
        });