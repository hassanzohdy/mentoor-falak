_Component({
                selector: 'project-supervisors-page',
                c: 'ProjectSupervisorsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','newSupervisorCost','totalSupervisors','supervisors','modalIsOpened','submit','membersIds','usersService','mapUser','isValidForm','isSending'],
                children: {cwn0nOT9N:'gold-icon',cK5x_80g_:'flk-time-ago',ck7OMkEh0:'project-layout',crX0u9Hym:'flk-dropdown-list',cJy9AVvN3:'flk-modal'},
                render: function (component) {
                    let cmpWIkW = this._lc('ck7OMkEh0', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elqstsb = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]}, boolAttrs, {disabled:component.newSupervisorCost > component.project.fund},`class`,`float-right btn btn-success bold`);
let eliwvxU = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
let cmp_3mX = this._lc('cwn0nOT9N', {parent:component,parentTop:projectLayout,props:{coins:component.newSupervisorCost}});
let elfIqdB = ev('br');
text(`Supervisor`);
ec('button');
let elg9KGy = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Supervisors
        (${ component.totalSupervisors.format() })`);
ec('h1');
let elJmf0w = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let el21mzC = eo('thead');
let el0echf = eo('tr');
let elBSoQL = eo('th');
text(`Supervisor`);
ec('th');
let elMCFlh = eo('th');
text(`Added By`);
ec('th');
let elm870I = eo('th');
text(`Added At`);
ec('th');
ec('tr');
ec('thead');
let elpyX6o = eo('tbody');
let cndTgvK = Is.empty(component.supervisors);
this.setState('stqfJjH', cndTgvK);
let cndil05 = !(cndTgvK);
this.setState('sto2w28', cndil05);
if (cndTgvK) { 
let elxd0I0 = eo('tr','5jtf');
let el1zYhN = eo('td','KbHf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No supervisors yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.supervisors) {
let supervisor = component.supervisors[i]; 
 let iis_x9 = 'Iig15ZI' + i;
let ele2f36 = eo('tr','dvvXCNGgdSiC' + i+iis_x9);
let elC7i2I = eo('td','UBFff'+iis_x9,null,`class`,`bold`);
text(Object.get(supervisor, 'member.name', ''));
ec('td');
let elgjwAE = eo('td','uJlff'+iis_x9);
text(Object.get(supervisor, 'createdBy.name', ''));
ec('td');
let elq8vtB = eo('td','8gxff'+iis_x9);
let cmpIenX = this._lc('cK5x_80g_', {parent:component,parentTop:projectLayout,props:{timestamp:supervisor.createdAt.timestamp},state:'sto2w28',insideLoop:true,index:"" +iis_x9});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndT_Qu = component.modalIsOpened;
this.setState('stEl4oU', cndT_Qu);
if (cndT_Qu) { 
component.modal = this._lc('cJy9AVvN3', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elTWEZN = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elTWEZN.formHandler) {
                    window.cfrmdlr = elTWEZN.formHandler = new FormHandler(elTWEZN, component);
                } else {
                    window.cfrmdlr = elTWEZN.formHandler;
                }
            let cmpbYAq = this._lc('crX0u9Hym', {parent:component,parentTop:flkModal,props:{required:true,lazyLoading:true,remoteSearch:true,except:component.membersIds,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`supervisorId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,label:'Select supervisor',heading:'Supervisor',query:'username'},state:'stEl4oU'});
let elzroDJ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elQjClz = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new supervisor'},state:'stEl4oU'});
}
                    this.isReadyToGo();
                }
        });