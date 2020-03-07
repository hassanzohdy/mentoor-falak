_Component({
                selector: 'post-comments',
                c: 'PostComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comments','originalComments','loadMoreComments','isLoadingComments','user','setComment','comment','isPostingComment'],
                children: {cNGKXLRxj:'user-online',cqPdITYPL:'markdown',cl1N0Gqm5:'flk-time-ago'},
                render: function (component) {
                    let el93mOe = eo('section',null,null,`class`,`post-comments`);
let cndjh_9 = ! Is.empty(component.comments);
this.setState('st6VP5X', cndjh_9);
if (cndjh_9) { 
let elVnTDQ = eo('div','eITf',null,`class`,`comments-list`);
for (let i in component.comments) {
let comment = component.comments[i]; 
 let iigX6J = '_OGjKDn' + i;
let el8GNfk = eo('div','kkIzaT8CbeU4' + i+iigX6J,null,`class`,`comment`);
let eli4UpB = ev('img','fFqff'+iigX6J,null,`src`,`${comment.createdBy.image}`,`class`,`comment-image`);
let elPy1QJ = eo('div','9IYff'+iigX6J,null,`class`,`comment-content`);
let elMXTP_ = eo('div','0FYff'+iigX6J,null,`class`,`by`);
let elW8P2M = eo('span','T99ff'+iigX6J);
text(comment.createdBy.name);
ec('span');
let cmp2Ij8 = this._lc('cNGKXLRxj', {parent:component,props:{id:comment.createdBy.id},attrs:{id:`${comment.createdBy.id}`},state:'st6VP5X',insideLoop:true,index:"" +iigX6J});
ec('div');
let el0Yaqy = eo('p','EbQff'+iigX6J);
let cmpoCG1 = this._lc('cqPdITYPL', {parent:component,props:{content:comment.comment},state:'st6VP5X',insideLoop:true,index:"" +iigX6J});
ec('p');
let cmpSREN = this._lc('cl1N0Gqm5', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'created-at'},state:'st6VP5X',insideLoop:true,index:"" +iigX6J});
ec('div');
ec('div');
}
let cndqfDG = component.comments.length < component.originalComments.length;
this.setState('stEIz8u', cndqfDG);
if (cndqfDG) { 
let el1Rtim = eo('button','JdHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadMoreComments()}]}, boolAttrs, {disabled:component.isLoadingComments},`class`,`btn btn-sm btn-primary bold m-l-6 m-b-2`);
text(`Load more comments`);
ec('button');
}ec('div');
}let cndESGg = component.user.isLoggedIn();
this.setState('stsImeR', cndESGg);
if (cndESGg) { 
let elXWSOG = ev('img','_xff',null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let el3i6_k = eo('textarea','X9Sf',null, eventListeners, {oninput:[function(e) {component.comment = this.value;}],onkeyup:[function(e) {var $el = this;component.setComment($el, event)}]}, boolAttrs, {disabled:component.isPostingComment},`value`,`${fval(component.comment)}`,`placeholder`,`${trans(`Write a comment... (markdown supported)`)}`,`type`,`textarea`,`class`,`comment-input`);
el3i6_k.value = fval(component.comment);
ec('textarea');
}ec('section');

                    this.isReadyToGo();
                }
        });