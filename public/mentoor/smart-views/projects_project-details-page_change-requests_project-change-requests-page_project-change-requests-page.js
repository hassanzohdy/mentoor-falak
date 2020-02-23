_Component({
                selector: 'project-change-requests-page',
                c: 'ProjectChangeRequestsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','changeRequestTypes','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {c53Cp3SgE:'project-layout',cAsqcrqPZ:'flk-datepicker',ccr2Uazzx:'flk-dropdown-list',cUUM0MJwt:'flk-modal',cccNiBKNe:'flk-alert'},
                render: function (component) {
                    let cmpDzZg = this._lc('c53Cp3SgE', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let eln3uSN = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elX1AFC = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
text(`Change-request`);
ec('button');
let elxHLyc = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } Change requests
        (${ Object.get(component.project.changeRequests, 'length', '') })`);
ec('h1');
let elykLGn = eo('table',null,null,`class`,`table table-striped buttoned`);
let elamTSu = eo('thead');
let elPEaHW = eo('tr');
let elcrRFk = eo('th');
text(`Title`);
ec('th');
let elePYzT = eo('th');
text(`Request Date`);
ec('th');
let elxvOQW = eo('th');
text(`Request Type`);
ec('th');
let elqaMzm = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let el_kbhD = eo('tbody');
let cndNxWU = Is.empty(component.project.changeRequests);
this.setState('stqv1OL', cndNxWU);
let cndq1mb = !(cndNxWU);
this.setState('styvyna', cndq1mb);
if (cndNxWU) { 
let elyIXzD = eo('tr','tqdf');
let elr_928 = eo('td','e5Mf',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Change requests Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.changeRequests) {
let record = component.project.changeRequests[index]; 
 let ii7ul7 = record.id+ index;
let elP113a = eo('tr','rXYQr4ecjIPZ' + index+ii7ul7);
let elAeRKT = eo('td','itoff'+ii7ul7);
let el3esK1 = eo('a','iTlff'+ii7ul7,null,`href`,`${URLS.project(component.project, 'change-requests', record)}`);
text(record.title);
ec('a');
ec('td');
let elNYmGu = eo('td','R_kff'+ii7ul7);
text(record.requestDate);
ec('td');
let el8hwWf = eo('td','xgqff'+ii7ul7,null,`class`,`bold`);
text(component.changeRequestTypes[record.type]);
ec('td');
let el0fzAE = eo('td','io4ff'+ii7ul7);
let ele0CQE = eo('button','xYsff'+ii7ul7,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elX5ork = eo('i','weLff'+ii7ul7,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = ele0CQE;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Change-request')}`});
        ;
                    }, 20);                
                let elK610n = eo('button','zxvff'+ii7ul7,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(record, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elj5mK6 = eo('i','izYff'+ii7ul7,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elK610n;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Change-request')}`});
        ;
                    }, 20);                
                ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
}});
let cndPYCG = component.modalIsOpened;
this.setState('stT33qt', cndPYCG);
if (cndPYCG) { 
component.modal = this._lc('cUUM0MJwt', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let elaRzTp = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elaRzTp.formHandler) {
                    window.cfrmdlr = elaRzTp.formHandler = new FormHandler(elaRzTp, component);
                } else {
                    window.cfrmdlr = elaRzTp.formHandler;
                }
            let elsjmxc = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elsjmxc.value = fval(component.project.id);
let elvuO7m = eo('div',null,null,`class`,`form-group`);
elvuO7m.cls = {'group-error': !!elaRzTp.formHandler.getError(`title`) };

            for (let className in elvuO7m.cls) {
                elvuO7m.classList.toggle(className, elvuO7m.cls[className]);
            }  
            let elIhDJb = eo('label',null,null,`for`,`title`);
text(trans('Change request Title'));
let elTP8_8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el4Rqwl = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elaRzTp.formHandler.addError(`title`, 'required', trans('validation.required'));}return elaRzTp.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Change request Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el4Rqwl.value = fval(component.record.title);
let cndvrz2 = elaRzTp.formHandler.getError(`title`);
this.setState('stJxYia', cndvrz2);
if (cndvrz2) { 
let elXvlST = eo('div','HZrf',null,`class`,`alert alert-danger`);
text(elaRzTp.formHandler.getError(`title`));
ec('div');
}ec('div');
let elO1aOD = eo('div',null,null,`class`,`form-group`);
elO1aOD.cls = {'group-error': !!elaRzTp.formHandler.getError(`description`) };

            for (let className in elO1aOD.cls) {
                elO1aOD.classList.toggle(className, elO1aOD.cls[className]);
            }  
            let elySlSu = eo('label',null,null,`for`,`description`);
text(trans('Change request Description (Markdown Support)'));
let eltELwj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRYQNG = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elaRzTp.formHandler.addError(`description`, 'required', trans('validation.required'));}return elaRzTp.formHandler.removeError(`description`);}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Change request Description (Markdown Support)`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elRYQNG.value = fval(component.record.description);
ec('textarea');
let cndfAxt = elaRzTp.formHandler.getError(`description`);
this.setState('st2HbGR', cndfAxt);
if (cndfAxt) { 
let eltD5rN = eo('div','nhlf',null,`class`,`alert alert-danger`);
text(elaRzTp.formHandler.getError(`description`));
ec('div');
}ec('div');
let cmpJrdq = this._lc('cAsqcrqPZ', {parent:component,parentTop:flkModal,props:{value:component.record.requestDate,dateTime:true},attrs:{name:`${(`requestDate`).toInputName()}`,required:'',label:'Request Date',class:'form-control'},state:'stT33qt'});
let cmpTZ3v = this._lc('ccr2Uazzx', {parent:component,parentTop:flkModal,props:{required:true,value:component.record.type,items:component.changeRequestTypes},attrs:{name:`${(`type`).toInputName()}`,label:'Change Request Type'},state:'stT33qt'});
let elP6iZl = eo('div',null,null,`class`,`m-t-1 text-center`);
let eloviHb = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stT33qt'});
}let cnd842w = component.confirmDelete;
this.setState('stJAbBI', cnd842w);
if (cnd842w) { 
let cmpbdZ1 = this._lc('cccNiBKNe', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'stJAbBI'});
}
                    this.isReadyToGo();
                }
        });