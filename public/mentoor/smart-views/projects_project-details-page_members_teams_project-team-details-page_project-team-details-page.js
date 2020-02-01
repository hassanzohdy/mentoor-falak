_Component({
                selector: 'project-team-details-page',
                c: 'ProjectTeamDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','teamMembers','teamMembersExceptTeamLeader','openAssignTeamLeader','addNewTeamMember','teamExceededMaxFreeMembers','currentTeam','assignTeamLeader','currentTeamLeaderId','isSending','addTeamMember','projectMembersExceptTeamMembers','newMember'],
                children: {ceT3cyIGT:'gold-icon',cgMMGbS5C:'project-layout',cMeJGuebb:'flk-dropdown-list',ch6dJfLqr:'flk-modal',cVeu0zpjZ:'flk-dropdown-list',cvxMAVTO8:'flk-modal'},
                render: function (component) {
                    let cmpBB3P = this._lc('cgMMGbS5C', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnduqWR = component.project.isProjectManager && component.teamMembersExceptTeamLeader.length > 0;
this.setState('stXhwki', cnduqWR);
if (cnduqWR) { 
let elib8sm = eo('button','QH0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAssignTeamLeader = true}]},`class`,`float-right btn btn-cyan bold`);
let el6n3bl = eo('i','6ZDf',null,`class`,`${fas('user-secret') + ' mr-1 icon'}`);
ec('i');
text(`Assign Team Leader`);
ec('button');
}let cndDX3d = component.project.isProjectManager;
this.setState('steX_UL', cndDX3d);
if (cndDX3d) { 
let elYrYfz = eo('button','gxLf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewTeamMember = true}]}, boolAttrs, {disabled:component.teamExceededMaxFreeMembers && component.project.fund < FLAGS.projects.pricing.extra.teamMember},`class`,`float-right btn bold`);
elYrYfz.cls = {'btn-pink': ! component.teamExceededMaxFreeMembers, 'btn-success': component.teamExceededMaxFreeMembers};

            for (let className in elYrYfz.cls) {
                elYrYfz.classList.toggle(className, elYrYfz.cls[className]);
            }  
            let elLPlNi = eo('i','tTuf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cnduxwk = ! component.teamExceededMaxFreeMembers;
this.setState('stOnKb_', cnduxwk);
if (cnduxwk) { 
let el9lDsC = eo('span','_psf',null,`class`,`mr-2`);
text(`Free`);
ec('span');
}text(`Member`);
let cndmVhX = component.teamExceededMaxFreeMembers;
this.setState('stqSDhZ', cndmVhX);
if (cndmVhX) { 
let elrtpM9 = eo('div','Zg_f');
let cmp9DQC = this._lc('ceT3cyIGT', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.teamMember},state:'stqSDhZ'});
ec('div');
}ec('button');
}let eltPTrD = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.currentTeam.type.toStudlyCase() } Team`);
let elfuT6w = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.currentTeam.members.length + '/' + component.currentTeam.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elfuT6w;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Team members')}`});
        ;
                    }, 20);                
                ec('h1');
let eleHock = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let eln9Y39 = eo('thead');
let elZzfhK = eo('tr');
let elgymKX = eo('th');
text(`Member`);
ec('th');
let elo_qw5 = eo('th');
text(`Role`);
ec('th');
let elPDmrn = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elbdJZ_ = eo('tbody');
for (let i in component.currentTeam.members) {
let member = component.currentTeam.members[i]; 
 let iiwfn5 = '6k_B2pJ' + i;
let eluK2W9 = eo('tr','dNjGeMJRxvQK' + i+iiwfn5);
let elN5mnD = eo('td','AgWff'+iiwfn5);
text(member.member.name);
ec('td');
let elhDPjr = eo('td','0STff'+iiwfn5);
text(member.role);
ec('td');
let elcg9Wh = eo('td','HsIff'+iiwfn5);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndO4Ah = component.openAssignTeamLeader;
this.setState('stLpKAd', cndO4Ah);
if (cndO4Ah) { 
component.teamModal = this._lc('ch6dJfLqr', {parent:component,events:{onclose:function(e) {let $el = this; component.openAssignTeamLeader = null}},content:(flkModal) => {let elEtFIH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.assignTeamLeader($el, 'add')}]});

                if (! elEtFIH.formHandler) {
                    window.cfrmdlr = elEtFIH.formHandler = new FormHandler(elEtFIH, component);
                } else {
                    window.cfrmdlr = elEtFIH.formHandler;
                }
            let cmphHsx = this._lc('cMeJGuebb', {parent:component,parentTop:flkModal,props:{required:true,value:component.currentTeamLeaderId,items:component.teamMembersExceptTeamLeader},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stLpKAd'});
let elQo2Dh = eo('div',null,null,`class`,`m-t-1 text-center`);
let el00ocK = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Assign`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Assign Team Leader'},state:'stLpKAd'});
}let cndx6mG = component.addNewTeamMember;
this.setState('stIJQFS', cndx6mG);
if (cndx6mG) { 
component.teamMemberModal = this._lc('cvxMAVTO8', {parent:component,events:{onclose:function(e) {let $el = this; component.addNewTeamMember = null}},content:(flkModal) => {let elppPRh = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addTeamMember($el)}]});

                if (! elppPRh.formHandler) {
                    window.cfrmdlr = elppPRh.formHandler = new FormHandler(elppPRh, component);
                } else {
                    window.cfrmdlr = elppPRh.formHandler;
                }
            let cmp3Bu0 = this._lc('cVeu0zpjZ', {parent:component,parentTop:flkModal,props:{items:component.projectMembersExceptTeamMembers},events:{onselect:function(e) {let $el = this; component.newMember = e.value}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Member',heading:'Select Member from the project to add'},state:'stIJQFS'});
let elytHPN = eo('div',null,null,`class`,`m-t-1 text-center`);
let el69qUk = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.newMember},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new member'},state:'stIJQFS'});
}
                    this.isReadyToGo();
                }
        });