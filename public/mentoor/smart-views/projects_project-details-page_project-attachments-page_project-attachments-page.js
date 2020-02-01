_Component({
                selector: 'project-attachments-page',
                c: 'ProjectAttachmentsPage', // c for component name
                unique: true, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['project','isLoading','openModal','user','confirmRemoving','modalIsOpened','modalHeading','submit','record','isValidForm','isSending','confirmDelete','remove'],
                children: {c4UvNIRK4:'project-layout',c27UDkbTo:'flk-file-input',csSxu3NNM:'flk-modal',cgj6EI3QU:'flk-alert'},
                render: function (component) {
                    let cmptVCu = this._lc('c4UvNIRK4', {parent:component,props:{project:component.project,isLoading:component.isLoading},content:(projectLayout) => {let elabOk_ = eo('button',null,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('add')}]},`class`,`float-right btn btn-success bold`);
let elyLBTI = eo('i',null,null,`class`,`${fas('plus') + ' mr-1 icon'}`);
ec('i');
let elPfsAx = eo('i',null,null,`class`,`${fas('paperclip') + ' mr-1 icon'}`);
ec('i');
text(`Attachment`);
ec('button');
let el1aulP = eo('h1',null,null,`class`,`m-y-1`);
text(`${ component.project.name } attachments
        (${ component.project.attachments.length })`);
ec('h1');
let elQB3HN = eo('div',null,null,`class`,`table-responsive`);
let elCttaB = eo('table',null,null,`class`,`table table-striped buttoned`);
let elPud4G = eo('thead');
let el0zpid = eo('tr');
let elj0JzD = eo('th');
text(`Attachment`);
ec('th');
let elajeGU = eo('th');
text(`Notes`);
ec('th');
let el3lVop = eo('th');
text(`Uploaded By`);
ec('th');
let elx12Yu = eo('th');
text(`Control`);
ec('th');
ec('tr');
ec('thead');
let elJp8eZ = eo('tbody');
let cnd3u7N = Is.empty(component.project.attachments);
this.setState('st0v0bN', cnd3u7N);
let cndE4iW = !(cnd3u7N);
this.setState('stq8hVS', cndE4iW);
if (cnd3u7N) { 
let elZaf4m = eo('tr','BX_f');
let elSuYDp = eo('td','AoTf',null, 'style', {textAlign:'center'},`colspan`,`4`);
text(`No Attachment Yet`);
ec('td');
ec('tr');
}else { 
for (let index in component.project.attachments) {
let attachment = component.project.attachments[index]; 
 let iiWpLw = 'CB4PYvs' + index;
let elU8_v3 = eo('tr','qRRUM0QLeuXA' + index+iiWpLw);
let elJzW7o = eo('td','8Cvff'+iiWpLw);
let cndfn5J = isImage(attachment.file);
this.setState('stXa9mM', cndfn5J);
if (cndfn5J) { 
let elBwPkf = ev('img','2NGff'+iiWpLw,null,`src`,`${attachment.file}`,`class`,`medium mr-2`,`title`,`${attachment.name}`,`alt`,`${attachment.name}`);
}let el5veg0 = eo('span','okAff'+iiWpLw);
text(attachment.name);
ec('span');
ec('td');
let elIOT8Z = eo('td','12bff'+iiWpLw);
text(attachment.notes || 'N/a');
ec('td');
let elFM5Vz = eo('td','Xi1ff'+iiWpLw);
let elN5ojG = ev('img','tp8ff'+iiWpLw,null,`src`,`${attachment.createdBy.image}`,`class`,`small circle`,`title`,`${attachment.createdBy.name}`,`alt`,`${attachment.createdBy.name}`);
let elWbkt_ = eo('span','JaWff'+iiWpLw,null,`class`,`ml-2`);
text(attachment.createdBy.name);
ec('span');
ec('td');
let ellMAiz = eo('td','PF4ff'+iiWpLw);
let cndRQJ7 = isImage(attachment.file);
this.setState('stQss8x', cndRQJ7);
let cndkUVp = !(cndRQJ7);
this.setState('stBbIxH', cndkUVp);
if (cndRQJ7) { 
let elNvvMd = eo('a','dqNff'+iiWpLw,null,`href`,`${attachment.file}`,`title`,``,`target`,`_blank`,`class`,`btn btn-teal`);
let ele4hz2 = eo('i','2wvff'+iiWpLw,null,`class`,`${fas('eye') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elNvvMd;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Preview Image')}`});
        ;
                    }, 0);                
                }else { 
let elU1wkZ = eo('a','bsPff'+iiWpLw,null,`href`,`${attachment.file}`,`title`,``,`class`,`btn btn-pink`);
let elX14nu = eo('i','0YPff'+iiWpLw,null,`class`,`${fas('cloud-download-alt') + ' icon'}`);
ec('i');
ec('a');

                    setTimeout(function () {
                        let $el = elU1wkZ;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Download Attachment')}`});
        ;
                    }, 0);                
                }let cndirtK = component.project.isHigherAuthority || attachment.createdBy.id == component.user.id;
this.setState('stZNdiO', cndirtK);
if (cndirtK) { 
let el7Umxb = eo('button','vbWff'+iiWpLw,null, eventListeners, {onclick:[function(e) {var $el = this;component.openModal('edit', attachment, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-cyan`);
let elwkBl0 = eo('i','lcnff'+iiWpLw,null,`class`,`${fas('edit') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = el7Umxb;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Edit Attachment')}`});
        ;
                    }, 0);                
                let elv95rP = eo('button','Lr1ff'+iiWpLw,null, eventListeners, {onclick:[function(e) {var $el = this;component.confirmRemoving(attachment, index)}]},`title`,``,`type`,`button`,`class`,`btn btn-danger`);
let elgX2LF = eo('i','w84ff'+iiWpLw,null,`class`,`${fas('trash') + ' icon'}`);
ec('i');
ec('button');

                    setTimeout(function () {
                        let $el = elv95rP;
                        
            true && tippyTooltip($el, {arrow:true,content:`${trans('Delete Attachment')}`});
        ;
                    }, 0);                
                }ec('td');
ec('tr');
}
}ec('tbody');
ec('table');
ec('div');
}});
let cndyDOE = component.modalIsOpened;
this.setState('stfmGL4', cndyDOE);
if (cndyDOE) { 
component.modal = this._lc('csSxu3NNM', {parent:component,props:{heading:component.modalHeading},events:{onclose:function(e) {let $el = this; component.modalIsOpened = null}},content:(flkModal) => {let el6rwwx = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el6rwwx.formHandler) {
                    window.cfrmdlr = el6rwwx.formHandler = new FormHandler(el6rwwx, component);
                } else {
                    window.cfrmdlr = el6rwwx.formHandler;
                }
            let elVAXey = ev('input',null,null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elVAXey.value = fval(component.project.id);
let elO5iEB = eo('div',null,null,`class`,`form-group`);
elO5iEB.cls = {'group-error': !!el6rwwx.formHandler.getError(`name`) };

            for (let className in elO5iEB.cls) {
                elO5iEB.classList.toggle(className, elO5iEB.cls[className]);
            }  
            let elp90BP = eo('label',null,null,`for`,`name`);
text(trans('Attachment Name'));
let elv3k7M = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el0ZqBw = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.name = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el6rwwx.formHandler.addError(`name`, 'required', trans('validation.required'));}return el6rwwx.formHandler.removeError(`name`);}]},`value`,`${fval(component.record.name)}`,`name`,`${(`name`).toInputName()}`,`placeholder`,`${trans(`Attachment Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`name`);
el0ZqBw.value = fval(component.record.name);
let cndXOl7 = el6rwwx.formHandler.getError(`name`);
this.setState('stKLMSz', cndXOl7);
if (cndXOl7) { 
let elH_x22 = eo('div','atzf',null,`class`,`alert alert-danger`);
text(el6rwwx.formHandler.getError(`name`));
ec('div');
}ec('div');
let elgnCcj = eo('div',null,null,`class`,`form-group`);
elgnCcj.cls = {'group-error': !!el6rwwx.formHandler.getError(`notes`) };

            for (let className in elgnCcj.cls) {
                elgnCcj.classList.toggle(className, elgnCcj.cls[className]);
            }  
            let elL1ZC_ = eo('label',null,null,`for`,`notes`);
text(trans('Attachment Notes'));
ec('label');
let elderUe = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.notes = this.value;}]},`value`,`${fval(component.record.notes)}`,`name`,`${(`notes`).toInputName()}`,`placeholder`,`${trans(`Attachment Notes`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`notes`);
elderUe.value = fval(component.record.notes);
ec('textarea');
ec('div');
let cmpWQmm = this._lc('c27UDkbTo', {parent:component,parentTop:flkModal,props:{required:! component.record.id},content:(flkFileInput) => {let elP4r_P = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elNNNPk = eo('strong',null,null,`class`,`ml-1`);
text(`Select`);
ec('strong');
},attrs:{name:`${(`file`).toInputName()}`,class:'btn btn-cyan bold',label:'Attachment'},state:'stfmGL4'});
let elZNc8v = eo('div',null,null,`class`,`m-t-1 text-center`);
let elQppct = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
},attrs:{size:'small'},state:'stfmGL4'});
}let cnd_Usk = component.confirmDelete;
this.setState('st5QFrp', cnd_Usk);
if (cnd_Usk) { 
let cmp4aur = this._lc('cgj6EI3QU', {parent:component,events:{onclose:function(e) {let $el = this; component.confirmDelete = null},onconfirm:function(e) {let $el = this; component.remove()}},state:'st5QFrp'});
}
                    this.isReadyToGo();
                }
        });