_Component({
                selector: 'post-comments',
                c: 'PostComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comments','originalComments','loadMoreComments','isLoadingComments','user','setComment','comment','isPostingComment'],
                children: {cBmx0r0bv:'user-online',cSL6JtQdh:'markdown',cpsqiNuzo:'flk-time-ago'},
                render: function (component) {
                    let elAUQbO = eo('section',null,null,`class`,`post-comments`);
let cndva9w = ! Is.empty(component.comments);
this.setState('stB5LgQ', cndva9w);
if (cndva9w) { 
let el_KehO = eo('div','zWxf',null,`class`,`comments-list`);
for (let i in component.comments) {
let comment = component.comments[i]; 
 let iilpRl = 'nfHxpb2' + i;
let elAsOlo = eo('div','DbOIpK74VTWz' + i+iilpRl,null,`class`,`comment`);
let elsAfmt = ev('img','KuWff'+iilpRl,null,`src`,`${comment.createdBy.image}`,`class`,`comment-image`);
let elRojxW = eo('div','XIZff'+iilpRl,null,`class`,`comment-content`);
let elgVGh8 = eo('div','Y8Fff'+iilpRl,null,`class`,`by`);
let elAnAmZ = eo('span','CC6ff'+iilpRl);
text(comment.createdBy.name);
ec('span');
let cmpblYM = this._lc('cBmx0r0bv', {parent:component,props:{id:comment.createdBy.id},attrs:{id:`${comment.createdBy.id}`},state:'stB5LgQ',insideLoop:true,index:"" +iilpRl});
ec('div');
let elhMTsp = eo('p','HyTff'+iilpRl);
let cmp8qsv = this._lc('cSL6JtQdh', {parent:component,props:{content:comment.comment},state:'stB5LgQ',insideLoop:true,index:"" +iilpRl});
ec('p');
let cmpJPys = this._lc('cpsqiNuzo', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'created-at'},state:'stB5LgQ',insideLoop:true,index:"" +iilpRl});
ec('div');
ec('div');
}
let cndNXB3 = component.comments.length < component.originalComments.length;
this.setState('st4FP6j', cndNXB3);
if (cndNXB3) { 
let elci01A = eo('button','uGif',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadMoreComments()}]}, boolAttrs, {disabled:component.isLoadingComments},`class`,`btn btn-sm btn-primary bold m-l-6 m-b-2`);
text(`Load more comments`);
ec('button');
}ec('div');
}let cndEn0e = component.user.isLoggedIn();
this.setState('stH11Xv', cndEn0e);
if (cndEn0e) { 
let elYnVkZ = ev('img','nDHf',null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elGGO7R = eo('textarea','CxEf',null, eventListeners, {oninput:[function(e) {component.comment = this.value;}],onkeyup:[function(e) {var $el = this;component.setComment($el, event)}]}, boolAttrs, {disabled:component.isPostingComment},`value`,`${fval(component.comment)}`,`placeholder`,`${trans(`Write a comment... (markdown supported)`)}`,`type`,`textarea`,`class`,`comment-input`);
elGGO7R.value = fval(component.comment);
ec('textarea');
}ec('section');

                    this.isReadyToGo();
                }
        });