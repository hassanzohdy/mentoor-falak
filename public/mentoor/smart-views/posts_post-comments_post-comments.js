_Component({
                selector: 'post-comments',
                c: 'PostComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comments','originalComments','loadMoreComments','isLoadingComments','user','setComment','comment','isPostingComment'],
                children: {cZhGPXvN0:'user-online',c2AHD5nCc:'markdown',ckvVHKRyi:'flk-time-ago'},
                render: function (component) {
                    let elgtwzz = eo('section',null,null,`class`,`post-comments`);
let cnd4PmJ = ! Is.empty(component.comments);
this.setState('stB6rX5', cnd4PmJ);
if (cnd4PmJ) { 
let elnWYyv = eo('div','0nof',null,`class`,`comments-list`);
for (let i in component.comments) {
let comment = component.comments[i]; 
 let iiHtro = 'lNSsZgU' + i;
let elRarQi = eo('div','_VuycZTHeMMb' + i+iiHtro,null,`class`,`comment`);
let elSEmPU = ev('img','uD0ff'+iiHtro,null,`src`,`${comment.createdBy.image}`,`class`,`comment-image`);
let eltWi3g = eo('div','WaZff'+iiHtro,null,`class`,`comment-content`);
let elhHx28 = eo('div','7B7ff'+iiHtro,null,`class`,`by`);
let el0U0fr = eo('span','3Fhff'+iiHtro);
text(comment.createdBy.name);
ec('span');
let cmpTFaT = this._lc('cZhGPXvN0', {parent:component,props:{id:comment.createdBy.id},attrs:{id:`${comment.createdBy.id}`},state:'stB6rX5',insideLoop:true,index:"" +iiHtro});
ec('div');
let elo6Pbk = eo('p','UR8ff'+iiHtro);
let cmppbXE = this._lc('c2AHD5nCc', {parent:component,props:{content:comment.comment},state:'stB6rX5',insideLoop:true,index:"" +iiHtro});
ec('p');
let cmpwNef = this._lc('ckvVHKRyi', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'created-at'},state:'stB6rX5',insideLoop:true,index:"" +iiHtro});
ec('div');
ec('div');
}
let cndVy1d = component.comments.length < component.originalComments.length;
this.setState('stW179L', cndVy1d);
if (cndVy1d) { 
let elwpX3w = eo('button','K9Rf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadMoreComments()}]}, boolAttrs, {disabled:component.isLoadingComments},`class`,`btn btn-sm btn-primary bold m-l-6 m-b-2`);
text(`Load more comments`);
ec('button');
}ec('div');
}let cndpmwX = component.user.isLoggedIn();
this.setState('st6y2vD', cndpmwX);
if (cndpmwX) { 
let elM_UYQ = ev('img','xIZf',null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elOhXgr = eo('textarea','t1Uf',null, eventListeners, {oninput:[function(e) {component.comment = this.value;}],onkeyup:[function(e) {var $el = this;component.setComment($el, event)}]}, boolAttrs, {disabled:component.isPostingComment},`value`,`${fval(component.comment)}`,`placeholder`,`${trans(`Write a comment... (markdown supported)`)}`,`type`,`textarea`,`class`,`comment-input`);
elOhXgr.value = fval(component.comment);
ec('textarea');
}ec('section');

                    this.isReadyToGo();
                }
        });