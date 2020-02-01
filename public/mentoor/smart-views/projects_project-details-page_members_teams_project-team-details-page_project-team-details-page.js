_Component({
                selector: 'project-team-details-page',
                c: 'ProjectTeamDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','teamMembers','teamMembersExceptTeamLeader','openAssignTeamLeader','addNewTeamMember','teamExceededMaxFreeMembers','currentTeam','assignTeamLeader','currentTeamLeaderId','isSending','addTeamMember','projectMembersExceptTeamMembers','newMember'],
                children: {cynfcUYNG:'gold-icon',c8RRPAk97:'project-layout',cOKCCyHHq:'flk-dropdown-list',cvdZP4Zlp:'flk-modal',cUuE12StA:'flk-dropdown-list',cQmrbd3_v:'flk-modal'},
                render: function (component) {
                    let cmprbu7 = this._lc('c8RRPAk97', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndaiVR = component.project.isProjectManager && component.teamMembersExceptTeamLeader.length > 0;
this.setState('st_k4Pm', cndaiVR);
if (cndaiVR) { 
let elLYOwa = eo('button','tLYf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAssignTeamLeader = true}]},`class`,`float-right btn btn-cyan bold`);
let el4G5vE = eo('i','gzkf',null,`class`,`${fas('user-secret') + ' mr-1 icon'}`);
ec('i');
text(`Assign Team Leader`);
ec('button');
}let cndKF1K = component.project.isProjectManager;
this.setState('stM6UIB', cndKF1K);
if (cndKF1K) { 
let ell7bdz = eo('button','tAbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewTeamMember = true}]}, boolAttrs, {disabled:component.teamExceededMaxFreeMembers && component.project.fund < FLAGS.projects.pricing.extra.teamMember},`class`,`float-right btn bold`);
ell7bdz.cls = {'btn-pink': ! component.teamExceededMaxFreeMembers, 'btn-success': component.teamExceededMaxFreeMembers};

            for (let className in ell7bdz.cls) {
                ell7bdz.classList.toggle(className, ell7bdz.cls[className]);
            }  
            let elyFsj9 = eo('i','JeJf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cndC7NJ = ! component.teamExceededMaxFreeMembers;
this.setState('sttFhlI', cndC7NJ);
if (cndC7NJ) { 
let elrs2XL = eo('span','iJZf',null,`class`,`mr-2`);
text(`Free`);
ec('span');
}text(`Member`);
let cnd5LiG = component.teamExceededMaxFreeMembers;
this.setState('stzIimF', cnd5LiG);
if (cnd5LiG) { 
let elqYJpL = eo('div','ejBf');
let cmpSfHW = this._lc('cynfcUYNG', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.teamMember},state:'stzIimF'});
ec('div');
}ec('button');
}let elmYqqg = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.currentTeam.type.toStudlyCase() } Team`);
let el4VCqh = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.currentTeam.members.length + '/' + component.currentTeam.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = el4VCqh;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Team members')}`});
        ;
                    }, 20);                
                ec('h1');
let elNusbs = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elckmS8 = eo('thead');
let elEDBui = eo('tr');
let elJJyzF = eo('th');
text(`Member`);
ec('th');
let elUvOFO = eo('th');
text(`Role`);
ec('th');
let elEtXyw = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let eloZSze = eo('tbody');
for (let i in component.currentTeam.members) {
let member = component.currentTeam.members[i]; 
 let iiduyT = 'G7jMblk' + i;
let elW_0H1 = eo('tr','4nGfgn9toTb2' + i+iiduyT);
let elIUg9D = eo('td','4_eff'+iiduyT);
text(member.member.name);
ec('td');
let elHeEQP = eo('td','y5hff'+iiduyT);
text(member.role);
ec('td');
let elQzLkA = eo('td','DYEff'+iiduyT);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndbzyZ = component.openAssignTeamLeader;
this.setState('styWIBZ', cndbzyZ);
if (cndbzyZ) { 
component.teamModal = this._lc('cvdZP4Zlp', {parent:component,events:{onclose:function(e) {let $el = this; component.openAssignTeamLeader = null}},content:(flkModal) => {let elBXK4j = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.assignTeamLeader($el, 'add')}]});

                if (! elBXK4j.formHandler) {
                    window.cfrmdlr = elBXK4j.formHandler = new FormHandler(elBXK4j, component);
                } else {
                    window.cfrmdlr = elBXK4j.formHandler;
                }
            let cmpIB5B = this._lc('cOKCCyHHq', {parent:component,parentTop:flkModal,props:{required:true,value:component.currentTeamLeaderId,items:component.teamMembersExceptTeamLeader},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'styWIBZ'});
let elDu84b = eo('div',null,null,`class`,`m-t-1 text-center`);
let elzKTAk = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Assign`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Assign Team Leader'},state:'styWIBZ'});
}let cndimoj = component.addNewTeamMember;
this.setState('stgtzRl', cndimoj);
if (cndimoj) { 
component.teamMemberModal = this._lc('cQmrbd3_v', {parent:component,events:{onclose:function(e) {let $el = this; component.addNewTeamMember = null}},content:(flkModal) => {let eltKaoO = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addTeamMember($el)}]});

                if (! eltKaoO.formHandler) {
                    window.cfrmdlr = eltKaoO.formHandler = new FormHandler(eltKaoO, component);
                } else {
                    window.cfrmdlr = eltKaoO.formHandler;
                }
            let cmpxtxZ = this._lc('cUuE12StA', {parent:component,parentTop:flkModal,props:{items:component.projectMembersExceptTeamMembers},events:{onselect:function(e) {let $el = this; component.newMember = e.value}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Member',heading:'Select Member from the project to add'},state:'stgtzRl'});
let elS_yF5 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el1UwWb = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.newMember},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new member'},state:'stgtzRl'});
}
                    this.isReadyToGo();
                }
        });