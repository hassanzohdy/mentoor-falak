_Component({
                selector: 'post-comments',
                c: 'PostComments', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['comments','originalComments','loadMoreComments','isLoadingComments','user','setComment','comment','isPostingComment'],
                children: {cPCwL2A8v:'user-online',cYXHZsB6A:'markdown',c87sYt9RP:'flk-time-ago'},
                render: function (component) {
                    let elJnbVl = eo('section',null,null,`class`,`post-comments`);
let cndO0WW = ! Is.empty(component.comments);
this.setState('stlvlLq', cndO0WW);
if (cndO0WW) { 
let elhtH__ = eo('div','gROf',null,`class`,`comments-list`);
for (let i in component.comments) {
let comment = component.comments[i]; 
 let iiWyKF = 'SSLehlM' + i;
let eligDuW = eo('div','rW3MiToWijvH' + i+iiWyKF,null,`class`,`comment`);
let elT4Kyv = ev('img','Keiff'+iiWyKF,null,`src`,`${comment.createdBy.image}`,`class`,`comment-image`);
let elWHOXw = eo('div','qRxff'+iiWyKF,null,`class`,`comment-content`);
let elZ5axk = eo('div','0d2ff'+iiWyKF,null,`class`,`by`);
let elHZ8CO = eo('span','JPhff'+iiWyKF);
text(comment.createdBy.name);
ec('span');
let cmphaBg = this._lc('cPCwL2A8v', {parent:component,props:{id:comment.createdBy.id},attrs:{id:`${comment.createdBy.id}`},state:'stlvlLq',insideLoop:true,index:"" +iiWyKF});
ec('div');
let elpavmX = eo('p','dixff'+iiWyKF);
let cmpTaHg = this._lc('cYXHZsB6A', {parent:component,props:{content:comment.comment},state:'stlvlLq',insideLoop:true,index:"" +iiWyKF});
ec('p');
let cmpFREC = this._lc('c87sYt9RP', {parent:component,props:{timestamp:comment.createdAt.timestamp},attrs:{class:'created-at'},state:'stlvlLq',insideLoop:true,index:"" +iiWyKF});
ec('div');
ec('div');
}
let cndOKHG = component.comments.length < component.originalComments.length;
this.setState('st7zjqK', cndOKHG);
if (cndOKHG) { 
let elo8KX5 = eo('button','_r5f',null, eventListeners, {onclick:[function(e) {var $el = this;component.loadMoreComments()}]}, boolAttrs, {disabled:component.isLoadingComments},`class`,`btn btn-sm btn-primary bold m-l-6 m-b-2`);
text(`Load more comments`);
ec('button');
}ec('div');
}let cndUz9g = component.user.isLoggedIn();
this.setState('st79LdC', cndUz9g);
if (cndUz9g) { 
let elv2JyS = ev('img','9U2f',null,`src`,`${component.user.image}`,`class`,`user-image-input`,`title`,`${component.user.name}`,`alt`,`${component.user.name}`);
let elrd2NY = eo('textarea','ZMRf',null, eventListeners, {oninput:[function(e) {component.comment = this.value;}],onkeyup:[function(e) {var $el = this;component.setComment($el, event)}]}, boolAttrs, {disabled:component.isPostingComment},`value`,`${fval(component.comment)}`,`placeholder`,`${trans(`Write a comment... (markdown supported)`)}`,`type`,`textarea`,`class`,`comment-input`);
elrd2NY.value = fval(component.comment);
ec('textarea');
}ec('section');

                    this.isReadyToGo();
                }
        });