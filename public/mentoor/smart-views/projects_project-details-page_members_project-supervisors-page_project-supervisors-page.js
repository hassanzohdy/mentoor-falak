_Component({
                selector: 'project-supervisors-page',
                c: 'ProjectSupervisorsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','newSupervisorCost','totalSupervisors','supervisors','modalIsOpened','submit','membersIds','usersService','mapUser','isValidForm','isSending'],
                children: {cWZeVSGBg:'gold-icon',crLtlny9A:'flk-time-ago',cgTercHvm:'project-layout',c3lD8RvBC:'flk-dropdown-list',cXLTNgzVS:'flk-modal'},
                render: function (component) {
                    let cmpEZ1O = this._lc('cgTercHvm', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elkVuel = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]}, boolAttrs, {disabled:component.newSupervisorCost > component.project.fund},`class`,`float-right btn btn-success bold`);
let elYcB95 = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let cmpUBql = this._lc('cWZeVSGBg', {parent:component,parentTop:projectLayout,props:{coins:component.newSupervisorCost}});
let el7FtrC = ev('br');
text(`Supervisor`);
ec('button');
let elh_tRb = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Supervisors
        (${ component.totalSupervisors.format() })`);
ec('h1');
let elJI63x = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let el1t67n = eo('thead');
let elNB24o = eo('tr');
let elTgOwb = eo('th');
text(`Supervisor`);
ec('th');
let elPC6D9 = eo('th');
text(`Added By`);
ec('th');
let elfdtQx = eo('th');
text(`Added At`);
ec('th');
ec('tr');
ec('thead');
let elWMh2T = eo('tbody');
let cndvub7 = Is.empty(component.supervisors);
this.setState('stj04CI', cndvub7);
let cndL1cz = !(cndvub7);
this.setState('stGpynz', cndL1cz);
if (cndvub7) { 
let elPXMtY = eo('tr','tsMf');
let elshcE5 = eo('td','PWdf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No supervisors yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.supervisors) {
let supervisor = component.supervisors[i]; 
 let iiq9Eq = 'np0t3tw' + i;
let elBevpS = eo('tr','DaPG3YYBoNVD' + i+iiq9Eq);
let elpwH7x = eo('td','3Urff'+iiq9Eq,null,`class`,`bold`);
text(Object.get(supervisor, 'member.name', ''));
ec('td');
let elDMFhU = eo('td','K88ff'+iiq9Eq);
text(Object.get(supervisor, 'createdBy.name', ''));
ec('td');
let elRAvhl = eo('td','WUMff'+iiq9Eq);
let cmpHhAQ = this._lc('crLtlny9A', {parent:component,parentTop:projectLayout,props:{timestamp:supervisor.createdAt.timestamp},state:'stGpynz',insideLoop:true,index:"" +iiq9Eq});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndDRqx = component.modalIsOpened;
this.setState('stft4su', cndDRqx);
if (cndDRqx) { 
component.modal = this._lc('cXLTNgzVS', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elvmfka = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elvmfka.formHandler) {
                    window.cfrmdlr = elvmfka.formHandler = new FormHandler(elvmfka, component);
                } else {
                    window.cfrmdlr = elvmfka.formHandler;
                }
            let cmpsgiR = this._lc('c3lD8RvBC', {parent:component,parentTop:flkModal,props:{required:true,lazyLoading:true,remoteSearch:true,except:component.membersIds,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`supervisorId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,label:'Select supervisor',heading:'Supervisor',query:'username'},state:'stft4su'});
let elfRGRE = eo('div',null,null,`class`,`m-t-1 text-center`);
let elSHKJN = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new supervisor'},state:'stft4su'});
}
                    this.isReadyToGo();
                }
        });