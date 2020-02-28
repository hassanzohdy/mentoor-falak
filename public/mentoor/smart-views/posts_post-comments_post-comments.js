_Component({
                selector: 'post-comments',
                c: 'PostComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comments','originalComments','loadMoreComments','isLoadingComments','user','setComment','comment','isPostingComment'],
                children: {cSm9kY6rf:'user-online',c2g0vFMaw:'markdown',cueS7m7Yn:'flk-time-ago'},
                render: function (component) {
                    let el0ulYa = eo('section',null,null,`class`,`post-comments`);
let cnd7UE3 = ! Is.empty(component.comments);
this.setState('stxY4mQ', cnd7UE3);
if (cnd7UE3) { 
let elnRibU = eo('div','akZf',null,`class`,`comments-list`);
for (let i in component.comments) {
let comment = component.comments[i]; 
 let iivm8_ = 'y4P10Gu' + i;
let el668wx = eo('div','oGKyF_iBKiGf' + i+iivm8_,null,`class`,`comment`);
let elx0ebA = ev('img','9nSff'+iivm8_,null,`src`,`${comment.createdBy.image}`,`class`,`comment-image`);
let els84lE = eo('div','l8Rff'+iivm8_,null,`class`,`comment-content`);
let elREEWn = eo('div','Oyiff'+iivm8_,null,`class`,`by`);
let elHta5q = eo('span','vONff'+iivm8_);
text(comment.createdBy.name);
ec('span');
let cmpXsha = this._lc('cSm9kY6rf', {parent:component,props:{id:comment.createdBy.id},attrs:{id:`${comment.createdBy.id}`},state:'stxY4mQ',insideLoop:true,index:"" +iivm8_});
ec('div');
let elPNXFH = eo('p','9Mxff'+iivm8_);
let cmp7fy8 = this._lc('c2g0vFMaw', {parent:component,props:{content:comment.comment},state:'stxY4mQ',insideLoop:true,index:"" +iivm8_});
ec('p');
let cmpTgJu = this._lc('cueS7m7Yn', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'created-at'},state:'stxY4mQ',insideLoop:true,index:"" +iivm8_});
ec('div');
ec('div');
}
let cndoxlK = component.comments.length < component.originalComments.length;
this.setState('stnv_xG', cndoxlK);
if (cndoxlK) { 
let elBEgi8 = eo('button','TcWf',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadMoreComments()}]}, boolAttrs, {disabled:component.isLoadingComments},`class`,`btn btn-sm btn-primary bold m-l-6 m-b-2`);
text(`Load more comments`);
ec('button');
}ec('div');
}let cndvnNc = component.user.isLoggedIn();
this.setState('stlT0MH', cndvnNc);
if (cndvnNc) { 
let elu4KzG = ev('img','z6_f',null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elM2h3E = eo('textarea','BPXf',null, eventListeners, {oninput:[function(e) {component.comment = this.value;}],onkeyup:[function(e) {var $el = this;component.setComment($el, event)}]}, boolAttrs, {disabled:component.isPostingComment},`value`,`${fval(component.comment)}`,`placeholder`,`${trans(`Write a comment... (markdown supported)`)}`,`type`,`textarea`,`class`,`comment-input`);
elM2h3E.value = fval(component.comment);
ec('textarea');
}ec('section');

                    this.isReadyToGo();
                }
        });