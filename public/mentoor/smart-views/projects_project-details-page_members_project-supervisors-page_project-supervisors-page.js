_Component({
                selector: 'project-supervisors-page',
                c: 'ProjectSupervisorsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','newSupervisorCost','totalSupervisors','supervisors','modalIsOpened','submit','membersIds','usersService','mapUser','isValidForm','isSending'],
                children: {cdtLBnS3k:'gold-icon',cdT2DGzmJ:'flk-time-ago',cNPc9d3Qa:'project-layout',cktZYVDZU:'flk-dropdown-list',cE9zt9bdW:'flk-modal'},
                render: function (component) {
                    let cmppNe7 = this._lc('cNPc9d3Qa', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elBx__W = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]}, boolAttrs, {disabled:component.newSupervisorCost > component.project.fund},`class`,`float-right btn btn-success bold`);
let elDrJki = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
let cmpD9ga = this._lc('cdtLBnS3k', {parent:component,parentTop:projectLayout,props:{coins:component.newSupervisorCost}});
let elPhfg4 = ev('br');
text(`Supervisor`);
ec('button');
let el7FvmF = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Supervisors
        (${ component.totalSupervisors.format() })`);
ec('h1');
let el8OW9D = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elEin4l = eo('thead');
let elPnaFX = eo('tr');
let elWF5TC = eo('th');
text(`Supervisor`);
ec('th');
let elrTLTb = eo('th');
text(`Added By`);
ec('th');
let elGDBOW = eo('th');
text(`Added At`);
ec('th');
ec('tr');
ec('thead');
let elLOJSZ = eo('tbody');
let cnd9r0C = Is.empty(component.supervisors);
this.setState('stX7sg4', cnd9r0C);
let cndwlZ4 = !(cnd9r0C);
this.setState('stftBX9', cndwlZ4);
if (cnd9r0C) { 
let elXTuxm = eo('tr','cYhf');
let elebLbY = eo('td','MHmf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No supervisors yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.supervisors) {
let supervisor = component.supervisors[i]; 
 let ii44Pr = 'Q6W6gjP' + i;
let elpi0nO = eo('tr','3lY8DucGkLBi' + i+ii44Pr);
let elmnJvY = eo('td','HOAff'+ii44Pr,null,`class`,`bold`);
text(Object.get(supervisor, 'member.name', ''));
ec('td');
let elW8sXz = eo('td','dATff'+ii44Pr);
text(Object.get(supervisor, 'createdBy.name', ''));
ec('td');
let elAxfE9 = eo('td','Z4nff'+ii44Pr);
let cmphI1D = this._lc('cdT2DGzmJ', {parent:component,parentTop:projectLayout,props:{timestamp:supervisor.createdAt.timestamp},state:'stftBX9',insideLoop:true,index:"" +ii44Pr});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndAZNz = component.modalIsOpened;
this.setState('stK1z5f', cndAZNz);
if (cndAZNz) { 
component.modal = this._lc('cE9zt9bdW', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elvNM2N = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elvNM2N.formHandler) {
                    window.cfrmdlr = elvNM2N.formHandler = new FormHandler(elvNM2N, component);
                } else {
                    window.cfrmdlr = elvNM2N.formHandler;
                }
            let cmpxFpm = this._lc('cktZYVDZU', {parent:component,parentTop:flkModal,props:{required:true,lazyLoading:true,remoteSearch:true,except:component.membersIds,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`supervisorId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,label:'Select supervisor',heading:'Supervisor',query:'username'},state:'stK1z5f'});
let elDbRDY = eo('div',null,null,`class`,`m-t-1 text-center`);
let eln7p5F = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new supervisor'},state:'stK1z5f'});
}
                    this.isReadyToGo();
                }
        });