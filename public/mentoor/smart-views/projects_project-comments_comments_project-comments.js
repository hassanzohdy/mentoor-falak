_Component({
                selector: 'project-comments',
                c: 'ProjectComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','project','user','comment','index','editMode','detectChanges','confirmRemoving','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','disableComments','newComment','confirmDelete','remove'],
                children: {c4W1nz300:'flk-time-ago',cvhWJsySe:'markdown',cgKrgpONn:'markdown',c_cPCAMdV:'flk-audio-player',c3aIWT6h1:'flk-file-input',cvVj6zYSc:'record-audio-input',cemS6uZEg:'project-comments',cgxZPlLbH:'flk-file-input',cjacNENhN:'record-audio-input',c38UCTILy:'flk-alert'},
                render: function (component) {
                    let elpqdg6 = eo('div',null,null,`class`,`project-comments-list`);
elpqdg6.cls = {child: component.parentComment};

            for (let className in elpqdg6.cls) {
                elpqdg6.classList.toggle(className, elpqdg6.cls[className]);
            }  
            let el7vkRt = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndnJZ0 = ! component.parentComment;
this.setState('st93uIf', cndnJZ0);
let cndIyPd = !(cndnJZ0);
this.setState('stkKaHU', cndIyPd);
if (cndnJZ0) { 
let elknerj = eo('span','lXOf');
text(`Comments`);
ec('span');
}else { 
let ellSYJY = eo('span');
text(`Replies`);
ec('span');
}text(`(${ component.commentsList.length })`);
ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iiDsYy = comment.id+ index;
let elDCT8T = eo('div','1VZjmhkqFXUC' + index+iiDsYy,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment simple-card p-1 m-b-1`);
let cndgMls = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stK6Ey9', cndgMls);
let cnd7p7c = comment.commentsAreOpened;
this.setState('stVGhRS', cnd7p7c);
if (cndgMls) { 
let elw6srZ = eo('span','Jq8ff'+iiDsYy,null,`class`,`action-btns float-right`);
let cndwEC1 = ! component.comment || component.comment.id != comment.id;
this.setState('st7B8S3', cndwEC1);
let cnd3b92 = component.comment && component.comment.id == comment.id;
this.setState('stbZMJE', cnd3b92);
if (cndwEC1) { 
let elUdIJ2 = eo('button','fWPff'+iiDsYy,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elskSZh = eo('i','4Ekff'+iiDsYy,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cnd3b92) { 
let elQQoS2 = eo('button','Hqvff'+iiDsYy,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndDvCn = ! component.comment || component.comment.id != comment.id;
this.setState('stDypBc', cndDvCn);
if (cndDvCn) { 
let elP1urX = eo('button','oPLff'+iiDsYy,null, eventListeners, {onclick:[function(e) {var $el = this;echo(comment); component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elTKAAt = eo('i','dsyff'+iiDsYy,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elBLMJC = eo('div','MJwff'+iiDsYy,null,`class`,`row w-100`);
let elxldv4 = eo('div','R6bff'+iiDsYy,null,`class`,`col-sm-1 col-12`);
let elh6vK0 = ev('img','nk7ff'+iiDsYy,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
ec('div');
let elbNa9B = eo('div','7Huff'+iiDsYy,null,`class`,`col p-0 meta-comment`);
let elQBoJO = eo('div','gIVff'+iiDsYy);
let elDuAZG = eo('span','PBtff'+iiDsYy);
text(comment.createdBy.name);
ec('span');
ec('div');
let el9VrZf = eo('div','cEGff'+iiDsYy,null,`class`,`m-b-1`);
let cmp0kOS = this._lc('c4W1nz300', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiDsYy});
ec('div');
let cndaM7f = ! component.editMode;
this.setState('stnI71K', cndaM7f);
if (cndaM7f) { 
let elV72a_ = eo('div','AfEff'+iiDsYy);
let cnd_dUn = comment.comment.split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stL0Mki', cnd_dUn);
let cndO13f = !(cnd_dUn);
this.setState('st65loH', cndO13f);
if (cnd_dUn) { 
let cmpGdxS = this._lc('cvhWJsySe', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stL0Mki',insideLoop:true,index:"" +iiDsYy});
}else { 
let cmpmyba = this._lc('cgKrgpONn', {parent:component,props:{content:comment.comment.split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'st65loH',insideLoop:true,index:"" +iiDsYy});
let elIoxka = eo('div','o52ff'+iiDsYy);
text(`...`);
ec('div');
let elCcNPR = eo('button','NR3ff'+iiDsYy,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndeP9P = comment.record;
this.setState('stQCcod', cndeP9P);
if (cndeP9P) { 
let el2Xgjj = eo('div','dKyff'+iiDsYy,null,`class`,`m-t-1`);
let cmpGXlO = this._lc('c_cPCAMdV', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stQCcod',insideLoop:true,index:"" +iiDsYy});
ec('div');
}ec('div');
ec('div');
let cndKnfW = ! Is.empty(comment.attachments);
this.setState('stzmhvb', cndKnfW);
let cndDX1o = cnd7p7c;
this.setState('stz5xyv', cndDX1o);
if (cndKnfW) { 
let elrFFML = eo('div','1Sxff'+iiDsYy);
let eljrASV = eo('h4','TDVff'+iiDsYy,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iiNhGe = 'IOitacL' + i;
let elvn37d = eo('a','mQTSjajrdTrW' + i+iiDsYy+iiNhGe,null,`href`,`${attachment}`,`target`,`_blank`);
let cndsesr = isImage(attachment);
this.setState('stCJHd0', cndsesr);
let cndU3uc = !(cndsesr);
this.setState('stQUTNJ', cndU3uc);
if (cndsesr) { 
let elImvEi = ev('img','eQ_ff'+iiDsYy+iiNhGe,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elFg4L2 = eo('button','EVTff'+iiDsYy+iiNhGe,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndrL8f = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stIB50D', cndrL8f);
let cndSQUW = cndDX1o;
this.setState('stnBYQy', cndSQUW);
if (cndrL8f) { 
let elT3Tve = eo('form','weGff'+iiDsYy,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elT3Tve.formHandler) {
                    window.cfrmdlr = elT3Tve.formHandler = new FormHandler(elT3Tve, component);
                } else {
                    window.cfrmdlr = elT3Tve.formHandler;
                }
            let cndfXQ4 = component.parentComment;
this.setState('staE3Z7', cndfXQ4);
if (cndfXQ4) { 
let elIWwtf = ev('input','Dvaff'+iiDsYy,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elIWwtf.value = fval(component.parentComment.id);
}let elozvUB = ev('input','rP4ff'+iiDsYy,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elozvUB.value = fval(component.project.id);
let elBJMWG = ev('input','lDEff'+iiDsYy,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elBJMWG.value = fval(component.typeId);
let elYYX2U = ev('input','_qgff'+iiDsYy,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elYYX2U.value = fval(component.type);
let elTv7Au = ev('input','D2qff'+iiDsYy,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elTv7Au.value = fval(component.commentId);
let elLPuHQ = eo('textarea','TCYff'+iiDsYy,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elT3Tve.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elT3Tve.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elLPuHQ.value = fval(component.comment.comment);
ec('textarea');
let cnd1uDi = elT3Tve.formHandler.getError(`comment`);
this.setState('stJqgtU', cnd1uDi);
if (cnd1uDi) { 
let eljVX1U = eo('div','5U_ff'+iiDsYy,null,`class`,`alert alert-danger`);
text(elT3Tve.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('c3aIWT6h1', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el81OWI = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elBtY3D = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iiDsYy});
let cndGigh = ! component.isSending;
this.setState('st3yZ2L', cndGigh);
if (cndGigh) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cvVj6zYSc', {parent:component,state:'st3yZ2L',insideLoop:true,index:"" +iiDsYy});
}let elI6d6L = eo('button','_Tbff'+iiDsYy,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cnd5ApG = ! comment.commentsAreOpened;
this.setState('sttjakl', cnd5ApG);
let cndKzFq = cndSQUW;
this.setState('sty5FAl', cndKzFq);
if (cnd5ApG) { 
let elhsmGA = eo('h2','1pwff'+iiDsYy,null, eventListeners, {onclick:[function(e) {var $el = this;comment.commentsAreOpened = true; component.detectChanges();}]},`class`,`sub-comments-heading`);
let elmo7Nv = eo('span','K1Bff'+iiDsYy);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('h2');
}else if (cndKzFq) { 
let cmp6x5x = this._lc('cemS6uZEg', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'sty5FAl',insideLoop:true,index:"" +iiDsYy});
}ec('div');
}
let cndKAOO = component.disableComments && ! component.parentComment;
this.setState('stbFDJ1', cndKAOO);
let cndFaoh = component.disableComments && component.parentComment;
this.setState('st3hMmU', cndFaoh);
let cnd7pem = !(cndKAOO||cndFaoh);
this.setState('stMQKu7', cnd7pem);
if (cndKAOO) { 
let elslOy9 = eo('div','5MVf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndFaoh) { 
let elYdF1t = eo('div');
ec('div');
}else { 
let elqo2TS = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elqo2TS.formHandler) {
                    window.cfrmdlr = elqo2TS.formHandler = new FormHandler(elqo2TS, component);
                } else {
                    window.cfrmdlr = elqo2TS.formHandler;
                }
            let cndsXIs = component.parentComment;
this.setState('stSjjGX', cndsXIs);
if (cndsXIs) { 
let elQRAa6 = ev('input','mCsf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elQRAa6.value = fval(component.parentComment.id);
}let elTwsMk = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elTwsMk.value = fval(component.project.id);
let elP5a6V = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elP5a6V.value = fval(component.typeId);
let elyCv5E = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elyCv5E.value = fval(component.type);
let elkE7tI = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elqo2TS.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elqo2TS.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elkE7tI.value = fval(component.newComment);
ec('textarea');
let cnd8HPG = elqo2TS.formHandler.getError(`comment`);
this.setState('stxTXeZ', cnd8HPG);
if (cnd8HPG) { 
let elxfsin = eo('div','FcTf',null,`class`,`alert alert-danger`);
text(elqo2TS.formHandler.getError(`comment`));
ec('div');
}let elKDK__ = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cgxZPlLbH', {parent:component,props:{multiple:true},content:(flkFileInput) => {let el4VNCt = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elqUWya = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndYiP9 = ! component.isSending;
this.setState('st4EPvc', cndYiP9);
if (cndYiP9) { 
component.recordAudio = this._lc('cjacNENhN', {parent:component,attrs:{class:'audio-input'},state:'st4EPvc'});
}ec('div');
let elURwAW = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
let cndCyE8 = component.confirmDelete;
this.setState('st_1ZVY', cndCyE8);
if (cndCyE8) { 
let cmpMg4x = this._lc('c38UCTILy', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st_1ZVY'});
}
                    this.isReadyToGo();
                }
        });