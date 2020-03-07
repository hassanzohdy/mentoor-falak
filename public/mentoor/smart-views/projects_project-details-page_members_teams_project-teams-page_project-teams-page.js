_Component({
                selector: 'project-teams-page',
                c: 'ProjectTeamsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openTeamModal','getTeamLeaderName','submit','teamsList','availableTeamLeaders','isSending'],
                children: {c6QlNGxBl:'gold-icon',cidCk6wtH:'project-layout',cNpyn32p8:'flk-dropdown-list',cJnmkinnN:'flk-dropdown-list',c9fu9j_5M:'flk-modal'},
                render: function (component) {
                    let cmpRbgU = this._lc('cidCk6wtH', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndbfkH = component.project.maxTeams > component.project.teams.length && component.project.isHigherAuthority;
this.setState('stRBoPl', cndbfkH);
let cndSE8n = component.project.isHigherAuthority;
this.setState('stOcrO1', cndSE8n);
if (cndbfkH) { 
let elPfrEl = eo('button','w6Ff',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]}, boolAttrs, {disabled:component.project.maxTeams <= component.project.teams.length && component.project.fund < FLAGS.projects.pricing.extra.team},`class`,`float-right btn btn-pink bold`);
let elySf1w = eo('i','6Fef',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`TEAM`);
ec('button');
}else if (cndSE8n) { 
let elDFk6j = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]},`class`,`float-right btn btn-success bold`);
let el198BJ = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`TEAM`);
let elBDe8x = ev('br');
let cmpX2Sr = this._lc('c6QlNGxBl', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.team},state:'stOcrO1'});
ec('button');
}let elvJY3H = eo('h1',null,null,`class`,`m-y-1`);
text(`Project Teams (${ component.project.teams.length })`);
ec('h1');
let eltNZZ2 = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elo4y2c = eo('thead');
let el2Xtt8 = eo('tr');
let el3kkij = eo('th');
text(`Team`);
ec('th');
let elCNYOC = eo('th');
text(`Members`);
ec('th');
let elgV5wP = eo('th');
text(`Team Leader`);
ec('th');
let elMNhGE = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el9qfsm = eo('tbody');
let cnddDAR = Is.empty(component.project.teams);
this.setState('stN8Of7', cnddDAR);
if (cnddDAR) { 
let elq59S1 = eo('tr','ZFVf');
let elRj110 = eo('td','8w2f',null,`class`,`text-center`,`colspan`,`4`);
text(`No teams yet.`);
ec('td');
ec('tr');
}for (let i in component.project.teams) {
let team = component.project.teams[i]; 
 let iirJuH = 'ighORzs' + i;
let el9P9dp = eo('tr','xiFzN908SaQW' + i+iirJuH);
let el6YZj1 = eo('td','FPxff'+iirJuH);
let elrunB5 = eo('a','UScff'+iirJuH,null,`href`,`${URLS.project(component.project, 'teams/' + team.type + '/members')}`);
text(team.type);
ec('a');
ec('td');
let elB1k5Z = eo('td','TJYff'+iirJuH);
text(team.members.length + '/' + team.maxMembers);
ec('td');
let el8moe4 = eo('td','j1off'+iirJuH);
text(component.getTeamLeaderName(team));
ec('td');
let elckrIG = eo('td','59cff'+iirJuH);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndjYt8 = component.openTeamModal;
this.setState('stqSolU', cndjYt8);
if (cndjYt8) { 
component.teamModal = this._lc('c9fu9j_5M', {parent:component,events:{onclose:function(e) {let $el = this; component.openTeamModal = null}},content:(flkModal) => {let eljj_WV = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el, 'add')}]});

                if (! eljj_WV.formHandler) {
                    window.cfrmdlr = eljj_WV.formHandler = new FormHandler(eljj_WV, component);
                } else {
                    window.cfrmdlr = eljj_WV.formHandler;
                }
            let cmpYuPi = this._lc('cNpyn32p8', {parent:component,parentTop:flkModal,props:{items:component.teamsList()},attrs:{name:`${(`type`).toInputName()}`,required:'',label:'Team Type'},state:'stqSolU'});
let cmpUC7g = this._lc('cJnmkinnN', {parent:component,parentTop:flkModal,props:{items:component.availableTeamLeaders},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter username to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stqSolU'});
let elI_MZL = eo('div',null,null,`class`,`m-t-1 text-center`);
let elDJ6lN = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Team'},state:'stqSolU'});
}
                    this.isReadyToGo();
                }
        });