_Component({
                selector: 'project-teams-page',
                c: 'ProjectTeamsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openTeamModal','getTeamLeaderName','submit','teamsList','availableTeamLeaders','isSending'],
                children: {cs0r8osWL:'gold-icon',cFVPdrqQD:'project-layout',cDX5keD91:'flk-dropdown-list',crgfHKzrN:'flk-dropdown-list',cziuavO1f:'flk-modal'},
                render: function (component) {
                    let cmp88VU = this._lc('cFVPdrqQD', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndPo_f = component.project.maxTeams > component.project.teams.length && component.project.isHigherAuthority;
this.setState('stroF59', cndPo_f);
let cndLNam = component.project.isHigherAuthority;
this.setState('sttffCw', cndLNam);
if (cndPo_f) { 
let elwc2EA = eo('button','HDzf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]}, boolAttrs, {disabled:component.project.maxTeams <= component.project.teams.length && component.project.fund < FLAGS.projects.pricing.extra.team},`class`,`float-right btn btn-pink bold`);
let elHwtFZ = eo('i','ovCf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
ec('button');
}else if (cndLNam) { 
let elSYzWx = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]},`class`,`float-right btn btn-success bold`);
let elAdA_Y = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
let elPcxre = ev('br');
let cmpbeez = this._lc('cs0r8osWL', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.team},state:'sttffCw'});
ec('button');
}let elckZcb = eo('h1',null,null,`class`,`m-y-1`);
text(`Project Teams (${ component.project.teams.length })`);
ec('h1');
let elRrjgu = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elWSs4q = eo('thead');
let elwtIFi = eo('tr');
let elGpf0e = eo('th');
text(`Team`);
ec('th');
let elkacN6 = eo('th');
text(`Members`);
ec('th');
let elu0ltk = eo('th');
text(`Team Leader`);
ec('th');
let eldoBOY = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elULKAm = eo('tbody');
let cndEqF2 = Is.empty(component.project.teams);
this.setState('stmeWoL', cndEqF2);
if (cndEqF2) { 
let elXQKEt = eo('tr','fbWf');
let el4025d = eo('td','vXdf',null,`class`,`text-center`,`colspan`,`4`);
text(`No teams yet.`);
ec('td');
ec('tr');
}for (let i in component.project.teams) {
let team = component.project.teams[i]; 
 let iiCaK3 = 's1NCUV6' + i;
let eljsG3Y = eo('tr','Vv7xzAGcZizH' + i+iiCaK3);
let elzOYCj = eo('td','7_yff'+iiCaK3);
let elFQfMo = eo('a','BbDff'+iiCaK3,null,`href`,`${URLS.project(component.project, 'teams/' + team.type + '/members')}`);
text(team.type);
ec('a');
ec('td');
let eldQQG5 = eo('td','MgGff'+iiCaK3);
text(team.members.length + '/' + team.maxMembers);
ec('td');
let eloPXWO = eo('td','wAyff'+iiCaK3);
text(component.getTeamLeaderName(team));
ec('td');
let elVixKG = eo('td','V0Fff'+iiCaK3);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cnd5cOh = component.openTeamModal;
this.setState('stFA4rE', cnd5cOh);
if (cnd5cOh) { 
component.teamModal = this._lc('cziuavO1f', {parent:component,events:{onclose:function(e) {let $el = this; component.openTeamModal = null}},content:(flkModal) => {let elMMS8M = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el, 'add')}]});

                if (! elMMS8M.formHandler) {
                    window.cfrmdlr = elMMS8M.formHandler = new FormHandler(elMMS8M, component);
                } else {
                    window.cfrmdlr = elMMS8M.formHandler;
                }
            let cmprXhx = this._lc('cDX5keD91', {parent:component,parentTop:flkModal,props:{items:component.teamsList()},attrs:{name:`${(`type`).toInputName()}`,required:'',label:'Team Type'},state:'stFA4rE'});
let cmp8j03 = this._lc('crgfHKzrN', {parent:component,parentTop:flkModal,props:{items:component.availableTeamLeaders},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter username to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stFA4rE'});
let elboTdc = eo('div',null,null,`class`,`m-t-1 text-center`);
let elVtTA0 = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Team'},state:'stFA4rE'});
}
                    this.isReadyToGo();
                }
        });