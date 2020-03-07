_Component({
                selector: 'project-members-page',
                c: 'ProjectMembersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddMember','isSending','confirmRemoving','addNewMember','exceptMembers','usersService','mapUser','confirmDelete','remove'],
                children: {cU3WhfQLk:'flk-time-ago',cRTwqMX1z:'project-layout',ca5y_m1zx:'flk-dropdown-list',cDBXfi7Nk:'flk-modal',cmiVAEhqv:'flk-alert'},
                render: function (component) {
                    let cmpBb88 = this._lc('cRTwqMX1z', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndo03v = component.project.isProjectManager;
this.setState('stPW57F', cndo03v);
if (cndo03v) { 
let eleEljZ = eo('button','sgHf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddMember = true; component.isSending = false;}]},`class`,`float-right btn bold ${cls({'btn-success': component.project.maxMembers <= component.project.members.length, 'btn-pink': component.project.maxMembers > component.project.members.length})}`);
let eljBbpR = eo('i','tkYf',null,`class`,`${fas('plus')} mr-1 icon`);
ec('i');
text(`Member`);
ec('button');
}let elkX7JY = eo('h1',null,null,`class`,`m-y-1`);
text(`Project members`);
let elehGO0 = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.project.members.length + '/' + component.project.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elehGO0;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project members')}`});
        ;
                    }, 20);                
                ec('h1');
let elvzfah = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let eliE1Wm = eo('thead');
let elqYgIz = eo('tr');
let el2x0qr = eo('th');
text(`Member`);
ec('th');
let elAtdqb = eo('th');
text(`Role`);
ec('th');
let el8S4J7 = eo('th');
text(`Added By`);
ec('th');
let elK42AY = eo('th');
text(`Added At`);
ec('th');
let elFLMqG = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elJ23P5 = eo('tbody');
for (let index in component.project.members) {
let member = component.project.members[index]; 
 let iiqVKb = 'OlBx1E2' + index;
let elkcTp0 = eo('tr','T_2u5nxbnx89' + index+iiqVKb);
let elhrxL8 = eo('td','8PJff'+iiqVKb);
text(member.member.name);
ec('td');
let el1Lolm = eo('td','mRfff'+iiqVKb);
text(member.role);
ec('td');
let elXxGn2 = eo('td','DyLff'+iiqVKb);
text(member.createdBy.name);
ec('td');
let elDWYCy = eo('td','wejff'+iiqVKb);
let cmpJZhR = this._lc('cU3WhfQLk', {parent:component,parentTop:projectLayout,props:{timestamp:member.createdAt.timestamp},insideLoop:true,index:"" +iiqVKb});
ec('td');
let elRHO__ = eo('td','mXNff'+iiqVKb);
let cndfGVf = component.project.is.higherAuthority;
this.setState('stwzzSg', cndfGVf);
if (cndfGVf) { 
let elTBvZT = eo('button','ppVff'+iiqVKb,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(member, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elXIqiP = eo('i','OyBff'+iiqVKb,null,`class`,`${fas('trash')} icon`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elTBvZT;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Dismiss Member')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndlhm7 = component.openAddMember;
this.setState('stRdsFc', cndlhm7);
if (cndlhm7) { 
component.addMemberModal = this._lc('cDBXfi7Nk', {parent:component,events:{onclose:function(e) {let $el = this; component.openAddMember = null}},content:(flkModal) => {let elI2AZT = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addNewMember($el)}]});

                if (! elI2AZT.formHandler) {
                    window.cfrmdlr = elI2AZT.formHandler = new FormHandler(elI2AZT, component);
                } else {
                    window.cfrmdlr = elI2AZT.formHandler;
                }
            let cmpRB0O = this._lc('ca5y_m1zx', {parent:component,parentTop:flkModal,props:{lazyLoading:true,remoteSearch:true,except:component.exceptMembers,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Member',query:'username'},state:'stRdsFc'});
let elOhovB = eo('div',null,null,`class`,`m-t-1 text-center`);
let elJYnTQ = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Member'},state:'stRdsFc'});
}let cndiZgd = component.confirmDelete;
this.setState('stM09BM', cndiZgd);
if (cndiZgd) { 
let cmpr2EB = this._lc('cmiVAEhqv', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stM09BM'});
}
                    this.isReadyToGo();
                }
        });