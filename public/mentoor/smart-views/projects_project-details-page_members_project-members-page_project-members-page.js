_Component({
                selector: 'project-members-page',
                c: 'ProjectMembersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddMember','isSending','confirmRemoving','addNewMember','exceptMembers','usersService','mapUser','confirmDelete','remove'],
                children: {cGatTOwNM:'flk-time-ago',cwkRmcPpy:'project-layout',cfWJr25Bq:'flk-dropdown-list',csxPIPuE9:'flk-modal',carIluKM2:'flk-alert'},
                render: function (component) {
                    let cmpBDfd = this._lc('cwkRmcPpy', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cndNpfL = component.project.isProjectManager;
this.setState('stquPBl', cndNpfL);
if (cndNpfL) { 
let el90YS7 = eo('button','sWhf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddMember = true; component.isSending = false;}]},`class`,`float-right btn bold`);
el90YS7.cls = {'btn-success': component.project.maxMembers <= component.project.members.length, 'btn-pink': component.project.maxMembers > component.project.members.length};

            for (let className in el90YS7.cls) {
                el90YS7.classList.toggle(className, el90YS7.cls[className]);
            }  
            let elVKnWN = eo('i','BGqf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Member`);
ec('button');
}let elhSfvz = eo('h1',null,null,`class`,`m-y-1`);
text(`Project members`);
let eloAyQp = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.project.members.length + '/' + component.project.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = eloAyQp;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project members')}`});
        ;
                    }, 20);                
                ec('h1');
let elgXM6m = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elkOYzo = eo('thead');
let elbT55o = eo('tr');
let elczjnm = eo('th');
text(`Member`);
ec('th');
let elDFrln = eo('th');
text(`Role`);
ec('th');
let elc0vhg = eo('th');
text(`Added By`);
ec('th');
let el7gtFV = eo('th');
text(`Added At`);
ec('th');
let el8tu2C = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elg8D1u = eo('tbody');
for (let index in component.project.members) {
let member = component.project.members[index]; 
 let iiPLsL = 'SfDgGux' + index;
let el2RGgi = eo('tr','G1f1WMGexR1z' + index+iiPLsL);
let el1r8un = eo('td','cYPff'+iiPLsL);
text(member.member.name);
ec('td');
let el7tJGI = eo('td','Z5gff'+iiPLsL);
text(member.role);
ec('td');
let elN1ml_ = eo('td','baeff'+iiPLsL);
text(member.createdBy.name);
ec('td');
let elP4u5C = eo('td','vEoff'+iiPLsL);
let cmpOlhr = this._lc('cGatTOwNM', {parent:component,parentTop:projectLayout,props:{timestamp:member.createdAt.timestamp},insideLoop:true,index:"" +iiPLsL});
ec('td');
let el_7txp = eo('td','EDaff'+iiPLsL);
let cndhsTb = component.project.is.higherAuthority;
this.setState('st8NqAj', cndhsTb);
if (cndhsTb) { 
let eli2ZkU = eo('button','olNff'+iiPLsL,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(member, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let elk8jqO = eo('i','yHWff'+iiPLsL,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = eli2ZkU;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Dismiss Member')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndQk_Y = component.openAddMember;
this.setState('stQ5D4X', cndQk_Y);
if (cndQk_Y) { 
component.addMemberModal = this._lc('csxPIPuE9', {parent:component,events:{onclose:function(e) {let $el = this; component.openAddMember = null}},content:(flkModal) => {let elUj2pf = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addNewMember($el)}]});

                if (! elUj2pf.formHandler) {
                    window.cfrmdlr = elUj2pf.formHandler = new FormHandler(elUj2pf, component);
                } else {
                    window.cfrmdlr = elUj2pf.formHandler;
                }
            let cmpkQGE = this._lc('cfWJr25Bq', {parent:component,parentTop:flkModal,props:{lazyLoading:true,remoteSearch:true,except:component.exceptMembers,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Member',query:'username'},state:'stQ5D4X'});
let el_Z930 = eo('div',null,null,`class`,`m-t-1 text-center`);
let elcX20V = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Member'},state:'stQ5D4X'});
}let cnd5FH1 = component.confirmDelete;
this.setState('stobhbo', cnd5FH1);
if (cnd5FH1) { 
let cmpmVh6 = this._lc('carIluKM2', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stobhbo'});
}
                    this.isReadyToGo();
                }
        });