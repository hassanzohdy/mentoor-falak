_Component({
                selector: 'resource-modal',
                c: 'ResourceModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['heading','submit','resourceType','project','record','isValidForm','isSending','type'],
                children: {c8y0A3jtD:'flk-mdb-checkbox',ct7nZYVgg:'flk-image-input',cN_crPiY1:'flk-file-input',cuad_xTY4:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cuad_xTY4', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elXJVDm = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elXJVDm.formHandler) {
                    window.cfrmdlr = elXJVDm.formHandler = new FormHandler(elXJVDm, component);
                } else {
                    window.cfrmdlr = elXJVDm.formHandler;
                }
            let elwH7Ns = ev('input',null,null, eventListeners, {oninput:[function(e) {component.resourceType = this.value;}]},`value`,`${fval(component.resourceType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elwH7Ns.value = fval(component.resourceType);
let cndeIdu = component.project;
this.setState('st7uQdI', cndeIdu);
let cndD3a2 = ['attachment', 'pdf'].includes(component.resourceType);
this.setState('stUrEzp', cndD3a2);
let cnd9Nyi = component.resourceType == 'email';
this.setState('st9cc4V', cnd9Nyi);
let cndfZCT = component.resourceType == 'ftp';
this.setState('stOBrko', cndfZCT);
let cndcf40 = component.resourceType == 'website';
this.setState('stVLkBX', cndcf40);
let cnd3kDJ = component.resourceType == 'youtube';
this.setState('stcuNyG', cnd3kDJ);
let cnd3ZdY = component.resourceType == 'link';
this.setState('stlXsnP', cnd3ZdY);
if (cndeIdu) { 
let elNFh1d = ev('input','sc8f',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elNFh1d.value = fval(component.project.id);
}let elT1zLg = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`title`) })}`);
let el_B05J = eo('label',null,null,`for`,`title`);
text(trans('Resource Title'));
let elbYFoM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el2zdyY = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`title`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Resource Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
el2zdyY.value = fval(component.record.title);
let cndiYnL = elXJVDm.formHandler.getError(`title`);
this.setState('stPkl5M', cndiYnL);
if (cndiYnL) { 
let elz2lzi = eo('div','DF5f',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`title`));
ec('div');
}ec('div');
let elTKlaA = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`description`) })}`);
let elQA0dZ = eo('label',null,null,`for`,`description`);
text(trans('Description'));
ec('label');
let el4lVT1 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
el4lVT1.value = fval(component.record.description);
ec('textarea');
ec('div');
let elDhnaN = eo('div',null,null,`class`,`pl-2`);
let cmpcMbY = this._lc('c8y0A3jtD', {parent:component,parentTop:flkModal,props:{checked:component.record.pinned},events:{onchange:function(e) {let $el = this; component.record.pinned = $el.checked}},boolAttrs:{checked:component.record.pinned},attrs:{name:`${(`pinned`).toInputName()}`,value:1,label:'Pin Resource'}});
ec('div');
let cndfQi7 = component.resourceType == 'image';
this.setState('st4DtJW', cndfQi7);
let cndEmUb = cndD3a2;
this.setState('st3Gi3G', cndEmUb);
let cndkJOy = cnd9Nyi;
this.setState('stbxUt3', cndkJOy);
let cndOStc = cndfZCT;
this.setState('stOFfwE', cndOStc);
let cndrXsy = cndcf40;
this.setState('std4Xbt', cndrXsy);
let cndoDfc = cnd3kDJ;
this.setState('stLLYCV', cndoDfc);
let cndHsnk = cnd3ZdY;
this.setState('stSlOP3', cndHsnk);
if (cndfQi7) { 
let cmpfywg = this._lc('ct7nZYVgg', {parent:component,parentTop:flkModal,props:{src:component.record.attachment,required:true},attrs:{src:`${component.record.attachment}`,name:`${(`attachment`).toInputName()}`,label:'Resource Image',id:'attachment'},state:'st4DtJW'});
}else if (cndEmUb) { 
let elr1U5x = eo('div',null,null,`class`,`m-t-2`);
let cmpjCYH = this._lc('cN_crPiY1', {parent:component,parentTop:flkModal,props:{accept:component.type == 'pdf' ? 'pdf' : null},content:(flkFileInput) => {let el3p05v = eo('i',null,null,`class`,`${fas('cloud-upload-alt')} icon`);
ec('i');
let elWL5aI = eo('strong',null,null,`class`,`ml-2`);
text(`Upload ${ component.type == 'pdf' ? 'PDF File' : 'Attachment' }`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold'},state:'st3Gi3G'});
ec('div');
}else if (cndkJOy) { 
let eljqtPL = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.email.url`) })}`);
let elGK610 = eo('label',null,null,`for`,`settings-email-url`);
text(trans('Webmail Url'));
let elKwBZ6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkhYNC = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.email.url`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.email.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.url', ''))}`,`name`,`${(`settings.email.url`).toInputName()}`,`placeholder`,`${trans(`Webmail Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-url`);
elkhYNC.value = fval(Object.get(component.record, 'settings.email.url', ''));
let cndwmW2 = elXJVDm.formHandler.getError(`settings.email.url`);
this.setState('steytP9', cndwmW2);
if (cndwmW2) { 
let elbAjxJ = eo('div','I8If',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.email.url`));
ec('div');
}ec('div');
let elPung6 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.email.email`) })}`);
let el_T1wW = eo('label',null,null,`for`,`settings-email-email`);
text(trans('Email Address'));
let elnP3QL = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elA33Nq = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.email.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elXJVDm.formHandler.addError(`settings.email.email`, 'email', trans('invalid-email-address'));}return elXJVDm.formHandler.removeError(`settings.email.email`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.email', ''))}`,`name`,`${(`settings.email.email`).toInputName()}`,`placeholder`,`${trans(`Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-email-email`);
elA33Nq.value = fval(Object.get(component.record, 'settings.email.email', ''));
let cnd0bH7 = elXJVDm.formHandler.getError(`settings.email.email`);
this.setState('stgqXr6', cnd0bH7);
if (cnd0bH7) { 
let elORTh8 = eo('div','z7wf',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.email.email`));
ec('div');
}ec('div');
let elgjtD9 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.email.password`) })}`);
let eleQjQ_ = eo('label',null,null,`for`,`settings-email-password`);
text(trans('Email Password'));
let elV4zzn = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elExB3R = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.email.password`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.email.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.password', ''))}`,`name`,`${(`settings.email.password`).toInputName()}`,`placeholder`,`${trans(`Email Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-password`);
elExB3R.value = fval(Object.get(component.record, 'settings.email.password', ''));
let cnda1jM = elXJVDm.formHandler.getError(`settings.email.password`);
this.setState('st_ULhB', cnda1jM);
if (cnda1jM) { 
let elxCvjr = eo('div','I_lf',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.email.password`));
ec('div');
}ec('div');
}else if (cndOStc) { 
let elmN9cK = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.ftp.host`) })}`);
let elMMD1I = eo('label',null,null,`for`,`settings-ftp-host`);
text(trans('FTP Host'));
let elorJ8U = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elpDkXd = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.host', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.ftp.host`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.ftp.host`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.host', ''))}`,`name`,`${(`settings.ftp.host`).toInputName()}`,`placeholder`,`${trans(`FTP Host`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-host`);
elpDkXd.value = fval(Object.get(component.record, 'settings.ftp.host', ''));
let cnd9YIY = elXJVDm.formHandler.getError(`settings.ftp.host`);
this.setState('stsqqBk', cnd9YIY);
if (cnd9YIY) { 
let el7ZoEe = eo('div','Fk0f',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.ftp.host`));
ec('div');
}ec('div');
let elr6VZ3 = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.ftp.username`) })}`);
let eli4obM = eo('label',null,null,`for`,`settings-ftp-username`);
text(trans('FTP Username'));
let elD_TrM = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elCYVP7 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.ftp.username`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.ftp.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.username', ''))}`,`name`,`${(`settings.ftp.username`).toInputName()}`,`placeholder`,`${trans(`FTP Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-username`);
elCYVP7.value = fval(Object.get(component.record, 'settings.ftp.username', ''));
let cndBqgo = elXJVDm.formHandler.getError(`settings.ftp.username`);
this.setState('stZbfGP', cndBqgo);
if (cndBqgo) { 
let el23wWw = eo('div','KG3f',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.ftp.username`));
ec('div');
}ec('div');
let elZQ5Yy = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.ftp.password`) })}`);
let elIEKZn = eo('label',null,null,`for`,`settings-ftp-password`);
text(trans('FTP Password'));
let elNc0SU = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHs65A = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.ftp.password`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.ftp.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.password', ''))}`,`name`,`${(`settings.ftp.password`).toInputName()}`,`placeholder`,`${trans(`FTP Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-password`);
elHs65A.value = fval(Object.get(component.record, 'settings.ftp.password', ''));
let cndjcFx = elXJVDm.formHandler.getError(`settings.ftp.password`);
this.setState('st_EjdR', cndjcFx);
if (cndjcFx) { 
let elk0Iid = eo('div','mlUf',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.ftp.password`));
ec('div');
}ec('div');
let elkxUbv = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.ftp.protocol`) })}`);
let elI6jeA = eo('label',null,null,`for`,`settings-ftp-protocol`);
text(trans('FTP Port'));
let elgOTIj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let ellQstT = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.port', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.ftp.protocol`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.ftp.protocol`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.port', ''))}`,`name`,`${(`settings.ftp.protocol`).toInputName()}`,`placeholder`,`${trans(`FTP Port`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-protocol`);
ellQstT.value = fval(Object.get(component.record, 'settings.ftp.port', ''));
let cndxVMK = elXJVDm.formHandler.getError(`settings.ftp.protocol`);
this.setState('stKfCWF', cndxVMK);
if (cndxVMK) { 
let el8qv5R = eo('div','rR6f',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.ftp.protocol`));
ec('div');
}ec('div');
}else if (cndrXsy) { 
let elj0XPH = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.website.name`) })}`);
let elFv492 = eo('label',null,null,`for`,`settings-website-name`);
text(trans('Website Name'));
let elrMdk6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elH8QKc = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.name', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.website.name`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.website.name`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.name', ''))}`,`name`,`${(`settings.website.name`).toInputName()}`,`placeholder`,`${trans(`Website Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-name`);
elH8QKc.value = fval(Object.get(component.record, 'settings.website.name', ''));
let cndkpeX = elXJVDm.formHandler.getError(`settings.website.name`);
this.setState('stEsDcu', cndkpeX);
if (cndkpeX) { 
let elfG3DJ = eo('div','ExOf',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.website.name`));
ec('div');
}ec('div');
let elxlTCD = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.website.url`) })}`);
let elyddLn = eo('label',null,null,`for`,`settings-website-url`);
text(trans('Website Url'));
let elr4bnr = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elK2idF = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.website.url`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.website.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.url', ''))}`,`name`,`${(`settings.website.url`).toInputName()}`,`placeholder`,`${trans(`Website Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-url`);
elK2idF.value = fval(Object.get(component.record, 'settings.website.url', ''));
let cndJcVX = elXJVDm.formHandler.getError(`settings.website.url`);
this.setState('stDt1kH', cndJcVX);
if (cndJcVX) { 
let eluikn8 = eo('div','Ouvf',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.website.url`));
ec('div');
}ec('div');
let elvRbXz = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.website.username`) })}`);
let el5Xsar = eo('label',null,null,`for`,`settings-website-username`);
text(trans('Website Username'));
let elBxKWd = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elMcNAA = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.website.username`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.website.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.username', ''))}`,`name`,`${(`settings.website.username`).toInputName()}`,`placeholder`,`${trans(`Website Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-username`);
elMcNAA.value = fval(Object.get(component.record, 'settings.website.username', ''));
let cndxdSL = elXJVDm.formHandler.getError(`settings.website.username`);
this.setState('stjQyQx', cndxdSL);
if (cndxdSL) { 
let el9URf0 = eo('div','prdf',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.website.username`));
ec('div');
}ec('div');
let elPy6LE = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.website.password`) })}`);
let eloZaYw = eo('label',null,null,`for`,`settings-website-password`);
text(trans('Website Password'));
let elUjiFz = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elh7LS0 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.website.password`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.website.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.password', ''))}`,`name`,`${(`settings.website.password`).toInputName()}`,`placeholder`,`${trans(`Website Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-password`);
elh7LS0.value = fval(Object.get(component.record, 'settings.website.password', ''));
let cndoD4M = elXJVDm.formHandler.getError(`settings.website.password`);
this.setState('st3tLYr', cndoD4M);
if (cndoD4M) { 
let el7ADc6 = eo('div','PMKf',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.website.password`));
ec('div');
}ec('div');
}else if (cndoDfc) { 
let elNdxjT = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.youtube`) })}`);
let elK4Oei = eo('label',null,null,`for`,`settings-youtube`);
text(trans('Add Youtube url'));
let el5JlGO = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elQ5U37 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.youtube', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.youtube`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.youtube`);}]},`value`,`${fval(Object.get(component.record, 'settings.youtube', ''))}`,`name`,`${(`settings.youtube`).toInputName()}`,`placeholder`,`${trans(`Add Youtube url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-youtube`);
elQ5U37.value = fval(Object.get(component.record, 'settings.youtube', ''));
let cndk93L = elXJVDm.formHandler.getError(`settings.youtube`);
this.setState('st5rniy', cndk93L);
if (cndk93L) { 
let eluVZ0U = eo('div','I6uf',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.youtube`));
ec('div');
}ec('div');
}else if (cndHsnk) { 
let elzaJgG = eo('div',null,null,`class`,`form-group ${cls({'group-error': !!elXJVDm.formHandler.getError(`settings.link`) })}`);
let elDRlYd = eo('label',null,null,`for`,`settings-link`);
text(trans('Url'));
let elpnafC = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elG2AGc = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elXJVDm.formHandler.addError(`settings.link`, 'required', trans('validation.required'));}return elXJVDm.formHandler.removeError(`settings.link`);}]},`name`,`${(`settings.link`).toInputName()}`,`placeholder`,`${trans(`Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-link`);
let cndz0NZ = elXJVDm.formHandler.getError(`settings.link`);
this.setState('stLIZO5', cndz0NZ);
if (cndz0NZ) { 
let elNQpiH = eo('div','_oEf',null,`class`,`alert alert-danger`);
text(elXJVDm.formHandler.getError(`settings.link`));
ec('div');
}ec('div');
}let elJkJsn = eo('div');
let el39UBv = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });