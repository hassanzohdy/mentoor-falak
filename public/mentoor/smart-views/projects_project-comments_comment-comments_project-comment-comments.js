_Component({
                selector: 'project-comment-comments',
                c: 'ProjectCommentComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comment','project','user','index','editMode','confirmRemoving','submitComment','typeId','type','commentId','isSending','isValidForm','newComment'],
                children: {cXWn9_2kd:'flk-time-ago',crQxJLbxD:'markdown',c_XvCUVdZ:'flk-audio-player',clCNfChkS:'flk-file-input',ced9Ja2Ig:'record-audio-input',cEAMuRVcQ:'flk-file-input',cQDGH22Zk:'record-audio-input'},
                render: function (component) {
                    let ell8i1d = eo('div',null,null,`class`,`comment-comments`);
for (let commentIndex in component.comment.comments) {
let comment = component.comment.comments[commentIndex]; 
 let iiuQoY = comment.id+ commentIndex;
let el8W019 = eo('div','ohBD1jY_EyWj' + commentIndex+iiuQoY,null,`class`,`comment simple-card p-1 m-b-1`);
let eldUsWg = ev('img','Upwff'+iiuQoY,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cnd300W = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('steiXI9', cnd300W);
if (cnd300W) { 
let elyiXV3 = eo('span','j8uff'+iiuQoY,null,`class`,`action-btns float-right`);
let cndQHIH = ! component.comment || component.comment.id != comment.id;
this.setState('stCi1nU', cndQHIH);
let cndKWUZ = component.comment && component.comment.id == comment.id;
this.setState('stejSFd', cndKWUZ);
if (cndQHIH) { 
let elFp5e3 = eo('button','z_Pff'+iiuQoY,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true}]},`type`,`button`);
let el4Egh_ = eo('i','sxlff'+iiuQoY,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndKWUZ) { 
let elsajCl = eo('button','rUwff'+iiuQoY,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndlrHM = ! component.comment || component.comment.id != comment.id;
this.setState('stU4P2o', cndlrHM);
if (cndlrHM) { 
let el3nKTJ = eo('button','DoCff'+iiuQoY,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index)}]},`type`,`button`);
let elkmwqk = eo('i','Ui5ff'+iiuQoY,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elw110n = eo('div','lJWff'+iiuQoY,null,`class`,`d-inline-block`);
let elgcFZK = eo('div','SC_ff'+iiuQoY);
let eln3cBq = eo('span','8Mtff'+iiuQoY);
text(comment.createdBy.name);
ec('span');
ec('div');
let el2Dd3V = eo('div','V5Tff'+iiuQoY,null,`class`,`m-b-1`);
let cmpD0rO = this._lc('cXWn9_2kd', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiuQoY});
ec('div');
let cndvCwS = ! component.editMode;
this.setState('stCuePG', cndvCwS);
if (cndvCwS) { 
let cmpDIUJ = this._lc('crQxJLbxD', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stCuePG',insideLoop:true,index:"" +iiuQoY});
}let cndK6Ac = comment.record;
this.setState('stfqYYu', cndK6Ac);
if (cndK6Ac) { 
let elYfNv4 = eo('div','Wh6ff'+iiuQoY,null,`class`,`m-t-1`);
let cmp6w0p = this._lc('c_XvCUVdZ', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stfqYYu',insideLoop:true,index:"" +iiuQoY});
ec('div');
}ec('div');
let cndZtgC = ! Is.empty(comment.attachments);
this.setState('stc1QEr', cndZtgC);
if (cndZtgC) { 
let elLok5K = eo('div','r0Vff'+iiuQoY);
let elHjYvw = eo('h4','nCzff'+iiuQoY,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiaq85 = 'gUZ_PC6' + i;
let elW3pbD = eo('a','prEqdZaa38ls' + i+iiuQoY+iiaq85,null,`href`,`${attachment}`,`target`,`_blank`);
let cndWT0C = isImage(attachment);
this.setState('stx7yDG', cndWT0C);
let cndXPcO = !(cndWT0C);
this.setState('st9iep8', cndXPcO);
if (cndWT0C) { 
let elIodsS = ev('img','VAjff'+iiuQoY+iiaq85,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elNEx8e = eo('button','4AAff'+iiuQoY+iiaq85,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndzdRy = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stZEPk5', cndzdRy);
if (cndzdRy) { 
let elRKnqr = eo('form','9Dkff'+iiuQoY,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elRKnqr.formHandler) {
                    window.cfrmdlr = elRKnqr.formHandler = new FormHandler(elRKnqr, component);
                } else {
                    window.cfrmdlr = elRKnqr.formHandler;
                }
            let elHBEGY = ev('input','6_sff'+iiuQoY,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elHBEGY.value = fval(component.project.id);
let elIjLwP = ev('input','Fh2ff'+iiuQoY,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elIjLwP.value = fval(component.typeId);
let el9n6JZ = ev('input','6loff'+iiuQoY,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el9n6JZ.value = fval(component.type);
let elOHmTl = ev('input','9PYff'+iiuQoY,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elOHmTl.value = fval(component.commentId);
let el85qqi = eo('textarea','SMgff'+iiuQoY,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elRKnqr.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elRKnqr.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
el85qqi.value = fval(component.comment.comment);
ec('textarea');
let cndHlUe = elRKnqr.formHandler.getError(`comment`);
this.setState('stSFTLM', cndHlUe);
if (cndHlUe) { 
let elke2ns = eo('div','nrWff'+iiuQoY,null,`class`,`alert alert-danger`);
text(elRKnqr.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('clCNfChkS', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elaLfCh = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elt2ubK = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiuQoY});
let cnd8A2l = ! component.isSending;
this.setState('stHpyEd', cnd8A2l);
if (cnd8A2l) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('ced9Ja2Ig', {parent:component,state:'stHpyEd',insideLoop:true,index:"" +iiuQoY});
}let elquJjD = eo('button','PGrff'+iiuQoY,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
}
let elX4SPS = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elX4SPS.formHandler) {
                    window.cfrmdlr = elX4SPS.formHandler = new FormHandler(elX4SPS, component);
                } else {
                    window.cfrmdlr = elX4SPS.formHandler;
                }
            let eleGPTk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eleGPTk.value = fval(component.project.id);
let elrwYpx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elrwYpx.value = fval(component.project.id);
let elF_o4w = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elF_o4w.value = fval(component.typeId);
let elADaYy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elADaYy.value = fval(component.type);
let elaD7Wx = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elX4SPS.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elX4SPS.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elaD7Wx.value = fval(component.newComment);
ec('textarea');
let cndYK5M = elX4SPS.formHandler.getError(`comment`);
this.setState('stXCprG', cndYK5M);
if (cndYK5M) { 
let elaz6Be = eo('div','WUhf',null,`class`,`alert alert-danger`);
text(elX4SPS.formHandler.getError(`comment`));
ec('div');
}let eleUq4m = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cEAMuRVcQ', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elf0cR3 = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elKtQOt = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndrBac = ! component.isSending;
this.setState('stwwn4S', cndrBac);
if (cndrBac) { 
component.recordAudio = this._lc('cQDGH22Zk', {parent:component,attrs:{class:'audio-input'},state:'stwwn4S'});
}ec('div');
let el1CoWK = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });