_Component({
                selector: 'project-teams-page',
                c: 'ProjectTeamsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openTeamModal','getTeamLeaderName','submit','teamsList','availableTeamLeaders','isSending'],
                children: {c0T1J11y3:'gold-icon',cTQVoD8IC:'project-layout',cWfVqefwa:'flk-dropdown-list',cJdrM6Ri3:'flk-dropdown-list',coOktWdW_:'flk-modal'},
                render: function (component) {
                    let cmpvIlR = this._lc('cTQVoD8IC', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndCgBg = component.project.maxTeams > component.project.teams.length && component.project.isHigherAuthority;
this.setState('stJnoc_', cndCgBg);
let cndmmTn = component.project.isHigherAuthority;
this.setState('stq2iiZ', cndmmTn);
if (cndCgBg) { 
let ell8bJP = eo('button','CVPf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]}, boolAttrs, {disabled:component.project.maxTeams <= component.project.teams.length && component.project.fund < FLAGS.projects.pricing.extra.team},`class`,`float-right btn btn-pink bold`);
let elyXU8g = eo('i','Rrkf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
ec('button');
}else if (cndmmTn) { 
let elFtvBt = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]},`class`,`float-right btn btn-success bold`);
let elPt3jH = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
let el6XZNb = ev('br');
let cmpHr5Z = this._lc('c0T1J11y3', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.team},state:'stq2iiZ'});
ec('button');
}let elff5pm = eo('h1',null,null,`class`,`m-y-1`);
text(`Project Teams (${ component.project.teams.length })`);
ec('h1');
let elrKOjK = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elDPxaK = eo('thead');
let elHs46R = eo('tr');
let elz5vdB = eo('th');
text(`Team`);
ec('th');
let elAhIRV = eo('th');
text(`Members`);
ec('th');
let el4gIkO = eo('th');
text(`Team Leader`);
ec('th');
let elcPleC = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elt7OtW = eo('tbody');
let cnd0CN8 = Is.empty(component.project.teams);
this.setState('stY2VWg', cnd0CN8);
if (cnd0CN8) { 
let eluTpax = eo('tr','S53f');
let elK_f0a = eo('td','Abcf',null,`class`,`text-center`,`colspan`,`4`);
text(`No teams yet.`);
ec('td');
ec('tr');
}for (let i in component.project.teams) {
let team = component.project.teams[i]; 
 let iiAe5L = 'fIRvtj7' + i;
let elUlAl9 = eo('tr','hamp15W66YMK' + i+iiAe5L);
let el_zUtF = eo('td','7Hzff'+iiAe5L);
let elnXsYd = eo('a','iNZff'+iiAe5L,null,`href`,`${URLS.project(component.project, 'teams/' + team.type + '/members')}`);
text(team.type);
ec('a');
ec('td');
let el9p0As = eo('td','SBAff'+iiAe5L);
text(team.members.length + '/' + team.maxMembers);
ec('td');
let elUmxL6 = eo('td','l_Hff'+iiAe5L);
text(component.getTeamLeaderName(team));
ec('td');
let elENICI = eo('td','1wnff'+iiAe5L);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndh2l8 = component.openTeamModal;
this.setState('st5COFg', cndh2l8);
if (cndh2l8) { 
component.teamModal = this._lc('coOktWdW_', {parent:component,events:{onclose:function(e) {let $el = this; component.openTeamModal = null}},content:(flkModal) => {let eloUcXF = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el, 'add')}]});

                if (! eloUcXF.formHandler) {
                    window.cfrmdlr = eloUcXF.formHandler = new FormHandler(eloUcXF, component);
                } else {
                    window.cfrmdlr = eloUcXF.formHandler;
                }
            let cmpyOSR = this._lc('cWfVqefwa', {parent:component,parentTop:flkModal,props:{items:component.teamsList()},attrs:{name:`${(`type`).toInputName()}`,required:'',label:'Team Type'},state:'st5COFg'});
let cmpWR7A = this._lc('cJdrM6Ri3', {parent:component,parentTop:flkModal,props:{items:component.availableTeamLeaders},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter username to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'st5COFg'});
let elXwP0_ = eo('div',null,null,`class`,`m-t-1 text-center`);
let eljtiq8 = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Team'},state:'st5COFg'});
}
                    this.isReadyToGo();
                }
        });