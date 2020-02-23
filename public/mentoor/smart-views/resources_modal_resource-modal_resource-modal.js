_Component({
                selector: 'resource-modal',
                c: 'ResourceModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['heading','submit','resourceType','project','record','isValidForm','isSending','type'],
                children: {c6cX_w_g8:'flk-mdb-checkbox',cR6jL6_3v:'flk-image-input',cTwsg5od7:'flk-file-input',cAOVxBt_q:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('cAOVxBt_q', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elJVWoJ = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elJVWoJ.formHandler) {
                    window.cfrmdlr = elJVWoJ.formHandler = new FormHandler(elJVWoJ, component);
                } else {
                    window.cfrmdlr = elJVWoJ.formHandler;
                }
            let elH_R2B = ev('input',null,null, eventListeners, {oninput:[function(e) {component.resourceType = this.value;}]},`value`,`${fval(component.resourceType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elH_R2B.value = fval(component.resourceType);
let cndW7k_ = component.project;
this.setState('stJPQcA', cndW7k_);
let cndfI9E = ['attachment', 'pdf'].includes(component.resourceType);
this.setState('stEF1nv', cndfI9E);
let cndnx4R = component.resourceType == 'email';
this.setState('stvDsF1', cndnx4R);
let cnd6jRe = component.resourceType == 'ftp';
this.setState('st5fWzt', cnd6jRe);
let cndhPA0 = component.resourceType == 'website';
this.setState('stC3Ncl', cndhPA0);
let cndu0tY = component.resourceType == 'youtube';
this.setState('st4JobK', cndu0tY);
let cndPLLK = component.resourceType == 'link';
this.setState('sthFe69', cndPLLK);
if (cndW7k_) { 
let elWeVuO = ev('input','675f',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elWeVuO.value = fval(component.project.id);
}let elQLolW = eo('div',null,null,`class`,`form-group`);
elQLolW.cls = {'group-error': !!elJVWoJ.formHandler.getError(`title`) };

            for (let className in elQLolW.cls) {
                elQLolW.classList.toggle(className, elQLolW.cls[className]);
            }  
            let elYPW63 = eo('label',null,null,`for`,`title`);
text(trans('Resource Title'));
let elXF66K = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elTzmtP = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`title`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Resource Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
elTzmtP.value = fval(component.record.title);
let cndgOwD = elJVWoJ.formHandler.getError(`title`);
this.setState('stsGxvT', cndgOwD);
if (cndgOwD) { 
let eli1v7N = eo('div','jvLf',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`title`));
ec('div');
}ec('div');
let el_JqVt = eo('div',null,null,`class`,`form-group`);
el_JqVt.cls = {'group-error': !!elJVWoJ.formHandler.getError(`description`) };

            for (let className in el_JqVt.cls) {
                el_JqVt.classList.toggle(className, el_JqVt.cls[className]);
            }  
            let el2KaUX = eo('label',null,null,`for`,`description`);
text(trans('Description'));
ec('label');
let elVSJH4 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elVSJH4.value = fval(component.record.description);
ec('textarea');
ec('div');
let elfTpDV = eo('div',null,null,`class`,`pl-2`);
let cmpVjLC = this._lc('c6cX_w_g8', {parent:component,parentTop:flkModal,props:{checked:component.record.pinned},events:{onchange:function(e) {let $el = this; component.record.pinned = $el.checked}},boolAttrs:{checked:component.record.pinned},attrs:{name:`${(`pinned`).toInputName()}`,value:1,label:'Pin Resource'}});
ec('div');
let cndpCRG = component.resourceType == 'image';
this.setState('stgijyV', cndpCRG);
let cnd_Wyh = cndfI9E;
this.setState('stdNY9U', cnd_Wyh);
let cndKpSM = cndnx4R;
this.setState('stzh8dx', cndKpSM);
let cndyHzK = cnd6jRe;
this.setState('stRlitN', cndyHzK);
let cndFpoQ = cndhPA0;
this.setState('stcU3MN', cndFpoQ);
let cndhpvo = cndu0tY;
this.setState('sty4oPw', cndhpvo);
let cndPW3N = cndPLLK;
this.setState('stjkPAE', cndPW3N);
if (cndpCRG) { 
let cmpfHW2 = this._lc('cR6jL6_3v', {parent:component,parentTop:flkModal,props:{src:component.record.attachment,required:true},attrs:{src:`${component.record.attachment}`,name:`${(`attachment`).toInputName()}`,label:'Resource Image',id:'attachment'},state:'stgijyV'});
}else if (cnd_Wyh) { 
let elV3eCc = eo('div',null,null,`class`,`m-t-2`);
let cmpbKbX = this._lc('cTwsg5od7', {parent:component,parentTop:flkModal,props:{accept:component.type == 'pdf' ? 'pdf' : null},content:(flkFileInput) => {let elFj7lK = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elyWBID = eo('strong',null,null,`class`,`ml-2`);
text(`Upload ${ component.type == 'pdf' ? 'PDF File' : 'Attachment' }`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold'},state:'stdNY9U'});
ec('div');
}else if (cndKpSM) { 
let elcomCM = eo('div',null,null,`class`,`form-group`);
elcomCM.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.email.url`) };

            for (let className in elcomCM.cls) {
                elcomCM.classList.toggle(className, elcomCM.cls[className]);
            }  
            let elBt_HH = eo('label',null,null,`for`,`settings-email-url`);
text(trans('Webmail Url'));
let eltIgIu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elL7ySi = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.email.url`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.email.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.url', ''))}`,`name`,`${(`settings.email.url`).toInputName()}`,`placeholder`,`${trans(`Webmail Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-url`);
elL7ySi.value = fval(Object.get(component.record, 'settings.email.url', ''));
let cndsO3v = elJVWoJ.formHandler.getError(`settings.email.url`);
this.setState('stspmdI', cndsO3v);
if (cndsO3v) { 
let elf0uh5 = eo('div','bmZf',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.email.url`));
ec('div');
}ec('div');
let el68BGj = eo('div',null,null,`class`,`form-group`);
el68BGj.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.email.email`) };

            for (let className in el68BGj.cls) {
                el68BGj.classList.toggle(className, el68BGj.cls[className]);
            }  
            let elSMtMU = eo('label',null,null,`for`,`settings-email-email`);
text(trans('Email Address'));
let elDKxAC = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1uGhD = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.email.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elJVWoJ.formHandler.addError(`settings.email.email`, 'email', trans('invalid-email-address'));}return elJVWoJ.formHandler.removeError(`settings.email.email`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.email', ''))}`,`name`,`${(`settings.email.email`).toInputName()}`,`placeholder`,`${trans(`Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-email-email`);
el1uGhD.value = fval(Object.get(component.record, 'settings.email.email', ''));
let cnd7Hqe = elJVWoJ.formHandler.getError(`settings.email.email`);
this.setState('stSGlyh', cnd7Hqe);
if (cnd7Hqe) { 
let elTc5bG = eo('div','04uf',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.email.email`));
ec('div');
}ec('div');
let eljflrb = eo('div',null,null,`class`,`form-group`);
eljflrb.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.email.password`) };

            for (let className in eljflrb.cls) {
                eljflrb.classList.toggle(className, eljflrb.cls[className]);
            }  
            let elgAq5S = eo('label',null,null,`for`,`settings-email-password`);
text(trans('Email Password'));
let elXv7gc = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJM5JV = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.email.password`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.email.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.password', ''))}`,`name`,`${(`settings.email.password`).toInputName()}`,`placeholder`,`${trans(`Email Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-password`);
elJM5JV.value = fval(Object.get(component.record, 'settings.email.password', ''));
let cndrRkt = elJVWoJ.formHandler.getError(`settings.email.password`);
this.setState('stuT2bi', cndrRkt);
if (cndrRkt) { 
let elZf4oK = eo('div','yIsf',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.email.password`));
ec('div');
}ec('div');
}else if (cndyHzK) { 
let elK9Hcl = eo('div',null,null,`class`,`form-group`);
elK9Hcl.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.ftp.host`) };

            for (let className in elK9Hcl.cls) {
                elK9Hcl.classList.toggle(className, elK9Hcl.cls[className]);
            }  
            let elCodxp = eo('label',null,null,`for`,`settings-ftp-host`);
text(trans('FTP Host'));
let el54016 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elDhfpL = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.host', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.ftp.host`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.ftp.host`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.host', ''))}`,`name`,`${(`settings.ftp.host`).toInputName()}`,`placeholder`,`${trans(`FTP Host`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-host`);
elDhfpL.value = fval(Object.get(component.record, 'settings.ftp.host', ''));
let cnd2U8_ = elJVWoJ.formHandler.getError(`settings.ftp.host`);
this.setState('stY9inU', cnd2U8_);
if (cnd2U8_) { 
let elcb8P5 = eo('div','7rTf',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.ftp.host`));
ec('div');
}ec('div');
let els6IJX = eo('div',null,null,`class`,`form-group`);
els6IJX.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.ftp.username`) };

            for (let className in els6IJX.cls) {
                els6IJX.classList.toggle(className, els6IJX.cls[className]);
            }  
            let el1h_Be = eo('label',null,null,`for`,`settings-ftp-username`);
text(trans('FTP Username'));
let elImTtD = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elilQhr = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.ftp.username`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.ftp.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.username', ''))}`,`name`,`${(`settings.ftp.username`).toInputName()}`,`placeholder`,`${trans(`FTP Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-username`);
elilQhr.value = fval(Object.get(component.record, 'settings.ftp.username', ''));
let cndWaJo = elJVWoJ.formHandler.getError(`settings.ftp.username`);
this.setState('stBXh4Z', cndWaJo);
if (cndWaJo) { 
let elzyOJb = eo('div','z97f',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.ftp.username`));
ec('div');
}ec('div');
let elUYJ1Z = eo('div',null,null,`class`,`form-group`);
elUYJ1Z.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.ftp.password`) };

            for (let className in elUYJ1Z.cls) {
                elUYJ1Z.classList.toggle(className, elUYJ1Z.cls[className]);
            }  
            let elrHdLR = eo('label',null,null,`for`,`settings-ftp-password`);
text(trans('FTP Password'));
let elOenYF = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elPl_If = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.ftp.password`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.ftp.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.password', ''))}`,`name`,`${(`settings.ftp.password`).toInputName()}`,`placeholder`,`${trans(`FTP Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-password`);
elPl_If.value = fval(Object.get(component.record, 'settings.ftp.password', ''));
let cndJy0Q = elJVWoJ.formHandler.getError(`settings.ftp.password`);
this.setState('stWsc4t', cndJy0Q);
if (cndJy0Q) { 
let elsesal = eo('div','m3If',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.ftp.password`));
ec('div');
}ec('div');
let el9xlDn = eo('div',null,null,`class`,`form-group`);
el9xlDn.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.ftp.protocol`) };

            for (let className in el9xlDn.cls) {
                el9xlDn.classList.toggle(className, el9xlDn.cls[className]);
            }  
            let elCyvlg = eo('label',null,null,`for`,`settings-ftp-protocol`);
text(trans('FTP Port'));
let elxO8D0 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elkTkV5 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.port', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.ftp.protocol`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.ftp.protocol`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.port', ''))}`,`name`,`${(`settings.ftp.protocol`).toInputName()}`,`placeholder`,`${trans(`FTP Port`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-protocol`);
elkTkV5.value = fval(Object.get(component.record, 'settings.ftp.port', ''));
let cndXpk0 = elJVWoJ.formHandler.getError(`settings.ftp.protocol`);
this.setState('stoCwfr', cndXpk0);
if (cndXpk0) { 
let elUJIob = eo('div','HJdf',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.ftp.protocol`));
ec('div');
}ec('div');
}else if (cndFpoQ) { 
let el2glTo = eo('div',null,null,`class`,`form-group`);
el2glTo.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.website.name`) };

            for (let className in el2glTo.cls) {
                el2glTo.classList.toggle(className, el2glTo.cls[className]);
            }  
            let eldpEtz = eo('label',null,null,`for`,`settings-website-name`);
text(trans('Website Name'));
let el4hF0r = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elU9Ti5 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.name', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.website.name`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.website.name`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.name', ''))}`,`name`,`${(`settings.website.name`).toInputName()}`,`placeholder`,`${trans(`Website Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-name`);
elU9Ti5.value = fval(Object.get(component.record, 'settings.website.name', ''));
let cndSDIo = elJVWoJ.formHandler.getError(`settings.website.name`);
this.setState('stLbk16', cndSDIo);
if (cndSDIo) { 
let elBFgf1 = eo('div','L88f',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.website.name`));
ec('div');
}ec('div');
let elGk2tT = eo('div',null,null,`class`,`form-group`);
elGk2tT.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.website.url`) };

            for (let className in elGk2tT.cls) {
                elGk2tT.classList.toggle(className, elGk2tT.cls[className]);
            }  
            let elRifxH = eo('label',null,null,`for`,`settings-website-url`);
text(trans('Website Url'));
let elQeErO = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elP22I8 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.website.url`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.website.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.url', ''))}`,`name`,`${(`settings.website.url`).toInputName()}`,`placeholder`,`${trans(`Website Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-url`);
elP22I8.value = fval(Object.get(component.record, 'settings.website.url', ''));
let cnd7UPf = elJVWoJ.formHandler.getError(`settings.website.url`);
this.setState('stCo_6t', cnd7UPf);
if (cnd7UPf) { 
let el1h2iA = eo('div','oxGf',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.website.url`));
ec('div');
}ec('div');
let elifFhT = eo('div',null,null,`class`,`form-group`);
elifFhT.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.website.username`) };

            for (let className in elifFhT.cls) {
                elifFhT.classList.toggle(className, elifFhT.cls[className]);
            }  
            let elLF4nC = eo('label',null,null,`for`,`settings-website-username`);
text(trans('Website Username'));
let el52Gnt = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHQLvU = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.website.username`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.website.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.username', ''))}`,`name`,`${(`settings.website.username`).toInputName()}`,`placeholder`,`${trans(`Website Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-username`);
elHQLvU.value = fval(Object.get(component.record, 'settings.website.username', ''));
let cndyGWq = elJVWoJ.formHandler.getError(`settings.website.username`);
this.setState('stL1kW_', cndyGWq);
if (cndyGWq) { 
let el5Cdoj = eo('div','AnCf',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.website.username`));
ec('div');
}ec('div');
let elhKHJN = eo('div',null,null,`class`,`form-group`);
elhKHJN.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.website.password`) };

            for (let className in elhKHJN.cls) {
                elhKHJN.classList.toggle(className, elhKHJN.cls[className]);
            }  
            let elRGoIE = eo('label',null,null,`for`,`settings-website-password`);
text(trans('Website Password'));
let eljW8Ck = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elYBZZo = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.website.password`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.website.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.password', ''))}`,`name`,`${(`settings.website.password`).toInputName()}`,`placeholder`,`${trans(`Website Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-password`);
elYBZZo.value = fval(Object.get(component.record, 'settings.website.password', ''));
let cndt8yY = elJVWoJ.formHandler.getError(`settings.website.password`);
this.setState('stdr5ug', cndt8yY);
if (cndt8yY) { 
let elTUEDo = eo('div','6rff',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.website.password`));
ec('div');
}ec('div');
}else if (cndhpvo) { 
let elPHDWm = eo('div',null,null,`class`,`form-group`);
elPHDWm.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.youtube`) };

            for (let className in elPHDWm.cls) {
                elPHDWm.classList.toggle(className, elPHDWm.cls[className]);
            }  
            let elM4Ge9 = eo('label',null,null,`for`,`settings-youtube`);
text(trans('Add Youtube url'));
let elq1Pmu = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el6XL0v = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.youtube', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.youtube`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.youtube`);}]},`value`,`${fval(Object.get(component.record, 'settings.youtube', ''))}`,`name`,`${(`settings.youtube`).toInputName()}`,`placeholder`,`${trans(`Add Youtube url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-youtube`);
el6XL0v.value = fval(Object.get(component.record, 'settings.youtube', ''));
let cndzf8k = elJVWoJ.formHandler.getError(`settings.youtube`);
this.setState('sttVW_A', cndzf8k);
if (cndzf8k) { 
let elpy5Ma = eo('div','hCYf',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.youtube`));
ec('div');
}ec('div');
}else if (cndPW3N) { 
let el4OlYC = eo('div',null,null,`class`,`form-group`);
el4OlYC.cls = {'group-error': !!elJVWoJ.formHandler.getError(`settings.link`) };

            for (let className in el4OlYC.cls) {
                el4OlYC.classList.toggle(className, el4OlYC.cls[className]);
            }  
            let elTAOed = eo('label',null,null,`for`,`settings-link`);
text(trans('Url'));
let elSjdiq = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elrvguv = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elJVWoJ.formHandler.addError(`settings.link`, 'required', trans('validation.required'));}return elJVWoJ.formHandler.removeError(`settings.link`);}]},`name`,`${(`settings.link`).toInputName()}`,`placeholder`,`${trans(`Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-link`);
let cndfa9j = elJVWoJ.formHandler.getError(`settings.link`);
this.setState('stEc61a', cndfa9j);
if (cndfa9j) { 
let elN9_kp = eo('div','98If',null,`class`,`alert alert-danger`);
text(elJVWoJ.formHandler.getError(`settings.link`));
ec('div');
}ec('div');
}let elj8Pg5 = eo('div');
let elcxy3l = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });