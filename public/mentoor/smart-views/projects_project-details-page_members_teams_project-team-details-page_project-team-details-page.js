_Component({
                selector: 'project-team-details-page',
                c: 'ProjectTeamDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','teamMembers','teamMembersExceptTeamLeader','openAssignTeamLeader','addNewTeamMember','teamExceededMaxFreeMembers','currentTeam','assignTeamLeader','currentTeamLeaderId','isSending','addTeamMember','projectMembersExceptTeamMembers','newMember'],
                children: {cKbHWRsbk:'gold-icon',c5xJyscKi:'project-layout',cPZ7yqnMZ:'flk-dropdown-list',cOG15y4Ft:'flk-modal',c8tWTBvqQ:'flk-dropdown-list',cm65h_gd7:'flk-modal'},
                render: function (component) {
                    let cmpOp6v = this._lc('c5xJyscKi', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndjSzh = component.project.isProjectManager && component.teamMembersExceptTeamLeader.length > 0;
this.setState('stRkoHN', cndjSzh);
if (cndjSzh) { 
let eliO085 = eo('button','auIf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAssignTeamLeader = true}]},`class`,`float-right btn btn-cyan bold`);
let elrTIuM = eo('i','G1Gf',null,`class`,`${fas('user-secret')} mr-1 icon`);
ec('i');
text(`Assign Team Leader`);
ec('button');
}let cndvnEF = component.project.isProjectManager;
this.setState('stsI000', cndvnEF);
if (cndvnEF) { 
let eli6sfv = eo('button','tDMf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewTeamMember = true}]}, boolAttrs, {disabled:component.teamExceededMaxFreeMembers && component.project.fund < FLAGS.projects.pricing.extra.teamMember},`class`,`float-right btn bold ${cls({'btn-pink': ! component.teamExceededMaxFreeMembers, 'btn-success': component.teamExceededMaxFreeMembers})}`);
let eldaRfU = eo('i','W2Ff',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
let cndQIaU = ! component.teamExceededMaxFreeMembers;
this.setState('stmuR9V', cndQIaU);
if (cndQIaU) { 
let el6PTrv = eo('span','zovf',null,`class`,`mr-2`);
text(`Free`);
ec('span');
}text(`Member`);
let cnd5EP4 = component.teamExceededMaxFreeMembers;
this.setState('st7vNWJ', cnd5EP4);
if (cnd5EP4) { 
let elm5J3B = eo('div','Q0Sf');
let cmpbxOd = this._lc('cKbHWRsbk', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.teamMember},state:'st7vNWJ'});
ec('div');
}ec('button');
}let elgxjnu = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.currentTeam.type.toStudlyCase() } Team`);
let elG9ht8 = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.currentTeam.members.length + '/' + component.currentTeam.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elG9ht8;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Team members')}`});
        ;
                    }, 20);                
                ec('h1');
let elbzoCJ = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elHm4AQ = eo('thead');
let eluLahD = eo('tr');
let elAUGnl = eo('th');
text(`Member`);
ec('th');
let el_vCHy = eo('th');
text(`Role`);
ec('th');
let elSqP0N = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elqgm6M = eo('tbody');
for (let i in component.currentTeam.members) {
let member = component.currentTeam.members[i]; 
 let ii8VzW = 'SVroOot' + i;
let el4HOCA = eo('tr','u67xL1Q2y5oN' + i+ii8VzW);
let elEJ9T9 = eo('td','1qQff'+ii8VzW);
text(member.member.name);
ec('td');
let elVbqDD = eo('td','DSZff'+ii8VzW);
text(member.role);
ec('td');
let elU2RSK = eo('td','EwQff'+ii8VzW);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cnd2mmq = component.openAssignTeamLeader;
this.setState('stGNdmU', cnd2mmq);
if (cnd2mmq) { 
component.teamModal = this._lc('cOG15y4Ft', {parent:component,events:{onclose:function(e) {let $el = this; component.openAssignTeamLeader = null}},content:(flkModal) => {let el_og5t = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.assignTeamLeader($el, 'add')}]});

                if (! el_og5t.formHandler) {
                    window.cfrmdlr = el_og5t.formHandler = new FormHandler(el_og5t, component);
                } else {
                    window.cfrmdlr = el_og5t.formHandler;
                }
            let cmp7c9e = this._lc('cPZ7yqnMZ', {parent:component,parentTop:flkModal,props:{required:true,value:component.currentTeamLeaderId,items:component.teamMembersExceptTeamLeader},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stGNdmU'});
let el7jHlB = eo('div',null,null,`class`,`m-t-1 text-center`);
let el4eY6K = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Assign`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Assign Team Leader'},state:'stGNdmU'});
}let cnd1LMG = component.addNewTeamMember;
this.setState('stYH7NO', cnd1LMG);
if (cnd1LMG) { 
component.teamMemberModal = this._lc('cm65h_gd7', {parent:component,events:{onclose:function(e) {let $el = this; component.addNewTeamMember = null}},content:(flkModal) => {let elMVxc0 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addTeamMember($el)}]});

                if (! elMVxc0.formHandler) {
                    window.cfrmdlr = elMVxc0.formHandler = new FormHandler(elMVxc0, component);
                } else {
                    window.cfrmdlr = elMVxc0.formHandler;
                }
            let cmp7IV8 = this._lc('c8tWTBvqQ', {parent:component,parentTop:flkModal,props:{items:component.projectMembersExceptTeamMembers},events:{onselect:function(e) {let $el = this; component.newMember = e.value}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Member',heading:'Select Member from the project to add'},state:'stYH7NO'});
let elrLJTa = eo('div',null,null,`class`,`m-t-1 text-center`);
let elLbjBe = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.newMember},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new member'},state:'stYH7NO'});
}
                    this.isReadyToGo();
                }
        });