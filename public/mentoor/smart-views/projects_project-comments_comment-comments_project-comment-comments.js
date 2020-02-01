_Component({
                selector: 'project-comment-comments',
                c: 'ProjectCommentComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comment','project','user','index','editMode','confirmRemoving','submitComment','typeId','type','commentId','isSending','isValidForm','newComment'],
                children: {c6H7GOQFJ:'flk-time-ago',cPOMz2pBq:'markdown',cp5bqdex1:'flk-audio-player',c5BAr13uG:'flk-file-input',cfTqUq1iz:'record-audio-input',cDmOBOkqO:'flk-file-input',cJJKwBDky:'record-audio-input'},
                render: function (component) {
                    let elWE082 = eo('div',null,null,`class`,`comment-comments`);
for (let commentIndex in component.comment.comments) {
let comment = component.comment.comments[commentIndex]; 
 let iiEgkl = comment.id+ commentIndex;
let el1alLD = eo('div','99xaA0hZcSZo' + commentIndex+iiEgkl,null,`class`,`comment simple-card p-1 m-b-1`);
let elrXbYc = ev('img','4ejff'+iiEgkl,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndJTNo = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stK6jkG', cndJTNo);
if (cndJTNo) { 
let elVUV6E = eo('span','kUQff'+iiEgkl,null,`class`,`action-btns float-right`);
let cndSRJH = ! component.comment || component.comment.id != comment.id;
this.setState('st2gC3G', cndSRJH);
let cnd_IAT = component.comment && component.comment.id == comment.id;
this.setState('stHi2HE', cnd_IAT);
if (cndSRJH) { 
let elifkGB = eo('button','Gg8ff'+iiEgkl,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true}]},`type`,`button`);
let elU_DIK = eo('i','1vSff'+iiEgkl,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cnd_IAT) { 
let elOJe45 = eo('button','ya6ff'+iiEgkl,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndx7GT = ! component.comment || component.comment.id != comment.id;
this.setState('stXDv_z', cndx7GT);
if (cndx7GT) { 
let elHsOEm = eo('button','21Pff'+iiEgkl,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index)}]},`type`,`button`);
let elJGXMD = eo('i','Gg6ff'+iiEgkl,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let el4bXC4 = eo('div','93rff'+iiEgkl,null,`class`,`d-inline-block`);
let el_tdFF = eo('div','dTZff'+iiEgkl);
let elIjXGK = eo('span','GLTff'+iiEgkl);
text(comment.createdBy.name);
ec('span');
ec('div');
let elnp_5r = eo('div','vxUff'+iiEgkl,null,`class`,`m-b-1`);
let cmpcu94 = this._lc('c6H7GOQFJ', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiEgkl});
ec('div');
let cndp4LZ = ! component.editMode;
this.setState('st_uiOL', cndp4LZ);
if (cndp4LZ) { 
let cmpjQuS = this._lc('cPOMz2pBq', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'st_uiOL',insideLoop:true,index:"" +iiEgkl});
}let cndtmOn = comment.record;
this.setState('stBst8M', cndtmOn);
if (cndtmOn) { 
let elA2Kja = eo('div','42vff'+iiEgkl,null,`class`,`m-t-1`);
let cmpQHVz = this._lc('cp5bqdex1', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stBst8M',insideLoop:true,index:"" +iiEgkl});
ec('div');
}ec('div');
let cndA_P2 = ! Is.empty(comment.attachments);
this.setState('styu2jd', cndA_P2);
if (cndA_P2) { 
let elq8_W0 = eo('div','RQuff'+iiEgkl);
let el8FAjj = eo('h4','4Wiff'+iiEgkl,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiTtLX = '3ay1b66' + i;
let el_JD69 = eo('a','vp8Sks0UffTk' + i+iiEgkl+iiTtLX,null,`href`,`${attachment}`,`target`,`_blank`);
let cndmekW = isImage(attachment);
this.setState('stuhwBL', cndmekW);
let cndTGS2 = !(cndmekW);
this.setState('stgr7qU', cndTGS2);
if (cndmekW) { 
let el8H_7v = ev('img','VBhff'+iiEgkl+iiTtLX,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elc_IHK = eo('button','IcFff'+iiEgkl+iiTtLX,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndnxQW = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stHGzKE', cndnxQW);
if (cndnxQW) { 
let elthMbU = eo('form','tFBff'+iiEgkl,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elthMbU.formHandler) {
                    window.cfrmdlr = elthMbU.formHandler = new FormHandler(elthMbU, component);
                } else {
                    window.cfrmdlr = elthMbU.formHandler;
                }
            let ell374E = ev('input','jryff'+iiEgkl,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
ell374E.value = fval(component.project.id);
let elAM4sG = ev('input','sQ8ff'+iiEgkl,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elAM4sG.value = fval(component.typeId);
let elJLH3x = ev('input','2DEff'+iiEgkl,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elJLH3x.value = fval(component.type);
let elqazSW = ev('input','1nuff'+iiEgkl,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elqazSW.value = fval(component.commentId);
let elKzUJ4 = eo('textarea','K5eff'+iiEgkl,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elthMbU.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elthMbU.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elKzUJ4.value = fval(component.comment.comment);
ec('textarea');
let cnddlUP = elthMbU.formHandler.getError(`comment`);
this.setState('stIF5N5', cnddlUP);
if (cnddlUP) { 
let elSfM4o = eo('div','lqHff'+iiEgkl,null,`class`,`alert alert-danger`);
text(elthMbU.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('c5BAr13uG', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elVACVE = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elUp63b = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiEgkl});
let cndx4WP = ! component.isSending;
this.setState('st66oEV', cndx4WP);
if (cndx4WP) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cfTqUq1iz', {parent:component,state:'st66oEV',insideLoop:true,index:"" +iiEgkl});
}let el0JbUX = eo('button','EePff'+iiEgkl,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
}
let el6VaJ7 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! el6VaJ7.formHandler) {
                    window.cfrmdlr = el6VaJ7.formHandler = new FormHandler(el6VaJ7, component);
                } else {
                    window.cfrmdlr = el6VaJ7.formHandler;
                }
            let elmbyCk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elmbyCk.value = fval(component.project.id);
let elbsaxj = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elbsaxj.value = fval(component.project.id);
let elPdSpy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elPdSpy.value = fval(component.typeId);
let elIoESN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elIoESN.value = fval(component.type);
let elcUD95 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6VaJ7.formHandler.addError(`comment`, 'required', trans('validation.required'));}return el6VaJ7.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elcUD95.value = fval(component.newComment);
ec('textarea');
let cndvzl9 = el6VaJ7.formHandler.getError(`comment`);
this.setState('stVR3vp', cndvzl9);
if (cndvzl9) { 
let el59QMH = eo('div','SXBf',null,`class`,`alert alert-danger`);
text(el6VaJ7.formHandler.getError(`comment`));
ec('div');
}let eln0dVn = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cDmOBOkqO', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elaXH6Y = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elbQ37c = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndQ_aM = ! component.isSending;
this.setState('stp4UYS', cndQ_aM);
if (cndQ_aM) { 
component.recordAudio = this._lc('cJJKwBDky', {parent:component,attrs:{class:'audio-input'},state:'stp4UYS'});
}ec('div');
let eljpFC2 = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
ec('div');

                    this.isReadyToGo();
                }
        });