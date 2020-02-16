_Component({
                selector: 'project-discussions-page',
                c: 'ProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','modalIsOpened','openModal','user','confirmRemoving','record','confirmDelete','remove'],
                children: {cOt8ONgv4:'flk-time-ago',coF8atn1x:'project-discussion-form',c5Ici81XE:'project-layout',cDX84wf1r:'flk-alert'},
                render: function (component) {
                    let cmpmu8S = this._lc('c5Ici81XE', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndT3Z1 = ! component.modalIsOpened;
this.setState('stdQn5h', cndT3Z1);
let cndkSFC = !(cndT3Z1);
this.setState('st1roWE', cndkSFC);
if (cndT3Z1) { 
let elmhLCh = eo('button','8J8f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elxq0Bn = eo('i','VZKf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Discussion`);
ec('button');
let elpaXKP = eo('h1','6UBf',null,`class`,`m-y-1`);
text(`${ component.project.name } Discussions
            (${ component.project.discussions.length })`);
ec('h1');
let cndLiB1 = Is.empty(component.project.discussions);
this.setState('st08C2p', cndLiB1);
let cndnkqI = !(cndLiB1);
this.setState('sttZo3w', cndnkqI);
if (cndLiB1) { 
let elA1RDn = eo('h1','kF9f',null,`class`,`text-center orange-text`);
text(`No Discussions.`);
ec('h1');
}else { 
for (let index in component.project.discussions) {
let discussion = component.project.discussions[index]; 
 let ii9BV8 = 'LoYjNXR' + index;
let elaArsG = eo('div','KxZ6ucJytuUY' + index+ii9BV8,null,`class`,`discussion m-t-2 simple-card row`);
let elTfSWX = eo('div','lrDff'+ii9BV8,null,`class`,`col-1 text-right`);
let el2qk26 = ev('img','TVWff'+ii9BV8,null,`src`,`${discussion.createdBy.image}`,`class`,`user-image`,`title`,`${discussion.createdBy.name}`,`alt`,`${discussion.createdBy.name}`);
ec('div');
let elTYICk = eo('span','yQxff'+ii9BV8,null,`class`,`col`);
let cndoj5X = component.project.isHigherAuthority || discussion.createdBy.id == component.user.id;
this.setState('stJIql2', cndoj5X);
if (cndoj5X) { 
let el3ed1d = eo('span','Q9tff'+ii9BV8,null,`class`,`action-btns float-right`);
let elnZGvj = eo('button','SlHff'+ii9BV8,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', discussion, index)}]},`type`,`button`);
let elkM7WK = eo('i','dEiff'+ii9BV8,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
let elltv2P = eo('button','YKJff'+ii9BV8,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(discussion, index)}]},`type`,`button`);
let elJNL8V = eo('i','k7tff'+ii9BV8,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
ec('span');
}let elf3apE = eo('div','CjGff'+ii9BV8,null,`class`,`clearfix`);
ec('div');
let cndY_pZ = discussion.comments.length > 0;
this.setState('st4gx4o', cndY_pZ);
if (cndY_pZ) { 
let elyJyt_ = eo('span','T2Uff'+ii9BV8,null,`class`,`petrol-text float-right`);
let elItr8d = eo('span','Ojlff'+ii9BV8);
text(discussion.comments.length);
ec('span');
let elXizo5 = eo('i','ml7ff'+ii9BV8,null,`class`,`${fas('comments') + ' ml-2 icon'}`);
ec('i');
ec('span');
}let elF2OwK = eo('h3','Riqff'+ii9BV8,null,`class`,`title`);
let elwaAyt = eo('a','GDZff'+ii9BV8,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`);
let elPLRzi = eo('span','E0kff'+ii9BV8);
text(discussion.title);
ec('span');
let cnd7_E7 = discussion.team.type;
this.setState('stPNoxW', cnd7_E7);
if (cnd7_E7) { 
let elnQqdb = eo('strong','keEff'+ii9BV8,null,`class`,`ml-2 teal-text`);
text(discussion.team.type + ' team');
ec('strong');
}ec('a');
ec('h3');
let elga4Yt = eo('div','pHLff'+ii9BV8,null,`class`,`petrol-text bold`);
let elAGsMy = eo('span','w8cff'+ii9BV8);
text(discussion.createdBy.name);
ec('span');
let elVowbZ = eo('span','srmff'+ii9BV8,null,`class`,`badge text-capitalize ml-2`);
elVowbZ.cls = {'badge-success': discussion.status == 'opened', 'badge-danger': discussion.status == 'closed'};

            for (let className in elVowbZ.cls) {
                elVowbZ.classList.toggle(className, elVowbZ.cls[className]);
            }  
            text(discussion.status);
ec('span');
ec('div');
let elQ5o_d = eo('div','oRPff'+ii9BV8);
let cmpk6fQ = this._lc('cOt8ONgv4', {parent:component,parentTop:projectLayout,props:{timestamp:discussion.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +ii9BV8});
ec('div');
let elZE1Ef = eo('div','aDeff'+ii9BV8,null,`class`,`m-t-1`);
let elTHKo2 = eo('a','B64ff'+ii9BV8,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`,`class`,`btn btn-purple bold`);
text(`OPEN
                        DISCUSSION`);
ec('a');
ec('div');
ec('span');
ec('div');
}
}}else { 
let cmp5CQH = this._lc('coF8atn1x', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},state:'st1roWE'});
}}});
let cndb2_c = component.confirmDelete;
this.setState('stF9X8X', cndb2_c);
if (cndb2_c) { 
let cmp3RrX = this._lc('cDX84wf1r', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stF9X8X'});
}
                    this.isReadyToGo();
                }
        });