_Component({
                selector: 'project-supervisors-page',
                c: 'ProjectSupervisorsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','newSupervisorCost','totalSupervisors','supervisors','modalIsOpened','submit','membersIds','usersService','mapUser','isValidForm','isSending'],
                children: {cg6BL4jWU:'gold-icon',cSAgshFQ6:'flk-time-ago',cdVkmFyCI:'project-layout',cuUZI8Bne:'flk-dropdown-list',cZvgdSk1p:'flk-modal'},
                render: function (component) {
                    let cmpNaF0 = this._lc('cdVkmFyCI', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elF1qDD = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]}, boolAttrs, {disabled:component.newSupervisorCost > component.project.fund},`class`,`float-right btn btn-success bold`);
let elbCaFJ = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmpM5bf = this._lc('cg6BL4jWU', {parent:component,parentTop:projectLayout,props:{coins:component.newSupervisorCost}});
let eleOO84 = ev('br');
text(`Supervisor`);
ec('button');
let elZFeJE = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Supervisors
        (${ component.totalSupervisors.format() })`);
ec('h1');
let elM3Cwf = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elCMQKe = eo('thead');
let elhcZMp = eo('tr');
let elQgHXN = eo('th');
text(`Supervisor`);
ec('th');
let elwikU_ = eo('th');
text(`Added By`);
ec('th');
let elZc9Pm = eo('th');
text(`Added At`);
ec('th');
ec('tr');
ec('thead');
let elXjLec = eo('tbody');
let cndf2p7 = Is.empty(component.supervisors);
this.setState('st6afxi', cndf2p7);
let cndK8rn = !(cndf2p7);
this.setState('stPVvm8', cndK8rn);
if (cndf2p7) { 
let elQQepF = eo('tr','Ar9f');
let elpOpNm = eo('td','eB2f',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No supervisors yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.supervisors) {
let supervisor = component.supervisors[i]; 
 let iiz_9p = 'FJDFeD9' + i;
let elnYN1x = eo('tr','PgV8cUpc1tBU' + i+iiz_9p);
let el_PTUU = eo('td','Qb9ff'+iiz_9p,null,`class`,`bold`);
text(Object.get(supervisor, 'member.name', ''));
ec('td');
let el0cW7g = eo('td','lZSff'+iiz_9p);
text(Object.get(supervisor, 'createdBy.name', ''));
ec('td');
let elEqYDq = eo('td','cbqff'+iiz_9p);
let cmpOYAf = this._lc('cSAgshFQ6', {parent:component,parentTop:projectLayout,props:{timestamp:supervisor.createdAt.timestamp},state:'stPVvm8',insideLoop:true,index:"" +iiz_9p});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cnd3fXp = component.modalIsOpened;
this.setState('stONmjj', cnd3fXp);
if (cnd3fXp) { 
component.modal = this._lc('cZvgdSk1p', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elFZAyQ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elFZAyQ.formHandler) {
                    window.cfrmdlr = elFZAyQ.formHandler = new FormHandler(elFZAyQ, component);
                } else {
                    window.cfrmdlr = elFZAyQ.formHandler;
                }
            let cmpnrtP = this._lc('cuUZI8Bne', {parent:component,parentTop:flkModal,props:{required:true,lazyLoading:true,remoteSearch:true,except:component.membersIds,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`supervisorId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,label:'Select supervisor',heading:'Supervisor',query:'username'},state:'stONmjj'});
let elBjAD9 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elcmyTV = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new supervisor'},state:'stONmjj'});
}
                    this.isReadyToGo();
                }
        });