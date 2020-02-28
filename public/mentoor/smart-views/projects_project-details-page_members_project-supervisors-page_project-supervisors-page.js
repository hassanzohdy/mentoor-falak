_Component({
                selector: 'project-supervisors-page',
                c: 'ProjectSupervisorsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','newSupervisorCost','totalSupervisors','supervisors','modalIsOpened','submit','membersIds','usersService','mapUser','isValidForm','isSending'],
                children: {cG9IYGHGz:'gold-icon',cNNw_uf34:'flk-time-ago',cKhWWeu_f:'project-layout',c0Peeqd0r:'flk-dropdown-list',cnLpLgy5h:'flk-modal'},
                render: function (component) {
                    let cmp5M5S = this._lc('cKhWWeu_f', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elCqHtp = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]}, boolAttrs, {disabled:component.newSupervisorCost > component.project.fund},`class`,`float-right btn btn-success bold`);
let elO6QVx = eo('i',null,null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
let cmp67nS = this._lc('cG9IYGHGz', {parent:component,parentTop:projectLayout,props:{coins:component.newSupervisorCost}});
let elYGJRs = ev('br');
text(`Supervisor`);
ec('button');
let elvCJ5r = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Supervisors
        (${ component.totalSupervisors.format() })`);
ec('h1');
let elwDGuy = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let el9Nviu = eo('thead');
let elPYZRD = eo('tr');
let elMGrfC = eo('th');
text(`Supervisor`);
ec('th');
let el4ujTw = eo('th');
text(`Added By`);
ec('th');
let elDMZff = eo('th');
text(`Added At`);
ec('th');
ec('tr');
ec('thead');
let elEd8zq = eo('tbody');
let cndSTiW = Is.empty(component.supervisors);
this.setState('st78cBl', cndSTiW);
let cnd8hfS = !(cndSTiW);
this.setState('stm1odU', cnd8hfS);
if (cndSTiW) { 
let elLxW5Q = eo('tr','sE1f');
let elUkykS = eo('td','5Wrf',null, 'style', {textAlign:'center'},`colspan`,`3`);
text(`No supervisors yet`);
ec('td');
ec('tr');
}else { 
for (let i in component.supervisors) {
let supervisor = component.supervisors[i]; 
 let iiGwGG = '2as6MEb' + i;
let elxkRA3 = eo('tr','ASvb1lACiZLp' + i+iiGwGG);
let elG9G4k = eo('td','HaYff'+iiGwGG,null,`class`,`bold`);
text(Object.get(supervisor, 'member.name', ''));
ec('td');
let elejG4C = eo('td','pu2ff'+iiGwGG);
text(Object.get(supervisor, 'createdBy.name', ''));
ec('td');
let el5FsuL = eo('td','d4qff'+iiGwGG);
let cmpHssW = this._lc('cNNw_uf34', {parent:component,parentTop:projectLayout,props:{timestamp:supervisor.createdAt.timestamp},state:'stm1odU',insideLoop:true,index:"" +iiGwGG});
ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndUooQ = component.modalIsOpened;
this.setState('st7L5kc', cndUooQ);
if (cndUooQ) { 
component.modal = this._lc('cnLpLgy5h', {parent:component,events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elCS8Ob = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elCS8Ob.formHandler) {
                    window.cfrmdlr = elCS8Ob.formHandler = new FormHandler(elCS8Ob, component);
                } else {
                    window.cfrmdlr = elCS8Ob.formHandler;
                }
            let cmpVptf = this._lc('c0Peeqd0r', {parent:component,parentTop:flkModal,props:{required:true,lazyLoading:true,remoteSearch:true,except:component.membersIds,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`supervisorId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,label:'Select supervisor',heading:'Supervisor',query:'username'},state:'st7L5kc'});
let elB7Hw8 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elmhOaB = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add new supervisor'},state:'st7L5kc'});
}
                    this.isReadyToGo();
                }
        });