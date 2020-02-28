_Component({
                selector: 'project-discussions-page',
                c: 'ProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','modalIsOpened','openModal','user','confirmRemoving','record','confirmDelete','remove'],
                children: {cdCZFJrCz:'flk-time-ago',cP2xNousq:'project-discussion-form',c5YVHgCMV:'project-layout',cgDDhaOc_:'flk-alert'},
                render: function (component) {
                    let cmpymEw = this._lc('c5YVHgCMV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndUADT = ! component.modalIsOpened;
this.setState('stdTQN0', cndUADT);
let cndYL1b = !(cndUADT);
this.setState('stbh3wY', cndYL1b);
if (cndUADT) { 
let el7sxfd = eo('button','RRJf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elhxVlj = eo('i','BoYf',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Discussion`);
ec('button');
let elLUnOF = eo('h1','3Smf',null,`class`,`m-y-1`);
text(`${ component.project.name } Discussions
            (${ component.project.discussions.length })`);
ec('h1');
let cndiEzQ = Is.empty(component.project.discussions);
this.setState('stgHC9Z', cndiEzQ);
let cndKq3Z = !(cndiEzQ);
this.setState('stgIA_M', cndKq3Z);
if (cndiEzQ) { 
let elMaxEx = eo('h1','mr_f',null,`class`,`text-center orange-text`);
text(`No Discussions.`);
ec('h1');
}else { 
for (let index in component.project.discussions) {
let discussion = component.project.discussions[index]; 
 let ii6SAD = 'fH7m_np' + index;
let eluImtF = eo('div','V9MiEiiYwHQe' + index+ii6SAD,null,`class`,`discussion m-t-2 simple-card row`);
let el0T9YO = eo('div','VU7ff'+ii6SAD,null,`class`,`col-1 text-right`);
let el_7hlE = ev('img','XtUff'+ii6SAD,null,`src`,`${discussion.createdBy.image}`,`class`,`user-image`,`title`,`${discussion.createdBy.name}`,`alt`,`${discussion.createdBy.name}`);
ec('div');
let elpnrJc = eo('span','VxBff'+ii6SAD,null,`class`,`col`);
let cndCoiQ = component.project.isHigherAuthority || discussion.createdBy.id == component.user.id;
this.setState('stUfvyG', cndCoiQ);
if (cndCoiQ) { 
let el_rREe = eo('span','mcAff'+ii6SAD,null,`class`,`action-btns float-right`);
let elCh7p7 = eo('button','C0Mff'+ii6SAD,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', discussion, index)}]},`type`,`button`);
let elCk0nx = eo('i','UeYff'+ii6SAD,null,`class`,`${fas('edit')} icon`);
ec('i');
text(`Edit`);
ec('button');
let elIyoNM = eo('button','aEAff'+ii6SAD,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(discussion, index)}]},`type`,`button`);
let elHyfGp = eo('i','3akff'+ii6SAD,null,`class`,`${fas('times')} mr-2 icon`);
ec('i');
text(`Delete`);
ec('button');
ec('span');
}let elyfVWp = eo('div','cRfff'+ii6SAD,null,`class`,`clearfix`);
ec('div');
let cndaFqK = discussion.comments.length > 0;
this.setState('styBGVQ', cndaFqK);
if (cndaFqK) { 
let eld5ilV = eo('span','5O0ff'+ii6SAD,null,`class`,`petrol-text float-right`);
let elJ84Wj = eo('span','ua3ff'+ii6SAD);
text(discussion.comments.length);
ec('span');
let ely3bMs = eo('i','4pgff'+ii6SAD,null,`class`,`${fas('comments')} ml-2 icon`);
ec('i');
ec('span');
}let elQZs8c = eo('h3','A30ff'+ii6SAD,null,`class`,`title`);
let elMz4DD = eo('a','VJiff'+ii6SAD,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`);
let elAV9sJ = eo('span','9Gyff'+ii6SAD);
text(discussion.title);
ec('span');
let cndqXpn = discussion.team.type;
this.setState('st4rUjC', cndqXpn);
if (cndqXpn) { 
let elCwVHI = eo('strong','DIJff'+ii6SAD,null,`class`,`ml-2 teal-text`);
text(discussion.team.type + ' team');
ec('strong');
}ec('a');
ec('h3');
let elOJguO = eo('div','wTXff'+ii6SAD,null,`class`,`petrol-text bold`);
let elORNdm = eo('span','XHqff'+ii6SAD);
text(discussion.createdBy.name);
ec('span');
let el_pZi5 = eo('span','7_Eff'+ii6SAD,null,`class`,`badge text-capitalize ml-2 ${cls({'badge-success': discussion.status == 'opened', 'badge-danger': discussion.status == 'closed'})}`);
text(discussion.status);
ec('span');
ec('div');
let eltx0RH = eo('div','Xv7ff'+ii6SAD);
let cmpMDO3 = this._lc('cdCZFJrCz', {parent:component,parentTop:projectLayout,props:{timestamp:discussion.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +ii6SAD});
ec('div');
let elOaqlP = eo('div','LT5ff'+ii6SAD,null,`class`,`m-t-1`);
let el9TAzn = eo('a','AUOff'+ii6SAD,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`,`class`,`btn btn-purple bold`);
text(`OPEN
                        DISCUSSION`);
ec('a');
ec('div');
ec('span');
ec('div');
}
}}else { 
let cmpsIST = this._lc('cP2xNousq', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},state:'stbh3wY'});
}}});
let cndwvpS = component.confirmDelete;
this.setState('stuaDLV', cndwvpS);
if (cndwvpS) { 
let cmpYFsq = this._lc('cgDDhaOc_', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stuaDLV'});
}
                    this.isReadyToGo();
                }
        });