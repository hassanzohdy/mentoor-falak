_Component({
                selector: 'admin-training-ground-page',
                c: 'AdminTrainingGroundPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','levels','adminCocktailService','service','tagsService','isValidForm','submitting'],
                children: {cnoxtAiBW:'tag-badge',cpXJ9DGPM:'table-actions',cAUSPKNi1:'admin-table',cB4LezwSK:'flk-dropdown-list',cNTj7n1kz:'flk-checkbox',cNSV8EuGy:'flk-dropdown-list',cwSQYEpnx:'flk-dropdown-list',cZjDYDEZK:'flk-dropdown-list',cPPUcsv4R:'flk-image-input',c5H3LCibc:'flk-modal'},
                render: function (component) {
                    let cmpsZFd = this._lc('cAUSPKNi1', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let record = component.items[index]; 
 let iiEa33 = 'IgPx1iM' + index;
let el6znnP = eo('tr','wmcDdR4BHpnE' + index+iiEa33);
let el1rzyI = eo('td','Cq3ff'+iiEa33);
text( record.id );
ec('td');
let elc44pB = eo('td','b4fff'+iiEa33);
text(record.title);
ec('td');
let els5hAZ = eo('td','lFQff'+iiEa33);
let elErMoO = ev('img','kVDff'+iiEa33,null,`src`,`${record.image}`,`class`,`small-image`,`title`,`${record.title}`,`alt`,`${record.title}`);
ec('td');
let elmhv9I = eo('td','ouPff'+iiEa33);
let cndHTyg = record.livePreview;
this.setState('stkwUEB', cndHTyg);
let cndpVn_ = !(cndHTyg);
this.setState('st98XR9', cndpVn_);
if (cndHTyg) { 
let elPVmDy = eo('a','QfFff'+iiEa33,null,`href`,`${ record.livePreview }`);
text(`Live preview`);
ec('a');
}else { 
let elCGyBO = eo('span','XAXff'+iiEa33);
text(`N/a`);
ec('span');
}ec('td');
let elvSSv9 = eo('td','qTZff'+iiEa33);
text(record.prize.format());
ec('td');
let elWcviZ = eo('td','1R3ff'+iiEa33);
text(record.cocktail.name);
ec('td');
let elUnhOX = eo('td','J6dff'+iiEa33);
text(Object.get(record.dependsOn, 'title', ''));
ec('td');
let elhCaRW = eo('td','21lff'+iiEa33);
for (let i in record.tags) {
let tag = record.tags[i]; 
 let iiIOS1 = '7newlli' + i;
let el4FY3c = eo('div','JKlCvY_xcBNU' + i+iiEa33+iiIOS1);
let eljx3mn = eo('div','PPOff'+iiEa33+iiIOS1,null,`class`,`m-b-1`);
let cmp1Uom = this._lc('cnoxtAiBW', {parent:component,parentTop:adminTable,props:{small:true,tag:tag},insideLoop:true,index:"" +iiEa33+iiIOS1});
ec('div');
ec('div');
}
ec('td');
let elFdEjO = eo('td','zQZff'+iiEa33);
text(record.level);
ec('td');
let elXv2YB = eo('td','OENff'+iiEa33);
text(record.sortOrder);
ec('td');
let elM7j0z = eo('td','WB_ff'+iiEa33);
text(record.display);
ec('td');
let el8QpSs = eo('td','tloff'+iiEa33);
let cmpIXnG = this._lc('cpXJ9DGPM', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(record)},ondelete:function(e) {let $el = this; component.deleteItem(record.id, index)}},insideLoop:true,index:"" +iiEa33});
ec('td');
ec('tr');
}
}});
let cnduY0h = component.openModal;
this.setState('st_jsnf', cnduY0h);
if (cnduY0h) { 
let cmp_lwx = this._lc('c5H3LCibc', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elfbOWb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elfbOWb.formHandler) {
                    window.cfrmdlr = elfbOWb.formHandler = new FormHandler(elfbOWb, component);
                } else {
                    window.cfrmdlr = elfbOWb.formHandler;
                }
            let elBCRtP = eo('div',null,null,`class`,`form-group`);
let elSqP1r = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfbOWb.formHandler.addError(`title`, 'required', trans('validation.required'));}return elfbOWb.formHandler.removeError(`title`);}]},`value`,`${fval(component.formObject.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elSqP1r.value = fval(component.formObject.title);
let cnd3tqH = elfbOWb.formHandler.getError(`title`);
this.setState('stb4WJt', cnd3tqH);
if (cnd3tqH) { 
let elAM0Uv = eo('div','qFff',null,`class`,`alert alert-danger`);
text(elfbOWb.formHandler.getError(`title`));
ec('div');
}ec('div');
let elbR3xo = eo('div',null,null,`class`,`form-group`);
let cmpDOSI = this._lc('cB4LezwSK', {parent:component,parentTop:flkModal,props:{items:component.levels,value:component.formObject.level},attrs:{name:`${(`level`).toInputName()}`,placeholder:`${trans(`Level`)}`},state:'st_jsnf'});
ec('div');
let elbxRBx = eo('div',null,null,`class`,`form-group`);
let elos7n1 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfbOWb.formHandler.addError(`description`, 'required', trans('validation.required'));}return elfbOWb.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elos7n1.value = fval(component.formObject.description);
ec('textarea');
let cnd3dvB = elfbOWb.formHandler.getError(`description`);
this.setState('stefpFY', cnd3dvB);
if (cnd3dvB) { 
let elaCK70 = eo('div','wkKf',null,`class`,`alert alert-danger`);
text(elfbOWb.formHandler.getError(`description`));
ec('div');
}ec('div');
let elDGmiF = eo('div',null,null,`class`,`form-group`);
let el6gKVL = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.shortDescription = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfbOWb.formHandler.addError(`shortDescription`, 'required', trans('validation.required'));}return elfbOWb.formHandler.removeError(`shortDescription`);}]},`value`,`${fval(component.formObject.shortDescription)}`,`name`,`${(`shortDescription`).toInputName()}`,`placeholder`,`${trans(`Short description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`shortDescription`);
el6gKVL.value = fval(component.formObject.shortDescription);
ec('textarea');
let cnd6_b9 = elfbOWb.formHandler.getError(`shortDescription`);
this.setState('stmc68r', cnd6_b9);
if (cnd6_b9) { 
let elo0Dfc = eo('div','10Af',null,`class`,`alert alert-danger`);
text(elfbOWb.formHandler.getError(`shortDescription`));
ec('div');
}ec('div');
let elpQDOF = eo('div',null,null,`class`,`form-group`);
let elJyB68 = eo('div',null,null,`class`,`row`);
let elVIU0a = eo('div',null,null,`class`,`col-md-3`);
let elzMdrA = eo('div',null,null,`class`,`form-group`);
elzMdrA.cls = {'group-error': !!elfbOWb.formHandler.getError(`sortOrder`) };

            for (let className in elzMdrA.cls) {
                elzMdrA.classList.toggle(className, elzMdrA.cls[className]);
            }  
            let el8T6_D = eo('label',null,null,`for`,`sortOrder`);
text(trans('Sort order'));
ec('label');
let elxdIwA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elxdIwA.value = fval(component.formObject.sortOrder);
ec('div');
ec('div');
let elUhLyP = eo('div',null,null,`class`,`col-md-3`);
let elDppIP = eo('div',null,null,`class`,`form-group`);
elDppIP.cls = {'group-error': !!elfbOWb.formHandler.getError(`livePreview`) };

            for (let className in elDppIP.cls) {
                elDppIP.classList.toggle(className, elDppIP.cls[className]);
            }  
            let elBomr6 = eo('label',null,null,`for`,`livePreview`);
text(trans('live preview url'));
ec('label');
let elpkmQn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.livePreview = this.value;}]},`value`,`${fval(component.formObject.livePreview)}`,`name`,`${(`livePreview`).toInputName()}`,`placeholder`,`${trans(`live preview url`)}`,`type`,`text`,`class`,`form-control`,`id`,`livePreview`);
elpkmQn.value = fval(component.formObject.livePreview);
ec('div');
ec('div');
let elOpFne = eo('div',null,null,`class`,`col-md-3`);
let elwo4tu = eo('div',null,null,`class`,`form-group`);
elwo4tu.cls = {'group-error': !!elfbOWb.formHandler.getError(`prize`) };

            for (let className in elwo4tu.cls) {
                elwo4tu.classList.toggle(className, elwo4tu.cls[className]);
            }  
            let elHEM6W = eo('label',null,null,`for`,`prize`);
text(trans('Prize'));
let elbSfu3 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eln2PNR = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.prize = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfbOWb.formHandler.addError(`prize`, 'required', trans('validation.required'));}return elfbOWb.formHandler.removeError(`prize`);}]},`value`,`${fval(component.formObject.prize)}`,`name`,`${(`prize`).toInputName()}`,`placeholder`,`${trans(`prize`)}`,`class`,`form-control`,`type`,`number`,`id`,`prize`);
eln2PNR.value = fval(component.formObject.prize);
let cndsIBh = elfbOWb.formHandler.getError(`prize`);
this.setState('stqUJD4', cndsIBh);
if (cndsIBh) { 
let elZOVRD = eo('div','Mjtf',null,`class`,`alert alert-danger`);
text(elfbOWb.formHandler.getError(`prize`));
ec('div');
}ec('div');
ec('div');
let elfobzL = eo('div',null,null,`class`,`col-md-3`);
let cmpGR2K = this._lc('cNTj7n1kz', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,label:'Display',value:1},state:'st_jsnf'});
ec('div');
ec('div');
ec('div');
let elFK8mr = eo('div',null,null,`class`,`row`);
let el6p_5Z = eo('div',null,null,`class`,`col-4`);
let cmpnD01 = this._lc('cNSV8EuGy', {parent:component,parentTop:flkModal,props:{service:component.adminCocktailService,lazyLoading:true,imageable:true,value:component.formObject.cocktail.id},attrs:{name:`${(`cocktailId`).toInputName()}`,placeholder:`${trans(`Cocktail`)}`,label:'Cocktail'},state:'st_jsnf'});
ec('div');
let elZTIp0 = eo('div',null,null,`class`,`col-4`);
let cmp_EPv = this._lc('cwSQYEpnx', {parent:component,parentTop:flkModal,props:{service:component.service,except:component.formObject.id,lazyLoading:true,imageable:true,value:component.formObject.dependsOn.id},attrs:{name:`${(`dependsOnId`).toInputName()}`,placeholder:`${trans(`Depends on`)}`,label:'depends On'},state:'st_jsnf'});
ec('div');
let elmVMeR = eo('div',null,null,`class`,`col-4`);
let cmpX_rV = this._lc('cZjDYDEZK', {parent:component,parentTop:flkModal,props:{service:component.tagsService,lazyLoading:true,multiple:true,imageable:true,value:component.formObject.tags},boolAttrs:{multiple:true},attrs:{name:`${(`tags[]`).toInputName()}`,placeholder:`${trans(`Additional tags`)}`,label:'tags'},state:'st_jsnf'});
ec('div');
ec('div');
let elHM9OA = eo('div',null,null,`class`,`form-group`);
let elf8Ys5 = eo('label',null,null,`for`,`image`);
text(`Image`);
ec('label');
let cmptgDC = this._lc('cPPUcsv4R', {parent:component,parentTop:flkModal,props:{src:component.formObject.image},attrs:{src:`${component.formObject.image}`,name:`${(`image`).toInputName()}`,id:'image',required:''},state:'st_jsnf'});
ec('div');
let eleLSWl = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el5SnOl = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'st_jsnf'});
}
                    this.isReadyToGo();
                }
        });