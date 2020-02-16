_Component({
                selector: 'project-comment-comments',
                c: 'ProjectCommentComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comment','project','user','index','editMode','confirmRemoving','submitComment','typeId','type','commentId','isSending','isValidForm','newComment'],
                children: {cCt6OQuTi:'flk-time-ago',c6QDUTo5T:'markdown',cWSKaJCfo:'flk-audio-player',cAOStT9o3:'flk-file-input',c7BxHgdbH:'record-audio-input',cX0EIC8oE:'flk-file-input',cZFoVGfhk:'record-audio-input'},
                render: function (component) {
                    let elqly8f = eo('div',null,null,`class`,`comment-comments`);
for (let commentIndex in component.comment.comments) {
let comment = component.comment.comments[commentIndex]; 
 let iiaxtp = comment.id+ commentIndex;
let eluQbK1 = eo('div','VsOQbYZN3SbF' + commentIndex+iiaxtp,null,`class`,`comment simple-card p-1 m-b-1`);
let elWDXTe = ev('img','qNIff'+iiaxtp,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndr7iV = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stQDn74', cndr7iV);
if (cndr7iV) { 
let elUXFoM = eo('span','axIff'+iiaxtp,null,`class`,`action-btns float-right`);
let cndvPBI = ! component.comment || component.comment.id != comment.id;
this.setState('stMDp0Y', cndvPBI);
let cndH4Ov = component.comment && component.comment.id == comment.id;
this.setState('stqspwK', cndH4Ov);
if (cndvPBI) { 
let elFQOvc = eo('button','nhnff'+iiaxtp,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true}]},`type`,`button`);
let elBKBTR = eo('i','pVDff'+iiaxtp,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndH4Ov) { 
let elDI4ht = eo('button','1Liff'+iiaxtp,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndf2i7 = ! component.comment || component.comment.id != comment.id;
this.setState('st_lUH5', cndf2i7);
if (cndf2i7) { 
let elf9yEl = eo('button','yq9ff'+iiaxtp,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index)}]},`type`,`button`);
let elYpiPk = eo('i','cIeff'+iiaxtp,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let el_X6vc = eo('div','YHGff'+iiaxtp,null,`class`,`d-inline-block`);
let el4Kflo = eo('div','sS4ff'+iiaxtp);
let elMjYqE = eo('span','40Gff'+iiaxtp);
text(comment.createdBy.name);
ec('span');
ec('div');
let eljGzaW = eo('div','OeMff'+iiaxtp,null,`class`,`m-b-1`);
let cmp2DLn = this._lc('cCt6OQuTi', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiaxtp});
ec('div');
let cndLWH4 = ! component.editMode;
this.setState('stq89i8', cndLWH4);
if (cndLWH4) { 
let cmp8nlT = this._lc('c6QDUTo5T', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stq89i8',insideLoop:true,index:"" +iiaxtp});
}let cnd0Iil = comment.record;
this.setState('stJh81k', cnd0Iil);
if (cnd0Iil) { 
let el4BE43 = eo('div','VAFff'+iiaxtp,null,`class`,`m-t-1`);
let cmpQb4y = this._lc('cWSKaJCfo', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stJh81k',insideLoop:true,index:"" +iiaxtp});
ec('div');
}ec('div');
let cndGW2W = ! Is.empty(comment.attachments);
this.setState('stSUCaT', cndGW2W);
if (cndGW2W) { 
let eldeNtU = eo('div','VHtff'+iiaxtp);
let elw_87s = eo('h4','MnOff'+iiaxtp,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiSnER = 'en677uf' + i;
let elzZVpL = eo('a','GHQ7KltwABtP' + i+iiaxtp+iiSnER,null,`href`,`${attachment}`,`target`,`_blank`);
let cnd_L7F = isImage(attachment);
this.setState('sttyywb', cnd_L7F);
let cndHiFr = !(cnd_L7F);
this.setState('stk9hzM', cndHiFr);
if (cnd_L7F) { 
let elOejkB = ev('img','edGff'+iiaxtp+iiSnER,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elO2OUx = eo('button','3l6ff'+iiaxtp+iiSnER,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cnduZ_O = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('styySuL', cnduZ_O);
if (cnduZ_O) { 
let elk9isS = eo('form','VHbff'+iiaxtp,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elk9isS.formHandler) {
                    window.cfrmdlr = elk9isS.formHandler = new FormHandler(elk9isS, component);
                } else {
                    window.cfrmdlr = elk9isS.formHandler;
                }
            let el83eva = ev('input','CQNff'+iiaxtp,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el83eva.value = fval(component.project.id);
let el5yp_K = ev('input','o_kff'+iiaxtp,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el5yp_K.value = fval(component.typeId);
let elXi7TM = ev('input','yhqff'+iiaxtp,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elXi7TM.value = fval(component.type);
let elnGBMQ = ev('input','uUgff'+iiaxtp,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elnGBMQ.value = fval(component.commentId);
let elTgyIz = eo('textarea','ABVff'+iiaxtp,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elk9isS.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elk9isS.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elTgyIz.value = fval(component.comment.comment);
ec('textarea');
let cndZ7Ij = elk9isS.formHandler.getError(`comment`);
this.setState('stCGnqk', cndZ7Ij);
if (cndZ7Ij) { 
let elNMApm = eo('div','Aw5ff'+iiaxtp,null,`class`,`alert alert-danger`);
text(elk9isS.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cAOStT9o3', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elYcloU = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let el2wsH6 = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiaxtp});
let cndND96 = ! component.isSending;
this.setState('sthX3WD', cndND96);
if (cndND96) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('c7BxHgdbH', {parent:component,state:'sthX3WD',insideLoop:true,index:"" +iiaxtp});
}let elPQLgM = eo('button','9MEff'+iiaxtp,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
}
let elUbXYm = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elUbXYm.formHandler) {
                    window.cfrmdlr = elUbXYm.formHandler = new FormHandler(elUbXYm, component);
                } else {
                    window.cfrmdlr = elUbXYm.formHandler;
                }
            let el6hUBH = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el6hUBH.value = fval(component.project.id);
let elR3OYX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elR3OYX.value = fval(component.project.id);
let elNLfuA = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elNLfuA.value = fval(component.typeId);
let elo9YVl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elo9YVl.value = fval(component.type);
let elArMAJ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elUbXYm.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elUbXYm.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elArMAJ.value = fval(component.newComment);
ec('textarea');
let cnd2WCh = elUbXYm.formHandler.getError(`comment`);
this.setState('ste_eSI', cnd2WCh);
if (cnd2WCh) { 
let el81lkq = eo('div','bblf',null,`class`,`alert alert-danger`);
text(elUbXYm.formHandler.getError(`comment`));
ec('div');
}let eldxSJa = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cX0EIC8oE', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el3cO_U = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elY0nmz = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndjBQW = ! component.isSending;
this.setState('stvqHm_', cndjBQW);
if (cndjBQW) { 
component.recordAudio = this._lc('cZFoVGfhk', {parent:component,attrs:{class:'audio-input'},state:'stvqHm_'});
}ec('div');
let elttlgi = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });