_Component({
                selector: 'resource-modal',
                c: 'ResourceModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['heading','submit','resourceType','project','record','isValidForm','isSending','type'],
                children: {cD3wzR7yE:'flk-mdb-checkbox',crlYqd1mv:'flk-image-input',cl0d6mb1z:'flk-file-input',c2MkprKlf:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('c2MkprKlf', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elSwpTl = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elSwpTl.formHandler) {
                    window.cfrmdlr = elSwpTl.formHandler = new FormHandler(elSwpTl, component);
                } else {
                    window.cfrmdlr = elSwpTl.formHandler;
                }
            let elmNv3U = ev('input',null,null, eventListeners, {oninput:[function(e) {component.resourceType = this.value;}]},`value`,`${fval(component.resourceType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elmNv3U.value = fval(component.resourceType);
let cndDBSU = component.project;
this.setState('stV66a1', cndDBSU);
let cnd4dmT = ['attachment', 'pdf'].includes(component.resourceType);
this.setState('stSdTfO', cnd4dmT);
let cndDkIk = component.resourceType == 'email';
this.setState('stCQdKF', cndDkIk);
let cndKGiD = component.resourceType == 'ftp';
this.setState('stm317m', cndKGiD);
let cnddE_V = component.resourceType == 'website';
this.setState('stxEjVA', cnddE_V);
let cndHzsG = component.resourceType == 'youtube';
this.setState('stJSpit', cndHzsG);
let cndhvJR = component.resourceType == 'link';
this.setState('st7fQK8', cndhvJR);
if (cndDBSU) { 
let eluAhqh = ev('input','tNjf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eluAhqh.value = fval(component.project.id);
}let elhbgpO = eo('div',null,null,`class`,`form-group`);
elhbgpO.cls = {'group-error': !!elSwpTl.formHandler.getError(`title`) };

            for (let className in elhbgpO.cls) {
                elhbgpO.classList.toggle(className, elhbgpO.cls[className]);
            }  
            let el0kOAP = eo('label',null,null,`for`,`title`);
text(trans('Resource Title'));
let elSJSb8 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elO_SUf = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`title`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Resource Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elO_SUf.value = fval(component.record.title);
let cndrfFy = elSwpTl.formHandler.getError(`title`);
this.setState('st0ywm9', cndrfFy);
if (cndrfFy) { 
let elZGy5P = eo('div','Vm8f',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`title`));
ec('div');
}ec('div');
let eltIQqn = eo('div',null,null,`class`,`form-group`);
eltIQqn.cls = {'group-error': !!elSwpTl.formHandler.getError(`description`) };

            for (let className in eltIQqn.cls) {
                eltIQqn.classList.toggle(className, eltIQqn.cls[className]);
            }  
            let elfVggf = eo('label',null,null,`for`,`description`);
text(trans('Description'));
ec('label');
let elbxS1G = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elbxS1G.value = fval(component.record.description);
ec('textarea');
ec('div');
let elV2f9X = eo('div',null,null,`class`,`pl-2`);
let cmpbH3B = this._lc('cD3wzR7yE', {parent:component,parentTop:flkModal,props:{checked:component.record.pinned},events:{onchange:function(e) {let $el = this; component.record.pinned = $el.checked}},boolAttrs:{checked:component.record.pinned},attrs:{name:`${(`pinned`).toInputName()}`,value:1,label:'Pin Resource'}});
ec('div');
let cndq0lq = component.resourceType == 'image';
this.setState('stDfCjl', cndq0lq);
let cnd1Wgh = cnd4dmT;
this.setState('stHV7Hy', cnd1Wgh);
let cndNCXX = cndDkIk;
this.setState('strFUoc', cndNCXX);
let cndAzTk = cndKGiD;
this.setState('stfC5bb', cndAzTk);
let cndtwlB = cnddE_V;
this.setState('stBlTzi', cndtwlB);
let cndy2Pf = cndHzsG;
this.setState('stw9UBB', cndy2Pf);
let cndoswK = cndhvJR;
this.setState('stP3boW', cndoswK);
if (cndq0lq) { 
let cmpronD = this._lc('crlYqd1mv', {parent:component,parentTop:flkModal,props:{src:component.record.attachment,required:true},attrs:{src:`${component.record.attachment}`,name:`${(`attachment`).toInputName()}`,label:'Resource Image',id:'attachment'},state:'stDfCjl'});
}else if (cnd1Wgh) { 
let elDHR8t = eo('div',null,null,`class`,`m-t-2`);
let cmpvO1o = this._lc('cl0d6mb1z', {parent:component,parentTop:flkModal,props:{accept:component.type == 'pdf' ? 'pdf' : null},content:(flkFileInput) => {let elFV1_D = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elpcGEp = eo('strong',null,null,`class`,`ml-2`);
text(`Upload ${ component.type == 'pdf' ? 'PDF File' : 'Attachment' }`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold'},state:'stHV7Hy'});
ec('div');
}else if (cndNCXX) { 
let eln3SIp = eo('div',null,null,`class`,`form-group`);
eln3SIp.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.email.url`) };

            for (let className in eln3SIp.cls) {
                eln3SIp.classList.toggle(className, eln3SIp.cls[className]);
            }  
            let elWTIjA = eo('label',null,null,`for`,`settings-email-url`);
text(trans('Webmail Url'));
let elOSZ7c = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzpnWc = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.email.url`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.email.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.url', ''))}`,`name`,`${(`settings.email.url`).toInputName()}`,`placeholder`,`${trans(`Webmail Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-url`);
elzpnWc.value = fval(Object.get(component.record, 'settings.email.url', ''));
let cnd3SVq = elSwpTl.formHandler.getError(`settings.email.url`);
this.setState('stTiHAM', cnd3SVq);
if (cnd3SVq) { 
let elVSSfQ = eo('div','pa0f',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.email.url`));
ec('div');
}ec('div');
let elGJbXB = eo('div',null,null,`class`,`form-group`);
elGJbXB.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.email.email`) };

            for (let className in elGJbXB.cls) {
                elGJbXB.classList.toggle(className, elGJbXB.cls[className]);
            }  
            let eln3X5W = eo('label',null,null,`for`,`settings-email-email`);
text(trans('Email Address'));
let elwqHXH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elInnLM = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.email.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elSwpTl.formHandler.addError(`settings.email.email`, 'email', trans('invalid-email-address'));}return elSwpTl.formHandler.removeError(`settings.email.email`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.email', ''))}`,`name`,`${(`settings.email.email`).toInputName()}`,`placeholder`,`${trans(`Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-email-email`);
elInnLM.value = fval(Object.get(component.record, 'settings.email.email', ''));
let cndzBFq = elSwpTl.formHandler.getError(`settings.email.email`);
this.setState('stReVCA', cndzBFq);
if (cndzBFq) { 
let elD75W9 = eo('div','S7Wf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.email.email`));
ec('div');
}ec('div');
let elSs9Jk = eo('div',null,null,`class`,`form-group`);
elSs9Jk.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.email.password`) };

            for (let className in elSs9Jk.cls) {
                elSs9Jk.classList.toggle(className, elSs9Jk.cls[className]);
            }  
            let elatq2R = eo('label',null,null,`for`,`settings-email-password`);
text(trans('Email Password'));
let elPW5j4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el_O5Bc = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.email.password`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.email.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.password', ''))}`,`name`,`${(`settings.email.password`).toInputName()}`,`placeholder`,`${trans(`Email Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-password`);
el_O5Bc.value = fval(Object.get(component.record, 'settings.email.password', ''));
let cndaO3z = elSwpTl.formHandler.getError(`settings.email.password`);
this.setState('stpHyb6', cndaO3z);
if (cndaO3z) { 
let elRFEjS = eo('div','K65f',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.email.password`));
ec('div');
}ec('div');
}else if (cndAzTk) { 
let elq5qzT = eo('div',null,null,`class`,`form-group`);
elq5qzT.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.ftp.host`) };

            for (let className in elq5qzT.cls) {
                elq5qzT.classList.toggle(className, elq5qzT.cls[className]);
            }  
            let el2Ns7S = eo('label',null,null,`for`,`settings-ftp-host`);
text(trans('FTP Host'));
let elq1HAu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eli49xv = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.host', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.ftp.host`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.ftp.host`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.host', ''))}`,`name`,`${(`settings.ftp.host`).toInputName()}`,`placeholder`,`${trans(`FTP Host`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-host`);
eli49xv.value = fval(Object.get(component.record, 'settings.ftp.host', ''));
let cndEo0S = elSwpTl.formHandler.getError(`settings.ftp.host`);
this.setState('stSjkcp', cndEo0S);
if (cndEo0S) { 
let el2hByp = eo('div','CjXf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.ftp.host`));
ec('div');
}ec('div');
let elCF9s6 = eo('div',null,null,`class`,`form-group`);
elCF9s6.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.ftp.username`) };

            for (let className in elCF9s6.cls) {
                elCF9s6.classList.toggle(className, elCF9s6.cls[className]);
            }  
            let el5a_JQ = eo('label',null,null,`for`,`settings-ftp-username`);
text(trans('FTP Username'));
let elWZtpI = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elUCcLW = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.ftp.username`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.ftp.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.username', ''))}`,`name`,`${(`settings.ftp.username`).toInputName()}`,`placeholder`,`${trans(`FTP Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-username`);
elUCcLW.value = fval(Object.get(component.record, 'settings.ftp.username', ''));
let cnd_qo0 = elSwpTl.formHandler.getError(`settings.ftp.username`);
this.setState('st0y9yW', cnd_qo0);
if (cnd_qo0) { 
let elOplyA = eo('div','jFDf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.ftp.username`));
ec('div');
}ec('div');
let elIbJPg = eo('div',null,null,`class`,`form-group`);
elIbJPg.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.ftp.password`) };

            for (let className in elIbJPg.cls) {
                elIbJPg.classList.toggle(className, elIbJPg.cls[className]);
            }  
            let elx4LmD = eo('label',null,null,`for`,`settings-ftp-password`);
text(trans('FTP Password'));
let elbekZG = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRCTfl = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.ftp.password`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.ftp.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.password', ''))}`,`name`,`${(`settings.ftp.password`).toInputName()}`,`placeholder`,`${trans(`FTP Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-password`);
elRCTfl.value = fval(Object.get(component.record, 'settings.ftp.password', ''));
let cndy8oL = elSwpTl.formHandler.getError(`settings.ftp.password`);
this.setState('stqXXp8', cndy8oL);
if (cndy8oL) { 
let elN8Xkv = eo('div','ixRf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.ftp.password`));
ec('div');
}ec('div');
let el9hJQ4 = eo('div',null,null,`class`,`form-group`);
el9hJQ4.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.ftp.protocol`) };

            for (let className in el9hJQ4.cls) {
                el9hJQ4.classList.toggle(className, el9hJQ4.cls[className]);
            }  
            let el8WaKx = eo('label',null,null,`for`,`settings-ftp-protocol`);
text(trans('FTP Port'));
let elWrZWt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elyGDuf = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.port', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.ftp.protocol`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.ftp.protocol`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.port', ''))}`,`name`,`${(`settings.ftp.protocol`).toInputName()}`,`placeholder`,`${trans(`FTP Port`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-protocol`);
elyGDuf.value = fval(Object.get(component.record, 'settings.ftp.port', ''));
let cndEvWa = elSwpTl.formHandler.getError(`settings.ftp.protocol`);
this.setState('stK04hc', cndEvWa);
if (cndEvWa) { 
let elmNgR3 = eo('div','x1Zf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.ftp.protocol`));
ec('div');
}ec('div');
}else if (cndtwlB) { 
let elwv_uy = eo('div',null,null,`class`,`form-group`);
elwv_uy.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.website.name`) };

            for (let className in elwv_uy.cls) {
                elwv_uy.classList.toggle(className, elwv_uy.cls[className]);
            }  
            let elKdKjI = eo('label',null,null,`for`,`settings-website-name`);
text(trans('Website Name'));
let elyjDdp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eleFezf = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.name', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.website.name`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.website.name`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.name', ''))}`,`name`,`${(`settings.website.name`).toInputName()}`,`placeholder`,`${trans(`Website Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-name`);
eleFezf.value = fval(Object.get(component.record, 'settings.website.name', ''));
let cnd8iJz = elSwpTl.formHandler.getError(`settings.website.name`);
this.setState('stpdfLQ', cnd8iJz);
if (cnd8iJz) { 
let el1__tf = eo('div','ezdf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.website.name`));
ec('div');
}ec('div');
let elG432h = eo('div',null,null,`class`,`form-group`);
elG432h.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.website.url`) };

            for (let className in elG432h.cls) {
                elG432h.classList.toggle(className, elG432h.cls[className]);
            }  
            let elW5MQl = eo('label',null,null,`for`,`settings-website-url`);
text(trans('Website Url'));
let elK5Z_U = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elTe5ns = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.website.url`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.website.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.url', ''))}`,`name`,`${(`settings.website.url`).toInputName()}`,`placeholder`,`${trans(`Website Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-url`);
elTe5ns.value = fval(Object.get(component.record, 'settings.website.url', ''));
let cnddttb = elSwpTl.formHandler.getError(`settings.website.url`);
this.setState('stfyGWH', cnddttb);
if (cnddttb) { 
let els_pH3 = eo('div','vaQf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.website.url`));
ec('div');
}ec('div');
let elWnU77 = eo('div',null,null,`class`,`form-group`);
elWnU77.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.website.username`) };

            for (let className in elWnU77.cls) {
                elWnU77.classList.toggle(className, elWnU77.cls[className]);
            }  
            let elQV30A = eo('label',null,null,`for`,`settings-website-username`);
text(trans('Website Username'));
let elrch1w = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elW7M4N = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.website.username`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.website.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.username', ''))}`,`name`,`${(`settings.website.username`).toInputName()}`,`placeholder`,`${trans(`Website Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-username`);
elW7M4N.value = fval(Object.get(component.record, 'settings.website.username', ''));
let cndjbib = elSwpTl.formHandler.getError(`settings.website.username`);
this.setState('stL9kDg', cndjbib);
if (cndjbib) { 
let elblrvC = eo('div','WLYf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.website.username`));
ec('div');
}ec('div');
let elyF6oN = eo('div',null,null,`class`,`form-group`);
elyF6oN.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.website.password`) };

            for (let className in elyF6oN.cls) {
                elyF6oN.classList.toggle(className, elyF6oN.cls[className]);
            }  
            let elU0WBf = eo('label',null,null,`for`,`settings-website-password`);
text(trans('Website Password'));
let eltiQZl = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elL6wNZ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.website.password`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.website.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.password', ''))}`,`name`,`${(`settings.website.password`).toInputName()}`,`placeholder`,`${trans(`Website Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-password`);
elL6wNZ.value = fval(Object.get(component.record, 'settings.website.password', ''));
let cndTnOt = elSwpTl.formHandler.getError(`settings.website.password`);
this.setState('stptFwT', cndTnOt);
if (cndTnOt) { 
let el_OmJk = eo('div','YDuf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.website.password`));
ec('div');
}ec('div');
}else if (cndy2Pf) { 
let elsZ0n1 = eo('div',null,null,`class`,`form-group`);
elsZ0n1.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.youtube`) };

            for (let className in elsZ0n1.cls) {
                elsZ0n1.classList.toggle(className, elsZ0n1.cls[className]);
            }  
            let elQY4FD = eo('label',null,null,`for`,`settings-youtube`);
text(trans('Add Youtube url'));
let elr4zg4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elNUIZm = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.youtube', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.youtube`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.youtube`);}]},`value`,`${fval(Object.get(component.record, 'settings.youtube', ''))}`,`name`,`${(`settings.youtube`).toInputName()}`,`placeholder`,`${trans(`Add Youtube url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-youtube`);
elNUIZm.value = fval(Object.get(component.record, 'settings.youtube', ''));
let cndJUYa = elSwpTl.formHandler.getError(`settings.youtube`);
this.setState('stUU5sT', cndJUYa);
if (cndJUYa) { 
let elO5VE_ = eo('div','nKqf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.youtube`));
ec('div');
}ec('div');
}else if (cndoswK) { 
let elDRdt0 = eo('div',null,null,`class`,`form-group`);
elDRdt0.cls = {'group-error': !!elSwpTl.formHandler.getError(`settings.link`) };

            for (let className in elDRdt0.cls) {
                elDRdt0.classList.toggle(className, elDRdt0.cls[className]);
            }  
            let el0Mdn8 = eo('label',null,null,`for`,`settings-link`);
text(trans('Url'));
let elA0TJW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elcCiJm = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elSwpTl.formHandler.addError(`settings.link`, 'required', trans('validation.required'));}return elSwpTl.formHandler.removeError(`settings.link`);}]},`name`,`${(`settings.link`).toInputName()}`,`placeholder`,`${trans(`Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-link`);
let cndpkYG = elSwpTl.formHandler.getError(`settings.link`);
this.setState('stlL3do', cndpkYG);
if (cndpkYG) { 
let elj1qAk = eo('div','pzqf',null,`class`,`alert alert-danger`);
text(elSwpTl.formHandler.getError(`settings.link`));
ec('div');
}ec('div');
}let elk1CXg = eo('div');
let elGg_Dy = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });