_Component({
                selector: 'project-comment-comments',
                c: 'ProjectCommentComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comment','project','user','index','editMode','confirmRemoving','submitComment','typeId','type','commentId','isSending','isValidForm','newComment'],
                children: {chkMbVfK6:'flk-time-ago',cAqAxVpsv:'markdown',ciqiZSMgA:'flk-audio-player',cEkjx5ZHe:'flk-file-input',cWBjnyw0P:'record-audio-input',cgql0noxp:'flk-file-input',cTdsfe67V:'record-audio-input'},
                render: function (component) {
                    let elv5xaQ = eo('div',null,null,`class`,`comment-comments`);
for (let commentIndex in component.comment.comments) {
let comment = component.comment.comments[commentIndex]; 
 let iiOnOh = comment.id+ commentIndex;
let el26huZ = eo('div','IKlmOhKXtu5y' + commentIndex+iiOnOh,null,`class`,`comment simple-card p-1 m-b-1`);
let elCVWlg = ev('img','Hvhff'+iiOnOh,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndt7hD = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stgeaQv', cndt7hD);
if (cndt7hD) { 
let elMD0UV = eo('span','7Xgff'+iiOnOh,null,`class`,`action-btns float-right`);
let cndniXG = ! component.comment || component.comment.id != comment.id;
this.setState('stAcJZ8', cndniXG);
let cndp3Hf = component.comment && component.comment.id == comment.id;
this.setState('stLKwIj', cndp3Hf);
if (cndniXG) { 
let elS47MO = eo('button','1f_ff'+iiOnOh,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true}]},`type`,`button`);
let elydgBi = eo('i','Neiff'+iiOnOh,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndp3Hf) { 
let el7JU3W = eo('button','Oq1ff'+iiOnOh,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndRaUS = ! component.comment || component.comment.id != comment.id;
this.setState('stX5pjg', cndRaUS);
if (cndRaUS) { 
let elXSqdF = eo('button','9Nqff'+iiOnOh,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index)}]},`type`,`button`);
let elvGT4M = eo('i','GPUff'+iiOnOh,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elpBIjq = eo('div','KMUff'+iiOnOh,null,`class`,`d-inline-block`);
let elwtMOM = eo('div','qzEff'+iiOnOh);
let elaB437 = eo('span','dqNff'+iiOnOh);
text(comment.createdBy.name);
ec('span');
ec('div');
let elztGk7 = eo('div','QrOff'+iiOnOh,null,`class`,`m-b-1`);
let cmpGN0e = this._lc('chkMbVfK6', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiOnOh});
ec('div');
let cndJ1xh = ! component.editMode;
this.setState('ste6gZ1', cndJ1xh);
if (cndJ1xh) { 
let cmpEMSH = this._lc('cAqAxVpsv', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'ste6gZ1',insideLoop:true,index:"" +iiOnOh});
}let cndQtPf = comment.record;
this.setState('stcoQfm', cndQtPf);
if (cndQtPf) { 
let elQY3pX = eo('div','OiDff'+iiOnOh,null,`class`,`m-t-1`);
let cmp8j2i = this._lc('ciqiZSMgA', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stcoQfm',insideLoop:true,index:"" +iiOnOh});
ec('div');
}ec('div');
let cndHU2q = ! Is.empty(comment.attachments);
this.setState('st7kBcf', cndHU2q);
if (cndHU2q) { 
let elI2e2R = eo('div','K4Off'+iiOnOh);
let el5TnE4 = eo('h4','rEpff'+iiOnOh,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iihgar = '4JlVbiz' + i;
let elH15Xe = eo('a','8DCleKpaRc8A' + i+iiOnOh+iihgar,null,`href`,`${attachment}`,`target`,`_blank`);
let cndq2xX = isImage(attachment);
this.setState('stEXTfb', cndq2xX);
let cnd7QHl = !(cndq2xX);
this.setState('st_Lezw', cnd7QHl);
if (cndq2xX) { 
let eleFbv8 = ev('img','osBff'+iiOnOh+iihgar,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elGyCY6 = eo('button','2Whff'+iiOnOh+iihgar,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndNpjs = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('st0CjAb', cndNpjs);
if (cndNpjs) { 
let elsp_gs = eo('form','Cliff'+iiOnOh,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elsp_gs.formHandler) {
                    window.cfrmdlr = elsp_gs.formHandler = new FormHandler(elsp_gs, component);
                } else {
                    window.cfrmdlr = elsp_gs.formHandler;
                }
            let elefB6j = ev('input','mcrff'+iiOnOh,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elefB6j.value = fval(component.project.id);
let elN5Qzn = ev('input','WmWff'+iiOnOh,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elN5Qzn.value = fval(component.typeId);
let el6wrU_ = ev('input','1qSff'+iiOnOh,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el6wrU_.value = fval(component.type);
let elALN0B = ev('input','Po1ff'+iiOnOh,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elALN0B.value = fval(component.commentId);
let elone88 = eo('textarea','Lx_ff'+iiOnOh,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elsp_gs.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elsp_gs.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elone88.value = fval(component.comment.comment);
ec('textarea');
let cndXlfG = elsp_gs.formHandler.getError(`comment`);
this.setState('stPODKK', cndXlfG);
if (cndXlfG) { 
let elolpAf = eo('div','4zLff'+iiOnOh,null,`class`,`alert alert-danger`);
text(elsp_gs.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cEkjx5ZHe', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el_k_9k = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elFTMMa = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiOnOh});
let cndD444 = ! component.isSending;
this.setState('stQQWSE', cndD444);
if (cndD444) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cWBjnyw0P', {parent:component,state:'stQQWSE',insideLoop:true,index:"" +iiOnOh});
}let elqj5V3 = eo('button','y4vff'+iiOnOh,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
}
let elBzYGU = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elBzYGU.formHandler) {
                    window.cfrmdlr = elBzYGU.formHandler = new FormHandler(elBzYGU, component);
                } else {
                    window.cfrmdlr = elBzYGU.formHandler;
                }
            let elJe5zn = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elJe5zn.value = fval(component.project.id);
let elGQ_bj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elGQ_bj.value = fval(component.project.id);
let elPFtrQ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elPFtrQ.value = fval(component.typeId);
let elCBA9q = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elCBA9q.value = fval(component.type);
let elSAcog = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elBzYGU.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elBzYGU.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elSAcog.value = fval(component.newComment);
ec('textarea');
let cnd_ORT = elBzYGU.formHandler.getError(`comment`);
this.setState('stmjtHA', cnd_ORT);
if (cnd_ORT) { 
let elKMRt8 = eo('div','HdXf',null,`class`,`alert alert-danger`);
text(elBzYGU.formHandler.getError(`comment`));
ec('div');
}let elfUZAZ = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cgql0noxp', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elLZxXh = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elw4zK2 = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndeXai = ! component.isSending;
this.setState('st0GHZG', cndeXai);
if (cndeXai) { 
component.recordAudio = this._lc('cTdsfe67V', {parent:component,attrs:{class:'audio-input'},state:'st0GHZG'});
}ec('div');
let el0ho8W = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });