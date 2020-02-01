_Component({
                selector: 'project-comments',
                c: 'ProjectComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','project','user','comment','index','editMode','detectChanges','confirmRemoving','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','disableComments','newComment','confirmDelete','remove'],
                children: {cXHuIJtkU:'flk-time-ago',cCzQrtVtw:'markdown',czVylaVcJ:'markdown',c4bgX8tm5:'flk-audio-player',ctZJIXKKt:'flk-file-input',chuAw6MXM:'record-audio-input',cNEMaMztB:'project-comments',cMx0Wap_B:'flk-file-input',c2SBDgolk:'record-audio-input',cBh4H1Z8R:'flk-alert'},
                render: function (component) {
                    let elk6r6M = eo('div',null,null,`class`,`project-comments-list`);
elk6r6M.cls = {child: component.parentComment};

            for (let className in elk6r6M.cls) {
                elk6r6M.classList.toggle(className, elk6r6M.cls[className]);
            }  
            let el0Uh8o = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndKnjn = ! component.parentComment;
this.setState('stDxiUd', cndKnjn);
let cndaZr_ = !(cndKnjn);
this.setState('st6OT9U', cndaZr_);
if (cndKnjn) { 
let elm569c = eo('span','9Qsf');
text(`Comments`);
ec('span');
}else { 
let elfof9k = eo('span');
text(`Replies`);
ec('span');
}text(`(${ component.commentsList.length })`);
ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iia93F = comment.id+ index;
let el9mtmr = eo('div','jnbCeijmkm2k' + index+iia93F,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment simple-card p-1 m-b-1`);
let cndbeYf = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stlcHDp', cndbeYf);
let cndW60g = comment.commentsAreOpened;
this.setState('stStiPG', cndW60g);
if (cndbeYf) { 
let elVa87t = eo('span','x8Cff'+iia93F,null,`class`,`action-btns float-right`);
let cndxHM3 = ! component.comment || component.comment.id != comment.id;
this.setState('st4jF3C', cndxHM3);
let cndoago = component.comment && component.comment.id == comment.id;
this.setState('st5a15U', cndoago);
if (cndxHM3) { 
let elLXSJ6 = eo('button','sFiff'+iia93F,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let el_kius = eo('i','bUtff'+iia93F,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndoago) { 
let el89XW_ = eo('button','t7off'+iia93F,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndRjaL = ! component.comment || component.comment.id != comment.id;
this.setState('stS44O_', cndRjaL);
if (cndRjaL) { 
let elF7wgL = eo('button','HEfff'+iia93F,null, eventListeners, {onclick:[function(e) {var $el = this;echo(comment); component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let eltkNBa = eo('i','pDmff'+iia93F,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elZo2yQ = eo('div','1XTff'+iia93F,null,`class`,`row w-100`);
let eldDKnJ = eo('div','Tcvff'+iia93F,null,`class`,`col-sm-1 col-12`);
let elCwaj7 = ev('img','C_Tff'+iia93F,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
ec('div');
let elPPezb = eo('div','7PCff'+iia93F,null,`class`,`col p-0 meta-comment`);
let elHRyp8 = eo('div','82Rff'+iia93F);
let elE9xNW = eo('span','0SUff'+iia93F);
text(comment.createdBy.name);
ec('span');
ec('div');
let elq6EFB = eo('div','HSeff'+iia93F,null,`class`,`m-b-1`);
let cmp1dPk = this._lc('cXHuIJtkU', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iia93F});
ec('div');
let cndmMXb = ! component.editMode;
this.setState('stFqyNR', cndmMXb);
if (cndmMXb) { 
let elRk61N = eo('div','eiKff'+iia93F);
let cndkONV = comment.comment.split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stqZlrO', cndkONV);
let cnd3_Z7 = !(cndkONV);
this.setState('st_V0SI', cnd3_Z7);
if (cndkONV) { 
let cmpkmvi = this._lc('cCzQrtVtw', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stqZlrO',insideLoop:true,index:"" +iia93F});
}else { 
let cmpUsy3 = this._lc('czVylaVcJ', {parent:component,props:{content:comment.comment.split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'st_V0SI',insideLoop:true,index:"" +iia93F});
let elpFbjD = eo('div','_xfff'+iia93F);
text(`...`);
ec('div');
let elAkN3P = eo('button','RU1ff'+iia93F,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cnd7Qhj = comment.record;
this.setState('stb6Kl4', cnd7Qhj);
if (cnd7Qhj) { 
let eluWIQH = eo('div','5MSff'+iia93F,null,`class`,`m-t-1`);
let cmpBJ9n = this._lc('c4bgX8tm5', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stb6Kl4',insideLoop:true,index:"" +iia93F});
ec('div');
}ec('div');
ec('div');
let cndWWs_ = ! Is.empty(comment.attachments);
this.setState('stOF6rR', cndWWs_);
let cndyKpO = cndW60g;
this.setState('stxpVLp', cndyKpO);
if (cndWWs_) { 
let elEPf2t = eo('div','Gfiff'+iia93F);
let elRyFw9 = eo('h4','qBKff'+iia93F,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iix7cB = 'sJJMu8Q' + i;
let elLo507 = eo('a','zeQtHo6bHJhg' + i+iia93F+iix7cB,null,`href`,`${attachment}`,`target`,`_blank`);
let cndQ_Iq = isImage(attachment);
this.setState('stgZIlR', cndQ_Iq);
let cnd2OO9 = !(cndQ_Iq);
this.setState('stquRYW', cnd2OO9);
if (cndQ_Iq) { 
let elt1CQA = ev('img','kD8ff'+iia93F+iix7cB,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elzR9mg = eo('button','G5Qff'+iia93F+iix7cB,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndaMsm = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('st_rvPo', cndaMsm);
let cndxhz1 = cndyKpO;
this.setState('st72iY9', cndxhz1);
if (cndaMsm) { 
let el56zgy = eo('form','f5eff'+iia93F,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! el56zgy.formHandler) {
                    window.cfrmdlr = el56zgy.formHandler = new FormHandler(el56zgy, component);
                } else {
                    window.cfrmdlr = el56zgy.formHandler;
                }
            let cndivH3 = component.parentComment;
this.setState('stsyO2X', cndivH3);
if (cndivH3) { 
let elZrtfp = ev('input','hSqff'+iia93F,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elZrtfp.value = fval(component.parentComment.id);
}let elf8Rep = ev('input','hIlff'+iia93F,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elf8Rep.value = fval(component.project.id);
let elUTC5h = ev('input','in9ff'+iia93F,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elUTC5h.value = fval(component.typeId);
let elxQ5l2 = ev('input','pw0ff'+iia93F,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elxQ5l2.value = fval(component.type);
let elHqV20 = ev('input','sEgff'+iia93F,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elHqV20.value = fval(component.commentId);
let elhqbFq = eo('textarea','5Amff'+iia93F,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el56zgy.formHandler.addError(`comment`, 'required', trans('validation.required'));}return el56zgy.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elhqbFq.value = fval(component.comment.comment);
ec('textarea');
let cndGGGC = el56zgy.formHandler.getError(`comment`);
this.setState('stjenNV', cndGGGC);
if (cndGGGC) { 
let elqTj4k = eo('div','LMkff'+iia93F,null,`class`,`alert alert-danger`);
text(el56zgy.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('ctZJIXKKt', {parent:component,props:{multiple:true},content:(flkFileInput) => {let eluEb47 = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elyd5zc = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iia93F});
let cndhxl6 = ! component.isSending;
this.setState('stJ0QSZ', cndhxl6);
if (cndhxl6) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('chuAw6MXM', {parent:component,state:'stJ0QSZ',insideLoop:true,index:"" +iia93F});
}let ellsaO7 = eo('button','qgOff'+iia93F,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cnd26P9 = ! comment.commentsAreOpened;
this.setState('stnnnSp', cnd26P9);
let cndLTBh = cndxhz1;
this.setState('stYAqje', cndLTBh);
if (cnd26P9) { 
let elarlac = eo('h2','JVIff'+iia93F,null, eventListeners, {onclick:[function(e) {var $el = this;comment.commentsAreOpened = true; component.detectChanges();}]},`class`,`sub-comments-heading`);
let el6YvE0 = eo('span','ETqff'+iia93F);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('h2');
}else if (cndLTBh) { 
let cmpegnj = this._lc('cNEMaMztB', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stYAqje',insideLoop:true,index:"" +iia93F});
}ec('div');
}
let cndxT0_ = component.disableComments && ! component.parentComment;
this.setState('stsUUHn', cndxT0_);
let cndNj1y = component.disableComments && component.parentComment;
this.setState('stXGap6', cndNj1y);
let cndChUB = !(cndxT0_||cndNj1y);
this.setState('st6z_Ej', cndChUB);
if (cndxT0_) { 
let elleJV0 = eo('div','OSjf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndNj1y) { 
let elQnS4n = eo('div');
ec('div');
}else { 
let elTZ3Kx = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elTZ3Kx.formHandler) {
                    window.cfrmdlr = elTZ3Kx.formHandler = new FormHandler(elTZ3Kx, component);
                } else {
                    window.cfrmdlr = elTZ3Kx.formHandler;
                }
            let cndGWk6 = component.parentComment;
this.setState('stvz5al', cndGWk6);
if (cndGWk6) { 
let eljeUou = ev('input','2Jkf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
eljeUou.value = fval(component.parentComment.id);
}let elApmAw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elApmAw.value = fval(component.project.id);
let eleE7_L = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
eleE7_L.value = fval(component.typeId);
let elR1Moz = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elR1Moz.value = fval(component.type);
let elAKnpM = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elTZ3Kx.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elTZ3Kx.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elAKnpM.value = fval(component.newComment);
ec('textarea');
let cndUVPC = elTZ3Kx.formHandler.getError(`comment`);
this.setState('stmItrM', cndUVPC);
if (cndUVPC) { 
let el0WbLl = eo('div','xqqf',null,`class`,`alert alert-danger`);
text(elTZ3Kx.formHandler.getError(`comment`));
ec('div');
}let elV2V4K = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cMx0Wap_B', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elVQbtn = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elAIVEy = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndPb1I = ! component.isSending;
this.setState('stbZcKw', cndPb1I);
if (cndPb1I) { 
component.recordAudio = this._lc('c2SBDgolk', {parent:component,attrs:{class:'audio-input'},state:'stbZcKw'});
}ec('div');
let elUR1yd = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
let cnd8a4Q = component.confirmDelete;
this.setState('stdVeKH', cnd8a4Q);
if (cnd8a4Q) { 
let cmpAJMZ = this._lc('cBh4H1Z8R', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stdVeKH'});
}
                    this.isReadyToGo();
                }
        });