_Component({
                selector: 'project-team-details-page',
                c: 'ProjectTeamDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','teamMembers','teamMembersExceptTeamLeader','openAssignTeamLeader','addNewTeamMember','teamExceededMaxFreeMembers','currentTeam','assignTeamLeader','currentTeamLeaderId','isSending','addTeamMember','projectMembersExceptTeamMembers','newMember'],
                children: {coIMf5Cqp:'gold-icon',cJmbRsTSc:'project-layout',c_R77O2UR:'flk-dropdown-list',cPAt7zLvc:'flk-modal',c93oR9hTQ:'flk-dropdown-list',cuo2cEYiQ:'flk-modal'},
                render: function (component) {
                    let cmpT34d = this._lc('cJmbRsTSc', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndCgHP = component.project.isProjectManager && component.teamMembersExceptTeamLeader.length > 0;
this.setState('styq8H3', cndCgHP);
if (cndCgHP) { 
let elv13f4 = eo('button','hCyf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAssignTeamLeader = true}]},`class`,`float-right btn btn-cyan bold`);
let elMFoEq = eo('i','dvgf',null,`class`,`${fas('user-secret') + ' mr-1 icon'}`);
ec('i');
text(`Assign Team Leader`);
ec('button');
}let cndSFWf = component.project.isProjectManager;
this.setState('st4RNp0', cndSFWf);
if (cndSFWf) { 
let elG23nY = eo('button','B38f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewTeamMember = true}]}, boolAttrs, {disabled:component.teamExceededMaxFreeMembers && component.project.fund < FLAGS.projects.pricing.extra.teamMember},`class`,`float-right btn bold`);
elG23nY.cls = {'btn-pink': ! component.teamExceededMaxFreeMembers, 'btn-success': component.teamExceededMaxFreeMembers};

            for (let className in elG23nY.cls) {
                elG23nY.classList.toggle(className, elG23nY.cls[className]);
            }  
            let eljBh0r = eo('i','a9Bf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cndS_da = ! component.teamExceededMaxFreeMembers;
this.setState('stSUlg_', cndS_da);
if (cndS_da) { 
let elEuTZe = eo('span','zNdf',null,`class`,`mr-2`);
text(`Free`);
ec('span');
}text(`Member`);
let cnd1_uQ = component.teamExceededMaxFreeMembers;
this.setState('stQ6Ud5', cnd1_uQ);
if (cnd1_uQ) { 
let el6Ch9I = eo('div','LXtf');
let cmp0c8j = this._lc('coIMf5Cqp', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.teamMember},state:'stQ6Ud5'});
ec('div');
}ec('button');
}let elLvCVT = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.currentTeam.type.toStudlyCase() } Team`);
let elFkrXB = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.currentTeam.members.length + '/' + component.currentTeam.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elFkrXB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Team members')}`});
        ;
                    }, 20);                
                ec('h1');
let elST8f_ = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elwo5jO = eo('thead');
let el5h6kJ = eo('tr');
let elQYGUk = eo('th');
text(`Member`);
ec('th');
let eleBBBT = eo('th');
text(`Role`);
ec('th');
let elMfjLU = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elH5QAV = eo('tbody');
for (let i in component.currentTeam.members) {
let member = component.currentTeam.members[i]; 
 let iiZnxv = '1s1MW74' + i;
let elQogTi = eo('tr','BJfy5XJWI45g' + i+iiZnxv);
let elosyIg = eo('td','Z8Jff'+iiZnxv);
text(member.member.name);
ec('td');
let elH8VZE = eo('td','JDOff'+iiZnxv);
text(member.role);
ec('td');
let elNEAk4 = eo('td','UJUff'+iiZnxv);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndHYD4 = component.openAssignTeamLeader;
this.setState('stIVt78', cndHYD4);
if (cndHYD4) { 
component.teamModal = this._lc('cPAt7zLvc', {parent:component,events:{onclose:function(e) {let $el = this; component.openAssignTeamLeader = null}},content:(flkModal) => {let elMU0iQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.assignTeamLeader($el, 'add')}]});

                if (! elMU0iQ.formHandler) {
                    window.cfrmdlr = elMU0iQ.formHandler = new FormHandler(elMU0iQ, component);
                } else {
                    window.cfrmdlr = elMU0iQ.formHandler;
                }
            let cmpkbTz = this._lc('c_R77O2UR', {parent:component,parentTop:flkModal,props:{required:true,value:component.currentTeamLeaderId,items:component.teamMembersExceptTeamLeader},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stIVt78'});
let elM0lHJ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elza3M4 = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Assign`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Assign Team Leader'},state:'stIVt78'});
}let cndjwjS = component.addNewTeamMember;
this.setState('stUfrz4', cndjwjS);
if (cndjwjS) { 
component.teamMemberModal = this._lc('cuo2cEYiQ', {parent:component,events:{onclose:function(e) {let $el = this; component.addNewTeamMember = null}},content:(flkModal) => {let el_pj4l = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addTeamMember($el)}]});

                if (! el_pj4l.formHandler) {
                    window.cfrmdlr = el_pj4l.formHandler = new FormHandler(el_pj4l, component);
                } else {
                    window.cfrmdlr = el_pj4l.formHandler;
                }
            let cmpbOOk = this._lc('c93oR9hTQ', {parent:component,parentTop:flkModal,props:{items:component.projectMembersExceptTeamMembers},events:{onselect:function(e) {let $el = this; component.newMember = e.value}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Member',heading:'Select Member from the project to add'},state:'stUfrz4'});
let elATp3C = eo('div',null,null,`class`,`m-t-1 text-center`);
let elJtTqs = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.newMember},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new member'},state:'stUfrz4'});
}
                    this.isReadyToGo();
                }
        });