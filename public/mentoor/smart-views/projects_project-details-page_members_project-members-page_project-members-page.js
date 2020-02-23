_Component({
                selector: 'project-members-page',
                c: 'ProjectMembersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddMember','isSending','confirmRemoving','addNewMember','exceptMembers','usersService','mapUser','confirmDelete','remove'],
                children: {cFAHxdIQ4:'flk-time-ago',cJEBX5Nq4:'project-layout',cl5Vz3R4q:'flk-dropdown-list',cd46CBiWj:'flk-modal',ckQMErrHn:'flk-alert'},
                render: function (component) {
                    let cmpxroi = this._lc('cJEBX5Nq4', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd0bn2 = component.project.isProjectManager;
this.setState('st8t_J7', cnd0bn2);
if (cnd0bn2) { 
let elur6VQ = eo('button','dahf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddMember = true; component.isSending = false;}]},`class`,`float-right btn bold`);
elur6VQ.cls = {'btn-success': component.project.maxMembers <= component.project.members.length, 'btn-pink': component.project.maxMembers > component.project.members.length};

            for (let className in elur6VQ.cls) {
                elur6VQ.classList.toggle(className, elur6VQ.cls[className]);
            }  
            let elo5Me4 = eo('i','8vmf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Member`);
ec('button');
}let elR794h = eo('h1',null,null,`class`,`m-y-1`);
text(`Project members`);
let elFdH30 = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.project.members.length + '/' + component.project.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elFdH30;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project members')}`});
        ;
                    }, 20);                
                ec('h1');
let elyUWIH = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let eldSx_1 = eo('thead');
let elGFkUB = eo('tr');
let eljzSup = eo('th');
text(`Member`);
ec('th');
let el18CVO = eo('th');
text(`Role`);
ec('th');
let elGpQPS = eo('th');
text(`Added By`);
ec('th');
let elHjNQr = eo('th');
text(`Added At`);
ec('th');
let elGILut = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elHJf0M = eo('tbody');
for (let index in component.project.members) {
let member = component.project.members[index]; 
 let ii2wmm = 'tYe3R39' + index;
let elw9Tcu = eo('tr','EmW8n0aDM8ex' + index+ii2wmm);
let elvdwBd = eo('td','At1ff'+ii2wmm);
text(member.member.name);
ec('td');
let eloU36C = eo('td','0Cfff'+ii2wmm);
text(member.role);
ec('td');
let el2sXbT = eo('td','fOaff'+ii2wmm);
text(member.createdBy.name);
ec('td');
let elWtpsv = eo('td','gpHff'+ii2wmm);
let cmpq6V7 = this._lc('cFAHxdIQ4', {parent:component,parentTop:projectLayout,props:{timestamp:member.createdAt.timestamp},insideLoop:true,index:"" +ii2wmm});
ec('td');
let elC46bX = eo('td','TPTff'+ii2wmm);
let cnds1_e = component.project.is.higherAuthority;
this.setState('stRbdNU', cnds1_e);
if (cnds1_e) { 
let elzlpPf = eo('button','tgnff'+ii2wmm,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(member, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let el5haLC = eo('i','kfqff'+ii2wmm,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elzlpPf;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Dismiss Member')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndoN6T = component.openAddMember;
this.setState('stU2OBh', cndoN6T);
if (cndoN6T) { 
component.addMemberModal = this._lc('cd46CBiWj', {parent:component,events:{onclose:function(e) {let $el = this; component.openAddMember = null}},content:(flkModal) => {let elcT7Ge = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addNewMember($el)}]});

                if (! elcT7Ge.formHandler) {
                    window.cfrmdlr = elcT7Ge.formHandler = new FormHandler(elcT7Ge, component);
                } else {
                    window.cfrmdlr = elcT7Ge.formHandler;
                }
            let cmpGfDe = this._lc('cl5Vz3R4q', {parent:component,parentTop:flkModal,props:{lazyLoading:true,remoteSearch:true,except:component.exceptMembers,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Member',query:'username'},state:'stU2OBh'});
let elkd0p3 = eo('div',null,null,`class`,`m-t-1 text-center`);
let el5dydY = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Member'},state:'stU2OBh'});
}let cndormO = component.confirmDelete;
this.setState('stEAhmz', cndormO);
if (cndormO) { 
let cmpy35Z = this._lc('ckQMErrHn', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stEAhmz'});
}
                    this.isReadyToGo();
                }
        });