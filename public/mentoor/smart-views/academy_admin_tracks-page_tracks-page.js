_Component({
                selector: 'tracks-page',
                c: 'TracksPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['crudOptions','items','tableHeading','editItem','deleteItem','openModal','closeModal','submit','formObject','isValidForm','submitting'],
                children: {cYVoM3qGY:'gold-icon',cYZ3ZQMrO:'table-actions',cPvdfjJlP:'admin-table',c1DvHsKMW:'flk-checkbox',cP31VPZSl:'flk-modal'},
                render: function (component) {
                    let cmp4t6J = this._lc('cPvdfjJlP', {parent:component,props:{columns:component.crudOptions.columns,records:component.items,addHeading:component.crudOptions.heading,tableHeading:component.tableHeading},content:(adminTable) => {for (let index in component.items) {
let track = component.items[index]; 
 let iiqvCV = 'dMqTfbs' + index;
let eloLax3 = eo('tr','IRRQsIfDRNqD' + index+iiqvCV,null,`id`,`${ track.id }`);
let elA1fTB = eo('td','zT0ff'+iiqvCV);
text( track.id );
ec('td');
let el1Ql9e = eo('td','qAUff'+iiqvCV);
let elcee_Q = ev('img','i9vff'+iiqvCV,null,`src`,`${track.image}`,`class`,`trackImg small-image`,`alt`,``);
ec('td');
let elUaqPG = eo('td','Evxff'+iiqvCV);
text(track.name);
ec('td');
let elH4LmS = eo('td','T9Bff'+iiqvCV);
let eljz4vW = eo('div','mvOff'+iiqvCV);
let elTcR83 = eo('i','i6fff'+iiqvCV,null,`class`,`${fas('edit')} icon`);
ec('i');
let elqouBH = eo('strong','g9wff'+iiqvCV,null,`class`,`mx-2`);
text(track.suggestTopic.requires.format());
ec('strong');
ec('div');
let elYnH1f = eo('div','vOjff'+iiqvCV);
let cmps2lH = this._lc('cYVoM3qGY', {parent:component,parentTop:adminTable,props:{coins:track.suggestTopic.reward},insideLoop:true,index:"" +iiqvCV});
ec('div');
ec('td');
let elOIQ8b = eo('td','nACff'+iiqvCV);
text(track.sortOrder);
ec('td');
let elr8Bg8 = eo('td','c8jff'+iiqvCV);
text(track.display);
ec('td');
let elnW0I9 = eo('td','XDjff'+iiqvCV);
let elO0Wzm = eo('a','vLbff'+iiqvCV,null,`href`,`/admin/academy/tracks/${ track.id }/topics`);
text(`${ track.topics.length.format() }
        topics`);
ec('a');
ec('td');
let elMwEbv = eo('td','Rksff'+iiqvCV);
text( Number(track.cost).format() );
ec('td');
let elVqPhu = eo('td','yihff'+iiqvCV);
let cmpC0st = this._lc('cYZ3ZQMrO', {parent:component,parentTop:adminTable,events:{onedit:function(e) {let $el = this; component.editItem(track)},ondelete:function(e) {let $el = this; component.deleteItem(track.id, index)}},insideLoop:true,index:"" +iiqvCV});
ec('td');
ec('tr');
}
}});
let cndkkRK = component.openModal;
this.setState('stOIzdh', cndkkRK);
if (cndkkRK) { 
let cmp81tj = this._lc('cP31VPZSl', {parent:component,props:{modalHeader:component.crudOptions.heading},events:{onclose:function(e) {let $el = this; component.closeModal()}},content:(flkModal) => {let elGzkCh = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elGzkCh.formHandler) {
                    window.cfrmdlr = elGzkCh.formHandler = new FormHandler(elGzkCh, component);
                } else {
                    window.cfrmdlr = elGzkCh.formHandler;
                }
            let el2D67z = eo('div',null,null,`class`,`form-group`);
let el_Jw_t = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.name = this.value;},function(e) {var $el = this;component.formObject.slug = seo($el.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGzkCh.formHandler.addError(`name`, 'required', trans('validation.required'));}return elGzkCh.formHandler.removeError(`name`);}]},`value`,`${fval(component.formObject.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Track name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el_Jw_t.value = fval(component.formObject.name);
let cndGihx = elGzkCh.formHandler.getError(`name`);
this.setState('stB7Gz0', cndGihx);
if (cndGihx) { 
let el_p57J = eo('div','FT9f',null,`class`,`alert alert-danger`);
text(elGzkCh.formHandler.getError(`name`));
ec('div');
}ec('div');
let elXMmyV = eo('div',null,null,`class`,`form-group`);
let elI8pJ7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.slug = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGzkCh.formHandler.addError(`slug`, 'required', trans('validation.required'));}return elGzkCh.formHandler.removeError(`slug`);}]},`value`,`${fval(component.formObject.slug)}`,`name`,`${(`slug`).toInputName()}`,`placeholder`,`${trans(`Url slug`)}`,`type`,`text`,`class`,`form-control`,`id`,`slug`);
elI8pJ7.value = fval(component.formObject.slug);
let cnd54fW = elGzkCh.formHandler.getError(`slug`);
this.setState('st6WAeR', cnd54fW);
if (cnd54fW) { 
let elz7jOL = eo('div','oCHf',null,`class`,`alert alert-danger`);
text(elGzkCh.formHandler.getError(`slug`));
ec('div');
}ec('div');
let elkDyko = eo('div',null,null,`class`,`form-group`);
let elwCCfd = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.formObject.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGzkCh.formHandler.addError(`description`, 'required', trans('validation.required'));}return elGzkCh.formHandler.removeError(`description`);}]},`value`,`${fval(component.formObject.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`rows`,`6`,`class`,`form-control`,`id`,`description`);
elwCCfd.value = fval(component.formObject.description);
ec('textarea');
let cndJ59t = elGzkCh.formHandler.getError(`description`);
this.setState('stRCOuw', cndJ59t);
if (cndJ59t) { 
let elUtplo = eo('div','UwUf',null,`class`,`alert alert-danger`);
text(elGzkCh.formHandler.getError(`description`));
ec('div');
}ec('div');
let eltvPzx = eo('div',null,null,`class`,`form-group`);
let elfsVLr = eo('div',null,null,`class`,`row`);
let eltt7wr = eo('div',null,null,`class`,`col-md-4`);
let elJ_YAd = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.sortOrder = this.value;}]},`value`,`${fval(component.formObject.sortOrder)}`,`name`,`${(`sortOrder`).toInputName()}`,`placeholder`,`${trans(`Sort order`)}`,`type`,`number`,`class`,`form-control`,`id`,`sortOrder`);
elJ_YAd.value = fval(component.formObject.sortOrder);
ec('div');
let elZFgBQ = eo('div',null,null,`class`,`col-md-4`);
let eluqxBx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.cost = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGzkCh.formHandler.addError(`cost`, 'required', trans('validation.required'));}return elGzkCh.formHandler.removeError(`cost`);}]},`value`,`${fval(component.formObject.cost)}`,`name`,`${(`cost`).toInputName()}`,`placeholder`,`${trans(`cost`)}`,`class`,`form-control`,`type`,`number`,`id`,`cost`);
eluqxBx.value = fval(component.formObject.cost);
let cndbvag = elGzkCh.formHandler.getError(`cost`);
this.setState('stJ9373', cndbvag);
if (cndbvag) { 
let elKmNHa = eo('div','bCOf',null,`class`,`alert alert-danger`);
text(elGzkCh.formHandler.getError(`cost`));
ec('div');
}ec('div');
let elYzjtA = eo('div',null,null,`class`,`col-md-4`);
let cmp3e0X = this._lc('c1DvHsKMW', {parent:component,parentTop:flkModal,props:{checked:component.formObject.display},events:{onchange:function(e) {let $el = this; component.formObject.display = ! component.formObject.display}},boolAttrs:{checked:component.formObject.display},attrs:{name:`${(`display`).toInputName()}`,value:1,label:'display'},state:'stOIzdh'});
ec('div');
ec('div');
let elwPlri = eo('h3',null,null,`class`,`m-v-1 bold`);
text(`Suggest Topics`);
ec('h3');
let elhwJfW = eo('div',null,null,`class`,`row`);
let el8u220 = eo('div',null,null,`class`,`col-md-4`);
let elkF9Ej = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.requires = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGzkCh.formHandler.addError(`suggestTopic.requires`, 'required', trans('validation.required'));}return elGzkCh.formHandler.removeError(`suggestTopic.requires`);}]},`value`,`${fval(component.formObject.suggestTopic.requires)}`,`name`,`${(`suggestTopic.requires`).toInputName()}`,`placeholder`,`${trans(`Required answers for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-requires`);
elkF9Ej.value = fval(component.formObject.suggestTopic.requires);
let cndukWN = elGzkCh.formHandler.getError(`suggestTopic.requires`);
this.setState('st9zstP', cndukWN);
if (cndukWN) { 
let el1P4mm = eo('div','DBSf',null,`class`,`alert alert-danger`);
text(elGzkCh.formHandler.getError(`suggestTopic.requires`));
ec('div');
}ec('div');
let elexbIJ = eo('div',null,null,`class`,`col-md-4`);
let elixQCJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.formObject.suggestTopic.reward = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elGzkCh.formHandler.addError(`suggestTopic.reward`, 'required', trans('validation.required'));}return elGzkCh.formHandler.removeError(`suggestTopic.reward`);}]},`value`,`${fval(component.formObject.suggestTopic.reward)}`,`name`,`${(`suggestTopic.reward`).toInputName()}`,`placeholder`,`${trans(`Reward for suggest topic`)}`,`class`,`form-control`,`type`,`number`,`id`,`suggestTopic-reward`);
elixQCJ.value = fval(component.formObject.suggestTopic.reward);
let cndwUAr = elGzkCh.formHandler.getError(`suggestTopic.reward`);
this.setState('stnZ66V', cndwUAr);
if (cndwUAr) { 
let elpt2Si = eo('div','Oitf',null,`class`,`alert alert-danger`);
text(elGzkCh.formHandler.getError(`suggestTopic.reward`));
ec('div');
}ec('div');
ec('div');
ec('div');
let elrhyys = eo('div',null,null,`class`,`form-group`);
let elLFusH = ev('input',null,null,`name`,`${(`image`).toInputName()}`,`type`,`file`);
ec('div');
let el1Chmd = eo('div',null,null,`class`,`form-btns d-flex justify-content-end`);
let el1pIwj = eo('button',null,null, boolAttrs, {disabled:!component.isValidForm || component.submitting},`class`,`btn btn-primary`);
text(trans('save'));
ec('button');
ec('div');
ec('form');
},state:'stOIzdh'});
}
                    this.isReadyToGo();
                }
        });