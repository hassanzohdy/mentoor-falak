_Component({
                selector: 'project-team-details-page',
                c: 'ProjectTeamDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','teamMembers','teamMembersExceptTeamLeader','openAssignTeamLeader','addNewTeamMember','teamExceededMaxFreeMembers','currentTeam','assignTeamLeader','currentTeamLeaderId','isSending','addTeamMember','projectMembersExceptTeamMembers','newMember'],
                children: {cx7CYAHMD:'gold-icon',cTCVekrqC:'project-layout',c3GLv6Sty:'flk-dropdown-list',cxb5b2PWM:'flk-modal',ccB1KB1T4:'flk-dropdown-list',cA9_WW8BK:'flk-modal'},
                render: function (component) {
                    let cmpgsS6 = this._lc('cTCVekrqC', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd_O0G = component.project.isProjectManager && component.teamMembersExceptTeamLeader.length > 0;
this.setState('st5MrCw', cnd_O0G);
if (cnd_O0G) { 
let elRo4yQ = eo('button','7Idf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAssignTeamLeader = true}]},`class`,`float-right btn btn-cyan bold`);
let elrbM43 = eo('i','GSrf',null,`class`,`${fas('user-secret')} mr-1 icon`);
ec('i');
text(`Assign Team Leader`);
ec('button');
}let cndhKz1 = component.project.isProjectManager;
this.setState('stvHl6Z', cndhKz1);
if (cndhKz1) { 
let elNw1TK = eo('button','xAVf',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewTeamMember = true}]}, boolAttrs, {disabled:component.teamExceededMaxFreeMembers && component.project.fund < FLAGS.projects.pricing.extra.teamMember},`class`,`float-right btn bold ${cls({'btn-pink': ! component.teamExceededMaxFreeMembers, 'btn-success': component.teamExceededMaxFreeMembers})}`);
let elWWHsb = eo('i','BOcf',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
let cndD6zS = ! component.teamExceededMaxFreeMembers;
this.setState('st3dvnF', cndD6zS);
if (cndD6zS) { 
let el48cSl = eo('span','3q5f',null,`class`,`mr-2`);
text(`Free`);
ec('span');
}text(`Member`);
let cnd_iQz = component.teamExceededMaxFreeMembers;
this.setState('st1GrCb', cnd_iQz);
if (cnd_iQz) { 
let el9hCMp = eo('div','DCAf');
let cmpQpql = this._lc('cx7CYAHMD', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.teamMember},state:'st1GrCb'});
ec('div');
}ec('button');
}let el1w1AO = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.currentTeam.type.toStudlyCase() } Team`);
let elAH_pG = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.currentTeam.members.length + '/' + component.currentTeam.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elAH_pG;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Team members')}`});
        ;
                    }, 20);                
                ec('h1');
let elYtZSA = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let eluIsrY = eo('thead');
let elJwMkB = eo('tr');
let elOJ6q0 = eo('th');
text(`Member`);
ec('th');
let elMATti = eo('th');
text(`Role`);
ec('th');
let elplqWN = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elPF8_p = eo('tbody');
for (let i in component.currentTeam.members) {
let member = component.currentTeam.members[i]; 
 let ii8KM_ = 'pkwTplc' + i;
let elhGUov = eo('tr','WT0j9q3zTdHP' + i+ii8KM_);
let elijO6y = eo('td','PlFff'+ii8KM_);
text(member.member.name);
ec('td');
let elCRYD2 = eo('td','wcxff'+ii8KM_);
text(member.role);
ec('td');
let elcpfHi = eo('td','LJ0ff'+ii8KM_);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndK_4X = component.openAssignTeamLeader;
this.setState('stQJYtj', cndK_4X);
if (cndK_4X) { 
component.teamModal = this._lc('cxb5b2PWM', {parent:component,events:{onclose:function(e) {let $el = this; component.openAssignTeamLeader = null}},content:(flkModal) => {let elYrVlz = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.assignTeamLeader($el, 'add')}]});

                if (! elYrVlz.formHandler) {
                    window.cfrmdlr = elYrVlz.formHandler = new FormHandler(elYrVlz, component);
                } else {
                    window.cfrmdlr = elYrVlz.formHandler;
                }
            let cmp6R3X = this._lc('c3GLv6Sty', {parent:component,parentTop:flkModal,props:{required:true,value:component.currentTeamLeaderId,items:component.teamMembersExceptTeamLeader},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stQJYtj'});
let elprqL3 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elPrqGW = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Assign`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Assign Team Leader'},state:'stQJYtj'});
}let cndqjuk = component.addNewTeamMember;
this.setState('st7RtOL', cndqjuk);
if (cndqjuk) { 
component.teamMemberModal = this._lc('cA9_WW8BK', {parent:component,events:{onclose:function(e) {let $el = this; component.addNewTeamMember = null}},content:(flkModal) => {let elk9jJl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addTeamMember($el)}]});

                if (! elk9jJl.formHandler) {
                    window.cfrmdlr = elk9jJl.formHandler = new FormHandler(elk9jJl, component);
                } else {
                    window.cfrmdlr = elk9jJl.formHandler;
                }
            let cmpOCoO = this._lc('ccB1KB1T4', {parent:component,parentTop:flkModal,props:{items:component.projectMembersExceptTeamMembers},events:{onselect:function(e) {let $el = this; component.newMember = e.value}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Member',heading:'Select Member from the project to add'},state:'st7RtOL'});
let el6O5zN = eo('div',null,null,`class`,`m-t-1 text-center`);
let elkxkfd = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.newMember},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new member'},state:'st7RtOL'});
}
                    this.isReadyToGo();
                }
        });