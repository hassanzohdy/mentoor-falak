_Component({
                selector: 'comments',
                c: 'Comments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['parentComment','toggleParentComments','commentsList','activeComment','project','user','comment','index','editMode','detectChanges','confirmRemoving','previewBy','currentRoute','maxCommentLines','submitComment','typeId','type','commentId','isSending','isValidForm','toggleSubComment','openCommentReply','disableComments','scrollToForm','newComment','isRecording','recordAudio','fileInput','confirmDelete','remove'],
                children: {c3adG6eKG:'user-card',cbsGZQgjT:'user-card',c7REyiTkE:'flk-time-ago',c1K9IUMzS:'markdown',cC36bRyOH:'markdown',cjYFxD3xS:'flk-audio-player',cHxuBZ74K:'markdown-input',cTbRX6oVG:'flk-file-input',cjJVrgtI4:'record-audio-input',cNOeuuMls:'comments',cscbOhIlW:'markdown-input',cBYJnQAQ2:'flk-file-input',cDvMuZVGh:'record-audio-input',cwgLbxbfc:'flk-alert'},
                render: function (component) {
                    let elke5ws = eo('div',null,null,`class`,`comments-list`);
elke5ws.cls = {child: component.parentComment};

            for (let className in elke5ws.cls) {
                elke5ws.classList.toggle(className, elke5ws.cls[className]);
            }  
            let elqXgiE = eo('h2',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleParentComments()}]},`class`,`bold m-y-2 heading`);
let cndzxGv = ! component.parentComment;
this.setState('stZqAO1', cndzxGv);
if (cndzxGv) { 
let el7b8Wb = eo('span','Vqef');
text(`Comments
            (${ component.commentsList.length })`);
ec('span');
}ec('h2');
for (let index in component.commentsList) {
let comment = component.commentsList[index]; 
 let iitL81 = comment.id+ index;
let elvoqrD = eo('div','I0dJF4sA6wtC' + index+iitL81,null,`id`,`${'cmnt' + comment.id}`,`class`,`comment p-1 m-b-1`);
elvoqrD.cls = {active: Boolean(component.activeComment && component.activeComment.id == comment.id)};

            for (let className in elvoqrD.cls) {
                elvoqrD.classList.toggle(className, elvoqrD.cls[className]);
            }  
            let cndUhBP = component.project.isHigherAuthority || comment.createdBy.id == component.user.id;
this.setState('stMtwKp', cndUhBP);
if (cndUhBP) { 
let el4eeNs = eo('span','oTbff'+iitL81,null,`class`,`action-btns`);
let cndh8rV = ! component.comment || component.comment.id != comment.id;
this.setState('st_pALi', cndh8rV);
let cndfQJG = component.comment && component.comment.id == comment.id;
this.setState('stDpGtm', cndfQJG);
if (cndh8rV) { 
let elWD6u4 = eo('button','Hy4ff'+iitL81,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = comment; component.index = index; component.editMode = true; component.detectChanges();}]},`type`,`button`);
let elaqZ4d = eo('i','Aycff'+iitL81,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
}else if (cndfQJG) { 
let elABbDa = eo('button','pPxff'+iitL81,null, eventListeners, {onclick:[function(e) {var $el = this;component.comment = null; component.editMode = false; component.detectChanges();}]},`type`,`button`);
text(`Cancel`);
ec('button');
}let cndY9Fo = ! component.comment || component.comment.id != comment.id;
this.setState('stoMMAL', cndY9Fo);
if (cndY9Fo) { 
let elKrpTt = eo('button','XHeff'+iitL81,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(comment, index); component.detectChanges();}]},`type`,`button`);
let el3ABdf = eo('i','Ncoff'+iitL81,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
}ec('span');
}let el5SmFP = eo('div','_abff'+iitL81,null,`class`,`w-100`);
let elDNgCB = eo('div','rZsff'+iitL81,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromImage')}]},`class`,`relative d-inline-block v-top`);
let el8nrEM = ev('img','Mwqff'+iitL81,null,`src`,`${comment.createdBy.image}`,`class`,`user-image`,`title`,`${comment.createdBy.name}`,`alt`,`${comment.createdBy.name}`);
let cndSdoJ = comment.previewUserFromImage;
this.setState('stDVHWl', cndSdoJ);
if (cndSdoJ) { 
let cmpBqvU = this._lc('c3adG6eKG', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromImage = false)}},state:'stDVHWl',insideLoop:true,index:"" +iitL81});
}ec('div');
let eldf_JS = eo('div','qbdff'+iitL81,null,`class`,`meta-comment`);
let elDRLrC = eo('div','Jvwff'+iitL81,null,`class`,`relative d-inline-block`);
let elhWApr = eo('span','8g9ff'+iitL81,null, eventListeners, {onmouseover:[function(e) {var $el = this;component.previewBy($el, comment, 'previewUserFromName')}]});
text(comment.createdBy.name);
ec('span');
let elmOiF8 = eo('a','XUHff'+iitL81,null,`href`,`${component.currentRoute + '?comment=' + comment.tree}`,`title`,``);
let elxMLrw = eo('i','RDyff'+iitL81,null,`class`,`${fas('link') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elmOiF8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Comment url')}`});
        ;
                    }, 20);                
                let cndTOCC = comment.previewUserFromName;
this.setState('stsMgIC', cndTOCC);
if (cndTOCC) { 
let cmpWS02 = this._lc('cbsGZQgjT', {parent:component,props:{user:comment.createdBy},events:{onclose:function(e) {let $el = this; component.detectChanges(() => comment.previewUserFromName = false)}},state:'stsMgIC',insideLoop:true,index:"" +iitL81});
}ec('div');
let elOONeh = eo('div','dMLff'+iitL81,null,`class`,`m-b-1`);
let cmpXtrx = this._lc('c7REyiTkE', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iitL81});
ec('div');
let cndc7zb = ! component.editMode;
this.setState('sthv6vT', cndc7zb);
if (cndc7zb) { 
let elgB3yd = eo('div','br4ff'+iitL81);
let cndEoFl = String(comment.comment).split('\n').length <= component.maxCommentLines || comment.isExpanded;
this.setState('stPzXjX', cndEoFl);
let cndDsF2 = !(cndEoFl);
this.setState('stjZoMB', cndDsF2);
if (cndEoFl) { 
let cmp5OiI = this._lc('c1K9IUMzS', {parent:component,props:{content:comment.comment},attrs:{class:'comment-text'},state:'stPzXjX',insideLoop:true,index:"" +iitL81});
}else { 
let cmpnow9 = this._lc('cC36bRyOH', {parent:component,props:{content:String(comment.comment).split('\n').slice(0, component.maxCommentLines).join('\n')},attrs:{class:'comment-text'},state:'stjZoMB',insideLoop:true,index:"" +iitL81});
let el_K2fM = eo('div','or9ff'+iitL81);
text(`...`);
ec('div');
let elcyIer = eo('button','CAHff'+iitL81,null, eventListeners, {onclick:[function(e) {var $el = this;comment.isExpanded = true; component.detectChanges();}]},`type`,`button`,`class`,`bold orange-text`);
text(`Continue Reading...`);
ec('button');
}ec('div');
}let cndI8S1 = comment.record;
this.setState('stTW_rW', cndI8S1);
if (cndI8S1) { 
let elDiamr = eo('div','GvXff'+iitL81,null,`class`,`m-t-1`);
let cmpgavf = this._lc('cjYFxD3xS', {parent:component,props:{src:comment.record},attrs:{src:`${comment.record}`},state:'stTW_rW',insideLoop:true,index:"" +iitL81});
ec('div');
}ec('div');
ec('div');
let cndbrgA = ! Is.empty(comment.attachments);
this.setState('styJJKW', cndbrgA);
if (cndbrgA) { 
let elsJNbP = eo('div','MeZff'+iitL81);
let elyywKt = eo('h4','v_1ff'+iitL81,null,`class`,`bold`);
text(`Attachments (${ comment.attachments.length })`);
ec('h4');
for (let i in comment.attachments) {
let attachment = comment.attachments[i]; 
 let iikOv3 = 'yWm8VoZ' + i;
let elmrfdN = eo('a','DWbZp6g4kYci' + i+iitL81+iikOv3,null,`href`,`${attachment}`,`target`,`_blank`);
let cndl3F9 = isImage(attachment);
this.setState('stqN8O7', cndl3F9);
let cndTPKH = !(cndl3F9);
this.setState('st81fEE', cndTPKH);
if (cndl3F9) { 
let elVP73N = ev('img','pByff'+iitL81+iikOv3,null, 'style', {width:'100px',height:'100px'},`src`,`${attachment}`,`class`,`img-thumbnail m-l-1`,`title`,`${comment.comment}`,`alt`,`${comment.comment}`);
}else { 
let elX5ont = eo('button','AO5ff'+iitL81+iikOv3,null,`class`,`btn btn-sm bold btn-pink`);
text(`Open Attachment`);
ec('button');
}ec('a');
}
ec('div');
}let cndG29_ = component.comment && component.comment.id == comment.id && component.editMode;
this.setState('stweB7p', cndG29_);
if (cndG29_) { 
let elHBNnS = eo('form','Mp5ff'+iitL81,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-1`);

                if (! elHBNnS.formHandler) {
                    window.cfrmdlr = elHBNnS.formHandler = new FormHandler(elHBNnS, component);
                } else {
                    window.cfrmdlr = elHBNnS.formHandler;
                }
            let cnd0ZTP = component.parentComment;
this.setState('st_pMQX', cnd0ZTP);
if (cnd0ZTP) { 
let el_UtMy = ev('input','uYHff'+iitL81,null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
el_UtMy.value = fval(component.parentComment.id);
}let cndez7k = component.project.id;
this.setState('stDg3sk', cndez7k);
if (cndez7k) { 
let elWLsLc = ev('input','hSKff'+iitL81,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elWLsLc.value = fval(component.project.id);
}let el1wr2C = ev('input','a1eff'+iitL81,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
el1wr2C.value = fval(component.typeId);
let eltd9LW = ev('input','kJAff'+iitL81,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
eltd9LW.value = fval(component.type);
let elJlIi7 = ev('input','A6Bff'+iitL81,null, eventListeners, {oninput:[function(e) {component.commentId = this.value;}]},`value`,`${fval(component.commentId)}`,`name`,`${(`id`).toInputName()}`,`type`,`hidden`);
elJlIi7.value = fval(component.commentId);
let cmpF1Os = this._lc('cHxuBZ74K', {parent:component,props:{value:component.comment.comment},events:{onchange:function(e) {let $el = this; component.comment.comment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment...`)}`},insideLoop:true,index:"" +iitL81});

                if (! component.fileInput) {
                    component.fileInput = [];
                }
            ;
component.fileInput = this._lc('cTbRX6oVG', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elI5XtH = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elyIrbm = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'},insideLoop:true,index:"" +iitL81});
let cndCC7l = ! component.isSending;
this.setState('stTRYe9', cndCC7l);
if (cndCC7l) { 

                if (! component.editRecordAudio) {
                    component.editRecordAudio = [];
                }
            ;
component.editRecordAudio = this._lc('cjJVrgtI4', {parent:component,state:'stTRYe9',insideLoop:true,index:"" +iitL81});
}let elD3mQP = eo('button','GBxff'+iitL81,null, boolAttrs, {disabled:component.isSending || ! component.isValidForm},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
ec('form');
}let elxGle7 = eo('h2','pVXff'+iitL81,null,`class`,`sub-comments-heading`);
let elYYdDY = eo('span','w3yff'+iitL81,null, eventListeners, {onclick:[function(e) {var $el = this;component.toggleSubComment(comment)}]});
let elB6ywz = eo('span','AMJff'+iitL81);
text(`Replies`);
ec('span');
text(`(${ comment.comments.length })`);
ec('span');
let cndusKo = Comments.writeComment === false;
this.setState('stUm7g1', cndusKo);
if (cndusKo) { 
let elO36rp = eo('button','tNMff'+iitL81,null, eventListeners, {onclick:[function(e) {var $el = this;component.openCommentReply(comment)}]},`class`,`btn btn btn-sm btn-gray cc`);
text(`Reply`);
ec('button');
}ec('h2');
let cndYr8s = comment.commentsAreOpened;
this.setState('stTE8hw', cndYr8s);
if (cndYr8s) { 
let cmpOybI = this._lc('cNOeuuMls', {parent:component,props:{disableComments:component.disableComments,parent:comment,comments:comment.comments,type:component.type,typeId:component.typeId,project:component.project},state:'stTE8hw',insideLoop:true,index:"" +iitL81});
}ec('div');
}
let cnd4MHq = component.disableComments && ! component.parentComment;
this.setState('stRVrer', cnd4MHq);
let cndRN3u = Comments.writeComment === false && ! component.parentComment;
this.setState('stYUt3O', cndRN3u);
let cndM3ll = Comments.writeComment === component.parentComment;
this.setState('stjRp0A', cndM3ll);
if (cnd4MHq) { 
let el0bMIa = eo('div','bZVf',null,`class`,`text-center bold petrol-text closed-comments`);
text(`Comments Are Closed`);
ec('div');
}else if (cndRN3u) { 
let elQ0i7G = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = component.parentComment; component.detectChanges();}]},`class`,`btn btn btn-gray`);
text(`Reply`);
ec('button');
}else if (cndM3ll) { 
let elyi9sD = eo('form',null,null, eventListeners, {onready:[function(e) {var $el = this;component.scrollToForm($el)}],onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submitComment($el)}]},`class`,`m-t-4`);

                if (! elyi9sD.formHandler) {
                    window.cfrmdlr = elyi9sD.formHandler = new FormHandler(elyi9sD, component);
                } else {
                    window.cfrmdlr = elyi9sD.formHandler;
                }
            let cnd7RVQ = component.parentComment;
this.setState('st65esI', cnd7RVQ);
if (cnd7RVQ) { 
let elJgLgu = ev('input','mVhf',null, eventListeners, {oninput:[function(e) {component.parentComment.id = this.value;}]},`value`,`${fval(component.parentComment.id)}`,`name`,`${(`parent`).toInputName()}`,`type`,`hidden`);
elJgLgu.value = fval(component.parentComment.id);
}let elNZKon = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elNZKon.value = fval(component.project.id);
let elx1GV7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.typeId = this.value;}]},`value`,`${fval(component.typeId)}`,`name`,`${(`typeId`).toInputName()}`,`type`,`hidden`);
elx1GV7.value = fval(component.typeId);
let el2g9W7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.type = this.value;}]},`value`,`${fval(component.type)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
el2g9W7.value = fval(component.type);
let cmpCyL7 = this._lc('cscbOhIlW', {parent:component,props:{value:component.newComment},events:{onchange:function(e) {let $el = this; component.newComment = e}},attrs:{name:`${(`comment`).toInputName()}`,placeholder:`${trans(`Write a comment... (Markdown Support)`)}`}});
let elrYjZC = eo('div',null,null,`class`,`files`);
component.fileInput = this._lc('cBYJnQAQ2', {parent:component,props:{multiple:true},content:(flkFileInput) => {let elMvjr1 = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elIhDHA = eo('strong',null,null,`class`,`ml-2`);
text(`Attachments`);
ec('strong');
},boolAttrs:{multiple:true},attrs:{name:`${(`attachments[]`).toInputName()}`,class:'btn btn-info bold',label:'Attachments'}});
let cnd3zRX = ! component.isSending;
this.setState('staH2Cy', cnd3zRX);
if (cnd3zRX) { 
component.recordAudio = this._lc('cDvMuZVGh', {parent:component,events:{onstart:function(e) {let $el = this; component.isRecording = true},onrecord:function(e) {let $el = this; component.isRecording = false;}},attrs:{class:'audio-input'},state:'staH2Cy'});
}ec('div');
let elmDixX = eo('button',null,null, boolAttrs, {disabled:(! component.newComment && ! component.recordAudio.recordData && component.fileInput.fileInput.files.length == 0) || component.isSending || ! component.isValidForm || component.isRecording},`class`,`btn btn-pink bold m-t-1`);
text(`Comment`);
ec('button');
let elXs4Br = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;Comments.writeComment = false;  component.detectChanges();}]},`type`,`button`,`class`,`btn btn-light`);
text(`Cancel`);
ec('button');
ec('form');

                    setTimeout(function () {
                        let $el = elyi9sD;
                        component.scrollToForm($el);
                    }, 20);                
                }ec('div');
let cndh_SP = component.confirmDelete;
this.setState('stCtbKI', cndh_SP);
if (cndh_SP) { 
let cmpW5BU = this._lc('cwgLbxbfc', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null;  component.detectChanges();},onconfirm:function(e) {let $el = this; component.remove()}},state:'stCtbKI'});
}
                    this.isReadyToGo();
                }
        });