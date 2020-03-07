_Component({
                selector: 'project-teams-page',
                c: 'ProjectTeamsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openTeamModal','getTeamLeaderName','submit','teamsList','availableTeamLeaders','isSending'],
                children: {cI3VkN5xe:'gold-icon',chchZARko:'project-layout',cLWXxdF7r:'flk-dropdown-list',cVusJEZGh:'flk-dropdown-list',cjefH0Et1:'flk-modal'},
                render: function (component) {
                    let cmpqyP0 = this._lc('chchZARko', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndIWte = component.project.maxTeams > component.project.teams.length && component.project.isHigherAuthority;
this.setState('stjcAMq', cndIWte);
let cndb99H = component.project.isHigherAuthority;
this.setState('st8JLsX', cndb99H);
if (cndIWte) { 
let elK8Ry9 = eo('button','ucHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]}, boolAttrs, {disabled:component.project.maxTeams <= component.project.teams.length && component.project.fund < FLAGS.projects.pricing.extra.team},`class`,`float-right btn btn-pink bold`);
let elfZ3XU = eo('i','eS_f',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`TEAM`);
ec('button');
}else if (cndb99H) { 
let elc7pBs = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openTeamModal = true}]},`class`,`float-right btn btn-success bold`);
let elY5Gnb = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`TEAM`);
let eld7Yt6 = ev('br');
let cmp_8iq = this._lc('cI3VkN5xe', {parent:component,parentTop:projectLayout,props:{coins:FLAGS.projects.pricing.extra.team},state:'st8JLsX'});
ec('button');
}let el2_5Fq = eo('h1',null,null,`class`,`m-y-1`);
text(`Project Teams (${ component.project.teams.length })`);
ec('h1');
let elS3czD = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elA8_CT = eo('thead');
let eleXHTm = eo('tr');
let elIei5j = eo('th');
text(`Team`);
ec('th');
let elNG5Ie = eo('th');
text(`Members`);
ec('th');
let elPuFfc = eo('th');
text(`Team Leader`);
ec('th');
let elL85lC = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elkx2Pe = eo('tbody');
let cndyTEY = Is.empty(component.project.teams);
this.setState('stMyiQ2', cndyTEY);
if (cndyTEY) { 
let elCS7Rl = eo('tr','P7Zf');
let elCPoI2 = eo('td','lwGf',null,`class`,`text-center`,`colspan`,`4`);
text(`No teams yet.`);
ec('td');
ec('tr');
}for (let i in component.project.teams) {
let team = component.project.teams[i]; 
 let iiYYlb = 'GWVKarB' + i;
let el00Bfq = eo('tr','HSi1yigJYENK' + i+iiYYlb);
let el72ApM = eo('td','PZcff'+iiYYlb);
let elQKsXA = eo('a','5gqff'+iiYYlb,null,`href`,`${URLS.project(component.project, 'teams/' + team.type + '/members')}`);
text(team.type);
ec('a');
ec('td');
let elDnrBF = eo('td','_6Wff'+iiYYlb);
text(team.members.length + '/' + team.maxMembers);
ec('td');
let elrmiug = eo('td','ST6ff'+iiYYlb);
text(component.getTeamLeaderName(team));
ec('td');
let el1Pge3 = eo('td','pQzff'+iiYYlb);
ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndjQO4 = component.openTeamModal;
this.setState('stcB_bb', cndjQO4);
if (cndjQO4) { 
component.teamModal = this._lc('cjefH0Et1', {parent:component,events:{onclose:function(e) {let $el = this; component.openTeamModal = null}},content:(flkModal) => {let el161pc = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el, 'add')}]});

                if (! el161pc.formHandler) {
                    window.cfrmdlr = el161pc.formHandler = new FormHandler(el161pc, component);
                } else {
                    window.cfrmdlr = el161pc.formHandler;
                }
            let cmpkqm5 = this._lc('cLWXxdF7r', {parent:component,parentTop:flkModal,props:{items:component.teamsList()},attrs:{name:`${(`type`).toInputName()}`,required:'',label:'Team Type'},state:'stcB_bb'});
let cmpn3Q0 = this._lc('cVusJEZGh', {parent:component,parentTop:flkModal,props:{items:component.availableTeamLeaders},attrs:{name:`${(`teamLeader`).toInputName()}`,placeholder:`${trans(`Enter username to select`)}`,label:'Team Leader',heading:'Select Team Leader'},state:'stcB_bb'});
let elHf2UO = eo('div',null,null,`class`,`m-t-1 text-center`);
let elIvon1 = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Create`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Team'},state:'stcB_bb'});
}
                    this.isReadyToGo();
                }
        });