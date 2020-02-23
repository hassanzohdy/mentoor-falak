_Component({
                selector: 'project-members-page',
                c: 'ProjectMembersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddMember','isSending','confirmRemoving','addNewMember','exceptMembers','usersService','mapUser','confirmDelete','remove'],
                children: {cQs2rjBVm:'flk-time-ago',c1kWwaWP5:'project-layout',cwqbl5UT2:'flk-dropdown-list',cRKEsGEMz:'flk-modal',ckpKjovBa:'flk-alert'},
                render: function (component) {
                    let cmpx4Ir = this._lc('c1kWwaWP5', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd23F4 = component.project.isProjectManager;
this.setState('stiAhyK', cnd23F4);
if (cnd23F4) { 
let eleFcfB = eo('button','8QNf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddMember = true; component.isSending = false;}]},`class`,`float-right btn bold`);
eleFcfB.cls = {'btn-success': component.project.maxMembers <= component.project.members.length, 'btn-pink': component.project.maxMembers > component.project.members.length};

            for (let className in eleFcfB.cls) {
                eleFcfB.classList.toggle(className, eleFcfB.cls[className]);
            }  
            let eltfAnq = eo('i','6Rcf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Member`);
ec('button');
}let eleXykI = eo('h1',null,null,`class`,`m-y-1`);
text(`Project members`);
let elQRLaT = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.project.members.length + '/' + component.project.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elQRLaT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project members')}`});
        ;
                    }, 20);                
                ec('h1');
let elDSgtX = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elCn1T1 = eo('thead');
let el3l6WG = eo('tr');
let elFbaeS = eo('th');
text(`Member`);
ec('th');
let eljeVcs = eo('th');
text(`Role`);
ec('th');
let elkS1gS = eo('th');
text(`Added By`);
ec('th');
let elNmu6x = eo('th');
text(`Added At`);
ec('th');
let elF9HuQ = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elfdg2C = eo('tbody');
for (let index in component.project.members) {
let member = component.project.members[index]; 
 let iiUDTN = 'ROFSGY6' + index;
let els_AWR = eo('tr','kOWdb74UNH9V' + index+iiUDTN);
let elUP7ah = eo('td','4uGff'+iiUDTN);
text(member.member.name);
ec('td');
let elsdarX = eo('td','MIlff'+iiUDTN);
text(member.role);
ec('td');
let eltuInr = eo('td','vIVff'+iiUDTN);
text(member.createdBy.name);
ec('td');
let eljWq9l = eo('td','hv7ff'+iiUDTN);
let cmpJmJZ = this._lc('cQs2rjBVm', {parent:component,parentTop:projectLayout,props:{timestamp:member.createdAt.timestamp},insideLoop:true,index:"" +iiUDTN});
ec('td');
let elD13eU = eo('td','XHIff'+iiUDTN);
let cnd2SRa = component.project.is.higherAuthority;
this.setState('stQ3Kq2', cnd2SRa);
if (cnd2SRa) { 
let elufWUB = eo('button','GRGff'+iiUDTN,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(member, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let el0ScYl = eo('i','C6aff'+iiUDTN,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elufWUB;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Dismiss Member')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndcXQp = component.openAddMember;
this.setState('stqepwq', cndcXQp);
if (cndcXQp) { 
component.addMemberModal = this._lc('cRKEsGEMz', {parent:component,events:{onclose:function(e) {let $el = this; component.openAddMember = null}},content:(flkModal) => {let elks9z3 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addNewMember($el)}]});

                if (! elks9z3.formHandler) {
                    window.cfrmdlr = elks9z3.formHandler = new FormHandler(elks9z3, component);
                } else {
                    window.cfrmdlr = elks9z3.formHandler;
                }
            let cmp6m7x = this._lc('cwqbl5UT2', {parent:component,parentTop:flkModal,props:{lazyLoading:true,remoteSearch:true,except:component.exceptMembers,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Member',query:'username'},state:'stqepwq'});
let el2iq75 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elspUW6 = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Member'},state:'stqepwq'});
}let cnd1tJZ = component.confirmDelete;
this.setState('stjNNOA', cnd1tJZ);
if (cnd1tJZ) { 
let cmpCYbR = this._lc('ckpKjovBa', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stjNNOA'});
}
                    this.isReadyToGo();
                }
        });