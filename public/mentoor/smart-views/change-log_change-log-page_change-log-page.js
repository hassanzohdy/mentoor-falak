_Component({
                selector: 'change-log-page',
                c: 'ChangeLogPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['user','openModal','isLoading','changeLogs','modalShouldBeOpened','heading','submit','data'],
                children: {c2m8F8l4N:'flk-spinner',c_2xE_xKd:'markdown',cYeiu6LBT:'layout',cJMLHTcV6:'flk-datepicker',cho81DSOF:'flk-checkbox',cvZAsatqM:'flk-modal'},
                render: function (component) {
                    let cmpNjlY = this._lc('cYeiu6LBT', {parent:component,content:(layout) => {let eliVrq9 = eo('h1');
text(`Change Log`);
let cndOA4o = component.user.id == 1;
this.setState('stBPjw8', cndOA4o);
if (cndOA4o) { 
let elBJtDG = eo('button','pAmf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`type`,`button`,`class`,`btn btn-circle btn-success`);
let elr6yS7 = eo('i','Jf7f',null,`class`,`${fas('plus')} icon`);
ec('i');
ec('button');
}ec('h1');
let elQz7nH = eo('p',null,null,`class`,`m-b-4 m-t-1`);
text(`All changes happen in`);
let elV5KAh = eo('strong',null,null,`class`,`mx-2`);
text(`Mentoor.io`);
ec('strong');
text(`are listed here
        chronologically.`);
ec('p');
let cndIdSZ = component.isLoading;
this.setState('stQklGN', cndIdSZ);
let cnd0KMg = !(cndIdSZ);
this.setState('stVGKhC', cnd0KMg);
if (cndIdSZ) { 
let cmp1mXJ = this._lc('c2m8F8l4N', {parent:component,parentTop:layout,state:'stQklGN'});
}else { 
for (let index in component.changeLogs) {
let version = component.changeLogs[index]; 
 let iiie0L = 'pmNfokO' + index;
let el1moRu = eo('div','iUvYrXrPkC3I' + index+iiie0L,null,`class`,`version`);
let el5CMqm = eo('h1','79cff'+iiie0L,null,`class`,`m-b-1`);
let elBDvRJ = eo('span','5Kuff'+iiie0L);
text('Version ' + version.version);
ec('span');
let cndYaym = component.user.id == 1;
this.setState('stlWotF', cndYaym);
if (cndYaym) { 
let elK0_pL = eo('button','8bCff'+iiie0L,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', version, index)}]},`class`,`btn btn-circle btn-primary ml-2`);
let ellq4cZ = eo('i','UyJff'+iiie0L,null,`class`,`${fas('edit')} icon`);
ec('i');
ec('button');
}ec('h1');
let el1KNml = eo('h3','sQNff'+iiie0L,null,`class`,`release-date`);
text(version.releaseDate);
ec('h3');
let cmpU_Ig = this._lc('c_2xE_xKd', {parent:component,parentTop:layout,props:{content:version.log},insideLoop:true,index:"" +iiie0L});
ec('div');
}
}}});
let cndXKba = component.modalShouldBeOpened;
this.setState('stZTqIU', cndXKba);
if (cndXKba) { 
component.modal = this._lc('cvZAsatqM', {parent:component,props:{header:component.heading},events:{onclose:function(e) {let $el = this; component.modalShouldBeOpened = null}},content:(flkModal) => {let elC7pFK = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elC7pFK.formHandler) {
                    window.cfrmdlr = elC7pFK.formHandler = new FormHandler(elC7pFK, component);
                } else {
                    window.cfrmdlr = elC7pFK.formHandler;
                }
            let elsXNyW = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elC7pFK.formHandler.getError(`version`) })}`);
let elg7zak = eo('label',null,null,`for`,`version`);
text(trans('Version'));
let elwAhtm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkTX9L = ev('input',null,null, eventListeners, {oninput:[function(e) {component.data.version = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elC7pFK.formHandler.addError(`version`, 'required', trans('validation.required'));}return elC7pFK.formHandler.removeError(`version`);}]},`value`,`${fval(component.data.version)}`,`name`,`${(`version`).toInputName()}`,`placeholder`,`${trans(`Version`)}`,`type`,`text`,`class`,`form-control`,`id`,`version`);
elkTX9L.value = fval(component.data.version);
let cndppf5 = elC7pFK.formHandler.getError(`version`);
this.setState('sthlPGU', cndppf5);
if (cndppf5) { 
let elT2eMa = eo('div','QUlf',null,`class`,`alert alert-danger`);
text(elC7pFK.formHandler.getError(`version`));
ec('div');
}ec('div');
let cmpKNqH = this._lc('cJMLHTcV6', {parent:component,parentTop:flkModal,props:{value:component.data.releaseDate},attrs:{name:`${(`releaseDate`).toInputName()}`,placeholder:`${trans(`Release date`)}`,label:'Release date',required:'',class:'form-control'},state:'stZTqIU'});
let elv0LgN = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elC7pFK.formHandler.getError(`log`) })}`);
let elyYUkU = eo('label',null,null,`for`,`log`);
text(trans('Changes'));
let elneaSe = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ela76Pu = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.data.log = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elC7pFK.formHandler.addError(`log`, 'required', trans('validation.required'));}return elC7pFK.formHandler.removeError(`log`);}]},`value`,`${fval(component.data.log)}`,`name`,`${(`log`).toInputName()}`,`placeholder`,`${trans(`Changes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`log`);
ela76Pu.value = fval(component.data.log);
ec('textarea');
let cndeXPR = elC7pFK.formHandler.getError(`log`);
this.setState('stthidh', cndeXPR);
if (cndeXPR) { 
let elB_qwP = eo('div','gDNf',null,`class`,`alert alert-danger`);
text(elC7pFK.formHandler.getError(`log`));
ec('div');
}ec('div');
let elCRSSr = eo('div',null,null,`class`,`form-group`);
let cmpZQ3W = this._lc('cho81DSOF', {parent:component,parentTop:flkModal,props:{checked:component.data.published},events:{onchange:function(e) {let $el = this; component.data.published = $el.checked}},boolAttrs:{checked:component.data.published},attrs:{name:`${(`published`).toInputName()}`,label:'Published',value:1},state:'stZTqIU'});
ec('div');
let elVxqeK = eo('button',null,null,`class`,`btn btn-success`);
text(`Save`);
ec('button');
ec('form');
},attrs:{size:'small'},state:'stZTqIU'});
}
                    this.isReadyToGo();
                }
        });