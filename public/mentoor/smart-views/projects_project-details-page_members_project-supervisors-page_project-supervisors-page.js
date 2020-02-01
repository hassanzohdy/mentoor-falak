_Component({
                selector: 'project-supervisors-page',
                c: 'ProjectSupervisorsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','newSupervisorCost','totalSupervisors','supervisors','modalIsOpened','submit','membersIds','usersService','mapUser','isValidForm','isSending'],
                children: {cSNRZGFmJ:'gold-icon',cS10N7qKC:'flk-time-ago',cEGREAPqG:'project-layout',co8z3yS3W:'flk-dropdown-list',crVhyxltl:'flk-modal'},
                render: function (component) {
                    let cmp5p7D = this._lc('cEGREAPqG', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elyAkzS = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]}, boolAttrs, {disabled:component.newSupervisorCost > component.project.fund},`class`,`float-right btn btn-success bold`);
let el3hSZh = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmpH7Wg = this._lc('cSNRZGFmJ', {parent:component,parentTop:projectLayout,props:{coins:component.newSupervisorCost}});
let elG3wQt = ev('br');
text(`Supervisor`);
ec('button');
let elApqJc = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Supervisors
        (${ component.totalSupervisors.format() })`);
ec('h1');
let elh7WAc = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elo3CuJ = eo('thead');
let elKVy94 = eo('tr');
let eluHLM5 = eo('th');
text(`Supervisor`);
ec('th');
let elJPHoM = eo('th');
text(`Added By`);
ec('th');
let elvVA7G = eo('th');
text(`Added At`);
ec('th');
ec('tr');
ec('thead');
let elDDDyq = eo('tbody');
let cndGF2Q = Is.empty(component.supervisors);
this.setState('stJqgJ2', cndGF2Q);
let cndCkNh = !(cndGF2Q);
this.setState('stDrOb8', cndCkNh);
if (cndGF2Q) { 
let el4WDg4 = eo('tr','Ufdf');
let el0oRCz = eo('td','yVCf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No supervisors yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.supervisors) {
let supervisor = component.supervisors[i]; 
 let ii7tEm = 'DKigomZ' + i;
let elRds4Q = eo('tr','fwsHjWjHYasf' + i+ii7tEm);
let elfteH5 = eo('td','mF4ff'+ii7tEm,null,`class`,`bold`);
text(Object.get(supervisor, 'member.name', ''));
ec('td');
let el3PJaC = eo('td','UTtff'+ii7tEm);
text(Object.get(supervisor, 'createdBy.name', ''));
ec('td');
let eloRfcO = eo('td','eFnff'+ii7tEm);
let cmp8iWX = this._lc('cS10N7qKC', {parent:component,parentTop:projectLayout,props:{timestamp:supervisor.createdAt.timestamp},state:'stDrOb8',insideLoop:true,index:"" +ii7tEm});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndoLDi = component.modalIsOpened;
this.setState('stESLGD', cndoLDi);
if (cndoLDi) { 
component.modal = this._lc('crVhyxltl', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el_rkFF = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el_rkFF.formHandler) {
                    window.cfrmdlr = el_rkFF.formHandler = new FormHandler(el_rkFF, component);
                } else {
                    window.cfrmdlr = el_rkFF.formHandler;
                }
            let cmpjOH6 = this._lc('co8z3yS3W', {parent:component,parentTop:flkModal,props:{required:true,lazyLoading:true,remoteSearch:true,except:component.membersIds,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`supervisorId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,label:'Select supervisor',heading:'Supervisor',query:'username'},state:'stESLGD'});
let elGwkkJ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elGtsbX = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new supervisor'},state:'stESLGD'});
}
                    this.isReadyToGo();
                }
        });