_Component({
                selector: 'project-teams-page',
                c: 'ProjectTeamsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openTeamModal','getTeamLeaderName','submit','teamsList','availableTeamLeaders','isSending'],
                children: {cxAOdWXRT:'gold-icon',cZHc6VlXQ:'project-layout',cIpHL6s0b:'flk-dropdown-list',cF01GQPfj:'flk-dropdown-list',cXAWkqJ5f:'flk-modal'},
                render: function (component) {
                    let cmp0Elz = this._lc('cZHc6VlXQ', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndXxgN = component.project.maxTeams > component.project.teams.length && component.project.isHigherAuthority;
this.setState('stD9lDS', cndXxgN);
let cndK2Ud = component.project.isHigherAuthority;
this.setState('stgPHCO', cndK2Ud);
if (cndXxgN) { 
let eldA29Z = eo('button','ib0f',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]}, boolAttrs, {disabled:component.project.maxTeams <= component.project.teams.length && component.project.fund < FLAGS.projects.pricing.extra.team},`class`,`float-right btn btn-pink bold`);
let elTN2nv = eo('i','B3Wf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
ec('button');
}else if (cndK2Ud) { 
let elBoiA1 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]},`class`,`float-right btn btn-success bold`);
let elPSGG6 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
let elIMC9A = ev('br');
let cmp92GL = this._lc('cxAOdWXRT', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.team},state:'stgPHCO'});
ec('button');
}let elOEK8f = eo('h1',null,null,`class`,`m-y-1`);
text(`Project Teams (${ component.project.teams.length })`);
ec('h1');
let ely8Kdl = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elHg7ea = eo('thead');
let eltC1sW = eo('tr');
let elPvv4c = eo('th');
text(`Team`);
ec('th');
let elNIc1I = eo('th');
text(`Members`);
ec('th');
let elwtEAb = eo('th');
text(`Team Leader`);
ec('th');
let elMMId0 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elAQWFi = eo('tbody');
let cnd_pwr = Is.empty(component.project.teams);
this.setState('stKY8Zl', cnd_pwr);
if (cnd_pwr) { 
let elC7WxU = eo('tr','O33f');
let elYp10m = eo('td','13df',null,`class`,`text-center`,`colspan`,`4`);
text(`No teams yet.`);
ec('td');
ec('tr');
}for (let i in component.project.teams) {
let team = component.project.teams[i]; 
 let iiyHho = 'meXq9QY' + i;
let el_exwg = eo('tr','djULSVTfkeJB' + i+iiyHho);
let elHW7Bj = eo('td','GBwff'+iiyHho);
let elstn7L = eo('a','0nvff'+iiyHho,null,`href`,`${URLS.project(component.project, 'teams/' + team.type + '/members')}`);
text(team.type);
ec('a');
ec('td');
let elKcGyo = eo('td','Bffff'+iiyHho);
text(team.members.length + '/' + team.maxMembers);
ec('td');
let el86fez = eo('td','CcAff'+iiyHho);
text(component.getTeamLeaderName(team));
ec('td');
let elqsLC1 = eo('td','Mt9ff'+iiyHho);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cnd_TY9 = component.openTeamModal;
this.setState('stZTzLb', cnd_TY9);
if (cnd_TY9) { 
component.teamModal = this._lc('cXAWkqJ5f', {parent:component,events:{onclose:function(e) {let $el = this; component.openTeamModal = null}},content:(flkModal) => {let el5rF1x = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el, 'add')}]});

                if (! el5rF1x.formHandler) {
                    window.cfrmdlr = el5rF1x.formHandler = new FormHandler(el5rF1x, component);
                } else {
                    window.cfrmdlr = el5rF1x.formHandler;
                }
            let cmpmfzx = this._lc('cIpHL6s0b', {parent:component,parentTop:flkModal,props:{items:component.teamsList()},attrs:{name:`${(`type`).toInputName()}`,required:'',label:'Team Type'},state:'stZTzLb'});
let cmpzmuN = this._lc('cF01GQPfj', {parent:component,parentTop:flkModal,props:{items:component.availableTeamLeaders},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter username to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stZTzLb'});
let elC044L = eo('div',null,null,`class`,`m-t-1 text-center`);
let elmlEAX = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Team'},state:'stZTzLb'});
}
                    this.isReadyToGo();
                }
        });