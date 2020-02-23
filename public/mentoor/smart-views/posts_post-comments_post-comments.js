_Component({
                selector: 'post-comments',
                c: 'PostComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comments','originalComments','loadMoreComments','isLoadingComments','user','setComment','comment','isPostingComment'],
                children: {cJa1deYZ0:'user-online',cc4xWUMPB:'markdown',c95oYgza1:'flk-time-ago'},
                render: function (component) {
                    let ellD32o = eo('section',null,null,`class`,`post-comments`);
let cndRZR9 = ! Is.empty(component.comments);
this.setState('stNw3Wf', cndRZR9);
if (cndRZR9) { 
let elTYBpp = eo('div','FMWf',null,`class`,`comments-list`);
for (let i in component.comments) {
let comment = component.comments[i]; 
 let iiOOFS = 'JngK0pW' + i;
let elkRMta = eo('div','pLoR3KEnj5hK' + i+iiOOFS,null,`class`,`comment`);
let el_Obsh = ev('img','ogyff'+iiOOFS,null,`src`,`${comment.createdBy.image}`,`class`,`comment-image`);
let elG88Ir = eo('div','x4wff'+iiOOFS,null,`class`,`comment-content`);
let el1x3i9 = eo('div','HJOff'+iiOOFS,null,`class`,`by`);
let elGTjRj = eo('span','avQff'+iiOOFS);
text(comment.createdBy.name);
ec('span');
let cmpCwNe = this._lc('cJa1deYZ0', {parent:component,props:{id:comment.createdBy.id},attrs:{id:`${comment.createdBy.id}`},state:'stNw3Wf',insideLoop:true,index:"" +iiOOFS});
ec('div');
let elXsaiR = eo('p','k4Off'+iiOOFS);
let cmpKknz = this._lc('cc4xWUMPB', {parent:component,props:{content:comment.comment},state:'stNw3Wf',insideLoop:true,index:"" +iiOOFS});
ec('p');
let cmpDIGJ = this._lc('c95oYgza1', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'created-at'},state:'stNw3Wf',insideLoop:true,index:"" +iiOOFS});
ec('div');
ec('div');
}
let cnd2iNy = component.comments.length < component.originalComments.length;
this.setState('stiw21Q', cnd2iNy);
if (cnd2iNy) { 
let eluyXPs = eo('button','gmjf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadMoreComments()}]}, boolAttrs, {disabled:component.isLoadingComments},`class`,`btn btn-sm btn-primary bold m-l-6 m-b-2`);
text(`Load more comments`);
ec('button');
}ec('div');
}let cnd7UVh = component.user.isLoggedIn();
this.setState('stuKpgD', cnd7UVh);
if (cnd7UVh) { 
let el6_vod = ev('img','ZHyf',null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elsFFAh = eo('textarea','Qgjf',null, eventListeners, {oninput:[function(e) {component.comment = this.value;}],onkeyup:[function(e) {var $el = this;component.setComment($el, event)}]}, boolAttrs, {disabled:component.isPostingComment},`value`,`${fval(component.comment)}`,`placeholder`,`${trans(`Write a comment... (markdown supported)`)}`,`type`,`textarea`,`class`,`comment-input`);
elsFFAh.value = fval(component.comment);
ec('textarea');
}ec('section');

                    this.isReadyToGo();
                }
        });