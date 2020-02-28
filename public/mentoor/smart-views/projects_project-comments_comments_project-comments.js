_Component({
                selector: 'project-comments',
                c: 'ProjectComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','project','user','comment','index','editMode','detectChanges','confirmRemoving','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','disableComments','newComment','confirmDelete','remove'],
                children: {cyO7mT3uk:'flk-time-ago',c_I7Oet7I:'markdown',caJqFMnHk:'markdown',cSfISMBvn:'flk-audio-player',cMJqlxI2y:'flk-file-input',cLwbyBeQ5:'record-audio-input',cbf48ellX:'project-comments',csbjqGfmK:'flk-file-input',cbx0WaKuq:'record-audio-input',cradXt8O1:'flk-alert'},
                render: function (component) {
                    let elzjQL7 = eo('div',null,null,`class`,`project-comments-list ${cls({child: component.parentComment})}`);
let elvITvn = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndz71Y = ! component.parentComment;
this.setState('st6ddty', cndz71Y);
let cndVLGN = !(cndz71Y);
this.setState('stQWL3O', cndVLGN);
if (cndz71Y) { 
let el_FahJ = eo('span','bVbf');
text(`Comments`);
ec('span');
}else { 
let elRaECJ = eo('span');
text(`Replies`);
ec('span');
}text(`(${ component.commentsList.length })`);
ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iinU3Z = comment.id+ index;
let elOB_6p = eo('div','k3MMVuQkOSwm' + index+iinU3Z,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment simple-card p-1 m-b-1`);
let cndvEPK = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stJU0J5', cndvEPK);
let cndP2Pl = comment.commentsAreOpened;
this.setState('stbnDwd', cndP2Pl);
if (cndvEPK) { 
let elBXxcY = eo('span','AiTff'+iinU3Z,null,`class`,`action-btns float-right`);
let cndeqXD = ! component.comment || component.comment.id != comment.id;
this.setState('stdXQfs', cndeqXD);
let cndxSE8 = component.comment && component.comment.id == comment.id;
this.setState('stmyqmK', cndxSE8);
if (cndeqXD) { 
let elmfJcP = eo('button','J4kff'+iinU3Z,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elRhr1e = eo('i','phnff'+iinU3Z,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndxSE8) { 
let elznwGm = eo('button','od0ff'+iinU3Z,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cnd5eCp = ! component.comment || component.comment.id != comment.id;
this.setState('st9nMGU', cnd5eCp);
if (cnd5eCp) { 
let elrkBUn = eo('button','IqQff'+iinU3Z,null, eventListeners, {onclick:[function(e) {var $el = this;echo(comment); component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let elVwLOe = eo('i','3d9ff'+iinU3Z,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let elqIm0a = eo('div','z8Iff'+iinU3Z,null,`class`,`row w-100`);
let elIuCTZ = eo('div','bwjff'+iinU3Z,null,`class`,`col-sm-1 col-12`);
let elHn7JV = ev('img','sgwff'+iinU3Z,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
ec('div');
let elW9S4x = eo('div','I7cff'+iinU3Z,null,`class`,`col p-0 meta-comment`);
let elCpzXC = eo('div','2dzff'+iinU3Z);
let elBjYI6 = eo('span','s0Fff'+iinU3Z);
text(comment.createdBy.name);
ec('span');
ec('div');
let el_V65c = eo('div','XVDff'+iinU3Z,null,`class`,`m-b-1`);
let cmpZQf7 = this._lc('cyO7mT3uk', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iinU3Z});
ec('div');
let cnd5Fwe = ! component.editMode;
this.setState('stnNLVj', cnd5Fwe);
if (cnd5Fwe) { 
let el2lmOM = eo('div','d0pff'+iinU3Z);
let cndY3DH = comment.comment.split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stCxl0K', cndY3DH);
let cndzTNq = !(cndY3DH);
this.setState('sthzuka', cndzTNq);
if (cndY3DH) { 
let cmp9Urq = this._lc('c_I7Oet7I', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stCxl0K',insideLoop:true,index:"" +iinU3Z});
}else { 
let cmp_D8w = this._lc('caJqFMnHk', {parent:component,props:{content:comment.comment.split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'sthzuka',insideLoop:true,index:"" +iinU3Z});
let elY0wSV = eo('div','npCff'+iinU3Z);
text(`...`);
ec('div');
let el5IZK2 = eo('button','XDNff'+iinU3Z,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndKBeX = comment.record;
this.setState('stbmBaZ', cndKBeX);
if (cndKBeX) { 
let elQFckT = eo('div','iHUff'+iinU3Z,null,`class`,`m-t-1`);
let cmpuohf = this._lc('cSfISMBvn', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stbmBaZ',insideLoop:true,index:"" +iinU3Z});
ec('div');
}ec('div');
ec('div');
let cnd1yvz = ! Is.empty(comment.attachments);
this.setState('stIgI_J', cnd1yvz);
let cnd4SoY = cndP2Pl;
this.setState('stbDqpH', cnd4SoY);
if (cnd1yvz) { 
let elOhpLV = eo('div','B8tff'+iinU3Z);
let elfth_v = eo('h4','Pa3ff'+iinU3Z,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let ii00Fl = 'wsK7peF' + i;
let elNDlOR = eo('a','97o9C9OIQIIH' + i+iinU3Z+ii00Fl,null,`href`,`${attachment}`,`target`,`_blank`);
let cndyiFD = isImage(attachment);
this.setState('sta_UDR', cndyiFD);
let cndZ2im = !(cndyiFD);
this.setState('stb2TYP', cndZ2im);
if (cndyiFD) { 
let elLM8va = ev('img','iUYff'+iinU3Z+ii00Fl,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elNhfJ3 = eo('button','FXvff'+iinU3Z+ii00Fl,null,`class`,`btn btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndWS_O = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stYfzFw', cndWS_O);
let cndbCgt = cnd4SoY;
this.setState('st7Fu1s', cndbCgt);
if (cndWS_O) { 
let elIzqbF = eo('form','uJdff'+iinU3Z,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elIzqbF.formHandler) {
                    window.cfrmdlr = elIzqbF.formHandler = new FormHandler(elIzqbF, component);
                } else {
                    window.cfrmdlr = elIzqbF.formHandler;
                }
            let cndn7ZW = component.parentComment;
this.setState('strXDav', cndn7ZW);
if (cndn7ZW) { 
let el4YMnh = ev('input','R_cff'+iinU3Z,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
el4YMnh.value = fval(component.parentComment.id);
}let eluX2lv = ev('input','kXQff'+iinU3Z,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eluX2lv.value = fval(component.project.id);
let el3QPfQ = ev('input','YIAff'+iinU3Z,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el3QPfQ.value = fval(component.typeId);
let elQGeYq = ev('input','cvtff'+iinU3Z,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elQGeYq.value = fval(component.type);
let elsyCdq = ev('input','J8lff'+iinU3Z,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elsyCdq.value = fval(component.commentId);
let elQzuQP = eo('textarea','KDcff'+iinU3Z,null, eventListeners, {oninput:[function(e) {component.comment.comment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elIzqbF.formHandler.addError(`comment`, 'required', trans('validation.required'));}return elIzqbF.formHandler.removeError(`comment`);}]},`value`,`${fval(component.comment.comment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
elQzuQP.value = fval(component.comment.comment);
ec('textarea');
let cnd5WBd = elIzqbF.formHandler.getError(`comment`);
this.setState('stUI37m', cnd5WBd);
if (cnd5WBd) { 
let elDaMhC = eo('div','XZTff'+iinU3Z,null,`class`,`alert alert-danger`);
text(elIzqbF.formHandler.getError(`comment`));
ec('div');
}
                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cMJqlxI2y', {parent:component,props:{multiple:true},content:(flkFileInput) => {let eldl_GE = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elqquUc = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iinU3Z});
let cnd4l3O = ! component.isSending;
this.setState('st3MYoA', cnd4l3O);
if (cnd4l3O) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cLwbyBeQ5', {parent:component,state:'st3MYoA',insideLoop:true,index:"" +iinU3Z});
}let elsWiBL = eo('button','xw3ff'+iinU3Z,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let cnd_Kep = ! comment.commentsAreOpened;
this.setState('stKfQ7O', cnd_Kep);
let cndJwEu = cndbCgt;
this.setState('sta33f4', cndJwEu);
if (cnd_Kep) { 
let elN4xUh = eo('h2','WMPff'+iinU3Z,null, eventListeners, {onclick:[function(e) {var $el = this;comment.commentsAreOpened = true; component.detectChanges();}]},`class`,`sub-comments-heading`);
let elUtnzi = eo('span','zEQff'+iinU3Z);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('h2');
}else if (cndJwEu) { 
let cmpHSUr = this._lc('cbf48ellX', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'sta33f4',insideLoop:true,index:"" +iinU3Z});
}ec('div');
}
let cndYjec = component.disableComments && ! component.parentComment;
this.setState('stOrOR6', cndYjec);
let cndrK0B = component.disableComments && component.parentComment;
this.setState('st4iXfF', cndrK0B);
let cnd6ZVX = !(cndYjec||cndrK0B);
this.setState('stC1WR0', cnd6ZVX);
if (cndYjec) { 
let elOnDf4 = eo('div','CRXf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndrK0B) { 
let eleYg8K = eo('div');
ec('div');
}else { 
let eloDBYW = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! eloDBYW.formHandler) {
                    window.cfrmdlr = eloDBYW.formHandler = new FormHandler(eloDBYW, component);
                } else {
                    window.cfrmdlr = eloDBYW.formHandler;
                }
            let cndmSUW = component.parentComment;
this.setState('stHHbbo', cndmSUW);
if (cndmSUW) { 
let el1RZ8s = ev('input','fF4f',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
el1RZ8s.value = fval(component.parentComment.id);
}let elLqTfJ = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elLqTfJ.value = fval(component.project.id);
let elWYgAS = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elWYgAS.value = fval(component.typeId);
let el3wbtK = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el3wbtK.value = fval(component.type);
let el76nFj = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.newComment = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eloDBYW.formHandler.addError(`comment`, 'required', trans('validation.required'));}return eloDBYW.formHandler.removeError(`comment`);}]},`value`,`${fval(component.newComment)}`,`name`,`${(`comment`).toInputName()}`,`placeholder`,`${trans(`Write a comment... (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`comment`);
el76nFj.value = fval(component.newComment);
ec('textarea');
let cndar_H = eloDBYW.formHandler.getError(`comment`);
this.setState('stigNh3', cndar_H);
if (cndar_H) { 
let elZPOkx = eo('div','i5sf',null,`class`,`alert alert-danger`);
text(eloDBYW.formHandler.getError(`comment`));
ec('div');
}let elM9wH0 = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('csbjqGfmK', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elMvOQH = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elBw3s_ = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cndU_vg = ! component.isSending;
this.setState('stKob5n', cndU_vg);
if (cndU_vg) { 
component.recordAudio = this._lc('cbx0WaKuq', {parent:component,attrs:{class:'audio-input'},state:'stKob5n'});
}ec('div');
let elj1OJY = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}ec('div');
let cndEwQK = component.confirmDelete;
this.setState('stpVMXx', cndEwQK);
if (cndEwQK) { 
let cmpPaJ4 = this._lc('cradXt8O1', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stpVMXx'});
}
                    this.isReadyToGo();
                }
        });