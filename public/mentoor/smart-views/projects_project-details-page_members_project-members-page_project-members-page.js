_Component({
                selector: 'project-members-page',
                c: 'ProjectMembersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddMember','isSending','confirmRemoving','addNewMember','exceptMembers','usersService','mapUser','confirmDelete','remove'],
                children: {cL8kaD55Y:'flk-time-ago',c0aw0GS71:'project-layout',cmWERVfkE:'flk-dropdown-list',c5RoWLIb8:'flk-modal',chjSIE3Yq:'flk-alert'},
                render: function (component) {
                    let cmpRoBY = this._lc('c0aw0GS71', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndlz4d = component.project.isProjectManager;
this.setState('stJINIR', cndlz4d);
if (cndlz4d) { 
let eluKlXo = eo('button','pSTf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddMember = true; component.isSending = false;}]},`class`,`float-right btn bold ${cls({'btn-success': component.project.maxMembers <= component.project.members.length, 'btn-pink': component.project.maxMembers > component.project.members.length})}`);
let eln_ETO = eo('i','20Yf',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Member`);
ec('button');
}let elDJYBk = eo('h1',null,null,`class`,`m-y-1`);
text(`Project members`);
let elfEdH_ = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.project.members.length + '/' + component.project.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elfEdH_;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project members')}`});
        ;
                    }, 20);                
                ec('h1');
let elr3Tfv = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let el_uVlt = eo('thead');
let elUduCA = eo('tr');
let elxobDQ = eo('th');
text(`Member`);
ec('th');
let elRVroq = eo('th');
text(`Role`);
ec('th');
let elXKwca = eo('th');
text(`Added By`);
ec('th');
let elnLRVK = eo('th');
text(`Added At`);
ec('th');
let elbgTKQ = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elsbDhg = eo('tbody');
for (let index in component.project.members) {
let member = component.project.members[index]; 
 let iiblV3 = 'BnAARkA' + index;
let elr9ZU8 = eo('tr','2u_33t1mfdxZ' + index+iiblV3);
let el2mg6E = eo('td','ERIff'+iiblV3);
text(member.member.name);
ec('td');
let elpnOkI = eo('td','eBBff'+iiblV3);
text(member.role);
ec('td');
let eleFxBq = eo('td','XJYff'+iiblV3);
text(member.createdBy.name);
ec('td');
let elfaCjI = eo('td','BFXff'+iiblV3);
let cmpTYjv = this._lc('cL8kaD55Y', {parent:component,parentTop:projectLayout,props:{timestamp:member.createdAt.timestamp},insideLoop:true,index:"" +iiblV3});
ec('td');
let el3Sq3K = eo('td','ZKQff'+iiblV3);
let cndjAPF = component.project.is.higherAuthority;
this.setState('steZdlk', cndjAPF);
if (cndjAPF) { 
let elE1vxI = eo('button','IXNff'+iiblV3,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(member, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elPWbCK = eo('i','INTff'+iiblV3,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elE1vxI;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Dismiss Member')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cnd82pR = component.openAddMember;
this.setState('stP1ZKq', cnd82pR);
if (cnd82pR) { 
component.addMemberModal = this._lc('c5RoWLIb8', {parent:component,events:{onclose:function(e) {let $el = this; component.openAddMember = null}},content:(flkModal) => {let elNHdqs = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addNewMember($el)}]});

                if (! elNHdqs.formHandler) {
                    window.cfrmdlr = elNHdqs.formHandler = new FormHandler(elNHdqs, component);
                } else {
                    window.cfrmdlr = elNHdqs.formHandler;
                }
            let cmp1Gys = this._lc('cmWERVfkE', {parent:component,parentTop:flkModal,props:{lazyLoading:true,remoteSearch:true,except:component.exceptMembers,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Member',query:'username'},state:'stP1ZKq'});
let elezUA2 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elTevRL = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Member'},state:'stP1ZKq'});
}let cnd28Y6 = component.confirmDelete;
this.setState('stb6ox4', cnd28Y6);
if (cnd28Y6) { 
let cmpix4A = this._lc('chjSIE3Yq', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stb6ox4'});
}
                    this.isReadyToGo();
                }
        });