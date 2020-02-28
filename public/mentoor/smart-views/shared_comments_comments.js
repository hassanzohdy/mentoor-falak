_Component({
                selector: 'comments',
                c: 'Comments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','activeComment','project','user','comment','index','editMode','detectChanges','confirmRemoving','previewBy','currentRoute','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','toggleSubComment','openCommentReply','disableComments','scrollToForm','newComment','isRecording','recordAudio','fileInput','confirmDelete','remove'],
                children: {c_7AqlnSc:'user-card',cZUWNPNMH:'user-card',cLjx0TbNy:'flk-time-ago',cadnhLgiw:'markdown',cx3WxpVYv:'markdown',cLJxrqmcD:'flk-audio-player',cQFCWJttm:'markdown-input',c79e5Q2Mm:'flk-file-input',ca36mBnez:'record-audio-input',c7nU4TESB:'comments',csZ7i9R3z:'markdown-input',clZSfiQI6:'flk-file-input',coeQrc0mV:'record-audio-input',cZ5a8a_D5:'flk-alert'},
                render: function (component) {
                    let elgY2rp = eo('div',null,null,`class`,`comments-list ${cls({child: component.parentComment})}`);
let el5kHWk = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndAH2O = ! component.parentComment;
this.setState('stSDm9E', cndAH2O);
if (cndAH2O) { 
let el6CR0o = eo('span','m_2f');
text(`Comments
            (${ component.commentsList.length })`);
ec('span');
}ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iiyxMS = comment.id+ index;
let elTsDJ6 = eo('div','cSDmGdoPW9yD' + index+iiyxMS,null,`class`,`comment p-1 m-b-1 ${cls({active: Boolean(component.activeComment && component.activeComment.id == comment.id)})}`,`id`,`${'cmnt' + comment.id}`);
let cndzX0Z = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stfDal_', cndzX0Z);
if (cndzX0Z) { 
let elpL69A = eo('span','i6Dff'+iiyxMS,null,`class`,`action-btns`);
let cndiU6A = ! component.comment || component.comment.id != comment.id;
this.setState('stKiWbk', cndiU6A);
let cndshVD = component.comment && component.comment.id == comment.id;
this.setState('stHpzG2', cndshVD);
if (cndiU6A) { 
let elLAff4 = eo('button','OTOff'+iiyxMS,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elbEVSO = eo('i','YvEff'+iiyxMS,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndshVD) { 
let elNvPSu = eo('button','B3Uff'+iiyxMS,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndVelf = ! component.comment || component.comment.id != comment.id;
this.setState('stS2XQA', cndVelf);
if (cndVelf) { 
let eltoua9 = eo('button','wfaff'+iiyxMS,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let el6eDlZ = eo('i','Ffrff'+iiyxMS,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elfUYaV = eo('div','JTbff'+iiyxMS,null,`class`,`w-100`);
let elHoiNb = eo('div','jMPff'+iiyxMS,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromImage')}]},`class`,`relative d-inline-block v-top`);
let el28uXo = ev('img','wPfff'+iiyxMS,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndiKNo = comment.previewUserFromImage;
this.setState('stIhqcy', cndiKNo);
if (cndiKNo) { 
let cmpkTnG = this._lc('c_7AqlnSc', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromImage = false)}},state:'stIhqcy',insideLoop:true,index:"" +iiyxMS});
}ec('div');
let elJlAxO = eo('div','l2bff'+iiyxMS,null,`class`,`meta-comment`);
let elMkuDU = eo('div','aaNff'+iiyxMS,null,`class`,`relative d-inline-block`);
let eliq7St = eo('span','hxbff'+iiyxMS,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromName')}]});
text(comment.createdBy.name);
ec('span');
let elm9Rfb = eo('a','6pZff'+iiyxMS,null,`href`,`${component.currentRoute + '?comment=' + comment.tree}`,`title`,``);
let el6Y8A4 = eo('i','A0gff'+iiyxMS,null,`class`,`${fas('link')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elm9Rfb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Comment url')}`});
        ;
                    }, 20);                
                let cndbnVU = comment.previewUserFromName;
this.setState('stbLm04', cndbnVU);
if (cndbnVU) { 
let cmpP9ip = this._lc('cZUWNPNMH', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromName = false)}},state:'stbLm04',insideLoop:true,index:"" +iiyxMS});
}ec('div');
let elRnWog = eo('div','ZQqff'+iiyxMS,null,`class`,`m-b-1`);
let cmp1qrG = this._lc('cLjx0TbNy', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiyxMS});
ec('div');
let cndhuF1 = ! component.editMode;
this.setState('stUYqKS', cndhuF1);
if (cndhuF1) { 
let elNhLUy = eo('div','a1Lff'+iiyxMS);
let cnd_igc = String(comment.comment).split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('st441NW', cnd_igc);
let cndqFBC = !(cnd_igc);
this.setState('stNyo01', cndqFBC);
if (cnd_igc) { 
let cmpMMrD = this._lc('cadnhLgiw', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'st441NW',insideLoop:true,index:"" +iiyxMS});
}else { 
let cmp5Yyx = this._lc('cx3WxpVYv', {parent:component,props:{content:String(comment.comment).split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stNyo01',insideLoop:true,index:"" +iiyxMS});
let elvgEUE = eo('div','ociff'+iiyxMS);
text(`...`);
ec('div');
let elCOL2s = eo('button','rVmff'+iiyxMS,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndE7dL = comment.record;
this.setState('stoG3oV', cndE7dL);
if (cndE7dL) { 
let elY770p = eo('div','O0Jff'+iiyxMS,null,`class`,`m-t-1`);
let cmp2vdl = this._lc('cLJxrqmcD', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stoG3oV',insideLoop:true,index:"" +iiyxMS});
ec('div');
}ec('div');
ec('div');
let cnd4MAB = ! Is.empty(comment.attachments);
this.setState('st5T4Ou', cnd4MAB);
if (cnd4MAB) { 
let elGyfGv = eo('div','Z_9ff'+iiyxMS);
let el4xgdG = eo('h4','fVbff'+iiyxMS,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiISYa = 'vFnfEUq' + i;
let el21VZO = eo('a','xGIr7HLyr9F_' + i+iiyxMS+iiISYa,null,`href`,`${attachment}`,`target`,`_blank`);
let cndTKyO = isImage(attachment);
this.setState('stA_mXu', cndTKyO);
let cndXDPO = !(cndTKyO);
this.setState('stjGrYI', cndXDPO);
if (cndTKyO) { 
let elb_nyn = ev('img','15Yff'+iiyxMS+iiISYa,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elI4o3X = eo('button','tIvff'+iiyxMS+iiISYa,null,`class`,`btn btn-sm bold btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndxRa8 = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('st0IjMX', cndxRa8);
if (cndxRa8) { 
let elq6HCV = eo('form','bwXff'+iiyxMS,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elq6HCV.formHandler) {
                    window.cfrmdlr = elq6HCV.formHandler = new FormHandler(elq6HCV, component);
                } else {
                    window.cfrmdlr = elq6HCV.formHandler;
                }
            let cndgLSb = component.parentComment;
this.setState('st7jF6u', cndgLSb);
if (cndgLSb) { 
let eljf4Hy = ev('input','Pvlff'+iiyxMS,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
eljf4Hy.value = fval(component.parentComment.id);
}let cnd7Pzo = component.project.id;
this.setState('strLb3x', cnd7Pzo);
if (cnd7Pzo) { 
let elxFPPJ = ev('input','hvhff'+iiyxMS,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elxFPPJ.value = fval(component.project.id);
}let elledSC = ev('input','Gtgff'+iiyxMS,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elledSC.value = fval(component.typeId);
let elw2ewN = ev('input','oXgff'+iiyxMS,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elw2ewN.value = fval(component.type);
let el9yUET = ev('input','qC7ff'+iiyxMS,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
el9yUET.value = fval(component.commentId);
let cmpgsor = this._lc('cQFCWJttm', {parent:component,props:{value:component.comment.comment},events:{onchange:function(e) {let $el = this; component.comment.comment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment...`)}`},insideLoop:true,index:"" +iiyxMS});

                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('c79e5Q2Mm', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elPI5Jf = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elRmDVm = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiyxMS});
let cndZ0um = ! component.isSending;
this.setState('stLLzKI', cndZ0um);
if (cndZ0um) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('ca36mBnez', {parent:component,state:'stLLzKI',insideLoop:true,index:"" +iiyxMS});
}let elXMhkG = eo('button','wGqff'+iiyxMS,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let elLrMQ9 = eo('h2','dhxff'+iiyxMS,null,`class`,`sub-comments-heading`);
let elbTX1y = eo('span','EWFff'+iiyxMS,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleSubComment(comment)}]});
let eloiI0D = eo('span','VWaff'+iiyxMS);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('span');
let cndPJMa = Comments.writeComment === false;
this.setState('stb5ile', cndPJMa);
if (cndPJMa) { 
let elMmoZI = eo('button','Uq4ff'+iiyxMS,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCommentReply(comment)}]},`class`,`btn btn btn-sm btn-gray cc`);
text(`Reply`);
ec('button');
}ec('h2');
let cndIh02 = comment.commentsAreOpened;
this.setState('stF5vpU', cndIh02);
if (cndIh02) { 
let cmp05cQ = this._lc('c7nU4TESB', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stF5vpU',insideLoop:true,index:"" +iiyxMS});
}ec('div');
}
let cndv5my = component.disableComments && ! component.parentComment;
this.setState('stNh5B3', cndv5my);
let cnd9f7D = Comments.writeComment === false && ! component.parentComment;
this.setState('stGX4TS', cnd9f7D);
let cndjYhP = Comments.writeComment === component.parentComment;
this.setState('stiwuzu', cndjYhP);
if (cndv5my) { 
let elkvYgH = eo('div','9isf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cnd9f7D) { 
let elAGZ0L = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = component.parentComment; component.detectChanges();}]},`class`,`btn btn btn-gray`);
text(`Reply`);
ec('button');
}else if (cndjYhP) { 
let elIE3zD = eo('form',null,null, eventListeners, {onready:[function(e) {var $el = this;component.scrollToForm($el)}],onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elIE3zD.formHandler) {
                    window.cfrmdlr = elIE3zD.formHandler = new FormHandler(elIE3zD, component);
                } else {
                    window.cfrmdlr = elIE3zD.formHandler;
                }
            let cndwqrn = component.parentComment;
this.setState('staBwIR', cndwqrn);
if (cndwqrn) { 
let elbKPak = ev('input','fixf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elbKPak.value = fval(component.parentComment.id);
}let elG1JTB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elG1JTB.value = fval(component.project.id);
let elCVCsZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elCVCsZ.value = fval(component.typeId);
let elzgzgx = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elzgzgx.value = fval(component.type);
let cmpD0Nl = this._lc('csZ7i9R3z', {parent:component,props:{value:component.newComment},events:{onchange:function(e) {let $el = this; component.newComment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment... (Markdown Support)`)}`}});
let elwgwAE = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('clZSfiQI6', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elv3tQ3 = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elvFUKn = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndgXmk = ! component.isSending;
this.setState('stAegEi', cndgXmk);
if (cndgXmk) { 
component.recordAudio = this._lc('coeQrc0mV', {parent:component,events:{onstart:function(e) {let $el = this; component.isRecording = true},onrecord:function(e) {let $el = this; component.isRecording = false;}},attrs:{class:'audio-input'},state:'stAegEi'});
}ec('div');
let elBtlfP = eo('button',null,null, boolAttrs, {disabled:(! component.newComment && ! component.recordAudio.recordData && component.fileInput.fileInput.files.length == 0) || component.isSending || ! component.isValidForm || component.isRecording},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
let elycnch = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = false;  component.detectChanges();}]},`type`,`button`,`class`,`btn btn-light`);
text(`Cancel`);
ec('button');
ec('form');

                    setTimeout(function () {
                        let $el = elIE3zD;
                        component.scrollToForm($el);
                    }, 20);                
                }ec('div');
let cndSVu_ = component.confirmDelete;
this.setState('stg6aes', cndSVu_);
if (cndSVu_) { 
let cmpibfG = this._lc('cZ5a8a_D5', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null;  component.detectChanges();},onconfirm:function(e) {let $el = this; component.remove()}},state:'stg6aes'});
}
                    this.isReadyToGo();
                }
        });