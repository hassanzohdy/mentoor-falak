_Component({
                selector: 'project-comments',
                c: 'ProjectComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','project','user','comment','index','editMode','detectChanges','confirmRemoving','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','disableComments','newComment','confirmDelete','remove'],
                children: {cFb5cKD7N:'flk-time-ago',cyviRx68j:'markdown',cLoSGZNXR:'markdown',c5Mqdps7e:'flk-audio-player',chcHNk213:'flk-file-input',cQQGoLusR:'record-audio-input',cCEFHZ_Wu:'project-comments',ciLIODJCD:'flk-file-input',caTBHrmYr:'record-audio-input',cNNOptEVl:'flk-alert'},
                render: function (component) {
                    let elovynB = eo('div',null,null,`class`,`project-comments-list`);
elovynB.cls = {child: component.parentComment};

            for (let className in elovynB.cls) {
                elovynB.classList.toggle(className, elovynB.cls[className]);
            }  
            let eln3UVc = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndEVl3 = ! component.parentComment;
this.setState('stDamJ9', cndEVl3);
let cndyngM = !(cndEVl3);
this.setState('stF4yJr', cndyngM);
if (cndEVl3) { 
let elQ4nRF = eo('span','Fcef');
text(`Comments`);
ec('span');
}else { 
let elxwKrD = eo('span');
text(`Replies`);
ec('span');
}text(`(${ component.commentsList.length })`);
ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iizQZX = comment.id+ index;
let eljYSUc = eo('div','eWVTW0YwgHTg' + index+iizQZX,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment simple-card p-1 m-b-1`);
let cnd9Npu = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stNQu7h', cnd9Npu);
let cndxU6p = comment.commentsAreOpened;
this.setState('st5Oa_E', cndxU6p);
if (cnd9Npu) { 
let el50KHQ = eo('span','Vb1ff'+iizQZX,null,`class`,`action-btns float-right`);
let cnd5laD = ! component.comment || component.comment.id != comment.id;
this.setState('stqJ8TA', cnd5laD);
let cndFX7D = component.comment && component.comment.id == comment.id;
this.setState('stn6hO3', cndFX7D);
if (cnd5laD) { 
let elVPlv0 = eo('button','qV9ff'+iizQZX,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elI8E4j = eo('i','ypWff'+iizQZX,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndFX7D) { 
let elMVMvh = eo('button','xolff'+iizQZX,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndXTYn = ! component.comment || component.comment.id != comment.id;
this.setState('stOCfT4', cndXTYn);
if (cndXTYn) { 
let elt6f34 = eo('button','tVnff'+iizQZX,null, eventListeners, {onclick:[function(e) {var $el = this;echo(comment); component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elCuyiM = eo('i','exQff'+iizQZX,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elmusRx = eo('div','4cTff'+iizQZX,null,`class`,`row w-100`);
let el2wCM8 = eo('div','wX1ff'+iizQZX,null,`class`,`col-sm-1 col-12`);
let eltU1P7 = ev('img','Culff'+iizQZX,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
ec('div');
let elKpsg6 = eo('div','ClPff'+iizQZX,null,`class`,`col p-0 meta-comment`);
let elSmxWP = eo('div','89off'+iizQZX);
let elHDRpd = eo('span','dcxff'+iizQZX);
text(comment.createdBy.name);
ec('span');
ec('div');
let elf9ew6 = eo('div','msAff'+iizQZX,null,`class`,`m-b-1`);
let cmpQoej = this._lc('cFb5cKD7N', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iizQZX});
ec('div');
let cndTU8m = ! component.editMode;
this.setState('stvxOQU', cndTU8m);
if (cndTU8m) { 
let eloo0rp = eo('div','YBgff'+iizQZX);
let cndo9ue = comment.comment.split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stRSHFC', cndo9ue);
let cnd0xHu = !(cndo9ue);
this.setState('st0fmMv', cnd0xHu);
if (cndo9ue) { 
let cmplCrq = this._lc('cyviRx68j', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stRSHFC',insideLoop:true,index:"" +iizQZX});
}else { 
let cmp8rwq = this._lc('cLoSGZNXR', {parent:component,props:{content:comment.comment.split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'st0fmMv',insideLoop:true,index:"" +iizQZX});
let elPUURs = eo('div','Y2aff'+iizQZX);
text(`...`);
ec('div');
let elT0DuT = eo('button','Zr8ff'+iizQZX,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndbWQ2 = comment.record;
this.setState('stBcbQC', cndbWQ2);
if (cndbWQ2) { 
let elP6_WM = eo('div','iDOff'+iizQZX,null,`class`,`m-t-1`);
let cmpeH3L = this._lc('c5Mqdps7e', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stBcbQC',insideLoop:true,index:"" +iizQZX});
ec('div');
}ec('div');
ec('div');
let cndvuIx = ! Is.empty(comment.attachments);
this.setState('stDjzEY', cndvuIx);
let cnd38cU = cndxU6p;
this.setState('st3hD6Z', cnd38cU);
if (cndvuIx) { 
let elASv_h = eo('div','A9Tff'+iizQZX);
let elTz9Eb = eo('h4','x94ff'+iizQZX,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiyLUI = 'lGq_VUc' + i;
let elZ1YiF = eo('a','xCAOUJsozYyB' + i+iizQZX+iiyLUI,null,`href`,`${attachment}`,`target`,`_blank`);
let cnd9z2s = isImage(attachment);
this.setState('strZDxY', cnd9z2s);
let cnd4QIh = !(cnd9z2s);
this.setState('stevGiR', cnd4QIh);
if (cnd9z2s) { 
let elDRI8S = ev('img','Vhxff'+iizQZX+iiyLUI,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elKI5Hx = eo('button','0BPff'+iizQZX+iiyLUI,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndddUv = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('st73482', cndddUv);
let cnd4ijd = cnd38cU;
this.setState('stdWNV_', cnd4ijd);
if (cndddUv) { 
let el4gVY2 = eo('form','bVoff'+iizQZX,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! el4gVY2.formHandler) {
                    window.cfrmdlr = el4gVY2.formHandler = new FormHandler(el4gVY2, component);
                } else {
                    window.cfrmdlr = el4gVY2.formHandler;
                }
            let cndRbDK = component.parentComment;
this.setState('stisJfJ', cndRbDK);
if (cndRbDK) { 
let elTIv0F = ev('input','ay7ff'+iizQZX,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elTIv0F.value = fval(component.parentComment.id);
}let eloxdls = ev('input','H6Uff'+iizQZX,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eloxdls.value = fval(component.project.id);
let elZQyzq = ev('input','b5zff'+iizQZX,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elZQyzq.value = fval(component.typeId);
let eleTNui = ev('input','M49ff'+iizQZX,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
eleTNui.value = fval(component.type);
let elYtsYR = ev('input','Skgff'+iizQZX,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elYtsYR.value = fval(component.commentId);
let eliSZNN = eo('textarea','0oNff'+iizQZX,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el4gVY2.formHandler.addError(`comment`, 'required', trans('validation.required'));}return el4gVY2.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
eliSZNN.value = fval(component.comment.comment);
ec('textarea');
let cndvN9x = el4gVY2.formHandler.getError(`comment`);
this.setState('stiTysk', cndvN9x);
if (cndvN9x) { 
let elhuGU7 = eo('div','vl1ff'+iizQZX,null,`class`,`alert alert-danger`);
text(el4gVY2.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('chcHNk213', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elzrcYR = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elnyhze = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iizQZX});
let cnd6W2G = ! component.isSending;
this.setState('stIAcOR', cnd6W2G);
if (cnd6W2G) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cQQGoLusR', {parent:component,state:'stIAcOR',insideLoop:true,index:"" +iizQZX});
}let elhEQeM = eo('button','kHvff'+iizQZX,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cnd7xhv = ! comment.commentsAreOpened;
this.setState('stXBmL5', cnd7xhv);
let cndHY9e = cnd4ijd;
this.setState('stksn9j', cndHY9e);
if (cnd7xhv) { 
let elI9sjP = eo('h2','G96ff'+iizQZX,null, eventListeners, {onclick:[function(e) {var $el = this;comment.commentsAreOpened = true; component.detectChanges();}]},`class`,`sub-comments-heading`);
let elrSDNl = eo('span','ZJxff'+iizQZX);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('h2');
}else if (cndHY9e) { 
let cmpT9qf = this._lc('cCEFHZ_Wu', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stksn9j',insideLoop:true,index:"" +iizQZX});
}ec('div');
}
let cndBM7D = component.disableComments && ! component.parentComment;
this.setState('stlQT8V', cndBM7D);
let cndxxax = component.disableComments && component.parentComment;
this.setState('st4Gw7N', cndxxax);
let cndRNVX = !(cndBM7D||cndxxax);
this.setState('stNWuCF', cndRNVX);
if (cndBM7D) { 
let elzhYz_ = eo('div','tTtf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndxxax) { 
let eliAekm = eo('div');
ec('div');
}else { 
let elePxgX = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elePxgX.formHandler) {
                    window.cfrmdlr = elePxgX.formHandler = new FormHandler(elePxgX, component);
                } else {
                    window.cfrmdlr = elePxgX.formHandler;
                }
            let cndX8YB = component.parentComment;
this.setState('stYR7Yy', cndX8YB);
if (cndX8YB) { 
let el0bzho = ev('input','lCWf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
el0bzho.value = fval(component.parentComment.id);
}let elPcpbC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elPcpbC.value = fval(component.project.id);
let elwsQO7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elwsQO7.value = fval(component.typeId);
let elA2YJC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elA2YJC.value = fval(component.type);
let elBVZdO = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elePxgX.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elePxgX.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elBVZdO.value = fval(component.newComment);
ec('textarea');
let cndmbyF = elePxgX.formHandler.getError(`comment`);
this.setState('stpw1vS', cndmbyF);
if (cndmbyF) { 
let elOEFCJ = eo('div','4I6f',null,`class`,`alert alert-danger`);
text(elePxgX.formHandler.getError(`comment`));
ec('div');
}let elFfRgO = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('ciLIODJCD', {parent:component,props:{multiple:true},content:(flkFileInput) => {let eluF5YX = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let el5SdcK = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndmaDB = ! component.isSending;
this.setState('staSgEC', cndmaDB);
if (cndmaDB) { 
component.recordAudio = this._lc('caTBHrmYr', {parent:component,attrs:{class:'audio-input'},state:'staSgEC'});
}ec('div');
let eldimxd = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
let cnd8B4m = component.confirmDelete;
this.setState('stKov2Y', cnd8B4m);
if (cnd8B4m) { 
let cmposz9 = this._lc('cNNOptEVl', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stKov2Y'});
}
                    this.isReadyToGo();
                }
        });