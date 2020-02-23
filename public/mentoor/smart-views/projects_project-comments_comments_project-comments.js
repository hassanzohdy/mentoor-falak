_Component({
                selector: 'project-comments',
                c: 'ProjectComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','project','user','comment','index','editMode','detectChanges','confirmRemoving','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','disableComments','newComment','confirmDelete','remove'],
                children: {c0tw9oo7T:'flk-time-ago',ckPiTQyT3:'markdown',ciNi1t16B:'markdown',cFkM4HcYU:'flk-audio-player',cQQlgSoXb:'flk-file-input',cDXMCkUYl:'record-audio-input',cLoNW8vs7:'project-comments',c35hpflnT:'flk-file-input',cuRP1OWBb:'record-audio-input',cudA7lZ0h:'flk-alert'},
                render: function (component) {
                    let elX9d70 = eo('div',null,null,`class`,`project-comments-list`);
elX9d70.cls = {child: component.parentComment};

            for (let className in elX9d70.cls) {
                elX9d70.classList.toggle(className, elX9d70.cls[className]);
            }  
            let el_sC2k = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndpfEW = ! component.parentComment;
this.setState('stMfi9G', cndpfEW);
let cndADxl = !(cndpfEW);
this.setState('stRXySi', cndADxl);
if (cndpfEW) { 
let elW_Tvr = eo('span','Wy6f');
text(`Comments`);
ec('span');
}else { 
let elRhPm4 = eo('span');
text(`Replies`);
ec('span');
}text(`(${ component.commentsList.length })`);
ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iiqPLI = comment.id+ index;
let elRyFYC = eo('div','2UvgW59EMTaP' + index+iiqPLI,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment simple-card p-1 m-b-1`);
let cndX2L2 = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('styid_8', cndX2L2);
let cndMPzq = comment.commentsAreOpened;
this.setState('stop_Iz', cndMPzq);
if (cndX2L2) { 
let elDEZOy = eo('span','7_kff'+iiqPLI,null,`class`,`action-btns float-right`);
let cndnGw_ = ! component.comment || component.comment.id != comment.id;
this.setState('sth0EHB', cndnGw_);
let cndp3ba = component.comment && component.comment.id == comment.id;
this.setState('stHVxB6', cndp3ba);
if (cndnGw_) { 
let elGkeZX = eo('button','NkGff'+iiqPLI,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elnB6u7 = eo('i','FtVff'+iiqPLI,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndp3ba) { 
let elCP8q8 = eo('button','DP0ff'+iiqPLI,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndKEjq = ! component.comment || component.comment.id != comment.id;
this.setState('stG9WZ6', cndKEjq);
if (cndKEjq) { 
let elJXfjb = eo('button','cCCff'+iiqPLI,null, eventListeners, {onclick:[function(e) {var $el = this;echo(comment); component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elW7yOV = eo('i','z3zff'+iiqPLI,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elSW_V1 = eo('div','tt6ff'+iiqPLI,null,`class`,`row w-100`);
let elbrcLv = eo('div','RtDff'+iiqPLI,null,`class`,`col-sm-1 col-12`);
let elEHj6T = ev('img','EuXff'+iiqPLI,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
ec('div');
let el_WrhW = eo('div','FHgff'+iiqPLI,null,`class`,`col p-0 meta-comment`);
let elyxpyl = eo('div','cSiff'+iiqPLI);
let eldnSCg = eo('span','31qff'+iiqPLI);
text(comment.createdBy.name);
ec('span');
ec('div');
let elveWKm = eo('div','ozaff'+iiqPLI,null,`class`,`m-b-1`);
let cmpg0Bv = this._lc('c0tw9oo7T', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiqPLI});
ec('div');
let cnd_sbY = ! component.editMode;
this.setState('stB_IlN', cnd_sbY);
if (cnd_sbY) { 
let elNaRTX = eo('div','1_Xff'+iiqPLI);
let cnd0SVG = comment.comment.split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stN0o4T', cnd0SVG);
let cndCGhb = !(cnd0SVG);
this.setState('st7dZJT', cndCGhb);
if (cnd0SVG) { 
let cmpddhP = this._lc('ckPiTQyT3', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stN0o4T',insideLoop:true,index:"" +iiqPLI});
}else { 
let cmp6Jmv = this._lc('ciNi1t16B', {parent:component,props:{content:comment.comment.split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'st7dZJT',insideLoop:true,index:"" +iiqPLI});
let el8fEMa = eo('div','a9Bff'+iiqPLI);
text(`...`);
ec('div');
let elvRvvj = eo('button','z_8ff'+iiqPLI,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cnd4Vlz = comment.record;
this.setState('stoJnME', cnd4Vlz);
if (cnd4Vlz) { 
let elTWSyZ = eo('div','Wroff'+iiqPLI,null,`class`,`m-t-1`);
let cmp6Cqd = this._lc('cFkM4HcYU', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stoJnME',insideLoop:true,index:"" +iiqPLI});
ec('div');
}ec('div');
ec('div');
let cndXzUI = ! Is.empty(comment.attachments);
this.setState('stkhiSK', cndXzUI);
let cndDdM7 = cndMPzq;
this.setState('stEOwOb', cndDdM7);
if (cndXzUI) { 
let ellTqp5 = eo('div','LFuff'+iiqPLI);
let el3UAh8 = eo('h4','zbfff'+iiqPLI,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiG0LV = 'cSvEAO5' + i;
let el6U31K = eo('a','GsP_Z88ot6nJ' + i+iiqPLI+iiG0LV,null,`href`,`${attachment}`,`target`,`_blank`);
let cndxO2L = isImage(attachment);
this.setState('stCCW9M', cndxO2L);
let cndSOOW = !(cndxO2L);
this.setState('stWmFBl', cndSOOW);
if (cndxO2L) { 
let el9aoeq = ev('img','rPEff'+iiqPLI+iiG0LV,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let el2Ol3l = eo('button','4gIff'+iiqPLI+iiG0LV,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndwwKz = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('sttZsWS', cndwwKz);
let cndeSA4 = cndDdM7;
this.setState('stj0sTy', cndeSA4);
if (cndwwKz) { 
let elpPFq_ = eo('form','6czff'+iiqPLI,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elpPFq_.formHandler) {
                    window.cfrmdlr = elpPFq_.formHandler = new FormHandler(elpPFq_, component);
                } else {
                    window.cfrmdlr = elpPFq_.formHandler;
                }
            let cndin1V = component.parentComment;
this.setState('stGoqyB', cndin1V);
if (cndin1V) { 
let elPMSxK = ev('input','JlEff'+iiqPLI,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elPMSxK.value = fval(component.parentComment.id);
}let ela6ie3 = ev('input','b4iff'+iiqPLI,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
ela6ie3.value = fval(component.project.id);
let el777ip = ev('input','SObff'+iiqPLI,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el777ip.value = fval(component.typeId);
let el6Kv3r = ev('input','uoBff'+iiqPLI,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el6Kv3r.value = fval(component.type);
let elBZmwq = ev('input','VXsff'+iiqPLI,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elBZmwq.value = fval(component.commentId);
let eloxmtB = eo('textarea','6kFff'+iiqPLI,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elpPFq_.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elpPFq_.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
eloxmtB.value = fval(component.comment.comment);
ec('textarea');
let cndfDtd = elpPFq_.formHandler.getError(`comment`);
this.setState('sty72kd', cndfDtd);
if (cndfDtd) { 
let elsHLor = eo('div','VOhff'+iiqPLI,null,`class`,`alert alert-danger`);
text(elpPFq_.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cQQlgSoXb', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elWmSU2 = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elgmF4N = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiqPLI});
let cndOd_k = ! component.isSending;
this.setState('stUInH4', cndOd_k);
if (cndOd_k) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cDXMCkUYl', {parent:component,state:'stUInH4',insideLoop:true,index:"" +iiqPLI});
}let elJJlZD = eo('button','BXKff'+iiqPLI,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cnd4iN1 = ! comment.commentsAreOpened;
this.setState('strY4Rr', cnd4iN1);
let cndN8Lc = cndeSA4;
this.setState('stHF4SV', cndN8Lc);
if (cnd4iN1) { 
let elM79xb = eo('h2','RGsff'+iiqPLI,null, eventListeners, {onclick:[function(e) {var $el = this;comment.commentsAreOpened = true; component.detectChanges();}]},`class`,`sub-comments-heading`);
let elTN0JF = eo('span','dAZff'+iiqPLI);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('h2');
}else if (cndN8Lc) { 
let cmpyvUf = this._lc('cLoNW8vs7', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stHF4SV',insideLoop:true,index:"" +iiqPLI});
}ec('div');
}
let cnd9Q2h = component.disableComments && ! component.parentComment;
this.setState('stMRvmd', cnd9Q2h);
let cndG1M5 = component.disableComments && component.parentComment;
this.setState('ste78TO', cndG1M5);
let cndl2xd = !(cnd9Q2h||cndG1M5);
this.setState('st5h65u', cndl2xd);
if (cnd9Q2h) { 
let elRP4n6 = eo('div','RjGf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndG1M5) { 
let elM7VpN = eo('div');
ec('div');
}else { 
let elCp3pG = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elCp3pG.formHandler) {
                    window.cfrmdlr = elCp3pG.formHandler = new FormHandler(elCp3pG, component);
                } else {
                    window.cfrmdlr = elCp3pG.formHandler;
                }
            let cnddzbj = component.parentComment;
this.setState('stx0tFN', cnddzbj);
if (cnddzbj) { 
let el937at = ev('input','atnf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
el937at.value = fval(component.parentComment.id);
}let elnVeqh = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elnVeqh.value = fval(component.project.id);
let elALdas = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elALdas.value = fval(component.typeId);
let el52y93 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el52y93.value = fval(component.type);
let elET_QE = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elCp3pG.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elCp3pG.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elET_QE.value = fval(component.newComment);
ec('textarea');
let cndz_RW = elCp3pG.formHandler.getError(`comment`);
this.setState('stdSfQX', cndz_RW);
if (cndz_RW) { 
let elj2Gvc = eo('div','XPkf',null,`class`,`alert alert-danger`);
text(elCp3pG.formHandler.getError(`comment`));
ec('div');
}let elTIAEC = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('c35hpflnT', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elncRRt = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elIK_Bb = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndDg82 = ! component.isSending;
this.setState('stb2yY7', cndDg82);
if (cndDg82) { 
component.recordAudio = this._lc('cuRP1OWBb', {parent:component,attrs:{class:'audio-input'},state:'stb2yY7'});
}ec('div');
let elFlBe9 = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
let cndsNFr = component.confirmDelete;
this.setState('stPatnI', cndsNFr);
if (cndsNFr) { 
let cmpHn3Q = this._lc('cudA7lZ0h', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stPatnI'});
}
                    this.isReadyToGo();
                }
        });