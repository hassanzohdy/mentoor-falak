_Component({
                selector: 'project-comments',
                c: 'ProjectComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','project','user','comment','index','editMode','detectChanges','confirmRemoving','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','disableComments','newComment','confirmDelete','remove'],
                children: {cVVGpzIhh:'flk-time-ago',cIGspKbu3:'markdown',cMKjCx_lK:'markdown',cM49BlXrV:'flk-audio-player',cqpa_VArz:'flk-file-input',c60Bidl1b:'record-audio-input',cuU1xhnIm:'project-comments',cQlueS6eu:'flk-file-input',cjc89tW4w:'record-audio-input',cvzDuMyMc:'flk-alert'},
                render: function (component) {
                    let el8VNSb = eo('div',null,null,`class`,`project-comments-list`);
el8VNSb.cls = {child: component.parentComment};

            for (let className in el8VNSb.cls) {
                el8VNSb.classList.toggle(className, el8VNSb.cls[className]);
            }  
            let elJqMUs = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndgcX1 = ! component.parentComment;
this.setState('staS6QV', cndgcX1);
let cndE1KN = !(cndgcX1);
this.setState('stuQ5vp', cndE1KN);
if (cndgcX1) { 
let elakHOF = eo('span','Lb5f');
text(`Comments`);
ec('span');
}else { 
let elbdHcK = eo('span');
text(`Replies`);
ec('span');
}text(`(${ component.commentsList.length })`);
ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iicDBM = comment.id+ index;
let el0SAxC = eo('div','LQ1jZTsiPaSH' + index+iicDBM,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment simple-card p-1 m-b-1`);
let cndhHx5 = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stmhj79', cndhHx5);
let cnd4gw1 = comment.commentsAreOpened;
this.setState('stAMJzp', cnd4gw1);
if (cndhHx5) { 
let elU5uIk = eo('span','rJaff'+iicDBM,null,`class`,`action-btns float-right`);
let cnda7Vg = ! component.comment || component.comment.id != comment.id;
this.setState('st7Yz91', cnda7Vg);
let cndX1WV = component.comment && component.comment.id == comment.id;
this.setState('stevk8V', cndX1WV);
if (cnda7Vg) { 
let eldVM5W = eo('button','KXVff'+iicDBM,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elxbgcv = eo('i','O5qff'+iicDBM,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndX1WV) { 
let elFMMee = eo('button','LEAff'+iicDBM,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndIWQQ = ! component.comment || component.comment.id != comment.id;
this.setState('stm7A8S', cndIWQQ);
if (cndIWQQ) { 
let elu5qB4 = eo('button','H92ff'+iicDBM,null, eventListeners, {onclick:[function(e) {var $el = this;echo(comment); component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let eld0c7S = eo('i','jmlff'+iicDBM,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let eloQq8s = eo('div','73Iff'+iicDBM,null,`class`,`row w-100`);
let ely9pnl = eo('div','gsbff'+iicDBM,null,`class`,`col-sm-1 col-12`);
let eleHhBW = ev('img','aF_ff'+iicDBM,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
ec('div');
let elE3BCM = eo('div','0Wvff'+iicDBM,null,`class`,`col p-0 meta-comment`);
let el3VLf7 = eo('div','gDTff'+iicDBM);
let elHv20I = eo('span','MZPff'+iicDBM);
text(comment.createdBy.name);
ec('span');
ec('div');
let elICSam = eo('div','K8Zff'+iicDBM,null,`class`,`m-b-1`);
let cmpWlGl = this._lc('cVVGpzIhh', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iicDBM});
ec('div');
let cnd54cr = ! component.editMode;
this.setState('stfmggD', cnd54cr);
if (cnd54cr) { 
let elI2Z2Q = eo('div','Ga0ff'+iicDBM);
let cnd7k_n = comment.comment.split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stYeZpX', cnd7k_n);
let cnd6kqc = !(cnd7k_n);
this.setState('stLCzo7', cnd6kqc);
if (cnd7k_n) { 
let cmpL3oW = this._lc('cIGspKbu3', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stYeZpX',insideLoop:true,index:"" +iicDBM});
}else { 
let cmpxl3c = this._lc('cMKjCx_lK', {parent:component,props:{content:comment.comment.split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stLCzo7',insideLoop:true,index:"" +iicDBM});
let elVFJEV = eo('div','iyQff'+iicDBM);
text(`...`);
ec('div');
let elhElow = eo('button','3Thff'+iicDBM,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndkDIi = comment.record;
this.setState('stNTnWC', cndkDIi);
if (cndkDIi) { 
let elDK88z = eo('div','DRqff'+iicDBM,null,`class`,`m-t-1`);
let cmpH7L3 = this._lc('cM49BlXrV', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stNTnWC',insideLoop:true,index:"" +iicDBM});
ec('div');
}ec('div');
ec('div');
let cndiqxL = ! Is.empty(comment.attachments);
this.setState('stKBr1D', cndiqxL);
let cndj7_a = cnd4gw1;
this.setState('st3pLUj', cndj7_a);
if (cndiqxL) { 
let elrN73J = eo('div','OW6ff'+iicDBM);
let elxQODm = eo('h4','LAMff'+iicDBM,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iibl45 = 'qsmTYFv' + i;
let elpm_bZ = eo('a','CqE0w9sgGok1' + i+iicDBM+iibl45,null,`href`,`${attachment}`,`target`,`_blank`);
let cndpbLI = isImage(attachment);
this.setState('stwWy4f', cndpbLI);
let cndmO59 = !(cndpbLI);
this.setState('stiNSP7', cndmO59);
if (cndpbLI) { 
let elN4KSo = ev('img','flpff'+iicDBM+iibl45,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elCwBu9 = eo('button','FFYff'+iicDBM+iibl45,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndwmwp = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stXd64D', cndwmwp);
let cnd74Y_ = cndj7_a;
this.setState('st4MdLg', cnd74Y_);
if (cndwmwp) { 
let el6R0kf = eo('form','WtAff'+iicDBM,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! el6R0kf.formHandler) {
                    window.cfrmdlr = el6R0kf.formHandler = new FormHandler(el6R0kf, component);
                } else {
                    window.cfrmdlr = el6R0kf.formHandler;
                }
            let cnd3JA9 = component.parentComment;
this.setState('stpAaz6', cnd3JA9);
if (cnd3JA9) { 
let elTvA14 = ev('input','HLEff'+iicDBM,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elTvA14.value = fval(component.parentComment.id);
}let elFSy6v = ev('input','q9jff'+iicDBM,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elFSy6v.value = fval(component.project.id);
let elfx8pq = ev('input','cUAff'+iicDBM,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elfx8pq.value = fval(component.typeId);
let elr6k20 = ev('input','ma5ff'+iicDBM,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elr6k20.value = fval(component.type);
let elUPDwz = ev('input','jjbff'+iicDBM,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elUPDwz.value = fval(component.commentId);
let elJPYsb = eo('textarea','4VGff'+iicDBM,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6R0kf.formHandler.addError(`comment`, 'required', trans('validation.required'));}return el6R0kf.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elJPYsb.value = fval(component.comment.comment);
ec('textarea');
let cnd9vTW = el6R0kf.formHandler.getError(`comment`);
this.setState('stXE2xf', cnd9vTW);
if (cnd9vTW) { 
let elDCTFf = eo('div','qIqff'+iicDBM,null,`class`,`alert alert-danger`);
text(el6R0kf.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cqpa_VArz', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el0YPC4 = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let eljZgwi = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iicDBM});
let cnduZ7q = ! component.isSending;
this.setState('steFlYg', cnduZ7q);
if (cnduZ7q) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('c60Bidl1b', {parent:component,state:'steFlYg',insideLoop:true,index:"" +iicDBM});
}let elHtm1X = eo('button','AITff'+iicDBM,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cndjcMd = ! comment.commentsAreOpened;
this.setState('stC9pBl', cndjcMd);
let cndm_k6 = cnd74Y_;
this.setState('staS1c3', cndm_k6);
if (cndjcMd) { 
let el2OlaX = eo('h2','zSdff'+iicDBM,null, eventListeners, {onclick:[function(e) {var $el = this;comment.commentsAreOpened = true; component.detectChanges();}]},`class`,`sub-comments-heading`);
let elGWbbv = eo('span','beBff'+iicDBM);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('h2');
}else if (cndm_k6) { 
let cmpSpsg = this._lc('cuU1xhnIm', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'staS1c3',insideLoop:true,index:"" +iicDBM});
}ec('div');
}
let cndv1N4 = component.disableComments && ! component.parentComment;
this.setState('sttlYM4', cndv1N4);
let cndzfmN = component.disableComments && component.parentComment;
this.setState('st6i48U', cndzfmN);
let cndlOq9 = !(cndv1N4||cndzfmN);
this.setState('stPNpOX', cndlOq9);
if (cndv1N4) { 
let elhDP6a = eo('div','u1if',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndzfmN) { 
let elbISh1 = eo('div');
ec('div');
}else { 
let el_Hi7H = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! el_Hi7H.formHandler) {
                    window.cfrmdlr = el_Hi7H.formHandler = new FormHandler(el_Hi7H, component);
                } else {
                    window.cfrmdlr = el_Hi7H.formHandler;
                }
            let cndCl_5 = component.parentComment;
this.setState('stOuYuG', cndCl_5);
if (cndCl_5) { 
let elnAfJ0 = ev('input','ZPcf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elnAfJ0.value = fval(component.parentComment.id);
}let elsYC6T = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elsYC6T.value = fval(component.project.id);
let eljiMIe = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
eljiMIe.value = fval(component.typeId);
let el8Js5_ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el8Js5_.value = fval(component.type);
let elMAA8l = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el_Hi7H.formHandler.addError(`comment`, 'required', trans('validation.required'));}return el_Hi7H.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elMAA8l.value = fval(component.newComment);
ec('textarea');
let cndus29 = el_Hi7H.formHandler.getError(`comment`);
this.setState('stUltRI', cndus29);
if (cndus29) { 
let elq6ose = eo('div','KzJf',null,`class`,`alert alert-danger`);
text(el_Hi7H.formHandler.getError(`comment`));
ec('div');
}let elLrHy1 = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cQlueS6eu', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elF0zSO = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let el6J8gx = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndgOfS = ! component.isSending;
this.setState('stY5uRG', cndgOfS);
if (cndgOfS) { 
component.recordAudio = this._lc('cjc89tW4w', {parent:component,attrs:{class:'audio-input'},state:'stY5uRG'});
}ec('div');
let elQ1_cP = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
let cnd0JJh = component.confirmDelete;
this.setState('stMIrnG', cnd0JJh);
if (cnd0JJh) { 
let cmpTURE = this._lc('cvzDuMyMc', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stMIrnG'});
}
                    this.isReadyToGo();
                }
        });