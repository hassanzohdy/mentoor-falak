_Component({
                selector: 'comments',
                c: 'Comments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','activeComment','project','user','comment','index','editMode','detectChanges','confirmRemoving','previewBy','currentRoute','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','toggleSubComment','openCommentReply','disableComments','scrollToForm','newComment','isRecording','recordAudio','fileInput','confirmDelete','remove'],
                children: {clyKSfzjb:'user-card',cm5JIe2R9:'user-card',cfDyaKSpj:'flk-time-ago',cWja5u8zf:'markdown',c34Opt0zi:'markdown',cJUMFOJaY:'flk-audio-player',cM7XXSaoV:'markdown-input',cPVX_eDSc:'flk-file-input',cEtNfRxEi:'record-audio-input',cSckU2_0p:'comments',cZoxbhu86:'markdown-input',c2NzFDnM8:'flk-file-input',cYXApDBjM:'record-audio-input',czNF92xdm:'flk-alert'},
                render: function (component) {
                    let elNSfss = eo('div',null,null,`class`,`comments-list`);
elNSfss.cls = {child: component.parentComment};

            for (let className in elNSfss.cls) {
                elNSfss.classList.toggle(className, elNSfss.cls[className]);
            }  
            let elEAjd7 = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndbuNB = ! component.parentComment;
this.setState('sttMZ0D', cndbuNB);
if (cndbuNB) { 
let elHrL1g = eo('span','LfTf');
text(`Comments
            (${ component.commentsList.length })`);
ec('span');
}ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let ii86Xm = comment.id+ index;
let ellFbq2 = eo('div','alzUyNhVouDK' + index+ii86Xm,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment p-1 m-b-1`);
ellFbq2.cls = {active: Boolean(component.activeComment && component.activeComment.id == comment.id)};

            for (let className in ellFbq2.cls) {
                ellFbq2.classList.toggle(className, ellFbq2.cls[className]);
            }  
            let cndIUt2 = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stFnjRN', cndIUt2);
if (cndIUt2) { 
let elVzCsC = eo('span','Jcyff'+ii86Xm,null,`class`,`action-btns`);
let cndETHM = ! component.comment || component.comment.id != comment.id;
this.setState('strBgtd', cndETHM);
let cnd8BHM = component.comment && component.comment.id == comment.id;
this.setState('stWUYHR', cnd8BHM);
if (cndETHM) { 
let eldUQz6 = eo('button','1ciff'+ii86Xm,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let el9v89_ = eo('i','_VCff'+ii86Xm,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cnd8BHM) { 
let el5E9S_ = eo('button','JGaff'+ii86Xm,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndkze4 = ! component.comment || component.comment.id != comment.id;
this.setState('st8VZ6u', cndkze4);
if (cndkze4) { 
let el_hmFl = eo('button','C8mff'+ii86Xm,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elqwFxM = eo('i','nnfff'+ii86Xm,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let eluWX15 = eo('div','ojSff'+ii86Xm,null,`class`,`w-100`);
let elfVQoY = eo('div','8anff'+ii86Xm,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromImage')}]},`class`,`relative d-inline-block v-top`);
let elpllxr = ev('img','v1off'+ii86Xm,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndkdpj = comment.previewUserFromImage;
this.setState('stEKLor', cndkdpj);
if (cndkdpj) { 
let cmpQkl2 = this._lc('clyKSfzjb', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromImage = false)}},state:'stEKLor',insideLoop:true,index:"" +ii86Xm});
}ec('div');
let elDaG4y = eo('div','oruff'+ii86Xm,null,`class`,`meta-comment`);
let elT1WQK = eo('div','Qi4ff'+ii86Xm,null,`class`,`relative d-inline-block`);
let el6PjQw = eo('span','CSoff'+ii86Xm,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromName')}]});
text(comment.createdBy.name);
ec('span');
let elwCrJN = eo('a','Eniff'+ii86Xm,null,`href`,`${component.currentRoute + '?comment=' + comment.tree}`,`title`,``);
let elMzYoy = eo('i','0Ksff'+ii86Xm,null,`class`,`${fas('link') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elwCrJN;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Comment url')}`});
        ;
                    }, 20);                
                let cndSeEP = comment.previewUserFromName;
this.setState('stZmUqV', cndSeEP);
if (cndSeEP) { 
let cmpeou9 = this._lc('cm5JIe2R9', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromName = false)}},state:'stZmUqV',insideLoop:true,index:"" +ii86Xm});
}ec('div');
let elhpOIp = eo('div','0fLff'+ii86Xm,null,`class`,`m-b-1`);
let cmpTDCf = this._lc('cfDyaKSpj', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +ii86Xm});
ec('div');
let cndrRNr = ! component.editMode;
this.setState('stJqV1N', cndrRNr);
if (cndrRNr) { 
let elA1mZR = eo('div','RfHff'+ii86Xm);
let cndtfWc = String(comment.comment).split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stA7MAM', cndtfWc);
let cndxj48 = !(cndtfWc);
this.setState('stnpYJr', cndxj48);
if (cndtfWc) { 
let cmpNvKJ = this._lc('cWja5u8zf', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stA7MAM',insideLoop:true,index:"" +ii86Xm});
}else { 
let cmpUbel = this._lc('c34Opt0zi', {parent:component,props:{content:String(comment.comment).split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stnpYJr',insideLoop:true,index:"" +ii86Xm});
let elFj2oD = eo('div','66qff'+ii86Xm);
text(`...`);
ec('div');
let ellP0Bh = eo('button','RPGff'+ii86Xm,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndqYHh = comment.record;
this.setState('stkQiY2', cndqYHh);
if (cndqYHh) { 
let elip_4Z = eo('div','hPbff'+ii86Xm,null,`class`,`m-t-1`);
let cmppByU = this._lc('cJUMFOJaY', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stkQiY2',insideLoop:true,index:"" +ii86Xm});
ec('div');
}ec('div');
ec('div');
let cnd5T6H = ! Is.empty(comment.attachments);
this.setState('stRu6mc', cnd5T6H);
if (cnd5T6H) { 
let elz6mbz = eo('div','2Aiff'+ii86Xm);
let el2DCOe = eo('h4','rF7ff'+ii86Xm,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiV_W1 = 'NMsFhhV' + i;
let elv8MzU = eo('a','Nm9bWAiTC0ab' + i+ii86Xm+iiV_W1,null,`href`,`${attachment}`,`target`,`_blank`);
let cndZjTD = isImage(attachment);
this.setState('stt_uOS', cndZjTD);
let cndyJO9 = !(cndZjTD);
this.setState('stg4zuT', cndyJO9);
if (cndZjTD) { 
let elQ43PA = ev('img','8C9ff'+ii86Xm+iiV_W1,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elFs5_Q = eo('button','vRSff'+ii86Xm+iiV_W1,null,`class`,`btn btn-sm bold btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndV3mN = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stnkrTg', cndV3mN);
if (cndV3mN) { 
let eltwAzL = eo('form','r6Mff'+ii86Xm,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! eltwAzL.formHandler) {
                    window.cfrmdlr = eltwAzL.formHandler = new FormHandler(eltwAzL, component);
                } else {
                    window.cfrmdlr = eltwAzL.formHandler;
                }
            let cndlGIE = component.parentComment;
this.setState('st7P_ST', cndlGIE);
if (cndlGIE) { 
let el9DQBo = ev('input','IlMff'+ii86Xm,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
el9DQBo.value = fval(component.parentComment.id);
}let cndXVkJ = component.project.id;
this.setState('stpxp5u', cndXVkJ);
if (cndXVkJ) { 
let elDNQdq = ev('input','QR6ff'+ii86Xm,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elDNQdq.value = fval(component.project.id);
}let elDOlUm = ev('input','i5wff'+ii86Xm,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elDOlUm.value = fval(component.typeId);
let el4QKaI = ev('input','39Nff'+ii86Xm,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el4QKaI.value = fval(component.type);
let elZzHu8 = ev('input','n8zff'+ii86Xm,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elZzHu8.value = fval(component.commentId);
let cmpZLxv = this._lc('cM7XXSaoV', {parent:component,props:{value:component.comment.comment},events:{onchange:function(e) {let $el = this; component.comment.comment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment...`)}`},insideLoop:true,index:"" +ii86Xm});

                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cPVX_eDSc', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el5Ijxx = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elO_R1B = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +ii86Xm});
let cndhTji = ! component.isSending;
this.setState('stlyerB', cndhTji);
if (cndhTji) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cEtNfRxEi', {parent:component,state:'stlyerB',insideLoop:true,index:"" +ii86Xm});
}let el1nTvP = eo('button','eSRff'+ii86Xm,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let elK4wf_ = eo('h2','X43ff'+ii86Xm,null,`class`,`sub-comments-heading`);
let el21oer = eo('span','IFaff'+ii86Xm,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleSubComment(comment)}]});
let elgl9xc = eo('span','wrAff'+ii86Xm);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('span');
let cnd_5vL = Comments.writeComment === false;
this.setState('stsNYME', cnd_5vL);
if (cnd_5vL) { 
let elZ8uSi = eo('button','6aPff'+ii86Xm,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCommentReply(comment)}]},`class`,`btn btn btn-sm btn-gray cc`);
text(`Reply`);
ec('button');
}ec('h2');
let cndFMSA = comment.commentsAreOpened;
this.setState('stskml7', cndFMSA);
if (cndFMSA) { 
let cmpvj3Y = this._lc('cSckU2_0p', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stskml7',insideLoop:true,index:"" +ii86Xm});
}ec('div');
}
let cndsEp2 = component.disableComments && ! component.parentComment;
this.setState('st7bc4e', cndsEp2);
let cndR3Kt = Comments.writeComment === false && ! component.parentComment;
this.setState('stshzpT', cndR3Kt);
let cndEmgp = Comments.writeComment === component.parentComment;
this.setState('std5nrP', cndEmgp);
if (cndsEp2) { 
let elKIvmX = eo('div','RtMf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndR3Kt) { 
let elbDAad = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = component.parentComment; component.detectChanges();}]},`class`,`btn btn btn-gray`);
text(`Reply`);
ec('button');
}else if (cndEmgp) { 
let elx9Msj = eo('form',null,null, eventListeners, {onready:[function(e) {var $el = this;component.scrollToForm($el)}],onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elx9Msj.formHandler) {
                    window.cfrmdlr = elx9Msj.formHandler = new FormHandler(elx9Msj, component);
                } else {
                    window.cfrmdlr = elx9Msj.formHandler;
                }
            let cnd5LrU = component.parentComment;
this.setState('stvfWAT', cnd5LrU);
if (cnd5LrU) { 
let elMgHQ0 = ev('input','Sy6f',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elMgHQ0.value = fval(component.parentComment.id);
}let el6KS92 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el6KS92.value = fval(component.project.id);
let el2fZmF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el2fZmF.value = fval(component.typeId);
let elpbhIF = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elpbhIF.value = fval(component.type);
let cmpb520 = this._lc('cZoxbhu86', {parent:component,props:{value:component.newComment},events:{onchange:function(e) {let $el = this; component.newComment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment... (Markdown Support)`)}`}});
let elfnoBx = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('c2NzFDnM8', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elxAyX_ = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elxA5PE = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndEdit = ! component.isSending;
this.setState('stM0Ptr', cndEdit);
if (cndEdit) { 
component.recordAudio = this._lc('cYXApDBjM', {parent:component,events:{onstart:function(e) {let $el = this; component.isRecording = true},onrecord:function(e) {let $el = this; component.isRecording = false;}},attrs:{class:'audio-input'},state:'stM0Ptr'});
}ec('div');
let elluCQm = eo('button',null,null, boolAttrs, {disabled:(! component.newComment && ! component.recordAudio.recordData && component.fileInput.fileInput.files.length == 0) || component.isSending || ! component.isValidForm || component.isRecording},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
let elp_XAR = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = false;  component.detectChanges();}]},`type`,`button`,`class`,`btn btn-light`);
text(`Cancel`);
ec('button');
ec('form');

                    setTimeout(function () {
                        let $el = elx9Msj;
                        component.scrollToForm($el);
                    }, 20);                
                }ec('div');
let cndh9wz = component.confirmDelete;
this.setState('stcezas', cndh9wz);
if (cndh9wz) { 
let cmpwBdN = this._lc('czNF92xdm', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null;  component.detectChanges();},onconfirm:function(e) {let $el = this; component.remove()}},state:'stcezas'});
}
                    this.isReadyToGo();
                }
        });