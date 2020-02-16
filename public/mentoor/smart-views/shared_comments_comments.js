_Component({
                selector: 'comments',
                c: 'Comments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','activeComment','project','user','comment','index','editMode','detectChanges','confirmRemoving','previewBy','currentRoute','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','toggleSubComment','openCommentReply','disableComments','scrollToForm','newComment','isRecording','recordAudio','fileInput','confirmDelete','remove'],
                children: {cFXrDzigS:'user-card',ctJsC47SM:'user-card',cmSBcEt3K:'flk-time-ago',cYvmXJpVV:'markdown',cDic1Zwvs:'markdown',cKnsYAtfJ:'flk-audio-player',c1hlsdMUP:'markdown-input',cz1VFfppc:'flk-file-input',c3ffNNXy5:'record-audio-input',cvEAfmnmw:'comments',c2ZyqeKPS:'markdown-input',cIM2J2vc_:'flk-file-input',czHIN7Ny_:'record-audio-input',clS0SW5uE:'flk-alert'},
                render: function (component) {
                    let elb5w1J = eo('div',null,null,`class`,`comments-list`);
elb5w1J.cls = {child: component.parentComment};

            for (let className in elb5w1J.cls) {
                elb5w1J.classList.toggle(className, elb5w1J.cls[className]);
            }  
            let elznE3p = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndGAh6 = ! component.parentComment;
this.setState('stViAcd', cndGAh6);
if (cndGAh6) { 
let elbczPA = eo('span','Nscf');
text(`Comments
            (${ component.commentsList.length })`);
ec('span');
}ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iijtdd = comment.id+ index;
let elo0bIp = eo('div','usVA4iiZOn5e' + index+iijtdd,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment p-1 m-b-1`);
elo0bIp.cls = {active: Boolean(component.activeComment && component.activeComment.id == comment.id)};

            for (let className in elo0bIp.cls) {
                elo0bIp.classList.toggle(className, elo0bIp.cls[className]);
            }  
            let cndXJnZ = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stJ5nK6', cndXJnZ);
if (cndXJnZ) { 
let elaPZ1R = eo('span','nnGff'+iijtdd,null,`class`,`action-btns`);
let cndX50G = ! component.comment || component.comment.id != comment.id;
this.setState('stR2Xcy', cndX50G);
let cndSjaB = component.comment && component.comment.id == comment.id;
this.setState('stVNUNw', cndSjaB);
if (cndX50G) { 
let eliOjaw = eo('button','oTkff'+iijtdd,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elK_UyB = eo('i','EuUff'+iijtdd,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndSjaB) { 
let elPfWty = eo('button','RB1ff'+iijtdd,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndqjGi = ! component.comment || component.comment.id != comment.id;
this.setState('stlhN_g', cndqjGi);
if (cndqjGi) { 
let elHWOpF = eo('button','cl2ff'+iijtdd,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elMKkOU = eo('i','Fsaff'+iijtdd,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let eliJz9E = eo('div','awJff'+iijtdd,null,`class`,`w-100`);
let elzoTti = eo('div','aUyff'+iijtdd,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromImage')}]},`class`,`relative d-inline-block v-top`);
let elkBWea = ev('img','zjlff'+iijtdd,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndezTT = comment.previewUserFromImage;
this.setState('stf2j5b', cndezTT);
if (cndezTT) { 
let cmpAqec = this._lc('cFXrDzigS', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromImage = false)}},state:'stf2j5b',insideLoop:true,index:"" +iijtdd});
}ec('div');
let elnffKp = eo('div','BObff'+iijtdd,null,`class`,`meta-comment`);
let elSZ1x5 = eo('div','ClOff'+iijtdd,null,`class`,`relative d-inline-block`);
let elfVkh9 = eo('span','Ds4ff'+iijtdd,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromName')}]});
text(comment.createdBy.name);
ec('span');
let elVmh_T = eo('a','fLUff'+iijtdd,null,`href`,`${component.currentRoute + '?comment=' + comment.tree}`,`title`,``);
let elWgJOk = eo('i','jskff'+iijtdd,null,`class`,`${fas('link') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elVmh_T;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Comment url')}`});
        ;
                    }, 20);                
                let cndId2C = comment.previewUserFromName;
this.setState('st9h8Vl', cndId2C);
if (cndId2C) { 
let cmpoCCr = this._lc('ctJsC47SM', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromName = false)}},state:'st9h8Vl',insideLoop:true,index:"" +iijtdd});
}ec('div');
let elIf5Ic = eo('div','SS1ff'+iijtdd,null,`class`,`m-b-1`);
let cmpAHvi = this._lc('cmSBcEt3K', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iijtdd});
ec('div');
let cnd5Obb = ! component.editMode;
this.setState('strHT2x', cnd5Obb);
if (cnd5Obb) { 
let el13u9q = eo('div','EE6ff'+iijtdd);
let cndM5s_ = String(comment.comment).split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stNgjtk', cndM5s_);
let cndzck5 = !(cndM5s_);
this.setState('stIe9gU', cndzck5);
if (cndM5s_) { 
let cmpFmMh = this._lc('cYvmXJpVV', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stNgjtk',insideLoop:true,index:"" +iijtdd});
}else { 
let cmp8L0U = this._lc('cDic1Zwvs', {parent:component,props:{content:String(comment.comment).split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stIe9gU',insideLoop:true,index:"" +iijtdd});
let eloaQ9I = eo('div','CsTff'+iijtdd);
text(`...`);
ec('div');
let elReDNM = eo('button','REQff'+iijtdd,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cnd71PI = comment.record;
this.setState('stCQAcm', cnd71PI);
if (cnd71PI) { 
let el49OV0 = eo('div','1voff'+iijtdd,null,`class`,`m-t-1`);
let cmpNtm0 = this._lc('cKnsYAtfJ', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stCQAcm',insideLoop:true,index:"" +iijtdd});
ec('div');
}ec('div');
ec('div');
let cnd72av = ! Is.empty(comment.attachments);
this.setState('st2ZLes', cnd72av);
if (cnd72av) { 
let elNtnER = eo('div','7aaff'+iijtdd);
let elrmagp = eo('h4','eL4ff'+iijtdd,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let ii_vst = 'aWDtkk0' + i;
let elr1N28 = eo('a','ok_gjucyyOp6' + i+iijtdd+ii_vst,null,`href`,`${attachment}`,`target`,`_blank`);
let cnd6FAj = isImage(attachment);
this.setState('stlWgqp', cnd6FAj);
let cndwKsG = !(cnd6FAj);
this.setState('stdMwFR', cndwKsG);
if (cnd6FAj) { 
let el2IJsh = ev('img','A0Rff'+iijtdd+ii_vst,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let ela109m = eo('button','uxWff'+iijtdd+ii_vst,null,`class`,`btn btn-sm bold btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndswww = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stVbcyI', cndswww);
if (cndswww) { 
let elcTR4H = eo('form','CTyff'+iijtdd,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elcTR4H.formHandler) {
                    window.cfrmdlr = elcTR4H.formHandler = new FormHandler(elcTR4H, component);
                } else {
                    window.cfrmdlr = elcTR4H.formHandler;
                }
            let cndki88 = component.parentComment;
this.setState('st8IB6P', cndki88);
if (cndki88) { 
let elJ6djZ = ev('input','Po1ff'+iijtdd,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elJ6djZ.value = fval(component.parentComment.id);
}let cnd3cFg = component.project.id;
this.setState('stJ7NML', cnd3cFg);
if (cnd3cFg) { 
let elir827 = ev('input','WsIff'+iijtdd,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elir827.value = fval(component.project.id);
}let elswsUt = ev('input','Bjnff'+iijtdd,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elswsUt.value = fval(component.typeId);
let ellpIc_ = ev('input','w7yff'+iijtdd,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
ellpIc_.value = fval(component.type);
let eleI0yZ = ev('input','igZff'+iijtdd,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
eleI0yZ.value = fval(component.commentId);
let cmp6uQj = this._lc('c1hlsdMUP', {parent:component,props:{value:component.comment.comment},events:{onchange:function(e) {let $el = this; component.comment.comment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment...`)}`},insideLoop:true,index:"" +iijtdd});

                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cz1VFfppc', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el6F5NJ = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elVmzD4 = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iijtdd});
let cndWlKP = ! component.isSending;
this.setState('std0N_R', cndWlKP);
if (cndWlKP) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('c3ffNNXy5', {parent:component,state:'std0N_R',insideLoop:true,index:"" +iijtdd});
}let elUb5qB = eo('button','2Pnff'+iijtdd,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let elCiofs = eo('h2','LPSff'+iijtdd,null,`class`,`sub-comments-heading`);
let elkvGr6 = eo('span','tGrff'+iijtdd,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleSubComment(comment)}]});
let el913xv = eo('span','tpYff'+iijtdd);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('span');
let cndld1w = Comments.writeComment === false;
this.setState('sta4jlM', cndld1w);
if (cndld1w) { 
let elfPAIg = eo('button','luWff'+iijtdd,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCommentReply(comment)}]},`class`,`btn btn btn-sm btn-gray cc`);
text(`Reply`);
ec('button');
}ec('h2');
let cndZG_V = comment.commentsAreOpened;
this.setState('stsF0tC', cndZG_V);
if (cndZG_V) { 
let cmpqNdk = this._lc('cvEAfmnmw', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stsF0tC',insideLoop:true,index:"" +iijtdd});
}ec('div');
}
let cndUKdD = component.disableComments && ! component.parentComment;
this.setState('st20Ry4', cndUKdD);
let cndvk_7 = Comments.writeComment === false && ! component.parentComment;
this.setState('stt7NmN', cndvk_7);
let cndh1Yp = Comments.writeComment === component.parentComment;
this.setState('st6EwQA', cndh1Yp);
if (cndUKdD) { 
let el6d0j1 = eo('div','RUJf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndvk_7) { 
let elBgGqX = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = component.parentComment; component.detectChanges();}]},`class`,`btn btn btn-gray`);
text(`Reply`);
ec('button');
}else if (cndh1Yp) { 
let elj_w7m = eo('form',null,null, eventListeners, {onready:[function(e) {var $el = this;component.scrollToForm($el)}],onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elj_w7m.formHandler) {
                    window.cfrmdlr = elj_w7m.formHandler = new FormHandler(elj_w7m, component);
                } else {
                    window.cfrmdlr = elj_w7m.formHandler;
                }
            let cndi8Ju = component.parentComment;
this.setState('stJtMEs', cndi8Ju);
if (cndi8Ju) { 
let elQDMEn = ev('input','Duif',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elQDMEn.value = fval(component.parentComment.id);
}let el3efDg = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el3efDg.value = fval(component.project.id);
let el0Dqiv = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el0Dqiv.value = fval(component.typeId);
let elKbAX5 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elKbAX5.value = fval(component.type);
let cmp3qcA = this._lc('c2ZyqeKPS', {parent:component,props:{value:component.newComment},events:{onchange:function(e) {let $el = this; component.newComment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment... (Markdown Support)`)}`}});
let elnmcIB = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cIM2J2vc_', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elyZfpj = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elJRtnl = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndBHEp = ! component.isSending;
this.setState('stOZoHR', cndBHEp);
if (cndBHEp) { 
component.recordAudio = this._lc('czHIN7Ny_', {parent:component,events:{onstart:function(e) {let $el = this; component.isRecording = true},onrecord:function(e) {let $el = this; component.isRecording = false;}},attrs:{class:'audio-input'},state:'stOZoHR'});
}ec('div');
let elOvLPL = eo('button',null,null, boolAttrs, {disabled:(! component.newComment && ! component.recordAudio.recordData && component.fileInput.fileInput.files.length == 0) || component.isSending || ! component.isValidForm || component.isRecording},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
let elghWo9 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = false;  component.detectChanges();}]},`type`,`button`,`class`,`btn btn-light`);
text(`Cancel`);
ec('button');
ec('form');

                    setTimeout(function () {
                        let $el = elj_w7m;
                        component.scrollToForm($el);
                    }, 20);                
                }ec('div');
let cndOfDf = component.confirmDelete;
this.setState('stoVIQs', cndOfDf);
if (cndOfDf) { 
let cmpbhOo = this._lc('clS0SW5uE', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null;  component.detectChanges();},onconfirm:function(e) {let $el = this; component.remove()}},state:'stoVIQs'});
}
                    this.isReadyToGo();
                }
        });