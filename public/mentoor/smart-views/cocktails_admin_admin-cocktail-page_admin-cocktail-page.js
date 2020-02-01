_Component({
                selector: 'admin-cocktail-page',
                c: 'AdminCocktailPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','tagsService','adminCocktailsCategoriesService','service','isValidForm','submitting'],
                children: {c88Ad9uwq:'tag-badge',cOTK3wKAe:'table-actions',cpZ9vrFEl:'admin-table',cSzf2eGlG:'flk-checkbox',cFd3ANeDm:'flk-dropdown-list',cmUXDavpN:'flk-dropdown-list',cGZZ8OVpA:'flk-dropdown-list',ccMmILTbo:'flk-image-input',c59dF5qRn:'flk-modal'},
                render: function (component) {
                    let cmph0V5 = this._lc('cpZ9vrFEl', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiZLUS = 'zFdj0SC' + index;
let elh5tK5 = eo('tr','7SVZaecBTc1N' + index+iiZLUS);
let el5kM0e = eo('td','Ibuff'+iiZLUS);
text( record.id );
ec('td');
let el39DB3 = eo('td','ha3ff'+iiZLUS);
text(record.name);
ec('td');
let elo80VX = eo('td','pp2ff'+iiZLUS);
text(record.category.name);
ec('td');
let elzt1Wl = eo('td','Tsuff'+iiZLUS);
let elTAUIA = ev('img','gD9ff'+iiZLUS,null,`src`,`${record.icon}`,`class`,`small-image`,`title`,`${record.name}`,`alt`,`${record.name}`);
ec('td');
let el8Ituv = eo('td','Hxbff'+iiZLUS);
text(record.cost.format());
ec('td');
let el_yfJc = eo('td','v4wff'+iiZLUS);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iihNFh = '_niibZP' + i;
let el02xmK = eo('div','IVpKNWj24UUP' + i+iiZLUS+iihNFh,null,`class`,`m-b-1`);
let cmpBy1f = this._lc('c88Ad9uwq', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiZLUS+iihNFh});
ec('div');
}
ec('td');
let elQBiTS = eo('td','GZEff'+iiZLUS);
text(record.sortOrder);
ec('td');
let elllQpE = eo('td','6z3ff'+iiZLUS);
text(record.display);
ec('td');
let eldpD2N = eo('td','ASaff'+iiZLUS);
let cmpj73M = this._lc('cOTK3wKAe', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiZLUS});
ec('td');
ec('tr');
}
}});
let cnd2L86 = component.openModal;
this.setState('st5V7ss', cnd2L86);
if (cnd2L86) { 
let cmpoGP1 = this._lc('c59dF5qRn', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elTtjmR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elTtjmR.formHandler) {
                    window.cfrmdlr = elTtjmR.formHandler = new FormHandler(elTtjmR, component);
                } else {
                    window.cfrmdlr = elTtjmR.formHandler;
                }
            let elp2MqA = eo('div',null,null,`class`,`form-group`);
let elXeEVv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTtjmR.formHandler.addError(`name`, 'required', trans('validation.required'));}return elTtjmR.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Cocktail name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elXeEVv.value = fval(component.formObject.name);
let cndNSj1 = elTtjmR.formHandler.getError(`name`);
this.setState('st77J8x', cndNSj1);
if (cndNSj1) { 
let elsq1sy = eo('div','Pgkf',null,`class`,`alert alert-danger`);
text(elTtjmR.formHandler.getError(`name`));
ec('div');
}ec('div');
let elhmrsD = eo('div',null,null,`class`,`form-group`);
let el4mNYT = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTtjmR.formHandler.addError(`description`, 'required', trans('validation.required'));}return elTtjmR.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
el4mNYT.value = fval(component.formObject.description);
ec('textarea');
let cndCjQN = elTtjmR.formHandler.getError(`description`);
this.setState('stumBLa', cndCjQN);
if (cndCjQN) { 
let elt7ybd = eo('div','bjjf',null,`class`,`alert alert-danger`);
text(elTtjmR.formHandler.getError(`description`));
ec('div');
}ec('div');
let elD_q3Q = eo('div',null,null,`class`,`form-group`);
let elX5ccv = eo('div',null,null,`class`,`row`);
let elEdJDg = eo('div',null,null,`class`,`col-md-4`);
let elHuUNh = eo('div',null,null,`class`,`form-group`);
elHuUNh.cls = {'group-error': !!elTtjmR.formHandler.getError(`sortOrder`) };

            for (let className in elHuUNh.cls) {
                elHuUNh.classList.toggle(className, elHuUNh.cls[className]);
            }  
            let el5GKTo = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elevEMd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elevEMd.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elR9ygI = eo('div',null,null,`class`,`col-md-4`);
let eliIeR6 = eo('div',null,null,`class`,`form-group`);
eliIeR6.cls = {'group-error': !!elTtjmR.formHandler.getError(`cost`) };

            for (let className in eliIeR6.cls) {
                eliIeR6.classList.toggle(className, eliIeR6.cls[className]);
            }  
            let elPuTP4 = eo('label',null,null,`for`,`cost`);
text(trans('cost'));
let el6dovC = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKfiGH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTtjmR.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elTtjmR.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elKfiGH.value = fval(component.formObject.cost);
let cndd8Wq = elTtjmR.formHandler.getError(`cost`);
this.setState('st5eqnF', cndd8Wq);
if (cndd8Wq) { 
let ell8zV_ = eo('div','dgJf',null,`class`,`alert alert-danger`);
text(elTtjmR.formHandler.getError(`cost`));
ec('div');
}ec('div');
ec('div');
let elUsDTf = eo('div',null,null,`class`,`col-md-3`);
let cmpaZgC = this._lc('cSzf2eGlG', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'st5V7ss'});
ec('div');
ec('div');
ec('div');
let elAtBeJ = eo('div',null,null,`class`,`row`);
let elPloTC = eo('div',null,null,`class`,`col-4`);
let cmpJbro = this._lc('cFd3ANeDm', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Tag`)}`,label:'Tags'},state:'st5V7ss'});
ec('div');
let ellhDr0 = eo('div',null,null,`class`,`col-4`);
let cmpo3AX = this._lc('cmUXDavpN', {parent:component,parentTop:flkModal,props:{lazyLoading:true,service:component.adminCocktailsCategoriesService,imageable:true,value:component.formObject.category.id},attrs:{name:`${(`categoryId`).toInputName()}`,placeholder:`${trans(`Category`)}`,label:'Category'},state:'st5V7ss'});
ec('div');
let el7aXH4 = eo('div',null,null,`class`,`col-4`);
let cmppgRe = this._lc('cGZZ8OVpA', {parent:component,parentTop:flkModal,props:{service:component.service,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.requiredCocktails},boolAttrs:{multiple:true},attrs:{name:`${(`requiredCocktails[]`).toInputName()}`,placeholder:`${trans(`Cocktails`)}`,label:'Requires cocktails'},state:'st5V7ss'});
ec('div');
ec('div');
let elMx1fn = eo('div',null,null,`class`,`form-group`);
let elgCXRA = eo('label',null,null,`for`,`image`);
text(`Icon`);
ec('label');
let cmpFRrT = this._lc('ccMmILTbo', {parent:component,parentTop:flkModal,props:{src:component.formObject.icon},attrs:{src:`${component.formObject.icon}`,name:`${(`icon`).toInputName()}`,id:'icon',required:''},state:'st5V7ss'});
ec('div');
let elBL44n = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elFW7M7 = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st5V7ss'});
}
                    this.isReadyToGo();
                }
        });