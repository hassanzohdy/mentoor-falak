_Component({
                selector: 'project-team-details-page',
                c: 'ProjectTeamDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','teamMembers','teamMembersExceptTeamLeader','openAssignTeamLeader','addNewTeamMember','teamExceededMaxFreeMembers','currentTeam','assignTeamLeader','currentTeamLeaderId','isSending','addTeamMember','projectMembersExceptTeamMembers','newMember'],
                children: {cibnH9Wsh:'gold-icon',cE1b3OKBb:'project-layout',c313ZvHho:'flk-dropdown-list',cF6g1hvvS:'flk-modal',cNz6zWUZh:'flk-dropdown-list',cX9C2JJwI:'flk-modal'},
                render: function (component) {
                    let cmpkyvz = this._lc('cE1b3OKBb', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd8l7D = component.project.isProjectManager && component.teamMembersExceptTeamLeader.length > 0;
this.setState('stR1Ocf', cnd8l7D);
if (cnd8l7D) { 
let elNyyrn = eo('button','sd2f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAssignTeamLeader = true}]},`class`,`float-right btn btn-cyan bold`);
let elQk1Na = eo('i','0laf',null,`class`,`${fas('user-secret') + ' mr-1 icon'}`);
ec('i');
text(`Assign Team Leader`);
ec('button');
}let cndyWoR = component.project.isProjectManager;
this.setState('stM3dO4', cndyWoR);
if (cndyWoR) { 
let el_HRFS = eo('button','P59f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewTeamMember = true}]}, boolAttrs, {disabled:component.teamExceededMaxFreeMembers && component.project.fund < FLAGS.projects.pricing.extra.teamMember},`class`,`float-right btn bold`);
el_HRFS.cls = {'btn-pink': ! component.teamExceededMaxFreeMembers, 'btn-success': component.teamExceededMaxFreeMembers};

            for (let className in el_HRFS.cls) {
                el_HRFS.classList.toggle(className, el_HRFS.cls[className]);
            }  
            let el9FBmY = eo('i','V16f',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cndLLPI = ! component.teamExceededMaxFreeMembers;
this.setState('stgcw8D', cndLLPI);
if (cndLLPI) { 
let eli6dD7 = eo('span','my6f',null,`class`,`mr-2`);
text(`Free`);
ec('span');
}text(`Member`);
let cnd8XQl = component.teamExceededMaxFreeMembers;
this.setState('stxuNOC', cnd8XQl);
if (cnd8XQl) { 
let elrIux6 = eo('div','doPf');
let cmp1PtX = this._lc('cibnH9Wsh', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.teamMember},state:'stxuNOC'});
ec('div');
}ec('button');
}let el241T5 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.currentTeam.type.toStudlyCase() } Team`);
let elztsN4 = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.currentTeam.members.length + '/' + component.currentTeam.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elztsN4;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Team members')}`});
        ;
                    }, 20);                
                ec('h1');
let elHupZx = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elCBCfJ = eo('thead');
let elhIr5A = eo('tr');
let elNSh0Q = eo('th');
text(`Member`);
ec('th');
let ellHLsH = eo('th');
text(`Role`);
ec('th');
let elz7tCc = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let eleaX8A = eo('tbody');
for (let i in component.currentTeam.members) {
let member = component.currentTeam.members[i]; 
 let iiyjh7 = 'xC0bZgU' + i;
let elcJVVX = eo('tr','5pG1_GoUlqtU' + i+iiyjh7);
let elDjZec = eo('td','vy1ff'+iiyjh7);
text(member.member.name);
ec('td');
let elx3pbQ = eo('td','eSmff'+iiyjh7);
text(member.role);
ec('td');
let elayUCi = eo('td','EbOff'+iiyjh7);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndX0TS = component.openAssignTeamLeader;
this.setState('stLpRFB', cndX0TS);
if (cndX0TS) { 
component.teamModal = this._lc('cF6g1hvvS', {parent:component,events:{onclose:function(e) {let $el = this; component.openAssignTeamLeader = null}},content:(flkModal) => {let eltGF8i = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.assignTeamLeader($el, 'add')}]});

                if (! eltGF8i.formHandler) {
                    window.cfrmdlr = eltGF8i.formHandler = new FormHandler(eltGF8i, component);
                } else {
                    window.cfrmdlr = eltGF8i.formHandler;
                }
            let cmphLqE = this._lc('c313ZvHho', {parent:component,parentTop:flkModal,props:{required:true,value:component.currentTeamLeaderId,items:component.teamMembersExceptTeamLeader},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stLpRFB'});
let elkPu_e = eo('div',null,null,`class`,`m-t-1 text-center`);
let elQEill = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Assign`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Assign Team Leader'},state:'stLpRFB'});
}let cndXPJI = component.addNewTeamMember;
this.setState('stTK184', cndXPJI);
if (cndXPJI) { 
component.teamMemberModal = this._lc('cX9C2JJwI', {parent:component,events:{onclose:function(e) {let $el = this; component.addNewTeamMember = null}},content:(flkModal) => {let elt7Ecn = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addTeamMember($el)}]});

                if (! elt7Ecn.formHandler) {
                    window.cfrmdlr = elt7Ecn.formHandler = new FormHandler(elt7Ecn, component);
                } else {
                    window.cfrmdlr = elt7Ecn.formHandler;
                }
            let cmpVdgW = this._lc('cNz6zWUZh', {parent:component,parentTop:flkModal,props:{items:component.projectMembersExceptTeamMembers},events:{onselect:function(e) {let $el = this; component.newMember = e.value}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Member',heading:'Select Member from the project to add'},state:'stTK184'});
let eliRHEU = eo('div',null,null,`class`,`m-t-1 text-center`);
let elzmPbc = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.newMember},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new member'},state:'stTK184'});
}
                    this.isReadyToGo();
                }
        });