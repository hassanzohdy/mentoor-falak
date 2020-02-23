_Component({
                selector: 'project-supervisors-page',
                c: 'ProjectSupervisorsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','newSupervisorCost','totalSupervisors','supervisors','modalIsOpened','submit','membersIds','usersService','mapUser','isValidForm','isSending'],
                children: {c4xgfWTDa:'gold-icon',c5auyLJK5:'flk-time-ago',ciH0bnJJU:'project-layout',c72AqUqpz:'flk-dropdown-list',cEbAASn7d:'flk-modal'},
                render: function (component) {
                    let cmpb_r0 = this._lc('ciH0bnJJU', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elXfmCk = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]}, boolAttrs, {disabled:component.newSupervisorCost > component.project.fund},`class`,`float-right btn btn-success bold`);
let el1lT4Q = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmp8lrQ = this._lc('c4xgfWTDa', {parent:component,parentTop:projectLayout,props:{coins:component.newSupervisorCost}});
let ellhgm3 = ev('br');
text(`Supervisor`);
ec('button');
let elAqWJv = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Supervisors
        (${ component.totalSupervisors.format() })`);
ec('h1');
let eljtRdn = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elwPyRU = eo('thead');
let elbHK3n = eo('tr');
let el4PIl6 = eo('th');
text(`Supervisor`);
ec('th');
let elJ0hxe = eo('th');
text(`Added By`);
ec('th');
let ele2uMU = eo('th');
text(`Added At`);
ec('th');
ec('tr');
ec('thead');
let el7VS1b = eo('tbody');
let cndFuAX = Is.empty(component.supervisors);
this.setState('st6vOAF', cndFuAX);
let cndEiMC = !(cndFuAX);
this.setState('stWZ0Xv', cndEiMC);
if (cndFuAX) { 
let elGREYA = eo('tr','nV1f');
let el36z81 = eo('td','aZGf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No supervisors yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.supervisors) {
let supervisor = component.supervisors[i]; 
 let iidVFr = 'PtNA_J3' + i;
let elUmK8z = eo('tr','QfpkGYNQxaY5' + i+iidVFr);
let elMNbGQ = eo('td','Z2kff'+iidVFr,null,`class`,`bold`);
text(Object.get(supervisor, 'member.name', ''));
ec('td');
let elqXBdR = eo('td','HWVff'+iidVFr);
text(Object.get(supervisor, 'createdBy.name', ''));
ec('td');
let elmskIq = eo('td','M9Fff'+iidVFr);
let cmpQYUH = this._lc('c5auyLJK5', {parent:component,parentTop:projectLayout,props:{timestamp:supervisor.createdAt.timestamp},state:'stWZ0Xv',insideLoop:true,index:"" +iidVFr});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndekWJ = component.modalIsOpened;
this.setState('st2l9VK', cndekWJ);
if (cndekWJ) { 
component.modal = this._lc('cEbAASn7d', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elYJRGT = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elYJRGT.formHandler) {
                    window.cfrmdlr = elYJRGT.formHandler = new FormHandler(elYJRGT, component);
                } else {
                    window.cfrmdlr = elYJRGT.formHandler;
                }
            let cmpA1M3 = this._lc('c72AqUqpz', {parent:component,parentTop:flkModal,props:{required:true,lazyLoading:true,remoteSearch:true,except:component.membersIds,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`supervisorId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,label:'Select supervisor',heading:'Supervisor',query:'username'},state:'st2l9VK'});
let elp1MrE = eo('div',null,null,`class`,`m-t-1 text-center`);
let ela5be7 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new supervisor'},state:'st2l9VK'});
}
                    this.isReadyToGo();
                }
        });