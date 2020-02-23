_Component({
                selector: 'post-comments',
                c: 'PostComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comments','originalComments','loadMoreComments','isLoadingComments','user','setComment','comment','isPostingComment'],
                children: {cjv4CgIBD:'user-online',cuOdRJtV1:'markdown',cz5MfFcDg:'flk-time-ago'},
                render: function (component) {
                    let elsl8bn = eo('section',null,null,`class`,`post-comments`);
let cndavp7 = ! Is.empty(component.comments);
this.setState('stNERGB', cndavp7);
if (cndavp7) { 
let ely2OHj = eo('div','SY5f',null,`class`,`comments-list`);
for (let i in component.comments) {
let comment = component.comments[i]; 
 let iiJQ66 = '5gmhLEM' + i;
let elReeWH = eo('div','1MYET3VQmfnb' + i+iiJQ66,null,`class`,`comment`);
let eljG5CB = ev('img','IYXff'+iiJQ66,null,`src`,`${comment.createdBy.image}`,`class`,`comment-image`);
let el28pad = eo('div','KQLff'+iiJQ66,null,`class`,`comment-content`);
let elQmtm1 = eo('div','lAJff'+iiJQ66,null,`class`,`by`);
let eljrZOC = eo('span','sONff'+iiJQ66);
text(comment.createdBy.name);
ec('span');
let cmpGfbo = this._lc('cjv4CgIBD', {parent:component,props:{id:comment.createdBy.id},attrs:{id:`${comment.createdBy.id}`},state:'stNERGB',insideLoop:true,index:"" +iiJQ66});
ec('div');
let elyIW0t = eo('p','rflff'+iiJQ66);
let cmpEB3P = this._lc('cuOdRJtV1', {parent:component,props:{content:comment.comment},state:'stNERGB',insideLoop:true,index:"" +iiJQ66});
ec('p');
let cmpC8RD = this._lc('cz5MfFcDg', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'created-at'},state:'stNERGB',insideLoop:true,index:"" +iiJQ66});
ec('div');
ec('div');
}
let cndedT0 = component.comments.length < component.originalComments.length;
this.setState('stTcsIv', cndedT0);
if (cndedT0) { 
let eleAIo5 = eo('button','o51f',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadMoreComments()}]}, boolAttrs, {disabled:component.isLoadingComments},`class`,`btn btn-sm btn-primary bold m-l-6 m-b-2`);
text(`Load more comments`);
ec('button');
}ec('div');
}let cndoM1K = component.user.isLoggedIn();
this.setState('stlu93j', cndoM1K);
if (cndoM1K) { 
let elDNDxp = ev('img','5Mof',null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elF6euo = eo('textarea','C7yf',null, eventListeners, {oninput:[function(e) {component.comment = this.value;}],onkeyup:[function(e) {var $el = this;component.setComment($el, event)}]}, boolAttrs, {disabled:component.isPostingComment},`value`,`${fval(component.comment)}`,`placeholder`,`${trans(`Write a comment... (markdown supported)`)}`,`type`,`textarea`,`class`,`comment-input`);
elF6euo.value = fval(component.comment);
ec('textarea');
}ec('section');

                    this.isReadyToGo();
                }
        });