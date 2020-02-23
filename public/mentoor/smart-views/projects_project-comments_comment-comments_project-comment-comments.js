_Component({
                selector: 'project-comment-comments',
                c: 'ProjectCommentComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comment','project','user','index','editMode','confirmRemoving','submitComment','typeId','type','commentId','isSending','isValidForm','newComment'],
                children: {cm95_25ux:'flk-time-ago',cpIk76x0Z:'markdown',cqXrf95vK:'flk-audio-player',cgRMdSis6:'flk-file-input',ch64cn0n4:'record-audio-input',cKW99e0mv:'flk-file-input',csMuQRavD:'record-audio-input'},
                render: function (component) {
                    let elD9YsA = eo('div',null,null,`class`,`comment-comments`);
for (let commentIndex in component.comment.comments) {
let comment = component.comment.comments[commentIndex]; 
 let iiW4KD = comment.id+ commentIndex;
let elrU5YA = eo('div','lyaqX8vUyw3k' + commentIndex+iiW4KD,null,`class`,`comment simple-card p-1 m-b-1`);
let elB4njx = ev('img','KoFff'+iiW4KD,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndktEM = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stx9gs9', cndktEM);
if (cndktEM) { 
let elyC8tm = eo('span','aZ4ff'+iiW4KD,null,`class`,`action-btns float-right`);
let cndGsbS = ! component.comment || component.comment.id != comment.id;
this.setState('sttk_y6', cndGsbS);
let cndPpuw = component.comment && component.comment.id == comment.id;
this.setState('stCpS8C', cndPpuw);
if (cndGsbS) { 
let elL_JLh = eo('button','RRnff'+iiW4KD,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true}]},`type`,`button`);
let ele3hlz = eo('i','xzsff'+iiW4KD,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndPpuw) { 
let el6fYX0 = eo('button','OdBff'+iiW4KD,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndrqm2 = ! component.comment || component.comment.id != comment.id;
this.setState('sttS27V', cndrqm2);
if (cndrqm2) { 
let elJYl4O = eo('button','iKoff'+iiW4KD,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index)}]},`type`,`button`);
let elikhXF = eo('i','PaKff'+iiW4KD,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let eluJ0mg = eo('div','SPHff'+iiW4KD,null,`class`,`d-inline-block`);
let elYOWIr = eo('div','Ybbff'+iiW4KD);
let elzJwK0 = eo('span','hV0ff'+iiW4KD);
text(comment.createdBy.name);
ec('span');
ec('div');
let elKhjvn = eo('div','F7Off'+iiW4KD,null,`class`,`m-b-1`);
let cmpJrxH = this._lc('cm95_25ux', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiW4KD});
ec('div');
let cndIKcU = ! component.editMode;
this.setState('stWCWbH', cndIKcU);
if (cndIKcU) { 
let cmpkyUv = this._lc('cpIk76x0Z', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stWCWbH',insideLoop:true,index:"" +iiW4KD});
}let cndVyGL = comment.record;
this.setState('stxLqmK', cndVyGL);
if (cndVyGL) { 
let el77dr5 = eo('div','TeRff'+iiW4KD,null,`class`,`m-t-1`);
let cmpHrHA = this._lc('cqXrf95vK', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stxLqmK',insideLoop:true,index:"" +iiW4KD});
ec('div');
}ec('div');
let cndt4rq = ! Is.empty(comment.attachments);
this.setState('stTMDDK', cndt4rq);
if (cndt4rq) { 
let elNlkvd = eo('div','G_off'+iiW4KD);
let elS7Tu_ = eo('h4','PcPff'+iiW4KD,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iivHRH = 'aGb7ZhD' + i;
let elOfXy6 = eo('a','3QN3mFBcBQwS' + i+iiW4KD+iivHRH,null,`href`,`${attachment}`,`target`,`_blank`);
let cndQbjO = isImage(attachment);
this.setState('stZfx34', cndQbjO);
let cnd4DUy = !(cndQbjO);
this.setState('stcTSOC', cnd4DUy);
if (cndQbjO) { 
let el13sY9 = ev('img','Qr5ff'+iiW4KD+iivHRH,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elDnwVn = eo('button','puuff'+iiW4KD+iivHRH,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndouzi = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stPS8Ss', cndouzi);
if (cndouzi) { 
let eluZnNt = eo('form','1d0ff'+iiW4KD,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! eluZnNt.formHandler) {
                    window.cfrmdlr = eluZnNt.formHandler = new FormHandler(eluZnNt, component);
                } else {
                    window.cfrmdlr = eluZnNt.formHandler;
                }
            let eljMXbp = ev('input','_63ff'+iiW4KD,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eljMXbp.value = fval(component.project.id);
let elSsrYn = ev('input','CqUff'+iiW4KD,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elSsrYn.value = fval(component.typeId);
let elAgRFB = ev('input','EjLff'+iiW4KD,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elAgRFB.value = fval(component.type);
let ellhMCC = ev('input','Xvvff'+iiW4KD,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
ellhMCC.value = fval(component.commentId);
let elWQL0N = eo('textarea','QM0ff'+iiW4KD,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluZnNt.formHandler.addError(`comment`, 'required', trans('validation.required'));}return eluZnNt.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elWQL0N.value = fval(component.comment.comment);
ec('textarea');
let cndP80F = eluZnNt.formHandler.getError(`comment`);
this.setState('stAIiqq', cndP80F);
if (cndP80F) { 
let elOy3YB = eo('div','f18ff'+iiW4KD,null,`class`,`alert alert-danger`);
text(eluZnNt.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cgRMdSis6', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elV0gfZ = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elE_ZZM = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiW4KD});
let cndaotI = ! component.isSending;
this.setState('sthqRrY', cndaotI);
if (cndaotI) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('ch64cn0n4', {parent:component,state:'sthqRrY',insideLoop:true,index:"" +iiW4KD});
}let elyIX9b = eo('button','8KAff'+iiW4KD,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
}
let elc6Wtw = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elc6Wtw.formHandler) {
                    window.cfrmdlr = elc6Wtw.formHandler = new FormHandler(elc6Wtw, component);
                } else {
                    window.cfrmdlr = elc6Wtw.formHandler;
                }
            let el78hLF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el78hLF.value = fval(component.project.id);
let el52qWm = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el52qWm.value = fval(component.project.id);
let elFX9zE = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elFX9zE.value = fval(component.typeId);
let elBDnm3 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elBDnm3.value = fval(component.type);
let elkesLH = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elc6Wtw.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elc6Wtw.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elkesLH.value = fval(component.newComment);
ec('textarea');
let cndpzGU = elc6Wtw.formHandler.getError(`comment`);
this.setState('st_WlZ9', cndpzGU);
if (cndpzGU) { 
let eld75Td = eo('div','wRnf',null,`class`,`alert alert-danger`);
text(elc6Wtw.formHandler.getError(`comment`));
ec('div');
}let el263_2 = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cKW99e0mv', {parent:component,props:{multiple:true},content:(flkFileInput) => {let eljdEIH = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elatX3H = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndWoDX = ! component.isSending;
this.setState('stIcjn4', cndWoDX);
if (cndWoDX) { 
component.recordAudio = this._lc('csMuQRavD', {parent:component,attrs:{class:'audio-input'},state:'stIcjn4'});
}ec('div');
let elHaZ8h = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });