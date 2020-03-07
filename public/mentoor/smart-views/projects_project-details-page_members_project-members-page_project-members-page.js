_Component({
                selector: 'project-members-page',
                c: 'ProjectMembersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddMember','isSending','confirmRemoving','addNewMember','exceptMembers','usersService','mapUser','confirmDelete','remove'],
                children: {cBrpVhL4K:'flk-time-ago',cmXKd6Omq:'project-layout',cSQk9OP0c:'flk-dropdown-list',cjSclhylx:'flk-modal',ceom9Fd1r:'flk-alert'},
                render: function (component) {
                    let cmpJDTn = this._lc('cmXKd6Omq', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndgvJX = component.project.isProjectManager;
this.setState('st5BiKL', cndgvJX);
if (cndgvJX) { 
let ellg0py = eo('button','nOWf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddMember = true; component.isSending = false;}]},`class`,`float-right btn bold ${cls({'btn-success': component.project.maxMembers <= component.project.members.length, 'btn-pink': component.project.maxMembers > component.project.members.length})}`);
let el3OHss = eo('i','1fPf',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Member`);
ec('button');
}let eldoQAO = eo('h1',null,null,`class`,`m-y-1`);
text(`Project members`);
let el5JumX = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.project.members.length + '/' + component.project.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = el5JumX;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project members')}`});
        ;
                    }, 20);                
                ec('h1');
let elZE6pv = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let el6dEkZ = eo('thead');
let ely5XKU = eo('tr');
let elNFvnL = eo('th');
text(`Member`);
ec('th');
let elCLCHA = eo('th');
text(`Role`);
ec('th');
let elVjM5_ = eo('th');
text(`Added By`);
ec('th');
let elCOCMn = eo('th');
text(`Added At`);
ec('th');
let elfP0ey = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elMKgu_ = eo('tbody');
for (let index in component.project.members) {
let member = component.project.members[index]; 
 let iiMYP0 = 'Ny77l6r' + index;
let elsfEN4 = eo('tr','FsTeZ79ypG74' + index+iiMYP0);
let elI3jDm = eo('td','u2Jff'+iiMYP0);
text(member.member.name);
ec('td');
let elHYXgA = eo('td','1Beff'+iiMYP0);
text(member.role);
ec('td');
let ell1iSV = eo('td','Qx1ff'+iiMYP0);
text(member.createdBy.name);
ec('td');
let elsHDLO = eo('td','blqff'+iiMYP0);
let cmpGtl5 = this._lc('cBrpVhL4K', {parent:component,parentTop:projectLayout,props:{timestamp:member.createdAt.timestamp},insideLoop:true,index:"" +iiMYP0});
ec('td');
let elfeWAT = eo('td','7Rsff'+iiMYP0);
let cnd_ezv = component.project.is.higherAuthority;
this.setState('stgHHLh', cnd_ezv);
if (cnd_ezv) { 
let eloTMDx = eo('button','NL6ff'+iiMYP0,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(member, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elp2jyt = eo('i','vwYff'+iiMYP0,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eloTMDx;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Dismiss Member')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndD8OK = component.openAddMember;
this.setState('stdGwPn', cndD8OK);
if (cndD8OK) { 
component.addMemberModal = this._lc('cjSclhylx', {parent:component,events:{onclose:function(e) {let $el = this; component.openAddMember = null}},content:(flkModal) => {let elgCOPd = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addNewMember($el)}]});

                if (! elgCOPd.formHandler) {
                    window.cfrmdlr = elgCOPd.formHandler = new FormHandler(elgCOPd, component);
                } else {
                    window.cfrmdlr = elgCOPd.formHandler;
                }
            let cmpNWRf = this._lc('cSQk9OP0c', {parent:component,parentTop:flkModal,props:{lazyLoading:true,remoteSearch:true,except:component.exceptMembers,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Member',query:'username'},state:'stdGwPn'});
let elcQTH3 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el2kNmK = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Member'},state:'stdGwPn'});
}let cnddpxG = component.confirmDelete;
this.setState('sts3pI4', cnddpxG);
if (cnddpxG) { 
let cmpriCx = this._lc('ceom9Fd1r', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'sts3pI4'});
}
                    this.isReadyToGo();
                }
        });