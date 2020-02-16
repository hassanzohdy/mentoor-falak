_Component({
                selector: 'project-teams-page',
                c: 'ProjectTeamsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openTeamModal','getTeamLeaderName','submit','teamsList','availableTeamLeaders','isSending'],
                children: {cpsjkhbX9:'gold-icon',ci7om1q0N:'project-layout',cWjF9aEHO:'flk-dropdown-list',cnGreHG_P:'flk-dropdown-list',cFRZXWRuE:'flk-modal'},
                render: function (component) {
                    let cmpsQFX = this._lc('ci7om1q0N', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd3k5q = component.project.maxTeams > component.project.teams.length && component.project.isHigherAuthority;
this.setState('st0Dx4K', cnd3k5q);
let cndt1ff = component.project.isHigherAuthority;
this.setState('stGVfpo', cndt1ff);
if (cnd3k5q) { 
let elwpLCt = eo('button','VIrf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]}, boolAttrs, {disabled:component.project.maxTeams <= component.project.teams.length && component.project.fund < FLAGS.projects.pricing.extra.team},`class`,`float-right btn btn-pink bold`);
let elNwzth = eo('i','IuXf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
ec('button');
}else if (cndt1ff) { 
let elau7FF = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]},`class`,`float-right btn btn-success bold`);
let elDMY_Q = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
let elWziV6 = ev('br');
let cmpx_6n = this._lc('cpsjkhbX9', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.team},state:'stGVfpo'});
ec('button');
}let elCs00U = eo('h1',null,null,`class`,`m-y-1`);
text(`Project Teams (${ component.project.teams.length })`);
ec('h1');
let el8Z01L = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elWdDxC = eo('thead');
let eluH0Al = eo('tr');
let el3jj90 = eo('th');
text(`Team`);
ec('th');
let elxQ_cE = eo('th');
text(`Members`);
ec('th');
let el9lbRT = eo('th');
text(`Team Leader`);
ec('th');
let elxQCDV = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el6gQMD = eo('tbody');
let cndnA0s = Is.empty(component.project.teams);
this.setState('sty_r3W', cndnA0s);
if (cndnA0s) { 
let elpaeti = eo('tr','7yQf');
let elG2Gt6 = eo('td','wAtf',null,`class`,`text-center`,`colspan`,`4`);
text(`No teams yet.`);
ec('td');
ec('tr');
}for (let i in component.project.teams) {
let team = component.project.teams[i]; 
 let ii8eDC = 'H9A7yHz' + i;
let elwpSnu = eo('tr','3eCTa53hYIE9' + i+ii8eDC);
let elcPKJN = eo('td','eHhff'+ii8eDC);
let elTRjfW = eo('a','1jCff'+ii8eDC,null,`href`,`${URLS.project(component.project, 'teams/' + team.type + '/members')}`);
text(team.type);
ec('a');
ec('td');
let elx87XF = eo('td','YlRff'+ii8eDC);
text(team.members.length + '/' + team.maxMembers);
ec('td');
let eletvMd = eo('td','faTff'+ii8eDC);
text(component.getTeamLeaderName(team));
ec('td');
let el7osHP = eo('td','I63ff'+ii8eDC);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndqp8B = component.openTeamModal;
this.setState('stvEZlX', cndqp8B);
if (cndqp8B) { 
component.teamModal = this._lc('cFRZXWRuE', {parent:component,events:{onclose:function(e) {let $el = this; component.openTeamModal = null}},content:(flkModal) => {let elnPysH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el, 'add')}]});

                if (! elnPysH.formHandler) {
                    window.cfrmdlr = elnPysH.formHandler = new FormHandler(elnPysH, component);
                } else {
                    window.cfrmdlr = elnPysH.formHandler;
                }
            let cmpGTsQ = this._lc('cWjF9aEHO', {parent:component,parentTop:flkModal,props:{items:component.teamsList()},attrs:{name:`${(`type`).toInputName()}`,required:'',label:'Team Type'},state:'stvEZlX'});
let cmp3ncd = this._lc('cnGreHG_P', {parent:component,parentTop:flkModal,props:{items:component.availableTeamLeaders},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter username to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stvEZlX'});
let elmCs2i = eo('div',null,null,`class`,`m-t-1 text-center`);
let elndKBj = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Team'},state:'stvEZlX'});
}
                    this.isReadyToGo();
                }
        });