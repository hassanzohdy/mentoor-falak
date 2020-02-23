_Component({
                selector: 'comments',
                c: 'Comments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','activeComment','project','user','comment','index','editMode','detectChanges','confirmRemoving','previewBy','currentRoute','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','toggleSubComment','openCommentReply','disableComments','scrollToForm','newComment','isRecording','recordAudio','fileInput','confirmDelete','remove'],
                children: {cj4Cv4q9Q:'user-card',cz7N0cKZ8:'user-card',cX1XufnwR:'flk-time-ago',csvNwkJVe:'markdown',c7AWLlNkZ:'markdown',cyaYAU4dj:'flk-audio-player',cFIsfMukC:'markdown-input',cfbX9PaNn:'flk-file-input',cz1CBJGCY:'record-audio-input',cDuaG8Ti3:'comments',c21Pxl00W:'markdown-input',cJIcg_SuG:'flk-file-input',ch4jyrrtv:'record-audio-input',cKllyI3qX:'flk-alert'},
                render: function (component) {
                    let elsL0VT = eo('div',null,null,`class`,`comments-list`);
elsL0VT.cls = {child: component.parentComment};

            for (let className in elsL0VT.cls) {
                elsL0VT.classList.toggle(className, elsL0VT.cls[className]);
            }  
            let el44kcx = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cnd0D6S = ! component.parentComment;
this.setState('stOifGE', cnd0D6S);
if (cnd0D6S) { 
let elmijlP = eo('span','bK1f');
text(`Comments
            (${ component.commentsList.length })`);
ec('span');
}ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iirNQZ = comment.id+ index;
let elc_fxR = eo('div','mDeOp4KI5hSz' + index+iirNQZ,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment p-1 m-b-1`);
elc_fxR.cls = {active: Boolean(component.activeComment && component.activeComment.id == comment.id)};

            for (let className in elc_fxR.cls) {
                elc_fxR.classList.toggle(className, elc_fxR.cls[className]);
            }  
            let cndFuiN = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stm_Y8b', cndFuiN);
if (cndFuiN) { 
let elRyggc = eo('span','an4ff'+iirNQZ,null,`class`,`action-btns`);
let cndSWpY = ! component.comment || component.comment.id != comment.id;
this.setState('stpEyWj', cndSWpY);
let cndmo1S = component.comment && component.comment.id == comment.id;
this.setState('stoMoIg', cndmo1S);
if (cndSWpY) { 
let el5hRPw = eo('button','JWgff'+iirNQZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let el4gYxD = eo('i','gKCff'+iirNQZ,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndmo1S) { 
let eldl9RR = eo('button','ReIff'+iirNQZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndrG1c = ! component.comment || component.comment.id != comment.id;
this.setState('stPVUMu', cndrG1c);
if (cndrG1c) { 
let elh2Db4 = eo('button','79Sff'+iirNQZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elFGfVn = eo('i','p3iff'+iirNQZ,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elr1lmG = eo('div','eqYff'+iirNQZ,null,`class`,`w-100`);
let elHiymO = eo('div','rp4ff'+iirNQZ,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromImage')}]},`class`,`relative d-inline-block v-top`);
let elrEir2 = ev('img','wmuff'+iirNQZ,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndV0Iy = comment.previewUserFromImage;
this.setState('stFHmIF', cndV0Iy);
if (cndV0Iy) { 
let cmpl8gy = this._lc('cj4Cv4q9Q', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromImage = false)}},state:'stFHmIF',insideLoop:true,index:"" +iirNQZ});
}ec('div');
let elR73ds = eo('div','Wogff'+iirNQZ,null,`class`,`meta-comment`);
let eliJkPz = eo('div','4SYff'+iirNQZ,null,`class`,`relative d-inline-block`);
let elTvNl3 = eo('span','8g5ff'+iirNQZ,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromName')}]});
text(comment.createdBy.name);
ec('span');
let elzh0eE = eo('a','uDQff'+iirNQZ,null,`href`,`${component.currentRoute + '?comment=' + comment.tree}`,`title`,``);
let elpvbIQ = eo('i','83Pff'+iirNQZ,null,`class`,`${fas('link') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elzh0eE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Comment url')}`});
        ;
                    }, 20);                
                let cndnprV = comment.previewUserFromName;
this.setState('stRAAVZ', cndnprV);
if (cndnprV) { 
let cmprW__ = this._lc('cz7N0cKZ8', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromName = false)}},state:'stRAAVZ',insideLoop:true,index:"" +iirNQZ});
}ec('div');
let eleqhnl = eo('div','2L6ff'+iirNQZ,null,`class`,`m-b-1`);
let cmpuzgJ = this._lc('cX1XufnwR', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iirNQZ});
ec('div');
let cndZqDG = ! component.editMode;
this.setState('stHkx1B', cndZqDG);
if (cndZqDG) { 
let elLrOxN = eo('div','Ytgff'+iirNQZ);
let cnd6P0F = String(comment.comment).split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stZ5zPj', cnd6P0F);
let cndN8LO = !(cnd6P0F);
this.setState('stViXIG', cndN8LO);
if (cnd6P0F) { 
let cmplUPT = this._lc('csvNwkJVe', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stZ5zPj',insideLoop:true,index:"" +iirNQZ});
}else { 
let cmpYqH_ = this._lc('c7AWLlNkZ', {parent:component,props:{content:String(comment.comment).split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stViXIG',insideLoop:true,index:"" +iirNQZ});
let eljZxg6 = eo('div','wilff'+iirNQZ);
text(`...`);
ec('div');
let elN32IF = eo('button','B5sff'+iirNQZ,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndeJPR = comment.record;
this.setState('stRFb5b', cndeJPR);
if (cndeJPR) { 
let elE2d0S = eo('div','hN2ff'+iirNQZ,null,`class`,`m-t-1`);
let cmpEXaR = this._lc('cyaYAU4dj', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stRFb5b',insideLoop:true,index:"" +iirNQZ});
ec('div');
}ec('div');
ec('div');
let cndbhwm = ! Is.empty(comment.attachments);
this.setState('stA2LdF', cndbhwm);
if (cndbhwm) { 
let elTbp1d = eo('div','kytff'+iirNQZ);
let elBaimP = eo('h4','8Wzff'+iirNQZ,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let ii6owT = 'eWzqH94' + i;
let elL3V6g = eo('a','9TkN2CGEs3Ql' + i+iirNQZ+ii6owT,null,`href`,`${attachment}`,`target`,`_blank`);
let cndL5Am = isImage(attachment);
this.setState('stKGq9i', cndL5Am);
let cnd7zYj = !(cndL5Am);
this.setState('st8_zb8', cnd7zYj);
if (cndL5Am) { 
let elovGgm = ev('img','_PHff'+iirNQZ+ii6owT,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let el0CxKK = eo('button','QH9ff'+iirNQZ+ii6owT,null,`class`,`btn btn-sm bold btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndz498 = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stIZ0Mp', cndz498);
if (cndz498) { 
let elo193w = eo('form','Y9jff'+iirNQZ,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elo193w.formHandler) {
                    window.cfrmdlr = elo193w.formHandler = new FormHandler(elo193w, component);
                } else {
                    window.cfrmdlr = elo193w.formHandler;
                }
            let cndLljx = component.parentComment;
this.setState('stKTjGu', cndLljx);
if (cndLljx) { 
let elF6TU6 = ev('input','A9fff'+iirNQZ,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elF6TU6.value = fval(component.parentComment.id);
}let cnddExc = component.project.id;
this.setState('stR8F1z', cnddExc);
if (cnddExc) { 
let el87kdp = ev('input','p2Eff'+iirNQZ,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el87kdp.value = fval(component.project.id);
}let elgs6Mo = ev('input','Bsxff'+iirNQZ,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elgs6Mo.value = fval(component.typeId);
let elqWEJg = ev('input','FbUff'+iirNQZ,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elqWEJg.value = fval(component.type);
let eluTq4e = ev('input','Vdcff'+iirNQZ,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
eluTq4e.value = fval(component.commentId);
let cmpm0CV = this._lc('cFIsfMukC', {parent:component,props:{value:component.comment.comment},events:{onchange:function(e) {let $el = this; component.comment.comment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment...`)}`},insideLoop:true,index:"" +iirNQZ});

                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cfbX9PaNn', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elhQkhK = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elwLgp4 = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iirNQZ});
let cnd3QjU = ! component.isSending;
this.setState('stPEZaD', cnd3QjU);
if (cnd3QjU) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cz1CBJGCY', {parent:component,state:'stPEZaD',insideLoop:true,index:"" +iirNQZ});
}let el7GMGu = eo('button','sKXff'+iirNQZ,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let elDg7A2 = eo('h2','sbkff'+iirNQZ,null,`class`,`sub-comments-heading`);
let elq_gyW = eo('span','gZ0ff'+iirNQZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleSubComment(comment)}]});
let elUgc2i = eo('span','TCqff'+iirNQZ);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('span');
let cndivzA = Comments.writeComment === false;
this.setState('stfVT56', cndivzA);
if (cndivzA) { 
let el5CX5j = eo('button','z5Xff'+iirNQZ,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCommentReply(comment)}]},`class`,`btn btn btn-sm btn-gray cc`);
text(`Reply`);
ec('button');
}ec('h2');
let cndUcZA = comment.commentsAreOpened;
this.setState('stQoAAI', cndUcZA);
if (cndUcZA) { 
let cmpotM1 = this._lc('cDuaG8Ti3', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stQoAAI',insideLoop:true,index:"" +iirNQZ});
}ec('div');
}
let cndtyHD = component.disableComments && ! component.parentComment;
this.setState('st5TUAM', cndtyHD);
let cndbCrZ = Comments.writeComment === false && ! component.parentComment;
this.setState('stg9fkF', cndbCrZ);
let cndgHi4 = Comments.writeComment === component.parentComment;
this.setState('stAQkPj', cndgHi4);
if (cndtyHD) { 
let elVoQVs = eo('div','2Pvf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndbCrZ) { 
let eld7F4f = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = component.parentComment; component.detectChanges();}]},`class`,`btn btn btn-gray`);
text(`Reply`);
ec('button');
}else if (cndgHi4) { 
let elxLdga = eo('form',null,null, eventListeners, {onready:[function(e) {var $el = this;component.scrollToForm($el)}],onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elxLdga.formHandler) {
                    window.cfrmdlr = elxLdga.formHandler = new FormHandler(elxLdga, component);
                } else {
                    window.cfrmdlr = elxLdga.formHandler;
                }
            let cnd93aE = component.parentComment;
this.setState('st4ou5t', cnd93aE);
if (cnd93aE) { 
let elPhQfP = ev('input','6jIf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elPhQfP.value = fval(component.parentComment.id);
}let el0gEwi = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
el0gEwi.value = fval(component.project.id);
let el61exB = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el61exB.value = fval(component.typeId);
let elsJctX = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elsJctX.value = fval(component.type);
let cmppp84 = this._lc('c21Pxl00W', {parent:component,props:{value:component.newComment},events:{onchange:function(e) {let $el = this; component.newComment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment... (Markdown Support)`)}`}});
let elg1mue = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cJIcg_SuG', {parent:component,props:{multiple:true},content:(flkFileInput) => {let eltVrDk = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let eltnNcy = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndlFxo = ! component.isSending;
this.setState('stNm_OQ', cndlFxo);
if (cndlFxo) { 
component.recordAudio = this._lc('ch4jyrrtv', {parent:component,events:{onstart:function(e) {let $el = this; component.isRecording = true},onrecord:function(e) {let $el = this; component.isRecording = false;}},attrs:{class:'audio-input'},state:'stNm_OQ'});
}ec('div');
let elM2QGF = eo('button',null,null, boolAttrs, {disabled:(! component.newComment && ! component.recordAudio.recordData && component.fileInput.fileInput.files.length == 0) || component.isSending || ! component.isValidForm || component.isRecording},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
let elNXQBd = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = false;  component.detectChanges();}]},`type`,`button`,`class`,`btn btn-light`);
text(`Cancel`);
ec('button');
ec('form');

                    setTimeout(function () {
                        let $el = elxLdga;
                        component.scrollToForm($el);
                    }, 20);                
                }ec('div');
let cndXEUE = component.confirmDelete;
this.setState('stDALjc', cndXEUE);
if (cndXEUE) { 
let cmpAh9G = this._lc('cKllyI3qX', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null;  component.detectChanges();},onconfirm:function(e) {let $el = this; component.remove()}},state:'stDALjc'});
}
                    this.isReadyToGo();
                }
        });