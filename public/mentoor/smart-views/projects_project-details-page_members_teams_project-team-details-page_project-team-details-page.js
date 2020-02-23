_Component({
                selector: 'project-team-details-page',
                c: 'ProjectTeamDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','teamMembers','teamMembersExceptTeamLeader','openAssignTeamLeader','addNewTeamMember','teamExceededMaxFreeMembers','currentTeam','assignTeamLeader','currentTeamLeaderId','isSending','addTeamMember','projectMembersExceptTeamMembers','newMember'],
                children: {cIRBSUrGG:'gold-icon',cDxK92B1Y:'project-layout',c9XvX0a_n:'flk-dropdown-list',czziNgwa_:'flk-modal',cn3ogE0rr:'flk-dropdown-list',c25E4qlKx:'flk-modal'},
                render: function (component) {
                    let cmpVF_u = this._lc('cDxK92B1Y', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndG9sZ = component.project.isProjectManager && component.teamMembersExceptTeamLeader.length > 0;
this.setState('stoAVfO', cndG9sZ);
if (cndG9sZ) { 
let elh7rdi = eo('button','dqff',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAssignTeamLeader = true}]},`class`,`float-right btn btn-cyan bold`);
let elWfv2E = eo('i','gDVf',null,`class`,`${fas('user-secret') + ' mr-1 icon'}`);
ec('i');
text(`Assign Team Leader`);
ec('button');
}let cndJLxD = component.project.isProjectManager;
this.setState('stCDIak', cndJLxD);
if (cndJLxD) { 
let ell6nox = eo('button','0e6f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewTeamMember = true}]}, boolAttrs, {disabled:component.teamExceededMaxFreeMembers && component.project.fund < FLAGS.projects.pricing.extra.teamMember},`class`,`float-right btn bold`);
ell6nox.cls = {'btn-pink': ! component.teamExceededMaxFreeMembers, 'btn-success': component.teamExceededMaxFreeMembers};

            for (let className in ell6nox.cls) {
                ell6nox.classList.toggle(className, ell6nox.cls[className]);
            }  
            let elhwTYd = eo('i','yZHf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cndH_LY = ! component.teamExceededMaxFreeMembers;
this.setState('stjCmx1', cndH_LY);
if (cndH_LY) { 
let elOeOl0 = eo('span','hZPf',null,`class`,`mr-2`);
text(`Free`);
ec('span');
}text(`Member`);
let cndCUoD = component.teamExceededMaxFreeMembers;
this.setState('stFkthI', cndCUoD);
if (cndCUoD) { 
let elQoP9o = eo('div','T5Tf');
let cmpyvg2 = this._lc('cIRBSUrGG', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.teamMember},state:'stFkthI'});
ec('div');
}ec('button');
}let elccY_S = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.currentTeam.type.toStudlyCase() } Team`);
let elmlg7V = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.currentTeam.members.length + '/' + component.currentTeam.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elmlg7V;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Team members')}`});
        ;
                    }, 20);                
                ec('h1');
let elN5CWw = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elduwUf = eo('thead');
let elRhoGO = eo('tr');
let elqyfBB = eo('th');
text(`Member`);
ec('th');
let el6ByiQ = eo('th');
text(`Role`);
ec('th');
let el3QuY9 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el1pbQ6 = eo('tbody');
for (let i in component.currentTeam.members) {
let member = component.currentTeam.members[i]; 
 let iiP_jk = 'Mr7ziIl' + i;
let elZdLmt = eo('tr','airQvOJK6h9i' + i+iiP_jk);
let elc66ne = eo('td','xOZff'+iiP_jk);
text(member.member.name);
ec('td');
let el6y7Cz = eo('td','bMmff'+iiP_jk);
text(member.role);
ec('td');
let elGiiEj = eo('td','BQJff'+iiP_jk);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndVvIS = component.openAssignTeamLeader;
this.setState('st5Yw62', cndVvIS);
if (cndVvIS) { 
component.teamModal = this._lc('czziNgwa_', {parent:component,events:{onclose:function(e) {let $el = this; component.openAssignTeamLeader = null}},content:(flkModal) => {let elMRf7P = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.assignTeamLeader($el, 'add')}]});

                if (! elMRf7P.formHandler) {
                    window.cfrmdlr = elMRf7P.formHandler = new FormHandler(elMRf7P, component);
                } else {
                    window.cfrmdlr = elMRf7P.formHandler;
                }
            let cmpRly_ = this._lc('c9XvX0a_n', {parent:component,parentTop:flkModal,props:{required:true,value:component.currentTeamLeaderId,items:component.teamMembersExceptTeamLeader},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'st5Yw62'});
let elDqIDC = eo('div',null,null,`class`,`m-t-1 text-center`);
let elBTz8P = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Assign`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Assign Team Leader'},state:'st5Yw62'});
}let cndaAyG = component.addNewTeamMember;
this.setState('stIgEJr', cndaAyG);
if (cndaAyG) { 
component.teamMemberModal = this._lc('c25E4qlKx', {parent:component,events:{onclose:function(e) {let $el = this; component.addNewTeamMember = null}},content:(flkModal) => {let elJlXSl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addTeamMember($el)}]});

                if (! elJlXSl.formHandler) {
                    window.cfrmdlr = elJlXSl.formHandler = new FormHandler(elJlXSl, component);
                } else {
                    window.cfrmdlr = elJlXSl.formHandler;
                }
            let cmpiAiE = this._lc('cn3ogE0rr', {parent:component,parentTop:flkModal,props:{items:component.projectMembersExceptTeamMembers},events:{onselect:function(e) {let $el = this; component.newMember = e.value}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Member',heading:'Select Member from the project to add'},state:'stIgEJr'});
let el4B3wL = eo('div',null,null,`class`,`m-t-1 text-center`);
let elwHfD0 = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.newMember},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new member'},state:'stIgEJr'});
}
                    this.isReadyToGo();
                }
        });