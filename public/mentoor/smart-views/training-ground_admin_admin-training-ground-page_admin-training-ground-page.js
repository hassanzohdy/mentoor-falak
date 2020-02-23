_Component({
                selector: 'admin-training-ground-page',
                c: 'AdminTrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminCocktailService','service','tagsService','isValidForm','submitting'],
                children: {chAbQ_f2I:'tag-badge',cgHuHEIwn:'table-actions',cmzCAIzur:'admin-table',cj0nYwwOf:'flk-dropdown-list',c8bnZxd4q:'flk-checkbox',cHrDWaQqC:'flk-dropdown-list',cg33WQ_9I:'flk-dropdown-list',cHoxJE_Zc:'flk-dropdown-list',cKKicNOj8:'flk-image-input',cBIZTue1L:'flk-modal'},
                render: function (component) {
                    let cmpAHGH = this._lc('cmzCAIzur', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let ii3DYe = 'L43CFSn' + index;
let elvzUwO = eo('tr','CpbyEWa_3vsY' + index+ii3DYe);
let elKyI59 = eo('td','cnGff'+ii3DYe);
text( record.id );
ec('td');
let elS_dr0 = eo('td','4yYff'+ii3DYe);
text(record.title);
ec('td');
let elberIW = eo('td','9nWff'+ii3DYe);
let elCw7bF = ev('img','0qLff'+ii3DYe,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.title}`,`alt`,`${record.title}`);
ec('td');
let elWye7D = eo('td','BA7ff'+ii3DYe);
let cndi2UV = record.livePreview;
this.setState('stFg8V7', cndi2UV);
let cndSHCd = !(cndi2UV);
this.setState('st28aUI', cndSHCd);
if (cndi2UV) { 
let elU9WeV = eo('a','5fZff'+ii3DYe,null,`href`,`${ record.livePreview }`);
text(`Live preview`);
ec('a');
}else { 
let elaMcU0 = eo('span','6Qlff'+ii3DYe);
text(`N/a`);
ec('span');
}ec('td');
let elbqoux = eo('td','VPMff'+ii3DYe);
text(record.prize.format());
ec('td');
let elqrLsH = eo('td','MQWff'+ii3DYe);
text(record.cocktail.name);
ec('td');
let elCLIXB = eo('td','cb_ff'+ii3DYe);
text(Object.get(record.dependsOn, 'title', ''));
ec('td');
let el6sN1I = eo('td','ZPcff'+ii3DYe);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiE8Su = 'DZ_sDE0' + i;
let elVnXME = eo('div','Nq7w54QUynma' + i+ii3DYe+iiE8Su);
let eleE_Ef = eo('div','jLAff'+ii3DYe+iiE8Su,null,`class`,`m-b-1`);
let cmpk_Cs = this._lc('chAbQ_f2I', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +ii3DYe+iiE8Su});
ec('div');
ec('div');
}
ec('td');
let elC9Blv = eo('td','5Qfff'+ii3DYe);
text(record.level);
ec('td');
let elT7zQ5 = eo('td','46nff'+ii3DYe);
text(record.sortOrder);
ec('td');
let elqrl3t = eo('td','V3Mff'+ii3DYe);
text(record.display);
ec('td');
let elirlRv = eo('td','DJKff'+ii3DYe);
let cmptlli = this._lc('cgHuHEIwn', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +ii3DYe});
ec('td');
ec('tr');
}
}});
let cndjyRO = component.openModal;
this.setState('stW76T4', cndjyRO);
if (cndjyRO) { 
let cmp7PM3 = this._lc('cBIZTue1L', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elwtUW0 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elwtUW0.formHandler) {
                    window.cfrmdlr = elwtUW0.formHandler = new FormHandler(elwtUW0, component);
                } else {
                    window.cfrmdlr = elwtUW0.formHandler;
                }
            let elAx2wQ = eo('div',null,null,`class`,`form-group`);
let elYi7uN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwtUW0.formHandler.addError(`title`, 'required', trans('validation.required'));}return elwtUW0.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elYi7uN.value = fval(component.formObject.title);
let cndlChG = elwtUW0.formHandler.getError(`title`);
this.setState('st89jKG', cndlChG);
if (cndlChG) { 
let elsywFL = eo('div','KKLf',null,`class`,`alert alert-danger`);
text(elwtUW0.formHandler.getError(`title`));
ec('div');
}ec('div');
let elByJyp = eo('div',null,null,`class`,`form-group`);
let cmpnFTl = this._lc('cj0nYwwOf', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`},state:'stW76T4'});
ec('div');
let elG475b = eo('div',null,null,`class`,`form-group`);
let elYYBMr = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwtUW0.formHandler.addError(`description`, 'required', trans('validation.required'));}return elwtUW0.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elYYBMr.value = fval(component.formObject.description);
ec('textarea');
let cndLTF7 = elwtUW0.formHandler.getError(`description`);
this.setState('stzgG3i', cndLTF7);
if (cndLTF7) { 
let elrkd4r = eo('div','cwSf',null,`class`,`alert alert-danger`);
text(elwtUW0.formHandler.getError(`description`));
ec('div');
}ec('div');
let elMzfgb = eo('div',null,null,`class`,`form-group`);
let el0IT_Q = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwtUW0.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elwtUW0.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`shortDescription`);
el0IT_Q.value = fval(component.formObject.shortDescription);
ec('textarea');
let cndLc25 = elwtUW0.formHandler.getError(`shortDescription`);
this.setState('stJjgsR', cndLc25);
if (cndLc25) { 
let el3RoRD = eo('div','WJLf',null,`class`,`alert alert-danger`);
text(elwtUW0.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let eldOJdI = eo('div',null,null,`class`,`form-group`);
let elwzleX = eo('div',null,null,`class`,`row`);
let elGURgu = eo('div',null,null,`class`,`col-md-3`);
let elOdkCh = eo('div',null,null,`class`,`form-group`);
elOdkCh.cls = {'group-error': !!elwtUW0.formHandler.getError(`sortOrder`) };

            for (let className in elOdkCh.cls) {
                elOdkCh.classList.toggle(className, elOdkCh.cls[className]);
            }  
            let eliHsdw = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elMBB6y = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elMBB6y.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elo0MSr = eo('div',null,null,`class`,`col-md-3`);
let elfWHGc = eo('div',null,null,`class`,`form-group`);
elfWHGc.cls = {'group-error': !!elwtUW0.formHandler.getError(`livePreview`) };

            for (let className in elfWHGc.cls) {
                elfWHGc.classList.toggle(className, elfWHGc.cls[className]);
            }  
            let ellRcgV = eo('label',null,null,`for`,`livePreview`);
text(trans('live preview url'));
ec('label');
let elROND8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.livePreview = this.value;}]},`value`,`${fval(component.formObject.livePreview)}`,`name`,`${(`livePreview`).toInputName()}`,`placeholder`,`${trans(`live preview url`)}`,`type`,`text`,`class`,`form-control`,`id`,`livePreview`);
elROND8.value = fval(component.formObject.livePreview);
ec('div');
ec('div');
let elyD3hA = eo('div',null,null,`class`,`col-md-3`);
let elHHcCF = eo('div',null,null,`class`,`form-group`);
elHHcCF.cls = {'group-error': !!elwtUW0.formHandler.getError(`prize`) };

            for (let className in elHHcCF.cls) {
                elHHcCF.classList.toggle(className, elHHcCF.cls[className]);
            }  
            let elAEIZb = eo('label',null,null,`for`,`prize`);
text(trans('Prize'));
let elkFFEW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eloZ9XQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elwtUW0.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elwtUW0.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
eloZ9XQ.value = fval(component.formObject.prize);
let cndQ4NW = elwtUW0.formHandler.getError(`prize`);
this.setState('stJY5bG', cndQ4NW);
if (cndQ4NW) { 
let elipmzf = eo('div','zEBf',null,`class`,`alert alert-danger`);
text(elwtUW0.formHandler.getError(`prize`));
ec('div');
}ec('div');
ec('div');
let el0DptX = eo('div',null,null,`class`,`col-md-3`);
let cmpIh9t = this._lc('c8bnZxd4q', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'stW76T4'});
ec('div');
ec('div');
ec('div');
let elq3yns = eo('div',null,null,`class`,`row`);
let el751WS = eo('div',null,null,`class`,`col-4`);
let cmpp24l = this._lc('cHrDWaQqC', {parent:component,parentTop:flkModal,props:{service:component.adminCocktailService,lazyLoading:true,imageable:true,value:component.formObject.cocktail.id},attrs:{name:`${(`cocktailId`).toInputName()}`,placeholder:`${trans(`Cocktail`)}`,label:'Cocktail'},state:'stW76T4'});
ec('div');
let el6is38 = eo('div',null,null,`class`,`col-4`);
let cmpnA2f = this._lc('cg33WQ_9I', {parent:component,parentTop:flkModal,props:{service:component.service,except:component.formObject.id,lazyLoading:true,imageable:true,value:component.formObject.dependsOn.id},attrs:{name:`${(`dependsOnId`).toInputName()}`,placeholder:`${trans(`Depends on`)}`,label:'depends On'},state:'stW76T4'});
ec('div');
let elWKgRA = eo('div',null,null,`class`,`col-4`);
let cmppZFu = this._lc('cHoxJE_Zc', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Additional tags`)}`,label:'tags'},state:'stW76T4'});
ec('div');
ec('div');
let elnCVU6 = eo('div',null,null,`class`,`form-group`);
let elHB5Na = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmptk0A = this._lc('cKKicNOj8', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'stW76T4'});
ec('div');
let elGUZZq = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let elLw5QY = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stW76T4'});
}
                    this.isReadyToGo();
                }
        });