_Component({
                selector: 'project-comments',
                c: 'ProjectComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','project','user','comment','index','editMode','detectChanges','confirmRemoving','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','disableComments','newComment','confirmDelete','remove'],
                children: {cnSsaCN6w:'flk-time-ago',c8UwKDzge:'markdown',cjzVKkFTg:'markdown',cYvHWWIkX:'flk-audio-player',crvOSoGwL:'flk-file-input',cQYrJE1b8:'record-audio-input',c94jdrf40:'project-comments',cevg3oGuj:'flk-file-input',cntbQig0f:'record-audio-input',csWod86gk:'flk-alert'},
                render: function (component) {
                    let elhAKgS = eo('div',null,null,`class`,`project-comments-list ${cls({child: component.parentComment})}`);
let el4CoRB = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndqOm1 = ! component.parentComment;
this.setState('stZs2C5', cndqOm1);
let cndHpuD = !(cndqOm1);
this.setState('struiFx', cndHpuD);
if (cndqOm1) { 
let elO02rS = eo('span','DLFf');
text(`Comments`);
ec('span');
}else { 
let ellN2iM = eo('span');
text(`Replies`);
ec('span');
}text(`(${ component.commentsList.length })`);
ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let ii_PBr = comment.id+ index;
let elgyF0d = eo('div','1qfLNR0ZUId5' + index+ii_PBr,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment simple-card p-1 m-b-1`);
let cndjcU7 = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stkCSce', cndjcU7);
let cndDsMR = comment.commentsAreOpened;
this.setState('stEJiCI', cndDsMR);
if (cndjcU7) { 
let eljTKgM = eo('span','eN4ff'+ii_PBr,null,`class`,`action-btns float-right`);
let cndhYCI = ! component.comment || component.comment.id != comment.id;
this.setState('st0sHls', cndhYCI);
let cndcJgg = component.comment && component.comment.id == comment.id;
this.setState('st0L7Yi', cndcJgg);
if (cndhYCI) { 
let elBlW_J = eo('button','NSSff'+ii_PBr,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elHs6fL = eo('i','k7wff'+ii_PBr,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndcJgg) { 
let elSGu_H = eo('button','bd7ff'+ii_PBr,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndrzj8 = ! component.comment || component.comment.id != comment.id;
this.setState('stltGV7', cndrzj8);
if (cndrzj8) { 
let el0T3B8 = eo('button','id0ff'+ii_PBr,null, eventListeners, {onclick:[function(e) {var $el = this;echo(comment); component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elmZWwm = eo('i','9wSff'+ii_PBr,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elWqWvf = eo('div','BQ8ff'+ii_PBr,null,`class`,`row w-100`);
let elzZdsD = eo('div','X3off'+ii_PBr,null,`class`,`col-sm-1 col-12`);
let elUisFZ = ev('img','jzyff'+ii_PBr,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
ec('div');
let elUhtsh = eo('div','uVqff'+ii_PBr,null,`class`,`col p-0 meta-comment`);
let elTK647 = eo('div','OL4ff'+ii_PBr);
let eljGI9l = eo('span','6kRff'+ii_PBr);
text(comment.createdBy.name);
ec('span');
ec('div');
let elmtNpn = eo('div','HEOff'+ii_PBr,null,`class`,`m-b-1`);
let cmpaZtN = this._lc('cnSsaCN6w', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +ii_PBr});
ec('div');
let cnd13gN = ! component.editMode;
this.setState('stXxLVH', cnd13gN);
if (cnd13gN) { 
let elEMCoe = eo('div','hBXff'+ii_PBr);
let cndIxHB = comment.comment.split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stysDJ5', cndIxHB);
let cndfHyc = !(cndIxHB);
this.setState('st3xXkB', cndfHyc);
if (cndIxHB) { 
let cmpi5HA = this._lc('c8UwKDzge', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stysDJ5',insideLoop:true,index:"" +ii_PBr});
}else { 
let cmpTTnT = this._lc('cjzVKkFTg', {parent:component,props:{content:comment.comment.split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'st3xXkB',insideLoop:true,index:"" +ii_PBr});
let el1b8pW = eo('div','Ayjff'+ii_PBr);
text(`...`);
ec('div');
let elARZOo = eo('button','YwVff'+ii_PBr,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndxEwr = comment.record;
this.setState('stO25gx', cndxEwr);
if (cndxEwr) { 
let el03SjE = eo('div','0yyff'+ii_PBr,null,`class`,`m-t-1`);
let cmpurDr = this._lc('cYvHWWIkX', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stO25gx',insideLoop:true,index:"" +ii_PBr});
ec('div');
}ec('div');
ec('div');
let cndeyej = ! Is.empty(comment.attachments);
this.setState('stqnSLR', cndeyej);
let cndmp3l = cndDsMR;
this.setState('sthoHOS', cndmp3l);
if (cndeyej) { 
let elkji0e = eo('div','_o3ff'+ii_PBr);
let elH9Xqy = eo('h4','9Kxff'+ii_PBr,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiPzPW = '_Lb5EWo' + i;
let elt_3OB = eo('a','X1S6qKXvsByy' + i+ii_PBr+iiPzPW,null,`href`,`${attachment}`,`target`,`_blank`);
let cndccVh = isImage(attachment);
this.setState('stw83u0', cndccVh);
let cndD2na = !(cndccVh);
this.setState('stebiyT', cndD2na);
if (cndccVh) { 
let elGO768 = ev('img','J55ff'+ii_PBr+iiPzPW,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let el9m_zT = eo('button','U4Cff'+ii_PBr+iiPzPW,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cnd3eTz = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stK2YOd', cnd3eTz);
let cndPeyh = cndmp3l;
this.setState('stUGFP9', cndPeyh);
if (cnd3eTz) { 
let el8ToF7 = eo('form','k3sff'+ii_PBr,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! el8ToF7.formHandler) {
                    window.cfrmdlr = el8ToF7.formHandler = new FormHandler(el8ToF7, component);
                } else {
                    window.cfrmdlr = el8ToF7.formHandler;
                }
            let cnd8Swa = component.parentComment;
this.setState('stv5D23', cnd8Swa);
if (cnd8Swa) { 
let elt0BU2 = ev('input','7nzff'+ii_PBr,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elt0BU2.value = fval(component.parentComment.id);
}let elqB5iM = ev('input','ixEff'+ii_PBr,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elqB5iM.value = fval(component.project.id);
let eljLcF4 = ev('input','kb1ff'+ii_PBr,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
eljLcF4.value = fval(component.typeId);
let elz769x = ev('input','rXAff'+ii_PBr,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elz769x.value = fval(component.type);
let eljMHM3 = ev('input','iAMff'+ii_PBr,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
eljMHM3.value = fval(component.commentId);
let elOUKDX = eo('textarea','mArff'+ii_PBr,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el8ToF7.formHandler.addError(`comment`, 'required', trans('validation.required'));}return el8ToF7.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elOUKDX.value = fval(component.comment.comment);
ec('textarea');
let cnd9Dpq = el8ToF7.formHandler.getError(`comment`);
this.setState('stCWleo', cnd9Dpq);
if (cnd9Dpq) { 
let eluwIJm = eo('div','VFvff'+ii_PBr,null,`class`,`alert alert-danger`);
text(el8ToF7.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('crvOSoGwL', {parent:component,props:{multiple:true},content:(flkFileInput) => {let ellbmzm = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elFcbKi = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +ii_PBr});
let cndtVXn = ! component.isSending;
this.setState('stXN0sG', cndtVXn);
if (cndtVXn) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cQYrJE1b8', {parent:component,state:'stXN0sG',insideLoop:true,index:"" +ii_PBr});
}let el1O8x1 = eo('button','P1sff'+ii_PBr,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cndVH2Q = ! comment.commentsAreOpened;
this.setState('stlI_TP', cndVH2Q);
let cndAq2X = cndPeyh;
this.setState('stxl_e5', cndAq2X);
if (cndVH2Q) { 
let elID_sE = eo('h2','MQ2ff'+ii_PBr,null, eventListeners, {onclick:[function(e) {var $el = this;comment.commentsAreOpened = true; component.detectChanges();}]},`class`,`sub-comments-heading`);
let elgoNB3 = eo('span','ntFff'+ii_PBr);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('h2');
}else if (cndAq2X) { 
let cmp7fIQ = this._lc('c94jdrf40', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stxl_e5',insideLoop:true,index:"" +ii_PBr});
}ec('div');
}
let cndG8tf = component.disableComments && ! component.parentComment;
this.setState('stCzdmK', cndG8tf);
let cndauYi = component.disableComments && component.parentComment;
this.setState('stbo5Tw', cndauYi);
let cndLwNx = !(cndG8tf||cndauYi);
this.setState('stfiW2R', cndLwNx);
if (cndG8tf) { 
let el5OEIS = eo('div','eRof',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndauYi) { 
let elHQTDp = eo('div');
ec('div');
}else { 
let elfySIs = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elfySIs.formHandler) {
                    window.cfrmdlr = elfySIs.formHandler = new FormHandler(elfySIs, component);
                } else {
                    window.cfrmdlr = elfySIs.formHandler;
                }
            let cndoJWc = component.parentComment;
this.setState('stsO0y6', cndoJWc);
if (cndoJWc) { 
let elZBJZH = ev('input','nKef',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elZBJZH.value = fval(component.parentComment.id);
}let elZslhZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elZslhZ.value = fval(component.project.id);
let el6LqPu = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el6LqPu.value = fval(component.typeId);
let elRhBWi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elRhBWi.value = fval(component.type);
let elLvUVm = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elfySIs.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elfySIs.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elLvUVm.value = fval(component.newComment);
ec('textarea');
let cnd9t7i = elfySIs.formHandler.getError(`comment`);
this.setState('st0Rsfr', cnd9t7i);
if (cnd9t7i) { 
let el0fIIT = eo('div','plaf',null,`class`,`alert alert-danger`);
text(elfySIs.formHandler.getError(`comment`));
ec('div');
}let elZ6gqg = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cevg3oGuj', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el9WDqj = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let el21U8f = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cnd59MK = ! component.isSending;
this.setState('st4cKlO', cnd59MK);
if (cnd59MK) { 
component.recordAudio = this._lc('cntbQig0f', {parent:component,attrs:{class:'audio-input'},state:'st4cKlO'});
}ec('div');
let elgx6RB = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
let cndbEnl = component.confirmDelete;
this.setState('stk0cle', cndbEnl);
if (cndbEnl) { 
let cmpLmjV = this._lc('csWod86gk', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stk0cle'});
}
                    this.isReadyToGo();
                }
        });