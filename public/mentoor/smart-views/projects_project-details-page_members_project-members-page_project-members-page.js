_Component({
                selector: 'project-members-page',
                c: 'ProjectMembersPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openAddMember','isSending','confirmRemoving','addNewMember','exceptMembers','usersService','mapUser','confirmDelete','remove'],
                children: {cP7ERC8pj:'flk-time-ago',c3kqv59mX:'project-layout',cS_SQZ8yE:'flk-dropdown-list',cVLAJ5JVR:'flk-modal',cWs013Bhz:'flk-alert'},
                render: function (component) {
                    let cmpNqjV = this._lc('c3kqv59mX', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let cnd7Ch4 = component.project.isProjectManager;
this.setState('st378CL', cnd7Ch4);
if (cnd7Ch4) { 
let elLkcYH = eo('button','LQGf',null, eventListeners, {onclick:[function(e) {var $el = this;component.openAddMember = true; component.isSending = false;}]},`class`,`float-right btn bold`);
elLkcYH.cls = {'btn-success': component.project.maxMembers <= component.project.members.length, 'btn-pink': component.project.maxMembers > component.project.members.length};

            for (let className in elLkcYH.cls) {
                elLkcYH.classList.toggle(className, elLkcYH.cls[className]);
            }  
            let elSX52M = eo('i','eBNf',null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Member`);
ec('button');
}let el5qkzx = eo('h1',null,null,`class`,`m-y-1`);
text(`Project members`);
let eleWHgO = eo('span',null,null,`title`,``,`class`,`ml-1`);
text(`(${ component.project.members.length + '/' + component.project.maxVisibleMembers })`);
ec('span');

                    setTimeout(function () {
                        let $el = eleWHgO;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Project members')}`});
        ;
                    }, 20);                
                ec('h1');
let eluUB6k = eo('table',null,null,`class`,`m-t-2 table table-bordered`);
let elgJJu_ = eo('thead');
let elWMNin = eo('tr');
let elBf3qY = eo('th');
text(`Member`);
ec('th');
let el47RWK = eo('th');
text(`Role`);
ec('th');
let ela4rV0 = eo('th');
text(`Added By`);
ec('th');
let elDUi67 = eo('th');
text(`Added At`);
ec('th');
let elnXnR7 = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elw3yad = eo('tbody');
for (let index in component.project.members) {
let member = component.project.members[index]; 
 let ii1uhd = 'd2ggP2b' + index;
let elltZwJ = eo('tr','0ic50mwHHLsv' + index+ii1uhd);
let elT3mGv = eo('td','uLFff'+ii1uhd);
text(member.member.name);
ec('td');
let elbkDdm = eo('td','OfLff'+ii1uhd);
text(member.role);
ec('td');
let elmZlpf = eo('td','f18ff'+ii1uhd);
text(member.createdBy.name);
ec('td');
let elHgqwG = eo('td','fqMff'+ii1uhd);
let cmpqCro = this._lc('cP7ERC8pj', {parent:component,parentTop:projectLayout,props:{timestamp:member.createdAt.timestamp},insideLoop:true,index:"" +ii1uhd});
ec('td');
let elyA7Q_ = eo('td','Wvxff'+ii1uhd);
let cndputD = component.project.is.higherAuthority;
this.setState('st90xVm', cndputD);
if (cndputD) { 
let elastgR = eo('button','7Ahff'+ii1uhd,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(member, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-sm btn-danger`);
let el_jB9A = eo('i','DEfff'+ii1uhd,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elastgR;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Dismiss Member')}`});
        ;
                    }, 20);                
                }ec('td');
ec('tr');
}
ec('tbody');
ec('table');
}});
let cndqyvS = component.openAddMember;
this.setState('stUPiBi', cndqyvS);
if (cndqyvS) { 
component.addMemberModal = this._lc('cVLAJ5JVR', {parent:component,events:{onclose:function(e) {let $el = this; component.openAddMember = null}},content:(flkModal) => {let elYIH8W = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.addNewMember($el)}]});

                if (! elYIH8W.formHandler) {
                    window.cfrmdlr = elYIH8W.formHandler = new FormHandler(elYIH8W, component);
                } else {
                    window.cfrmdlr = elYIH8W.formHandler;
                }
            let cmpDu3b = this._lc('cS_SQZ8yE', {parent:component,parentTop:flkModal,props:{lazyLoading:true,remoteSearch:true,except:component.exceptMembers,service:component.usersService},events:{onmap:function(e) {let $el = this; return component.mapUser(e)}},attrs:{name:`${(`memberId`).toInputName()}`,placeholder:`${trans(`Enter @username to add`)}`,heading:'Member',query:'username'},state:'stUPiBi'});
let elzCJu_ = eo('div',null,null,`class`,`m-t-1 text-center`);
let elSUHKm = eo('button',null,null, boolAttrs, {disabled:component.isSending},`class`,`btn btn-success bold`);
text(`Add`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small',header:'Add New Member'},state:'stUPiBi'});
}let cndlmJu = component.confirmDelete;
this.setState('stQoZHx', cndlmJu);
if (cndlmJu) { 
let cmplb1B = this._lc('cWs013Bhz', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stQoZHx'});
}
                    this.isReadyToGo();
                }
        });