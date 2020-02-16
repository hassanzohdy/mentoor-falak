_Component({
                selector: 'resource-modal',
                c: 'ResourceModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['heading','submit','resourceType','project','record','isValidForm','isSending','type'],
                children: {cktf8mNFt:'flk-mdb-checkbox',cFAPEnV69:'flk-image-input',cDwQqkTQu:'flk-file-input',cMxWzwtWx:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cMxWzwtWx', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let el7XXC5 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7XXC5.formHandler) {
                    window.cfrmdlr = el7XXC5.formHandler = new FormHandler(el7XXC5, component);
                } else {
                    window.cfrmdlr = el7XXC5.formHandler;
                }
            let elfKpOy = ev('input',null,null, eventListeners, {oninput:[function(e) {component.resourceType = this.value;}]},`value`,`${fval(component.resourceType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elfKpOy.value = fval(component.resourceType);
let cndovLu = component.project;
this.setState('stu_Ipw', cndovLu);
let cndaCYN = ['attachment', 'pdf'].includes(component.resourceType);
this.setState('stJX_wQ', cndaCYN);
let cndX0YP = component.resourceType == 'email';
this.setState('stWH05l', cndX0YP);
let cndQJns = component.resourceType == 'ftp';
this.setState('stw_XgT', cndQJns);
let cnd4C8h = component.resourceType == 'website';
this.setState('stFsluj', cnd4C8h);
let cndCB3K = component.resourceType == 'youtube';
this.setState('stbvzV8', cndCB3K);
let cndpjgl = component.resourceType == 'link';
this.setState('stuAp0Z', cndpjgl);
if (cndovLu) { 
let elg_Qns = ev('input','3cIf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elg_Qns.value = fval(component.project.id);
}let elPNHKR = eo('div',null,null,`class`,`form-group`);
elPNHKR.cls = {'group-error': !!el7XXC5.formHandler.getError(`title`) };

            for (let className in elPNHKR.cls) {
                elPNHKR.classList.toggle(className, elPNHKR.cls[className]);
            }  
            let el5082w = eo('label',null,null,`for`,`title`);
text(trans('Resource Title'));
let elKErCa = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elO8zp6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`title`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Resource Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elO8zp6.value = fval(component.record.title);
let cndoZsY = el7XXC5.formHandler.getError(`title`);
this.setState('stJYHuz', cndoZsY);
if (cndoZsY) { 
let els_VeQ = eo('div','a0sf',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`title`));
ec('div');
}ec('div');
let elz6ysH = eo('div',null,null,`class`,`form-group`);
elz6ysH.cls = {'group-error': !!el7XXC5.formHandler.getError(`description`) };

            for (let className in elz6ysH.cls) {
                elz6ysH.classList.toggle(className, elz6ysH.cls[className]);
            }  
            let elLTZFG = eo('label',null,null,`for`,`description`);
text(trans('Description'));
ec('label');
let elOrlhl = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elOrlhl.value = fval(component.record.description);
ec('textarea');
ec('div');
let elxMIrm = eo('div',null,null,`class`,`pl-2`);
let cmpis14 = this._lc('cktf8mNFt', {parent:component,parentTop:flkModal,props:{checked:component.record.pinned},events:{onchange:function(e) {let $el = this; component.record.pinned = $el.checked}},boolAttrs:{checked:component.record.pinned},attrs:{name:`${(`pinned`).toInputName()}`,value:1,label:'Pin Resource'}});
ec('div');
let cndFETR = component.resourceType == 'image';
this.setState('st_f30q', cndFETR);
let cndhGNX = cndaCYN;
this.setState('stgBhzW', cndhGNX);
let cndL8fc = cndX0YP;
this.setState('st6G4Bz', cndL8fc);
let cndqaYx = cndQJns;
this.setState('stTy6XI', cndqaYx);
let cndYjP_ = cnd4C8h;
this.setState('stSSaCr', cndYjP_);
let cndygWm = cndCB3K;
this.setState('st1vJX7', cndygWm);
let cndMh62 = cndpjgl;
this.setState('stDuLQO', cndMh62);
if (cndFETR) { 
let cmpItKv = this._lc('cFAPEnV69', {parent:component,parentTop:flkModal,props:{src:component.record.attachment,required:true},attrs:{src:`${component.record.attachment}`,name:`${(`attachment`).toInputName()}`,label:'Resource Image',id:'attachment'},state:'st_f30q'});
}else if (cndhGNX) { 
let elECsj1 = eo('div',null,null,`class`,`m-t-2`);
let cmpBd3M = this._lc('cDwQqkTQu', {parent:component,parentTop:flkModal,props:{accept:component.type == 'pdf' ? 'pdf' : null},content:(flkFileInput) => {let elkJIzY = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elOC3d4 = eo('strong',null,null,`class`,`ml-2`);
text(`Upload ${ component.type == 'pdf' ? 'PDF File' : 'Attachment' }`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold'},state:'stgBhzW'});
ec('div');
}else if (cndL8fc) { 
let elMxFX1 = eo('div',null,null,`class`,`form-group`);
elMxFX1.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.email.url`) };

            for (let className in elMxFX1.cls) {
                elMxFX1.classList.toggle(className, elMxFX1.cls[className]);
            }  
            let elHz6Uk = eo('label',null,null,`for`,`settings-email-url`);
text(trans('Webmail Url'));
let elfpFbO = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRN92g = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.email.url`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.email.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.url', ''))}`,`name`,`${(`settings.email.url`).toInputName()}`,`placeholder`,`${trans(`Webmail Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-url`);
elRN92g.value = fval(Object.get(component.record, 'settings.email.url', ''));
let cndA713 = el7XXC5.formHandler.getError(`settings.email.url`);
this.setState('stzQfIy', cndA713);
if (cndA713) { 
let elVq3N5 = eo('div','5juf',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.email.url`));
ec('div');
}ec('div');
let elddzy8 = eo('div',null,null,`class`,`form-group`);
elddzy8.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.email.email`) };

            for (let className in elddzy8.cls) {
                elddzy8.classList.toggle(className, elddzy8.cls[className]);
            }  
            let els66iC = eo('label',null,null,`for`,`settings-email-email`);
text(trans('Email Address'));
let el2OqL6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el5_Htz = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.email.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el7XXC5.formHandler.addError(`settings.email.email`, 'email', trans('invalid-email-address'));}return el7XXC5.formHandler.removeError(`settings.email.email`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.email', ''))}`,`name`,`${(`settings.email.email`).toInputName()}`,`placeholder`,`${trans(`Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-email-email`);
el5_Htz.value = fval(Object.get(component.record, 'settings.email.email', ''));
let cndjEFH = el7XXC5.formHandler.getError(`settings.email.email`);
this.setState('ste8C7R', cndjEFH);
if (cndjEFH) { 
let elZ9aeP = eo('div','oo7f',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.email.email`));
ec('div');
}ec('div');
let el8kRY5 = eo('div',null,null,`class`,`form-group`);
el8kRY5.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.email.password`) };

            for (let className in el8kRY5.cls) {
                el8kRY5.classList.toggle(className, el8kRY5.cls[className]);
            }  
            let elwb63X = eo('label',null,null,`for`,`settings-email-password`);
text(trans('Email Password'));
let el2a_wp = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaNfof = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.email.password`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.email.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.password', ''))}`,`name`,`${(`settings.email.password`).toInputName()}`,`placeholder`,`${trans(`Email Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-password`);
elaNfof.value = fval(Object.get(component.record, 'settings.email.password', ''));
let cnd510Z = el7XXC5.formHandler.getError(`settings.email.password`);
this.setState('stM4q1D', cnd510Z);
if (cnd510Z) { 
let elyWhGb = eo('div','L5uf',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.email.password`));
ec('div');
}ec('div');
}else if (cndqaYx) { 
let el6nShj = eo('div',null,null,`class`,`form-group`);
el6nShj.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.ftp.host`) };

            for (let className in el6nShj.cls) {
                el6nShj.classList.toggle(className, el6nShj.cls[className]);
            }  
            let el5eSBv = eo('label',null,null,`for`,`settings-ftp-host`);
text(trans('FTP Host'));
let elzJjfJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3EXyz = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.host', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.ftp.host`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.ftp.host`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.host', ''))}`,`name`,`${(`settings.ftp.host`).toInputName()}`,`placeholder`,`${trans(`FTP Host`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-host`);
el3EXyz.value = fval(Object.get(component.record, 'settings.ftp.host', ''));
let cndhX7i = el7XXC5.formHandler.getError(`settings.ftp.host`);
this.setState('stRQCcQ', cndhX7i);
if (cndhX7i) { 
let elJvgrK = eo('div','j7gf',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.ftp.host`));
ec('div');
}ec('div');
let elrAG55 = eo('div',null,null,`class`,`form-group`);
elrAG55.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.ftp.username`) };

            for (let className in elrAG55.cls) {
                elrAG55.classList.toggle(className, elrAG55.cls[className]);
            }  
            let elghiq5 = eo('label',null,null,`for`,`settings-ftp-username`);
text(trans('FTP Username'));
let elQ6wVA = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elomimX = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.ftp.username`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.ftp.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.username', ''))}`,`name`,`${(`settings.ftp.username`).toInputName()}`,`placeholder`,`${trans(`FTP Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-username`);
elomimX.value = fval(Object.get(component.record, 'settings.ftp.username', ''));
let cndzwpP = el7XXC5.formHandler.getError(`settings.ftp.username`);
this.setState('stEGrYE', cndzwpP);
if (cndzwpP) { 
let elJWQnW = eo('div','Tx4f',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.ftp.username`));
ec('div');
}ec('div');
let el0dFM_ = eo('div',null,null,`class`,`form-group`);
el0dFM_.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.ftp.password`) };

            for (let className in el0dFM_.cls) {
                el0dFM_.classList.toggle(className, el0dFM_.cls[className]);
            }  
            let elZGOKt = eo('label',null,null,`for`,`settings-ftp-password`);
text(trans('FTP Password'));
let elPk6mu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eldLUCL = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.ftp.password`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.ftp.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.password', ''))}`,`name`,`${(`settings.ftp.password`).toInputName()}`,`placeholder`,`${trans(`FTP Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-password`);
eldLUCL.value = fval(Object.get(component.record, 'settings.ftp.password', ''));
let cndfKVU = el7XXC5.formHandler.getError(`settings.ftp.password`);
this.setState('stEwh_1', cndfKVU);
if (cndfKVU) { 
let elaLmiY = eo('div','t_xf',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.ftp.password`));
ec('div');
}ec('div');
let el3ijnZ = eo('div',null,null,`class`,`form-group`);
el3ijnZ.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.ftp.protocol`) };

            for (let className in el3ijnZ.cls) {
                el3ijnZ.classList.toggle(className, el3ijnZ.cls[className]);
            }  
            let elau9ln = eo('label',null,null,`for`,`settings-ftp-protocol`);
text(trans('FTP Port'));
let elIa42H = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZ0yWb = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.port', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.ftp.protocol`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.ftp.protocol`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.port', ''))}`,`name`,`${(`settings.ftp.protocol`).toInputName()}`,`placeholder`,`${trans(`FTP Port`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-protocol`);
elZ0yWb.value = fval(Object.get(component.record, 'settings.ftp.port', ''));
let cndgPxP = el7XXC5.formHandler.getError(`settings.ftp.protocol`);
this.setState('stM_JDR', cndgPxP);
if (cndgPxP) { 
let elMF2kk = eo('div','VG0f',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.ftp.protocol`));
ec('div');
}ec('div');
}else if (cndYjP_) { 
let elRVien = eo('div',null,null,`class`,`form-group`);
elRVien.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.website.name`) };

            for (let className in elRVien.cls) {
                elRVien.classList.toggle(className, elRVien.cls[className]);
            }  
            let elW_K7o = eo('label',null,null,`for`,`settings-website-name`);
text(trans('Website Name'));
let elMpoSm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJS4qn = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.name', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.website.name`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.website.name`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.name', ''))}`,`name`,`${(`settings.website.name`).toInputName()}`,`placeholder`,`${trans(`Website Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-name`);
elJS4qn.value = fval(Object.get(component.record, 'settings.website.name', ''));
let cndicXZ = el7XXC5.formHandler.getError(`settings.website.name`);
this.setState('stk4niT', cndicXZ);
if (cndicXZ) { 
let elrLl6P = eo('div','jMZf',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.website.name`));
ec('div');
}ec('div');
let elUAbux = eo('div',null,null,`class`,`form-group`);
elUAbux.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.website.url`) };

            for (let className in elUAbux.cls) {
                elUAbux.classList.toggle(className, elUAbux.cls[className]);
            }  
            let elaUF9m = eo('label',null,null,`for`,`settings-website-url`);
text(trans('Website Url'));
let elsOIeP = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2jnO_ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.website.url`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.website.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.url', ''))}`,`name`,`${(`settings.website.url`).toInputName()}`,`placeholder`,`${trans(`Website Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-url`);
el2jnO_.value = fval(Object.get(component.record, 'settings.website.url', ''));
let cnd6g7P = el7XXC5.formHandler.getError(`settings.website.url`);
this.setState('stWDaGs', cnd6g7P);
if (cnd6g7P) { 
let elZjyKV = eo('div','W2Af',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.website.url`));
ec('div');
}ec('div');
let ell4taC = eo('div',null,null,`class`,`form-group`);
ell4taC.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.website.username`) };

            for (let className in ell4taC.cls) {
                ell4taC.classList.toggle(className, ell4taC.cls[className]);
            }  
            let elN8sb5 = eo('label',null,null,`for`,`settings-website-username`);
text(trans('Website Username'));
let elKT6QX = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaGefp = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.website.username`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.website.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.username', ''))}`,`name`,`${(`settings.website.username`).toInputName()}`,`placeholder`,`${trans(`Website Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-username`);
elaGefp.value = fval(Object.get(component.record, 'settings.website.username', ''));
let cnd4VMB = el7XXC5.formHandler.getError(`settings.website.username`);
this.setState('stphO0b', cnd4VMB);
if (cnd4VMB) { 
let el8GZ90 = eo('div','4I7f',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.website.username`));
ec('div');
}ec('div');
let el3Gkxa = eo('div',null,null,`class`,`form-group`);
el3Gkxa.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.website.password`) };

            for (let className in el3Gkxa.cls) {
                el3Gkxa.classList.toggle(className, el3Gkxa.cls[className]);
            }  
            let elOwFaY = eo('label',null,null,`for`,`settings-website-password`);
text(trans('Website Password'));
let elo2fhV = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el8AoDY = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.website.password`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.website.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.password', ''))}`,`name`,`${(`settings.website.password`).toInputName()}`,`placeholder`,`${trans(`Website Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-password`);
el8AoDY.value = fval(Object.get(component.record, 'settings.website.password', ''));
let cndxQuS = el7XXC5.formHandler.getError(`settings.website.password`);
this.setState('stlnxnY', cndxQuS);
if (cndxQuS) { 
let elFtsdF = eo('div','pkGf',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.website.password`));
ec('div');
}ec('div');
}else if (cndygWm) { 
let ele6a30 = eo('div',null,null,`class`,`form-group`);
ele6a30.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.youtube`) };

            for (let className in ele6a30.cls) {
                ele6a30.classList.toggle(className, ele6a30.cls[className]);
            }  
            let elo1bdS = eo('label',null,null,`for`,`settings-youtube`);
text(trans('Add Youtube url'));
let elI0TE2 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elNQoM_ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.youtube', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.youtube`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.youtube`);}]},`value`,`${fval(Object.get(component.record, 'settings.youtube', ''))}`,`name`,`${(`settings.youtube`).toInputName()}`,`placeholder`,`${trans(`Add Youtube url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-youtube`);
elNQoM_.value = fval(Object.get(component.record, 'settings.youtube', ''));
let cnd6vaN = el7XXC5.formHandler.getError(`settings.youtube`);
this.setState('stfAahZ', cnd6vaN);
if (cnd6vaN) { 
let elAAHkQ = eo('div','Aggf',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.youtube`));
ec('div');
}ec('div');
}else if (cndMh62) { 
let elBRr0V = eo('div',null,null,`class`,`form-group`);
elBRr0V.cls = {'group-error': !!el7XXC5.formHandler.getError(`settings.link`) };

            for (let className in elBRr0V.cls) {
                elBRr0V.classList.toggle(className, elBRr0V.cls[className]);
            }  
            let el3shov = eo('label',null,null,`for`,`settings-link`);
text(trans('Url'));
let elNelBm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3fZxN = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7XXC5.formHandler.addError(`settings.link`, 'required', trans('validation.required'));}return el7XXC5.formHandler.removeError(`settings.link`);}]},`name`,`${(`settings.link`).toInputName()}`,`placeholder`,`${trans(`Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-link`);
let cndZRcN = el7XXC5.formHandler.getError(`settings.link`);
this.setState('stAJbLk', cndZRcN);
if (cndZRcN) { 
let elzpx7o = eo('div','Xjxf',null,`class`,`alert alert-danger`);
text(el7XXC5.formHandler.getError(`settings.link`));
ec('div');
}ec('div');
}let el1xgUY = eo('div');
let el1MAdW = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });