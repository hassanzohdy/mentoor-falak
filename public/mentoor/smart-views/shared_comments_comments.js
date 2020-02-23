_Component({
                selector: 'comments',
                c: 'Comments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','activeComment','project','user','comment','index','editMode','detectChanges','confirmRemoving','previewBy','currentRoute','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','toggleSubComment','openCommentReply','disableComments','scrollToForm','newComment','isRecording','recordAudio','fileInput','confirmDelete','remove'],
                children: {c7Hsn7Hky:'user-card',cKS0_Cm9D:'user-card',cnKRAotW1:'flk-time-ago',cHhthCPmk:'markdown',cn3adz26b:'markdown',cwExMAeAe:'flk-audio-player',chDVpfz1H:'markdown-input',cvw3RINz6:'flk-file-input',cplwt5eG4:'record-audio-input',cUmiG264q:'comments',cmevc49xA:'markdown-input',cgX5QFDOb:'flk-file-input',cTyplpoXW:'record-audio-input',cSMtUNkD9:'flk-alert'},
                render: function (component) {
                    let elqshmt = eo('div',null,null,`class`,`comments-list`);
elqshmt.cls = {child: component.parentComment};

            for (let className in elqshmt.cls) {
                elqshmt.classList.toggle(className, elqshmt.cls[className]);
            }  
            let elelnbG = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndyo2Z = ! component.parentComment;
this.setState('ststkBD', cndyo2Z);
if (cndyo2Z) { 
let elAhsTP = eo('span','0sBf');
text(`Comments
            (${ component.commentsList.length })`);
ec('span');
}ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iiNy9P = comment.id+ index;
let elbB6vv = eo('div','O3PcwQT4k1zu' + index+iiNy9P,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment p-1 m-b-1`);
elbB6vv.cls = {active: Boolean(component.activeComment && component.activeComment.id == comment.id)};

            for (let className in elbB6vv.cls) {
                elbB6vv.classList.toggle(className, elbB6vv.cls[className]);
            }  
            let cndWqPu = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stJwyuB', cndWqPu);
if (cndWqPu) { 
let elWson4 = eo('span','o5Cff'+iiNy9P,null,`class`,`action-btns`);
let cndMbji = ! component.comment || component.comment.id != comment.id;
this.setState('stouDNs', cndMbji);
let cnd175R = component.comment && component.comment.id == comment.id;
this.setState('stS1uAG', cnd175R);
if (cndMbji) { 
let elVEHvi = eo('button','Ceiff'+iiNy9P,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elQnScW = eo('i','R_2ff'+iiNy9P,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cnd175R) { 
let elVBLSv = eo('button','tsVff'+iiNy9P,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndGdmi = ! component.comment || component.comment.id != comment.id;
this.setState('stg23Tw', cndGdmi);
if (cndGdmi) { 
let el1ONY2 = eo('button','IIBff'+iiNy9P,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elUNLEm = eo('i','6v7ff'+iiNy9P,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elrK9W4 = eo('div','t8sff'+iiNy9P,null,`class`,`w-100`);
let elQhU3Y = eo('div','NwLff'+iiNy9P,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromImage')}]},`class`,`relative d-inline-block v-top`);
let elLeF9D = ev('img','hrHff'+iiNy9P,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndWmU8 = comment.previewUserFromImage;
this.setState('stg5D2i', cndWmU8);
if (cndWmU8) { 
let cmpvvb5 = this._lc('c7Hsn7Hky', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromImage = false)}},state:'stg5D2i',insideLoop:true,index:"" +iiNy9P});
}ec('div');
let eln8qEA = eo('div','NJlff'+iiNy9P,null,`class`,`meta-comment`);
let ello9m9 = eo('div','14Aff'+iiNy9P,null,`class`,`relative d-inline-block`);
let el6DZZi = eo('span','6Koff'+iiNy9P,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromName')}]});
text(comment.createdBy.name);
ec('span');
let elPkNal = eo('a','Ymjff'+iiNy9P,null,`href`,`${component.currentRoute + '?comment=' + comment.tree}`,`title`,``);
let eltPltR = eo('i','EBiff'+iiNy9P,null,`class`,`${fas('link') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elPkNal;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Comment url')}`});
        ;
                    }, 20);                
                let cnddvV7 = comment.previewUserFromName;
this.setState('stxHNvK', cnddvV7);
if (cnddvV7) { 
let cmpbsBf = this._lc('cKS0_Cm9D', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromName = false)}},state:'stxHNvK',insideLoop:true,index:"" +iiNy9P});
}ec('div');
let elNe2Tq = eo('div','K88ff'+iiNy9P,null,`class`,`m-b-1`);
let cmpDMr8 = this._lc('cnKRAotW1', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiNy9P});
ec('div');
let cndmrL3 = ! component.editMode;
this.setState('stJLgP5', cndmrL3);
if (cndmrL3) { 
let eljHv5y = eo('div','mT3ff'+iiNy9P);
let cndTlIP = String(comment.comment).split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('ste7DB6', cndTlIP);
let cndAKWl = !(cndTlIP);
this.setState('stBw_jt', cndAKWl);
if (cndTlIP) { 
let cmp4OKd = this._lc('cHhthCPmk', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'ste7DB6',insideLoop:true,index:"" +iiNy9P});
}else { 
let cmpiQUn = this._lc('cn3adz26b', {parent:component,props:{content:String(comment.comment).split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stBw_jt',insideLoop:true,index:"" +iiNy9P});
let elT2MXv = eo('div','4U1ff'+iiNy9P);
text(`...`);
ec('div');
let ellBIwB = eo('button','lNDff'+iiNy9P,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndkGqO = comment.record;
this.setState('st2ftId', cndkGqO);
if (cndkGqO) { 
let elQU9NP = eo('div','DOYff'+iiNy9P,null,`class`,`m-t-1`);
let cmp5KWL = this._lc('cwExMAeAe', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'st2ftId',insideLoop:true,index:"" +iiNy9P});
ec('div');
}ec('div');
ec('div');
let cndXhOZ = ! Is.empty(comment.attachments);
this.setState('stYmItB', cndXhOZ);
if (cndXhOZ) { 
let elPpKpY = eo('div','S0Iff'+iiNy9P);
let elnOPC9 = eo('h4','39Hff'+iiNy9P,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iicAC1 = 'wvyVpML' + i;
let el_xOWj = eo('a','55tSWDu2WHc_' + i+iiNy9P+iicAC1,null,`href`,`${attachment}`,`target`,`_blank`);
let cndZcqc = isImage(attachment);
this.setState('stfPccX', cndZcqc);
let cndZOSu = !(cndZcqc);
this.setState('stsnsZ9', cndZOSu);
if (cndZcqc) { 
let elfq1bY = ev('img','b9mff'+iiNy9P+iicAC1,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elR6q8S = eo('button','5yxff'+iiNy9P+iicAC1,null,`class`,`btn btn-sm bold btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndpiIH = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stljb8U', cndpiIH);
if (cndpiIH) { 
let el8WVJ0 = eo('form','THNff'+iiNy9P,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! el8WVJ0.formHandler) {
                    window.cfrmdlr = el8WVJ0.formHandler = new FormHandler(el8WVJ0, component);
                } else {
                    window.cfrmdlr = el8WVJ0.formHandler;
                }
            let cndpT5q = component.parentComment;
this.setState('stqBWwF', cndpT5q);
if (cndpT5q) { 
let elDtMcr = ev('input','0Vpff'+iiNy9P,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elDtMcr.value = fval(component.parentComment.id);
}let cndXl71 = component.project.id;
this.setState('st_yrG6', cndXl71);
if (cndXl71) { 
let el9EeNa = ev('input','94fff'+iiNy9P,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el9EeNa.value = fval(component.project.id);
}let el3qrco = ev('input','8rnff'+iiNy9P,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el3qrco.value = fval(component.typeId);
let elyih17 = ev('input','87uff'+iiNy9P,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elyih17.value = fval(component.type);
let elFKb1h = ev('input','ydbff'+iiNy9P,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elFKb1h.value = fval(component.commentId);
let cmpebdp = this._lc('chDVpfz1H', {parent:component,props:{value:component.comment.comment},events:{onchange:function(e) {let $el = this; component.comment.comment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment...`)}`},insideLoop:true,index:"" +iiNy9P});

                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cvw3RINz6', {parent:component,props:{multiple:true},content:(flkFileInput) => {let eliegAM = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elFcc6p = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiNy9P});
let cndLXZR = ! component.isSending;
this.setState('stsnnCU', cndLXZR);
if (cndLXZR) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cplwt5eG4', {parent:component,state:'stsnnCU',insideLoop:true,index:"" +iiNy9P});
}let elpuOuU = eo('button','YU6ff'+iiNy9P,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let elfWW5k = eo('h2','Mxwff'+iiNy9P,null,`class`,`sub-comments-heading`);
let elOO4dI = eo('span','taNff'+iiNy9P,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleSubComment(comment)}]});
let elCo5yP = eo('span','Rm2ff'+iiNy9P);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('span');
let cndf6Rk = Comments.writeComment === false;
this.setState('stCDFmw', cndf6Rk);
if (cndf6Rk) { 
let elKQ0T0 = eo('button','7z9ff'+iiNy9P,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCommentReply(comment)}]},`class`,`btn btn btn-sm btn-gray cc`);
text(`Reply`);
ec('button');
}ec('h2');
let cndO4Yn = comment.commentsAreOpened;
this.setState('stzLQ_m', cndO4Yn);
if (cndO4Yn) { 
let cmpGHM6 = this._lc('cUmiG264q', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stzLQ_m',insideLoop:true,index:"" +iiNy9P});
}ec('div');
}
let cndUfaH = component.disableComments && ! component.parentComment;
this.setState('stv9yIm', cndUfaH);
let cnd1aiV = Comments.writeComment === false && ! component.parentComment;
this.setState('st1I3u7', cnd1aiV);
let cnd_msX = Comments.writeComment === component.parentComment;
this.setState('stDK0TP', cnd_msX);
if (cndUfaH) { 
let elHC4cg = eo('div','prSf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cnd1aiV) { 
let elaIDrB = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = component.parentComment; component.detectChanges();}]},`class`,`btn btn btn-gray`);
text(`Reply`);
ec('button');
}else if (cnd_msX) { 
let elX4nS0 = eo('form',null,null, eventListeners, {onready:[function(e) {var $el = this;component.scrollToForm($el)}],onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elX4nS0.formHandler) {
                    window.cfrmdlr = elX4nS0.formHandler = new FormHandler(elX4nS0, component);
                } else {
                    window.cfrmdlr = elX4nS0.formHandler;
                }
            let cndjHvY = component.parentComment;
this.setState('stLy3cD', cndjHvY);
if (cndjHvY) { 
let elWdSAH = ev('input','Pjlf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elWdSAH.value = fval(component.parentComment.id);
}let elcHS8k = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elcHS8k.value = fval(component.project.id);
let el7Car1 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el7Car1.value = fval(component.typeId);
let elAOZcT = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elAOZcT.value = fval(component.type);
let cmp3ZOG = this._lc('cmevc49xA', {parent:component,props:{value:component.newComment},events:{onchange:function(e) {let $el = this; component.newComment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment... (Markdown Support)`)}`}});
let elmjHZb = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cgX5QFDOb', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elLekXX = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elDsOsa = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndvooj = ! component.isSending;
this.setState('stRpJYw', cndvooj);
if (cndvooj) { 
component.recordAudio = this._lc('cTyplpoXW', {parent:component,events:{onstart:function(e) {let $el = this; component.isRecording = true},onrecord:function(e) {let $el = this; component.isRecording = false;}},attrs:{class:'audio-input'},state:'stRpJYw'});
}ec('div');
let elCeexu = eo('button',null,null, boolAttrs, {disabled:(! component.newComment && ! component.recordAudio.recordData && component.fileInput.fileInput.files.length == 0) || component.isSending || ! component.isValidForm || component.isRecording},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
let elxDwGp = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = false;  component.detectChanges();}]},`type`,`button`,`class`,`btn btn-light`);
text(`Cancel`);
ec('button');
ec('form');

                    setTimeout(function () {
                        let $el = elX4nS0;
                        component.scrollToForm($el);
                    }, 20);                
                }ec('div');
let cndBhDC = component.confirmDelete;
this.setState('stC5W7h', cndBhDC);
if (cndBhDC) { 
let cmpnaQw = this._lc('cSMtUNkD9', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null;  component.detectChanges();},onconfirm:function(e) {let $el = this; component.remove()}},state:'stC5W7h'});
}
                    this.isReadyToGo();
                }
        });