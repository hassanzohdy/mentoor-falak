_Component({
                selector: 'resource-modal',
                c: 'ResourceModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['heading','submit','resourceType','project','record','isValidForm','isSending','type'],
                children: {cUtd8NSTY:'flk-mdb-checkbox',cFnR725Vq:'flk-image-input',cZHYU5jCg:'flk-file-input',cQk727MBg:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cQk727MBg', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let eluwDGW = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! eluwDGW.formHandler) {
                    window.cfrmdlr = eluwDGW.formHandler = new FormHandler(eluwDGW, component);
                } else {
                    window.cfrmdlr = eluwDGW.formHandler;
                }
            let elmrWF6 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.resourceType = this.value;}]},`value`,`${fval(component.resourceType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elmrWF6.value = fval(component.resourceType);
let cndRuCZ = component.project;
this.setState('stmoICg', cndRuCZ);
let cndqTka = ['attachment', 'pdf'].includes(component.resourceType);
this.setState('stJ0CVH', cndqTka);
let cndbDIb = component.resourceType == 'email';
this.setState('stZXjLt', cndbDIb);
let cndHMPp = component.resourceType == 'ftp';
this.setState('stLNKl1', cndHMPp);
let cndZNle = component.resourceType == 'website';
this.setState('st5Ng6B', cndZNle);
let cndq1_a = component.resourceType == 'youtube';
this.setState('stATMws', cndq1_a);
let cndt6WY = component.resourceType == 'link';
this.setState('stgppAE', cndt6WY);
if (cndRuCZ) { 
let eleuD5T = ev('input','MB5f',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
eleuD5T.value = fval(component.project.id);
}let elbmuc5 = eo('div',null,null,`class`,`form-group`);
elbmuc5.cls = {'group-error': !!eluwDGW.formHandler.getError(`title`) };

            for (let className in elbmuc5.cls) {
                elbmuc5.classList.toggle(className, elbmuc5.cls[className]);
            }  
            let elWaKKQ = eo('label',null,null,`for`,`title`);
text(trans('Resource Title'));
let elVktNP = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elaqxZG = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`title`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Resource Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elaqxZG.value = fval(component.record.title);
let cnduVBN = eluwDGW.formHandler.getError(`title`);
this.setState('styrE0y', cnduVBN);
if (cnduVBN) { 
let elovrHj = eo('div','4a1f',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`title`));
ec('div');
}ec('div');
let elbiaG2 = eo('div',null,null,`class`,`form-group`);
elbiaG2.cls = {'group-error': !!eluwDGW.formHandler.getError(`description`) };

            for (let className in elbiaG2.cls) {
                elbiaG2.classList.toggle(className, elbiaG2.cls[className]);
            }  
            let elYCjbN = eo('label',null,null,`for`,`description`);
text(trans('Description'));
ec('label');
let elbq2K8 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elbq2K8.value = fval(component.record.description);
ec('textarea');
ec('div');
let el6wfcX = eo('div',null,null,`class`,`pl-2`);
let cmp_w2X = this._lc('cUtd8NSTY', {parent:component,parentTop:flkModal,props:{checked:component.record.pinned},events:{onchange:function(e) {let $el = this; component.record.pinned = $el.checked}},boolAttrs:{checked:component.record.pinned},attrs:{name:`${(`pinned`).toInputName()}`,value:1,label:'Pin Resource'}});
ec('div');
let cndXSkp = component.resourceType == 'image';
this.setState('stnRtR3', cndXSkp);
let cndFG2N = cndqTka;
this.setState('stUxiPL', cndFG2N);
let cnd7HAl = cndbDIb;
this.setState('stivmby', cnd7HAl);
let cndQjUK = cndHMPp;
this.setState('ste1gbE', cndQjUK);
let cndYR3q = cndZNle;
this.setState('stGOMOy', cndYR3q);
let cnd7HSL = cndq1_a;
this.setState('stXvDph', cnd7HSL);
let cndrQPU = cndt6WY;
this.setState('st3uMZD', cndrQPU);
if (cndXSkp) { 
let cmpCvNm = this._lc('cFnR725Vq', {parent:component,parentTop:flkModal,props:{src:component.record.attachment,required:true},attrs:{src:`${component.record.attachment}`,name:`${(`attachment`).toInputName()}`,label:'Resource Image',id:'attachment'},state:'stnRtR3'});
}else if (cndFG2N) { 
let elyGbwe = eo('div',null,null,`class`,`m-t-2`);
let cmpmtyY = this._lc('cZHYU5jCg', {parent:component,parentTop:flkModal,props:{accept:component.type == 'pdf' ? 'pdf' : null},content:(flkFileInput) => {let elLTZaz = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let el2som3 = eo('strong',null,null,`class`,`ml-2`);
text(`Upload ${ component.type == 'pdf' ? 'PDF File' : 'Attachment' }`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold'},state:'stUxiPL'});
ec('div');
}else if (cnd7HAl) { 
let elNLY3d = eo('div',null,null,`class`,`form-group`);
elNLY3d.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.email.url`) };

            for (let className in elNLY3d.cls) {
                elNLY3d.classList.toggle(className, elNLY3d.cls[className]);
            }  
            let elQP8db = eo('label',null,null,`for`,`settings-email-url`);
text(trans('Webmail Url'));
let elhvdJs = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elWVN1P = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.email.url`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.email.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.url', ''))}`,`name`,`${(`settings.email.url`).toInputName()}`,`placeholder`,`${trans(`Webmail Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-url`);
elWVN1P.value = fval(Object.get(component.record, 'settings.email.url', ''));
let cndIVTB = eluwDGW.formHandler.getError(`settings.email.url`);
this.setState('staVJoE', cndIVTB);
if (cndIVTB) { 
let el5gNol = eo('div','Uqmf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.email.url`));
ec('div');
}ec('div');
let elWxJpA = eo('div',null,null,`class`,`form-group`);
elWxJpA.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.email.email`) };

            for (let className in elWxJpA.cls) {
                elWxJpA.classList.toggle(className, elWxJpA.cls[className]);
            }  
            let eliu2vE = eo('label',null,null,`for`,`settings-email-email`);
text(trans('Email Address'));
let elQjVL6 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elr0AIS = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.email.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return eluwDGW.formHandler.addError(`settings.email.email`, 'email', trans('invalid-email-address'));}return eluwDGW.formHandler.removeError(`settings.email.email`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.email', ''))}`,`name`,`${(`settings.email.email`).toInputName()}`,`placeholder`,`${trans(`Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-email-email`);
elr0AIS.value = fval(Object.get(component.record, 'settings.email.email', ''));
let cndmXTN = eluwDGW.formHandler.getError(`settings.email.email`);
this.setState('stx8gqZ', cndmXTN);
if (cndmXTN) { 
let elvtEzM = eo('div','Z6Xf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.email.email`));
ec('div');
}ec('div');
let eleKy3x = eo('div',null,null,`class`,`form-group`);
eleKy3x.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.email.password`) };

            for (let className in eleKy3x.cls) {
                eleKy3x.classList.toggle(className, eleKy3x.cls[className]);
            }  
            let eljKCaD = eo('label',null,null,`for`,`settings-email-password`);
text(trans('Email Password'));
let elLnoJO = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHLMRv = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.email.password`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.email.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.password', ''))}`,`name`,`${(`settings.email.password`).toInputName()}`,`placeholder`,`${trans(`Email Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-password`);
elHLMRv.value = fval(Object.get(component.record, 'settings.email.password', ''));
let cndep5y = eluwDGW.formHandler.getError(`settings.email.password`);
this.setState('stfNDpy', cndep5y);
if (cndep5y) { 
let eleS2Zo = eo('div','WuMf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.email.password`));
ec('div');
}ec('div');
}else if (cndQjUK) { 
let el1w_d5 = eo('div',null,null,`class`,`form-group`);
el1w_d5.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.ftp.host`) };

            for (let className in el1w_d5.cls) {
                el1w_d5.classList.toggle(className, el1w_d5.cls[className]);
            }  
            let elwO09P = eo('label',null,null,`for`,`settings-ftp-host`);
text(trans('FTP Host'));
let elC5LWe = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elErNcb = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.host', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.ftp.host`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.ftp.host`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.host', ''))}`,`name`,`${(`settings.ftp.host`).toInputName()}`,`placeholder`,`${trans(`FTP Host`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-host`);
elErNcb.value = fval(Object.get(component.record, 'settings.ftp.host', ''));
let cndp7Qb = eluwDGW.formHandler.getError(`settings.ftp.host`);
this.setState('st4Oacb', cndp7Qb);
if (cndp7Qb) { 
let elzS5qq = eo('div','Xldf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.ftp.host`));
ec('div');
}ec('div');
let elCCvhr = eo('div',null,null,`class`,`form-group`);
elCCvhr.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.ftp.username`) };

            for (let className in elCCvhr.cls) {
                elCCvhr.classList.toggle(className, elCCvhr.cls[className]);
            }  
            let elq8GBK = eo('label',null,null,`for`,`settings-ftp-username`);
text(trans('FTP Username'));
let elgbdZT = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eluT2hQ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.ftp.username`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.ftp.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.username', ''))}`,`name`,`${(`settings.ftp.username`).toInputName()}`,`placeholder`,`${trans(`FTP Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-username`);
eluT2hQ.value = fval(Object.get(component.record, 'settings.ftp.username', ''));
let cndj3KX = eluwDGW.formHandler.getError(`settings.ftp.username`);
this.setState('st8IXEn', cndj3KX);
if (cndj3KX) { 
let elrvjfL = eo('div','3Bwf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.ftp.username`));
ec('div');
}ec('div');
let elhZvoE = eo('div',null,null,`class`,`form-group`);
elhZvoE.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.ftp.password`) };

            for (let className in elhZvoE.cls) {
                elhZvoE.classList.toggle(className, elhZvoE.cls[className]);
            }  
            let eli5tWE = eo('label',null,null,`for`,`settings-ftp-password`);
text(trans('FTP Password'));
let elMCNbA = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elbvCjt = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.ftp.password`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.ftp.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.password', ''))}`,`name`,`${(`settings.ftp.password`).toInputName()}`,`placeholder`,`${trans(`FTP Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-password`);
elbvCjt.value = fval(Object.get(component.record, 'settings.ftp.password', ''));
let cndRE6W = eluwDGW.formHandler.getError(`settings.ftp.password`);
this.setState('stYTjdJ', cndRE6W);
if (cndRE6W) { 
let el2UcBp = eo('div','v1ef',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.ftp.password`));
ec('div');
}ec('div');
let elQ6zJP = eo('div',null,null,`class`,`form-group`);
elQ6zJP.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.ftp.protocol`) };

            for (let className in elQ6zJP.cls) {
                elQ6zJP.classList.toggle(className, elQ6zJP.cls[className]);
            }  
            let elI4Liu = eo('label',null,null,`for`,`settings-ftp-protocol`);
text(trans('FTP Port'));
let el61Bsj = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elFTwVl = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.port', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.ftp.protocol`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.ftp.protocol`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.port', ''))}`,`name`,`${(`settings.ftp.protocol`).toInputName()}`,`placeholder`,`${trans(`FTP Port`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-protocol`);
elFTwVl.value = fval(Object.get(component.record, 'settings.ftp.port', ''));
let cnd_qME = eluwDGW.formHandler.getError(`settings.ftp.protocol`);
this.setState('stNIWcU', cnd_qME);
if (cnd_qME) { 
let el9cQI1 = eo('div','4URf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.ftp.protocol`));
ec('div');
}ec('div');
}else if (cndYR3q) { 
let elnPqhR = eo('div',null,null,`class`,`form-group`);
elnPqhR.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.website.name`) };

            for (let className in elnPqhR.cls) {
                elnPqhR.classList.toggle(className, elnPqhR.cls[className]);
            }  
            let elpiWmt = eo('label',null,null,`for`,`settings-website-name`);
text(trans('Website Name'));
let elUWCHH = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eltAFbb = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.name', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.website.name`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.website.name`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.name', ''))}`,`name`,`${(`settings.website.name`).toInputName()}`,`placeholder`,`${trans(`Website Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-name`);
eltAFbb.value = fval(Object.get(component.record, 'settings.website.name', ''));
let cndu4_i = eluwDGW.formHandler.getError(`settings.website.name`);
this.setState('stIaRLR', cndu4_i);
if (cndu4_i) { 
let elULtgX = eo('div','2Nzf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.website.name`));
ec('div');
}ec('div');
let elCtAtg = eo('div',null,null,`class`,`form-group`);
elCtAtg.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.website.url`) };

            for (let className in elCtAtg.cls) {
                elCtAtg.classList.toggle(className, elCtAtg.cls[className]);
            }  
            let elvAigJ = eo('label',null,null,`for`,`settings-website-url`);
text(trans('Website Url'));
let elX2BRv = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el4xWA1 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.website.url`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.website.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.url', ''))}`,`name`,`${(`settings.website.url`).toInputName()}`,`placeholder`,`${trans(`Website Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-url`);
el4xWA1.value = fval(Object.get(component.record, 'settings.website.url', ''));
let cndzBdZ = eluwDGW.formHandler.getError(`settings.website.url`);
this.setState('stSgqH7', cndzBdZ);
if (cndzBdZ) { 
let elGG04p = eo('div','kU3f',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.website.url`));
ec('div');
}ec('div');
let elu6kLW = eo('div',null,null,`class`,`form-group`);
elu6kLW.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.website.username`) };

            for (let className in elu6kLW.cls) {
                elu6kLW.classList.toggle(className, elu6kLW.cls[className]);
            }  
            let eljjLAO = eo('label',null,null,`for`,`settings-website-username`);
text(trans('Website Username'));
let el6i9xm = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elKLpSL = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.website.username`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.website.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.username', ''))}`,`name`,`${(`settings.website.username`).toInputName()}`,`placeholder`,`${trans(`Website Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-username`);
elKLpSL.value = fval(Object.get(component.record, 'settings.website.username', ''));
let cndqp8t = eluwDGW.formHandler.getError(`settings.website.username`);
this.setState('stgVOmI', cndqp8t);
if (cndqp8t) { 
let el6hjS_ = eo('div','fxaf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.website.username`));
ec('div');
}ec('div');
let elEtxi4 = eo('div',null,null,`class`,`form-group`);
elEtxi4.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.website.password`) };

            for (let className in elEtxi4.cls) {
                elEtxi4.classList.toggle(className, elEtxi4.cls[className]);
            }  
            let elDIBhD = eo('label',null,null,`for`,`settings-website-password`);
text(trans('Website Password'));
let elWBR_J = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elb13ps = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.website.password`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.website.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.password', ''))}`,`name`,`${(`settings.website.password`).toInputName()}`,`placeholder`,`${trans(`Website Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-password`);
elb13ps.value = fval(Object.get(component.record, 'settings.website.password', ''));
let cndR2Tm = eluwDGW.formHandler.getError(`settings.website.password`);
this.setState('st8LgP6', cndR2Tm);
if (cndR2Tm) { 
let eleyGk6 = eo('div','M_if',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.website.password`));
ec('div');
}ec('div');
}else if (cnd7HSL) { 
let elVSiZg = eo('div',null,null,`class`,`form-group`);
elVSiZg.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.youtube`) };

            for (let className in elVSiZg.cls) {
                elVSiZg.classList.toggle(className, elVSiZg.cls[className]);
            }  
            let elWzhEw = eo('label',null,null,`for`,`settings-youtube`);
text(trans('Add Youtube url'));
let elQeEZk = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elSINbX = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.youtube', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.youtube`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.youtube`);}]},`value`,`${fval(Object.get(component.record, 'settings.youtube', ''))}`,`name`,`${(`settings.youtube`).toInputName()}`,`placeholder`,`${trans(`Add Youtube url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-youtube`);
elSINbX.value = fval(Object.get(component.record, 'settings.youtube', ''));
let cndZGT4 = eluwDGW.formHandler.getError(`settings.youtube`);
this.setState('stM31Fc', cndZGT4);
if (cndZGT4) { 
let elB7bxq = eo('div','qCbf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.youtube`));
ec('div');
}ec('div');
}else if (cndrQPU) { 
let elTl_1l = eo('div',null,null,`class`,`form-group`);
elTl_1l.cls = {'group-error': !!eluwDGW.formHandler.getError(`settings.link`) };

            for (let className in elTl_1l.cls) {
                elTl_1l.classList.toggle(className, elTl_1l.cls[className]);
            }  
            let elE1B2N = eo('label',null,null,`for`,`settings-link`);
text(trans('Url'));
let elLwlvy = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elmHLVA = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return eluwDGW.formHandler.addError(`settings.link`, 'required', trans('validation.required'));}return eluwDGW.formHandler.removeError(`settings.link`);}]},`name`,`${(`settings.link`).toInputName()}`,`placeholder`,`${trans(`Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-link`);
let cndzexe = eluwDGW.formHandler.getError(`settings.link`);
this.setState('st_BZdR', cndzexe);
if (cndzexe) { 
let el_dyl0 = eo('div','UJtf',null,`class`,`alert alert-danger`);
text(eluwDGW.formHandler.getError(`settings.link`));
ec('div');
}ec('div');
}let el2nVkK = eo('div');
let elaZa33 = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });