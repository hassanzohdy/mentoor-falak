_Component({
                selector: 'project-teams-page',
                c: 'ProjectTeamsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openTeamModal','getTeamLeaderName','submit','teamsList','availableTeamLeaders','isSending'],
                children: {coLaYg3jo:'gold-icon',cZrLorL9a:'project-layout',ceaXkbZL3:'flk-dropdown-list',cOJvxbj_c:'flk-dropdown-list',cfBmB3t_f:'flk-modal'},
                render: function (component) {
                    let cmpCI8b = this._lc('cZrLorL9a', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndfhTr = component.project.maxTeams > component.project.teams.length && component.project.isHigherAuthority;
this.setState('sta0RCv', cndfhTr);
let cndG33F = component.project.isHigherAuthority;
this.setState('stFheas', cndG33F);
if (cndfhTr) { 
let elEL79A = eo('button','m2kf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]}, boolAttrs, {disabled:component.project.maxTeams <= component.project.teams.length && component.project.fund < FLAGS.projects.pricing.extra.team},`class`,`float-right btn btn-pink bold`);
let elDVCUA = eo('i','bPKf',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`TEAM`);
ec('button');
}else if (cndG33F) { 
let el_PL8b = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]},`class`,`float-right btn btn-success bold`);
let el8wGUR = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`TEAM`);
let elj5ieE = ev('br');
let cmpfDSC = this._lc('coLaYg3jo', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.team},state:'stFheas'});
ec('button');
}let elIh_rX = eo('h1',null,null,`class`,`m-y-1`);
text(`Project Teams (${ component.project.teams.length })`);
ec('h1');
let elmPjjc = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elJWmbC = eo('thead');
let elQXZZ1 = eo('tr');
let el9ULMQ = eo('th');
text(`Team`);
ec('th');
let elyMvID = eo('th');
text(`Members`);
ec('th');
let elebSzA = eo('th');
text(`Team Leader`);
ec('th');
let eldITcD = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elNrXFP = eo('tbody');
let cndD8i4 = Is.empty(component.project.teams);
this.setState('strZXW9', cndD8i4);
if (cndD8i4) { 
let elK_nfV = eo('tr','rFnf');
let elBGHeW = eo('td','Mcif',null,`class`,`text-center`,`colspan`,`4`);
text(`No teams yet.`);
ec('td');
ec('tr');
}for (let i in component.project.teams) {
let team = component.project.teams[i]; 
 let iisnjg = 'fSnVvxM' + i;
let elm8x7T = eo('tr','iC_1qDlRreUa' + i+iisnjg);
let el1Rjen = eo('td','QEeff'+iisnjg);
let elmjKHk = eo('a','PSwff'+iisnjg,null,`href`,`${URLS.project(component.project, 'teams/' + team.type + '/members')}`);
text(team.type);
ec('a');
ec('td');
let elBHFZn = eo('td','13Rff'+iisnjg);
text(team.members.length + '/' + team.maxMembers);
ec('td');
let elAOHjB = eo('td','Agyff'+iisnjg);
text(component.getTeamLeaderName(team));
ec('td');
let elsen8C = eo('td','Jmvff'+iisnjg);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndygtU = component.openTeamModal;
this.setState('st6pJve', cndygtU);
if (cndygtU) { 
component.teamModal = this._lc('cfBmB3t_f', {parent:component,events:{onclose:function(e) {let $el = this; component.openTeamModal = null}},content:(flkModal) => {let elRAJSR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el, 'add')}]});

                if (! elRAJSR.formHandler) {
                    window.cfrmdlr = elRAJSR.formHandler = new FormHandler(elRAJSR, component);
                } else {
                    window.cfrmdlr = elRAJSR.formHandler;
                }
            let cmp5aMF = this._lc('ceaXkbZL3', {parent:component,parentTop:flkModal,props:{items:component.teamsList()},attrs:{name:`${(`type`).toInputName()}`,required:'',label:'Team Type'},state:'st6pJve'});
let cmpP8Eg = this._lc('cOJvxbj_c', {parent:component,parentTop:flkModal,props:{items:component.availableTeamLeaders},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter username to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'st6pJve'});
let elrb6_Q = eo('div',null,null,`class`,`m-t-1 text-center`);
let elPhMUF = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Team'},state:'st6pJve'});
}
                    this.isReadyToGo();
                }
        });