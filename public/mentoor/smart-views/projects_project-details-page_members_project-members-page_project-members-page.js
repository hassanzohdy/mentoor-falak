_Component({
                selector: 'project-members-page',
                c: 'ProjectMembersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddMember','isSending','confirmRemoving','addNewMember','exceptMembers','usersService','mapUser','confirmDelete','remove'],
                children: {cxRjuMzxS:'flk-time-ago',cnlVKdikI:'project-layout',c1bpQDvaH:'flk-dropdown-list',cV3ncqid0:'flk-modal',cMcml9_Lj:'flk-alert'},
                render: function (component) {
                    let cmpOiIL = this._lc('cnlVKdikI', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd22be = component.project.isProjectManager;
this.setState('sthQpx_', cnd22be);
if (cnd22be) { 
let elEdfg3 = eo('button','LMpf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddMember = true; component.isSending = false;}]},`class`,`float-right btn bold`);
elEdfg3.cls = {'btn-success': component.project.maxMembers <= component.project.members.length, 'btn-pink': component.project.maxMembers > component.project.members.length};

            for (let className in elEdfg3.cls) {
                elEdfg3.classList.toggle(className, elEdfg3.cls[className]);
            }  
            let eleoqEZ = eo('i','rHMf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Member`);
ec('button');
}let elX0tGr = eo('h1',null,null,`class`,`m-y-1`);
text(`Project members`);
let elJAsWz = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.project.members.length + '/' + component.project.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = elJAsWz;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project members')}`});
        ;
                    }, 20);                
                ec('h1');
let el4mzDu = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elqMHln = eo('thead');
let elMh8hh = eo('tr');
let elud5pH = eo('th');
text(`Member`);
ec('th');
let elrpW82 = eo('th');
text(`Role`);
ec('th');
let elGx8_O = eo('th');
text(`Added By`);
ec('th');
let elrSYmL = eo('th');
text(`Added At`);
ec('th');
let eljABTB = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let eljCrzJ = eo('tbody');
for (let index in component.project.members) {
let member = component.project.members[index]; 
 let iivRZ4 = 'gOD6xQ1' + index;
let elTmwtO = eo('tr','uvkxZcYY8L4Q' + index+iivRZ4);
let el1yVxc = eo('td','dPPff'+iivRZ4);
text(member.member.name);
ec('td');
let el4ntd8 = eo('td','V6bff'+iivRZ4);
text(member.role);
ec('td');
let el2t12v = eo('td','F2Sff'+iivRZ4);
text(member.createdBy.name);
ec('td');
let el5AiC9 = eo('td','Jy7ff'+iivRZ4);
let cmphxrC = this._lc('cxRjuMzxS', {parent:component,parentTop:projectLayout,props:{timestamp:member.createdAt.timestamp},insideLoop:true,index:"" +iivRZ4});
ec('td');
let ela0Xa1 = eo('td','ZFFff'+iivRZ4);
let cndFsuG = component.project.is.higherAuthority;
this.setState('stoyd1E', cndFsuG);
if (cndFsuG) { 
let elgCiDF = eo('button','yQHff'+iivRZ4,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(member, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let eluhCez = eo('i','KS4ff'+iivRZ4,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elgCiDF;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Dismiss Member')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndFhUx = component.openAddMember;
this.setState('strdj7K', cndFhUx);
if (cndFhUx) { 
component.addMemberModal = this._lc('cV3ncqid0', {parent:component,events:{onclose:function(e) {let $el = this; component.openAddMember = null}},content:(flkModal) => {let elFA1gH = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addNewMember($el)}]});

                if (! elFA1gH.formHandler) {
                    window.cfrmdlr = elFA1gH.formHandler = new FormHandler(elFA1gH, component);
                } else {
                    window.cfrmdlr = elFA1gH.formHandler;
                }
            let cmpoHYW = this._lc('c1bpQDvaH', {parent:component,parentTop:flkModal,props:{lazyLoading:true,remoteSearch:true,except:component.exceptMembers,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Member',query:'username'},state:'strdj7K'});
let elTdvsw = eo('div',null,null,`class`,`m-t-1 text-center`);
let elBconl = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Member'},state:'strdj7K'});
}let cndEBSH = component.confirmDelete;
this.setState('stfvgfR', cndEBSH);
if (cndEBSH) { 
let cmph9nX = this._lc('cMcml9_Lj', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stfvgfR'});
}
                    this.isReadyToGo();
                }
        });