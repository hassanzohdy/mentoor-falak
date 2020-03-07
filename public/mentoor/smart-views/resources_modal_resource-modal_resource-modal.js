_Component({
                selector: 'resource-modal',
                c: 'ResourceModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['heading','submit','resourceType','project','record','isValidForm','isSending','type'],
                children: {cHlgNDUWs:'flk-mdb-checkbox',cOlfMVCPp:'flk-image-input',cqhuvv8o0:'flk-file-input',ceDnLkbFP:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('ceDnLkbFP', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elkLZv3 = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elkLZv3.formHandler) {
                    window.cfrmdlr = elkLZv3.formHandler = new FormHandler(elkLZv3, component);
                } else {
                    window.cfrmdlr = elkLZv3.formHandler;
                }
            let elAnwWO = ev('input',null,null, eventListeners, {oninput:[function(e) {component.resourceType = this.value;}]},`value`,`${fval(component.resourceType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elAnwWO.value = fval(component.resourceType);
let cndLKCQ = component.project;
this.setState('stAPoYp', cndLKCQ);
let cnd629r = ['attachment', 'pdf'].includes(component.resourceType);
this.setState('stzUftn', cnd629r);
let cndI4PD = component.resourceType == 'email';
this.setState('sttqVVk', cndI4PD);
let cndJVPQ = component.resourceType == 'ftp';
this.setState('st3vTRz', cndJVPQ);
let cnd3Bqe = component.resourceType == 'website';
this.setState('st1POwE', cnd3Bqe);
let cndVXfe = component.resourceType == 'youtube';
this.setState('st_R48H', cndVXfe);
let cndM2xd = component.resourceType == 'link';
this.setState('staOWMK', cndM2xd);
if (cndLKCQ) { 
let elq0JEs = ev('input','vl5f',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elq0JEs.value = fval(component.project.id);
}let elueKFU = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`title`) })}`);
let elz8WHa = eo('label',null,null,`for`,`title`);
text(trans('Resource Title'));
let elPf8qa = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eleeqn4 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`title`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Resource Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eleeqn4.value = fval(component.record.title);
let cndAAiY = elkLZv3.formHandler.getError(`title`);
this.setState('st8irif', cndAAiY);
if (cndAAiY) { 
let elFiq0t = eo('div','4Pif',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`title`));
ec('div');
}ec('div');
let elrhXhh = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`description`) })}`);
let elxGEfW = eo('label',null,null,`for`,`description`);
text(trans('Description'));
ec('label');
let elfkfUq = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elfkfUq.value = fval(component.record.description);
ec('textarea');
ec('div');
let elkMXQe = eo('div',null,null,`class`,`pl-2`);
let cmpkWzy = this._lc('cHlgNDUWs', {parent:component,parentTop:flkModal,props:{checked:component.record.pinned},events:{onchange:function(e) {let $el = this; component.record.pinned = $el.checked}},boolAttrs:{checked:component.record.pinned},attrs:{name:`${(`pinned`).toInputName()}`,value:1,label:'Pin Resource'}});
ec('div');
let cndDKyr = component.resourceType == 'image';
this.setState('stSeJdm', cndDKyr);
let cnd_UoZ = cnd629r;
this.setState('stgvqqi', cnd_UoZ);
let cnd1fSE = cndI4PD;
this.setState('stLMWYv', cnd1fSE);
let cndcGQU = cndJVPQ;
this.setState('stq3AxU', cndcGQU);
let cndDvpm = cnd3Bqe;
this.setState('strAU58', cndDvpm);
let cndOAcU = cndVXfe;
this.setState('stbnDf9', cndOAcU);
let cndaTFz = cndM2xd;
this.setState('stKqBhC', cndaTFz);
if (cndDKyr) { 
let cmpPY_R = this._lc('cOlfMVCPp', {parent:component,parentTop:flkModal,props:{src:component.record.attachment,required:true},attrs:{src:`${component.record.attachment}`,name:`${(`attachment`).toInputName()}`,label:'Resource Image',id:'attachment'},state:'stSeJdm'});
}else if (cnd_UoZ) { 
let elC_w1i = eo('div',null,null,`class`,`m-t-2`);
let cmpPefp = this._lc('cqhuvv8o0', {parent:component,parentTop:flkModal,props:{accept:component.type == 'pdf' ? 'pdf' : null},content:(flkFileInput) => {let el850v6 = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let eliWxYW = eo('strong',null,null,`class`,`ml-2`);
text(`Upload ${ component.type == 'pdf' ? 'PDF File' : 'Attachment' }`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold'},state:'stgvqqi'});
ec('div');
}else if (cnd1fSE) { 
let elKj0hY = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.email.url`) })}`);
let elzAKzB = eo('label',null,null,`for`,`settings-email-url`);
text(trans('Webmail Url'));
let elXUM15 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el5sCP8 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.email.url`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.email.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.url', ''))}`,`name`,`${(`settings.email.url`).toInputName()}`,`placeholder`,`${trans(`Webmail Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-url`);
el5sCP8.value = fval(Object.get(component.record, 'settings.email.url', ''));
let cndk2qj = elkLZv3.formHandler.getError(`settings.email.url`);
this.setState('stJ5JF8', cndk2qj);
if (cndk2qj) { 
let elmXbyN = eo('div','frOf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.email.url`));
ec('div');
}ec('div');
let elis0dO = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.email.email`) })}`);
let elbSP3p = eo('label',null,null,`for`,`settings-email-email`);
text(trans('Email Address'));
let elewrLl = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3ijVk = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.email.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elkLZv3.formHandler.addError(`settings.email.email`, 'email', trans('invalid-email-address'));}return elkLZv3.formHandler.removeError(`settings.email.email`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.email', ''))}`,`name`,`${(`settings.email.email`).toInputName()}`,`placeholder`,`${trans(`Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-email-email`);
el3ijVk.value = fval(Object.get(component.record, 'settings.email.email', ''));
let cnd430y = elkLZv3.formHandler.getError(`settings.email.email`);
this.setState('stu5icE', cnd430y);
if (cnd430y) { 
let eliqIp5 = eo('div','1Zqf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.email.email`));
ec('div');
}ec('div');
let elQHyCY = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.email.password`) })}`);
let elS8K7e = eo('label',null,null,`for`,`settings-email-password`);
text(trans('Email Password'));
let elktKia = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elzOVQX = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.email.password`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.email.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.password', ''))}`,`name`,`${(`settings.email.password`).toInputName()}`,`placeholder`,`${trans(`Email Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-password`);
elzOVQX.value = fval(Object.get(component.record, 'settings.email.password', ''));
let cndXcBw = elkLZv3.formHandler.getError(`settings.email.password`);
this.setState('stIJL0W', cndXcBw);
if (cndXcBw) { 
let elocPgU = eo('div','7Mqf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.email.password`));
ec('div');
}ec('div');
}else if (cndcGQU) { 
let elqZh1h = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.ftp.host`) })}`);
let el_5NMt = eo('label',null,null,`for`,`settings-ftp-host`);
text(trans('FTP Host'));
let elGQnxV = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elAfPEK = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.host', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.ftp.host`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.ftp.host`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.host', ''))}`,`name`,`${(`settings.ftp.host`).toInputName()}`,`placeholder`,`${trans(`FTP Host`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-host`);
elAfPEK.value = fval(Object.get(component.record, 'settings.ftp.host', ''));
let cndwi77 = elkLZv3.formHandler.getError(`settings.ftp.host`);
this.setState('stj5wQv', cndwi77);
if (cndwi77) { 
let elayMLA = eo('div','AMtf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.ftp.host`));
ec('div');
}ec('div');
let eloc9xU = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.ftp.username`) })}`);
let elwicAb = eo('label',null,null,`for`,`settings-ftp-username`);
text(trans('FTP Username'));
let eloxu9u = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eli1d_c = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.ftp.username`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.ftp.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.username', ''))}`,`name`,`${(`settings.ftp.username`).toInputName()}`,`placeholder`,`${trans(`FTP Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-username`);
eli1d_c.value = fval(Object.get(component.record, 'settings.ftp.username', ''));
let cnd5W3g = elkLZv3.formHandler.getError(`settings.ftp.username`);
this.setState('stwLN2q', cnd5W3g);
if (cnd5W3g) { 
let el6hUbX = eo('div','6Whf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.ftp.username`));
ec('div');
}ec('div');
let elxWWcr = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.ftp.password`) })}`);
let eluzbx8 = eo('label',null,null,`for`,`settings-ftp-password`);
text(trans('FTP Password'));
let eleaJR4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMfVJ1 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.ftp.password`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.ftp.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.password', ''))}`,`name`,`${(`settings.ftp.password`).toInputName()}`,`placeholder`,`${trans(`FTP Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-password`);
elMfVJ1.value = fval(Object.get(component.record, 'settings.ftp.password', ''));
let cndf39a = elkLZv3.formHandler.getError(`settings.ftp.password`);
this.setState('stgTYsD', cndf39a);
if (cndf39a) { 
let elXN0pW = eo('div','ITdf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.ftp.password`));
ec('div');
}ec('div');
let elGD_Hp = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.ftp.protocol`) })}`);
let elaeqwP = eo('label',null,null,`for`,`settings-ftp-protocol`);
text(trans('FTP Port'));
let el6UYrr = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elRU22_ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.port', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.ftp.protocol`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.ftp.protocol`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.port', ''))}`,`name`,`${(`settings.ftp.protocol`).toInputName()}`,`placeholder`,`${trans(`FTP Port`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-protocol`);
elRU22_.value = fval(Object.get(component.record, 'settings.ftp.port', ''));
let cndoHwY = elkLZv3.formHandler.getError(`settings.ftp.protocol`);
this.setState('st2_StC', cndoHwY);
if (cndoHwY) { 
let elH8oQr = eo('div','JdRf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.ftp.protocol`));
ec('div');
}ec('div');
}else if (cndDvpm) { 
let elpun5S = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.website.name`) })}`);
let elELfn3 = eo('label',null,null,`for`,`settings-website-name`);
text(trans('Website Name'));
let elGHz0o = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el85LIS = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.name', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.website.name`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.website.name`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.name', ''))}`,`name`,`${(`settings.website.name`).toInputName()}`,`placeholder`,`${trans(`Website Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-name`);
el85LIS.value = fval(Object.get(component.record, 'settings.website.name', ''));
let cnd2mT5 = elkLZv3.formHandler.getError(`settings.website.name`);
this.setState('st5sVy3', cnd2mT5);
if (cnd2mT5) { 
let elu9YKB = eo('div','xmAf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.website.name`));
ec('div');
}ec('div');
let elcJrMT = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.website.url`) })}`);
let eldYHry = eo('label',null,null,`for`,`settings-website-url`);
text(trans('Website Url'));
let elG1_m0 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elZdKCT = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.website.url`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.website.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.url', ''))}`,`name`,`${(`settings.website.url`).toInputName()}`,`placeholder`,`${trans(`Website Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-url`);
elZdKCT.value = fval(Object.get(component.record, 'settings.website.url', ''));
let cndAn1y = elkLZv3.formHandler.getError(`settings.website.url`);
this.setState('styHpU6', cndAn1y);
if (cndAn1y) { 
let elij4U0 = eo('div','GrWf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.website.url`));
ec('div');
}ec('div');
let el1Iwb2 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.website.username`) })}`);
let elHZ7Gq = eo('label',null,null,`for`,`settings-website-username`);
text(trans('Website Username'));
let eli1qzw = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elIqYr2 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.website.username`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.website.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.username', ''))}`,`name`,`${(`settings.website.username`).toInputName()}`,`placeholder`,`${trans(`Website Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-username`);
elIqYr2.value = fval(Object.get(component.record, 'settings.website.username', ''));
let cndn_Kw = elkLZv3.formHandler.getError(`settings.website.username`);
this.setState('st8rw2h', cndn_Kw);
if (cndn_Kw) { 
let elEtcnJ = eo('div','cCaf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.website.username`));
ec('div');
}ec('div');
let elGL7Dk = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.website.password`) })}`);
let elGEM0h = eo('label',null,null,`for`,`settings-website-password`);
text(trans('Website Password'));
let el0pQnH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqFjFC = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.website.password`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.website.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.password', ''))}`,`name`,`${(`settings.website.password`).toInputName()}`,`placeholder`,`${trans(`Website Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-password`);
elqFjFC.value = fval(Object.get(component.record, 'settings.website.password', ''));
let cndHa2H = elkLZv3.formHandler.getError(`settings.website.password`);
this.setState('stZi8PR', cndHa2H);
if (cndHa2H) { 
let ele3ZVW = eo('div','UDEf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.website.password`));
ec('div');
}ec('div');
}else if (cndOAcU) { 
let elOM0Pg = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.youtube`) })}`);
let eld2LVn = eo('label',null,null,`for`,`settings-youtube`);
text(trans('Add Youtube url'));
let elClv3d = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6rrsd = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.youtube', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.youtube`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.youtube`);}]},`value`,`${fval(Object.get(component.record, 'settings.youtube', ''))}`,`name`,`${(`settings.youtube`).toInputName()}`,`placeholder`,`${trans(`Add Youtube url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-youtube`);
el6rrsd.value = fval(Object.get(component.record, 'settings.youtube', ''));
let cnd97GG = elkLZv3.formHandler.getError(`settings.youtube`);
this.setState('stJFUj6', cnd97GG);
if (cnd97GG) { 
let elVSAGQ = eo('div','G63f',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.youtube`));
ec('div');
}ec('div');
}else if (cndaTFz) { 
let elLj7Na = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elkLZv3.formHandler.getError(`settings.link`) })}`);
let elOivpf = eo('label',null,null,`for`,`settings-link`);
text(trans('Url'));
let el2H1sO = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elVQKUB = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elkLZv3.formHandler.addError(`settings.link`, 'required', trans('validation.required'));}return elkLZv3.formHandler.removeError(`settings.link`);}]},`name`,`${(`settings.link`).toInputName()}`,`placeholder`,`${trans(`Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-link`);
let cndLIh3 = elkLZv3.formHandler.getError(`settings.link`);
this.setState('stoBUxn', cndLIh3);
if (cndLIh3) { 
let elSwYa0 = eo('div','GCBf',null,`class`,`alert alert-danger`);
text(elkLZv3.formHandler.getError(`settings.link`));
ec('div');
}ec('div');
}let elz2TIF = eo('div');
let el8YDfw = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });