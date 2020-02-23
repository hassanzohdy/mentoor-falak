_Component({
                selector: 'resource-modal',
                c: 'ResourceModal', // c for component name
                unique: false, // flag to determine if the component object will be unique or not
                observable: true,
                observe: ['heading','submit','resourceType','project','record','isValidForm','isSending','type'],
                children: {cTMDVtogw:'flk-mdb-checkbox',cEW43Yw8R:'flk-image-input',cNPNCy8ok:'flk-file-input',ckHSAxJAC:'flk-modal'},
                render: function (component) {
                    component.modal = this._lc('ckHSAxJAC', {parent:component,props:{heading:component.heading},events:{onclose:function(e) {let $el = this; component.inputs.getEvent('close')()}},content:(flkModal) => {let elQ_sbb = eo('form',null,null, eventListeners, {onsubmit:[function(e) {
            this.formHandler.validate(e);
        },function(e) {e.preventDefault();e.stopImmediatePropagation(); if (typeof component.isValidForm != 'undefined' && ! component.isValidForm) return false;},function(e) {var $el = this;component.submit($el)}]});

                if (! elQ_sbb.formHandler) {
                    window.cfrmdlr = elQ_sbb.formHandler = new FormHandler(elQ_sbb, component);
                } else {
                    window.cfrmdlr = elQ_sbb.formHandler;
                }
            let elaCQV7 = ev('input',null,null, eventListeners, {oninput:[function(e) {component.resourceType = this.value;}]},`value`,`${fval(component.resourceType)}`,`name`,`${(`type`).toInputName()}`,`type`,`hidden`);
elaCQV7.value = fval(component.resourceType);
let cndrEv6 = component.project;
this.setState('stUYKVz', cndrEv6);
let cnd5USs = ['attachment', 'pdf'].includes(component.resourceType);
this.setState('stcdhRb', cnd5USs);
let cndnezy = component.resourceType == 'email';
this.setState('stYZVB6', cndnezy);
let cndRS2e = component.resourceType == 'ftp';
this.setState('stq3m_A', cndRS2e);
let cndrchT = component.resourceType == 'website';
this.setState('st3q8p_', cndrchT);
let cnd0fcg = component.resourceType == 'youtube';
this.setState('stLBipq', cnd0fcg);
let cndYhNH = component.resourceType == 'link';
this.setState('stzXvOy', cndYhNH);
if (cndrEv6) { 
let elLnhKE = ev('input','QDSf',null, eventListeners, {oninput:[function(e) {component.project.id = this.value;}]},`value`,`${fval(component.project.id)}`,`name`,`${(`project`).toInputName()}`,`type`,`hidden`);
elLnhKE.value = fval(component.project.id);
}let elzGVcF = eo('div',null,null,`class`,`form-group`);
elzGVcF.cls = {'group-error': !!elQ_sbb.formHandler.getError(`title`) };

            for (let className in elzGVcF.cls) {
                elzGVcF.classList.toggle(className, elzGVcF.cls[className]);
            }  
            let elv7YD6 = eo('label',null,null,`for`,`title`);
text(trans('Resource Title'));
let elGTCku = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eljrLCM = ev('input',null,null, eventListeners, {oninput:[function(e) {component.record.title = this.value;},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`title`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`title`);}]},`value`,`${fval(component.record.title)}`,`name`,`${(`title`).toInputName()}`,`placeholder`,`${trans(`Resource Title`)}`,`type`,`text`,`class`,`form-control`,`id`,`title`);
eljrLCM.value = fval(component.record.title);
let cndJPyP = elQ_sbb.formHandler.getError(`title`);
this.setState('st98Jwu', cndJPyP);
if (cndJPyP) { 
let elxw4ML = eo('div','U7wf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`title`));
ec('div');
}ec('div');
let elswp9a = eo('div',null,null,`class`,`form-group`);
elswp9a.cls = {'group-error': !!elQ_sbb.formHandler.getError(`description`) };

            for (let className in elswp9a.cls) {
                elswp9a.classList.toggle(className, elswp9a.cls[className]);
            }  
            let elHLwon = eo('label',null,null,`for`,`description`);
text(trans('Description'));
ec('label');
let elR3JZ4 = eo('textarea',null,null, eventListeners, {oninput:[function(e) {component.record.description = this.value;}]},`value`,`${fval(component.record.description)}`,`name`,`${(`description`).toInputName()}`,`placeholder`,`${trans(`Description`)}`,`type`,`textarea`,`class`,`form-control`,`id`,`description`);
elR3JZ4.value = fval(component.record.description);
ec('textarea');
ec('div');
let elsY5tk = eo('div',null,null,`class`,`pl-2`);
let cmpniPW = this._lc('cTMDVtogw', {parent:component,parentTop:flkModal,props:{checked:component.record.pinned},events:{onchange:function(e) {let $el = this; component.record.pinned = $el.checked}},boolAttrs:{checked:component.record.pinned},attrs:{name:`${(`pinned`).toInputName()}`,value:1,label:'Pin Resource'}});
ec('div');
let cnd22L3 = component.resourceType == 'image';
this.setState('stYeZ3r', cnd22L3);
let cnddBWc = cnd5USs;
this.setState('stGnmHK', cnddBWc);
let cnddiy0 = cndnezy;
this.setState('stdMxlp', cnddiy0);
let cndFfv5 = cndRS2e;
this.setState('stOjr_A', cndFfv5);
let cndpxdb = cndrchT;
this.setState('stwbArM', cndpxdb);
let cndTNwO = cnd0fcg;
this.setState('stklCIr', cndTNwO);
let cndPjCU = cndYhNH;
this.setState('stkWsfS', cndPjCU);
if (cnd22L3) { 
let cmpjMAA = this._lc('cEW43Yw8R', {parent:component,parentTop:flkModal,props:{src:component.record.attachment,required:true},attrs:{src:`${component.record.attachment}`,name:`${(`attachment`).toInputName()}`,label:'Resource Image',id:'attachment'},state:'stYeZ3r'});
}else if (cnddBWc) { 
let elk4Bex = eo('div',null,null,`class`,`m-t-2`);
let cmpMjt_ = this._lc('cNPNCy8ok', {parent:component,parentTop:flkModal,props:{accept:component.type == 'pdf' ? 'pdf' : null},content:(flkFileInput) => {let el1ifU8 = eo('i',null,null,`class`,`${fas('cloud-upload-alt') + ' icon'}`);
ec('i');
let elrq0fH = eo('strong',null,null,`class`,`ml-2`);
text(`Upload ${ component.type == 'pdf' ? 'PDF File' : 'Attachment' }`);
ec('strong');
},attrs:{name:`${(`attachment`).toInputName()}`,class:'btn btn-cyan bold'},state:'stGnmHK'});
ec('div');
}else if (cnddiy0) { 
let elZ62qY = eo('div',null,null,`class`,`form-group`);
elZ62qY.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.email.url`) };

            for (let className in elZ62qY.cls) {
                elZ62qY.classList.toggle(className, elZ62qY.cls[className]);
            }  
            let elpyfZN = eo('label',null,null,`for`,`settings-email-url`);
text(trans('Webmail Url'));
let elg16l1 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el7hdQa = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.email.url`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.email.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.url', ''))}`,`name`,`${(`settings.email.url`).toInputName()}`,`placeholder`,`${trans(`Webmail Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-url`);
el7hdQa.value = fval(Object.get(component.record, 'settings.email.url', ''));
let cndcm6w = elQ_sbb.formHandler.getError(`settings.email.url`);
this.setState('stxIzvm', cndcm6w);
if (cndcm6w) { 
let elMlTv8 = eo('div','zlFf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.email.url`));
ec('div');
}ec('div');
let elP3x5J = eo('div',null,null,`class`,`form-group`);
elP3x5J.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.email.email`) };

            for (let className in elP3x5J.cls) {
                elP3x5J.classList.toggle(className, elP3x5J.cls[className]);
            }  
            let elZICQG = eo('label',null,null,`for`,`settings-email-email`);
text(trans('Email Address'));
let el1EN_o = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elGwqnH = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.email', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.email.email`, 'required', trans('validation.required'));}else if (this.value && ! Is.email(this.value)) {return elQ_sbb.formHandler.addError(`settings.email.email`, 'email', trans('invalid-email-address'));}return elQ_sbb.formHandler.removeError(`settings.email.email`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.email', ''))}`,`name`,`${(`settings.email.email`).toInputName()}`,`placeholder`,`${trans(`Email Address`)}`,`type`,`email`,`class`,`form-control`,`id`,`settings-email-email`);
elGwqnH.value = fval(Object.get(component.record, 'settings.email.email', ''));
let cndL81U = elQ_sbb.formHandler.getError(`settings.email.email`);
this.setState('sttk2zO', cndL81U);
if (cndL81U) { 
let elovtZM = eo('div','qMnf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.email.email`));
ec('div');
}ec('div');
let elm90yF = eo('div',null,null,`class`,`form-group`);
elm90yF.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.email.password`) };

            for (let className in elm90yF.cls) {
                elm90yF.classList.toggle(className, elm90yF.cls[className]);
            }  
            let elzl2i9 = eo('label',null,null,`for`,`settings-email-password`);
text(trans('Email Password'));
let elgpg1O = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elS7HYs = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.email.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.email.password`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.email.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.email.password', ''))}`,`name`,`${(`settings.email.password`).toInputName()}`,`placeholder`,`${trans(`Email Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-email-password`);
elS7HYs.value = fval(Object.get(component.record, 'settings.email.password', ''));
let cndqKux = elQ_sbb.formHandler.getError(`settings.email.password`);
this.setState('stnOqGf', cndqKux);
if (cndqKux) { 
let el3FCRm = eo('div','i1wf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.email.password`));
ec('div');
}ec('div');
}else if (cndFfv5) { 
let eloKk3T = eo('div',null,null,`class`,`form-group`);
eloKk3T.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.ftp.host`) };

            for (let className in eloKk3T.cls) {
                eloKk3T.classList.toggle(className, eloKk3T.cls[className]);
            }  
            let eloLj9D = eo('label',null,null,`for`,`settings-ftp-host`);
text(trans('FTP Host'));
let el0XG0S = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elHoFfj = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.host', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.ftp.host`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.ftp.host`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.host', ''))}`,`name`,`${(`settings.ftp.host`).toInputName()}`,`placeholder`,`${trans(`FTP Host`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-host`);
elHoFfj.value = fval(Object.get(component.record, 'settings.ftp.host', ''));
let cndziCR = elQ_sbb.formHandler.getError(`settings.ftp.host`);
this.setState('stPkQiE', cndziCR);
if (cndziCR) { 
let elKNXTD = eo('div','qchf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.ftp.host`));
ec('div');
}ec('div');
let elO8X47 = eo('div',null,null,`class`,`form-group`);
elO8X47.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.ftp.username`) };

            for (let className in elO8X47.cls) {
                elO8X47.classList.toggle(className, elO8X47.cls[className]);
            }  
            let elZrgjT = eo('label',null,null,`for`,`settings-ftp-username`);
text(trans('FTP Username'));
let elLJyBS = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el1yQJ8 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.ftp.username`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.ftp.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.username', ''))}`,`name`,`${(`settings.ftp.username`).toInputName()}`,`placeholder`,`${trans(`FTP Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-username`);
el1yQJ8.value = fval(Object.get(component.record, 'settings.ftp.username', ''));
let cndVbmX = elQ_sbb.formHandler.getError(`settings.ftp.username`);
this.setState('sttFZPl', cndVbmX);
if (cndVbmX) { 
let ellknhL = eo('div','zyZf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.ftp.username`));
ec('div');
}ec('div');
let elITfa5 = eo('div',null,null,`class`,`form-group`);
elITfa5.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.ftp.password`) };

            for (let className in elITfa5.cls) {
                elITfa5.classList.toggle(className, elITfa5.cls[className]);
            }  
            let elo7JS8 = eo('label',null,null,`for`,`settings-ftp-password`);
text(trans('FTP Password'));
let el4s1eW = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let eln1B_I = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.ftp.password`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.ftp.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.password', ''))}`,`name`,`${(`settings.ftp.password`).toInputName()}`,`placeholder`,`${trans(`FTP Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-password`);
eln1B_I.value = fval(Object.get(component.record, 'settings.ftp.password', ''));
let cnd3hYz = elQ_sbb.formHandler.getError(`settings.ftp.password`);
this.setState('std8hiK', cnd3hYz);
if (cnd3hYz) { 
let el4VnHX = eo('div','0CEf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.ftp.password`));
ec('div');
}ec('div');
let elLnEMa = eo('div',null,null,`class`,`form-group`);
elLnEMa.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.ftp.protocol`) };

            for (let className in elLnEMa.cls) {
                elLnEMa.classList.toggle(className, elLnEMa.cls[className]);
            }  
            let ely79fK = eo('label',null,null,`for`,`settings-ftp-protocol`);
text(trans('FTP Port'));
let elXfe6g = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elhiCEA = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.ftp.port', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.ftp.protocol`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.ftp.protocol`);}]},`value`,`${fval(Object.get(component.record, 'settings.ftp.port', ''))}`,`name`,`${(`settings.ftp.protocol`).toInputName()}`,`placeholder`,`${trans(`FTP Port`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-ftp-protocol`);
elhiCEA.value = fval(Object.get(component.record, 'settings.ftp.port', ''));
let cndcDdr = elQ_sbb.formHandler.getError(`settings.ftp.protocol`);
this.setState('st1lueM', cndcDdr);
if (cndcDdr) { 
let elAMuja = eo('div','IGSf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.ftp.protocol`));
ec('div');
}ec('div');
}else if (cndpxdb) { 
let elFwScm = eo('div',null,null,`class`,`form-group`);
elFwScm.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.website.name`) };

            for (let className in elFwScm.cls) {
                elFwScm.classList.toggle(className, elFwScm.cls[className]);
            }  
            let elrmw0G = eo('label',null,null,`for`,`settings-website-name`);
text(trans('Website Name'));
let elYMpb4 = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elwNp5c = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.name', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.website.name`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.website.name`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.name', ''))}`,`name`,`${(`settings.website.name`).toInputName()}`,`placeholder`,`${trans(`Website Name`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-name`);
elwNp5c.value = fval(Object.get(component.record, 'settings.website.name', ''));
let cndWdNO = elQ_sbb.formHandler.getError(`settings.website.name`);
this.setState('stl7k8B', cndWdNO);
if (cndWdNO) { 
let elp0nLD = eo('div','0AWf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.website.name`));
ec('div');
}ec('div');
let elLlyAh = eo('div',null,null,`class`,`form-group`);
elLlyAh.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.website.url`) };

            for (let className in elLlyAh.cls) {
                elLlyAh.classList.toggle(className, elLlyAh.cls[className]);
            }  
            let elFh4i2 = eo('label',null,null,`for`,`settings-website-url`);
text(trans('Website Url'));
let elx4eu_ = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elqQlrl = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.url', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.website.url`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.website.url`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.url', ''))}`,`name`,`${(`settings.website.url`).toInputName()}`,`placeholder`,`${trans(`Website Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-url`);
elqQlrl.value = fval(Object.get(component.record, 'settings.website.url', ''));
let cndSM1T = elQ_sbb.formHandler.getError(`settings.website.url`);
this.setState('stmZGn4', cndSM1T);
if (cndSM1T) { 
let el5aKca = eo('div','aP4f',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.website.url`));
ec('div');
}ec('div');
let elkdR7a = eo('div',null,null,`class`,`form-group`);
elkdR7a.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.website.username`) };

            for (let className in elkdR7a.cls) {
                elkdR7a.classList.toggle(className, elkdR7a.cls[className]);
            }  
            let elU_JGe = eo('label',null,null,`for`,`settings-website-username`);
text(trans('Website Username'));
let elB8Koy = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elYdpW_ = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.username', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.website.username`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.website.username`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.username', ''))}`,`name`,`${(`settings.website.username`).toInputName()}`,`placeholder`,`${trans(`Website Username`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-username`);
elYdpW_.value = fval(Object.get(component.record, 'settings.website.username', ''));
let cndb1jT = elQ_sbb.formHandler.getError(`settings.website.username`);
this.setState('stJjbj7', cndb1jT);
if (cndb1jT) { 
let elPS_Xf = eo('div','7hMf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.website.username`));
ec('div');
}ec('div');
let elNp0BA = eo('div',null,null,`class`,`form-group`);
elNp0BA.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.website.password`) };

            for (let className in elNp0BA.cls) {
                elNp0BA.classList.toggle(className, elNp0BA.cls[className]);
            }  
            let elq1eNx = eo('label',null,null,`for`,`settings-website-password`);
text(trans('Website Password'));
let elZQ9gz = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elJ5Vt9 = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.website.password', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.website.password`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.website.password`);}]},`value`,`${fval(Object.get(component.record, 'settings.website.password', ''))}`,`name`,`${(`settings.website.password`).toInputName()}`,`placeholder`,`${trans(`Website Password`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-website-password`);
elJ5Vt9.value = fval(Object.get(component.record, 'settings.website.password', ''));
let cndbqmt = elQ_sbb.formHandler.getError(`settings.website.password`);
this.setState('stEh6iS', cndbqmt);
if (cndbqmt) { 
let elyRgJd = eo('div','eiof',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.website.password`));
ec('div');
}ec('div');
}else if (cndTNwO) { 
let elcSUde = eo('div',null,null,`class`,`form-group`);
elcSUde.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.youtube`) };

            for (let className in elcSUde.cls) {
                elcSUde.classList.toggle(className, elcSUde.cls[className]);
            }  
            let elKPurH = eo('label',null,null,`for`,`settings-youtube`);
text(trans('Add Youtube url'));
let elCagDn = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let el775xg = ev('input',null,null, eventListeners, {oninput:[function(e) {Object.set(component.record, 'settings.youtube', this.value);},function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.youtube`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.youtube`);}]},`value`,`${fval(Object.get(component.record, 'settings.youtube', ''))}`,`name`,`${(`settings.youtube`).toInputName()}`,`placeholder`,`${trans(`Add Youtube url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-youtube`);
el775xg.value = fval(Object.get(component.record, 'settings.youtube', ''));
let cnd2fSM = elQ_sbb.formHandler.getError(`settings.youtube`);
this.setState('st_PNYv', cnd2fSM);
if (cnd2fSM) { 
let elF2fRz = eo('div','XsIf',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.youtube`));
ec('div');
}ec('div');
}else if (cndPjCU) { 
let elmKK9h = eo('div',null,null,`class`,`form-group`);
elmKK9h.cls = {'group-error': !!elQ_sbb.formHandler.getError(`settings.link`) };

            for (let className in elmKK9h.cls) {
                elmKK9h.classList.toggle(className, elmKK9h.cls[className]);
            }  
            let elFgfrg = eo('label',null,null,`for`,`settings-link`);
text(trans('Url'));
let elgWdLs = eo('span',null,null,`title`,`${trans(`required`)}`,`class`,`required`);
text(`*`);
ec('span');
ec('label');
let elB0xal = ev('input',null,null, eventListeners, {oninput:[function(e) {let value = this.value.trim();if (Is.empty(value)) {return elQ_sbb.formHandler.addError(`settings.link`, 'required', trans('validation.required'));}return elQ_sbb.formHandler.removeError(`settings.link`);}]},`name`,`${(`settings.link`).toInputName()}`,`placeholder`,`${trans(`Url`)}`,`type`,`text`,`class`,`form-control`,`id`,`settings-link`);
let cndvohg = elQ_sbb.formHandler.getError(`settings.link`);
this.setState('stQ1L0t', cndvohg);
if (cndvohg) { 
let elMEFBm = eo('div','R4ef',null,`class`,`alert alert-danger`);
text(elQ_sbb.formHandler.getError(`settings.link`));
ec('div');
}ec('div');
}let elka_wJ = eo('div');
let eljad4O = eo('button',null,null, boolAttrs, {disabled:! component.isValidForm || component.isSending},`class`,`btn btn-success bold`);
text(`Save`);
ec('button');
ec('div');
ec('form');
}});

                    this.isReadyToGo();
                }
        });