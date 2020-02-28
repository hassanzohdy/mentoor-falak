_Component({
                selector: 'project-comment-comments',
                c: 'ProjectCommentComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comment','project','user','index','editMode','confirmRemoving','submitComment','typeId','type','commentId','isSending','isValidForm','newComment'],
                children: {croxizeEO:'flk-time-ago',csZC4CwJW:'markdown',c_Bqvv_Dm:'flk-audio-player',cILEC58Ur:'flk-file-input',crRAvtJqV:'record-audio-input',cSAkOb2RH:'flk-file-input',czgNv6E2n:'record-audio-input'},
                render: function (component) {
                    let elqzNpJ = eo('div',null,null,`class`,`comment-comments`);
for (let commentIndex in component.comment.comments) {
let comment = component.comment.comments[commentIndex]; 
 let iihkG4 = comment.id+ commentIndex;
let elXNHRX = eo('div','zwixMTfRobea' + commentIndex+iihkG4,null,`class`,`comment simple-card p-1 m-b-1`);
let elvITgH = ev('img','pTsff'+iihkG4,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndGupV = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stXM7sl', cndGupV);
if (cndGupV) { 
let elhMJD9 = eo('span','lcrff'+iihkG4,null,`class`,`action-btns float-right`);
let cnd3jAH = ! component.comment || component.comment.id != comment.id;
this.setState('stbOFKo', cnd3jAH);
let cndq3vA = component.comment && component.comment.id == comment.id;
this.setState('st8v4by', cndq3vA);
if (cnd3jAH) { 
let el6C9Ol = eo('button','_Cdff'+iihkG4,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true}]},`type`,`button`);
let elSioJL = eo('i','gGMff'+iihkG4,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndq3vA) { 
let elG9E1o = eo('button','_f6ff'+iihkG4,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndx03g = ! component.comment || component.comment.id != comment.id;
this.setState('stiTG1K', cndx03g);
if (cndx03g) { 
let el8BbVo = eo('button','onuff'+iihkG4,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index)}]},`type`,`button`);
let elvqzK6 = eo('i','Rz6ff'+iihkG4,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elon83r = eo('div','Ky1ff'+iihkG4,null,`class`,`d-inline-block`);
let elQ5aQm = eo('div','i1_ff'+iihkG4);
let el_8Li5 = eo('span','zJZff'+iihkG4);
text(comment.createdBy.name);
ec('span');
ec('div');
let elYsnw5 = eo('div','U0zff'+iihkG4,null,`class`,`m-b-1`);
let cmp0O4b = this._lc('croxizeEO', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iihkG4});
ec('div');
let cndHrZe = ! component.editMode;
this.setState('stAuaiQ', cndHrZe);
if (cndHrZe) { 
let cmpXgI1 = this._lc('csZC4CwJW', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stAuaiQ',insideLoop:true,index:"" +iihkG4});
}let cndxuEH = comment.record;
this.setState('st3IkL2', cndxuEH);
if (cndxuEH) { 
let elxDgzW = eo('div','ZBxff'+iihkG4,null,`class`,`m-t-1`);
let cmpuZhQ = this._lc('c_Bqvv_Dm', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'st3IkL2',insideLoop:true,index:"" +iihkG4});
ec('div');
}ec('div');
let cnd9JoP = ! Is.empty(comment.attachments);
this.setState('st571s4', cnd9JoP);
if (cnd9JoP) { 
let elVNe4S = eo('div','JT9ff'+iihkG4);
let eljgcYV = eo('h4','ZuAff'+iihkG4,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let ii4ZQi = 'lQZrsHe' + i;
let el0AnMU = eo('a','PjNoZ0WxilM2' + i+iihkG4+ii4ZQi,null,`href`,`${attachment}`,`target`,`_blank`);
let cndgr6z = isImage(attachment);
this.setState('staz6wv', cndgr6z);
let cnd1rgg = !(cndgr6z);
this.setState('stlGJG9', cnd1rgg);
if (cndgr6z) { 
let elCzQvJ = ev('img','rnTff'+iihkG4+ii4ZQi,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let el4NeTk = eo('button','curff'+iihkG4+ii4ZQi,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndWpyQ = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stlFYom', cndWpyQ);
if (cndWpyQ) { 
let elMm_0T = eo('form','pnRff'+iihkG4,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elMm_0T.formHandler) {
                    window.cfrmdlr = elMm_0T.formHandler = new FormHandler(elMm_0T, component);
                } else {
                    window.cfrmdlr = elMm_0T.formHandler;
                }
            let elSgFHT = ev('input','qLpff'+iihkG4,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elSgFHT.value = fval(component.project.id);
let elClm56 = ev('input','JcFff'+iihkG4,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elClm56.value = fval(component.typeId);
let el92boB = ev('input','MWJff'+iihkG4,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el92boB.value = fval(component.type);
let elpJGnt = ev('input','yLTff'+iihkG4,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elpJGnt.value = fval(component.commentId);
let elCjqRh = eo('textarea','eGnff'+iihkG4,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elMm_0T.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elMm_0T.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elCjqRh.value = fval(component.comment.comment);
ec('textarea');
let cndThXK = elMm_0T.formHandler.getError(`comment`);
this.setState('stUTpXl', cndThXK);
if (cndThXK) { 
let elqqUXH = eo('div','ohTff'+iihkG4,null,`class`,`alert alert-danger`);
text(elMm_0T.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cILEC58Ur', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elAV3F0 = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elDxSlV = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iihkG4});
let cndFJhX = ! component.isSending;
this.setState('stTFCOF', cndFJhX);
if (cndFJhX) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('crRAvtJqV', {parent:component,state:'stTFCOF',insideLoop:true,index:"" +iihkG4});
}let elRETmG = eo('button','Bupff'+iihkG4,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
}
let elDxnj6 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elDxnj6.formHandler) {
                    window.cfrmdlr = elDxnj6.formHandler = new FormHandler(elDxnj6, component);
                } else {
                    window.cfrmdlr = elDxnj6.formHandler;
                }
            let el1B1FG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el1B1FG.value = fval(component.project.id);
let eluYdFw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eluYdFw.value = fval(component.project.id);
let elkiWyB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elkiWyB.value = fval(component.typeId);
let eleJ5ff = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
eleJ5ff.value = fval(component.type);
let elNktSj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elDxnj6.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elDxnj6.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elNktSj.value = fval(component.newComment);
ec('textarea');
let cndJ4YZ = elDxnj6.formHandler.getError(`comment`);
this.setState('st4JhHE', cndJ4YZ);
if (cndJ4YZ) { 
let elBHiqb = eo('div','ALKf',null,`class`,`alert alert-danger`);
text(elDxnj6.formHandler.getError(`comment`));
ec('div');
}let elKabP1 = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cSAkOb2RH', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elDwdDW = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let el5i1CY = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndaQpw = ! component.isSending;
this.setState('stYQBNw', cndaQpw);
if (cndaQpw) { 
component.recordAudio = this._lc('czgNv6E2n', {parent:component,attrs:{class:'audio-input'},state:'stYQBNw'});
}ec('div');
let eluo8XZ = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });