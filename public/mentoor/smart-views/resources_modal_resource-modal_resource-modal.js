_Component({
                selector: 'resource-modal',
                c: 'ResourceModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['heading','submit','resourceType','project','record','isValidForm','isSending','type'],
                children: {c6oMUjfhp:'flk-mdb-checkbox',cQxvF2qyj:'flk-image-input',ccI3Ak1w2:'flk-file-input',cnFpcYyEr:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cnFpcYyEr', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let el7ntWT = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! el7ntWT.formHandler) {
                    window.cfrmdlr = el7ntWT.formHandler = new FormHandler(el7ntWT, component);
                } else {
                    window.cfrmdlr = el7ntWT.formHandler;
                }
            let elxWuip = ev('input',null,null, eventListeners, {oninput:[function(e) {component.resourceType = this.value;}]},`value`,`${fval(component.resourceType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elxWuip.value = fval(component.resourceType);
let cnd9v10 = component.project;
this.setState('stZZEtn', cnd9v10);
let cndUJsx = ['attachment', 'pdf'].includes(component.resourceType);
this.setState('stFOeL6', cndUJsx);
let cnd7lbg = component.resourceType == 'email';
this.setState('stg5aEN', cnd7lbg);
let cndQnXs = component.resourceType == 'ftp';
this.setState('stiMY58', cndQnXs);
let cndfcvK = component.resourceType == 'website';
this.setState('stfDFy9', cndfcvK);
let cndj7NK = component.resourceType == 'youtube';
this.setState('st4Ohc6', cndj7NK);
let cndrP3X = component.resourceType == 'link';
this.setState('st2G8xq', cndrP3X);
if (cnd9v10) { 
let elxxayo = ev('input','Dvof',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elxxayo.value = fval(component.project.id);
}let elEywF4 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`title`) })}`);
let elfzZbC = eo('label',null,null,`for`,`title`);
text(trans('Resource Title'));
let elFSY_t = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elChgNR = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`title`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Resource Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elChgNR.value = fval(component.record.title);
let cnd3NyC = el7ntWT.formHandler.getError(`title`);
this.setState('stSJnW2', cnd3NyC);
if (cnd3NyC) { 
let eleOWg8 = eo('div','jwpf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`title`));
ec('div');
}ec('div');
let el6Icyl = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`description`) })}`);
let el2pxyi = eo('label',null,null,`for`,`description`);
text(trans('Description'));
ec('label');
let elRwXpp = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elRwXpp.value = fval(component.record.description);
ec('textarea');
ec('div');
let elBF1UR = eo('div',null,null,`class`,`pl-2`);
let cmpWPYz = this._lc('c6oMUjfhp', {parent:component,parentTop:flkModal,props:{checked:component.record.pinned},events:{onchange:function(e) {let $el = this; component.record.pinned = $el.checked}},boolAttrs:{checked:component.record.pinned},attrs:{name:`${(`pinned`).toInputName()}`,value:1,label:'Pin Resource'}});
ec('div');
let cnd96i4 = component.resourceType == 'image';
this.setState('st823E6', cnd96i4);
let cnd1YA8 = cndUJsx;
this.setState('stWCKyx', cnd1YA8);
let cndwqLu = cnd7lbg;
this.setState('stJSsVJ', cndwqLu);
let cndK3H0 = cndQnXs;
this.setState('stMWvSt', cndK3H0);
let cndLP12 = cndfcvK;
this.setState('stlTD_V', cndLP12);
let cndVE24 = cndj7NK;
this.setState('st1BH1x', cndVE24);
let cndtI0I = cndrP3X;
this.setState('stFISxR', cndtI0I);
if (cnd96i4) { 
let cmpBfgp = this._lc('cQxvF2qyj', {parent:component,parentTop:flkModal,props:{src:component.record.attachment,required:true},attrs:{src:`${component.record.attachment}`,name:`${(`attachment`).toInputName()}`,label:'Resource Image',id:'attachment'},state:'st823E6'});
}else if (cnd1YA8) { 
let elYpjPm = eo('div',null,null,`class`,`m-t-2`);
let cmpsaZ4 = this._lc('ccI3Ak1w2', {parent:component,parentTop:flkModal,props:{accept:component.type == 'pdf' ? 'pdf' : null},content:(flkFileInput) => {let elLKzva = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let el3_InG = eo('strong',null,null,`class`,`ml-2`);
text(`Upload ${ component.type == 'pdf' ? 'PDF File' : 'Attachment' }`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold'},state:'stWCKyx'});
ec('div');
}else if (cndwqLu) { 
let elvMroi = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.email.url`) })}`);
let elt93KT = eo('label',null,null,`for`,`settings-email-url`);
text(trans('Webmail Url'));
let elmTkah = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmDUoQ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.email.url`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.email.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.url', ''))}`,`name`,`${(`settings.email.url`).toInputName()}`,`placeholder`,`${trans(`Webmail Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-url`);
elmDUoQ.value = fval(Object.get(component.record, 'settings.email.url', ''));
let cndAyUp = el7ntWT.formHandler.getError(`settings.email.url`);
this.setState('stjr1hc', cndAyUp);
if (cndAyUp) { 
let elrzUBK = eo('div','ewFf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.email.url`));
ec('div');
}ec('div');
let elHtVus = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.email.email`) })}`);
let elgRU5I = eo('label',null,null,`for`,`settings-email-email`);
text(trans('Email Address'));
let elirICu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljC7bo = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.email.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return el7ntWT.formHandler.addError(`settings.email.email`, 'email', trans('invalid-email-address'));}return el7ntWT.formHandler.removeError(`settings.email.email`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.email', ''))}`,`name`,`${(`settings.email.email`).toInputName()}`,`placeholder`,`${trans(`Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-email-email`);
eljC7bo.value = fval(Object.get(component.record, 'settings.email.email', ''));
let cndscqf = el7ntWT.formHandler.getError(`settings.email.email`);
this.setState('st6MmBA', cndscqf);
if (cndscqf) { 
let elZdUcb = eo('div','8HKf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.email.email`));
ec('div');
}ec('div');
let elp44kn = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.email.password`) })}`);
let eljK3xL = eo('label',null,null,`for`,`settings-email-password`);
text(trans('Email Password'));
let elrbex3 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1bVpo = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.email.password`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.email.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.password', ''))}`,`name`,`${(`settings.email.password`).toInputName()}`,`placeholder`,`${trans(`Email Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-password`);
el1bVpo.value = fval(Object.get(component.record, 'settings.email.password', ''));
let cndv3QK = el7ntWT.formHandler.getError(`settings.email.password`);
this.setState('stWb5cx', cndv3QK);
if (cndv3QK) { 
let elthX3s = eo('div','IzYf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.email.password`));
ec('div');
}ec('div');
}else if (cndK3H0) { 
let elNIEn0 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.ftp.host`) })}`);
let elp4wfF = eo('label',null,null,`for`,`settings-ftp-host`);
text(trans('FTP Host'));
let elQD98D = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljGOsE = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.host', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.ftp.host`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.ftp.host`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.host', ''))}`,`name`,`${(`settings.ftp.host`).toInputName()}`,`placeholder`,`${trans(`FTP Host`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-host`);
eljGOsE.value = fval(Object.get(component.record, 'settings.ftp.host', ''));
let cnd8sPa = el7ntWT.formHandler.getError(`settings.ftp.host`);
this.setState('steLAgh', cnd8sPa);
if (cnd8sPa) { 
let elEaDXn = eo('div','EEEf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.ftp.host`));
ec('div');
}ec('div');
let elMoFSr = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.ftp.username`) })}`);
let elqjbJ_ = eo('label',null,null,`for`,`settings-ftp-username`);
text(trans('FTP Username'));
let elBkmML = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elPn4Pk = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.ftp.username`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.ftp.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.username', ''))}`,`name`,`${(`settings.ftp.username`).toInputName()}`,`placeholder`,`${trans(`FTP Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-username`);
elPn4Pk.value = fval(Object.get(component.record, 'settings.ftp.username', ''));
let cndFcdI = el7ntWT.formHandler.getError(`settings.ftp.username`);
this.setState('stHUOoY', cndFcdI);
if (cndFcdI) { 
let elBCN_0 = eo('div','hZ9f',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.ftp.username`));
ec('div');
}ec('div');
let eluR4vf = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.ftp.password`) })}`);
let elWl1e2 = eo('label',null,null,`for`,`settings-ftp-password`);
text(trans('FTP Password'));
let el_QDSe = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDpHpg = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.ftp.password`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.ftp.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.password', ''))}`,`name`,`${(`settings.ftp.password`).toInputName()}`,`placeholder`,`${trans(`FTP Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-password`);
elDpHpg.value = fval(Object.get(component.record, 'settings.ftp.password', ''));
let cnd6RVO = el7ntWT.formHandler.getError(`settings.ftp.password`);
this.setState('stRgB6C', cnd6RVO);
if (cnd6RVO) { 
let elm15Z2 = eo('div','L_df',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.ftp.password`));
ec('div');
}ec('div');
let elL2vlf = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.ftp.protocol`) })}`);
let elGBhTO = eo('label',null,null,`for`,`settings-ftp-protocol`);
text(trans('FTP Port'));
let elaKt6o = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1IXP6 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.port', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.ftp.protocol`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.ftp.protocol`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.port', ''))}`,`name`,`${(`settings.ftp.protocol`).toInputName()}`,`placeholder`,`${trans(`FTP Port`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-protocol`);
el1IXP6.value = fval(Object.get(component.record, 'settings.ftp.port', ''));
let cndGK2L = el7ntWT.formHandler.getError(`settings.ftp.protocol`);
this.setState('st9uEw9', cndGK2L);
if (cndGK2L) { 
let elDF9Tb = eo('div','Fkgf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.ftp.protocol`));
ec('div');
}ec('div');
}else if (cndLP12) { 
let elRDJdp = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.website.name`) })}`);
let elty6MC = eo('label',null,null,`for`,`settings-website-name`);
text(trans('Website Name'));
let elJAI1N = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elnBfiw = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.name', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.website.name`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.website.name`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.name', ''))}`,`name`,`${(`settings.website.name`).toInputName()}`,`placeholder`,`${trans(`Website Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-name`);
elnBfiw.value = fval(Object.get(component.record, 'settings.website.name', ''));
let cndwUz0 = el7ntWT.formHandler.getError(`settings.website.name`);
this.setState('sttzMSh', cndwUz0);
if (cndwUz0) { 
let elJm8VG = eo('div','mbZf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.website.name`));
ec('div');
}ec('div');
let elHsaw6 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.website.url`) })}`);
let elzwUsr = eo('label',null,null,`for`,`settings-website-url`);
text(trans('Website Url'));
let elrK2Hd = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el3yWmu = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.website.url`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.website.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.url', ''))}`,`name`,`${(`settings.website.url`).toInputName()}`,`placeholder`,`${trans(`Website Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-url`);
el3yWmu.value = fval(Object.get(component.record, 'settings.website.url', ''));
let cndwnhT = el7ntWT.formHandler.getError(`settings.website.url`);
this.setState('stploUW', cndwnhT);
if (cndwnhT) { 
let elumpIu = eo('div','kopf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.website.url`));
ec('div');
}ec('div');
let elw8ieT = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.website.username`) })}`);
let elDGVb5 = eo('label',null,null,`for`,`settings-website-username`);
text(trans('Website Username'));
let elULo2a = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eliLkJl = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.website.username`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.website.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.username', ''))}`,`name`,`${(`settings.website.username`).toInputName()}`,`placeholder`,`${trans(`Website Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-username`);
eliLkJl.value = fval(Object.get(component.record, 'settings.website.username', ''));
let cndxQU7 = el7ntWT.formHandler.getError(`settings.website.username`);
this.setState('stGvMEF', cndxQU7);
if (cndxQU7) { 
let elHDlBr = eo('div','iKWf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.website.username`));
ec('div');
}ec('div');
let elsCXqd = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.website.password`) })}`);
let el8Jji7 = eo('label',null,null,`for`,`settings-website-password`);
text(trans('Website Password'));
let elSJnYi = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elEz1r4 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.website.password`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.website.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.password', ''))}`,`name`,`${(`settings.website.password`).toInputName()}`,`placeholder`,`${trans(`Website Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-password`);
elEz1r4.value = fval(Object.get(component.record, 'settings.website.password', ''));
let cndC779 = el7ntWT.formHandler.getError(`settings.website.password`);
this.setState('stZAVHw', cndC779);
if (cndC779) { 
let elTmKqE = eo('div','ouGf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.website.password`));
ec('div');
}ec('div');
}else if (cndVE24) { 
let elHqRMY = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.youtube`) })}`);
let elBfhCs = eo('label',null,null,`for`,`settings-youtube`);
text(trans('Add Youtube url'));
let elP55WB = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCprml = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.youtube', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.youtube`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.youtube`);}]},`value`,`${fval(Object.get(component.record, 'settings.youtube', ''))}`,`name`,`${(`settings.youtube`).toInputName()}`,`placeholder`,`${trans(`Add Youtube url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-youtube`);
elCprml.value = fval(Object.get(component.record, 'settings.youtube', ''));
let cndKWr5 = el7ntWT.formHandler.getError(`settings.youtube`);
this.setState('st6XSm7', cndKWr5);
if (cndKWr5) { 
let el3_m4C = eo('div','loef',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.youtube`));
ec('div');
}ec('div');
}else if (cndtI0I) { 
let elOQlMK = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!el7ntWT.formHandler.getError(`settings.link`) })}`);
let el3A8Xb = eo('label',null,null,`for`,`settings-link`);
text(trans('Url'));
let elzwyOJ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eldxt3q = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return el7ntWT.formHandler.addError(`settings.link`, 'required', trans('validation.required'));}return el7ntWT.formHandler.removeError(`settings.link`);}]},`name`,`${(`settings.link`).toInputName()}`,`placeholder`,`${trans(`Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-link`);
let cndw1h8 = el7ntWT.formHandler.getError(`settings.link`);
this.setState('stGkHa3', cndw1h8);
if (cndw1h8) { 
let elJpsH5 = eo('div','I_Xf',null,`class`,`alert alert-danger`);
text(el7ntWT.formHandler.getError(`settings.link`));
ec('div');
}ec('div');
}let elKYuuP = eo('div');
let el8fCi0 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });