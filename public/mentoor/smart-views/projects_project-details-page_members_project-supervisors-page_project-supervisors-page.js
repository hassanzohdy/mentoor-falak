_Component({
                selector: 'project-supervisors-page',
                c: 'ProjectSupervisorsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','newSupervisorCost','totalSupervisors','supervisors','modalIsOpened','submit','membersIds','usersService','mapUser','isValidForm','isSending'],
                children: {cgtXnuOYY:'gold-icon',cQcJNkBCH:'flk-time-ago',cNKIrkROB:'project-layout',c4MZ2I8GD:'flk-dropdown-list',cdAEgkbRI:'flk-modal'},
                render: function (component) {
                    let cmp6A7T = this._lc('cNKIrkROB', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elq_eYL = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]}, boolAttrs, {disabled:component.newSupervisorCost > component.project.fund},`class`,`float-right btn btn-success bold`);
let elBWUoD = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmphPZa = this._lc('cgtXnuOYY', {parent:component,parentTop:projectLayout,props:{coins:component.newSupervisorCost}});
let elyFCyz = ev('br');
text(`Supervisor`);
ec('button');
let elTTq_M = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Supervisors
        (${ component.totalSupervisors.format() })`);
ec('h1');
let elN24Js = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elZwGR1 = eo('thead');
let elmHndl = eo('tr');
let elFE0ZH = eo('th');
text(`Supervisor`);
ec('th');
let el2dzCO = eo('th');
text(`Added By`);
ec('th');
let el9eOvx = eo('th');
text(`Added At`);
ec('th');
ec('tr');
ec('thead');
let elivhX1 = eo('tbody');
let cnde2H2 = Is.empty(component.supervisors);
this.setState('stNb5P9', cnde2H2);
let cndzy9n = !(cnde2H2);
this.setState('stBDNUH', cndzy9n);
if (cnde2H2) { 
let el7H8hh = eo('tr','fgZf');
let elZWLxI = eo('td','Yz2f',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No supervisors yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.supervisors) {
let supervisor = component.supervisors[i]; 
 let iiIe4C = 'rCHMsrS' + i;
let elG1ejS = eo('tr','mWFc_mU_DPEj' + i+iiIe4C);
let elMJIh8 = eo('td','fSzff'+iiIe4C,null,`class`,`bold`);
text(Object.get(supervisor, 'member.name', ''));
ec('td');
let el7W2Em = eo('td','rx7ff'+iiIe4C);
text(Object.get(supervisor, 'createdBy.name', ''));
ec('td');
let elUFKB_ = eo('td','A6cff'+iiIe4C);
let cmpk4qQ = this._lc('cQcJNkBCH', {parent:component,parentTop:projectLayout,props:{timestamp:supervisor.createdAt.timestamp},state:'stBDNUH',insideLoop:true,index:"" +iiIe4C});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndaXTx = component.modalIsOpened;
this.setState('stWqSFV', cndaXTx);
if (cndaXTx) { 
component.modal = this._lc('cdAEgkbRI', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elq6FBD = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elq6FBD.formHandler) {
                    window.cfrmdlr = elq6FBD.formHandler = new FormHandler(elq6FBD, component);
                } else {
                    window.cfrmdlr = elq6FBD.formHandler;
                }
            let cmpElu8 = this._lc('c4MZ2I8GD', {parent:component,parentTop:flkModal,props:{required:true,lazyLoading:true,remoteSearch:true,except:component.membersIds,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`supervisorId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,label:'Select supervisor',heading:'Supervisor',query:'username'},state:'stWqSFV'});
let elaXAaz = eo('div',null,null,`class`,`m-t-1 text-center`);
let elNr1yW = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new supervisor'},state:'stWqSFV'});
}
                    this.isReadyToGo();
                }
        });