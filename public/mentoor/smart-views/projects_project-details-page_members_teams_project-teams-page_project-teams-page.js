_Component({
                selector: 'project-teams-page',
                c: 'ProjectTeamsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openTeamModal','getTeamLeaderName','submit','teamsList','availableTeamLeaders','isSending'],
                children: {cXEqhRvbI:'gold-icon',cUHuq98QF:'project-layout',cAJs8YJTF:'flk-dropdown-list',cxO1IAZVl:'flk-dropdown-list',cOJ5dod03:'flk-modal'},
                render: function (component) {
                    let cmpfgIu = this._lc('cUHuq98QF', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndtVmK = component.project.maxTeams > component.project.teams.length && component.project.isHigherAuthority;
this.setState('st0OgvQ', cndtVmK);
let cndPY2b = component.project.isHigherAuthority;
this.setState('stfHytT', cndPY2b);
if (cndtVmK) { 
let elVHiqk = eo('button','XO_f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]}, boolAttrs, {disabled:component.project.maxTeams <= component.project.teams.length && component.project.fund < FLAGS.projects.pricing.extra.team},`class`,`float-right btn btn-pink bold`);
let elqoUNg = eo('i','FQzf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
ec('button');
}else if (cndPY2b) { 
let eljGhSc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]},`class`,`float-right btn btn-success bold`);
let elFz4AO = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
let elNKtpD = ev('br');
let cmpNkuk = this._lc('cXEqhRvbI', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.team},state:'stfHytT'});
ec('button');
}let elJyQyp = eo('h1',null,null,`class`,`m-y-1`);
text(`Project Teams (${ component.project.teams.length })`);
ec('h1');
let eljmQPo = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elf6RsY = eo('thead');
let ela5rci = eo('tr');
let elj8GF1 = eo('th');
text(`Team`);
ec('th');
let elhGJRY = eo('th');
text(`Members`);
ec('th');
let el1Gg9q = eo('th');
text(`Team Leader`);
ec('th');
let elCH2d3 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el30iD_ = eo('tbody');
let cndsJFn = Is.empty(component.project.teams);
this.setState('stHI6Eb', cndsJFn);
if (cndsJFn) { 
let elGxgrZ = eo('tr','gEsf');
let elxzFuW = eo('td','RNkf',null,`class`,`text-center`,`colspan`,`4`);
text(`No teams yet.`);
ec('td');
ec('tr');
}for (let i in component.project.teams) {
let team = component.project.teams[i]; 
 let iiVoFB = '5GKNsrw' + i;
let ellY34t = eo('tr','pBPQ1ZvQocdc' + i+iiVoFB);
let elxNQyZ = eo('td','WWQff'+iiVoFB);
let eloPHUb = eo('a','vtwff'+iiVoFB,null,`href`,`${URLS.project(component.project, 'teams/' + team.type + '/members')}`);
text(team.type);
ec('a');
ec('td');
let elOB6cr = eo('td','5xSff'+iiVoFB);
text(team.members.length + '/' + team.maxMembers);
ec('td');
let el5GoI0 = eo('td','A4hff'+iiVoFB);
text(component.getTeamLeaderName(team));
ec('td');
let eljCgmP = eo('td','15Nff'+iiVoFB);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cnd3rof = component.openTeamModal;
this.setState('strzisd', cnd3rof);
if (cnd3rof) { 
component.teamModal = this._lc('cOJ5dod03', {parent:component,events:{onclose:function(e) {let $el = this; component.openTeamModal = null}},content:(flkModal) => {let el9Zs4A = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el, 'add')}]});

                if (! el9Zs4A.formHandler) {
                    window.cfrmdlr = el9Zs4A.formHandler = new FormHandler(el9Zs4A, component);
                } else {
                    window.cfrmdlr = el9Zs4A.formHandler;
                }
            let cmpmKW8 = this._lc('cAJs8YJTF', {parent:component,parentTop:flkModal,props:{items:component.teamsList()},attrs:{name:`${(`type`).toInputName()}`,required:'',label:'Team Type'},state:'strzisd'});
let cmpIOoh = this._lc('cxO1IAZVl', {parent:component,parentTop:flkModal,props:{items:component.availableTeamLeaders},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter username to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'strzisd'});
let elyOFy8 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elFUop5 = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Team'},state:'strzisd'});
}
                    this.isReadyToGo();
                }
        });