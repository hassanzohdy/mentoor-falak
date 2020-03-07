_Component({
                selector: 'project-comment-comments',
                c: 'ProjectCommentComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comment','project','user','index','editMode','confirmRemoving','submitComment','typeId','type','commentId','isSending','isValidForm','newComment'],
                children: {cIvfEnpvw:'flk-time-ago',c0WLzKZ4Y:'markdown',c9wxaolJI:'flk-audio-player',cH4rcXllT:'flk-file-input',c1VHIehbO:'record-audio-input',cu5pROlG9:'flk-file-input',c8JxGAuiQ:'record-audio-input'},
                render: function (component) {
                    let eli_HPz = eo('div',null,null,`class`,`comment-comments`);
for (let commentIndex in component.comment.comments) {
let comment = component.comment.comments[commentIndex]; 
 let iiaEaW = comment.id+ commentIndex;
let el6dUqu = eo('div','0rPVcS4RWqRu' + commentIndex+iiaEaW,null,`class`,`comment simple-card p-1 m-b-1`);
let elXtUf9 = ev('img','jLTff'+iiaEaW,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndFugP = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stDYAkr', cndFugP);
if (cndFugP) { 
let ela5_YH = eo('span','XPDff'+iiaEaW,null,`class`,`action-btns float-right`);
let cndhRKo = ! component.comment || component.comment.id != comment.id;
this.setState('st6DHKE', cndhRKo);
let cndND1B = component.comment && component.comment.id == comment.id;
this.setState('stl3rvh', cndND1B);
if (cndhRKo) { 
let eltuYum = eo('button','pxHff'+iiaEaW,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true}]},`type`,`button`);
let elDcWGO = eo('i','BgTff'+iiaEaW,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndND1B) { 
let elJBd11 = eo('button','1qOff'+iiaEaW,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndNgOE = ! component.comment || component.comment.id != comment.id;
this.setState('st210zI', cndNgOE);
if (cndNgOE) { 
let elZ7aNj = eo('button','sKiff'+iiaEaW,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index)}]},`type`,`button`);
let elaWT2m = eo('i','Sxvff'+iiaEaW,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let el9ZyAE = eo('div','UdVff'+iiaEaW,null,`class`,`d-inline-block`);
let elbUoAU = eo('div','Hyfff'+iiaEaW);
let elvbH3a = eo('span','e8Vff'+iiaEaW);
text(comment.createdBy.name);
ec('span');
ec('div');
let elkUkHP = eo('div','Wc4ff'+iiaEaW,null,`class`,`m-b-1`);
let cmpf9lX = this._lc('cIvfEnpvw', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiaEaW});
ec('div');
let cndqZJt = ! component.editMode;
this.setState('stUmuAx', cndqZJt);
if (cndqZJt) { 
let cmpVCVV = this._lc('c0WLzKZ4Y', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stUmuAx',insideLoop:true,index:"" +iiaEaW});
}let cnd1E9r = comment.record;
this.setState('stuWduY', cnd1E9r);
if (cnd1E9r) { 
let elaqKVV = eo('div','wxaff'+iiaEaW,null,`class`,`m-t-1`);
let cmpXFYj = this._lc('c9wxaolJI', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stuWduY',insideLoop:true,index:"" +iiaEaW});
ec('div');
}ec('div');
let cndP8b8 = ! Is.empty(comment.attachments);
this.setState('stf8qZH', cndP8b8);
if (cndP8b8) { 
let elNodWO = eo('div','F6iff'+iiaEaW);
let elUloDG = eo('h4','jH0ff'+iiaEaW,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let ii_vjn = 'cZb2oIg' + i;
let elRhT08 = eo('a','dau6uvOSRKoY' + i+iiaEaW+ii_vjn,null,`href`,`${attachment}`,`target`,`_blank`);
let cnd0C_n = isImage(attachment);
this.setState('styAFsk', cnd0C_n);
let cnd7ONY = !(cnd0C_n);
this.setState('stbUDQW', cnd7ONY);
if (cnd0C_n) { 
let elhMUgN = ev('img','JrAff'+iiaEaW+ii_vjn,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elUYqw4 = eo('button','H1xff'+iiaEaW+ii_vjn,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndGtVW = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stKoAn_', cndGtVW);
if (cndGtVW) { 
let elgUINb = eo('form','ayHff'+iiaEaW,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elgUINb.formHandler) {
                    window.cfrmdlr = elgUINb.formHandler = new FormHandler(elgUINb, component);
                } else {
                    window.cfrmdlr = elgUINb.formHandler;
                }
            let el2S4l_ = ev('input','8Wyff'+iiaEaW,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el2S4l_.value = fval(component.project.id);
let elLk5VD = ev('input','hVeff'+iiaEaW,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elLk5VD.value = fval(component.typeId);
let elmL8pD = ev('input','4CAff'+iiaEaW,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elmL8pD.value = fval(component.type);
let elZu9LQ = ev('input','ONmff'+iiaEaW,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elZu9LQ.value = fval(component.commentId);
let elv9YM3 = eo('textarea','E0Kff'+iiaEaW,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elgUINb.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elgUINb.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elv9YM3.value = fval(component.comment.comment);
ec('textarea');
let cnd5vsk = elgUINb.formHandler.getError(`comment`);
this.setState('st_iaOE', cnd5vsk);
if (cnd5vsk) { 
let elTBG4S = eo('div','DE2ff'+iiaEaW,null,`class`,`alert alert-danger`);
text(elgUINb.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cH4rcXllT', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el0oCkZ = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elybJVQ = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiaEaW});
let cndX6TX = ! component.isSending;
this.setState('stFakiM', cndX6TX);
if (cndX6TX) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('c1VHIehbO', {parent:component,state:'stFakiM',insideLoop:true,index:"" +iiaEaW});
}let elhO54H = eo('button','Wd9ff'+iiaEaW,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
}
let el30omt = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! el30omt.formHandler) {
                    window.cfrmdlr = el30omt.formHandler = new FormHandler(el30omt, component);
                } else {
                    window.cfrmdlr = el30omt.formHandler;
                }
            let elm39Gj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elm39Gj.value = fval(component.project.id);
let elS6A8i = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elS6A8i.value = fval(component.project.id);
let ely9fxR = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
ely9fxR.value = fval(component.typeId);
let el_HDGi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el_HDGi.value = fval(component.type);
let el_JJJt = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el30omt.formHandler.addError(`comment`, 'required', trans('validation.required'));}return el30omt.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
el_JJJt.value = fval(component.newComment);
ec('textarea');
let cndlvVz = el30omt.formHandler.getError(`comment`);
this.setState('stzz8Or', cndlvVz);
if (cndlvVz) { 
let elg1qQi = eo('div','xfWf',null,`class`,`alert alert-danger`);
text(el30omt.formHandler.getError(`comment`));
ec('div');
}let el7C278 = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cu5pROlG9', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elczQty = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elAqJMj = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cnddOS6 = ! component.isSending;
this.setState('stDX8Dc', cnddOS6);
if (cnddOS6) { 
component.recordAudio = this._lc('c8JxGAuiQ', {parent:component,attrs:{class:'audio-input'},state:'stDX8Dc'});
}ec('div');
let elBdh1C = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });