_Component({
                selector: 'project-discussions-page',
                c: 'ProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','modalIsOpened','openModal','user','confirmRemoving','record','confirmDelete','remove'],
                children: {cH6vck6en:'flk-time-ago',cTGLbixzc:'project-discussion-form',cb4KLBCb6:'project-layout',cBJJaoCGv:'flk-alert'},
                render: function (component) {
                    let cmpmswv = this._lc('cb4KLBCb6', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd24nT = ! component.modalIsOpened;
this.setState('stFUemE', cnd24nT);
let cndY9d7 = !(cnd24nT);
this.setState('stiVh9W', cndY9d7);
if (cnd24nT) { 
let elJvjzq = eo('button','iBGf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elgAnjl = eo('i','4ykf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Discussion`);
ec('button');
let elxjx4B = eo('h1','0Elf',null,`class`,`m-y-1`);
text(`${ component.project.name } Discussions
            (${ component.project.discussions.length })`);
ec('h1');
let cndBHIJ = Is.empty(component.project.discussions);
this.setState('stqKJ1h', cndBHIJ);
let cndD0Sm = !(cndBHIJ);
this.setState('stY39Ne', cndD0Sm);
if (cndBHIJ) { 
let elyoRrn = eo('h1','Mxgf',null,`class`,`text-center orange-text`);
text(`No Discussions.`);
ec('h1');
}else { 
for (let index in component.project.discussions) {
let discussion = component.project.discussions[index]; 
 let iiSSrS = 'Nk57Tp0' + index;
let elc1AGA = eo('div','jwSZEGhYcbei' + index+iiSSrS,null,`class`,`discussion m-t-2 simple-card row`);
let elzORx7 = eo('div','6Ljff'+iiSSrS,null,`class`,`col-1 text-right`);
let el2I39g = ev('img','TrSff'+iiSSrS,null,`src`,`${discussion.createdBy.image}`,`class`,`user-image`,`title`,`${discussion.createdBy.name}`,`alt`,`${discussion.createdBy.name}`);
ec('div');
let elSlB5C = eo('span','7vMff'+iiSSrS,null,`class`,`col`);
let cndvza1 = component.project.isHigherAuthority || discussion.createdBy.id == component.user.id;
this.setState('stkgzJU', cndvza1);
if (cndvza1) { 
let elgiykm = eo('span','nRgff'+iiSSrS,null,`class`,`action-btns float-right`);
let elRAh2U = eo('button','pizff'+iiSSrS,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', discussion, index)}]},`type`,`button`);
let elR5SWf = eo('i','sDMff'+iiSSrS,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
let elqFZk3 = eo('button','Pasff'+iiSSrS,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(discussion, index)}]},`type`,`button`);
let elph7P0 = eo('i','8dxff'+iiSSrS,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
ec('span');
}let elPyxi2 = eo('div','NeUff'+iiSSrS,null,`class`,`clearfix`);
ec('div');
let cnd8pVp = discussion.comments.length > 0;
this.setState('st6dz1m', cnd8pVp);
if (cnd8pVp) { 
let elatnq6 = eo('span','vQqff'+iiSSrS,null,`class`,`petrol-text float-right`);
let elZoMjf = eo('span','n0eff'+iiSSrS);
text(discussion.comments.length);
ec('span');
let elmLBlP = eo('i','RXDff'+iiSSrS,null,`class`,`${fas('comments') + ' ml-2 icon'}`);
ec('i');
ec('span');
}let elA_hjb = eo('h3','ixxff'+iiSSrS,null,`class`,`title`);
let elPBBr0 = eo('a','_URff'+iiSSrS,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`);
let eldss0h = eo('span','nWvff'+iiSSrS);
text(discussion.title);
ec('span');
let cndBOZP = discussion.team.type;
this.setState('st37zyg', cndBOZP);
if (cndBOZP) { 
let el_aJmi = eo('strong','mauff'+iiSSrS,null,`class`,`ml-2 teal-text`);
text(discussion.team.type + ' team');
ec('strong');
}ec('a');
ec('h3');
let elT7Yxv = eo('div','HsGff'+iiSSrS,null,`class`,`petrol-text bold`);
let elxfw8H = eo('span','cqjff'+iiSSrS);
text(discussion.createdBy.name);
ec('span');
let elhSZzq = eo('span','YyNff'+iiSSrS,null,`class`,`badge text-capitalize ml-2`);
elhSZzq.cls = {'badge-success': discussion.status == 'opened', 'badge-danger': discussion.status == 'closed'};

            for (let className in elhSZzq.cls) {
                elhSZzq.classList.toggle(className, elhSZzq.cls[className]);
            }  
            text(discussion.status);
ec('span');
ec('div');
let elkbWeo = eo('div','2otff'+iiSSrS);
let cmpiE94 = this._lc('cH6vck6en', {parent:component,parentTop:projectLayout,props:{timestamp:discussion.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iiSSrS});
ec('div');
let elbrPaO = eo('div','BZ8ff'+iiSSrS,null,`class`,`m-t-1`);
let el0wufy = eo('a','atNff'+iiSSrS,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`,`class`,`btn btn-purple bold`);
text(`OPEN
                        DISCUSSION`);
ec('a');
ec('div');
ec('span');
ec('div');
}
}}else { 
let cmpogBm = this._lc('cTGLbixzc', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},state:'stiVh9W'});
}}});
let cndiJ1o = component.confirmDelete;
this.setState('stcRpfQ', cndiJ1o);
if (cndiJ1o) { 
let cmp7cmh = this._lc('cBJJaoCGv', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stcRpfQ'});
}
                    this.isReadyToGo();
                }
        });