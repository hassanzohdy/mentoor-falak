_Component({
                selector: 'tracks-page',
                c: 'TracksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cj1Oic20q:'gold-icon',cQOGBi3If:'table-actions',cMi7BJbSx:'admin-table',cFsMLfTV9:'flk-checkbox',c6IMx2bKH:'flk-modal'},
                render: function (component) {
                    let cmpamRb = this._lc('cMi7BJbSx', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let track = component.items[index]; 
 let iiIsj9 = 'CnYib7a' + index;
let elcoVcp = eo('tr','BQq9J9I_Fe6y' + index+iiIsj9,null,`id`,`${ track.id }`);
let elmJrdI = eo('td','FEUff'+iiIsj9);
text( track.id );
ec('td');
let elHhWpi = eo('td','9Svff'+iiIsj9);
let elyo7XW = ev('img','erIff'+iiIsj9,null,`src`,`${track.image}`,`class`,`trackImg small-image`,`alt`,``);
ec('td');
let elRhve1 = eo('td','yICff'+iiIsj9);
text(track.name);
ec('td');
let elMcNiy = eo('td','CdBff'+iiIsj9);
let elosjjK = eo('div','wNvff'+iiIsj9);
let elgi60a = eo('i','vNyff'+iiIsj9,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
let elXHHLa = eo('strong','zq8ff'+iiIsj9,null,`class`,`mx-2`);
text(track.suggestTopic.requires.format());
ec('strong');
ec('div');
let elTpvsV = eo('div','jX8ff'+iiIsj9);
let cmpMQvS = this._lc('cj1Oic20q', {parent:component,parentTop:adminTable,props:{coins:track.suggestTopic.reward},insideLoop:true,index:"" +iiIsj9});
ec('div');
ec('td');
let elOGPmj = eo('td','TUBff'+iiIsj9);
text(track.sortOrder);
ec('td');
let ela3kxu = eo('td','Xooff'+iiIsj9);
text(track.display);
ec('td');
let elwpt6a = eo('td','rpnff'+iiIsj9);
let elaH66v = eo('a','Z42ff'+iiIsj9,null,`href`,`/admin/academy/tracks/${ track.id }/topics`);
text(`${ track.topics.length.format() }
        topics`);
ec('a');
ec('td');
let elOQgBi = eo('td','honff'+iiIsj9);
text( Number(track.cost).format() );
ec('td');
let elZIkWy = eo('td','WNBff'+iiIsj9);
let cmphnnv = this._lc('cQOGBi3If', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(track)},ondelete:function(e) {let $el = this; component.deleteItem(track.id, index)}},insideLoop:true,index:"" +iiIsj9});
ec('td');
ec('tr');
}
}});
let cndJMDr = component.openModal;
this.setState('stygPTG', cndJMDr);
if (cndJMDr) { 
let cmpm1Qe = this._lc('c6IMx2bKH', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elviBfb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elviBfb.formHandler) {
                    window.cfrmdlr = elviBfb.formHandler = new FormHandler(elviBfb, component);
                } else {
                    window.cfrmdlr = elviBfb.formHandler;
                }
            let eledTvw = eo('div',null,null,`class`,`form-group`);
let elNRwbZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviBfb.formHandler.addError(`name`, 'required', trans('validation.required'));}return elviBfb.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
elNRwbZ.value = fval(component.formObject.name);
let cndSxyx = elviBfb.formHandler.getError(`name`);
this.setState('stDUnhF', cndSxyx);
if (cndSxyx) { 
let elEDLg3 = eo('div','Cd5f',null,`class`,`alert alert-danger`);
text(elviBfb.formHandler.getError(`name`));
ec('div');
}ec('div');
let elVAadS = eo('div',null,null,`class`,`form-group`);
let elCCr1e = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviBfb.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elviBfb.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elCCr1e.value = fval(component.formObject.slug);
let cndBwtY = elviBfb.formHandler.getError(`slug`);
this.setState('st7xypo', cndBwtY);
if (cndBwtY) { 
let elhuPeG = eo('div','uj2f',null,`class`,`alert alert-danger`);
text(elviBfb.formHandler.getError(`slug`));
ec('div');
}ec('div');
let el_4olo = eo('div',null,null,`class`,`form-group`);
let el2cSNF = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviBfb.formHandler.addError(`description`, 'required', trans('validation.required'));}return elviBfb.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
el2cSNF.value = fval(component.formObject.description);
ec('textarea');
let cndvnVj = elviBfb.formHandler.getError(`description`);
this.setState('st6a1GL', cndvnVj);
if (cndvnVj) { 
let elogp2X = eo('div','yEtf',null,`class`,`alert alert-danger`);
text(elviBfb.formHandler.getError(`description`));
ec('div');
}ec('div');
let elJDEGH = eo('div',null,null,`class`,`form-group`);
let elgTTs5 = eo('div',null,null,`class`,`row`);
let elJrIZj = eo('div',null,null,`class`,`col-md-4`);
let elGv_1z = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elGv_1z.value = fval(component.formObject.sortOrder);
ec('div');
let elZJAg_ = eo('div',null,null,`class`,`col-md-4`);
let elDUt4H = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviBfb.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elviBfb.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
elDUt4H.value = fval(component.formObject.cost);
let cnd8w60 = elviBfb.formHandler.getError(`cost`);
this.setState('stVzFtD', cnd8w60);
if (cnd8w60) { 
let elQOmK8 = eo('div','40jf',null,`class`,`alert alert-danger`);
text(elviBfb.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elq0D1g = eo('div',null,null,`class`,`col-md-4`);
let cmp9s_s = this._lc('cFsMLfTV9', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,value:1,label:'display'},state:'stygPTG'});
ec('div');
ec('div');
let elXmF5H = eo('h3',null,null,`class`,`m-v-1 bold`);
text(`Suggest Topics`);
ec('h3');
let elBmh6j = eo('div',null,null,`class`,`row`);
let el6BnrA = eo('div',null,null,`class`,`col-md-4`);
let elQh8G5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.requires = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviBfb.formHandler.addError(`suggestTopic.requires`, 'required', trans('validation.required'));}return elviBfb.formHandler.removeError(`suggestTopic.requires`);}]},`value`,`${fval(component.formObject.suggestTopic.requires)}`,`name`,`${(`suggestTopic.requires`).toInputName()}`,`placeholder`,`${trans(`Required answers for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-requires`);
elQh8G5.value = fval(component.formObject.suggestTopic.requires);
let cndOsq0 = elviBfb.formHandler.getError(`suggestTopic.requires`);
this.setState('stPdEvi', cndOsq0);
if (cndOsq0) { 
let el2Jh6o = eo('div','hgLf',null,`class`,`alert alert-danger`);
text(elviBfb.formHandler.getError(`suggestTopic.requires`));
ec('div');
}ec('div');
let el3jnHG = eo('div',null,null,`class`,`col-md-4`);
let elmlp2k = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elviBfb.formHandler.addError(`suggestTopic.reward`, 'required', trans('validation.required'));}return elviBfb.formHandler.removeError(`suggestTopic.reward`);}]},`value`,`${fval(component.formObject.suggestTopic.reward)}`,`name`,`${(`suggestTopic.reward`).toInputName()}`,`placeholder`,`${trans(`Reward for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-reward`);
elmlp2k.value = fval(component.formObject.suggestTopic.reward);
let cndS978 = elviBfb.formHandler.getError(`suggestTopic.reward`);
this.setState('stPArrP', cndS978);
if (cndS978) { 
let elh5_uD = eo('div','GiGf',null,`class`,`alert alert-danger`);
text(elviBfb.formHandler.getError(`suggestTopic.reward`));
ec('div');
}ec('div');
ec('div');
ec('div');
let el213yk = eo('div',null,null,`class`,`form-group`);
let elh2fdB = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let el4lh36 = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el87UQh = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stygPTG'});
}
                    this.isReadyToGo();
                }
        });