_Component({
                selector: 'post-comments',
                c: 'PostComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comments','originalComments','loadMoreComments','isLoadingComments','user','setComment','comment','isPostingComment'],
                children: {cPUWcQ6ev:'user-online',cTOXDEl2x:'markdown',c6qaHYBiR:'flk-time-ago'},
                render: function (component) {
                    let elFmLQa = eo('section',null,null,`class`,`post-comments`);
let cnd62Ll = ! Is.empty(component.comments);
this.setState('stLLAPg', cnd62Ll);
if (cnd62Ll) { 
let elWSyyI = eo('div','kSmf',null,`class`,`comments-list`);
for (let i in component.comments) {
let comment = component.comments[i]; 
 let iiOmk9 = 'T2oejZ0' + i;
let el9iViW = eo('div','Iwcb4c2pvUf4' + i+iiOmk9,null,`class`,`comment`);
let el6mBQR = ev('img','CSOff'+iiOmk9,null,`src`,`${comment.createdBy.image}`,`class`,`comment-image`);
let elJFDbh = eo('div','tFAff'+iiOmk9,null,`class`,`comment-content`);
let el3s735 = eo('div','nvbff'+iiOmk9,null,`class`,`by`);
let el98ETi = eo('span','45pff'+iiOmk9);
text(comment.createdBy.name);
ec('span');
let cmpbaOC = this._lc('cPUWcQ6ev', {parent:component,props:{id:comment.createdBy.id},attrs:{id:`${comment.createdBy.id}`},state:'stLLAPg',insideLoop:true,index:"" +iiOmk9});
ec('div');
let elt8jhE = eo('p','KUPff'+iiOmk9);
let cmpq0KV = this._lc('cTOXDEl2x', {parent:component,props:{content:comment.comment},state:'stLLAPg',insideLoop:true,index:"" +iiOmk9});
ec('p');
let cmpOhtY = this._lc('c6qaHYBiR', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'created-at'},state:'stLLAPg',insideLoop:true,index:"" +iiOmk9});
ec('div');
ec('div');
}
let cndvBqn = component.comments.length < component.originalComments.length;
this.setState('stnAUD0', cndvBqn);
if (cndvBqn) { 
let elm1u9_ = eo('button','wBGf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadMoreComments()}]}, boolAttrs, {disabled:component.isLoadingComments},`class`,`btn btn-sm btn-primary bold m-l-6 m-b-2`);
text(`Load more comments`);
ec('button');
}ec('div');
}let cndpylP = component.user.isLoggedIn();
this.setState('st46s7k', cndpylP);
if (cndpylP) { 
let elBc0Vb = ev('img','k_1f',null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elZLbzg = eo('textarea','FDkf',null, eventListeners, {oninput:[function(e) {component.comment = this.value;}],onkeyup:[function(e) {var $el = this;component.setComment($el, event)}]}, boolAttrs, {disabled:component.isPostingComment},`value`,`${fval(component.comment)}`,`placeholder`,`${trans(`Write a comment... (markdown supported)`)}`,`type`,`textarea`,`class`,`comment-input`);
elZLbzg.value = fval(component.comment);
ec('textarea');
}ec('section');

                    this.isReadyToGo();
                }
        });