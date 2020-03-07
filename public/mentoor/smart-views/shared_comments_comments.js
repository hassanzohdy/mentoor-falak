_Component({
                selector: 'comments',
                c: 'Comments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','activeComment','project','user','comment','index','editMode','detectChanges','confirmRemoving','previewBy','currentRoute','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','toggleSubComment','openCommentReply','disableComments','scrollToForm','newComment','isRecording','recordAudio','fileInput','confirmDelete','remove'],
                children: {c7WP3T6el:'user-card',chHUJc3_A:'user-card',cdJOewaqP:'flk-time-ago',cDWzSpauG:'markdown',chL9kBQJS:'markdown',cJ2bwQWuE:'flk-audio-player',cwOMZSSeS:'markdown-input',c4teK8C3J:'flk-file-input',cEdi5klp3:'record-audio-input',crKIuWcHL:'comments',ciP4P97tS:'markdown-input',cntm3Jk5b:'flk-file-input',cESTwaylu:'record-audio-input',cAnk2x45K:'flk-alert'},
                render: function (component) {
                    let elPpC1_ = eo('div',null,null,`class`,`comments-list ${cls({child: component.parentComment})}`);
let elNNBq2 = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndZSIG = ! component.parentComment;
this.setState('stCMvlp', cndZSIG);
if (cndZSIG) { 
let elOmwyZ = eo('span','Qo9f');
text(`Comments
            (${ component.commentsList.length })`);
ec('span');
}ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iirRgb = comment.id+ index;
let elnWULQ = eo('div','YBOZI_HQzEdv' + index+iirRgb,null,`class`,`comment p-1 m-b-1 ${cls({active: Boolean(component.activeComment && component.activeComment.id == comment.id)})}`,`id`,`${'cmnt' + comment.id}`);
let cnd4mDl = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stSPKah', cnd4mDl);
if (cnd4mDl) { 
let elJYXS4 = eo('span','Y6gff'+iirRgb,null,`class`,`action-btns`);
let cndyLvG = ! component.comment || component.comment.id != comment.id;
this.setState('sthj6q0', cndyLvG);
let cndQlg1 = component.comment && component.comment.id == comment.id;
this.setState('stg9Drk', cndQlg1);
if (cndyLvG) { 
let elU7Ovz = eo('button','Zuzff'+iirRgb,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elsU7Q3 = eo('i','Az9ff'+iirRgb,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndQlg1) { 
let elxq6bl = eo('button','vqCff'+iirRgb,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndTF5m = ! component.comment || component.comment.id != comment.id;
this.setState('stUXi88', cndTF5m);
if (cndTF5m) { 
let elCxhkv = eo('button','ggiff'+iirRgb,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elQEgc0 = eo('i','74wff'+iirRgb,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elXyMDH = eo('div','qZsff'+iirRgb,null,`class`,`w-100`);
let elWQnGh = eo('div','buIff'+iirRgb,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromImage')}]},`class`,`relative d-inline-block v-top`);
let elxRkw9 = ev('img','GELff'+iirRgb,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndEIMy = comment.previewUserFromImage;
this.setState('st1MsNW', cndEIMy);
if (cndEIMy) { 
let cmpxp8b = this._lc('c7WP3T6el', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromImage = false)}},state:'st1MsNW',insideLoop:true,index:"" +iirRgb});
}ec('div');
let eldVxfp = eo('div','Hpoff'+iirRgb,null,`class`,`meta-comment`);
let elzucAL = eo('div','sygff'+iirRgb,null,`class`,`relative d-inline-block`);
let el1RpQ7 = eo('span','oQAff'+iirRgb,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromName')}]});
text(comment.createdBy.name);
ec('span');
let el2OWGC = eo('a','d7lff'+iirRgb,null,`href`,`${component.currentRoute + '?comment=' + comment.tree}`,`title`,``);
let el9Bn_7 = eo('i','9R9ff'+iirRgb,null,`class`,`${fas('link')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = el2OWGC;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Comment url')}`});
        ;
                    }, 20);                
                let cnd2SJp = comment.previewUserFromName;
this.setState('stICvoz', cnd2SJp);
if (cnd2SJp) { 
let cmpzTgG = this._lc('chHUJc3_A', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromName = false)}},state:'stICvoz',insideLoop:true,index:"" +iirRgb});
}ec('div');
let elBD8tj = eo('div','Vwwff'+iirRgb,null,`class`,`m-b-1`);
let cmpiipr = this._lc('cdJOewaqP', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iirRgb});
ec('div');
let cnduAC6 = ! component.editMode;
this.setState('stYcnrR', cnduAC6);
if (cnduAC6) { 
let elw0te7 = eo('div','bJ1ff'+iirRgb);
let cndd8Sy = String(comment.comment).split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('st0yLQu', cndd8Sy);
let cndEPBI = !(cndd8Sy);
this.setState('stQru5_', cndEPBI);
if (cndd8Sy) { 
let cmpFEJT = this._lc('cDWzSpauG', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'st0yLQu',insideLoop:true,index:"" +iirRgb});
}else { 
let cmpPOR4 = this._lc('chL9kBQJS', {parent:component,props:{content:String(comment.comment).split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stQru5_',insideLoop:true,index:"" +iirRgb});
let el4FHPd = eo('div','Kq_ff'+iirRgb);
text(`...`);
ec('div');
let el6eTgd = eo('button','zaJff'+iirRgb,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndMOd7 = comment.record;
this.setState('stLLcD8', cndMOd7);
if (cndMOd7) { 
let ellnTHt = eo('div','nudff'+iirRgb,null,`class`,`m-t-1`);
let cmpssqf = this._lc('cJ2bwQWuE', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stLLcD8',insideLoop:true,index:"" +iirRgb});
ec('div');
}ec('div');
ec('div');
let cndhVxf = ! Is.empty(comment.attachments);
this.setState('stdk3pQ', cndhVxf);
if (cndhVxf) { 
let elaM7NT = eo('div','cQHff'+iirRgb);
let elDr4vU = eo('h4','Eh9ff'+iirRgb,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iip4yf = 'u2Y7nqv' + i;
let elSbx6r = eo('a','lHWxrsW3T0Jk' + i+iirRgb+iip4yf,null,`href`,`${attachment}`,`target`,`_blank`);
let cndjkeG = isImage(attachment);
this.setState('stuSISP', cndjkeG);
let cndXnJn = !(cndjkeG);
this.setState('stag24s', cndXnJn);
if (cndjkeG) { 
let elzdr4d = ev('img','Fsyff'+iirRgb+iip4yf,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let el0EMmg = eo('button','LgXff'+iirRgb+iip4yf,null,`class`,`btn btn-sm bold btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndEU36 = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('steefos', cndEU36);
if (cndEU36) { 
let el0InhO = eo('form','T8Mff'+iirRgb,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! el0InhO.formHandler) {
                    window.cfrmdlr = el0InhO.formHandler = new FormHandler(el0InhO, component);
                } else {
                    window.cfrmdlr = el0InhO.formHandler;
                }
            let cndHWKg = component.parentComment;
this.setState('stOQ2KI', cndHWKg);
if (cndHWKg) { 
let elibgHD = ev('input','cgfff'+iirRgb,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elibgHD.value = fval(component.parentComment.id);
}let cndHr5V = component.project.id;
this.setState('sty7Gkh', cndHr5V);
if (cndHr5V) { 
let elPXejq = ev('input','iJuff'+iirRgb,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elPXejq.value = fval(component.project.id);
}let el4c6Sw = ev('input','3duff'+iirRgb,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el4c6Sw.value = fval(component.typeId);
let elmBQCM = ev('input','NHGff'+iirRgb,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elmBQCM.value = fval(component.type);
let el0XgJx = ev('input','rHsff'+iirRgb,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
el0XgJx.value = fval(component.commentId);
let cmpBXAx = this._lc('cwOMZSSeS', {parent:component,props:{value:component.comment.comment},events:{onchange:function(e) {let $el = this; component.comment.comment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment...`)}`},insideLoop:true,index:"" +iirRgb});

                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('c4teK8C3J', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elu1X6v = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elpjyrQ = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iirRgb});
let cnducs8 = ! component.isSending;
this.setState('stN_RId', cnducs8);
if (cnducs8) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cEdi5klp3', {parent:component,state:'stN_RId',insideLoop:true,index:"" +iirRgb});
}let el84J_Q = eo('button','oDsff'+iirRgb,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cndtkc4 = comment.comments;
this.setState('stuF5Xk', cndtkc4);
if (cndtkc4) { 
let elN1ls4 = eo('h2','4OSff'+iirRgb,null,`class`,`sub-comments-heading`);
let elW9nJW = eo('span','Mgdff'+iirRgb,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleSubComment(comment)}]});
let eluZoEn = eo('span','zwuff'+iirRgb);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('span');
let cndUq5b = Comments.writeComment === false;
this.setState('stRB0S1', cndUq5b);
if (cndUq5b) { 
let el9oJFO = eo('button','5eBff'+iirRgb,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCommentReply(comment)}]},`class`,`btn btn btn-sm btn-gray cc`);
text(`Reply`);
ec('button');
}ec('h2');
}let cndpu3Z = comment.commentsAreOpened;
this.setState('sttHD10', cndpu3Z);
if (cndpu3Z) { 
let cmpDToe = this._lc('crKIuWcHL', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'sttHD10',insideLoop:true,index:"" +iirRgb});
}ec('div');
}
let cndOmLs = component.disableComments && ! component.parentComment;
this.setState('strGRno', cndOmLs);
let cndhlnK = Comments.writeComment === false && ! component.parentComment;
this.setState('stawNwA', cndhlnK);
let cnd90W9 = Comments.writeComment === component.parentComment;
this.setState('stDLr6k', cnd90W9);
if (cndOmLs) { 
let elZkC1j = eo('div','AsFf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndhlnK) { 
let elLW_Q0 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = component.parentComment; component.detectChanges();}]},`class`,`btn btn btn-gray`);
text(`Reply`);
ec('button');
}else if (cnd90W9) { 
let elkmknQ = eo('form',null,null, eventListeners, {onready:[function(e) {var $el = this;component.scrollToForm($el)}],onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elkmknQ.formHandler) {
                    window.cfrmdlr = elkmknQ.formHandler = new FormHandler(elkmknQ, component);
                } else {
                    window.cfrmdlr = elkmknQ.formHandler;
                }
            let cndWZtu = component.parentComment;
this.setState('stHpvFb', cndWZtu);
if (cndWZtu) { 
let elE54Wl = ev('input','hYLf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elE54Wl.value = fval(component.parentComment.id);
}let el4CDeM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el4CDeM.value = fval(component.project.id);
let elBgLcZ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elBgLcZ.value = fval(component.typeId);
let elFJP3B = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elFJP3B.value = fval(component.type);
let cmpXiGu = this._lc('ciP4P97tS', {parent:component,props:{value:component.newComment},events:{onchange:function(e) {let $el = this; component.newComment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment... (Markdown Support)`)}`}});
let el2UcHu = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cntm3Jk5b', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elgXd3_ = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elv6YHM = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndXzfj = ! component.isSending;
this.setState('stUnKsS', cndXzfj);
if (cndXzfj) { 
component.recordAudio = this._lc('cESTwaylu', {parent:component,events:{onstart:function(e) {let $el = this; component.isRecording = true},onrecord:function(e) {let $el = this; component.isRecording = false;}},attrs:{class:'audio-input'},state:'stUnKsS'});
}ec('div');
let el3ILr0 = eo('button',null,null, boolAttrs, {disabled:(! component.newComment && ! component.recordAudio.recordData && component.fileInput.fileInput.files.length == 0) || component.isSending || ! component.isValidForm || component.isRecording},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
let el1AfvJ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = false;  component.detectChanges();}]},`type`,`button`,`class`,`btn btn-light`);
text(`Cancel`);
ec('button');
ec('form');

                    setTimeout(function () {
                        let $el = elkmknQ;
                        component.scrollToForm($el);
                    }, 20);                
                }ec('div');
let cndYvny = component.confirmDelete;
this.setState('stEECV7', cndYvny);
if (cndYvny) { 
let cmpiPEk = this._lc('cAnk2x45K', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null;  component.detectChanges();},onconfirm:function(e) {let $el = this; component.remove()}},state:'stEECV7'});
}
                    this.isReadyToGo();
                }
        });