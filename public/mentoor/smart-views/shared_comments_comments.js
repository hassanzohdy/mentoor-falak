_Component({
                selector: 'comments',
                c: 'Comments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','activeComment','project','user','comment','index','editMode','detectChanges','confirmRemoving','previewBy','currentRoute','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','toggleSubComment','openCommentReply','disableComments','scrollToForm','newComment','isRecording','recordAudio','fileInput','confirmDelete','remove'],
                children: {c9qirokoq:'user-card',cFcmKVWbm:'user-card',cEf1E80Yr:'flk-time-ago',cuci17pvU:'markdown',cedhVtnQb:'markdown',ciSSYbLKa:'flk-audio-player',cwsRk7fl3:'markdown-input',cSfHB_z2T:'flk-file-input',c_tSzJ3FF:'record-audio-input',cGLFWEITy:'comments',cTeNjKg6M:'markdown-input',c5_gt6uXl:'flk-file-input',cRBigy_Fz:'record-audio-input',cU73plmk4:'flk-alert'},
                render: function (component) {
                    let elZXW9U = eo('div',null,null,`class`,`comments-list`);
elZXW9U.cls = {child: component.parentComment};

            for (let className in elZXW9U.cls) {
                elZXW9U.classList.toggle(className, elZXW9U.cls[className]);
            }  
            let elWYJzh = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndcrdm = ! component.parentComment;
this.setState('stE1t4w', cndcrdm);
if (cndcrdm) { 
let ell4M4A = eo('span','Y2Kf');
text(`Comments
            (${ component.commentsList.length })`);
ec('span');
}ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iiLmPX = comment.id+ index;
let elRXJJQ = eo('div','_m2Q0yRdrm4I' + index+iiLmPX,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment p-1 m-b-1`);
elRXJJQ.cls = {active: Boolean(component.activeComment && component.activeComment.id == comment.id)};

            for (let className in elRXJJQ.cls) {
                elRXJJQ.classList.toggle(className, elRXJJQ.cls[className]);
            }  
            let cndSgZQ = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stfuWoz', cndSgZQ);
if (cndSgZQ) { 
let elwoIty = eo('span','trGff'+iiLmPX,null,`class`,`action-btns`);
let cndWwzb = ! component.comment || component.comment.id != comment.id;
this.setState('stljrZq', cndWwzb);
let cnd1PmD = component.comment && component.comment.id == comment.id;
this.setState('stcUHwH', cnd1PmD);
if (cndWwzb) { 
let elZF9ew = eo('button','dgcff'+iiLmPX,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let eleCU4k = eo('i','rmwff'+iiLmPX,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cnd1PmD) { 
let el7mAQ9 = eo('button','uPIff'+iiLmPX,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndTFst = ! component.comment || component.comment.id != comment.id;
this.setState('st8CboR', cndTFst);
if (cndTFst) { 
let elp9JUs = eo('button','T1wff'+iiLmPX,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elR8G5d = eo('i','Aksff'+iiLmPX,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elkY841 = eo('div','emwff'+iiLmPX,null,`class`,`w-100`);
let elYCsmX = eo('div','fhAff'+iiLmPX,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromImage')}]},`class`,`relative d-inline-block v-top`);
let elL1hwK = ev('img','i2Sff'+iiLmPX,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndz12W = comment.previewUserFromImage;
this.setState('stCmmVS', cndz12W);
if (cndz12W) { 
let cmpgCFg = this._lc('c9qirokoq', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromImage = false)}},state:'stCmmVS',insideLoop:true,index:"" +iiLmPX});
}ec('div');
let elD_AUM = eo('div','nlOff'+iiLmPX,null,`class`,`meta-comment`);
let elmyDW4 = eo('div','6kDff'+iiLmPX,null,`class`,`relative d-inline-block`);
let el37f2E = eo('span','_9Xff'+iiLmPX,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromName')}]});
text(comment.createdBy.name);
ec('span');
let elYl8zK = eo('a','tN6ff'+iiLmPX,null,`href`,`${component.currentRoute + '?comment=' + comment.tree}`,`title`,``);
let elkTtmB = eo('i','n6cff'+iiLmPX,null,`class`,`${fas('link') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elYl8zK;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Comment url')}`});
        ;
                    }, 20);                
                let cndr_45 = comment.previewUserFromName;
this.setState('stid5PL', cndr_45);
if (cndr_45) { 
let cmp3xRM = this._lc('cFcmKVWbm', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromName = false)}},state:'stid5PL',insideLoop:true,index:"" +iiLmPX});
}ec('div');
let elo1pJ9 = eo('div','LGHff'+iiLmPX,null,`class`,`m-b-1`);
let cmpHst4 = this._lc('cEf1E80Yr', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiLmPX});
ec('div');
let cnd4UfR = ! component.editMode;
this.setState('stz2KvL', cnd4UfR);
if (cnd4UfR) { 
let elzvqoz = eo('div','gYlff'+iiLmPX);
let cnd64HI = String(comment.comment).split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stZGAcq', cnd64HI);
let cnd3AJV = !(cnd64HI);
this.setState('stDLHON', cnd3AJV);
if (cnd64HI) { 
let cmpSO5d = this._lc('cuci17pvU', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stZGAcq',insideLoop:true,index:"" +iiLmPX});
}else { 
let cmpbiMo = this._lc('cedhVtnQb', {parent:component,props:{content:String(comment.comment).split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stDLHON',insideLoop:true,index:"" +iiLmPX});
let elVxTOR = eo('div','G6sff'+iiLmPX);
text(`...`);
ec('div');
let elJTsoP = eo('button','NV7ff'+iiLmPX,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndSozW = comment.record;
this.setState('stlde3n', cndSozW);
if (cndSozW) { 
let elW0mug = eo('div','Bzfff'+iiLmPX,null,`class`,`m-t-1`);
let cmpjVl2 = this._lc('ciSSYbLKa', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stlde3n',insideLoop:true,index:"" +iiLmPX});
ec('div');
}ec('div');
ec('div');
let cndLTnC = ! Is.empty(comment.attachments);
this.setState('stdBIXN', cndLTnC);
if (cndLTnC) { 
let el3atrQ = eo('div','7Jiff'+iiLmPX);
let elydBnM = eo('h4','WwIff'+iiLmPX,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiZ21x = 'ViQxHsY' + i;
let eldk97Z = eo('a','11sPpDABJrRn' + i+iiLmPX+iiZ21x,null,`href`,`${attachment}`,`target`,`_blank`);
let cndwKi_ = isImage(attachment);
this.setState('steLpEJ', cndwKi_);
let cndqgmd = !(cndwKi_);
this.setState('stAhkjG', cndqgmd);
if (cndwKi_) { 
let elZNJBd = ev('img','Vigff'+iiLmPX+iiZ21x,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elmegWX = eo('button','kt8ff'+iiLmPX+iiZ21x,null,`class`,`btn btn-sm bold btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndFPhd = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stGkIlN', cndFPhd);
if (cndFPhd) { 
let elbP82p = eo('form','uWSff'+iiLmPX,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elbP82p.formHandler) {
                    window.cfrmdlr = elbP82p.formHandler = new FormHandler(elbP82p, component);
                } else {
                    window.cfrmdlr = elbP82p.formHandler;
                }
            let cnd0kpQ = component.parentComment;
this.setState('steD8oP', cnd0kpQ);
if (cnd0kpQ) { 
let elQWZoc = ev('input','_VLff'+iiLmPX,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elQWZoc.value = fval(component.parentComment.id);
}let cndkN4M = component.project.id;
this.setState('stUKsrL', cndkN4M);
if (cndkN4M) { 
let el36Xmf = ev('input','4cGff'+iiLmPX,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el36Xmf.value = fval(component.project.id);
}let elPF5ey = ev('input','M_pff'+iiLmPX,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elPF5ey.value = fval(component.typeId);
let el3RmRs = ev('input','7Xsff'+iiLmPX,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el3RmRs.value = fval(component.type);
let elqGqDB = ev('input','yj0ff'+iiLmPX,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elqGqDB.value = fval(component.commentId);
let cmp3htU = this._lc('cwsRk7fl3', {parent:component,props:{value:component.comment.comment},events:{onchange:function(e) {let $el = this; component.comment.comment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment...`)}`},insideLoop:true,index:"" +iiLmPX});

                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cSfHB_z2T', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elM_CA_ = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elKvFSm = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiLmPX});
let cndZr9u = ! component.isSending;
this.setState('stSMfXX', cndZr9u);
if (cndZr9u) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('c_tSzJ3FF', {parent:component,state:'stSMfXX',insideLoop:true,index:"" +iiLmPX});
}let elbLzho = eo('button','sJJff'+iiLmPX,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let elQOZVY = eo('h2','8Ctff'+iiLmPX,null,`class`,`sub-comments-heading`);
let elNRreM = eo('span','TiPff'+iiLmPX,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleSubComment(comment)}]});
let elDvmXe = eo('span','z0rff'+iiLmPX);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('span');
let cndqUDi = Comments.writeComment === false;
this.setState('stFa6mD', cndqUDi);
if (cndqUDi) { 
let elPXuPn = eo('button','QlLff'+iiLmPX,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCommentReply(comment)}]},`class`,`btn btn btn-sm btn-gray cc`);
text(`Reply`);
ec('button');
}ec('h2');
let cndnl_Y = comment.commentsAreOpened;
this.setState('stAlxg_', cndnl_Y);
if (cndnl_Y) { 
let cmpl3Q3 = this._lc('cGLFWEITy', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stAlxg_',insideLoop:true,index:"" +iiLmPX});
}ec('div');
}
let cndj4SN = component.disableComments && ! component.parentComment;
this.setState('stKwJbp', cndj4SN);
let cnd0IPw = Comments.writeComment === false && ! component.parentComment;
this.setState('stGV4nA', cnd0IPw);
let cndi5DI = Comments.writeComment === component.parentComment;
this.setState('stwRxEf', cndi5DI);
if (cndj4SN) { 
let elieZhw = eo('div','3ixf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cnd0IPw) { 
let elXDlKw = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = component.parentComment; component.detectChanges();}]},`class`,`btn btn btn-gray`);
text(`Reply`);
ec('button');
}else if (cndi5DI) { 
let elSRiU8 = eo('form',null,null, eventListeners, {onready:[function(e) {var $el = this;component.scrollToForm($el)}],onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elSRiU8.formHandler) {
                    window.cfrmdlr = elSRiU8.formHandler = new FormHandler(elSRiU8, component);
                } else {
                    window.cfrmdlr = elSRiU8.formHandler;
                }
            let cndhkvn = component.parentComment;
this.setState('stJZiSD', cndhkvn);
if (cndhkvn) { 
let elt8oIZ = ev('input','83Wf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elt8oIZ.value = fval(component.parentComment.id);
}let elURqoJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elURqoJ.value = fval(component.project.id);
let elXHoA4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elXHoA4.value = fval(component.typeId);
let elM8g34 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elM8g34.value = fval(component.type);
let cmpOGAg = this._lc('cTeNjKg6M', {parent:component,props:{value:component.newComment},events:{onchange:function(e) {let $el = this; component.newComment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment... (Markdown Support)`)}`}});
let elt4YxQ = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('c5_gt6uXl', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el_BtlB = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elZUO7T = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cnddoDA = ! component.isSending;
this.setState('stW1yN_', cnddoDA);
if (cnddoDA) { 
component.recordAudio = this._lc('cRBigy_Fz', {parent:component,events:{onstart:function(e) {let $el = this; component.isRecording = true},onrecord:function(e) {let $el = this; component.isRecording = false;}},attrs:{class:'audio-input'},state:'stW1yN_'});
}ec('div');
let elom5rN = eo('button',null,null, boolAttrs, {disabled:(! component.newComment && ! component.recordAudio.recordData && component.fileInput.fileInput.files.length == 0) || component.isSending || ! component.isValidForm || component.isRecording},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
let elvZ2ws = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = false;  component.detectChanges();}]},`type`,`button`,`class`,`btn btn-light`);
text(`Cancel`);
ec('button');
ec('form');

                    setTimeout(function () {
                        let $el = elSRiU8;
                        component.scrollToForm($el);
                    }, 20);                
                }ec('div');
let cnd4fd6 = component.confirmDelete;
this.setState('st47INp', cnd4fd6);
if (cnd4fd6) { 
let cmpFzIT = this._lc('cU73plmk4', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null;  component.detectChanges();},onconfirm:function(e) {let $el = this; component.remove()}},state:'st47INp'});
}
                    this.isReadyToGo();
                }
        });