_Component({
                selector: 'project-team-details-page',
                c: 'ProjectTeamDetailsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','teamMembers','teamMembersExceptTeamLeader','openAssignTeamLeader','addNewTeamMember','teamExceededMaxFreeMembers','currentTeam','assignTeamLeader','currentTeamLeaderId','isSending','addTeamMember','projectMembersExceptTeamMembers','newMember'],
                children: {c6rItCnkJ:'gold-icon',cD_eo_vje:'project-layout',cehSONoDT:'flk-dropdown-list',cDO6C1Ycf:'flk-modal',cLEyt3j2Q:'flk-dropdown-list',cX8eXzu_C:'flk-modal'},
                render: function (component) {
                    let cmpHGZn = this._lc('cD_eo_vje', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndi2E9 = component.project.isProjectManager && component.teamMembersExceptTeamLeader.length > 0;
this.setState('stjYiUo', cndi2E9);
if (cndi2E9) { 
let elIvHKY = eo('button','wiOf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAssignTeamLeader = true}]},`class`,`float-right btn btn-cyan bold`);
let elnrUdG = eo('i','YPmf',null,`class`,`${fas('user-secret') + ' mr-1 icon'}`);
ec('i');
text(`Assign Team Leader`);
ec('button');
}let cndeuT8 = component.project.isProjectManager;
this.setState('stj1Sgd', cndeuT8);
if (cndeuT8) { 
let elqkRDZ = eo('button','Ol3f',null, eventListeners, {onclick:[function(e) {var $el = this;component.addNewTeamMember = true}]}, boolAttrs, {disabled:component.teamExceededMaxFreeMembers && component.project.fund < FLAGS.projects.pricing.extra.teamMember},`class`,`float-right btn bold`);
elqkRDZ.cls = {'btn-pink': ! component.teamExceededMaxFreeMembers, 'btn-success': component.teamExceededMaxFreeMembers};

            for (let className in elqkRDZ.cls) {
                elqkRDZ.classList.toggle(className, elqkRDZ.cls[className]);
            }  
            let el3iXtg = eo('i','mHsf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cndbNgK = ! component.teamExceededMaxFreeMembers;
this.setState('stIuc73', cndbNgK);
if (cndbNgK) { 
let elQrUVo = eo('span','vIQf',null,`class`,`mr-2`);
text(`Free`);
ec('span');
}text(`Member`);
let cndt_et = component.teamExceededMaxFreeMembers;
this.setState('stx7IdP', cndt_et);
if (cndt_et) { 
let elcgIDQ = eo('div','KRRf');
let cmpnp1R = this._lc('c6rItCnkJ', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.teamMember},state:'stx7IdP'});
ec('div');
}ec('button');
}let elt0A4q = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.currentTeam.type.toStudlyCase() } Team`);
let elrDvCZ = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.currentTeam.members.length + '/' + component.currentTeam.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elrDvCZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Team members')}`});
        ;
                    }, 20);                
                ec('h1');
let el1LGhR = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elcc_gf = eo('thead');
let el7Px7h = eo('tr');
let elnlGlE = eo('th');
text(`Member`);
ec('th');
let elfEMzt = eo('th');
text(`Role`);
ec('th');
let elmh9uC = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elf7WMf = eo('tbody');
for (let i in component.currentTeam.members) {
let member = component.currentTeam.members[i]; 
 let iiP44a = 'VmlBl77' + i;
let eldxsYs = eo('tr','up2AkToQQ77u' + i+iiP44a);
let elPRF40 = eo('td','Ucnff'+iiP44a);
text(member.member.name);
ec('td');
let elzaPkd = eo('td','ZVUff'+iiP44a);
text(member.role);
ec('td');
let el6007Q = eo('td','q2tff'+iiP44a);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cnd1TSP = component.openAssignTeamLeader;
this.setState('stPKsjW', cnd1TSP);
if (cnd1TSP) { 
component.teamModal = this._lc('cDO6C1Ycf', {parent:component,events:{onclose:function(e) {let $el = this; component.openAssignTeamLeader = null}},content:(flkModal) => {let elEXuH1 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.assignTeamLeader($el, 'add')}]});

                if (! elEXuH1.formHandler) {
                    window.cfrmdlr = elEXuH1.formHandler = new FormHandler(elEXuH1, component);
                } else {
                    window.cfrmdlr = elEXuH1.formHandler;
                }
            let cmptCHM = this._lc('cehSONoDT', {parent:component,parentTop:flkModal,props:{required:true,value:component.currentTeamLeaderId,items:component.teamMembersExceptTeamLeader},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stPKsjW'});
let elBtMmh = eo('div',null,null,`class`,`m-t-1 text-center`);
let el9SB0X = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Assign`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Assign Team Leader'},state:'stPKsjW'});
}let cndwsff = component.addNewTeamMember;
this.setState('stVJ0Hu', cndwsff);
if (cndwsff) { 
component.teamMemberModal = this._lc('cX8eXzu_C', {parent:component,events:{onclose:function(e) {let $el = this; component.addNewTeamMember = null}},content:(flkModal) => {let el0BPVM = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addTeamMember($el)}]});

                if (! el0BPVM.formHandler) {
                    window.cfrmdlr = el0BPVM.formHandler = new FormHandler(el0BPVM, component);
                } else {
                    window.cfrmdlr = el0BPVM.formHandler;
                }
            let cmpj9tT = this._lc('cLEyt3j2Q', {parent:component,parentTop:flkModal,props:{items:component.projectMembersExceptTeamMembers},events:{onselect:function(e) {let $el = this; component.newMember = e.value}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter name to select`)}`,label:'Member',heading:'Select Member from the project to add'},state:'stVJ0Hu'});
let el5OOgP = eo('div',null,null,`class`,`m-t-1 text-center`);
let el7QTW6 = eo('button',null,null, boolAttrs, {disabled:component.isSending || ! component.newMember},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new member'},state:'stVJ0Hu'});
}
                    this.isReadyToGo();
                }
        });