_Component({
                selector: 'project-members-page',
                c: 'ProjectMembersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddMember','isSending','confirmRemoving','addNewMember','exceptMembers','usersService','mapUser','confirmDelete','remove'],
                children: {c6CSBTgjp:'flk-time-ago',c7jIuZvxG:'project-layout',czjJei3JS:'flk-dropdown-list',cIzFI5_1G:'flk-modal',cgYJknIxW:'flk-alert'},
                render: function (component) {
                    let cmpcutV = this._lc('c7jIuZvxG', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd3F7E = component.project.isProjectManager;
this.setState('stgltCZ', cnd3F7E);
if (cnd3F7E) { 
let elwC4lC = eo('button','yrbf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddMember = true; component.isSending = false;}]},`class`,`float-right btn bold`);
elwC4lC.cls = {'btn-success': component.project.maxMembers <= component.project.members.length, 'btn-pink': component.project.maxMembers > component.project.members.length};

            for (let className in elwC4lC.cls) {
                elwC4lC.classList.toggle(className, elwC4lC.cls[className]);
            }  
            let el0VOv4 = eo('i','_e8f',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Member`);
ec('button');
}let elS_gBz = eo('h1',null,null,`class`,`m-y-1`);
text(`Project members`);
let el2Ch3d = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.project.members.length + '/' + component.project.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = el2Ch3d;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project members')}`});
        ;
                    }, 20);                
                ec('h1');
let elBfnrr = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let el8ZFOs = eo('thead');
let elGHd1P = eo('tr');
let eldbWQr = eo('th');
text(`Member`);
ec('th');
let elhkztO = eo('th');
text(`Role`);
ec('th');
let elyHR35 = eo('th');
text(`Added By`);
ec('th');
let elDl5D4 = eo('th');
text(`Added At`);
ec('th');
let el0n_1t = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elKs3V_ = eo('tbody');
for (let index in component.project.members) {
let member = component.project.members[index]; 
 let iidRMr = 'rjhQNoT' + index;
let elzCSQj = eo('tr','x8ZVTbQbxWpW' + index+iidRMr);
let el4pZxB = eo('td','IvFff'+iidRMr);
text(member.member.name);
ec('td');
let el1BhY2 = eo('td','K4aff'+iidRMr);
text(member.role);
ec('td');
let elBH_yI = eo('td','CaBff'+iidRMr);
text(member.createdBy.name);
ec('td');
let el5U8lm = eo('td','sv7ff'+iidRMr);
let cmpC8Li = this._lc('c6CSBTgjp', {parent:component,parentTop:projectLayout,props:{timestamp:member.createdAt.timestamp},insideLoop:true,index:"" +iidRMr});
ec('td');
let el0yrVW = eo('td','vmzff'+iidRMr);
let cndv3HY = component.project.is.higherAuthority;
this.setState('stJpddb', cndv3HY);
if (cndv3HY) { 
let elnpPQY = eo('button','FRhff'+iidRMr,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(member, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let eltx5ke = eo('i','K_iff'+iidRMr,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elnpPQY;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Dismiss Member')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndLavQ = component.openAddMember;
this.setState('stOadXS', cndLavQ);
if (cndLavQ) { 
component.addMemberModal = this._lc('cIzFI5_1G', {parent:component,events:{onclose:function(e) {let $el = this; component.openAddMember = null}},content:(flkModal) => {let eli8Y6k = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addNewMember($el)}]});

                if (! eli8Y6k.formHandler) {
                    window.cfrmdlr = eli8Y6k.formHandler = new FormHandler(eli8Y6k, component);
                } else {
                    window.cfrmdlr = eli8Y6k.formHandler;
                }
            let cmpqj34 = this._lc('czjJei3JS', {parent:component,parentTop:flkModal,props:{lazyLoading:true,remoteSearch:true,except:component.exceptMembers,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Member',query:'username'},state:'stOadXS'});
let el9L4vv = eo('div',null,null,`class`,`m-t-1 text-center`);
let el1Ndop = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Member'},state:'stOadXS'});
}let cndKpCi = component.confirmDelete;
this.setState('st40oOR', cndKpCi);
if (cndKpCi) { 
let cmpGltD = this._lc('cgYJknIxW', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st40oOR'});
}
                    this.isReadyToGo();
                }
        });