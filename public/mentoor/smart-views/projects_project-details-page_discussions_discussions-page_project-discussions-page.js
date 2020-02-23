_Component({
                selector: 'project-discussions-page',
                c: 'ProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','modalIsOpened','openModal','user','confirmRemoving','record','confirmDelete','remove'],
                children: {c_6D3io7H:'flk-time-ago',csBkSNzuW:'project-discussion-form',c68jOmDqX:'project-layout',ce2dfcih3:'flk-alert'},
                render: function (component) {
                    let cmpVP7x = this._lc('c68jOmDqX', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndom7k = ! component.modalIsOpened;
this.setState('stVSC7b', cndom7k);
let cnd8lzM = !(cndom7k);
this.setState('stZJp1m', cnd8lzM);
if (cndom7k) { 
let elLSAdx = eo('button','E8Xf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elA288_ = eo('i','jZNf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Discussion`);
ec('button');
let elbAXLH = eo('h1','Ipof',null,`class`,`m-y-1`);
text(`${ component.project.name } Discussions
            (${ component.project.discussions.length })`);
ec('h1');
let cndV2I7 = Is.empty(component.project.discussions);
this.setState('stEXEp8', cndV2I7);
let cndBY9b = !(cndV2I7);
this.setState('strHmQA', cndBY9b);
if (cndV2I7) { 
let el_MVAr = eo('h1','j87f',null,`class`,`text-center orange-text`);
text(`No Discussions.`);
ec('h1');
}else { 
for (let index in component.project.discussions) {
let discussion = component.project.discussions[index]; 
 let iiVIwF = 'YRcQsGz' + index;
let el9mY59 = eo('div','wBdBNu1HGoWN' + index+iiVIwF,null,`class`,`discussion m-t-2 simple-card row`);
let elIvqLm = eo('div','UmXff'+iiVIwF,null,`class`,`col-1 text-right`);
let el61Qda = ev('img','fUKff'+iiVIwF,null,`src`,`${discussion.createdBy.image}`,`class`,`user-image`,`title`,`${discussion.createdBy.name}`,`alt`,`${discussion.createdBy.name}`);
ec('div');
let elXiZiE = eo('span','unHff'+iiVIwF,null,`class`,`col`);
let cndt5j5 = component.project.isHigherAuthority || discussion.createdBy.id == component.user.id;
this.setState('st8Eb5C', cndt5j5);
if (cndt5j5) { 
let elX3ek_ = eo('span','zxAff'+iiVIwF,null,`class`,`action-btns float-right`);
let elXhFKJ = eo('button','2l5ff'+iiVIwF,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', discussion, index)}]},`type`,`button`);
let elJVoBV = eo('i','Wx7ff'+iiVIwF,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
let elnnUF8 = eo('button','A8Yff'+iiVIwF,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(discussion, index)}]},`type`,`button`);
let elx3D1k = eo('i','H3uff'+iiVIwF,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
ec('span');
}let elNxg6S = eo('div','Arjff'+iiVIwF,null,`class`,`clearfix`);
ec('div');
let cndaVmP = discussion.comments.length > 0;
this.setState('stw6hO2', cndaVmP);
if (cndaVmP) { 
let elc1O_A = eo('span','fzdff'+iiVIwF,null,`class`,`petrol-text float-right`);
let elYErGS = eo('span','wsDff'+iiVIwF);
text(discussion.comments.length);
ec('span');
let elcGu5_ = eo('i','PZCff'+iiVIwF,null,`class`,`${fas('comments') + ' ml-2 icon'}`);
ec('i');
ec('span');
}let el0NPD2 = eo('h3','iifff'+iiVIwF,null,`class`,`title`);
let el346Ko = eo('a','K0bff'+iiVIwF,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`);
let elmy9fj = eo('span','ZLyff'+iiVIwF);
text(discussion.title);
ec('span');
let cnd4mES = discussion.team.type;
this.setState('stwJAhj', cnd4mES);
if (cnd4mES) { 
let elMaPFc = eo('strong','Rkoff'+iiVIwF,null,`class`,`ml-2 teal-text`);
text(discussion.team.type + ' team');
ec('strong');
}ec('a');
ec('h3');
let elPhxdM = eo('div','PRtff'+iiVIwF,null,`class`,`petrol-text bold`);
let elt6q0q = eo('span','agBff'+iiVIwF);
text(discussion.createdBy.name);
ec('span');
let el2acd2 = eo('span','X2lff'+iiVIwF,null,`class`,`badge text-capitalize ml-2`);
el2acd2.cls = {'badge-success': discussion.status == 'opened', 'badge-danger': discussion.status == 'closed'};

            for (let className in el2acd2.cls) {
                el2acd2.classList.toggle(className, el2acd2.cls[className]);
            }  
            text(discussion.status);
ec('span');
ec('div');
let elH6CDu = eo('div','WbWff'+iiVIwF);
let cmp8b8Z = this._lc('c_6D3io7H', {parent:component,parentTop:projectLayout,props:{timestamp:discussion.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiVIwF});
ec('div');
let eljxqYr = eo('div','ma3ff'+iiVIwF,null,`class`,`m-t-1`);
let elJssHT = eo('a','cu9ff'+iiVIwF,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`,`class`,`btn btn-purple bold`);
text(`OPEN
                        DISCUSSION`);
ec('a');
ec('div');
ec('span');
ec('div');
}
}}else { 
let cmpPMld = this._lc('csBkSNzuW', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},state:'stZJp1m'});
}}});
let cndJNdS = component.confirmDelete;
this.setState('stNwO3O', cndJNdS);
if (cndJNdS) { 
let cmpc4wc = this._lc('ce2dfcih3', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stNwO3O'});
}
                    this.isReadyToGo();
                }
        });