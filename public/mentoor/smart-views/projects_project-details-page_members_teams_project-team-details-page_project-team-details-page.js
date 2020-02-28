_Component({
                selector: 'project-team-details-page',
                c: 'ProjectTeamDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','teamMembers','teamMembersExceptTeamLeader','openAssignTeamLeader','addNewTeamMember','teamExceededMaxFreeMembers','currentTeam','assignTeamLeader','currentTeamLeaderId','isSending','addTeamMember','projectMembersExceptTeamMembers','newMember'],
                children: {ciRrJW8k3:'gold-icon',cCMUL75VV:'project-layout',cwpWq1QBS:'flk-dropdown-list',cg5zVmn5G:'flk-modal',c0JlEJlAq:'flk-dropdown-list',c_eJGgQZR:'flk-modal'},
                render: function (component) {
                    let cmpaI6m = this._lc('cCMUL75VV', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndG9Vy = component.project.isProjectManager && component.teamMembersExceptTeamLeader.length > 0;
this.setState('stxT_tH', cndG9Vy);
if (cndG9Vy) { 
let elTTyhu = eo('button','QGOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAssignTeamLeader = true}]},`class`,`float-right btn btn-cyan bold`);
let elxWu_2 = eo('i','tylf',null,`class`,`${fas('user-secret')} mr-1 icon`);
ec('i');
text(`Assign Team Leader`);
ec('button');
}let cnd1LNv = component.project.isProjectManager;
this.setState('stDf4Hj', cnd1LNv);
if (cnd1LNv) { 
let elujtIj = eo('button','tRhf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewTeamMember = true}]}, boolAttrs, {disabled:component.teamExceededMaxFreeMembers && component.project.fund < FLAGS.projects.pricing.extra.teamMember},`class`,`float-right btn bold ${cls({'btn-pink': ! component.teamExceededMaxFreeMembers, 'btn-success': component.teamExceededMaxFreeMembers})}`);
let elSIlg3 = eo('i','pKdf',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
let cnd0LMk = ! component.teamExceededMaxFreeMembers;
this.setState('st84rfl', cnd0LMk);
if (cnd0LMk) { 
let elXjoyC = eo('span','Omxf',null,`class`,`mr-2`);
text(`Free`);
ec('span');
}text(`Member`);
let cnd9sMY = component.teamExceededMaxFreeMembers;
this.setState('str3gAS', cnd9sMY);
if (cnd9sMY) { 
let elta16_ = eo('div','YHBf');
let cmpyfI6 = this._lc('ciRrJW8k3', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.teamMember},state:'str3gAS'});
ec('div');
}ec('button');
}let eleK2ZY = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.currentTeam.type.toStudlyCase() } Team`);
let elQhVp1 = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.currentTeam.members.length + '/' + component.currentTeam.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elQhVp1;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Team members')}`});
        ;
                    }, 20);                
                ec('h1');
let el2ANz1 = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elCC3YQ = eo('thead');
let el1T_KM = eo('tr');
let elueOtx = eo('th');
text(`Member`);
ec('th');
let elnsCVq = eo('th');
text(`Role`);
ec('th');
let elRaRgU = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elpowNH = eo('tbody');
for (let i in component.currentTeam.members) {
let member = component.currentTeam.members[i]; 
 let ii60II = 'LT27_t8' + i;
let el6KIgf = eo('tr','yAUL59gj9F7z' + i+ii60II);
let el8EfYD = eo('td','Bfrff'+ii60II);
text(member.member.name);
ec('td');
let el7vPbu = eo('td','6VEff'+ii60II);
text(member.role);
ec('td');
let el9HdOq = eo('td','lbyff'+ii60II);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cnd1cMu = component.openAssignTeamLeader;
this.setState('stRTFc5', cnd1cMu);
if (cnd1cMu) { 
component.teamModal = this._lc('cg5zVmn5G', {parent:component,events:{onclose:function(e) {let $el = this; component.openAssignTeamLeader = null}},content:(flkModal) => {let elyOoVC = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.assignTeamLeader($el, 'add')}]});

                if (! elyOoVC.formHandler) {
                    window.cfrmdlr = elyOoVC.formHandler = new FormHandler(elyOoVC, component);
                } else {
                    window.cfrmdlr = elyOoVC.formHandler;
                }
            let cmpAzEZ = this._lc('cwpWq1QBS', {parent:component,parentTop:flkModal,props:{required:true,value:component.currentTeamLeaderId,items:component.teamMembersExceptTeamLeader},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stRTFc5'});
let elANRSl = eo('div',null,null,`class`,`m-t-1 text-center`);
let el3gsdR = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Assign`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Assign Team Leader'},state:'stRTFc5'});
}let cndFHBP = component.addNewTeamMember;
this.setState('ste45v7', cndFHBP);
if (cndFHBP) { 
component.teamMemberModal = this._lc('c_eJGgQZR', {parent:component,events:{onclose:function(e) {let $el = this; component.addNewTeamMember = null}},content:(flkModal) => {let elNYXSV = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addTeamMember($el)}]});

                if (! elNYXSV.formHandler) {
                    window.cfrmdlr = elNYXSV.formHandler = new FormHandler(elNYXSV, component);
                } else {
                    window.cfrmdlr = elNYXSV.formHandler;
                }
            let cmpajEh = this._lc('c0JlEJlAq', {parent:component,parentTop:flkModal,props:{items:component.projectMembersExceptTeamMembers},events:{onselect:function(e) {let $el = this; component.newMember = e.value}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Member',heading:'Select Member from the project to add'},state:'ste45v7'});
let elvTNGe = eo('div',null,null,`class`,`m-t-1 text-center`);
let el6fgyz = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.newMember},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new member'},state:'ste45v7'});
}
                    this.isReadyToGo();
                }
        });