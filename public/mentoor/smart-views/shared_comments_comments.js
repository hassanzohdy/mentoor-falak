_Component({
                selector: 'comments',
                c: 'Comments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','activeComment','project','user','comment','index','editMode','detectChanges','confirmRemoving','previewBy','currentRoute','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','toggleSubComment','openCommentReply','disableComments','scrollToForm','newComment','isRecording','recordAudio','fileInput','confirmDelete','remove'],
                children: {ct0wjA88o:'user-card',cawQ5QIsW:'user-card',ctCFTisx8:'flk-time-ago',cclmZwA4G:'markdown',cbclbNVPA:'markdown',c3muDCzkv:'flk-audio-player',chaINJo0I:'markdown-input',cz6h_S7rr:'flk-file-input',cUcen9QF7:'record-audio-input',cwFM86yfj:'comments',cRL8EI4WH:'markdown-input',crqaLOCwL:'flk-file-input',cEcsvbInJ:'record-audio-input',c4pq_mDYJ:'flk-alert'},
                render: function (component) {
                    let elDsIWL = eo('div',null,null,`class`,`comments-list ${cls({child: component.parentComment})}`);
let elYx_oV = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndRyuj = ! component.parentComment;
this.setState('stgFFFq', cndRyuj);
if (cndRyuj) { 
let el1ukL1 = eo('span','RGEf');
text(`Comments
            (${ component.commentsList.length })`);
ec('span');
}ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let ii2BGa = comment.id+ index;
let elxNWNF = eo('div','o7WJ1fiH0TbX' + index+ii2BGa,null,`class`,`comment p-1 m-b-1 ${cls({active: Boolean(component.activeComment && component.activeComment.id == comment.id)})}`,`id`,`${'cmnt' + comment.id}`);
let cndr6Ze = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('st04TJX', cndr6Ze);
if (cndr6Ze) { 
let el0e6OW = eo('span','OXyff'+ii2BGa,null,`class`,`action-btns`);
let cndsuvW = ! component.comment || component.comment.id != comment.id;
this.setState('stZzcQu', cndsuvW);
let cndxmZn = component.comment && component.comment.id == comment.id;
this.setState('stAUDlP', cndxmZn);
if (cndsuvW) { 
let eldJXvi = eo('button','CYGff'+ii2BGa,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elTt2AB = eo('i','nkvff'+ii2BGa,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndxmZn) { 
let el2rddp = eo('button','Z25ff'+ii2BGa,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndOlBu = ! component.comment || component.comment.id != comment.id;
this.setState('stkXKOV', cndOlBu);
if (cndOlBu) { 
let el1XTWB = eo('button','f5Yff'+ii2BGa,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let eloFPRg = eo('i','pu3ff'+ii2BGa,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elNi9EC = eo('div','GiXff'+ii2BGa,null,`class`,`w-100`);
let elEf0v_ = eo('div','xRgff'+ii2BGa,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromImage')}]},`class`,`relative d-inline-block v-top`);
let elLo7p4 = ev('img','61iff'+ii2BGa,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndhuL6 = comment.previewUserFromImage;
this.setState('stpQ7YW', cndhuL6);
if (cndhuL6) { 
let cmps3EB = this._lc('ct0wjA88o', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromImage = false)}},state:'stpQ7YW',insideLoop:true,index:"" +ii2BGa});
}ec('div');
let el3wiyc = eo('div','kS_ff'+ii2BGa,null,`class`,`meta-comment`);
let elhnw1i = eo('div','NNzff'+ii2BGa,null,`class`,`relative d-inline-block`);
let elGFApk = eo('span','tJUff'+ii2BGa,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromName')}]});
text(comment.createdBy.name);
ec('span');
let elsxoH0 = eo('a','ZOuff'+ii2BGa,null,`href`,`${component.currentRoute + '?comment=' + comment.tree}`,`title`,``);
let el5j4H8 = eo('i','GaOff'+ii2BGa,null,`class`,`${fas('link')} icon`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elsxoH0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Comment url')}`});
        ;
                    }, 20);                
                let cndGAhb = comment.previewUserFromName;
this.setState('stovXLU', cndGAhb);
if (cndGAhb) { 
let cmpwztB = this._lc('cawQ5QIsW', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromName = false)}},state:'stovXLU',insideLoop:true,index:"" +ii2BGa});
}ec('div');
let el_s15M = eo('div','ZYlff'+ii2BGa,null,`class`,`m-b-1`);
let cmpL3Xe = this._lc('ctCFTisx8', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +ii2BGa});
ec('div');
let cndNeN6 = ! component.editMode;
this.setState('st1iQ3U', cndNeN6);
if (cndNeN6) { 
let elXakrG = eo('div','7amff'+ii2BGa);
let cndFaPI = String(comment.comment).split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('st5BKUL', cndFaPI);
let cnd1p8l = !(cndFaPI);
this.setState('stfuKdT', cnd1p8l);
if (cndFaPI) { 
let cmp3WBv = this._lc('cclmZwA4G', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'st5BKUL',insideLoop:true,index:"" +ii2BGa});
}else { 
let cmpKMJr = this._lc('cbclbNVPA', {parent:component,props:{content:String(comment.comment).split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stfuKdT',insideLoop:true,index:"" +ii2BGa});
let elgt5Oi = eo('div','GIdff'+ii2BGa);
text(`...`);
ec('div');
let el69tFh = eo('button','3SZff'+ii2BGa,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndj5lj = comment.record;
this.setState('stOb71H', cndj5lj);
if (cndj5lj) { 
let elUcrF4 = eo('div','iIKff'+ii2BGa,null,`class`,`m-t-1`);
let cmpsICZ = this._lc('c3muDCzkv', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stOb71H',insideLoop:true,index:"" +ii2BGa});
ec('div');
}ec('div');
ec('div');
let cndm96Z = ! Is.empty(comment.attachments);
this.setState('st0RLFR', cndm96Z);
if (cndm96Z) { 
let elDslLF = eo('div','AKaff'+ii2BGa);
let elaFNBm = eo('h4','L4yff'+ii2BGa,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiAb_Y = 'ftilPJ8' + i;
let eldd1IF = eo('a','tjXTkeyQ_EhT' + i+ii2BGa+iiAb_Y,null,`href`,`${attachment}`,`target`,`_blank`);
let cndU4Fc = isImage(attachment);
this.setState('stwriMF', cndU4Fc);
let cndd6sx = !(cndU4Fc);
this.setState('stdGaYd', cndd6sx);
if (cndU4Fc) { 
let elsyEsa = ev('img','f88ff'+ii2BGa+iiAb_Y,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elJF3BI = eo('button','7aeff'+ii2BGa+iiAb_Y,null,`class`,`btn btn-sm bold btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndNaCd = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stvbwH3', cndNaCd);
if (cndNaCd) { 
let elXgDvx = eo('form','8xFff'+ii2BGa,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elXgDvx.formHandler) {
                    window.cfrmdlr = elXgDvx.formHandler = new FormHandler(elXgDvx, component);
                } else {
                    window.cfrmdlr = elXgDvx.formHandler;
                }
            let cndomCp = component.parentComment;
this.setState('stnaHtc', cndomCp);
if (cndomCp) { 
let elMb1s1 = ev('input','cKqff'+ii2BGa,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elMb1s1.value = fval(component.parentComment.id);
}let cndUfZn = component.project.id;
this.setState('st_Q_zn', cndUfZn);
if (cndUfZn) { 
let elfg4aO = ev('input','7z_ff'+ii2BGa,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elfg4aO.value = fval(component.project.id);
}let elKOITf = ev('input','mqWff'+ii2BGa,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elKOITf.value = fval(component.typeId);
let elKXHju = ev('input','gBWff'+ii2BGa,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elKXHju.value = fval(component.type);
let elsokOZ = ev('input','faQff'+ii2BGa,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elsokOZ.value = fval(component.commentId);
let cmpvoDl = this._lc('chaINJo0I', {parent:component,props:{value:component.comment.comment},events:{onchange:function(e) {let $el = this; component.comment.comment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment...`)}`},insideLoop:true,index:"" +ii2BGa});

                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cz6h_S7rr', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elK9jOq = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elh_FfD = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +ii2BGa});
let cndwsfy = ! component.isSending;
this.setState('st3Gdkn', cndwsfy);
if (cndwsfy) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cUcen9QF7', {parent:component,state:'st3Gdkn',insideLoop:true,index:"" +ii2BGa});
}let eln2kcQ = eo('button','UyLff'+ii2BGa,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cndppYJ = comment.comments;
this.setState('stRQ0AW', cndppYJ);
if (cndppYJ) { 
let elumVTe = eo('h2','HIQff'+ii2BGa,null,`class`,`sub-comments-heading`);
let elky6Qw = eo('span','B0lff'+ii2BGa,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleSubComment(comment)}]});
let elUTkvY = eo('span','2_Fff'+ii2BGa);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('span');
let cndcHkB = Comments.writeComment === false;
this.setState('st1Q8PD', cndcHkB);
if (cndcHkB) { 
let elmk0oE = eo('button','Q2xff'+ii2BGa,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCommentReply(comment)}]},`class`,`btn btn btn-sm btn-gray cc`);
text(`Reply`);
ec('button');
}ec('h2');
}let cndQpQ0 = comment.commentsAreOpened;
this.setState('stwZ9nh', cndQpQ0);
if (cndQpQ0) { 
let cmpOnN8 = this._lc('cwFM86yfj', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stwZ9nh',insideLoop:true,index:"" +ii2BGa});
}ec('div');
}
let cndUVUx = component.disableComments && ! component.parentComment;
this.setState('sto690Y', cndUVUx);
let cnd1eyv = Comments.writeComment === false && ! component.parentComment;
this.setState('stOVVgb', cnd1eyv);
let cndMShn = Comments.writeComment === component.parentComment;
this.setState('staAt1q', cndMShn);
if (cndUVUx) { 
let elCflx1 = eo('div','Rnrf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cnd1eyv) { 
let elpw13R = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = component.parentComment; component.detectChanges();}]},`class`,`btn btn btn-gray`);
text(`Reply`);
ec('button');
}else if (cndMShn) { 
let ellc9Z5 = eo('form',null,null, eventListeners, {onready:[function(e) {var $el = this;component.scrollToForm($el)}],onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! ellc9Z5.formHandler) {
                    window.cfrmdlr = ellc9Z5.formHandler = new FormHandler(ellc9Z5, component);
                } else {
                    window.cfrmdlr = ellc9Z5.formHandler;
                }
            let cndH_iP = component.parentComment;
this.setState('st7xhM7', cndH_iP);
if (cndH_iP) { 
let eluOlXM = ev('input','Ahkf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
eluOlXM.value = fval(component.parentComment.id);
}let elPzFSw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elPzFSw.value = fval(component.project.id);
let elEXHiM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elEXHiM.value = fval(component.typeId);
let elZOjDN = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elZOjDN.value = fval(component.type);
let cmplU5h = this._lc('cRL8EI4WH', {parent:component,props:{value:component.newComment},events:{onchange:function(e) {let $el = this; component.newComment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment... (Markdown Support)`)}`}});
let elJb3gz = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('crqaLOCwL', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elMq83J = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elhI0pT = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndEk8l = ! component.isSending;
this.setState('stNz7Hy', cndEk8l);
if (cndEk8l) { 
component.recordAudio = this._lc('cEcsvbInJ', {parent:component,events:{onstart:function(e) {let $el = this; component.isRecording = true},onrecord:function(e) {let $el = this; component.isRecording = false;}},attrs:{class:'audio-input'},state:'stNz7Hy'});
}ec('div');
let elFEQyK = eo('button',null,null, boolAttrs, {disabled:(! component.newComment && ! component.recordAudio.recordData && component.fileInput.fileInput.files.length == 0) || component.isSending || ! component.isValidForm || component.isRecording},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
let eluPWIN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = false;  component.detectChanges();}]},`type`,`button`,`class`,`btn btn-light`);
text(`Cancel`);
ec('button');
ec('form');

                    setTimeout(function () {
                        let $el = ellc9Z5;
                        component.scrollToForm($el);
                    }, 20);                
                }ec('div');
let cndWCNG = component.confirmDelete;
this.setState('stzr9Jh', cndWCNG);
if (cndWCNG) { 
let cmp8LyN = this._lc('c4pq_mDYJ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null;  component.detectChanges();},onconfirm:function(e) {let $el = this; component.remove()}},state:'stzr9Jh'});
}
                    this.isReadyToGo();
                }
        });