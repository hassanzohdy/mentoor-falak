_Component({
                selector: 'project-comment-comments',
                c: 'ProjectCommentComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comment','project','user','index','editMode','confirmRemoving','submitComment','typeId','type','commentId','isSending','isValidForm','newComment'],
                children: {c0tuOmMps:'flk-time-ago',cBqKYRSW1:'markdown',cnv6AQL2Q:'flk-audio-player',coQyjDC8B:'flk-file-input',cA_yp0vCB:'record-audio-input',cWISisVvW:'flk-file-input',cxIAbq9Fg:'record-audio-input'},
                render: function (component) {
                    let elgWv2y = eo('div',null,null,`class`,`comment-comments`);
for (let commentIndex in component.comment.comments) {
let comment = component.comment.comments[commentIndex]; 
 let iiQ2Wz = comment.id+ commentIndex;
let eluat37 = eo('div','lTidRYyTUZjO' + commentIndex+iiQ2Wz,null,`class`,`comment simple-card p-1 m-b-1`);
let elUakYy = ev('img','dFHff'+iiQ2Wz,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndmt3N = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stnWyQd', cndmt3N);
if (cndmt3N) { 
let elg4WMw = eo('span','0gZff'+iiQ2Wz,null,`class`,`action-btns float-right`);
let cndiy2s = ! component.comment || component.comment.id != comment.id;
this.setState('st9XcF8', cndiy2s);
let cndB0Gj = component.comment && component.comment.id == comment.id;
this.setState('stlxW3r', cndB0Gj);
if (cndiy2s) { 
let elNKxjI = eo('button','bHpff'+iiQ2Wz,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true}]},`type`,`button`);
let eledF9y = eo('i','n0qff'+iiQ2Wz,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndB0Gj) { 
let elqAa_9 = eo('button','SVKff'+iiQ2Wz,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndk6C8 = ! component.comment || component.comment.id != comment.id;
this.setState('stwYLEU', cndk6C8);
if (cndk6C8) { 
let elNW_Xo = eo('button','Uf0ff'+iiQ2Wz,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index)}]},`type`,`button`);
let elxFRf_ = eo('i','nB9ff'+iiQ2Wz,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let el2suTQ = eo('div','wvEff'+iiQ2Wz,null,`class`,`d-inline-block`);
let el4bUKf = eo('div','7Yyff'+iiQ2Wz);
let el893zt = eo('span','4hzff'+iiQ2Wz);
text(comment.createdBy.name);
ec('span');
ec('div');
let elnjP3q = eo('div','XdWff'+iiQ2Wz,null,`class`,`m-b-1`);
let cmpCbA5 = this._lc('c0tuOmMps', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiQ2Wz});
ec('div');
let cnd8loQ = ! component.editMode;
this.setState('stgMnv4', cnd8loQ);
if (cnd8loQ) { 
let cmpJwzR = this._lc('cBqKYRSW1', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stgMnv4',insideLoop:true,index:"" +iiQ2Wz});
}let cndJhZS = comment.record;
this.setState('stWvHXe', cndJhZS);
if (cndJhZS) { 
let elQTMd5 = eo('div','6fhff'+iiQ2Wz,null,`class`,`m-t-1`);
let cmpMO3T = this._lc('cnv6AQL2Q', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stWvHXe',insideLoop:true,index:"" +iiQ2Wz});
ec('div');
}ec('div');
let cndAU3x = ! Is.empty(comment.attachments);
this.setState('stNeuIF', cndAU3x);
if (cndAU3x) { 
let eluxFzc = eo('div','w8lff'+iiQ2Wz);
let elrLHdM = eo('h4','28Iff'+iiQ2Wz,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iixQXb = 'L6Kreia' + i;
let elfzbK1 = eo('a','yYqeBfS05p9X' + i+iiQ2Wz+iixQXb,null,`href`,`${attachment}`,`target`,`_blank`);
let cndTUW4 = isImage(attachment);
this.setState('stfXfVR', cndTUW4);
let cndlSok = !(cndTUW4);
this.setState('stLPxHe', cndlSok);
if (cndTUW4) { 
let elt2Awo = ev('img','W1hff'+iiQ2Wz+iixQXb,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let eljJ8zO = eo('button','PJzff'+iiQ2Wz+iixQXb,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cnd6Ag0 = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stQI6vt', cnd6Ag0);
if (cnd6Ag0) { 
let elphuPc = eo('form','JlVff'+iiQ2Wz,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elphuPc.formHandler) {
                    window.cfrmdlr = elphuPc.formHandler = new FormHandler(elphuPc, component);
                } else {
                    window.cfrmdlr = elphuPc.formHandler;
                }
            let elfgJ88 = ev('input','xtDff'+iiQ2Wz,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elfgJ88.value = fval(component.project.id);
let elp7NUz = ev('input','T_off'+iiQ2Wz,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elp7NUz.value = fval(component.typeId);
let elaz6O4 = ev('input','DjQff'+iiQ2Wz,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elaz6O4.value = fval(component.type);
let elmNdVj = ev('input','jXlff'+iiQ2Wz,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elmNdVj.value = fval(component.commentId);
let elEeyg4 = eo('textarea','rUGff'+iiQ2Wz,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elphuPc.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elphuPc.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elEeyg4.value = fval(component.comment.comment);
ec('textarea');
let cndQWgJ = elphuPc.formHandler.getError(`comment`);
this.setState('stdh9Sq', cndQWgJ);
if (cndQWgJ) { 
let elqEB83 = eo('div','qz0ff'+iiQ2Wz,null,`class`,`alert alert-danger`);
text(elphuPc.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('coQyjDC8B', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elEVFYP = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elhPxUu = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiQ2Wz});
let cndJ8kQ = ! component.isSending;
this.setState('stNDvIg', cndJ8kQ);
if (cndJ8kQ) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cA_yp0vCB', {parent:component,state:'stNDvIg',insideLoop:true,index:"" +iiQ2Wz});
}let elhrKjr = eo('button','_R7ff'+iiQ2Wz,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
}
let elbNlSI = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elbNlSI.formHandler) {
                    window.cfrmdlr = elbNlSI.formHandler = new FormHandler(elbNlSI, component);
                } else {
                    window.cfrmdlr = elbNlSI.formHandler;
                }
            let elYPbwI = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elYPbwI.value = fval(component.project.id);
let elVfbo0 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elVfbo0.value = fval(component.project.id);
let el89AjD = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el89AjD.value = fval(component.typeId);
let elMXyf7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elMXyf7.value = fval(component.type);
let elhPLPA = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elbNlSI.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elbNlSI.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elhPLPA.value = fval(component.newComment);
ec('textarea');
let cndzhlR = elbNlSI.formHandler.getError(`comment`);
this.setState('stAtuGm', cndzhlR);
if (cndzhlR) { 
let elgmnJT = eo('div','xIAf',null,`class`,`alert alert-danger`);
text(elbNlSI.formHandler.getError(`comment`));
ec('div');
}let elMfLxS = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cWISisVvW', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elXK43u = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let el26ziX = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndMEZC = ! component.isSending;
this.setState('ste7xU5', cndMEZC);
if (cndMEZC) { 
component.recordAudio = this._lc('cxIAbq9Fg', {parent:component,attrs:{class:'audio-input'},state:'ste7xU5'});
}ec('div');
let el6QbzZ = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });