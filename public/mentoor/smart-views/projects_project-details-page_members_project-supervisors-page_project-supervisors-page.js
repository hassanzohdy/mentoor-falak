_Component({
                selector: 'project-supervisors-page',
                c: 'ProjectSupervisorsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','newSupervisorCost','totalSupervisors','supervisors','modalIsOpened','submit','membersIds','usersService','mapUser','isValidForm','isSending'],
                children: {cSGTfM9Nq:'gold-icon',cQS2Zg10j:'flk-time-ago',cjSDNn7rB:'project-layout',cprYGjRtm:'flk-dropdown-list',czZdE6u8W:'flk-modal'},
                render: function (component) {
                    let cmptora = this._lc('cjSDNn7rB', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elv3fxc = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]}, boolAttrs, {disabled:component.newSupervisorCost > component.project.fund},`class`,`float-right btn btn-success bold`);
let ela6Xdp = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmprmbb = this._lc('cSGTfM9Nq', {parent:component,parentTop:projectLayout,props:{coins:component.newSupervisorCost}});
let elMtRPG = ev('br');
text(`Supervisor`);
ec('button');
let el2ooV7 = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Supervisors
        (${ component.totalSupervisors.format() })`);
ec('h1');
let elR0JAm = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elP6t3S = eo('thead');
let el5S9Jd = eo('tr');
let el9hHJ7 = eo('th');
text(`Supervisor`);
ec('th');
let elXdqOC = eo('th');
text(`Added By`);
ec('th');
let elmrAyG = eo('th');
text(`Added At`);
ec('th');
ec('tr');
ec('thead');
let elus_zn = eo('tbody');
let cndaQDo = Is.empty(component.supervisors);
this.setState('stZ_sA6', cndaQDo);
let cndmcvq = !(cndaQDo);
this.setState('stB8lf8', cndmcvq);
if (cndaQDo) { 
let elXJHV9 = eo('tr','PnQf');
let elQNOVT = eo('td','V6Tf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No supervisors yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.supervisors) {
let supervisor = component.supervisors[i]; 
 let ii9QyQ = 'LffbvXf' + i;
let elUXBIm = eo('tr','Gp56h8_HF0P2' + i+ii9QyQ);
let el7m0HK = eo('td','1Rhff'+ii9QyQ,null,`class`,`bold`);
text(Object.get(supervisor, 'member.name', ''));
ec('td');
let eludU8F = eo('td','atDff'+ii9QyQ);
text(Object.get(supervisor, 'createdBy.name', ''));
ec('td');
let elr9mGq = eo('td','zYCff'+ii9QyQ);
let cmpYD0j = this._lc('cQS2Zg10j', {parent:component,parentTop:projectLayout,props:{timestamp:supervisor.createdAt.timestamp},state:'stB8lf8',insideLoop:true,index:"" +ii9QyQ});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd9tOB = component.modalIsOpened;
this.setState('st03fMm', cnd9tOB);
if (cnd9tOB) { 
component.modal = this._lc('czZdE6u8W', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elzbTcd = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elzbTcd.formHandler) {
                    window.cfrmdlr = elzbTcd.formHandler = new FormHandler(elzbTcd, component);
                } else {
                    window.cfrmdlr = elzbTcd.formHandler;
                }
            let cmp5HKb = this._lc('cprYGjRtm', {parent:component,parentTop:flkModal,props:{required:true,lazyLoading:true,remoteSearch:true,except:component.membersIds,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`supervisorId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,label:'Select supervisor',heading:'Supervisor',query:'username'},state:'st03fMm'});
let elOoIJC = eo('div',null,null,`class`,`m-t-1 text-center`);
let elq0cUk = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new supervisor'},state:'st03fMm'});
}
                    this.isReadyToGo();
                }
        });