_Component({
                selector: 'project-comments',
                c: 'ProjectComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','project','user','comment','index','editMode','detectChanges','confirmRemoving','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','disableComments','newComment','confirmDelete','remove'],
                children: {cSJHbgLqM:'flk-time-ago',cSKJ4cHXw:'markdown',cRHc2s_Sb:'markdown',c7bz5_gSK:'flk-audio-player',cLjc7kP80:'flk-file-input',c82_LgUQI:'record-audio-input',cIjaGgE6Z:'project-comments',cEMXn134j:'flk-file-input',c3xIuct_p:'record-audio-input',cXvbagzKY:'flk-alert'},
                render: function (component) {
                    let elQtFXm = eo('div',null,null,`class`,`project-comments-list`);
elQtFXm.cls = {child: component.parentComment};

            for (let className in elQtFXm.cls) {
                elQtFXm.classList.toggle(className, elQtFXm.cls[className]);
            }  
            let elSaMaf = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cnd7H1o = ! component.parentComment;
this.setState('st2GK0k', cnd7H1o);
let cnd9opv = !(cnd7H1o);
this.setState('stQPBUN', cnd9opv);
if (cnd7H1o) { 
let elhTwDE = eo('span','B02f');
text(`Comments`);
ec('span');
}else { 
let elP2g86 = eo('span');
text(`Replies`);
ec('span');
}text(`(${ component.commentsList.length })`);
ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iilQUO = comment.id+ index;
let elVeLwo = eo('div','eT2WmtBaomac' + index+iilQUO,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment simple-card p-1 m-b-1`);
let cndrQBj = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('sta2cdY', cndrQBj);
let cndIH4i = comment.commentsAreOpened;
this.setState('stFMMIe', cndIH4i);
if (cndrQBj) { 
let elE5fLg = eo('span','tZMff'+iilQUO,null,`class`,`action-btns float-right`);
let cndrtxi = ! component.comment || component.comment.id != comment.id;
this.setState('stDn31x', cndrtxi);
let cndqGcU = component.comment && component.comment.id == comment.id;
this.setState('stRy4CM', cndqGcU);
if (cndrtxi) { 
let elu2QNw = eo('button','8FIff'+iilQUO,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elvd8Pw = eo('i','HkHff'+iilQUO,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndqGcU) { 
let elkmDJA = eo('button','6dmff'+iilQUO,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndJ6tX = ! component.comment || component.comment.id != comment.id;
this.setState('stBNxJh', cndJ6tX);
if (cndJ6tX) { 
let eliG3sm = eo('button','2O8ff'+iilQUO,null, eventListeners, {onclick:[function(e) {var $el = this;echo(comment); component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elqdiog = eo('i','uFzff'+iilQUO,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elVGS55 = eo('div','_JTff'+iilQUO,null,`class`,`row w-100`);
let el6sLqJ = eo('div','2j7ff'+iilQUO,null,`class`,`col-sm-1 col-12`);
let elhmjuk = ev('img','0zbff'+iilQUO,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
ec('div');
let elwFqv1 = eo('div','syQff'+iilQUO,null,`class`,`col p-0 meta-comment`);
let elgqW9E = eo('div','NWrff'+iilQUO);
let elB1Fzx = eo('span','lTLff'+iilQUO);
text(comment.createdBy.name);
ec('span');
ec('div');
let ellBqvY = eo('div','JsOff'+iilQUO,null,`class`,`m-b-1`);
let cmplmyP = this._lc('cSJHbgLqM', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iilQUO});
ec('div');
let cndqJUy = ! component.editMode;
this.setState('stdO6Pq', cndqJUy);
if (cndqJUy) { 
let elEeASE = eo('div','MLDff'+iilQUO);
let cnd1TqP = comment.comment.split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stzd8RZ', cnd1TqP);
let cnd_0qg = !(cnd1TqP);
this.setState('st3yrEd', cnd_0qg);
if (cnd1TqP) { 
let cmp6G6M = this._lc('cSKJ4cHXw', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stzd8RZ',insideLoop:true,index:"" +iilQUO});
}else { 
let cmpTqyq = this._lc('cRHc2s_Sb', {parent:component,props:{content:comment.comment.split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'st3yrEd',insideLoop:true,index:"" +iilQUO});
let ely9Abp = eo('div','kggff'+iilQUO);
text(`...`);
ec('div');
let eliLgqc = eo('button','YINff'+iilQUO,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndIeel = comment.record;
this.setState('strTRO_', cndIeel);
if (cndIeel) { 
let elcHvc0 = eo('div','Q_dff'+iilQUO,null,`class`,`m-t-1`);
let cmp8_Ug = this._lc('c7bz5_gSK', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'strTRO_',insideLoop:true,index:"" +iilQUO});
ec('div');
}ec('div');
ec('div');
let cndaKQ6 = ! Is.empty(comment.attachments);
this.setState('stSjRaH', cndaKQ6);
let cndnO93 = cndIH4i;
this.setState('stpIq3G', cndnO93);
if (cndaKQ6) { 
let elxqFa7 = eo('div','hc6ff'+iilQUO);
let el7OXEw = eo('h4','inhff'+iilQUO,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiqYzq = 'ELrpO4r' + i;
let el_fVYd = eo('a','kCVI_eXYPijf' + i+iilQUO+iiqYzq,null,`href`,`${attachment}`,`target`,`_blank`);
let cnda4kc = isImage(attachment);
this.setState('stWEH5n', cnda4kc);
let cndutSk = !(cnda4kc);
this.setState('stpP6QG', cndutSk);
if (cnda4kc) { 
let elpsReX = ev('img','inHff'+iilQUO+iiqYzq,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elmucPH = eo('button','d8hff'+iilQUO+iiqYzq,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cnd7N13 = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('st53J1W', cnd7N13);
let cndxlb2 = cndnO93;
this.setState('stM6fVf', cndxlb2);
if (cnd7N13) { 
let elLV9c9 = eo('form','Jv_ff'+iilQUO,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elLV9c9.formHandler) {
                    window.cfrmdlr = elLV9c9.formHandler = new FormHandler(elLV9c9, component);
                } else {
                    window.cfrmdlr = elLV9c9.formHandler;
                }
            let cndk3Bm = component.parentComment;
this.setState('strGUcO', cndk3Bm);
if (cndk3Bm) { 
let el2cPU8 = ev('input','gAqff'+iilQUO,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
el2cPU8.value = fval(component.parentComment.id);
}let elqMLCY = ev('input','RQDff'+iilQUO,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elqMLCY.value = fval(component.project.id);
let el7lXv_ = ev('input','zIzff'+iilQUO,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el7lXv_.value = fval(component.typeId);
let elxpXb6 = ev('input','VsBff'+iilQUO,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elxpXb6.value = fval(component.type);
let elzQKfk = ev('input','2t4ff'+iilQUO,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elzQKfk.value = fval(component.commentId);
let elEkfkS = eo('textarea','oe6ff'+iilQUO,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elLV9c9.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elLV9c9.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elEkfkS.value = fval(component.comment.comment);
ec('textarea');
let cndHxJk = elLV9c9.formHandler.getError(`comment`);
this.setState('stJCL9T', cndHxJk);
if (cndHxJk) { 
let elYD2Qi = eo('div','FFSff'+iilQUO,null,`class`,`alert alert-danger`);
text(elLV9c9.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cLjc7kP80', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elMX4Mv = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elc5fu1 = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iilQUO});
let cndLgSG = ! component.isSending;
this.setState('staQO0K', cndLgSG);
if (cndLgSG) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('c82_LgUQI', {parent:component,state:'staQO0K',insideLoop:true,index:"" +iilQUO});
}let elHUXC1 = eo('button','Rueff'+iilQUO,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cndKeLd = ! comment.commentsAreOpened;
this.setState('stpENUR', cndKeLd);
let cndmETm = cndxlb2;
this.setState('stVwawv', cndmETm);
if (cndKeLd) { 
let eljCIWr = eo('h2','d5tff'+iilQUO,null, eventListeners, {onclick:[function(e) {var $el = this;comment.commentsAreOpened = true; component.detectChanges();}]},`class`,`sub-comments-heading`);
let elPWpnu = eo('span','hO0ff'+iilQUO);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('h2');
}else if (cndmETm) { 
let cmpuFx8 = this._lc('cIjaGgE6Z', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stVwawv',insideLoop:true,index:"" +iilQUO});
}ec('div');
}
let cndz9So = component.disableComments && ! component.parentComment;
this.setState('stJIJao', cndz9So);
let cndAuaA = component.disableComments && component.parentComment;
this.setState('st6Rc4A', cndAuaA);
let cndILPg = !(cndz9So||cndAuaA);
this.setState('stsjEwF', cndILPg);
if (cndz9So) { 
let elH3zp8 = eo('div','A6Wf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndAuaA) { 
let elRRii7 = eo('div');
ec('div');
}else { 
let elh9l9c = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elh9l9c.formHandler) {
                    window.cfrmdlr = elh9l9c.formHandler = new FormHandler(elh9l9c, component);
                } else {
                    window.cfrmdlr = elh9l9c.formHandler;
                }
            let cndCrLy = component.parentComment;
this.setState('stH7vnw', cndCrLy);
if (cndCrLy) { 
let elf0BRI = ev('input','ymef',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elf0BRI.value = fval(component.parentComment.id);
}let elisFuC = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elisFuC.value = fval(component.project.id);
let elqbLVh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elqbLVh.value = fval(component.typeId);
let elumZku = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elumZku.value = fval(component.type);
let elymqeb = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elh9l9c.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elh9l9c.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elymqeb.value = fval(component.newComment);
ec('textarea');
let cndMbMU = elh9l9c.formHandler.getError(`comment`);
this.setState('stqaRJN', cndMbMU);
if (cndMbMU) { 
let elf9gLh = eo('div','mxPf',null,`class`,`alert alert-danger`);
text(elh9l9c.formHandler.getError(`comment`));
ec('div');
}let elJMg6Z = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cEMXn134j', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elPelIq = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elID1CS = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndMRFR = ! component.isSending;
this.setState('stOUeaP', cndMRFR);
if (cndMRFR) { 
component.recordAudio = this._lc('c3xIuct_p', {parent:component,attrs:{class:'audio-input'},state:'stOUeaP'});
}ec('div');
let eltTRay = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
let cndqbzj = component.confirmDelete;
this.setState('stEGGF6', cndqbzj);
if (cndqbzj) { 
let cmpYrO4 = this._lc('cXvbagzKY', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stEGGF6'});
}
                    this.isReadyToGo();
                }
        });