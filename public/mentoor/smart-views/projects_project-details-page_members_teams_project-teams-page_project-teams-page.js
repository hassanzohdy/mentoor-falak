_Component({
                selector: 'project-teams-page',
                c: 'ProjectTeamsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openTeamModal','getTeamLeaderName','submit','teamsList','availableTeamLeaders','isSending'],
                children: {cYneIcpWy:'gold-icon',ctCGADIqj:'project-layout',cEU4ms55u:'flk-dropdown-list',cYwCdf0qu:'flk-dropdown-list',cO9mhLaV0:'flk-modal'},
                render: function (component) {
                    let cmpIJVi = this._lc('ctCGADIqj', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndcCiY = component.project.maxTeams > component.project.teams.length && component.project.isHigherAuthority;
this.setState('stnhV_F', cndcCiY);
let cndHaOT = component.project.isHigherAuthority;
this.setState('stdezaN', cndHaOT);
if (cndcCiY) { 
let elolOug = eo('button','8puf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]}, boolAttrs, {disabled:component.project.maxTeams <= component.project.teams.length && component.project.fund < FLAGS.projects.pricing.extra.team},`class`,`float-right btn btn-pink bold`);
let elEFOI5 = eo('i','g2bf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
ec('button');
}else if (cndHaOT) { 
let elP7zp7 = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]},`class`,`float-right btn btn-success bold`);
let el3Rdc3 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`TEAM`);
let elFxgVx = ev('br');
let cmpRggt = this._lc('cYneIcpWy', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.team},state:'stdezaN'});
ec('button');
}let el3Zpua = eo('h1',null,null,`class`,`m-y-1`);
text(`Project Teams (${ component.project.teams.length })`);
ec('h1');
let elvw2No = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let el7rfQu = eo('thead');
let ellkUFF = eo('tr');
let elNuXO5 = eo('th');
text(`Team`);
ec('th');
let elng7UL = eo('th');
text(`Members`);
ec('th');
let elgXp96 = eo('th');
text(`Team Leader`);
ec('th');
let el7XqFR = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elfUdBV = eo('tbody');
let cnd7HCD = Is.empty(component.project.teams);
this.setState('strK4r1', cnd7HCD);
if (cnd7HCD) { 
let elJgc2l = eo('tr','7E_f');
let elal2pg = eo('td','bAZf',null,`class`,`text-center`,`colspan`,`4`);
text(`No teams yet.`);
ec('td');
ec('tr');
}for (let i in component.project.teams) {
let team = component.project.teams[i]; 
 let iismwj = 'reTpphC' + i;
let el79BCf = eo('tr','Dm3SK069FU0E' + i+iismwj);
let elwaPSe = eo('td','cwyff'+iismwj);
let eltuecl = eo('a','Pzzff'+iismwj,null,`href`,`${URLS.project(component.project, 'teams/' + team.type + '/members')}`);
text(team.type);
ec('a');
ec('td');
let elY_fKO = eo('td','9CXff'+iismwj);
text(team.members.length + '/' + team.maxMembers);
ec('td');
let el8c9pg = eo('td','TRHff'+iismwj);
text(component.getTeamLeaderName(team));
ec('td');
let el8ERyG = eo('td','16Gff'+iismwj);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndxazk = component.openTeamModal;
this.setState('st7kVYR', cndxazk);
if (cndxazk) { 
component.teamModal = this._lc('cO9mhLaV0', {parent:component,events:{onclose:function(e) {let $el = this; component.openTeamModal = null}},content:(flkModal) => {let elo4YMR = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el, 'add')}]});

                if (! elo4YMR.formHandler) {
                    window.cfrmdlr = elo4YMR.formHandler = new FormHandler(elo4YMR, component);
                } else {
                    window.cfrmdlr = elo4YMR.formHandler;
                }
            let cmpmiDE = this._lc('cEU4ms55u', {parent:component,parentTop:flkModal,props:{items:component.teamsList()},attrs:{name:`${(`type`).toInputName()}`,required:'',label:'Team Type'},state:'st7kVYR'});
let cmpQpRs = this._lc('cYwCdf0qu', {parent:component,parentTop:flkModal,props:{items:component.availableTeamLeaders},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter username to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'st7kVYR'});
let elb_hUQ = eo('div',null,null,`class`,`m-t-1 text-center`);
let ellNiDM = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Team'},state:'st7kVYR'});
}
                    this.isReadyToGo();
                }
        });