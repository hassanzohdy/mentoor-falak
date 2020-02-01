_Component({
                selector: 'project-discussions-page',
                c: 'ProjectDiscussionsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','modalIsOpened','openModal','user','confirmRemoving','record','confirmDelete','remove'],
                children: {czqUudfAk:'flk-time-ago',cPYkUNDph:'project-discussion-form',cx3TWsJj3:'project-layout',cq6aooHhQ:'flk-alert'},
                render: function (component) {
                    let cmpnhdZ = this._lc('cx3TWsJj3', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndfmHQ = ! component.modalIsOpened;
this.setState('stgfhwK', cndfmHQ);
let cndSEaA = !(cndfmHQ);
this.setState('stMvZmB', cndSEaA);
if (cndfmHQ) { 
let elprjJa = eo('button','U8tf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elptE9D = eo('i','g8Pf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Discussion`);
ec('button');
let elvcjAG = eo('h1','Tytf',null,`class`,`m-y-1`);
text(`${ component.project.name } Discussions
            (${ component.project.discussions.length })`);
ec('h1');
let cndmcbe = Is.empty(component.project.discussions);
this.setState('stlQ3tJ', cndmcbe);
let cnd6U8D = !(cndmcbe);
this.setState('stuQs0F', cnd6U8D);
if (cndmcbe) { 
let el4AYA1 = eo('h1','hKBf',null,`class`,`text-center orange-text`);
text(`No Discussions.`);
ec('h1');
}else { 
for (let index in component.project.discussions) {
let discussion = component.project.discussions[index]; 
 let iilZ_F = 'Dm7AL4b' + index;
let elrL51m = eo('div','qvq59Z1Z3ThE' + index+iilZ_F,null,`class`,`discussion m-t-2 simple-card row`);
let elU0o5l = eo('div','bmJff'+iilZ_F,null,`class`,`col-1 text-right`);
let elTX2u2 = ev('img','wpSff'+iilZ_F,null,`src`,`${discussion.createdBy.image}`,`class`,`user-image`,`title`,`${discussion.createdBy.name}`,`alt`,`${discussion.createdBy.name}`);
ec('div');
let elpCQdn = eo('span','NYOff'+iilZ_F,null,`class`,`col`);
let cndw05A = component.project.isHigherAuthority || discussion.createdBy.id == component.user.id;
this.setState('stfgy3c', cndw05A);
if (cndw05A) { 
let elETwQa = eo('span','LQLff'+iilZ_F,null,`class`,`action-btns float-right`);
let el7FWUX = eo('button','hC_ff'+iilZ_F,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', discussion, index)}]},`type`,`button`);
let elDMDNj = eo('i','jkCff'+iilZ_F,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
text(`Edit`);
ec('button');
let elHyWFV = eo('button','gVsff'+iilZ_F,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(discussion, index)}]},`type`,`button`);
let elol6Cn = eo('i','NCqff'+iilZ_F,null,`class`,`${fas('times') + ' mr-2 icon'}`);
ec('i');
text(`Delete`);
ec('button');
ec('span');
}let elEVFrG = eo('div','3FBff'+iilZ_F,null,`class`,`clearfix`);
ec('div');
let cndZtLo = discussion.comments.length > 0;
this.setState('stEX03w', cndZtLo);
if (cndZtLo) { 
let elwKL7l = eo('span','w4Cff'+iilZ_F,null,`class`,`petrol-text float-right`);
let elAMKX6 = eo('span','IIAff'+iilZ_F);
text(discussion.comments.length);
ec('span');
let eljpIvz = eo('i','pNTff'+iilZ_F,null,`class`,`${fas('comments') + ' ml-2 icon'}`);
ec('i');
ec('span');
}let elXxrIA = eo('h3','GOvff'+iilZ_F,null,`class`,`title`);
let el2JgfI = eo('a','5x8ff'+iilZ_F,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`);
let elOfXnK = eo('span','Scsff'+iilZ_F);
text(discussion.title);
ec('span');
let cndJigK = discussion.team.type;
this.setState('stnjaaK', cndJigK);
if (cndJigK) { 
let ela_6a6 = eo('strong','7Wrff'+iilZ_F,null,`class`,`ml-2 teal-text`);
text(discussion.team.type + ' team');
ec('strong');
}ec('a');
ec('h3');
let el11B_R = eo('div','kAgff'+iilZ_F,null,`class`,`petrol-text bold`);
let elmX75g = eo('span','YLAff'+iilZ_F);
text(discussion.createdBy.name);
ec('span');
let eljxD4p = eo('span','R6Lff'+iilZ_F,null,`class`,`badge text-capitalize ml-2`);
eljxD4p.cls = {'badge-success': discussion.status == 'opened', 'badge-danger': discussion.status == 'closed'};

            for (let className in eljxD4p.cls) {
                eljxD4p.classList.toggle(className, eljxD4p.cls[className]);
            }  
            text(discussion.status);
ec('span');
ec('div');
let el0ggUT = eo('div','BeVff'+iilZ_F);
let cmpp_SU = this._lc('czqUudfAk', {parent:component,parentTop:projectLayout,props:{timestamp:discussion.createdAt.timestamp},attrs:{class:'ago'},insideLoop:true,index:"" +iilZ_F});
ec('div');
let eliJ3ti = eo('div','PgHff'+iilZ_F,null,`class`,`m-t-1`);
let elyQyr2 = eo('a','oN5ff'+iilZ_F,null,`href`,`${URLS.project(component.project, 'discussions', discussion)}`,`class`,`btn btn-purple bold`);
text(`OPEN
                        DISCUSSION`);
ec('a');
ec('div');
ec('span');
ec('div');
}
}}else { 
let cmpm6Oh = this._lc('cPYkUNDph', {parent:component,parentTop:projectLayout,props:{project:component.project,discussion:component.record},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},state:'stMvZmB'});
}}});
let cndWPkI = component.confirmDelete;
this.setState('strPrVd', cndWPkI);
if (cndWPkI) { 
let cmpZZce = this._lc('cq6aooHhQ', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'strPrVd'});
}
                    this.isReadyToGo();
                }
        });