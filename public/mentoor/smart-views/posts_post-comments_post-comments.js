_Component({
                selector: 'post-comments',
                c: 'PostComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comments','originalComments','loadMoreComments','isLoadingComments','user','setComment','comment','isPostingComment'],
                children: {cmfnY0djZ:'user-online',chmnAbm9t:'markdown',cYPpwKXJT:'flk-time-ago'},
                render: function (component) {
                    let el2poYg = eo('section',null,null,`class`,`post-comments`);
let cndQsOA = ! Is.empty(component.comments);
this.setState('stg4ZaA', cndQsOA);
if (cndQsOA) { 
let elWOjBQ = eo('div','hWSf',null,`class`,`comments-list`);
for (let i in component.comments) {
let comment = component.comments[i]; 
 let ii_tl8 = 'VAxPGFn' + i;
let elAPHBH = eo('div','JF7YTimVm1Jp' + i+ii_tl8,null,`class`,`comment`);
let elB58Uu = ev('img','F87ff'+ii_tl8,null,`src`,`${comment.createdBy.image}`,`class`,`comment-image`);
let elIeT93 = eo('div','J0Sff'+ii_tl8,null,`class`,`comment-content`);
let elM6dhG = eo('div','IjUff'+ii_tl8,null,`class`,`by`);
let elqsJXG = eo('span','3IPff'+ii_tl8);
text(comment.createdBy.name);
ec('span');
let cmpgSsr = this._lc('cmfnY0djZ', {parent:component,props:{id:comment.createdBy.id},attrs:{id:`${comment.createdBy.id}`},state:'stg4ZaA',insideLoop:true,index:"" +ii_tl8});
ec('div');
let elOICBV = eo('p','t8Iff'+ii_tl8);
let cmpqGn8 = this._lc('chmnAbm9t', {parent:component,props:{content:comment.comment},state:'stg4ZaA',insideLoop:true,index:"" +ii_tl8});
ec('p');
let cmp109d = this._lc('cYPpwKXJT', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'created-at'},state:'stg4ZaA',insideLoop:true,index:"" +ii_tl8});
ec('div');
ec('div');
}
let cndP46S = component.comments.length < component.originalComments.length;
this.setState('st7a2h1', cndP46S);
if (cndP46S) { 
let ellKTid = eo('button','VOSf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadMoreComments()}]}, boolAttrs, {disabled:component.isLoadingComments},`class`,`btn btn-sm btn-primary bold m-l-6 m-b-2`);
text(`Load more comments`);
ec('button');
}ec('div');
}let cndldNW = component.user.isLoggedIn();
this.setState('stmIAeV', cndldNW);
if (cndldNW) { 
let elcMq8x = ev('img','EPRf',null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elU7I9p = eo('textarea','ze0f',null, eventListeners, {oninput:[function(e) {component.comment = this.value;}],onkeyup:[function(e) {var $el = this;component.setComment($el, event)}]}, boolAttrs, {disabled:component.isPostingComment},`value`,`${fval(component.comment)}`,`placeholder`,`${trans(`Write a comment... (markdown supported)`)}`,`type`,`textarea`,`class`,`comment-input`);
elU7I9p.value = fval(component.comment);
ec('textarea');
}ec('section');

                    this.isReadyToGo();
                }
        });