_Component({
                selector: 'project-discussions-page',
                c: 'ProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','modalIsOpened','openModal','user','confirmRemoving','record','confirmDelete','remove'],
                children: {cX2UyzbAg:'flk-time-ago',cAhLxyeVx:'project-discussion-form',cz49jzOyj:'project-layout',cquNnC5DE:'flk-alert'},
                render: function (component) {
                    let cmp4Ly4 = this._lc('cz49jzOyj', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndW0P5 = ! component.modalIsOpened;
this.setState('stwJitj', cndW0P5);
let cndfdHa = !(cndW0P5);
this.setState('stLGvot', cndfdHa);
if (cndW0P5) { 
let eluziJh = eo('button','kuwf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elrvtlP = eo('i','LMif',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Discussion`);
ec('button');
let elizVoF = eo('h1','xiyf',null,`class`,`m-y-1`);
text(`${ component.project.name } Discussions
            (${ component.project.discussions.length })`);
ec('h1');
let cndHzzX = Is.empty(component.project.discussions);
this.setState('stfT6Eg', cndHzzX);
let cndtfnV = !(cndHzzX);
this.setState('stmvD0s', cndtfnV);
if (cndHzzX) { 
let el9Yu8K = eo('h1','ZWnf',null,`class`,`text-center orange-text`);
text(`No Discussions.`);
ec('h1');
}else { 
for (let index in component.project.discussions) {
let discussion = component.project.discussions[index]; 
 let iig95c = 'xrrbpbV' + index;
let el5hbSf = eo('div','EA4KLGRAJ6wE' + index+iig95c,null,`class`,`discussion m-t-2 simple-card row`);
let elsIRJk = eo('div','h8uff'+iig95c,null,`class`,`col-1 text-right`);
let elevWZ5 = ev('img','B_Nff'+iig95c,null,`src`,`${discussion.createdBy.image}`,`class`,`user-image`,`title`,`${discussion.createdBy.name}`,`alt`,`${discussion.createdBy.name}`);
ec('div');
let elDgM0c = eo('span','nsMff'+iig95c,null,`class`,`col`);
let cndmthu = component.project.isHigherAuthority || discussion.createdBy.id == component.user.id;
this.setState('stWl6WA', cndmthu);
if (cndmthu) { 
let elGB3A_ = eo('span','vWcff'+iig95c,null,`class`,`action-btns float-right`);
let el53M2_ = eo('button','p4hff'+iig95c,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', discussion, index)}]},`type`,`button`);
let elFC2YG = eo('i','0pPff'+iig95c,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
let elLvuKf = eo('button','qu_ff'+iig95c,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(discussion, index)}]},`type`,`button`);
let elJi1ZB = eo('i','_mFff'+iig95c,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
ec('span');
}let eln93eT = eo('div','KtBff'+iig95c,null,`class`,`clearfix`);
ec('div');
let cndDjy8 = discussion.comments.length > 0;
this.setState('st5dZQj', cndDjy8);
if (cndDjy8) { 
let elxXCS4 = eo('span','k0dff'+iig95c,null,`class`,`petrol-text float-right`);
let eluYuUG = eo('span','3Nwff'+iig95c);
text(discussion.comments.length);
ec('span');
let el0pgKC = eo('i','sHNff'+iig95c,null,`class`,`${fas('comments') + ' ml-2 icon'}`);
ec('i');
ec('span');
}let eltzgic = eo('h3','ZMdff'+iig95c,null,`class`,`title`);
let elA_0mp = eo('a','XUXff'+iig95c,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`);
let ellzHgs = eo('span','1Ruff'+iig95c);
text(discussion.title);
ec('span');
let cndYPrR = discussion.team.type;
this.setState('stZNfVx', cndYPrR);
if (cndYPrR) { 
let elOzfxM = eo('strong','hKoff'+iig95c,null,`class`,`ml-2 teal-text`);
text(discussion.team.type + ' team');
ec('strong');
}ec('a');
ec('h3');
let elCPWKu = eo('div','6Vnff'+iig95c,null,`class`,`petrol-text bold`);
let eluC4e6 = eo('span','11sff'+iig95c);
text(discussion.createdBy.name);
ec('span');
let elaMUKK = eo('span','_nTff'+iig95c,null,`class`,`badge text-capitalize ml-2`);
elaMUKK.cls = {'badge-success': discussion.status == 'opened', 'badge-danger': discussion.status == 'closed'};

            for (let className in elaMUKK.cls) {
                elaMUKK.classList.toggle(className, elaMUKK.cls[className]);
            }  
            text(discussion.status);
ec('span');
ec('div');
let elF23bD = eo('div','1jiff'+iig95c);
let cmp4RCf = this._lc('cX2UyzbAg', {parent:component,parentTop:projectLayout,props:{timestamp:discussion.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iig95c});
ec('div');
let elTgA_a = eo('div','ClCff'+iig95c,null,`class`,`m-t-1`);
let elKx6_l = eo('a','1caff'+iig95c,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`,`class`,`btn btn-purple bold`);
text(`OPEN
                        DISCUSSION`);
ec('a');
ec('div');
ec('span');
ec('div');
}
}}else { 
let cmpcsBJ = this._lc('cAhLxyeVx', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},state:'stLGvot'});
}}});
let cndN9h7 = component.confirmDelete;
this.setState('stQQoAt', cndN9h7);
if (cndN9h7) { 
let cmp5AUU = this._lc('cquNnC5DE', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stQQoAt'});
}
                    this.isReadyToGo();
                }
        });