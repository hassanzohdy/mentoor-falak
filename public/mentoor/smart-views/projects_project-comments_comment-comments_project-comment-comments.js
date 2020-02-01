_Component({
                selector: 'project-comment-comments',
                c: 'ProjectCommentComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comment','project','user','index','editMode','confirmRemoving','submitComment','typeId','type','commentId','isSending','isValidForm','newComment'],
                children: {cJjMinXOc:'flk-time-ago',cFFSw_WpL:'markdown',cFX22UNyv:'flk-audio-player',cQwPFUeJj:'flk-file-input',c9442REi8:'record-audio-input',cYH6i03i8:'flk-file-input',cyaICXo5O:'record-audio-input'},
                render: function (component) {
                    let el_loFG = eo('div',null,null,`class`,`comment-comments`);
for (let commentIndex in component.comment.comments) {
let comment = component.comment.comments[commentIndex]; 
 let iioCdL = comment.id+ commentIndex;
let elq0xp8 = eo('div','602_0uF2nNxa' + commentIndex+iioCdL,null,`class`,`comment simple-card p-1 m-b-1`);
let elybK6m = ev('img','ZMaff'+iioCdL,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndm91p = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stVDSB8', cndm91p);
if (cndm91p) { 
let el9kPBH = eo('span','zoVff'+iioCdL,null,`class`,`action-btns float-right`);
let cndWoCM = ! component.comment || component.comment.id != comment.id;
this.setState('stE6cBS', cndWoCM);
let cndwP0H = component.comment && component.comment.id == comment.id;
this.setState('st87isd', cndwP0H);
if (cndWoCM) { 
let el7AEoj = eo('button','xpgff'+iioCdL,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true}]},`type`,`button`);
let elDMqKi = eo('i','vreff'+iioCdL,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndwP0H) { 
let eluYBRU = eo('button','3R0ff'+iioCdL,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cnd0ome = ! component.comment || component.comment.id != comment.id;
this.setState('st1If3X', cnd0ome);
if (cnd0ome) { 
let elMbLr7 = eo('button','1oNff'+iioCdL,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index)}]},`type`,`button`);
let elB9M15 = eo('i','HZXff'+iioCdL,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let el1TUnb = eo('div','bcBff'+iioCdL,null,`class`,`d-inline-block`);
let elPYQqs = eo('div','xp5ff'+iioCdL);
let elv3_Tq = eo('span','cx5ff'+iioCdL);
text(comment.createdBy.name);
ec('span');
ec('div');
let elOMlz2 = eo('div','lbCff'+iioCdL,null,`class`,`m-b-1`);
let cmpM3QE = this._lc('cJjMinXOc', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iioCdL});
ec('div');
let cndW_n1 = ! component.editMode;
this.setState('stqRMFR', cndW_n1);
if (cndW_n1) { 
let cmpnaUy = this._lc('cFFSw_WpL', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stqRMFR',insideLoop:true,index:"" +iioCdL});
}let cndl0M7 = comment.record;
this.setState('stegzdW', cndl0M7);
if (cndl0M7) { 
let eluOFRi = eo('div','o7Eff'+iioCdL,null,`class`,`m-t-1`);
let cmpHks1 = this._lc('cFX22UNyv', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stegzdW',insideLoop:true,index:"" +iioCdL});
ec('div');
}ec('div');
let cndwqjD = ! Is.empty(comment.attachments);
this.setState('stmU2Hu', cndwqjD);
if (cndwqjD) { 
let elK9oj6 = eo('div','oIsff'+iioCdL);
let elaKa7T = eo('h4','FOFff'+iioCdL,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiC6HY = 'pK5KwLI' + i;
let elMdkcW = eo('a','8JHXX79C2f8B' + i+iioCdL+iiC6HY,null,`href`,`${attachment}`,`target`,`_blank`);
let cndTqYH = isImage(attachment);
this.setState('st0I9KO', cndTqYH);
let cndbwU1 = !(cndTqYH);
this.setState('stUxRx5', cndbwU1);
if (cndTqYH) { 
let elbrTE7 = ev('img','rikff'+iioCdL+iiC6HY,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elqAYpc = eo('button','ITxff'+iioCdL+iiC6HY,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndPtnY = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stAgRZu', cndPtnY);
if (cndPtnY) { 
let elfbR4t = eo('form','QLAff'+iioCdL,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elfbR4t.formHandler) {
                    window.cfrmdlr = elfbR4t.formHandler = new FormHandler(elfbR4t, component);
                } else {
                    window.cfrmdlr = elfbR4t.formHandler;
                }
            let elueo4Z = ev('input','zpZff'+iioCdL,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elueo4Z.value = fval(component.project.id);
let elcFNc5 = ev('input','JBqff'+iioCdL,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elcFNc5.value = fval(component.typeId);
let elmQLoV = ev('input','pnkff'+iioCdL,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elmQLoV.value = fval(component.type);
let ela0zCJ = ev('input','N5xff'+iioCdL,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
ela0zCJ.value = fval(component.commentId);
let elIfNsI = eo('textarea','qHWff'+iioCdL,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfbR4t.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elfbR4t.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elIfNsI.value = fval(component.comment.comment);
ec('textarea');
let cndzYec = elfbR4t.formHandler.getError(`comment`);
this.setState('stCwAGa', cndzYec);
if (cndzYec) { 
let elbO0sv = eo('div','DRwff'+iioCdL,null,`class`,`alert alert-danger`);
text(elfbR4t.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cQwPFUeJj', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elPx3QP = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elACs8_ = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iioCdL});
let cnd2goK = ! component.isSending;
this.setState('stdVB6J', cnd2goK);
if (cnd2goK) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('c9442REi8', {parent:component,state:'stdVB6J',insideLoop:true,index:"" +iioCdL});
}let el5EceG = eo('button','dSPff'+iioCdL,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
}
let elQ2Gaz = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elQ2Gaz.formHandler) {
                    window.cfrmdlr = elQ2Gaz.formHandler = new FormHandler(elQ2Gaz, component);
                } else {
                    window.cfrmdlr = elQ2Gaz.formHandler;
                }
            let ellTmF5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
ellTmF5.value = fval(component.project.id);
let elO5_U_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elO5_U_.value = fval(component.project.id);
let elJEcg3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elJEcg3.value = fval(component.typeId);
let elyOhAq = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elyOhAq.value = fval(component.type);
let elypJjU = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ2Gaz.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elQ2Gaz.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elypJjU.value = fval(component.newComment);
ec('textarea');
let cndhlBz = elQ2Gaz.formHandler.getError(`comment`);
this.setState('stLeDwK', cndhlBz);
if (cndhlBz) { 
let elVMR_K = eo('div','OxDf',null,`class`,`alert alert-danger`);
text(elQ2Gaz.formHandler.getError(`comment`));
ec('div');
}let eltj4JU = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cYH6i03i8', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elYLRcL = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elWyGCf = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndyUD1 = ! component.isSending;
this.setState('styXNDc', cndyUD1);
if (cndyUD1) { 
component.recordAudio = this._lc('cyaICXo5O', {parent:component,attrs:{class:'audio-input'},state:'styXNDc'});
}ec('div');
let el7V074 = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });