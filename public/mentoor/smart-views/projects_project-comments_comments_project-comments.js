_Component({
                selector: 'project-comments',
                c: 'ProjectComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','project','user','comment','index','editMode','detectChanges','confirmRemoving','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','disableComments','newComment','confirmDelete','remove'],
                children: {c_nKbmHUd:'flk-time-ago',cqAu6xbWB:'markdown',c1AqpMTap:'markdown',cLPsisTGv:'flk-audio-player',cA4W4tNNO:'flk-file-input',crwVmGoa4:'record-audio-input',cacwKdtz9:'project-comments',c2XCvoDw1:'flk-file-input',cuWxhBlNB:'record-audio-input',c0Ddo3K0p:'flk-alert'},
                render: function (component) {
                    let elnA875 = eo('div',null,null,`class`,`project-comments-list ${cls({child: component.parentComment})}`);
let elsNIAP = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndfRrT = ! component.parentComment;
this.setState('st9XfTg', cndfRrT);
let cndufxe = !(cndfRrT);
this.setState('stitNZs', cndufxe);
if (cndfRrT) { 
let elW2jEo = eo('span','T3zf');
text(`Comments`);
ec('span');
}else { 
let eloCxv4 = eo('span');
text(`Replies`);
ec('span');
}text(`(${ component.commentsList.length })`);
ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iigwu8 = comment.id+ index;
let elpm1Cj = eo('div','yQUQWBjNaVKE' + index+iigwu8,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment simple-card p-1 m-b-1`);
let cnd_Hw7 = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stEmgV5', cnd_Hw7);
let cndhOLZ = comment.commentsAreOpened;
this.setState('sty1lhD', cndhOLZ);
if (cnd_Hw7) { 
let el5zdTI = eo('span','biHff'+iigwu8,null,`class`,`action-btns float-right`);
let cndN1O2 = ! component.comment || component.comment.id != comment.id;
this.setState('story75', cndN1O2);
let cndY7fh = component.comment && component.comment.id == comment.id;
this.setState('sti8yQP', cndY7fh);
if (cndN1O2) { 
let elQ8YzK = eo('button','jHhff'+iigwu8,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let el2isd_ = eo('i','9oUff'+iigwu8,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndY7fh) { 
let eleCWub = eo('button','YPOff'+iigwu8,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cnd_hhF = ! component.comment || component.comment.id != comment.id;
this.setState('stM7j_9', cnd_hhF);
if (cnd_hhF) { 
let elYjNni = eo('button','M0eff'+iigwu8,null, eventListeners, {onclick:[function(e) {var $el = this;echo(comment); component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elp2y2q = eo('i','zXRff'+iigwu8,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elSi4Kl = eo('div','mA4ff'+iigwu8,null,`class`,`row w-100`);
let elXC9P2 = eo('div','qwMff'+iigwu8,null,`class`,`col-sm-1 col-12`);
let eld_9Dj = ev('img','Padff'+iigwu8,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
ec('div');
let elXWqsq = eo('div','YTrff'+iigwu8,null,`class`,`col p-0 meta-comment`);
let elmgEaK = eo('div','LCLff'+iigwu8);
let el_hdWH = eo('span','Xjkff'+iigwu8);
text(comment.createdBy.name);
ec('span');
ec('div');
let elVpo2I = eo('div','rFXff'+iigwu8,null,`class`,`m-b-1`);
let cmptU5Y = this._lc('c_nKbmHUd', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iigwu8});
ec('div');
let cndQr67 = ! component.editMode;
this.setState('stJyjni', cndQr67);
if (cndQr67) { 
let el6U3NW = eo('div','m2Bff'+iigwu8);
let cnda0Q6 = comment.comment.split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stnDtiw', cnda0Q6);
let cndPkQo = !(cnda0Q6);
this.setState('stP0LI8', cndPkQo);
if (cnda0Q6) { 
let cmpII_2 = this._lc('cqAu6xbWB', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stnDtiw',insideLoop:true,index:"" +iigwu8});
}else { 
let cmpbB0r = this._lc('c1AqpMTap', {parent:component,props:{content:comment.comment.split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stP0LI8',insideLoop:true,index:"" +iigwu8});
let elzTYnA = eo('div','3pXff'+iigwu8);
text(`...`);
ec('div');
let el9gm4e = eo('button','7mBff'+iigwu8,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndZ8C_ = comment.record;
this.setState('stJmB6V', cndZ8C_);
if (cndZ8C_) { 
let el0eWyu = eo('div','phRff'+iigwu8,null,`class`,`m-t-1`);
let cmpXDsO = this._lc('cLPsisTGv', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stJmB6V',insideLoop:true,index:"" +iigwu8});
ec('div');
}ec('div');
ec('div');
let cndmbGj = ! Is.empty(comment.attachments);
this.setState('stauszE', cndmbGj);
let cndnXYL = cndhOLZ;
this.setState('st2c8_b', cndnXYL);
if (cndmbGj) { 
let eleWQPy = eo('div','o03ff'+iigwu8);
let elpic0w = eo('h4','1hDff'+iigwu8,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiMqOV = '75q9cQD' + i;
let el3pZap = eo('a','iKkyFHRtZnGS' + i+iigwu8+iiMqOV,null,`href`,`${attachment}`,`target`,`_blank`);
let cndzRoS = isImage(attachment);
this.setState('stw5EEo', cndzRoS);
let cndp2g7 = !(cndzRoS);
this.setState('stt5mxe', cndp2g7);
if (cndzRoS) { 
let eledpex = ev('img','wRUff'+iigwu8+iiMqOV,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elymB_k = eo('button','ME_ff'+iigwu8+iiMqOV,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndmG3L = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stlAjEm', cndmG3L);
let cndQJ9j = cndnXYL;
this.setState('stfNeTr', cndQJ9j);
if (cndmG3L) { 
let eli2X6V = eo('form','Wwaff'+iigwu8,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! eli2X6V.formHandler) {
                    window.cfrmdlr = eli2X6V.formHandler = new FormHandler(eli2X6V, component);
                } else {
                    window.cfrmdlr = eli2X6V.formHandler;
                }
            let cndDFU1 = component.parentComment;
this.setState('stNuk6M', cndDFU1);
if (cndDFU1) { 
let elVV9X5 = ev('input','9t9ff'+iigwu8,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elVV9X5.value = fval(component.parentComment.id);
}let elzKktL = ev('input','iVbff'+iigwu8,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elzKktL.value = fval(component.project.id);
let elFSC1V = ev('input','5wzff'+iigwu8,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elFSC1V.value = fval(component.typeId);
let elPQqtM = ev('input','eZjff'+iigwu8,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elPQqtM.value = fval(component.type);
let elC5nFP = ev('input','Ui7ff'+iigwu8,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elC5nFP.value = fval(component.commentId);
let elT_RVu = eo('textarea','VNtff'+iigwu8,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eli2X6V.formHandler.addError(`comment`, 'required', trans('validation.required'));}return eli2X6V.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elT_RVu.value = fval(component.comment.comment);
ec('textarea');
let cnd6N9K = eli2X6V.formHandler.getError(`comment`);
this.setState('stnhEBG', cnd6N9K);
if (cnd6N9K) { 
let eljZcvM = eo('div','MqJff'+iigwu8,null,`class`,`alert alert-danger`);
text(eli2X6V.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cA4W4tNNO', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elTZ9NA = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elcE0Uv = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iigwu8});
let cndZABC = ! component.isSending;
this.setState('stK_C0G', cndZABC);
if (cndZABC) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('crwVmGoa4', {parent:component,state:'stK_C0G',insideLoop:true,index:"" +iigwu8});
}let el1McUc = eo('button','Yo0ff'+iigwu8,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cndWWcK = ! comment.commentsAreOpened;
this.setState('st0YxIz', cndWWcK);
let cndDZZY = cndQJ9j;
this.setState('strik3x', cndDZZY);
if (cndWWcK) { 
let elTcIKK = eo('h2','LEIff'+iigwu8,null, eventListeners, {onclick:[function(e) {var $el = this;comment.commentsAreOpened = true; component.detectChanges();}]},`class`,`sub-comments-heading`);
let elMz2tv = eo('span','_sGff'+iigwu8);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('h2');
}else if (cndDZZY) { 
let cmpidsl = this._lc('cacwKdtz9', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'strik3x',insideLoop:true,index:"" +iigwu8});
}ec('div');
}
let cndGRcT = component.disableComments && ! component.parentComment;
this.setState('stdj3kn', cndGRcT);
let cndMAIw = component.disableComments && component.parentComment;
this.setState('stUEfEd', cndMAIw);
let cndlxjV = !(cndGRcT||cndMAIw);
this.setState('stzGO8T', cndlxjV);
if (cndGRcT) { 
let el8RxdR = eo('div','LZkf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndMAIw) { 
let elaa8Uy = eo('div');
ec('div');
}else { 
let elj1Vhp = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elj1Vhp.formHandler) {
                    window.cfrmdlr = elj1Vhp.formHandler = new FormHandler(elj1Vhp, component);
                } else {
                    window.cfrmdlr = elj1Vhp.formHandler;
                }
            let cndDTZG = component.parentComment;
this.setState('stJy9Zc', cndDTZG);
if (cndDTZG) { 
let elmuhwy = ev('input','Ryrf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elmuhwy.value = fval(component.parentComment.id);
}let elK3Nh8 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elK3Nh8.value = fval(component.project.id);
let elC6sCL = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elC6sCL.value = fval(component.typeId);
let elsQ8yp = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elsQ8yp.value = fval(component.type);
let elQzCDZ = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elj1Vhp.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elj1Vhp.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elQzCDZ.value = fval(component.newComment);
ec('textarea');
let cndXtqP = elj1Vhp.formHandler.getError(`comment`);
this.setState('stXzA8b', cndXtqP);
if (cndXtqP) { 
let elIKt7e = eo('div','qqYf',null,`class`,`alert alert-danger`);
text(elj1Vhp.formHandler.getError(`comment`));
ec('div');
}let eljeJ79 = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('c2XCvoDw1', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el6w15q = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elrxNwY = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndSRgD = ! component.isSending;
this.setState('stb0HV6', cndSRgD);
if (cndSRgD) { 
component.recordAudio = this._lc('cuWxhBlNB', {parent:component,attrs:{class:'audio-input'},state:'stb0HV6'});
}ec('div');
let elS7dlI = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
let cndorqh = component.confirmDelete;
this.setState('st2WOAq', cndorqh);
if (cndorqh) { 
let cmpJLqe = this._lc('c0Ddo3K0p', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st2WOAq'});
}
                    this.isReadyToGo();
                }
        });